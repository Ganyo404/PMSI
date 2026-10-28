---
id: MOD-010
title: "Modul 10"
type: module
project: MSI
status: verified
source_type: academic
tags:
  - msi
  - modul
  - materi
  - validasi-mockup
  - traceability
  - skenario-keputusan
  - pemangku-kepentingan
---

> 🔗 **Navigasi Vault:** Kembali ke [[Dashboard]] | Modul Sebelumnya: [[Modul 9]] | Laporan Implementasi: [[Praktikum_10_Kelompok3]]

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

## PERTEMUAN 10: Validasi Mockup bersama Pemangku Kepentingan terhadap Masalah dan Keputusan

### CPMK dan Tujuan Praktikum

| Komponen | Uraian |
| :--- | :--- |
| **CPMK 3** | Menggunakan alat bantu manajemen proyek (seperti Gantt Chart dan RACI Matrix) dan merancang mockup sistem informasi sebagai wujud awal solusi dalam pengelolaan dan pelaksanaan proyek TI. |
| **Tujuan Praktikum** | Mahasiswa mampu menelusuri keterkaitan elemen masalah Pertemuan 3 dengan layar mockup, memvalidasi mockup bersama pemangku kepentingan melalui skenario keputusan dan penilaian elemen masalah, mengklasifikasikan temuan sebagai celah informasi, keputusan, tata kelola, atau adopsi, merevisi mockup, dan menghimpun bukti bagi analisis kecukupan dan estimasi manfaat. |

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

> **Fokus MSI Pertemuan 10:**  
> **Aspek 1 (Keselarasan Strategis)**, **Aspek 3 (Dukungan Pengambilan Keputusan)**, **Aspek 4 (Kebutuhan Informasi Stakeholder)**, dan **Aspek 7 (Adopsi dan Perilaku Organisasi terhadap Sistem Informasi)** menjadi penekanan utama, karena validasi memeriksa apakah mockup menjawab masalah organisasi, mendukung keputusan yang dituju, dan akan dipakai oleh pemangku kepentingan.

---

### Konsep Dasar

Mockup yang baik didasarkan pada masalah, bukan pada gagasan tampilan. Setiap layar pada Pertemuan 8 dan 9 seharusnya dapat ditelusuri ke elemen masalah yang dirumuskan pada Pertemuan 3 dan ke sasaran yang ditetapkan pada Pertemuan 4. Kemampuan menelusuri hubungan antara kebutuhan dan hasil rancangan dikenal sebagai *traceability*, dan menjadi cara memastikan bahwa tidak ada kebutuhan yang terlewat serta tidak ada layar yang dibuat tanpa alasan (Gotel & Finkelstein, 1994). Pertemuan 10 karena itu dimulai dari **Matriks Penelusuran Masalah ke Mockup**, yang disusun kelompok sebelum melibatkan pemangku kepentingan. Elemen masalah yang belum memiliki layar, dan layar yang tidak menjawab elemen masalah mana pun, dapat diketahui dari matriks ini tanpa menunggu penilaian orang lain.

Setelah ditelusuri, mockup divalidasi bersama pemangku kepentingan sebelum sistem dibangun. Praktik perancangan antarmuka mengenal pemeriksaan serupa yang disebut uji kegunaan (*usability test*), yaitu menanyakan apakah layar mudah dipahami dan digunakan (Nielsen & Molich, 1990). Validasi pada praktikum ini menanyakan hal yang berbeda: apakah, dengan informasi pada layar, pemangku kepentingan dapat mengambil keputusan yang dituju, dan apakah mereka menilai bahwa masalah organisasi akan teratasi. Kegunaan hanya diperiksa secara singkat di akhir sesi, karena layar yang sulit dipahami tidak akan dipakai, tetapi kegunaan adalah syarat dan bukan ukuran keberhasilan.

Sebelum sistem dibangun, dampak terhadap organisasi belum dapat diukur. Mockup hanya dapat menghasilkan tiga jenis bukti:
1. Kecukupan informasi bagi keputusan yang dituju,
2. Penilaian pemangku kepentingan terhadap setiap elemen masalah, dan
3. Estimasi manfaat dari mereka.

Ketiganya berupa persepsi dan perkiraan, bukan hasil pengukuran, sehingga dicatat sebagai asumsi yang akan diuji lebih lanjut setelah implementasi. Rettig (1994) menegaskan bahwa pengujian pada tahap prototipe bernilai karena perubahan pada rancangan jauh lebih murah daripada perubahan pada sistem yang sudah dibangun, dan alasan yang sama berlaku untuk perubahan pada pemahaman tentang masalah.

Validasi dijalankan melalui **skenario keputusan**, bukan skenario tugas. Skenario disusun dari kolom keputusan yang diharapkan pada matriks penelusuran, sehingga setiap skenario menguji layar yang memang dirancang untuk elemen masalah tertentu. Skenario tugas meminta peserta mengerjakan langkah pada layar, misalnya menemukan satu rekomendasi. Skenario keputusan meminta peserta memutuskan sesuatu dengan bantuan layar, misalnya memilih rekomendasi mana yang perlu didorong minggu ini, lalu menyebutkan informasi pada layar yang menjadi dasar keputusan tersebut. Keberhasilan dinilai dari ketepatan keputusan dan kejelasan dasarnya. Peserta yang tidak dapat memutuskan menunjukkan bahwa informasi belum tersedia di layar.

Setelah skenario keputusan, peserta diminta menilai setiap elemen masalah dari Pertemuan 3 pada skala 1 sampai 5 seperti pada Tabel 10.1, disertai alasan, hal yang masih kurang, dan perkiraan manfaat yang mereka harapkan. Skor tanpa alasan tidak dipakai, karena alasan peserta inilah yang menunjukkan apakah penilaian itu berdasar pengalaman kerja nyata atau sekadar kesopanan.

#### Tabel 10.1. Skala Penilaian Pemangku Kepentingan terhadap Elemen Masalah

| Skor | Makna | Pertanyaan Penuntun |
| :-: | :--- | :--- |
| **1** | Tidak mengatasi | Apakah mockup sama sekali tidak menyentuh elemen masalah ini? |
| **2** | Mengatasi sedikit | Apakah mockup hanya menampilkan masalah tanpa mengubah keadaan? |
| **3** | Mengatasi sebagian | Apakah sebagian kebutuhan terjawab tetapi ada hal penting yang belum? |
| **4** | Mengatasi sebagian besar | Apakah hanya kekurangan kecil yang tersisa? |
| **5** | Mengatasi sepenuhnya | Apakah peserta akan memakai rancangan ini apa adanya untuk masalah tersebut? |

Temuan dari validasi dikelompokkan menjadi empat jenis utama dan satu catatan kegunaan seperti pada Tabel 10.2, agar jelas bagian mana yang diperbaiki pada mockup dan bagian mana yang dibawa ke analisis kecukupan pada Pertemuan 11. Setiap temuan diberi tingkat keparahan:
- **Rendah:** Mengganggu tetapi tidak menghalangi pengambilan keputusan.
- **Sedang:** Menghambat atau menimbulkan salah tafsir.
- **Tinggi:** Membuat keputusan tidak dapat diambil atau menimbulkan keliru.

#### Tabel 10.2. Jenis Temuan Validasi

| Jenis Temuan | Pertanyaan Pemeriksa | Contoh pada Kasus OBE-CQI |
| :--- | :--- | :--- |
| **Celah Informasi** | Apakah informasi yang dibutuhkan untuk memutuskan belum tampil? | Koordinator ingin melihat CPL terkait tiap rekomendasi, tetapi tidak tampil |
| **Celah Keputusan** | Apakah layar menampilkan data, tetapi tidak cukup untuk memutuskan? | Unit Penjaminan Mutu melihat persentase, tetapi tidak dapat menilai perlunya revisi kebijakan tanpa tren antar semester |
| **Celah Tata Kelola** | Apakah ada kewajiban, kepemilikan, atau aturan yang tidak ditopang layar? | Tidak ada aturan yang mewajibkan dosen mengisi status, sehingga dashboard bisa kosong |
| **Celah Adopsi** | Apakah pengguna enggan atau tidak berkesempatan memakai sistem? | Dosen lebih nyaman mencatat di berkas pribadi karena pengisian dianggap beban tambahan |
| **Catatan Kegunaan (syarat)** | Apakah peserta kesulitan menemukan atau memahami tampilan? | Tombol Kirim Pengingat tidak terlihat pada dashboard |

Celah informasi dan celah keputusan umumnya dapat direvisi langsung pada mockup, sedangkan catatan kegunaan diperbaiki bila memungkinkan. Celah tata kelola dan celah adopsi sering kali tidak dapat diselesaikan melalui layar, sehingga dicatat sebagai tindakan di luar sistem.

---

### Alat dan Bahan

- Tautan mockup interaktif dari Pertemuan 9.
- Pernyataan masalah dan elemen masalah Pertemuan 3.
- Sasaran SMART Pertemuan 4.
- Peta stakeholder Pertemuan 2.
- Lembar kerja Pertemuan 8 dan 9 (terutama daftar layar dan kolom dasar kebutuhan).
- Lembar catatan validasi.

> **Catatan Peserta:**  
> Peserta adalah pemangku kepentingan nyata yang dapat dihubungi oleh kelompok, misalnya dosen atau koordinator program studi. Apabila belum memungkinkan, kelompok memakai teman sebaya yang berperan sebagai pemangku kepentingan, dan laporan **wajib** menyebut bahwa validasi ini bersifat simulasi. Penilaian peserta simulasi tidak diperlakukan sebagai penilaian pemangku kepentingan sebenarnya.

---

### Langkah Kerja

1. **Menyusun Matriks Penelusuran Masalah ke Mockup (20 menit):**  
   Kelompok menuliskan setiap elemen masalah Pertemuan 3 beserta sasaran atau KPI Pertemuan 4, menentukan keputusan yang diharapkan, lalu mencocokkannya dengan layar pada daftar layar Pertemuan 8 dan 9. Elemen masalah yang belum memiliki layar ditandai sebagai *Belum ada*, dan layar yang tidak menjawab elemen masalah apa pun dicatat untuk dipertimbangkan kembali.
2. **Menyusun Skenario Keputusan dan Menyiapkan Peserta (10 menit):**  
   Dari kolom keputusan yang diharapkan pada matriks, kelompok menuliskan satu skenario keputusan untuk setiap peran pada Lembar Kerja Bagian A, menetapkan peserta validasi, pemandu, dan pencatat, serta menyatakan apakah peserta merupakan pemangku kepentingan nyata atau simulasi.
3. **Melaksanakan Telaah bersama Pemangku Kepentingan (25 menit):**  
   Pemandu menjelaskan masalah dan tujuan sistem, lalu peserta mengerjakan skenario keputusan pada mockup sambil menyebutkan dasar pengambilan keputusannya. Peserta kemudian menilai setiap elemen masalah dengan skor dan alasan serta memberikan estimasi manfaat. Pencatat mengisi Lembar Kerja Bagian B, C, dan D, dan menutup sesi dengan satu pertanyaan kegunaan singkat.
4. **Mengklasifikasikan dan Menilai Temuan (10 menit):**  
   Kelompok mengelompokkan setiap temuan sesuai Tabel 10.2, memberi tingkat keparahan Rendah, Sedang, atau Tinggi, dan memperbarui kolom *Ada Layar* pada matriks bila telaah menunjukkan adanya perubahan.
5. **Merevisi Mockup (30 menit):**  
   Kelompok merevisi temuan berkeparahan tinggi dan sedang yang dapat diselesaikan pada layar, mencatat tindakan perubahan, dan menandai temuan yang tidak dapat diselesaikan pada layar sebagai bahan Pertemuan 11.
6. **Merangkum Bukti Pemangku Kepentingan (5 menit):**  
   Kelompok menyimpan tautan versi revisi mockup, mempertahankan versi awal sebagai pembanding, serta memastikan Lembar Kerja Bagian B dan D siap digunakan pada Pertemuan 11 dan 12.

---

### Lembar Kerja: Penelusuran, Skenario Keputusan, Penilaian, Temuan, dan Estimasi Manfaat

#### Matriks Penelusuran Masalah ke Mockup

| Elemen Masalah (Pertemuan 3) | Sasaran atau KPI (Pertemuan 4) | Keputusan yang Diharapkan | Layar (ID) | Ada Layar? | Sumber/Metode |
| :--- | :--- | :--- | :--- | :--- | :--- |
| | | | | | |
| | | | | | |

#### Bagian A: Skenario Keputusan

| ID | Peran Pemangku Kepentingan | Keputusan yang Dituju | Layar (ID) | Keberhasilan Dinilai dari |
| :---: | :--- | :--- | :---: | :--- |
| | | | | |

#### Bagian B: Penilaian Pemangku Kepentingan terhadap Elemen Masalah

| Elemen Masalah | Penilai (Peran) | Skor (1-5) | Alasan Penilai | Yang Masih Kurang | Sumber/Metode |
| :--- | :--- | :---: | :--- | :--- | :--- |
| | | | | | |

#### Bagian C: Catatan Temuan

| ID | Skenario | Temuan | Jenis | Keparahan | Revisi pada Mockup | Sumber/Metode |
| :---: | :---: | :--- | :--- | :---: | :--- | :--- |
| | | | | | | |

#### Bagian D: Estimasi Manfaat dari Pemangku Kepentingan

| Manfaat yang Diharapkan | Estimasi | Pemberi Estimasi | Dasar Estimasi | Keyakinan |
| :--- | :--- | :--- | :--- | :---: |
| | | | | |

---

### Contoh Kertas Kerja Terisi (Ilustrasi Berbasis Kasus OBE-CQI)

#### Matriks Penelusuran Masalah ke Mockup

| Elemen Masalah (Pertemuan 3) | Sasaran atau KPI (Pertemuan 4) | Keputusan yang Diharapkan | Layar (ID) | Ada Layar? | Sumber/Metode |
| :--- | :--- | :--- | :---: | :---: | :--- |
| Rekomendasi CQI tidak sampai ke dosen yang bertanggung jawab | Seluruh rekomendasi diteruskan ke dosen pengampu pada semester berjalan | Dosen menentukan kapan memulai tindak lanjut | L1, L2 | Ada | Daftar layar Pertemuan 8; sasaran SMART Pertemuan 4 |
| Tindak lanjut tidak tercatat dan terdokumentasi | Status tindak lanjut terpantau pada minimal 80 persen rekomendasi | Dosen melaporkan tindakan dan menandai status rekomendasi | L3 | Ada | Daftar layar Pertemuan 8; sasaran SMART Pertemuan 4 |
| Koordinator tidak dapat memantau status tindak lanjut | Status seluruh rekomendasi terlihat oleh koordinator | Koordinator menentukan rekomendasi yang perlu didorong | L4 | Ada | Daftar layar Pertemuan 8; sasaran SMART Pertemuan 4 |
| Tidak ada mekanisme kelembagaan yang memastikan tindak lanjut (akar masalah) | Mekanisme tindak lanjut berjalan dalam satu semester | Unit Penjaminan Mutu menilai perlunya revisi kebijakan mutu | L5 | Ada, tetapi hanya menampilkan capaian | Analisis 5-Why Pertemuan 3; daftar layar Pertemuan 8 |

#### Bagian A: Skenario Keputusan

| ID | Peran Pemangku Kepentingan | Keputusan yang Dituju | Layar (ID) | Keberhasilan Dinilai dari |
| :---: | :--- | :--- | :---: | :--- |
| **K1** | Koordinator Program Studi | Menentukan rekomendasi yang perlu didorong minggu ini | L4 | Menyebut rekomendasi yang tepat (terlambat dan prioritas tinggi) beserta dasar dari layar |
| **K2** | Dosen Pengampu | Menentukan tindak lanjut yang didahulukan dan perlu tidaknya berkoordinasi dengan dosen lain | L2, L3 | Urutan tepat dengan alasan tenggat atau CPL terkait |
| **K3** | Unit Penjaminan Mutu | Menentukan perlunya revisi kebijakan mutu | L5 | Menyebut CPL dengan tindak lanjut rendah dan alasannya |

#### Bagian B: Penilaian Pemangku Kepentingan terhadap Elemen Masalah

| Elemen Masalah | Penilai (Peran) | Skor (1-5) | Alasan Penilai | Yang Masih Kurang | Sumber/Metode |
| :--- | :--- | :---: | :--- | :--- | :--- |
| Rekomendasi CQI tidak sampai ke dosen yang bertanggung jawab | Dosen Pengampu | 4 | Notifikasi jelas dan langsung menyebut mata kuliah saya | Pengingat selain di aplikasi, misalnya surel | Wawancara setelah skenario K2 |
| Tindak lanjut tidak tercatat dan terdokumentasi | Dosen Pengampu | 3 | Form mudah, tetapi tidak ada yang mewajibkan saya mengisi | Kewajiban pengisian | Wawancara setelah skenario K2 |
| Koordinator tidak dapat memantau status tindak lanjut | Koordinator Program Studi | 4 | Dashboard langsung menunjukkan yang terlambat | Kolom CPL yang terkait | Pengamatan skenario K1 dan wawancara |
| Tidak ada mekanisme kelembagaan yang memastikan tindak lanjut (akar masalah) | Unit Penjaminan Mutu | 2 | Sistem hanya mengingatkan, aturan yang mewajibkan belum ada | Klausul tindak lanjut pada SOP | Wawancara setelah skenario K3 |

#### Bagian C: Catatan Temuan

| ID | Skenario | Temuan | Jenis | Keparahan | Revisi pada Mockup | Sumber/Metode |
| :---: | :---: | :--- | :--- | :---: | :--- | :--- |
| **T1** | K1 | Koordinator ingin melihat CPL terkait tiap rekomendasi | Celah Informasi | Tinggi | Kolom CPL ditambahkan pada daftar L4 | Komentar peserta |
| **T2** | K2 | Dosen bertanya apakah wajib mengisi status | Celah Tata Kelola | Tinggi | Tidak ada revisi layar; dicatat sebagai tindakan di luar sistem | Komentar peserta |
| **T3** | K2 | Dosen merasa pengisian bukti menambah beban | Celah Adopsi | Sedang | Bukti dibuat opsional untuk status Sedang | Wawancara singkat setelah skenario |
| **T4** | K3 | Persentase pada L5 tidak cukup untuk menilai perlunya revisi kebijakan | Celah Keputusan | Sedang | Grafik tren antar semester ditambahkan pada L5 | Pengamatan skenario K3 |
| **T5** | K1 | Tombol Kirim Pengingat kurang terlihat | Catatan Kegunaan | Rendah | Tidak direvisi pada putaran ini; dicatat | Pengamatan skenario K1 |

#### Bagian D: Estimasi Manfaat dari Pemangku Kepentingan

| Manfaat yang Diharapkan | Estimasi | Pemberi Estimasi | Dasar Estimasi | Keyakinan |
| :--- | :--- | :--- | :--- | :---: |
| Waktu penyusunan laporan tindak lanjut turun | Dari 3 hari menjadi 0,8 hari per semester | Koordinator Program Studi | Pengalaman menyusun laporan dua semester terakhir | Sedang |
| Waktu koordinasi tindak lanjut turun | Sekitar 2 hari per tahun | Koordinator Program Studi | Perkiraan dari frekuensi rapat koordinasi | Rendah |
| Temuan ketidaksesuaian data saat visitasi berkurang | Penanganan temuan senilai sekitar Rp1.500.000 per tahun terhindarkan | Unit Penjaminan Mutu | Pengalaman menangani temuan pada visitasi sebelumnya | Rendah |

---

### Asesmen

Teknik penilaian pada pertemuan ini mencakup **Kehadiran/Keaktifan** dan **Proyek**, dengan kontribusi terhadap **CPMK 3**.

| Teknik Penilaian | Deskripsi |
| :--- | :--- |
| **Kehadiran/Keaktifan** | Dinilai dari peran aktif mahasiswa sebagai pemandu, pencatat, atau peserta validasi. |
| **Proyek** | Matriks penelusuran, skenario keputusan, penilaian pemangku kepentingan, catatan temuan, estimasi manfaat, dan tautan mockup revisi yang telah diisi lengkap. |

#### Rubrik Penilaian Artefak / Lembar Kerja

| Aspek | Kurang | Cukup | Baik | Sangat Baik |
| :--- | :--- | :--- | :--- | :--- |
| **Kualitas Matriks Penelusuran** | Matriks tidak menghubungkan masalah dengan layar | Sebagian elemen masalah dihubungkan dengan layar | Seluruh elemen masalah dihubungkan dengan layar dan sasaran | Seluruh elemen dihubungkan, elemen tanpa layar dan layar tanpa masalah teridentifikasi, serta sumbernya jelas |
| **Kualitas Skenario dan Pelaksanaan Validasi** | Skenario berupa tugas langkah pada layar dan tidak berasal dari matriks penelusuran | Skenario berupa keputusan, pelaksanaan kurang tertib | Skenario keputusan berasal dari matriks penelusuran, jelas, dan pelaksanaan tertib | Skenario keputusan jelas, pelaksanaan tertib, dan jenis peserta (nyata atau simulasi) dinyatakan terbuka |
| **Kualitas Penilaian terhadap Elemen Masalah** | Skor tanpa alasan | Sebagian skor beralasan | Seluruh elemen masalah dinilai dengan alasan | Seluruh elemen dinilai dengan alasan, hal yang kurang, dan sumber atau metode yang jelas |
| **Ketepatan Klasifikasi dan Revisi Temuan** | Temuan tidak diklasifikasi | Sebagian temuan diklasifikasi dan direvisi | Seluruh temuan diklasifikasi, temuan Tinggi dan Sedang direvisi | Klasifikasi tepat, celah tata kelola dan adopsi dibedakan dari catatan kegunaan, dan temuan yang tidak dapat direvisi dikaitkan dengan Pertemuan 11 |

#### Rubrik Penilaian Laporan Praktikum (Baku - Seluruh Pertemuan)

| Aspek | Kurang | Cukup | Baik | Sangat Baik |
| :--- | :--- | :--- | :--- | :--- |
| **Kelengkapan Struktur Laporan** | Kurang dari 4 dari 7 bagian terisi | 5-6 bagian terisi | 7 bagian terisi lengkap | 7 bagian terisi lengkap dan rapi |
| **Kualitas Uraian Pelaksanaan Kegiatan** | Uraian minim, hanya menyalin langkah kerja | Uraian deskriptif, kurang menjelaskan alasan keputusan | Menjelaskan proses dan alasan keputusan dengan cukup jelas | Menjelaskan proses, alasan, dan pertimbangan keputusan secara rinci |
| **Ketepatan Analisis Kendala dan Solusi** | Kendala tidak diidentifikasi | Kendala disebutkan tanpa solusi jelas | Kendala dan solusi cukup relevan | Kendala dan solusi relevan serta menunjukkan pemecahan masalah aktif |
| **Kedalaman Refleksi Pembelajaran** | Tidak ada refleksi atau sekadar mengulang materi | Refleksi ada namun dangkal | Refleksi mengaitkan pengalaman dengan konsep | Refleksi mendalam, mengaitkan pengalaman, konsep, dan penerapan ke depan |

---

### Tindak Lanjut

Matriks penelusuran, versi revisi mockup, penilaian pemangku kepentingan pada Lembar Kerja Bagian B, dan daftar temuan yang tidak dapat diselesaikan di layar menjadi bukti utama **analisis kecukupan (Pertemuan 11)**. Estimasi manfaat pada Lembar Kerja Bagian D digunakan sebagai asumsi **analisis ROI (Pertemuan 12)**.

---

### Format Laporan Praktikum Mingguan: Pertemuan 10

| Identitas Laporan | Isian |
| :--- | :--- |
| **Nama Kelompok** | Kelompok 3 |
| **Anggota (NIM/Nama)** | Gantar Abimanyu (24050530042)<br>Ganendra Pradipa (24050530038)<br>M Fadlan Dirmansyah (24050530034) |
| **Pertemuan ke-** | 10 |
| **Tanggal Pelaksanaan** | ______ |
| **Organisasi/Kasus yang Digunakan** | Perpustakaan Fakultas Teknik UNY |

1. **Identitas Laporan** (Tabel di atas)
2. **Tujuan Kegiatan:**  
   Mahasiswa mampu menelusuri keterkaitan elemen masalah Pertemuan 3 dengan layar mockup, memvalidasi mockup bersama pemangku kepentingan melalui skenario keputusan dan penilaian elemen masalah, mengklasifikasikan temuan sebagai celah informasi, keputusan, tata kelola, atau adopsi, merevisi mockup, dan menghimpun bukti bagi analisis kecukupan dan estimasi manfaat.
3. **Uraian Pelaksanaan Kegiatan:**  
   (Diisi mahasiswa: hasil penelusuran, pelaksanaan validasi, peserta, dan klasifikasi temuan.)
4. **Hasil/Artefak Praktikum:**  
   (Matriks penelusuran, skenario, penilaian, temuan, estimasi manfaat, dan tautan mockup: dilampirkan.)
5. **Kendala dan Solusi:**  
   (Diisi mahasiswa: contoh: pemangku kepentingan sulit dijadwalkan, diganti simulasi yang dinyatakan.)
6. **Refleksi Pembelajaran:**  
   (Diisi mahasiswa: beda memeriksa kemudahan penggunaan dan kecocokan mockup dengan masalah.)
7. **Kesimpulan:**  
   (Diisi mahasiswa: ringkasan penilaian pemangku kepentingan dan kesiapan analisis kecukupan Pertemuan 11.)

---

### Referensi

- Gotel, O., & Finkelstein, A. (1994). *An analysis of the requirements traceability problem*. Proceedings of the 1st International Conference on Requirements Engineering (pp. 94-101). IEEE Computer Society Press. https://discovery.ucl.ac.uk/id/eprint/749
- Laudon, K. C., & Laudon, J. P. (2014). *Management information systems: Managing the digital firm* (13th ed.). Pearson Education.
- Nielsen, J., & Molich, R. (1990). *Heuristic evaluation of user interfaces*. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '90), 249-256. https://doi.org/10.1145/97243.97281
- Rettig, M. (1994). *Prototyping for tiny fingers*. Communications of the ACM, 37(4), 21-27. https://doi.org/10.1145/175276.175288
