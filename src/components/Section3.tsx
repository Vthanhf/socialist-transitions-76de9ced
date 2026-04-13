import { motion } from "framer-motion";

const CHARACTERISTICS = [
  "Có 54 dân tộc anh em",
  "Cư trú đan xen — không có lãnh thổ riêng rẽ hoàn toàn",
  "Trình độ phát triển kinh tế — xã hội không đồng đều",
  "Có truyền thống đoàn kết chống giặc ngoại xâm lâu đời",
];

export default function Section3() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding py-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4">Phần III</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6 text-balance">
            Dân tộc và Quan hệ dân tộc ở Việt Nam
          </h2>
          <div className="w-20 h-1 bg-primary mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Characteristics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-8">
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
                  className="flex items-start gap-6"
                >
                  <span className="text-3xl font-black text-primary/20 shrink-0 leading-none mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base sm:text-lg text-foreground leading-relaxed border-b border-border pb-6 w-full">
                    {c}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Policy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-8">
              Quan điểm, chính sách của Đảng
            </p>

            {/* Pull quote */}
            <div className="border-l-4 border-primary pl-6 sm:pl-8 mb-10">
              <p className="text-2xl sm:text-3xl font-black text-foreground leading-snug text-balance">
                "Bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển"
              </p>
              <p className="text-sm text-muted-foreground mt-3">— Quan điểm cốt lõi</p>
            </div>

            <div className="space-y-6">
              <div className="bg-crimson-muted p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">Mục tiêu</p>
                <p className="text-base leading-relaxed text-foreground">
                  Ưu tiên đầu tư phát triển kinh tế — xã hội vùng đồng bào dân tộc thiểu số, vùng sâu, vùng xa.
                </p>
              </div>
              <div className="bg-gold-muted p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Bản sắc</p>
                <p className="text-base leading-relaxed text-foreground">
                  Tôn trọng và phát huy bản sắc văn hóa đa dạng của các dân tộc Việt Nam.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
