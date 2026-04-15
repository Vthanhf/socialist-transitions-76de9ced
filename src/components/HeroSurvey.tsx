import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


// --------------------------------------------------------
// SLIDE 1: TÌNH HUỐNG THẢO LUẬN (GIỮ NGUYÊN CẤU TRÚC CŨ)
// --------------------------------------------------------
const SlideOne = () => (
  <div className="flex flex-col h-full">
    {/* Tiêu đề đổi sang màu trắng hoặc màu vàng gold để sang trọng hơn */}
    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/70 mb-4">
      Tình huống thảo luận
    </p>
    
    <div className="space-y-4">
      <p className="text-base sm:text-lg leading-relaxed text-white">
        <span className="font-bold text-white">A:</span> <em>"Việt Nam có 54 dân tộc cùng chung sống hòa thuận, không xung đột — đó là bằng chứng rõ nhất cho thấy chính sách dân tộc của Đảng đã thành công hoàn toàn."</em>
      </p>
      <p className="text-base sm:text-lg leading-relaxed text-white">
        <span className="font-bold text-white">B:</span> <em>"Không xung đột chưa có nghĩa là bình đẳng — chênh lệch kinh tế, văn hóa, giáo dục giữa các dân tộc vẫn còn rất lớn, không thể gọi là thành công hoàn toàn."</em>
      </p>
    </div>

    {/* Đường viền ngăn cách cũng làm mờ đi */}
    <div className="mt-8 space-y-6 border-t border-white/20 pt-6">
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/70 mb-4">
        Thảo luận chi tiết
      </p>
      
      {/* Phân tích A */}
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          {/* Đổi màu icon X cho hợp với nền tối */}
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-300 font-bold text-sm flex-shrink-0 mt-1">✗</span>
          <div>
            <p className="text-base font-semibold text-white mb-1">A: 54 dân tộc chung sống hòa thuận, không có xung đột</p>
            <p className="text-base leading-relaxed text-white/80">
              <span className="font-semibold text-white">Sai:</span> Vội vàng kết luận đây là "thành công hoàn toàn" → Cách nhìn này mang tính siêu hình, chỉ thấy bề nổi (sự ổn định chính trị - xã hội) mà bỏ qua những mâu thuẫn nội tại (sự chênh lệch về trình độ phát triển).
            </p>
          </div>
        </div>
      </div>
      
      {/* Phân tích B */}
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          {/* Đổi màu icon Tick cho hợp với nền tối */}
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-300 font-bold text-sm flex-shrink-0 mt-1">✓</span>
          <div>
            <p className="text-base font-semibold text-white mb-1">B: Nhận diện chính xác những tồn tại hiện nay</p>
            <p className="text-base leading-relaxed text-white/80">
              <span className="font-semibold text-white">Đúng:</span> B nhận diện chính xác những tồn tại hiện nay là chênh lệch về kinh tế, văn hóa, giáo dục. Do đó, quá trình thực hiện chính sách dân tộc là một quá trình lâu dài, liên tục, hiện tại mang lại thành tựu lớn nhưng chưa thể gọi là "thành công hoàn toàn".
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --------------------------------------------------------
// SLIDE 2: LÝ LUẬN CỦA LÊNIN
// --------------------------------------------------------
const SlideTwo = () => (
  <div className="flex flex-col h-full">
    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/70 mb-6">
      Lý luận Mác - Lênin
    </p>
    
    <div className="border-l-4 border-white/50 bg-white/5 p-6 rounded-r-xl mb-8">
      <p className="text-base sm:text-lg font-medium text-white italic leading-relaxed">
        Cương lĩnh dân tộc của Lênin chỉ rõ 3 nguyên tắc: "Các dân tộc hoàn toàn bình đẳng; Các dân tộc được quyền tự quyết; Liên hiệp công nhân tất cả các dân tộc".
      </p>
    </div>

    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-2">
          Không xung đột có phải là tiêu chí đủ để đánh giá bình đẳng dân tộc không?
        </h3>
        <p className="text-base leading-relaxed text-white/80">
          <span className="font-bold text-white">Không.</span> Không xung đột chỉ là tiêu chí cần, là biểu hiện của sự ổn định và đoàn kết, nhưng chưa đủ để khẳng định đã có bình đẳng dân tộc.
        </p>
      </div>

      <div className="bg-white/5 border border-white/20 p-5 rounded-lg shadow-sm">
        <p className="text-base leading-relaxed text-white">
          Nếu không có xung đột nhưng một bộ phận dân tộc thiểu số vẫn sống trong nghèo đói, mù chữ, thiếu thốn hạ tầng y tế trong khi dân tộc đa số ở miền xuôi phát triển mạnh mẽ, thì đó vẫn chỉ là <span className="font-bold">"bình đẳng hình thức"</span>.
        </p>
        <div className="mt-3 pt-3 border-t border-white/20">
          <p className="text-base leading-relaxed text-white">
            Chủ nghĩa Mác - Lênin nhấn mạnh <span className="font-semibold text-white">cơ sở hạ tầng (kinh tế) quyết định kiến trúc thượng tầng (chính trị, văn hóa)</span>. Chỉ khi chênh lệch kinh tế được thu hẹp, bình đẳng dân tộc mới thực sự trọn vẹn.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// --------------------------------------------------------
// SLIDE 3: THỰC TIỄN TẠI VIỆT NAM
// --------------------------------------------------------
const SlideThree = () => (
  <div className="flex flex-col h-full">
    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/70 mb-4">
      Thực tiễn tại Việt Nam
    </p>
    
    <div className="mb-6">
      <p className="text-base text-white/80 mb-2">Dựa vào đặc điểm của dân tộc Việt Nam có thể nhận định:</p>
      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
        Thách thức lớn nhất trong việc thực hiện bình đẳng dân tộc hiện nay là: 
      </h3>
      <h4 className="text-lg font-bold text-white mt-4">Thu hẹp khoảng cách phát triển kinh tế - xã hội giữa miền núi và miền xuôi </h4>
    </div>

    <div className="grid gap-4 mt-2">
      <div className="bg-white/5 border-l-4 border-amber-500 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
        <h4 className="text-base font-bold text-white mb-2">
          1. Rào cản về điều kiện tự nhiên và hạ tầng:
        </h4>
        <p className="text-sm sm:text-base leading-relaxed text-white/80">
          Địa hình hiểm trở, khí hậu khắc nghiệt. Điều này khiến chi phí đầu tư cơ sở hạ tầng đội lên rất cao, khó thu hút đầu tư doanh nghiệp, dẫn đến kinh tế chậm phát triển.
        </p>
      </div>

      <div className="bg-white/5 border-l-4 border-blue-500 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
        <h4 className="text-base font-bold text-white mb-2">
          2. Điểm nghẽn về giáo dục và chất lượng nguồn nhân lực:
        </h4>
        <p className="text-sm sm:text-base leading-relaxed text-white/80">
          Từ khó khăn kinh tế dẫn đến khó khăn trong giáo dục. Dù nhà nước có nhiều chính sách ưu tiên nhưng chất lượng giáo dục và nguồn nhân lực ở vùng sâu vùng xa vẫn còn khoảng cách lớn so với thành thị, chưa đáp ứng được yêu cầu của nền kinh tế số và công nghiệp hóa.
        </p>
      </div>
    </div>
  </div>
);

// --- GOM COMPONENT VÀO MẢNG ---
const SLIDES = [SlideOne, SlideTwo, SlideThree];

// --- MẢNG HÌNH NỀN TƯƠNG ỨNG ---
// Bạn nhớ thay đổi link này thành tên file ảnh thực tế của bạn nhé!
const BACKGROUNDS = [
  "/assets/bg5.webp",   // Ảnh nền cho trang 1
  "/assets/Lenin2.webp",      // Ảnh nền cho trang 2
  "/assets/lenin3.webp",    // Ảnh nền cho trang 3
];

// --------------------------------------------------------
// COMPONENT CHÍNH
// --------------------------------------------------------
export default function HeroSurvey() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all background images
  useEffect(() => {
    BACKGROUNDS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  const CurrentSlideComponent = SLIDES[currentIndex];

  return (
    // 1. Thêm relative và overflow-hidden cho section ngoài cùng
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen flex flex-col justify-center py-20 px-4 overflow-hidden">
      
      {/* 2. LAYER HÌNH NỀN (Z-0) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex} 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BACKGROUNDS[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
          />
        </AnimatePresence>
        {/* Phủ lớp màu đen mờ để làm nổi bật cái bảng chữ ở trên */}
        <div className="absolute inset-0 bg-black/50 " />
      </div>

      {/* 3. LAYER NỘI DUNG SLIDER (Z-10) */}
<div className="relative z-10 max-w-4xl mx-auto w-full">
        
        <div className="bg-transparent border border-white/10 flex flex-col relative overflow-hidden rounded-2xl">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="p-6 sm:p-10 md:p-12 min-h-[500px] flex flex-col justify-center" 
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>

          {/* Thanh Điều Hướng cũng phải làm trong suốt */}
          <div className="bg-transparent border-t border-white/10 px-6 py-5 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                currentIndex === 0 
                  ? "text-white/20 cursor-not-allowed" 
                  : "text-white/70 hover:text-white cursor-pointer"
              }`}
            >
              <ChevronLeft className="w-5 h-5" /> Trang trước
            </button>

            <span className="text-xs font-bold tracking-[0.2em] text-white/50">
              {currentIndex + 1} / {SLIDES.length}
            </span>

            <button
              onClick={handleNext}
              disabled={currentIndex === SLIDES.length - 1}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                currentIndex === SLIDES.length - 1 
                  ? "text-white/20 cursor-not-allowed" 
                  : "text-white/70 hover:text-white cursor-pointer"
              }`}
            >
              Trang tiếp <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </motion.section>
  );
}