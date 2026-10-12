---
id: MOD-008
title: "Modul 8"
type: module
project: MSI
status: verified
source_type: academic
tags:
  - msi
  - modul
  - materi
  - wireframe
  - user-flow
---

> 🔗 **Navigasi Vault:** Kembali ke [[Dashboard]] | Modul Sebelumnya: [[Modul 7]] | Modul Selanjutnya: [[Modul 9]]

# Modul Praktikum MSI - PTF60234
**Kementerian Pendidikan Tinggi, Sains, dan Teknologi**  
**Universitas Negeri Yogyakarta — Fakultas Teknik**  
**Program Studi Pendidikan Teknik Informatika - S1**

---

### Identitas Mata Kuliah
- **Mata Kuliah / Kode:** Praktik Manajemen Sistem Informasi / PTF60234
- **Program Studi:** Pendidikan Teknik Informatika - S1 | Semester 5 | 2 SKS
- **Dosen Pengampu:** Dr. Ratna Wardani, S.Si., M.T.
- **Tahun Akademik:** 2026 / Semester 5
- **Model Pembelajaran:** Project-Based Learning

*Catatan: Setiap pertemuan menghasilkan satu artefak proyek yang dibangun secara kumulatif berdasarkan organisasi/kasus yang dipilih kelompok pada Pertemuan 1.*

---

## PERTEMUAN 8: Perancangan Alur Pengguna dan Wireframe Sistem Informasi

### CPMK dan Tujuan Praktikum

| Komponen | Uraian |
| :--- | :--- |
| **CPMK 3** | Menggunakan alat bantu manajemen proyek (seperti Gantt Chart dan RACI Matrix) dan merancang mockup sistem informasi sebagai wujud awal solusi dalam pengelolaan dan pelaksanaan proyek TI. |
| **Tujuan Praktikum** | Mahasiswa mampu menyusun alur pengguna dan wireframe untuk layar-layar prioritas pada Grand Design, dengan prioritas yang diturunkan dari jalur kritis Pertemuan 7, serta menunjukkan pada setiap layar informasi apa yang ditampilkan, siapa penggunanya, dan keputusan apa yang didukung. |

---

### Kerangka Aspek Pengelolaan Sistem Informasi

Sepanjang praktikum ini, setiap keputusan proyek sistem informasi sebaiknya ditinjau melalui tujuh aspek pengelolaan sistem informasi berikut. Ketujuh aspek ini membedakan disiplin **Manajemen Sistem Informasi** dari manajemen proyek perangkat lunak secara umum, karena menempatkan informasi dan pengambilan keputusan organisasi sebagai inti perhatian, bukan penyerahan perangkat lunak semata.

| No | Aspek | Penjelasan |
| :-: | :--- | :--- |
| 1 | **Keselarasan Strategis** | Sistem informasi yang dibangun harus eksplisit terhubung ke tujuan atau misi organisasi, bukan proyek teknis yang berdiri sendiri tanpa kaitan jelas terhadap arah organisasi. |
| 2 | **Tata Kelola dan Kualitas Informasi** | Mencakup akurasi, konsistensi, kepemilikan data, dan akuntabilitas atas informasi, yaitu kejelasan siapa berwenang atas data apa dan siapa bertanggung jawab menjaga kualitasnya. |
| 3 | **Dukungan Pengambilan Keputusan** | Setiap artefak proyek dinilai dari seberapa baik ia mendukung pengambilan keputusan di level operasional, manajerial, maupun strategis, sebagaimana dibahas pada Pertemuan 1. |
| 4 | **Kebutuhan Informasi Stakeholder** | Bukan sekadar preferensi generik terhadap fitur aplikasi, melainkan data dan laporan spesifik apa yang benar-benar dibutuhkan tiap pihak, sebagaimana dipetakan pada Pertemuan 2. |
| 5 | **Nilai Informasi** | Evaluasi proyek, termasuk KPI dan ROI pada Pertemuan 11 dan 12, diukur dari perbaikan kualitas keputusan dan informasi yang dihasilkan, bukan semata-mata efisiensi teknis pengerjaan proyek. |
| 6 | **Integrasi Proses Bisnis** | Sistem informasi dinilai dari bagaimana ia terhubung dan terintegrasi dengan alur kerja organisasi lintas fungsi, bukan sekadar fitur aplikasi yang berdiri sendiri. |
| 7 | **Adopsi dan Perilaku Organisasi terhadap Informasi** | Perubahan yang perlu dikelola adalah perubahan perilaku pencatatan, pelaporan, dan penggunaan data oleh pengguna, bukan sekadar penerimaan aplikasi baru secara umum. |

> **Fokus MSI Pertemuan 8:** **Aspek 3 (Dukungan Pengambilan Keputusan)** dan **Aspek 4 (Kebutuhan Informasi Stakeholder)** menjadi penekanan utama, karena setiap layar pada wireframe dirancang dari pertanyaan *informasi apa yang dibutuhkan oleh siapa untuk keputusan apa*, bukan dari daftar fitur aplikasi.

---

### Konsep Dasar

Mockup adalah representasi visual dari sistem informasi yang belum dibangun, berupa rangkaian layar yang menunjukkan apa yang akan dilihat dan dilakukan pengguna tanpa menjalankan fungsi sebenarnya di baliknya. Pada praktik rekayasa perangkat lunak, mockup lazim digunakan sebagai tahap awal perancangan antarmuka yang kemudian dilanjutkan dengan pemodelan data, pemrograman, dan pengujian teknis.

Praktikum Manajemen Sistem Informasi memperlakukan mockup untuk tujuan yang berbeda, yaitu **menguji, sebelum biaya pembangunan dikeluarkan, apakah rancangan sistem informasi mampu menjawab masalah tata kelola informasi yang dirumuskan pada Pertemuan 3**. Mockup tidak dinilai dari keindahan tampilannya, tetapi dari seberapa jelas setiap layar menunjukkan informasi yang tersedia, pihak yang menggunakannya, serta keputusan yang didukungnya.

Mockup disusun secara bertahap selama tiga pertemuan:
1. **Tahap Pertama (Pertemuan 8):** **Wireframe**, yaitu sketsa layar berfidelitas rendah (*low-fidelity*) yang hanya memuat kotak, garis, dan label area informasi tanpa warna atau data yang sebenarnya. Rettig (1994) menunjukkan bahwa prototipe berfidelitas rendah memungkinkan tim memeriksa banyak gagasan dengan biaya dan waktu yang kecil, serta membuat anggota tim lebih bersedia mengubah rancangan karena belum ada upaya besar yang terbuang.
2. **Tahap Kedua (Pertemuan 9):** Wireframe ditingkatkan menjadi **Mockup Interaktif** berfidelitas tinggi dengan data contoh dan penanganan kondisi khusus.
3. **Tahap Ketiga (Pertemuan 10):** Mockup tersebut diuji bersama pemangku kepentingan sebelum dinilai kecukupannya pada Pertemuan 11.

Grand Design pada kasus OBE-CQI memuat delapan modul, tetapi tidak semua modul perlu dibuatkan mockup dalam tiga pertemuan. Analisis jalur kritis pada Pertemuan 7 menunjukkan modul mana yang paling menentukan keberhasilan keseluruhan sistem: Modul Integrasi Data (SIAKAD) berada di luar jalur kritis dengan *slack* 22 hari, sedangkan tujuh modul lainnya berada pada jalur kritis. Kelompok memilih layar dari modul-modul yang bersama-sama membentuk satu rangkaian utuh, yaitu rangkaian yang secara langsung menjawab pernyataan masalah pada Pertemuan 3. Pada kasus OBE-CQI, pernyataan masalahnya adalah belum adanya mekanisme yang memastikan rekomendasi CQI ditindaklanjuti, sehingga rangkaian yang dibuatkan mockup berjalan dari masuknya rekomendasi, pemberitahuan kepada dosen, pencatatan tindak lanjut, hingga pemantauan oleh koordinator program studi.

Alur pengguna (*user flow*) menggambarkan urutan layar yang dilalui oleh satu peran untuk menyelesaikan satu tugas. Setiap layar kemudian dicatat dalam **kartu layar** yang memuat empat hal:
1. **Pengguna:** Pemangku kepentingan yang dipetakan pada Pertemuan 2.
2. **Informasi yang Ditampilkan:** Kebutuhan data spesifik pada layar.
3. **Keputusan atau Tindakan yang Didukung:** Apa tindakan manajerial/operasional yang diambil.
4. **Dasar Kebutuhannya:** Sumber wawancara, observasi, atau telaah dokumen pendukung.

Kartu layar mencegah wireframe berubah menjadi kumpulan tampilan tanpa alasan. Layar yang tidak dapat menjawab keputusan apa yang didukungnya perlu dipertanyakan keberadaannya, sedangkan keputusan penting yang tidak memiliki layar pendukung menunjukkan celah perancangan.

#### Tabel 8.1. Perbedaan Perlakuan Mockup pada Praktik RPL Umum dan Praktikum MSI

| Aspek | Praktik Rekayasa Perangkat Lunak Umum | Praktikum MSI |
| :--- | :--- | :--- |
| **Pertanyaan Utama** | Apakah antarmuka mudah digunakan dan sesuai spesifikasi fungsional? | Apakah informasi pada layar cukup bagi pemangku kepentingan untuk mengambil keputusan yang dituju? |
| **Ukuran Keberhasilan** | Kegunaan, konsistensi tampilan, dan kesesuaian dengan kebutuhan fungsional. | Kejelasan informasi, kepemilikan data, dan kesesuaian dengan masalah tata kelola yang dirumuskan. |
| **Dasar Menentukan Layar** | Daftar fitur dan kebutuhan fungsional. | Keputusan yang perlu didukung dan pemangku kepentingan yang mengambilnya. |

---

### Alat dan Bahan

- **Figma** (`figma.com`, tersedia dalam tingkat gratis) atau **Penpot** (`penpot.app`, gratis dan *open source*) sebagai alat utama untuk wireframe digital. Kelompok yang lebih nyaman dengan sketsa dapat menggunakan kertas dan memotret hasilnya dengan kamera ponsel.
- **Artefak Prasyarat:**
  - Pernyataan Masalah Pertemuan 3
  - Ruang Lingkup Pertemuan 4
  - Grand Design dan RACI Matrix Pertemuan 5
  - Gantt Chart dan Analisis Jalur Kritis Pertemuan 7

---

### Panduan Teknis: Langkah Menyusun Wireframe di Figma

Berikut langkah operasional menggunakan Figma. Pengguna Penpot dapat mengikuti langkah yang sama dengan istilah *Board* sebagai padanan *Frame*.

1. **Membuat berkas desain:** Daftar akun di `figma.com`, lalu buat berkas desain baru dan beri nama sesuai proyek sistem informasi kelompok.
2. **Membuat frame untuk setiap layar:** Pilih alat *Frame* (tombol **F**), tentukan ukuran layar desktop pada panel kanan, lalu buat satu frame untuk setiap layar prioritas. Berikan nama pada setiap frame sesuai ID pada kartu layar, misalnya `L2 Notifikasi Tindak Lanjut`.
3. **Menyusun area informasi:** Gunakan alat *Rectangle* (**R**) dan *Text* (**T**) untuk menggambar area informasi berupa kotak abu-abu berlabel, misalnya *"Daftar rekomendasi dan status"*, tanpa warna dan tanpa data yang sebenarnya.
4. **Menandai tombol dan tindakan utama:** Gambar tombol sebagai kotak berlabel tindakan, misalnya `Catat Tindak Lanjut`, agar terlihat keputusan atau tindakan apa saja yang tersedia di layar tersebut.
5. **Menyusun alur antarlayar:** Letakkan frame secara berurutan dari kiri ke kanan sesuai alur pengguna, lalu tambahkan panah dan teks pendek di antaranya yang menjelaskan tindakan pengguna.
6. **Membagikan berkas:** Klik tombol *Share*, atur akses agar dosen dapat melihat berkas, lalu simpan tautan untuk dilampirkan pada laporan praktikum.

*Padanan istilah pada Penpot: Frame pada Figma setara dengan Board pada Penpot, sedangkan Rectangle dan Text memiliki nama dan fungsi yang sama.*

---

### Contoh Visual Wireframe

#### Gambar 8.1. Contoh Alur Pengguna dan Wireframe Tiga Layar Prioritas (Ilustrasi Berbasis Kasus OBE-CQI)

Gambar 8.1 pada modul asli menampilkan tiga dari lima layar prioritas dalam kasus OBE-CQI. Wireframe sengaja dibuat tanpa warna dan tanpa data nyata agar pembahasan tertuju pada informasi yang ada di layar, bukan pada tampilannya. Setiap area abu-abu dapat ditelusuri ke satu baris pada kartu layar, sedangkan setiap kotak putih menunjukkan tindakan yang akan diambil pengguna. Layar L4 memuat keterangan sumber data karena koordinator program studi perlu mengetahui dari mana angka pada dashboard berasal sebelum menjadikannya dasar pengambilan keputusan.

---

### Langkah Kerja

1. **Meninjau masalah, Grand Design, dan jalur kritis (10 menit):** Kelompok membuka kembali pernyataan masalah Pertemuan 3, Grand Design dan RACI Matrix Pertemuan 5, serta Gantt Chart dan analisis jalur kritis Pertemuan 7 sebagai dasar untuk memilih layar.
2. **Memilih layar prioritas (15 menit):** Kelompok memilih minimal lima layar dari modul-modul pada jalur kritis yang secara berurutan menjawab pernyataan masalah Pertemuan 3, lalu mencatat alasan pemilihan setiap layar.
3. **Menyusun alur pengguna (20 menit):** Untuk setiap peran pemangku kepentingan pada Pertemuan 2 yang menggunakan sistem, kelompok menuliskan tugas yang dilakukan serta urutan layar yang dilalui pada Lembar Kerja Bagian A.
4. **Mengisi kartu layar (20 menit):** Kelompok mengisi informasi yang ditampilkan, keputusan yang didukung, dan dasar kebutuhan untuk setiap layar pada Lembar Kerja Bagian B, dengan dasar kebutuhan yang berasal dari minimal dua sumber berbeda secara keseluruhan.
5. **Membuat wireframe (30 menit):** Mengikuti Langkah Teknis 1–5 pada Panduan Teknis, kelompok membuat satu frame untuk setiap layar prioritas dan menyusunnya sesuai alur pengguna.
6. **Memeriksa konsistensi rancangan (5 menit):** Kelompok memastikan setiap layar memiliki anggota tim penanggung jawab rancangan sesuai peran *Accountable* pada RACI Matrix Pertemuan 5, dan setiap pengguna layar tercantum pada peta stakeholder Pertemuan 2. Mengikuti Langkah Teknis 6, kelompok menyimpan tautan berkas.

---

### Lembar Kerja: Alur Pengguna dan Kartu Layar

#### Bagian A: Alur Pengguna
| Peran Pengguna | Tugas yang Dilakukan | Urutan Layar (ID) |
| :--- | :--- | :--- |
| | | |
| | | |
| | | |

#### Bagian B: Kartu Layar
| ID Layar | Pengguna | Informasi yang Ditampilkan | Keputusan atau Tindakan yang Didukung | Dasar Kebutuhan (Sumber/Metode) |
| :--- | :--- | :--- | :--- | :--- |
| | | | | |
| | | | | |
| | | | | |

---

### Contoh Kertas Kerja Terisi (Ilustrasi Berbasis Kasus OBE-CQI)

#### Bagian A: Alur Pengguna
| Peran Pengguna | Tugas yang Dilakukan | Urutan Layar (ID) |
| :--- | :--- | :--- |
| **Unit Penjaminan Mutu** | Memasukkan rekomendasi hasil evaluasi CQI dan menetapkan tenggat | **L1** Daftar Rekomendasi CQI, lalu memicu L2 pada dosen terkait |
| **Dosen Pengampu** | Menindaklanjuti rekomendasi untuk mata kuliah yang diampu | **L2** Notifikasi Tindak Lanjut, lalu **L3** Form Catat Tindak Lanjut |
| **Koordinator Program Studi** | Memantau status tindak lanjut seluruh mata kuliah dan mengirim pengingat | **L4** Dashboard Status Tindak Lanjut, lalu kembali ke L2 melalui pengingat |
| **Unit Penjaminan Mutu** | Melihat ringkasan ketercapaian CPL dan rekomendasi yang tertindaklanjuti | **L5** Ringkasan Ketercapaian CPL |

#### Bagian B: Kartu Layar
| ID Layar | Pengguna | Informasi yang Ditampilkan | Keputusan atau Tindakan yang Didukung | Dasar Kebutuhan (Sumber/Metode) |
| :--- | :--- | :--- | :--- | :--- |
| **L1** Daftar Rekomendasi CQI | Unit Penjaminan Mutu | Rekomendasi per mata kuliah, asal temuan, tingkat prioritas, dan tenggat | Menentukan rekomendasi yang dikirim ke dosen dan tenggatnya | Wawancara Koordinator Program Studi; notulen rapat evaluasi dua semester terakhir |
| **L2** Notifikasi Tindak Lanjut | Dosen Pengampu | Rekomendasi untuk mata kuliah yang diampu, mata kuliah dan CPL terkait, tenggat, dan status | Memutuskan kapan memulai tindak lanjut dan apakah perlu berkoordinasi dengan dosen lain | Wawancara dua dosen pengampu; observasi cara dosen mencatat tindak lanjut di buku pribadi |
| **L3** Form Catat Tindak Lanjut | Dosen Pengampu | Rekomendasi terpilih, isian tindakan, bukti, dan status (belum, sedang, selesai) | Melaporkan tindakan yang telah dilakukan dan menandai status | Observasi tiga berkas rekap nilai dari dosen berbeda; wawancara dosen pengampu |
| **L4** Dashboard Status Tindak Lanjut | Koordinator Program Studi | Jumlah dan persentase rekomendasi per status, daftar yang melewati tenggat, dan pemilik tiap tindak lanjut | Memutuskan rekomendasi mana yang perlu didorong dan kepada siapa pengingat dikirim | Wawancara Koordinator Program Studi; notulen rapat evaluasi |
| **L5** Ringkasan Ketercapaian CPL | Unit Penjaminan Mutu | Capaian CPL per semester dan rekomendasi yang tertindaklanjuti | Menilai perlunya perbaikan kebijakan mutu atau kurikulum | Dokumen laporan akreditasi program studi tahun 2023 dan 2025 |

---

### Asesmen

Teknik penilaian pada pertemuan ini mencakup **Kehadiran/Keaktifan** dan **Proyek**, dengan kontribusi terhadap **CPMK 3**.

| Teknik Penilaian | Deskripsi |
| :--- | :--- |
| **Kehadiran/Keaktifan** | Dinilai dari partisipasi mahasiswa dalam diskusi pemilihan layar prioritas dan penyusunan alur pengguna. |
| **Proyek** | Alur pengguna, kartu layar, dan wireframe yang telah diisi lengkap, dilampirkan dalam bentuk berkas atau tautan Figma/Penpot. |

#### Rubrik Penilaian Artefak / Lembar Kerja

| Aspek | Kurang | Cukup | Baik | Sangat Baik |
| :--- | :--- | :--- | :--- | :--- |
| **Ketepatan Pemilihan Layar Prioritas** | Layar dipilih tanpa kaitan dengan masalah Pertemuan 3 | Sebagian layar terkait dengan masalah Pertemuan 3 | Layar membentuk rangkaian yang menjawab masalah Pertemuan 3 | Rangkaian utuh, dengan alasan pemilihan ditelusuri ke jalur kritis Pertemuan 7 |
| **Kelengkapan Kartu Layar** | Kartu tidak lengkap atau keputusan tidak ditulis | Sebagian kolom terisi, keputusan kurang jelas | Seluruh kolom terisi dan keputusan jelas | Seluruh kolom terisi, keputusan jelas, dan dasar kebutuhan berasal dari minimal dua sumber berbeda |
| **Kejelasan Wireframe dan Alur** | Area informasi tidak berlabel | Sebagian area berlabel, alur antarlayar belum jelas | Area berlabel dan alur antarlayar jelas | Area berlabel, alur jelas, dan konsisten dengan kartu layar |

#### Rubrik Penilaian Laporan Praktikum (Baku - Seluruh Pertemuan)

| Aspek | Kurang | Cukup | Baik | Sangat Baik |
| :--- | :--- | :--- | :--- | :--- |
| **Kelengkapan Struktur Laporan** | Kurang dari 4 dari 7 bagian terisi | 5–6 bagian terisi | 7 bagian terisi lengkap | 7 bagian terisi lengkap dan rapi |
| **Kualitas Uraian Pelaksanaan Kegiatan** | Uraian minim, hanya menyalin langkah kerja | Uraian deskriptif, kurang menjelaskan alasan keputusan | Menjelaskan proses dan alasan keputusan dengan cukup jelas | Menjelaskan proses, alasan, dan pertimbangan keputusan secara rinci |
| **Ketepatan Analisis Kendala dan Solusi** | Kendala tidak diidentifikasi | Kendala disebutkan tanpa solusi jelas | Kendala dan solusi cukup relevan | Kendala dan solusi relevan serta menunjukkan pemecahan masalah aktif |
| **Kedalaman Refleksi Pembelajaran** | Tidak ada refleksi atau sekadar mengulang materi | Refleksi ada namun dangkal | Refleksi mengaitkan pengalaman dengan konsep | Refleksi mendalam, mengaitkan pengalaman, konsep, dan penerapan ke depan |

---

### Tindak Lanjut

Wireframe dan kartu layar ini menjadi masukan untuk **Pertemuan 9**, ketika kelompok mengubahnya menjadi mockup interaktif dengan data contoh yang bersumber dari kasus. Daftar layar prioritas yang dipilih pada pertemuan ini tidak diubah, kecuali ada alasan yang dicatat pada laporan.

---

### Format Laporan Praktikum Mingguan: Pertemuan 8

```markdown
1. Identitas Laporan
- Nama Kelompok: ______
- Anggota (NIM/Nama): ______
- Pertemuan ke-: 8
- Tanggal Pelaksanaan: ______
- Organisasi/Kasus yang Digunakan: ______

2. Tujuan Kegiatan
Mahasiswa mampu menyusun alur pengguna dan wireframe untuk layar-layar prioritas pada Grand Design, dengan prioritas yang diturunkan dari jalur kritis Pertemuan 7, serta menunjukkan pada setiap layar informasi apa yang ditampilkan, siapa penggunanya, dan keputusan apa yang didukung.

3. Uraian Pelaksanaan Kegiatan
(Diisi mahasiswa: jelaskan bagaimana kelompok memilih layar prioritas, menyusun alur pengguna, serta menentukan informasi dan keputusan pada setiap kartu layar.)

4. Hasil/Artefak Praktikum
(Alur pengguna, kartu layar, dan berkas atau tautan wireframe Figma/Penpot: dilampirkan.)

5. Kendala dan Solusi
(Diisi mahasiswa: contoh: kesulitan membatasi jumlah layar, diselesaikan dengan hanya memilih layar yang langsung menjawab pernyataan masalah pada Pertemuan 3.)

6. Refleksi Pembelajaran
(Diisi mahasiswa: apa yang dipelajari kelompok tentang perbedaan merancang layar dari daftar fitur dengan merancangnya dari keputusan yang perlu didukung.)

7. Kesimpulan
(Diisi mahasiswa: ringkasan layar prioritas yang dipilih dan kesiapan melanjutkan ke penyusunan mockup interaktif pada Pertemuan 9.)
```

---

### Referensi

- Laudon, K. C., & Laudon, J. P. (2014). *Management information systems: Managing the digital firm* (13th ed.). Pearson Education.
- Rettig, M. (1994). Prototyping for tiny fingers. *Communications of the ACM*, 37(4), 21-27. https://doi.org/10.1145/175276.175288
