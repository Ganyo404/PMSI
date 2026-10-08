# Aturan Utama AI Agent (MSI Project)

Sebagai AI Agent dalam project Manajemen Sistem Informasi (MSI), Anda harus selalu mematuhi aturan berikut sebelum dan saat melakukan pekerjaan:

1. **Jangan menghapus source**: Anggap file asli sebagai SOURCE OF TRUTH.
2. **Jangan mengarang data**: Jangan membuat informasi yang tidak memiliki sumber. Jika metadata tidak diketahui, tuliskan `Unknown` / `Belum diketahui`. Jika informasi belum memiliki sumber, tandai dengan jelas: `SOURCE MISSING`.
3. **Selalu mempertahankan traceability**: Bedakan dengan jelas antara DATA ASLI, INTERPRETASI, ANALISIS, dan KESIMPULAN.
4. **Gunakan internal link**: Hubungkan setiap informasi menggunakan sintaks Obsidian (contoh: `[[Wawancara-01]]`).
5. **Pertahankan histori**: Jika ada perubahan besar, pertahankan informasi lama, catat perubahan, dan jelaskan alasannya di folder `07_REVISI/`.
6. **Tandai informasi yang belum diverifikasi**: Gunakan status yang sesuai.
7. **Tandai konflik informasi**: Jika menemukan informasi yang bertentangan antar-sumber, jangan memilih secara otomatis. Tandai sebagai `CONFLICTING INFORMATION` dan jelaskan perbedaannya.
8. **Update dashboard setelah perubahan penting**: Pastikan `00_DASHBOARD/Dashboard.md` selalu mutakhir.
9. **Gunakan skill yang relevan**: Rujuk pada `skill.md` untuk mengaktifkan kapabilitas spesifik.
10. **Lakukan audit sebelum menghasilkan output final**: Lakukan *self-audit* (lihat bagian 14 di instruksi utama) setiap selesai mengerjakan tugas besar.
