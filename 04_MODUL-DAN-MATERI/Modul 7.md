---
id: MOD-007
title: "Modul 7"
type: module
project: MSI
status: verified
source_type: academic
tags:
  - msi
  - modul
  - materi
---

> 🔗 **Navigasi Vault:** Kembali ke [[Dashboard]] | Laporan Implementasi: [[Praktikum_7_Kelompok3]]

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
PERTEMUAN 7
Pembuatan Gantt Chart dan PERT Chart
CPMK Tujuan Praktikum
Mahasiswa mampu menyusun jadwal proyek
sistem informasi menggunakan Gantt Chart dan
CPMK 3. Menggunakan alat bantu manajemen proyek
PERT Chart untuk kedelapan modul pada Grand
(seperti Gantt Chart, RACI Matrix, atau tools digital
Design, dengan urutan yang mencerminkan
seperti Trello, MS Project) dalam pengelolaan dan
strategi implementasi per modul dari Pertemuan 6
pelaksanaan proyek TI.
dan ketergantungan informasi, bukan semata-
mata ketergantungan teknis pengembangan.
Kerangka Aspek Pengelolaan Sistem Informasi
Sepanjang praktikum ini, setiap keputusan proyek sistem informasi sebaiknya ditinjau melalui tujuh aspek
pengelolaan sistem informasi berikut. Ketujuh aspek ini membedakan disiplin Manajemen Sistem
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
Fokus MSI Pertemuan 7: Aspek 2 (Tata Kelola dan Kualitas Informasi) dan Aspek 3 (Dukungan
Pengambilan Keputusan) menjadi penekanan utama, karena penjadwalan Gantt/PERT diarahkan untuk
mengenali aktivitas pengambilan keputusan informasi yang menentukan jalur kritis proyek.
Universitas Negeri Yogyakarta - Halaman 2

Modul Praktikum MSI - PTF60234
Catatan pelaksanaan: berbeda dari pertemuan lain yang berdurasi 100 menit, Pertemuan 7 mencakup dua
kompetensi (menyusun Gantt Chart dan menganalisis jaringan PERT secara manual) sehingga
dilaksanakan dalam 2 kali sesi praktikum berturut-turut, dengan total alokasi waktu 180 menit.
Konsep Dasar
Gantt Chart dan PERT Chart adalah alat penjadwalan yang juga menjadi materi inti dalam mata kuliah
Manajemen Proyek Perangkat Lunak. Biasanya, keduanya disusun berdasarkan ketergantungan teknis
antaraktivitas pengembangan, misalnya modul backend harus selesai sebelum modul frontend dapat diuji.
Pada praktikum Manajemen Sistem Informasi, urutan aktivitas yang sama perlu mempertimbangkan satu
jenis ketergantungan tambahan yang sering terlewat, yaitu ketergantungan informasi: suatu aktivitas teknis
tidak dapat dimulai secara bermakna sebelum keputusan tentang data atau format pelaporan terkait
disepakati oleh pihak yang berwenang. Menjadwalkan pembangunan fitur sebelum format pelaporannya
disepakati berisiko menghasilkan pekerjaan ulang, betapapun rapinya jadwal tersebut secara teknis.
Gantt Chart menyajikan aktivitas proyek dalam bentuk diagram batang pada garis waktu, menunjukkan
kapan setiap aktivitas dimulai dan berakhir, serta aktivitas mana yang berjalan secara bersamaan. PERT
Chart, singkatan dari Program Evaluation and Review Technique, menyajikan aktivitas sebagai jaringan
yang menunjukkan urutan ketergantungan antaraktivitas; keduanya merupakan model dan teknik
penjadwalan yang dijelaskan dalam PMBOK Guide (Project Management Institute, 2021). Dari jaringan
PERT dapat ditentukan jalur kritis, yaitu rangkaian aktivitas yang menentukan durasi minimum
keseluruhan proyek. Keterlambatan pada aktivitas di jalur kritis akan langsung menunda keseluruhan
proyek, sementara keterlambatan pada aktivitas di luar jalur kritis masih memiliki ruang toleransi.
Pada kasus OBE-CQI, penjadwalan Pertemuan 7 melanjutkan langsung hasil Pertemuan 5 dan 6: delapan
modul pada Grand Design dijadwalkan sesuai strategi implementasi yang telah ditetapkan untuk masing-
masing modul, bukan disusun ulang sebagai daftar aktivitas baru. Modul dengan kebutuhan yang sudah
jelas dan strategi Waterfall, misalnya Modul RPS dan Modul Input Nilai, dijadwalkan dengan durasi tetap
secara berurutan. Modul dengan strategi Agile, misalnya Modul Dashboard Capaian dan Modul Notifikasi,
memerlukan durasi yang lebih panjang karena mencakup siklus pengujian iteratif bersama pengguna.
Ketergantungan antarmodul pada umumnya merupakan dependensi informasi, karena setiap modul
menunggu data atau keputusan yang dihasilkan modul sebelumnya dalam alur Grand Design. Misalnya,
Modul Dashboard Capaian tidak dapat diuji secara bermakna sebelum Modul Input Nilai menghasilkan
data nilai untuk setiap CPMK.
Teknik forward pass digunakan untuk menghitung Earliest Start (ES) dan Earliest Finish (EF) pada setiap
modul, dimulai dari modul pertama hingga modul terakhir. ES adalah suatu modul yang sama dengan EF
terbesar dari seluruh modul pendahulunya (atau nol jika modul tersebut tidak memiliki pendahulu),
sedangkan EF dihitung dengan menjumlahkan ES dan durasi modul tersebut (EF = ES + durasi). EF terbesar
di antara seluruh modul menunjukkan durasi keseluruhan proyek yang paling minimum.
Setelah forward pass selesai, teknik backward pass digunakan untuk menghitung Latest Finish (LF) dan
Latest Start (LS) pada setiap modul, dengan menelusuri mundur dari modul terakhir hingga modul pertama.
LF modul yang tidak memiliki modul penerus sama dengan durasi minimum proyek hasil forward pass. LF
modul lainnya sama dengan LS terkecil dari seluruh modul penerusnya, sedangkan LS dihitung dengan
mengurangkan durasi modul tersebut dari LF (LS = LF - durasi modul).
Universitas Negeri Yogyakarta - Halaman 3

Modul Praktikum MSI - PTF60234
Slack, atau float, dihitung dengan mengurangkan ES dari LS pada modul yang sama (Slack = LS - ES = LF
- EF). Modul dengan slack nol berada pada jalur kritis, artinya keterlambatan pada modul tersebut akan
langsung menunda seluruh proyek. Modul dengan slack lebih besar dari nol memiliki ruang toleransi
keterlambatan sebesar nilai slack tersebut tanpa memengaruhi durasi total proyek.
Alat Fungsi Utama Fokus dalam Praktikum MSI
Menampilkan kapan setiap deliverable
Menampilkan jadwal aktivitas terhadap
informasi (data tervalidasi, format
Gantt Chart waktu dan aktivitas yang berjalan
disepakati, prototipe siap) akan tersedia,
bersamaan.
bukan hanya kapan kode selesai ditulis.
Mengidentifikasi aktivitas pengambilan
keputusan informasi (mis. persetujuan
Menentukan urutan ketergantungan format laporan) yang berada di jalur
PERT Chart / Jalur Kritis
aktivitas dan durasi minimum proyek. kritis, karena keterlambatan keputusan
ini akan menunda seluruh aktivitas
teknis yang bergantung padanya.
Alat dan Bahan
Template Gantt Chart, Template Analisis Jalur Kritis, hasil RACI Matrix dari Pertemuan 5, dan hasil
Dokumen Strategi Implementasi dari Pertemuan 6.
Langkah Kerja
Sesi 1: Menyusun Gantt Chart (100 menit)
1. Meninjau Grand Design dan strategi implementasi per modul (15 menit). Kelompok meninjau kembali
kedelapan modul pada Grand Design Pertemuan 5 beserta strategi implementasi (Waterfall, Agile, atau
Hybrid) yang ditetapkan untuk tiap modul pada Pertemuan 6, sebagai dasar penjadwalan pada langkah
berikutnya.
2. Menyusun daftar modul dan jenis dependensi (15 menit). Kelompok mendaftar kedelapan modul dari
Grand Design sebagai baris aktivitas, menandai setiap dependensi antarmodul sebagai dependensi
informasi (menunggu data/keputusan dari modul sebelumnya) atau dependensi teknis (menunggu
struktur data/skema, bukan keputusan).
3. Menentukan durasi tiap modul (15 menit). Kelompok memperkirakan durasi tiap modul dengan
mempertimbangkan strategi implementasinya: modul Waterfall diberi durasi tetap sesuai dengan
kejelasan kebutuhan, modul Agile diberi durasi yang mencakup siklus pengujian iteratif, dan modul
Hybrid mengombinasikan keduanya.
4. Menggambar Gantt Chart (35 menit). Kelompok menggambar diagram batang Gantt Chart berdasarkan
durasi dan dependensi yang telah ditentukan, yang menunjukkan modul mana yang dikerjakan
berurutan dan modul mana yang dapat dikerjakan secara paralel.
5. Menandai milestone informasi (20 menit). Kelompok menandai titik-titik penting terkait ketersediaan
informasi pada tiap modul, misalnya ôdata nilai per CPMK tervalidasiö atau ôrekomendasi CQI tersedia
untuk ditindaklanjutiö, sebagai milestone terpisah dari milestone teknis seperti ômodul selesai diujiö.
Universitas Negeri Yogyakarta - Halaman 4

Modul Praktikum MSI - PTF60234
Sesi 2: Analisis Jaringan PERT dan Jalur Kritis (80 menit)
1.  Menyusun  jaringan  PERT  dan  melakukan  forward  pass  (25  menit).  Kelompok  menyusun
kedelapan modul sebagai jaringan PERT sesuai dependensi yang telah ditentukan pada Sesi 1,
kemudian menghitung Earliest Start (ES) dan Earliest Finish (EF) untuk tiap modul secara
berurutan dari modul pertama hingga modul terakhir.
2.  Melakukan backward pass (25 menit). Kelompok menghitung Latest Finish (LF) dan Latest Start
(LS) untuk tiap modul secara mundur, dimulai dari modul terakhir, dengan LF modul yang tidak
memiliki penerus sama dengan durasi minimum proyek hasil forward pass.
3.  Menghitung slack dan menentukan jalur kritis (20 menit). Kelompok menghitung slack tiap modul
(LS dikurangi ES); modul dengan slack nol berada pada jalur kritis, sedangkan modul dengan slack
lebih besar dari nol memiliki ruang toleransi terhadap keterlambatan. Slack di sini bukan hanya
penanda toleransi jadwal, tetapi juga penanda prioritas tata kelola: modul berslack nol memerlukan
kepastian data dan keputusan informasi lebih awal dari unit terkait, sehingga rencana komunikasi
perubahan pada Pertemuan 6 sebaiknya diprioritaskan pada unit yang menaungi modul-modul
tersebut, bukan dibagi rata ke seluruh unit.
4.  Merefleksikan  hasil  dan  menyelaraskan  dengan  Gantt  Chart  (10  menit).  Kelompok
membandingkan  hasil  analisis  jalur  kritis  dengan  Gantt  Chart  yang  disusun  pada  Sesi  1,
memastikan keduanya konsisten, kemudian menegaskan kembali informasi milestone yang berada
di jalur kritis.
Lembar Kerja Sesi 1: Gantt Chart
Aktivitas (Modul)  Durasi (hari)  Dependensi  Jenis Dependensi
| ___  | ___  | ___  | ___  |
| ---- | ---- | ---- | ---- |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |
| ___  | ___  | ___  | ___  |

Lembar Kerja Sesi 2: Analisis Jaringan PERT (Forward Pass, Backward Pass, Slack)
Gunakan hasil Lembar Kerja Sesi 1 untuk mengisi tabel forward pass, backward pass, dan slack di bawah
ini.
| Aktivitas (Modul)  | ES  EF  | LS  LF  | Slack  Jalur Kritis  |
| ------------------ | ------- | ------- | -------------------- |
(Y/T)
| ___  | ___  ___  | ___  ___  | ___  ___  |
| ---- | --------- | --------- | --------- |
| ___  | ___  ___  | ___  ___  | ___  ___  |
| ___  | ___  ___  | ___  ___  | ___  ___  |
| ___  | ___  ___  | ___  ___  | ___  ___  |
| ___  | ___  ___  | ___  ___  | ___  ___  |
| ___  | ___  ___  | ___  ___  | ___  ___  |
| ___  | ___  ___  | ___  ___  | ___  ___  |
| ___  | ___  ___  | ___  ___  | ___  ___  |
Universitas Negeri Yogyakarta - Halaman 5

Modul Praktikum MSI - PTF60234
Contoh Kertas Kerja Terisi (Ilustrasi Berbasis Kasus OBE-CQI)
Sesi 1: Gantt Chart Terisi
Aktivitas (Modul)  Durasi (hari)  Dependensi  Jenis Dependensi
| Modul RPS                      | 5   | Tidak ada          | -          |
| ------------------------------ | --- | ------------------ | ---------- |
| Modul Integrasi Data (SIAKAD)  | 6   | Modul RPS selesai  | Teknis     |
| Modul Input Nilai              | 4   | Modul RPS selesai  | Informasi  |
Modul Dashboard Capaian  6  Modul Input Nilai selesai Informasi
| Modul Pelaporan Capaian  | 4   | Modul Dashboard  | Informasi  |
| ------------------------ | --- | ---------------- | ---------- |
Capaian selesai
| Modul Input Rekomendasi CQI  | 5   | Modul Pelaporan  | Informasi  |
| ---------------------------- | --- | ---------------- | ---------- |
Capaian selesai
| Modul Notifikasi  | 5   | Modul Input  | Informasi  |
| ----------------- | --- | ------------ | ---------- |
Rekomendasi CQI
selesai
Modul Pencatatan Tindak Lanjut  4  Modul Notifikasi selesai Informasi

Sesi 2: Analisis PERT Terisi (Forward Pass, Backward Pass, Slack)
Universitas Negeri Yogyakarta - Halaman 6

Modul Praktikum MSI - PTF60234

| Aktivitas (Modul)  | ES  EF  | LS  LF  | Slack  Jalur Kritis  |
| ------------------ | ------- | ------- | -------------------- |
(Y/T)
| Modul RPS             | 0  5   | 0  5    | 0  Y   |
| --------------------- | ------ | ------- | ------ |
| Modul Integrasi Data  | 5  11  | 27  33  | 22  T  |
(SIAKAD)
| Modul Input Nilai        | 5  9    | 5  9    | 0  Y  |
| ------------------------ | ------- | ------- | ----- |
| Modul Dashboard Capaian  | 9  15   | 9  15   | 0  Y  |
| Modul Pelaporan Capaian  | 15  19  | 15  19  | 0  Y  |
| Modul Input Rekomendasi  | 19  24  | 19  24  | 0  Y  |
CQI
| Modul Notifikasi         | 24  29  | 24  29  | 0  Y  |
| ------------------------ | ------- | ------- | ----- |
| Modul Pencatatan Tindak  | 29  33  | 29  33  | 0  Y  |
Lanjut

Pada contoh di atas, jalur kritis melewati tujuh modul (Modul RPS, Modul Input Nilai, Modul Dashboard
Capaian, Modul Pelaporan Capaian, Modul Input Rekomendasi CQI, Modul Notifikasi, dan Modul
Pencatatan Tindak Lanjut) dengan durasi minimum proyek 33 hari, sementara Modul Integrasi Data
(SIAKAD) berada di luar jalur kritis dengan slack 22 hari karena tidak ada modul lain yang menunggu
hasilnya. Ini berarti keterlambatan pada salah satu dari ketujuh modul jalur kritis akan langsung menunda
keseluruhan proyek, sekalipun tim mengerjakan Modul Integrasi Data lebih lambat dari rencana. Temuan
seperti  ini  sering  luput  bila  jadwal  hanya  disusun  berdasarkan  estimasi  kerja  teknis  semata,  tanpa
menelusuri kembali urutan dependensi informasi dalam Grand Design.

Universitas Negeri Yogyakarta - Halaman 7

Modul Praktikum MSI - PTF60234
Asesmen
Teknik penilaian pada pertemuan ini mencakup Kehadiran/Keaktifan dan Proyek, dengan kontribusi
terhadap CPMK 3 pada Komponen Penilaian RPS.
| Teknik Penilaian  |     |     | Deskripsi  |     |
| ----------------- | --- | --- | ---------- | --- |
Dinilai dari partisipasi mahasiswa selama penyusunan daftar aktivitas dan
Kehadiran/Keaktifan
diskusi identifikasi jalur kritis.
Gantt Chart dan Analisis Jalur Kritis yang telah diisi lengkap, termasuk
Proyek
klasifikasi jenis dependensi setiap aktivitas.

Rubrik Penilaian Artefak/Lembar Kerja
| Aspek  | Kurang  | Cukup  | Baik  | Sangat Baik  |
| ------ | ------- | ------ | ----- | ------------ |
Diagram tidak  Diagram lengkap  Diagram lengkap  Diagram lengkap,
Ketepatan Diagram Gantt
lengkap atau tidak  namun estimasi  dan estimasi  estimasi realistis,
Chart
|     | konsisten  | kasar  | cukup realistis  | dan rapi  |
| --- | ---------- | ------ | ---------------- | --------- |
Ketepatan Klasifikasi  Tidak ada  Klasifikasi ada  Klasifikasi tepat  Klasifikasi tepat
Dependensi Informasi vs  klasifikasi  namun sering  pada sebagian  dan konsisten di
Teknis  dependensi  keliru  besar aktivitas  seluruh aktivitas
Jalur kritis tepat
disertai analisis
Jalur kritis
Ketepatan Identifikasi Jalur  Jalur kritis tidak  implikasinya
Jalur kritis tepat
diidentifikasi
| Kritis  | diidentifikasi  |     |     | terhadap  |
| ------- | --------------- | --- | --- | --------- |
namun keliru
keputusan
informasi

Rubrik Penilaian Laporan Praktikum (Baku - Seluruh Pertemuan)
| Aspek  | Kurang  | Cukup  | Baik  | Sangat Baik  |
| ------ | ------- | ------ | ----- | ------------ |
Kelengkapan Struktur  Kurang dari 4 dari  7 bagian terisi  7 bagian terisi
5-6 bagian terisi
| Laporan  | 7 bagian terisi  |     | lengkap  | lengkap dan rapi  |
| -------- | ---------------- | --- | -------- | ----------------- |
Menjelaskan
|                  |                 | Uraian deskriptif,  | Menjelaskan        |                   |
| ---------------- | --------------- | ------------------- | ------------------ | ----------------- |
|                  | Uraian minim,   |                     |                    | proses, alasan,   |
| Kualitas Uraian  |                 | kurang              | proses dan alasan  |                   |
|                  | hanya menyalin  |                     |                    | dan pertimbangan  |
Pelaksanaan Kegiatan
|     |                | menjelaskan       | keputusan dengan  |                   |
| --- | -------------- | ----------------- | ----------------- | ----------------- |
|     | langkah kerja  |                   |                   | keputusan secara  |
|     |                | alasan keputusan  | cukup jelas       |                   |
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
| Pembelajaran        |                     | namun dangkal  |             |              |
pengalaman
|     | mengulang materi  |     |     | konsep, dan  |
| --- | ----------------- | --- | --- | ------------ |
dengan konsep
penerapan ke
depan
Universitas Negeri Yogyakarta - Halaman 8

Modul Praktikum MSI - PTF60234
Tindak Lanjut
Gantt Chart dan hasil analisis jalur kritis ini menjadi dasar penginputan jadwal ke dalam MS Project pada
Pertemuan 8.
Universitas Negeri Yogyakarta - Halaman 9

Modul Praktikum MSI - PTF60234
Format Laporan Praktikum Mingguan: Pertemuan 7
Identitas Laporan Isian
Nama Kelompok ______
Anggota (NIM/Nama) ______
Pertemuan ke- 7
Tanggal Pelaksanaan ______
Organisasi/Kasus yang Digunakan ______
2. Tujuan Kegiatan
Mahasiswa mampu menyusun jadwal proyek sistem informasi menggunakan Gantt Chart dan PERT Chart
untuk kedelapan modul pada Grand Design, dengan urutan yang mencerminkan strategi implementasi per
modul dari Pertemuan 6 dan ketergantungan informasi, bukan semata-mata ketergantungan teknis
pengembangan.
3. Uraian Pelaksanaan Kegiatan
(Diisi mahasiswa: jelaskan bagaimana kelompok mengklasifikasikan dependensi informasi dan dependensi
teknis pada setiap aktivitas, serta bagaimana jalur kritis ditentukan.)
4. Hasil/Artefak Praktikum
(Gantt Chart dan Analisis Jalur Kritis terisi lengkap: dilampirkan.)
5. Kendala dan Solusi
(Diisi mahasiswa: contoh: kesulitan membedakan dependensi informasi dari dependensi teknis pada
aktivitas tertentu, diselesaikan dengan merujuk kembali pada RACI Matrix untuk melihat siapa
Accountable atas keputusan tersebut.)
6. Refleksi Pembelajaran
(Diisi mahasiswa: apa yang dipelajari kelompok tentang risiko menjadwalkan pekerjaan teknis sebelum
keputusan terkait informasi disepakati.)
7. Kesimpulan
(Diisi mahasiswa: ringkasan jadwal proyek dan kesiapan melanjutkan ke penggunaan MS Project pada
Pertemuan 8.)
Referensi
Laudon, K. C., & Laudon, J. P. (2014). Management information systems: Managing the digital firm (13th ed.).
Pearson Education.
Project Management Institute. (2021). A guide to the project management body of knowledge (PMBOK guide) (7th
ed.). Project Management Institute.
Universitas Negeri Yogyakarta - Halaman 10

