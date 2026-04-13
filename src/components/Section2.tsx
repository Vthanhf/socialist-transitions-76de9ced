import { motion } from "framer-motion";

const PILLARS = [
  {
    num: "01",
    title: "Các dân tộc hoàn toàn bình đẳng",
    desc: "Không có dân tộc thượng đẳng hay hạ đẳng.",
  },
  {
    num: "02",
    title: "Các dân tộc được quyền tự quyết",
    desc: "Tự chọn con đường phát triển.",
  },
  {
    num: "03",
    title: "Liên hiệp công nhân tất cả các dân tộc",
    desc: "Nội dung quan trọng nhất — là chìa khóa giải quyết mâu thuẫn.",
    highlight: true,
  },
];

export default function Section2() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding py-24 bg-surface">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4">Phần II</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6 text-balance">
            Quan điểm của Chủ nghĩa Mác — Lênin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-4">về vấn đề dân tộc</p>
          <div className="w-20 h-1 bg-primary mb-16" />
        </motion.div>

        {/* Two Trends */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-border p-8 sm:p-10 bg-surface-elevated"
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Xu hướng 1</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Tách ra thành các quốc gia dân tộc độc lập</h3>
            <div className="w-12 h-px bg-primary" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border border-border p-8 sm:p-10 bg-surface-elevated"
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Xu hướng 2</span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Liên hiệp, xích lại gần nhau</h3>
            <p className="text-sm text-muted-foreground">Xóa bỏ rào cản giữa các dân tộc.</p>
          </motion.div>
        </div>

        {/* Three Pillars header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-2">
            Cương lĩnh dân tộc của V.I. Lênin
          </p>
          <p className="text-sm text-muted-foreground mb-10">Ba trụ cột vàng</p>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`p-8 sm:p-10 ${
                p.highlight
                  ? "border border-primary bg-crimson-muted"
                  : "border border-border bg-surface-elevated"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                <span className={`text-5xl font-black shrink-0 ${
                  p.highlight ? "text-primary" : "text-primary/20"
                }`}>
                  {p.num}
                </span>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
                    p.highlight ? "text-primary" : "text-foreground"
                  }`}>
                    {p.title}
                  </h3>
                  <p className="text-base text-muted-foreground">{p.desc}</p>
                  {p.highlight && <div className="mt-4 w-16 h-1 bg-gold" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
