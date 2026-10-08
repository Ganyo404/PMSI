---
id: FIND-006
title: "Integrasi Portal Perpustakaan FT"
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
Berikut adalah rincian pembagian isi web portal terintegrasi beserta masalah spesifik yang diselesaikan untuk masing-masing dari 4 entitas/unit kerja:

### 1\. Perpustakaan FT UNY (Pustakawan Tunggal / Pengelola Operasional)

* **Isi & Fitur di Web Portal**:  
* **Otomasi Rekapitulasi Sirkulasi**: Skrip/template ekspor otomatis yang menarik dan mengolah data transaksi harian SLiMS (peminjaman, pengembalian, denda) tanpa perlu dihitung manual 1\.  
* **Modul Pemutakhiran Status Koleksi & *Offline Sync***: Form cepat untuk memperbarui status fisik buku (tersedia, dipinjam, rusak, hilang) serta form input sementara saat terjadi mati listrik/gangguan jaringan 1, 2\.  
* **Panel *Quality Control* Tenaga Bantuan**: Fitur supervisi dan verifikasi data *entry* yang dilakukan mahasiswa magang/PKL sebelum masuk permanen ke basis data 3-5.  
* **Masalah Spesifik yang Diselesaikan**:  
* **Keterbatasan Waktu & Beban Kerja Pustakawan Tunggal**: Pustakawan FT harus mengelola 3 layanan sekaligus (sirkulasi, referensi, dan *digital library*) di sela-sela pelayanan fisik, sehingga pemutakhiran data sering tertunda 6-10.  
* **Inkonsistensi OPAC SLiMS dengan Rak Fisik**: Mencegah terjadinya situasi di mana status buku di OPAC SLiMS tercatat "Tersedia", padahal kondisi fisiknya sudah rusak atau hilang 11, 12\.  
* **Keterlambatan Pencatatan Cadangan & *Human Error***: Memangkas jeda pemindahan data manual saat sistem *offline* serta mencegah kesalahan penginputan oleh tenaga magang 2, 3, 13, 14\.

### 2\. UPT Perpustakaan Pusat & Tim IT (Registrasi / SIAKAD UNY)

* **Isi & Fitur di Web Portal**:  
* **Panel Pemantauan Sinkronisasi Keanggotaan SIAKAD**: Jalur otomatisasi sinkronisasi data mahasiswa aktif yang telah melakukan registrasi ulang di SIAKAD ke pangkalan data SLiMS per semester 3, 9, 15\.  
* **Modul Verifikasi Duplikasi Pengadaan**: Fitur koordinasi usulan buku baru dari prodi/fakultas yang langsung dicocokkan dengan basis data katalog terpusat SLiMS 3, 16-18.  
* **Matriks Hak Akses Terpusat (*Access Control Matrix*)**: Pengaturan wewenang login dan batasan akses antar-unit di lingkungan universitas 19, 20\.  
* **Masalah Spesifik yang Diselesaikan**:  
* **Data Anggota Tidak *Up-to-Date* Saat Pergantian Semester**: Mengatasi masalah mahasiswa aktif yang tertahan tidak bisa meminjam buku karena data registrasi ulang semester baru dari SIAKAD belum masuk ke SLiMS 3, 9, 14\.  
* **Risiko Duplikasi Pengadaan Koleksi**: Menghindari pembelian koleksi fisik baru di tingkat fakultas yang ternyata sudah tersedia di SLiMS Pusat 3, 16, 17\.  
* **Fragmentasi Data & Akses Tanpa Wewenang**: Menjamin *Single Source of Truth* agar data keanggotaan dan pangkalan data terpusat aman serta konsisten 15, 19, 20\.

### 3\. Pimpinan Fakultas (Dekanat \- Dekan & Wakil Dekan FT UNY)

* **Isi & Fitur di Web Portal**:  
* **Dashboard Grafik Pemanfaatan Koleksi**: Tampilan visual (*real-time*) mengenai tren peminjaman buku per departemen/prodi, statistik pengunjung, dan rasio keterpakaian koleksi 8, 21, 22\.  
* **Panel Rekomendasi Pengadaan Berbasis Data (*Evidence-Based Procurement*)**: Ringkasan data topik/judul buku yang paling sering dicari dan dibutuhkan sebagai dasar alokasi anggaran tahunan 21, 23, 24\.  
* **Masalah Spesifik yang Diselesaikan**:  
* **Keterlambatan Laporan Statistik ke Dekanat**: Dekan/WD tidak perlu lagi menunggu laporan manual semesteran yang sering tertunda akibat antrean pekerjaan operasional pustakawan 8, 23, 25, 26\.  
* **Pengusulan Anggaran Pengadaan yang Subjektif**: Memindahkan dasar keputusan pengadaan buku tahunan dari sekadar usulan subjektif menjadi berbasis data kebutuhan pemustaka yang terukur 21, 23, 26\.

### 4\. Tim Akreditasi Program Studi (LAM-INFOKOM / BAN-PT)

* **Isi & Fitur di Web Portal**:  
* **Portal Unduh Bukti Fisik Akreditasi (*Evidence Export \- Read Only*)**: Fitur eksklusif untuk mengunduh rekapitulasi data ketersediaan buku spesifik prodi, rasio peminjaman, dan daftar koleksi 5 tahun terakhir dalam format borang akreditasi 12, 23, 27, 28\.  
* **Modul Rekapitulasi Pustaka Digital & E-Journal**: Grafik pemanfaatan koleksi digital dan akses jurnal yang mendukung kurikulum prodi 8, 12, 27\.  
* **Masalah Spesifik yang Diselesaikan**:  
* **Penyiapan Data Akreditasi Secara Mendadak**: Tim akreditasi prodi tidak perlu lagi meminta laporan manual secara berulang kali kepada pustakawan FT saat siklus akreditasi tiba 12, 23, 27\.  
* **Keraguan Validitas Data Asesor**: Menjamin bukti fisik sarana-prasarana perpustakaan yang diserahkan kepada tim asesor akreditasi bersifat valid, terukur, dan bersumber langsung dari transaksi sistem yang sah 23, 27, 29, 30\.

ðŸ’¡ **Kesimpulan Alur Solusi**:Dengan pembagian fitur di atas, **Pustakawan FT** terbantu secara operasional, **UPT Pusat/IT** memegang kendali sinkronisasi data, **Dekanat** mendapatkan laporan keputusan anggaran, dan **Tim Akreditasi** dapat mengunduh bukti fisik secara mandiri tanpa membebani pengelola 12, 19, 21, 23, 29\.  
Apakah penjelasan pembagian fitur dan masalah untuk 4 entitas ini sudah pas untuk dimasukkan ke laporan praktikum kelompok Anda?  

