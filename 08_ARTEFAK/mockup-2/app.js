/* SIMPEL-KOLEKSI FT UNY, Mockup v2
   Semua data di file ini adalah data contoh untuk keperluan prototipe. */

const TODAY = new Date(2026, 9, 15, 9, 10); // Kamis, 15 Oktober 2026

const ISSUE_LABEL = {
  robek: 'Halaman sobek / sampul lepas',
  halaman: 'Halaman hilang',
  salahrak: 'Salah rak',
  tidakada: 'Tidak ada di rak'
};

const STATUS_LABEL = {
  Repair: 'Dalam perbaikan (Repair)',
  Missing: 'Hilang (Missing)',
  Available: 'Tersedia, dikembalikan ke rak benar',
  Weeding: 'Usulan penghapusan (weeding)'
};

function d(y, m, day) { return new Date(y, m - 1, day); }

let tickets = [
  { id: 'TKT-2610-014', reported: d(2026,10,9),  barcode: 'B003318', title: 'Rangkaian Listrik Jilid 1', call: '621.319 2 HAY r', ddc: '600', issue: 'robek', lokasi: 'Meja baca dekat jendela', reporter: null, stage: 'rak' },
  { id: 'TKT-2610-015', reported: d(2026,10,12), barcode: 'B004125', title: 'Pemrograman Berorientasi Objek dengan Java', call: '005.133 RAH p', ddc: '000', issue: 'halaman', lokasi: 'Rak 000, lorong 2', reporter: 'Anonim', stage: 'rak', note: 'Hal. 121 sampai 128 hilang' },
  { id: 'TKT-2610-016', reported: d(2026,10,14), barcode: 'B002907', title: 'Mekanika Teknik: Statika Struktur', call: '620.103 POP m', ddc: '600', issue: 'salahrak', lokasi: 'Ditemukan di rak 500', reporter: '2405053xxxx', stage: 'rak' },
  { id: 'TKT-2610-017', reported: d(2026,10,15), barcode: 'B001744', title: 'Kalkulus Edisi 9', call: '515 PUR k', ddc: '500', issue: 'tidakada', lokasi: '-', reporter: null, stage: 'rak' },
  { id: 'TKT-2610-011', reported: d(2026,10,7),  barcode: 'B000981', title: 'Teknik Pembelajaran Vokasi', call: '370.113 SUD t', ddc: '370', issue: 'robek', lokasi: 'Meja baca lantai 2', reporter: null, stage: 'slims', checkedOn: d(2026,10,9) },
  { id: 'TKT-2610-013', reported: d(2026,10,13), barcode: 'B004402', title: 'Basis Data: Konsep dan Perancangan', call: '005.74 CON b', ddc: '000', issue: 'salahrak', lokasi: 'Rak 600', reporter: 'Anonim', stage: 'slims', checkedOn: d(2026,10,14) },
  { id: 'TKT-2609-031', reported: d(2026,9,21), barcode: 'B003001', title: 'Elektronika Dasar', call: '621.381 MAL e', ddc: '600', issue: 'robek', reporter: null, stage: 'done', resolvedDays: 4, slimsStatus: 'Repair' },
  { id: 'TKT-2609-033', reported: d(2026,9,23), barcode: 'B004177', title: 'Algoritma dan Struktur Data', call: '005.1 MUN a', ddc: '000', issue: 'halaman', reporter: null, stage: 'done', resolvedDays: 6, slimsStatus: 'Repair' },
  { id: 'TKT-2609-035', reported: d(2026,9,25), barcode: 'B002210', title: 'Termodinamika Teknik', call: '621.402 1 CEN t', ddc: '600', issue: 'tidakada', reporter: null, stage: 'done', resolvedDays: 9, slimsStatus: 'Missing' },
  { id: 'TKT-2610-002', reported: d(2026,10,1), barcode: 'B004130', title: 'Jaringan Komputer', call: '004.6 TAN j', ddc: '000', issue: 'salahrak', reporter: null, stage: 'done', resolvedDays: 2, slimsStatus: 'Available' },
  { id: 'TKT-2610-004', reported: d(2026,10,2), barcode: 'B003390', title: 'Mesin Listrik', call: '621.31 CHA m', ddc: '600', issue: 'robek', reporter: null, stage: 'done', resolvedDays: 5, slimsStatus: 'Repair' },
  { id: 'TKT-2610-006', reported: d(2026,10,5), barcode: 'B002655', title: 'Beton Bertulang', call: '624.183 ISW b', ddc: '600', issue: 'halaman', reporter: null, stage: 'done', resolvedDays: 3, slimsStatus: 'Repair' },
  { id: 'TKT-2610-008', reported: d(2026,10,6), barcode: 'B004290', title: 'Rekayasa Perangkat Lunak', call: '005.1 PRE r', ddc: '000', issue: 'robek', reporter: null, stage: 'done', resolvedDays: 6, slimsStatus: 'Repair' }
];

// Riwayat awal (audit trail) untuk setiap tiket contoh
tickets.forEach(t => {
  t.log = [{ time: fmtDate(t.reported) + ' 10.20', text: 'Laporan masuk lewat FORM-001' }];
  if (t.stage === 'slims') t.log.push({ time: fmtDate(t.checkedOn) + ' 08.25', text: 'Fisik dicek saat Quiet Hour' });
  if (t.stage === 'done') {
    t.log.push({ time: 'Quiet Hour', text: 'Fisik dicek di RACK-001' });
    t.log.push({ time: 'Quiet Hour', text: 'Status SLiMS diubah: ' + STATUS_LABEL[t.slimsStatus] });
  }
});

let selectedId = null;
let ddcFilter = 'all';
let seq = 18;

/* ---------- Util ---------- */
function fmtDate(dt) {
  const bln = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  return dt.getDate() + ' ' + bln[dt.getMonth()] + ' ' + dt.getFullYear();
}
function nowStamp() {
  const n = new Date();
  return fmtDate(TODAY) + ' ' + String(n.getHours()).padStart(2, '0') + '.' + String(n.getMinutes()).padStart(2, '0');
}
// Hari kerja (Senin sampai Jumat) sejak tanggal lapor sampai hari ini
function workdaysSince(from) {
  let count = 0;
  const cur = new Date(from);
  while (true) {
    cur.setDate(cur.getDate() + 1);
    if (cur > TODAY) break;
    const day = cur.getDay();
    if (day !== 0 && day !== 6) count++;
  }
  return count;
}
function slaState(t) {
  const days = workdaysSince(t.reported);
  if (t.stage === 'rak') {
    if (days > 3) return { cls: 'sla-late', text: 'Hari ke-' + days + ', lewat batas cek fisik' };
    if (days === 3) return { cls: 'sla-warn', text: 'Hari ke-3, batas cek fisik hari ini' };
    return { cls: '', text: days === 0 ? 'Masuk hari ini' : 'Hari ke-' + days + ' dari 3' };
  }
  if (t.stage === 'slims') {
    if (days > 7) return { cls: 'sla-late', text: 'Hari ke-' + days + ', lewat batas update' };
    if (days >= 6) return { cls: 'sla-warn', text: 'Hari ke-' + days + ' dari 7' };
    return { cls: '', text: 'Hari ke-' + days + ' dari 7' };
  }
  return { cls: '', text: 'Selesai dalam ' + t.resolvedDays + ' hari kerja' };
}
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { el.hidden = true; }, 2600);
}
function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

/* ---------- Navigasi ---------- */
document.querySelectorAll('.role-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.role-btn').forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('is-active');
    btn.setAttribute('aria-pressed', 'true');
    document.querySelectorAll('.view').forEach(v => v.classList.remove('is-active'));
    document.getElementById('view-' + btn.dataset.view).classList.add('is-active');
    if (btn.dataset.view === 'pimpinan') renderReport();
  });
});

/* =========================================================
   VIEW 1: SLIP (STREAMLINED)
   ========================================================= */
const form = document.getElementById('slipForm');

// Quick Demo Chips
document.querySelectorAll('.demo-chip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const inp = document.getElementById('fBookInput');
    if (inp) {
      inp.value = btn.dataset.fill;
      inp.focus();
    }
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const bookInput = document.getElementById('fBookInput');
  let barcode = document.getElementById('fBarcode') ? document.getElementById('fBarcode').value.trim() : '';
  let judul = document.getElementById('fJudul') ? document.getElementById('fJudul').value.trim() : '';

  if (bookInput && bookInput.value.trim()) {
    const raw = bookInput.value.trim();
    if (/^[bB]?\d+$/.test(raw)) {
      barcode = raw.toUpperCase().startsWith('B') ? raw.toUpperCase() : 'B' + raw;
      judul = '';
    } else {
      judul = raw;
      barcode = '';
    }
  }

  const issueEl = form.querySelector('input[name="issue"]:checked');
  const errBook = document.getElementById('errBook');
  const errIssue = document.getElementById('errIssue');

  errBook.hidden = !!(barcode || judul);
  errIssue.hidden = !!issueEl;
  if (!(barcode || judul) || !issueEl) return;

  const nim = document.getElementById('fNim').value.trim();
  const nama = document.getElementById('fNama').value.trim();
  const id = 'TKT-2610-' + String(seq++).padStart(3, '0');
  const t = {
    id,
    reported: new Date(TODAY),
    barcode: barcode || '(Barcode dicari dari judul)',
    title: judul || 'Judul diverifikasi dari barcode',
    call: '000 / 600 Teknik',
    ddc: 'all',
    issue: issueEl.value,
    lokasi: document.getElementById('fLokasi').value.trim() || '-',
    reporter: nama || nim || null,
    stage: 'rak',
    log: [{ time: nowStamp(), text: 'Laporan masuk lewat formulir mandiri' }]
  };
  tickets.unshift(t);

  document.getElementById('passId').textContent = id;
  document.getElementById('passDate').textContent = fmtDate(TODAY);
  document.getElementById('passBook').textContent = (judul || barcode) + ' : ' + ISSUE_LABEL[t.issue];
  const noBook = t.issue === 'tidakada';
  document.getElementById('passWithBook').hidden = noBook;
  document.getElementById('passNoBook').hidden = !noBook;

  form.hidden = true;
  document.getElementById('dropPass').hidden = false;
  renderBoard();
  toast('Tiket ' + id + ' berhasil dikirim!');
});

const fotoInput = document.getElementById('fFoto');
const fotoStatus = document.getElementById('fileUploadStatus');
if (fotoInput && fotoStatus) {
  fotoInput.addEventListener('change', () => {
    if (fotoInput.files && fotoInput.files.length > 0) {
      fotoStatus.textContent = '✅ ' + fotoInput.files[0].name;
    } else {
      fotoStatus.textContent = '📸 Pilih Foto';
    }
  });
}

document.getElementById('btnLaporLagi').addEventListener('click', () => {
  form.reset();
  const bookInput = document.getElementById('fBookInput');
  if (bookInput) bookInput.value = '';
  if (fotoStatus) fotoStatus.textContent = '📸 Pilih Foto';
  form.querySelector('details').open = false;
  form.hidden = false;
  document.getElementById('dropPass').hidden = true;
  if (bookInput) bookInput.focus();
});

/* =========================================================
   VIEW 2: MEJA KERJA PUSTAKAWAN (FULL-WIDTH & DRAWER)
   ========================================================= */
function cardHtml(t) {
  const s = slaState(t);
  const cls = ['tcard', t.stage === 'done' ? 'is-done-card' : s.cls, t.id === selectedId ? 'is-selected' : ''].join(' ');
  return `<div class="${cls}" data-id="${t.id}" role="button" tabindex="0">
      <div class="tc-top">
        <span class="tc-call">${esc(t.call)}</span>
        <span class="tc-id">${t.id}</span>
      </div>
      <strong class="tc-title">${esc(t.title)}</strong>
      <span class="tc-issue">${ISSUE_LABEL[t.issue]}</span>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
        <span class="tc-sla">${s.text}</span>
        <small style="font-size:11px; color:var(--navy-600); font-weight:700;">Periksa →</small>
      </div>
    </div>`;
}

function renderBoard() {
  const visible = tickets.filter(t => ddcFilter === 'all' || t.ddc === ddcFilter || t.ddc === 'all');
  const groups = { rak: [], slims: [], done: [] };
  visible.forEach(t => groups[t.stage].push(t));

  groups.rak.sort((a, b) => a.reported - b.reported);
  groups.slims.sort((a, b) => a.reported - b.reported);

  const fill = (id, list, empty) => {
    document.getElementById(id).innerHTML = list.length ? list.map(cardHtml).join('') : `<p class="col-empty">${empty}</p>`;
  };
  fill('listRak', groups.rak, 'Rak penampungan kosong. Tidak ada buku yang menunggu cek fisik.');
  fill('listSlims', groups.slims, 'Tidak ada pembaruan SLiMS yang tertunda.');
  fill('listDone', groups.done.slice(0, 8), 'Belum ada tiket selesai.');

  document.getElementById('countRak').textContent = groups.rak.length;
  document.getElementById('countSlims').textContent = groups.slims.length;
  document.getElementById('countDone').textContent = groups.done.length;

  const pending = tickets.filter(t => t.stage !== 'done').length;
  document.getElementById('navPending').textContent = pending;
  document.getElementById('tier2Count').textContent = tickets.filter(t => t.stage === 'rak' && t.issue !== 'tidakada').length;

  document.querySelectorAll('.tcard').forEach(c => {
    c.addEventListener('click', () => selectTicket(c.dataset.id));
    c.addEventListener('keydown', e => { if (e.key === 'Enter') selectTicket(c.dataset.id); });
  });
}

document.querySelectorAll('#ddcChips .chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('#ddcChips .chip').forEach(c => c.classList.remove('is-on'));
    chip.classList.add('is-on');
    ddcFilter = chip.dataset.ddc;
    renderBoard();
  });
});

const cFound = document.getElementById('cFound');
const cMatch = document.getElementById('cMatch');
const btnFisik = document.getElementById('btnFisik');
[cFound, cMatch].forEach(c => c.addEventListener('change', () => { btnFisik.disabled = !(cFound.checked && cMatch.checked); }));

function selectTicket(id) {
  selectedId = id;
  const t = tickets.find(x => x.id === id);
  if (!t) return;

  document.getElementById('dId').textContent = t.id;
  const subEl = document.getElementById('dSubtitle');
  if (subEl) subEl.textContent = 'Dilaporkan ' + fmtDate(t.reported);
  document.getElementById('dTitle').textContent = t.title;
  document.getElementById('dBarcode').textContent = t.barcode;
  document.getElementById('dCall').textContent = t.call;
  document.getElementById('dIssue').textContent = ISSUE_LABEL[t.issue] + (t.note ? ' (' + t.note + ')' : '');
  document.getElementById('dLokasi').textContent = t.lokasi || '-';
  document.getElementById('dReporter').textContent = t.reporter ? t.reporter : 'Tidak dicantumkan';

  document.getElementById('stepFisik').hidden = t.stage !== 'rak';
  document.getElementById('stepSlims').hidden = t.stage !== 'slims';
  document.getElementById('stepDone').hidden = t.stage !== 'done';
  cFound.checked = false; cMatch.checked = false; btnFisik.disabled = true;
  if (t.issue === 'tidakada') document.getElementById('dStatus').value = 'Missing';
  else if (t.issue === 'salahrak') document.getElementById('dStatus').value = 'Available';
  else document.getElementById('dStatus').value = 'Repair';

  document.getElementById('dLog').innerHTML = t.log.map(l => `<li><span class="log-time">${esc(l.time)}</span>${esc(l.text)}</li>`).join('');

  // Open Drawer
  const drawer = document.getElementById('drawerOverlay');
  if (drawer) drawer.classList.add('is-open');

  renderBoard();
}

function closeDrawer() {
  const drawer = document.getElementById('drawerOverlay');
  if (drawer) drawer.classList.remove('is-open');
  selectedId = null;
  document.querySelectorAll('.tcard').forEach(c => c.classList.remove('is-selected'));
}

const closeBtn = document.getElementById('drawerClose');
if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

const overlay = document.getElementById('drawerOverlay');
if (overlay) {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeDrawer();
  });
}

btnFisik.addEventListener('click', () => {
  const t = tickets.find(x => x.id === selectedId);
  t.stage = 'slims';
  t.checkedOn = new Date(TODAY);
  t.log.push({ time: nowStamp(), text: 'Fisik dicek di rak penampungan' });
  toast('Fisik ' + t.id + ' sudah dicek. Lanjut update SLiMS.');
  selectTicket(t.id);
});

document.getElementById('btnSlims').addEventListener('click', () => {
  const t = tickets.find(x => x.id === selectedId);
  const status = document.getElementById('dStatus').value;
  t.stage = 'done';
  t.slimsStatus = status;
  t.resolvedDays = workdaysSince(t.reported);
  t.log.push({ time: nowStamp(), text: 'Status SLiMS diubah: ' + STATUS_LABEL[status] });
  toast(t.id + ' selesai. Status SLiMS tercatat.');
  selectTicket(t.id);
});

document.getElementById('btnCopy').addEventListener('click', () => {
  const t = tickets.find(x => x.id === selectedId);
  if (navigator.clipboard) navigator.clipboard.writeText(t.barcode).catch(() => {});
  toast('Barcode ' + t.barcode + ' disalin. Tempel di pencarian eksemplar SLiMS.');
});

/* Quiet Hour */
let qhLeft = 3600;
let qhTimer = null;
const qhEl = document.getElementById('qhTimer');
const btnQH = document.getElementById('btnQH');
function drawQH() {
  qhEl.textContent = String(Math.floor(qhLeft / 60)).padStart(2, '0') + ':' + String(qhLeft % 60).padStart(2, '0');
}
btnQH.addEventListener('click', () => {
  const card = document.getElementById('qhCard');
  if (qhTimer) {
    clearInterval(qhTimer); qhTimer = null;
    card.classList.remove('is-running');
    btnQH.textContent = 'Lanjutkan sesi';
    toast('Sesi Quiet Hour dijeda');
  } else {
    card.classList.add('is-running');
    btnQH.textContent = 'Jeda sesi';
    toast('Quiet Hour dimulai. Proses kolom paling kiri lebih dulu.');
    qhTimer = setInterval(() => {
      qhLeft = Math.max(0, qhLeft - 1);
      drawQH();
      if (qhLeft === 0) { clearInterval(qhTimer); qhTimer = null; toast('Sesi Quiet Hour selesai'); }
    }, 1000);
  }
});

/* =========================================================
   VIEW 3: PIMPINAN
   ========================================================= */
// Angka ilustrasi. Saat implementasi, diisi dari ekspor sirkulasi SLiMS (TMP-001).
const PRODI = [
  { nama: 'Pendidikan Teknik Informatika', judul: 812, eks: 1930, pinjam: 764, rusak: 14 },
  { nama: 'Pendidikan Teknik Elektronika', judul: 604, eks: 1512, pinjam: 418, rusak: 7 },
  { nama: 'Pendidikan Teknik Elektro', judul: 575, eks: 1460, pinjam: 395, rusak: 6 },
  { nama: 'Pendidikan Teknik Mesin', judul: 690, eks: 1611, pinjam: 352, rusak: 9 },
  { nama: 'Pendidikan Teknik Sipil dan Perencanaan', judul: 548, eks: 1203, pinjam: 281, rusak: 5 },
  { nama: 'Pendidikan Teknik Otomotif', judul: 410, eks: 742, pinjam: 196, rusak: 4 }
];

const PROC = [
  { title: 'Pemrograman Berorientasi Objek dengan Java', meta: 'Dipinjam 61 kali, 3 laporan rusak', tag: 'Ganti eksemplar' },
  { title: 'Rangkaian Listrik Jilid 1', meta: 'Dipinjam 48 kali, 2 laporan rusak', tag: 'Ganti eksemplar' },
  { title: 'Algoritma dan Struktur Data', meta: 'Dipinjam 55 kali, 1 eksemplar tersisa', tag: 'Tambah eksemplar' },
  { title: 'Termodinamika Teknik', meta: '1 eksemplar dinyatakan hilang', tag: 'Ganti eksemplar' },
  { title: 'Beton Bertulang', meta: 'Dipinjam 33 kali, edisi lama', tag: 'Edisi baru' }
];

function renderReport() {
  const done = tickets.filter(t => t.stage === 'done');
  const onTime = done.filter(t => t.resolvedDays <= 7).length;
  const pct = done.length ? Math.round((onTime / done.length) * 100) : 0;
  const avg = done.length ? (done.reduce((s, t) => s + t.resolvedDays, 0) / done.length).toFixed(1).replace('.', ',') : '0';
  
  document.getElementById('slaPct').textContent = pct;
  document.getElementById('slaN').textContent = done.length;
  document.getElementById('slaAvg').textContent = avg;
  
  const kpiPct = document.getElementById('kpiSlaPct');
  if (kpiPct) kpiPct.textContent = pct;
  const kpiAvg = document.getElementById('kpiSlaAvg');
  if (kpiAvg) kpiAvg.textContent = avg;
  const kpiDone = document.getElementById('kpiDoneCount');
  if (kpiDone) kpiDone.textContent = done.length;

  requestAnimationFrame(() => { 
    const mf = document.getElementById('meterFill');
    if (mf) mf.style.width = pct + '%'; 
  });

  document.querySelector('#prodiTable tbody').innerHTML = PRODI.map(p => {
    const ratio = p.eks / p.judul;
    const w = Math.min(60, Math.round((ratio / 3) * 60));
    return `<tr>
      <td><strong>${p.nama}</strong></td>
      <td class="num">${p.judul.toLocaleString('id-ID')}</td>
      <td class="num">${p.eks.toLocaleString('id-ID')}</td>
      <td class="num">${p.pinjam.toLocaleString('id-ID')}</td>
      <td>
        <span class="ratio-bar" style="width:${w}px"></span>
        <strong style="font-family: var(--font-mono); font-size: 13px;">${ratio.toFixed(2).replace('.', ',')}</strong>
      </td>
      <td class="num"><strong style="color: ${p.rusak > 8 ? 'var(--sla-late)' : 'var(--text-secondary)'};">${p.rusak}</strong></td>
    </tr>`;
  }).join('');

  document.getElementById('procList').innerHTML = PROC.map(p =>
    `<li>
      <div class="proc-info">
        <strong>${p.title}</strong>
        <span>${p.meta}</span>
      </div>
      <span class="proc-stat">${p.tag}</span>
    </li>`
  ).join('');

  const counts = {};
  Object.keys(ISSUE_LABEL).forEach(k => counts[k] = 0);
  tickets.forEach(t => counts[t.issue]++);
  const max = Math.max(...Object.values(counts), 1);
  document.getElementById('issueBars').innerHTML = Object.keys(counts).map(k =>
    `<li class="issue-bar-item">
      <div class="issue-bar-label">
        <span>${ISSUE_LABEL[k]}</span>
        <strong style="font-family: var(--font-mono); color: var(--navy-900);">${counts[k]} Laporan</strong>
      </div>
      <div class="issue-bar-track">
        <div class="issue-bar-fill" style="width:${(counts[k] / max) * 100}%"></div>
      </div>
    </li>`
  ).join('');
}

function downloadCsv(name, rows) {
  const csv = rows.map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',')).join('\n');
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

document.getElementById('btnExportLog').addEventListener('click', () => {
  const rows = [['No. tiket', 'Tanggal lapor', 'Barcode', 'Judul', 'Masalah', 'Tahap', 'Hari kerja selesai', 'Status SLiMS', 'Riwayat']];
  tickets.forEach(t => rows.push([
    t.id, fmtDate(t.reported), t.barcode, t.title, ISSUE_LABEL[t.issue],
    { rak: 'Cek fisik', slims: 'Update SLiMS', done: 'Selesai' }[t.stage],
    t.resolvedDays ?? '', t.slimsStatus ? STATUS_LABEL[t.slimsStatus] : '',
    t.log.map(l => l.time + ': ' + l.text).join(' | ')
  ]));
  downloadCsv('jejak_laporan_FORM-001.csv', rows);
  toast('Jejak laporan diunduh');
});

document.getElementById('btnExportProdi').addEventListener('click', () => {
  const rows = [['Program studi', 'Judul', 'Eksemplar', 'Peminjaman semester', 'Eksemplar per judul', 'Laporan kerusakan']];
  PRODI.forEach(p => rows.push([p.nama, p.judul, p.eks, p.pinjam, (p.eks / p.judul).toFixed(2), p.rusak]));
  downloadCsv('ringkasan_prodi_TMP-001.csv', rows);
  toast('Tabel per prodi diunduh (data contoh)');
});

/* =========================================================
   VIEW 4: SIGNAGE (ilustrasi QR, bukan QR yang bisa dipindai)
   ========================================================= */
function drawQR() {
  const size = 29;
  const svg = document.getElementById('qrSvg');
  let seed = 7;
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  const inFinder = (x, y) => (x < 8 && y < 8) || (x > size - 9 && y < 8) || (x < 8 && y > size - 9);
  let out = `<rect width="${size}" height="${size}" fill="#fff"/>`;
  const finder = (ox, oy) => {
    out += `<rect x="${ox}" y="${oy}" width="7" height="7" fill="#18222F"/>`;
    out += `<rect x="${ox + 1}" y="${oy + 1}" width="5" height="5" fill="#fff"/>`;
    out += `<rect x="${ox + 2}" y="${oy + 2}" width="3" height="3" fill="#18222F"/>`;
  };
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (inFinder(x, y)) continue;
      if (rnd() > 0.52) out += `<rect x="${x}" y="${y}" width="1" height="1" fill="#18222F"/>`;
    }
  }
  finder(0, 0); finder(size - 7, 0); finder(0, size - 7);
  svg.innerHTML = out;
}

document.getElementById('btnPrint').addEventListener('click', () => window.print());

/* ---------- Start ---------- */
drawQH();
renderBoard();
renderReport();
drawQR();
