/**
 * SIMPEL-KOLEKSI FT UNY - MOCKUP 4 (REVISI VALIDASI MODUL 10)
 * Mengakomodasi seluruh umpan balik Kuisioner Pustakawan (Abdul & Dapa) + 5 Mahasiswa:
 * 1. Live Search Bar instan (NIM, Nama, Barcode, Judul) di semua tabel pustakawan
 * 2. Batch Checkbox & Eksekusi Massal Perpanjangan SLiMS (Anti Click-Fatigue)
 * 3. Triase Kerusakan Fisik di Modal L3 (Perbaikan Ringan 5 Menit di Loket vs Karantina Berat/Binding)
 * 4. Sinkronisasi Real-Time Banner Quiet Hour dari Meja Kerja Pustakawan ke Portal QR Mahasiswa (layanan.html)
 * 5. Cetak Lembar Disposisi Resmi Ber-Kop FT UNY (Wakil Dekan I & Pustakawan) lengkap dengan estimasi anggaran
 * 6. Inline Red Error Highlighting & Auto-Focus per kolom + Estimasi Waktu Verifikasi (SLA) di Tiket Mahasiswa
 */

document.addEventListener('DOMContentLoaded', () => {

  const STORAGE_KEY = 'simpel_koleksi_v4_state';

  const defaultInitialData = {
    quietHourActive: false,
    damageReports: [
      {
        id: 'TKT-202610-001',
        date: '26/10/2026 09:15',
        slaBadge: 'SLA MERAH (>3 Hari)',
        slaClass: 'badge-coral',
        barcode: 'B004125',
        title: 'Algoritma Pemrograman dan Struktur Data C++',
        callNumber: '005.1 KUN a',
        damageType: 'Halaman Sobek / Rusak',
        reporterName: 'Farid Hidayat',
        reporterNim: '24050530015',
        notes: 'Halaman 45-50 lepas sebagian, butuh dilem cepat',
        physicalLocation: 'Rak Transit Tk. 2',
        status: 'PENDING',
        slimsStatus: 'Tersedia (Perlu Triase)'
      },
      {
        id: 'TKT-202610-002',
        date: '28/10/2026 14:20',
        slaBadge: 'SLA KUNING (H-1)',
        slaClass: 'badge-blue',
        barcode: 'FT-INF-2024-072',
        title: 'Kecerdasan Buatan Terapan & Deep Learning',
        callNumber: '006.3 RUS k',
        damageType: 'Jilidan Rusak / Sampul Lepas',
        reporterName: 'Ganendra Pradipa',
        reporterNim: '24050530038',
        notes: 'Punggung jilidan patah parah, perlu binding ulang',
        physicalLocation: 'Rak Transit Tk. 2',
        status: 'PENDING',
        slimsStatus: 'Tersedia (Perlu Triase)'
      },
      {
        id: 'TKT-202610-003',
        date: '29/10/2026 11:05',
        slaBadge: 'SLA HIJAU (Baru)',
        slaClass: 'badge-emerald',
        barcode: 'B001980',
        title: 'Rekayasa Perangkat Lunak: Pendekatan Praktisi',
        callNumber: '005.1 PRE r',
        damageType: 'Salah Rak / Nyasar',
        reporterName: 'M. Fadlan Dirmansyah',
        reporterNim: '24050530034',
        notes: 'Terselip di rak Teknik Mesin (DDC 621)',
        physicalLocation: 'Rak Transit Tk. 2',
        status: 'PENDING',
        slimsStatus: 'Salah Lokasi Rak'
      },
      {
        id: 'TKT-202610-004',
        date: '24/10/2026 10:00',
        slaBadge: 'Terverifikasi',
        slaClass: 'badge-emerald',
        barcode: 'B002811',
        title: 'Dasar-Dasar Teknik Tenaga Listrik',
        callNumber: '621.3 ZUR d',
        damageType: 'Jilidan Rusak / Sampul Lepas',
        reporterName: 'Gantar Abimanyu',
        reporterNim: '24050530042',
        notes: 'Triase Berat: Masuk lemari karantina binding',
        physicalLocation: 'Lemari Karantina Binding',
        status: 'IN_REPAIR',
        slimsStatus: 'Dalam Perbaikan (Repair)'
      },
      {
        id: 'TKT-202610-005',
        date: '22/10/2026 08:30',
        slaBadge: 'Selesai 5 Menit',
        slaClass: 'badge-emerald',
        barcode: 'FT-SIP-2022-009',
        title: 'Mekanika Tanah dan Teknik Pondasi',
        callNumber: '624.1 BOW m',
        damageType: 'Halaman Sobek / Rusak',
        reporterName: 'Rian Pratama',
        reporterNim: '22501241002',
        notes: 'Triase Ringan: Sudah disolasi 5 menit di loket & kembali ke rak',
        physicalLocation: 'Rak Koleksi Aktif',
        status: 'RESOLVED',
        slimsStatus: 'Tersedia (Available)'
      }
    ],

    extendRequests: [
      {
        id: 'EXT-202610-001',
        date: '29/10/2026 10:45',
        memberId: '24050530015',
        memberName: 'Farid Hidayat',
        barcode: 'B003891',
        title: 'Jaringan Komputer dan Komunikasi Data',
        duration: '+7 Hari Kerja',
        whatsapp: '081234567890',
        status: 'PENDING'
      },
      {
        id: 'EXT-202610-002',
        date: '29/10/2026 11:20',
        memberId: '24050530042',
        memberName: 'Gantar Abimanyu',
        barcode: 'FT-ELE-2023-014',
        title: 'Sistem Kendali Tenaga Listrik Industri',
        duration: '+7 Hari Kerja',
        whatsapp: '081398765432',
        status: 'PENDING'
      },
      {
        id: 'EXT-202610-003',
        date: '27/10/2026 09:10',
        memberId: '23502241019',
        memberName: 'Siti Nur Aini',
        barcode: 'B005112',
        title: 'Metodologi Penelitian Pendidikan Vokasi',
        duration: '+7 Hari Kerja',
        whatsapp: '085712349988',
        status: 'PROCESSED'
      }
    ],

    referenceRequests: [
      {
        id: 'REQ-202610-001',
        date: '29/10/2026 08:30',
        memberId: '24050530038',
        memberName: 'Ganendra Pradipa',
        role: 'Mahasiswa S1',
        prodi: 'Pendidikan Teknik Informatika',
        bookTopic: 'Pemrograman Deep Learning Menggunakan PyTorch (Zhang, 2024)',
        purpose: 'Tugas Akhir / Skripsi',
        estPrice: 950000,
        whatsapp: '081299887766',
        status: 'IN_PROCUREMENT',
        actionNote: 'Disetujui masuk Lembar Disposisi Dekanat 2027'
      },
      {
        id: 'REQ-202610-002',
        date: '28/10/2026 13:40',
        memberId: '197604122005011003',
        memberName: 'Dr. Bambang Sugiarto, M.Eng.',
        role: 'Dosen Fakultas Teknik',
        prodi: 'Pendidikan Teknik Elektro',
        bookTopic: 'Internet of Things: Arsitektur Sensor dan Protokol MQTT',
        purpose: 'Riset / Penelitian Dosen',
        estPrice: 850000,
        whatsapp: '081122334455',
        status: 'IN_PROCUREMENT',
        actionNote: 'Disetujui masuk Lembar Disposisi Dekanat 2027'
      },
      {
        id: 'REQ-202610-003',
        date: '26/10/2026 15:15',
        memberId: '22503241008',
        memberName: 'Ahmad Faiz',
        role: 'Mahasiswa S1',
        prodi: 'Pendidikan Teknik Mesin',
        bookTopic: 'Standar Uji Pengelasan Baja dan Fabrikasi Presisi',
        purpose: 'Praktikum & Modul Kuliah',
        estPrice: 750000,
        whatsapp: '087812345678',
        status: 'AVAILABLE_WAREHOUSE',
        actionNote: 'Ditemukan di koleksi cadangan lantai 1'
      },
      {
        id: 'REQ-202610-004',
        date: '25/10/2026 11:00',
        memberId: '24050530034',
        memberName: 'M. Fadlan Dirmansyah',
        role: 'Mahasiswa S1',
        prodi: 'Pendidikan Teknik Informatika',
        bookTopic: 'Modern Computer Vision: Transformers and Diffusion Models',
        purpose: 'Tugas Akhir / Skripsi',
        estPrice: 900000,
        whatsapp: '085811223344',
        status: 'IN_PROCUREMENT',
        actionNote: 'Prioritas belanja akreditasi LAM-INFOKOM Kriteria 5'
      }
    ]
  };

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return JSON.parse(JSON.stringify(defaultInitialData));
  }

  function saveState(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }

  let db = loadState();

  const uiState = {
    currentPublicSubView: 'landing',
    currentAdminPanel: 'adminPanelDashboard',
    quietHourSeconds: 3600,
    quietHourInterval: null,
    activeVerifyTicketId: null,
    dmgFilter: 'all',
    extFilter: 'all',
    reqFilter: 'all',
    dmgSearch: '',
    extSearch: '',
    reqSearch: '',
    selectedExtendIds: new Set()
  };

  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 3800);
  }

  // =========================================================================
  // SINKRONISASI BANNER QUIET HOUR LINTAS PORTAL (KRITIK PUSTAKAWAN #4)
  // =========================================================================
  function syncQuietHourBannerUI() {
    db = loadState();
    const publicAlert = document.getElementById('publicQuietHourAlert');
    const adminBar = document.getElementById('quietHourBar');

    if (publicAlert) {
      if (db.quietHourActive) {
        publicAlert.classList.remove('is-hidden');
      } else {
        publicAlert.classList.add('is-hidden');
      }
    }

    if (adminBar) {
      if (db.quietHourActive) {
        adminBar.classList.remove('is-hidden');
      } else {
        adminBar.classList.add('is-hidden');
      }
    }
  }

  document.getElementById('btnSimPublicQH')?.addEventListener('click', () => {
    db = loadState();
    db.quietHourActive = !db.quietHourActive;
    saveState(db);
    syncQuietHourBannerUI();
    if (db.quietHourActive) {
      showToast('Simulasi Aktif: Banner Quiet Hour kini tampil di layar HP Mahasiswa!', 'warning');
    } else {
      showToast('Simulasi Nonaktif: Banner Quiet Hour disembunyikan.', 'info');
    }
  });

  // =========================================================================
  // A. ROUTING FOR INDEX.HTML (LIBRARIAN PORTAL)
  // =========================================================================
  const viewLogin = document.getElementById('viewLogin');
  const viewAdmin = document.getElementById('viewAdmin');

  function openLibrarianAdmin() {
    if (viewLogin && viewAdmin) {
      viewLogin.classList.remove('is-active');
      viewAdmin.classList.add('is-active');
      renderAllAdminTables();
      updateKPICards();
      syncQuietHourBannerUI();
    }
  }

  function logoutLibrarian() {
    if (viewLogin && viewAdmin) {
      viewAdmin.classList.remove('is-active');
      viewLogin.classList.add('is-active');
      showToast('Sesi Meja Kerja Pustakawan telah ditutup.', 'info');
    }
  }

  document.getElementById('formLibrarianLogin')?.addEventListener('submit', (e) => {
    e.preventDefault();
    openLibrarianAdmin();
    showToast('Selamat datang di Meja Kerja Pustakawan Perpustakaan FT UNY', 'success');
  });

  document.getElementById('btnLogoutAdmin')?.addEventListener('click', logoutLibrarian);

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      switchAdminPanel(btn.getAttribute('data-panel'));
    });
  });

  function switchAdminPanel(panelId) {
    uiState.currentAdminPanel = panelId;
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('is-active'));
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('is-active'));

    document.querySelector(`.nav-item[data-panel="${panelId}"]`)?.classList.add('is-active');
    document.getElementById(panelId)?.classList.add('is-active');

    const headerTitle = document.getElementById('adminHeaderTitle');
    if (headerTitle) {
      if (panelId === 'adminPanelDashboard') headerTitle.textContent = 'Dashboard & Rangkuman Layanan';
      if (panelId === 'adminPanelDamage') headerTitle.textContent = 'Laporan Buku Rusak & Triase Fisik SLiMS';
      if (panelId === 'adminPanelExtend') headerTitle.textContent = 'Perpanjangan Pinjam Mandiri (Batch Eksekusi)';
      if (panelId === 'adminPanelRequest') headerTitle.textContent = 'Request Referensi & Lembar Disposisi Dekanat';
    }
  }

  document.getElementById('linkToExtendPanel')?.addEventListener('click', () => switchAdminPanel('adminPanelExtend'));
  document.getElementById('linkToDamagePanel')?.addEventListener('click', () => switchAdminPanel('adminPanelDamage'));

  // =========================================================================
  // B. ROUTING FOR LAYANAN.HTML (PUBLIC QR CODE PORTAL)
  // =========================================================================
  function switchPublicSubView(subViewId) {
    uiState.currentPublicSubView = subViewId;
    document.querySelectorAll('.public-subview').forEach(v => v.classList.remove('is-active'));

    if (subViewId === 'landing') document.getElementById('subViewLanding')?.classList.add('is-active');
    if (subViewId === 'damageForm') document.getElementById('subViewDamageForm')?.classList.add('is-active');
    if (subViewId === 'serviceForm') {
      document.getElementById('subViewServiceForm')?.classList.add('is-active');
      switchServiceTab('panelExtend');
    }
    if (subViewId === 'success') document.getElementById('subViewTicketSuccess')?.classList.add('is-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchServiceTab(panelId) {
    document.querySelectorAll('.service-tab-btn').forEach(b => b.classList.remove('is-active'));
    document.querySelectorAll('.service-panel').forEach(p => p.classList.remove('is-active'));
    document.querySelector(`.service-tab-btn[data-target="${panelId}"]`)?.classList.add('is-active');
    document.getElementById(panelId)?.classList.add('is-active');
  }

  document.getElementById('btnOpenDamageForm')?.addEventListener('click', () => switchPublicSubView('damageForm'));
  document.getElementById('btnOpenServiceForm')?.addEventListener('click', () => switchPublicSubView('serviceForm'));
  document.getElementById('cardSelectDamage')?.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') switchPublicSubView('damageForm');
  });
  document.getElementById('cardSelectService')?.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') switchPublicSubView('serviceForm');
  });

  document.getElementById('btnBackFromDamage')?.addEventListener('click', () => switchPublicSubView('landing'));
  document.getElementById('btnBackFromService')?.addEventListener('click', () => switchPublicSubView('landing'));
  document.getElementById('btnReturnHome')?.addEventListener('click', () => switchPublicSubView('landing'));
  document.getElementById('btnPrintTicket')?.addEventListener('click', () => window.print());

  document.querySelectorAll('.service-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchServiceTab(btn.getAttribute('data-target')));
  });

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.getAttribute('data-fill');
      if (!val) return;
      const [barcode, title] = val.split('|');
      if (chip.classList.contains('chip-ext')) {
        const bInput = document.getElementById('extBarcode');
        const tInput = document.getElementById('extBookTitle');
        if (bInput) bInput.value = barcode;
        if (tInput) tInput.value = title;
      } else {
        const bInput = document.getElementById('dmgBarcode');
        const tInput = document.getElementById('dmgBookTitle');
        if (bInput) {
          bInput.value = barcode;
          bInput.classList.remove('is-invalid-v4');
          document.getElementById('errDmgBarcode')?.classList.remove('is-visible');
        }
        if (tInput) {
          tInput.value = title;
          tInput.classList.remove('is-invalid-v4');
          document.getElementById('errDmgTitle')?.classList.remove('is-visible');
        }
      }
      showToast(`Sampel data "${barcode}" terisi otomatis!`, 'info');
    });
  });

  document.getElementById('btnSimulateScanBarcode')?.addEventListener('click', () => {
    const input = document.getElementById('dmgBarcode');
    const title = document.getElementById('dmgBookTitle');
    if (input && title) {
      input.value = 'FT-INF-2024-072';
      title.value = 'Kecerdasan Buatan Terapan & Deep Learning';
      input.classList.remove('is-invalid-v4');
      title.classList.remove('is-invalid-v4');
      document.getElementById('errDmgBarcode')?.classList.remove('is-visible');
      document.getElementById('errDmgTitle')?.classList.remove('is-visible');
      showToast('Kamera memindai barcode: "FT-INF-2024-072"', 'success');
    }
  });

  // =========================================================================
  // C. PUBLIC FORM SUBMISSIONS + INLINE FIELD ERROR HIGHLIGHT (AHMAD ZAKY)
  // =========================================================================
  const formDamage = document.getElementById('formDamageReport');
  if (formDamage) {
    formDamage.addEventListener('submit', (e) => {
      e.preventDefault();

      const elName = document.getElementById('dmgReporterName');
      const elNim = document.getElementById('dmgReporterNim');
      const elBarcode = document.getElementById('dmgBarcode');
      const elTitle = document.getElementById('dmgBookTitle');

      const fields = [
        { el: elName, errId: 'errDmgName' },
        { el: elNim, errId: 'errDmgNim' },
        { el: elBarcode, errId: 'errDmgBarcode' },
        { el: elTitle, errId: 'errDmgTitle' }
      ];

      let firstInvalid = null;
      fields.forEach(f => {
        const val = f.el?.value.trim();
        const errEl = document.getElementById(f.errId);
        if (!val) {
          f.el?.classList.add('is-invalid-v4');
          errEl?.classList.add('is-visible');
          if (!firstInvalid) firstInvalid = f.el;
        } else {
          f.el?.classList.remove('is-invalid-v4');
          errEl?.classList.remove('is-visible');
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        showToast('Periksa kolom berwarna merah yang belum diisi (Data lain tetap tersimpan aman).', 'error');
        return;
      }

      const damageTypeRadio = document.querySelector('input[name="dmgType"]:checked');
      const damageType = damageTypeRadio ? damageTypeRadio.value : 'Halaman Sobek / Rusak';
      const notes = document.getElementById('dmgNotes').value.trim();

      db = loadState();
      const newId = `TKT-202610-0${db.damageReports.length + 1}`;
      const now = new Date();
      const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      db.damageReports.unshift({
        id: newId,
        date: dateStr,
        slaBadge: 'SLA HIJAU (Baru)',
        slaClass: 'badge-emerald',
        barcode: elBarcode.value.trim(),
        title: elTitle.value.trim(),
        callNumber: 'DDC-Lokal',
        damageType: damageType,
        reporterName: elName.value.trim(),
        reporterNim: elNim.value.trim(),
        notes: notes || 'Laporan mandiri mahasiswa via QR Code',
        physicalLocation: 'Rak Transit Tk. 2',
        status: 'PENDING',
        slimsStatus: 'Tersedia (Perlu Triase)'
      });
      saveState(db);

      document.getElementById('successBadgeType').textContent = 'LAPORAN KERUSAKAN TERCATAT RESMI';
      document.getElementById('successTitle').textContent = 'Tiket Laporan Berhasil Diterbitkan!';
      document.getElementById('successDesc').textContent = 'Laporan Anda sudah masuk ke antrean Meja Kerja Pustakawan FT UNY.';
      document.getElementById('ticketCodeDisplay').textContent = newId;
      document.getElementById('ticketBookDisplay').textContent = elTitle.value.trim();
      document.getElementById('ticketBarcodeDisplay').textContent = elBarcode.value.trim();
      document.getElementById('ticketTypeDisplay').textContent = damageType;
      document.getElementById('ticketUserDisplay').textContent = `${elName.value.trim()} (${elNim.value.trim()})`;
      document.getElementById('ticketStatusDisplay').textContent = 'Menunggu Triase Rak Transit';
      document.getElementById('ticketInstructionText').innerHTML = 'Segera letakkan fisik buku di <strong>Rak Transit Tingkat 2 (RACK-001)</strong> di samping meja loket.';
      document.getElementById('ticketSlaEstimateText').innerHTML = 'Pustakawan akan melakukan triase fisik (perbaikan ringan 5 menit atau binding) pada jadwal <strong>Quiet Hour Jumat 08.00–09.00 WIB (SLA Maksimal 3 Hari Kerja)</strong>.';

      formDamage.reset();
      switchPublicSubView('success');
      showToast(`Tiket ${newId} berhasil diterbitkan!`, 'success');
    });
  }

  // 2. Submit Perpanjangan Pinjam
  const formExtend = document.getElementById('formExtendLoan');
  if (formExtend) {
    formExtend.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('extMemberName').value.trim();
      const idAnggota = document.getElementById('extMemberId').value.trim();
      const barcode = document.getElementById('extBarcode').value.trim();
      const title = document.getElementById('extBookTitle').value.trim();
      const wa = document.getElementById('extWhatsapp').value.trim();

      if (!name || !idAnggota || !barcode || !title || !wa) {
        showToast('Harap lengkapi semua kolom permohonan perpanjangan!', 'error');
        return;
      }

      db = loadState();
      const newId = `EXT-202610-0${db.extendRequests.length + 1}`;
      const now = new Date();
      const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      db.extendRequests.unshift({
        id: newId,
        date: dateStr,
        memberId: idAnggota,
        memberName: name,
        barcode: barcode,
        title: title,
        duration: '+7 Hari Kerja',
        whatsapp: wa,
        status: 'PENDING'
      });
      saveState(db);

      document.getElementById('successBadgeType').textContent = 'PERMOHONAN PERPANJANGAN TERCATAT';
      document.getElementById('successTitle').textContent = 'Permohonan Perpanjangan Diterima!';
      document.getElementById('successDesc').textContent = 'Data Anda telah masuk ke antrean Batch Eksekusi Sirkulasi SLiMS.';
      document.getElementById('ticketCodeDisplay').textContent = newId;
      document.getElementById('ticketBookDisplay').textContent = title;
      document.getElementById('ticketBarcodeDisplay').textContent = barcode;
      document.getElementById('ticketTypeDisplay').textContent = 'Perpanjangan Masa Pinjam (+7 Hari)';
      document.getElementById('ticketUserDisplay').textContent = `${name} (${idAnggota})`;
      document.getElementById('ticketStatusDisplay').textContent = 'Menunggu Eksekusi SLiMS';
      document.getElementById('ticketInstructionText').innerHTML = 'Buku <strong>TIDAK PERLU</strong> dibawa ke perpustakaan atau ditaruh di Rak Transit.';
      document.getElementById('ticketSlaEstimateText').innerHTML = `<strong>Estimasi Verifikasi: Maksimal 1x24 Jam Kerja.</strong> Begitu pustakawan mengeksekusi di SLiMS, pesan konfirmasi otomatis dikirim ke WhatsApp <strong>${wa}</strong>.`;

      formExtend.reset();
      switchPublicSubView('success');
      showToast(`Permohonan ${newId} berhasil dikirim!`, 'success');
    });
  }

  // 3. Submit Request Referensi Baru
  const formRequest = document.getElementById('formRequestRef');
  if (formRequest) {
    formRequest.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reqRequesterName').value.trim();
      const idAnggota = document.getElementById('reqMemberId').value.trim();
      const role = document.getElementById('reqRole').value;
      const prodi = document.getElementById('reqProdi').value;
      const topic = document.getElementById('reqBookTopic').value.trim();
      const purpose = document.getElementById('reqPurpose').value;
      const wa = document.getElementById('reqWhatsapp').value.trim();

      if (!name || !idAnggota || !topic || !wa) {
        showToast('Harap lengkapi semua isian usulan referensi!', 'error');
        return;
      }

      db = loadState();
      const newId = `REQ-202610-0${db.referenceRequests.length + 1}`;
      const now = new Date();
      const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      db.referenceRequests.unshift({
        id: newId,
        date: dateStr,
        memberId: idAnggota,
        memberName: name,
        role: role,
        prodi: prodi,
        bookTopic: topic,
        purpose: purpose,
        estPrice: 800000,
        whatsapp: wa,
        status: 'PENDING_REVIEW',
        actionNote: 'Ditinjau oleh pustakawan untuk Lembar Disposisi Dekanat'
      });
      saveState(db);

      document.getElementById('successBadgeType').textContent = 'USULAN REFERENSI TERCATAT';
      document.getElementById('successTitle').textContent = 'Usulan Koleksi Berhasil Dicatat!';
      document.getElementById('successDesc').textContent = 'Usulan Anda masuk ke draf Lembar Disposisi Pengadaan Buku Dekanat FT UNY.';
      document.getElementById('ticketCodeDisplay').textContent = newId;
      document.getElementById('ticketBookDisplay').textContent = topic;
      document.getElementById('ticketBarcodeDisplay').textContent = 'Usulan Buku Baru';
      document.getElementById('ticketTypeDisplay').textContent = `Request Referensi (${purpose})`;
      document.getElementById('ticketUserDisplay').textContent = `${name} - ${prodi}`;
      document.getElementById('ticketStatusDisplay').textContent = 'Menunggu Telaah Pustakawan';
      document.getElementById('ticketInstructionText').innerHTML = 'Pustakawan akan mengecek ketersediaan di gudang koleksi atau memasukkannya ke Lembar Disposisi Wakil Dekan I.';
      document.getElementById('ticketSlaEstimateText').innerHTML = `Status disposisi pengadaan buku akan diinformasikan melalui WhatsApp <strong>${wa}</strong>.`;

      formRequest.reset();
      switchPublicSubView('success');
      showToast(`Usulan referensi ${newId} berhasil dikirim!`, 'success');
    });
  }

  // =========================================================================
  // D. ADMIN RENDERING + LIVE SEARCH + BATCH EXECUTION + DISPOSISI MODAL
  // =========================================================================
  function updateKPICards() {
    db = loadState();
    const todayCount = db.damageReports.length + db.extendRequests.length + db.referenceRequests.length;
    const pendingDamage = db.damageReports.filter(r => r.status === 'PENDING').length;
    const pendingExtend = db.extendRequests.filter(r => r.status === 'PENDING').length;
    const requestCount = db.referenceRequests.length;

    const bDmg = document.getElementById('badgeDamageCount');
    const bExt = document.getElementById('badgeExtendCount');
    const bReq = document.getElementById('badgeRequestCount');
    if (bDmg) bDmg.textContent = pendingDamage;
    if (bExt) bExt.textContent = pendingExtend;
    if (bReq) bReq.textContent = requestCount;

    const elToday = document.getElementById('kpiTotalToday');
    const elDamage = document.getElementById('kpiDamagePending');
    const elExtend = document.getElementById('kpiExtendPending');
    const elRequest = document.getElementById('kpiRequestCount');
    if (elToday) elToday.textContent = todayCount;
    if (elDamage) elDamage.textContent = pendingDamage;
    if (elExtend) elExtend.textContent = pendingExtend;
    if (elRequest) elRequest.textContent = requestCount;
  }

  function renderDamageTable() {
    const tbody = document.getElementById('tbodyDamageReports');
    if (!tbody) return;

    db = loadState();
    let items = db.damageReports;
    if (uiState.dmgFilter !== 'all') {
      items = items.filter(r => r.status === uiState.dmgFilter);
    }
    if (uiState.dmgSearch) {
      const q = uiState.dmgSearch.toLowerCase();
      items = items.filter(r =>
        r.id.toLowerCase().includes(q) ||
        r.barcode.toLowerCase().includes(q) ||
        r.title.toLowerCase().includes(q) ||
        r.reporterName.toLowerCase().includes(q) ||
        r.reporterNim.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 2.2rem; color: var(--slate-400);"><em>Tidak ditemukan tiket buku rusak yang cocok dengan kata kunci pencarian/filter.</em></td></tr>`;
      return;
    }

    tbody.innerHTML = items.map(item => {
      let badgeClass = 'status-pending';
      if (item.status === 'IN_REPAIR') badgeClass = 'status-repair';
      if (item.status === 'RESOLVED') badgeClass = 'status-resolved';

      return `
        <tr>
          <td>
            <strong class="font-mono">${item.id}</strong><br>
            <span class="nav-badge ${item.slaClass || 'badge-blue'}" style="display:inline-block; margin-top:3px; font-size:0.65rem;">${item.slaBadge || 'SLA Normal'}</span>
          </td>
          <td><small class="font-mono">${item.date}</small></td>
          <td>
            <div style="font-weight:700; color:var(--navy-900);">${item.title}</div>
            <small class="font-mono text-blue">${item.barcode} | ${item.callNumber}</small>
          </td>
          <td><span class="badge-status ${badgeClass}">${item.damageType}</span></td>
          <td><strong>${item.reporterName}</strong><br><small class="font-mono text-muted">${item.reporterNim}</small></td>
          <td><span class="font-mono" style="font-size:0.75rem;">${item.physicalLocation}</span></td>
          <td>
            <span class="badge-status status-slims-done">${item.slimsStatus}</span><br>
            <small style="font-size:0.7rem; color:#64748b;">${item.notes || ''}</small>
          </td>
          <td>
            ${item.status !== 'RESOLVED' ? `
              <button type="button" class="btn btn-sm btn-outline btn-verify-damage" data-id="${item.id}">
                Triase & Verifikasi
              </button>
            ` : `
              <span style="color:var(--emerald-600); font-weight:700; font-size:0.75rem;">✓ Selesai</span>
            `}
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.btn-verify-damage').forEach(btn => {
      btn.addEventListener('click', () => openVerifyModal(btn.getAttribute('data-id')));
    });
  }

  function updateBatchCounterUI() {
    const pill = document.getElementById('batchSelectedCounter');
    if (pill) {
      pill.textContent = `${uiState.selectedExtendIds.size} dipilih`;
    }
  }

  function renderExtendTable() {
    const tbody = document.getElementById('tbodyExtendRequests');
    if (!tbody) return;

    db = loadState();
    let items = db.extendRequests;
    if (uiState.extFilter !== 'all') {
      items = items.filter(r => r.status === uiState.extFilter);
    }
    if (uiState.extSearch) {
      const q = uiState.extSearch.toLowerCase();
      items = items.filter(r =>
        r.id.toLowerCase().includes(q) ||
        r.memberId.toLowerCase().includes(q) ||
        r.memberName.toLowerCase().includes(q) ||
        r.barcode.toLowerCase().includes(q) ||
        r.title.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding: 2.2rem; color: var(--slate-400);"><em>Tidak ditemukan permohonan perpanjangan yang cocok dengan pencarian/filter.</em></td></tr>`;
      return;
    }

    tbody.innerHTML = items.map(item => {
      const isPending = item.status === 'PENDING';
      const isChecked = uiState.selectedExtendIds.has(item.id) ? 'checked' : '';
      return `
        <tr>
          <td>
            ${isPending ? `<input type="checkbox" class="chk-extend-row" data-id="${item.id}" ${isChecked}>` : `-`}
          </td>
          <td><strong class="font-mono">${item.id}</strong></td>
          <td><small class="font-mono">${item.date}</small></td>
          <td><span class="font-mono font-bold">${item.memberId}</span></td>
          <td><strong>${item.memberName}</strong></td>
          <td><span class="font-mono text-blue font-bold">${item.barcode}</span></td>
          <td>${item.title}</td>
          <td><span class="font-mono">${item.whatsapp}</span></td>
          <td>
            <span class="badge-status ${isPending ? 'status-pending' : 'status-resolved'}">
              ${isPending ? 'Menunggu Eksekusi' : 'Diperpanjang SLiMS'}
            </span>
          </td>
          <td>
            ${isPending ? `
              <button type="button" class="btn btn-sm btn-primary btn-execute-extend" data-id="${item.id}" data-barcode="${item.barcode}">
                Salin & Eksekusi
              </button>
            ` : `
              <span style="color:var(--emerald-600); font-weight:700; font-size:0.75rem;">✓ Terperbarui</span>
            `}
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.chk-extend-row').forEach(chk => {
      chk.addEventListener('change', () => {
        const id = chk.getAttribute('data-id');
        if (chk.checked) uiState.selectedExtendIds.add(id);
        else uiState.selectedExtendIds.delete(id);
        updateBatchCounterUI();
      });
    });

    document.querySelectorAll('.btn-execute-extend').forEach(btn => {
      btn.addEventListener('click', () => {
        executeExtendSLiMS(btn.getAttribute('data-id'), btn.getAttribute('data-barcode'));
      });
    });

    updateBatchCounterUI();
  }

  // Select All Checkbox for Extend
  document.getElementById('chkSelectAllExtend')?.addEventListener('change', (e) => {
    db = loadState();
    const pendingItems = db.extendRequests.filter(r => r.status === 'PENDING');
    if (e.target.checked) {
      pendingItems.forEach(i => uiState.selectedExtendIds.add(i.id));
    } else {
      uiState.selectedExtendIds.clear();
    }
    renderExtendTable();
  });

  // Batch Execute Extend Button (Kritik Pustakawan #2)
  document.getElementById('btnBatchExecuteExtend')?.addEventListener('click', () => {
    db = loadState();
    let targetIds = Array.from(uiState.selectedExtendIds);
    if (targetIds.length === 0) {
      // If none manually checked, automatically select all PENDING
      targetIds = db.extendRequests.filter(r => r.status === 'PENDING').map(r => r.id);
    }
    if (targetIds.length === 0) {
      showToast('Seluruh permohonan perpanjangan sudah selesai dieksekusi!', 'info');
      return;
    }

    const barcodes = [];
    db.extendRequests.forEach(req => {
      if (targetIds.includes(req.id) && req.status === 'PENDING') {
        req.status = 'PROCESSED';
        barcodes.push(req.barcode);
      }
    });

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(barcodes.join(', ')).catch(() => {});
    }

    uiState.selectedExtendIds.clear();
    const chkAll = document.getElementById('chkSelectAllExtend');
    if (chkAll) chkAll.checked = false;

    saveState(db);
    renderAllAdminTables();
    updateKPICards();
    showToast(`Eksekusi Massal Berhasil! ${barcodes.length} Barcode (${barcodes.join(', ')}) disalin & diperpanjang +7 hari di SLiMS sekaligus!`, 'success');
  });

  function renderReferenceTable() {
    const tbody = document.getElementById('tbodyReferenceRequests');
    if (!tbody) return;

    db = loadState();
    let items = db.referenceRequests;
    if (uiState.reqFilter !== 'all') {
      items = items.filter(r => r.status === uiState.reqFilter);
    }
    if (uiState.reqSearch) {
      const q = uiState.reqSearch.toLowerCase();
      items = items.filter(r =>
        r.id.toLowerCase().includes(q) ||
        r.memberName.toLowerCase().includes(q) ||
        r.prodi.toLowerCase().includes(q) ||
        r.bookTopic.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 2.2rem; color: var(--slate-400);"><em>Tidak ditemukan usulan referensi yang cocok dengan pencarian/filter.</em></td></tr>`;
      return;
    }

    tbody.innerHTML = items.map(item => {
      let statusBadge = 'status-pending';
      let statusText = 'Menunggu Telaah';
      if (item.status === 'IN_PROCUREMENT') {
        statusBadge = 'status-repair';
        statusText = 'Masuk Disposisi 2027';
      } else if (item.status === 'AVAILABLE_WAREHOUSE') {
        statusBadge = 'status-resolved';
        statusText = 'Tersedia di Gudang';
      }

      const priceFormatted = 'Rp ' + (item.estPrice || 850000).toLocaleString('id-ID');

      return `
        <tr>
          <td><strong class="font-mono">${item.id}</strong></td>
          <td><small class="font-mono">${item.date}</small></td>
          <td>
            <strong>${item.memberName}</strong><br>
            <small class="font-mono">${item.memberId} (${item.role})</small>
          </td>
          <td><span style="font-weight:600; color:var(--navy-800);">${item.prodi}</span></td>
          <td><strong>${item.bookTopic}</strong></td>
          <td>
            <span class="badge-pill" style="font-size:0.6875rem;">${item.purpose}</span><br>
            <small class="font-mono" style="color:#047857; font-weight:700;">Est: ${priceFormatted}</small>
          </td>
          <td><span class="font-mono">${item.whatsapp}</span></td>
          <td><span class="badge-status ${statusBadge}">${statusText}</span></td>
          <td>
            <button type="button" class="btn btn-sm btn-outline btn-procure-ref" data-id="${item.id}">
              Masukkan Disposisi
            </button>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.btn-procure-ref').forEach(btn => {
      btn.addEventListener('click', () => markRefForProcurement(btn.getAttribute('data-id')));
    });
  }

  function renderDashboardQuickTables() {
    db = loadState();
    const tbodyExt = document.getElementById('tbodyQuickExtend');
    if (tbodyExt) {
      const pendingExt = db.extendRequests.filter(r => r.status === 'PENDING').slice(0, 3);
      if (pendingExt.length === 0) {
        tbodyExt.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--slate-400);">Tidak ada antrean pending.</td></tr>`;
      } else {
        tbodyExt.innerHTML = pendingExt.map(i => `
          <tr>
            <td><strong>${i.memberName}</strong><br><small class="font-mono">${i.memberId}</small></td>
            <td><span class="font-mono text-blue font-bold">${i.barcode}</span></td>
            <td>
              <button type="button" class="btn btn-sm btn-primary btn-execute-extend" data-id="${i.id}" data-barcode="${i.barcode}">
                Proses SLiMS
              </button>
            </td>
          </tr>
        `).join('');
      }
    }

    const tbodyDmg = document.getElementById('tbodyQuickDamage');
    if (tbodyDmg) {
      const pendingDmg = db.damageReports.filter(r => r.status === 'PENDING').slice(0, 3);
      if (pendingDmg.length === 0) {
        tbodyDmg.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--slate-400);">Tidak ada buku rusak pending.</td></tr>`;
      } else {
        tbodyDmg.innerHTML = pendingDmg.map(i => `
          <tr>
            <td>
              <strong class="font-mono">${i.id}</strong><br>
              <span class="nav-badge ${i.slaClass || 'badge-coral'}" style="font-size:0.62rem;">${i.slaBadge || 'SLA'}</span>
            </td>
            <td>${i.title}</td>
            <td><span class="badge-status status-pending">${i.damageType}</span></td>
            <td><span class="font-mono">${i.physicalLocation}</span></td>
          </tr>
        `).join('');
      }
    }
  }

  function renderAllAdminTables() {
    renderDamageTable();
    renderExtendTable();
    renderReferenceTable();
    renderDashboardQuickTables();
  }

  // Live Search Input Listeners (Kritik Pustakawan #1)
  document.getElementById('searchDamageInput')?.addEventListener('input', (e) => {
    uiState.dmgSearch = e.target.value.trim();
    renderDamageTable();
  });

  document.getElementById('searchExtendInput')?.addEventListener('input', (e) => {
    uiState.extSearch = e.target.value.trim();
    renderExtendTable();
  });

  document.getElementById('searchRequestInput')?.addEventListener('input', (e) => {
    uiState.reqSearch = e.target.value.trim();
    renderReferenceTable();
  });

  // =========================================================================
  // MODAL 1: TRIASE VERIFIKASI BUKU RUSAK (KRITIK PUSTAKAWAN #3)
  // =========================================================================
  function openVerifyModal(ticketId) {
    db = loadState();
    const report = db.damageReports.find(r => r.id === ticketId);
    if (!report) return;

    uiState.activeVerifyTicketId = ticketId;
    document.getElementById('modalVerifyTitle').textContent = `Verifikasi & Triase Koleksi: ${report.id}`;
    document.getElementById('modalBookTitle').textContent = report.title;
    document.getElementById('modalBarcode').textContent = `${report.barcode} (${report.callNumber})`;
    document.getElementById('modalReporter').textContent = `${report.reporterName} (${report.reporterNim})`;
    document.getElementById('modalDamageType').textContent = report.damageType;

    document.getElementById('chkPhysicalCheck').checked = false;
    document.getElementById('chkSlimsSync').checked = false;

    const lightRadio = document.querySelector('input[name="triageDecision"][value="LIGHT_REPAIR"]');
    if (lightRadio) lightRadio.checked = true;

    document.getElementById('modalVerifyDamage')?.classList.remove('is-hidden');
  }

  function closeVerifyModal() {
    document.getElementById('modalVerifyDamage')?.classList.add('is-hidden');
    uiState.activeVerifyTicketId = null;
  }

  function confirmDamageVerification() {
    const chk1 = document.getElementById('chkPhysicalCheck').checked;
    const chk2 = document.getElementById('chkSlimsSync').checked;
    if (!chk1 || !chk2) {
      showToast('Kontrol Internal SOP-001: Harap centang kedua kotak verifikasi fisik & SLiMS sebelum menutup tiket!', 'warning');
      return;
    }

    const triageRadio = document.querySelector('input[name="triageDecision"]:checked');
    const triageVal = triageRadio ? triageRadio.value : 'LIGHT_REPAIR';

    db = loadState();
    const report = db.damageReports.find(r => r.id === uiState.activeVerifyTicketId);
    if (report) {
      if (triageVal === 'LIGHT_REPAIR') {
        report.status = 'RESOLVED';
        report.physicalLocation = 'Rak Koleksi Aktif (Selesai 5m)';
        report.slimsStatus = 'Tersedia (Available)';
        report.slaBadge = 'Selesai 5 Menit';
        report.slaClass = 'badge-emerald';
        report.notes = 'Triase Ringan: Dilem/disolasi 5 menit di loket & kembali ke rak normal';
      } else if (triageVal === 'HEAVY_QUARANTINE') {
        report.status = 'IN_REPAIR';
        report.physicalLocation = 'Lemari Karantina Binding';
        report.slimsStatus = 'Dalam Perbaikan (Repair)';
        report.slaBadge = 'Karantina Binding';
        report.slaClass = 'badge-blue';
        report.notes = 'Triase Berat: Masuk lemari karantina penjilidan ulang';
      } else {
        report.status = 'IN_REPAIR';
        report.physicalLocation = 'Penyiangan / Afkir';
        report.slimsStatus = 'Hilang (Missing)';
        report.slaBadge = 'Afkir / Hilang';
        report.slaClass = 'badge-coral';
        report.notes = 'Triase Raib: Status katalog OPAC diubah ke Hilang';
      }

      saveState(db);
      closeVerifyModal();
      showToast(`Triase berhasil! Status buku ${report.barcode} diperbarui ke "${report.slimsStatus}".`, 'success');
      renderAllAdminTables();
      updateKPICards();
    }
  }

  function executeExtendSLiMS(id, barcode) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(barcode).catch(() => {});
    }
    db = loadState();
    const req = db.extendRequests.find(r => r.id === id);
    if (req) {
      req.status = 'PROCESSED';
      uiState.selectedExtendIds.delete(id);
      saveState(db);
      showToast(`Barcode ${barcode} disalin! Masa pinjam diperpanjang +7 hari di SLiMS.`, 'success');
      renderAllAdminTables();
      updateKPICards();
    }
  }

  function markRefForProcurement(id) {
    db = loadState();
    const req = db.referenceRequests.find(r => r.id === id);
    if (req) {
      req.status = 'IN_PROCUREMENT';
      req.actionNote = 'Dimasukkan ke Lembar Disposisi Pengadaan Dekanat 2027';
      saveState(db);
      showToast(`Judul "${req.bookTopic}" dimasukkan ke Lembar Disposisi Dekanat!`, 'success');
      renderAllAdminTables();
      updateKPICards();
    }
  }

  // Quiet Hour Toggle + Broadcast to layanan.html (Kritik Pustakawan #4)
  function toggleQuietHour() {
    db = loadState();
    db.quietHourActive = !db.quietHourActive;
    saveState(db);
    syncQuietHourBannerUI();

    const timerDisplay = document.getElementById('qhCountdownDisplay');
    if (db.quietHourActive) {
      showToast('Sesi Quiet Hour Aktif & Banner Pengumuman telah disiarkan ke Portal QR Mahasiswa (layanan.html)!', 'info');
      clearInterval(uiState.quietHourInterval);
      uiState.quietHourInterval = setInterval(() => {
        uiState.quietHourSeconds--;
        const m = Math.floor(uiState.quietHourSeconds / 60);
        const s = uiState.quietHourSeconds % 60;
        if (timerDisplay) {
          timerDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        }
      }, 1000);
    } else {
      clearInterval(uiState.quietHourInterval);
      showToast('Sesi Quiet Hour dihentikan. Banner di layar mahasiswa dinonaktifkan.', 'warning');
    }
  }

  // =========================================================================
  // MODAL 2: CETAK LEMBAR DISPOSISI RESMI BER-KOP FT UNY (KRITIK #5)
  // =========================================================================
  function openDisposisiModal() {
    db = loadState();
    const tbody = document.getElementById('tbodyDisposisiItems');
    const totalEl = document.getElementById('totalDisposisiBudget');
    if (!tbody) return;

    const procuredItems = db.referenceRequests.filter(r => r.status === 'IN_PROCUREMENT' || r.status === 'PENDING_REVIEW');
    let totalBudget = 0;

    tbody.innerHTML = procuredItems.map((item, idx) => {
      const price = item.estPrice || 850000;
      totalBudget += price;
      return `
        <tr>
          <td>${idx + 1}</td>
          <td class="font-mono">${item.id}</td>
          <td>${item.prodi}<br><small>(Pengusul: ${item.memberName})</small></td>
          <td><strong>${item.bookTopic}</strong></td>
          <td>${item.purpose}</td>
          <td class="font-mono">Rp ${price.toLocaleString('id-ID')}</td>
        </tr>
      `;
    }).join('');

    if (totalEl) {
      totalEl.textContent = 'Rp ' + totalBudget.toLocaleString('id-ID');
    }

    document.getElementById('modalDisposisiDekanat')?.classList.remove('is-hidden');
  }

  function closeDisposisiModal() {
    document.getElementById('modalDisposisiDekanat')?.classList.add('is-hidden');
  }

  document.getElementById('btnOpenDisposisiModal')?.addEventListener('click', openDisposisiModal);
  document.getElementById('btnCloseDisposisiModal')?.addEventListener('click', closeDisposisiModal);
  document.getElementById('btnCancelDisposisi')?.addEventListener('click', closeDisposisiModal);
  document.getElementById('btnPrintDisposisi')?.addEventListener('click', () => {
    window.print();
  });
  document.getElementById('btnPrintDisposisiTop')?.addEventListener('click', () => {
    window.print();
  });

  // CSV Exports
  function exportDamageCsv() {
    db = loadState();
    const headers = ['ID Tiket', 'SLA Status', 'Tanggal', 'Nomor Barcode', 'Judul Buku', 'Kategori Kerusakan', 'Pelapor', 'NIM', 'Lokasi Fisik', 'Status Triase SLiMS'];
    const rows = db.damageReports.map(r => [
      r.id, r.slaBadge || '', r.date, r.barcode, `"${r.title.replace(/"/g, '""')}"`, `"${r.damageType}"`, `"${r.reporterName}"`, r.reporterNim, `"${r.physicalLocation}"`, `"${r.slimsStatus}"`
    ]);
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    downloadBlob(csvContent, `Laporan_Triase_Buku_Rusak_FT_UNY.csv`, 'text/csv;charset=utf-8;');
    showToast('Berkas CSV Laporan Buku Rusak berhasil diunduh!', 'success');
  }

  function exportRequestCsv() {
    db = loadState();
    const headers = ['ID Permintaan', 'Tanggal', 'Nama Pemohon', 'NIM/NIP', 'Program Studi', 'Judul Buku', 'Keperluan', 'Estimasi Anggaran', 'Status Disposisi'];
    const rows = db.referenceRequests.map(r => [
      r.id, r.date, `"${r.memberName}"`, r.memberId, `"${r.prodi}"`, `"${r.bookTopic.replace(/"/g, '""')}"`, `"${r.purpose}"`, r.estPrice || 850000, `"${r.status}"`
    ]);
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    downloadBlob(csvContent, `Tabel_Borang_Kriteria5_LAM_INFOKOM_FT_UNY.csv`, 'text/csv;charset=utf-8;');
    showToast('Berkas CSV Borang Kriteria 5 LAM-INFOKOM berhasil diunduh!', 'success');
  }

  function downloadBlob(content, filename, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const pom = document.createElement('a');
    pom.href = url;
    pom.setAttribute('download', filename);
    pom.click();
    URL.revokeObjectURL(url);
  }

  document.getElementById('btnCloseVerifyModal')?.addEventListener('click', closeVerifyModal);
  document.getElementById('btnCancelVerify')?.addEventListener('click', closeVerifyModal);
  document.getElementById('btnConfirmVerify')?.addEventListener('click', confirmDamageVerification);
  document.getElementById('btnToggleQuietHourTimer')?.addEventListener('click', toggleQuietHour);
  document.getElementById('btnExportDamageCsv')?.addEventListener('click', exportDamageCsv);
  document.getElementById('btnExportRequestCsv')?.addEventListener('click', exportRequestCsv);

  document.querySelectorAll('[data-filter-dmg]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-dmg]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      uiState.dmgFilter = btn.getAttribute('data-filter-dmg');
      renderDamageTable();
    });
  });

  document.querySelectorAll('[data-filter-ext]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-ext]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      uiState.extFilter = btn.getAttribute('data-filter-ext');
      renderExtendTable();
    });
  });

  document.querySelectorAll('[data-filter-req]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-req]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      uiState.reqFilter = btn.getAttribute('data-filter-req');
      renderReferenceTable();
    });
  });

  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      db = loadState();
      updateKPICards();
      renderAllAdminTables();
      syncQuietHourBannerUI();
      showToast('Sinkronisasi Real-Time: Perubahan status diterima!', 'info');
    }
  });

  syncQuietHourBannerUI();
  if (document.body.classList.contains('page-librarian')) {
    updateKPICards();
    renderAllAdminTables();
  }
});

