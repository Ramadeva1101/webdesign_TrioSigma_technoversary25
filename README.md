# TrashPedia - Interactive Waste Journey

## 👥 Nama Anggota dan Asal Instansi

**Universitas Primakara**

1. Ken Jati Kusumo
2. I Gede Ramadeva
3. Alan Brian Frederick

---

## 🌍 Judul Website

**TrashPedia** - Warisan Sampah Untuk Bumi Kita

---

## 📖 Deskripsi Website

TrashPedia adalah platform edukasi interaktif yang menghadirkan visualisasi perjalanan sampah dari tangan kita hingga ratusan tahun ke depan. Website ini dirancang untuk meningkatkan kesadaran masyarakat tentang dampak jangka panjang sampah terhadap lingkungan melalui pengalaman visual yang immersive dan data yang informatif.

### Fitur Utama:

- **🗺️ Ekspedisi Interaktif** - Scroll-based visualization yang menampilkan perjalanan sampah melalui berbagai lapisan bumi dengan timeline dekomposisi yang akurat
- **📊 Data & Statistik** - Visualisasi data sampah Indonesia (2019-2024) menggunakan Chart.js dengan informasi komunitas pengelola sampah
- **♻️ Panduan Daur Ulang** - Katalog interaktif dengan 13 contoh transformasi sampah menjadi produk berguna, dilengkapi modal detail untuk setiap item
- **📰 Berita Krisis Sampah** - Kumpulan artikel terkini tentang permasalahan sampah di Indonesia
- **💡 Fun Facts** - Fakta-fakta menarik seputar sampah dalam format carousel yang engaging
- **📱 Fully Responsive** - Desain yang optimal untuk semua ukuran layar (mobile, tablet, desktop)

### Teknologi yang Digunakan:

- **HTML5** - Struktur halaman
- **Tailwind CSS** - Framework CSS untuk styling dan design system
- **Alpine.js** - JavaScript framework untuk interaktivity dan state management
- **Chart.js** - Library untuk visualisasi data dalam bentuk grafik
- **Lucide Icons** - Icon library untuk UI elements

---

## 🚀 Cara Instalasi & Menjalankan Project

### Prasyarat

Pastikan sudah terinstall:
- Node.js (versi 14 atau lebih baru)
- npm (Node Package Manager)
- Git

### Langkah Instalasi

1. **Clone Repository**
   ```bash
   git clone https://github.com/username/trashpedia.git
   cd trashpedia
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   
   Untuk development dengan auto-rebuild CSS:
   ```bash
   npm run dev
   ```

4. **Build untuk Production**
   
   Untuk compile dan minify CSS:
   ```bash
   npm run build
   ```

5. **Buka di Browser**
   
   Buka file `public/index.html` di browser, atau gunakan Live Server:
   - Jika menggunakan VS Code, install extension "Live Server"
   - Klik kanan pada `public/index.html` → "Open with Live Server"
   - Website akan terbuka di `http://localhost:5500`

### Struktur Folder

```
trashpedia/
├── public/                 # File production
│   ├── index.html         # Homepage
│   ├── about.html         # Halaman tentang
│   ├── journey.html       # Halaman ekspedisi interaktif
│   ├── data.html          # Halaman data & statistik
│   ├── recycle.html       # Halaman panduan daur ulang
│   ├── contact.html       # Halaman kontak
│   ├── assets/
│   │   └── tailwind.css   # Compiled & minified CSS
│   └── img/               # Folder gambar dan aset
├── src/
│   └── styles/
│       └── tailwind.css   # Source CSS untuk development
├── package.json           # Dependencies dan scripts
├── tailwind.config.js     # Konfigurasi Tailwind CSS
└── README.md             # Dokumentasi project
```

### Catatan Penting

- Semua dependencies JavaScript (Alpine.js, Chart.js, Lucide Icons) dimuat via CDN, sehingga tidak perlu instalasi tambahan
- File CSS sudah di-compile dan di-minify, siap untuk production
- Untuk edit styling, ubah file `src/styles/tailwind.css` kemudian jalankan `npm run build`

---

## 📄 License

© 2025 All rights reserved.

---

**Dibuat untuk Lomba Web Design 2025**
**Universitas Primakara**
