---
id: MOD-005
title: "Modul 5"
type: module
project: MSI
status: verified
source_type: academic
tags:
  - msi
  - modul
  - materi
---
Modul Praktikum MSI - PTF60234
KEMENTERIAN PENDIDIKAN TINGGI, SAINS, DAN TEKNOLOGI
UNIVERSITAS NEGERI YOGYAKARTA
FAKULTAS TEKNIK
PROGRAM STUDI PENDIDIKAN TEKNIK INFORMATIKA - S1
MODUL PRAKTIKUM
MANAJEMEN SISTEM INFORMASI
PTF60234
Program Studi Pendidikan Teknik Informatika - S1 | Semester 5 | 2 SKS
Mata Kuliah / Kode Praktik Manajemen Sistem Informasi / PTF60234
Dosen Pengampu Dr. Ratna Wardani, S.Si., M.T.
Tahun Akademik 2026 / Semester 5
Model Pembelajaran Project-Based Learning
Setiap pertemuan menghasilkan satu artefak proyek yang dibangun secara kumulatif berdasarkan organisasi/kasus yang dipilih
kelompok pada Pertemuan 1.
Universitas Negeri Yogyakarta - Halaman 1

Modul Praktikum MSI - PTF60234
PERTEMUAN 5
Penetapan Peran Tim dan Model Kolaborasi (RACI, Scrum)
CPMK Tujuan Praktikum
CPMK 2. Membuat rencana proyek, menetapkan Mahasiswa mampu menyusun struktur tim proyek,
tujuan, menetapkan peran tim, serta merancang strategi pembagian peran dan tanggung jawab pengelolaan
implementasi sistem informasi yang sesuai dengan visi informasi, serta memilih model kolaborasi yang sesuai
dan misi organisasi. dengan karakteristik proyek sistem informasi.
Kerangka Aspek Pengelolaan Sistem Informasi
Dalam praktikum ini, setiap keputusan proyek sistem informasi sebaiknya ditinjau melalui tujuh aspek
pengelolaan sistem informasi berikut. Ketujuh aspek ini membedakan disiplin Manajemen Sistem
Informasi dari manajemen proyek perangkat lunak secara umum, karena menempatkan informasi dan
pengambilan keputusan organisasi sebagai inti perhatian, bukan penyerahan perangkat lunak semata.
Aspek Penjelasan
1. Keselarasan Strategis Sistem informasi yang dibangun harus eksplisit terhubung ke tujuan atau misi
organisasi, bukan proyek teknis yang berdiri sendiri tanpa kaitan jelas terhadap
arah organisasi.
2. Tata Kelola dan Kualitas Mencakup akurasi, konsistensi, kepemilikan data, dan akuntabilitas atas
Informasi informasi, yaitu kejelasan siapa berwenang atas data apa dan siapa bertanggung
jawab menjaga kualitasnya.
3. Dukungan Pengambilan Setiap artefak proyek dinilai dari seberapa baik ia mendukung pengambilan
Keputusan keputusan di level operasional, manajerial, maupun strategis, sebagaimana
dibahas pada Pertemuan 1.
4. Kebutuhan Informasi Stakeholder Bukan sekadar preferensi generik terhadap fitur aplikasi, melainkan data dan
laporan spesifik apa yang benar-benar dibutuhkan tiap pihak, sebagaimana
dipetakan pada Pertemuan 2.
5. Nilai Informasi Evaluasi proyek, termasuk KPI dan ROI pada Pertemuan 10 dan 11, diukur dari
perbaikan kualitas keputusan dan informasi yang dihasilkan, bukan semata-mata
efisiensi teknis pengerjaan proyek.
6. Integrasi Proses Bisnis Sistem informasi dinilai dari bagaimana ia terhubung dan terintegrasi dengan alur
kerja organisasi lintas fungsi, bukan sekadar fitur aplikasi yang berdiri sendiri.
7. Adopsi dan Perilaku Organisasi Perubahan yang perlu dikelola adalah perubahan perilaku pencatatan, pelaporan,
terhadap Informasi dan penggunaan data oleh pengguna, bukan sekadar penerimaan aplikasi baru
secara umum.
Fokus MSI Pertemuan 5: Aspek 2 (Tata Kelola dan Kualitas Informasi) menjadi penekanan utama, karena
RACI Matrix digunakan sebagai alat menetapkan kepemilikan dan akuntabilitas atas keputusan data dan
pelaporan, bukan sekadar pembagian tugas teknis.
Dasar Konsep
Sebelum menyusun RACI Matrix, kelompok terlebih dahulu perlu menyusun Grand Design untuk sistem
informasi solusi yang diusulkan. Grand Design pada level MSI bukan skema basis data atau rancangan
antarmuka, melainkan gambaran alur data dan informasi antarunit dalam organisasi: unit mana yang
menghasilkan data apa, unit mana yang menerima dan memakainya, dan modul aplikasi apa yang menjadi
jembatan pada setiap perpindahan tersebut. Grand Design inilah yang mengidentifikasi modul-modul yang
perlu dibangun, yang kemudian menjadi dasar penyusunan daftar aktivitas pada RACI Matrix, sehingga
pembagian peran benar-benar mencerminkan kebutuhan pengelolaan data organisasi, bukan sekadar daftar
tugas proyek yang disusun terpisah.
Universitas Negeri Yogyakarta - Halaman 2

Modul Praktikum MSI - PTF60234
Sebelum masuk ke materi RACI dan model kolaborasi tim, perlu ditegaskan perbedaan sudut pandang
antara praktikum ini dan mata kuliah Manajemen Proyek Perangkat Lunak. Pada mata kuliah manajemen
proyek, RACI dan model kolaborasi dipelajari sebagai kompetensi generik untuk mengelola siapa saja
mengerjakan apa dalam proyek pengembangan perangkat lunak apa pun. Pada praktikum Manajemen
Sistem Informasi, alat yang sama dipelajari dengan pertanyaan yang berbeda: siapa yang berwenang
menentukan kebutuhan informasi, siapa yang bertanggung jawab menjaga kualitas data, dan siapa yang
harus dilibatkan agar sistem informasi yang dihasilkan benar-benar digunakan untuk pengambilan
keputusan. RACI di sini bukan sekadar alat pembagian tugas teknis, melainkan alat tata kelola informasi,
yaitu memastikan setiap keputusan tentang data dan pelaporan memiliki pemilik yang jelas.
Kejelasan peran dalam tim proyek memengaruhi seberapa lancar pekerjaan dapat berjalan. Tanpa
pembagian peran yang jelas, anggota tim cenderung mengerjakan hal yang sama secara tidak sengaja, atau
sebaliknya, membiarkan suatu pekerjaan tidak dikerjakan oleh siapa pun karena masing-masing mengira
itu tanggung jawab anggota lain. RACI Matrix, singkatan dari Responsible, Accountable, Consulted, dan
Informed, membantu memetakan keterlibatan setiap anggota tim dalam aktivitas proyek. Dalam konteks
sistem informasi, aktivitas yang dipetakan sebaiknya mencakup keputusan terkait data dan pelaporan,
bukan hanya aktivitas pengembangan fitur teknis.
Prinsip penting dalam menyusun RACI Matrix adalah setiap aktivitas idealnya hanya memiliki satu pihak
yang berperan sebagai Accountable, meskipun boleh melibatkan lebih dari satu Responsible. Jika terlalu
banyak pihak berperan sebagai Accountable pada satu aktivitas, keputusan menjadi lambat karena tidak
jelas siapa yang benar-benar berwenang menentukan hasil akhir. Pada kasus OBE-CQI, misalnya, aktivitas
menetapkan mekanisme tindak lanjut rekomendasi CQI sebaiknya memiliki koordinator program studi
sebagai Accountable tunggal, karena dialah yang berwenang menentukan bagaimana informasi hasil
evaluasi ditindaklanjuti secara kelembagaan, meskipun dosen dan unit penjaminan mutu turut terlibat
sebagai Responsible dan Consulted.
Selain pembagian peran, tim proyek juga perlu menyepakati model kolaborasi yang menentukan ritme kerja
sepanjang proyek. Model Scrum (Schwaber & Sutherland, 2020), yang berasal dari pendekatan
pengembangan perangkat lunak Agile, mengatur kerja tim dalam siklus pendek yang disebut sprint,
biasanya 1û2 minggu, disertai pertemuan rutin singkat untuk membahas progres dan hambatan. Untuk
proyek skala kelompok mahasiswa dengan durasi terbatas, model kolaborasi tidak harus mengikuti Scrum
secara ketat, tetapi tetap perlu menyepakati ritme kerja yang konsisten, misalnya pertemuan tim internal
mingguan untuk meninjau progres terhadap deliverables informasi yang telah ditetapkan pada Pertemuan
4.
Alat dan Bahan
Template Grand Design, template RACI Matrix, hasil Dokumen Analisis Masalah dari Pertemuan 3, dan
hasil Project Scope Statement dari Pertemuan 4.
Langkah Kerja
1. Merancang Grand Design solusi (25 menit). Berdasarkan Pernyataan Masalah Prioritas dari
Pertemuan 3 dan Project Scope Statement dari Pertemuan 4, kelompok merancang alur data dan
informasi antarunit dalam organisasi untuk sistem solusi yang diusulkan: unit mana yang
menghasilkan data apa, unit mana yang menerima dan memakainya, dan modul aplikasi apa yang
menjadi jembatan pada tiap perpindahan tersebut. Grand Design ini bukan spesifikasi teknis,
Universitas Negeri Yogyakarta - Halaman 3

Modul Praktikum MSI - PTF60234
melainkan  gambaran  manajerial  tentang  bagaimana  informasi  akan  mengalir  di  antara  unit
organisasi.
2.  Menetapkan peran tim (15 menit). Kelompok menentukan peran masing-masing anggota sesuai
jumlah anggota yang tersedia, misalnya Project Lead, Analis, Desainer, dan Dokumentator, dengan
penyesuaian jika jumlah anggota lebih sedikit atau lebih banyak.
3.  Menyusun daftar aktivitas utama (15 menit). Kelompok menyusun daftar aktivitas pengembangan
modul  berdasarkan  modul-modul  yang  teridentifikasi  pada  Grand  Design  di  Langkah  1,
memastikan setiap modul dalam Grand Design tercakup dalam satu aktivitas.
4.  Mengisi RACI Matrix (25 menit). Untuk setiap aktivitas pada daftar, kelompok menentukan peran
R, A, C, atau I bagi setiap anggota tim, dengan memastikan hanya ada satu Accountable untuk
setiap aktivitas.
5.  Menyusun Deskripsi Peran Tim (10 menit). Kelompok menuliskan tanggung jawab utama setiap
peran secara ringkas, memastikan deskripsi ini konsisten dengan pola Accountable pada RACI
Matrix yang telah diisi.
6.  Memilih model kolaborasi dan ritme kerja (10 menit). Kelompok memilih dan memjustifikasi
model kolaborasi tim, baik mengadaptasi Scrum maupun model sederhana lainnya, serta menyusun
jadwal pertemuan tim internal sepanjang sisa semester.
Lembar Kerja: Grand Design Sistem Informasi
Petunjuk: lengkapi tabel alur data di bawah, kemudian gambarkan sebagai diagram (unit sebagai kotak,
panah menunjukkan arah aliran data/informasi, dan modul aplikasi dilabelkan pada tiap panah). Lihat
Contoh Kertas Kerja Terisi untuk model diagram.
| Dari Unit  | Ke Unit  | Data/Informasi  |     | Modul Pendukung  |
| ---------- | -------- | --------------- | --- | ---------------- |
| ___        | ___      | ___             |     | ___              |
| ___        | ___      | ___             |     | ___              |
| ___        | ___      | ___             |     | ___              |
| ___        | ___      | ___             |     | ___              |
| ___        | ___      | ___             |     | ___              |
| ___        | ___      | ___             |     | ___              |
| ___        | ___      | ___             |     | ___              |
| ___        | ___      | ___             |     | ___              |

Lembar Kerja: RACI Matrix
| Aktivitas  | Anggota 1  | Anggota 2  | Anggota 3  | Anggota 4  |
| ---------- | ---------- | ---------- | ---------- | ---------- |
|            |            |            |            |            |
|            |            |            |            |            |
|            |            |            |            |            |
|            |            |            |            |            |

Deskripsi Peran Tim
| Peran         | Nama Anggota  | Tanggung Jawab Utama  |     |     |
| ------------- | ------------- | --------------------- | --- | --- |
| Project Lead  | ___           | ___                   |     |     |
| Analis        | ___           | ___                   |     |     |
| Desainer      | ___           | ___                   |     |     |
Universitas Negeri Yogyakarta - Halaman 4

Modul Praktikum MSI - PTF60234
| Dokumentator  | ___  | ___  |     |
| ------------- | ---- | ---- | --- |

Dilengkapi dengan Deskripsi Peran Tim dan Rencana Ritme Kolaborasi (jadwal pertemuan internal, media
komunikasi tim).
Grand Design Sistem Informasi (Solusi yang Diusulkan):
Alur data dan informasi berikut menunjukkan siklus lengkap OBE-CQI, mulai dari penyusunan RPS oleh
dosen hingga tindak lanjut rekomendasi, yang kemudian berulang pada semester berikutnya.

| Dari Unit  | Ke Unit  | Data/Informasi  | Modul Pendukung  |
| ---------- | -------- | --------------- | ---------------- |
Dosen Pengampu  Program Studi  RPS (memuat CPL yang diampu Modul RPS
dan CPMK turunannya)
Program Studi  Dosen Pengampu  Validasi/persetujuan RPS  Modul RPS
Dosen Pengampu  Basis Data Akademik  Nilai mahasiswa per CPMK  Modul Input Nilai
Basis Data Akademik  Program Studi  Rekap capaian CPL lintas mata  Modul Dashboard
|     |     | kuliah  | Capaian  |
| --- | --- | ------- | -------- |
Program Studi  Unit Penjaminan Mutu  Data capaian CPL untuk  Modul Pelaporan
|     |     | dievaluasi  | Capaian  |
| --- | --- | ----------- | -------- |
Unit Penjaminan Mutu  Program Studi  Rekomendasi hasil evaluasi CQI Modul Input
Rekomendasi
Program Studi  Dosen Pengampu  Notifikasi rekomendasi untuk  Modul Notifikasi
ditindaklanjuti
Dosen Pengampu  Basis Data Tindak Lanjut  Update status tindak lanjut &  Modul Pencatatan Tindak
|                           |              | revisi RPS berikutnya  | Lanjut                |
| ------------------------- | ------------ | ---------------------- | --------------------- |
| Sistem SIAKAD (existing)  | Sistem Baru  |                        | Modul Integrasi Data  |
Data dosen pengampu & mata
kuliah otomatis
Perbandingan dengan kondisi saat ini: pada kondisi sebelumnya (lihat Pertemuan 3), rekomendasi CQI
dicatat manual dan jarang ditindaklanjuti karena tidak ada mekanisme maupun notifikasi otomatis
Universitas Negeri Yogyakarta - Halaman 5

Modul Praktikum MSI - PTF60234
antarunit. Grand Design ini menambahkan modul-modul yang menjembatani aliran data antara Dosen
Pengampu, Program Studi, Unit Penjaminan Mutu, dan sistem existing (SIAKAD), memastikan tindak
lanjut benar-benar dilakukan, bukan sekadar tercatat.

Contoh Kertas Kerja Terisi (Ilustrasi Berbasis Kasus OBE-CQI)
| Aktivitas                          |     | Project Lead  | Analis  | Desainer  | Dokumentator  |
| ---------------------------------- | --- | ------------- | ------- | --------- | ------------- |
| Mengembangkan Modul RPS (termasuk  |     | C             | A       | R         | I             |
alur validasi CPL-CPMK)
| Mengembangkan Modul Input Nilai  |     | C   | R   | A   | I   |
| -------------------------------- | --- | --- | --- | --- | --- |
| Mengembangkan Modul Dashboard    |     | C   | R   | A   | I   |
Capaian
| Mengembangkan Modul Pelaporan  |     | R   | A   | C   | I   |
| ------------------------------ | --- | --- | --- | --- | --- |
Capaian (ke UPM)
|     |     | A   | R   | C   | I   |
| --- | --- | --- | --- | --- | --- |
Mengembangkan Modul Input
Rekomendasi CQI
| Mengembangkan Modul Notifikasi  |     | C   | R   | A   | I   |
| ------------------------------- | --- | --- | --- | --- | --- |
|                                 |     | I   | A   | C   | R   |
Mengembangkan Modul Pencatatan
Tindak Lanjut
| Mengintegrasikan dengan SIAKAD  |     | A   | R   | C   | I   |
| ------------------------------- | --- | --- | --- | --- | --- |
(Modul Integrasi Data)

Deskripsi Peran Tim
| Peran  | Nama Anggota  | Tanggung Jawab Utama  |     |     |     |
| ------ | ------------- | --------------------- | --- | --- | --- |
Project Lead  (nama)  Mengoordinasikan pengembangan Modul Input Rekomendasi
CQI dan Modul Integrasi Data (SIAKAD), menjadi
Accountable pada kedua modul yang melibatkan koordinasi
lintas unit
Analis  (nama)  Menjadi Accountable pada Modul RPS, Modul Pelaporan
Capaian, dan Modul Pencatatan Tindak Lanjut, memastikan
data yang mengalir antarmodul konsisten dan akurat
Desainer  (nama)  Menjadi Accountable pada Modul Input Nilai, Modul
Dashboard Capaian, dan Modul Notifikasi, merancang
antarmuka dan alur interaksi pengguna pada ketiga modul
tersebut
Dokumentator  (nama)  Mendukung pencatatan tindak lanjut sebagai Responsible
pada Modul Pencatatan Tindak Lanjut, serta
mendokumentasikan seluruh keputusan pengembangan modul

Rencana Ritme Kolaborasi:
Tim menyepakati model kolaborasi sederhana dengan pertemuan internal setiap Jumat sore selama 30
menit untuk meninjau progres terhadap deliverables informasi, menggunakan grup pesan singkat untuk
komunikasi harian, serta dokumen bersama untuk pencatatan progres.

Universitas Negeri Yogyakarta - Halaman 6

Modul Praktikum MSI - PTF60234
Asesmen
Teknik penilaian pada pertemuan ini mencakup Kehadiran/Keaktifan, Presentasi, dan Studi Kasus, dengan
kontribusi terhadap CPMK 2 pada Komponen Penilaian RPS.
| Teknik Penilaian  |     |     | Deskripsi  |     |
| ----------------- | --- | --- | ---------- | --- |
Dinilai dari partisipasi mahasiswa selama penyusunan RACI Matrix dan
Kehadiran/Keaktifan
diskusi pemilihan model kolaborasi.
Pemaparan singkat RACI Matrix dan rencana kolaborasi tim di depan kelas,
Presentasi dan Studi Kasus  sebagai bentuk pertanggungjawaban awal atas pembagian peran yang telah
disepakati.

Rubrik Penilaian Artefak/Lembar Kerja
| Aspek  | Kurang         | Cukup  | Baik  | Sangat Baik   |
| ------ | -------------- | ------ | ----- | ------------- |
|        | Peran tumpang  |        |       | Peran jelas,  |
Peran jelas dan
Kejelasan Pembagian Peran  tindih atau tidak  Peran cukup jelas  proporsional, dan
proporsional
|     | jelas  |     |     | realistis  |
| --- | ------ | --- | --- | ---------- |
RACI tidak
|     | konsisten, lebih  |     | Konsisten pada  | Konsisten dan  |
| --- | ----------------- | --- | --------------- | -------------- |
Sebagian
Ketepatan Pengisian RACI  dari satu  sebagian besar  logis di seluruh
konsisten
|     | Accountable per  |     | aktivitas  | aktivitas  |
| --- | ---------------- | --- | ---------- | ---------- |
aktivitas
Justifikasi kuat
| Justifikasi Model  | Tidak ada  |     | Justifikasi cukup  | dan sesuai  |
| ------------------ | ---------- | --- | ------------------ | ----------- |
Justifikasi lemah
| Kolaborasi  | justifikasi  |     | relevan  | karakteristik  |
| ----------- | ------------ | --- | -------- | -------------- |
proyek

Rubrik Penilaian Laporan Praktikum (Baku - Seluruh Pertemuan)
| Aspek  | Kurang  | Cukup  | Baik  | Sangat Baik  |
| ------ | ------- | ------ | ----- | ------------ |
Kelengkapan Struktur  Kurang dari 4 dari  7 bagian terisi  7 bagian terisi
5-6 bagian terisi
| Laporan  | 7 bagian terisi  |     | lengkap  | lengkap dan rapi  |
| -------- | ---------------- | --- | -------- | ----------------- |
Menjelaskan
|                       |                 | Uraian deskriptif,  | Menjelaskan        |                   |
| --------------------- | --------------- | ------------------- | ------------------ | ----------------- |
|                       | Uraian minim,   |                     |                    | proses, alasan,   |
| Kualitas Uraian       |                 | kurang              | proses dan alasan  |                   |
|                       | hanya menyalin  |                     |                    | dan pertimbangan  |
| Pelaksanaan Kegiatan  |                 | menjelaskan         | keputusan dengan   |                   |
|                       | langkah kerja   |                     |                    | keputusan secara  |
|                       |                 | alasan keputusan    | cukup jelas        |                   |
rinci
Kendala dan
solusi relevan
|                             |                 | Kendala           | Kendala dan   |              |
| --------------------------- | --------------- | ----------------- | ------------- | ------------ |
| Ketepatan Analisis Kendala  | Kendala tidak   |                   |               | serta        |
|                             |                 | disebutkan tanpa  | solusi cukup  |              |
| dan Solusi                  | diidentifikasi  |                   |               | menunjukkan  |
|                             |                 | solusi jelas      | relevan       |              |
pemecahan
masalah aktif
Refleksi
Refleksi
|                     | Tidak ada refleksi  |                |             | mendalam,   |
| ------------------- | ------------------- | -------------- | ----------- | ----------- |
| Kedalaman Refleksi  |                     | Refleksi ada   | mengaitkan  |             |
|                     | atau sekadar        |                |             | mengaitkan  |
| Pembelajaran        |                     | namun dangkal  |             |             |
pengalaman
|     | mengulang materi  |     |     | pengalaman,  |
| --- | ----------------- | --- | --- | ------------ |
dengan konsep
konsep, dan
Universitas Negeri Yogyakarta - Halaman 7

Modul Praktikum MSI - PTF60234
Aspek Kurang Cukup Baik Sangat Baik
penerapan ke
depan
Tindak Lanjut
Struktur tim dan RACI Matrix ini menjadi dasar penyusunan strategi implementasi dan manajemen
perubahan pada Pertemuan 6.
Universitas Negeri Yogyakarta - Halaman 8

Modul Praktikum MSI - PTF60234
Format Laporan Praktikum Mingguan: Pertemuan 5
Identitas Laporan Isian
Nama Kelompok ______
Anggota (NIM/Nama) ______
Pertemuan ke- 5
Tanggal Pelaksanaan ______
Organisasi/Kasus yang Digunakan ______
2. Tujuan Kegiatan
Mahasiswa mampu menyusun struktur tim proyek, pembagian peran dan tanggung jawab pengelolaan
informasi, serta memilih model kolaborasi yang sesuai dengan karakteristik proyek sistem informasi.
3. Uraian Pelaksanaan Kegiatan
(Diisi mahasiswa: jelaskan bagaimana kelompok menyepakati pembagian peran, pertimbangan saat
mengisi RACI Matrix, terutama saat menentukan siapa yang menjadi Accountable pada setiap aktivitas
pengelolaan informasi, serta alasan pemilihan model kolaborasi tim.)
4. Hasil/Artefak Praktikum
(RACI Matrix beserta Rencana Ritme Kolaborasi terisi lengkap: dilampirkan.)
5. Kendala dan Solusi
(Diisi mahasiswa: contoh: perbedaan pendapat tentang siapa yang seharusnya menjadi Accountable pada
suatu aktivitas, diselesaikan dengan menyepakati satu penanggung jawab berdasarkan kompetensi masing-
masing anggota.)
6. Refleksi Pembelajaran
(Diisi mahasiswa: apa yang dipelajari kelompok tentang pentingnya kejelasan peran dan kepemilikan data
dalam tim proyek sistem informasi, dan bagaimana hal ini berbeda dari sekadar pembagian tugas
pengembangan perangkat lunak.)
7. Kesimpulan
(Diisi mahasiswa: ringkasan struktur tim dan kesiapan melanjutkan ke strategi implementasi pada
Pertemuan 6.)
Referensi
Laudon, K. C., & Laudon, J. P. (2014). Management information systems: Managing the digital firm (13th ed.).
Pearson Education.
Project Management Institute. (2021). A guide to the project management body of knowledge (PMBOK
guide) (7th ed.). Project Management Institute.
Schwaber, K., & Sutherland, J. (2020). The Scrum Guide. scrumguides.org.
Universitas Negeri Yogyakarta - Halaman 9

