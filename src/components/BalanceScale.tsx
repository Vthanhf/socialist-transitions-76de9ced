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
}: {
  label: string;
  fill: string;
  isError?: boolean;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 300 }}
    >
      <div
        className="w-7 h-7 rounded-full cursor-pointer transition-transform hover:scale-125"
        style={{ backgroundColor: isError ? ERROR_FILL : fill }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-semibold whitespace-nowrap z-50 pointer-events-none"
            style={{
              backgroundColor: "hsl(0 0% 10%)",
              color: "hsl(0 0% 100%)",
            }}
          >
            {label}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: "5px solid hsl(0 0% 10%)",
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
}: {
  item: { id: string; label: string };
  onDrop: (id: string) => void;
  isCorrect: boolean;
}) {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintsRef} className="relative">
      <motion.div
        drag
        dragSnapToOrigin
        whileDrag={{ scale: 1.08, zIndex: 50 }}
        onDragEnd={(_, info) => {
          // Check if dragged upward enough (toward scale area)
          if (info.offset.y < -80) {
            onDrop(item.id);
          }
        }}
        className="px-4 py-2.5 text-sm font-medium cursor-grab active:cursor-grabbing select-none border transition-colors"
        style={{
          backgroundColor: isCorrect ? "hsl(var(--crimson-muted))" : "hsl(var(--surface))",
          borderColor: "hsl(var(--border))",
          color: "hsl(var(--foreground))",
        }}
      >
        {item.label}
      </motion.div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function BalanceScale() {
  const [rightItems, setRightItems] = useState<DroppedItem[]>([]);
  const [usedIds, setUsedIds] = useState<Set<string>>(new Set());
  const [shaking, setShaking] = useState(false);
  const [balanced, setBalanced] = useState(false);
  const scaleControls = useAnimation();

  const correctCount = rightItems.filter((i) => !i.isWrong).length;
  const wrongCount = rightItems.filter((i) => i.isWrong).length;

  // Tilt: starts at -12 (heavy left), approaches 0 as correct items added
  const tiltDeg = balanced ? 0 : -12 + correctCount * 2 + wrongCount * -1;

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
    <section className="min-h-screen flex flex-col justify-center section-padding py-24">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4">
            Tương tác
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-3 text-balance">
            Cán cân Bình đẳng Dân tộc
          </h2>
          <p className="text-base text-muted-foreground mb-2">
            Dân tộc và Quan hệ dân tộc ở Việt Nam
          </p>
          <div className="w-20 h-1 bg-primary mb-12" />
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
                top: "46%",
                transform: `rotate(${tiltDeg}deg)`,
                transformOrigin: "center top",
                transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {LEFT_ITEMS.map((item, i) => (
                <ScaleDot key={item.id} label={item.label} fill={DOT_FILLS[i]} index={i} />
              ))}
            </div>

            {/* Right pan dots */}
            <div
              className="absolute flex flex-wrap gap-1.5 justify-center pointer-events-auto"
              style={{
                right: "3%",
                width: "18%",
                top: "46%",
                transform: `rotate(${tiltDeg}deg)`,
                transformOrigin: "center top",
                transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              {rightItems.map((item, i) => (
                <ScaleDot
                  key={item.id}
                  label={item.label}
                  fill={DOT_FILLS[item.fillIndex]}
                  isError={item.isWrong}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Pan Labels */}
          <div className="w-full max-w-[560px] flex justify-between mt-2 px-2">
            <div className="text-center" style={{ width: "30%" }}>
              <p className="text-xs font-bold text-foreground">Vị thế tương đồng</p>
              <p className="text-[10px] text-muted-foreground">Bình đẳng pháp lý</p>
            </div>
            <div className="text-center" style={{ width: "30%" }}>
              <p className="text-xs font-bold text-foreground">Cơ hội đồng đều</p>
              <p className="text-[10px] text-muted-foreground">Bình đẳng thực tế</p>
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
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4">
              Kéo thả vào đĩa cân bên phải ↑
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[...availableCorrect, ...availableWrong].map((item) => (
                <PoolItem
                  key={item.id}
                  item={item}
                  onDrop={handleDrop}
                  isCorrect={CORRECT_ITEMS.some((c) => c.id === item.id)}
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
              className="mt-4 text-sm font-semibold text-muted-foreground"
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
              className="mt-12 border-l-4 border-primary p-8 sm:p-10"
              style={{ backgroundColor: "hsl(var(--crimson-muted))" }}
            >
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4">
                Cân bằng hoàn hảo
              </p>
              <p className="text-xl sm:text-2xl font-black text-foreground leading-snug mb-4">
                Bình đẳng dân tộc thực sự = Bình đẳng Pháp lý + Bình đẳng Thực tế.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Chấp nhận sự chênh lệch khách quan và hỗ trợ cơ hội đồng đều mới là cốt lõi
                của Chủ nghĩa Mác - Lênin.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
