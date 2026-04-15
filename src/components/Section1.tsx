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
    <section className="relative min-h-screen flex flex-col justify-center section-padding py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/bg3.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-white mb-4">Phần I</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white mb-6 text-balance">
            Dân tộc trong thời kỳ quá độ
          </h2>
          <p className="text-lg text-white/80 mb-4 max-w-2xl">Khái niệm & Đặc trưng</p>
          <div className="w-20 h-1 bg-white mb-16" />
        </motion.div>

        {/* Concept */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 border-l-4 border-white/50 p-8 sm:p-10 mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white mb-3">Khái niệm</p>
          <p className="text-xl sm:text-2xl font-bold text-white leading-snug">
            Dân tộc là hình thức cộng đồng người{" "}
            <span className="text-white">cao nhất</span>,{" "}
            <span className="text-white">hoàn chỉnh nhất</span>.
          </p>
        </motion.div>

        {/* 5 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`bg-white/5 border border-white/10 p-8 ${f.colSpan ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <span className="text-4xl font-black text-white/70 block mb-4">{f.num}</span>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
