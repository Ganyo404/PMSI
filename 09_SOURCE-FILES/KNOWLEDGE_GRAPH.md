# Knowledge Graph (Peta Keterhubungan Semantik Proyek)

Visualisasi relasi semantik antar-dokumen inti pada proyek MSI Perpustakaan FT UNY. Terhubung langsung dengan [[Dashboard]], [[CONTEXT_INDEX]], [[SOURCE_INVENTORY]], dan [[THEORY_TO_EVIDENCE_MATRIX]].

```mermaid
graph TD
    %% Hub Utama
    DB["[[Dashboard]] (Jantung Proyek)"]

    %% Core Modules
    M1["[[Modul 1]] (Konsep SIM)"]
    M2["[[Modul 2]] (Stakeholder)"]
    M3["[[Modul 3]] (Root Cause)"]
    M4["[[Modul 4]] (Governance & Scope)"]
    M5["[[Modul 5]] (RACI & Kolaborasi)"]
    M6["[[Modul 6]] (Arsitektur & Change Plan)"]
    M7["[[Modul 7]] (WBS & Penjadwalan)"]

    %% Reports
    L1["[[Laporan_Praktikum_Pertemuan_1_Kelompok 3]]"]
    L2["[[Praktikum_2_Kelompok_3_revisi]]"]
    L3["[[Praktikum_3_Kelompok_3_Revisi]]"]
    L4["[[Praktikum_4_Kelompok3_revisi]]"]
    L5["[[Praktikum_5_Kelompok3]]"]
    L6["[[Praktikum_6_Kelompok3]]"]
    L7["[[Praktikum_7_Kelompok3]]"]

    %% Field Data
    W1["[[Jawaban_Wawancara (2)]]"]
    W2["[[Jawaban3_Final]]"]

    %% Catatan Kelas
    C1["[[catatan_1]]"]
    C2["[[catatan_2]]"]
    C3["[[catatan_3]]"]
    C4["[[catatan_4]]"]

    %% Referensi & Playbook
    REF1["[[Data_Perpustakaan_FT_UNY]]"]
    REF2["[[Glosarium_Perpustakaan]]"]
    AGN["[[TRAINING_PLAYBOOK]]"]

    %% Modul Pembelajaran Teori MSI (Dr. Ratna Wardani)
    TB1["[[Bab_1_Manajemen_Sistem_Informasi_dalam_Organisasi|Bab 1 Teori: Sosio-Teknis & Peran CIO]]"]
    TB2["[[Bab_2_Data_dan_Pengambilan_Keputusan|Bab 2 Teori: Fitness for Use & Lineage]]"]
    TB3["[[Bab_3_Proses_Bisnis_Stakeholder_dan_Nilai_Organisasi|Bab 3 Teori: End-to-End & Value Stream]]"]
    TB4["[[Bab_4_Evaluasi_Alternatif_Solusi_dan_Keputusan_Investasi_SI|Bab 4 Teori: Build-Buy-Configure & TELOS]]"]
    TB5["[[Bab_5_Tata_Kelola_Sistem_Informasi|Bab 5 Teori: 5 Domain & Archetypes]]"]
    TB6["[[Bab_6_Kerangka_Governance_TI_ISO_dan_COBIT|Bab 6 Teori: ISO 38500 & COBIT 2019]]"]
    TM7["[[Modul_7_Penjadwalan_Proyek_WBS_Gantt_PERT|Modul 7 Teori: WBS, Gantt & PERT]]"]

    %% Studi Kasus & Kurikulum
    CS1["[[Studi_Kasus_UPS_DIAD_IV|Kasus UPS: DIAD IV & Smart Labels]]"]
    CS2["[[Studi_Kasus_NBA_Akamai|Kasus NBA: Akamai EdgeNetwork CDN]]"]
    KUR["[[Dasar_Pengembangan_Kurikulum_Vokasional_Informatika|Kurikulum PTI: Paradigma OBE]]"]

    %% Literatur Ilmiah Terakreditasi
    J1["[[Jurnal_Motivasi_Pustakawan_UII_Risparyanto|Jurnal Risparyanto 2014 (SK Menpan 132/2002)]]"]
    J2["[[Jurnal_Kepuasan_Kerja_Pustakawan_LIPI_Kusumaningrum|Jurnal Kusumaningrum 2016 (Lingkungan & Motivasi)]]"]
    J3["[[Jurnal_Kepemimpinan_Lingkungan_Kinerja_Kusharyanti|Jurnal Kusharyanti 2023 (SmartPLS 3)]]"]
    J4["[[Jurnal_Motivasi_Komputer_Trouble_ISO9001_Effendi|Jurnal Effendi 2013 (Komputer Trouble & ISO 9001)]]"]

    %% Findings
    F1["[[Ekosistem Informasi Perpustakaan FT]]"]
    F9["[[Rancang SOP Sistem Informasi]]"]
    F6["[[Integrasi Portal Perpustakaan FT]]"]

    %% Relasi Dashboard
    DB --> L1 & L2 & L3 & L4 & L5 & L6 & L7
    DB --> M1 & M2 & M3 & M4 & M5 & M6 & M7
    DB --> TB1 & TB2 & TB3 & TB4 & TB5 & TB6 & TM7
    DB --> CS1 & CS2 & KUR
    DB --> J1 & J2 & J3 & J4
    DB --> REF1 & REF2 & AGN

    %% Relationships Teori ke Laporan
    M1 --> L1
    M2 --> L2
    M3 --> L3
    M4 --> L4
    M5 --> L5
    M6 --> L6
    M7 --> L7

    %% Teori Perkuliahan ke Laporan
    TB1 -.-> L1
    TB2 -.-> L2
    TB3 -.-> L3
    TB4 -.-> L4
    TB5 -.-> L5
    TB6 -.-> L6
    TM7 -.-> L7

    %% Relationships Alur Laporan Kumulatif
    L1 --> L2 --> L3 --> L4 --> L5 --> L6 --> L7

    %% Data Lapangan & Catatan ke Laporan
    W1 --> L1 & L2
    W2 --> L3 & L4 & L5 & L6 & L7
    C1 --> L1
    C2 --> L2
    C3 --> L3
    C4 --> L4 & L5 & L6 & L7

    %% Literatur Ilmiah ke Tata Kelola
    J1 -.-> L4 & L5
    J2 -.-> L4 & L6
    J3 -.-> L5 & L6
    J4 -.-> L4 & L7

    %% Solusi ke Laporan
    F1 -.-> L4 & L6
    F9 -.-> L4 & L5
    F6 -.-> L6
```

---

## 📌 Rantai Silsilah Artefak (Kumulatif Proyek)
1. **Modul 1 $\rightarrow$ Laporan 1**: Inisialisasi Organisasi Perpustakaan FT UNY dan identifikasi peran fungsional Pustakawan Tunggal.
2. **Modul 2 $\rightarrow$ Laporan 2**: Pemetaan Power-Interest Grid (Pemustaka, Pustakawan, Dekanat, Tim Akreditasi).
3. **Modul 3 $\rightarrow$ Laporan 3**: Analisis Akar Masalah (5 Why & Fishbone Diagram) yang membuktikan *delay* disebabkan ketiadaan SOP/jadwal rutin, bukan ketiadaan aplikasi.
4. **Modul 4 $\rightarrow$ Laporan 4**: Penetapan Scope *Pure Governance* dan 4 Deliverable (SOP Quiet Hour, Rak Transit, Form QR, Template Ekstraksi).
5. **Modul 5 $\rightarrow$ Laporan 5**: Grand Design Alur Data (3 Level Manajemen) dan RACI Matrix pembagian peran tim.
6. **Modul 6 $\rightarrow$ Laporan 6**: Arsitektur Berlapis, Evaluasi Strategi Hybrid, dan Manajemen Perubahan Perilaku.
7. **Modul 7 $\rightarrow$ Laporan 7**: WBS bertingkat, PERT Chart (Critical Path 36 Hari), dan Gantt Chart operasional.

