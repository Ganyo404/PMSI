# Theory to Evidence Matrix (MSI)

Matriks ini memetakan teori dari Dosen (Modul Pembelajaran & Referensi Akademik) terhadap implementasi di lapangan (Laporan Praktikum & Temuan Wawancara). Matriks ini berfungsi agar Agent selalu dapat melandasi argumen analisis proyek dengan referensi akademik yang diajarkan di kelas dan didukung literatur ilmiah terakreditasi.

---

### 1. Pemetaan 7 Modul Praktikum Dosen ke Artefak Proyek

| Modul Pembelajaran | Konsep Teori Utama | Bukti Lapangan / Artefak Proyek | Rujukan Sumber | Status Keterkaitan |
| :--- | :--- | :--- | :--- | :--- |
| **[[Modul 1]]** | Konsep Dasar SIM, Nilai Bisnis Sistem Informasi, dan Klasifikasi Sistem (TPS vs MIS). | Pemilihan SLiMS Perpustakaan FT UNY sebagai sistem transaksional (TPS) yang belum termanfaatkan optimal secara manajerial. | [[Laporan_Praktikum_Pertemuan_1_Kelompok 3]], [[Jawaban_Wawancara (2)]], [[catatan_1]] | Tervalidasi Penuh |
| **[[Modul 2]]** | Analisis Stakeholder, *Vertical Alignment* 3 Tingkat Manajemen, & Lingkungan Bisnis. | Identifikasi Pustakawan Tunggal sebagai Operator, Tim Akreditasi (LAM-INFOKOM) sebagai Manajerial, dan Dekanat FT UNY sebagai Strategis. | [[Praktikum_2_Kelompok_3_revisi]], [[Revisi Analisis Stakeholder]], [[catatan_2]] | Tervalidasi Penuh |
| **[[Modul 3]]** | Analisis Akar Masalah (*Root Cause Analysis*), 5-Whys, dan Diagram Tulang Ikan (Fishbone 4M). | Bukti empiris bahwa keterlambatan sirkulasi di SLiMS disebabkan oleh ketiadaan SOP pemutakhiran berkala dan beban *multi-tasking* 3 peran pustakawan tunggal. | [[Praktikum_3_Kelompok_3_Revisi]], [[Jawaban3_Final]], [[catatan_3]] | Tervalidasi Penuh |
| **[[Modul 4]]** | Desain Tata Kelola (*IT Governance*), *Project Scope Statement*, SMART Goals, dan *Out-of-Scope*. | Keputusan tegas memilih *Pure Governance* (SOP Quiet Hour, Rak Transit, Form QR Code, Template CSV) serta menolak pembuatan software baru (*Out-of-Scope*). | [[Praktikum_4_Kelompok3_revisi]], [[Analisis Komparatif MSI Sekolah-FT UNY]], [[Manajemen Ruang Lingkup TI]] | Tervalidasi Penuh |
| **[[Modul 5]]** | Grand Design Alur Data & Informasi, RACI Matrix, dan Model Kolaborasi Tim. | Diagram Alur Informasi Terpadu (Pemustaka $\rightarrow$ Form QR $\rightarrow$ Pustakawan $\rightarrow$ SLiMS $\rightarrow$ Ekstraksi $\rightarrow$ Dekanat/Akreditasi) & RACI Matrix tanpa peran ganda tak berdasar. | [[Praktikum_5_Kelompok3]], [[Panduan SOP Manajemen Sistem]], [[catatan_4]] | Tervalidasi Penuh |
| **[[Modul 6]]** | Arsitektur Enterprise 4-Layer (Bisnis, Data, Aplikasi, Teknologi), Strategi Hybrid, & Model Perubahan ADKAR. | Pemodelan arsitektur As-Is vs To-Be, justifikasi strategi bertahap (SOP & Rak Transit didahulukan daripada instrumen digital), serta mitigasi resistensi pustakawan tunggal. | [[Praktikum_6_Kelompok3]], [[Integrasi Portal Perpustakaan FT]], [[Analisis Revisi Tata Kelola]] | Tervalidasi Penuh |
| **[[Modul 7]]** | Manajemen Penjadwalan Proyek, WBS Bertingkat, Gantt Chart, dan Analisis Jalur Kritis (PERT Chart). | Penjadwalan 7 aktivitas implementasi tata kelola dengan pembuktian Jalur Kritis 36 Hari pada lintasan kesepakatan sosial dan perilaku operasional (SOP $\rightarrow$ Form $\rightarrow$ Sosialisasi). | [[Praktikum_7_Kelompok3]], [[Modul 7]] | Tervalidasi Penuh |

---

### 2. Pemetaan Literatur Ilmiah & Regulasi Eksternal (05_REFERENSI)

| Referensi Ilmiah | Ranah Teori & Regulasi | Relevansi pada Kasus Perpustakaan FT UNY | Bukti Pemenuhan Kasus |
| :--- | :--- | :--- | :--- |
| **Anton Risparyanto (2014)** (`12665-...pdf`) | Pengaruh Jabatan Fungsional Pustakawan, SK Menpan No. 132/2002, UU No. 43/2007 Pasal 29 Ayat 2, dan SNI 7329:2009 (Perpustakaan Perguruan Tinggi). | Menjadi landasan legal-formal bahwa pustakawan perguruan tinggi memerlukan perlindungan beban kerja fungsional agar tidak tergerus rutinitas administratif sirkulasi. | Mendasari pembentukan *SOP Quiet Hour* sebagai alokasi waktu sah pengelolaan data bibliografis. |
| **Dwiatri Kusumaningrum et al. (2016)** (`273-...pdf`) | Analisis Lingkungan Kerja Fisik (tata ruang, kebisingan) dan Non-Fisik (hubungan kerja) terhadap motivasi & kepuasan kerja pustakawan di PDII LIPI. | Memberikan bukti saintifik bahwa lingkungan kerja fisik yang semrawut akibat antrean buku pengembalian menurunkan efisiensi kerja pustakawan. | Mendasari rancangan *Rak Transit Pengembalian (RACK-001)* untuk memisahkan buku belum terverifikasi dari rak sirkulasi aktif. |
| **Rina Kusharyanti et al. (2023)** (`27_nij-...pdf`) | Kepemimpinan struktural, Servicescape tempat kerja, dan 5 Indikator Kinerja Robbins (kualitas, kuantitas, ketepatan waktu, efektivitas, kemandirian). | Menjadi dasar justifikasi bagi pimpinan fakultas (Dekanat FT UNY) dalam merancang intervensi kepemimpinan yang mendukung kenyamanan kerja dan keandalan data sirkulasi. | Digunakan pada analisis *Vertical Alignment* Modul 2, Modul 5, dan Laporan Kebijakan Dekanat. |
| **Rahman Effendi et al. (2013)** (`2997-...pdf`) | Tuntutan profesi kepustakawanan, mitigasi kendala sistem komputer trouble/offline, lonjakan pemustaka, dan standar prosedur ISO 9001. | Memberikan model penanganan kontinjensi saat server SLiMS atau jaringan internet down melalui mekanisme pencatatan buku sirkulasi darurat (*offline fallback*). | Mendasari SOP kontinuitas sirkulasi darurat pada *SOP-001* dan arsitektur data lokal. |


