/**
 * MJDELECTRONICS - Main Global Scripts (Mobile-First Enhanced)
 * Brand: MJDELECTRONICS | "Real Deals. Real Brands. Real Value."
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar Transition
  const navbar = document.querySelector('.navbar-mjd');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Hardware-Accelerated Scroll Reveal Animations
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
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.08
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 4. Highlight Active Navigation Link (Desktop & Mobile Drawer & Bottom Dock)
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  // Desktop Nav Links
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Mobile Drawer Links
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Mobile Bottom Dock Links
  document.querySelectorAll('.mobile-bottom-dock .dock-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 5. Setup Quick Search Modal handler
  setupGlobalSearch();

  // 6. Setup Brand Carousel
  setupBrandCarousel();

  // 7. Mobile Offcanvas Auto-Close when clicking any link
  const offcanvasEl = document.getElementById('mobileNavOffcanvas');
  if (offcanvasEl && window.bootstrap && bootstrap.Offcanvas) {
    const drawerLinks = offcanvasEl.querySelectorAll('a');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        const instance = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (instance) instance.hide();
      });
    });
  }
});

// Setup Brand Carousel with responsive scrolling & touch gestures
function setupBrandCarousel() {
  const container = document.getElementById('brandTrackContainer');
  const prevBtn = document.getElementById('brandPrevBtn');
  const nextBtn = document.getElementById('brandNextBtn');

  if (!container || !prevBtn || !nextBtn) return;

  const getScrollDistance = () => {
    const item = container.querySelector('.brand-carousel-item');
    if (!item) return 200;
    const itemWidth = item.offsetWidth;
    const gap = window.innerWidth < 576 ? 10 : 14;
    const fullItemWidth = itemWidth + gap;
    
    const width = window.innerWidth;
    if (width < 480) {
      return fullItemWidth * 2; // Move 2 items at a time on mobile
    } else if (width < 768) {
      return fullItemWidth * 3; // Move 3 items on small tablet
    } else {
      return fullItemWidth * 4; // Move 4 items on tablet/desktop
    }
  };

  const updateButtonsState = () => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 5) {
      // All items fit on wide screen
      prevBtn.classList.add('disabled');
      nextBtn.classList.add('disabled');
      prevBtn.setAttribute('aria-disabled', 'true');
      nextBtn.setAttribute('aria-disabled', 'true');
      return;
    }

    prevBtn.classList.remove('disabled');
    nextBtn.classList.remove('disabled');
    prevBtn.removeAttribute('aria-disabled');
    nextBtn.removeAttribute('aria-disabled');
  };

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 8) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: getScrollDistance(), behavior: 'smooth' });
    }
  });

  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (container.scrollLeft <= 8) {
      container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -getScrollDistance(), behavior: 'smooth' });
    }
  });

  container.addEventListener('scroll', updateButtonsState, { passive: true });
  window.addEventListener('resize', updateButtonsState, { passive: true });

  // Touch Swipe Handling on Mobile
  let startX = 0;
  let isSwiping = false;

  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    isSwiping = true;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    if (!isSwiping) return;
    isSwiping = false;
    const endX = e.changedTouches[0].pageX;
    const diff = startX - endX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> move next
        container.scrollBy({ left: getScrollDistance(), behavior: 'smooth' });
      } else {
        // Swiped right -> move prev
        container.scrollBy({ left: -getScrollDistance(), behavior: 'smooth' });
      }
    }
  }, { passive: true });

  // Initial trigger
  setTimeout(updateButtonsState, 150);
}

// Global Product Inquiry Modal Launcher
function openInquiryModal(productId) {
  const modalEl = document.getElementById('inquiryModal');
  if (!modalEl) {
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
    
    const waUrl = typeof getWhatsAppProductUrl === 'function' 
      ? getWhatsAppProductUrl(product) 
      : `https://wa.me/17708951392?text=${encodeURIComponent('Hello MJDELECTRONICS!\n\nI am interested in purchasing the following product:\n\nProduct Name: ' + product.name + '\nBrand: ' + product.brand + '\n\nPlease share further details.\n\nThank you!')}`;

    if (previewDiv) {
      previewDiv.innerHTML = `
        <div class="d-flex align-items-center gap-3 p-2 bg-light rounded-3 mb-3 border">
          <img src="${product.image}" alt="${product.name}" style="width: 60px; height: 50px; object-fit: contain;" />
          <div class="flex-grow-1">
            <div class="fw-bold small text-dark">${product.name}</div>
            <div class="text-muted" style="font-size: 0.75rem;">${product.brand} &bull; ${product.size} &bull; ${product.condition}</div>
          </div>
        </div>
        <div class="mb-3">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-card" title="Inquire on WhatsApp about ${product.name}">
            <i class="bi bi-whatsapp"></i> Inquire on WhatsApp
          </a>
        </div>
        <div class="text-center text-muted small mb-3 position-relative">
          <span class="bg-white px-2 position-relative" style="z-index: 1;">or email Melvin via form below</span>
          <hr class="position-absolute w-100 top-50 start-0 m-0" style="z-index: 0;">
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

// Fallback helper to ensure general WhatsApp inquiries always work across all pages
if (typeof window.getWhatsAppGeneralUrl !== 'function') {
  window.getWhatsAppGeneralUrl = function() {
    const generalMessage = "Hello MJDELECTRONICS! I visited your website and would like to know more about your available electronics and current deals.";
    return `https://wa.me/17708951392?text=${encodeURIComponent(generalMessage)}`;
  };
}

if (typeof window.openWhatsAppGeneralInquiry !== 'function') {
  window.openWhatsAppGeneralInquiry = function() {
    window.open(window.getWhatsAppGeneralUrl(), '_blank', 'noopener,noreferrer');
  };
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
