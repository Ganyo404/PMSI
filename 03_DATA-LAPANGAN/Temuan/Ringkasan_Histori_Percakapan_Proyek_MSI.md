**RINGKASAN HISTORI PERCAKAPAN PROYEK MSI**

*Perancangan Solusi Pemutakhiran Informasi Koleksi Perpustakaan Fakultas Teknik UNY*

Disusun dari konteks percakapan proyek yang tersedia • 9 Oktober 2026

Dokumen ini merangkum pokok diskusi, keputusan, hasil analisis, dan arahan revisi laporan dari percakapan proyek MSI yang tersedia. Dokumen ini bukan salinan verbatim semua pesan dan tidak menggantikan pengecekan terhadap file laporan asli.

# **1\. Identitas dan Konteks Proyek**

* Kasus yang dikaji: proses pemutakhiran status dan kondisi koleksi di Perpustakaan Fakultas Teknik, Universitas Negeri Yogyakarta (FT UNY).  
* Kelompok: Kelompok 3\.  
* Anggota yang tercatat dalam konteks proyek: Gantar Abimanyu (24050530042), Ganendra Pradipa (24050530038), dan M. Fadlan Dirmansyah (24050530034).  
* Sistem utama yang digunakan perpustakaan: SLiMS.  
* Kendala proyek: keterbatasan anggaran, waktu satu semester, kewenangan terhadap sistem pusat, dan tidak adanya penambahan staf.

# **2\. Temuan Utama dari Wawancara**

## **2.1 Alur kerja yang berjalan**

Informasi mengenai koleksi bermasalah dapat berasal dari laporan lisan pemustaka di meja layanan, pesan WhatsApp, atau temuan pustakawan saat penataan rak, layanan sirkulasi, pengembalian, dan stock opname. Pustakawan memeriksa kondisi fisik, mencocokkan identitas koleksi melalui barcode atau nomor panggil dengan data SLiMS, menentukan tindakan, lalu memperbarui status, lokasi, atau data yang relevan. Proses dianggap selesai ketika kondisi fisik dan informasi sistem sudah sesuai.

## **2.2 Masalah proses**

* Belum ada SOP tertulis dan jadwal khusus yang mengatur pemutakhiran status dan kondisi koleksi secara rutin.  
* Pustakawan/pengelola utama menangani beberapa fungsi layanan sekaligus, sehingga pekerjaan pelayanan dapat bersaing dengan pekerjaan pemutakhiran data.  
* Informasi awal dapat tersebar di catatan kertas, buku, WhatsApp, atau spreadsheet sederhana; pencatatan belum terpusat secara konsisten.  
* Laporan dapat terlupakan atau tertunda, sementara perubahan status tetap memerlukan verifikasi fisik.  
* Belum ada penanda penyelesaian dan jejak tindak lanjut yang seragam untuk setiap laporan.

## **2.3 Verifikasi dan kewenangan**

Verifikasi meliputi kondisi fisik, identitas koleksi, lokasi, riwayat sirkulasi, dan bukti pendukung jika tersedia. Pustakawan dapat melakukan sejumlah pembaruan rutin di SLiMS, seperti status eksemplar, lokasi, nomor panggil, koreksi bibliografis sederhana, penambahan eksemplar, transaksi sirkulasi, dan melihat laporan. Tindakan seperti penghapusan permanen/weeding, konfigurasi sistem, hak akses, server/backup, atau pengadaan/penggantian dapat membutuhkan pihak berwenang lain.

## **2.4 Media pelaporan dan monitoring yang disarankan**

Media pelaporan digital sederhana berbasis QR Code dinilai layak sebagai dukungan proses, selama mudah digunakan dan tidak menggantikan verifikasi pustakawan. Data yang disarankan mencakup identitas koleksi, barcode/nomor panggil, lokasi, jenis masalah, deskripsi, waktu otomatis, foto opsional, dan kontak pelapor opsional.

Status yang pernah disarankan: Baru, Dicek, Menunggu Verifikasi, Terverifikasi, Diteruskan, Selesai, dan Ditolak/Tidak Valid. Monitoring dapat menampilkan tanggal laporan, tanggal penyelesaian, jenis masalah, identitas/lokasi koleksi, status, tindakan, catatan, dan penanda keterlambatan.

Rekap berkala dapat memuat jumlah laporan masuk/selesai/tertunda, jenis masalah, koleksi yang sering dilaporkan, daftar koleksi hilang atau rusak berat, waktu penyelesaian, serta distribusi berdasarkan lokasi atau subjek. Informasi ini dapat mendukung evaluasi dan keputusan pengelolaan koleksi.

# **3\. Modul 3 — Analisis Masalah**

Fokus masalah yang dipilih pada Modul 3 adalah:

**“Pembaruan data perpustakaan sering terlambat sehingga informasi yang tersedia tidak selalu sesuai dengan kondisi terbaru.”**

Percakapan membedakan gejala masalah dari akar masalah. Gejala yang terlihat adalah keterlambatan pembaruan status/kondisi koleksi. Akar masalah yang lebih mendasar adalah belum adanya SOP tertulis dan jadwal pemutakhiran yang terstruktur dan rutin.

## **3.1 Alur sebab-akibat / 5 Why**

1. Pembaruan tidak selalu dilakukan segera setelah perubahan ditemukan.  
2. Pustakawan membagi waktu antara pelayanan dan pengelolaan informasi.  
3. Belum ada waktu khusus yang ditetapkan secara konsisten untuk pemutakhiran.  
4. Belum ada mekanisme/jadwal rutin yang jelas.  
5. Belum ada SOP/tata kelola tertulis untuk pemutakhiran berkala.

Rumusan akar masalah: belum adanya SOP dan tata kelola pemutakhiran informasi koleksi yang terstruktur, termasuk jadwal rutin dan mekanisme tindak lanjut.

## **3.2 Kelompok penyebab Fishbone yang dibahas**

| Kategori | Pokok penyebab |
| :---- | :---- |
| **Manusia** | Satu pengelola utama menangani beberapa layanan; waktu terbagi antara pelayanan dan pemutakhiran. |
| **Metode** | Belum ada SOP tertulis; tidak ada jadwal rutin; pelaksanaan bergantung pada kebiasaan dan kebutuhan. |
| **Data/Material** | Informasi berasal dari beberapa sumber; catatan awal tersebar di kertas, buku, WhatsApp, atau spreadsheet. |
| **Sistem/Peralatan** | SLiMS merupakan sistem utama, tetapi pembaruan bergantung pada pemeriksaan dan input pustakawan. |
| **Pengukuran** | Monitoring dan pencatatan status/waktu belum seragam. |
| **Lingkungan kerja** | Layanan berjalan bersamaan dengan tugas pemutakhiran dan prioritas dapat berubah. |

# **4\. Modul 4 — Solusi, Scope, dan SMART**

Solusi direvisi dari gagasan sistem terintegrasi yang terlalu luas menjadi mekanisme tata kelola pemutakhiran informasi koleksi. SOP dan jadwal adalah inti solusi; media digital menjadi alat bantu pelaporan, monitoring, dan rekapitulasi.

## **4.1 Rumusan masalah yang disarankan**

Perpustakaan Fakultas Teknik UNY mengalami keterlambatan pemutakhiran status dan kondisi koleksi karena waktu pengelola harus dibagi antara kegiatan pelayanan dan pengelolaan informasi, sementara belum terdapat SOP tertulis dan jadwal rutin yang mengatur proses pemutakhiran secara berkala. Kondisi tersebut menyebabkan informasi tertentu pada sistem tidak selalu sesuai dengan kondisi terbaru dan pada kondisi tertentu masih memerlukan pengecekan atau verifikasi manual.

## **4.2 Ruang lingkup yang disarankan**

* Menyusun draf SOP pemutakhiran status dan kondisi koleksi.  
* Merancang jadwal pemutakhiran rutin yang realistis. Dari wawancara, opsi yang dinilai realistis adalah sesi mingguan sekitar 30–60 menit; contoh hari/jam harus disepakati dengan pustakawan.  
* Merancang alur pelaporan kondisi koleksi dan media pelaporan digital berbasis QR Code.  
* Merancang monitoring status laporan dan format rekapitulasi.  
* Menyusun template rekap/ekstraksi data sirkulasi SLiMS jika sesuai dengan kebutuhan proyek.

## **4.3 Batasan proyek**

* Tidak membangun ulang seluruh sistem otomasi perpustakaan.  
* Tidak memodifikasi source code atau database pusat SLiMS.  
* Tidak mengasumsikan adanya akses API atau integrasi langsung dengan SLiMS.  
* Tidak menambah staf permanen atau mewajibkan pengadaan perangkat baru.  
* Keputusan penghapusan koleksi, pengadaan, penggantian, atau perubahan sistem yang memerlukan otoritas lain tetap berada pada pihak berwenang.

## **4.4 SMART dan indikator**

Specific: menyusun SOP, jadwal, alur pelaporan/verifikasi, serta rancangan monitoring dan rekapitulasi. Measurable: gunakan indikator yang dapat ditelusuri, misalnya laporan yang tercatat, status tindak lanjut, tanggal pelaporan/penyelesaian, dan kepatuhan terhadap jadwal. Jika target angka seperti 85% dipakai, nyatakan secara eksplisit sebagai target kelompok, bukan fakta hasil wawancara. Achievable: memanfaatkan SLiMS dan media pelaporan digital sederhana tanpa perubahan pada sistem pusat. Relevant: menyelesaikan akar masalah berupa ketiadaan SOP/jadwal. Time-bound: rancangan SOP, alur, prototype, monitoring, dan evaluasi diselesaikan serta diuji dalam satu semester.

# **5\. Modul 5 — Grand Design, Aktivitas, Peran, dan RACI**

Modul 5 diarahkan untuk menerjemahkan solusi Modul 4 menjadi alur informasi, daftar aktivitas, dan pembagian tanggung jawab. Grand Design bukan desain database atau UI, melainkan gambaran siapa menghasilkan informasi, siapa menerima/memverifikasi, sistem atau media apa yang membantu aliran informasi, dan bagaimana informasi dimanfaatkan.

## **5.1 Grand Design**

Alur utama yang disarankan:

**Pemustaka → Media Pelaporan/QR Code → Pustakawan → Verifikasi → SLiMS → Rekapitulasi → Pemanfaatan Informasi**

SLiMS tetap menjadi sistem utama pengelolaan koleksi. Media pelaporan/monitoring adalah pendukung dan tidak otomatis mengubah data SLiMS. Pustakawan tetap memeriksa laporan dan melakukan pembaruan di SLiMS sesuai kewenangannya.

## **5.2 Aktivitas proyek yang disarankan**

| No. | Aktivitas | Output |
| :---- | :---- | :---- |
| **1** | Analisis kebutuhan informasi | Daftar kebutuhan pengguna dan informasi |
| **2** | Penyusunan SOP pemutakhiran | Draf SOP |
| **3** | Penyusunan jadwal pemutakhiran | Jadwal rutin |
| **4** | Perancangan alur pelaporan/verifikasi | Diagram alur |
| **5** | Perancangan media pelaporan QR | Prototype media pelaporan |
| **6** | Perancangan monitoring | Daftar status dan tampilan monitoring |
| **7** | Perancangan rekapitulasi | Format rekap |
| **8** | Pengujian skenario | Catatan hasil uji |
| **9** | Evaluasi dan perbaikan | Rancangan yang diperbaiki |
| **10** | Dokumentasi | Laporan proyek |

## **5.3 RACI**

R \= Responsible (pelaksana), A \= Accountable (penanggung jawab akhir), C \= Consulted (pemberi masukan), I \= Informed (pihak yang diberi informasi). RACI harus disusun berdasarkan pembagian kerja nyata kelompok. Dalam percakapan yang tersedia, pembagian nama anggota per aktivitas tidak terverifikasi, sehingga jangan menganggap contoh berikut sebagai RACI final.

Prinsip pengecekan RACI: setiap aktivitas sebaiknya memiliki minimal satu R dan satu A; hindari menandai semua anggota sebagai R/A/C/I pada semua baris tanpa alasan; dan pastikan peran konsisten dengan daftar aktivitas serta pembagian kerja yang benar-benar dilakukan.

## **5.4 Metode kolaborasi**

Scrum pernah dibahas sebagai pendekatan kolaborasi kelompok melalui perencanaan, pembagian tugas, pengerjaan, review, evaluasi, dan perbaikan. Gunakan istilah Scrum hanya sejauh sesuai dengan praktik kelompok yang benar-benar dilakukan; jangan menambahkan kegiatan atau peran Scrum yang tidak pernah dijalankan.

# **6\. Modul 6 — Arah Konsistensi Implementasi**

Konteks percakapan menyebut Modul 6 sebagai tahap lanjutan setelah perancangan dan pembagian tanggung jawab. Saat menyusun atau merevisi laporan Modul 6, pastikan implementasi, jadwal, monitoring, evaluasi, dan peran tim konsisten dengan scope Modul 4 dan aktivitas/RACI Modul 5\. File Modul 6 yang pernah dibahas adalah “Praktikum\_6\_Kelompok3 (1).docx”, tetapi rincian lengkapnya tidak direproduksi di ringkasan ini.

# **7\. Modul 7 — Prototype/Mockup Sistem**

Diskusi menyimpulkan bahwa apabila Modul 7 meminta mockup sistem, bentuk yang paling konsisten adalah prototype web responsif sederhana sebagai pendukung SOP, bukan aplikasi perpustakaan baru. QR Code dapat menjadi pintu masuk menuju halaman pelaporan.

## **7.1 Nama sistem yang pernah disarankan**

SIMPEL-KOLEKSI FT — Sistem Pelaporan dan Monitoring Kondisi Koleksi Perpustakaan FT UNY.

## **7.2 Halaman prototype yang disarankan**

* Halaman publik/landing pelaporan.  
* Form laporan: identitas koleksi, barcode/nomor panggil, lokasi, jenis masalah, deskripsi, foto opsional, kontak opsional, waktu otomatis.  
* Login pustakawan.  
* Dashboard laporan dengan jumlah/status/filter.  
* Detail laporan untuk verifikasi, hasil pemeriksaan, tindakan, dan catatan.  
* Halaman rekapitulasi.  
* Halaman SOP/panduan (opsional).

## **7.3 Status laporan**

Baru → Dicek → Menunggu Verifikasi → Terverifikasi → Diteruskan atau Selesai; laporan yang tidak valid dapat diberi status Ditolak/Tidak Valid.

## **7.4 Batas arsitektur**

Alur yang aman untuk prototype: Web pelaporan → penyimpanan data laporan web → pustakawan memverifikasi → pustakawan memperbarui SLiMS. Jangan menggambarkan integrasi langsung ke database SLiMS kecuali ada bukti akses/izin dan kebutuhan teknis yang sah.

# **8\. Artefak dan File yang Pernah Dibahas**

* Praktikum\_3\_Kelompok\_3\_Revisi (1).pdf — analisis masalah, 5 Why, Fishbone, dan prioritas masalah.  
* Praktikum\_4\_Kelompok3\_revisi (1).pdf — scope, SMART, deliverable, asumsi, batasan, tantangan, dan refleksi.  
* Jawaban3\_Final.docx — hasil wawancara terbaru mengenai alur pembaruan, penyebab keterlambatan, SOP/jadwal, verifikasi, kewenangan SLiMS, QR/form, monitoring, dan rekapitulasi.  
* Praktikum\_6\_Kelompok3 (1).docx — laporan Modul 6 yang pernah dibahas.  
* Modul 7 (1).pdf — instruksi Modul 7 yang pernah dibahas.  
* Praktikum\_4\_Kelompok\_3 (1).pdf — versi laporan Modul 4 yang diunggah ulang sebelum revisi.

# **9\. Keputusan dan Koreksi Penting dari Histori Diskusi**

* Akar masalah bukan hanya keterlambatan pembaruan; ketiadaan SOP tertulis dan jadwal rutin adalah penyebab mendasar yang perlu menjadi fokus solusi.  
* Jangan menyamakan gejala dengan akar masalah: gejala \= pembaruan terlambat; akar \= tata kelola/SOP/jadwal belum terstruktur.  
* SOP dan jadwal adalah solusi inti; media digital adalah alat bantu pelaporan, monitoring, dan rekapitulasi.  
* SLiMS tetap menjadi sistem utama. Jangan mengklaim integrasi langsung, modifikasi database pusat, atau akses API tanpa bukti.  
* Grand Design harus menggambarkan aliran informasi dan tanggung jawab, bukan sekadar UI/database.  
* Aktivitas proyek dan RACI harus diturunkan dari deliverable Modul 4\.  
* Jika angka target seperti 85% digunakan, beri label sebagai target kelompok, bukan temuan wawancara.  
* Wawancara menyarankan opsi jadwal mingguan sekitar 30–60 menit; jadwal final tetap perlu disepakati dengan pustakawan.  
* Jangan mengubah seluruh laporan hanya demi terlihat berbeda. Pertahankan bagian yang sudah konsisten dan revisi hanya yang tidak selaras.

# **10\. Daftar Tindak Lanjut**

6. Periksa kembali laporan Modul 3 agar rumusan masalah, 5 Why, Fishbone, dan prioritasnya konsisten.  
7. Finalisasi Modul 4 dengan fokus SOP/jadwal, pelaporan, verifikasi, monitoring, dan rekapitulasi; pastikan scope tidak bertentangan dengan kebutuhan prototype Modul 7\.  
8. Finalisasi Grand Design Modul 5 berdasarkan alur informasi yang benar.  
9. Cocokkan daftar aktivitas dengan deliverable Modul 4\.  
10. Isi RACI menggunakan pembagian kerja anggota yang sebenarnya, bukan asumsi.  
11. Pastikan metode Scrum yang ditulis sesuai praktik yang benar-benar dilakukan.  
12. Bangun prototype Modul 7 dengan QR menuju form, dashboard pustakawan, detail/status laporan, dan rekapitulasi.  
13. Uji beberapa skenario: laporan valid, laporan tidak lengkap, laporan duplikat/tidak valid, laporan perlu diteruskan ke pihak lain, dan laporan selesai setelah SLiMS diperbarui.

# **11\. Catatan Batasan Ringkasan**

Ringkasan ini disusun dari konteks dan rangkuman percakapan proyek yang tersedia, bukan hasil ekspor lengkap seluruh histori folder. Sebagian file asli disebutkan dalam percakapan tetapi tidak seluruh isi dan tabelnya tersedia di konteks ini. Karena itu, pembagian RACI per nama anggota, detail isi setiap halaman laporan, serta status revisi akhir tiap file harus diverifikasi terhadap dokumen sumber sebelum dijadikan naskah final.