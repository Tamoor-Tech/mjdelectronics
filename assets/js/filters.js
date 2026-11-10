/**
 * MJDELECTRONICS - Shop Filtering & Catalog Logic
 * Responsive, Fast, Real Frontend Search, Filters, and Sorting
 */

document.addEventListener('DOMContentLoaded', () => {
  const productGrid = document.getElementById('shopProductGrid');
  if (!productGrid) return; // Only run on shop page

  const searchInput = document.getElementById('shopSearchInput');
  const brandFilters = document.querySelectorAll('.filter-brand-btn');
  const categoryFilters = document.querySelectorAll('.filter-category-item');
  const sizeSelect = document.getElementById('sizeFilterSelect');
  const sortSelect = document.getElementById('sortSelect');
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');
  const productCountDisplay = document.getElementById('productCountDisplay');
  const activeFilterTags = document.getElementById('activeFilterTags');

  // Filter state
  let state = {
    search: '',
    brand: 'all',
    category: 'all',
    size: 'all',
    sort: 'featured'
  };

  // 1. Read URL parameters on page load
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('brand')) {
    state.brand = urlParams.get('brand');
  }
  if (urlParams.has('category')) {
    state.category = urlParams.get('category');
  }
  if (urlParams.has('search')) {
    state.search = urlParams.get('search');
    if (searchInput) searchInput.value = state.search;
  }

  // Update UI to reflect initial state
  syncFilterControls();

  // 2. Render Products
  renderProducts();

  // 3. Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value.trim().toLowerCase();
      renderProducts();
    });
  }

  brandFilters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedBrand = btn.getAttribute('data-brand');
      state.brand = selectedBrand;
      syncFilterControls();
      renderProducts();
    });
  });

  categoryFilters.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedCat = item.getAttribute('data-category');
      state.category = selectedCat;
      syncFilterControls();
      renderProducts();
    });
  });

  if (sizeSelect) {
    sizeSelect.addEventListener('change', (e) => {
      state.size = e.target.value;
      renderProducts();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      renderProducts();
    });
  }

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      resetFilters();
    });
  }

  function syncFilterControls() {
    // Brand buttons
    brandFilters.forEach(btn => {
      if (btn.getAttribute('data-brand').toLowerCase() === state.brand.toLowerCase()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Category links
    categoryFilters.forEach(link => {
      if (link.getAttribute('data-category').toLowerCase() === state.category.toLowerCase()) {
        link.classList.add('fw-bold', 'text-primary-orange');
      } else {
        link.classList.remove('fw-bold', 'text-primary-orange');
      }
    });
  }

  function resetFilters() {
    state = {
      search: '',
      brand: 'all',
      category: 'all',
      size: 'all',
      sort: 'featured'
    };
    if (searchInput) searchInput.value = '';
    if (sizeSelect) sizeSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'featured';
    syncFilterControls();
    renderProducts();
    // Clear URL query params
    window.history.replaceState({}, '', window.location.pathname);
  }

  function renderProducts() {
    if (typeof MJD_PRODUCTS === 'undefined') return;

    let filtered = MJD_PRODUCTS.filter(product => {
      // Search match
      const matchesSearch = !state.search || 
        product.name.toLowerCase().includes(state.search) ||
        product.brand.toLowerCase().includes(state.search) ||
        product.category.toLowerCase().includes(state.search);

      // Brand match
      const matchesBrand = state.brand === 'all' || 
        product.brand.toLowerCase() === state.brand.toLowerCase();

      // Category match
      const matchesCategory = state.category === 'all' || 
        product.category.toLowerCase() === state.category.toLowerCase();

      // Size match
      let matchesSize = true;
      const sizeNum = parseInt(product.size, 10);
      if (state.size === 'under-50') matchesSize = sizeNum < 50;
      else if (state.size === '50-59') matchesSize = sizeNum >= 50 && sizeNum <= 59;
      else if (state.size === '60-69') matchesSize = sizeNum >= 60 && sizeNum <= 69;
      else if (state.size === '70-plus') matchesSize = sizeNum >= 70;

      return matchesSearch && matchesBrand && matchesCategory && matchesSize;
    });

    // Sorting
    if (state.sort === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (state.sort === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (state.sort === 'brand') {
      filtered.sort((a, b) => a.brand.localeCompare(b.brand));
    } else if (state.sort === 'size-desc') {
      filtered.sort((a, b) => parseInt(b.size) - parseInt(a.size));
    } else {
      // featured first
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    // Update count display
    if (productCountDisplay) {
      productCountDisplay.innerText = `Showing ${filtered.length} of ${MJD_PRODUCTS.length} electronics`;
    }

    // Render active filter badges
    if (activeFilterTags) {
      let tagsHtml = '';
      if (state.brand !== 'all') {
        tagsHtml += `<span class="badge bg-light text-dark border p-2 me-2">Brand: ${state.brand} <i class="bi bi-x-circle ms-1 cursor-pointer" onclick="document.querySelector('[data-brand=all]').click()"></i></span>`;
      }
      if (state.category !== 'all') {
        tagsHtml += `<span class="badge bg-light text-dark border p-2 me-2">Category: ${state.category} <i class="bi bi-x-circle ms-1 cursor-pointer" onclick="document.querySelector('[data-category=all]').click()"></i></span>`;
      }
      if (state.search) {
        tagsHtml += `<span class="badge bg-light text-dark border p-2 me-2">Search: "${state.search}" <i class="bi bi-x-circle ms-1 cursor-pointer" id="clearSearchTag"></i></span>`;
      }
      activeFilterTags.innerHTML = tagsHtml;

      const clearSearchTag = document.getElementById('clearSearchTag');
      if (clearSearchTag) {
        clearSearchTag.addEventListener('click', () => {
          state.search = '';
          if (searchInput) searchInput.value = '';
          renderProducts();
        });
      }
    }

    // Render HTML cards
    if (filtered.length === 0) {
      productGrid.innerHTML = `
        <div class="col-12 py-5 text-center">
          <div class="p-5 bg-light rounded-4 border">
            <i class="bi bi-tv text-muted" style="font-size: 3.5rem;"></i>
            <h4 class="mt-3 fw-bold text-dark">No Electronics Match Your Filters</h4>
            <p class="text-secondary max-w-md mx-auto">
              We couldn't find any televisions matching your current search criteria. Try clearing some filters or searching for another brand.
            </p>
            <button class="btn btn-mjd-primary mt-2" onclick="document.getElementById('clearFiltersBtn').click()">
              <i class="bi bi-arrow-counterclockwise me-2"></i>Reset All Filters
            </button>
          </div>
        </div>
      `;
    } else {
      productGrid.innerHTML = filtered.map(p => createProductCardHtml(p)).join('');
    }
  }
});

