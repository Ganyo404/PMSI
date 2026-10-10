# Prototipe Mockup SIMPEL-KOLEKSI FT UNY

> **Sistem Pelaporan Mandiri Koleksi Terpadu (SIMPEL-KOLEKSI FT)**  
> **Unit Kerja:** Perpustakaan Fakultas Teknik, Universitas Negeri Yogyakarta  
> **Artefak Kode:** `08_ARTEFAK/mockup/`  
> **Status:** High-Fidelity Interactive Mockup (v1.1 - Fully Responsive Web & Desktop Portal)  
> **Teknologi:** Pure Vanilla Web (HTML5, Modern CSS3, JavaScript ES6+ - Zero External Dependencies)

---

## 1. Rasionalisasi Desain Responsif & Antarmuka

Berdasarkan analisis tata kelola sistem informasi dan kebutuhan riil di lapangan (*field-grounded*), sistem SIMPEL-KOLEKSI FT dirancang sebagai **Web Application yang Sepenuhnya Responsif**, bukan sekadar aplikasi seluler statis:

1. **Aksesibilitas Multi-Perangkat (Pemustaka):**
   - **Layar Desktop / Laptop:** Ketika mahasiswa sedang belajar di meja baca perpustakaan atau mengakses katalog OPAC melalui laptop, portal pelaporan mandiri menyajikan antarmuka desktop yang luas (2 kolom) dilengkapi dengan kartu *Live Digital Ticket Preview* secara real-time dan panduan alur penyerahan fisik ke Rak Transit (RACK-001).
   - **Layar Smartphone:** Ketika mahasiswa memindai stiker QR Code di meja baca atau Rak Transit menggunakan kamera ponsel, antarmuka secara otomatis dan mulus menyusut menjadi form mobile yang ergonomis dan touch-friendly tanpa bezel buatan yang mengganggu.
2. **Dual-Mode Pratinjau Presentasi (Dosen / Responsi):**
   - Disediakan tombol sakelar di bagian atas portal:
     - `🖥️ Tampilan Web Desktop (Default)`: Tampilan sistem web responsif standar kampus.
     - `📱 Simulator Layar HP`: Mode opsional yang membungkus antarmuka ke dalam frame smartphone 390px jika pengguna ingin mendemokan simulasi pemindaian QR ponsel kepada dosen (Bu Ratna).
3. **Pustakawan Workspace (Desktop Staff):**
   - Antrean tiket verifikasi koleksi dengan indikator SLA 3 hari kerja, filter status, pencarian, checklist verifikasi fisik, dan simulasi sesi *Quiet Hour* (Jumat 08.00 - 09.00 WIB) untuk pemutakhiran data ke SLiMS 9 Bulian.
4. **Dekanat Executive Dashboard:**
   - Visualisasi grafik batang transaksi peminjaman per program studi, rasio keterpakaian koleksi, grafik donat kondisi eksemplar, dan rekomendasi alokasi anggaran pengadaan buku 2027 berbasis bukti (*evidence-based procurement*) untuk pemenuhan akreditasi LAM-INFOKOM Kriteria 5.
5. **Blueprint Tata Ruang (Spatial Map):**
   - Denah interaktif penempatan Rak Transit 2 tingkat (RACK-001), stand akrilik QR Code, counter sirkulasi, dan meja baca sebagai *buffer zone* fisik.

---

## 2. Struktur File Mockup

| File | Ukuran | Deskripsi & Peran Fungsional |
| :--- | :--- | :--- |
| `index.html` | ~35 KB | Struktur semantik HTML5, navigasi 4 role (Pemustaka, Pustakawan, Dekanat, Denah), form pelaporan, modal verifikasi, dan modal tiket sukses. |
| `styles.css` | ~45 KB | Desain visual High-Fidelity bertema UNY Navy (`#0f2b5c`) dan Cyan (`#0284c7`), glassmorphism, grid responsif, media queries untuk mobile/tablet/desktop, dan animasi mikro. |
| `app.js` | ~24 KB | Logika interaktif: role switching, mode simulator toggle, sinkronisasi real-time tiket, simulasi scan barcode, uploader foto, timer Quiet Hour, filter antrean, dan ekspor borang CSV. |

---

## 3. Cara Menjalankan

Mockup ini dibangun dengan standar **Zero External Dependency** (tanpa memerlukan npm, Vite, Tailwind, atau server backend). 

Dapat dijalankan langsung dengan cara:
1. Buka file `08_ARTEFAK/mockup/index.html` menggunakan peramban web modern apa pun (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
2. Atau jalankan melalui live server lokal jika diinginkan:
   ```powershell
   # Contoh menjalankan dengan Python built-in server:
   cd "08_ARTEFAK\mockup"
   python -m http.server 8080
   ```
   Lalu buka peramban di `http://localhost:8080`.

---

## 4. Keterhubungan Artefak Tata Kelola MSI

Mockup interaktif ini merupakan perwujudan konkret (*systemic artifact output*) dari:
- [[08_ARTEFAK/Blueprint_Ekosistem_SIMPEL_KOLEKSI_FT.md|Blueprint Ekosistem SIMPEL-KOLEKSI FT (BP-MSI-001)]]
- [[02_LAPORAN/Modul_1_Peran_Sistem_Informasi.md|Modul 1: Strategi Tata Kelola Informasi]]
- [[02_LAPORAN/Modul_3_Arsitektur_Sistem_Informasi.md|Modul 3: Arsitektur Enterprise 4-Layer & Aliran Data SLiMS]]
- [[02_LAPORAN/Modul_5_Siklus_Pengembangan_Sistem.md|Modul 5: SDLC & Spesifikasi Fungsional]]
- [[02_LAPORAN/Modul_6_Evaluasi_Penerapan_Sistem_Informasi.md|Modul 6: Evaluasi HOT-Fit & Kriteria 5 LAM-INFOKOM]]
