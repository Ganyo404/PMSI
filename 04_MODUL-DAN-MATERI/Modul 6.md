---
id: MOD-006
title: "Modul 6"
type: module
project: MSI
status: verified
source_type: academic
tags:
  - msi
  - modul
  - materi
---

> 🔗 **Navigasi Vault:** Kembali ke [[Dashboard]] | Laporan Implementasi: [[Praktikum_6_Kelompok3]]

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
PERTEMUAN 6
Strategi Implementasi SI (Waterfall, Agile, Hybrid) dan Manajemen Perubahan
CPMK Tujuan Praktikum
Mahasiswa mampu membandingkan strategi
CPMK 2. Membuat rencana proyek, menetapkan
implementasi sistem informasi (Waterfall, Agile,
tujuan, menetapkan peran tim, serta merancang strategi
Hybrid) dan menyusun rencana manajemen perubahan
implementasi sistem informasi yang sesuai dengan visi
yang sesuai dengan kesiapan organisasi dan
dan misi organisasi.
karakteristik kebutuhan informasi.
Kerangka Aspek Pengelolaan Sistem Informasi
Sepanjang praktikum ini, setiap keputusan proyek sistem informasi sebaiknya ditinjau melalui tujuh aspek
pengelolaan sistem informasi berikut. Ketujuh aspek ini yang membedakan disiplin Manajemen Sistem
Informasi dari manajemen proyek perangkat lunak secara umum, karena menempatkan informasi dan
pengambilan keputusan organisasi sebagai inti perhatian, bukan penyerahan perangkat lunak semata.
Aspek Penjelasan
Sistem informasi yang dibangun harus eksplisit terhubung ke tujuan
1. Keselarasan Strategis atau misi organisasi, bukan proyek teknis yang berdiri sendiri tanpa
kaitan jelas terhadap arah organisasi.
Mencakup akurasi, konsistensi, kepemilikan data, dan akuntabilitas
2. Tata Kelola dan Kualitas Informasi atas informasi, yaitu kejelasan siapa berwenang atas data apa dan
siapa bertanggung jawab menjaga kualitasnya.
Setiap artefak proyek dinilai dari seberapa baik ia mendukung
3. Dukungan Pengambilan Keputusan pengambilan keputusan di level operasional, manajerial, maupun
strategis, sebagaimana dibahas pada Pertemuan 1.
Bukan sekadar preferensi generik terhadap fitur aplikasi, melainkan
4. Kebutuhan Informasi Stakeholder data dan laporan spesifik apa yang benar-benar dibutuhkan tiap
pihak, sebagaimana dipetakan pada Pertemuan 2.
Evaluasi proyek, termasuk KPI dan ROI pada Pertemuan 10 dan 11,
5. Nilai Informasi diukur dari perbaikan kualitas keputusan dan informasi yang
dihasilkan, bukan semata-mata efisiensi teknis pengerjaan proyek.
Sistem informasi dinilai dari bagaimana ia terhubung dan terintegrasi
6. Integrasi Proses Bisnis dengan alur kerja organisasi lintas fungsi, bukan sekadar fitur
aplikasi yang berdiri sendiri.
Perubahan yang perlu dikelola adalah perubahan perilaku pencatatan,
7. Adopsi dan Perilaku Organisasi
pelaporan, dan penggunaan data oleh pengguna, bukan sekadar
terhadap Informasi
penerimaan aplikasi baru secara umum.
Fokus MSI Pertemuan 6: Aspek 6 (Integrasi Proses Bisnis) dan Aspek 7 (Adopsi dan Perilaku Organisasi
terhadap Informasi) menjadi penekanan utama, karena strategi implementasi dan manajemen perubahan
diarahkan pada bagaimana sistem terintegrasi dengan proses bisnis existing dan bagaimana perilaku
pelaporan pengguna berubah.
Universitas Negeri Yogyakarta - Halaman 2

Modul Praktikum MSI - PTF60234
Konsep Dasar
Sebelum memilih strategi implementasi, kelompok terlebih dahulu perlu menyusun arsitektur sistem
informasi secara berlapis, yaitu bagaimana modul-modul pada Grand Design Pertemuan 5 dikelompokkan
berdasarkan fungsinya dan bagaimana lapisan-lapisan tersebut saling terhubung. Layer Antarmuka adalah
lapisan tempat pengguna berinteraksi langsung dengan sistem. Layer Logika Aplikasi adalah lapisan tempat
aturan dan proses bisnis dijalankan, misalnya validasi data atau penyusunan rekap. Layer Data adalah
lapisan tempat informasi disimpan secara permanen. Layer Integrasi adalah lapisan yang menjembatani
sistem baru dengan sistem existing seperti SIAKAD. Posisi suatu modul pada arsitektur ini turut
memengaruhi strategi implementasi yang cocok: modul pada layer antarmuka umumnya memerlukan
pengujian iteratif bersama pengguna karena menyangkut pengalaman pengguna secara langsung, sementara
modul pada layer data dan logika aplikasi yang aturannya sudah baku cenderung lebih cocok dikerjakan
secara terstruktur.
Waterfall, Agile, dan Hybrid adalah strategi implementasi yang juga menjadi materi inti mata kuliah
Manajemen Proyek Perangkat Lunak, biasanya dibahas dari sudut pandang bagaimana tim developer
mengelola risiko keterlambatan dan perubahan kebutuhan teknis. Pada praktikum Manajemen Sistem
Informasi, pemilihan strategi dilakukan dengan cara yang sama, tetapi ditinjau dari sudut pandang yang
berbeda: bukan untuk proyek secara keseluruhan, melainkan untuk setiap modul yang telah diidentifikasi
pada Grand Design Pertemuan 5, karena tiap modul memiliki tingkat kejelasan kebutuhan dan kebutuhan
pengujian iteratif yang berbeda-beda. Bagian yang justru lebih khas MSI pada pertemuan ini bukan pada
strategi implementasinya, melainkan pada manajemen perubahan, yaitu memastikan pengguna di tiap unit
benar-benar mengadopsi sistem informasi yang dibangun, bukan sekadar memastikan kode diserahkan tepat
waktu.
Model Waterfall (Royce, 1970) mengerjakan proyek secara berurutan melalui tahapan yang jelas, mulai
dari analisis kebutuhan, desain, pengembangan, pengujian, hingga peluncuran, dengan asumsi kebutuhan
sudah ditetapkan sejak awal dan tidak banyak berubah. Model Agile (Beck dkk., 2001) bekerja secara
iteratif dalam siklus pendek, sehingga kebutuhan dapat disesuaikan berdasarkan umpan balik pengguna
selama proyek. Model Hybrid menggabungkan keduanya pada level modul: modul dengan kebutuhan yang
sudah jelas dikerjakan secara Waterfall, sementara modul yang masih memerlukan validasi bersama
pengguna dikerjakan secara Agile. Dengan demikian, strategi Hybrid bukan sekadar label tengah-tengah,
melainkan hasil dari penilaian setiap modul secara individual.
Level Keputusan yang Paling
Model Karakteristik Kapan Cocok Dipakai
Terdampak
Cocok untuk sistem yang
Tahapan berurutan, Kebutuhan informasi mendukung keputusan
kebutuhan ditetapkan di organisasi sudah jelas dan operasional rutin, di mana
Waterfall
awal, perubahan di tengah stabil, format pelaporan format informasi sudah baku
jalan sulit dilakukan. tidak sering berubah. (mis. pencatatan transaksi
harian).
Kebutuhan informasi Cocok untuk sistem yang
Iteratif dalam siklus pendek
organisasi masih mendukung keputusan
(sprint), kebutuhan dapat
Agile berkembang atau perlu manajerial, di mana kebutuhan
disesuaikan berdasarkan
divalidasi bertahap bersama laporan sering berubah seiring
umpan balik.
pengguna. pemahaman pengguna.
Universitas Negeri Yogyakarta - Halaman 3

Modul Praktikum MSI - PTF60234
Level Keputusan yang Paling
Model Karakteristik Kapan Cocok Dipakai
Terdampak
Cocok ketika satu sistem
Kombinasi tahapan Sebagian kebutuhan
melayani lebih dari satu level
terstruktur untuk bagian informasi sudah pasti,
Hybrid keputusan sekaligus, misalnya
yang jelas, iteratif untuk sebagian lagi perlu diuji
pencatatan (operasional) dan
bagian yang berkembang. coba bersama pengguna.
dashboard (manajerial).
Penilaian tiap modul sebaiknya mempertimbangkan bagaimana modul tersebut terintegrasi dengan proses
bisnis yang sudah berjalan, bukan semata-mata kesiapan teknis tim pengembang. Modul yang
menggantikan proses manual yang sudah mengakar, misalnya pencatatan nilai yang selama ini dilakukan
secara terpisah oleh tiap dosen, memerlukan pendekatan yang lebih terstruktur karena kebutuhannya relatif
sudah jelas. Modul yang melibatkan interaksi berulang dengan pengguna, seperti notifikasi atau dashboard,
memerlukan pendekatan yang lebih iteratif karena tampilan dan alur interaksinya perlu diuji dan
disesuaikan berdasarkan umpan balik yang nyata.
Betapapun baiknya strategi implementasi yang dipilih untuk tiap modul, sistem informasi yang dibangun
tetap dapat gagal digunakan apabila penggunanya menolak beradaptasi dengan cara kerja baru. Laudon dan
Laudon (2014) mencatat bahwa resistensi pengguna adalah salah satu penyebab paling umum kegagalan
sistem informasi, bahkan pada sistem yang secara teknis dibangun dengan baik. Pada kasus OBE-CQI, unit-
unit yang teridentifikasi dalam Grand Design Pertemuan 5, yaitu Dosen Pengampu, Program Studi, dan
Unit Penjaminan Mutu, memiliki potensi resistensi yang berbeda-beda, tergantung pada modul yang
berdampak langsung pada cara kerja masing-masing unit.
Manajemen perubahan yang dimaksud di sini secara khusus adalah perubahan perilaku pelaporan dan
penggunaan data pada tiap unit yang teridentifikasi dalam Grand Design, bukan sekadar penerimaan
aplikasi baru secara umum. Ini mencakup identifikasi unit yang berpotensi menolak perubahan cara mereka
mencatat atau melaporkan informasi, penyusunan rencana komunikasi untuk menjelaskan manfaat modul
baru bagi kualitas informasi yang mereka hasilkan atau terima, serta penyusunan rencana pelatihan yang
berfokus pada kebiasaan pelaporan baru, bukan hanya pada navigasi antarmuka aplikasi. Peta stakeholder
yang telah disusun pada Pertemuan 2 menjadi rujukan penting di sini: unit pada kuadran Keep Satisfied
maupun Manage Closely pada Power-Interest Grid perlu mendapat perhatian khusus dalam rencana
komunikasi perubahan, karena penolakan dari pihak-pihak ini berisiko besar menghambat adopsi sistem
secara keseluruhan.
Alat dan Bahan
Template Arsitektur SI Berlapis, Template Penilaian Strategi per Modul, Template Rencana Manajemen
Perubahan, hasil Grand Design dari Pertemuan 5.
Langkah Kerja
1. Merancang arsitektur SI berlapis (25 menit). Kelompok mengelompokkan modul-modul dari
Grand Design ke dalam layer Antarmuka, Logika Aplikasi, Data, dan Integrasi, kemudian
menggambarkan bagaimana lapisan-lapisan tersebut saling terhubung.
2. Menilai setiap modul untuk strategi implementasi (20 menit). Untuk setiap modul, kelompok
menilai kejelasan kebutuhan dan kebutuhan pengujian iteratif, serta mempertimbangkan posisi
Universitas Negeri Yogyakarta - Halaman 4

Modul Praktikum MSI - PTF60234
modul pada arsitektur berlapis pada Langkah 1, menggunakan tabel perbandingan pada Dasar
Konsep sebagai acuan.
3.  Menetapkan  strategi  per  modul  dan  justifikasi  secara  keseluruhan  (15  menit).  Berdasarkan
penilaian pada Langkah 2, kelompok menetapkan strategi (Waterfall atau Agile) untuk setiap
modul, kemudian menyimpulkan strategi keseluruhan proyek berdasarkan komposisi strategi
antarmodul tersebut.
4.  Mengidentifikasi potensi resistensi terhadap perubahan per unit (20 menit). Berdasarkan Peta
Stakeholder dari Pertemuan 2 dan unit-unit pada Grand Design, kelompok mengidentifikasi unit
dengan potensi resistensi tertinggi beserta modul yang memicu resistensi tersebut.
5.  Menyusun rencana manajemen perubahan (20 menit). Kelompok menyusun rencana komunikasi
dan rencana pelatihan/sosialisasi untuk unit dengan potensi resistensi tertinggi yang teridentifikasi
pada Langkah 4.

Lembar Kerja: Arsitektur SI Berlapis
Kelompokkan modul dari Grand Design ke dalam layer yang sesuai, lalu jelaskan keterhubungannya.
| Modul  | Layer  | Terhubung dengan  |     |
| ------ | ------ | ----------------- | --- |
| ___    | ___    | ___               |     |
| ___    | ___    | ___               |     |
| ___    | ___    | ___               |     |
| ___    | ___    | ___               |     |
| ___    | ___    | ___               |     |
| ___    | ___    | ___               |     |
| ___    | ___    | ___               |     |
| ___    | ___    | ___               |     |

Lembar Kerja: Dokumen Strategi Implementasi dan Change Plan
Modul  diisi  berdasarkan  Grand  Design  pada  Pertemuan  5.  Sertakan  juga  Kesimpulan  Strategi
Keseluruhan, Potensi Resistensi per Unit, Rencana Komunikasi, dan Rencana Pelatihan pada laporan.
Modul  Kejelasan Kebutuhan  Kebutuhan Pengujian  Strategi Terpilih
Iteratif
| ___  | ___  | ___  | ___  |
| ---- | ---- | ---- | ---- |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |

Universitas Negeri Yogyakarta - Halaman 5

Modul Praktikum MSI - PTF60234

Contoh Kertas Kerja Terisi (Ilustrasi Berbasis Kasus OBE-CQI)
Langkah 1, Merancang arsitektur SI berlapis:
| Modul                    | Layer            | Terhubung dengan         |     |
| ------------------------ | ---------------- | ------------------------ | --- |
| Modul RPS                | Antarmuka        | Basis Data Akademik      |     |
| Modul Input Nilai        | Antarmuka        | Basis Data Akademik      |     |
| Modul Dashboard Capaian  | Antarmuka        | Modul Pelaporan Capaian  |     |
| Modul Pelaporan Capaian  | Logika Aplikasi  |                          |     |
Basis Data Akademik, Modul Dashboard
Capaian
| Modul Input Rekomendasi  | Logika Aplikasi  | Modul Notifikasi         |     |
| ------------------------ | ---------------- | ------------------------ | --- |
| Modul Notifikasi         | Antarmuka        | Modul Input Rekomendasi  |     |
Modul Pencatatan Tindak Lanjut  Logika Aplikasi  Basis Data Tindak Lanjut
Modul Integrasi Data (SIAKAD)  Integrasi  Basis Data Akademik, Sistem SIAKAD
eksternal

Langkah 2, Menilai tiap modul untuk strategi implementasi:
Modul  Kejelasan Kebutuhan  Kebutuhan Pengujian  Strategi Terpilih
Iteratif
| Modul RPS                       | Tinggi  | Rendah  | Waterfall  |
| ------------------------------- | ------- | ------- | ---------- |
| Modul Input Nilai               | Tinggi  | Rendah  | Waterfall  |
| Modul Dashboard Capaian         | Sedang  | Tinggi  | Agile      |
| Modul Pelaporan Capaian         | Tinggi  | Rendah  | Waterfall  |
| Modul Input Rekomendasi         | Sedang  | Sedang  | Hybrid     |
| Modul Notifikasi                | Rendah  | Tinggi  | Agile      |
| Modul Pencatatan Tindak Lanjut  | Tinggi  | Rendah  | Waterfall  |
| Modul Integrasi Data (SIAKAD)   | Rendah  | Tinggi  | Agile      |

Langkah 3, Menetapkan strategi per modul dan justifikasi keseluruhan:
Strategi keseluruhan proyek adalah Hybrid: empat modul dengan kebutuhan yang sudah jelas (Modul RPS,
Input Nilai, Pelaporan Capaian, Pencatatan Tindak Lanjut) dikerjakan secara Waterfall; tiga modul yang
memerlukan  pengujian  bersama  pengguna  (Modul  Dashboard  Capaian,  Notifikasi,  Integrasi  Data)
Universitas Negeri Yogyakarta - Halaman 6

Modul Praktikum MSI - PTF60234
dikerjakan secara Agile; dan Modul Input Rekomendasi dikerjakan secara Hybrid karena strukturnya sudah
cukup jelas namun formatnya masih perlu disepakati bersama Unit Penjaminan Mutu.
Langkah 4, Mengidentifikasi potensi resistensi perubahan per unit:
Unit Modul Terkait Alasan Resistensi
Dosen Pengampu Modul RPS, Modul Pencatatan Terbiasa mengisi laporan manual, kewajiban baru
Tindak Lanjut memperbarui status tindak lanjut secara rutin
Program Studi Modul Dashboard Capaian Perlu beradaptasi dengan format rekap otomatis,
menggantikan rekap manual yang selama ini dipakai
Unit Penjaminan Mutu Modul Input Rekomendasi Perlu menyesuaikan format input rekomendasi CQI ke
dalam struktur sistem baru
Langkah 5, Menyusun rencana manajemen perubahan:
Rencana Komunikasi: sosialisasi singkat kepada Dosen Pengampu sebagai unit dengan potensi resistensi
tertinggi, dilakukan di awal semester, menjelaskan bahwa pembaruan status hanya memerlukan waktu
kurang dari dua menit dan membantu dosen menghindari pertanyaan berulang saat audit mutu.
Rencana Pelatihan: panduan bergambar satu halaman khusus untuk Modul Pencatatan Tindak Lanjut, yang
menekankan kebiasaan baru untuk mencatat status segera setelah tindak lanjut dilakukan, bukan sekadar
cara mengklik tombol pada aplikasi.
Asesmen
Teknik penilaian pada pertemuan ini mencakup Kehadiran/Keaktifan dan Proyek, dengan kontribusi
terhadap CPMK 2 pada Komponen Penilaian RPS.
Teknik Penilaian Deskripsi
Dinilai dari partisipasi mahasiswa selama diskusi perbandingan strategi
Kehadiran/Keaktifan
implementasi dan penyusunan rencana manajemen perubahan.
Dokumen Strategi Implementasi dan Change Plan yang telah diisi lengkap,
Proyek
termasuk justifikasi strategi dan rencana komunikasi/pelatihan.
Rubrik Penilaian Artefak/Lembar Kerja
Aspek Kurang Cukup Baik Sangat Baik
Strategi logis,
Ketepatan Pemilihan Strategi tidak Strategi beralasan Strategi logis dan sesuai konteks, dan
Strategi Implementasi beralasan lemah sesuai konteks mempertimbangkan
alternatif
Kaitan dijelaskan
spesifik dan
Kaitan Strategi dengan Kaitan Kaitan dijelaskan menunjukkan
Tidak ada kaitan
Level Keputusan dan disebutkan secara dengan cukup pemahaman
yang dijelaskan
Proses Bisnis umum spesifik dampak terhadap
proses bisnis
existing
Resistensi dianalisis
Resistensi Resistensi dan
Kedalaman Analisis Resistensi tidak mendalam dan
disebutkan tanpa alasan cukup
Resistensi Perubahan diidentifikasi berbasis peta
alasan jelas jelas
stakeholder
Universitas Negeri Yogyakarta - Halaman 7

Modul Praktikum MSI - PTF60234
| Aspek  | Kurang  | Cukup  | Baik  | Sangat Baik  |
| ------ | ------- | ------ | ----- | ------------ |
Rencana spesifik,
|                      |            |                | Rencana cukup  | realistis, dan      |
| -------------------- | ---------- | -------------- | -------------- | ------------------- |
| Kelengkapan Rencana  | Tidak ada  | Rencana ada    |                |                     |
|                      |            |                | spesifik dan   | menyasar            |
| Manajemen Perubahan  | rencana    | namun generik  |                |                     |
|                      |            |                | realistis      | perubahan perilaku  |
pelaporan

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
mendalam,
Refleksi
|                     | Tidak ada refleksi  |                |             | mengaitkan   |
| ------------------- | ------------------- | -------------- | ----------- | ------------ |
| Kedalaman Refleksi  |                     | Refleksi ada   | mengaitkan  |              |
|                     | atau sekadar        |                |             | pengalaman,  |
| Pembelajaran        |                     | namun dangkal  | pengalaman  |              |
|                     | mengulang materi    |                |             | konsep, dan  |
dengan konsep
penerapan ke
depan

Tindak Lanjut
Strategi implementasi dan rencana manajemen perubahan ini menjadi dasar penyusunan jadwal proyek
menggunakan Gantt Chart dan PERT Chart pada Pertemuan 7.

Universitas Negeri Yogyakarta - Halaman 8

Modul Praktikum MSI - PTF60234
Format Laporan Praktikum Mingguan: Pertemuan 6
Identitas Laporan Isian
Nama Kelompok ______
Anggota (NIM/Nama) ______
Pertemuan ke- 6
Tanggal Pelaksanaan ______
Organisasi/Kasus yang Digunakan ______
2. Tujuan Kegiatan
Mahasiswa mampu membandingkan strategi implementasi sistem informasi (Waterfall, Agile, Hybrid) dan
menyusun rencana manajemen perubahan yang sesuai dengan kesiapan organisasi dan karakteristik
kebutuhan informasi.
3. Uraian Pelaksanaan Kegiatan
(Diisi mahasiswa: jelaskan bagaimana kelompok membandingkan ketiga strategi implementasi,
pertimbangan yang mendasari pemilihan strategi, dan bagaimana kelompok mengidentifikasi potensi
resistensi dari peta stakeholder.)
4. Hasil/Artefak Praktikum
(Dokumen Strategi Implementasi dan Change Plan terisi lengkap: dilampirkan.)
5. Kendala dan Solusi
(Diisi mahasiswa: contoh: kesulitan menentukan bagian mana yang sebaiknya waterfall dan mana yang
agile pada strategi hybrid, diselesaikan dengan merujuk kembali pada tingkat kepastian kebutuhan
informasi di Project Scope Statement.)
6. Refleksi Pembelajaran
(Diisi mahasiswa: apa yang dipelajari kelompok tentang pentingnya manajemen perubahan, dan mengapa
sistem informasi bisa gagal dipakai meskipun secara teknis berfungsi baik.)
7. Kesimpulan
(Diisi mahasiswa: ringkasan strategi implementasi dan rencana manajemen perubahan, serta kesiapan
melanjutkan ke penyusunan jadwal proyek pada Pertemuan 7.)
Referensi
Laudon, K. C., & Laudon, J. P. (2014). Management information systems: Managing the digital firm (13th ed.).
Pearson Education.
Royce, W. W. (1970). Managing the development of large software systems. Proceedings of IEEE
WESCON, 26, 1-9.
Beck, K., Beedle, M., van Bennekum, A., Cockburn, A., Cunningham, W., Fowler, M., Grenning, J.,
Highsmith, J., Hunt, A., Jeffries, R., Kern, J., Marick, B., Martin, R. C., Mellor, S., Schwaber, K.,
Sutherland, J., & Thomas, D. (2001). Manifesto for agile software development. Agile Alliance.
Universitas Negeri Yogyakarta - Halaman 9

