import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

/* ─── Data ─── */
const LEFT_ITEMS = [
  { id: "l1", label: "Sống chung hòa bình" },
  { id: "l2", label: "Đại diện chính trị" },
  { id: "l3", label: "Hiến pháp bảo hộ" },
  { id: "l4", label: "Tiếng nói ngang nhau" },
  { id: "l5", label: "Quyền bầu cử & ứng cử" },
];

const CORRECT_ITEMS = [
  { id: "c1", label: "Hạ tầng giao thông" },
  { id: "c2", label: "Giáo dục chất lượng cao" },
  { id: "c3", label: "Y tế bản làng" },
  { id: "c4", label: "Vốn vay sản xuất" },
  { id: "c5", label: "Bảo tồn bản sắc" },
  { id: "c6", label: "Phổ cập công nghệ" },
];

const WRONG_ITEMS = [
  { id: "w1", label: "Trợ cấp thụ động" },
  { id: "w2", label: "Đồng nhất văn hóa" },
  { id: "w3", label: "Đầu tư dàn trải" },
  { id: "w4", label: "Đặc quyền đặc lợi" },
  { id: "w5", label: "Chỉ hô khẩu hiệu" },
];

// Explanations for each item
const EXPLANATIONS: Record<string, string> = {
  "c1": "Xây dựng đường xá, cầu cống. Đây là \"mạch máu\" kinh tế; có đường thì hàng hóa mới lưu thông, người dân mới tiếp cận được với thị trường và thế giới bên ngoài.",
  "c2": "Không chỉ là xóa mù chữ, mà là đào tạo nghề, nâng cao trình độ dân trí. Đây là cách bền vững nhất để người dân tự quyết định vận mệnh của mình.",
  "c3": "Đưa dịch vụ chăm sóc sức khỏe về tận vùng sâu vùng xa. Đảm bảo nguồn lực con người (sức khỏe) là nền tảng cốt yếu nhất của sự phát triển.",
  "c4": "Thay vì cho tiền mặt để tiêu xài, Nhà nước cho vay vốn ưu đãi để người dân mua giống, phân bón, máy móc... giúp họ \"học cách câu cá\" thay vì \"nhận con cá\".",
  "c5": "Phát triển kinh tế nhưng không làm mất đi tiếng nói, trang phục, lễ hội truyền thống. Đây là việc giữ gìn \"hồn cốt\" của mỗi dân tộc trong cộng đồng chung.",
  "c6": "Đưa internet và kiến thức số về vùng cao. Giúp thu hẹp khoảng cách tri thức giữa miền xuôi và miền ngược ngay lập tức.",
  "w1": "Chỉ lo phát tiền, gạo cứu trợ mà không tạo ra sinh kế. Điều này dễ tạo tâm lý ỷ lại, chờ đợi vào Nhà nước, khiến người dân khó thoát nghèo bền vững.",
  "w2": "Bắt các dân tộc thiểu số phải sống, nói và làm mọi thứ y hệt dân tộc đa số. Điều này vi phạm nguyên tắc tôn trọng bản sắc và làm nghèo đi kho tàng văn hóa quốc gia.",
  "w3": "Có bao nhiêu tiền cũng chia đều mỗi nơi một ít mà không có trọng tâm. Kết quả là công trình nào cũng dở dang, kém hiệu quả, lãng phí nguồn lực quốc gia.",
  "w4": "Cho phép một nhóm hoặc cá nhân nào đó có quyền lợi vượt lên trên pháp luật hoặc lợi dụng chính sách dân tộc để trục lợi cá nhân. Điều này đi ngược lại nguyên tắc \"Bình đẳng\".",
  "w5": "Chỉ nói suông về bình đẳng trên văn bản, trong các cuộc họp mà không có hành động thực tế, không có ngân sách và con người thực hiện cụ thể.",
};

// Accent fills using HSL from design tokens
const DOT_FILLS = [
  "hsl(348 62% 28%)",      // primary
  "hsl(348 62% 40%)",      // lighter crimson
  "hsl(40 40% 50%)",       // gold
  "hsl(210 17% 50%)",      // steel
  "hsl(348 62% 55%)",      // rose
  "hsl(40 50% 60%)",       // amber
  "hsl(200 40% 45%)",      // teal
  "hsl(348 40% 45%)",      // muted crimson
  "hsl(30 50% 55%)",       // copper
  "hsl(180 30% 45%)",      // sage
  "hsl(348 62% 35%)",      // deep crimson
];

const ERROR_FILL = "hsl(0 0% 65%)";

interface DroppedItem {
  id: string;
  label: string;
  isWrong: boolean;
  fillIndex: number;
}

/* ─── Tooltip Dot ─── */
function ScaleDot({
  label,
  fill,
  isError,
  index,
  id,
  onRemove,
}: {
  label: string;
  fill: string;
  isError?: boolean;
  index: number;
  id?: string;
  onRemove?: (id: string) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
    >
      <div
        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center overflow-hidden border ${onRemove ? "cursor-pointer hover:scale-110" : "cursor-default hover:scale-105"
          }`}
        style={{
          background: isError
            ? `linear-gradient(135deg, ${ERROR_FILL}, hsl(0 0% 40%))`
            : `linear-gradient(135deg, ${fill}, color-mix(in srgb, ${fill} 70%, black))`,
          borderColor: isError ? "hsl(0 0% 50%)" : "rgba(255,255,255,0.25)",
          boxShadow: "0 4px 12px -2px rgba(0,0,0,0.3)"
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          if (onRemove && id) {
            setHovered(false);
            onRemove(id);
          }
        }}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Remove overlay */}
        {onRemove && id && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18" height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white drop-shadow-md"
            >
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </div>
        )}
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 text-xs font-semibold whitespace-nowrap z-[100] pointer-events-none rounded-lg shadow-xl"
            style={{
              backgroundColor: "hsl(0 0% 10%)",
              color: "hsl(0 0% 100%)",
              border: "1px solid hsl(0 0% 20%)"
            }}
          >
            {label}
            {isError && (
              <span className="block mt-0.5 text-[10px] text-red-400 font-medium opacity-90">Bấm để xóa lựa chọn sai</span>
            )}
            {!isError && onRemove && (
              <span className="block mt-0.5 text-[10px] text-gray-300 font-medium opacity-90">Bấm để gỡ bỏ</span>
            )}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "6px solid hsl(0 0% 10%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Draggable Pool Item ─── */
function PoolItem({
  item,
  onDrop,
  isCorrect,
  onShowExplanation,
}: {
  item: { id: string; label: string };
  onDrop: (id: string) => void;
  isCorrect: boolean;
  onShowExplanation: (id: string) => void;
}) {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  return (
    <div ref={constraintsRef} className="relative">
      <motion.div
        drag
        dragSnapToOrigin
        whileDrag={{ scale: 1.08, zIndex: 50 }}
        onDragStart={() => {
          isDraggingRef.current = true;
        }}
        onDragEnd={(_, info) => {
          isDraggingRef.current = false;
          // Check if dragged upward enough (toward scale area)
          if (info.offset.y < -80) {
            onDrop(item.id);
          }
        }}
       // 1. Thêm 'rounded-xl' để bo góc và 'backdrop-blur-md' để làm mờ phông nền
        className="px-4 py-2.5 text-sm font-medium select-none border transition-colors rounded-xl backdrop-blur-md shadow-sm"
        style={{
          // 2. Thêm độ trong suốt (ví dụ: / 0.15) cho màu nền.
          // Nếu ô là đáp án đúng (tùy chọn của bạn), nền sẽ hơi ám đỏ mờ. Nếu bình thường, nền trắng mờ.
          backgroundColor: isCorrect 
            ? "hsl(var(--crimson-muted) / 0.3)" 
            : "rgba(255, 255, 255, 0.15)",
            
          // 3. Viền cũng làm hơi trong suốt để bắt sáng đẹp hơn
          borderColor: "rgba(255, 255, 255, 0.2)",
          
          // 4. Vì nền trong suốt áp lên ảnh nền tối, ta nên chuyển chữ sang màu Trắng để dễ đọc
          color: "#ffffff",
          cursor: "grab",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // Chỉ show explanation nếu không phải là drag
          if (!isDraggingRef.current) {
            onShowExplanation(item.id);
          }
        }}
      >
        {item.label}
      </motion.div>
    </div>
  );
}

/* ─── Explanation Card Modal ─── */
function ExplanationCard({
  itemId,
  isOpen,
  onClose,
}: {
  itemId: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const explanation = EXPLANATIONS[itemId];
  const item = CORRECT_ITEMS.find((i) => i.id === itemId) || WRONG_ITEMS.find((i) => i.id === itemId);
  const isWrong = WRONG_ITEMS.some((i) => i.id === itemId);

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full rounded-2xl shadow-2xl overflow-hidden"
            style={{
              backgroundColor: "hsl(0 0% 20% / 0.85)"
            }}
          >
            {/* Header */}
            <div className={`p-6 border-b ${isWrong ? "border-white/10" : "border-white/10"}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-black text-white leading-tight">
                    {item.label}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 text-white/60 hover:text-white transition-colors p-1.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 6l-12 12M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                {explanation}
              </p>
            </div>

            {/* Footer */}
            <div className={`p-4 border-t ${isWrong ? "border-white/10 bg-white/5" : "border-white/20 bg-white/5"}`}>
              <button
                onClick={onClose}
                className={`w-full py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                  isWrong
                    ? "bg-red-600/80 hover:bg-red-600 text-white"
                    : "bg-amber-600/80 hover:bg-amber-600 text-white"
                }`}
              >
                Đã hiểu
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Component ─── */
export default function BalanceScale() {
  const [rightItems, setRightItems] = useState<DroppedItem[]>([]);
  const [usedIds, setUsedIds] = useState<Set<string>>(new Set());
  const [shaking, setShaking] = useState(false);
  const [balanced, setBalanced] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const scaleControls = useAnimation();

  const correctCount = rightItems.filter((i) => !i.isWrong).length;
  const wrongCount = rightItems.filter((i) => i.isWrong).length;

  // Tilt: starts at -12 (heavy left), approaches 0 as correct items added
  const tiltDeg = balanced ? 0 : -12 + correctCount * 2 + wrongCount * -1;

  const handleRemove = useCallback(
    (id: string) => {
      setRightItems((prev) => {
        const next = prev.filter((item) => item.id !== id);
        const newCorrectCount = next.filter((i) => !i.isWrong).length;
        setBalanced(newCorrectCount === 6);
        return next;
      });
      setUsedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    },
    []
  );

  const handleDrop = useCallback(
    (id: string) => {
      if (usedIds.has(id) || balanced) return;

      const correct = CORRECT_ITEMS.find((i) => i.id === id);
      const wrong = WRONG_ITEMS.find((i) => i.id === id);
      const item = correct || wrong;
      if (!item) return;

      const isWrong = !!wrong;
      const fillIndex = (rightItems.length + LEFT_ITEMS.length) % DOT_FILLS.length;

      if (isWrong) {
        setShaking(true);
        scaleControls.start({
          x: [0, -8, 8, -6, 6, -3, 3, 0],
          transition: { duration: 0.5 },
        });
        setTimeout(() => setShaking(false), 600);
      }

      const newItems = [
        ...rightItems,
        { id, label: item.label, isWrong, fillIndex },
      ];
      setRightItems(newItems);
      setUsedIds(new Set([...usedIds, id]));

      // Check balance: all 6 correct items placed
      const newCorrectCount = newItems.filter((i) => !i.isWrong).length;
      if (newCorrectCount === 6) {
        setBalanced(true);
      }
    },
    [rightItems, usedIds, balanced, scaleControls]
  );

  const availableCorrect = CORRECT_ITEMS.filter((i) => !usedIds.has(i.id));
  const availableWrong = WRONG_ITEMS.filter((i) => !usedIds.has(i.id));

  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/bg1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Tương tác
          </p> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white text-balance">
            Cán cân Bình đẳng Dân tộc
          </h2>
          {/* <p className="text-base text-muted-foreground mb-2">
            Dân tộc và Quan hệ dân tộc ở Việt Nam
          </p> */}
          {/* <div className="w-20 h-1 bg-primary mb-12" /> */}
        </motion.div>

        {/* Scale Visual */}
        <motion.div
          animate={scaleControls}
          className="relative flex flex-col items-center mb-12"
        >
          {/* Scale SVG */}
          <svg
            viewBox="0 0 600 360"
            className="w-full max-w-[560px]"
            style={{ overflow: "visible" }}
          >
            {/* Base */}
            <rect x="240" y="310" width="120" height="12" rx="2" fill="hsl(0 0% 25%)" />
            <rect x="250" y="322" width="100" height="8" rx="2" fill="hsl(0 0% 30%)" />
            <rect x="260" y="330" width="80" height="6" rx="1" fill="hsl(0 0% 35%)" />

            {/* Vertical stand */}
            <rect x="293" y="80" width="14" height="230" rx="3" fill="hsl(0 0% 25%)" />

            {/* Finial (top circle) */}
            <circle cx="300" cy="70" r="14" fill="hsl(0 0% 20%)" />
            <circle cx="300" cy="70" r="8" fill="hsl(0 0% 30%)" />

            {/* Cross beam (tilts) */}
            <g
              style={{
                transformOrigin: "300px 90px",
                transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: `rotate(${tiltDeg}deg)`,
              }}
            >
              <rect x="60" y="86" width="480" height="8" rx="3" fill="hsl(0 0% 22%)" />

              {/* Left hook */}
              <circle cx="80" cy="94" r="10" fill="none" stroke="hsl(0 0% 30%)" strokeWidth="3" />

              {/* Right hook */}
              <circle cx="520" cy="94" r="10" fill="none" stroke="hsl(0 0% 30%)" strokeWidth="3" />

              {/* Left wires */}
              <line x1="70" y1="104" x2="40" y2="180" stroke="hsl(0 0% 40%)" strokeWidth="1.5" />
              <line x1="80" y1="104" x2="80" y2="180" stroke="hsl(0 0% 40%)" strokeWidth="1.5" />
              <line x1="90" y1="104" x2="120" y2="180" stroke="hsl(0 0% 40%)" strokeWidth="1.5" />

              {/* Right wires */}
              <line x1="510" y1="104" x2="480" y2="180" stroke="hsl(0 0% 40%)" strokeWidth="1.5" />
              <line x1="520" y1="104" x2="520" y2="180" stroke="hsl(0 0% 40%)" strokeWidth="1.5" />
              <line x1="530" y1="104" x2="560" y2="180" stroke="hsl(0 0% 40%)" strokeWidth="1.5" />

              {/* Left pan (semi-circle) */}
              <path
                d="M 30 185 Q 30 220 80 220 Q 130 220 130 185"
                fill="none"
                stroke="hsl(0 0% 30%)"
                strokeWidth="3"
              />
              <line x1="30" y1="185" x2="130" y2="185" stroke="hsl(0 0% 30%)" strokeWidth="2" />

              {/* Right pan (semi-circle) */}
              <path
                d="M 470 185 Q 470 220 520 220 Q 570 220 570 185"
                fill="none"
                stroke="hsl(0 0% 30%)"
                strokeWidth="3"
              />
              <line x1="470" y1="185" x2="570" y2="185" stroke="hsl(0 0% 30%)" strokeWidth="2" />
            </g>
          </svg>

          {/* Items on pans - overlaid on SVG via absolute positioning */}
          <div className="absolute inset-0 pointer-events-none" style={{ maxWidth: "560px", left: "50%", transform: "translateX(-50%)" }}>
            {/* Left pan dots */}
            <div
              className="absolute flex flex-wrap gap-1.5 justify-center pointer-events-auto"
              style={{
                left: "3%",
                width: "18%",
                top: "43%",
                transform: `rotate(${tiltDeg}deg)`,
                transformOrigin: "center top",
                transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <AnimatePresence>
                {LEFT_ITEMS.map((item, i) => (
                  <ScaleDot key={item.id} label={item.label} fill={DOT_FILLS[i]} index={i} />
                ))}
              </AnimatePresence>
            </div>

            {/* Right pan dots */}
            <div
              className="absolute flex flex-wrap gap-1.5 justify-center pointer-events-auto"
              style={{
                right: "3%",
                width: "18%",
                top: "43%",
                transform: `rotate(${tiltDeg}deg)`,
                transformOrigin: "center top",
                transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <AnimatePresence>
                {rightItems.map((item, i) => (
                  <ScaleDot
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    fill={DOT_FILLS[item.fillIndex]}
                    isError={item.isWrong}
                    index={i}
                    onRemove={handleRemove}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Pan Labels */}
          <div className="w-full max-w-[560px] flex justify-between mt-2 px-2">
            <div className="text-center" style={{ width: "30%" }}>
              <p className="text-xs font-bold text-white">Vị thế tương đồng</p>
              <p className="text-[10px] text-white/80">Bình đẳng pháp lý</p>
            </div>
            <div className="text-center" style={{ width: "30%" }}>
              <p className="text-xs font-bold text-white">Cơ hội đồng đều</p>
              <p className="text-[10px] text-white/80">Bình đẳng thực tế</p>
            </div>
          </div>
        </motion.div>

        {/* Drag Pool */}
        {!balanced && (availableCorrect.length > 0 || availableWrong.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/80 mb-4">
              Kéo thả vào đĩa cân bên phải ↑ (click để xem giải thích)
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[...availableCorrect, ...availableWrong].map((item) => (
                <PoolItem
                  key={item.id}
                  item={item}
                  onDrop={handleDrop}
                  isCorrect={CORRECT_ITEMS.some((c) => c.id === item.id)}
                  onShowExplanation={setSelectedItemId}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Wrong feedback */}
        <AnimatePresence>
          {shaking && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-sm font-semibold text-white/80"
            >
              Lựa chọn này không giúp cân bằng thực tế…
            </motion.p>
          )}
        </AnimatePresence>

        {/* Success */}
        <AnimatePresence>
          {balanced && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              // 1. Thêm 'rounded-r-2xl' để bo các góc bên phải (giữ góc trái vuông vức để hợp với border-l)
              // 2. Thêm 'backdrop-blur-md' để làm mờ cảnh phía sau (hiệu ứng kính)
              className="mt-12 border-l-4 border-primary p-8 sm:p-10 rounded-r-2xl backdrop-blur-md"
              
              // 3. Chỉnh lại độ trong suốt của màu nền (ví dụ: thêm / 0.15 tức là độ mờ 15%)
              style={{ backgroundColor: "hsl(var(--crimson-muted) / 0.15)" }}
            >
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white mb-4">
                Cân bằng hoàn hảo
              </p>
              <p className="text-xl sm:text-2xl font-black text-white leading-snug mb-4">
                Bình đẳng dân tộc thực sự = Bình đẳng Pháp lý + Bình đẳng Thực tế.
              </p>
              <p className="text-base text-white/80 leading-relaxed">
                Chấp nhận sự chênh lệch khách quan và hỗ trợ cơ hội đồng đều mới là cốt lõi
                của Chủ nghĩa Mác - Lênin.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>

      {/* Explanation Modal */}
      <ExplanationCard
        itemId={selectedItemId || ""}
        isOpen={!!selectedItemId}
        onClose={() => setSelectedItemId(null)}
      />
    </section>
  );
}
