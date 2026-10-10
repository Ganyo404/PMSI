/**
 * ═══════════════════════════════════════════════════════════
 *  SIMPEL-KOLEKSI FT UNY — APP LOGIC
 *  Interaktivitas Mockup: Role Switching, Form Submit,
 *  Quiet Hour Timer, Ticket Queue, Verify Modal, Chart Anim,
 *  Borang Export, Toast Notifications, Live Clock.
 *  Zero-Dependency: Vanilla JavaScript ES6+ (No Framework).
 * ═══════════════════════════════════════════════════════════
 */

/* ── INITIAL TICKET DATA (Simulated Database) ─────────── */
const ticketDatabase = [
  {
    id: 'TKT-202610-001', date: '07 Okt 2026', barcode: 'FT-INF-2024-017',
    title: 'Algoritma dan Pemrograman dengan Python', category: 'Halaman Robek / Rusak Fisik',
    sla: 'green', slims: 'resolved', reporter: 'Andi Prasetyo', nim: '24050530012',
    status: 'resolved'
  },
  {
    id: 'TKT-202610-002', date: '07 Okt 2026', barcode: 'FT-ELK-2023-045',
    title: 'Rangkaian Elektronika Dasar', category: 'Halaman Hilang Sebagian',
    sla: 'green', slims: 'resolved', reporter: 'Siti Nurhaliza', nim: '24050530025',
    status: 'resolved'
  },
  {
    id: 'TKT-202610-003', date: '07 Okt 2026', barcode: 'FT-MSN-2024-008',
    title: 'Mekanika Teknik Jilid 2', category: 'Buku Salah Letak / Tidak Sesuai OPAC',
    sla: 'green', slims: 'resolved', reporter: 'Budi Santoso', nim: '24050530033',
    status: 'resolved'
  },
  {
    id: 'TKT-202610-004', date: '07 Okt 2026', barcode: 'FT-INF-2024-031',
    title: 'Basis Data Relasional', category: 'Halaman Robek / Rusak Fisik',
    sla: 'green', slims: 'resolved', reporter: 'Dewi Lestari', nim: '24050530041',
    status: 'resolved'
  },
  {
    id: 'TKT-202610-005', date: '08 Okt 2026', barcode: 'FT-SPL-2023-022',
    title: 'Statika Struktur Bangunan', category: 'Koleksi Hilang Fisik',
    sla: 'green', slims: 'resolved', reporter: 'Rizky Fajar', nim: '24050530019',
    status: 'resolved'
  },
  {
    id: 'TKT-202610-006', date: '08 Okt 2026', barcode: 'FT-INF-2024-055',
    title: 'Jaringan Komputer dan Internet', category: 'Halaman Hilang Sebagian',
    sla: 'green', slims: 'resolved', reporter: 'Maya Anggraini', nim: '24050530028',
    status: 'resolved'
  },
  {
    id: 'TKT-202610-007', date: '08 Okt 2026', barcode: 'FT-ELK-2024-011',
    title: 'Teknik Digital Modern', category: 'Halaman Robek / Rusak Fisik',
    sla: 'green', slims: 'resolved', reporter: 'Agus Hermawan', nim: '24050530036',
    status: 'resolved'
  },
  {
    id: 'TKT-202610-008', date: '09 Okt 2026', barcode: 'FT-MSN-2023-019',
    title: 'Termodinamika Teknik', category: 'Buku Salah Letak / Tidak Sesuai OPAC',
    sla: 'green', slims: 'resolved', reporter: 'Putri Rahayu', nim: '24050530044',
    status: 'resolved'
  },
  {
    id: 'TKT-202610-009', date: '09 Okt 2026', barcode: 'FT-INF-2024-072',
    title: 'Kecerdasan Buatan: Teori dan Implementasi', category: 'Halaman Robek / Rusak Fisik',
    sla: 'green', slims: 'pending', reporter: 'Farid Hidayat', nim: '24050530015',
    status: 'pending'
  },
  {
    id: 'TKT-202610-010', date: '09 Okt 2026', barcode: 'FT-SPL-2024-035',
    title: 'Perencanaan Wilayah dan Kota', category: 'Koleksi Hilang Fisik',
    sla: 'yellow', slims: 'pending', reporter: 'Hana Permata', nim: '24050530022',
    status: 'pending'
  },
  {
    id: 'TKT-202610-011', date: '10 Okt 2026', barcode: 'FT-ELK-2024-028',
    title: 'Sistem Kendali Otomatis', category: 'Halaman Hilang Sebagian',
    sla: 'green', slims: 'pending', reporter: 'Yoga Pratama', nim: '24050530048',
    status: 'pending'
  },
  {
    id: 'TKT-202610-012', date: '10 Okt 2026', barcode: 'FT-INF-2024-089',
    title: 'Rekayasa Perangkat Lunak', category: 'Buku Salah Letak / Tidak Sesuai OPAC',
    sla: 'green', slims: 'pending', reporter: 'Nadia Safitri', nim: '24050530031',
    status: 'pending'
  },
];

let ticketCounter = ticketDatabase.length;
let currentFilter = 'all';
let quietHourInterval = null;
let quietHourSeconds = 3600; // 60 minutes
let currentVerifyTicketIdx = -1;

/* ── ROLE SWITCHING ──────────────────────────────────── */
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    // Deactivate all tabs
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Switch view
    const viewId = tab.dataset.view;
    document.querySelectorAll('.role-view').forEach(v => v.classList.remove('active'));

    const viewMap = {
      student:   'viewStudent',
      librarian: 'viewLibrarian',
      executive: 'viewExecutive',
      spatial:   'viewSpatial'
    };

    const targetView = document.getElementById(viewMap[viewId]);
    if (targetView) {
      targetView.classList.add('active');
    }

    // Animate bar chart when executive tab is shown
    if (viewId === 'executive') {
      animateBarChart();
    }
  });
});

/* ── VIEW MODE SWITCHER (WEB VS SIMULATOR) ───────────── */
function setStudentViewMode(mode) {
  const wrapper = document.getElementById('studentWrapper');
  const btnWeb = document.getElementById('btnModeWeb');
  const btnSimulator = document.getElementById('btnModeSimulator');

  if (!wrapper || !btnWeb || !btnSimulator) return;

  if (mode === 'simulator') {
    wrapper.classList.add('simulator-active');
    btnSimulator.classList.add('active');
    btnWeb.classList.remove('active');
    showToast('📱 Mode Simulator Layar HP (390px) Aktif untuk Presentasi.', 'info');
  } else {
    wrapper.classList.remove('simulator-active');
    btnWeb.classList.add('active');
    btnSimulator.classList.remove('active');
    showToast('🖥️ Mode Tampilan Web Penuh (Responsif) Aktif.', 'info');
  }
}

/* ── LIVE TICKET PREVIEW SYNCHRONIZATION ─────────────── */
function updateLiveTicketPreview() {
  const nim = document.getElementById('inputNIM')?.value.trim() || '240505300XX';
  const nama = document.getElementById('inputNama')?.value.trim() || 'Mahasiswa FT UNY';
  const barcode = document.getElementById('inputBarcode')?.value.trim() || 'FT-INF-2024-XXX';
  const judul = document.getElementById('inputJudul')?.value.trim() || 'Judul Buku yang Dilaporkan';
  const kategoriEl = document.querySelector('input[name="kategori"]:checked');
  const kategori = kategoriEl ? kategoriEl.value : 'Belum Dipilih';

  const elName = document.getElementById('liveReporterName');
  const elNIM = document.getElementById('liveReporterNIM');
  const elTitle = document.getElementById('liveBookTitle');
  const elBarcode = document.getElementById('liveBookBarcode');
  const elCat = document.getElementById('liveIssueCategory');
  const elIdPreview = document.getElementById('liveTicketIdPreview');

  if (elName) elName.textContent = nama;
  if (elNIM) elNIM.textContent = nim;
  if (elTitle) elTitle.textContent = judul;
  if (elBarcode) elBarcode.textContent = barcode;
  if (elCat) elCat.textContent = kategori;
  if (elIdPreview) {
    elIdPreview.textContent = `TKT-202610-${String(ticketCounter + 1).padStart(3, '0')}`;
  }
}

/* ── LIVE CLOCK ──────────────────────────────────────── */
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const timeStr = `${hh}:${mm} WIB`;
  document.getElementById('liveClock').textContent = timeStr;
  document.getElementById('mobileTime').textContent = `${hh}:${mm}`;
}
updateClock();
setInterval(updateClock, 30000);

/* ── FORM SUBMISSION (PEMUSTAKA) ─────────────────────── */
function submitLaporan(e) {
  e.preventDefault();

  const nim = document.getElementById('inputNIM').value.trim();
  const nama = document.getElementById('inputNama').value.trim();
  const barcode = document.getElementById('inputBarcode').value.trim() || 'FT-XXX-0000-000';
  const judul = document.getElementById('inputJudul').value.trim();
  const catatan = document.getElementById('inputCatatan').value.trim();
  const kategoriEl = document.querySelector('input[name="kategori"]:checked');

  if (!kategoriEl) {
    showToast('⚠️ Pilih jenis kerusakan / masalah terlebih dahulu.', 'warning');
    return;
  }

  const kategori = kategoriEl.value;
  ticketCounter++;

  const ticketId = `TKT-202610-${String(ticketCounter).padStart(3, '0')}`;
  const today = new Date();
  const dateStr = `${String(today.getDate()).padStart(2, '0')} Okt 2026`;

  // Create new ticket
  const newTicket = {
    id: ticketId,
    date: dateStr,
    barcode: barcode,
    title: judul,
    category: kategori,
    sla: 'green',
    slims: 'pending',
    reporter: nama,
    nim: nim,
    status: 'pending',
    catatan: catatan
  };

  ticketDatabase.push(newTicket);

  // Show success modal
  document.getElementById('generatedTicketId').textContent = ticketId;
  document.getElementById('modalBookTitle').textContent = `Judul: ${judul}`;
  document.getElementById('modalCategory').textContent = `Kategori: ${kategori}`;
  document.getElementById('modalSuccess').classList.add('active');

  // Update KPI
  updateKPIs();

  // Update badge count
  updateBadgeCount();

  // Update aside total
  document.getElementById('asideTotalTickets').textContent = ticketDatabase.length;

  // Reset form
  document.getElementById('formLaporan').reset();
  document.getElementById('previewActive').style.display = 'none';
  document.getElementById('uploadPlaceholder').style.display = '';

  // Update live preview to default
  updateLiveTicketPreview();

  // Re-render table
  renderTicketTable();

  // Toast
  showToast(`📬 Tiket ${ticketId} berhasil dibuat dan masuk antrean verifikasi.`, 'success');
}

/* ── QUICK FILL ──────────────────────────────────────── */
function quickFill(type) {
  const presets = {
    'halaman-rusak': {
      kategori: 'Halaman Robek / Rusak Fisik',
      catatan: 'Beberapa halaman robek dan tidak terbaca'
    },
    'salah-rak': {
      kategori: 'Buku Salah Letak / Tidak Sesuai OPAC',
      catatan: 'Buku ditemukan di rak yang tidak sesuai klasifikasi DDC'
    },
    'hilang': {
      kategori: 'Koleksi Hilang Fisik',
      catatan: 'Buku tidak ditemukan di rak sesuai katalog OPAC SLiMS'
    }
  };

  const preset = presets[type];
  if (!preset) return;

  // Set radio
  document.querySelectorAll('input[name="kategori"]').forEach(r => {
    if (r.value === preset.kategori) r.checked = true;
  });

  // Set catatan
  document.getElementById('inputCatatan').value = preset.catatan;

  // Sync live ticket preview
  updateLiveTicketPreview();

  showToast(`⚡ Isian cepat "${type}" diterapkan.`, 'info');
}

/* ── SIMULATE BARCODE SCAN ───────────────────────────── */
function simulateScan() {
  const barcodes = [
    'FT-INF-2024-091', 'FT-ELK-2024-033', 'FT-MSN-2023-047',
    'FT-SPL-2024-018', 'FT-INF-2024-105', 'FT-ELK-2023-062'
  ];
  const books = [
    'Pemrograman Web Modern', 'Sistem Tenaga Listrik', 'Proses Manufaktur',
    'Konstruksi Bangunan Gedung', 'Machine Learning Terapan', 'Mikrokontroler AVR'
  ];

  const idx = Math.floor(Math.random() * barcodes.length);
  document.getElementById('inputBarcode').value = barcodes[idx];
  document.getElementById('inputJudul').value = books[idx];

  // Sync live preview
  updateLiveTicketPreview();

  showToast('📷 Barcode berhasil dipindai!', 'success');
}

/* ── SIMULATE PHOTO UPLOAD ───────────────────────────── */
function simulatePhoto() {
  const placeholder = document.getElementById('uploadPlaceholder');
  const preview = document.getElementById('previewActive');

  // Create a simulated image using canvas
  const canvas = document.createElement('canvas');
  canvas.width = 300;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');

  // Draw simulated photo
  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(0, 0, 300, 200);
  ctx.fillStyle = '#0f2b5c';
  ctx.font = 'bold 14px Plus Jakarta Sans, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('📸 Foto Bukti Kerusakan', 150, 85);
  ctx.font = '11px Plus Jakarta Sans, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('Halaman robek pada buku referensi', 150, 110);
  ctx.fillText('Perpustakaan FT UNY', 150, 130);

  const dataUrl = canvas.toDataURL('image/png');
  document.getElementById('previewImg').src = dataUrl;

  placeholder.style.display = 'none';
  preview.style.display = '';

  showToast('📸 Foto bukti kerusakan berhasil diunggah.', 'success');
}

/* ── MODAL CONTROLS ──────────────────────────────────── */
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
});

/* ── TICKET TABLE RENDERING ──────────────────────────── */
function renderTicketTable() {
  const tbody = document.getElementById('ticketTableBody');
  tbody.innerHTML = '';

  const filtered = currentFilter === 'all'
    ? ticketDatabase
    : ticketDatabase.filter(t => t.status === currentFilter);

  // Sort: pending first, then by date descending
  const sorted = [...filtered].sort((a, b) => {
    if (a.status === 'pending' && b.status !== 'pending') return -1;
    if (a.status !== 'pending' && b.status === 'pending') return 1;
    return 0;
  });

  sorted.forEach((ticket, idx) => {
    const tr = document.createElement('tr');
    tr.setAttribute('data-ticket-id', ticket.id);
    tr.setAttribute('data-status', ticket.status);

    const slaClass = ticket.sla;
    const slaLabel = slaClass === 'green' ? '< 3 Hari' : slaClass === 'yellow' ? '3-5 Hari' : '> 7 Hari';
    const slimsClass = ticket.slims === 'resolved' ? 'resolved' : 'pending';
    const slimsLabel = ticket.slims === 'resolved' ? '✅ Updated' : '⏳ Pending';

    const actionBtn = ticket.status === 'resolved'
      ? `<button class="btn-action-table resolved-btn">Selesai</button>`
      : `<button class="btn-action-table" onclick="openVerifyModal('${ticket.id}')">🔍 Verifikasi</button>`;

    tr.innerHTML = `
      <td><span class="ticket-code">${ticket.id}</span></td>
      <td>${ticket.date}</td>
      <td><span class="ticket-code">${ticket.barcode}</span></td>
      <td>${ticket.title}</td>
      <td>${ticket.category}</td>
      <td><span class="badge-sla ${slaClass}">${slaLabel}</span></td>
      <td><span class="badge-slims ${slimsClass}">${slimsLabel}</span></td>
      <td>${actionBtn}</td>
    `;
    tbody.appendChild(tr);
  });
}

function filterTable(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderTicketTable();
}

/* ── VERIFY MODAL ────────────────────────────────────── */
function openVerifyModal(ticketId) {
  const ticket = ticketDatabase.find(t => t.id === ticketId);
  if (!ticket) return;

  currentVerifyTicketIdx = ticketDatabase.indexOf(ticket);

  document.getElementById('verifyTicketId').textContent = ticketId;
  document.getElementById('vName').textContent = ticket.reporter;
  document.getElementById('vNIM').textContent = ticket.nim;
  document.getElementById('vBarcode').textContent = ticket.barcode;
  document.getElementById('vCategory').textContent = ticket.category;

  // Reset checkboxes
  document.getElementById('check1').checked = false;
  document.getElementById('check2').checked = false;

  document.getElementById('modalVerify').classList.add('active');
}

function resolveTicket() {
  const check1 = document.getElementById('check1').checked;
  const check2 = document.getElementById('check2').checked;

  if (!check1 || !check2) {
    showToast('⚠️ Centang kedua checklist verifikasi sebelum menyelesaikan tiket.', 'warning');
    return;
  }

  if (currentVerifyTicketIdx >= 0) {
    const ticket = ticketDatabase[currentVerifyTicketIdx];
    ticket.status = 'resolved';
    ticket.slims = 'resolved';
    ticket.sla = 'green';

    showToast(`✅ Tiket ${ticket.id} berhasil diselesaikan. SLiMS telah diperbarui.`, 'success');

    closeModal('modalVerify');
    renderTicketTable();
    updateKPIs();
    updateBadgeCount();
  }
}

/* ── KPI UPDATE ──────────────────────────────────────── */
function updateKPIs() {
  const total = ticketDatabase.length;
  const pending = ticketDatabase.filter(t => t.status === 'pending').length;
  const warning = ticketDatabase.filter(t => t.sla === 'yellow' || t.sla === 'red').length;
  const resolved = ticketDatabase.filter(t => t.status === 'resolved').length;

  document.getElementById('kpiTotal').textContent = total;
  document.getElementById('kpiPending').textContent = pending;
  document.getElementById('kpiWarning').textContent = warning;
  document.getElementById('kpiResolved').textContent = resolved;
}

function updateBadgeCount() {
  const pending = ticketDatabase.filter(t => t.status === 'pending').length;
  const badge = document.getElementById('libBadgeCount');
  badge.textContent = pending;
  badge.style.display = pending > 0 ? '' : 'none';
}

/* ── QUIET HOUR TIMER ────────────────────────────────── */
function toggleQuietHour() {
  const btn = document.getElementById('btnQH');
  const timerEl = document.getElementById('qhTimer');
  const statusChip = document.getElementById('systemStatus');
  const statusLabel = document.getElementById('statusLabel');

  if (quietHourInterval) {
    // Stop
    clearInterval(quietHourInterval);
    quietHourInterval = null;
    quietHourSeconds = 3600;
    btn.textContent = '▶ Mulai Quiet Hour';
    btn.classList.remove('active-btn');
    timerEl.textContent = '60:00';
    timerEl.classList.remove('running');
    statusChip.classList.remove('qh-active');
    statusLabel.textContent = 'SLiMS Online';
    showToast('🔕 Quiet Hour Mode dinonaktifkan.', 'info');
  } else {
    // Start
    quietHourSeconds = 3600;
    btn.textContent = '⏹ Hentikan Quiet Hour';
    btn.classList.add('active-btn');
    timerEl.classList.add('running');
    statusChip.classList.add('qh-active');
    statusLabel.textContent = 'Quiet Hour';
    showToast('🔕 Quiet Hour Mode aktif! Sesi fokus pemutakhiran data dimulai.', 'success');

    quietHourInterval = setInterval(() => {
      quietHourSeconds--;
      if (quietHourSeconds <= 0) {
        clearInterval(quietHourInterval);
        quietHourInterval = null;
        btn.textContent = '▶ Mulai Quiet Hour';
        btn.classList.remove('active-btn');
        timerEl.textContent = '00:00';
        timerEl.classList.remove('running');
        statusChip.classList.remove('qh-active');
        statusLabel.textContent = 'SLiMS Online';
        showToast('⏰ Quiet Hour selesai! Sesi pemutakhiran data berakhir.', 'success');
        return;
      }

      const mm = String(Math.floor(quietHourSeconds / 60)).padStart(2, '0');
      const ss = String(quietHourSeconds % 60).padStart(2, '0');
      timerEl.textContent = `${mm}:${ss}`;
    }, 1000);
  }
}

/* ── EXPORT CSV ──────────────────────────────────────── */
function exportCSV() {
  const headers = ['No Tiket', 'Tanggal', 'Barcode', 'Judul Koleksi', 'Kategori', 'Status SLA', 'SLiMS Status', 'Pelapor', 'NIM'];
  const rows = ticketDatabase.map(t => [
    t.id, t.date, t.barcode, t.title, t.category,
    t.sla === 'green' ? '< 3 Hari' : t.sla === 'yellow' ? '3-5 Hari' : '> 7 Hari',
    t.slims === 'resolved' ? 'Updated' : 'Pending',
    t.reporter, t.nim
  ]);

  let csvContent = headers.join(',') + '\n';
  rows.forEach(row => {
    csvContent += row.map(cell => `"${cell}"`).join(',') + '\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'SIMPEL-KOLEKSI_Rekap_Tiket_Oktober_2026.csv';
  a.click();
  URL.revokeObjectURL(url);

  showToast('📥 Data tiket berhasil diekspor ke file CSV.', 'success');
}

/* ── DOWNLOAD BORANG LAM-INFOKOM ─────────────────────── */
function downloadBorang() {
  const headers = ['Program Studi', 'Total Judul', 'Judul Terpinjam', 'Rasio Terpakai (%)', 'Frekuensi Peminjaman Triwulan', 'Rekomendasi'];
  const data = [
    ['Pend. Teknik Informatika', 812, 764, '94.1', 487, 'Prioritas Pengadaan'],
    ['Pend. Teknik Elektro', 687, 598, '87.0', 412, 'Tambah Referensi'],
    ['Pend. Teknik Mesin', 743, 612, '82.4', 378, 'Evaluasi Relevansi'],
    ['Pend. Teknik Sipil & Perencanaan', 658, 498, '75.7', 341, 'Cukup Memadai'],
    ['Pend. Teknik Elektronika', 487, 341, '70.0', 224, 'Cukup Memadai']
  ];

  let csvContent = headers.join(',') + '\n';
  data.forEach(row => {
    csvContent += row.map(cell => `"${cell}"`).join(',') + '\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Borang_LAM-INFOKOM_Kriteria5_Perpustakaan_FT_UNY_2026.csv';
  a.click();
  URL.revokeObjectURL(url);

  showToast('📥 Borang Kriteria 5 LAM-INFOKOM berhasil diunduh.', 'success');
}

/* ── BAR CHART ANIMATION ─────────────────────────────── */
function animateBarChart() {
  const bars = document.querySelectorAll('.chart-bar');
  bars.forEach(bar => {
    const targetHeight = bar.style.height;
    bar.style.height = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.height = targetHeight;
      });
    });
  });
}

/* ── TOAST NOTIFICATIONS ─────────────────────────────── */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ── INITIALIZATION ──────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderTicketTable();
  updateKPIs();
  updateBadgeCount();
  document.getElementById('asideTotalTickets').textContent = ticketDatabase.length;
});
