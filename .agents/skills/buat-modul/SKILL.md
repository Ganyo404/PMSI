---
name: buat-modul
description: Skill panduan cara membuat laporan praktikum per-modul baru, struktur wajib 7 bagian, protokol implementation plan, dan keterhubungan graf Obsidian (Khusus MSI Perpustakaan FT UNY).
---

# Pembuatan Modul Praktikum (Report Generator)

Skill ini digunakan saat user meminta Anda menyusun draf Laporan Praktikum mingguan yang BARU (Modul 1 s/d Modul 7).

---

## ❓ PROTOKOL BERTANYA SEBELUM EKSEKUSI
Jangan langsung menulis laporan panjang tanpa konfirmasi konteks:
1. Pertemuan ke berapa dan tanggal berapa pelaksanaannya?
2. Topik/judul pertemuan ini (cek `04_MODUL-DAN-MATERI/Modul X.md`)?
3. Ada artefak khusus atau catatan kelas terbaru dari Bu Ratna?
4. Ada data baru dari lapangan?

---

## 📋 IMPLEMENTATION PLAN (WAJIB DIBUAT DULU)
Setelah mendapat informasi, buat *Implementation Plan* di chat, lalu minta persetujuan user:
```markdown
## Implementation Plan - Laporan Pertemuan [X]
- Dokumen Rujukan: Modul X, Laporan Sebelumnya, [[Jawaban3_Final]], Catatan Dosen
- Struktur: 7 Bagian Baku + Daftar Pustaka
- Target Artefak & Tabel Wajib: ...
- Diagram Mermaid: ...
- Vertical Alignment (3 Level): ...
**Mohon ACC sebelum saya eksekusi penuh.**

```

---

## 📊 STRUKTUR 7 BAGIAN WAJIB
Setiap laporan Modul HARUS memuat 7 bagian utama ini:
1. **Identitas Laporan** (Tabel: Nama Kelompok, NIM 3 anggota, Pertemuan, Tanggal, Organisasi/Kasus: Perpustakaan Fakultas Teknik UNY)
2. **Tujuan Kegiatan** (Merujuk CPMK dan sub-CPMK modul)
3. **Uraian Pelaksanaan Kegiatan** (Menjelaskan analisis mendalam, landasan teori MSI, dan fakta operasional lapangan)
4. **Hasil/Artefak Praktikum** (Tabel lembar kerja modul terisi lengkap, diagram Mermaid valid, matriks analisis)
5. **Kendala dan Solusi** (Kendala spesifik lapangan organisasi, bukan kesulitan teknis mengetik)
6. **Refleksi Pembelajaran** (Kaitan antara pengalaman proyek, teori MSI Bu Ratna, dan hikmah perbaikan tata kelola)
7. **Kesimpulan** (Ringkasan substansi dan jembatan menuju pertemuan berikutnya)
*(+ Daftar Pustaka baku di bagian bawah)*

---

## 📜 SPESIFIKASI ARTEFAK PER MODUL (MODUL 1 S.D. 7)

Setiap modul praktikum memiliki fokus keluaran wajib yang harus dihasilkan:

- **Modul 1 (Profil Organisasi & 7 Aspek MSI):**
  - Profil operasional Perpustakaan FT UNY dan kendala beban kerja 1 pustakawan tunggal.
  - Matriks Pemetaan 7 Aspek Pengelolaan MSI Bu Ratna terhadap kondisi faktual perpustakaan.
- **Modul 2 (Analisis Pemangku Kepentingan):**
  - Matriks *Power-Interest Grid* 4 Kuadran (Pustakawan = Manage Closely, Dekanat = Keep Satisfied, Mahasiswa = Keep Informed).
  - Strategi komunikasi dan penyelarasan ekspektasi stakeholder.
- **Modul 3 (Kebutuhan Informasi & Akar Masalah):**
  - Sintesis 12 temuan transkrip wawancara `[Jawaban3_Final]`.
  - Diagram *Ishikawa (Fishbone 4M)* atau pohon masalah yang membedakan gejala fisik vs akar tata kelola.
- **Modul 4 (Rancangan Solusi Tata Kelola - 4 Deliverables):**
  - Deliverable 1: *SOP-001 (SOP Pemutakhiran Data & Quiet Hour)*.
  - Deliverable 2: *RACK-001 (Panduan Alur Fisik & Signage Rak Transit Pengembalian)*.
  - Deliverable 3: *FORM-001 (Desain Formulir QR Code Google Form 4-Field & Rekap Sheet)*.
  - Deliverable 4: *TMP-001 (Template Ekstraksi CSV SLiMS ke Borang LAM-INFOKOM Kriteria 5)*.
- **Modul 5 (Peran Tim, RACI & Grand Design):**
  - Grand Design Arsitektur: Tabel alur data dan diagram Mermaid yang menghubungkan Pemustaka $\rightarrow$ Pustakawan $\rightarrow$ SLiMS $\rightarrow$ Kepala Perpus $\rightarrow$ Tim Akreditasi $\rightarrow$ Dekanat FT UNY.
  - Matriks RACI: Menampung 4 deliverable Modul 4 dengan tepat 1 Accountable tunggal per baris.
  - Deskripsi Peran 3 Anggota Tim (Gantar: SOP & Dekanat; Ganendra: Form & Pemustaka; Fadlan: SLiMS & Borang).
- **Modul 6 (Strategi Implementasi & Manajemen Perubahan):**
  - Tabel 4 Layer Arsitektur SI (Business, Data, Application, Technology).
  - Tabel Penilaian Strategi per Modul: Kolom *Modul | Kejelasan Kebutuhan (T/S/R) | Kebutuhan Iteratif (T/S/R) | Level Keputusan | Strategi Terpilih (Waterfall/Agile/Hybrid)*.
  - Tabel Resistensi Stakeholder per kuadran Power-Interest Grid dan mitigasi bertahap model ADKAR.
  - Rencana Pelatihan & Sosialisasi SOP Quiet Hour Jumat pagi.
- **Modul 7 (WBS, Penjadwalan & Evaluasi Akhir):**
  - Dekomposisi WBS bertingkat (Level 1: Proyek, Level 2: Fase/Deliverable, Level 3: Work Package).
  - Diagram Jalur Kritis (Critical Path / PERT Mermaid) dan Gantt Chart jadwal implementasi 1 semester.
  - Matriks Evaluasi Keberhasilan & Panduan Pemeliharaan Jangka Panjang.


---

## 🔗 KONEKTIVITAS OBSIDIAN (GRAPH ENFORCEMENT)
Setiap laporan baru **WAJIB menyertakan Wikilinks aktif** ke file riil terkait agar tidak menjadi simpul mengambang di Graph View:
- Link ke Modul Panduan Riil: contoh `[[Modul 5]]` atau `[[Modul 6]]`
- Link ke Laporan Sebelumnya: contoh `[[Praktikum_4_Kelompok3_revisi]]`
- Link ke Data Wawancara: `[[Jawaban3_Final]]`
- Link ke Catatan Dosen: contoh `[[catatan_3]]` atau `[[catatan_4]]`
- Link ke Dashboard: `[[Dashboard]]`


