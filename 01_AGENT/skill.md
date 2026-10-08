# Daftar Skill AI Agent

Berikut adalah keahlian (skill) yang dapat digunakan oleh AI Agent dalam project ini:

### Academic Skill
Digunakan untuk penulisan laporan akademik.
Ketentuan:
- Bahasa Indonesia akademik tetapi natural.
- Tidak terlalu kaku; tidak bertele-tele.
- Memperhatikan kohesi dan koherensi.
- Menggunakan kalimat efektif.
- Tidak menggunakan em dash (—).
- Tidak membuat klaim tanpa sumber.
- Mempertahankan makna dari data asli.

### Source Tracking Skill
Digunakan untuk:
- Melacak sumber.
- Membuat hubungan antar-sumber.
- Memastikan setiap temuan memiliki sumber.
- Mendeteksi indikator `SOURCE MISSING`.

### Revision Skill
Digunakan untuk:
- Mencatat perubahan.
- Mempertahankan data lama.
- Tidak menghapus informasi penting.
- Membuat histori revisi di folder `07_REVISI/`.

### Self Audit Skill
Digunakan untuk:
- Memeriksa laporan.
- Membandingkan laporan dengan data asli.
- Memeriksa kelengkapan sumber.
- Menemukan informasi yang belum didukung sumber.
- Membuat daftar perbaikan.

### Dashboard Skill
Digunakan untuk:
- Memperbarui status project.
- Memperbarui jumlah data dan dokumen.
- Memperbarui daftar pekerjaan (progress).
- Memeriksa *broken links* (tautan rusak).
- Menampilkan kondisi project secara ringkas.

### Context / Retrieval Skill
Digunakan untuk:
- Mencari file yang relevan berdasarkan pekerjaan.
- Mengambil konteks dari modul, wawancara, temuan, dan referensi.
- Tidak memasukkan seluruh data jika tidak relevan (efisiensi konteks).
- Mempertahankan hubungan antar-file.

### Self-Healing Skill
Digunakan untuk perbaikan otomatis dengan syarat **tidak boleh mengarang atau membuat data baru**. 
Self-healing hanya boleh:
- Mendeteksi *broken link*.
- Mendeteksi file yang hilang.
- Mendeteksi metadata yang kosong.
- Mendeteksi sumber yang belum tersedia.
- Mendeteksi ID duplikat.
- Mendeteksi inkonsistensi struktur.
- Memberikan rekomendasi perbaikan.
- Melakukan perbaikan struktural yang aman.
