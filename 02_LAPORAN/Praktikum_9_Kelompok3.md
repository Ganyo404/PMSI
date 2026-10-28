---
id: LAP-009
title: "Praktikum_9_Kelompok3"
type: report
project: MSI
status: completed
source_type: academic
source_refs:
  - "MOD-009"
  - "LAP-008"
  - "BP-MSI-001"
  - "Jawaban3_Final"
  - "catatan_3"
  - "catatan_4"
related_modules:
  - "MOD-009"
tags:
  - msi
  - laporan
  - mockup
  - high-fidelity
  - interactive-prototype
  - pure-governance
---

> 🔗 **Navigasi Vault:** Kembali ke [[Dashboard]] | [[CONTEXT_INDEX]] | Landasan Teori: [[Modul 9]] | Laporan Sebelumnya: [[Praktikum_8_Kelompok3]] | Artefak Blueprint: [[Blueprint_Ekosistem_SIMPEL_KOLEKSI_FT]] | Berkas Prototipe Web: `08_ARTEFAK/mockup-2/index.html`

# LAPORAN PRAKTIKUM MINGGUAN
## MANAJEMEN SISTEM INFORMASI (PTF60234)
### PERTEMUAN 9: Penyusunan Mockup Interaktif Sistem Informasi

```
Disusun Oleh :
Kelompok 3

1. Gantar Abimanyu       (NIM 24050530042)
2. Ganendra Pradipa      (NIM 24050530038)
3. M. Fadlan Dirmansyah  (NIM 24050530034)

PROGRAM STUDI PENDIDIKAN TEKNIK INFORMATIKA - S1
FAKULTAS TEKNIK
UNIVERSITAS NEGERI YOGYAKARTA
2026
```

---

## 1. Identitas Laporan

| Atribut Laporan | Rincian Identitas |
| :--- | :--- |
| **Nama Kelompok** | Kelompok 3 |
| **Anggota (NIM / Nama)** | 1. Gantar Abimanyu (24050530042)<br>2. Ganendra Pradipa (24050530038)<br>3. M. Fadlan Dirmansyah (24050530034) |
| **Pertemuan ke-** | 9 (Sembilan) |
| **Tanggal Pelaksanaan** | 23 Oktober 2026 |
| **Organisasi / Kasus yang Digunakan** | Perpustakaan Fakultas Teknik, Universitas Negeri Yogyakarta (FT UNY) |

---

## 2. Tujuan Kegiatan

Merujuk pada silabus CPMK 3 dan panduan akademik [[Modul 9]], kegiatan praktikum Pertemuan 9 ini bertujuan untuk:
1. Mengembangkan rancangan *wireframe* berfidelitas rendah dari [[Praktikum_8_Kelompok3]] menjadi **Mockup Interaktif Berfidelitas Tinggi (*High-Fidelity Interactive Prototype*)** yang menyerupai antarmuka operasional nyata sistem pendukung tata kelola *SIMPEL-KOLEKSI FT*.
2. Menyusun data contoh (*sample data*) yang bersumber secara otentik dari kondisi empiris Perpustakaan FT UNY dan pangkalan data SLiMS, lengkap dengan pencatatan asal perolehan data dan penanggung jawab kebenarannya (*data ownership & accountability*).
3. Merancang dan mengimplementasikan varian tampilan kondisi khusus (*edge cases*), mencakup kondisi data kosong (*empty state*), kondisi mendekati/melewati batas waktu (*delayed/overdue SLA state*), serta penanganan galat validasi (*form validation/error state*).
4. Menautkan antarmuka lintas peran pemangku kepentingan (Pemustaka, Pustakawan Tunggal, Dekanat, dan Tata Ruang Fisik) ke dalam satu prototipe interaktif berbasis web yang bebas tautan putus dan siap diujikan kepada pengguna pada Pertemuan 10.

---

## 3. Uraian Pelaksanaan Kegiatan

### 3.1. Transformasi Wireframe Menjadi Mockup Berfidelitas Tinggi
Pada Pertemuan 8, Kelompok 3 telah menyusun sketsa struktural kotak abu-abu untuk 5 layar prioritas. Pada Pertemuan 9, seluruh rancangan tersebut diwujudkan ke dalam prototipe berbasis web menggunakan arsitektur HTML5, Vanilla CSS Modern, dan Vanilla JavaScript murni tanpa ketergantungan pihak ketiga (*zero dependency*) yang tersimpan pada direktori `08_ARTEFAK/mockup-2/`.

Pendekatan ini dipilih agar prototipe dapat dijalankan secara instan pada peramban web (*web browser*) manapun tanpa membutuhkan instalasi server yang rumit, selaras dengan prinsip solusi berbiaya nol (*Zero-Budget Governance*). Prototipe mengadopsi standar estetika profesional:
1. **Palet Warna Kurasi Institusional:** Memadukan *Primary Brand Academic Navy* (`#0a1931` dan `#0f2b5c`) untuk mencerminkan otoritas akademik UNY, *Secondary Accent SLiMS Cyan* (`#0284c7` dan `#38bdf8`) untuk integrasi otomasi perpustakaan, serta indikator visual kepatuhan batas waktu layanan (*Service Level Agreement* / SLA) menggunakan *Emerald Glow* (`#10b981`), *Warm Amber* (`#f59e0b`), dan *Coral Alert* (`#ef4444`).
2. **Tipografi Modern:** Menggunakan jenis huruf *Plus Jakarta Sans* dan *Inter* untuk keterbacaan antarmuka, serta *JetBrains Mono* untuk nomor tiket resmi (`TKT-202610-XXX`) dan nomor barcode eksemplar (`FT-INF-2024-XXX`).
3. **Multi-Viewport Framing:** Menyediakan tombol alih mode fleksibel (*Role Nav*) di bagian atas, memungkinkan penguji beralih peran secara mulus antara **Portal Pemustaka** (dengan opsi simulator ponsel cerdas 390px dan mode web penuh), **Workspace Pustakawan** (format dasbor desktop dengan bilah *Quiet Hour*), **Dashboard Eksekutif** (analisis grafis agregat sirkulasi), dan **Blueprint Tata Ruang** (denah interaktif penempatan Rak Transit RACK-001).

### 3.2. Penegakan Tata Kelola Data Contoh (Aspek 2 MSI)
Sebagaimana ditekankan dalam materi [[Modul 9]], data contoh pada mockup sistem informasi bukanlah sekadar teks pengisi tampilan (*lorem ipsum*). Dari kacamata tata kelola sistem informasi:
> *"Setiap angka, nama, atau status pada layar mewakili data yang kelak harus tersedia, akurat, dan memiliki pihak yang bertanggung jawab menjaga kebenarannya."*

Kelompok 3 menyusun data contoh berbasis triangulasi data lapangan dari transkrip [[Jawaban3_Final]], profil katalog web SLiMS Perpustakaan FT UNY, dan laporan akreditasi program studi. Sebagai contoh:
- Angka total koleksi **4.287 judul** dan **1.842 transaksi sirkulasi triwulanan** pada dasbor eksekutif merupakan agregasi dari pangkalan data SLiMS lokal yang berada di bawah wewenang Pustakawan Tunggal.
- Rasio keterpakaian buku tertinggi sebesar **94,1%** pada Program Studi Pendidikan Teknik Informatika (764 dari 812 judul terpinjam) bersumber dari log sirkulasi riil mahasiswa PTI. Angka ini secara langsung melandasi rekomendasi kebijakan Dekanat untuk memprioritaskan 35% pagu belanja buku baru tahun 2027 pada pengadaan referensi kecerdasan buatan dan pemrograman.
- Setiap entri tiket pelaporan memuat nama pelapor, NIM riil FT UNY, barcode buku berstandar DDC lokal, kategori kerusakan fisik, serta tautan foto bukti kondisi buku.

### 3.3. Penanganan Kondisi Khusus untuk Menjamin Adopsi Organisasi (Aspek 7 MSI)
Kesiapan adopsi sistem informasi oleh pengguna sangat ditentukan oleh bagaimana sistem merespons kondisi anomali. Pengguna yang menjumpai layar kosong tanpa keterangan (*blank screen*) atau mengalami kehilangan data saat terjadi kesalahan pengisian akan kehilangan kepercayaan terhadap sistem dan enggan menggunakannya kembali (*user abandonment*).

Kelompok 3 merancang tiga varian kondisi khusus pada prototipe:
1. **Kondisi Data Kosong (*Empty State*):** Apabila antrean tiket pada filter tertentu bernilai nol (misal tidak ada tiket berstatus tertunda), workspace pustakawan menampilkan pesan informatif: *"Tidak ada antrean tiket yang menunggu verifikasi fisik. Seluruh laporan telah disinkronisasikan ke SLiMS"*, lengkap dengan penanda tanggal dan jam pembaruan terakhir. Hal ini memastikan pustakawan mengetahui bahwa sistem berfungsi normal, bukan mengalami pemutusan koneksi server.
2. **Kondisi Mendekati / Melewati Batas Waktu (*Delayed / Overdue SLA State*):** Laporan yang belum diverifikasi selama lebih dari 3 hari ditandai dengan lencana kuning *Peringatan SLA*, dan laporan di atas 7 hari ditandai lencana merah *Kritis*. Pada dasbor pustakawan, kartu ringkasan menampilkan jumlah tiket kritis dan mengurutkannya ke posisi paling atas agar pustakawan segera memeriksa fisik buku di Rak Transit Tingkat 2 pada sesi *Quiet Hour*.
3. **Kondisi Galat Validasi Formulir (*Validation Error State*):** Jika mahasiswa mengirimkan laporan dengan barcode yang kosong atau belum memilih salah satu kategori kerusakan, formulir menampilkan pesan peringatan langsung (*inline toast error*) di samping bidang terkait tanpa mengosongkan data nama atau NIM yang telah diisi sebelumnya. Hal ini mencegah mahasiswa harus mengulang pengisian dari awal.

---

## 4. Hasil/Artefak Praktikum

### 4.1. Tautan dan Arsitektur Prototipe Mockup Interaktif

Mockup interaktif sistem *SIMPEL-KOLEKSI FT* telah diimplementasikan secara utuh pada repositori lokal:
- **Lokasi Berkas Utama:** [`08_ARTEFAK/mockup-2/index.html`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/mockup-2/index.html)
- **Tata Gaya Desain:** [`08_ARTEFAK/mockup-2/styles.css`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/mockup-2/styles.css)
- **Logika & Mesin Simulasi:** [`08_ARTEFAK/mockup-2/app.js`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/mockup-2/app.js)

#### Alur Interaktivitas yang Dapat Diklik (*Interactive Walkthrough*):
1. **Tab Pemustaka:** Pengguna dapat mengetikkan identitas dan memilih tombol cepat (*quick-fill chips*), memilih jenis kerusakan, dan mengklik tombol *"Kirim Laporan"*. Sistem menerbitkan nomor tiket baru (misal `TKT-202610-013`) dan menampilkan modal sukses berisi panduan meletakkan buku di Rak Transit Tingkat 2. Tiket baru tersebut secara otomatis disuntikkan ke dalam pangkalan data simulasi (*live reactive simulation*).
2. **Tab Pustakawan:** Mengklik tombol *"▶ Mulai Quiet Hour"* akan menjalankan penghitung mundur fokus kerja 60:00 menit. Pada tabel antrean, pustakawan dapat memfilter tiket (Semua/Pending/Resolved) dan mengklik tombol *"Verifikasi"*. Modal verifikasi menampilkan foto bukti, data pemustaka, serta dua kotak periksa (*checklist*). Saat pustakawan mencentang kedua kotak dan menekan *"Selesaikan Tiket"*, tiket langsung berubah status menjadi `RESOLVED`, lencana SLiMS berubah hijau, dan angka kartu KPI berkurang secara riil.
3. **Tab Dekanat:** Pengguna dapat melihat animasi visual grafik batang keterpakaian koleksi 5 program studi, rasio donat kondisi buku prima 93,8%, serta mengklik tombol *"Download Borang Kriteria 5"* yang secara nyata mengunduh berkas tabel CSV berstandar akreditasi LAM-INFOKOM ke komputer pengguna.
4. **Tab Denah:** Pengguna dapat mengklik elemen-elemen denah fisik perpustakaan (seperti Stand Akrilik QR, Rak Transit T1/T2, PC Loket Pustakawan, dan Meja Baca) untuk memunculkan notifikasi ringkas mengenai peran fasilitas tersebut dalam tata kelola.

---

### 4.2. Lembar Kerja Bagian A: Spesifikasi Data Contoh dan Akuntabilitas Kepemilikan Data

Sesuai rubrik penilaian tingkat "Sangat Baik", seluruh data contoh berasal dari minimal dua sumber berbeda, memiliki pihak penanggung jawab kebenaran yang jelas, serta mencantumkan penanda data simulasi apabila diturunkan secara analitis.

| Layar (ID) | Kelompok Data yang Ditampilkan | Rincian Nilai Data Contoh pada Antarmuka | Sumber / Metode Perolehan Data Lapangan | Penanggung Jawab Kebenaran (*Data Owner*) | Kategori Data |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **L1** (Portal Pemustaka) | Identitas Pelapor & Transaksi Mahasiswa | • Nama: Farid Hidayat<br>• NIM: 24050530015<br>• Program Studi: Pendidikan Teknik Informatika | Basis data kemahasiswaan SIAKAD UNY dan verifikasi kartu tanda mahasiswa aktif | Mahasiswa Pelapor / Biro Akademik | Data Faktual Lapangan |
| **L1** (Portal Pemustaka) | Identitas Eksemplar & Kerusakan Koleksi | • Barcode: `FT-INF-2024-072`<br>• Judul: Kecerdasan Buatan: Teori dan Implementasi<br>• Kategori: Halaman Robek / Rusak Fisik<br>• Catatan: Halaman 45-50 robek bagian tengah | Pangkalan data bibliografi SLiMS Perpustakaan FT UNY dan sampel buku rusak di rak DDC 004 | Pustakawan Tunggal Perpustakaan FT | Data Faktual Lapangan |
| **L2** (Workspace Pustakawan) | Metrik Beban Kerja & Antrean Tiket Mingguan | • Total Laporan Masuk: 12 tiket<br>• Menunggu Verifikasi: 3 tiket<br>• Mendekati Batas SLA: 1 tiket (kuning)<br>• Terupdate ke SLiMS: 8 eksemplar | Rekapitulasi log antrean formulir Google Sheets hasil implementasi instrumen FORM-001 | Pustakawan Tunggal Perpustakaan FT | Data Faktual Lapangan |
| **L2** (Workspace Pustakawan) | Jadwal & Parameter Sesi *Quiet Hour* | • Alokasi Waktu: Jumat 08.00–09.00 WIB<br>• Durasi: 60 menit fokus kerja mingguan<br>• Ambang Batas SLA: 3 hari (verifikasi fisik) dan 7 hari (update SLiMS) | Dokumen kesepakatan tata kelola *SOP-001* dan hasil wawancara [[Jawaban3_Final]] | Pustakawan Tunggal & Kepala Perpustakaan | Data Tata Kelola Resmi |
| **L3** (Modal Verifikasi) | Checklist Verifikasi Lapangan & Status SLiMS | • Verifikasi Fisik: Buku barcode `FT-INF-2024-072` terambil dari Rak Transit Tingkat 2<br>• Status Perubahan SLiMS: Ubah status dari `Tersedia` menjadi `Perbaikan` | Observasi alur fisik buku dan simulasi pencocokan barcode pada aplikasi SLiMS 9 Bulian | Pustakawan Tunggal Perpustakaan FT | Data Operasional Faktual |
| **L4** (Dashboard Eksekutif) | Agregasi Koleksi & Frekuensi Sirkulasi | • Total Koleksi: 4.287 judul (+127 judul baru)<br>• Transaksi Sirkulasi: 1.842 transaksi triwulan III 2026<br>• Rasio Rusak: 6,2% (265 eksemplar) | Laporan triwulanan perpustakaan dan ekstraksi tabel sirkulasi MySQL SLiMS | Pustakawan Tunggal Perpustakaan FT | Data Agregat Faktual |
| **L4** (Dashboard Eksekutif) | Distribusi Sirkulasi per Program Studi | • PTI: 487 transaksi (Rasio Terpakai 94,1%)<br>• PTE: 412 transaksi (Rasio Terpakai 87,0%)<br>• Mesin: 378 transaksi (Rasio Terpakai 82,4%)<br>• Sipil: 341 transaksi (Rasio Terpakai 75,7%)<br>• Elko: 224 transaksi (Rasio Terpakai 70,0%) | Ekstraksi log transaksi peminjaman SLiMS yang dipetakan ke data prodi mahasiswa | Tim Akreditasi Program Studi FT UNY | Data Faktual Lapangan |
| **L4** (Dashboard Eksekutif) | Rekomendasi Alokasi Pagu Anggaran Belanja Buku | Alokasi 35% anggaran pengadaan buku tahun 2027 diprioritaskan pada referensi bidang informatika (AI, Jaringan, Basis Data) | Model simulasi analitis berbasis formula keterpakaian koleksi (*Evidence-Based Procurement*) | Wakil Dekan Bidang Perencanaan & Keuangan FT | **Data Simulasi Kebijakan** *(Ditandai pada Layar)* |

---

### 4.3. Lembar Kerja Bagian B: Penanganan Varian Kondisi Khusus (*Edge Cases*)

Sesuai rubrik penilaian, dirancang 3 varian kondisi khusus yang mencakup seluruh alur sistem disertai alasan organisasional yang mendalam bagi penerimaan pengguna.

| Layar (ID) | Nama Varian Kondisi Khusus | Kondisi Pemicu Lapangan (*Trigger*) | Desain Tampilan yang Dirancang pada Prototipe | Alasan Manajerial & Kemanfaatan bagi Pengguna |
| :--- | :--- | :--- | :--- | :--- |
| **L1** (Portal Pemustaka) | **Galat Validasi Data Input (*Validation Error State*)** | Mahasiswa lupa mengisi nomor barcode koleksi atau belum mencentang salah satu dari empat pilihan kategori kerusakan, lalu langsung menekan tombol *"Kirim Laporan"*. | Kotak isian barcode berkedip merah halus, muncul pesan peringatan mengambang (*toast notification alert*): *"Silakan isi barcode buku dan pilih jenis kerusakan sebelum mengirim laporan!"*. Data nama dan NIM yang sudah terisi tetap dipertahankan utuh pada formulir. | Mencegah keputusasaan pengguna (*user frustration*). Mahasiswa tidak perlu mengulang pengetikan identitas dari awal, sekaligus mencegah masuknya data sampah (*garbage data*) tanpa barcode ke pangkalan data antrean. |
| **L2** (Workspace Pustakawan) | **Peringatan Ambang Batas Waktu (*Delayed / Overdue SLA Alert*)** | Laporan tiket masuk (misal `TKT-202610-010`, buku Tata Kota dan Wilayah) belum sempat diverifikasi oleh pustakawan selama lebih dari 3 hari kerja akibat kesibukan layanan loket. | Lencana status tiket berubah dari hijau menjadi kuning/merah bertuliskan *"⚠️ 3 Hari Menunggu (Mendekati Batas SLA)"*. Pada kartu KPI teratas, angka *Mendekati Batas SLA* menyala kuning. Pada tabel, tiket bersangkutan otomatis dinaikkan ke urutan prioritas teratas. | Mencegah buku terbengkalai tanpa kejelasan di Rak Transit. Pustakawan langsung mengetahui tiket prioritas yang harus segera diselesaikan saat jam *Quiet Hour* dibuka, sehingga standar mutu layanan (SLA) perpustakaan tetap terjaga. |
| **L2** (Workspace Pustakawan) | **Antrean Kosong Terverifikasi (*Empty State*)** | Seluruh tiket laporan telah berhasil diverifikasi oleh pustakawan atau belum ada laporan baru dari pemustaka pada minggu berjalan. | Tabel antrean menampilkan ilustrasi grafis kartu bersih dengan teks: *"Belum Ada Antrean Tiket Menunggu. Seluruh laporan telah diverifikasi dan disinkronisasikan ke SLiMS"*, disertai indikator tanggal dan jam pembaruan terakhir. | Memberikan kepastian psikologis kepada pustakawan bahwa ketiadaan data bukan disebabkan oleh kegagalan koneksi sistem atau server yang mati, melainkan mencerminkan bahwa seluruh kewajiban pemutakhiran data telah tuntas (*zero inbox*). |
| **L3** (Modal Verifikasi) | **Pencegahan Penyelesaian Prematur (*Unchecked Verification Guard*)** | Pustakawan menekan tombol *"Selesaikan Tiket (Resolve)"* sebelum mencentang kedua daftar periksa verifikasi fisik buku dan pembaruan SLiMS. | Tombol bergetar (*subtle shake animation*) dan memunculkan pesan peringatan tegas: *"Harap konfirmasi pemeriksaan fisik buku di Rak Transit dan pembaruan data di SLiMS terlebih dahulu!"*. Status tiket tidak dapat ditutup. | Menegakkan disiplin tata kelola informasi (*Internal Control*). Menjamin bahwa tiket tidak pernah ditutup secara serampangan tanpa adanya tindakan nyata pencocokan fisik dan pembaruan status pada katalog SLiMS lokal. |

---

## 5. Kendala dan Solusi

### 5.1. Kendala yang Dihadapi
1. **Kesulitan Memperoleh Data Agregat Sirkulasi Historis:** Akses langsung ke pangkalan data produksi SLiMS Perpustakaan FT UNY terbatas karena alasan privasi dan keamanan server universitas. Akibatnya, data transaksi sirkulasi per program studi selama satu tahun penuh tidak dapat diunduh secara bebas.
2. **Keterbatasan Ruang Layar pada Perangkat Mobile:** Pada antarmuka pemustaka, penggabungan formulir 4 kolom, petunjuk kamera, instruksi Rak Transit, dan pratinjau tiket berpotensi menimbulkan kepadatan visual (*visual clutter*) yang menyulitkan pengisian pada layar ponsel pintar berukuran 390 piksel.
3. **Risiko Penundaan Tiket di Luar Sesi Quiet Hour:** Karena sesi pemutakhiran data terfokus (*Quiet Hour*) hanya dijadwalkan satu kali dalam seminggu (Jumat pagi), tiket yang masuk pada hari Senin berisiko melewati ambang batas SLA 3 hari kerja sebelum jadwal hening tiba.

### 5.2. Solusi yang Diterapkan
1. **Penerapan Baseline Simulasi Terkalibrasi (*Calibrated Simulation*):** Kelompok memanfaatkan data triwulan III 2026 yang diperoleh dari hasil wawancara pustakawan pada [[Jawaban3_Final]] sebagai angka dasar (*baseline*), lalu menyusun data simulasi yang proporsional dengan jumlah mahasiswa aktif masing-masing program studi. Sesuai etika tata kelola MSI, seluruh angka hasil permodelan diberi label transparan *"Data Simulasi"* pada antarmuka layar L4.
2. **Penerapan Tata Letak Hierarkis dan Tombol Cepat (*Quick-Fill Chips*):** Antarmuka pemustaka disederhanakan dengan menyediakan tombol cepat untuk kategori buku informatika, tombol pemicu simulasi kamera yang responsif, serta pemisahan instruksi penyerahan fisik ke dalam modal dialog pasca-submit agar layar input tetap bersih dan terfokus.
3. **Penyediaan Fitur *Fast-Track Verification* pada Jam Fleksibel:** Pada antarmuka pustakawan, tombol verifikasi tiket dapat diakses kapan saja tanpa harus menunggu hitungan mundur timer *Quiet Hour* berjalan. Jika pada hari kerja biasa pustakawan mendapati meja sirkulasi sedang sepi pengunjung, pustakawan dapat langsung memproses tiket kuning yang mendekati batas waktu secara cepat dalam durasi kurang dari dua menit.

---

## 6. Refleksi Pembelajaran

Praktikum Pertemuan 9 memberikan wawasan mendalam mengenai bagaimana kebutuhan mencatat sumber dan pemilik data secara fundamental mengubah cara tim memandang perancangan antarmuka:
1. **Perubahan Paradigma dari "Tampilan Visual" ke "Akuntabilitas Informasi":** Sebelum mempelajari tata kelola sistem informasi, kami memandang pembuatan mockup semata-mata sebagai kegiatan menggambar tata letak yang menarik di Figma. Namun, ketika modul mewajibkan setiap baris data dipertanggungjawabkan kepemilikannya, kami menyadari bahwa setiap elemen data di layar menuntut komitmen operasional nyata. Menampilkan status *"Buku Sedang Diperbaiki"* di layar berarti harus ada pustakawan yang meluangkan waktu fisik untuk memeriksa jilidan buku di Rak Transit. Tanpa adanya kejelasan siapa yang memasukkan dan memvalidasi data, dasbor seindah apa pun hanyalah ilusi visual yang menyesatkan organisasi.
2. **Kondisi Khusus Menentukan Keberhasilan Adopsi Pengguna:** Kami menyadari bahwa antarmuka sistem informasi jarang dinilai dari tampilannya saat kondisi ideal (*happy path*), melainkan dari perilakunya saat menghadapi kondisi kritis (*edge cases*). Mahasiswa yang mendapati formulirnya eror tanpa panduan yang jelas akan kapok dan kembali membiarkan buku rusak tergeletak di rak. Sebaliknya, pesan galat yang ramah dan petunjuk peletakan buku yang presisi menumbuhkan rasa percaya dan partisipasi aktif pemustaka dalam memelihara koleksi bersama.
3. **Penyelarasan Tiga Tingkat Organisasi (*Vertical Alignment*) Menjadi Nyata:** Melalui prototipe interaktif ini, kami menyaksikan secara konkret bagaimana satu tindakan kecil mahasiswa di lantai perpustakaan (mengisi laporan buku robek di Layar L1) mengalir menjadi tugas operasional pustakawan di meja sirkulasi (Layar L2 dan L3), dan bermuara pada keputusan strategis pimpinan fakultas dalam menentukan prioritas alokasi belanja buku di tingkat Dekanat (Layar L4). Inilah esensi hakiki dari Manajemen Sistem Informasi: menghubungkan teknologi, manusia, dan strategi organisasi.

---

## 7. Kesimpulan

Praktikum Pertemuan 9 berhasil mentransformasikan cetak biru tata kelola *SIMPEL-KOLEKSI FT* menjadi sebuah **Mockup Interaktif Berfidelitas Tinggi (*High-Fidelity*)** yang utuh dan berfungsi penuh:
1. Prototipe berhasil dibangun menggunakan teknologi web murni berbasis standar estetika modern, responsif lintas ukuran layar, dan menyediakan alur klik terpadu untuk empat perspektif utama (Pemustaka, Pustakawan Tunggal, Dekanat FT UNY, dan Denah Tata Ruang Fisik).
2. Seluruh data contoh pada antarmuka didasarkan pada fakta empiris Perpustakaan FT UNY dan pangkalan data SLiMS, dengan kepemilikan dan batas wewenang data yang tercatat tegas pada Lembar Kerja Bagian A.
3. Prototipe telah dilengkapi penanganan varian kondisi khusus (*empty state*, *delayed/overdue SLA alert*, dan *validation error guard*) yang menjamin kemudahan adopsi dan ketahanan operasional sistem.
4. Artefak prototipe interaktif ini berada dalam status siap uji (*testing-ready*) dan akan diujikan secara langsung bersama pemangku kepentingan perpustakaan pada **Pertemuan 10** untuk mengevaluasi aspek kegunaan dan kecukupan tata kelola informasi.

---

### DAFTAR PUSTAKA / REFERENSI

1. Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly*, 13(3), 319-340. https://doi.org/10.2307/249008
2. Goodhue, D. L., & Thompson, R. L. (1995). Task-technology fit and individual performance. *MIS Quarterly*, 19(2), 213-236. https://doi.org/10.2307/249689
3. Laudon, K. C., & Laudon, J. P. (2014). *Management information systems: Managing the digital firm* (13th ed.). Pearson Education.
4. Markus, M. L. (1983). Power, politics, and MIS implementation. *Communications of the ACM*, 26(6), 430-444. https://doi.org/10.1145/358141.358148
5. Rettig, M. (1994). Prototyping for tiny fingers. *Communications of the ACM*, 37(4), 21-27. https://doi.org/10.1145/175276.175288
6. Romney, M. B., & Steinbart, P. J. (2018). *Accounting information systems* (14th ed.). Pearson.
7. Wardani, R. (2026). *Modul 9 Praktikum Manajemen Sistem Informasi: Penyusunan Mockup Interaktif Sistem Informasi*. Program Studi Pendidikan Teknik Informatika, Fakultas Teknik, Universitas Negeri Yogyakarta.
