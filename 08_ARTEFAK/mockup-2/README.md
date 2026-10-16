# Mockup v2 SIMPEL-KOLEKSI FT UNY (Modern Enterprise Redesign)

> **Lokasi Artefak:** `08_ARTEFAK/mockup-2/`  
> **Akses Langsung:** Buka file `index.html` di browser atau jalankan server lokal `http://localhost:8092/index.html`  
> **Teknologi:** Pure Vanilla HTML5, CSS3, & Modern Vanilla JavaScript (Zero External Frameworks / Tanpa Ketergantungan Eksternal)

---

## 🏛️ Filosofi Rombak Total Desain (Modern Institutional Style)

Desain `mockup-2` ini telah dirombak secara menyeluruh untuk menghadirkan visual kelas enterprise akademik FT UNY yang elegan, bersih, dan profesional. Menghilangkan elemen usang (garis buku tulis bergaris, font default mentah, atau tata letak kolom yang sempit) dan menggantinya dengan:

1. **Design Tokens & Color Palette Resmi:**
   - **Deep Institutional Navy** (`#061124`, `#0A1931`, `#153265`): Mencerminkan wibawa institusi Fakultas Teknik UNY.
   - **Electric & Cyan Accents** (`#2563EB`, `#38BDF8`): Memberikan sentuhan teknologi modern dan interaktif.
   - **Clean Slate Neutrals** (`#F8FAFC`, `#F1F5F9`, `#FFFFFF`): Latar belakang bersih dengan kontras tinggi sesuai standar aksesibilitas WCAG.
   - **Semantic SLA Status:**
     - 🟢 **Hijau Zamrud** (`#10B981`): Masih dalam batas waktu aman / Selesai sinkron.
     - 🟡 **Kuning Amber** (`#F59E0B`): Hari terakhir batas waktu SOP.
     - 🔴 **Merah Karang** (`#EF4444`): Melebihi batas toleransi SLA SOP-001.

2. **Tipografi Modern Berkarakter:**
   - **Font Utama:** `Plus Jakarta Sans` — sans-serif modern berbobot tinggi untuk kejelasan hierarki teks.
   - **Font Kode / Nomor Panggil:** `JetBrains Mono` — monospace presisi untuk barcode, call number DDC, dan kode tiket.

3. **Tata Letak Seimbang (Fixed Grid & Flexbox):**
   - Menghilangkan bug teks terpuntir/vertikal pada panduan langkah.
   - Menambahkan diagram interaktif **RACK-001** langsung di samping form agar pemustaka paham fisik peletakan buku.
   - Mengintegrasikan 4 Executive KPI Cards pada Dashboard Pimpinan.

---

## 📱 4 Tampilan Antarmuka dan Solusi Tata Kelola

| Tampilan | Artefak Tata Kelola | Masalah yang Diselesaikan | Implementasi Berbiaya Nol (Pure Governance) |
| :--- | :--- | :--- | :--- |
| **1. Slip Pemustaka** | `FORM-001` | Mengeliminasi antrean loket sirkulasi akibat pelaporan buku rusak/salah letak secara lisan. | Formulir Google Form diakses lewat stiker QR di meja baca. |
| **2. Workbench Pustakawan** | `SOP-001`, `DASH-001` | Menghilangkan beban kerja verifikasi acak lewat jadwal rutin **Quiet Hour (Jumat 08.00–09.00 WIB)**. | Tab Kanban / Sheet Antrean terstruktur dengan audit trail per tiket. |
| **3. Pimpinan & Akreditasi** | `TMP-001`, `DASH-001` | Menyediakan bukti kepatuhan mutu sumber belajar otomatis untuk **LAM-INFOKOM Kriteria 5**. | Template analisis CSV/Excel yang diolah langsung dari metadata SLiMS. |
| **4. Signage RACK-001** | `RACK-001` | Mencegah tercampurnya buku rusak dengan buku normal yang selesai dibaca di tempat. | Cetak poster A3/A5 memanfaatkan rak buku perpustakaan yang sudah ada. |

---

## 🎯 Panduan Interaksi Demo (Siap Dipresentasikan)

1. **Tab Pemustaka (`FORM-001`):**
   - Masukkan barcode contoh (misal: `B004125`) atau judul buku.
   - Pilih salah satu masalah (sobek, halaman hilang, salah rak, atau tidak ditemukan).
   - Klik **"Kirim Laporan & Dapatkan Arahan Rak 🚀"**.
   - Form bertransformasi menjadi **Digital Drop Pass** dengan diagram rak penampungan tingkat 2.

2. **Tab Pustakawan (`SOP-001`):**
   - Tombol **"Mulai Sesi Verifikasi"** mengaktifkan timer 60 menit Quiet Hour mingguan.
   - Filter kartu laporan berdasarkan kelas DDC (`000`, `500`, `600`, `370`).
   - Klik kartu tiket di kolom *Rak Penampungan*: panel kanan membuka checklist verifikasi fisik 2 tahap.
   - Centang pemeriksaan fisik → klik konfirmasi → pilih status katalog SLiMS (`Repair`, `Missing`, `Available`, `Weeding`) → tiket otomatis berpindah kolom.

3. **Tab Pimpinan & Akreditasi:**
   - Menyajikan 4 KPI ringkas: Kepatuhan SLA, Rata-rata Siklus Hari, Total Pulih, dan Rasio Eks/Judul.
   - Tabel Borang LAM-INFOKOM Kriteria 5 dengan visual per-prodi.
   - Tombol unduh data: **"Unduh Jejak Audit (CSV)"** & **"Unduh Matriks Prodi (CSV)"**.

4. **Tab Signage RACK-001:**
   - Poster visual siap cetak dengan pembagian Tingkat 1 (Selesai Baca) dan Tingkat 2 (Koleksi Masalah + QR).
   - Tombol cetak langsung membuka dialog cetak browser.

---

## 🔗 Keterhubungan Dokumen Praktikum

- [[Blueprint_Ekosistem_SIMPEL_KOLEKSI_FT]]
- [[Praktikum_3_Kelompok_3_Revisi]]
- [[Praktikum_4_Kelompok3_revisi]]
- [[Praktikum_5_Kelompok3]]
- [[Praktikum_6_Kelompok3]]
- [[Praktikum_8_Kelompok3]]
- [[Praktikum_9_Kelompok3]]
