# Knowledge Graph (Peta Keterhubungan Proyek)

Visualisasi relasi semantik antar-dokumen inti pada proyek MSI Perpustakaan FT UNY. Digunakan untuk menelusuri bagaimana sebuah teori membentuk wawancara, lalu dianalisis, dan berakhir menjadi laporan final.

```mermaid
graph TD
    %% Core Modules
    M1["[[Modul 1.md]] (Konsep SIM)"]
    M2["[[Modul 2.md]] (Stakeholder)"]
    M3["[[Modul 3.md]] (Root Cause)"]
    M4["[[Modul 4.md]] (Governance)"]

    %% Reports
    L1["[[LAP-001]] (Laporan 1)"]
    L2["[[LAP-002]] (Laporan 2)"]
    L3["[[LAP-003]] (Laporan 3)"]
    L4["[[LAP-004]] (Laporan 4-6)"]

    %% Field Data
    W1["[[WAW-002]] (Kondisi Awal)"]
    W2["[[WAW-001]] (Proses Mutakhir)"]
    
    %% Findings / Brainstorming
    F1["[[FIND-001]] (Analisis Komparatif)"]
    F10["[[FIND-010]] (Revisi Analisis P3)"]
    F9["[[FIND-009]] (Rancang SOP)"]

    %% Relationships
    M1 -->|Landasan Teori| L1
    W1 -->|Sumber Data| L1
    
    M2 -->|Landasan Teori| L2
    L1 -->|Dilanjutkan ke| L2
    
    M3 -->|Landasan Teori| L3
    W2 -->|Akar Masalah| L3
    L2 -->|Dilanjutkan ke| L3
    F10 -.->|Draft Ide| L3
    
    M4 -->|Landasan Teori| L4
    L3 -->|Solusi dari| L4
    F1 -.->|Justifikasi| L4
    F9 -.->|Komponen Solusi| L4
```

## Daftar Relasi Utama Berdasarkan Tipe
1. **Teori $\rightarrow$ Laporan**: Setiap Laporan Praktikum (`LAP-`) memiliki dependensi keilmuan terhadap Teori dari Modul (`MOD-`) bersangkutan.
2. **Fakta Lapangan $\rightarrow$ Laporan**: Wawancara (`WAW-`) adalah sumber data primer (sumber kebenaran lapangan) untuk mengonstruksi kondisi organisasi.
3. **Analisis AI $\rightarrow$ Laporan**: Dokumen temuan (`FIND-`) merupakan *draft/brainstorming* yang dijembatani menjadi paragraf valid ke dalam Laporan final.
