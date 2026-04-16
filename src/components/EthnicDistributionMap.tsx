import React, { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { ComposableMap, ZoomableGroup, Geographies, Geography, Marker } from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ethnicGroupsData } from "@/data/ethnicGroupsData";
import { provinceCoordinates } from "@/data/provinceCoordinates";
import { provinceElevationData } from "@/data/provinceElevationData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Search, Check, Info, MapPin, Users, Languages, Shirt, Sparkles, BarChart3 } from "lucide-react";
import "./EthnicDistributionMap.css";

interface SelectedEthnic {
  id: string;
  name: string;
}

interface TooltipData {
  x: number;
  y: number;
  visible: boolean;
  title: string;
  population: string;
  language: string;
}

const EthnicDistributionMap: React.FC = () => {
  const [selectedEthnicGroups, setSelectedEthnicGroups] = useState<SelectedEthnic[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDetailId, setSelectedDetailId] = useState<string | null>(null);
  const [showElevationLegend, setShowElevationLegend] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showEmptyMessage, setShowEmptyMessage] = useState(true);
  const [showRealMap, setShowRealMap] = useState(true);
  const [showRealMapModal, setShowRealMapModal] = useState(false);
  const [hoverSidebar, setHoverSidebar] = useState(false);
  const [hoverRealMap, setHoverRealMap] = useState(false);
  const [hoverLegend, setHoverLegend] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipData>({
    x: 0,
    y: 0,
    visible: false,
    title: "",
    population: "",
    language: ""
  });
const getElevationColor = (provinceName: string) => {
  if (!provinceName) return "#3b82f6";

  // Hàm chuẩn hóa để loại bỏ "Tỉnh", "Thành phố" và dấu gạch ngang
  const normalize = (str: string) => {
    return str
      .replace(/Tỉnh|Thành phố|Province|City/g, "") // Xóa các từ thừa
      .replace(/-/g, " ")                           // Thay gạch ngang bằng khoảng trắng
      .replace(/\s+/g, " ")                         // Xóa khoảng trắng thừa
      .trim();
  };

  const searchName = normalize(provinceName);

  // Tìm kiếm trong provinceElevationData
  // Chúng ta so sánh sau khi đã normalize cả 2 bên
  const elevationKey = Object.keys(provinceElevationData).find(key => {
    return normalize(key) === searchName;
  });

  const h = elevationKey ? provinceElevationData[elevationKey] : 0;

  // Trình tự màu sắc dựa trên độ cao
  if (h >= 800) return "#b91c1c"; // Đỏ (Cao)
  if (h >= 400) return "#f87171"; // Đỏ nhạt
  if (h >= 100) return "#fde047"; // Vàng
  if (h >= 50)  return "#93c5fd"; // Xanh nhạt
  return "#3b82f6";              // Xanh đậm (Thấp)
};
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    selectedEthnicGroups.forEach((selected) => {
      const ethnic = ethnicGroupsData.find(e => e.id === selected.id);
      if (ethnic?.image) {
        const img = new Image();
        img.src = ethnic.image;
      }
    });
  }, [selectedEthnicGroups]);

  const filteredEthnicGroups = useMemo(() => {
    return ethnicGroupsData.filter(
      (group) =>
        group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        group.enName?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleEthnicGroup = (id: string, name: string) => {
    setSelectedEthnicGroups((prev) =>
      prev.some((e) => e.id === id)
        ? prev.filter((e) => e.id !== id)
        : [...prev, { id, name }]
    );
  };

  const formatPopulation = (population: number): string => {
    return population.toLocaleString('vi-VN');
  };

  const handleCircleHover = useCallback(
    (event: React.MouseEvent<SVGCircleElement>, ethnicName: string, region: string, population: string, language: string, ethnicId: string) => {
      const rect = (event.currentTarget as SVGCircleElement).getBoundingClientRect();
      setTooltip({
        x: rect.left,
        y: rect.top - 10,
        visible: true,
        title: `${ethnicName} - ${region}`,
        population,
        language
      });
    }, []
  );

  const handleCircleLeave = useCallback(() => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  }, []);

  const renderEthnicCircles = () => {
    const circles: JSX.Element[] = [];
    selectedEthnicGroups.forEach((selected) => {
      const ethnic = ethnicGroupsData.find((e) => e.id === selected.id);
      if (!ethnic) return;

      ethnic.regions.forEach((region: string) => {
        const coord = provinceCoordinates[region.trim()];
        if (!coord) return;
        
        const baseRadius = 4;  
        const populationDensity = ethnic.population / (ethnic.regions.length * 1000000);
        const radius = baseRadius + Math.min(populationDensity * 3, 10);

        let finalLng = coord.lng;
        let finalLat = coord.lat;

        if (ethnic.id !== "kinh") {
          const offsetIndex = selectedEthnicGroups.findIndex(e => e.id === selected.id);
          const step = 0.04;
          if(offsetIndex < 10) {
            finalLng = coord.lng + (offsetIndex * step);
            finalLat = coord.lat - (offsetIndex * step);
          }
        }

        circles.push(
          <Marker key={`${selected.id}-${region}`} coordinates={[finalLng, finalLat]}>
            <g style={{ cursor: 'pointer' }}>
              <circle r={radius + 3} fill={ethnic.color} opacity={0.2} style={{ pointerEvents: 'none' }} />
              <circle
                r={radius}
                fill={ethnic.color}
                fillOpacity={0.8}  
                stroke="#ffffff"
                strokeWidth={1.2}
                className="ethnic-circle transition-all"
                onMouseEnter={(e) => handleCircleHover(e, ethnic.name, region, formatPopulation(ethnic.population), ethnic.language, ethnic.id)}
                onMouseLeave={handleCircleLeave}
                onClick={() => setSelectedDetailId(ethnic.id)}
              />
            </g>
          </Marker>
        );
      });
    });
    return circles;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-50">
      {/* --- DESIGN NAVBAR MỚI (Xuyên thấu) --- */}
      <div className="fixed top-0 left-0 right-0 h-11 bg-black/10 backdrop-blur-md border-b border-white/10 z-50 pointer-events-none" />
      <Navbar />

      {/* --- DESIGN SIDEBAR MỚI (Glassmorphism) --- */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div 
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-6 top-20 bottom-24 w-80 z-40 flex flex-col bg-white/40 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <div className="p-6 pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Dân tộc Việt Nam
                </h2>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Bản đồ phân bố dân cư</p>
              </div>
              <button
                onClick={() => setShowSidebar(false)}
                title="Ẩn sidebar"
              >
                <span className="text-lg">←</span>
              </button>
            </div>

            <div className="px-6 py-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  placeholder="Tìm dân tộc..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/50 border-white/20 rounded-xl h-10 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            <ScrollArea className="flex-1 px-4 mt-4">
              <div className="space-y-1.5 pb-4">
                {filteredEthnicGroups.map((group) => {
                  const isSelected = selectedEthnicGroups.some((e) => e.id === group.id);
                  return (
                    <div
                      key={group.id}
                      className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all border ${
                        isSelected 
                          ? "bg-white/80 border-white shadow-sm translate-x-1" 
                          : "hover:bg-white/30 border-transparent"
                      }`}
                      onClick={() => toggleEthnicGroup(group.id, group.name)}
                    >
                      <div className="w-3 h-3 rounded-full shadow-inner" style={{ backgroundColor: group.color }} />
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-700">{group.name}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">{formatPopulation(group.population)} người</p>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                    </div>
                  );
                })}
              </div>
            </ScrollArea>

            {selectedEthnicGroups.length > 0 && (
              <div className="p-4 bg-white/20 border-t border-white/20 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-500 uppercase">Đã chọn: {selectedEthnicGroups.length}</span>
                <Button variant="ghost" size="sm" onClick={() => setSelectedEthnicGroups([])} className="h-7 text-[10px] font-bold text-red-500 hover:bg-red-50 hover:text-red-600">XÓA TẤT CẢ</Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NÚT TOGGLE SIDEBAR (Khi sidebar bị ẩn) --- */}
      {!showSidebar && (
        <motion.button
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => setShowSidebar(true)}
          onMouseEnter={() => setHoverSidebar(true)}
          onMouseLeave={() => setHoverSidebar(false)}
          className="fixed left-6 top-20 z-30 w-12 h-12 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hover:bg-white/60 flex items-center justify-center transition-all"
          title="Hiển thị sidebar"
        >
          <AnimatePresence mode="wait">
            {hoverSidebar ? (
              <motion.div
                key="chart"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Users className="w-6 h-6 text-slate-700" />
              </motion.div>
            ) : (
              <motion.span
                key="arrow"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -180 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                →
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      )}

      {/* --- GIỮ NGUYÊN MAP AREA --- */}
      <div 
        className="absolute inset-0 z-0" 
        ref={mapRef}
        style={{
          background: 'linear-gradient(135deg, #c0e8f0 0%, #a8dce8 50%, #b0e5f0 100%)'
        }}
      >
        <ComposableMap projection="geoMercator"
          projectionConfig={{ scale: 2200, center: [106, 16.5], rotate: [-2, 0, 0] }}
          style={{ width: "100%", height: "100%" }}>
          <ZoomableGroup center={[106, 16]} zoom={1}>
          <Geographies geography="https://raw.githubusercontent.com/TungTh/tungth.github.io/master/data/vn-provinces.json">
 {({ geographies }) =>
  geographies.map((geo) => {

    const provinceName = geo.properties.Ten; 
    
    const fillColor = getElevationColor(provinceName);
    return (
      <Geography
        key={geo.rsmKey}
        geography={geo}
        style={{
          default: { 
            fill: fillColor, 
            stroke: "#ffffff", 
            strokeWidth: 0.2, 
            outline: "none" 
          },
          hover: { fill: "#475569", outline: "none" },
        }}
      />
    );
  })
}
</Geographies>
            {renderEthnicCircles()}
            <Marker coordinates={[112.0, 16.5]}>
              <circle r={3} fill="#64748b" />
              <text y={15} textAnchor="middle" fill="#475569" fontSize={10} fontWeight="bold">QĐ. Hoàng Sa</text>
            </Marker>
            <Marker coordinates={[113.0, 9.0]}>
              <circle r={3} fill="#64748b" />
              <text y={15} textAnchor="middle" fill="#475569" fontSize={10} fontWeight="bold">QĐ. Trường Sa</text>
            </Marker>
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Tooltip & Messages */}
      {tooltip.visible && (
        <div className="ethnic-tooltip fixed pointer-events-none px-3 py-2 bg-white/90 backdrop-blur-md border border-white shadow-xl rounded-xl z-[100] text-slate-800"
          style={{ left: `${tooltip.x + 10}px`, top: `${tooltip.y - 10}px` }}>
          <div className="font-bold text-sm">{tooltip.title}</div>
          <div className="text-[10px] opacity-70">Dân số: {tooltip.population} • Ngôn ngữ: {tooltip.language}</div>
        </div>
      )}

      <AnimatePresence>
  {showEmptyMessage && selectedEthnicGroups.length === 0 && (
    <motion.div 
      initial={{ opacity: 0, y: 20, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: 20, x: "-50%" }}
      className="fixed bottom-12 left-1/2 z-40 bg-white/10 backdrop-blur-2xl px-8 py-4 rounded-2xl border border-white/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] min-w-[320px]"
    >
      {/* Nút X ở góc trên bên phải - Dùng absolute chuẩn */}
      <button
        onClick={() => setShowEmptyMessage(false)}
        className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center transition-all hover:bg-slate-200/50 text-slate-400 hover:text-slate-600 text-xs"
        title="Đóng"
      >
        ✕
      </button>

      {/* Nội dung thông báo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
          <Info className="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-700">Khám phá bản đồ</p>
          <p className="text-[11px] text-slate-500 font-medium">Chọn dân tộc ở Sidebar để xem vùng phân bố</p>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      {/* --- DETAIL PANEL (Giữ nguyên logic thiết kế cũ nhưng Glassmorphism) --- */}
      <AnimatePresence>
        {selectedDetailId && (() => {
          const group = ethnicGroupsData.find(g => g.id === selectedDetailId);
          return group && (
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              className="fixed right-6 top-20 bottom-24 w-96 z-50 bg-white/80 backdrop-blur-2xl shadow-2xl rounded-[2.5rem] border border-white overflow-hidden flex flex-col"
            >
              <button onClick={() => setSelectedDetailId(null)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center hover:bg-white transition-all">✕</button>
              <div className="h-48 w-full">
                <img src={group.image} alt={group.name} className="w-full h-full object-cover" />
              </div>
              <ScrollArea className="flex-1 p-8 pt-6">
                <h2 className="text-3xl font-black text-slate-900">{group.name}</h2>
                <p className="text-sm text-slate-500 mb-4">{group.enName}</p>
                
                {/* Dân số & Ngôn ngữ */}
                <div className="mt-4 space-y-3 mb-6">
                  <div className="flex gap-4">
                    <div className="flex-1 p-3 bg-blue-500/10 rounded-2xl border border-blue-100">
                      <Users className="w-4 h-4 text-blue-600 mb-1" />
                      <p className="text-[10px] font-bold text-blue-400 uppercase">Dân số</p>
                      <p className="font-bold text-slate-700">{formatPopulation(group.population)}</p>
                    </div>
                    <div className="flex-1 p-3 bg-purple-500/10 rounded-2xl border border-purple-100">
                      <Languages className="w-4 h-4 text-purple-600 mb-1" />
                      <p className="text-[10px] font-bold text-purple-400 uppercase">Ngôn ngữ</p>
                      <p className="font-bold text-slate-700">{group.language}</p>
                    </div>
                  </div>
                </div>

                {/* Giới thiệu */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Giới thiệu</p>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{group.description}</p>
                </div>

                {/* Khu vực */}
                {group.regions && group.regions.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <MapPin className="w-3 h-3" />Khu vực phân bố
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.regions.map((region, idx) => (
                        <Badge key={idx} variant="outline" className="bg-teal-50 border-teal-200 text-teal-700">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trang phục */}
                {group.clothing && (
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Shirt className="w-3 h-3" />Trang phục truyền thống
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{group.clothing}</p>
                  </div>
                )}

                {/* Truyền thống */}
                {group.traditions && (
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Sparkles className="w-3 h-3" />Truyền thống và lễ hội
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{group.traditions}</p>
                  </div>
                )}
              </ScrollArea>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* --- REAL MAP CARD --- */}
      <AnimatePresence>
        {showRealMap && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed right-6  top-20 z-30 w-72 h-96 rounded-2xl border border-white/50 shadow-2xl overflow-hidden group"
            style={{
              backgroundImage: 'url(/assets/bando.avif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            
            <div className="relative h-full flex flex-col justify-between p-6">
              <div
                onClick={() => setShowRealMapModal(true)}
                className="flex-1 cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center"
              >
                <h3 className="text-xl font-black text-white drop-shadow-lg">
                  🗺️ Bản đồ thực tế
                </h3>
              </div>
              
              <button
                onClick={() => setShowRealMap(false)}
                className="w-8 h-8 rounded-lg  hover:bg-white/10 flex items-center justify-center transition-all self-end"
                title="Ẩn bản đồ"
              >
                <span className="text-lg">→</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NÚT TOGGLE REAL MAP (Khi card bị ẩn) --- */}
      {!showRealMap && (
        <motion.button
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => setShowRealMap(true)}
          onMouseEnter={() => setHoverRealMap(true)}
          onMouseLeave={() => setHoverRealMap(false)}
          className="fixed right-6 top-20 z-30 w-12 h-12 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hover:bg-white/60 flex items-center justify-center transition-all"
          title="Hiển thị bản đồ"
        >
          <AnimatePresence mode="wait">
            {hoverRealMap ? (
              <motion.div
                key="chart"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="w-6 h-6 text-slate-700" />
              </motion.div>
            ) : (
              <motion.span
                key="arrow"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -180 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                ←
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      )}

      {/* --- ELEVATION LEGEND CARD --- */}
      <AnimatePresence>
        {showElevationLegend && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed right-6 bottom-20 z-30 w-72 bg-white/30 backdrop-blur-2xl rounded-2xl border border-white/50 shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-black text-slate-800 flex items-center gap-2">
                  📊 Chú thích độ cao
                </h3>
                <button
                  onClick={() => setShowElevationLegend(false)}
                >
                  <span className="text-lg">→</span>
                </button>
              </div>

              <div className="space-y-3">
                {/* Màu 1: Đỏ - Rất cao */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg shadow-md" style={{ backgroundColor: "#b91c1c" }} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">Núi cao</p>
                    <p className="text-xs text-slate-600">≥ 800m</p>
                  </div>
                </div>

                {/* Màu 2: Đỏ nhạt - Cao */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg shadow-md" style={{ backgroundColor: "#f87171" }} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">Núi thấp & Cao nguyên</p>
                    <p className="text-xs text-slate-600">400m - 799m</p>
                  </div>
                </div>

                {/* Màu 3: Vàng - Trung du */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg shadow-md" style={{ backgroundColor: "#fde047" }} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">Trung du & Đồi lượn sóng</p>
                    <p className="text-xs text-slate-600">100m - 399m</p>
                  </div>
                </div>

                {/* Màu 4: Xanh nhạt - Ven biển */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg shadow-md" style={{ backgroundColor: "#93c5fd" }} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">Bán sơn địa & Thềm phù sa cổ</p>
                    <p className="text-xs text-slate-600">50m - 99m</p>
                  </div>
                </div>

                {/* Màu 5: Xanh đậm - Đồng bằng */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg shadow-md" style={{ backgroundColor: "#3b82f6" }} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">Đồng bằng & Hạ lưu sông</p>
                    <p className="text-xs text-slate-600">&lt; 50m</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NÚT TOGGLE LEGEND (Khi card bị ẩn) --- */}
      {!showElevationLegend && (
        <motion.button
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => setShowElevationLegend(true)}
          onMouseEnter={() => setHoverLegend(true)}
          onMouseLeave={() => setHoverLegend(false)}
          className="fixed right-6 bottom-32 z-30 w-12 h-12 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 shadow-lg hover:bg-white/60 flex items-center justify-center transition-all"
          title="Hiển thị chú thích độ cao"
        >
          <AnimatePresence mode="wait">
            {hoverLegend ? (
              <motion.div
                key="chart"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <BarChart3 className="w-6 h-6 text-slate-700" />
              </motion.div>
            ) : (
              <motion.span
                key="arrow"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: -180 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                ←
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      )}

      {/* --- REAL MAP MODAL --- */}
<AnimatePresence>
  {showRealMapModal && (
    <>
      {/* Overlay: Làm tối nền hoàn toàn để nổi bật ảnh */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowRealMapModal(false)}
        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] cursor-zoom-out"
      />
      
      {/* Container chứa ảnh: Chiếm trọn màn hình */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
      >
        <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
          {/* Nút X nằm tách biệt ở góc trên bên phải */}
          <button
            onClick={() => setShowRealMapModal(false)}
            className="absolute top-10 right-10 w-14 h-14 rounded-full bg-white/10 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 z-20 group"
          >
            <span className="text-2xl transition-transform group-hover:rotate-90">✕</span>
          </button>

          {/* ẢNH CHÍNH: Dùng thẻ img để tận dụng object-contain (Full màn hình mà không mất tỷ lệ) */}
          <img 
            src="/assets/bando.avif" 
            alt="Bản đồ thực tế"
            className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()} 
          />

          {/* Hint ở dưới cùng */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50">
            <p className="text-white text-xs font-bold uppercase tracking-widest">
              Bấm vào vùng đen để đóng
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

      {/* --- GIỮ NGUYÊN PHẦN NGUỒN --- */}
      <div className="sources-footer fixed bottom-0 left-0 right-0 z-40 bg-white/60 backdrop-blur-md border-t border-white/20 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-6">
          <span className="text-[10px] font-black text-slate-400 uppercase">Nguồn:</span>
          <div className="flex gap-4">
            <a href="https://vi.wikipedia.org/wiki/Các_dân_tộc_tại_Việt_Nam" target="_blank" className="text-[10px] font-bold text-slate-500 hover:text-blue-600 transition-colors">Wikipedia</a>
            <a href="http://www.cema.gov.vn" target="_blank" className="text-[10px] font-bold text-slate-500 hover:text-blue-600 transition-colors">Cổng thông tin dân tộc</a>
            <a href="https://baotintuc.vn" target="_blank" className="text-[10px] font-bold text-slate-500 hover:text-blue-600 transition-colors">Báo Tin Tức</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthnicDistributionMap;