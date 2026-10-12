---
id: MOD-009
title: "Modul 9"
type: module
project: MSI
status: verified
source_type: academic
tags:
  - msi
  - modul
  - materi
  - mockup
  - high-fidelity
  - kondisi-khusus
---

> 🔗 **Navigasi Vault:** Kembali ke [[Dashboard]] | Modul Sebelumnya: [[Modul 8]] | Laporan Implementasi: [[Praktikum_9_Kelompok3]]

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

## PERTEMUAN 9: Penyusunan Mockup Interaktif Sistem Informasi

### CPMK dan Tujuan Praktikum

| Komponen | Uraian |
| :--- | :--- |
| **CPMK 3** | Menggunakan alat bantu manajemen proyek (seperti Gantt Chart dan RACI Matrix) dan merancang mockup sistem informasi sebagai wujud awal solusi dalam pengelolaan dan pelaksanaan proyek TI. |
| **Tujuan Praktikum** | Mahasiswa mampu mengubah wireframe menjadi mockup interaktif berfidelitas tinggi dengan data contoh yang bersumber dari kasus, termasuk tampilan kondisi khusus (data kosong, terlambat, dan galat), serta menautkan antarlayar sehingga alur tugas utama dapat diklik dari awal hingga akhir. |

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

> **Fokus MSI Pertemuan 9:** **Aspek 2 (Tata Kelola dan Kualitas Informasi)** dan **Aspek 7 (Adopsi dan Perilaku Organisasi terhadap Sistem Informasi)** menjadi penekanan utama, karena data contoh pada mockup harus memiliki sumber dan pemilik yang jelas, dan tampilan kondisi khusus menentukan apakah pengguna akan mempercayai dan menggunakan sistem.

---

### Dasar Konsep

Mockup berfidelitas tinggi (*high-fidelity*) adalah rancangan layar yang menyerupai tampilan akhir sistem, lengkap dengan warna, tipografi, data contoh, dan tautan antarlayar yang dapat diklik. Pada Pertemuan 8, kelompok telah menyusun wireframe yang hanya memuat area informasi. Pertemuan ini mengisi area tersebut dengan data yang menyerupai kenyataan, sehingga pemangku kepentingan dapat membayangkan sistem yang digunakan dalam pekerjaan sehari-hari. Rettig (1994) mengingatkan bahwa prototipe berfidelitas tinggi lebih mahal dan lebih sulit diubah, sehingga baru dibuat setelah struktur informasi pada wireframe disepakati.

Data contoh pada mockup bukan sekadar pengisi tampilan. Dari sudut pandang **tata kelola informasi**, setiap angka atau daftar pada layar mewakili data yang kelak harus tersedia, akurat, dan dimiliki oleh pihak tertentu. Karena itu, setiap kelompok data contoh dicatat sumber atau metode perolehannya serta pihak yang bertanggung jawab atas kebenarannya. Dashboard yang menampilkan persentase tindak lanjut, misalnya, hanya bermakna apabila ada pihak yang memastikan status pada formulir pencatatan sudah benar. Catatan ini menjadi bahan Pertemuan 11 ketika kecukupan mockup dinilai terkait masalah tata kelola.

Selain tampilan normal, mockup yang baik juga memperlihatkan **kondisi khusus**: tampilan saat data belum ada (*empty state*), saat tenggat terlewat (*overdue/delayed*), dan saat terjadi galat (*error state*) atau data tidak lengkap. Kondisi ini penting untuk adopsi organisasi, sebab pengguna yang menemui layar kosong tanpa penjelasan cenderung meninggalkan sistem. Pada kasus OBE-CQI, dosen yang membuka layar notifikasi tanpa rekomendasi perlu mendapat penjelasan bahwa tidak ada tindak lanjut yang menunggu, bukan layar kosong yang membingungkan.

#### Tabel 9.1. Perbandingan Wireframe dan Mockup Interaktif

| Aspek | Wireframe (Pertemuan 8) | Mockup Interaktif (Pertemuan 9) |
| :--- | :--- | :--- |
| **Tampilan** | Kotak dan label tanpa warna | Warna, tipografi, dan komponen menyerupai sistem akhir |
| **Data** | Label area informasi | Data contoh bersumber dari kasus, dengan sumber dan pemilik tercatat |
| **Interaksi** | Panah antarlayar | Tautan antarlayar yang dapat diklik pada mode presentasi |
| **Kondisi Khusus** | Belum ditampilkan | Data kosong, terlambat, dan galat ditampilkan |

---

### Alat dan Bahan

- **Figma** atau **Penpot** yang telah digunakan pada Pertemuan 8, beserta berkas wireframe, kartu layar, dan lembar kerja Pertemuan 8.
- Data contoh disusun dari dokumen atau hasil wawancara pada kasus kelompok, atau dibuat sebagai data simulasi yang disertai keterangan yang jelas pada layar.

---

### Panduan Teknis: Langkah Membuat Mockup Interaktif di Figma

1. **Menggandakan frame wireframe:** Duplikasi berkas Pertemuan 8 agar versi wireframe tetap tersimpan, lalu kerjakan mockup pada salinannya.
2. **Mengganti kotak dengan komponen:** Ganti setiap kotak abu-abu dengan komponen yang sesuai, seperti tabel, kartu angka, dan lencana status, lalu atur satu palet warna dan satu jenis huruf untuk seluruh layar.
3. **Mengisi data contoh:** Masukkan data contoh sesuai Lembar Kerja Bagian A. Beri keterangan *"Data simulasi"* pada layar apabila data tidak berasal dari dokumen nyata.
4. **Membuat varian kondisi khusus:** Gandakan frame layar utama untuk membuat varian data kosong, terlambat, dan galat, lalu beri nama yang jelas.
5. **Menautkan antarlayar:** Buka tab *Prototype*, tarik penghubung dari tombol ke frame tujuan, lalu pilih pemicu *On click*.
6. **Menjalankan mode presentasi:** Klik tombol *Present*, lalu telusuri alur tugas utama dari layar pertama hingga terakhir dan catat tautan berkas untuk Pertemuan 10.

*Padanan pada Penpot: Frame setara dengan Board, sedangkan tab Prototype dan tombol View mode berfungsi serupa.*

---

### Contoh Visual Mockup

#### Gambar 9.1. Contoh Mockup Berfidelitas Tinggi Layar L4 Dashboard Status Tindak Lanjut (Data Simulasi)

Gambar 9.1 pada modul asli menunjukkan layar L4 dari wireframe Pertemuan 8 setelah diisi data contoh. Angka 11, 8, dan 9 dari 28 rekomendasi bersifat ilustratif dan diberi keterangan *"Data simulasi"*. Keterangan pemilik dan sumber data di bagian bawah layar menjawab pertanyaan koordinator program studi tentang dari mana angka berasal, sedangkan tombol *Kirim Pengingat* menghubungkan dashboard dengan tindakan nyata.

---

### Langkah Kerja

1. **Meninjau wireframe dan kartu layar (10 menit):** Kelompok membuka berkas dan lembar kerja Pertemuan 8, lalu menetapkan layar yang dikerjakan lebih dulu sesuai alur tugas utama.
2. **Menyusun data contoh dan sumbernya (15 menit):** Kelompok mengisi Lembar Kerja Bagian A berisi data yang akan tampil pada setiap layar, sumber atau metode perolehannya, serta pihak yang bertanggung jawab atas kebenarannya, dengan minimal dua sumber berbeda.
3. **Membuat tampilan berfidelitas tinggi (30 menit):** Mengikuti Langkah Teknis 1–3, kelompok mengubah wireframe menjadi mockup dengan komponen, warna, dan data contoh.
4. **Membuat varian kondisi khusus (15 menit):** Mengikuti Langkah Teknis 4, kelompok menyusun minimal dua kondisi khusus pada Lembar Kerja Bagian B dan membuat variannya.
5. **Menautkan interaksi (20 menit):** Mengikuti Langkah Teknis 5, kelompok menautkan seluruh layar sesuai alur pengguna Pertemuan 8.
6. **Menguji klik internal (10 menit):** Mengikuti Langkah Teknis 6, anggota kelompok menelusuri alur tugas utama dan memperbaiki tautan yang putus sebelum mockup diuji pada Pertemuan 10.

---

### Lembar Kerja: Data Contoh dan Kondisi Khusus

#### Bagian A: Data Contoh
| Layar (ID) | Data yang Ditampilkan | Sumber/Metode Perolehan Data | Penanggung Jawab Kebenaran |
| :--- | :--- | :--- | :--- |
| | | | |
| | | | |
| | | | |

#### Bagian B: Kondisi Khusus
| Layar (ID) | Kondisi | Tampilan yang Dirancang | Alasan bagi Pengguna |
| :--- | :--- | :--- | :--- |
| | | | |
| | | | |
| | | | |

---

### Contoh Kertas Kerja Terisi (Ilustrasi Berbasis Kasus OBE-CQI)

#### Bagian A: Data Contoh
| Layar (ID) | Data yang Ditampilkan | Sumber/Metode Perolehan Data | Penanggung Jawab Kebenaran |
| :--- | :--- | :--- | :--- |
| **L1** | 28 rekomendasi CQI dua semester terakhir beserta mata kuliah dan tenggat | Notulen rapat evaluasi program studi (dokumen) | Unit Penjaminan Mutu |
| **L2** | Rekomendasi per dosen dan tenggat | Turunan dari data L1 dan daftar pengampu mata kuliah dari jadwal semester | Koordinator Program Studi |
| **L3** | Isian tindakan, bukti, dan status | Wawancara dua dosen tentang tindakan yang lazim dilakukan; contoh bukti dari rekap nilai | Dosen Pengampu |
| **L4** | Selesai 11, sedang 8, belum 9 dari 28 rekomendasi (data simulasi) | Simulasi berdasarkan baseline wawancara Koordinator Program Studi | Koordinator Program Studi |
| **L5** | Capaian CPL semester sebelumnya | Laporan akreditasi program studi (dokumen) | Unit Penjaminan Mutu |

#### Bagian B: Kondisi Khusus
| Layar (ID) | Kondisi | Tampilan yang Dirancang | Alasan bagi Pengguna |
| :--- | :--- | :--- | :--- |
| **L2** | Tidak ada rekomendasi untuk dosen | Pesan *"Tidak ada tindak lanjut yang menunggu"* beserta tanggal pembaruan terakhir | Dosen tidak mengira sistem rusak dan tidak berhenti membuka layar ini |
| **L4** | Rekomendasi melewati tenggat | Lencana merah *Terlambat* dengan jumlah hari dan tombol *Kirim Pengingat* | Koordinator langsung melihat yang harus didorong |
| **L3** | Simpan gagal karena bukti belum diunggah | Pesan galat di samping isian bukti, isian lain tidak hilang | Dosen tidak mengulang pengisian dari awal |

---

### Asesmen

Teknik penilaian pada pertemuan ini adalah **Proyek**, dengan kontribusi terhadap **CPMK 3**.

| Teknik Penilaian | Deskripsi |
| :--- | :--- |
| **Proyek** | Mockup interaktif, lembar data contoh, dan kondisi khusus yang telah diisi lengkap, dilampirkan dalam bentuk tautan Figma/Penpot. |

#### Rubrik Penilaian Artefak / Lembar Kerja

| Aspek | Kurang | Cukup | Baik | Sangat Baik |
| :--- | :--- | :--- | :--- | :--- |
| **Kualitas Data Contoh** | Data tanpa sumber | Sebagian data bersumber | Seluruh data bersumber dan berpemilik | Data bersumber dari minimal dua sumber berbeda, pemilik jelas, dan data simulasi ditandai |
| **Kondisi Khusus** | Tidak ada | Satu kondisi ditampilkan | Minimal dua kondisi ditampilkan | Kondisi ditampilkan dengan alasan bagi pengguna yang jelas |
| **Interaksi dan Konsistensi** | Layar belum tertaut | Sebagian tertaut | Seluruh alur utama dapat diklik | Dapat diklik, konsisten dengan alur Pertemuan 8, dan bebas tautan putus |

#### Rubrik Penilaian Laporan Praktikum (Baku - Seluruh Pertemuan)

| Aspek | Kurang | Cukup | Baik | Sangat Baik |
| :--- | :--- | :--- | :--- | :--- |
| **Kelengkapan Struktur Laporan** | Kurang dari 4 dari 7 bagian terisi | 5–6 bagian terisi | 7 bagian terisi lengkap | 7 bagian terisi lengkap dan rapi |
| **Kualitas Uraian Pelaksanaan Kegiatan** | Uraian minim, hanya menyalin langkah kerja | Uraian deskriptif, kurang menjelaskan alasan keputusan | Menjelaskan proses dan alasan keputusan dengan cukup jelas | Menjelaskan proses, alasan, dan pertimbangan keputusan secara rinci |
| **Ketepatan Analisis Kendala dan Solusi** | Kendala tidak diidentifikasi | Kendala disebutkan tanpa solusi jelas | Kendala dan solusi cukup relevan | Kendala dan solusi relevan serta menunjukkan pemecahan masalah aktif |
| **Kedalaman Refleksi Pembelajaran** | Tidak ada refleksi atau sekadar mengulang materi | Refleksi ada namun dangkal | Refleksi mengaitkan pengalaman dengan konsep | Refleksi mendalam, mengaitkan pengalaman, konsep, dan penerapan ke depan |

---

### Tindak Lanjut

Tautan mockup interaktif menjadi bahan **Pertemuan 10**, ketika kelompok mengujinya bersama pemangku kepentingan dan merevisinya berdasarkan temuan.

---

### Format Laporan Praktikum Mingguan: Pertemuan 9

```markdown
1. Identitas Laporan
- Nama Kelompok: ______
- Anggota (NIM/Nama): ______
- Pertemuan ke-: 9
- Tanggal Pelaksanaan: ______
- Organisasi/Kasus yang Digunakan: ______

2. Tujuan Kegiatan
Mahasiswa mampu mengubah wireframe menjadi mockup interaktif berfidelitas tinggi dengan data contoh yang bersumber dari kasus, termasuk tampilan kondisi khusus (data kosong, terlambat, dan galat), serta menautkan antarlayar sehingga alur tugas utama dapat diklik dari awal hingga akhir.

3. Uraian Pelaksanaan Kegiatan
(Diisi mahasiswa: jelaskan proses mengubah wireframe menjadi mockup, penentuan data contoh, dan penyusunan kondisi khusus.)

4. Hasil/Artefak Praktikum
(Tautan mockup interaktif, Lembar Kerja Bagian A dan B: dilampirkan.)

5. Kendala dan Solusi
(Diisi mahasiswa: contoh: data sulit diperoleh; diselesaikan dengan data simulasi yang diberi keterangan.)

6. Refleksi Pembelajaran
(Diisi mahasiswa: Bagaimana kebutuhan mencatat sumber data mengubah cara kelompok memandang data pada layar.)

7. Kesimpulan
(Diisi mahasiswa: ringkasan mockup dan kesiapan untuk menguji bersama pemangku kepentingan pada Pertemuan 10.)
```

---

### Referensi

- Laudon, K. C., & Laudon, J. P. (2014). *Management information systems: Managing the digital firm* (13th ed.). Pearson Education.
- Rettig, M. (1994). Prototyping for tiny fingers. *Communications of the ACM*, 37(4), 21-27. https://doi.org/10.1145/175276.175288
