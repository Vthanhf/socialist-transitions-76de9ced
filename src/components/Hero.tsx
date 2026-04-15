import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import CarouselSection from "./CarouselSection";

export default function Hero() {
  const scrollToBalance = () => {
    const element = document.getElementById("balance");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image - full screen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/mainpage.webp')",
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto w-full text-center">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm sm:text-base font-semibold tracking-[0.3em] uppercase text-white mb-6"
          >
            Kinh tế Chính trị Mác — Lênin
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white mb-6 text-balance"
          >
            Vấn đề Dân tộc trong thời kỳ quá độ lên{" "}
            <span className="text-white">Chủ nghĩa xã hội</span>
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-gold mx-auto mb-8"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Khám phá các quan điểm lý luận về vấn đề dân tộc trong quá trình xây dựng chủ nghĩa xã hội
          </motion.p>
        </div>
      </motion.div>

      {/* Carousel Section - Overlaid on background */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} // Bắt đầu ở trạng thái tàng hình và tụt xuống 40px
        animate={{ opacity: 1, y: 0 }}  // Nổi lên vị trí gốc và rõ dần
        transition={{ duration: 0.8, delay: 0.6 }} // Bắt đầu chạy sau 0.6 giây (sau khi chữ đã hiện xong)
        className="relative z-10 flex-1 flex items-center justify-center w-full py-8"
      >
        <CarouselSection />
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToBalance}
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 p-2 rounded-full border border-white/50 hover:border-white text-white transition-colors cursor-pointer group"
      >
        <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.button>
    </section>
  );
}
