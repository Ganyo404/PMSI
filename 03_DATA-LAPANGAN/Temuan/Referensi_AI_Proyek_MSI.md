**REFERENSI AI — PROYEK MSI**

*Konteks, keputusan, batasan, dan arahan kerja untuk percakapan AI berikutnya*

Kasus: Perpustakaan Fakultas Teknik, Universitas Negeri Yogyakarta (FT UNY)

# **Tujuan Dokumen**

Dokumen ini menjadi referensi konteks bagi AI agar pekerjaan proyek MSI berlanjut secara konsisten. Ini adalah ringkasan terstruktur, bukan transkrip lengkap seluruh percakapan. Untuk detail spesifik seperti isi tabel, angka, pembagian tugas, atau isi halaman laporan, AI harus memeriksa file sumber dan tidak mengarang informasi yang tidak tersedia.

# **1\. Instruksi untuk AI**

1. Jawab dalam bahasa Indonesia dengan penjelasan konkret, runtut, dan siap dipakai dalam laporan mahasiswa.  
2. Jaga kesinambungan Modul 3, Modul 4, Modul 5, Modul 6, dan Modul 7\.  
3. Utamakan hasil wawancara dan file proyek yang diberikan pengguna. Bedakan fakta sumber, keputusan kelompok, rekomendasi AI, dan asumsi.  
4. Jangan mengarang isi dokumen, hasil wawancara, angka target, pembagian tugas, atau RACI yang tidak didukung sumber.  
5. Jika file asli tidak tersedia atau tabel tidak terbaca, jelaskan batasannya dan minta file/halaman yang relevan.  
6. Pertahankan bagian laporan yang sudah konsisten; revisi hanya bagian yang memang perlu.  
7. Jika diminta teks final, tulis utuh dan siap ditempel, serta tandai bagian yang masih perlu diverifikasi.  
8. Jangan mengklaim integrasi API, akses database pusat SLiMS, atau modifikasi source code tanpa bukti dan kewenangan.

# **2\. Identitas dan Ruang Lingkup Proyek**

* Kasus: pemutakhiran status dan kondisi koleksi di Perpustakaan Fakultas Teknik UNY.  
* Kelompok: Kelompok 3\.  
* Anggota yang tercatat dalam konteks: Gantar Abimanyu, Ganendra Pradipa, dan M. Fadlan Dirmansyah.  
* SLiMS adalah sistem utama pengelolaan informasi koleksi.  
* Kendala: waktu satu semester, keterbatasan anggaran dan kewenangan atas sistem pusat, serta tidak ada penambahan staf permanen.

# **3\. Temuan Wawancara yang Menjadi Dasar**

## **3.1 Alur kerja saat ini**

Informasi masalah koleksi dapat diterima secara lisan di meja layanan, melalui WhatsApp, atau ditemukan pustakawan saat penataan rak, kegiatan sirkulasi/pengembalian, dan stock opname. Pustakawan memeriksa kondisi fisik, mencocokkan barcode atau nomor panggil dengan data SLiMS, menentukan tindakan, lalu memperbarui status/lokasi/data sesuai kebutuhan dan kewenangan. Proses dianggap selesai ketika kondisi fisik dan data sistem sesuai.

## **3.2 Temuan penting**

* Belum ada SOP tertulis atau jadwal khusus untuk pemutakhiran status dan kondisi koleksi secara rutin.  
* Pengelola utama membagi waktu antara pelayanan dan pengelolaan informasi; pekerjaan pemutakhiran dapat tertunda.  
* Catatan awal dapat tersebar di kertas, buku, WhatsApp, atau spreadsheet sederhana.  
* Laporan harus diverifikasi; laporan pemustaka tidak otomatis dianggap benar dan tidak langsung mengubah data SLiMS.  
* Belum ada penanda penyelesaian dan jejak tindak lanjut yang seragam.  
* Sebagian tindakan memerlukan pihak berwenang lain, seperti penghapusan permanen/weeding, konfigurasi sistem, hak akses, server/backup, dan pengadaan/penggantian.

## **3.3 Usulan operasional dari wawancara**

Wawancara mengusulkan opsi jadwal pemutakhiran mingguan sekitar 30–60 menit per sesi, pemeriksaan awal laporan maksimal 3 hari kerja, dan pembaruan SLiMS maksimal 7 hari kerja setelah verifikasi, dengan pengecualian untuk kasus yang berdampak pada pelayanan. Angka ini adalah usulan dari wawancara, bukan bukti bahwa jadwal tersebut sudah diterapkan.

# **4\. Rumusan Masalah dan Akar Masalah**

Rumusan masalah yang digunakan dalam diskusi:

**“Pembaruan data perpustakaan sering terlambat sehingga informasi yang tersedia tidak selalu sesuai dengan kondisi terbaru.”**

Pembedaan penting: keterlambatan pembaruan adalah gejala yang terlihat; akar masalah yang lebih mendasar adalah belum adanya SOP tertulis dan jadwal pemutakhiran yang terstruktur dan rutin.

## **4.1 Rantai 5 Why yang dibahas**

9. Pembaruan tidak selalu dilakukan segera setelah perubahan ditemukan.  
10. Pustakawan membagi waktu antara pelayanan dan pengelolaan data.  
11. Belum ada waktu khusus yang konsisten untuk pemutakhiran.  
12. Belum ada mekanisme dan jadwal rutin yang jelas.  
13. Belum ada SOP/tata kelola tertulis untuk pemutakhiran berkala.

# **5\. Arah Solusi dan Batasan Proyek**

Solusi inti adalah mekanisme tata kelola pemutakhiran informasi koleksi. SOP dan jadwal adalah bagian inti; media digital menjadi pendukung untuk pelaporan, monitoring, dan rekapitulasi.

## **5.1 Ruang lingkup yang sesuai**

* Menyusun draf SOP pemutakhiran status dan kondisi koleksi.  
* Merancang jadwal pemutakhiran rutin yang realistis.  
* Merancang alur pelaporan dan verifikasi koleksi.  
* Merancang media pelaporan digital sederhana berbasis QR Code.  
* Merancang monitoring status laporan dan rekapitulasi.  
* Jika sesuai kebutuhan, menyiapkan template rekap/ekstraksi data sirkulasi SLiMS.

## **5.2 Batasan yang harus dijaga**

* Jangan menggambarkan prototype sebagai pengganti seluruh sistem otomasi perpustakaan.  
* Jangan mengklaim akses API atau integrasi langsung ke database SLiMS tanpa bukti.  
* Jangan menjanjikan modifikasi source code/database pusat SLiMS.  
* Jangan mengasumsikan ada staf tambahan atau anggaran baru.  
* Keputusan penghapusan, pengadaan, penggantian, atau konfigurasi yang memerlukan otoritas lain tetap berada pada pihak berwenang.

# **6\. Konsistensi Antar-Modul**

| Modul | Peran dalam proyek | Hal yang harus konsisten |
| :---- | :---- | :---- |
| **Modul 3** | Identifikasi masalah dan akar penyebab | Masalah: pembaruan terlambat; akar: belum ada SOP/jadwal rutin. |
| **Modul 4** | Solusi, SMART, scope, deliverable, batasan | SOP/jadwal inti; media pelaporan, monitoring, rekap sebagai pendukung. |
| **Modul 5** | Grand Design, aktivitas, pembagian peran, RACI, kolaborasi | Alur informasi dan aktivitas diturunkan dari deliverable Modul 4\. |
| **Modul 6** | Implementasi/pengelolaan aktivitas sesuai instruksi modul | Jadwal, peran, monitoring, evaluasi konsisten dengan scope. |
| **Modul 7** | Prototype/mockup yang menerjemahkan alur kerja | Prototype mendukung SOP; SLiMS tetap sistem utama. |

# **7\. Grand Design yang Pernah Disepakati**

**Pemustaka → Media Pelaporan/QR Code → Pustakawan → Verifikasi → SLiMS → Rekapitulasi → Pemanfaatan Informasi**

Grand Design menggambarkan siapa menghasilkan informasi, siapa menerima dan memverifikasi, media apa yang membantu aliran informasi, serta bagaimana informasi digunakan. Ini bukan sekadar desain UI atau database.

# **8\. Aktivitas Proyek sebagai Dasar RACI**

| No. | Aktivitas | Output |
| :---- | :---- | :---- |
| **1** | Analisis kebutuhan informasi | Daftar kebutuhan pengguna/informasi |
| **2** | Penyusunan SOP pemutakhiran | Draf SOP |
| **3** | Penyusunan jadwal pemutakhiran | Jadwal rutin |
| **4** | Perancangan alur pelaporan dan verifikasi | Diagram alur |
| **5** | Perancangan media pelaporan QR | Prototype pelaporan |
| **6** | Perancangan monitoring | Daftar status/tampilan monitoring |
| **7** | Perancangan rekapitulasi | Format rekap |
| **8** | Pengujian skenario | Catatan hasil uji |
| **9** | Evaluasi dan perbaikan | Rancangan hasil perbaikan |
| **10** | Dokumentasi | Laporan proyek |

# **9\. RACI dan Metode Kolaborasi**

RACI: R \= Responsible (pelaksana), A \= Accountable (penanggung jawab akhir), C \= Consulted (pemberi masukan), I \= Informed (pihak yang perlu diberi informasi). Pembagian RACI per nama anggota belum terverifikasi dalam referensi ini; jangan mengarangnya. Setiap aktivitas sebaiknya memiliki minimal satu R dan satu A. Hindari memberi semua huruf kepada semua anggota pada semua baris tanpa alasan.

Scrum pernah dibahas sebagai metode kolaborasi melalui perencanaan, pembagian tugas, pengerjaan, review, evaluasi, dan perbaikan. Tulis praktik Scrum hanya sejauh benar-benar dilakukan oleh kelompok.

# **10\. Prototype Modul 7**

Nama yang pernah disarankan: SIMPEL-KOLEKSI FT — Sistem Pelaporan dan Monitoring Kondisi Koleksi Perpustakaan FT UNY.

## **10.1 Halaman yang disarankan**

* Halaman publik/landing pelaporan.  
* Form laporan: identitas koleksi, barcode/nomor panggil, lokasi, jenis masalah, deskripsi, foto opsional, kontak opsional, waktu otomatis.  
* Login pustakawan.  
* Dashboard status dan daftar laporan dengan filter.  
* Detail laporan untuk verifikasi, tindakan, catatan, dan perubahan status.  
* Halaman rekapitulasi.  
* Halaman SOP/panduan sebagai pilihan tambahan.

Status yang pernah disarankan: Baru, Dicek, Menunggu Verifikasi, Terverifikasi, Diteruskan, Selesai, dan Ditolak/Tidak Valid. Alur yang aman: web pelaporan → penyimpanan data laporan web → pustakawan memverifikasi → pustakawan memperbarui SLiMS.

# **11\. Catatan tentang Angka dan Asumsi**

* Target 85% pernah dibahas dalam SMART, tetapi jika dipakai harus dinyatakan sebagai target kelompok, bukan hasil wawancara.  
* Jadwal 30–60 menit mingguan serta batas 3/7 hari kerja adalah rekomendasi dari wawancara, bukan jadwal yang terbukti telah diterapkan.  
* Skor prioritas pada matriks merupakan penilaian kelompok, bukan fakta objektif dari wawancara.  
* LAM-INFOKOM pernah muncul dalam rancangan Modul 4, tetapi diskusi menyarankan agar tidak dijadikan fokus utama kecuali memang relevan dengan deliverable.

# **12\. File yang Pernah Disebut dalam Histori**

* Jawaban3\_Final.docx — hasil wawancara terbaru.  
* Praktikum\_3\_Kelompok\_3\_Revisi (1).pdf — analisis masalah, 5 Why, Fishbone, dan prioritas.  
* Praktikum\_4\_Kelompok3\_revisi (1).pdf — tujuan, SMART, scope, deliverable, asumsi, batasan, tantangan, refleksi.  
* Praktikum\_6\_Kelompok3 (1).docx — laporan Modul 6 yang pernah dibahas.  
* Modul 7 (1).pdf — instruksi Modul 7 yang pernah dibahas.  
* Praktikum\_4\_Kelompok\_3 (1).pdf — versi Modul 4 yang pernah diunggah ulang.

# **13\. Checklist Sebelum Menyatakan Laporan Final**

* Masalah dan akar masalah konsisten di semua modul.  
* SOP/jadwal diposisikan sebagai solusi inti.  
* Media digital hanya mendukung proses, bukan menggantikan SLiMS.  
* Grand Design menunjukkan aliran informasi, bukan hanya UI/database.  
* Aktivitas proyek sesuai deliverable Modul 4\.  
* RACI memakai pembagian tugas anggota yang nyata dan terverifikasi.  
* Angka target diberi status yang tepat: fakta, usulan wawancara, atau target kelompok.  
* Prototype tidak mengklaim integrasi langsung dengan database pusat SLiMS.  
* Kesimpulan dan refleksi mencerminkan aktivitas yang benar-benar dilakukan.

# **14\. Batasan Referensi**

Referensi ini disusun dari ringkasan histori percakapan proyek yang tersedia, bukan ekspor lengkap semua percakapan atau semua file sumber. Jika diminta merevisi tabel, pembagian tugas, isi per halaman, atau format laporan asli, AI harus memeriksa dokumen sumber terkait sebelum menetapkan isi final.