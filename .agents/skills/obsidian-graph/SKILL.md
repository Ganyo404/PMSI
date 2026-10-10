---
name: obsidian-graph
description: Skill manajemen graf Obsidian, penataan hub sentral Dashboard, resolusi orphan nodes, dan standar bidirectional wikilinking di repositori PMSI.
---

# Obsidian Knowledge Graph & Vault Linking (PMSI FT UNY)

Skill ini memandu arsitektur tautan internal (*bidirectional linking*) agar seluruh dokumen dalam vault Obsidian membentuk jaring pengetahuan yang padat (*connected knowledge graph*) tanpa ada partikel/simpul yang terisolasi (*orphan nodes*).

---

## ☀️ DASHBOARD SEBAGAI PUSAT GRAVITASI (MOTHER HUB)
Dalam graf Obsidian, ukuran bulatan (*node size*) berbanding lurus dengan **jumlah tautan masuk dan keluar (*degree centrality*)**.
- File `00_DASHBOARD/Dashboard.md` WAJIB menjadi simpul terbesar di tengah graf.
- Untuk menjaga ukuran partikelnya tetap besar dan dominan:
1. `Dashboard.md` wajib menampung tautan aktif ke seluruh 7 Laporan, 7 Modul, 4 Catatan Kelas, 2 Wawancara, 12 Dokumen Temuan, dan 4 Dokumen Indeks.
  2. Dokumen lain wajib memiliki *breadcrumb* atau tautan balik ke `[[Dashboard]]`.

---

## 🚫 ATURAN PENULISAN LINK (ANTI-ORPHAN NODES)
1. **Dilarang Menulis Nama File dengan Backtick Semata:**
   - ❌ Salah: `- Referensi: ` `Modul 5.md` `` (tidak membuat garis relasi di graf).
   - ✅ Benar: `- Referensi: [[Modul 5]]` atau `[[Modul 5|Modul 5 PTF60234]]`.
2. **Gunakan Ekstensi Bersih atau Markdown Link Standar:**
   - Lebih disukai: `[[NamaFile]]` (tanpa ekstensi `.md`) agar rapi di tampilan baca Obsidian, atau `[[NamaFile|Label]]`.
3. **Resolusi Broken Links:**
   - Jangan menautkan ke file yang tidak ada (contoh: menulis `[[Praktikum_3_Kelompok3]]` padahal nama filenya `[[Praktikum_3_Kelompok_3_Revisi]]`). Link yang tidak tervalidasi akan memunculkan simpul hantu abu-abu (*unresolved link*).


---

## 🕸️ STRUKTUR RELASI SEMANTIK ANTAR-FOLDER
Saat membuat atau merevisi file apa pun, pastikan memiliki minimal:
- **1 Tautan Masuk (Inbound)**: Ditautkan oleh Dashboard atau file indeks.
- **2 Tautan Keluar (Outbound)**: Menautkan modul pendukung, data wawancara, atau laporan terkait.

### Matriks Keterhubungan Folder:
1. `04_MODUL-DAN-MATERI` $\rightarrow$ Ditautkan oleh Dashboard dan Laporan bersangkutan. Menautkan ke Laporan praktikum yang mengimplementasikannya.
2. `02_LAPORAN` $\rightarrow$ Menautkan Modul panduan, Laporan sebelumnya, Laporan setelahnya, Catatan kelas, dan Wawancara lapangan.
3. `06_CATATAN-KELAS` $\rightarrow$ Menautkan ke Laporan praktikum yang menerapkan koreksi dosen.
4. `03_DATA-LAPANGAN` $\rightarrow$ Menautkan ke Laporan yang mengutip data tersebut sebagai fakta dasar.
5. `09_SOURCE-FILES` (`SOURCE_INVENTORY`, `KNOWLEDGE_GRAPH`) $\rightarrow$ Memuat katalog seluruh dokumen dengan format wikilink aktif.


---

## 📐 4. METRIK DEGREE CENTRALITY & FORMULA BOBOT GRAF

Untuk menjamin simpul `[[Dashboard]]` tetap menjadi bintang terbesar (*dominant mega-cluster*):
- **Formula Derajat Sentralitas**:
  $$C_D(\text{Dashboard}) = \text{Inbound Links} + \text{Outbound Links} \ge 60$$
- Jika total koneksi Dashboard turun di bawah 50, jalankan penambahan tautan dua arah pada dokumen baru.

### Konfigurasi Fisika Obsidian Graph View yang Direkomendasikan:
Dalam menu **Graph View $\rightarrow$ Settings** di Obsidian:
- **Node Size**: `1.75x` (Menonjolkan kontras ukuran simpul berdasarkan jumlah link).
- **Link Thickness**: `1.2x` (Memperjelas garis jaring relasi).
- **Center Force**: `0.55` (Menarik Dashboard dan klaster utama ke tengah layar).
- **Repel Force**: `12.0` (Mencegah simpul saling bertumpuk).
- **Link Distance**: `220` (Memberikan ruang bentang visual yang proporsional).

---

## 🔍 5. PROSEDUR AUDIT TOPOLOGI MANDIRI

Setiap selesai membuat laporan atau artefak baru, jalankan audit graf secara instan:
```powershell
python ".agents/skills/self-healing/scripts/verify_integrity.py"
```
Pastikan laporan menunjukkan:
- `Broken Wikilinks: 0`
- `Orphan Nodes: 0`
- `[[Dashboard]] Total Degree >= 60`

