# NASKAH PRESENTASI RESPONSI AKHIR MSI — KELOMPOK 3 (PTI F1)

**Judul Proyek:** Tata Kelola Sirkulasi Koleksi dan Efisiensi Kerja Pustakawan Perpustakaan FT UNY (`SIMPEL-KOLEKSI`)  
**Total Slide:** 12 Slide  
**Estimasi Durasi Total:** ± 8–10 Menit *(± 40–50 detik per slide, padat dan tidak bertele-tele)*  

## Pembagian Peran Pembicara
1. **Gantar Abimanyu (Project Lead):** Slide 1, 2, 3, 4 + Penutup Slide 12
2. **Ganendra Pradipa (Analis):** Slide 5, 6, 7, 8
3. **M. Fadlan Dirmansyah (Desainer & Dokumentator):** Slide 9, 10, 11

> **Tips Penyampaian:** Jangan membaca teks di slide kata per kata. Gunakan poin-poin naskah ini dengan intonasi percakapan akademik yang tenang, jelas, dan tegas. Tekankan sejak awal bahwa solusi kita adalah **rancangan tata kelola sosio-teknis (non-aplikasi baru)** yang mengoptimalkan sistem **SLiMS 9 Bulian** yang sudah ada.

---

## BAGIAN 1: KONTEKS & MASALAH — **Gantar Abimanyu** *(± 2,5 Menit)*

### Slide 1: Cover
> *"Assalamu'alaikum warahmatullahi wabarakatuh. Selamat pagi/siang Ibu Ratna dan rekan-rekan sekalian.*  
> *Kami dari Kelompok 3 kelas PTI F1 yang beranggotakan saya **Gantar Abimanyu**, bersama **Ganendra Pradipa** dan **M. Fadlan Dirmansyah**.*  
> *Pada responsi kali ini, kami akan mempresentasikan hasil perancangan tata kelola sistem informasi dengan judul **Tata Kelola Sirkulasi Koleksi dan Efisiensi Kerja Pustakawan Fakultas Teknik UNY**."*

---

### Slide 2: Profil Organisasi (Studi Kasus)
> *"Kita masuk ke gambaran organisasi pada Slide 2.*  
> *Perpustakaan Fakultas Teknik UNY merupakan unit penunjang akademik yang melayani mahasiswa dan dosen dari 5 departemen. Berdasarkan hasil observasi dan wawancara lapangan kami, perpustakaan ini memiliki rata-rata sekitar **52 kunjungan per hari**, mengelola **2.349 koleksi buku teks**, **499 buku referensi**, serta **15 unit PC Digital Library**, dengan sistem inti berupa **SLiMS 9 Bulian**.*  
> *Namun, terdapat satu kendala kapasitas yang sangat krusial: seluruh operasional harian tersebut dikelola oleh **satu orang pustakawan utama** yang merangkap **tiga layanan sekaligus**, yaitu layanan sirkulasi, referensi tugas akhir, dan pengawasan Digital Library—dengan bantuan mahasiswa magang yang sifatnya insidental."*

---

### Slide 3: Analisis Stakeholder
> *"Selanjutnya di Slide 3, kami memetakan pemangku kepentingan menggunakan **Power-Interest Grid** ke dalam empat kuadran:*
> 1. *Pada kuadran **Manage Closely**, terdapat **Kepala Perpustakaan** dan **Pustakawan Utama FT UNY** sebagai pengambil keputusan dan pelaksana langsung di lapangan.*
> 2. *Di kuadran **Keep Satisfied**, ada **Dekanat FT UNY** dan **Tim Akreditasi Program Studi** yang membutuhkan data valid untuk perencanaan anggaran serta bukti **Borang Akreditasi LAM-INFOKOM Kriteria 5**.*
> 3. *Di kuadran **Keep Informed**, ada **Mahasiswa** dan **Dosen FT UNY** sebagai pemustaka aktif yang paling terdampak jika data buku tidak akurat.*
> 4. *Terakhir di kuadran **Monitor**, ada unit eksternal seperti pengelola **SIAKAD** serta staf kebersihan dan keamanan gedung."*

---

### Slide 4: Gejala & Masalah
> *"Dari kondisi beban kerja tadi, kami mengidentifikasi **Gejala, Mekanisme, dan Masalah Utama** di Slide 4.*  
> *Di lapangan sering muncul **gejala** berupa ketidaksinkronan antara katalog SLiMS dengan kondisi fisik di rak—statusnya tertulis 'Tersedia', tetapi bukunya rusak atau tidak ditemukan. Selain itu, buku rusak masih terus beredar di rak, catatan laporan sering tercecer, dan koleksi lama yang sudah usang atau jarang dipinjam masih bercampur di rak.*  
> ***Mekanismenya**, karena pemustaka melapor secara lisan atau menaruh kertas di meja saat pustakawan sedang melayani antrean pengunjung, laporan itu akhirnya menumpuk dan terlupa.*  
> *Sehingga **masalah utamanya** adalah **keterlambatan pemutakhiran status dan kondisi koleksi pada SLiMS hingga 3 sampai 4 hari kerja**, yang berdampak pada terjadinya ghost inventory serta sulitnya menyiapkan data akurat untuk evaluasi pimpinan dan akreditasi.*  
> *Untuk melihat di titik mana saja proses ini macet, penjelasan berikutnya akan dilanjutkan oleh rekan saya, **Ganendra**."*

---

## BAGIAN 2: ALUR LAMA, AKAR MASALAH & SOLUSI — **Ganendra Pradipa** *(± 3 Menit)*

### Slide 5: Alur Lama (As-Is)
> *"Terima kasih Gantar. Pada Slide 5 ini, kami membedah **Alur Kerja Lama (As-Is)** menjadi empat tahap beserta masalah di setiap tahapnya:*
> 1. ***Tahap 1 (Temuan & Laporan):** Pemustaka melapor secara lisan atau menulis di secarik kertas. Masalahnya, laporan tidak terstandarisasi dan rawan terlupa saat jam layanan padat.*
> 2. ***Tahap 2 (Penyerahan Fisik Buku):** Buku rusak hanya ditaruh di tumpukan meja sirkulasi. Karena belum ada rak pemisah khusus, buku berisiko tersenggol atau terbawa kembali ke rak umum.*
> 3. ***Tahap 3 (Pemeriksaan & Input SLiMS):** Pustakawan baru memeriksa fisik buku saat ada waktu luang. Akibatnya, pembaruan status di SLiMS tertunda 3 sampai 4 hari kerja karena antrean sirkulasi lebih diprioritaskan.*
> 4. ***Tahap 4 (Tindak Lanjut & Rekap):** Buku ditangani seadanya dan laporan kondisi koleksi baru diketik manual saat diminta pimpinan, sehingga tidak ada rekap audit berkala untuk borang akreditasi."*

---

### Slide 6: Fishbone (Analisis Akar Masalah 4M)
> *"Dari alur lama tersebut, kami menelusuri akar penyebabnya menggunakan diagram **Fishbone 4M** pada Slide 6:*
> - *Dari sisi **Man**, satu pustakawan utama mengalami beban multitasking 3 layanan sekaligus, sementara pemustaka enggan melapor karena belum ada kanal yang praktis.*
> - *Dari sisi **Method**, belum ada SOP tertulis mengenai alur pelaporan maupun jadwal khusus untuk pembaruan data koleksi.*
> - *Dari sisi **Machine**, SLiMS 9 Bulian sebenarnya sudah tersedia dan stabil, namun belum dimanfaatkan optimal untuk audit rutin karena belum ada template ekstraksi maupun filter otomatis untuk menyaring buku lama/jarang dibaca (*weeding*).*
> - *Dari sisi **Material**, belum tersedia fasilitas fisik penampungan sementara (*buffer zone*) untuk memisahkan buku bermasalah sebelum diverifikasi."*

---

### Slide 7: Solusi Rancangan
> *"Untuk menjawab keempat akar masalah tadi tanpa membebani fakultas dengan pembuatan aplikasi baru yang mahal, kami merancang **4 Pilar Solusi Tata Kelola** pada Slide 7:*
> 1. ***Buku Pedoman 10 SOP & Quiet Hour:** Menetapkan aturan tertulis dan jadwal khusus **30–60 menit per minggu** di luar jam sibuk agar pustakawan bisa memutakhirkan SLiMS secara fokus.*
> 2. ***Formulir Pelaporan Mandiri QR:** Kanal lapor mandiri di ujung lorong rak yang hanya berisi **4 kolom inti** dengan waktu isi **kurang dari 1 menit**.*
> 3. ***Alur Fisik Rak Transit / Buffer Zone:** Rak pemisah sementara dengan **3 sekat jelas** (Rusak Ringan, Rusak Berat, dan Salah Letak) agar buku rusak tidak dipinjam ulang.*
> 4. ***Dashboard Monitoring & Template Rekap:** Spreadsheet pemantauan SLA dan template ekstraksi CSV SLiMS **berfilter otomatis (menyaring buku lama/jarang dibaca untuk weeding)** guna menghasilkan rekap bulanan secara rapi."*

---

### Slide 8: Grand Design
> *"Lalu bagaimana keempat solusi ini saling terhubung? Kami menggambarkannya dalam **Grand Design** pada Slide 8.*  
> *Arsitektur aliran informasi ini terbagi menjadi 3 tingkat:*
> - *Di **Aliran Masuk (Input)**, temuan pemustaka ditangkap lewat Form QR dan fisiknya diamankan di Rak Transit 3 sekat.*
> - *Di **Verifikasi & Sistem Utama**, pustakawan memverifikasi fisik buku saat Quiet Hour dan memperbarui status item di **SLiMS 9 Bulian**, yang otomatis menyinkronkan katalog OPAC.*
> - *Di **Aliran Keluar (Output)**, data yang telah diekstraksi dari SLiMS disalurkan menjadi tiga manfaat nyata: **Dashboard Monitoring** untuk Kepala Perpustakaan, bukti valid **Borang Akreditasi LAM-INFOKOM Kriteria 5**, serta dasar **perencanaan anggaran pengadaan buku** bagi Dekanat FT UNY.*  
> *Untuk detail alur kerja baru dan perbandingannya, akan dijelaskan oleh rekan saya, **Fadlan**."*

---

## BAGIAN 3: ALUR BARU, PERBANDINGAN & IMPLEMENTASI — **M. Fadlan Dirmansyah** *(± 2,5 Menit)*

### Slide 9: Alur Proses Baru (To-Be)
> *"Terima kasih Ganendra. Di Slide 9, berikut adalah **4 Langkah Alur Proses Baru (To-Be)** yang kami rancang:*
> 1. ***Langkah 1 — Lapor Mandiri QR:** Pemustaka cukup memindai kode QR di ujung lorong rak dan mengisi 4 data singkat dalam waktu di bawah 1 menit.*
> 2. ***Langkah 2 — Pisah di Rak Transit:** Buku fisik langsung diletakkan di Rak Transit sesuai kategori sekatnya agar terisolasi dari koleksi layak pinjam.*
> 3. ***Langkah 3 — Verifikasi & Update:** Pada jadwal **Quiet Hour**, pustakawan memverifikasi fisik buku dan memperbarui status di SLiMS sekaligus sesuai target SLA, yaitu **maksimal 3 hari kerja untuk verifikasi** dan **maksimal 7 hari kerja untuk pembaruan SLiMS**.*
> 4. ***Langkah 4 — Monitoring & Rekap:** Data diolah melalui template rekap bulanan sehingga Kepala Perpustakaan dapat memantau kondisi koleksi dan kepatuhan SLA secara berkala."*

---

### Slide 10: Perbandingan Alur Lama dan Alur Baru
> *"Pada Slide 10, kita dapat melihat perbandingan kontras antara alur lama dan alur baru:*  
> *Jika sebelumnya laporan bersifat **lisan** dan buku **menumpuk di meja sirkulasi**, sekarang laporan **tercatat otomatis lewat QR** dan fisik buku **terpisah rapi di rak transit 3 sekat**.*  
> *Jika sebelumnya pembaruan SLiMS dilakukan **saat sempat** tanpa rekap resmi, kini prosesnya **terjadwal di sesi Quiet Hour** dan langsung terpantau lewat **spreadsheet rekap bulanan**."*

---

### Slide 11: Strategi Implementasi & Jadwal
> *"Terakhir di Slide 11, agar rancangan ini benar-benar bisa diterapkan di Perpustakaan FT UNY tanpa penolakan, kami menyusun 3 strategi utama:*
> 1. ***Strategi Hybrid & Bertahap (Modul 6):** Kami tidak memaksakan perubahan sekaligus; tahap awal difokuskan pada kesiapan internal pustakawan dan penataan rak transit, baru disusul sosialisasi Form QR ke mahasiswa.*
> 2. ***Manajemen Perubahan (Mitigasi Resistensi):** Untuk mencegah mahasiswa malas melapor, form dibuat di bawah 1 menit; dan untuk mencegah pustakawan tunggal kewalahan, pembaruan data dikumpulkan pada jadwal **Quiet Hour**.*
> 3. ***Urutan & Jalur Kritis 36 Hari (Modul 7):** Berdasarkan ketergantungan informasi, penyusunan SOP dan Form QR wajib selesai lebih dulu sebelum rak transit dioperasikan, dengan total lintasan kritis implementasi selama **36 hari kerja**.*  
> *Sekian pemaparan dari saya, saya kembalikan ke Gantar."*

---

### Slide 12: Penutup — **Gantar Abimanyu**
> *"Terima kasih Fadlan. Demikian presentasi rancangan tata kelola sirkulasi dan monitoring koleksi dari Kelompok 3. Seluruh artefak pendukung mulai dari Buku Pedoman 10 SOP, RACI Matrix, hingga mockup alur kerja telah kami siapkan apabila perlu kami tampilkan pada sesi diskusi.*  
> *Kurang lebihnya mohon maaf, waktu dan tempat kami kembalikan kepada Ibu Ratna untuk sesi tanya jawab. Wassalamu'alaikum warahmatullahi wabarakatuh."*

---

## ⚡ Checklist Persiapan Sebelum Masuk Ruang Responsi
- [ ] Buka file [`08_ARTEFAK/BUKU_PEDOMAN_SOP_SIMPEL_KOLEKSI_FT_UNY.docx`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/BUKU_PEDOMAN_SOP_SIMPEL_KOLEKSI_FT_UNY.docx) di tab cadangan (jika Bu Ratna minta bukti 10 SOP tertulis).
- [ ] Buka file [`02_LAPORAN/Praktikum_5_Kelompok3.md`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/02_LAPORAN/Praktikum_5_Kelompok3.md) di bagian **RACI Matrix** (jika ditanya pembagian tanggung jawab masing-masing anggota).
- [ ] Siapkan halaman mockup/visual alur jika diminta demonstrasi *Screen Card*.
- [ ] **Ingat Prinsip Kejujuran:** Selalu sebutkan bahwa ini adalah **rancangan/prototipe tata kelola siap uji coba**, bukan sistem yang sudah resmi ditandatangani dekanat atau sudah jalan penuh di perpustakaan.
