# Daftar Skill AI Agent

Berikut adalah keahlian (skill) yang dapat digunakan oleh AI Agent dalam project ini:

### Academic Skill
Digunakan untuk penulisan laporan akademik. (Sudah diubah menjadi *Native Antigravity Skill* di `.agents/skills/academic-skill/SKILL.md`)
Ketentuan:
- Bahasa Indonesia akademik tetapi natural, merujuk pada 7 Aspek MSI Bu Ratna.
- Tidak terlalu kaku; tidak bertele-tele (Anti-AI Writing, tanpa kata *slop* dan *em-dash*).
- Mempertahankan solusi *Pure Governance* (tanpa memaksakan koding baru).
- Mengacu pada integrasi SLiMS, Pustakawan Tunggal, dan Dekanat FT UNY.

### Source Tracking / Revisi Skill
(Sudah diubah menjadi *Native Antigravity Skill* di `.agents/skills/revisi/SKILL.md`)
Digunakan untuk:
- Melacak sumber dan tidak membabat habis paragraf lama saat revisi.
- Memastikan tidak ada jebakan "karena belum ada aplikasi".
- Membuat histori revisi di folder `07_REVISI/`.

### Self Audit Skill (QA/QC)
(Sudah diubah menjadi *Native Antigravity Skill* di `.agents/skills/self-audit/SKILL.md`)
Digunakan untuk:
- Memeriksa laporan dan mewajibkan standar Diagram `mermaid`.
- Protokol *Push-Back*: Menolak instruksi yang menyalahi pakem MSI atau menebak angka fiktif.
- Memeriksa kelengkapan 7 Bagian wajib Laporan Praktikum.

### Modul Generator Skill
(Sudah diubah menjadi *Native Antigravity Skill* di `.agents/skills/buat-modul/SKILL.md`)
Digunakan untuk:
- Memandu tata cara pembuatan Laporan Modul baru.
- Mewajibkan *Implementation Plan* sebelum menulis kode utuh.

### Dashboard Skill
Digunakan untuk:
- Memperbarui status project.
- Memperbarui daftar pekerjaan (progress).

### Context / Retrieval Skill
Digunakan untuk:
- Mulai membaca dari `CONTEXT_INDEX.md`.
- Mengambil konteks dari modul, wawancara, temuan, dan referensi tanpa menghabiskan *context window*.

### Self-Healing Skill
Digunakan untuk perbaikan otomatis (misalnya perbaikan *encoding* UTF-8 markdown).
