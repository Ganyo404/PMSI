/**
 * SIMPEL-KOLEKSI FT UNY - MOCKUP 3 INTERACTIVE ENGINE
 * Dual-Portal Synchronized Engine:
 * - index.html  : Portal Pustakawan (Login -> Meja Kerja Sidebar)
 * - layanan.html: Portal Pemustaka (Hasil Scan QR - Tanpa Login)
 * Uses LocalStorage for seamless cross-tab real-time reactivity!
 */

document.addEventListener('DOMContentLoaded', () => {

  const STORAGE_KEY = 'simpel_koleksi_v3_state';

  // Default Baseline Data
  const defaultInitialData = {
    damageReports: [
      {
        id: 'TKT-202610-001',
        date: '28/10/2026 09:15',
        barcode: 'B004125',
        title: 'Algoritma Pemrograman dan Struktur Data C++',
        callNumber: '005.1 KUN a',
        damageType: 'Halaman Sobek / Rusak',
        reporterName: 'Gantar Abimanyu',
        reporterNim: '24050530042',
        notes: 'Halaman 45-52 sobek di bagian tengah',
        physicalLocation: 'Rak Transit Tk. 2',
        status: 'PENDING',
        slimsStatus: 'Tersedia (Perlu Update)'
      },
      {
        id: 'TKT-202610-002',
        date: '27/10/2026 14:20',
        barcode: 'FT-INF-2024-072',
        title: 'Kecerdasan Buatan Terapan & Deep Learning',
        callNumber: '006.3 RUS k',
        damageType: 'Jilidan Rusak / Sampul Lepas',
        reporterName: 'Ganendra Pradipa',
        reporterNim: '24050530038',
        notes: 'Punggung jilidan lepas, lembar lampiran terpisah',
        physicalLocation: 'Rak Transit Tk. 2',
        status: 'PENDING',
        slimsStatus: 'Tersedia (Perlu Update)'
      },
      {
        id: 'TKT-202610-003',
        date: '26/10/2026 11:05',
        barcode: 'B001980',
        title: 'Rekayasa Perangkat Lunak: Pendekatan Praktisi',
        callNumber: '005.1 PRE r',
        damageType: 'Salah Rak / Nyasar',
        reporterName: 'M. Fadlan Dirmansyah',
        reporterNim: '24050530034',
        notes: 'Terselip di rak Teknik Mesin (DDC 621)',
        physicalLocation: 'Rak Transit Tk. 2',
        status: 'PENDING',
        slimsStatus: 'Salah Lokasi'
      },
      {
        id: 'TKT-202610-004',
        date: '24/10/2026 10:00',
        barcode: 'B002811',
        title: 'Dasar-Dasar Teknik Tenaga Listrik',
        callNumber: '621.3 ZUR d',
        damageType: 'Halaman Sobek / Rusak',
        reporterName: 'Farid Hidayat',
        reporterNim: '24050530015',
        notes: 'Diservis oleh pustakawan pada sesi Quiet Hour',
        physicalLocation: 'Ruang Rawat Buku',
        status: 'IN_REPAIR',
        slimsStatus: 'Dalam Perbaikan (Repair)'
      },
      {
        id: 'TKT-202610-005',
        date: '22/10/2026 08:30',
        barcode: 'FT-SIP-2022-009',
        title: 'Mekanika Tanah dan Teknik Pondasi',
        callNumber: '624.1 BOW m',
        damageType: 'Koleksi Tidak Ditemukan',
        reporterName: 'Rian Pratama',
        reporterNim: '22501241002',
        notes: 'Fisik ditemukan kembali saat stock opname rak sipil',
        physicalLocation: 'Rak Koleksi Aktif',
        status: 'RESOLVED',
        slimsStatus: 'Tersedia (Available)'
      }
    ],

    extendRequests: [
      {
        id: 'EXT-202610-001',
        date: '28/10/2026 10:45',
        memberId: '24050530042',
        memberName: 'Gantar Abimanyu',
        barcode: 'B003891',
        title: 'Jaringan Komputer dan Komunikasi Data',
        duration: '+7 Hari Kerja',
        whatsapp: '081234567890',
        status: 'PENDING'
      },
      {
        id: 'EXT-202610-002',
        date: '28/10/2026 11:20',
        memberId: '198503152010121002',
        memberName: 'Dr. Hendra Kusuma, M.T. (Dosen)',
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
        date: '28/10/2026 08:30',
        memberId: '24050530038',
        memberName: 'Ganendra Pradipa',
        role: 'Mahasiswa S1',
        prodi: 'Pendidikan Teknik Informatika',
        bookTopic: 'Pemrograman Deep Learning Menggunakan PyTorch (Zhang, 2024)',
        purpose: 'Tugas Akhir / Skripsi',
        whatsapp: '081299887766',
        status: 'PENDING_REVIEW',
        actionNote: 'Ditinjau kelayakan silabus PTI'
      },
      {
        id: 'REQ-202610-002',
        date: '27/10/2026 13:40',
        memberId: '197604122005011003',
        memberName: 'Dr. Bambang Sugiarto, M.Eng.',
        role: 'Dosen Fakultas Teknik',
        prodi: 'Pendidikan Teknik Elektro',
        bookTopic: 'Internet of Things: Arsitektur Sensor dan Protokol MQTT',
        purpose: 'Riset / Penelitian Dosen',
        whatsapp: '081122334455',
        status: 'IN_PROCUREMENT',
        actionNote: 'Diajukan ke usulan pagu belanja buku baru 2027'
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
        whatsapp: '085811223344',
        status: 'IN_PROCUREMENT',
        actionNote: 'Prioritas belanja akreditasi LAM-INFOKOM'
      }
    ]
  };

  // State Management with LocalStorage Cache
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    return JSON.parse(JSON.stringify(defaultInitialData));
  }

  function saveState(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save to LocalStorage:', e);
    }
  }

  let db = loadState();

  // Local UI State
  const uiState = {
    currentPublicSubView: 'landing',
    currentAdminPanel: 'adminPanelDashboard',
    quietHourActive: false,
    quietHourSeconds: 3600,
    quietHourInterval: null,
    activeVerifyTicketId: null
  };

  // Toast System
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    if (type === 'success') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else if (type === 'error') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    } else if (type === 'warning') {
      iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
    }

    toast.innerHTML = `<span class="toast-icon">${iconSvg}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 3500);
  }

  // =========================================================================
  // A. ROUTING FOR INDEX.HTML (LIBRARIAN PORTAL: LOGIN -> ADMIN)
  // =========================================================================

  const viewLogin = document.getElementById('viewLogin');
  const viewAdmin = document.getElementById('viewAdmin');

  function openLibrarianAdmin() {
    if (viewLogin && viewAdmin) {
      viewLogin.classList.remove('is-active');
      viewAdmin.classList.add('is-active');
      renderAllAdminTables();
      updateKPICards();
    }
  }

  function logoutLibrarian() {
    if (viewLogin && viewAdmin) {
      viewAdmin.classList.remove('is-active');
      viewLogin.classList.add('is-active');
      showToast('Sesi Meja Kerja Pustakawan telah ditutup.', 'info');
    }
  }

  // Login Form Submissions in index.html
  document.getElementById('formLibrarianLogin')?.addEventListener('submit', (e) => {
    e.preventDefault();
    openLibrarianAdmin();
    showToast('Selamat datang, Bu Siti Rahmawati (Pustakawan FT UNY)', 'success');
  });

  document.getElementById('btnDemoQuickLogin')?.addEventListener('click', () => {
    openLibrarianAdmin();
    showToast('Masuk dengan Akun Demo Pustakawan FT UNY', 'success');
  });

  document.getElementById('btnLogoutAdmin')?.addEventListener('click', logoutLibrarian);

  // Admin Sidebar Navigation
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.getAttribute('data-panel');
      switchAdminPanel(panel);
    });
  });

  function switchAdminPanel(panelId) {
    uiState.currentAdminPanel = panelId;
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('is-active'));
    document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('is-active'));

    const navBtn = document.querySelector(`.nav-item[data-panel="${panelId}"]`);
    const panel = document.getElementById(panelId);

    if (navBtn) navBtn.classList.add('is-active');
    if (panel) panel.classList.add('is-active');

    const headerTitle = document.getElementById('adminHeaderTitle');
    if (headerTitle) {
      if (panelId === 'adminPanelDashboard') headerTitle.textContent = 'Dashboard & Rangkuman Layanan';
      if (panelId === 'adminPanelDamage') headerTitle.textContent = 'Laporan Buku Rusak & Verifikasi SLiMS';
      if (panelId === 'adminPanelExtend') headerTitle.textContent = 'Layanan Mandiri Perpanjangan Pinjam SLiMS';
      if (panelId === 'adminPanelRequest') headerTitle.textContent = 'Request Referensi & Usulan Koleksi Pemustaka';
    }
  }

  document.getElementById('linkToExtendPanel')?.addEventListener('click', () => switchAdminPanel('adminPanelExtend'));
  document.getElementById('linkToDamagePanel')?.addEventListener('click', () => switchAdminPanel('adminPanelDamage'));

  // =========================================================================
  // B. ROUTING FOR LAYANAN.HTML (PUBLIC QR CODE PORTAL - NO LOGIN)
  // =========================================================================

  function switchPublicSubView(subViewId) {
    uiState.currentPublicSubView = subViewId;
    document.querySelectorAll('.public-subview').forEach(v => v.classList.remove('is-active'));

    if (subViewId === 'landing') {
      document.getElementById('subViewLanding')?.classList.add('is-active');
    } else if (subViewId === 'damageForm') {
      document.getElementById('subViewDamageForm')?.classList.add('is-active');
    } else if (subViewId === 'serviceForm') {
      document.getElementById('subViewServiceForm')?.classList.add('is-active');
      switchServiceTab('panelExtend');
    } else if (subViewId === 'success') {
      document.getElementById('subViewTicketSuccess')?.classList.add('is-active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchServiceTab(panelId) {
    document.querySelectorAll('.service-tab-btn').forEach(b => b.classList.remove('is-active'));
    document.querySelectorAll('.service-panel').forEach(p => p.classList.remove('is-active'));

    const activeBtn = document.querySelector(`.service-tab-btn[data-target="${panelId}"]`);
    const activePanel = document.getElementById(panelId);

    if (activeBtn) activeBtn.classList.add('is-active');
    if (activePanel) activePanel.classList.add('is-active');
  }

  // Public Event Listeners
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
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      switchServiceTab(target);
    });
  });

  // Sample Data Chips
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.getAttribute('data-fill');
      if (val) {
        const [barcode, title] = val.split('|');
        if (chip.classList.contains('chip-ext')) {
          const barcodeInput = document.getElementById('extBarcode');
          const titleInput = document.getElementById('extBookTitle');
          if (barcodeInput) barcodeInput.value = barcode;
          if (titleInput) titleInput.value = title;
        } else {
          const barcodeInput = document.getElementById('dmgBarcode');
          const titleInput = document.getElementById('dmgBookTitle');
          if (barcodeInput) barcodeInput.value = barcode;
          if (titleInput) titleInput.value = title;
        }
        showToast(`Sampel data "${barcode}" terisi!`, 'info');
      }
    });
  });

  // Simulate Scan Button
  document.getElementById('btnSimulateScanBarcode')?.addEventListener('click', () => {
    const input = document.getElementById('dmgBarcode');
    const title = document.getElementById('dmgBookTitle');
    if (input && title) {
      input.value = 'FT-INF-2024-072';
      title.value = 'Kecerdasan Buatan Terapan & Deep Learning';
      showToast('Kamera memindai barcode: "FT-INF-2024-072"', 'success');
    }
  });

  // =========================================================================
  // C. PUBLIC FORM SUBMISSIONS (SAVE TO DB & LOCALSTORAGE)
  // =========================================================================

  // 1. Submit Lapor Buku Rusak
  const formDamage = document.getElementById('formDamageReport');
  if (formDamage) {
    formDamage.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('dmgReporterName').value.trim();
      const nim = document.getElementById('dmgReporterNim').value.trim();
      const barcode = document.getElementById('dmgBarcode').value.trim();
      const title = document.getElementById('dmgBookTitle').value.trim();
      const damageTypeRadio = document.querySelector('input[name="dmgType"]:checked');
      const damageType = damageTypeRadio ? damageTypeRadio.value : 'Halaman Sobek / Rusak';
      const notes = document.getElementById('dmgNotes').value.trim();

      if (!name || !nim || !barcode || !title) {
        showToast('Harap lengkapi semua kolom bertanda bintang (*)!', 'error');
        return;
      }

      db = loadState();
      const newId = `TKT-202610-0${db.damageReports.length + 1}`;
      const now = new Date();
      const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const newEntry = {
        id: newId,
        date: dateStr,
        barcode: barcode,
        title: title,
        callNumber: 'DDC-Lokal',
        damageType: damageType,
        reporterName: name,
        reporterNim: nim,
        notes: notes || 'Laporan mandiri mahasiswa via QR Code',
        physicalLocation: 'Rak Transit Tk. 2',
        status: 'PENDING',
        slimsStatus: 'Tersedia (Perlu Update)'
      };

      db.damageReports.unshift(newEntry);
      saveState(db);

      // Setup Success Ticket Screen
      document.getElementById('successBadgeType').textContent = 'LAPORAN KERUSAKAN DITERIMA';
      document.getElementById('successTitle').textContent = 'Tiket Laporan Berhasil Diterbitkan!';
      document.getElementById('successDesc').textContent = 'Terima kasih atas partisipasi Anda dalam menjaga kualitas sumber belajar Fakultas Teknik.';
      document.getElementById('ticketCodeDisplay').textContent = newId;
      document.getElementById('ticketBookDisplay').textContent = title;
      document.getElementById('ticketBarcodeDisplay').textContent = barcode;
      document.getElementById('ticketTypeDisplay').textContent = damageType;
      document.getElementById('ticketUserDisplay').textContent = `${name} (${nim})`;
      document.getElementById('ticketStatusDisplay').textContent = 'Menunggu Verifikasi Rak';
      document.getElementById('ticketInstructionText').innerHTML = 'Segera bawa buku fisik ke <strong>Rak Transit Tingkat 2</strong> di samping loket sirkulasi agar diperiksa pada sesi Quiet Hour.';

      formDamage.reset();
      switchPublicSubView('success');
      showToast(`Laporan ${newId} berhasil dikirim ke Meja Pustakawan!`, 'success');
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
        showToast('Harap lengkapi semua isian formulir perpanjangan!', 'error');
        return;
      }

      db = loadState();
      const newId = `EXT-202610-0${db.extendRequests.length + 1}`;
      const now = new Date();
      const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      const newEntry = {
        id: newId,
        date: dateStr,
        memberId: idAnggota,
        memberName: name,
        barcode: barcode,
        title: title,
        duration: '+7 Hari Kerja',
        whatsapp: wa,
        status: 'PENDING'
      };

      db.extendRequests.unshift(newEntry);
      saveState(db);

      // Setup Success Ticket Screen
      document.getElementById('successBadgeType').textContent = 'PERMOHONAN PERPANJANGAN DITERIMA';
      document.getElementById('successTitle').textContent = 'Permohonan Berhasil Diajukan!';
      document.getElementById('successDesc').textContent = 'Petugas sirkulasi akan memvalidasi data pinjaman Anda pada sistem SLiMS secara berkala.';
      document.getElementById('ticketCodeDisplay').textContent = newId;
      document.getElementById('ticketBookDisplay').textContent = title;
      document.getElementById('ticketBarcodeDisplay').textContent = barcode;
      document.getElementById('ticketTypeDisplay').textContent = 'Perpanjangan Masa Pinjam (+7 Hari)';
      document.getElementById('ticketUserDisplay').textContent = `${name} (${idAnggota})`;
      document.getElementById('ticketStatusDisplay').textContent = 'Menunggu Eksekusi SLiMS';
      document.getElementById('ticketInstructionText').innerHTML = 'Buku <strong>TIDAK PERLU</strong> ditaruh di rak transit. Anda tetap membawa buku dan konfirmasi status akan dikirimkan ke WhatsApp Anda.';

      formExtend.reset();
      switchPublicSubView('success');
      showToast(`Permohonan ${newId} berhasil dikirim ke Meja Pustakawan!`, 'success');
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

      const newEntry = {
        id: newId,
        date: dateStr,
        memberId: idAnggota,
        memberName: name,
        role: role,
        prodi: prodi,
        bookTopic: topic,
        purpose: purpose,
        whatsapp: wa,
        status: 'PENDING_REVIEW',
        actionNote: 'Ditinjau oleh pustakawan untuk telaah silabus prodi'
      };

      db.referenceRequests.unshift(newEntry);
      saveState(db);

      // Setup Success Ticket Screen
      document.getElementById('successBadgeType').textContent = 'USULAN REFERENSI TERCATAT';
      document.getElementById('successTitle').textContent = 'Usulan Koleksi Berhasil Dicatat!';
      document.getElementById('successDesc').textContent = 'Usulan Anda dicatat dalam basis data analisis kebutuhan referensi dan pagu belanja buku baru Dekanat.';
      document.getElementById('ticketCodeDisplay').textContent = newId;
      document.getElementById('ticketBookDisplay').textContent = topic;
      document.getElementById('ticketBarcodeDisplay').textContent = 'Usulan Koleksi Baru';
      document.getElementById('ticketTypeDisplay').textContent = `Request Referensi (${purpose})`;
      document.getElementById('ticketUserDisplay').textContent = `${name} - ${prodi}`;
      document.getElementById('ticketStatusDisplay').textContent = 'Menunggu Telaah Koleksi';
      document.getElementById('ticketInstructionText').innerHTML = 'Pustakawan akan mengecek pangkalan data SLiMS atau mengajukan buku ini ke usulan belanja akreditasi fakultas.';

      formRequest.reset();
      switchPublicSubView('success');
      showToast(`Usulan referensi ${newId} berhasil dikirim!`, 'success');
    });
  }

  // =========================================================================
  // D. ADMIN DASHBOARD & TABLE RENDERING (INDEX.HTML)
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

  function renderDamageTable(filter = 'all') {
    const tbody = document.getElementById('tbodyDamageReports');
    if (!tbody) return;

    db = loadState();
    let items = db.damageReports;
    if (filter !== 'all') {
      items = items.filter(r => r.status === filter);
    }

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 2.5rem; color: var(--slate-400);"><em>Belum ada laporan buku rusak pada kategori filter ini.</em></td></tr>`;
      return;
    }

    tbody.innerHTML = items.map(item => {
      let badgeClass = 'status-pending';
      let statusLabel = 'Menunggu Rak Transit';
      if (item.status === 'IN_REPAIR') {
        badgeClass = 'status-repair';
        statusLabel = 'Dalam Perbaikan';
      } else if (item.status === 'RESOLVED') {
        badgeClass = 'status-resolved';
        statusLabel = 'Selesai Sinkron';
      }

      return `
        <tr>
          <td><strong class="font-mono">${item.id}</strong></td>
          <td><small class="font-mono">${item.date}</small></td>
          <td>
            <div style="font-weight:700; color:var(--navy-900);">${item.title}</div>
            <small class="font-mono text-blue">${item.barcode} | ${item.callNumber}</small>
          </td>
          <td><span class="badge-status ${badgeClass}">${item.damageType}</span></td>
          <td>${item.reporterName} <br><small class="font-mono text-muted">${item.reporterNim}</small></td>
          <td><span class="font-mono" style="font-size:0.75rem;">${item.physicalLocation}</span></td>
          <td><span class="badge-status status-slims-done">${item.slimsStatus}</span></td>
          <td>
            ${item.status !== 'RESOLVED' ? `
              <button type="button" class="btn btn-sm btn-outline btn-verify-damage" data-id="${item.id}">
                Verifikasi SLiMS
              </button>
            ` : `
              <span style="color:var(--emerald-600); font-weight:700; font-size:0.75rem;">Selesai</span>
            `}
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.btn-verify-damage').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openVerifyModal(id);
      });
    });
  }

  function renderExtendTable(filter = 'all') {
    const tbody = document.getElementById('tbodyExtendRequests');
    if (!tbody) return;

    db = loadState();
    let items = db.extendRequests;
    if (filter !== 'all') {
      items = items.filter(r => r.status === filter);
    }

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 2.5rem; color: var(--slate-400);"><em>Belum ada antrean perpanjangan pada kategori filter ini.</em></td></tr>`;
      return;
    }

    tbody.innerHTML = items.map(item => {
      const isPending = item.status === 'PENDING';
      return `
        <tr>
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
                Salin & Eksekusi SLiMS
              </button>
            ` : `
              <span style="color:var(--emerald-600); font-weight:700; font-size:0.75rem;">Terperbarui</span>
            `}
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.btn-execute-extend').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const barcode = btn.getAttribute('data-barcode');
        executeExtendSLiMS(id, barcode);
      });
    });
  }

  function renderReferenceTable(filter = 'all') {
    const tbody = document.getElementById('tbodyReferenceRequests');
    if (!tbody) return;

    db = loadState();
    let items = db.referenceRequests;
    if (filter !== 'all') {
      items = items.filter(r => r.status === filter);
    }

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 2.5rem; color: var(--slate-400);"><em>Belum ada usulan referensi pada kategori filter ini.</em></td></tr>`;
      return;
    }

    tbody.innerHTML = items.map(item => {
      let statusBadge = 'status-pending';
      let statusText = 'Menunggu Telaah';
      if (item.status === 'IN_PROCUREMENT') {
        statusBadge = 'status-repair';
        statusText = 'Usulan Belanja 2027';
      } else if (item.status === 'AVAILABLE_WAREHOUSE') {
        statusBadge = 'status-resolved';
        statusText = 'Tersedia di Gudang';
      }

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
          <td><span class="badge-pill" style="font-size:0.6875rem;">${item.purpose}</span></td>
          <td><span class="font-mono">${item.whatsapp}</span></td>
          <td><span class="badge-status ${statusBadge}">${statusText}</span></td>
          <td>
            <button type="button" class="btn btn-sm btn-outline btn-procure-ref" data-id="${item.id}">
              Masukkan Pagu Belanja
            </button>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.btn-procure-ref').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        markRefForProcurement(id);
      });
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
            <td><strong class="font-mono">${i.id}</strong></td>
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

  // Verification Modal
  function openVerifyModal(ticketId) {
    db = loadState();
    const report = db.damageReports.find(r => r.id === ticketId);
    if (!report) return;

    uiState.activeVerifyTicketId = ticketId;

    document.getElementById('modalVerifyTitle').textContent = `Verifikasi Koleksi: ${report.id}`;
    document.getElementById('modalBookTitle').textContent = report.title;
    document.getElementById('modalBarcode').textContent = `${report.barcode} (${report.callNumber})`;
    document.getElementById('modalReporter').textContent = `${report.reporterName} (${report.reporterNim})`;
    document.getElementById('modalDamageType').textContent = report.damageType;

    document.getElementById('chkPhysicalCheck').checked = false;
    document.getElementById('chkSlimsSync').checked = false;
    document.getElementById('selectSlimsNewStatus').value = 'Dalam Perbaikan (Repair)';

    document.getElementById('modalVerifyDamage')?.classList.remove('is-hidden');
  }

  function closeVerifyModal() {
    document.getElementById('modalVerifyDamage')?.classList.add('is-hidden');
    uiState.activeVerifyTicketId = null;
  }

  function confirmDamageVerification() {
    const chk1 = document.getElementById('chkPhysicalCheck').checked;
    const chk2 = document.getElementById('chkSlimsSync').checked;
    const newSlimsStatus = document.getElementById('selectSlimsNewStatus').value;

    if (!chk1 || !chk2) {
      showToast('Harap centang verifikasi fisik buku dan kecocokan data SLiMS!', 'warning');
      return;
    }

    db = loadState();
    const report = db.damageReports.find(r => r.id === uiState.activeVerifyTicketId);
    if (report) {
      if (newSlimsStatus.includes('Tersedia')) {
        report.status = 'RESOLVED';
        report.physicalLocation = 'Rak Koleksi Aktif';
      } else {
        report.status = 'IN_REPAIR';
        report.physicalLocation = 'Ruang Rawat Buku';
      }
      report.slimsStatus = newSlimsStatus;

      saveState(db);
      closeVerifyModal();
      showToast(`Status SLiMS untuk ${report.barcode} berhasil dimutakhirkan ke "${newSlimsStatus}"!`, 'success');
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
      saveState(db);
      showToast(`Barcode ${barcode} berhasil disalin! Status pinjam diperpanjang +7 hari di SLiMS.`, 'success');
      renderAllAdminTables();
      updateKPICards();
    }
  }

  function markRefForProcurement(id) {
    db = loadState();
    const req = db.referenceRequests.find(r => r.id === id);
    if (req) {
      req.status = 'IN_PROCUREMENT';
      req.actionNote = 'Dialokasikan ke usulan pagu belanja buku baru LAM-INFOKOM 2027';
      saveState(db);
      showToast(`Usulan "${req.bookTopic}" berhasil dimasukkan ke daftar pagu belanja buku Dekanat!`, 'success');
      renderAllAdminTables();
      updateKPICards();
    }
  }

  // Quiet Hour Toggle
  function toggleQuietHour() {
    const bar = document.getElementById('quietHourBar');
    const timerDisplay = document.getElementById('qhCountdownDisplay');

    if (!uiState.quietHourActive) {
      uiState.quietHourActive = true;
      bar?.classList.remove('is-hidden');
      showToast('Sesi Quiet Hour (Jam Tenang) aktif. Fokus verifikasi fisik koleksi!', 'info');

      uiState.quietHourInterval = setInterval(() => {
        uiState.quietHourSeconds--;
        if (uiState.quietHourSeconds <= 0) {
          clearInterval(uiState.quietHourInterval);
          uiState.quietHourActive = false;
          bar?.classList.add('is-hidden');
          showToast('Sesi Quiet Hour telah selesai.', 'success');
          return;
        }

        const m = Math.floor(uiState.quietHourSeconds / 60);
        const s = uiState.quietHourSeconds % 60;
        if (timerDisplay) {
          timerDisplay.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
      }, 1000);
    } else {
      uiState.quietHourActive = false;
      clearInterval(uiState.quietHourInterval);
      bar?.classList.add('is-hidden');
      showToast('Sesi Quiet Hour dihentikan.', 'warning');
    }
  }

  // CSV Export Functions
  function exportDamageCsv() {
    db = loadState();
    const headers = ['ID Tiket', 'Tanggal', 'Nomor Barcode', 'Nomor Panggil', 'Judul Buku', 'Kategori Kerusakan', 'Nama Pelapor', 'NIM', 'Lokasi Fisik', 'Status SLiMS'];
    const rows = db.damageReports.map(r => [
      r.id,
      r.date,
      r.barcode,
      r.callNumber,
      `"${r.title.replace(/"/g, '""')}"`,
      `"${r.damageType}"`,
      `"${r.reporterName}"`,
      r.reporterNim,
      `"${r.physicalLocation}"`,
      `"${r.slimsStatus}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    downloadBlob(csvContent, `Laporan_Kerusakan_Koleksi_FT_UNY_${formatDateForFilename()}.csv`, 'text/csv;charset=utf-8;');
    showToast('Berkas CSV Laporan Kerusakan berhasil diunduh!', 'success');
  }

  function exportRequestCsv() {
    db = loadState();
    const headers = ['ID Permintaan', 'Tanggal', 'Nama Pemohon', 'NIM/NIP', 'Status Pemohon', 'Program Studi', 'Judul Buku / Topik yang Dicari', 'Keperluan', 'Kontak WhatsApp', 'Status Tindak Lanjut'];
    const rows = db.referenceRequests.map(r => [
      r.id,
      r.date,
      `"${r.memberName}"`,
      r.memberId,
      `"${r.role}"`,
      `"${r.prodi}"`,
      `"${r.bookTopic.replace(/"/g, '""')}"`,
      `"${r.purpose}"`,
      r.whatsapp,
      `"${r.status}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    downloadBlob(csvContent, `Usulan_Pengadaan_Koleksi_Dekanat_FT_UNY_${formatDateForFilename()}.csv`, 'text/csv;charset=utf-8;');
    showToast('Berkas CSV Usulan Pengadaan Dekanat berhasil diunduh!', 'success');
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

  function formatDateForFilename() {
    const d = new Date();
    return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  }

  // Modal Listeners
  document.getElementById('btnCloseVerifyModal')?.addEventListener('click', closeVerifyModal);
  document.getElementById('btnCancelVerify')?.addEventListener('click', closeVerifyModal);
  document.getElementById('btnConfirmVerify')?.addEventListener('click', confirmDamageVerification);
  document.getElementById('btnToggleQuietHourTimer')?.addEventListener('click', toggleQuietHour);

  // CSV Listeners
  document.getElementById('btnExportDamageCsv')?.addEventListener('click', exportDamageCsv);
  document.getElementById('btnExportRequestCsv')?.addEventListener('click', exportRequestCsv);

  // Admin Filter Listeners
  document.querySelectorAll('[data-filter-dmg]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-dmg]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderDamageTable(btn.getAttribute('data-filter-dmg'));
    });
  });

  document.querySelectorAll('[data-filter-ext]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-ext]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderExtendTable(btn.getAttribute('data-filter-ext'));
    });
  });

  document.querySelectorAll('[data-filter-req]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-req]').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderReferenceTable(btn.getAttribute('data-filter-req'));
    });
  });

  // Cross-Tab LocalStorage Listener: Instant Live Sync!
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      db = loadState();
      updateKPICards();
      renderAllAdminTables();
      showToast('Data baru masuk dari kiriman pemustaka (QR)!', 'info');
    }
  });

  // Initialization check
  if (document.body.classList.contains('page-librarian')) {
    updateKPICards();
    renderAllAdminTables();
  }
});
