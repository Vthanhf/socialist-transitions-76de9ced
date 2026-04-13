import { motion } from "framer-motion";

const FEATURES = [
  { num: "01", title: "Lãnh thổ chung", desc: "Cố định, không bị chia cắt." },
  { num: "02", title: "Phương thức sinh hoạt kinh tế chung", desc: "Gắn kết mọi vùng miền." },
  { num: "03", title: "Ngôn ngữ chung", desc: "Công cụ giao tiếp chính thức." },
  { num: "04", title: "Văn hóa, tâm lý chung", desc: "Bản sắc riêng biệt." },
  { num: "05", title: "Nhà nước chung", desc: "Quản lý thống nhất về chính trị." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Section1() {
  return (
    <section className="min-h-screen px-6 md:px-16 lg:px-24 py-24 border-t-2 border-foreground/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-accent-crimson mb-4">Phần I</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            Dân tộc trong thời kỳ quá độ
          </h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl">Khái niệm & Đặc trưng</p>
          <div className="w-16 h-1 bg-accent-crimson mb-16" />
        </motion.div>

        {/* Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 p-8 md:p-12 border-2 border-foreground"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-4">Khái niệm</p>
          <p className="text-xl md:text-2xl font-semibold leading-relaxed">
            Dân tộc là <span className="text-accent-crimson font-black">hình thức cộng đồng người cao nhất</span>, hoàn chỉnh nhất.
          </p>
        </motion.div>

        {/* 5 Features Grid */}
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-muted-foreground mb-8">
          5 Đặc trưng cơ bản
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-background p-8 md:p-10"
            >
              <span className="text-5xl md:text-6xl font-black text-foreground/10 block mb-4">{f.num}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-base text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
          {/* Empty cell to fill grid */}
          <div className="bg-background p-8 md:p-10 hidden lg:flex items-center justify-center">
            <span className="text-6xl font-black text-foreground/5">★</span>
          </div>
        </div>
      </div>
    </section>
  );
}
