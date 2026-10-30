---
id: INS-010
title: "Instrumen Validasi Mockup Sistem Informasi bersama Pemangku Kepentingan"
type: instrument
project: MSI
status: ready-for-testing
source_type: academic
tags:
  - msi
  - modul-10
  - instrumen-validasi
  - skenario-keputusan
  - perpustakaan-ft-uny
---

# INSTRUMEN KOMPREHENSIF VALIDASI MOCKUP SISTEM INFORMASI
## PENGUJIAN KELAYAKAN TATA KELOLA DAN PENGAMBILAN KEPUTUSAN "SIMPEL-KOLEKSI FT UNY"
**Mata Kuliah:** Praktik Manajemen Sistem Informasi (PTF60234)  
**Dosen Pengampu:** Dr. Ratna Wardani, S.Si., M.T.  
**Penyusun:** Kelompok 3 (Gantar Abimanyu, Ganendra Pradipa, M. Fadlan Dirmansyah)  
**Artefak Mockup yang Diuji:** `08_ARTEFAK/mockup-3/` (`index.html` dan `layanan.html`)  

---

## 📌 PANDUAN PELAKSANAAN BAGI PENGUJI (KELOMPOK 3)

1. **Peran Tim:**
   - **Pemandu (Moderator):** Memandu narasumber membaca skenario keputusan dan mendemonstrasikan tampilan mockup pada laptop/ponsel pintar.
   - **Pencatat (Notulis):** Mencatat seluruh ucapan verbal, reaksi keraguan, skor penilaian (1-5), alasan spesifik, serta estimasi angka manfaat.
2. **Prinsip Utama Pengujian Sesuai Modul 10:**
   - Jangan sekadar menanyakan *"Apakah tampilannya bagus?"*. Fokus utama adalah *"Apakah informasi pada layar ini memungkinkan Bapak/Saudara mengambil keputusan secara tepat dan mengatasi masalah organisasi?"*.
   - Setiap skor wajib disertai alasan konkret dan identifikasi hal yang masih kurang.
3. **Persiapan Perangkat:**
   - Siapkan **Laptop** membuka `08_ARTEFAK/mockup-3/index.html` (untuk sesi Meja Kerja Pustakawan & Dekanat).
   - Siapkan **Ponsel Pintar** membuka `08_ARTEFAK/mockup-3/layanan.html` (untuk sesi Mahasiswa Pemustaka).

---

## 📋 LEMBAR IDENTITAS RESPONDEN

- **Nama Responden:** __________________________________________________
- **Nomor Induk (NIM / NIP):** __________________________________________________
- **Peran Pemangku Kepentingan:**
  - [ ] **Pustakawan Pengelola Tunggal (Pak Danar)** — *Tingkat Operasional*
  - [ ] **Mahasiswa Pemustaka FT UNY** — *Tingkat Operasional*
  - [ ] **Dosen / Tim Akreditasi Borang / Pimpinan Fakultas** — *Tingkat Manajerial & Strategis*
- **Sifat Pengujian:**
  - [ ] Pemangku Kepentingan Nyata Lapangan (Perpustakaan FT UNY)
  - [ ] Simulasi Peran (*Role-play Simulation*) bersama Teman Sebaya
- **Waktu Pelaksanaan:** Hari/Tanggal: ___________________, Pukul: _______ WIB

---

## 📱 SESI 1: PENGUJIAN MAHASISWA PEMUSTAKA (PORTAL STIKER QR)
*Perangkat Uji: Ponsel Pintar (`layanan.html`)*

### 1.1. Tangkapan Layar Uji 1: Portal Layanan Mandiri Tanpa Login
*(Tunjukkan antarmuka awal `layanan.html` yang menampilkan 2 pilihan tombol utama)*

* **Skenario Keputusan K-MHS-01 (Kemandirian Akses):**  
  *"Saat Anda sedang belajar di meja baca dan mendapati buku yang Anda baca sobek atau terlepas sampulnya, Anda memindai stiker QR di meja. Memperhatikan layar di depan Anda, apakah ketiadaan menu login memudahkan Anda untuk langsung melapor tanpa hambatan lupa kata sandi akun SSO?"*  
  - [ ] Sangat memudahkan, alur langsung ke inti masalah.  
  - [ ] Biasa saja.  
  - [ ] Lebih suka login akun SSO UNY terlebih dahulu.  
  *Alasan Responden:* __________________________________________________________

### 1.2. Tangkapan Layar Uji 2: Formulir Lapor Buku Rusak & Diagram Rak Transit
*(Tunjukkan formulir 4 kolom isian dan diagram visual peletakan buku di Rak Transit Tingkat 2)*

* **Skenario Keputusan K-MHS-02 (Ketepatan Peletakan Fisik Buku):**  
  *"Setelah mengisi barcode dan kategori kerusakan pada formulir, perhatikan diagram fisik di bawahnya. Apakah petunjuk visual tersebut membuat Anda tahu pasti ke mana fisik buku harus diserahkan agar tidak hilang atau tercampur dengan buku sehat?"*  
  - [ ] Sangat jelas, buku diletakkan pada Rak Transit Tingkat 2 di dekat meja loket.  
  - [ ] Kurang jelas, masih ada keraguan lokasi penyerahan.  
  - [ ] Tidak paham maksud diagram tersebut.  
  *Dasar Informasi pada Layar:* __________________________________________________

* **Pengujian Kondisi Khusus / Validasi Galat (Error State):**  
  *(Instruksikan mahasiswa mengosongkan kolom barcode lalu menekan tombol Kirim)*  
  *"Saat kolom barcode dikosongkan dan tombol kirim ditekan, muncul pesan peringatan warna merah tanpa menghapus data nama dan NIM yang sudah Anda ketik. Apakah penanganan eror ini memudahkan Anda memperbaiki kesalahan tanpa mengulang dari awal?"*  
  - [ ] Ya, sangat membantu mempertahankan data yang sudah diisi.  
  - [ ] Kurang terlihat peringatannya.  
  *Catatan Masukan:* __________________________________________________________

### 1.3. Penilaian Elemen Masalah oleh Mahasiswa (Skala 1–5)
*(Skala: 1 = Tidak Mengatasi, 2 = Mengatasi Sedikit, 3 = Mengatasi Sebagian, 4 = Mengatasi Sebagian Besar, 5 = Mengatasi Sepenuhnya)*

| No | Elemen Masalah yang Diuji | Skor (1-5) | Alasan Penilaian | Hal yang Masih Kurang |
| :-: | :--- | :---: | :--- | :--- |
| **M1** | Keengganan mahasiswa melapor buku rusak karena antrean loket sirkulasi yang padat | [ ... ] | | |
| **M2** | Buku yang terselip salah rak dibiarkan begitu saja di meja baca tanpa tindak lanjut | [ ... ] | | |
| **M3** | Ketergantungan menghubungi WhatsApp pribadi pustakawan untuk perpanjangan buku | [ ... ] | | |

---

## 💻 SESI 2: PUSTAKAWAN TUNGGAL (KOMPUTER MEJA SIRKULASI)
*Perangkat Uji: Laptop / PC Meja Sirkulasi (`index.html`)*

### 2.1. Tangkapan Layar Uji 3: Login Pustakawan & Meja Kerja Sidebar
*(Tunjukkan form login resmi pustakawan dan tombol akses instan Mode Demo)*

* **Skenario Keputusan K-PUS-01 (Pemisahan Otoritas & Keamanan Akses):**  
  *"Sebagai satu-satunya pengelola perpustakaan fakultas, apakah pemisahan pintu masuk ini (petugas wajib login, mahasiswa bebas login) memberi kepastian keamanan bahwa data inventaris tidak dapat diubah oleh pengunjung sembarangan?"*  
  - [ ] Sangat aman dan sesuai dengan pemisahan tugas (*segregation of duties*).  
  - [ ] Cukup aman.  
  - [ ] Kurang aman.  
  *Alasan Penilai:* __________________________________________________________

### 2.2. Tangkapan Layar Uji 4: Dasbor Antrean & Indikator Kepatuhan SLA 3 Hari
*(Tunjukkan tabel antrean tiket, label warna hijau/kuning/merah, dan lencana status SLiMS)*

* **Skenario Keputusan K-PUS-02 (Prioritas Pemilahan Buku Berdasarkan Batas Waktu):**  
  *"Memperhatikan tabel antrean laporan buku rusak di layar, terdapat tiket dengan label merah (lewat batas 3 hari) dan label kuning. Buku mana yang Bapak putuskan untuk diambil dari Rak Transit dan diservis terlebih dahulu pada sesi jam kerja hari ini? Apa informasi di layar yang menjadi dasarnya?"*  
  *Nomor Tiket yang Dipilih:* __________________________________________________  
  *Dasar Informasi pada Layar:* __________________________________________________  
  *Ketepatan Keputusan (Dinilai Penguji):* [ ] Tepat [ ] Kurang Tepat  

* **Pengujian Fitur Proteksi Waktu (Timer Quiet Hour 60 Menit):**  
  *(Tunjukkan tombol 'Mulai Quiet Hour' di pojok atas layar yang memicu hitungan mundur 60:00)*  
  *"Apakah tersedianya tombol timer 60 menit ini membantu melegitimasi waktu fokus Bapak untuk input data ke SLiMS tanpa terinterupsi pengunjung loket?"*  
  - [ ] Sangat membantu, memberikan batas waktu kerja terfokus yang jelas.  
  - [ ] Membantu sebagian, tetapi butuh papan pengumuman fisik di loket.  
  - [ ] Tidak berpengaruh.  
  *Alasan & Masukan:* __________________________________________________________

### 2.3. Tangkapan Layar Uji 5: Modal Verifikasi Fisik & Integrasi SLiMS
*(Tunjukkan modal dialog verifikasi dengan 2 kotak checklist yang wajib dicentang)*

* **Skenario Keputusan K-PUS-03 (Pencegahan Penyelesaian Prematur / Internal Control):**  
  *(Minta pustakawan menekan tombol 'Selesaikan Tiket' sebelum mencentang checklist)*  
  *"Ketika tombol bergetar dan menolak menutup tiket sebelum Bapak mencentang konfirmasi fisik di Rak Transit dan pemutakhiran di SLiMS, apakah aturan sistem ini memudahkan Bapak menjaga kebenaran data katalog agar tidak ada data palsu?"*  
  - [ ] Sangat memudahkan dan mendisiplinkan pencatatan status buku.  
  - [ ] Agak kaku, tetapi logis demi integritas data.  
  - [ ] Terlalu merepotkan.  
  *Tanggapan Pustakawan:* ______________________________________________________

* **Skenario Keputusan K-PUS-04 (Pemberian Perpanjangan Pinjam Cepat):**  
  *(Buka menu Perpanjangan Pinjam SLiMS dan tunjukkan tombol 'Salin & Eksekusi SLiMS')*  
  *"Saat ada permohonan perpanjangan dari mahasiswa di menu ini, Bapak menekan tombol 'Salin Barcode' lalu menempelkannya ke modul sirkulasi SLiMS lokal. Apakah alur ini menyelesaikan masalah gangguan chat WhatsApp pribadi mahasiswa?"*  
  - [ ] Mengatasi sepenuhnya, data perpanjangan terkumpul rapi di satu meja kerja.  
  - [ ] Mengatasi sebagian, masih ada mahasiswa yang kemungkinan tetap mengirim pesan WA.  
  - [ ] Tidak mengatasi.  
  *Alasan:* ____________________________________________________________________

### 2.4. Penilaian Elemen Masalah oleh Pustakawan (Skala 1–5)

| No | Elemen Masalah yang Diuji | Skor (1-5) | Alasan Penilaian | Hal yang Masih Kurang |
| :-: | :--- | :---: | :--- | :--- |
| **M4** | Keterlambatan pemutakhiran status ketersediaan buku di katalog OPAC SLiMS | [ ... ] | | |
| **M5** | Penumpukan fisik buku rusak dan salah susun di atas meja kerja loket sirkulasi | [ ... ] | | |
| **M6** | Gangguan beban komunikasi pesan WhatsApp mahasiswa di luar jam kerja operasional | [ ... ] | | |
| **M7** | Ketiadaan perlindungan waktu kerja administratif bagi pustakawan tunggal | [ ... ] | | |

---

## 📊 SESI 3: TINGKAT MANAJERIAL & STRATEGIS (TIM AKREDITASI & DEKANAT)
*Perangkat Uji: Laptop (`index.html` - Menu Request Referensi & Grafik Keterpakaian)*

### 3.1. Tangkapan Layar Uji 6: Dasbor Keterpakaian Koleksi & Tombol Ekspor CSV Borang
*(Tunjukkan grafik batang pemanfaatan koleksi 5 prodi teknik dan tombol `Unduh CSV Borang Akreditasi`)*

* **Skenario Keputusan K-STR-01 (Alokasi Belanja Buku Baru Berbasis Bukti):**  
  *"Memperhatikan grafik perbandingan keterpakaian koleksi 5 program studi di layar, program studi mana yang Bapak/Ibu putuskan untuk diberikan penambahan porsi belanja buku teks baru pada anggaran tahun depan? Apa dasar datanya?"*  
  *Program Studi yang Dipilih:* __________________________________________________  
  *Dasar Informasi pada Layar:* __________________________________________________  
  *Ketepatan Keputusan (Dinilai Penguji):* [ ] Tepat [ ] Kurang Tepat  

* **Skenario Keputusan K-MAN-01 (Pemenuhan Bukti Audit Akreditasi LAM-INFOKOM Kriteria 5):**  
  *(Minta narasumber mengklik tombol 'Unduh CSV Borang Kriteria 5')*  
  *"Saat berkas CSV terunduh ke komputer dalam hitungan detik berisi daftar judul buku, nomor panggil, dan rasio pemanfaatan, apakah fitur ini memudahkan tim akreditasi menyusun borang tanpa membebani pustakawan berhari-hari?"*  
  - [ ] Sangat memudahkan, data siap pakai (*audit-ready*).  
  - [ ] Cukup membantu, tetapi format kolom perlu disesuaikan dengan template terbaru LAM-INFOKOM.  
  - [ ] Kurang membantu.  
  *Catatan Kebutuhan Kolom Tambahan:* __________________________________________

### 3.2. Penilaian Elemen Masalah Manajerial & Strategis (Skala 1–5)

| No | Elemen Masalah yang Diuji | Skor (1-5) | Alasan Penilaian | Hal yang Masih Kurang |
| :-: | :--- | :---: | :--- | :--- |
| **M8** | Ketiadaan data agregat usulan buku dari mahasiswa untuk pertimbangan belanja fakultas | [ ... ] | | |
| **M9** | Lambatnya penyediaan bukti fisik data perpustakaan untuk audit akreditasi program studi | [ ... ] | | |

---

## 🔍 SESI 4: PENGGALIAN CELAH TATA KELOLA & ADOPSI (DI LUAR SISTEM)
> *Modul 10 menegaskan bahwa celah tata kelola dan celah adopsi tidak dapat diselesaikan melalui perubahan kode aplikasi semata, melainkan menuntut intervensi kebijakan organisasi.*

1. **Celah Tata Kelola (*Governance Gap*):**  
   *"Agar mahasiswa tidak sembarangan meninggalkan buku rusak di meja baca dan bersedia menaruhnya di Rak Transit Tingkat 2, instrumen kebijakan apa yang wajib diterbitkan pimpinan fakultas?"*  
   - [ ] Surat Keputusan (SK) Dekan tentang Standar Operasional Prosedur (SOP) Sirkulasi Mandiri.  
   - [ ] Surat Edaran Pengenaan Sanksi Penonaktifan Kartu Pinjam bagi yang melanggar.  
   - [ ] Sosialisasi resmi saat Pelatihan Pemustaka Mahasiswa Baru.  
   *Uraian Tanggapan Responden:* ________________________________________________

2. **Celah Adopsi (*Adoption Gap*):**  
   *"Apakah pustakawan tunggal merasa terbebani jika setiap hari Jumat harus memverifikasi laporan di sistem ini, ataukah justru merasa tertolong?"*  
   - Tanggapan Responden: _______________________________________________________  
   *"Apa potensi keengganan mahasiswa menggunakan stiker QR di meja baca?"*  
   - Tanggapan Responden: _______________________________________________________  

3. **Celah Keamanan Fisik Buku di Rak Transit:**  
   *"Apakah ada kekhawatiran buku rusak yang diletakkan mahasiswa di Rak Transit Tingkat 2 diambil atau dipinjam paksa oleh mahasiswa lain sebelum diverifikasi petugas? Bagaimana solusinya?"*  
   - Tanggapan Responden: (Contoh: Penempatan rak tepat di samping loket pustakawan atau penambahan kamera CCTV)  
   ____________________________________________________________________________

---

## 📈 SESI 5: ESTIMASI MANFAAT PEMANGKU KEPENTINGAN (BAHAN ANALISIS ROI MODUL 12)
> *Mintalah narasumber memperkirakan penghematan waktu dan biaya operasional secara rasional berdasarkan pengalaman kerja nyata.*

| No | Indikator Manfaat Organisasi | Kondisi Eksisting (Sebelum Ada Sistem) | Estimasi Pasca Sistem Diterapkan | Dasar / Pengalaman Penilai | Tingkat Keyakinan (Rendah / Sedang / Tinggi) |
| :-: | :--- | :--- | :--- | :--- | :---: |
| **1** | Waktu pencarian & pemilahan fisik buku rusak di rak koleksi | Rata-rata ...... jam/minggu | Turun menjadi ...... jam/minggu | Pengalaman patroli rak mingguan | [ ... ] |
| **2** | Keterlambatan pembaruan status buku rusak di SLiMS | Tertunda ...... hari kerja | Tuntas dalam waktu ...... menit di sesi Jam Tenang | Siklus penumpukan buku di meja sirkulasi | [ ... ] |
| **3** | Waktu penanganan chat perpanjangan pinjam di WhatsApp | Rata-rata ...... menit/hari | Turun menjadi ...... menit/hari | Volume chat masuk setiap jam kerja | [ ... ] |
| **4** | Waktu penyiapan rekap sirkulasi untuk Borang Akreditasi | Membutuhkan waktu ...... hari | Instan diunduh dalam ...... menit | Pengalaman audit akreditasi periode lalu | [ ... ] |
| **5** | Estimasi efisiensi anggaran belanja buku (mencegah salah beli judul) | Potensi salah beli ...... judul/tahun | Akurasi usulan meningkat ...... % | Evaluasi serapan pagu belanja buku tahunan | [ ... ] |

---

## ✍️ CATATAN PENUTUP & KELAYAKAN UMUM SISTEM
*(Pertanyaan singkat penutup sesi validasi)*

1. *"Secara keseluruhan, apakah rancangan sistem SIMPEL-KOLEKSI FT ini sudah layak diajukan kepada Dekanat FT UNY untuk diimplementasikan secara resmi?"*  
   - [ ] Sangat Layak tanpa catatan mayor  
   - [ ] Layak dengan catatan perbaikan minor  
   - [ ] Belum Layak (perlu perombakan mendasar)  
2. **Catatan Rekomendasi Paling Kritis dari Responden:**  
   ____________________________________________________________________________  
   ____________________________________________________________________________  

**Tanda Tangan / Persetujuan Responden:**  



( ____________________________________ )
