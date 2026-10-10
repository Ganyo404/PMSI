---
id: MOD-002
title: "Modul 2"
type: module
project: MSI
status: verified
source_type: academic
tags:
  - msi
  - modul
  - materi
---

> 🔗 **Navigasi Vault:** Kembali ke [[Dashboard]] | Laporan Implementasi: [[Praktikum_2_Kelompok_3_revisi]]

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
PERTEMUAN 2
Analisis Stakeholder dan Lingkungan Bisnis
CPMK Tujuan Praktikum
Mahasiswa mampu mengidentifikasi stakeholder
CPMK 1. Memahami permasalahan, kebutuhan organisasi dan memetakan kepentingan serta pengaruh
pemangku kepentingan, dan sumber daya yang masing-masing, serta menganalisis faktor lingkungan
dibutuhkan untuk mengelola sistem informasi di bisnis yang membentuk kebutuhan informasi
lingkungan organisasi. organisasi, sebagai dasar rencana pengembangan
sistem informasi.
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
Fokus MSI Pertemuan 2: Aspek 4 (Kebutuhan Informasi Stakeholder) menjadi penekanan utama, karena
pemetaan Power-Interest Grid diarahkan untuk memahami data dan laporan apa yang dibutuhkan tiap
pihak, bukan sekadar dukungan politis terhadap proyek.
Konsep Dasar
Power-Interest Grid yang dipelajari pada pertemuan ini juga merupakan alat standar dalam manajemen
proyek untuk perencanaan keterlibatan stakeholder. Perbedaan penekanannya terletak pada apa yang ingin
Universitas Negeri Yogyakarta - Halaman 2

Modul Praktikum MSI - PTF60234
diketahui dari pemetaan tersebut. Pada manajemen proyek generik, pemetaan stakeholder biasanya
bertujuan untuk mengelola dukungan atau resistensi terhadap jadwal dan anggaran proyek. Pada praktikum
Manajemen Sistem Informasi, pemetaan yang sama digunakan untuk memahami kebutuhan informasi
setiap pihak, yaitu data dan laporan apa yang mereka perlukan dari sistem, serta sejauh mana mereka
berwenang menentukan bagaimana informasi tersebut disajikan dan ditindaklanjuti. Power dan interest
yang dipetakan di sini adalah power dan interest atas keputusan informasi, bukan sekadar atas jalannya
proyek.
Setiap sistem informasi dibangun untuk melayani kepentingan sekelompok pihak, dan setiap pihak
memiliki tingkat pengaruh yang berbeda terhadap keberhasilan proyek. Laudon dan Laudon (2014)
menekankan bahwa keberhasilan sistem informasi tidak hanya ditentukan oleh kualitas teknis, tetapi juga
oleh sejauh mana kebutuhan pengguna dan pemangku kepentingan benar-benar dipahami sejak tahap awal.
Mengabaikan salah satu stakeholder penting sering menjadi penyebab sistem yang secara teknis berjalan
baik tetapi tidak digunakan sebagaimana mestinya.
Pada kasus OBE-CQI yang dibahas pada Pertemuan 1, dosen bukan satu-satunya pihak yang
berkepentingan terhadap sistem. Koordinator program studi memerlukan data yang dapat dibandingkan
antarsemester untuk menyusun laporan mutu. Unit penjaminan mutu memerlukan bukti bahwa
rekomendasi perbaikan benar-benar ditindaklanjuti, bukan sekadar tercatat di dashboard. Pimpinan
fakultas memerlukan rangkuman ketercapaian lintas program studi untuk pengambilan keputusan
kurikulum. Mahasiswa, meskipun jarang disadari, juga merupakan pemangku kepentingan karena hasil
evaluasi memengaruhi kualitas pembelajaran yang mereka terima. Kelima pihak ini memiliki kepentingan
yang berbeda terhadap sistem yang sama, dan kegagalan memahami perbedaan ini dapat membuat sistem
dirancang hanya untuk kebutuhan satu pihak sambil mengabaikan pihak lain.
Gambar 2.1. Power-Interest Grid
Untuk memetakan stakeholder secara sistematis, praktik manajemen proyek umum menggunakan dua
dimensi utama, yaitu power atau tingkat pengaruh yang dimiliki stakeholder terhadap keputusan proyek,
dan interest atau seberapa besar kepentingan mereka terhadap hasil proyek. Kombinasi kedua dimensi ini
menghasilkan Power-Interest Grid dengan 4 kuadran. Stakeholder dengan power dan interest tinggi
Universitas Negeri Yogyakarta - Halaman 3

Modul Praktikum MSI - PTF60234
memerlukan pengelolaan erat karena keputusan mereka sangat memengaruhi arah proyek. Stakeholder
dengan power tinggi namun interest rendah perlu dijaga kepuasannya agar tidak menghambat proyek
meskipun tidak terlibat aktif. Stakeholder dengan interest tinggi namun power rendah cukup diberi
informasi berkala, sementara stakeholder dengan power dan interest rendah cukup dipantau tanpa perlu
perhatian khusus.
Pemetaan yang akurat membantu tim proyek menentukan strategi komunikasi yang tepat untuk setiap
pihak, sekaligus mengantisipasi potensi resistensi. Pada kasus OBE-CQI, misalnya, dosen pengampu mata
kuliah mungkin memiliki minat tinggi karena pekerjaan mereka langsung terdampak, tetapi power-nya
terbatas karena keputusan mengenai format pelaporan biasanya ditetapkan oleh unit penjaminan mutu atau
pimpinan fakultas. Tim proyek yang menyadari hal ini akan merancang strategi komunikasi yang berbeda
untuk dosen dibandingkan untuk pimpinan fakultas, alih-alih memperlakukan seluruh pengguna dengan
pendekatan yang sama.
Memahami stakeholder saja belum cukup untuk merancang sistem informasi yang tepat sasaran.
Kebutuhan informasi suatu organisasi tidak muncul dalam ruang hampa; ia dibentuk oleh lingkungan
bisnis di sekitarnya, yaitu faktor eksternal dan internal yang memengaruhi mengapa organisasi memerlukan
informasi tertentu dan bagaimana informasi itu harus dikelola. Mengabaikan analisis lingkungan bisnis
berisiko menghasilkan sistem yang secara teknis rapi namun tidak menjawab tekanan nyata yang dihadapi
organisasi, misalnya, kewajiban pelaporan kepada lembaga eksternal yang sebenarnya menjadi alasan
utama sistem tersebut dibutuhkan.
Analisis lingkungan bisnis pada praktikum ini mencakup 4 kategori. Pertama, regulasi dan kepatuhan, yaitu
aturan atau standar eksternal yang mewajibkan organisasi untuk mengelola informasi tertentu. Kedua,
benchmark atau kompetisi, yaitu bagaimana organisasi sejenis mengelola kebutuhan informasi yang serupa,
yang dapat menjadi rujukan maupun pembanding. Ketiga, kapasitas internal, yaitu sumber daya, budaya
kerja, dan infrastruktur yang tersedia atau justru menjadi kendala bagi organisasi. Keempat, tren dan
tekanan eksternal, yaitu perubahan di luar organisasi yang mendorong kebutuhan akan sistem informasi
baru. Pada kasus OBE-CQI, misalnya, standar akreditasi BAN-PT dan LAM-Infokom yang mewajibkan
pelaporan ketercapaian CPL secara terukur merupakan faktor regulasi yang menjadi salah satu alasan utama
mengapa sistem semacam ini dibutuhkan, bukan sekadar keinginan teknis pihak pengembang.
Tabel 2.1. Kategori Analisis Lingkungan Bisnis
Kategori Pertanyaan Panduan Contoh (Kasus OBE-CQI)
Aturan/standar eksternal apa yang Standar BAN-PT/LAM-Infokom
Regulasi dan Kepatuhan mewajibkan organisasi mengelola mewajibkan pelaporan ketercapaian
informasi tertentu? CPL secara terukur.
Praktik program studi lain dalam
Bagaimana organisasi sejenis mengelola
Benchmark/Kompetisi melaporkan hasil CQI kepada asesor
kebutuhan informasi serupa?
akreditasi.
Ketersediaan staf pendukung IT
Sumber daya, budaya, dan infrastruktur
Kapasitas Internal terbatas; budaya pelaporan manual
apa yang tersedia atau menjadi kendala?
yang sudah mengakar.
Tren dan Tekanan Perubahan apa di luar organisasi yang Tren digitalisasi proses akreditasi dan
Eksternal mendorong kebutuhan sistem baru? tuntutan transparansi mutu pendidikan.
Stakeholder dan lingkungan bisnis sesungguhnya bukan dua hal yang terpisah, melainkan dua lapisan
konteks yang mengelilingi aplikasi yang sama. Gambar 2.2 menampilkan kedua lapisan itu sekaligus pada
Universitas Negeri Yogyakarta - Halaman 4

Modul Praktikum MSI - PTF60234
kasus OBE-CQI: aplikasi berada di inti sebagai artefak teknis, dikelilingi oleh lapisan stakeholder yang
berinteraksi langsung dengannya, dan dikelilingi lagi oleh lapisan lingkungan bisnis yang memengaruhi
dari luar meskipun tidak berinteraksi langsung dengan aplikasi sehari-hari.
Gambar 2.2. Relasi Aplikasi, Stakeholder, dan Lingkungan Bisnis pada Kasus OBE-CQI
Perhatikan arah pengaruhnya: lapisan luar (LAM-Infokom, BAN-PT, Kemendikbudristek) tidak pernah
membuka aplikasi OBE-CQI secara langsung, tetapi merekalah yang menentukan mengapa fitur seperti
Dashboard CPMK dan Laporan CQI perlu ada. Sebaliknya, lapisan stakeholder di tengah adalah pihak
yang berinteraksi harian dengan aplikasi, namun kebutuhan mereka sendiri sering kali dibentuk oleh
tekanan dari lapisan terluar. Kegagalan memahami relasi dua arah ini adalah alasan mengapa stakeholder
analysis maupun analisis lingkungan bisnis menjadi penting dalam pengelolaan SI.
Alat dan Bahan
Template Power-Interest Grid, Template Analisis Lingkungan Bisnis, dan hasil Lembar Profil Organisasi
dari Pertemuan 1.
Langkah Kerja
1. Menyusun daftar stakeholder (15 menit). Berdasarkan struktur atau unit kerja pada Lembar Profil
Organisasi, kelompok mendaftar seluruh pihak yang berkaitan dengan organisasi, baik internal seperti
pemilik dan staf, maupun eksternal seperti pelanggan, pemasok, atau regulator.
2. Menilai power dan interest (20 menit). Untuk setiap stakeholder pada daftar, kelompok menilai tingkat
power dan interest menggunakan skala rendah, sedang, dan tinggi, disertai alasan singkat untuk setiap
penilaian.
Universitas Negeri Yogyakarta - Halaman 5

Modul Praktikum MSI - PTF60234
3. Memetakan ke Power-Interest Grid (15 menit). Seluruh stakeholder ditempatkan pada salah satu dari
empat kuadran grid sesuai hasil penilaian pada langkah sebelumnya.
4. Menyusun strategi komunikasi (15 menit). Untuk setiap kuadran, kelompok menuliskan strategi
komunikasi yang sesuai, misalnya frekuensi pelaporan, media komunikasi, atau tingkat keterlibatan
dalam pengambilan keputusan.
5. Menganalisis lingkungan bisnis (15 menit). Mengacu pada Tabel 2.1, kelompok mengisi keempat
kategori lingkungan bisnis berdasarkan kondisi organisasi/kasus yang dipilih, dengan menjawab
pertanyaan panduan pada masing-masing kategori.
6. Diskusi kelas (sisa waktu). Dosen atau asisten memilih dua hingga tiga kelompok untuk memaparkan
hasil pemetaan stakeholder dan analisis lingkungan bisnis, serta mendiskusikan potensi faktor yang
terlewat.
Universitas Negeri Yogyakarta - Halaman 6

Modul Praktikum MSI - PTF60234
Lembar Kerja: Power-Interest Grid
Nama/Peran
|     | Power  | Interest  | Kuadran  | Strategi Komunikasi  |
| --- | ------ | --------- | -------- | -------------------- |
Stakeholder
|     |     |     |     |     |
| --- | --- | --- | --- | --- |
|     |     |     |     |     |
|     |     |     |     |     |

Contoh Kertas Kerja Terisi (Ilustrasi Berbasis Kasus OBE-CQI)
Nama/Peran
|     | Power  | Interest  | Kuadran  | Strategi Komunikasi  |
| --- | ------ | --------- | -------- | -------------------- |
Stakeholder
Pelatihan singkat dan panduan
Dosen Pengampu Mata
|     | Sedang  | Tinggi  | Keep Satisfied  | pengisian yang jelas setiap  |
| --- | ------- | ------- | --------------- | ---------------------------- |
Kuliah
awal semester
Rapat rutin bulanan untuk
Koordinator Program
|     | Tinggi  | Tinggi  | Manage Closely  | membahas kendala data dan  |
| --- | ------- | ------- | --------------- | -------------------------- |
Studi
tindak lanjut CQI
Laporan ringkas per semester
Unit Penjaminan Mutu  Tinggi  Sedang  Keep Satisfied  dan akses langsung ke
dashboard konsolidasi
Informasi umum melalui
Mahasiswa  Rendah  Sedang  Monitor  pengumuman program studi,
tanpa keterlibatan langsung

Lembar Kerja: Analisis Lingkungan Bisnis
Kategori  Temuan pada Organisasi/Kasus Kelompok
| Regulasi dan Kepatuhan      |     |     |     |     |
| --------------------------- | --- | --- | --- | --- |
| Benchmark/Kompetisi         |     |     |     |     |
| Kapasitas Internal          |     |     |     |     |
| Tren dan Tekanan Eksternal  |     |     |     |     |

Contoh Kertas Kerja Terisi (Ilustrasi Berbasis Kasus OBE-CQI)
Kategori  Temuan pada Organisasi/Kasus Kelompok
Standar BAN-PT dan LAM-Infokom mewajibkan program studi melaporkan
Regulasi dan Kepatuhan
ketercapaian CPL secara terukur dan berkelanjutan setiap siklus akreditasi.
Beberapa program studi lain di lingkungan fakultas sudah memakai
Benchmark/Kompetisi  spreadsheet bersama untuk merekap CQI, meski belum terintegrasi penuh
dengan sistem akademik.
Program studi belum memiliki staf IT khusus; sebagian besar dosen masih
Kapasitas Internal
terbiasa mencatat tindak lanjut secara manual di buku catatan pribadi.
Universitas Negeri Yogyakarta - Halaman 7

Modul Praktikum MSI - PTF60234
Kategori  Temuan pada Organisasi/Kasus Kelompok
Meningkatnya tuntutan transparansi mutu pendidikan tinggi dan tren
Tren dan Tekanan Eksternal
digitalisasi proses asesmen akreditasi oleh lembaga akreditasi.

Asesmen
Teknik penilaian pada pertemuan ini mencakup Kehadiran/Keaktifan dan Proyek, dengan kontribusi
terhadap CPMK 1 sebagai bagian dari komponen Team Based Project pada Komponen Penilaian RPS.
| Teknik Penilaian  |     |     | Deskripsi  |     |
| ----------------- | --- | --- | ---------- | --- |
Dinilai dari partisipasi mahasiswa selama diskusi penyusunan daftar
Kehadiran/Keaktifan
stakeholder dan sesi pemaparan hasil di kelas.
Power-Interest Grid beserta strategi komunikasi, dan Analisis Lingkungan
Proyek
Bisnis yang telah diisi lengkap, sebagai artefak kumulatif proyek kelompok.

Rubrik Penilaian Artefak/Lembar Kerja
| Aspek  | Kurang  | Cukup  | Baik  | Sangat Baik  |
| ------ | ------- | ------ | ----- | ------------ |
Lengkap,
Kelengkapan Daftar  Kurang dari 4  4-5 stakeholder,  6 atau lebih,  mencakup
Stakeholder  stakeholder  kurang beragam  cukup beragam  internal dan
eksternal
|     | Penempatan  |             |             | Penempatan tepat  |
| --- | ----------- | ----------- | ----------- | ----------------- |
|     |             | Penempatan  | Penempatan  |                   |
Ketepatan Pemetaan Grid
|                      | kuadran tidak       |                   |                  | dengan argumen     |
| -------------------- | ------------------- | ----------------- | ---------------- | ------------------ |
|                      |                     | beralasan lemah   | beralasan jelas  |                    |
|                      | beralasan           |                   |                  | kuat               |
|                      |                     |                   | Strategi cukup   | Strategi spesifik  |
| Strategi Komunikasi  | Tidak ada strategi  | Strategi generik  |                  |                    |
|                      |                     |                   | spesifik         | dan realistis      |
Seluruh kategori
terisi relevan,
|                       |                    |                    | Sebagian besar   | spesifik, dan  |
| --------------------- | ------------------ | ------------------ | ---------------- | -------------- |
|                       | Kategori tidak     | Sebagian kategori  |                  |                |
| Kelengkapan Analisis  |                    |                    | kategori terisi  | menunjukkan    |
|                       | terisi atau tidak  | terisi dengan      |                  |                |
| Lingkungan Bisnis     |                    |                    | relevan dan      | kaitan jelas   |
|                       | relevan            | relevan            |                  |                |
spesifik
dengan kebutuhan
informasi
organisasi

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
Universitas Negeri Yogyakarta - Halaman 8

Modul Praktikum MSI - PTF60234
| Aspek  | Kurang  | Cukup  | Baik  | Sangat Baik  |
| ------ | ------- | ------ | ----- | ------------ |
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
Peta stakeholder ini menjadi input bagi analisis masalah dan penentuan prioritas solusi pada Pertemuan 3.
|     |     |     |     |     |
| --- | --- | --- | --- | --- |
Universitas Negeri Yogyakarta - Halaman 9

Modul Praktikum MSI - PTF60234
Format Laporan Praktikum Mingguan - Pertemuan 2
Identitas Laporan Isian
Nama Kelompok ______
Anggota (NIM/Nama) ______
Pertemuan ke- 2
Tanggal Pelaksanaan ______
Organisasi/Kasus yang Digunakan ______
2. Tujuan Kegiatan
Mahasiswa mampu mengidentifikasi stakeholder organisasi dan memetakan kepentingan serta pengaruh
masing-masing, serta menganalisis faktor lingkungan bisnis yang membentuk kebutuhan informasi
organisasi, sebagai dasar rencana pengembangan sistem informasi.
3. Uraian Pelaksanaan Kegiatan
(Diisi mahasiswa - jelaskan bagaimana kelompok menyusun daftar stakeholder, perdebatan atau
pertimbangan apa yang muncul saat menilai power dan interest setiap pihak, bagaimana kesepakatan
penempatan kuadran dicapai, serta bagaimana kelompok mengisi keempat kategori analisis lingkungan
bisnis.)
4. Hasil/Artefak Praktikum
(Power-Interest Grid dan Analisis Lingkungan Bisnis terisi lengkap - dilampirkan.)
5. Kendala dan Solusi
(Diisi mahasiswa - contoh: perbedaan pendapat dalam menilai power suatu stakeholder, diselesaikan
dengan diskusi berbasis bukti dari profil organisasi.)
6. Refleksi Pembelajaran
(Diisi mahasiswa - apa yang dipelajari kelompok tentang pentingnya memahami kepentingan stakeholder
yang berbeda-beda sebelum merancang sistem.)
7. Kesimpulan
(Diisi mahasiswa - ringkasan hasil pemetaan stakeholder dan kesiapan melanjutkan ke analisis masalah
pada Pertemuan 3.)
Referensi
Laudon, K. C., & Laudon, J. P. (2014). Management information systems: Managing the digital firm (13th ed.).
Pearson Education.
Universitas Negeri Yogyakarta - Halaman 10

