import { motion } from "framer-motion";

const PILLARS = [
  {
    num: "I",
    title: "Các dân tộc hoàn toàn bình đẳng",
    desc: "Không có dân tộc thượng đẳng hay hạ đẳng.",
  },
  {
    num: "II",
    title: "Các dân tộc được quyền tự quyết",
    desc: "Tự chọn con đường phát triển.",
  },
  {
    num: "III",
    title: "Liên hiệp công nhân tất cả các dân tộc",
    desc: "Nội dung quan trọng nhất — là chìa khóa giải quyết mâu thuẫn.",
    highlight: true,
  },
];

export default function Section2() {
  return (
    <section className="min-h-screen px-6 md:px-16 lg:px-24 py-24 border-t-2 border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent-crimson mb-4">Phần II</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Quan điểm của Chủ nghĩa
            <br />Mác — Lênin
          </h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl">về vấn đề dân tộc</p>
          <div className="w-16 h-1 bg-accent-crimson mb-20" />
        </motion.div>

        {/* Two Trends */}
        <div className="grid md:grid-cols-2 gap-0 border-2 border-foreground mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-foreground"
          >
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground">Xu hướng 1</span>
            <h3 className="text-2xl md:text-3xl font-black mt-4 mb-3 text-foreground">Tách ra</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Thành các quốc gia dân tộc độc lập — phong trào giải phóng dân tộc, ý thức tự chủ quốc gia.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 md:p-12"
          >
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground">Xu hướng 2</span>
            <h3 className="text-2xl md:text-3xl font-black mt-4 mb-3 text-foreground">Liên hiệp</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Xích lại gần nhau — xóa bỏ rào cản giữa các dân tộc, hợp tác và hội nhập quốc tế.
            </p>
          </motion.div>
        </div>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-8">
            Cương lĩnh dân tộc của V.I. Lênin — 3 trụ cột vàng
          </p>
        </motion.div>

        <div className="space-y-0">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`flex gap-6 md:gap-10 p-8 md:p-10 border-t-2 last:border-b-2 ${
                p.highlight
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-foreground/10"
              }`}
            >
              <span className={`text-4xl md:text-5xl font-black shrink-0 ${
                p.highlight ? "text-accent-foreground/30" : "text-foreground/10"
              }`}>
                {p.num}
              </span>
              <div>
                <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                  p.highlight ? "text-accent-foreground" : "text-foreground"
                }`}>
                  {p.title}
                </h3>
                <p className={`text-base ${
                  p.highlight ? "text-accent-foreground/80" : "text-muted-foreground"
                }`}>
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
