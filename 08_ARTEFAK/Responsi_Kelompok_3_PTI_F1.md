# Transkripsi Markdown Slide PPT: Responsi Kelompok 3 PTI F1
**Sumber Berkas PDF:** [`08_ARTEFAK/Responsi Kelompok 3 PTI F1.pdf`](file:///c:/Kuliah/Semester%205/Manajemen%20Sistem%20Informasi%20(sms%205)/Praktikum/PMSI-main/08_ARTEFAK/Responsi%20Kelompok%203%20PTI%20F1.pdf)  
**Jumlah Halaman:** 15 Slide  

---

## Slide 1: Cover Presentasi
- **Header:** University Negeri Yogyakarta | P.MSI | Kelompok 3
- **Judul Utama:** TATA KELOLA SIRKULASI KOLEKSI DAN EFISIENSI KERJA PUSTAKAWAN FT
- **Subjudul:** Presentation (Presented Date: November 2026)
- **Anggota Kelompok 3:**
  - Gantar Abimanyu (24050530042)
  - Ganendra Pradipa (24050530038)
  - M Fadlan Dirmansyah (24050530034)
- **Elemen Visual:** Bingkai gambar placeholder kanan belum terisi foto.

---

## Slide 2: Introduction (Studi Kasus)
- **Judul:** INTRODUCTION — Studi Kasus
- **Isi Paragraf 1:**
  UPT Perpustakaan Fakultas Teknik UNY melayani kebutuhan referensi dan sirkulasi ribuan mahasiswa dari enam jurusan dengan SLiMS 9 Bulian sebagai sistem otomasi utama. Dalam operasional sehari-hari, layanan meja sirkulasi dan pengelolaan data koleksi ditangani oleh satu pustakawan fungsional utama yang harus membagi waktu antara antrean layanan tatap muka, layanan referensi, dan pemutakhiran data di sistem.
- **Isi Paragraf 2:**
  Kondisi tersebut membuat kesesuaian antara informasi katalog di SLiMS dan kondisi fisik buku di rak menjadi tantangan utama. Proyek Kelompok 3 hadir bukan untuk mengganti SLiMS dengan aplikasi baru, melainkan merancang perbaikan tata kelola dan proses kerja melalui penyusunan SOP pemutakhiran, penjadwalan waktu kerja terproteksi, kanal pelaporan digital, dan penataan alur fisik koleksi agar data perpustakaan selalu mutakhir dan andal.
- **Elemen Visual:** 2 Foto dokumentasi nyata ruang layanan UPT Perpustakaan FT UNY.

---

## Slide 3: Fishbone (Diagram Tulang Ikan 4M)
- **Judul:** FISHBONE
- **Kepala Ikan (Akibat):**
  - **Pemutakhiran status dan kondisi koleksi pada SLiMS sering tertunda**
  - *Sub-teks:* Data katalog berisiko tidak sinkron dengan kondisi fisik; tindak lanjut laporan sulit ditelusuri.
- **Cabang 1 — MAN (Kapasitas Kerja):**
  - Satu pustakawan utama menangani sirkulasi, referensi, dan digital library
  - Layanan tatap muka memecah fokus untuk verifikasi dan input data
  - Kapasitas terbatas saat laporan dan transaksi datang bersamaan
- **Cabang 2 — METHOD (Metode dan Tata Kelola):**
  - Belum ada SOP tertulis untuk alur pemutakhiran koleksi
  - Belum ada jadwal rutin atau slot fokus untuk memperbarui SLiMS
  - *Pentinganai* [typo: Penanganan] laporan dan pembaruan masih *insidenal* [typo: insidental]
- **Cabang 3 — MACHINE (Sistem dan Alat Informasi):**
  - SLiMS *tresedia* [typo: tersedia], tetapi pembaruan tetap memerlukan verifikasi dan input petugas
  - Belum ada pencatatan terpusat yang menghubungkan laporan dengan status tindak lanjut
- **Cabang 4 — MATERIAL (Sarana Fisik dan Media Pencatatan):**
  - Belum tersedia rak atau area transit sementara yang terstandar
  - Buku dapat menumpuk di meja counter atau salah letak sebelum *diverbikasi* [typo: diverifikasi]
  - Laporan tersebar melalui lisan, WhatsApp, memo, dan buku catatan
- **Catatan Kaki (Highlight Box):**
  > *"Satu pustakawan merupakan batasan kapasitas operasional, bukan kesalahan individu. Akar masalah yang dituju adalah belum terintegrasinya tata kelola alur kerja."*

---

## Slide 4: Gejala & Masalah
- **Judul:** GEJALA & MASALAH
- **Kolom 1 — Label: `GEJALA`**
  - **OPAC vs Rak Tidak Sinkron:** Di SLiMS tertulis "Tersedia", namun fisik buku rusak, terselip, atau menumpuk di meja loket.
  - **Laporan Tercecer:** Aduan masuk lewat lisan, WA pribadi, dan memo kertas tanpa rekam jejak.
  - **Data Akreditasi Tertinggal:** Rekap LAM-INFOKOM Kriteria 5 dan usulan buku ke Dekanat berisiko tidak mutakhir.
- **Kolom 2 — Label: `Masalah` *(Catatan Audit: Isinya adalah Mekanisme)***
  - **Beban 3 Fungsi pada 1 Staf:** 1 pustakawan tunggal menangani rata-rata 52 transaksi tatap muka/hari (sirkulasi, referensi, dan digilib).
  - **Interupsi Konstan Loket:** Antrean fisik terus memotong fokus verifikasi buku dan input SLiMS (context switching).
  - **Update Bersifat Insidental:** Pembaruan SLiMS ditunda menunggu jam sepi tanpa kepastian SLA.
- **Kolom 3 — Label: `Mekanisme` *(Catatan Audit: Isinya adalah Akar Masalah)***
  - **Belum Ada SOP & Jadwal Fokus:** Tidak ada aturan baku, SLA, dan jam tenang (Quiet Hour).
  - **Saluran Laporan Belum Terpusat:** Belum ada form pelaporan mandiri.
  - **Belum Ada Buffer Zone Fisik:** Belum ada Rak Transit (RACK-001).
  - **Belum Ada Monitoring Status:** Belum ada log tindak lanjut dan template rekap.

---

## Slide 5: Rekayasa Sistem Proses Bisnis (BPR) — Teks Komparasi
- **Judul:** REKAYASA SISTEM PROSES BISNIS (BPR)
- **Subjudul:** TRANSFORMASI ALUR KERJA SIRKULASI: KONDISI LAMA (AS-IS) VS KONDISI BARU (TO-BE)
- **Kolom Kiri — `ALUR LAMA (AS-IS) — REAKTIF & TERFRAGMENTASI]`:**
  1. **Laporan Tercecer:** Mahasiswa melapor buku rusak/hilang lewat WhatsApp pribadi pustakawan atau lisan di loket tanpa format standar.
  2. **Penumpukan Fisik:** Buku bermasalah ditaruh di bawah meja atau di lantai loket sirkulasi karena tidak ada rak transit.
  3. **Kelelahan Antrean & Klik:** Pustakawan harus melayani antrean fisik peminjaman sekaligus input satu-per-satu di SLiMS di sela interupsi 52 mhs/hari.
  4. **Distorsi Informasi:** Pembaruan data SLiMS tertunda berhari-hari; status katalog OPAC tetap tercatat "Tersedia" padahal fisik buku rusak/hilang.
- **Kolom Kanan — `ALUR BARU (TO-BE) — TATA KELOLA SIMPEL-KOLEKSI`:**
  1. **Kanal Mandiri Terpusat:** Pemustaka memindai Stiker QR di meja baca/rak; mengisi form pelaporan ringkas (<30 detik) dengan validasi inline.
  2. **Pemisahan Fisik Terstandar:** Pemustaka langsung menaruh buku di Rak Transit RACK-001 (Tk. 1: Selesai Baca, Tk. 2: Buku Rusak/Salah Rak).
  3. **Proteksi Waktu (Quiet Hour):** Pustakawan memproses laporan secara massal (Batch Processing) setiap Jumat pk 08.00–09.00 WIB bebas dari gangguan antrean.
  4. **Triase & Sinkronisasi Cepat:** Buku disortir lewat Triase 3-Jalur (SOP-004); status katalog SLiMS ter-update dalam batas SLA ≤ 3 hari kerja.

---

## Slide 6: Rekayasa Sistem Proses Bisnis (BPR) — Visual 4 Proses Inti
- **Judul:** REKAYASA SISTEM PROSES BISNIS (BPR)
- **Subjudul:** TRANSFORMASI ALUR KERJA SIRKULASI: KONDISI LAMA (AS-IS) VS KONDISI BARU (TO-BE)
- **Ilustrasi Tengah:** Diagram grafis `ALUR AS-IS (Kondisi Saat Ini)` vs `ALUR TO-BE (SIMPEL-KOLEKSI)`.
- **Kotak 1 (`1: PELAPORAN RUSAK & SALAH RAK`):**
  - *Dari:* Lapor lisan/WA di meja loket
  - *Menjadi:* Form QR Mandiri + Rak Transit RACK-001 (SLA Verifikasi ≤ 3 Hari)
- **Kotak 2 (`2: PERPANJANGAN PINJAM`):**
  - *Dari:* Wajib antre di loket & bawa buku fisik.
  - *Menjadi:* Ajuan daring mandiri + Eksekusi massal (Batch) pk 08.30 WIB
- **Kotak 3 (`3: PENYIANGAN KOLEKSI WEEDING`):**
  - *Dari:* Tidak pernah disiangi; buku kadaluwarsa menumpuk
  - *Menjadi:* Filter otomatis buku sains/teknik ≥ 10 tahun (SOP-006)
- **Kotak 4 (`4: USULAN ANGGARAN REFERENSI]`):**
  - *Dari:* Pasif menunggu surat dinas prodi tahunan
  - *Menjadi:* Usulan partisipatif 24/7 $\rightarrow$ Lembar Disposisi Ber-Kop Resmi FT UNY

---

## Slide 7: Solusi (4 Pilar Intervensi)
- **Judul:** SOLUSI
- **Kartu 1 — `Buku Pedoman 10 SOP & Quiet Hour`:**
  - Menetapkan 10 prosedur resmi standar A4 beserta pembagian peran RACI. Melindungi sesi Quiet Hour 60 menit/minggu agar pustakawan fokus memperbarui SLiMS tanpa gangguan loket (target SLA verifikasi ≤3 hari, update SLiMS ≤7 hari).
  - *Menjawab Masalah:* Ketiadaan SOP baku, ketidakpastian waktu penyelesaian (SLA), dan interupsi antrean loket yang menunda input SLiMS.
- **Kartu 2 — `Kanal Pelaporan Mandiri Berbasis QR`:**
  - Stiker QR di meja baca dan rak menghubungkan pemustaka ke formulir standar untuk melapor buku rusak/salah rak, memperpanjang pinjaman mandiri (+7 hari), mengusulkan referensi 24/7, dan melacak progres tiket secara mandiri.
  - *Menjawab Masalah:* Laporan kerusakan/kendala buku yang tercecer via lisan, WA pribadi, dan memo kertas serta antrean perpanjangan fisik di loket.
- **Kartu 3 — `Fasilitas Fisik Rak Transit & Triase 3-Opsi`:**
  - Rak penyangga dua tingkat memisahkan buku selesai baca (Tingkat 1) dari buku rusak/salah rak (Tingkat 2), lalu ditindaklanjuti pustakawan lewat Triase 3-Opsi, perbaikan ringan di loket, karantina jilid, atau usulan afkir.
  - *Menjawab Masalah:* Ketiadaan buffer zone fisik yang memicu tumpukan buku rusak di bawah meja loket dan koleksi terselip (misplaced) di lorong rak.
- **Kartu 4 — `Meja Kerja Monitoring & Ekstraksi Rekap`:**
  - Dashboard pustakawan untuk memantau antrean tiket, memproses perpanjangan massal (batch) ke SLiMS, menyaring buku usang, serta menghasilkan rekap untuk Borang LAM-INFOKOM Kriteria 5 dan Disposisi Dekanat.
  - *Menjawab Masalah:* Ketiadaan rekam jejak (audit trail) status penyelesaian, kelelahan klik (click-fatigue) input SLiMS, dan tertinggalnya data akreditasi/anggaran.

---

## Slide 8: Buku Pedoman 10 SOP & Quiet Hour (Detail Alur)
- **Judul:** BUKU PEDOMAN 10 SOP & QUIET HOUR
- **Deskripsi:** Dokumen standar kerja resmi format A4 (mengacu Permenpan-RB No. 35/2012) yang berisi 10 SOP operasional, matriks peran RACI, serta kebijakan Jam Tenang (Quiet Hour) selama 60 menit tiap Jumat (08.00–09.00 WIB) untuk melindungi waktu input data pustakawan tunggal.
- **Alur (4 Tahap):**
  1. **Aktifkan Sesi:** Pustakawan menyalakan timer Quiet Hour 60 menit di meja kerja dan memasang papan penanda loket.
  2. **Broadcast Otomatis:** Banner informasi langsung tampil di portal QR pemustaka agar mahasiswa tidak mengetuk loket sementara.
  3. **Verifikasi & Update SLiMS:** Pustakawan memeriksa fisik buku dari Rak Transit dan memperbarui status koleksi di SLiMS 9 Bulian tanpa interupsi.
  4. **Penutupan Sesi:** Setelah 60 menit selesai, status loket kembali buka dan progres tiket tercatat rapi (target SLA verifikasi ≤3 hari, update SLiMS ≤7 hari).

---

## Slide 9: Pelaporan Mandiri QR (Detail Alur)
- **Judul:** PELAPORAN MANDIRI QR
- **Deskripsi:** Portal layanan mobile-first yang diakses mahasiswa lewat stiker QR di meja baca dan rak buku. Menggantikan laporan yang sebelumnya tercecer di lisan, WhatsApp pribadi, dan memo kertas menjadi satu saluran standar.
- **Alur (4 Tahap):**
  1. **Scan Stiker QR:** Pemustaka memindai QR di meja baca atau tiang rak menggunakan kamera HP.
  2. **Pilih Layanan Mandiri:** Melapor buku rusak/salah rak (4 kolom ringkas), mengajukan perpanjangan pinjam (+7 hari tanpa antre loket), atau mengusulkan referensi baru 24/7.
  3. **Dapat Nomor Tiket:** Sistem memberi kode tiket dan menyimpan isian agar tidak hilang saat ada galat input (inline error preservation).
  4. **Pantau Status Mandiri:** Pemustaka dapat mengecek progres penyelesaian tiket langsung dari HP tanpa bertanya berulang kali ke loket.

---

## Slide 10: Rak Transit & Triase 3-Opsi (Detail Alur)
- **Judul:** RAK TRANSIT & TRIASE 3-OPSI
- **Deskripsi:** Zona penyangga fisik (buffer zone) berupa rak dua tingkat di dekat loket untuk memutus penumpukan buku di lantai/meja, dipadukan dengan standar keputusan fisik Triase 3-Opsi.
- **Kotak Zonasi Rak Transit:**
  - *Tingkat 1:* Menampung buku selesai baca / pengembalian normal agar tidak terselip (misplaced) di lorong rak lain.
  - *Tingkat 2:* Khusus menampung buku rusak atau salah rak yang menunggu verifikasi fisik pustakawan.
- **Alur (3 Tahap):**
  1. **Pemeriksaan Fisik:** Pustakawan memeriksa buku dari Rak Transit Tingkat 2 dan mencocokkan identitas eksemplar di SLiMS.
  2. **Penentuan Jalur Keputusan:**
     - *Opsi A — Perbaikan Ringan:* Lepas/robek kecil langsung diperbaiki `±5\pm 5±5` [glitch teks LaTeX] menit di loket lalu kembali ke rak.
     - *Opsi B — Karantina Jilid (Binding):* Kerusakan sedang/berat masuk karantina ruang preservasi, status SLiMS diubah menjadi Dalam Perbaikan.
     - *Opsi C — Usulan Afkir (Weeding):* Buku rusak parah atau usang dicatat untuk Berita Acara Penyiangan BMN.
  3. **Pembaruan Status:** Pustakawan memperbarui status SLiMS dan menutup tiket laporan.

---

## Slide 11: Meja Kerja Pustakawan & Ekstraksi Rekap (Detail Alur)
- **Judul:** MEJA KERJA PUSTAKAWAN & EKSTRAKSI REKAP
- **Deskripsi:** Dashboard pendamping kerja pustakawan untuk memantau antrean laporan, memproses pekerjaan secara massal, serta mengolah data layanan menjadi bahan evaluasi manajerial dan strategis tanpa mengganti SLiMS 9 Bulian.
- **Alur (4 Tahap):**
  1. **Antrean & Triase Tiket:** Memantau laporan masuk dari QR, mengecek riwayat kerusakan berulang (recurrent damage), lalu mencatat hasil verifikasi.
  2. **Perpanjangan Massal:** Mencari dan mencentang banyak ajuan perpanjangan sekaligus untuk disalin ke SLiMS dalam satu sesi, mengurangi click-fatigue.
  3. **Asisten Penyiangan:** Menyaring koleksi jarang dipinjam berdasarkan umur terbitan (>10 / >15 tahun) dan masa dorman untuk dialirkan ke usulan buku pengganti Prioritas 1 dan Berita Acara BMN.
  4. **Rekap & Eskalasi Pimpinan:** Mengolah data ekstraksi SLiMS sebagai bukti Borang Akreditasi LAM-INFOKOM Kriteria 5 serta mencetak Lembar Disposisi Ber-Kop FT UNY untuk pengesahan anggaran Wakil Dekan I.

---

## Slide 12: Buku SOP (Tampilan Artefak)
- **Judul:** BUKU SOP
- **Poin Penjelasan:**
  - **Usulan Jadwal Fokus (SOP-001):** Rekomendasi sesi Quiet Hour (60 menit/minggu) agar pustakawan dapat memverifikasi dan memperbarui data SLiMS tanpa interupsi loket.
  - **Alur Penyangga Fisik & Mandiri (SOP-002 & 003):** Rancangan pemisahan buku bermasalah di Rak Transit (RACK-001) dan pelaporan mandiri via QR Code.
  - **Standar Triase & Target SLA (SOP-004):** Alur pemeriksaan fisik buku rusak (perbaikan ringan, penjilidan, atau usul afkir) dengan target SLA verifikasi & pembaruan status.
  - **Pemetaan Wewenang & Eskalasi (SOP-005–010):** Simulasi alur rujukan penyiangan (weeding), rekap usulan pengadaan ke pimpinan fakultas, serta prosedur kontinjensi layanan.
- **Elemen Visual:** Tangkapan layar Sampul & Lembar Pengesahan Buku Pedoman SOP Digital.

---

## Slide 13: Mockup Monitoring (Tampilan Artefak)
- **Judul:** MOCKUP MONITORING
- **Poin Penjelasan:**
  - **Konsolidasi 5 Indikator Layanan:** Merangkum jumlah laporan masuk, antrean verifikasi Rak Transit, perpanjangan pinjam, usulan referensi, dan kandidat weeding.
  - **Pemantauan Batas Waktu (SLA Alert):** Penanda status tiket (Hijau/Baru, Kuning/H-1, dan `Merah/>3>3 Hari` [glitch teks]) untuk mencegah laporan terlupakan sebelum diperbarui ke SLiMS.
  - **Pemicu Sesi Quiet Hour:** Simulasi pengingat bagi pustakawan untuk menjadwalkan verifikasi fisik terfokus dan menyiarkan status loket ke halaman pemustaka.
  - **Dukungan Rekap Manajerial:** Menyiapkan data terstruktur untuk ekstraksi laporan evaluasi koleksi dan usulan pengadaan ke tingkat fakultas.
- **Elemen Visual:** 2 Tangkapan layar desktop (`Dashboard & Rangkuman Layanan` serta `Asisten Penyiangan Koleksi & Pemutakhiran Kurikulum / Weeding`).

---

## Slide 14: Mockup Pelaporan & Request (Tampilan Artefak)
- **Judul:** MOCKUP PELAPORAN & REQUEST
- **Kotak `Jalur 1`:**
  - **Lapor Buku Rusak / Salah Rak:** Menyeragamkan input identitas buku bermasalah (4 kolom inti) disertai panduan peletakan fisik buku ke Rak Transit Tingkat 2 (RACK-001).
- **Kotak `Jalur 2`:**
  - **Perpanjangan Pinjam Mandiri:** Memfasilitasi permohonan tambah waktu pinjam (+7 hari kerja) dari gawai tanpa perlu membawa fisik buku ke meja sirkulasi.
  - **Usulan Referensi Partisipatif:** Menampung usulan buku baru dari mahasiswa/dosen sepanjang semester sebagai bahan pertimbangan pengadaan fakultas.
  - **Validasi Ramah Pengguna (Inline Preservation):** Dirancang agar isian yang sudah diketik pemustaka tidak terhapus otomatis apabila ada kolom wajib yang terlewat.
- **Elemen Visual:** 2 Tangkapan layar mobile portal `layanan.html`.

---

## Slide 15: Penutup
- **Judul:** THANK YOU — For Your Attention!
- **Footer:** Prepared by Kelompok 3
- **Elemen Visual:** Bingkai gambar placeholder kanan belum terisi foto.
