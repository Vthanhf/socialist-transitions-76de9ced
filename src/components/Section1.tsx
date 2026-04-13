import { motion } from "framer-motion";

const FEATURES = [
  { num: "01", title: "Lãnh thổ chung", desc: "Cố định, không bị chia cắt." },
  { num: "02", title: "Phương thức sinh hoạt kinh tế chung", desc: "Gắn kết mọi vùng miền." },
  { num: "03", title: "Ngôn ngữ chung", desc: "Công cụ giao tiếp chính thức." },
  { num: "04", title: "Văn hóa, tâm lý chung", desc: "Bản sắc riêng biệt." },
  { num: "05", title: "Nhà nước chung", desc: "Quản lý thống nhất về chính trị.", colSpan: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Section1() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding py-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4">Phần I</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6 text-balance">
            Dân tộc trong thời kỳ quá độ
          </h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl">Khái niệm & Đặc trưng</p>
          <div className="w-20 h-1 bg-primary mb-16" />
        </motion.div>

        {/* Concept */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-crimson-muted border-l-4 border-primary p-8 sm:p-10 mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">Khái niệm</p>
          <p className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
            Dân tộc là hình thức cộng đồng người{" "}
            <span className="text-primary">cao nhất</span>,{" "}
            <span className="text-primary">hoàn chỉnh nhất</span>.
          </p>
        </motion.div>

        {/* 5 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`bg-surface-elevated p-8 ${f.colSpan ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <span className="text-4xl font-black text-primary/20 block mb-4">{f.num}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
