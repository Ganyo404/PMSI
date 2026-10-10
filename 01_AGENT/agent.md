# Aturan Utama AI Agent (MSI Project - Perpustakaan FT UNY)

Sebagai AI Agent dalam project Manajemen Sistem Informasi (MSI), Anda harus selalu mematuhi aturan baku berikut sebelum dan saat melakukan pekerjaan:

1. **Jangan menghapus source**: Anggap file asli sebagai SOURCE OF TRUTH.
2. **Jangan mengarang data**: Jangan membuat informasi yang tidak memiliki sumber. Jika metadata tidak diketahui, tuliskan `Unknown` / `Belum diketahui`. Jika informasi belum memiliki sumber, tandai dengan jelas: `SOURCE MISSING`.
3. **Selalu mempertahankan traceability**: Bedakan dengan jelas antara DATA ASLI, INTERPRETASI, ANALISIS, dan KESIMPULAN.
4. **Gunakan internal link**: Hubungkan setiap informasi menggunakan sintaks Obsidian (contoh: `[[Wawancara-01]]`).
5. **Pertahankan histori**: Jika ada perubahan besar, pertahankan informasi lama, catat perubahan, dan jelaskan alasannya di folder `07_REVISI/`.
6. **Tandai informasi yang belum diverifikasi**: Gunakan status yang sesuai.
7. **Tandai konflik informasi**: Jika menemukan informasi yang bertentangan antar-sumber, jangan memilih secara otomatis. Tandai sebagai `CONFLICTING INFORMATION` dan jelaskan perbedaannya.
8. **Update dashboard setelah perubahan penting**: Pastikan `00_DASHBOARD/Dashboard.md` selalu mutakhir.
9. **Gunakan skill yang relevan**: Rujuk pada `01_AGENT/skill.md` dan folder `.agents/skills/` untuk mengaktifkan kapabilitas spesifik.
10. **Lakukan audit sebelum menghasilkan output final**: Lakukan *self-audit* (lihat bagian 14 di instruksi utama) setiap selesai mengerjakan tugas besar.
11. **Jalankan Self-Healing secara Mandiri**: Jika mendeteksi broken wikilink, orphan node, kerusakan diagram Mermaid, atau hilangnya deliverable lintas modul, lakukan diagnosis dan perbaikan otomatis mengacu pada `.agents/skills/self-healing/SKILL.md`.
12. **Pelihara Gravitasi Dashboard**: Jaga agar `[[Dashboard]]` selalu menjadi simpul sentral terbesar dengan memastikan dokumen baru terhubung secara dua arah (*bidirectional link*).
13. **Terapkan Penalaran Sistemik (*Problem-Solving*)**: Urai masalah operasional dengan 5-Whys dan Diagram Ishikawa (Fishbone). Pertahankan pilihan tata kelola menggunakan *Trade-Off Matrix*.
14. **Audit Fakta & Anti-Halusinasi (*Fact-Checker*)**: Lakukan verifikasi silang 3 titik (Wawancara, Catatan Dosen, Modul). Tolak keras klaim fiktif seperti penambahan staf magang atau pengadaan software ratusan juta.
15. **Gunakan Kerangka 4-Layer (*Enterprise Architecture*)**: Setiap memodelkan sistem informasi (khususnya Modul 5 dan 6), petakan ke dalam Business, Data, Application, dan Technology Layer.
16. **Mitigasi Resistensi Pemangku Kepentingan (*Change Management*)**: Petakan posisi pemangku kepentingan ke dalam *Power-Interest Grid* dan rencanakan adopsi perubahan bertahap berbasis kerangka *ADKAR*.
17. **Kesiapan Pembelaan Responsi (*Defense-Prep*)**: Selalu pertahankan solusi berbasis *Pure Governance* dan keselarasan vertikal (*Vertical Alignment*) terhadap potensi sanggahan Dosen Pengampu (Bu Ratna).
18. **Sintesis Nilai Tambah ke Pimpinan (*Executive-Synthesis*)**: Hubungkan seluruh output teknis di tingkat perpustakaan dengan kepentingan strategis fakultas (Akreditasi LAM-INFOKOM Kriteria 5 dan Anggaran Dekanat FT UNY).
19. **Patuhi Routing Penempatan & Taksonomi (*Information-Routing*)**: Jangan salah menaruh file antar-folder. Pastikan fakta empiris di Bag 3, hasil/artefak di Bag 4, kendala di Bag 5, dan gunakan kodefikasi resmi (`SOP-001`, `RACK-001`, `FORM-001`, `TMP-001`).
20. **Lakukan Triangulasi 3 Titik & Hindari Blindspot (*Source-Retrieval*)**: Setiap menyusun bab laporan, wajib merujuk secara simultan ke Panduan Modul, Catatan Dosen Bu Ratna, dan Transkrip Wawancara 3 serta mengaudit keterhubungan deliverable lampau.
21. **Bangun Analisis Berbasis First-Principles (*Systemic-Reasoning*)**: Hindari generalisasi permukaan; urai masalah interupsi sirkulasi sampai ke hukum fisik dasarnya dan gunakan pemodelan ikatan sebab-akibat (*Causal Loop*).
22. **Terapkan Stylometri Akademik & Eliminasi Slop AI (*Prose-Crafting*)**: Atur variasi ritme kalimat, gunakan diksi manajerial resmi Indonesia (disparitas, distorsi, cognitive load), hapus tanda em-dash (`—`), dan gunakan 100% kalimat aktif berpelaku.
23. **Susun Cetak Biru Komprehensif (*System-Blueprint*)**: Sajikan rancangan sistem lengkap dengan Konsep Operasional Layanan (ConOps), interoperabilitas data multi-platform, dan penataan tata ruang fisik fasilitas transit.
24. **Visualisasikan Model Sistem secara Baku (*Visualization*)**: Gunakan diagram Mermaid yang tepat (Flowchart, Sequence, Quadrant, State) dan terapkan aturan anti-crash syntax (kutip ganda pada label bertanda kurung/spasi dan tag `<br/>`).
25. **Patuhi Master Training Playbook (*TRAINING_PLAYBOOK.md*)**: Kuasai 6 skenario stres operasional lapangan (lonjakan sirkulasi, internet down, barcode rusak, salah input form, audit mendadak LAM-INFOKOM, dan sanggahan teknologi RFID vs Barcode).
26. **Pertahankan Single Source of Truth Fisik & SLiMS**: Ketika terjadi disparitas antara respon Google Form dan fisik buku, otoritas kebenaran mutlak selalu dipegang oleh pemindaian fisik barcode langsung ke database lokal SLiMS 9 Bulian.
27. **Integrasikan Animasi & Motion Graphics Terprogram (*Hyperframes*)**: Gunakan ekosistem skill `hyperframes` (animation, creative, keyframes, core, audio, studio, cli, media-use) saat merancang demonstrasi visual interaktif, simulasi alur sistem, maupun materi presentasi video responsi praktikum.
28. **Tegakkan Desain Antarmuka Anti-Slop (*Uizze UI/UX*)**: Terapkan standar skill `ui-design`, `anti-ui-slop`, `ui-radar`, dan `image-to-ui` untuk membasmi elemen antarmuka generik, memperkuat hierarki visual, serta memastikan seluruh state kontrol antarmuka terdefinisi secara matang.


