# Project Timeline & Context Reconstruction (MSI)

Dokumen ini merekonstruksi kronologi waktu (*temporal context*) dari seluruh file dalam Knowledge Base berdasarkan analisis isi laporan, transkrip wawancara, dan hasil diskusi, mengingat banyak dokumen tidak memiliki metadata tanggal yang dapat diandalkan (*exported from NotebookLM/ChatGPT*).

## Timeline Proyek Berdasarkan Laporan Praktikum (LAP)

### 1. Tahap 1: Inisiasi & Pemilihan Kasus (Modul 1 / Praktikum 1)
- **Konteks**: Pemilihan Perpustakaan Fakultas Teknik (FT) UNY sebagai objek observasi Sistem Informasi.
- **Dokumen Utama**: `[[Laporan_Praktikum_Pertemuan_1_Kelompok 3]]` (LAP-001).
- **Bukti Pendukung**: `[[Jawaban_Wawancara (2)]]` (WAW-002) - Wawancara awal mengenai kondisi umum pengelolaan data perpustakaan (penggunaan SLiMS yang dikelola secara semi-manual).

### 2. Tahap 2: Analisis Stakeholder & Lingkungan (Modul 2 / Praktikum 2)
- **Konteks**: Pemetaan *stakeholder* yang terlibat secara operasional, manajerial, dan strategis (Pustakawan Tunggal, Pemustaka, Tim Akreditasi, Dekanat).
- **Dokumen Utama**: `[[Praktikum_2_Kelompok_3_revisi]]` (LAP-002).
- **Bukti Terkait**: Brainstorming `[[Revisi Analisis Stakeholder]]` (FIND-011).

### 3. Tahap 3: Identifikasi Masalah & Root Cause (Modul 3 / Praktikum 3)
- **Konteks**: Penemuan akar masalah (*root cause*) keterlambatan sinkronisasi data sirkulasi SLiMS akibat beban kerja *multi-tasking* Pustakawan dan tidak adanya aturan spesifik mengenai waktu input data.
- **Dokumen Utama**: `[[Praktikum_3_Kelompok_3_Revisi]]` (LAP-003).
- **Bukti Pendukung**: `[[Jawaban3_Final]]` (WAW-001) - Wawancara mendalam (investigasi *bottleneck* alur pemutakhiran data).
- **Diskusi Analisis**: `[[Revisi Analisis Masalah P3]]` (FIND-010).

### 4. Tahap 4: Perumusan Solusi (Tata Kelola / Governance) (Modul 4-6 / Praktikum 4-6)
- **Konteks**: Pembentukan solusi berupa Tata Kelola (*SOP Quiet Hour, Rak Transit, Form QR Code, Template Akreditasi*) tanpa pengembangan *coding* web baru (menghindari *technical fix* dan *scope creep*).
- **Dokumen Utama**: `LAP-004`, `LAP-005`, `LAP-006`.
- **Diskusi Keputusan Utama**: 
  - `[[Analisis Komparatif MSI Sekolah-FT UNY]]` (FIND-001) - Justifikasi pendekatan *Pure Governance* (Tata Kelola).
  - `[[Rancang SOP Sistem Informasi]]` (FIND-009) dan `[[Panduan SOP Manajemen Sistem]]` (FIND-008).
  - `[[Revisi Tata Kelola Data]]` (FIND-012).

---

## Aturan Penilaian Validitas (Temporal Confidence)

1. **Konflik Data Laporan vs. Temuan AI (Brainstorming)**: Jika terdapat pertentangan antara file `FIND-` (hasil ide NotebookLM/ChatGPT) dengan file `LAP-` (Laporan Praktikum yang sudah direvisi), maka yang dianggap mutakhir dan **Sah (Source of Truth)** adalah **Laporan Praktikum (`LAP-`)**. Ide dari AI hanyalah hipotesis sebelum dimasukkan ke dalam laporan akhir.
2. **Revisi vs Draf Lama**: File dengan sufiks "revisi" pada judulnya (contoh: `Praktikum_3_Kelompok_3_Revisi.md`) memiliki kedudukan kronologis yang lebih baru dibandingkan draf awal.
3. **Penggunaan Metadata YAML**: Walaupun atribut `date: null` disematkan pada seluruh dokumen `FIND-`, atribut `estimated_project_phase` telah memandu klasifikasi fase ke dalam tahapan Analisis dan Solusi (berkorelasi kuat dengan Praktikum 3 dan Praktikum 4).
