# LAPORAN EVALUASI & TRANSKRIPSI SLIDE FINAL (12 SLIDE)
**File Sumber:** `08_ARTEFAK/Responsi Kelompok 3 PTI F1 final.pdf` (Ukuran: 6.98 MB, 12 Halaman)  
**Tanggal Verifikasi:** 22 November 2026  
**Status Audit:** ✅ **100% SIAP UNTUK RESPONSI & PRESENTASI AKHIR**

---

## 📌 Struktur & Urutan Slide Final Kelompok 3 (PTI F1)

Berikut adalah struktur 12 slide yang telah diperbarui dan diurutkan secara presisi:

### Slide 1: Cover Judul Proyek
* **Judul Utama:** TATA KELOLA SIRKULASI KOLEKSI DAN EFISIENSI KERJA PUSTAKAWAN FT
* **Sub-Judul / Label:** Presentation Kelompok 3 Praktikum Manajemen Sistem Informasi (PMSI)
* **Penyusun:** 
  1. Gantar Abimanyu (24050530042) — *Project Lead*
  2. Ganendra Pradipa (24050530038) — *Analis*
  3. M Fadlan Dirmansyah (24050530034) — *Desainer & Dokumentator*
* **Institusi:** Program Pendidikan Teknik Informatika, Fakultas Teknik, Universitas Negeri Yogyakarta (2026)

---

### Slide 2: Profil Organisasi (Studi Kasus)
* **Konteks:** Perpustakaan Fakultas Teknik UNY sebagai unit penunjang akademik yang melayani kebutuhan literatur mahasiswa dan dosen dari 5 departemen/jurusan.
* **Fakta Kunci Beban Kerja & Kapasitas:**
  * **1 Pustakawan Utama:** Merangkap 3 layanan sekaligus (Sirkulasi, Referensi/Tugas Akhir, dan Digital Library).
  * **~52 Kunjungan / Hari:** Frekuensi pergerakan fisik buku dan pemustaka sangat padat.
  * **2.349 Koleksi Buku Teks:** Menjadi sumber belajar harian mahasiswa.
  * **499 Koleksi Buku Referensi:** Rujukan khusus tugas akhir dan penelitian.
  * **15 Unit PC Digital Library:** Akses repositori dan jurnal lokal FT UNY.
  * **Sistem Inti Eksisting:** SLiMS 9 Bulian (*Senayan Library Management System*).

---

### Slide 3: Analisis Stakeholder (Power-Interest Grid 4 Kuadran)
*Infografis visual matriks pemangku kepentingan perpustakaan:*
1. **Manage Closely (High Power - High Interest):**
   * Kepala Perpustakaan FT UNY
   * Pustakawan Utama FT UNY
2. **Keep Satisfied (High Power - Low Interest):**
   * Dekanat FT UNY (Wakil Dekan Bidang Akademik & Perencanaan)
   * Tim Gugus Penjaminan Mutu / Akreditasi Prodi (LAM-INFOKOM Kriteria 5)
3. **Keep Informed (Low Power - High Interest):**
   * Mahasiswa FT UNY (Pemustaka aktif ~52 kunjungan/hari)
   * Dosen FT UNY
4. **Monitor (Low Power - Low Interest):**
   * Pengelola Sistem Kampus Terkait (Puskom / SIAKAD UNY)
   * Staf Kebersihan & Keamanan Gedung

---

### Slide 4: Gejala & Masalah (Analisis Gejala-Mekanisme-Masalah)
* **Kolom 1 (GEJALA LAPANGAN):**
  * Buku di rak tidak sinkron dengan katalog SLiMS (status tertulis *Tersedia*, namun fisik buku rusak atau hilang).
  * Buku rusak (robek/halaman lepas) tetap beredar di rak dan dipinjam ulang oleh pemustaka lain.
  * Catatan laporan kerusakan sering tercecer atau terlupa di meja sirkulasi.
* **Kolom 2 (MEKANISME TERJADINYA):**
  * Laporan pemustaka disampaikan secara lisan atau meninggalkan secarik kertas di meja.
  * Pustakawan sedang melayani antrean pengunjung sehingga laporan tertumpuk dan tidak langsung diinput.
  * Tidak ada pemisahan fisik antara buku layak baca dengan buku yang sedang dalam pemeriksaan.
* **Kolom 3 (MASALAH UTAMA & DAMPAK SISTEMIK):**
  * **Masalah Utama:** Keterlambatan pemutakhiran status dan kondisi koleksi pada sistem SLiMS (tertunda 3–4 hari kerja).
  * **Dampak Sistemik:** Terjadinya *ghost inventory* (katalog tidak valid), kerusakan fisik buku semakin parah, dan tidak tersedianya rekap data sirkulasi yang terpercaya untuk evaluasi pimpinan maupun bukti akreditasi LAM-INFOKOM.

---

### Slide 5: Alur Lama (As-Is Process)
*4 Tahapan Alur Kerja Saat Ini beserta Titik Masalahnya:*
1. **1. Temuan & Laporan:**
   * *Alur:* Pemustaka menemukan buku rusak/salah rak, lalu melapor secara lisan atau meletakkan kertas catatan di meja sirkulasi.
   * *Masalah:* Bersifat lisan & tidak terstandarisasi; rawan terlupa saat jam layanan padat.
2. **2. Penyerahan Fisik Buku:**
   * *Alur:* Buku yang rusak ditaruh begitu saja di tumpukan meja kerja pustakawan.
   * *Masalah:* Tidak ada rak pemisah khusus (*buffer zone*); buku berisiko tersenggol atau terbawa kembali ke rak umum.
3. **3. Pemeriksaan & Input SLiMS:**
   * *Alur:* Pustakawan memeriksa fisik buku dan membuka menu SLiMS saat memiliki waktu luang.
   * *Masalah:* Waktu pembaruan tidak pasti; tertunda 3–4 hari kerja karena antrean layanan sirkulasi lebih diutamakan.
4. **4. Tindak Lanjut & Rekap:**
   * *Alur:* Buku diperbaiki seadanya atau disimpan di gudang; pelaporan kondisi koleksi diketik manual saat diminta pimpinan.
   * *Masalah:* Tidak ada rekap audit berkala; data ketersediaan buku pada borang akreditasi sulit divalidasi.

---

### Slide 6: Analisis Akar Masalah (Diagram Fishbone 4M)
*Visualisasi Diagram Tulang Ikan (Fishbone) dengan Tulang Belakang Masalah Utama:*  
**"Pemutakhiran status dan kondisi koleksi pada SLiMS sering tertunda"**
* **MAN (Faktor Manusia):**
  * Pustakawan tunggal melayani 3 fungsi layanan sekaligus (kelelahan kognitif / *multitasking overload*).
  * Pemustaka enggan melapor karena tidak tahu mekanismenya atau tidak ada kanal yang cepat.
* **METHOD (Metode Kerja):**
  * Ketiadaan SOP tertulis yang mengatur alur pelaporan, verifikasi, dan pemutakhiran data.
  * Ketiadaan alokasi waktu kerja khusus (*quiet hour*) untuk tugas administratif data koleksi.
* **MACHINE (Sistem / Teknologi):**
  * SLiMS Bulian sudah tersedia dan stabil, namun belum dimanfaatkan optimal untuk audit berkala karena ketiadaan template ekstraksi transaksi.
* **MATERIAL (Fisik Buku & Sarana):**
  * Belum ada fasilitas fisik penampungan sementara (*buffer zone*) untuk memisahkan buku bermasalah sebelum diverifikasi.

---

### Slide 7: Solusi Rancangan (4 Pilar SIMPEL-KOLEKSI)
*Rancangan Tata Kelola Intervensi Non-Aplikasi (Pure Governance):*
1. **Buku Pedoman 10 SOP & Quiet Hour:**
   * Standar tertulis hak-kewajiban pengelolaan koleksi dan penetapan jadwal kerja terfokus (30–60 menit/minggu) sebelum jam sibuk layanan.
2. **Formulir Pelaporan Mandiri QR:**
   * Kanal digital ringkas di ujung lorong rak (hanya 4 kolom inti: barcode/judul, lokasi rak, jenis kerusakan, foto opsional; waktu isi < 1 menit).
3. **Alur Fisik Rak Transit / Buffer Zone:**
   * Rak fisik 3 sekat (Sekat A: Rusak Ringan, Sekat B: Rusak Berat, Sekat C: Salah Letak) untuk mengisolasi buku bermasalah.
4. **Dashboard Monitoring & Template Rekap:**
   * Spreadsheet monitoring indikator kinerja (SLA) dan template ekstraksi CSV SLiMS untuk agregasi rekapitulasi data koleksi bulanan.

---

### Slide 8: Grand Design (Arsitektur Aliran Informasi 3 Kolom / Tier)
*Pemetaan Aliran Informasi Sosio-Teknis Laporan Modul 5:*
* **Kolom Kiri (TIER 1 - ALIRAN MASUK & BUFFER):**
  * Pemustaka $\rightarrow$ Scan Form QR di lorong rak $\rightarrow$ Taruh fisik buku di Rak Transit 3 sekat $\rightarrow$ Log data masuk otomatis ke lembar kerja verifikasi.
* **Kolom Tengah (TIER 2 - VERIFIKASI & SISTEM UTAMA):**
  * Pustakawan tunggal memeriksa fisik buku di Rak Transit pada sesi *Quiet Hour* $\rightarrow$ Mengubah status item di SLiMS 9 Bulian (Perbaikan / Rusak / Tersedia) $\rightarrow$ Sinkronisasi real-time ke OPAC (SLA verifikasi $\le 3$ hari, update $\le 7$ hari).
* **Kolom Kanan (TIER 3 - MANAJERIAL & STRATEGIS):**
  * Data sirkulasi diekstraksi berkala $\rightarrow$ Dashboard Monitoring Kepala Perpustakaan $\rightarrow$ Bukti fisik Borang Akreditasi LAM-INFOKOM Kriteria 5 $\rightarrow$ Dekanat FT UNY untuk dasar perencanaan anggaran pengadaan buku baru.

---

### Slide 9: Alur Proses Baru (To-Be Workflow)
*4 Langkah Alur Kerja Masa Depan yang Terstruktur:*
1. **1. Lapor Mandiri QR:** Pemustaka memindai kode QR di ujung lorong rak dan mengisi 4 data singkat dalam waktu kurang dari 1 menit.
2. **2. Pisah di Rak Transit:** Pemustaka meletakkan buku di rak transit sesuai sekatnya (Sekat A/B/C) agar tidak dipinjam ulang sebelum diperiksa.
3. **3. Verifikasi & Update Terjadwal:** Pustakawan memeriksa fisik buku pada sesi *Quiet Hour* (30–60 menit/minggu) dan memperbarui status di SLiMS sesuai target SLA ($\le 3$ hari verifikasi, $\le 7$ hari update).
4. **4. Monitoring & Rekap Bulanan:** Rekap data otomatis tersusun untuk pengawasan Kepala Perpustakaan dan pelaporan borang akreditasi prodi.

---

### Slide 10: Perbandingan Alur Lama dan Alur Baru
*Komparasi Ringkas & Flowchart As-Is vs To-Be:*
* **LAMA (AS-IS):**
  1. Lapor lisan / titip meja
  2. Menumpuk di meja sirkulasi
  3. Update manual saat sempat
  4. Pencatatan tercecer / tidak ada rekap
* **BARU (TO-BE):**
  1. Lapor mandiri via Google Form QR
  2. Pisah fisik di rak transit 3 sekat
  3. Verifikasi & update terjadwal (Quiet Hour)
  4. Monitoring via spreadsheet rekap

---

### Slide 11: Strategi Implementasi & Jadwal (Modul 6 & Modul 7)
*Rencana Aksi dan Pengendalian Risiko Penerapan di Lapangan:*
* **Kolom 1: Strategi Hybrid & Bertahap (Modul 6)**
  * Pelatihan internal pustakawan & penataan rak transit lebih dulu (Fase 1), baru sosialisasi Form QR bertahap ke mahasiswa (Fase 2).
* **Kolom 2: Manajemen Perubahan & Mitigasi Resistensi (Modul 6)**
  * Mencegah beban kerja ganda pustakawan melalui *Quiet Hour* (loket tutup sementara 30–60 menit).
  * Mencegah kemalasan pemustaka lapor dengan form QR super singkat (<1 menit) dan petunjuk visual jelas.
* **Kolom 3: Urutan & Jalur Kritis 36 Hari (Modul 7)**
  * Analisis ketergantungan informasi: Form QR & SOP harus selesai terlebih dahulu sebelum rak transit dapat dioperasikan.
  * Jalur kritis (*Critical Path*): 36 hari kerja dari penyusunan dokumen hingga evaluasi penuh.

---

### Slide 12: Penutup
* **Judul:** THANK YOU — For Your Attention!
* **Penyusun:** Disiapkan oleh Kelompok 3 PTI F1 (Gantar, Ganendra, Fadlan)
* **Keterangan:** Sesi Tanya Jawab & Demonstrasi Artefak Pendukung (Buku Pedoman SOP Word, Diagram Alur, dan Template Rekapitulasi).
