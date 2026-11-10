/**
 * MJDELECTRONICS - Contact & Inquiry Handler
 * Form Validation, Direct Email Integration Handler & Clear Status Reporting
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check if an inquiry parameter was passed in URL (e.g., contact.html?inquiry=samsung-65-crystal-uhd)
  const urlParams = new URLSearchParams(window.location.search);
  const inquiryId = urlParams.get('inquiry');
  const subjectField = document.getElementById('contactSubject');
  const messageField = document.getElementById('contactMessage');

  if (inquiryId && typeof MJD_PRODUCTS !== 'undefined') {
    const product = MJD_PRODUCTS.find(p => p.id === inquiryId);
    if (product) {
      if (subjectField) subjectField.value = `Price & Availability Inquiry: ${product.name}`;
      if (messageField) {
        messageField.value = `Hello Melvin,\n\nI am inquiring about the current availability, pricing, and pickup details for the ${product.name} (${product.size}, ${product.brand}).\n\nPlease let me know if it is currently available in Lithia Springs.`;
      }
      if (formFeedback) {
        const waProductUrl = typeof getWhatsAppProductUrl === 'function' 
          ? getWhatsAppProductUrl(product) 
          : `https://wa.me/17708951392?text=${encodeURIComponent('Hello MJDELECTRONICS!\n\nI am interested in purchasing: ' + product.name)}`;
        formFeedback.innerHTML = `
          <div class="p-3 mb-3 bg-light rounded-3 border d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3" style="border-left: 4px solid #25D366 !important;">
            <div>
              <div class="fw-bold text-dark small"><i class="bi bi-whatsapp text-success me-1"></i> Inquiring about ${product.name}?</div>
              <div class="text-muted" style="font-size: 0.8rem;">Chat immediately on WhatsApp with this television pre-filled!</div>
            </div>
            <a href="${waProductUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp-card py-2 px-3 text-nowrap" style="width: auto; min-height: 38px;">
              <i class="bi bi-whatsapp me-1"></i> WhatsApp Melvin
            </a>
          </div>
        `;
      }
    }
  }

  // Contact Form Submission Handling
  const contactForm = document.getElementById('mjdContactForm');
  const formFeedback = document.getElementById('contactFormFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const subject = document.getElementById('contactSubject')?.value.trim();
      const message = document.getElementById('contactMessage')?.value.trim();

      // Form validation
      if (!name || !email || !subject || !message) {
        showFeedback('Please fill out all required fields.', 'danger');
        return;
      }

      // Basic email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFeedback('Please enter a valid email address.', 'danger');
        return;
      }

      if (message.length < 10) {
        showFeedback('Please enter a detailed message (at least 10 characters).', 'warning');
        return;
      }

      // As per master guidelines:
      // Frontend-only environment without SMTP / backend server.
      // Transparently inform the user and provide a 1-click mailto launcher!
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
      const mailtoUrl = `mailto:melvin@mjdelectronics.net?subject=${encodedSubject}&body=${encodedBody}`;

      showFeedback(`
        <div class="p-3 bg-light-orange border border-warning rounded-3 text-dark">
          <h6 class="fw-bold text-dark mb-1"><i class="bi bi-info-circle-fill text-warning me-2"></i>Inquiry Prepared</h6>
          <p class="small text-secondary mb-3">
            Since this is a client-side static interface without a private server API key, you can send your inquiry directly to Melvin right now via your default email client:
          </p>
          <div class="d-flex flex-wrap gap-2">
            <a href="${mailtoUrl}" class="btn btn-sm btn-mjd-primary">
              <i class="bi bi-envelope-paper-fill me-1"></i>Launch Email Client
            </a>
            <a href="https://wa.me/17708951392?text=${encodeURIComponent('Hello MJDELECTRONICS!\n\nFrom: ' + name + ' (' + email + ')\n\n' + message)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp-card py-1 px-3" style="width: auto; min-height: 34px;">
              <i class="bi bi-whatsapp me-1"></i>Send on WhatsApp
            </a>
          </div>
        </div>
      `, 'info', false);

      // Reset form
      contactForm.reset();
    });
  }

  // Inquiry Modal Form (from any card)
  const modalForm = document.getElementById('mjdModalInquiryForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalInquiryName')?.value.trim();
      const email = document.getElementById('modalInquiryEmail')?.value.trim();
      const subject = document.getElementById('modalInquirySubject')?.value.trim() || 'Product Inquiry';
      const message = document.getElementById('modalInquiryMessage')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
      window.location.href = `mailto:melvin@mjdelectronics.net?subject=${encodedSubject}&body=${encodedBody}`;

      if (window.bootstrap && bootstrap.Modal) {
        const modalEl = document.getElementById('inquiryModal');
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
      }
    });
  }

  function showFeedback(htmlMessage, type = 'danger', isSimpleText = true) {
    if (!formFeedback) return;
    if (isSimpleText) {
      formFeedback.innerHTML = `<div class="alert alert-${type} py-2 px-3 small mb-3">${htmlMessage}</div>`;
    } else {
      formFeedback.innerHTML = htmlMessage;
    }
  }
});

