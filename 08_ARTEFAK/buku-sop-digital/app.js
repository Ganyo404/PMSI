/**
 * BUKU DIGITAL STANDAR OPERASIONAL PROSEDUR (SOP) SIMPEL-KOLEKSI FT UNY
 * Interactive Reader Engine (TOC Navigation, Search, Themes, Print)
 */

document.addEventListener('DOMContentLoaded', () => {

  const btnToggleSidebar = document.getElementById('btnToggleSidebar');
  const sidebar = document.getElementById('readerSidebar');
  const searchInput = document.getElementById('tocSearchInput');
  const tocNavItems = document.querySelectorAll('.toc-nav-item');
  const paperSheets = document.querySelectorAll('.paper-sheet');
  const contentScroll = document.getElementById('readerContentScroll');
  const btnPrintBook = document.getElementById('btnPrintBook');

  // 1. Sidebar Toggle
  if (btnToggleSidebar && sidebar) {
    btnToggleSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('is-collapsed');
    });
  }

  // 2. Navigation Smooth Jump & Active State
  tocNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const targetSheet = document.getElementById(targetId);
      if (targetSheet) {
        tocNavItems.forEach(i => i.classList.remove('is-active'));
        item.classList.add('is-active');
        
        targetSheet.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // On mobile auto collapse
        if (window.innerWidth < 850 && sidebar) {
          sidebar.classList.add('is-collapsed');
        }
      }
    });
  });

  // 3. ScrollSpy: Update active TOC item as user scrolls
  if (contentScroll) {
    contentScroll.addEventListener('scroll', () => {
      let currentSheetId = '';
      paperSheets.forEach(sheet => {
        const rect = sheet.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          currentSheetId = sheet.id;
        }
      });

      if (currentSheetId) {
        tocNavItems.forEach(item => {
          if (item.getAttribute('data-target') === currentSheetId) {
            item.classList.add('is-active');
          } else {
            item.classList.remove('is-active');
          }
        });
      }
    });
  }

  // 4. Quick Page Navigation Buttons (Next / Prev)
  document.querySelectorAll('.btn-nav-page').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 5. Live Search in Table of Contents
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      tocNavItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // 6. Theme Switching (Light, Sepia, Dark)
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

  // 7. Font Size Adjustment
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

  // 8. Print Handbook / Save to PDF
  if (btnPrintBook) {
    btnPrintBook.addEventListener('click', () => {
      window.print();
    });
  }

});
