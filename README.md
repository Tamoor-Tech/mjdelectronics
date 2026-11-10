# MJDELECTRONICS – Premium Multi-Page Retail Website

> **Brand Tagline:** "Real Deals. Real Brands. Real Value."  
> **Official Color Palette:** Primary Orange (`#FF6B00`), Deep Black (`#111111`), Main White (`#FFFFFF`), Section Grey (`#F5F5F5`), Border Grey (`#E5E7EB`).

---

## 1. Verified Business Information

- **Business Name:** MJDELECTRONICS
- **Contact Representative:** Melvin
- **Email:** [melvin@mjdelectronics.net](mailto:melvin@mjdelectronics.net)
- **Phone:** [+1 (770) 895-1392](tel:+17708951392)
- **Address:** PO BOX 1805, Lithia Springs, GA 30122, United States
- **Official Domain:** [https://mjdelectronics.net](https://mjdelectronics.net)
- **Marketplace Platforms:** OfferUp, Facebook Marketplace, Mercari, 5Miles, Nextdoor

---

## 2. Technology Stack

- **Markup:** HTML5 (Semantic, SEO-optimized, Accessible)
- **Styles:** CSS3, Bootstrap 5.3.3, Bootstrap Icons 1.11.3
- **Fonts:** Inter (Google Fonts)
- **Scripting:** Vanilla JavaScript (ES6+ modular architecture, zero frameworks, no React/Next.js/Angular/Tailwind)

---

## 3. Project File Structure

```text
MJDELECTRONICS/
│
├── index.html                  # Outstanding Homepage with Hero, Brands, VIP Products, CTA
├── shop.html                   # Interactive Product Catalog with live Search, Filter & Sort
├── product.html                # Dynamic Product Details page driven by URL params (?id=...)
├── about.html                  # Company Profile, Brand Values, Marketplace Overview
├── contact.html                # Direct Contact Cards, Interactive Validated Inquiry Form
├── faq.html                    # Accordion FAQ covering availability, deals, pickup & payments
├── privacy-policy.html         # Privacy Policy with transparent customer communication terms
├── shipping-policy.html        # Pickup & Local Delivery Terms (Lithia Springs, GA)
├── return-policy.html          # In-person pre-purchase inspection & return terms
├── terms.html                  # Terms of Service & trademark acknowledgments
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Master styling, CSS variables, VIP cards, navbar, typography
│   │   ├── responsive.css      # Breakpoint-specific overrides for desktop, tablet, mobile
│   │   └── animations.css      # Scroll reveal, pulse effects, reduced-motion compliance
│   │
│   ├── js/
│   │   ├── products.js         # Single source of truth for products, brands & SVG fallbacks
│   │   ├── main.js             # Sticky navbar, scroll reveal, back-to-top, global search modal
│   │   ├── filters.js          # Catalog live search, brand filtering, size filtering, sorting
│   │   └── contact.js          # Inquiry validation, status messaging, mailto fallback launcher
│   │
│   └── images/
│       └── brands/             # Clean SVG brand badges (Samsung, LG, Sony, Vizio, TCL, etc.)
│
└── README.md                   # Complete architectural and deployment documentation
```

---

## 4. Key Functional Features

1. **VIP Product Card System:**
   - 100% consistent card heights and aspect ratios.
   - Clean container with `object-fit: contain` and automated SVG fallback generation if any remote image is unreachable.
   - Quick "Inquire for Price" trigger on every card that opens a prefilled modal.
   - Verified brand pill and condition tag on each card.

2. **Live Catalog Filtering (`shop.html`):**
   - Instant search input matching name, brand, or category in real-time.
   - Quick-select brand buttons (`Samsung`, `LG`, `Sony`, `Vizio`, `TCL`, `Hisense`, `Philips`, `Onn`).
   - Screen size selector (`<50"`, `50"-58"`, `60"-65"`, `70"+`).
   - Sorting options (Featured first, Screen size descending, Alphabetical A-Z, Z-A).
   - URL query parameter synchronization (`shop.html?brand=Samsung` or `shop.html?category=Large%20Format%20TVs`).

3. **Dynamic Product Details (`product.html`):**
   - Automatically loads product information via `?id=...`.
   - Gallery with active thumbnail switcher.
   - Full verified specification table: Display technology, refresh rate, smart streaming OS, HDR support, and ports.
   - Related products section matching same brand or category.

4. **Transparent Customer Communication:**
   - Clickable `tel:+17708951392` and `mailto:melvin@mjdelectronics.net` throughout all headers, cards, and footers.
   - Contact form validation with direct mailto fallback launcher that preserves user inputs and transparently explains client-side deployment without pretending a non-existent backend server sent emails.

