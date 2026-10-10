---
name: source-retrieval
description: Skill pencarian sumber mendalam, triangulasi multi-dokumen, pelacakan radar indeks repositori, dan pencegahan blindspot deliverables lintas modul.
---

# Source-Retrieval & Evidence Hunting Skill

Skill ini memandu AI Agent untuk secara agresif dan terstruktur menelusuri seluruh sumber bukti di repositori sebelum menyusun analisis, mencegah kebutaan konteks (*blindspot*), dan menghubungkan setiap klaim dengan tautan wikilink yang sahih.

---

## 🎯 1. PROTOKOL INVESTIGASI 3 TITIK (TRIANGULASI WAJIB)

Setiap kali merumuskan atau merevisi satu bagian laporan, agent secara refleks wajib memeriksa 3 sumber primer:

```mermaid
flowchart LR
    subgraph S1["Titik 1: Panduan Modul"]
        M["04_MODUL-DAN-MATERI/<br/>(Modul 1 s.d. 7)"]
        F1["Tujuan, Rubrik & Batasan Tugas"]
    end
    subgraph S2["Titik 2: Kuliah Dosen"]
        C["06_CATATAN-KELAS/<br/>(catatan_1 s.d. catatan_4)"]
        F2["Doktrin Bu Ratna, Pure Governance & Dekanat"]
    end
    subgraph S3["Titik 3: Data Empiris Lapangan"]
        W["03_DATA-LAPANGAN/<br/>• Wawancara/Jawaban3_Final.md (WAW-001)<br/>• Wawancara/Jawaban_Wawancara (2).md (WAW-002)<br/>• Temuan/ (14 Dokumen Temuan MSI)"]
        F3["Fakta Beban 3 Layanan, Wakil Dekan, Regulasi, SLiMS & Form QR"]
    end

    M --- F1
    C --- F2
    W --- F3

    F1 --> Hub["SINTESIS SUMBER TERINTEGRASI"]
    F2 --> Hub
    F3 --> Hub
```

### Algoritma Pencarian Sumber:
1. **Periksa Batasan Modul**: Buka `04_MODUL-DAN-MATERI/Modul X.md` untuk mengetahui apa keluaran wajib yang diminta dosen.
2. **Cek Doktrin Dosen**: Buka `06_CATATAN-KELAS/catatan_X.md` untuk melihat arahan khusus Bu Ratna (Pure Governance, penyelarasan Dekanat, dll).
3. **Validasi Data Lapangan (Multi-File)**:
   - Cek `03_DATA-LAPANGAN/Wawancara/Jawaban_Wawancara (2).md` untuk konteks 3 beban peran pustakawan (Sirkulasi, Referensi, Digilib), garis hierarki ke Wakil Dekan FT UNY, hubungan ke Perpus Pusat, dan standar akreditasi BAN-PT/LAM Teknik.
   - Cek `03_DATA-LAPANGAN/Wawancara/Jawaban3_Final.md` untuk detail sirkulasi, titik keterlambatan, SOP Quiet Hour, Rak Transit, dan Google Form QR.
   - Cek folder `03_DATA-LAPANGAN/Temuan/` untuk referensi analisis ekosistem, tata kelola data, dan ruang lingkup TI.


---

## 📡 2. RADAR INDEKS REPOSITORI (INDEX SCANNING)

Agent tidak boleh menebak isi repositori. Gunakan file indeks navigasi berikut sebagai kompas pencarian:
- [[SOURCE_INVENTORY.md]]: Daftar seluruh 97 file repositori, status verifikasi, dan lokasi folder.
- [[KNOWLEDGE_GRAPH.md]]: Peta keterhubungan konseptual antar-modul, temuan lapangan, dan 4 jurnal ilmiah.
- [[THEORY_TO_EVIDENCE_MATRIX.md]]: Matriks pemetaan teori 7 modul dan 4 jurnal riset terhadap bukti lapangan.
- [[Dashboard.md]]: Hub navigasi sentral untuk melihat status proyek terkini.
- `05_REFERENSI/`: 4 Jurnal ilmiah terakreditasi (Risparyanto 2014, Kusumaningrum et al. 2016, Kusharyanti et al. 2023, Effendi et al. 2013) serta data profil SLiMS & Glosarium.

---

## 🛡️ 3. PROTOKOL ANTI-BLINDSPOT (PELACAKAN GARIS KETURUNAN DELIVERABLES)

Mencegah agent "lupa" terhadap artefak yang telah disahkan pada modul-modul sebelumnya:

```mermaid
flowchart TD
    Mod4["Modul 4: 4 Deliverables Sah<br/>1. SOP Quiet Hour<br/>2. Rak Transit Pengembalian<br/>3. Form QR Code 4-Field<br/>4. Template Ekstraksi CSV"]
    
    Mod4 --> Check5{"Cek Modul 5:<br/>Apakah ke-4 Deliverable<br/>masuk ke Grand Design & RACI?"}
    Check5 -- Ya --> Mod5["Grand Design Modul 5 Sah"]
    Check5 -- Tidak --> Patch5["TRIGGER SELF-HEALING:<br/>Sisipkan deliverable yang hilang!"]

    Mod5 --> Check6{"Cek Modul 6:<br/>Apakah strategi implementasi<br/>mengevaluasi ke-4 deliverable?"}
    Check6 -- Ya --> Mod6["Strategi Modul 6 Sah"]
    Check6 -- Tidak --> Patch6["TRIGGER SELF-HEALING:<br/>Evaluasi ulang modul arsitektur!"]
```

---

## 🔗 Navigasi Graf
> 🔗 **Terkoneksi dengan**: [[Dashboard]] | [[fact-checker]] | [[academic-skill]] | [[revisi]] | [[obsidian-graph]]
