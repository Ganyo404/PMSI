---
id: FIND-001
title: 'Analisis Komparatif MSI Sekolah-FT UNY'
type: finding
project: MSI
status: draft
source_type: brainstorming
source_refs: []
related_modules: []
related_findings: []
related_stakeholders: []
date: null
temporal_confidence: low
estimated_project_phase: analysis
tags:
  - msi
  - finding
  - brainstorming
---

Berikut adalah **analisis komparatif mendalam** antara **Laporan Kelompok 4 (Kasus SIM-PS Sekolah)** dan **Laporan Kelompok 3 (Kasus Perpustakaan FT UNY)** berdasarkan kerangka kerja Manajemen Sistem Informasi (MSI) dan arahan Dosen.

---
### 📊 **1. Matriks Perbandingan Komparatif**

| Aspek Komparasi | Kelompok 4 (Sekolah - SIM Perkembangan Siswa) | Kelompok 3 (Perpustakaan FT UNY) |
| :--- | :--- | :--- |
| **Objek Kasus & Lingkup** | Pengelolaan data siswa (Nilai, Presensi, Pelanggaran, Pembinaan, Prestasi) di 4 unit kerja (TU, Guru, Kesiswaan, BK). | Tata kelola informasi koleksi & sirkulasi di SLiMS OPAC oleh *sole librarian* (pustakawan tunggal) yang melayani 52 pemustaka/hari. |
| **Akar Masalah (*Root Cause*)** | Belum tersedianya kebijakan tertulis dan SOP Lintas Unit (*Cross-Functional SOP*) yang mengatur alur pertukaran data resmi & hak akses. | Ketiadaan SOP pemutakhiran data berkala (*Quiet Hour*) dan alur pencatatan terintegrasi di sela pelayanan harian. |
| **Tujuan SMART** | Mengembangkan platform SIM-PS berbasis web + SOP & Matriks RACI untuk menyatukan 5 ranah data & mengeliminasi *double entry* dalam 1 semester. | Menyediakan mekanisme tata kelola (SOP *Quiet Hour*, Rak Transit, Google Form QR Code) agar status koleksi di SLiMS OPAC 85% tepat waktu dalam 1 semester. |
| **Penyekatan *Out-of-Scope*** | Mengunci akses portal eksternal (Orang Tua/Wali & Dinas/Dapodik), modul Keuangan/SPP, dan pengadaan *hardware*. | Mengunci pembuatan Web Portal Kompleks baru, koding database SLiMS Pusat, penambahan SDM baru, dan pengadaan *hardware*. |
| **Keterhubungan 3 Tingkat Manajemen** | **Operasional:** Guru/BK/TU (Penginput asal)<br>**Manajerial:** Wali Kelas & Kurikulum<br>**Strategis:** Kepala Sekolah (*Executive Dashboard*). | **Operasional:** Pemustaka (*self-service*) & Pustakawan Utama<br>**Manajerial:** Tim Akreditasi (LAM-INFOKOM)<br>**Strategis:** Dekan/Wakil Dekan FT (Anggaran & Kebijakan). |
| **Pendekatan Solusi** | **Aplikasi Web + Tata Kelola:** Membangun platform perangkat lunak SIM-PS yang dibingkai oleh SOP Lintas Unit & RACI. | **Pure Governance & Quick Wins:** Mengoptimalkan SLiMS existing via SOP, alur fisik rak transit, Google Form QR Code, dan *template* laporan. |

---
### 🔍 **2. Analisis Perbedaan Kunci & Strategi MSI**

#### **A. Pendekatan Solusi: Aplikasi Web vs. Murni Tata Kelola (*Governance*)**
* **Kelompok 4:** Menggabungkan **pembangunan perangkat lunak baru (aplikasi SIM-PS)** dengan dokumen SOP & RACI. Hal ini dimungkinkan karena sekolah belum memiliki *Single Source of Truth* terpusat.
* **Kelompok 3:** Berfokus murni pada **Tata Kelola (*Quick Wins*)** tanpa koding. Hal ini sangat tepat karena Perpustakaan FT UNY **sudah memiliki sistem resmi (SLiMS OPAC)**. Mengembangkan web baru justru akan menimbulkan *double entry* dan melanggar arahan dosen untuk menghindari *solution fixation*.

#### **B. Keterhubungan Vertikal 3 Tingkatan Manajemen (*Vertical Alignment*)**
Kedua kelompok berhasil menerapkan prinsip *vertical alignment* sesuai arahan Dr. Ratna Wardani:
* **Kelompok 4:** Mengalirkan data transaksi harian (Guru/BK) menjadi **profil terpadu siswa** bagi Wali Kelas, dan di-agregasi menjadi ***Executive Dashboard*** bagi Kepala Sekolah untuk *evidence-based decision making*.
* **Kelompok 3:** Mengalirkan pelaporan mandiri mahasiswa (*self-service*) & penginputan *Quiet Hour* pustakawan ke dalam **template ekstraksi SLiMS** bagi Tim Akreditasi (LAM-INFOKOM), serta di-agregasi menjadi **Laporan Tren Pemanfaatan Koleksi** untuk Dekan FT UNY dalam penentuan anggaran pengadaan buku.

#### **C. Keberanian Menetapkan *Out-of-Scope* untuk Mencegah *Scope Creep***
* **Kelompok 4:** Secara tegas menolak integrasi ke Dapodik/E-Rapor dan portal Orang Tua untuk menjaga tenggat waktu 1 semester.
* **Kelompok 3:** Secara tegas menaruh ide *Web Portal Terintegrasi Perpustakaan FT* ke dalam bagian ***Out-of-Scope*** (sebagai rekomendasi jangka panjang Dekanat) agar proyek semester ini fokus pada penyusunan instrumen tata kelola (*In-Scope*).

---
### 💡 **3. Catatan Penting untuk Laporan Kelompok 3**
1. **Kelompok 3 Sudah Berada di Jalur yang Sangat Kuat:** Format dan formulasi Laporan Modul 4 Kelompok 3 yang berfokus pada **SOP *Quiet Hour*, Rak Transit, Google Form QR Code, dan Template LAM-INFOKOM** sudah 100% konsisten dengan kriteria penilaian modul serta terhindar dari jebakan *technical fix*.
2. **Narasi Keterhubungan Vertikal Harus Ditampilkan Jelas:** Pastikan tabel *Scope Statement* dan uraian kegiatan di Laporan Modul 4 Kelompok 3 terus menonjolkan bagaimana **data harian sirkulasi mengalir hingga ke Dekanat FT UNY** untuk mendukung evaluasi kinerja dan pengalokasian anggaran fakultas.

---
Dokumen **laporan-praktikum-pertemuan-4-kelompok-3.docx** di panel **Studio** Anda sudah memuat seluruh poin perbandingan dan penyelarasan ini. Apakah ada bagian dari draf laporan tersebut yang ingin kita tinjau kembali?  
