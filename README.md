# Socialist Transitions - Chính Trị Học Việt Nam 🗺️

Một ứng dụng web tương tác về phân bố dân tộc và địa hình Việt Nam, kết hợp giáo dục chính trị học với công nghệ hiện đại.

## 📋 Mô tả dự án

Dự án này cung cấp một nền tảng trực quan để khám phá:

- **Phân bố dân tộc**: Bản đồ tương tác hiển thị phân bố của 54 dân tộc Việt Nam
- **Địa hình Việt Nam**: Tô màu theo độ cao giúp hiểu rõ địa lý đất nước
- **Thông tin chi tiết**: Dữ liệu dân số, ngôn ngữ, trang phục, truyền thống của từng dân tộc
- **Tuyên bố AI**: Minh bạch về công cụ AI được sử dụng trong phát triển dự án

## 🚀 Tính năng chính

### 1. **Bản đồ tương tác**

- Zoom và pan trên bản đồ Việt Nam
- Hiển thị/ẩn dân tộc bằng sidebar
- Tooltip hiển thị thông tin khi di chuột

### 2. **Sidebar có thể ẩn/hiện**

- Danh sách 54 dân tộc Việt Nam
- Tìm kiếm dân tộc theo tên
- Hiệu ứng glass morphism
- Nút toggle để mở/đóng sidebar

### 3. **Chú thích độ cao**

- 5 mức độ cao với màu sắc khác nhau
- Card legend có thể ẩn/hiện
- Giúp người dùng hiểu địa hình

### 4. **Chi tiết dân tộc**

- Ảnh đại diện
- Dân số và ngôn ngữ
- Giới thiệu chi tiết
- Khu vực phân bố
- Trang phục truyền thống
- Lễ hội và truyền thống

## 💻 Công nghệ sử dụng

### Frontend Framework

- **React 18.3** - Thư viện UI JavaScript
- **TypeScript 5.8** - Superset của JavaScript với type safety
- **Vite 5.4** - Build tool nhanh cho web development

### Styling & UI

- **Tailwind CSS 3.4** - Framework CSS utility-first
- **Shadcn/ui** - Thư viện component UI cao cấp
- **Radix UI** - Thư viện component primitives không đồ họa
- **Framer Motion 11.0** - Thư viện animation React

### Mapping & Visualization

- **React Simple Maps** - Component React cho bản đồ SVG
- **D3-geo** - Thư viện địa lý D3.js
- **TopoJSON Client** - Xử lý dữ liệu TopoJSON
- **Recharts** - Thư viện biểu đồ React

### State Management & Forms

- **React Hook Form 7.6** - Thư viện quản lý form hiệu quả
- **Zod 3.25** - Validation schema TypeScript-first
- **TanStack Query 5.6** - Quản lý server state

### Icons & Utilities

- **Lucide React** - Thư viện icon SVG
- **Tailwind Merge** - Merge class Tailwind
- **clsx** - Utility để điều kiện CSS class
- **Date-fns** - Thư viện xử lý ngày tháng

### Routing

- **React Router DOM 6.3** - Client-side routing

### Development & Testing

- **Vitest 3.2** - Framework testing nhanh
- **ESLint 9.3** - Linter JavaScript/TypeScript
- **TypeScript ESLint** - Plugin ESLint cho TypeScript
- **PostCSS** - Tool transform CSS

### Package Manager

- **Bun** - Runtime JavaScript nhanh hơn Node.js

## 📦 Cấu trúc dự án

```
src/
├── components/              # React components
│   ├── EthnicDistributionMap.tsx   # Component bản đồ chính
│   ├── Navbar.tsx          # Navigation bar
│   ├── EthnicDistributionMap.css   # Styles cho bản đồ
│   └── ui/                 # Shadcn UI components
├── pages/                   # Pages/Routes
│   ├── Index.tsx          # Trang chủ
│   ├── EthnicDistribution.tsx  # Trang bản đồ dân tộc
│   ├── AIDeclaration.tsx  # Trang khai báo AI
│   └── NotFound.tsx       # 404 page
├── data/                    # Data files
│   ├── ethnicGroupsData.ts    # Dữ liệu 54 dân tộc
│   ├── provinceCoordinates.ts # Tọa độ tỉnh thành
│   └── provinceElevationData.ts # Độ cao tỉnh thành
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
└── App.tsx                  # Root component
```

## 🎨 Design Highlights

- **Glass Morphism**: Sidebar và card legend có hiệu ứng mờ (blur)
- **Smooth Animations**: Sử dụng Framer Motion cho animation mượt mà
- **Responsive Design**: Hoạt động trên desktop và mobile
- **Color Coding**:
  - Đỏ (#b91c1c): Núi rất cao (≥ 800m)
  - Đỏ nhạt (#f87171): Cao (400m-799m)
  - Vàng (#fde047): Trung du (100m-399m)
  - Xanh nhạt (#93c5fd): Ven biển (50m-99m)
  - Xanh đậm (#3b82f6): Đồng bằng (< 50m)

## 🛠️ Hướng dẫn cài đặt & chạy

### Yêu cầu

- Bun 1.0+ (hoặc Node.js 18+)

### Cài đặt

```bash
bun install
```

### Chạy development

```bash
bun dev
```

### Build production

```bash
bun run build
```

### Preview production build

```bash
bun run preview
```

### Test

```bash
bun run test
bun run test:watch
```

### Lint

```bash
bun run lint
```

## 📊 Dữ liệu sử dụng

- **54 dân tộc Việt Nam**: Dân số, ngôn ngữ, trang phục, truyền thống
- **Địa hình**: Độ cao của 63 tỉnh thành phố
- **Bản đồ**: GeoJSON từ Việt Nam
- **Tọa độ**: Vị trí trung tâm của từng tỉnh thành

## 🤖 Công cụ AI được sử dụng

- **ChatGPT**: Phân tích giáo trình, tóm tắt dữ liệu
- **Gemini**: Gợi ý cấu trúc UI/UX, design
- **Claude + Lovable**: Hỗ trợ lập trình giao diện web

## 📝 Liêm chính Học thuật

Dự án được thực hiện với tinh thần:

- ✅ Trung thực, không plagiarism
- ✅ Trích dẫn nguồn rõ ràng
- ✅ Không sử dụng nội dung có bản quyền khi chưa được phép
- ⚠️ Nội dung học thuật (chính trị, lịch sử, kinh tế) do người dùng chịu trách nhiệm

## 📚 Nguồn tham khảo

- [Wikipedia - Các dân tộc tại Việt Nam](https://vi.wikipedia.org/wiki/Các_dân_tộc_tại_Việt_Nam)
- [Cổng thông tin dân tộc](http://www.cema.gov.vn)
- [Báo Tin Tức](https://baotintuc.vn)

## 🎓 Công nghệ học tập

Dự án này là ví dụ thực hành về:

- React Hooks & State Management
- TypeScript trong React
- Component-based architecture
- CSS Tailwind & Glass morphism
- SVG mapping & D3.js
- Form handling & validation
- Responsive design patterns

## 📄 License

Dự án này được tạo cho mục đích giáo dục.

---

**Khám phá Vietnam** - Một hành trình trực quan qua địa hình và dân tộc Việt Nam 🌏
