# Master Panduan Responsi MSI
## Bedah Kausalitas Sosio-Teknis dan Rekayasa Proses Bisnis

Panduan ini merangkum proyek Kelompok 3 tentang pemutakhiran informasi koleksi Perpustakaan Fakultas Teknik UNY. Gunakan sebagai bahan belajar dan jawaban lisan. Angka yang disebut sebagai usulan atau target tidak boleh disampaikan sebagai hasil implementasi.

## 1. Cerita proyek dalam satu menit

Proyek kami berangkat dari kebutuhan menjaga kesesuaian informasi koleksi dengan kondisi fisik dan kebutuhan layanan. Perpustakaan menggunakan SLiMS sebagai sistem utama. Dari wawancara dan analisis proses, pembaruan status atau kondisi koleksi dapat tertunda karena pengelola utama membagi waktu antara beberapa fungsi layanan, sementara belum tersedia mekanisme tertulis dan jadwal pemutakhiran yang rutin. Laporan kondisi koleksi juga dapat datang dari beberapa kanal dan membutuhkan verifikasi fisik sebelum perubahan dicatat.

Karena itu, proyek tidak langsung mengganti sistem otomasi. Kami merancang perbaikan tata kelola dan proses: SOP pemutakhiran, alur laporan dan verifikasi, penjadwalan waktu kerja, media pelaporan/monitoring digital, serta format rekap. SLiMS tetap menjadi sistem utama untuk data koleksi. Proyek berkembang dari diagnosis dan analisis stakeholder pada Modul 1–3, penetapan ruang lingkup dan tata kelola pada Modul 4–6, perencanaan pada Modul 7, lalu penerjemahan alur menjadi wireframe, mockup, dan validasi pada Modul 8–10.

## 2. Diagnosis: gejala, akar masalah, dan dampak

**Gejala utama:** pembaruan informasi status/kondisi koleksi tidak selalu dilakukan segera sehingga informasi sistem dapat tertinggal dari kondisi terbaru.

**Akar masalah yang dirumuskan:** belum ada tata kelola tertulis yang mengatur jadwal pemutakhiran berkala dan tindak lanjut laporan secara seragam. Penyebab yang memperkuatnya adalah beban multi-tugas pengelola utama, layanan yang berjalan bersamaan dengan pekerjaan pengelolaan data, sumber laporan yang tersebar, serta monitoring status dan waktu penyelesaian yang belum seragam.

Rantai sebab-akibat yang kami gunakan:

```text
Belum ada SOP/jadwal dan mekanisme tindak lanjut seragam
                    ↓
Pengelola membagi waktu antara layanan dan pemutakhiran
                    ↓
Laporan menunggu pemeriksaan fisik dan tindak lanjut
                    ↓
Pembaruan SLiMS atau status laporan dapat tertunda
                    ↓
Informasi koleksi berisiko tidak sesuai dengan kondisi terbaru
                    ↓
Keputusan layanan dan rekap pengelolaan berisiko memakai data yang tertinggal
```

Ini adalah mekanisme yang didukung temuan wawancara dan analisis kelompok. Jangan menyatakan setiap laporan pasti terlambat atau mengklaim dampak kuantitatif, karena itu memerlukan pengukuran operasional.

### Lensa sosio-teknis

| Unsur | Temuan proyek | Makna analitis |
|---|---|---|
| Manusia | Pengelola utama menjalankan beberapa fungsi layanan dan pengelolaan | Kapasitas dan prioritas kerja membatasi waktu pemutakhiran |
| Metode | SOP dan jadwal rutin belum tertata seragam | Proses bergantung pada kebiasaan dan kondisi harian |
| Informasi | Laporan dapat berasal dari lisan, pesan, catatan, atau spreadsheet | Pelacakan dan konsolidasi berpotensi tidak konsisten |
| Teknologi | SLiMS menjadi sistem utama; pembaruan tetap memerlukan pemeriksaan dan input petugas | Teknologi tersedia, tetapi tidak menghilangkan kebutuhan tata kelola dan verifikasi |
| Lingkungan kerja | Pelayanan dan tugas pembaruan berjalan beriringan | Interupsi dan perubahan prioritas menciptakan friksi proses |
| Tata kelola | Sebagian tindakan rutin berada pada pengelola; weeding, konfigurasi, dan keputusan sumber daya dapat memerlukan otoritas lain | Desain solusi harus mengikuti batas kewenangan |

## 3. Proses bisnis: dari AS-IS ke TO-BE

### Proses AS-IS yang dianalisis

Informasi koleksi bermasalah dapat ditemukan atau dilaporkan oleh pemustaka maupun pengelola. Pengelola memeriksa kondisi fisik dan identitas koleksi, mencocokkannya dengan informasi SLiMS, menentukan tindak lanjut sesuai kewenangan, kemudian memperbarui data yang relevan. Proses selesai ketika tindakan dan informasi sistem sesuai. Titik rawannya adalah laporan yang tersebar, belum adanya status tindak lanjut baku, kebutuhan verifikasi fisik, dan persaingan waktu dengan layanan harian.

### Proses TO-BE yang dirancang

```text
Pemustaka/pengelola menemukan masalah
        ↓
Laporan dicatat melalui kanal yang ditetapkan (QR/form atau kanal resmi)
        ↓
Pengelola melakukan triase dan verifikasi fisik serta identitas koleksi
        ↓
Keputusan sesuai kewenangan
   ┌────┴─────┐
Tindakan rutin   Perlu persetujuan/rujukan
   ↓                     ↓
Pembaruan SLiMS      Diteruskan ke otoritas terkait
   └─────────┬───────────┘
             ↓
Status dan catatan tindak lanjut diperbarui
             ↓
Rekap berkala untuk evaluasi dan keputusan
```

QR/form adalah dukungan pelaporan dan monitoring, bukan pengganti verifikasi pustakawan dan bukan integrasi otomatis dengan SLiMS. Pembaruan SLiMS dilakukan oleh petugas melalui kewenangan yang tersedia. Sistem utama dan sumber data koleksi tetap SLiMS.

### Paket intervensi proyek

1. **SOP pemutakhiran** untuk penerimaan laporan, verifikasi, tindakan, pencatatan, eskalasi, dan penutupan.
2. **Jadwal pemutakhiran berkala** yang realistis terhadap ritme layanan. Wawancara mengusulkan sesi mingguan sekitar 30–60 menit; ini rekomendasi, bukan bukti jadwal yang telah berjalan.
3. **Rak transit** sebagai pemisahan fisik koleksi yang perlu diperiksa dari koleksi siap kembali ke rak, bila sesuai skenario pengembalian yang diterapkan.
4. **Form/QR dan monitoring** untuk menyeragamkan informasi laporan dan melacak status.
5. **Template rekap/ekstraksi** agar informasi operasional dapat ditinjau secara berkala tanpa mengklaim integrasi langsung.
6. **Wireframe dan mockup** untuk menerjemahkan kebutuhan layanan ke rancangan antarmuka dan skenario penggunaan.

## 4. Perjalanan keputusan Modul 1–10

| Modul | Hasil dalam proyek | Benang merah untuk responsi |
|---|---|---|
| 1 | Memahami organisasi, nilai informasi, dan SLiMS sebagai sistem transaksional yang juga dapat mendukung kebutuhan manajerial | Sistem informasi dinilai dari dukungannya pada proses dan keputusan, bukan hanya keberadaan aplikasi |
| 2 | Memetakan stakeholder dan kebutuhan informasi pada tingkat operasional, manajerial, dan strategis | Informasi yang dicatat di layanan dapat mendukung pemantauan dan keputusan organisasi jika kualitas serta alurnya terjaga |
| 3 | Menganalisis masalah dengan 5 Why dan Fishbone | Gejala keterlambatan ditelusuri ke tata kelola, beban kerja, metode, informasi, dan lingkungan proses |
| 4 | Menetapkan tujuan, ruang lingkup, deliverable, dan batasan | Memilih perbaikan proses/tata kelola yang sesuai masalah dan kewenangan, menghindari scope creep |
| 5 | Menyusun alur informasi, aktivitas, dan RACI | Menentukan siapa melaporkan, memverifikasi, memperbarui, menyetujui, dan menggunakan rekap |
| 6 | Mengaitkan arsitektur bisnis, data, aplikasi, dan teknologi serta perubahan organisasi | Perubahan harus dapat diadopsi pengelola dan tidak mengandaikan integrasi atau sumber daya yang belum tersedia |
| 7 | Membuat WBS, Gantt, dan analisis PERT | Jadwal proyek yang tercatat menunjukkan jalur kritis 36 hari; itu estimasi rencana, bukan durasi implementasi yang otomatis terbukti |
| 8 | Mengubah kebutuhan dan alur menjadi wireframe | Wireframe menggambarkan struktur fungsi dan aliran informasi, bukan bukti sistem produksi |
| 9 | Membuat mockup interaktif dan skenario kondisi khusus | Rancangan antarmuka memvisualisasikan interaksi dan kebutuhan, bukan sistem otomasi yang telah terintegrasi |
| 10 | Memvalidasi mockup dengan pemangku kepentingan terhadap masalah dan keputusan | Validasi memberi masukan atas kesesuaian rancangan; jangan menyamakan validasi rancangan dengan bukti dampak operasional |

## 5. Teori yang dipakai untuk menjelaskan keputusan

- **Sistem sosio-teknis:** hasil kerja lahir dari hubungan manusia, tugas, struktur, informasi, teknologi, dan lingkungan. Kasus ini tidak dapat dijelaskan hanya sebagai masalah software.
- **Kualitas informasi / fitness for use:** informasi harus cukup akurat, lengkap, dan tepat waktu untuk tugas serta keputusan yang dilayani.
- **Proses end-to-end dan friksi handoff:** analisis menelusuri laporan sampai verifikasi, pembaruan, dan penggunaan informasi, bukan berhenti pada batas aplikasi.
- **Build–Buy–Configure dan TELOS/TCO:** alternatif dinilai dari kelayakan teknis, ekonomi, hukum, operasional, jadwal, dan biaya sepanjang penggunaan. Configure proses dan sistem yang ada lebih sesuai dengan batas proyek daripada membangun portal penuh atau membeli RFID.
- **Tata kelola dan hak keputusan:** kewenangan operasional, persetujuan, anggaran, konfigurasi sistem, dan penghapusan aset harus dibedakan.
- **Arsitektur enterprise empat lapis:** perubahan proses bisnis harus konsisten dengan data, aplikasi, dan teknologi yang menopangnya.
- **Manajemen perubahan ADKAR:** pengelola perlu memahami alasan, memiliki kemauan dan kemampuan menjalankan proses, serta memperoleh penguatan melalui monitoring dan dukungan pimpinan.
- **PERT dan jalur kritis:** estimasi waktu dipakai untuk menyusun urutan dan ketergantungan kegiatan proyek, bukan menjanjikan bahwa semua adopsi lapangan pasti selesai pada tanggal rencana.

## 6. Penyelarasan vertikal dan nilai informasi

| Tingkat | Aktor/kebutuhan | Aliran nilai dari proyek |
|---|---|---|
| Operasional | Pengelola dan pemustaka memerlukan informasi kondisi/lokasi koleksi dan tindak lanjut laporan | Laporan dicatat, diverifikasi, ditindaklanjuti, lalu data yang berwenang diperbarui |
| Manajerial | Pengelola/pimpinan layanan memerlukan rekap laporan, status, dan pola masalah | Monitoring dan rekap mendukung evaluasi beban kerja, mutu data, dan prioritas tindak lanjut |
| Strategis | Pimpinan fakultas memerlukan informasi agregat untuk keputusan sumber daya dan arah layanan | Data yang telah diverifikasi dapat menjadi salah satu masukan keputusan; proyek tidak membuktikan otomatis perubahan anggaran atau akreditasi |

Alur informasinya: **temuan/laporan → verifikasi → pembaruan dan status → rekap → evaluasi → keputusan sesuai kewenangan**. Klaim tentang akreditasi atau pengadaan harus disampaikan sebagai potensi dukungan informasi, kecuali tersedia bukti langsung bahwa keputusan itu memakai data proyek.

## 7. Tata kelola, ruang lingkup, dan risiko

**Di dalam lingkup:** analisis proses, SOP dan jadwal, rancangan pelaporan/verifikasi, media bantu, monitoring/rekap, arsitektur konseptual, wireframe, mockup, dan validasi rancangan.

**Di luar lingkup:** mengganti SLiMS, mengubah source code atau database pusat, mengklaim API/integrasi langsung tanpa bukti, menambah staf permanen, memutuskan pengadaan atau penghapusan koleksi yang bukan kewenangan proyek.

| Risiko | Kendali yang dirancang |
|---|---|
| Pengelola tidak sempat menjalankan jadwal | Jadwal disepakati dengan pengelola, realistis, dan dimonitor; evaluasi ulang jika berbenturan dengan layanan |
| Laporan tidak lengkap/tidak valid | Field minimum yang relevan, verifikasi fisik dan identitas, status tidak valid bila perlu |
| Data ganda atau tidak konsisten | SLiMS tetap sumber utama data koleksi; media laporan menjadi antrean tindak lanjut, bukan salinan pengganti |
| Masalah memerlukan otoritas lain | Eskalasi dan pencatatan status menunggu keputusan |
| Jaringan/sistem tidak tersedia | Ikuti prosedur pencatatan sementara dan rekonsiliasi setelah layanan pulih sesuai SOP yang disahkan |
| Prototipe disalahpahami sebagai sistem operasional | Tegaskan batas mockup, alur manual, kewenangan, dan asumsi teknis |

## 8. Indikator evaluasi yang masuk akal

Indikator yang dapat digunakan setelah baseline ditetapkan: proporsi laporan yang memiliki identitas dan status tindak lanjut; kelengkapan catatan verifikasi; waktu dari laporan ke verifikasi dan penyelesaian; kepatuhan terhadap jadwal pemutakhiran; jumlah laporan tertunda; serta kesesuaian sampel kondisi fisik dengan data SLiMS. Tetapkan pemilik data, periode ukur, baseline, dan target sebelum menyatakan keberhasilan. Target seperti 85%, batas 3 hari untuk pemeriksaan awal, atau 7 hari untuk pembaruan yang pernah muncul dalam diskusi adalah target/usulan, bukan capaian terverifikasi.

## 9. Jawaban inti untuk pertanyaan penguji

### “Apa masalah utama proyek kalian?”

Masalah yang kami kaji adalah pembaruan status dan kondisi koleksi yang dapat tertunda sehingga informasi tidak selalu sejalan dengan keadaan terbaru. Analisis tidak berhenti pada gejala tersebut. Wawancara dan pemetaan proses menunjukkan belum adanya SOP serta jadwal pemutakhiran yang seragam, beban beberapa fungsi pada pengelola utama, laporan dari beragam kanal, dan kebutuhan verifikasi fisik. Kombinasi ini membuat tindak lanjut bergantung pada waktu dan kebiasaan kerja.

### “Mengapa tidak membuat aplikasi baru?”

Karena temuan utama mengarah pada tata kelola proses dan kapasitas kerja, bukan ketiadaan sistem otomasi. SLiMS sudah menjadi sistem utama. Aplikasi baru berisiko menambah pencatatan ganda, biaya pemeliharaan, dan beban pengelola, sementara perubahan pada sistem pusat juga berada di luar kewenangan proyek. Karena itu kami merancang SOP, jadwal, mekanisme verifikasi, dan media pelaporan/monitoring sebagai dukungan. Jika kelak bukti menunjukkan kebutuhan fungsi yang tidak dapat dipenuhi sistem yang ada, opsi teknologi dapat dievaluasi kembali dengan analisis kelayakan dan biaya.

### “Apa akar masalahnya, bukan gejalanya?”

Keterlambatan pembaruan adalah gejala. Akar yang kami rumuskan ialah belum adanya tata kelola tertulis yang mengatur waktu, urutan kerja, status tindak lanjut, dan eskalasi secara rutin. Beban layanan pengelola serta informasi yang tersebar memperkuat masalah tersebut. Perumusan ini diturunkan melalui 5 Why dan diperiksa dengan kategori Fishbone.

### “Bagaimana solusi kalian memperbaiki proses?”

Solusi memberi jalur laporan yang lebih seragam, menetapkan verifikasi fisik sebagai kontrol, membedakan tindakan rutin dari kasus yang harus dieskalasi, menyediakan waktu pemutakhiran yang disepakati, dan mencatat status sampai selesai. Setelah verifikasi, petugas memperbarui SLiMS sesuai kewenangannya. Rekap kemudian membantu evaluasi. Dengan demikian perbaikan mencakup metode, tanggung jawab, informasi, dan dukungan teknologi.

### “Apakah QR/form langsung terhubung ke SLiMS?”

Tidak. Rancangan QR/form berfungsi menerima dan memantau laporan. Pustakawan tetap memeriksa kondisi fisik dan identitas koleksi, lalu melakukan pembaruan pada SLiMS melalui akses yang tersedia. Kami tidak mengklaim adanya API atau integrasi langsung dengan database pusat.

### “Bagaimana solusi menjangkau pimpinan?”

Pada tingkat operasional, pengelola mencatat dan memverifikasi laporan serta memperbarui informasi. Rekapnya dapat mendukung pemantauan manajerial atas status tindak lanjut dan pola masalah. Informasi agregat yang terjaga dapat menjadi masukan bagi pimpinan dalam keputusan layanan atau sumber daya. Hubungan ini merupakan jalur dukungan keputusan, bukan klaim bahwa proyek sudah mengubah kebijakan atau anggaran.

### “Bagaimana mengukur keberhasilan?”

Kami perlu menetapkan baseline sebelum implementasi. Ukur kelengkapan laporan dan status, waktu dari laporan ke verifikasi/penyelesaian, kepatuhan terhadap jadwal, jumlah tunggakan, dan kecocokan sampel fisik dengan catatan SLiMS. Hasil dinilai dalam periode yang disepakati. Tanpa baseline dan pengukuran setelah penerapan, kami hanya dapat menyatakan rancangan telah dibuat atau divalidasi, bukan bahwa kinerja sudah meningkat.

### “Apa keterbatasan proyek?”

Proyek dibatasi waktu, anggaran, akses terhadap sistem pusat, kewenangan perubahan, serta kapasitas pengelola. Artefak wireframe dan mockup membuktikan rancangan dan skenario, bukan implementasi produksi atau dampak jangka panjang. Beberapa angka dalam rancangan adalah target/usulan. Karena itu rekomendasi perlu diuji pada proses nyata dan disesuaikan bersama pihak berwenang.

## 10. Pertanyaan lanjutan yang perlu dikuasai

1. Bagaimana 5 Why dan Fishbone saling melengkapi?
2. Mengapa verifikasi fisik tidak dapat digantikan oleh form?
3. Apa perbedaan sumber data laporan dengan sumber kebenaran data koleksi?
4. Bagaimana RACI mencegah aktivitas tanpa penanggung jawab atau persetujuan?
5. Bagaimana strategi implementasi bertahap mengurangi gangguan layanan?
6. Apa asumsi yang harus diuji saat mockup divalidasi?
7. Apa yang akan berubah jika pengelola atau kewenangan sistem berubah?
8. Risiko apa yang paling mungkin membuat SOP tidak diadopsi, dan bagaimana mendeteksinya?

## 11. Rumus jawaban lisan

Jawab dengan urutan **klaim → bukti → analisis → keputusan → batas → ukuran**:

> “Temuan kami adalah **[klaim]**. Dasarnya **[wawancara/observasi/dokumen]**. Analisis kami menunjukkan **[mekanisme]**. Karena itu kami memilih **[keputusan]** setelah mempertimbangkan **[alternatif/kendala]**. Batas rancangan ini **[batas kewenangan atau bukti]**. Keberhasilannya akan diperiksa melalui **[indikator dan periode]**.”

Jika tidak mengetahui jawaban, sebutkan apa yang sudah diketahui, data apa yang belum ada, dan bagaimana data tersebut akan memengaruhi keputusan. Jangan mengarang angka, kewenangan, hasil validasi, atau implementasi.

## 12. Ringkasan hafalan

**Masalah:** pemutakhiran informasi koleksi dapat tertunda.  
**Akar:** tata kelola jadwal dan tindak lanjut belum seragam, diperkuat beban multi-tugas dan laporan tersebar.  
**Prinsip:** masalah MSI bersifat sosio-teknis, bukan otomatis masalah kekurangan aplikasi.  
**Solusi:** SOP + jadwal + laporan/QR + verifikasi + pembaruan SLiMS + monitoring/rekap.  
**Batas:** tidak mengganti atau mengintegrasikan langsung ke SLiMS pusat tanpa kewenangan/bukti.  
**Bukti hasil:** saat ini bedakan artefak rancangan/validasi dari implementasi dan dampak yang terukur.

## 13. Sumber proyek untuk pendalaman

- Laporan Modul 1–10: `02_LAPORAN/`
- Data wawancara dan validasi: `03_DATA-LAPANGAN/Wawancara/`, `03_DATA-LAPANGAN/Kuisioner/`, dan `03_DATA-LAPANGAN/Instrumen_Validasi_Mockup_Modul_10.md`
- Analisis, revisi, dan keputusan proyek: `03_DATA-LAPANGAN/Temuan/`
- Pemetaan teori dan bukti: `09_SOURCE-FILES/THEORY_TO_EVIDENCE_MATRIX.md`
- Pedoman responsi: `.agents/skills/defense-prep/SKILL.md`
- Standar akademik: `.agents/skills/academic-skill/SKILL.md`

## Navigasi graf

[[Dashboard]] · [[THEORY_TO_EVIDENCE_MATRIX]] · [[SOURCE_INVENTORY]] · [[defense-prep]] · [[academic-skill]] · [[problem-solving]] · [[enterprise-architecture]] · [[change-management]]
