---
id: REF-MOD-07-THEORY
title: "Modul 7: Penjadwalan Proyek Sistem Informasi (WBS, Gantt Chart, dan PERT Chart)"
type: reference
author: "Dr. Ratna Wardani, S.Si., M.T."
institution: "Pendidikan Teknik Informatika, Fakultas Teknik, Universitas Negeri Yogyakarta"
academic_year: "2026"
tags:
  - referensi
  - modul-praktikum
  - wbs
  - gantt-chart
  - pert-chart
  - critical-path
  - ft-uny
related_modules:
  - "[[Modul 7]]"
  - "[[Praktikum_7_Kelompok3]]"
  - "[[Dashboard]]"
---

# Modul 7: Penjadwalan Proyek Sistem Informasi (WBS, Gantt Chart, dan PERT Chart)

> 🔗 **Navigasi:** [[Dashboard]] | [[CONTEXT_INDEX]] | [[SOURCE_INVENTORY]] | [[Modul 7]] | [[Praktikum_7_Kelompok3]] | [[Bab_6_Kerangka_Governance_TI_ISO_dan_COBIT]]

Dokumen referensi ini merangkum kerangka teoretis dan metodologi penjadwalan proyek sistem informasi berdasarkan panduan perkuliahan Dr. Ratna Wardani, S.Si., M.T. (PTF60234). Berkas fisik PDF `Modul 7.pdf` di direktori ini terhubung langsung dengan naskah panduan utama di `[[Modul 7]]` dan penerapannya pada `[[Praktikum_7_Kelompok3]]`.

---

## 🎯 1. Capaian Pembelajaran Mata Kuliah (CPMK 3)

Mahasiswa mampu mengaplikasikan instrumen manajemen proyek sistem informasi untuk menyusun jadwal kerja terukur, mengidentifikasi dependensi tugas antarmodul, dan menentukan jalur kritis (*Critical Path*) agar implementasi tata kelola sistem informasi selesai tepat waktu.

---

## 🛠️ 2. Tiga Instrumen Manajemen Penjadwalan Proyek

1. **Work Breakdown Structure (WBS):** Dekomposisi hierarkis bertingkat dari seluruh ruang lingkup pekerjaan proyek menjadi paket kerja (*work packages*) yang dapat diestimasi durasi dan penanggung jawabnya.
2. **Gantt Chart:** Visualisasi batang horizontal kalender kerja yang memetakan jadwal mulai (*start date*), durasi pengerjaan (*duration*), tonggak capaian (*milestones*), dan jadwal selesai (*end date*) setiap aktivitas.
3. **Program Evaluation and Review Technique (PERT) Chart:** Diagram jaringan aktivitas (*network diagram*) yang memodelkan hubungan ketergantungan antartugas (*precedence relationships*) menggunakan estimasi tiga titik waktu: waktu optimis ($a$), waktu paling mungkin ($m$), dan waktu pesimis ($b$):

$$\text{Expected Duration } (t_e) = \frac{a + 4m + b}{6}$$

$$\text{Variance } (\sigma^2) = \left(\frac{b - a}{6}\right)^2$$

---

## 🚩 3. Analisis Jalur Kritis (Critical Path Method - CPM)

Jalur kritis adalah lintasan aktivitas berantai terpanjang dari titik awal hingga titik akhir proyek dengan nilai kelonggaran waktu (*float / slack*) bernilai nol ($ES = LS$ dan $EF = LF$). Keterlambatan pada satu aktivitas di jalur kritis secara otomatis akan menunda tanggal penyelesaian keseluruhan proyek.

---

## 💡 4. Implementasi pada Kasus Perpustakaan FT UNY

Dalam laporan `[[Praktikum_7_Kelompok3]]`, jadwal implementasi solusi tata kelola **SIMPEL-KOLEKSI FT UNY** dijadwalkan tuntas dalam durasi jalur kritis **36 hari kerja efektif**, meliputi fase inisialisasi regulasi dekanat, pengadaan rak transit, uji coba formulir QR code, pelatihan pustakawan tunggal, hingga evaluasi akreditasi prodi.

---

## 📚 5. Referensi Terkait

- Dr. Ratna Wardani, S.Si., M.T. (2026). *Modul 7: Pembuatan Gantt Chart dan PERT Chart*. S1 PTI FT UNY.
- Panduan Naskah Lengkap: `[[Modul 7]]`.
- Laporan Praktikum Implementatif: `[[Praktikum_7_Kelompok3]]`.
