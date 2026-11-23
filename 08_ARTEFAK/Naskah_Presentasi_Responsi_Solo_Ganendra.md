# NASKAH PRESENTASI RESPONSI INDIVIDU (SOLO) — GANENDRA PRADIPA
**Mata Kuliah:** Praktikum Manajemen Sistem Informasi (PMSI)  
**Dosen Penguji:** Dr. Ratna Wardani, S.Si., M.T.  
**Presenter:** Ganendra Pradipa (NIM: 24050530038 / Kelas PTI F1)  
**Peran Tim:** Analis (Kelompok 3)  
**Total Slide:** 12 Slide  
**Estimasi Durasi Presentasi:** ± 5–7 Menit *(padat, lugas, percaya diri, dan berbobot)*

---

## 🎙️ NASKAH LENGKAP DARI SLIDE 1 SAMPAI SLIDE 12

### Slide 1: Cover
> *"Assalamu'alaikum warahmatullahi wabarakatuh. Selamat pagi/siang Ibu Ratna.*  
> *Perkenalkan saya **Ganendra Pradipa** dari kelas PTI F1. Pada responsi kali ini, saya akan mempresentasikan hasil perancangan tata kelola sistem informasi kelompok kami dengan judul **Tata Kelola Sirkulasi Koleksi dan Efisiensi Kerja Pustakawan Fakultas Teknik UNY**."*

---

### Slide 2: Profil Organisasi (Studi Kasus)
> *"Kita mulai dari gambaran organisasi pada Slide 2.*  
> *Perpustakaan Fakultas Teknik UNY merupakan unit penunjang akademik yang melayani mahasiswa dan dosen dari 5 departemen.*  
> *Berdasarkan observasi lapangan, perpustakaan ini mengelola **2.349 koleksi buku teks**, **499 buku referensi**, **15 PC Digital Library**, dan melayani rata-rata **52 kunjungan per hari** menggunakan sistem otomasi **SLiMS 9 Bulian**.*  
> *Namun, terdapat batasan kapasitas operasional yang sangat krusial: seluruh layanan ini hanya dikelola oleh **satu orang pustakawan utama** yang harus merangkap **tiga fungsi layanan sekaligus**—yaitu layanan sirkulasi, referensi skripsi, dan pengawasan Digital Library."*

---

### Slide 3: Analisis Stakeholder
> *"Selanjutnya di Slide 3, kami memetakan pemangku kepentingan menggunakan **Power-Interest Grid** ke dalam 4 kuadran:*
> - *Pada kuadran **Manage Closely**, ada **Kepala Perpustakaan** dan **Pustakawan Utama** sebagai pengelola langsung operasional.*
> - *Pada kuadran **Keep Satisfied**, ada **Dekanat FT UNY** dan **Tim Akreditasi Program Studi** yang membutuhkan data sirkulasi valid untuk perencanaan anggaran dan pemenuhan borang **LAM-INFOKOM Kriteria 5**.*
> - *Pada kuadran **Keep Informed**, terdapat **Mahasiswa** dan **Dosen** sebagai pemustaka aktif.*
> - *Dan pada kuadran **Monitor**, ada unit eksternal seperti pengelola **SIAKAD** serta staf kebersihan dan keamanan gedung."*

---

### Slide 4: Gejala & Masalah
> *"Dari kondisi beban kerja tersebut, pada Slide 4 kami memetakan hubungan antara **Gejala, Mekanisme, dan Masalah Utama**:*
> - ***Gejalanya**, di katalog SLiMS buku tertulis 'Tersedia', namun saat dicari di rak fisiknya rusak atau tidak ada (*ghost inventory*). Buku rusak terus beredar, catatan laporan sering tercecer, dan koleksi lama yang usang masih bercampur di rak.*
> - ***Mekanismenya**, karena pemustaka melapor secara lisan atau menaruh secarik kertas di meja sirkulasi saat pustakawan sedang melayani antrean ramai, laporan itu akhirnya menumpuk dan terlupa.*
> - *Sehingga **masalah utamanya** adalah **keterlambatan pemutakhiran status dan kondisi koleksi pada SLiMS hingga 3 sampai 4 hari kerja**, yang berakibat pada ketidaksesuaian data katalog dan sulitnya penyediaan data yang terpercaya bagi akreditasi maupun pimpinan fakultas."*

---

### Slide 5: Alur Lama (As-Is)
> *"Pada Slide 5, kami membedah **Alur Lama** yang berjalan saat ini ke dalam empat tahapan:*
> 1. ***Temuan & Laporan:** Pemustaka melapor lisan atau kertas catatan. Masalahnya, tidak terstandarisasi dan rawan terlupa.*
> 2. ***Penyerahan Fisik Buku:** Buku ditaruh di tumpukan meja kerja. Masalahnya, belum ada rak pemisah khusus sehingga berisiko terbawa kembali ke rak umum.*
> 3. ***Pemeriksaan & Input SLiMS:** Pustakawan memeriksa fisik buku saat ada waktu luang, sehingga pembaruan SLiMS tertunda 3–4 hari kerja.*
> 4. ***Tindak Lanjut & Rekap:** Penanganan bersifat insidental dan laporan diketik manual saat diminta pimpinan, sehingga belum siap untuk audit berkala."*

---

### Slide 6: Fishbone (Analisis Akar Masalah 4M)
> *"Untuk menemukan akar penyebabnya, pada Slide 6 kami menganalisisnya menggunakan diagram **Fishbone 4M**:*
> - *Dari sisi **Man**, pustakawan tunggal mengalami beban multitasking tiga fungsi layanan sekaligus.*
> - *Dari sisi **Method**, belum ada SOP tertulis mengenai alur pelaporan serta belum ada jadwal rutin khusus untuk pembaruan data.*
> - *Dari sisi **Machine**, SLiMS 9 Bulian sudah tersedia, namun belum dimanfaatkan optimal karena belum ada template ekstraksi maupun filter otomatis untuk menyaring buku lama atau jarang dibaca (*weeding*).*
> - *Dari sisi **Material**, belum tersedia fasilitas fisik rak penampungan sementara (*buffer zone*) untuk memisahkan buku bermasalah sebelum diverifikasi."*

---

### Slide 7: Solusi Rancangan (4 Pilar SIMPEL-KOLEKSI)
> *"Berdasarkan akar masalah tersebut, di Slide 7 kami merancang solusi berbasis **tata kelola proses (Pure Governance)** tanpa membebani fakultas dengan biaya pembuatan aplikasi baru, yang terdiri dari 4 pilar:*
> 1. ***Buku Pedoman 10 SOP & Quiet Hour:** Aturan tertulis dan penetapan jadwal kerja terfokus **30–60 menit per minggu** di luar jam sibuk agar pustakawan bisa memperbarui SLiMS tanpa interupsi.*
> 2. ***Formulir Pelaporan Mandiri QR:** Kanal digital di ujung lorong rak yang ringkas dengan **4 kolom inti** dan waktu pengisian **kurang dari 1 menit**.*
> 3. ***Alur Fisik Rak Transit / Buffer Zone:** Rak fisik pemisah dengan **3 sekat jelas** (Rusak Ringan, Rusak Berat, dan Salah Letak) agar buku rusak tidak dipinjam kembali.*
> 4. ***Dashboard Monitoring & Template Rekap:** Template ekstraksi data CSV SLiMS **berfilter otomatis (untuk menyaring buku usang/weeding)** dan spreadsheet pemantauan indikator kinerja SLA bagi pimpinan."*

---

### Slide 8: Grand Design
> *"Bagaimana keempat solusi tadi saling terhubung secara terpadu? Kami menggambarkannya pada **Grand Design** di Slide 8.*  
> *Arsitektur aliran informasi ini menghubungkan tiga tingkatan organisasi:*
> - *Di **Aliran Masuk (Input)**, temuan buku dari pemustaka ditangkap melalui **Form QR** dan fisiknya langsung diamankan di **Rak Transit 3 sekat**.*
> - *Di **Verifikasi & Sistem Utama**, pustakawan memverifikasi fisik buku saat **Quiet Hour** dan memperbarui status item di **SLiMS 9 Bulian**, yang otomatis menyinkronkan katalog publik (OPAC).*
> - *Di **Aliran Keluar (Output)**, data bersih dari SLiMS ditarik melalui template ekstraksi CSV untuk tiga tujuan:*
>   1. *Dashboard monitoring kepatuhan SLA bagi **Kepala Perpustakaan**,*
>   2. *Bukti fisik yang valid untuk Borang Akreditasi **LAM-INFOKOM Kriteria 5** bagi Tim Akreditasi Prodi, dan*
>   3. *Dasar perencanaan anggaran pengadaan buku baru berbasis data riil (*Evidence-Based Procurement*) bagi **Dekanat FT UNY**."*

---

### Slide 9: Alur Proses Baru (To-Be)
> *"Rancangan tersebut kami turunkan menjadi **4 Langkah Alur Proses Baru (To-Be)** pada Slide 9:*
> 1. ***Lapor Mandiri QR:** Pemustaka cukup memindai kode QR di ujung lorong rak dan mengisi 4 data singkat dalam waktu di bawah 1 menit.*
> 2. ***Pisah di Rak Transit:** Pemustaka langsung meletakkan buku di rak transit sesuai sekatnya agar terisolasi dari koleksi layak pinjam.*
> 3. ***Verifikasi & Update:** Pustakawan memverifikasi buku dan memperbarui status di SLiMS pada sesi **Quiet Hour** sesuai standar waktu layanan (SLA), yaitu **maksimal 3 hari kerja untuk verifikasi** dan **maksimal 7 hari kerja untuk pembaruan SLiMS**.*
> 4. ***Monitoring & Rekap:** Rekapitulasi bulanan tersusun otomatis untuk pengawasan Kepala Perpustakaan dan pelaporan borang akreditasi."*

---

### Slide 10: Perbandingan Alur Lama dan Alur Baru
> *"Pada Slide 10, terlihat perbandingan kontras antara alur lama dan alur baru:*  
> - *Jika sebelumnya laporan bersifat **lisan** dan buku **menumpuk di meja sirkulasi**, kini laporan **terekam otomatis lewat QR** dan fisik buku **terpisah rapi di rak transit 3 sekat**.*  
> - *Jika sebelumnya pembaruan SLiMS dilakukan **saat sempat** tanpa rekap berkala, kini prosesnya **terjadwal pasti di Quiet Hour** dan langsung terpantau lewat **spreadsheet rekap bulanan**."*

---

### Slide 11: Strategi Implementasi & Jadwal
> *"Terakhir di Slide 11, agar perancangan ini berhasil diterapkan di lapangan tanpa penolakan, kami menyusun 3 rencana implementasi:*
> 1. ***Strategi Bertahap (Hybrid):** Dimulai dari kesiapan internal pustakawan dan penataan rak transit lebih dulu (Fase 1), baru disusul sosialisasi Form QR ke mahasiswa (Fase 2).*
> 2. ***Manajemen Perubahan:** Mencegah mahasiswa malas melapor dengan form super cepat (< 1 menit), dan mencegah pustakawan tunggal kewalahan dengan memusatkan waktu input di sesi **Quiet Hour**.*
> 3. ***Jalur Kritis 36 Hari:** Berdasarkan ketergantungan informasi, penyusunan SOP dan Form QR wajib diselesaikan terlebih dahulu sebelum rak transit dioperasikan, dengan total lintasan kritis implementasi selama **36 hari kerja**."*

---

### Slide 12: Penutup
> *"Demikian presentasi rancangan tata kelola sirkulasi dan efisiensi kerja pustakawan dari saya.*  
> *Seluruh dokumen pendukung seperti Buku Pedoman 10 SOP berformat resmi, matriks RACI, maupun rancangan mockup antarmuka siap saya tampilkan apabila diperlukan pada sesi diskusi.*  
> *Terima kasih atas perhatian Ibu Ratna, waktu dan tempat saya kembalikan kepada Ibu untuk sesi tanya jawab. Wassalamu'alaikum warahmatullahi wabarakatuh."*
