import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const carouselData = [
  {
    id: 1,
    title: 'Giáo dục',
    desc: 'Đây là minh chứng rõ ràng nhất cho chính sách dân tộc trong thời kỳ quá độ: Xóa bỏ sự chênh lệch giữa miền ngược và miền xuôi.',
    image: '/assets/Giaoduc.webp', 
  },
  {
    id: 2,
    title: 'Sản xuất & Phát triển Kinh tế',
    desc: 'Thời kỳ quá độ lên CNXH đặc trưng bởi sự phát triển lực lượng sản xuất. Vấn đề dân tộc không thể tách rời khỏi việc nâng cao đời sống kinh tế.',
    image: '/assets/kinhte.webp',
  },
  {
    id: 3,
    title: 'Bảo tồn Bản sắc & Đời sống tinh thần',
    desc: 'Chủ nghĩa xã hội tôn trọng và phát huy bản sắc văn hóa riêng của từng dân tộc, làm phong phú thêm nền văn hóa chung.',
    image: '/assets/vanhoa.webp',
  },
  {
    id: 4,
    title: 'Tinh thần Đại đoàn kết dân tộc',
    desc: 'Đoàn kết là sức mạnh cốt lõi trong lý luận Mác-Lênin về vấn đề dân tộc.',
    image: '/assets/doanket.webp',
  },
];

// 🌟 BÍ QUYẾT Ở ĐÂY: Nhân đôi mảng dữ liệu thành 8 items.
// Đổi ID của các item copy để React không bị lỗi trùng Key (cộng thêm 100 vào ID)
const extendedData = [
  ...carouselData, 
  ...carouselData.map(item => ({ ...item, id: item.id + 100 }))
];

const CarouselSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4">
      <div className="overflow-hidden py-6" ref={emblaRef}>
        <div className="flex -ml-1 touch-pan-y items-center">
          
          {/* 🌟 THAY ĐỔI Ở ĐÂY: Dùng extendedData thay vì carouselData */}
          {extendedData.map((item, index) => {
            const isActive = index === selectedIndex;

            return (
              <div
                key={item.id}
                className="relative flex-[0_0_65%] sm:flex-[0_0_45%] md:flex-[0_0_35%] lg:flex-[0_0_30%] min-w-0 pl-1"
              >
                <div 
                  className={`w-full transition-all duration-700 ease-out origin-center
                    ${isActive ? 'scale-100 opacity-100 z-20 shadow-2xl' : 'scale-[0.80] opacity-40 z-0'}
                  `}
                  style={{ height: '380px' }}
                >
                  {/* BƯỚC 1: Thêm 'select-none' vào thẻ bọc ngoài cùng của Slide */}
                  <div className="w-full h-full rounded-2xl overflow-hidden relative group bg-slate-900 select-none">
                    
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable={false} /* BƯỚC 2: Thêm dòng này để cấm trình duyệt nhấc ảnh lên */
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 pointer-events-none" 
                      /* Mẹo thêm: Thêm pointer-events-none vào ảnh nếu bạn không có sự kiện onClick nào trên tấm ảnh */
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                      <h3 className={`text-white font-bold mb-2 transition-all duration-700 
                        ${isActive ? 'text-3xl translate-y-0' : 'text-xl translate-y-4'}
                      `}>
                        {item.title}
                      </h3>
                      <p className={`text-white/80 text-sm md:text-base transition-all duration-700 delay-100 line-clamp-2
                        ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                      `}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;