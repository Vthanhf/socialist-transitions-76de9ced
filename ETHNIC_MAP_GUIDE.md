# Ethnic Distribution Map - Bản Đồ Phân Bố Dân Tộc

## Overview / Giới Thiệu

Trang tra cứu "Phân Bố Dân Tộc Việt Nam" là một công cụ tương tác cho phép bạn khám phá sự phân bố địa lý của 54 dân tộc Việt Nam trên bản đồ.

Trang này thể hiện đặc tính **"đan xen"** của các dân tộc - tại một điểm địa lý, có thể có sự hiện diện xen lẫn của nhiều dân tộc khác nhau.

## Features / Tính Năng

### 1. **Interactive Map / Bản Đồ Tương Tác**

- Hiển thị bản đồ Việt Nam với đầy đủ các tỉnh thành
- Sử dụng Leaflet.js cho khả năng tương tác mượt mà
- Zoom và pan để khám phá chi tiết

### 2. **Ethnic Group Selector / Chọn Dân Tộc**

- Danh sách 54 dân tộc được công nhận của Việt Nam
- Tìm kiếm nhanh theo tên (Tiếng Việt hoặc tiếng Anh)
- Chọn một hoặc nhiều dân tộc cùng lúc
- Xem dân số của mỗi dân tộc

### 3. **Heatmap Visualization / Heatmap Thể Hiện Mật Độ**

- **Kích thước vòng tròn**: Thể hiện mật độ dân cư
  - Vòng tròn lớn = mật độ cao
  - Vòng tròn nhỏ = mật độ thấp
- **Độ trong suốt**: Phản ánh tỉ lệ dân số
  - Màu sẫm = nhiều dân tộc tại vùng
  - Màu nhạt = ít dân tộc tại vùng
- **Màu sắc**: Mỗi dân tộc có màu riêng để dễ phân biệt

### 4. **Interactive Popups / Popup Thông Tin**

Khi bạn click vào một điểm trên bản đồ, sẽ xuất hiện popup chứa:

- Tên dân tộc (với màu sắc đặc trưng)
- Tên tỉnh/thành phố
- Tổng dân số dân tộc đó
- Ngôn ngữ/phương ngữ sử dụng
- Trang phục truyền thống (nếu có)
- Mô tả về dân tộc

### 5. **Map Legend / Chú Thích Bản Đồ**

Khi bạn chọn dân tộc, sẽ có chú thích ở góc dưới-phải:

- ⚪ Lớn = Mật độ dân cư cao
- ⚪ Trung bình = Mật độ dân cư trung bình
- ⚪ Nhỏ = Mật độ dân cư thấp

## How to Use / Cách Sử Dụng

### Step 1: Chọn dân tộc

1. Nhìn vào danh sách dân tộc bên tay trái
2. Nhập tên dân tộc trong ô tìm kiếm (hoặc để trống để xem tất cả)
3. Click vào tên dân tộc muốn xem

### Step 2: Xem bản đồ

- Khi bạn chọn một dân tộc, những vòng tròn có màu sắc tương ứng sẽ xuất hiện trên bản đồ
- Kích thước vòng tròn thể hiện mật độ dân cư của dân tộc đó ở khu vực đó

### Step 3: Xem chi tiết

- **Hover** hoặc **click** vào vòng tròn để xem popup
- Popup sẽ hiển thị thông tin chi tiết về dân tộc ở khu vực đó

### Step 4: Chọn nhiều dân tộc

- Bạn có thể click vào nhiều tên dân tộc để xem sự "đan xen" của chúng
- Các vòng tròn của những dân tộc khác nhau sẽ hiển thị trên cùng một điểm nếu họ cùng sống ở vùng đó
- Điều này thể hiện tính chất đa dân tộc của các khu vực nhất định

### Step 5: Xóa lựa chọn

- Click "Xóa tất cả" để bỏ chọn tất cả dân tộc
- Hoặc click vào dấu "✕" trên badge để bỏ chọn từng dân tộc

## Understanding the "Interspersed" Nature / Hiểu Về Tính "Đan Xen"

Một trong những đặc điểm quan trọng của cấu trúc dân tộc Việt Nam là tính **"đan xen"** (interspersed) giữa các dân tộc.

**Ví dụ:**

- Ở vùng Tây Bắc, bạn sẽ thấy các dân tộc Thái, Mông, Dao, Kho Mú cùng sinh sống
- Ở vùng Tây Nguyên, các dân tộc Ê Đê, Gia Rai, Ba Na phân bố xen kẽ nhau
- Dân tộc Kinh (đa số) phân bố khắp nơi, đặc biệt ở các thành phố lớn

**Tại sao điều này quan trọng?**

- Cho thấy lịch sử di cư và định cư của các dân tộc
- Phản ánh mối quan hệ giao thương, hôn nhân, và trao đổi văn hóa
- Là cơ sở cho chính sách bình đẳng dân tộc của Việt Nam

## Data Source / Nguồn Dữ Liệu

- **Tên dân tộc và dân số**: Dựa trên thứ tự của Bộ Dân tộc và Tôn giáo Việt Nam
- **Vị trí địa lý**: Dựa trên tọa độ trung tâm của các tỉnh/thành phố
- **Mô tả dân tộc**: Từ các nguồn như Wikipedia và tài liệu chính thức của Bộ

Tham khảo:

- http://www.cema.gov.vn/gioi-thieu/cong-dong-54-dan-toc.htm
- https://vi.wikipedia.org/wiki/Các_dân_tộc_tại_Việt_Nam

## Technical Information / Thông Tin Kỹ Thuật

### Technologies Used / Công Nghệ Sử Dụng

- **React 18**: Framework giao diện người dùng
- **TypeScript**: Ngôn ngữ lập trình cơ bản
- **Leaflet.js**: Thư viện bản đồ tương tác
- **Shadcn/ui**: Thành phần UI đẹp mắt
- **Tailwind CSS**: CSS framework

### Browser Support / Hỗ Trợ Trình Duyệt

- Chrome, Firefox, Safari, Edge (phiên bản gần đây)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips & Tricks / Mẹo Vặt

1. **Tìm kiếm nhanh**: Nhập số lượng dân tộc bạn muốn để nhanh chóng tìm những dân tộc lớn
   - VD: Gõ "1" sẽ hiển thị những nhóm có dân số bắt đầu bằng "1" triệu

2. **Khám phá vùng**: Click vào "+" để zoom vào các vùng cụ thể trên bản đồ

3. **So sánh**: Chọn 2-3 dân tộc để xem sự giao thoa (overlap) của chúng

4. **Học vùng địa lý**: Kết hợp việc xem bản đồ với việc học tên các tỉnh Việt Nam

## FAQs / Câu Hỏi Thường Gặp

**Q: Tại sao một số tỉnh có nhiều vòng tròn chồng lấp?**
A: Điều này có nghĩa là nhiều dân tộc sống cùng nhau ở vùng đó. Đây chính là tính "đan xen" của các dân tộc Việt Nam.

**Q: Dân số con số có chính xác không?**
A: Những con số này dựa trên las survey gần đây nhất. Để thông tin chính xác 100%, vui lòng tham khảo các tài liệu chính thức từ Bộ Dân tộc và Tôn giáo.

**Q: Tại sao một số tỉnh không có vòng tròn?**
A: Một số tỉnh có thể không có dân tộc thiểu số đáng kể. Hoặc có thể là dữ liệu không đầy đủ.

**Q: Có thể hỗ trợ tiếng Anh không?**
A: Tên dân tộc đa số có phiên bản tiếng Anh. Bạn có thể tìm kiếm bằng tên tiếng Anh.

## Feedback / Phản Hồi

Nếu bạn có suggestions hoặc tìm thấy lỗi, vui lòng liên hệ hoặc tạo issue.
