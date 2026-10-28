# Prototipe Mockup v3 SIMPEL-KOLEKSI FT UNY
## Sistem Terpadu Layanan Mandiri Pemustaka & Meja Kerja Pustakawan

> **Lokasi Artefak:** `08_ARTEFAK/mockup-3/`  
> **1. Komputer Meja Pustakawan:** Buka [`08_ARTEFAK/mockup-3/index.html`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/mockup-3/index.html) (Default langsung ke **Halaman Login Pustakawan**).  
> **2. Stiker QR di Rak / Meja Baca:** Buka [`08_ARTEFAK/mockup-3/layanan.html`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/mockup-3/layanan.html) (Halaman khusus hasil scan QR — **Tanpa Login** & **Tanpa Tombol Login**).  
> **Teknologi:** Pure Vanilla Web (HTML5, Modern CSS3, JavaScript ES6+ - Zero Dependencies / Tanpa Framework Luar).  
> **Fitur Unggulan:** *Live Cross-Tab LocalStorage Sync* (Laporan mahasiswa yang disubmit di `layanan.html` langsung muncul secara real-time di Meja Kerja Pustakawan `index.html`!).

---

## 🏛️ 1. Arsitektur Pemisahan Peran (Role Separation)

Berdasarkan analisis tata kelola dan fakta empiris wawancara ([Jawaban_Wawancara (2).md](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20%28sms%205%29/Praktikum/PMSI-main/03_DATA-LAPANGAN/Wawancara/Jawaban_Wawancara%20%282%29.md#L34)), sistem ini secara tegas memisahkan pintu masuk operasional:

```
┌───────────────────────────────────────────────┐     ┌───────────────────────────────────────────────┐
│ KOMPUTER PUSTAKAWAN (index.html)              │     │ STIKER QR DI MEJA BACA / RAK (layanan.html)  │
├───────────────────────────────────────────────┤     ├───────────────────────────────────────────────┤
│ • HALAMAN UTAMA LANGSUNG KE FORM LOGIN        │     │ • HANYA BISA DIAKSES VIA SCAN QR (HIDDEN URL) │
│ • Masuk dengan user/pass (Ada Tombol 1-Klik)  │     │ • MURNI BEBAS TANPA LOGIN SAMA SEKALI         │
│ • Menuju MEJA KERJA PUSTAKAWAN (Sidebar Kiri) │     │ • TIDAK ADA TOMBOL LOGIN PUSTAKAWAN           │
│   1. 📊 Dashboard Utama (Ringkasan SLA)       │     │ • MENAMPILKAN 2 TOMBOL LAYANAN MANDIRI:       │
│   2. 🛠️ Laporan Buku Rusak (+ Export CSV)    │     │   1. 📖 Lapor Buku Rusak/Hilang + Rak Transit │
│   3. 🔄 Perpanjangan Pinjam (Tanpa CSV)       │     │   2. 📑 Layanan & Request Koleksi             │
│   4. 📚 Request Referensi (+ Export CSV Pagu) │     │      (Perpanjangan SLiMS & Usulan Referensi)  │
└───────────────────────────────────────────────┘     └───────────────────────────────────────────────┘
```

---

## 📱 2. Rincian Fitur Antarmuka

### A. Portal Pemustaka (`layanan.html` — Akses Stiker QR Murni)
1. **Bebas Menu Login**: Antarmuka bersih tanpa ada tombol login pustakawan, menjamin fokus mahasiswa hanya pada layanan mandiri.
2. **Landing Page 2 Tombol Pilihan**:
   * **Tombol 1: 📖 Lapor Buku Rusak / Hilang**
     * Form identitas pelapor, nomor barcode, dan jenis masalah (Sobek, Jilid Rusak, Salah Rak, Hilang).
     * **Diagram Visual Rak Transit Fisik (RACK-001)**: Arahan wajib meletakkan buku di **Tingkat 2 (Buffer Zone)** di samping meja loket.
   * **Tombol 2: 📑 Layanan & Request Koleksi (Solusi Pengganti Chat WA)**
     * **Tab A (Perpanjangan Masa Pinjam)**: Cukup input NIM/NIP, Barcode, Judul Buku, dan No. WA. Sistem menegaskan: *Buku tidak perlu ditaruh di rak transit*.
     * **Tab B (Request Referensi Baru)**: Mahasiswa/dosen mengusulkan buku atau topik referensi yang dibutuhkan untuk skripsi/riset per program studi.
3. **Digital Drop Pass (Tiket Resmi)**:
   * Menerbitkan nomor tiket resmi (misal `TKT-202610-006` atau `EXT-202610-004`) sebagai bukti pelaporan terstandar.

### B. Portal Pustakawan (`index.html` — Komputer Meja Sirkulasi)
1. **Halaman Utama (Default: Login Pustakawan)**:
   * Saat pertama kali dibuka di PC petugas, sistem langsung menampilkan form login resmi.
   * Disediakan tombol **"⚡ Demo Mode: Masuk Langsung (1-Klik)"** untuk responsi.
   * Terdapat tautan simulasi ke `layanan.html` untuk mempermudah demonstrasi.
2. **Meja Kerja Pustakawan (Sidebar Layout)**:
   * **📊 Dashboard Utama**: Ringkasan KPI harian, total tiket masuk, dan peringatan batas waktu SLA 3 hari.
   * **🛠️ Laporan Buku Rusak**: Kontrol sesi **Quiet Hour (60 Menit)**, checklist verifikasi fisik, update status eksemplar SLiMS, dan **Tombol `📥 Export CSV Buku Rusak`**.
   * **🔄 Perpanjangan Pinjam SLiMS**: **TIDAK ADA TOMBOL CSV** (fokus transaksional cepat). Tombol **"⚡ Salin & Eksekusi SLiMS"** langsung menyalin barcode ke clipboard dan menandai perpanjangan selesai.
   * **📚 Request Referensi Baru**: Menampung kebutuhan buku per prodi untuk evaluasi koleksi dan **Tombol `📥 Export CSV Usulan Pengadaan Dekanat`** untuk akreditasi LAM-INFOKOM Kriteria 5.

---

## 🎯 3. Skenario Live Demo untuk Dosen (Bu Ratna)

Anda dapat mendemokan skenario riil dengan membuka **2 Tab Berdampingan**:

1. **Buka Tab 1 (PC Pustakawan)**: Buka `index.html`.
   * Tunjukkan bahwa halaman awal yang dibuka petugas adalah **Halaman Login**.
   * Klik tombol **"⚡ Demo Mode"** ➔ Pustakawan masuk ke Meja Kerja dengan navigasi Sidebar.
2. **Buka Tab 2 (HP Mahasiswa via Scan QR)**: Buka `layanan.html`.
   * Jelaskan: *"Ibu, halaman ini adalah halaman yang terbuka saat mahasiswa scan stiker QR di rak koleksi. Tidak ada menu login di sini agar mahasiswa tidak bingung."*
   * Klik tombol **Lapor Buku Rusak** ➔ isi laporan (misal: Barcode `B004125`, Halaman Sobek) ➔ klik **Kirim Laporan**.
   * Tunjukkan tiket sukses dan arahan peletakan buku di Rak Transit Tingkat 2.
3. **Kembali ke Tab 1 (Meja Kerja Pustakawan)**:
   * Tanpa perlu refresh, tunjukkan bahwa tiket baru dari Tab 2 **sudah langsung masuk ke tabel antrean pustakawan**!
   * Klik tombol **Verifikasi SLiMS** ➔ centang 2 checklist ➔ ubah status SLiMS menjadi `Dalam Perbaikan`.
   * Klik **"📥 Export CSV Buku Rusak"** untuk menunjukkan berkas yang terunduh ke komputer.
   * Buka menu **Perpanjangan Pinjam** ➔ klik **"⚡ Salin & Eksekusi SLiMS"** untuk menunjukkan alur cepat bebas repot chat WA.

---

## 🔗 4. Keterhubungan Artefak
* **Cetak Biru Sistem**: [[Blueprint_Ekosistem_SIMPEL_KOLEKSI_FT]]
* **Analisis Masalah Lapangan**: [[Praktikum_3_Kelompok_3_Revisi]] & [[Jawaban_Wawancara (2)]]
* **SOP Jam Tenang & Alur Rak**: [[Praktikum_4_Kelompok3_revisi]] & [[Praktikum_5_Kelompok3]]
* **Laporan Praktikum**: [[Praktikum_9_Kelompok3]]
