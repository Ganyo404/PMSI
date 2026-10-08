---
name: buat-modul
description: Skill panduan cara membuat laporan praktikum per-modul baru, struktur wajib 7 bagian, dan protokol implementation plan.
---

# Pembuatan Modul Praktikum (Report Generator)

Skill ini digunakan saat user meminta Anda membuat atau menyusun laporan modul/pertemuan yang BARU.

## ❓ PROTOKOL BERTANYA SEBELUM EKSEKUSI
Jangan langsung menulis laporan panjang. Tanyakan dulu:
1. Pertemuan ke berapa dan tanggal berapa pelaksanaannya?
2. Topik/judul pertemuan ini?
3. Ada artefak/template PDF/MD khusus dari Bu Ratna?
4. Ada data baru dari lapangan?

## 📋 IMPLEMENTATION PLAN (WAJIB DIBUAT DULU)
Setelah mendapat jawaban, buat *Implementation Plan* di chat, lalu minta *ACC/Persetujuan* user:
```markdown
## Implementation Plan - Laporan Pertemuan [X]
- Konteks yang dibaca: ...
- Struktur: 1 s.d. 7 (lihat di bawah)
- Diagram Mermaid yang akan dibuat: ...
- Sumber Data: ...
**Mohon ACC sebelum saya eksekusi penuh.**
```

## 📊 STRUKTUR 7 BAGIAN WAJIB
Setiap laporan Modul HARUS memuat 7 bagian utama ini agar dinilai "Sangat Baik":
1. **Identitas Laporan** (Tabel: Nama Kelompok, NIM, Pertemuan, Tanggal, Organisasi/Kasus: Perpustakaan Fakultas Teknik UNY)
2. **Tujuan Kegiatan**
3. **Uraian Pelaksanaan Kegiatan** (Sub-bagian analisis, pembahasan teoretis dan lapangan)
4. **Hasil/Artefak Praktikum** (Tabel, diagram Mermaid, matriks, dsb)
5. **Kendala dan Solusi** (Harus spesifik lapangan, bukan "kami kesulitan")
6. **Refleksi Pembelajaran** (Kaitkan pengalaman, teori MSI, dan hikmah perbaikan)
7. **Kesimpulan**
(+ Referensi di bagian bawah)

## 📜 ARTIFAK DAN TARGET MODUL 5, 6, 7 (Contoh Saat Ini)
- **Modul 5**: Grand Design, Matriks RACI, Deskripsi Peran Tim. (Fokus: Kepemilikan data, Aspek 2).
- **Modul 6**: Strategi Implementasi (Waterfall/Agile/Hybrid per modul fungsional), Arsitektur Berlapis.
- **Modul 7**: WBS, Gantt Chart, PERT Chart, Jalur Kritis (Critical Path).

**Konvensi Penamaan Laporan**:
`02_LAPORAN/Praktikum_[N]_Kelompok3.md`
