import { motion } from "framer-motion";

const CHARACTERISTICS = [
  "Có 54 dân tộc anh em",
  "Cư trú đan xen (không có lãnh thổ riêng rẽ hoàn toàn)",
  "Trình độ phát triển kinh tế — xã hội không đồng đều",
  "Có truyền thống đoàn kết chống giặc ngoại xâm lâu đời",
];

export default function Section3() {
  return (
    <section className="min-h-screen px-6 md:px-16 lg:px-24 py-24 border-t-2 border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent-crimson mb-4">Phần III</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Dân tộc và Quan hệ
            <br />dân tộc ở Việt Nam
          </h2>
          <div className="w-16 h-1 bg-accent-crimson mb-20" />
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left: Characteristics */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-8">
              Đặc điểm dân tộc Việt Nam
            </p>
            <div className="space-y-6">
              {CHARACTERISTICS.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-5 items-baseline"
                >
                  <span className="text-3xl font-black text-foreground/10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-relaxed text-foreground">{c}</p>
                </motion.div>
              ))}
            </div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 border-l-4 border-accent-crimson pl-6"
            >
              <p className="text-2xl md:text-3xl font-black leading-snug text-foreground">
                "54 dân tộc anh em"
              </p>
              <p className="text-base text-muted-foreground mt-3">
                — truyền thống đoàn kết ngàn năm dựng nước và giữ nước
              </p>
            </motion.blockquote>
          </div>

          {/* Right: Policy */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-8">
              Quan điểm, chính sách của Đảng
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 border-2 border-accent bg-accent text-accent-foreground mb-8"
            >
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-4 text-accent-foreground/60">
                Cốt lõi
              </p>
              <p className="text-xl font-bold leading-relaxed">
                "Bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="p-8 border-2 border-foreground/10"
            >
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-4">
                Mục tiêu
              </p>
              <p className="text-base leading-relaxed text-foreground mb-4">
                Ưu tiên đầu tư phát triển kinh tế — xã hội vùng đồng bào{" "}
                <span className="font-bold text-accent-crimson">dân tộc thiểu số</span>, vùng sâu, vùng xa.
              </p>
              <p className="text-base leading-relaxed text-foreground">
                Tôn trọng và phát huy{" "}
                <span className="font-bold text-accent-crimson">bản sắc văn hóa đa dạng</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
