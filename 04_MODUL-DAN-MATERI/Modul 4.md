---
id: MOD-004
title: "Modul 4"
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
PERTEMUAN 4
Perencanaan Proyek TI: Scope, Tujuan, dan Deliverables
CPMK Tujuan Praktikum
CPMK 2. Membuat rencana proyek, menetapkan Mahasiswa mampu menyusun ruang lingkup, tujuan,
tujuan, menetapkan peran tim, serta merancang strategi dan deliverables proyek sistem informasi berdasarkan
implementasi sistem informasi yang sesuai dengan visi masalah prioritas yang telah ditetapkan pada
dan misi organisasi. pertemuan sebelumnya.
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
Fokus MSI Pertemuan 4: Aspek 1 (Keselarasan Strategis) dan Aspek 3 (Dukungan Pengambilan
Keputusan) menjadi penekanan utama, karena ruang lingkup dan tujuan SMART yang disusun diarahkan
pada kebutuhan informasi dan pengambilan keputusan organisasi, bukan daftar fitur teknis semata.
Konsep Dasar
Materi ruang lingkup, tujuan SMART, dan deliverables pada pertemuan ini merupakan bagian dari Project
Scope Management yang juga diajarkan di mata kuliah Manajemen Proyek Perangkat Lunak. Perbedaannya
Universitas Negeri Yogyakarta - Halaman 2

Modul Praktikum MSI - PTF60234
terletak pada apa yang dibatasi oleh scope tersebut. Pada manajemen proyek generik, scope biasanya berisi
daftar fitur perangkat lunak yang akan dibangun. Pada praktikum Manajemen Sistem Informasi, scope yang
disusun adalah scope kebutuhan informasi, yaitu data apa yang akan dikelola, keputusan organisasi apa
yang akan didukung, dan laporan apa yang akan dihasilkan oleh sistem. Perbedaan penekanan ini penting
karena scope yang hanya berisi daftar fitur teknis berisiko menghasilkan aplikasi yang berfungsi tetapi tidak
benar-benar menjawab kebutuhan informasi organisasi, sebagaimana dibahas pada Pertemuan 1.
Scope Kebutuhan Informasi sebagai Batas Intervensi Sistem Informasi
Dalam Manajemen Sistem Informasi, scope tidak hanya menjawab sistem atau aplikasi apa yang akan
dibuat. Scope terutama menjelaskan bagian dari kebutuhan informasi organisasi yang akan didukung oleh
sistem. Karena itu, penetapan scope dimulai dari masalah organisasi dan kebutuhan penggunanya,
kemudian diterjemahkan menjadi informasi yang diperlukan, proses yang menghasilkan atau menggunakan
informasi tersebut, serta bentuk dukungan sistem informasi yang relevan.
Pendekatan ini mencegah tim memilih teknologi secara langsung sebelum memahami persoalan yang
hendak diselesaikan. Sebuah dashboard, aplikasi, atau basis data bukan tujuan proyek itu sendiri. Teknologi
menjadi bagian dari scope apabila kontribusinya dapat dijelaskan dalam mendukung kebutuhan informasi,
proses organisasi, atau keputusan yang ingin didukung.
Alur penetapan scope kebutuhan informasi
Masalah organisasi ? dampak masalah ? keputusan/proses terganggu ? kebutuhan informasi ? proses
informasi ? bentuk dukungan sistem informasi ? batas scope.
Dimensi Kebutuhan Informasi
Kebutuhan informasi perlu dirumuskan secara operasional agar dapat digunakan untuk menetapkan batas-
batas sistem informasi. Rumusan ôpengguna membutuhkan data CQIö masih terlalu umum. Tim perlu
menjelaskan informasi apa yang dibutuhkan, siapa yang membutuhkan, untuk keputusan atau aktivitas apa,
dari mana informasi diperoleh, kapan informasi dibutuhkan, dan dalam bentuk apa informasi digunakan.
Dimensi Pertanyaan Contoh OBEûCQI
Informasi Informasi apa yang diperlukan? Status tindak lanjut rekomendasi
CQI.
Pengguna Siapa yang menggunakan informasi? Koordinator program studi.
Tujuan penggunaan Untuk keputusan/aktivitas apa? Menentukan rekomendasi yang
perlu segera ditindaklanjuti.
Sumber Dari mana informasi berasal? Dokumen/rekomendasi hasil
CQI dan pembaruan
penanggung jawab.
Waktu Kapan informasi diperlukan? Secara berkala selama semester.
Bentuk Bagaimana informasi disajikan? Daftar status, rekap, dan laporan
monitoring.
Scope Proses Informasi
Sistem informasi berhubungan dengan aliran informasi dalam suatu organisasi. Oleh karena itu, scope perlu
menunjukkan bagian proses informasi yang akan didukung. Tim perlu melihat siapa yang menghasilkan
data, siapa yang memperbaruinya, siapa yang memverifikasinya, siapa yang menggunakannya, dan
bagaimana informasi tersebut menjadi dasar tindakan atau keputusan.
Dalam kasus OBEûCQI, persoalan bukan sekadar tidak adanya tampilan dashboard. Persoalan yang perlu
dianalisis adalah bagaimana rekomendasi dicatat, ditugaskan, statusnya diperbarui, dipantau, dan
Universitas Negeri Yogyakarta - Halaman 3

Modul Praktikum MSI - PTF60234
dilaporkan. Dengan melihat proses tersebut, tim dapat menentukan bagian mana yang benar-benar perlu
didukung oleh sistem informasi dan bagian mana yang tetap menjadi tanggung jawab organisasi.
| Tahap proses informasi  | Pertanyaan MSI                  | Contoh            |
| ----------------------- | ------------------------------- | ----------------- |
| Input                   | Informasi awal apa yang masuk?  | Rekomendasi CQI.  |
Pencatatan  Bagaimana informasi disimpan?  Catatan rekomendasi dan
penanggung jawab.
Pemutakhiran  Siapa dan bagaimana status  Penanggung jawab memperbarui
|     | diperbarui?  | status.  |
| --- | ------------ | -------- |
Monitoring  Siapa memantau dan apa yang  Koordinator melihat
|     | dilihat?  | rekomendasi yang belum  |
| --- | --------- | ----------------------- |
selesai.
Pelaporan  Informasi apa yang perlu diringkas?  Rekap status tindak lanjut per
mata kuliah.
Keputusan/tindakan  Bagaimana informasi digunakan?  Koordinator menentukan tindak
lanjut atau eskalasi.
Batas Sistem Informasi dan Batas Perangkat Lunak
Batas sistem informasi lebih luas daripada batas perangkat lunak. Sistem informasi mencakup keterkaitan
antara manusia, proses, data/informasi, teknologi, dan aturan organisasi. Perangkat lunak hanya merupakan
salah satu komponen teknologi yang dapat digunakan untuk mendukung sistem tersebut. Karena itu, proyek
MSI tidak seharusnya menetapkan scope hanya berdasarkan daftar fitur perangkat lunak.
Sebagai contoh, ômembuat fitur notifikasiö merupakan rumusan teknis. Rumusan MSI yang lebih tepat
adalah  ômenyediakan  mekanisme  pengingat  kepada  penanggung  jawab  ketika  rekomendasi  belum
diperbarui sesuai dengan periode tindak lanjutö. Rumusan kedua menjelaskan kebutuhan informasi dan
proses organisasi yang didukung, sedangkan teknologi notifikasi merupakan cara implementasinya.
| Rumusan  | Orientasi  | Keterangan  |
| -------- | ---------- | ----------- |
Membuat dashboard CQI.  Teknologi/produk  Belum menjelaskan kebutuhan
informasi yang didukung.
| Menampilkan status        | MSI  | Menjelaskan informasi,  |
| ------------------------- | ---- | ----------------------- |
| rekomendasi CQI per mata  |      | pengguna, dan tujuan    |
| kuliah untuk monitoring   |      | penggunaan.             |
koordinator.
Membuat fitur notifikasi.  Teknologi/produk  Belum menjelaskan siapa
menerima, kapan, dan untuk
proses apa.
| Mengingatkan penanggung     | MSI  | Menjelaskan fungsi informasi  |
| --------------------------- | ---- | ----------------------------- |
| jawab terhadap rekomendasi  |      | dalam proses tindak lanjut.   |
yang belum diperbarui.
Menilai Relevansi Scope terhadap Nilai Organisasi
Tidak semua kebutuhan informasi harus dimasukkan ke dalam scope. Kebutuhan perlu dinilai berdasarkan
relevansinya terhadap masalah prioritas serta nilai yang diharapkan organisasi. Informasi yang menarik
tetapi tidak membantu proses atau keputusan utama dapat ditempatkan di luar scope. Prinsip ini membantu
tim menjaga proyek tetap fokus tanpa membuatnya menjadi proyek pengembangan fitur yang terlalu
banyak.
Pertanyaan penilaian relevansi
ò  Apakah informasi tersebut berkaitan langsung dengan masalah prioritas?
ò  Siapa yang membutuhkan informasi tersebut?
ò  Keputusan atau proses apa yang menjadi lebih baik jika informasi tersedia?
Universitas Negeri Yogyakarta - Halaman 4

Modul Praktikum MSI - PTF60234
ò Apakah informasi tersebut benar-benar diperlukan atau hanya menarik untuk ditampilkan?
ò Apa konsekuensinya jika informasi tersebut tidak disediakan?
Tujuan SMART dalam Konteks MSI
SMART tetap digunakan dalam praktikum ini sebagai alat untuk membuat tujuan intervensi sistem
informasi lebih terukur. Fokusnya bukan mengajarkan manajemen proyek, melainkan memastikan bahwa
tujuan sistem informasi mencerminkan perubahan atau dukungan yang dibutuhkan oleh organisasi. Tujuan
sebaiknya mencakup pengguna, informasi/proses yang didukung, ukuran keberhasilan, serta waktu
pencapaian.
Rumusan Penilaian
Membuat dashboard CQI. Berorientasi produk teknologi; belum
menunjukkan kebutuhan organisasi.
Meningkatkan penggunaan dashboard. Belum jelas perubahan, pengguna, ukuran, dan
waktunya.
Menyediakan mekanisme monitoring yang Lebih relevan dengan MSI karena
memungkinkan koordinator mengetahui status menghubungkan informasi, pengguna, fungsi
minimal 80% rekomendasi CQI dalam satu monitoring, ukuran, dan waktu.
semester.
Contoh Penerjemahan Masalah menjadi Scope MSI
Contoh berikut menunjukkan bahwa scope tidak langsung ditetapkan sebagai nama aplikasi. Tim terlebih
dahulu menelusuri kebutuhan organisasi sampai memperoleh batas intervensi sistem informasi.
Tahap Hasil analisis
Masalah organisasi Rekomendasi CQI sering tidak ditindaklanjuti.
Dampak Koordinator kesulitan mengetahui rekomendasi mana yang sudah
atau belum ditindaklanjuti.
Kebutuhan keputusan Koordinator perlu menentukan rekomendasi yang harus
diprioritaskan atau dieskalasi.
Kebutuhan informasi Status rekomendasi, penanggung jawab, tenggat, dan riwayat
tindak lanjut.
Proses informasi Pencatatan ? penugasan ? pembaruan status ? monitoring ?
pelaporan.
Scope MSI Mendukung pencatatan, monitoring, pengingat, dan pelaporan
status tindak lanjut CQI.
Di luar scope Mengubah proses penilaian mahasiswa dan membangun ulang
sistem akademik pusat.
Setelah masalah prioritas ditetapkan, tim proyek perlu menerjemahkannya menjadi rencana kerja yang
batasnya jelas. Ruang lingkup atau scope menetapkan apa yang akan dikerjakan dan, sama pentingnya, apa
yang tidak akan dikerjakan dalam proyek. Laudon dan Laudon (2014) mengingatkan bahwa proyek sistem
informasi yang gagal sering kali bukan karena teknologi yang dipilih salah, melainkan karena ruang lingkup
proyek tidak pernah didefinisikan dengan jelas sejak awal. Tanpa batasan yang jelas, proyek rentan
mengalami scope creep, yaitu bertambahnya cakupan pekerjaan secara bertahap tanpa perencanaan ulang
yang memadai, sehingga waktu dan sumber daya yang terbatas menjadi tidak mencukupi.
Tujuan proyek yang baik dirumuskan menggunakan kriteria SMART, yaitu specific (spesifik), measurable
(terukur), achievable (dapat dicapai), relevant (relevan dengan masalah yang ditangani), dan time-bound
(memiliki batas waktu). Pada kasus OBE-CQI, tujuan yang kurang spesifik, seperti meningkatkan
penggunaan dashboard CQI, sulit diukur keberhasilannya. Tujuan yang lebih SMART misalnya,
menyediakan fitur pengingat dan pelaporan tindak lanjut CQI yang dapat digunakan koordinator program
Universitas Negeri Yogyakarta - Halaman 5

Modul Praktikum MSI - PTF60234
studi untuk memantau status tindak lanjut minimal 80 persen rekomendasi dalam satu semester akademik.
Rumusan seperti ini memberi arah yang jelas sekaligus menjadi tolok ukur keberhasilan proyek.
Kriteria Penjelasan Contoh (Kasus OBE-CQI)
Menyediakan fitur pengingat dan
Tujuan dirumuskan secara jelas dan tidak
Specific pelaporan tindak lanjut CQI, bukan
ambigu, menyebutkan secara konkret apa
(Spesifik) sekadar meningkatkan penggunaan
yang ingin dicapai.
dashboard.
Measurable Memiliki indikator kuantitatif yang jelas Memantau status tindak lanjut minimal
(Terukur) untuk menilai apakah tujuan telah tercapai. 80 persen rekomendasi.
Realistis untuk dikerjakan dengan sumber Fitur pengingat dan pelaporan dapat
Achievable
daya, keterampilan, dan waktu yang dibangun oleh tim kecil dalam satu
(Dapat Dicapai)
tersedia. semester.
Berkaitan langsung dengan masalah
Relevant Menjawab akar masalah tidak adanya
prioritas yang telah ditetapkan pada
(Relevan) mekanisme tindak lanjut CQI.
Pertemuan 3.
Time-bound Memiliki tenggat waktu pencapaian yang Dicapai dalam satu semester akademik
(Berbatas Waktu) jelas, bukan target tanpa batas akhir. berjalan.
Deliverables adalah hasil nyata yang akan diserahkan pada akhir proyek, dan setiap deliverable idealnya
memiliki kriteria penerimaan yang jelas agar tim maupun pengguna memiliki kesepahaman tentang kapan
suatu pekerjaan dianggap selesai. Selain scope, tujuan, dan deliverables, tim proyek juga perlu
mengidentifikasi asumsi, yaitu hal-hal yang dianggap benar tanpa bukti langsung, serta batasan atau
constraints, yaitu faktor yang membatasi ruang gerak proyek seperti waktu, anggaran, atau keterbatasan
akses data. Menuliskan asumsi dan batasan secara eksplisit sejak awal membantu tim menghindari
kesalahpahaman di kemudian hari, terutama ketika proyek dikerjakan berdasarkan organisasi fiktif yang
datanya tidak sepenuhnya dapat diverifikasi.
Gambar 4.1. Alur Penerjemahan Masalah Prioritas menjadi Scope Statement
Gambar 4.1 menggambarkan bagaimana satu pernyataan masalah dari Pertemuan 3 diterjemahkan secara
bertahap menjadi rencana kerja yang konkret. Kotak pertama, Masalah Prioritas, adalah titik awal yang
tidak berubah sepanjang proses; seluruh tahapan berikutnya harus dapat ditelusuri kembali ke masalah ini
agar proyek tidak kehilangan arah. Kotak kedua, Tujuan Proyek (SMART), menerjemahkan masalah
tersebut menjadi target yang terukur dan memiliki batas waktu, sehingga tim memiliki definisi yang jelas
tentang seperti apa keberhasilan proyek nantinya. Kotak ketiga, Ruang Lingkup (In/Out-Scope),
menerjemahkan tujuan itu menjadi batasan kerja yang konkret, memisahkan secara eksplisit apa yang akan
dikerjakan tim dari apa yang sengaja tidak dikerjakan. Kotak keempat, Deliverables Utama, adalah wujud
Universitas Negeri Yogyakarta - Halaman 6

Modul Praktikum MSI - PTF60234
paling konkret dari keseluruhan alur ini, yaitu hasil nyata yang dapat diperiksa dan diserahkan pada akhir
proyek.
Panah yang menghubungkan setiap kotak menunjukkan bahwa alur ini bersifat satu arah namun tetap dapat
ditinjau ulang: apabila pada tahap perumusan deliverables tim menyadari bahwa suatu target tidak realistis
untuk dicapai, tim perlu kembali meninjau rumusan tujuan atau ruang lingkup pada kotak sebelumnya,
bukan langsung mengubah deliverables secara sepihak. Alur inilah yang akan dipraktikkan secara berurutan
pada bagian Langkah Kerja berikut, dengan Langkah Kerja 1 mengisi kotak kedua, Langkah Kerja 2
mengisi kotak ketiga, dan Langkah Kerja 3 mengisi kotak keempat.
Alat dan Bahan
Template Project Scope Statement, dan hasil Dokumen Analisis Masalah dari Pertemuan 3.
Langkah Kerja
1. Merumuskan tujuan proyek (20 menit). Berdasarkan pernyataan masalah prioritas pada
Pertemuan 3, kelompok merumuskan tujuan proyek menggunakan kriteria SMART.
2. Menetapkan ruang lingkup (20 menit). Kelompok menuliskan fungsi atau fitur sistem informasi
yang termasuk dalam ruang lingkup proyek (in-scope) dan yang secara eksplisit tidak termasuk
(out-of-scope), agar batasan pekerjaan jelas sejak awal.
3. Menyusun daftar deliverables (15 menit). Kelompok menetapkan hasil-hasil nyata yang akan
diserahkan pada akhir proyek beserta kriteria penerimaan masing-masing.
4. Mengidentifikasi asumsi dan batasan (10 menit). Kelompok mendaftar asumsi yang diambil
serta batasan yang memengaruhi proyek, misalnya keterbatasan waktu satu semester atau ketiadaan
akses ke data organisasi yang sebenarnya.
Universitas Negeri Yogyakarta - Halaman 7

Modul Praktikum MSI - PTF60234
Lembar Kerja: Project Scope Statement
Bagian Isian
Tujuan Proyek (SMART) ______________________
In-Scope ______________________
Out-of-Scope ______________________
Daftar Deliverables dan Kriteria
______________________
Penerimaan
Asumsi ______________________
Batasan (Constraints) ______________________
Contoh Kertas Kerja Terisi (Ilustrasi Berbasis Kasus OBE-CQI)
Bagian Isian
Menyediakan fitur pengingat dan pelaporan tindak lanjut CQI yang
dapat digunakan koordinator program studi untuk memantau status
Tujuan Proyek (SMART)
tindak lanjut minimal 80 persen rekomendasi dalam satu semester
akademik
Fitur pencatatan status tindak lanjut rekomendasi CQI, notifikasi
In-Scope pengingat berkala kepada dosen dan koordinator, laporan ringkas status
tindak lanjut per mata kuliah
Perubahan pada mekanisme penilaian mahasiswa, integrasi dengan
Out-of-Scope
sistem akademik pusat, pengembangan modul CPL-CPMK baru
Prototipe fitur pelaporan tindak lanjut (dapat mencatat minimal 3 status:
Daftar Deliverables dan Kriteria
belum, sedang, selesai ditindaklanjuti); dokumen alur notifikasi
Penerimaan
pengingat; laporan uji coba prototipe oleh minimal 2 pengguna simulasi
Data ketercapaian CPMK yang digunakan sebagai simulasi dianggap
Asumsi
valid dan representatif
Proyek dikerjakan dalam satu semester dengan sumber daya terbatas
Batasan (Constraints) pada anggota kelompok; tidak ada akses ke data mahasiswa yang
sesungguhnya
Universitas Negeri Yogyakarta - Halaman 8

Modul Praktikum MSI - PTF60234
Asesmen
Teknik penilaian pada pertemuan ini mencakup Kehadiran/Keaktifan dan Proyek, dengan kontribusi
terhadap CPMK 2 sebesar total 12,5% pada Komponen Penilaian RPS, yang terdiri atas 2,5% Kehadiran
dan 10,0% Team Based Project.
| Teknik Penilaian  |     |     | Deskripsi  |     |
| ----------------- | --- | --- | ---------- | --- |
Dinilai dari partisipasi mahasiswa selama proses perumusan tujuan dan
Kehadiran/Keaktifan
diskusi penetapan ruang lingkup.
Project Scope Statement yang telah diisi lengkap, termasuk tujuan SMART,
Proyek
batasan scope, deliverables, asumsi, dan batasan proyek.

Rubrik Penilaian Artefak/Lembar Kerja
| Aspek  | Kurang  | Cukup  | Baik  | Sangat Baik  |
| ------ | ------- | ------ | ----- | ------------ |
Sebagian kriteria
Kejelasan Tujuan  Tidak memenuhi  SMART secara  SMART lengkap
SMART
| (SMART)  | kriteria SMART  |     | umum terpenuhi  | dan terukur jelas  |
| -------- | --------------- | --- | --------------- | ------------------ |
terpenuhi
Batasan jelas dan
|                          | Tidak ada batasan  |                 | Batasan cukup  |                   |
| ------------------------ | ------------------ | --------------- | -------------- | ----------------- |
| Kejelasan Batasan Scope  |                    | Batasan ambigu  |                | konsisten dengan  |
|                          | yang jelas         |                 | jelas          |                   |
tujuan
Deliverables
|     |     | Sebagian  | Deliverables  |     |
| --- | --- | --------- | ------------- | --- |
lengkap dengan
| Kelengkapan Deliverables  | Tidak lengkap  | deliverables  | utama  |     |
| ------------------------- | -------------- | ------------- | ------ | --- |
kriteria
|     |     | teridentifikasi  | teridentifikasi  |     |
| --- | --- | ---------------- | ---------------- | --- |
penerimaan

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
|                             |                 | Kendala           | Kendala dan   |        |
| --------------------------- | --------------- | ----------------- | ------------- | ------ |
| Ketepatan Analisis Kendala  | Kendala tidak   |                   |               | serta  |
|                             |                 | disebutkan tanpa  | solusi cukup  |        |
| dan Solusi                  | diidentifikasi  |                   |               |        |
menunjukkan
|     |     | solusi jelas  | relevan  |     |
| --- | --- | ------------- | -------- | --- |
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

Universitas Negeri Yogyakarta - Halaman 9

Modul Praktikum MSI - PTF60234
Tindak Lanjut
Project Scope Statement ini menjadi dasar penyusunan struktur tim dan pembagian peran pada Pertemuan
5.
Universitas Negeri Yogyakarta - Halaman 10

Modul Praktikum MSI - PTF60234
Format Laporan Praktikum Mingguan: Pertemuan 4
Identitas Laporan Isian
Nama Kelompok ______
Anggota (NIM/Nama) ______
Pertemuan ke- 4
Tanggal Pelaksanaan ______
Organisasi/Kasus yang Digunakan ______
2. Tujuan Kegiatan
Mahasiswa mampu menyusun ruang lingkup, tujuan, dan deliverables proyek sistem informasi berdasarkan
masalah prioritas yang telah ditetapkan pada pertemuan sebelumnya.
3. Uraian Pelaksanaan Kegiatan
(Diisi mahasiswa: jelaskan bagaimana kelompok merumuskan tujuan proyek hingga memenuhi kriteria
SMART, pertimbangan yang digunakan saat menetapkan batas in-scope dan out-of-scope, serta alasan
penetapan setiap deliverable.)
4. Hasil/Artefak Praktikum
(Project Scope Statement terisi lengkap: dilampirkan.)
5. Kendala dan Solusi
(Diisi mahasiswa: contoh: kesulitan membatasi scope agar tidak terlalu luas untuk dikerjakan dalam satu
semester, diselesaikan dengan mengacu kembali pada pernyataan masalah prioritas Pertemuan 3.)
6. Refleksi Pembelajaran
(Diisi mahasiswa: apa yang dipelajari kelompok tentang pentingnya membatasi ruang lingkup proyek sejak
awal, dan risiko yang mungkin muncul bila batasan tidak jelas.)
7. Kesimpulan
(Diisi mahasiswa: ringkasan Project Scope Statement dan kesiapan melanjutkan ke penyusunan struktur
tim pada Pertemuan 5.)
Referensi
Laudon, K. C., & Laudon, J. P. (2014). Management information systems: Managing the digital firm (13th ed.).
Pearson Education.
Universitas Negeri Yogyakarta - Halaman 11

