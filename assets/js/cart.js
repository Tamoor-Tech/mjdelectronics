/**
 * MJDELECTRONICS - E-Commerce Shopping Cart & WhatsApp Checkout System
 * Official Business WhatsApp: +1 (770) 895-1392
 * Target-Inspired American Retail Shopping Experience
 */

const MJD_CART = (function() {
  const STORAGE_KEY = 'mjd_electronics_cart_v1';
  const WHATSAPP_PHONE = '17708951392'; // +1 (770) 895-1392

  // Internal state
  let cart = [];

  // Load from localStorage
  function loadCart() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      cart = data ? JSON.parse(data) : [];
      if (!Array.isArray(cart)) cart = [];
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
      cart = [];
    }
    updateCartBadges();
  }

  // Save to localStorage
  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
    updateCartBadges();
  }

  // Get total count of items in cart
  function getTotalCount() {
    return cart.reduce((sum, item) => sum + (parseInt(item.quantity, 10) || 1), 0);
  }

  // Get subtotal
  function getSubtotal() {
    return cart.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0;
      const qty = parseInt(item.quantity, 10) || 1;
      return sum + (price * qty);
    }, 0);
  }

  // Update all badge elements across pages
  function updateCartBadges() {
    const totalCount = getTotalCount();
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(badge => {
      badge.textContent = totalCount;
      if (totalCount > 0) {
        badge.classList.remove('d-none');
        badge.style.display = 'inline-flex';
      } else {
        badge.style.display = 'none';
      }
    });
  }

  // Add Item to Cart
  function addItem(productId, quantity = 1) {
    if (typeof MJD_PRODUCTS === 'undefined') return;
    const product = MJD_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const qtyToAdd = Math.max(1, parseInt(quantity, 10) || 1);
    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += qtyToAdd;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        model: product.model || product.name,
        price: typeof product.price === 'number' ? product.price : 0,
        priceText: product.priceText || `$${(product.price || 0).toFixed(2)}`,
        image: product.image,
        category: product.category,
        quantity: qtyToAdd
      });
    }

    saveCart();
    showToastNotification(`${product.name} added to your cart!`);

    // If on cart page, re-render
    if (typeof renderCartPage === 'function') {
      renderCartPage();
    }
  }

  // Update item quantity
  function updateQuantity(productId, newQty) {
    const qty = parseInt(newQty, 10);
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
      if (qty <= 0) {
        cart.splice(index, 1);
      } else {
        cart[index].quantity = qty;
      }
      saveCart();
      if (typeof renderCartPage === 'function') {
        renderCartPage();
      }
    }
  }

  // Remove item
  function removeItem(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
      const removed = cart.splice(index, 1)[0];
      saveCart();
      showToastNotification(`Removed ${removed.name} from your cart.`);
      if (typeof renderCartPage === 'function') {
        renderCartPage();
      }
    }
  }

  // Clear cart
  function clearCart() {
    cart = [];
    saveCart();
    if (typeof renderCartPage === 'function') {
      renderCartPage();
    }
  }

  // Toast confirmation message
  function showToastNotification(message) {
    let toastContainer = document.getElementById('mjdToastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'mjdToastContainer';
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      toastContainer.style.zIndex = '9999';
      document.body.appendChild(toastContainer);
    }

    const toastId = 'toast_' + Date.now();
    const toastHtml = `
      <div id="${toastId}" class="toast align-items-center text-bg-dark border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex align-items-center">
          <div class="toast-body d-flex align-items-center gap-2">
            <i class="bi bi-check-circle-fill text-danger fs-5"></i>
            <div>
              <div class="fw-bold">${message}</div>
              <small class="text-white-50"><a href="cart.html" class="text-white text-decoration-underline">View Cart &amp; Checkout &rarr;</a></small>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;

    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    const toastEl = document.getElementById(toastId);
    if (toastEl && window.bootstrap && bootstrap.Toast) {
      const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
      toast.show();
      toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
    }
  }

  // Generate WhatsApp Order Message
  // Strictly adhering to Client Template Requirement 7
  function generateWhatsAppOrderUrl() {
    if (cart.length === 0) return null;

    const lines = [
      "Hello MJDELECTRONICS!",
      "",
      "I would like to place an order for the following products:",
      "",
      "ORDER SUMMARY"
    ];

    cart.forEach((item, idx) => {
      const unitPrice = parseFloat(item.price) || 0;
      const qty = parseInt(item.quantity, 10) || 1;
      const itemTotal = unitPrice * qty;

      lines.push("");
      lines.push(`Product ${idx + 1}:`);
      lines.push(`Name: ${item.name}`);
      lines.push(`Brand/Model: ${item.brand}${item.model ? ' ' + item.model : ''}`);
      lines.push(`Quantity: ${qty}`);
      lines.push(`Unit Price: $${unitPrice.toFixed(2)}`);
      lines.push(`Item Total: $${itemTotal.toFixed(2)}`);
    });

    const subtotal = getSubtotal();
    lines.push("");
    lines.push(`Subtotal: $${subtotal.toFixed(2)}`);
    lines.push("Shipping: To Be Confirmed by MJDELECTRONICS");
    lines.push("Tax: To Be Confirmed by MJDELECTRONICS");
    lines.push(`Estimated Order Total: $${subtotal.toFixed(2)}`);
    lines.push("");
    lines.push("Please confirm product availability, final pricing, shipping details and order processing.");
    lines.push("");
    lines.push("Thank you!");

    const fullMessage = lines.join("\n");
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(fullMessage)}`;
  }

  // Trigger Checkout
  function checkoutWhatsApp() {
    if (cart.length === 0) {
      alert('Your shopping cart is currently empty. Please add items before checking out.');
      return;
    }
    const url = generateWhatsAppOrderUrl();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', loadCart);

  // Return public API
  return {
    getItems: () => [...cart],
    getTotalCount,
    getSubtotal,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    generateWhatsAppOrderUrl,
    checkoutWhatsApp,
    updateCartBadges,
    showToastNotification
  };
})();

