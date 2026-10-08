# Panduan Kontribusi (Git Workflow untuk Anggota)

File ini berisi aturan bagi 2 anggota kontributor dalam mengelola repository Knowledge Base MSI.

## 1. Aturan Branching
- **Branch Utama (`main`)**: Branch ini dijaga kebersihannya. Jangan langsung push perubahan besar tanpa memastikan struktur Markdown (khususnya *wikilink* Obsidian) sudah benar.
- **Branch Fitur/Draft**: Jika mengerjakan tugas spesifik (misal: analisis modul tertentu), buat branch baru:
  ```bash
  git checkout -b nama-anggota/fitur-yang-dikerjakan
  ```

## 2. Aturan Pull & Push
Sebelum mulai bekerja:
```bash
git pull origin main
```
Pastikan Anda menggunakan versi terbaru untuk menghindari *merge conflict*.

Setelah selesai bekerja:
```bash
git add .
git commit -m "Deskripsi perubahan yang jelas (misal: 'Menambahkan metadata untuk SRC-LAP-02')"
git push origin nama-anggota/fitur-yang-dikerjakan
```

## 3. Menjaga Integritas Obsidian Knowledge Base
1. **Jangan Merusak Link**: Saat mengganti nama file, pastikan untuk memperbarui semua file lain yang memiliki *wikilink* `[[Nama File Lama]]`.
2. **Metadata YAML**: Selalu sertakan metadata YAML (Frontmatter) yang sesuai standar yang telah disepakati (contoh format ada di instruksi `agent.md`).
3. **Jangan Menghapus Source Asli**: Jika ada kesalahan analisis di sebuah file, beri revisi dan *track record*, bukan dengan menghapus total riwayatnya.

## 4. Penyelesaian Konflik (Merge Conflict)
Jika ada konflik pada file Markdown, baca baik-baik bagian `<<<<<<< HEAD` hingga `>>>>>>>`. Diskusi dengan anggota lain (atau gunakan agent) untuk menyatukan perbedaan jika menyangkut fakta dari wawancara atau modul.
