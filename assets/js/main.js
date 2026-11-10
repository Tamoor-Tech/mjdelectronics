/**
 * MJDELECTRONICS - Main Global Scripts
 * Brand: MJDELECTRONICS | "Real Deals. Real Brands. Real Value."
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar Effect
  const navbar = document.querySelector('.navbar-mjd');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Scroll Reveal Animations with IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver unsupported
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 3. Back To Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. Highlight Active Navigation Link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 5. Setup Quick Search Modal handler if present
  setupGlobalSearch();

  // 6. Mobile Menu Auto-Close on click
  const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse && window.bootstrap) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse && window.innerWidth < 992) {
          bsCollapse.hide();
        }
      });
    });
  }
});

// Global Product Inquiry Modal Launcher
function openInquiryModal(productId) {
  const modalEl = document.getElementById('inquiryModal');
  if (!modalEl) {
    // If not on a page with modal, redirect to contact with param
    window.location.href = `contact.html?inquiry=${encodeURIComponent(productId)}`;
    return;
  }

  const product = typeof MJD_PRODUCTS !== 'undefined' 
    ? MJD_PRODUCTS.find(p => p.id === productId) 
    : null;

  const subjectInput = document.getElementById('modalInquirySubject');
  const previewDiv = document.getElementById('modalProductPreview');
  const messageInput = document.getElementById('modalInquiryMessage');

  if (product) {
    if (subjectInput) subjectInput.value = `Price & Availability Inquiry: ${product.name}`;
    if (previewDiv) {
      previewDiv.innerHTML = `
        <div class="d-flex align-items-center gap-3 p-2 bg-light rounded-3 mb-3 border">
          <img src="${product.image}" alt="${product.name}" style="width: 60px; height: 50px; object-fit: contain;" />
          <div>
            <div class="fw-bold small text-dark">${product.name}</div>
            <div class="text-muted" style="font-size: 0.75rem;">${product.brand} &bull; ${product.size} &bull; ${product.condition}</div>
          </div>
        </div>
      `;
    }
    if (messageInput) {
      messageInput.value = `Hello Melvin, I am interested in current pricing and pickup availability for the ${product.name}. Please let me know how to proceed.`;
    }
  }

  if (window.bootstrap && bootstrap.Modal) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

// Global Quick Search Setup
function setupGlobalSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  const searchResults = document.getElementById('globalSearchResults');

  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      searchResults.innerHTML = '<div class="text-muted text-center py-4 small">Type at least 2 characters to search televisions...</div>';
      return;
    }

    if (typeof MJD_PRODUCTS === 'undefined') return;

    const matches = MJD_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.size.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="text-center py-4">
          <i class="bi bi-search text-muted fs-3 d-block mb-2"></i>
          <p class="text-muted mb-0">No models found for "<strong>${query}</strong>".</p>
          <a href="shop.html" class="btn btn-sm btn-mjd-outline mt-3">Browse Full Catalog</a>
        </div>
      `;
      return;
    }

    searchResults.innerHTML = `
      <div class="list-group list-group-flush">
        ${matches.map(m => `
          <a href="product.html?id=${m.id}" class="list-group-item list-group-item-action d-flex align-items-center justify-content-between p-3 border-0 border-bottom">
            <div class="d-flex align-items-center gap-3">
              <span class="badge bg-dark">${m.brand}</span>
              <div>
                <div class="fw-bold text-dark">${m.name}</div>
                <small class="text-muted">${m.size} &bull; ${m.resolution}</small>
              </div>
            </div>
            <span class="badge bg-warning text-dark"><i class="bi bi-arrow-right"></i></span>
          </a>
        `).join('')}
      </div>
    `;
  });
}

