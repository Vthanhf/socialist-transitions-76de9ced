import React, { useState, useMemo, useRef, useCallback } from "react";
import { ComposableMap, ZoomableGroup, Geographies, Geography, Marker } from "react-simple-maps";
import { Link } from "react-router-dom";
import { ethnicGroupsData, } from "@/data/ethnicGroupsData";
import { provinceCoordinates } from "@/data/provinceCoordinates";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
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

// Simple GeoJSON for Vietnam outline (simplified)
const SIMPLE_VIETNAM_GEOJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Vietnam" },
      geometry: {
        type: "MultiPolygon",
        coordinates: [[[[102.5, 8.5], [109.5, 8.5], [109.5, 23.5], [102.5, 23.5], [102.5, 8.5]]]]
      }
    }
  ]
};


const EthnicDistributionMap: React.FC = () => {
  const [selectedEthnicGroups, setSelectedEthnicGroups] = useState<SelectedEthnic[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDetailId, setSelectedDetailId] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipData>({
    x: 0,
    y: 0,
    visible: false,
    title: "",
    population: "",
    language: ""
  });
  const mapRef = useRef<HTMLDivElement>(null);

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

  // Hàm format dân số với dấu phân cách hàng nghìn
  const formatPopulation = (population: number): string => {
    return population.toLocaleString('vi-VN');
  };

  const handleCircleHover = useCallback(
    (event: React.MouseEvent<SVGCircleElement>, ethnicName: string, region: string, population: string, language: string) => {
      const rect = (event.currentTarget as SVGCircleElement).getBoundingClientRect();
      setTooltip({
        x: rect.left,
        y: rect.top - 10,
        visible: true,
        title: `${ethnicName} - ${region}`,
        population,
        language
      });
    },
    []
  );
const handleCircleLeave = useCallback(() => {
  setTooltip((prev) => ({
    ...prev,
    visible: false
  }));
}, []);
const renderEthnicCircles = () => {
  const circles: JSX.Element[] = [];

  selectedEthnicGroups.forEach((selected) => {
    const ethnic = ethnicGroupsData.find((e) => e.id === selected.id);
    if (!ethnic) return;

    ethnic.regions.forEach((region: string) => {
      const coord = provinceCoordinates[region.trim()];
      
      if (!coord) {
        console.warn(`Không tìm thấy tọa độ cho khu vực: ${region}`);
        return;
      }
        
      const baseRadius = 4;  
      const populationDensity = ethnic.population / (ethnic.regions.length * 1000000);
      const radius = baseRadius + Math.min(populationDensity * 3, 10);

      // --- PHẦN TẠO ĐỘ LỆCH TÙY CHỈNH ---
      let finalLng = coord.lng;
      let finalLat = coord.lat;

      // Nếu KHÔNG PHẢI là dân tộc Kinh, chúng ta mới tính toán độ lệch
      if (ethnic.id !== "kinh") {
        // Tìm vị trí của dân tộc này trong danh sách ĐANG CHỌN (trừ dân tộc Kinh ra để tính offset)
        // Việc này giúp các dân tộc thiểu số không bị đè lên nhau
        const offsetIndex = selectedEthnicGroups.findIndex(e => e.id === selected.id);
        const step = 0.04; // Độ rộng của mỗi bước lệch (tăng lên một chút để dễ nhìn hơn 0.02)
        if(offsetIndex >= 10){
          finalLng = coord.lng ;
        finalLat = coord.lat ;
        }
        finalLng = coord.lng + (offsetIndex * step);
        finalLat = coord.lat - (offsetIndex * step);
      }
      // ----------------------------------

      circles.push(
        <Marker key={`${selected.id}-${region}`} coordinates={[finalLng, finalLat]}>
          <g style={{ cursor: 'pointer' }}>
            <circle
              r={radius + 3}
              fill={ethnic.color}
              opacity={0.2}
              style={{ pointerEvents: 'none' }}
            />
            <circle
              r={radius}
              fill={ethnic.color}
              fillOpacity={0.8}  
              stroke="#ffffff"
              strokeWidth={1.2}
              className="ethnic-circle"
              onMouseEnter={(e) =>
                handleCircleHover(
                  e,
                  ethnic.name,
                  region,
                  formatPopulation(ethnic.population),
                  ethnic.language
                )
              }
              onMouseLeave={handleCircleLeave}
              onClick={() => setSelectedDetailId(ethnic.id)}
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                transition: "all 0.2s ease"
              }}
            />
          </g>
        </Marker>
      );
    });
  });

  return circles;
};

  return (
    <>
      {/* Navbar for ethnic distribution page */}
      <nav className="fixed top-0 left-0 right-0 h-11 bg-background/80 backdrop-blur-xl border-b border-border/50 z-50">
        <div className="max-w-[2000px] mx-auto px-6 flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground/70">
              Khám phá dân tộc
            </span>
          </div>
          <Link
            to="/"
            className="group relative px-3 py-1.5 text-[11px] font-medium tracking-wide transition-all duration-300 text-muted-foreground/60 hover:text-foreground/80"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span className="text-[9px] font-mono transition-colors duration-300 text-muted-foreground/30 group-hover:text-muted-foreground/50">
                ←
              </span>
              Quay lại
            </span>
          </Link>
        </div>
      </nav>

      {/* Main content container with top margin for navbar */}
      <div className="ethnic-distribution-container" style={{ marginTop: "44px", height: "calc(100vh - 44px)" }}>
      {/* SIDEBAR */}
      <div className="ethnic-sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title">🗺️ Phân bố dân tộc Việt Nam</h2>
          <p className="subtitle">Chọn dân tộc để xem phân bố trên bản đồ</p>
        </div>

        <div className="search-section">
          <Input
            placeholder="Tìm kiếm dân tộc..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {selectedEthnicGroups.length > 0 && (
          <div className="selected-section">
            <div className="selected-header">
              <span className="selected-count">
                Đã chọn: {selectedEthnicGroups.length}/{ethnicGroupsData.length}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedEthnicGroups([])}
                className="clear-button"
              >
                Xóa tất cả
              </Button>
            </div>
            <div className="selected-badges">
              {selectedEthnicGroups.map((ethnic) => (
                <Badge
                  key={ethnic.id}
                  className="selected-badge"
                  style={{
                    backgroundColor: ethnicGroupsData.find(e => e.id === ethnic.id)?.color || "#999",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleEthnicGroup(ethnic.id, ethnic.name)}
                >
                  {ethnic.name} ✕
                </Badge>
              ))}
            </div>
          </div>
        )}

        <ScrollArea className="ethnic-list">
          <div className="ethnic-grid">
            {filteredEthnicGroups.length > 0 ? (
              filteredEthnicGroups.map((group) => (
                <div
                  key={group.id}
                  className={`ethnic-item ${selectedEthnicGroups.some((e) => e.id === group.id) ? "selected" : ""}`}
                  onClick={() => toggleEthnicGroup(group.id, group.name)}
                  title={group.description}
                >
                  <div
                    className="ethnic-color-indicator"
                    style={{ backgroundColor: group.color }}
                  />
                  <div className="ethnic-info">
                    <h4 className="ethnic-name">{group.name}</h4>
                    <p className="ethnic-pop">
                      {formatPopulation(group.population)}
                    </p>
                  </div>
                  {selectedEthnicGroups.some((e) => e.id === group.id) && (
                    <div className="checkmark">✓</div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-results">
                Không tìm thấy dân tộc "{searchQuery}"
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* MAP AREA */}
      <div className="map-container" ref={mapRef}>
        <ComposableMap projection="geoMercator"
    projectionConfig={{
    scale: 2200,          
    center: [106, 16.5],  
    rotate: [-2, 0, 0]    
  }}
  style={{ width: "100%", height: "100%" }}>
          <ZoomableGroup center={[106, 16]} zoom={1}>
            {/* Vietnam boundary - simplified with Geography */}
            <Geographies geography="https://raw.githubusercontent.com/TungTh/tungth.github.io/master/data/vn-provinces.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#e2e8f0",      // ĐỔI MÀU: Xám đậm hơn một chút (Đất liền)
                        stroke: "#64748b",    // ĐỔI MÀU: Viền xám đậm rõ rệt
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#cbd5e1",      // Đậm hơn khi di chuột qua
                        stroke: "#475569",
                        strokeWidth: 1,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#94a3b8",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Ethnic group circles */}
            {renderEthnicCircles()}
            <Marker coordinates={[112.0, 16.5]}>
              <circle r={3} fill="#64748b" />
              <text y={15} textAnchor="middle" fill="#475569" fontSize={12} fontWeight="bold" style={{ pointerEvents: "none" }}>
                QĐ. Hoàng Sa
              </text>
            </Marker>

            {/* Điểm Quần đảo Trường Sa */}
            <Marker coordinates={[113.0, 9.0]}>
              <circle r={3} fill="#64748b" />
              <text y={15} textAnchor="middle" fill="#475569" fontSize={12} fontWeight="bold" style={{ pointerEvents: "none" }}>
                QĐ. Trường Sa
              </text>
            </Marker>
          </ZoomableGroup>
        </ComposableMap>

        {/* Tooltip */}
        {tooltip.visible && (
          <div
            className="ethnic-tooltip"
            style={{
              position: "fixed",
              left: `${tooltip.x}px`,
              top: `${tooltip.y}px`,
              zIndex: 10,
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{tooltip.title}</div>
            <div style={{ fontSize: "12px", marginBottom: "2px" }}>
              <strong>Dân số:</strong> {tooltip.population}
            </div>
            <div style={{ fontSize: "12px" }}>
              <strong>Ngôn ngữ:</strong> {tooltip.language}
            </div>
          </div>
        )}

        {/* Empty state overlay */}
        {selectedEthnicGroups.length === 0 && (
          <div className="map-overlay-message">
            <div className="message-content">
              <h3>🎯 Chọn một hoặc nhiều dân tộc từ danh sách bên trái</h3>
              <p>Bản đồ sẽ hiển thị vùng phân bố của các dân tộc bạn chọn</p>
            </div>
          </div>
        )}

        {/* Detail Panel */}
        {selectedDetailId && (() => {
          const selectedGroup = ethnicGroupsData.find(g => g.id === selectedDetailId);
          return selectedGroup ? (
            <div className="ethnic-detail-panel">
              <button 
                className="detail-close-btn"
                onClick={() => setSelectedDetailId(null)}
              >
                ✕
              </button>
              <div className="detail-image">
                {selectedGroup.image && (
                  <img 
                    src={selectedGroup.image} 
                    alt={selectedGroup.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
              </div>
              <div className="detail-content">
                <h2 className="detail-name">{selectedGroup.name}</h2>
                <p className="detail-en-name">{selectedGroup.enName}</p>
                
                <div className="detail-section">
                  <h4 className="detail-label">Dân số</h4>
                  <p className="detail-value">{formatPopulation(selectedGroup.population)} người</p>
                </div>

                <div className="detail-section">
                  <h4 className="detail-label">Ngôn ngữ</h4>
                  <p className="detail-value">{selectedGroup.language}</p>
                </div>

                {selectedGroup.clothing && (
                  <div className="detail-section">
                    <h4 className="detail-label">Trang phục</h4>
                    <p className="detail-value">{selectedGroup.clothing}</p>
                  </div>
                )}

                {selectedGroup.traditions && (
                  <div className="detail-section">
                    <h4 className="detail-label">Truyền thống</h4>
                    <p className="detail-value">{selectedGroup.traditions}</p>
                  </div>
                )}

                <div className="detail-section">
                  <h4 className="detail-label">Mô tả</h4>
                  <p className="detail-value">{selectedGroup.description}{selectedGroup.hint}</p>
                </div>

                {selectedGroup.regions && selectedGroup.regions.length > 0 && (
                  <div className="detail-section">
                    <h4 className="detail-label">Vùng phân bố</h4>
                    <div className="detail-regions">
                      {selectedGroup.regions.slice(0, 5).map((region, idx) => (
                        <span key={idx} className="detail-region-badge">{region}</span>
                      ))}
                      {selectedGroup.regions.length > 5 && (
                        <span className="detail-region-badge">+{selectedGroup.regions.length - 5}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : null;
        })()}

        {/* Sources section */}
        <div className="sources-footer">
          <div className="sources-content">
            <span className="sources-label">Nguồn:</span>
            <a 
              href="https://vi.wikipedia.org/wiki/Các_dân_tộc_tại_Việt_Nam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="sources-link"
            >
              Wikipedia - Các dân tộc tại Việt Nam
            </a>
            <span className="sources-separator">•</span>
            <a 
              href="http://www.cema.gov.vn/gioi-thieu/cong-dong-54-dan-toc.htm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="sources-link"
            >
              Cơm - Cộng đồng 54 dân tộc
            </a>
            <span className="sources-separator">•</span>
            <a 
              href="https://dantocmiennui.baotintuc.vn/nations.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="sources-link"
            >
              Báo Tin Tức - Dân tộc miền núi
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default EthnicDistributionMap;