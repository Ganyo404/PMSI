---
name: mockup-design
description: Skill perancangan mockup UI/UX interaktif tingkat tinggi (High-Fidelity), estetika visual modern (Glassmorphism, Micro-Animations, Dynamic States), device frame responsive, dan simulasi data live untuk presentasi praktikum MSI Perpustakaan FT UNY.
---

# Mockup-Design & Interactive UI Prototyping Skill

Skill ini memandu AI Agent dalam merancang, menata, dan membangun **Mockup Antarmuka Pengguna Interaktif (High-Fidelity Interactive Prototype)** yang memiliki estetika visual premium (*WOW Factor*), fungsionalitas simulasi data *real-time*, dan kelayakan presentasi sidang di hadapan dosen pengampu (Dr. Ratna Wardani).

---

## 🎨 1. PRINSIP ESTETIKA VISUAL (THE WOW FACTOR)

Mockup sistem **bukan sekadar wireframe kotak abu-abu polos**. Mockup harus memukau pada pandangan pertama (*visually stunning*) dengan standar:

### A. Palet Warna Kurasi (Harmonious Theme)
* **Primary Brand (UNY Academic Navy):** `#0a1931` / `#0f2b5c` - Menggambarkan otoritas institusional dan stabilitas akademik.
* **Secondary Accent (SLiMS Cyan / Tech Blue):** `#0284c7` / `#38bdf8` - Melambangkan integrasi teknologi informasi dan katalog digital.
* **Status Indicators (Tata Kelola & SLA):**
  * 🟢 **Normal / Aman (< 3 Hari):** `#10b981` (Emerald Glow)
  * 🟡 **Peringatan SLA (3 - 5 Hari):** `#f59e0b` (Warm Amber)
  * 🔴 **Kritis / Terlambat (> 7 Hari):** `#ef4444` (Coral Alert)
* **Surface & Canvas:**
  * Light Mode Surface: `#f8fafc` dengan kartu putih bersih `#ffffff`.
  * Glassmorphism Overlay: `rgba(255, 255, 255, 0.85)` dengan `backdrop-filter: blur(12px)`.
  * Dark Accents: Slate gradient `#0f172a` ke `#1e293b`.

### B. Tipografi Modern & Berkelas
* **Font Antarmuka Utama:** *Plus Jakarta Sans* atau *Inter* (Google Fonts) dengan variasi bobot `400 (Regular)`, `500 (Medium)`, `600 (Semi-Bold)`, `700 (Bold)`.
* **Font Data Teknis / Barcode / Kode Tiket:** *JetBrains Mono* atau *Fira Code* untuk nomor tiket (`TKT-202610-001`) dan barcode buku (`FT-INF-2024-001`).

### C. Kedalaman & Dimensi (Depth & Elevation)
* Gunakan bayangan berlapis halus: `box-shadow: 0 10px 25px -5px rgba(15, 43, 92, 0.08), 0 8px 10px -6px rgba(15, 43, 92, 0.04)`.
* Garis tepi halus (*subtle borders*): `border: 1px solid rgba(226, 232, 240, 0.8)`.

---

## 📱 2. MULTI-VIEWPORT & DEVICE FRAMING

Mockup harus menampilkan peran pengguna dalam bingkai perangkat (*device viewport*) yang kontekstual:

```
┌───────────────────────────────────────┬─────────────────────────────────────────────────┐
│        1. PORTAL PEMUSTAKA            │          2. WORKSPACE PUSTAKAWAN                │
│       (Mobile Phone Frame)            │            (Desktop Dashboard)                  │
├───────────────────────────────────────┼─────────────────────────────────────────────────┤
│  ┌─────────────────────────┐          │  ┌──────────┬────────────────────────────────┐  │
│  │ 📱 Frame Smartphone     │          │  │ Sidebar  │ Topbar: Timer Quiet Hour 60:00 │  │
│  │ - Dynamic Island / Notch│          │  │ Navigasi ├────────────────────────────────┤  │
│  │ - Header QR Scan        │          │  │ - Tiket  │ KPI Cards: Total | SLA Breach  │  │
│  │ - Form Laporan 4-Field  │          │  │ - SLiMS  ├────────────────────────────────┤  │
│  │ - Upload Bukti Foto     │          │  │ - Rak Tr │ Live Queue Table (Badge SLA)   │  │
│  │ - Arahan Rak Transit    │          │  │ - Arsip  │ Action Modal: SLiMS Checklist  │  │
│  └─────────────────────────┘          │  └──────────┴────────────────────────────────┘  │
└───────────────────────────────────────┴─────────────────────────────────────────────────┘
```

1. **Role 1 (Pemustaka):** Tampil dalam **Bingkai Layar Smartphone (iPhone-like Mockup Container)** dengan bayangan mengapung (*floating frame*), mencerminkan penggunaan mobile saat memindai QR Code di meja perpustakaan.
2. **Role 2 (Pustakawan Tunggal):** Tampil dalam format **Desktop Admin Dashboard** profesional, lengkap dengan indikator jam digital, widget *Quiet Hour Timer*, tabel antrean tiket interaktif, dan modal verifikasi.
3. **Role 3 (Dekanat & Akreditasi):** Tampil dalam format **Executive Suite Dashboard** dengan visualisasi grafik batang keterpakaian koleksi per prodi, tombol unduh borang LAM-INFOKOM, dan kartu rekomendasi anggaran.

---

## ⚡ 3. SINKRONISASI DATA INTERAKTIF (LIVE SIMULATION ENGINE)

Mockup tidak boleh statis (mati). Harus ada simulasi pertukaran data yang saling terhubung antar-tab:
1. **Event Submit Pemustaka:** Saat pengguna mengisi form di Tab Pemustaka dan mengklik *"Kirim Laporan"*:
   - Menghasilkan nomor tiket unik secara otomatis.
   - Memunculkan dialog sukses dengan instruksi peletakan buku di Rak Transit.
   - **Secara otomatis memasukkan data tiket baru tersebut ke tabel antrean di Tab Pustakawan!**
2. **Event Verifikasi Pustakawan:**
   - Pustakawan dapat mengklik tombol *"Quiet Hour Mode"* $\rightarrow$ Countdown timer 60 menit berjalan.
   - Pustakawan dapat mengklik salah satu tiket $\rightarrow$ Muncul modal verifikasi.
   - Centang checklist fisik dan SLiMS $\rightarrow$ Tiket berubah status menjadi `RESOLVED`.
   - Angka KPI di Dashboard Pustakawan dan Dekanat langsung ter-update.
3. **Event Ekspor Borang LAM-INFOKOM:**
   - Di Tab Dekanat, tombol *"Download Borang Kriteria 5"* benar-benar memicu unduhan berkas CSV/Excel ke komputer pengguna.

---

## 🛡️ 4. PENYELARASAN DENGAN EVALUASI DOSEN (BU RATNA PROOF)

Setiap elemen UI di dalam mockup **wajib memiliki alasan manajerial MSI**:
* **Kenapa ada Timer Quiet Hour?** $\rightarrow$ Menjawab akar masalah beban ganda 1 pustakawan yang menangani 52 pengunjung/hari tanpa waktu khusus pemutakhiran data.
* **Kenapa ada Badge Indikator SLA?** $\rightarrow$ Menjamin standar mutu layanan (3 hari verifikasi fisik, 7 hari input SLiMS).
* **Kenapa ada Tombol Ekspor LAM-INFOKOM?** $\rightarrow$ Mengeliminasi permintaan rekap data manual yang merepotkan pustakawan tiap siklus akreditasi prodi.
* **Kenapa ada Panel Rekomendasi Dekanat?** $\rightarrow$ Menyediakan basis data riil bagi pimpinan fakultas dalam merumuskan anggaran pengadaan buku (*Evidence-Based Procurement*).

---

## 📋 5. CHECKLIST PENYELESAIAN MOCKUP
- [ ] Dibangun menggunakan HTML5, Vanilla CSS Modern, dan JavaScript bersih (zero dependency).
- [ ] Navigasi Role Switcher di bagian atas (Pemustaka, Pustakawan, Dekanat, Denah Ruang).
- [ ] Responsive dari layar laptop hingga monitor desktop.
- [ ] Memuat data riil Fakultas Teknik UNY (Pendidikan Teknik Informatika, Elektro, Mesin, Sipil).
- [ ] Bebas dari placeholder teks kosong (*lorem ipsum*), seluruh label menggunakan terminologi perpustakaan yang presisi.
