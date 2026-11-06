/**
 * BUKU DIGITAL STANDAR OPERASIONAL PROSEDUR (SOP) SIMPEL-KOLEKSI FT UNY
 * Clean Academic Handbook Reader Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  const btnToggleSidebar = document.getElementById('btnToggleSidebar');
  const sidebar = document.getElementById('readerSidebar');
  const searchInput = document.getElementById('tocSearchInput');
  const tocNavItems = document.querySelectorAll('.toc-nav-item');
  const paperSheets = Array.from(document.querySelectorAll('.paper-sheet'));
  const contentScroll = document.getElementById('readerContentScroll');
  const btnPrintBook = document.getElementById('btnPrintBook');
  const btnPrevSheet = document.getElementById('btnPrevSheet');
  const btnNextSheet = document.getElementById('btnNextSheet');
  const turnerIndicator = document.getElementById('turnerIndicator');

  let currentSheetIndex = 0;

  // 1. Sidebar Toggle (Daftar Isi)
  if (btnToggleSidebar && sidebar) {
    btnToggleSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('is-collapsed');
    });
  }

  // 2. Navigation between sheets
  function goToSheet(index) {
    if (index < 0 || index >= paperSheets.length) return;
    currentSheetIndex = index;
    const targetSheet = paperSheets[currentSheetIndex];
    if (targetSheet) {
      targetSheet.scrollIntoView({ behavior: 'smooth', block: 'start' });
      updateActiveState(targetSheet.id);
    }
  }

  function updateActiveState(sheetId) {
    // Update TOC
    tocNavItems.forEach(item => {
      if (item.getAttribute('data-target') === sheetId) {
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });

    // Update Topbar Indicator & Controls
    if (turnerIndicator) {
      turnerIndicator.textContent = `Lembar ${currentSheetIndex + 1} dari ${paperSheets.length}`;
    }
    if (btnPrevSheet) btnPrevSheet.disabled = currentSheetIndex === 0;
    if (btnNextSheet) btnNextSheet.disabled = currentSheetIndex === paperSheets.length - 1;
  }

  // 3. TOC Clicks
  tocNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const idx = paperSheets.findIndex(s => s.id === targetId);
      if (idx !== -1) {
        goToSheet(idx);
        if (window.innerWidth < 850 && sidebar) {
          sidebar.classList.add('is-collapsed');
        }
      }
    });
  });

  // 4. In-Sheet Navigation Buttons (.btn-sheet-nav & .btn-nav-page)
  document.querySelectorAll('.btn-sheet-nav, .btn-nav-page').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const idx = paperSheets.findIndex(s => s.id === targetId);
      if (idx !== -1) {
        goToSheet(idx);
      }
    });
  });

  // 5. Topbar Prev / Next Buttons
  if (btnPrevSheet) {
    btnPrevSheet.addEventListener('click', () => {
      if (currentSheetIndex > 0) goToSheet(currentSheetIndex - 1);
    });
  }
  if (btnNextSheet) {
    btnNextSheet.addEventListener('click', () => {
      if (currentSheetIndex < paperSheets.length - 1) goToSheet(currentSheetIndex + 1);
    });
  }

  // 6. Keyboard Shortcuts: Left / Right Arrow Keys
  document.addEventListener('keydown', (e) => {
    if (document.activeElement && document.activeElement.tagName === 'INPUT') return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      if (currentSheetIndex < paperSheets.length - 1) {
        e.preventDefault();
        goToSheet(currentSheetIndex + 1);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      if (currentSheetIndex > 0) {
        e.preventDefault();
        goToSheet(currentSheetIndex - 1);
      }
    }
  });

  // 7. ScrollSpy: Update active sheet on user scroll
  if (contentScroll) {
    let scrollTimeout;
    contentScroll.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        let bestIndex = 0;
        let minDiff = Infinity;

        paperSheets.forEach((sheet, idx) => {
          const rect = sheet.getBoundingClientRect();
          const diff = Math.abs(rect.top - 70);
          if (rect.top <= 250 && rect.bottom >= 100) {
            if (diff < minDiff) {
              minDiff = diff;
              bestIndex = idx;
            }
          }
        });

        if (bestIndex !== currentSheetIndex) {
          currentSheetIndex = bestIndex;
          updateActiveState(paperSheets[currentSheetIndex].id);
        }
      }, 50);
    });
  }

  // 8. Search in Table of Contents
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      tocNavItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'flex' : 'none';
      });
    });
  }

  // 9. Reading Theme Switching (Terang, Sepia, Gelap)
  const themeButtons = document.querySelectorAll('[data-theme]');
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      themeButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const theme = btn.getAttribute('data-theme');
      document.body.classList.remove('mode-sepia', 'mode-dark');
      if (theme === 'sepia') document.body.classList.add('mode-sepia');
      if (theme === 'dark') document.body.classList.add('mode-dark');
    });
  });

  // 10. Font Size Zooming
  let currentZoom = 100;
  const btnFontMinus = document.getElementById('btnFontMinus');
  const btnFontPlus = document.getElementById('btnFontPlus');

  if (btnFontMinus && btnFontPlus) {
    btnFontMinus.addEventListener('click', () => {
      if (currentZoom > 85) {
        currentZoom -= 5;
        applyZoom();
      }
    });
    btnFontPlus.addEventListener('click', () => {
      if (currentZoom < 125) {
        currentZoom += 5;
        applyZoom();
      }
    });
  }

  function applyZoom() {
    paperSheets.forEach(sheet => {
      sheet.style.fontSize = `${currentZoom}%`;
    });
  }

  // 11. Print Handbook
  if (btnPrintBook) {
    btnPrintBook.addEventListener('click', () => {
      window.print();
    });
  }

  // Initialize
  updateActiveState('sheetCover');

});
