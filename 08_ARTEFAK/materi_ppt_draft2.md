# Materi & Panduan Slide Presentasi Responsi MSI — Draft 2 (Opsi A: 4-Fase Evolusi + As-Is vs To-Be + Repository Log)
## Rekayasa Tata Kelola Sirkulasi Koleksi dan Perlindungan Waktu Kerja Pustakawan Tunggal
### Ekosistem SIMPEL-KOLEKSI | UPT Perpustakaan Fakultas Teknik Universitas Negeri Yogyakarta

> **Panduan Akademik Kelompok 3:**  
> 1. **Gantar Abimanyu** (NIM 24050530042) – *Lead Coordinator, Analisis Sosio-Teknis, Tata Kelola & Vertical Alignment*  
> 2. **Ganendra Pradipa** (NIM 24050530038) – *Rekayasa Alur Proses (As-Is vs To-Be), Fasilitas Fisik Rak Transit & 10 SOP A4*  
> 3. **M. Fadlan Dirmansyah** (NIM 24050530034) – *Operasional SLiMS, Meja Kerja Mockup-4, Validasi Modul 10 & Repository Log*  
> 
> **Catatan Versi:** File ini adalah **Draft Materi 2** yang disusun terpisah dari [`materi_ppt.md`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/materi_ppt.md) (Draft 1 tidak diubah). Draft 2 mengintegrasikan alur evolusi **Modul 1–10 + Fase Finalisasi**, visual **Fishbone 4M**, **Matriks RACI**, **Perbandingan Alur Sebelum vs Sesudah Perubahan (*As-Is* vs *To-Be*)**, dan **Repository Log Pengerjaan**.

---

# BAGIAN I: CETAK BIRU SLIDE PPT RESPONSI (4-FASE EVOLUSI + LOG REPOSITORI)

Struktur ini memadatkan perjalanan lengkap **Modul 1 hingga Modul 10 + Finalisasi** ke dalam **10 Slide Terstruktur** (estimasi durasi **10–12 menit**) agar proses berpikir ilmiah, perubahan alur kerja, dan bukti artefak tampil utuh tanpa terasa seperti membaca daftar isi laporan.

```mermaid
flowchart LR
    S1["Slide 1\nJudul & Realitas Lapangan"] --> S2["Slide 2 (Fase 1: M1-M3)\nFishbone 4M & 5-Whys"]
    S2 --> S3["Slide 3 (Fase 2: M4-M6)\nPure Governance & RACI"]
    S3 --> S4["Slide 4 (BPR Inti)\nAlur Sebelum (As-Is) vs Sesudah (To-Be)"]
    S4 --> S5["Slide 5 (Fase 3: M7-M8)\nJalur Kritis 36 Hari & 10 SOP A4"]
    S5 --> S6["Slide 6 (Fase 3: M9)\nKanal Pemustaka (layanan.html)"]
    S6 --> S7["Slide 7 (Fase 3: M9-M10)\nMeja Kerja Pustakawan (Mockup-4)"]
    S7 --> S8["Slide 8 (Penyelarasan)\nVertical Alignment & LAM-INFOKOM"]
    S8 --> S9["Slide 9 (Fase 4: M10)\nValidasi 7 Responden & Before-After"]
    S9 --> S10["Slide 10 (Jejak Kerja)\nRepository Log Pengerjaan & Penutup"]
```

---

### Slide 1: Judul & Realitas Empiris Lapangan (Modul 1–2)
* **Alokasi Waktu:** Menit 00:00 – 01:00 (60 Detik)
* **Presenter:** Gantar Abimanyu
* **Tata Letak Visual Slide:**
  * **Judul Utama:** Rekayasa Tata Kelola Sirkulasi Koleksi dan Perlindungan Waktu Kerja Pustakawan Tunggal melalui Ekosistem SIMPEL-KOLEKSI FT UNY.
  * **Identitas Tim:** Kelompok 3 – Pendidikan Teknik Informatika FT UNY (Gantar, Ganendra, Fadlan).
  * **3 Kartu Fakta Empiris (Observasi & Wawancara Pustakawan Pak Danar / Abdul):**
    1. *Rasio SDM Ekstrem:* **1 Pustakawan Fungsional Tunggal** (dibantu 1 staf paruh waktu) melayani **>3.000 mahasiswa aktif** dari 6 jurusan / 13 prodi teknik.
    2. *Interupsi Meja Loket:* Rata-rata **52 transaksi tatap muka per hari** (sirkulasi, referensi, dan digital library).
    3. *Gejala di Lapangan:* Buku rusak menumpuk di lantai/bawah meja loket, buku terselip (*misplaced*) di lorong rak, dan status ketersediaan di OPAC **SLiMS 9 Bulian** tidak sinkron dengan fisik rak.
* **Naskah Lisan Resmi (Verbatim):**
  > "Selamat pagi Ibu Ratna dan Bapak/Ibu Penguji. Proyek kami berangkat dari observasi empiris dan wawancara lapangan pada Modul 1–2 di UPT Perpustakaan Fakultas Teknik UNY. Perpustakaan melayani lebih dari 3.000 mahasiswa aktif dengan rata-rata 52 transaksi tatap muka per hari, namun operasional harian meja sirkulasi hanya ditangani oleh satu orang pustakawan fungsional tunggal. Akibatnya, input pemutakhiran data ke sistem SLiMS 9 Bulian sering tertunda oleh antrean fisik, memicu penumpukan buku rusak dan ketidaksinkronan status buku di katalog OPAC."

---

### Slide 2: Fase 1 — Bedah Akar Masalah: Diagram Fishbone 4M & 5-Whys (Modul 3)
* **Alokasi Waktu:** Menit 01:00 – 02:15 (75 Detik)
* **Presenter:** Gantar Abimanyu
* **Tata Letak Visual Slide:**
  * **Diagram Ishikawa (Fishbone 4M) Perpustakaan FT UNY:**
    ```mermaid
    graph LR
        subgraph MAN["Man (SDM)"]
            M1["1 Pustakawan Tunggal (SPOF)"]
            M2["Rangkap 3 fungsi layanan sekaligus"]
        end
        subgraph METHOD["Method (Prosedur)"]
            ME1["Belum ada jadwal proteksi input (Quiet Hour)"]
            ME2["Laporan rusak tercecer via WA & lisan"]
        end
        subgraph MACHINE["Machine (Sistem)"]
            MC1["SLiMS 9 Bulian sehat, tapi input manual loket"]
            MC2["Belum ada jembatan laporan mandiri & ekspor borang"]
        end
        subgraph MATERIAL["Material (Tata Ruang)"]
            MA1["Buku kembali menumpuk di meja loket"]
            MA2["Belum ada Rak Transit & Signage alur"]
        end

        MAN --> ROOT["AKAR MASALAH UTAMA:\nDisparitas Data Sirkulasi SLiMS &\nHambatan Bukti Borang Akreditasi"]
        METHOD --> ROOT
        MACHINE --> ROOT
        MATERIAL --> ROOT
    ```
  * **Alur Diagnosis 3 Kolom: Gejala Terpadu $\rightarrow$ Mekanisme $\rightarrow$ Akar Masalah (Siap Masuk 1 Slide PPT):**

    | 1. GEJALA (*Symptoms*)<br>*(Gabungan Eksplisit & Implisit)* | $\longrightarrow$ | 2. MEKANISME (*Mechanism*)<br>*(Proses Penyebab di Lapangan)* | $\longrightarrow$ | 3. AKAR MASALAH (*Root Causes*)<br>*(Kondisi Tata Kelola Sistem)* |
    | :--- | :---: | :--- | :---: | :--- |
    | • **OPAC vs Rak Tidak Sinkron:** Tertulis *"Tersedia"* di SLiMS, tapi fisik buku rusak, terselip, atau menumpuk di loket.<br>• **Laporan Tercecer:** Masuk via lisan, WA pribadi, & memo kertas tanpa rekam jejak (*audit trail*).<br>• **Data Akreditasi Tertinggal:** Rekap **LAM-INFOKOM Kriteria 5** & usulan buku **Dekanat** berisiko bias (*lagging*). | $\longrightarrow$ | • **Beban 3 Fungsi pada 1 Staf:** 1 pustakawan melayani **52 transaksi tatap muka/hari** (sirkulasi, referensi, *digilib*).<br>• **Interupsi Konstan Loket:** Antrean fisik memotong fokus verifikasi buku & entri SLiMS (*context switching*).<br>• **Update Bersifat Insidental:** Input SLiMS ditunda menunggu jam sepi tanpa kepastian SLA. | $\longrightarrow$ | *(Constraint: 1 Pustakawan Tunggal)*<br>1. **Ketiadaan SOP & Jadwal Fokus:** Belum ada aturan baku, SLA, & *Quiet Hour*.<br>2. **Saluran Laporan Belum Terpusat:** Belum ada form mandiri standar.<br>3. **Ketiadaan *Buffer Zone* Fisik:** Belum ada Rak Transit (`RACK-001`).<br>4. **Ketiadaan Monitoring Status:** Belum ada log tindak lanjut & template ekstraksi. |

  * **Simpulan 1 Kalimat Akar Masalah Sistemik (Highlight Box PPT):**
    > *"Belum terdapat tata kelola alur kerja terpadu (SOP pemutakhiran terfokus, kanal pelaporan mandiri terpusat, buffer zone rak transit fisik, dan audit trail penyelesaian) yang adaptif terhadap kapasitas pustakawan tunggal."*
* **Naskah Lisan Resmi (Verbatim):**
  > "Pada Modul 3, kami membedah masalah melalui alur Gejala, Mekanisme, hingga Akar Masalah. Gejala utamanya terlihat dari status buku di OPAC yang tidak sinkron dengan fisik rak, laporan kerusakan yang tercecer di WA atau lisan, hingga tertundanya data rekap akreditasi. Mekanisme penyebabnya adalah interupsi konstan 52 transaksi per hari pada satu pustakawan tunggal yang merangkap tiga layanan, sehingga update SLiMS selalu tertunda menunggu jam sepi. Dengan memosisikan 1 pustakawan sebagai batasan operasional, kami menemukan empat akar masalah tata kelola: ketiadaan SOP dan jadwal fokus, belum adanya kanal pelaporan terpusat, ketiadaan rak transit fisik, serta belum adanya monitoring tindak lanjut."

---

### Slide 3: Fase 2 — Strategi *Pure Governance* & Matriks RACI (Modul 4–6)
* **Alokasi Waktu:** Menit 02:15 – 03:30 (75 Detik)
* **Presenter:** Gantar Abimanyu
* **Tata Letak Visual Slide:**
  * **Keputusan Ruang Lingkup (*Pure Governance* vs Koding Baru):**
    * **Menolak *Build* Aplikasi Pengganti SLiMS:** Mencegah duplikasi database, izin berbelit ke UPT TIK, dan beban belajar ganda bagi pustakawan tunggal.
    * **Memilih *Configure* + *Pure Governance*:** Mempertahankan SLiMS 9 Bulian sebagai *Single Source of Truth* (*Zero-Touch Infrastructure*), ditopang SOP resmi, Rak Transit, dan portal pendamping ringan.
  * **Matriks Akuntabilitas RACI (Dari Buku Pedoman SOP Bab II — Prinsip *Single Accountable*):**

    | Kode | Aktivitas Tata Kelola | Pemustaka | Pustakawan | Kepala Perpus | Wadek I |
    | :--- | :--- | :---: | :---: | :---: | :---: |
    | **ACT-01** | Pelaporan kerusakan koleksi via Stiker QR | **R** | **A** | I | I |
    | **ACT-02** | Peletakan fisik buku di Rak Transit Tk. 2 | **R** | **A** | I | - |
    | **ACT-03** | Pelaksanaan *Quiet Hour* 60 menit/minggu | I | **A / R** | C | I |
    | **ACT-04** | Triase fisik buku rusak (3-Jalur) | - | **A / R** | C | - |
    | **ACT-05** | Eksekusi massal perpanjangan di SLiMS | I | **A / R** | I | - |
    | **ACT-06** | Rekap usulan & cetak Disposisi Kop FT | I | **R** | C | **A** |
    | **ACT-07** | Pengesahan disposisi pagu anggaran referensi | - | C | I | **A / R** |
    | **ACT-08** | Ekstraksi log sirkulasi Borang LAM-INFOKOM | - | **R** | **A** | I |

* **Naskah Lisan Resmi (Verbatim):**
  > "Memasuki Modul 4 hingga 6, kami menetapkan solusi berlandaskan doktrin Pure Governance. Alih-alih membangun aplikasi katalog tandingan yang membebani UPT TIK dan pustakawan, kami mempertahankan SLiMS sebagai Single Source of Truth dan menata ulang hak keputusan melalui Matriks RACI. Setiap aktivitas dari pelaporan mahasiswa hingga pengesahan anggaran Wakil Dekan I memiliki satu pemegang tanggung jawab tunggal atau Single Accountable agar tidak terjadi saling lempar tanggung jawab."

---

### Slide 4: Rekayasa Alur Proses — Sebelum Perubahan (*As-Is*) vs Sesudah Perubahan (*To-Be*)
* **Alokasi Waktu:** Menit 03:30 – 05:00 (90 Detik)
* **Presenter:** Ganendra Pradipa
* **Tata Letak Visual Slide:**
  * **Diagram Komparasi Alur Kerja End-to-End:**
    ```mermaid
    flowchart LR
        subgraph ASIS["ALUR SEBELUM PERUBAHAN (AS-IS)"]
            A1["1. Lapor WA/Lisan &\nTumpuk Buku di Meja Loket"] --> A2["2. Antre Perpanjangan &\nInterupsi Pustakawan"]
            A2 --> A3["3. Input SLiMS 1-per-1\nTertunda (Click-Fatigue)"]
            A3 --> A4["4. Buku Usang Menumpuk &\nData Borang Tidak Sinkron"]
        end

        subgraph TOBE["ALUR SESUDAH PERUBAHAN (TO-BE — SIMPEL-KOLEKSI)"]
            T1["1. Scan QR Mandiri (layanan.html)\n& Taruh di Rak Transit RACK-001"] --> T2["2. Validasi Inline Preservasi &\nLacak Tiket Mandiri"]
            T2 --> T3["3. Quiet Hour Jumat 08.00-09.00\n+ Batch SLiMS & Triase 3-Opsi"]
            T3 --> T4["4. Audit Weeding SOP-006 &\nDisposisi Resmi Kop FT UNY"]
        end
    ```
  * **Tabel Komparasi Mekanisme Sebelum (*As-Is*) vs Mekanisme Sesudah (*To-Be*):**

    | Dimensi Proses | Mekanisme Sebelum Perubahan (*As-Is*) | Mekanisme Sesudah Perubahan (*To-Be* — SIMPEL-KOLEKSI) | Dampak Perbaikan Proses |
    | :--- | :--- | :--- | :--- |
    | **1. Pelaporan & Triase Buku Rusak** | Lapor via lisan/WA pribadi/memo; buku rusak menumpuk di bawah meja loket tanpa kejelasan tindak lanjut. | Mahasiswa scan **QR Mandiri (`FORM-001`)** + taruh fisik buku di **Rak Transit Tk. 2 (`RACK-001`)** $\rightarrow$ Pustakawan jalankan **Triase 3-Opsi (`SOP-004`)**. | Meja loket bebas tumpukan; verifikasi fisik tuntas sesuai **SLA $\le 3$ hari** & update SLiMS **$\le 7$ hari**. |
    | **2. Perpanjangan Pinjam & Waktu Kerja** | Mahasiswa wajib antre di loket bawa buku; pustakawan terinterupsi 52x/hari & input SLiMS 1-per-1 saat jam sepi. | Ajuan daring mandiri (+7 hari) $\rightarrow$ **Eksekusi Massal (*Batch Selection*) pk 08.30 WIB** + proteksi **`SOP-001 Quiet Hour` (Jumat 08.00–09.00)**. | Menghilangkan antrean loket & *click-fatigue*; waktu pemutakhiran SLiMS terlindungi resmi. |
    | **3. Kurasi Buku Usang (*Weeding*)** | Buku teknik terbitan >10 tahun & sirkulasi `0x` dibiarkan memenuhi rak karena belum ada penyaringan berkala. | **Asisten Penyiangan (`SOP-006`)** memfilter otomatis tahun terbit (< 2016 / < 2011) & semester dorman ($\ge 4 / \ge 8$ smtr) $\rightarrow$ **Berita Acara BMN**. | Ruang rak efisien; koleksi kedaluwarsa langsung terdeteksi dan dialirkan ke usulan buku pengganti P1. |
    | **4. Monitoring, Akreditasi, & Anggaran** | Tanpa *audit trail*; usulan buku menunggu surat tahunan prodi; rekap **LAM-INFOKOM Kriteria 5** lambat & manual. | Log tiket terekam terpusat; ekstraksi CSV SLiMS via **`TMP-001`**; usulan 24/7 (P1/P2/P3) dicetak jadi **Lembar Disposisi Ber-Kop FT UNY** (`SOP-005`). | Data akreditasi Kriteria 5 akurat & siap audit; pengesahan anggaran **Wadek I** berbasis bukti riil. |
* **Naskah Lisan Resmi (Verbatim):**
  > "Slide ini memperlihatkan inti rekayasa proses bisnis kami: perbandingan alur sebelum dan sesudah intervensi SIMPEL-KOLEKSI. Sebelum perubahan, seluruh keluhan, pengembalian, dan perpanjangan bertumpuk di meja loket sehingga memicu kelelahan klik dan penundaan input SLiMS. Sesudah perubahan, beban pencatatan awal dialihkan ke pemustaka melalui QR dan Rak Transit RACK-001, sementara pustakawan memprosesnya secara massal pada jam tenang yang terproteksi."

---

### Slide 5: Fase 3 — Jadwal Jalur Kritis 36 Hari (Modul 7) & Buku 10 SOP A4 (Modul 8)
* **Alokasi Waktu:** Menit 05:00 – 06:00 (60 Detik)
* **Presenter:** Ganendra Pradipa
* **Tata Letak Visual Slide:**
  * **Penjadwalan Implementasi (*Phased Implementation* — Modul 7):**
    * Memilih implementasi **Bertahap (*Phased*)** daripada *Big Bang* agar layanan harian 1 pustakawan tidak lumpuh.
    * **Jalur Kritis (*Critical Path*):** **36 Hari Kerja Efektif** (`Slack = 0`) pada lintasan kesepakatan sosial: *Penyusunan & Pengesahan SOP $\rightarrow$ Pengadaan Fisik Rak Transit & QR $\rightarrow$ Sosialisasi & Rekonsiliasi Awal SLiMS*.
  * **Kodifikasi Regulasi: Buku Pedoman 10 SOP A4 (`SOP/FT-UNY/PERPUS/2026/001`, Permenpan-RB 35/2012):**
    * **Inti Operasional:** `SOP-001` (*Quiet Hour* Jumat 08.00–09.00), `SOP-002` (Rak Transit), `SOP-003` (QR Mandiri), `SOP-004` (Triase 3-Opsi), `SOP-005` (Disposisi & LAM-INFOKOM), `SOP-006` (*Weeding* BMN).
    * **Mitigasi Pengecualian (*Exception Path*):** `SOP-007` (Rollover SIAKAD), `SOP-008` (Kontingensi Mati Listrik <= 120 menit), `SOP-009` (Supervisi Magang `DRAFT_INTERN`), `SOP-010` (Pemeliharaan Akrilik QR).
* **Naskah Lisan Resmi (Verbatim):**
  > "Pada Modul 7 dan 8, kami menyusun jadwal implementasi bertahap dengan jalur kritis 36 hari kerja efektif—memilih pendekatan Phased daripada Big Bang agar operasional perpustakaan tetap berjalan. Seluruh aturan main dikodifikasikan ke dalam Buku Pedoman 10 SOP A4 sesuai standar Permenpan-RB Nomor 35 Tahun 2012, lengkap mencakup prosedur inti hingga mitigasi anomali seperti mati listrik dan transisi data SIAKAD."

---

### Slide 6: Demo Artefak Digital — Kanal Pemustaka (`layanan.html`) (Modul 9)
* **Alokasi Waktu:** Menit 06:00 – 07:00 (60 Detik)
* **Presenter:** Ganendra Pradipa
* **Tata Letak Visual Slide:**
  * **Tangkapan Layar Mobile:** Portal mandiri `08_ARTEFAK/mockup-4/layanan.html` (diakses lewat stiker QR di 12 meja baca & tiang rak).
  * **4 Fitur Kunci di Kanal Pemustaka:**
    1. **Banner Live *Quiet Hour*:** Muncul otomatis di layar HP mahasiswa saat pustakawan mengaktifkan jam tenang agar loket tidak diketuk.
    2. **Form Pelaporan 4-Field & Preservasi Input (*Inline Error Focus*):** Data yang sudah diketik tidak terhapus bila ada kolom wajib yang tertinggal.
    3. **Perpanjangan Mandiri +7 Hari & Lacak Tiket Mandiri:** Mahasiswa mengecek progres tiket (`TKT-...` atau Barcode) tanpa bertanya ke meja loket.
    4. **Usulan Referensi Terbuka 24/7:** Menampung usulan skripsi/RPS di luar surat dinas tahunan prodi.
* **Naskah Lisan Resmi (Verbatim):**
  > "Untuk sisi eksternal pemustaka, kami merancang portal mobile-first layanan.html yang diakses lewat stiker QR. Mahasiswa dapat melapor buku rusak, mengajukan perpanjangan +7 hari, mengusulkan buku referensi baru, hingga melacak status tiketnya secara mandiri. Antarmuka formulir juga menerapkan preservasi data input sehingga isian yang sudah diketik tidak hilang ketika terjadi galat pengisian."

---

### Slide 7: Demo Artefak Digital — Meja Kerja Pustakawan (`index.html` Mockup-4) (Modul 9–10)
* **Alokasi Waktu:** Menit 07:00 – 08:15 (75 Detik)
* **Presenter:** M. Fadlan Dirmansyah
* **Tata Letak Visual Slide:**
  * **Tangkapan Layar Desktop:** Dashboard `08_ARTEFAK/mockup-4/index.html` (berpalet netral institusional formal).
  * **4 Fitur Solutif Meja Kerja:**
    1. **Timer *Quiet Hour* 60 Menit & Live Broadcast:** Sinkronisasi otomatis ke portal pemustaka.
    2. **Instant Search & *Batch Execution* SLiMS:** Centang massal permohonan perpanjangan untuk menyalin seluruh barcode ke SLiMS dalam satu klik (mengatasi *click-fatigue*).
    3. **Triase 3-Opsi & Deteksi Kerusakan Berulang (*Recurrent Damage*):** Menampilkan riwayat kerusakan eksemplar untuk keputusan perbaikan vs afkir.
    4. **Asisten Penyiangan (`SOP-006`):** Filter tombol status (`Siap Afkir BMN`, `Perlu Konfirmasi Prodi`), filter tahun (`> 10 tahun / < 2016`, `> 15 tahun / < 2011`), filter dorman (`>= 4` & `>= 8` semester), tombol *Alirkan ke Pengadaan P1*, dan cetak **Berita Acara BMN**.
* **Naskah Lisan Resmi (Verbatim):**
  > "Di sisi pengelola, kami mendemonstrasikan Meja Kerja Pustakawan pada Mockup-4. Selain timer Quiet Hour yang terhubung ke layar mahasiswa, fitur pencarian instan dan centang massal menghapus kelelahan klik saat memproses perpanjangan di SLiMS. Pustakawan juga terbantu oleh Asisten Penyiangan SOP-006 untuk menyaring buku jarang dipinjam berdasarkan umur terbitan dan langsung mengalirkannya ke draf pengadaan pengganti Prioritas 1."

---

### Slide 8: Penyelarasan Vertikal (*Vertical Alignment*) & LAM-INFOKOM Kriteria 5
* **Alokasi Waktu:** Menit 08:15 – 09:00 (45 Detik)
* **Presenter:** M. Fadlan Dirmansyah
* **Tata Letak Visual Slide:**
  * **Aliran Nilai 3 Tingkatan Organisasi:**
    1. **Operasional (Pemustaka & Pustakawan):** Scan QR + Rak Transit + *Quiet Hour* $\rightarrow$ data SLiMS mutakhir (`SLA <= 7 hari`).
    2. **Manajerial (Kepala Perpus & Tim Akreditasi):** Ekstraksi CSV SLiMS (`TMP-001`) $\rightarrow$ perhitungan rasio kecukupan & pemanfaatan **Borang LAM-INFOKOM Kriteria 5**.
    3. **Strategis (Dekanat / Wakil Dekan I FT UNY):** **Lembar Disposisi Ber-Kop FT UNY** $\rightarrow$ pengesahan pagu RAB belanja buku baru berbasis bukti (*evidence-based budgeting*).
* **Naskah Lisan Resmi (Verbatim):**
  > "Seluruh alur di lantai operasional tersebut bermuara pada Penyelarasan Vertikal Tiga Tingkatan Organisasi. Pemutakhiran data SLiMS di tingkat operasional memasok data sahih bagi tingkat manajerial untuk pengisian Borang Akreditasi LAM-INFOKOM Kriteria 5, sekaligus menghasilkan Lembar Disposisi Ber-Kop FT UNY bagi Wakil Dekan I di tingkat strategis untuk menyetujui anggaran pengadaan koleksi secara berbasis bukti."

---

### Slide 9: Fase 4 — Hasil Validasi Stakeholder & Iterasi Desain (Modul 10)
* **Alokasi Waktu:** Menit 09:00 – 10:00 (60 Detik)
* **Presenter:** M. Fadlan Dirmansyah
* **Tata Letak Visual Slide:**
  * **Metode Pengujian:** *Decision Scenario Testing* bersama **7 responden**:
    * *2 Pustakawan Nyata FT UNY:* Pak Danar / Dapa (`NIP 199712052023022002`) & Pak Abdul (`NIP 199205122019031045`).
    * *2 Pemustaka Nyata FT UNY:* Wildan & Daffa.
    * *3 Simulasi Peran Mahasiswa PTI:* Saipul, Rahmat, Ahmad Zaky.
  * **Komparasi Iterasi *Before vs After* (Mockup-3 $\rightarrow$ Mockup-4):**
    * *Temuan Validasi:* Antrean panjang membuat pustakawan sulit mencari data perpanjangan secara manual; filter buku usang berbasis tahun belum spesifik; warna badge masih terlalu mencolok.
    * *Perbaikan di Mockup-4:* Penambahan *Instant Search Bar*, *Batch Execution*, Pusat Penyaringan Buku Usang Berdasarkan Tahun (`SOP-006`), perbaikan tombol filter status penyiangan, dan penormalan warna ke palet institusional netral.
* **Naskah Lisan Resmi (Verbatim):**
  > "Pada Modul 10, kami menguji prototipe melalui Decision Scenario Testing bersama 7 responden termasuk dua pustakawan pengelola langsung FT UNY, Pak Danar dan Pak Abdul. Hasil uji menunjukkan keputusan triase dapat diselesaikan rata-rata di bawah 5 menit. Kritik langsung dari pengujian tersebut segera kami wujudkan pada Mockup-4 melalui penambahan instant search, perbaikan tombol filter penyiangan, penyaringan tahun buku usang, serta penormalan palet warna formal instansi."

---

### Slide 10: Repository Log Pengerjaan (Jejak Modul 1 $\rightarrow$ Finalisasi) & Penutup
* **Alokasi Waktu:** Menit 10:00 – 11:00 (60 Detik)
* **Presenter:** Gantar Abimanyu
* **Tata Letak Visual Slide:**
  * **Tabel Repository Log Pengerjaan (Jejak Kronologis Artefak & Commit GitHub):**

    | Tahap / Modul | Fokus Pengerjaan | Artefak / Berkas Repositori Utama | Jejak Revisi / Commit Terverifikasi |
    | :--- | :--- | :--- | :--- |
    | **Modul 1–2** | Observasi FT UNY & Pemetaan 3 Level Stakeholder | [`Laporan_Praktikum_Pertemuan_1`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/02_LAPORAN/Laporan_Praktikum_Pertemuan_1_Kelompok%203.md), [`Praktikum_2_revisi`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/02_LAPORAN/Praktikum_2_Kelompok_3_revisi.md) | Rekonstruksi wawancara awal (`WAW-002`) & revisi analisis stakeholder. |
    | **Modul 3** | Bedah Akar Masalah (Fishbone 4M & 5-Whys) | [`Praktikum_3_Revisi`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/02_LAPORAN/Praktikum_3_Kelompok_3_Revisi.md), `Jawaban3_Final` | Investigasi *bottleneck* 52 transaksi/hari pustakawan tunggal. |
    | **Modul 4–6** | *Pure Governance*, RACI Matrix, & Arsitektur 4-Layer | [`Praktikum_4`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/02_LAPORAN/Praktikum_4_Kelompok3_revisi.md), [`Praktikum_5`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/02_LAPORAN/Praktikum_5_Kelompok3.md), [`Praktikum_6`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/02_LAPORAN/Praktikum_6_Kelompok3.md), [`Blueprint`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/Blueprint_Ekosistem_SIMPEL_KOLEKSI_FT.md) | Integrasi `catatan_5` (`b4dda5d`), penetapan batas yurisdiksi *Zero-Touch*. |
    | **Modul 7–8** | Jalur Kritis 36 Hari & Kodifikasi 10 SOP A4 | [`Praktikum_7`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/02_LAPORAN/Praktikum_7_Kelompok3.md), [`Praktikum_8`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/02_LAPORAN/Praktikum_8_Kelompok3.md), [`buku-sop-digital`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/buku-sop-digital/index.html) | Ekspansi 10 SOP (`8e7ed16`), formalisasi Permenpan-RB 35/2012 (`542213a`), tata letak monograf A4 (`2b650d8`). |
    | **Modul 9–10** | Prototyping Mockup 2–4 & Validasi 7 Responden | [`Praktikum_9`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/02_LAPORAN/Praktikum_9_Kelompok3.md), [`Praktikum_10`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/02_LAPORAN/Praktikum_10_Kelompok3.md), [`mockup-4`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/mockup-4/index.html) | Revisi Mockup-3 (`bb5a5a4`), triangulasi 7 responden (`7a96cea`), evolusi Mockup-4 (`167f02e`). |
    | **Finalisasi** | Audit UI Institusional, Filter Tahun Weeding & Panduan Responsi | [`mockup-4`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/mockup-4/index.html), [`MASTER_PANDUAN_RESPONSI_MSI.md`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/MASTER_PANDUAN_RESPONSI_MSI.md) | Fix filter penyiangan, netralisasi warna badge & filter tahun (`02cf505`), konsolidasi panduan (`009d66b`). |

  * **Penutup & Batas Etika Akademik:** SLiMS 9 Bulian tetap sebagai *Single Source of Truth* (*Zero-Touch Infrastructure*); tidak ada modifikasi server pusat UNY tanpa izin.
* **Naskah Lisan Resmi (Verbatim):**
  > "Sebagai penutup, tabel Repository Log ini merangkum jejak pengerjaan Kelompok 3 secara utuh sejak observasi Modul 1 hingga penyempurnaan akhir Mockup-4 dan Buku Pedoman 10 SOP A4. Seluruh proses membuktikan bahwa rekayasa tata kelola dan proses bisnis mampu melindungi waktu kerja pustakawan tunggal sekaligus mengamankan pasokan data akreditasi fakultas dengan biaya infrastruktur nol. Demikian pemaparan kami, kami siap memasuki sesi diskusi dan tanya-jawab bersama Ibu Ratna. Terima kasih."

---

# BAGIAN II: BANK PERTANYAAN KRITIS PENGUJI (UNTUK DRAFT 2)

Pertanyaan paling mungkin muncul dari struktur Draft 2 di atas beserta poin jawabannya:

1. **Q1 (Tentang Fishbone & Pure Governance):** *"Di Fishbone kalian ada cabang Machine dan Material. Kenapa solusinya bukan beli sistem/mesin baru?"*
   * **Jawab:** Karena pada cabang *Machine*, SLiMS 9 Bulian sudah berfungsi baik. Masalahnya ada di cabang *Method* dan *Material* (tidak ada jadwal fokus & rak penampung). Mengganti mesin tidak menyembuhkan ketiadaan SOP; justru melanggar prinsip *Task-Technology Fit* dan *Pure Governance*.
2. **Q2 (Tentang Alur *As-Is* vs *To-Be*):** *"Jika mahasiswa malas scan QR di alur To-Be, bukankah kembali menumpuk seperti As-Is?"*
   * **Jawab:** Tidak, karena pada alur *To-Be* kami memisahkan dua lapis pengaman: (1) Formulir QR dibuat ringkas 4-field dengan *inline error preservation* agar tidak membuat frustrasi, dan (2) **Rak Transit `RACK-001` Tingkat 2** dilengkapi *signage* akrilik. Kalaupun pemustaka lupa scan, buku tetap masuk ke zona fisik Rak Transit sehingga tidak menggunung di meja loket pustakawan.
3. **Q3 (Tentang Matriks RACI):** *"Kenapa pada ACT-06 dan ACT-07 yang menjadi 'A' (Accountable) adalah Wadek I, bukan Pustakawan?"*
   * **Jawab:** Karena `ACT-06` dan `ACT-07` menyangkut **keputusan strategis pengesahan anggaran belanja buku**. Sesuai prinsip pemisahan *Decision Rights* dan *Accountability* (Weill & Ross), pustakawan memegang hak operasional (`R`), sedangkan kewenangan legal pengesahan pagu anggaran berada pada Wakil Dekan I (`A`).
4. **Q4 (Tentang Repository Log & Validasi Modul 10):** *"Apa bukti bahwa Mockup-4 benar-benar hasil perbaikan dari validasi Modul 10, bukan sekadar dibuat di akhir?"*
   * **Jawab:** Tercatat pada jejak *Repository Log* (commit `7a96cea` $\rightarrow$ `167f02e` $\rightarrow$ `02cf505`): kritik lapangan Pak Abdul/Pak Danar melahirkan *Instant Search Bar* dan *Batch Execution*; kritik tampilan melahirkan netralisasi palet warna formal; serta kebutuhan kurasi koleksi melahirkan filter tahun terbitan $\ge 10$ tahun pada Asisten Penyiangan `SOP-006`.
