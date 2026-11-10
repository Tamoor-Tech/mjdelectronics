# MJDELECTRONICS – Premium VIP Mobile-First Retail Website

> **Brand Tagline:** "Real Deals. Real Brands. Real Value."  
> **Official Color Palette:** Primary Orange (`#FF6B00`), Orange Hover (`#E85D00`), Light Orange (`#FFF0E5`), Deep Black (`#111111`), Charcoal (`#292929`), Main White (`#FFFFFF`), Section Grey (`#F5F5F5`), Border Grey (`#E5E7EB`).

---

## 1. Verified Business Information

- **Business Name:** MJDELECTRONICS
- **Representative:** Melvin
- **Email:** [melvin@mjdelectronics.net](mailto:melvin@mjdelectronics.net)
- **Phone:** [+1 (770) 895-1392](tel:+17708951392)
- **Address:** PO BOX 1805, Lithia Springs, GA 30122, United States
- **Domain:** [https://mjdelectronics.net](https://mjdelectronics.net)
- **Marketplaces:** OfferUp, Facebook Marketplace, Mercari, 5Miles, Nextdoor

---

## 2. Mobile-First Architecture Highlights

1. **Native App-like Mobile Offcanvas Drawer:**
   - Smooth slide-out menu on phones and tablets with direct brand shortcuts, primary navigation, and 1-tap contact buttons.
2. **Mobile Quick-Action Floating Bottom Dock:**
   - Persistent bottom dock on mobile viewports (<992px) with Home, Shop, Direct Phone Call button (prominent orange circular button), Search modal trigger, and Contact.
   - Built-in `env(safe-area-inset-bottom)` support for edge-to-edge screens (iPhone, modern Android).
3. **Touch-Optimized Interaction Targets:**
   - Minimum 44px–48px touch targets on buttons, pills, and filter toggles.
   - Micro-interaction touch feedback (`transform: scale(0.97)` on active taps).
   - Form inputs with `font-size: 16px !important` to eliminate unwanted mobile browser zoom.
4. **Touch-Swipeable Brand Bar & Galleries:**
   - Horizontally scrollable brand ticker with hidden scrollbars for frictionless mobile swiping.
   - Interactive product gallery with swipeable/touchable thumbnail strip.
5. **Mobile-Collapsible Shop Filter Drawer:**
   - On mobile, shop filters collapse cleanly behind a single "Filter & Search Displays" toggle button, saving screen estate.
6. **Zero Horizontal Overflow:**
   - All containers, cards, tables, and lifestyle images are styled with fluid clamp sizing and overflow protection.

---

## 3. Technology Stack

- **Markup:** HTML5 (Semantic, SEO-optimized, Accessible)
- **Styles:** CSS3, Bootstrap 5.3.3, Bootstrap Icons 1.11.3
- **Fonts:** Google Fonts Inter
- **Scripting:** Vanilla JavaScript (ES6+ modular architecture, zero frameworks, no React/Next.js/Angular/Tailwind)

---

## 4. Complete File Inventory

```text
e:/mjd-electronics/
│
├── index.html                  # Homepage (Hero, Brands, Categories, Featured VIP Cards, Marketplace, CTA, Footer)
├── shop.html                   # Complete Catalog (Live Search, Brand Filters, Size Select, Dynamic Sorting)
├── product.html                # Product Details (Dynamic ?id=... loading, Gallery Switcher, Verified Specs, Inquiries)
├── about.html                  # Company Profile, Brand Values, Marketplace Overview
├── contact.html                # Direct Contact Cards, Validated Inquiry Form, 1-Click Mailto Launcher
├── faq.html                    # Accordion FAQ covering Availability, Deals, Pickup & Payments
├── privacy-policy.html         # Privacy Policy with transparent customer communication terms
├── shipping-policy.html        # Pickup & Local Delivery Terms (Lithia Springs, GA)
├── return-policy.html          # In-person pre-purchase inspection & return terms
├── terms.html                  # Terms of Service & trademark acknowledgments
│
├── assets/
│   ├── css/
│   │   ├── style.css           # Core styling, variables, VIP cards, navbar, typography, mobile dock
│   │   ├── responsive.css      # Breakpoints for mobile (<576px), tablet, laptop, and ultra-wide
│   │   └── animations.css      # Scroll reveal, floating badges, pulse effects, reduced-motion support
│   │
│   ├── js/
│   │   ├── products.js         # Master electronics data source, brand metadata, SVG fallback generator
│   │   ├── main.js             # Sticky navbar, offcanvas drawer, bottom dock, global search modal
│   │   ├── filters.js          # Client-side search, brand filtering, size filtering & sorting
│   │   └── contact.js          # Inquiry validation, status messaging, direct mailto launcher
│   │
│   └── images/
│       └── brands/             # Brand SVG badges (Samsung, LG, Sony, Vizio, TCL, Hisense, Philips, Onn)
│
└── README.md                   # Complete architectural and deployment documentation
```
