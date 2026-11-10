/**
 * MJDELECTRONICS - Product Data Source
 * Official Brands: Samsung, LG, Sony, Vizio, TCL, Hisense, Philips, Onn
 * Real Deals. Real Brands. Real Value.
 */

const MJDELECTRONICS_CONFIG = {
  businessName: "MJDELECTRONICS",
  tagline: "Real Deals. Real Brands. Real Value.",
  email: "melvin@mjdelectronics.net",
  phone: "+1 (770) 895-1392",
  phoneRaw: "+17708951392",
  address: "PO BOX 1805, Lithia Springs, GA 30122",
  domain: "https://mjdelectronics.net",
  marketplaces: [
    { name: "OfferUp", icon: "bi-shop", badge: "Active Listings", note: "Find local pickup listings on OfferUp" },
    { name: "Facebook Marketplace", icon: "bi-facebook", badge: "Verified Seller", note: "Browse regional listings & deals" },
    { name: "Mercari", icon: "bi-box-seam", badge: "Shop Now", note: "Verified electronics seller catalog" },
    { name: "5Miles", icon: "bi-geo-alt", badge: "Local Deals", note: "Local pickup available in Lithia Springs" },
    { name: "Nextdoor", icon: "bi-houses", badge: "Neighborhood", note: "Trusted community electronics seller" }
  ]
};

// SVG Placeholder fallback generator for 100% reliable rendering
function getTvSvgPlaceholder(brandName, size, color = "#111111") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="100%">
    <rect width="500" height="350" fill="#f8f9fa"/>
    <rect x="50" y="40" width="400" height="230" rx="8" fill="#111111" stroke="#2a2a2a" stroke-width="4"/>
    <rect x="60" y="50" width="380" height="210" rx="4" fill="#1a1d20"/>
    <polygon points="50,40 450,40 380,240 60,240" fill="url(#grad)" opacity="0.15"/>
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF6B00" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <!-- TV Stand -->
    <path d="M 230 270 L 270 270 L 285 305 L 215 305 Z" fill="#333333"/>
    <rect x="180" y="305" width="140" height="8" rx="4" fill="#444444"/>
    <!-- Brand Logo / Text inside TV screen -->
    <text x="250" y="145" font-family="Inter, sans-serif" font-weight="900" font-size="24" fill="#ffffff" text-anchor="middle" letter-spacing="3">${brandName.toUpperCase()}</text>
    <text x="250" y="175" font-family="Inter, sans-serif" font-weight="600" font-size="14" fill="#FF6B00" text-anchor="middle">${size} 4K SMART TV</text>
    <rect x="235" y="195" width="30" height="3" rx="1.5" fill="#FF6B00"/>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Master Products Catalog
const MJD_PRODUCTS = [
  {
    id: "samsung-65-crystal-uhd",
    brand: "Samsung",
    name: "Samsung 65\" Class Crystal UHD 4K Smart TV",
    category: "Smart 4K UHD TVs",
    size: "65\"",
    resolution: "4K UHD (3840 x 2160)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      display: "Crystal UHD LED",
      refreshRate: "60Hz Motion Xcelerator",
      smartPlatform: "Tizen Smart TV",
      hdr: "HDR10+ Supported",
      ports: "3 HDMI, 2 USB, Optical Audio, LAN"
    },
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558888401-3cc1de77652d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Enjoy vibrant, lifelike color with the Samsung 65\" Crystal UHD 4K Smart TV. Powered by the Crystal Processor 4K, this display upscales your favorite movies and shows to stunning ultra-high definition clarity with rich contrast and HDR support."
  },
  {
    id: "lg-55-4k-webos",
    brand: "LG",
    name: "LG 55\" Class 4K UHD Smart webOS TV",
    category: "Smart 4K UHD TVs",
    size: "55\"",
    resolution: "4K UHD (3840 x 2160)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      display: "Real 4K LED Display",
      refreshRate: "60Hz Native Refresh",
      smartPlatform: "LG webOS Smart Platform",
      hdr: "Active HDR, HDR10 Pro, HLG",
      ports: "3 HDMI 2.0, eARC, 2 USB, Ethernet"
    },
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The LG 55\" Real 4K Smart TV delivers cinematic picture quality with brilliant quad-core processing, AI Sound optimization, and the ultra-smooth webOS platform offering seamless streaming access."
  },
  {
    id: "sony-bravia-65-4k-hdr",
    brand: "Sony",
    name: "Sony Bravia 65\" Class 4K HDR Google Smart TV",
    category: "Large Format TVs",
    size: "65\"",
    resolution: "4K HDR (3840 x 2160)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      display: "Triluminos Pro 4K Display",
      refreshRate: "Motionflow XR Technology",
      smartPlatform: "Google TV Interface",
      hdr: "Dolby Vision & HDR10",
      ports: "4 HDMI, 2 USB, Bluetooth 5.0, Wi-Fi"
    },
    image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Sony Bravia 4K HDR processing delivers billions of accurate colors and ultra-deep contrast. Equipped with Google TV, you can effortlessly browse 700,000+ movies and episodes organized to match your interests."
  },
  {
    id: "vizio-50-vseries-4k",
    brand: "Vizio",
    name: "Vizio 50\" V-Series 4K UHD SmartCast TV",
    category: "Mid-Size Smart TVs",
    size: "50\"",
    resolution: "4K UHD (3840 x 2160)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      display: "Full Array LED Backlight",
      refreshRate: "V-Gaming Engine with AMD FreeSync",
      smartPlatform: "Vizio SmartCast Built-In",
      hdr: "Dolby Vision, HDR10+, HDR10",
      ports: "3 HDMI 2.1, eARC, USB, Optical"
    },
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Uncompromised value and high-performance gaming features make the Vizio 50\" V-Series a crowd favorite. Includes instant access to WatchFree+ channels and Apple AirPlay 2."
  },
  {
    id: "tcl-55-roku-4k",
    brand: "TCL",
    name: "TCL 55\" Class 4-Series 4K UHD Roku Smart TV",
    category: "Mid-Size Smart TVs",
    size: "55\"",
    resolution: "4K UHD (3840 x 2160)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      display: "Direct-lit LED 4K",
      refreshRate: "60Hz CMI Refresh Rate",
      smartPlatform: "Roku TV OS Built-in",
      hdr: "High Dynamic Range (HDR10)",
      ports: "4 HDMI, 1 USB, Headphone Jack, Optical"
    },
    image: "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The TCL 4-Series Roku TV offers stunning 4K picture quality with four times the resolution of Full HD, paired with America's favorite simple-to-use Roku streaming platform."
  },
  {
    id: "hisense-58-4k-google-tv",
    brand: "Hisense",
    name: "Hisense 58\" Class 4K UHD Smart Google TV",
    category: "Mid-Size Smart TVs",
    size: "58\"",
    resolution: "4K UHD (3840 x 2160)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      display: "4K Ultra HD Full Array",
      refreshRate: "Motion Rate 120",
      smartPlatform: "Google TV Smart OS",
      hdr: "Dolby Vision HDR & HDR10",
      ports: "3 HDMI, 2 USB, Bluetooth Audio"
    },
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Crisp detail meets smart convenience with the Hisense 58\" 4K Google TV. Experience fluid sports action, Dolby Vision dynamic color enhancement, and voice remote assistance."
  },
  {
    id: "philips-50-roku-4k",
    brand: "Philips",
    name: "Philips 50\" Class 4K Ultra HD Smart Roku TV",
    category: "Mid-Size Smart TVs",
    size: "50\"",
    resolution: "4K UHD (3840 x 2160)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      display: "4K Ultra HD LED",
      refreshRate: "120 Perfect Motion Rate",
      smartPlatform: "Built-in Roku OS",
      hdr: "HDR10 Support",
      ports: "3 HDMI, Optical Audio Out, USB"
    },
    image: "https://images.unsplash.com/photo-1558888401-3cc1de77652d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558888401-3cc1de77652d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Philips 50\" 4K UHD Smart Roku TV offers an ultra-clear display with intuitive navigation, fast dual-band wireless, and direct access to hundreds of free live television streaming channels."
  },
  {
    id: "onn-43-fhd-roku",
    brand: "Onn",
    name: "Onn. 43\" Class FHD 1080p Smart Roku TV",
    category: "Compact & Bedroom TVs",
    size: "43\"",
    resolution: "1080p Full HD",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      display: "DLED Backlight Display",
      refreshRate: "60Hz Refresh Rate",
      smartPlatform: "Roku TV Platform",
      hdr: "Standard Dynamic Range",
      ports: "3 HDMI, 1 USB, Composite In, Headphone"
    },
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An ideal smart television for bedrooms, dorms, and home offices. Delivers clear 1080p Full HD entertainment with effortless Roku streaming controls and low power consumption."
  },
  {
    id: "samsung-75-crystal-4k",
    brand: "Samsung",
    name: "Samsung 75\" Class DU7200 Crystal 4K Smart TV",
    category: "Large Format TVs",
    size: "75\"",
    resolution: "4K UHD (3840 x 2160)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      display: "Mega Contrast Crystal Display",
      refreshRate: "60Hz Motion Xcelerator",
      smartPlatform: "Samsung Tizen OS",
      hdr: "HDR / Mega Contrast",
      ports: "3 HDMI, 1 USB, Optical, Wi-Fi 5"
    },
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Transform your living room into an immersive cinema experience with this expansive 75-inch Samsung Crystal 4K TV. Features PurColor technology for naturally crisp images."
  },
  {
    id: "lg-65-nano-cell-4k",
    brand: "LG",
    name: "LG 65\" Class 4K UHD Smart NanoCell TV",
    category: "Large Format TVs",
    size: "65\"",
    resolution: "4K UHD (3840 x 2160)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      display: "NanoCell Pure Color 4K",
      refreshRate: "60Hz Native Refresh",
      smartPlatform: "webOS 23 Smart TV",
      hdr: "HDR10 Pro / HLG",
      ports: "3 HDMI (eARC), 2 USB, Optical, Wi-Fi"
    },
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Experience pure colors filtered through nanoparticle technology. Delivers enhanced color purity, deep contrast, and Magic Remote compatibility for quick voice navigation."
  },
  {
    id: "sony-bravia-55-oled",
    brand: "Sony",
    name: "Sony Bravia 55\" Class 4K HDR Google TV",
    category: "Mid-Size Smart TVs",
    size: "55\"",
    resolution: "4K HDR (3840 x 2160)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      display: "4K HDR Processor X1",
      refreshRate: "Motionflow XR 240",
      smartPlatform: "Google TV with Assistant",
      hdr: "Dolby Vision, HDR10, HLG",
      ports: "4 HDMI, 2 USB, eARC, Optical Out"
    },
    image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Sony's proprietary 4K HDR Processor X1 breathes life into every scene with rich textures and clarity. Features acoustic sound harmonization for crystal-clear dialogue."
  },
  {
    id: "tcl-65-qled-4k",
    brand: "TCL",
    name: "TCL 65\" Class Q-Series 4K QLED Smart TV",
    category: "Large Format TVs",
    size: "65\"",
    resolution: "4K QLED (3840 x 2160)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      display: "Quantum Dot QLED Color",
      refreshRate: "Motion Rate 240 / Game Accelerator",
      smartPlatform: "Google TV Smart Platform",
      hdr: "Dolby Vision, HDR10+, HDR10",
      ports: "3 HDMI, USB, Audio In/Out, Wi-Fi"
    },
    image: "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Quantum Dot technology unlocks over a billion vibrant color shades. Enjoy ultra-smooth sports and action movies with enhanced high-speed motion smoothing."
  }
];

// Helper to generate VIP Product Card HTML
function createProductCardHtml(product) {
  const fallbackSrc = getTvSvgPlaceholder(product.brand, product.size);
  return `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
      <div class="vip-product-card" data-brand="${product.brand}" data-category="${product.category}">
        <span class="product-card-badge badge-brand">${product.brand}</span>
        <span class="badge-condition">${product.condition}</span>
        
        <div class="product-image-container">
          <img src="${product.image}" 
               alt="${product.name}" 
               loading="lazy"
               onerror="this.onerror=null; this.src='${fallbackSrc}';" />
        </div>
        
        <div class="product-card-body">
          <div class="product-brand-tag">${product.brand} &bull; ${product.size}</div>
          <h3 class="product-card-title">
            <a href="product.html?id=${product.id}">${product.name}</a>
          </h3>
          
          <div class="product-specs-pills">
            <span class="spec-pill"><i class="bi bi-display me-1"></i>${product.size}</span>
            <span class="spec-pill"><i class="bi bi-badge-4k me-1"></i>${product.resolution.split(' ')[0]}</span>
            <span class="spec-pill"><i class="bi bi-check-circle me-1"></i>Verified</span>
          </div>
          
          <div class="product-card-footer">
            <div class="price-box">
              <span class="price-label">Pricing</span>
              <span class="price-inquire">${product.priceText}</span>
            </div>
            <div class="product-card-actions">
              <a href="product.html?id=${product.id}" class="btn-card-action" title="View Product Details" aria-label="View Details for ${product.name}">
                <i class="bi bi-arrow-right"></i>
              </a>
              <button class="btn-card-action" onclick="openInquiryModal('${product.id}')" title="Inquire for Price" aria-label="Inquire for Price">
                <i class="bi bi-chat-dots"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

