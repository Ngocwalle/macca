# Magic Christmas - Interactive 3D Experience

## 🎄 Mô tả
Một trải nghiệm Giáng Sinh 3D tương tác với hiệu ứng hạt, hình ảnh và âm nhạc.

## 🚀 Cài đặt và Chạy

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy server
```bash
npm start
```

### 3. Mở trình duyệt
Truy cập: `http://localhost:3000`

## ⌨️ Điều khiển

- **Phím 1**: Hiển thị Cây Giáng Sinh 🎄
- **Phím 2**: Hiệu ứng Nổ (Explode) 💥
- **Phím 3**: Trái Tim (Heart) ❤️
- **Phím 4**: Xem Ảnh 📷
- **Mũi tên Trái/Phải**: Xoay cảnh
- **Phím Space**: Bật/tắt tự động xoay
- **Mũi tên Lên/Xuống**: Chọn ảnh (khi ở chế độ Photo)

## 📁 Cấu trúc thư mục

```
giang_sinh_an_lanh/
├── index.html          # File HTML chính
├── server.js           # Node.js Express server
├── package.json        # Cấu hình npm
├── audio.mp3           # Nhạc nền
├── image1.jpeg         # Ảnh 1
├── image2.jpeg         # Ảnh 2
├── image3.jpeg         # Ảnh 3
├── image4.jpeg         # Ảnh 4
└── image5.jpeg         # Ảnh 5
```

## 🎨 Tính năng

- ✨ Hiệu ứng hạt 3D với Three.js
- 🎵 Nhạc nền tự động phát
- 🖼️ Hiển thị 5 ảnh với hiệu ứng
- ⌨️ Điều khiển bằng bàn phím
- 🎄 4 chế độ hiển thị: Cây, Nổ, Trái Tim, Ảnh
- 💫 Hiệu ứng ánh sáng và màu sắc động

## 📝 Ghi chú

- Port mặc định: 3000
- Có thể thay đổi port bằng biến môi trường PORT
- Đảm bảo có đủ 5 file ảnh (image1-5.jpeg) và file audio.mp3

---
© by vandiep
