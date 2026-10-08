# Dashboard Project Manajemen Sistem Informasi (MSI)

## 1. Project Status
- **Status Laporan**: Draft (6 Laporan)
- **Jumlah Modul**: 7 (Selesai diekstrak ke Markdown)
- **Jumlah Wawancara**: 2
- **Jumlah Stakeholder**: Belum didefinisikan (TBD)
- **Jumlah Temuan**: 12 (Brainstorming & Analisis)
- **Jumlah Referensi**: 4
- **Jumlah Catatan Kelas**: 4
- **Jumlah Revisi**: 0
- **Jumlah Audit**: 0

## 2. Data Availability
- **Tersedia**: Semua data awal telah diproses & diberikan identitas (YAML metadata).
- **Belum Tersedia**: Analisis Visual dari Modul (Membutuhkan dukungan tool OCR eksternal).
- **Belum Diverifikasi**: Kebenaran isi temuan brainstorming (terkait *temporal confidence*).

## 3. Progress
- **Pekerjaan Selesai (Phase 1 & 2)**: 
  - Inisialisasi Git & `CONTRIBUTING.md`.
  - Konversi 7 Modul PDF dosen ke dalam Markdown menggunakan `markitdown`.
  - Injeksi YAML Frontmatter (ID Unik & Metadata) ke seluruh dokumen (`FIND-`, `WAW-`, `LAP-`, `CAT-`, `MOD-`).
- **Pekerjaan Berjalan (Phase 3)**: Rekonstruksi konteks temporal dan klasifikasi validitas dokumen.
- **Pekerjaan Belum Dimulai**: *Knowledge Synthesis* (Pemetaan teori ke bukti lapangan) & Pembuatan `KNOWLEDGE_GRAPH.md`.

## 4. Recent Changes
- [2026-10-08] Inisialisasi struktur direktori dasar KMS, Git Push ke main branch.
- [2026-10-08] Ekstraksi portal SLiMS Perpustakaan FT UNY.
- [2026-10-08] Ekstraksi Modul 1-7 (PDF to MD) dan Normalisasi metadata YAML ke semua file Obsidian.

## 5. Issues
- `VISUAL EXTRACTION LIMITATION`: Tabel/bagan pada PDF belum dikonversi secara grafis. Teks berhasil diekstrak, namun relasi visual mungkin terlewat.
- `TEMPORAL UNCERTAINTY`: File ekspor NotebookLM tidak memiliki *timestamp* kreasi yang akurat, membutuhkan *Temporal Context Reconstruction* di Phase 3.

## 6. Important Links
- [[02_LAPORAN/]]
- [[03_DATA-LAPANGAN/Wawancara/]]
- [[03_DATA-LAPANGAN/Temuan/]]
- [[04_MODUL-DAN-MATERI/]]
- [[05_REFERENSI/]]
- [[08_AUDIT/]]
- [[07_REVISI/]]
