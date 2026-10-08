---
id: MOD-003
title: "Modul 3"
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
PERTEMUAN 3
Analisis Masalah Organisasi dan Prioritas Solusi
CPMK Tujuan Praktikum
CPMK 1. Memahami permasalahan, kebutuhan
Mahasiswa mampu mengidentifikasi akar masalah
pemangku kepentingan, dan sumber daya yang
pengelolaan sistem informasi pada organisasi kasus
dibutuhkan untuk mengelola sistem informasi di
dan menentukan prioritas solusi.
lingkungan organisasi.
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
Fokus MSI Pertemuan 3: Aspek 2 (Tata Kelola dan Kualitas Informasi) menjadi penekanan utama, karena
akar masalah yang ditelusuri adalah persoalan pengelolaan informasi organisasi, bukan penyebab
keterlambatan proyek.
Konsep Dasar
Pada praktikum Manajemen Sistem Informasi, teknik Fishbone diagram, teknik 5-Why, dan matriks
prioritas digunakan untuk menelusuri akar masalah dalam pengelolaan informasi organisasi, bukan untuk
Universitas Negeri Yogyakarta - Halaman 2

Modul Praktikum MSI - PTF60234
menelusuri penyebab keterlambatan proyek atau memilih fitur mana yang akan dikerjakan lebih dulu.
Objek yang dianalisis pun bukan aktivitas proyek, melainkan persoalan nyata tentang bagaimana organisasi
mengelola dan menindaklanjuti informasi.
Salah satu kesalahan yang sering terjadi dalam pengembangan sistem informasi adalah merancang solusi
sebelum masalah benar-benar dipahami. Gejala yang tampak di permukaan sering dianggap sebagai
masalah itu sendiri, padahal gejala hanyalah tanda dari persoalan yang lebih dalam. Laudon dan Laudon
(2014) menekankan bahwa keputusan sistem informasi yang efektif selalu berangkat dari pemahaman yang
akurat terhadap kebutuhan organisasi, bukan dari asumsi cepat tentang penyebab masalah. Pada kasus
OBE-CQI, gejala yang tampak adalah rekomendasi perbaikan yang jarang ditindaklanjuti. Diagnosis cepat
biasanya menyimpulkan bahwa dosen kurang peduli atau antarmuka dashboard kurang menarik.
Kesimpulan semacam ini terasa masuk akal, tetapi belum tentu benar, dan bila langsung dijadikan dasar
solusi, proyek berisiko memperbaiki hal yang salah.
Untuk menelusuri akar masalah secara lebih sistematis, dua teknik yang umum digunakan adalah diagram
tulang ikan atau fishbone diagram (Ishikawa, 1976), dan teknik lima mengapa atau 5-Why, yang berakar
dari Toyota Production System (Ohno, 1988). Diagram tulang ikan membantu tim proyek
mengelompokkan kemungkinan penyebab masalah ke dalam beberapa kategori, misalnya manusia, proses,
sistem, dan kebijakan, sehingga penyebab tidak hanya dilihat dari satu sudut pandang. Teknik 5-Why
bekerja dengan cara berbeda: tim proyek menanyakan mengapa secara berulang terhadap setiap jawaban
yang muncul, hingga sampai pada penyebab yang benar-benar mendasar.
Fishbone Diagram: Pengertian dan Cara Penggunaan
Fishbone diagram, atau diagram sebab-akibat, digunakan untuk mengorganisasi berbagai kemungkinan
penyebab yang berkontribusi terhadap satu masalah. Diagram ini membantu kelompok melihat masalah
secara lebih menyeluruh sebelum menetapkan penyebab tertentu sebagai akar masalah. Dalam praktikum
Manajemen Sistem Informasi, kategori penyebab dapat disesuaikan dengan konteks organisasi dan
pengelolaan sistem informasi. Kategori yang relevan antara lain manusia, proses, sistem/teknologi,
kebijakan, data/informasi, dan lingkungan organisasi.
Penyusunan Fishbone dimulai dengan menuliskan masalah atau efek yang telah dirumuskan secara spesifik
pada bagian kepala diagram. Kelompok kemudian menentukan kategori penyebab yang relevan. Untuk
setiap kategori, tuliskan kemungkinan penyebab berdasarkan hasil wawancara, observasi, dokumen, atau
sumber data lain yang tersedia. Penyebab yang masih berupa dugaan harus dibedakan dari penyebab yang
telah didukung oleh bukti.
Fishbone tidak secara langsung membuktikan bahwa semua penyebab yang ditulis benar. Fungsinya adalah
membantu menghasilkan dan mengelompokkan kemungkinan penyebab secara sistematis. Karena itu,
setiap penyebab yang akan digunakan dalam rumusan masalah harus diperiksa kembali dengan evidence.
Penyebab yang belum memiliki bukti memadai tetap dapat dicatat sebagai dugaan, tetapi tidak boleh
diperlakukan sebagai fakta.
Langkah penyusunan Fishbone
1) Rumuskan efek/masalah secara spesifik dan dapat diamati.
2) Tentukan kategori penyebab yang sesuai dengan konteks organisasi.
3) Identifikasi kemungkinan penyebab pada setiap kategori berdasarkan data yang tersedia.
4) Kelompokkan penyebab yang saling berhubungan dan hindari menuliskan solusi sebagai penyebab.
5) Tandai penyebab yang masih berupa dugaan dan penyebab yang telah didukung evidence.
Universitas Negeri Yogyakarta - Halaman 3

Modul Praktikum MSI - PTF60234
6) Pilih cabang penyebab yang paling relevan untuk ditelusuri lebih dalam menggunakan 5-Why atau
pemeriksaan bukti.
Contoh Fishbone pada Kasus OBEûCQI
Masalah yang dianalisis adalah ôRekomendasi CQI jarang ditindaklanjuti menjadi tindakan nyataö.
Masalah tersebut ditempatkan sebagai efek pada bagian kepala diagram. Kemungkinan penyebab
dikelompokkan ke dalam aspek manusia, proses, sistem, kebijakan, data/informasi, dan lingkungan. Contoh
berikut menunjukkan bahwa satu masalah organisasi dapat memiliki beberapa kemungkinan penyebab.
Diagram ini belum menetapkan satu penyebab sebagai akar masalah; penetapan tersebut memerlukan
penelusuran dan validasi lebih lanjut.
Dari diagram tersebut, misalnya, ôtidak ada kewajiban formalö dapat dipilih untuk ditelusuri lebih lanjut.
Kelompok tidak boleh langsung menyimpulkan bahwa penyebab tersebut merupakan akar masalah.
Pertanyaan berikutnya adalah mengapa kewajiban formal belum ada, mekanisme organisasi apa yang
seharusnya mengatur tindak lanjut, dan bukti apa yang dapat menunjukkan keberadaan atau ketiadaan
mekanisme tersebut.
Pada kasus rekomendasi CQI yang tidak ditindaklanjuti, pertanyaan pertama mengapa rekomendasi tidak
ditindaklanjuti mungkin dijawab karena dosen tidak membuka dashboard lagi setelah nilai selesai diinput.
Pertanyaan berikutnya, mengapa dosen tidak membuka dashboard lagi, bisa jadi dijawab karena tidak ada
kewajiban atau pengingat untuk melakukannya. Bila ditelusuri lebih jauh, akar masalahnya mungkin bukan
pada sikap dosen, melainkan pada tidak adanya mekanisme kelembagaan yang mewajibkan tindak lanjut
atas rekomendasi sistem. Proses bertanya berulang inilah yang membedakan diagnosis dangkal dari
diagnosis yang benar-benar sampai ke akar persoalan.
Teknik 5-Why: Pengertian dan Cara Penggunaan
Teknik 5-Why digunakan untuk menelusuri hubungan sebab-akibat dengan mengajukan pertanyaan
ômengapa?ö terhadap jawaban sebelumnya secara berulang. Tujuannya bukan menghasilkan tepat lima
pertanyaan, melainkan membawa analisis dari gejala menuju penyebab yang lebih mendasar. Lima
merupakan jumlah yang lazim digunakan sebagai titik awal, tetapi penelusuran dapat berhenti lebih cepat
Universitas Negeri Yogyakarta - Halaman 4

Modul Praktikum MSI - PTF60234
atau berlanjut lebih jauh apabila hubungan sebab-akibat dan evidence menunjukkan bahwa hal tersebut
diperlukan.
Setiap jawaban Why harus diperlakukan sebagai pernyataan yang perlu diperiksa. Jawaban seperti ôkarena
pengguna malasö, ôkarena sistem jelekö, atau ôkarena komunikasi burukö belum cukup sebagai akar
masalah apabila tidak dijelaskan mekanismenya dan tidak didukung bukti. Pertanyaan berikutnya harus
diarahkan pada kondisi yang menyebabkan jawaban sebelumnya muncul.
Langkah penggunaan 5-Why
1) Tuliskan masalah/gejala yang benar-benar diamati.
2) Ajukan pertanyaan ôMengapa masalah ini terjadi?ö
3) Tuliskan jawaban yang spesifik dan dapat diperiksa.
4) Ajukan ôMengapa?ö terhadap jawaban tersebut, bukan kembali ke masalah awal.
5) Ulangi hingga ditemukan penyebab yang mendasar dan masih relevan untuk ditangani.
6) Validasi setiap hubungan sebab-akibat dengan bukti yang tersedia.
7) Rumuskan akar masalah sebagai kondisi penyebab, bukan sebagai fitur atau solusi.
Contoh lengkap 5-Why pada Kasus OBEûCQI
Tahap Pertanyaan Jawaban
Masalah Apa yang terjadi? Rekomendasi CQI jarang ditindaklanjuti menjadi tindakan
nyata.
Why 1 Mengapa rekomendasi tidak Karena dosen jarang membuka dashboard setelah input
ditindaklanjuti? nilai selesai.
Why 2 Mengapa dashboard jarang dibuka Karena tidak ada kewajiban atau pengingat formal untuk
kembali? melakukan tindak lanjut.
Why 3 Mengapa tidak ada kewajiban atau Karena belum ada mekanisme kelembagaan yang
pengingat formal? mewajibkan dan mencatat tindak lanjut CQI.
Akar masalah Apa penyebab mendasarnya? Tidak adanya mekanisme kelembagaan untuk memastikan
rekomendasi CQI ditindaklanjuti dan terdokumentasi.
Pada contoh tersebut, penelusuran tidak berhenti pada perilaku ôdosen jarang membuka dashboardö. Jika
berhenti pada jawaban tersebut, solusi yang muncul mungkin hanya berupa pengingat pada aplikasi.
Penelusuran lebih lanjut menunjukkan persoalan yang lebih mendasar, yaitu belum adanya mekanisme
kelembagaan yang memastikan tindak lanjut dan dokumentasinya. Kesimpulan tersebut tetap harus
dikonfirmasi dengan evidence, sebagaimana dicontohkan dalam kertas kerja praktikum.
Fishbone dan 5-Why: Kapan Digunakan?
Teknik Fungsi utama Hasil yang diharapkan
Fishbone Mengelompokkan berbagai kemungkinan Peta kemungkinan penyebab dan cabang
penyebab dari beberapa sudut pandang. yang perlu ditelusuri.
5-Why Memperdalam satu rangkaian sebab-akibat secara Rangkaian sebab-akibat menuju penyebab
bertahap. yang lebih mendasar.
Kombinasi Fishbone membuka ruang kemungkinan, 5-Why Analisis akar masalah yang lebih sistematis
memperdalam cabang yang paling relevan. dan dapat divalidasi.
Kedua teknik ini dapat digunakan secara berurutan. Kelompok dapat membuat Fishbone terlebih dahulu
untuk memastikan kemungkinan penyebab tidak dilihat dari satu sudut pandang saja, kemudian memilih
cabang penting untuk ditelusuri dengan 5-Why. Jika masalah sudah sangat spesifik dan hubungan sebab-
akibatnya relatif jelas, 5-Why dapat digunakan secara langsung.
Catatan penting dalam analisis akar masalah
ò Jangan menyamakan gejala dengan akar masalah.
Universitas Negeri Yogyakarta - Halaman 5

Modul Praktikum MSI - PTF60234
ò Jangan menuliskan solusi sebagai penyebab.
ò Jangan menggunakan penilaian pribadi tanpa evidence sebagai fakta.
ò Satu masalah dapat memiliki lebih dari satu jalur penyebab; jangan memaksakan satu jalur jika
evidence menunjukkan penyebab yang berbeda.
ò Akar masalah harus dirumuskan dalam bentuk kondisi penyebab, bukan dalam bentuk fitur atau
solusi yang akan dibangun.
Setelah akar masalah teridentifikasi, tim proyek biasanya menghadapi lebih dari satu masalah potensial
yang layak ditangani. Karena keterbatasan waktu dan sumber daya, tidak semua masalah dapat diselesaikan
sekaligus dalam satu proyek. Matriks prioritas berdasarkan dampak (impact) dan upaya penyelesaian
(effort) membantu tim memilih masalah yang memberikan manfaat besar dengan upaya yang realistis untuk
dikerjakan dalam satu semester. Masalah dengan dampak tinggi namun upaya penyelesaian rendah menjadi
prioritas utama, sementara masalah dengan dampak rendah dan upaya tinggi sebaiknya ditunda atau tidak
dijadikan fokus proyek.
Gambar 3.1. Matriks Prioritas Masalah (Dampak vs Upaya)
Alat dan Bahan
Template Fishbone Diagram atau 5-Why, Matriks Prioritas Masalah, dan hasil Peta Stakeholder dari
Pertemuan 2.
Langkah Kerja
1. Identifikasi masalah utama (15 menit). Berdasarkan kondisi sistem informasi pada Lembar Profil
Organisasi dan hasil pemetaan stakeholder, kelompok mendaftar minimal tiga masalah utama terkait
pengelolaan informasi pada organisasi kasus.
2. Analisis akar masalah (25 menit). Kelompok memilih satu masalah yang dianggap paling signifikan,
kemudian menelusuri akar masalahnya menggunakan fishbone diagram atau teknik 5-Why hingga
diperoleh penyebab yang mendasar, bukan sekadar gejala.
Universitas Negeri Yogyakarta - Halaman 6

Modul Praktikum MSI - PTF60234
3. Penilaian prioritas (15 menit). Seluruh masalah pada daftar dinilai menggunakan Matriks Prioritas
berdasarkan dampak terhadap organisasi dan upaya yang diperlukan untuk menyelesaikannya.
4. Penetapan masalah prioritas (10 menit). Kelompok menetapkan satu masalah dengan prioritas
tertinggi sebagai fokus pengembangan sistem informasi yang akan dijalankan sepanjang semester,
dituliskan dalam bentuk pernyataan masalah yang ringkas dan jelas.

Lembar Kerja: Dokumen Analisis Masalah
Setiap bagian pada kolom "Isian" wajib disertai penjelasan pada kolom "Sumber/Metode Perolehan
Data", dengan minimal 2 sumber yang berbeda (misalnya wawancara, observasi langsung, atau
dokumen resmi organisasi). Jawaban tanpa sumber yang jelas, atau yang hanya berupa asumsi
kelompok, tidak akan dinilai.
| Bagian  | Isian  | Sumber/Metode Perolehan Data  |
| ------- | ------ | ----------------------------- |
(minimal 2 sumber berbeda)
| Daftar Masalah            | 1. ___  | ___  |
| ------------------------- | ------- | ---- |
| Teridentifikasi (min. 3)  | 2. ___  |      |
3. ___
| Masalah Terpilih untuk  | ______________________  | ___  |
| ----------------------- | ----------------------- | ---- |
Analisis Akar
| Hasil Analisis Akar  | ______________________  | ___  |
| -------------------- | ----------------------- | ---- |
Masalah (Fishbone/5-Why)
| Matriks Prioritas (Dampak  | ______________________  | ___  |
| -------------------------- | ----------------------- | ---- |
vs Upaya)
| Pernyataan Masalah  | ______________________  | ___  |
| ------------------- | ----------------------- | ---- |
Prioritas Akhir

Contoh Kertas Kerja Terisi (Ilustrasi Berbasis Kasus OBE-CQI)
| Bagian  | Isian  | Sumber/Metode Perolehan Data  |
| ------- | ------ | ----------------------------- |
Daftar Masalah  1.  Rekomendasi CQI jarang  4. Wawancara dengan Koordinator
Teridentifikasi
|     | ditindaklanjuti menjadi tindakan    | Program Studi, 10 September 2026,  |
| --- | ----------------------------------- | ---------------------------------- |
|     | nyata                               | mengenai tindak lanjut rapat       |
|     | 2.  Data asesmen antar-dosen tidak  | evaluasi semester lalu             |
konsisten formatnya
5. Observasi langsung terhadap tiga
|     | 3. Laporan ketercapaian CPL sulit  | berkas rekap nilai dari dosen  |
| --- | ---------------------------------- | ------------------------------ |
|     | dibandingkan antarsemester         | berbeda, menunjukkan format    |
kolom yang tidak seragam
6. Dokumen laporan akreditasi
program studi tahun 2023 dan
2025, dibandingkan formatnya oleh
kelompok
Masalah Terpilih untuk  Rekomendasi CQI jarang  Disepakati kelompok berdasarkan
Analisis Akar  ditindaklanjuti menjadi tindakan nyata  wawancara Koordinator Program Studi
yang menyatakan masalah ini paling
sering muncul di rapat evaluasi,
dikonfirmasi dengan menelusuri
notulen rapat evaluasi dua semester
terakhir
Hasil Analisis Akar  Mengapa rekomendasi tidak  Jawaban why pertama dan kedua
Masalah (5-Why)  ditindaklanjuti? Karena dosen jarang  diperoleh dari wawancara singkat
|     | membuka dashboard setelah input nilai  | terhadap dua dosen pengampu mata    |
| --- | -------------------------------------- | ----------------------------------- |
|     | selesai. Mengapa jarang dibuka?        | kuliah berbeda; jawaban why ketiga  |
|     | Karena tidak ada kewajiban atau        | dikonfirmasi dengan memeriksa       |
|     | pengingat formal. Mengapa tidak ada    | dokumen SOP penjaminan mutu         |
|     | kewajiban formal? Karena belum ada     | program studi yang tidak            |
mekanisme kelembagaan yang
Universitas Negeri Yogyakarta - Halaman 7

Modul Praktikum MSI - PTF60234
mewajibkan pelaporan tindak lanjut mencantumkan klausul tindak lanjut
CQI. Akar masalah: tidak adanya CQI
mekanisme kelembagaan untuk
memastikan rekomendasi CQI
ditindaklanjuti.
Matriks Prioritas Dampak tinggi (memengaruhi mutu Penilaian dampak dikonfirmasi dari
pembelajaran berkelanjutan), upaya wawancara Koordinator Program
sedang (memerlukan fitur pengingat Studi; penilaian upaya diperkirakan
dan pelaporan tindak lanjut, bukan kelompok berdasarkan diskusi dengan
pembangunan sistem baru) staf IT program studi mengenai
kompleksitas menambah fitur
pengingat pada sistem existing
Pernyataan Masalah Program studi belum memiliki Sintesis kelompok dari seluruh sumber
Prioritas Akhir mekanisme yang memastikan di atas, divalidasi kembali secara
rekomendasi hasil evaluasi CQI benar- singkat kepada Koordinator Program
benar ditindaklanjuti dan Studi untuk memastikan rumusan
terdokumentasi. masalah sesuai dengan yang dialami
Universitas Negeri Yogyakarta - Halaman 8

Modul Praktikum MSI - PTF60234
Asesmen
Teknik penilaian pada pertemuan ini mencakup Kehadiran/Keaktifan dan Proyek, dengan kontribusi
terhadap CPMK 1 sebagai bagian dari komponen Team Based Project pada Komponen Penilaian RPS.
| Teknik Penilaian  |     |     | Deskripsi  |     |
| ----------------- | --- | --- | ---------- | --- |
Dinilai dari partisipasi mahasiswa selama proses identifikasi masalah dan
Kehadiran/Keaktifan
diskusi analisis akar masalah.
Dokumen Analisis Masalah yang telah diisi lengkap, termasuk hasil analisis
Proyek
akar masalah dan pernyataan masalah prioritas akhir.

Rubrik Penilaian Artefak/Lembar Kerja
| Aspek                       | Kurang           | Cukup              | Baik                | Sangat Baik          |
| --------------------------- | ---------------- | ------------------ | ------------------- | -------------------- |
|                             | Masalah tidak    |                    |                     | Relevan dan          |
| Ketepatan Identifikasi      |                  | Sebagian masalah   | Relevan dan         |                      |
|                             | relevan atau     |                    |                     | berbasis evidence    |
| Masalah                     |                  | relevan            | berbasis observasi  |                      |
|                             | hanya gejala     |                    |                     | kuat                 |
|                             |                  | Analisis dangkal,  |                     | Analisis             |
| Kedalaman Analisis Akar     | Tidak dilakukan  |                    | Analisis cukup      |                      |
|                             |                  | berhenti pada      |                     | mendalam hingga      |
| Masalah                     | analisis akar    |                    | mendalam            |                      |
|                             |                  | gejala             |                     | akar masalah         |
|                             | Prioritas tidak  | Prioritas          |                     | Prioritas logis dan  |
| Ketepatan Prioritas Solusi  |                  |                    | Prioritas logis     |                      |
|                             | beralasan        | beralasan lemah    |                     | strategis            |
Kualitas dan Keragaman  Tidak ada sumber  Sumber  Minimal 2 sumber  Minimal 2 sumber
| Sumber Data  |                    |                     | berbeda, cukup jelas berbeda yang saling  |             |
| ------------ | ------------------ | ------------------- | ----------------------------------------- | ----------- |
|              | dicantumkan, atau  | dicantumkan tapi    |                                           |             |
|              | hanya asumsi       | kurang dari 2 atau  |                                           | menguatkan  |
|              |                    | tidak jelas         |                                           | (misalnya   |
wawancara
dikonfirmasi
dokumen)

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
Universitas Negeri Yogyakarta - Halaman 9

Modul Praktikum MSI - PTF60234
| Aspek  | Kurang  | Cukup  | Baik  | Sangat Baik  |
| ------ | ------- | ------ | ----- | ------------ |
Refleksi
mendalam,
Refleksi
| Tidak ada refleksi  |     |                |             | mengaitkan   |
| ------------------- | --- | -------------- | ----------- | ------------ |
| Kedalaman Refleksi  |     | Refleksi ada   | mengaitkan  |              |
| atau sekadar        |     |                |             | pengalaman,  |
| Pembelajaran        |     | namun dangkal  |             |              |
pengalaman
| mengulang materi  |     |     |     | konsep, dan  |
| ----------------- | --- | --- | --- | ------------ |
dengan konsep
penerapan ke
depan

Tindak Lanjut
Pernyataan masalah prioritas ini menjadi dasar penyusunan ruang lingkup proyek pada Pertemuan 4.
|     |     |     |     |     |
| --- | --- | --- | --- | --- |
Universitas Negeri Yogyakarta - Halaman 10

Modul Praktikum MSI - PTF60234
Format Laporan Praktikum Mingguan: Pertemuan 3
Identitas Laporan Isian
Nama Kelompok ______
Anggota (NIM/Nama) ______
Pertemuan ke- 3
Tanggal Pelaksanaan ______
Organisasi/Kasus yang Digunakan ______
2. Tujuan Kegiatan
Mahasiswa mampu mengidentifikasi akar masalah pengelolaan sistem informasi pada organisasi kasus dan
menentukan prioritas solusi.
3. Uraian Pelaksanaan Kegiatan
(Diisi mahasiswa: jelaskan proses identifikasi tiga masalah utama, bagaimana kelompok menelusuri akar
masalah menggunakan fishbone atau 5-Why hingga sampai pada penyebab mendasar, serta pertimbangan
yang digunakan saat menilai matriks prioritas.)
4. Hasil/Artefak Praktikum
(Dokumen Analisis Masalah terisi lengkap: dilampirkan.)
5. Kendala dan Solusi
(Diisi mahasiswa: contoh: kesulitan membedakan gejala dan akar masalah pada tahap awal, diselesaikan
dengan mengulang teknik 5-Why hingga jawaban tidak lagi bisa ditelusuri lebih dalam.)
6. Refleksi Pembelajaran
(Diisi mahasiswa: apa yang dipelajari kelompok tentang perbedaan gejala dan akar masalah, dan
bagaimana hal ini mengubah pemahaman kelompok terhadap masalah organisasi yang dipilih.)
7. Kesimpulan
(Diisi mahasiswa: ringkasan pernyataan masalah prioritas dan kesiapan melanjutkan ke penyusunan scope
proyek pada Pertemuan 4.)
Referensi
Laudon, K. C., & Laudon, J. P. (2014). Management information systems: Managing the digital firm (13th ed.).
Pearson Education.
Ishikawa, K. (1976). Guide to quality control. Asian Productivity Organization.
Ohno, T. (1988). Toyota production system: Beyond large-scale production. Productivity Press.
Universitas Negeri Yogyakarta - Halaman 11

