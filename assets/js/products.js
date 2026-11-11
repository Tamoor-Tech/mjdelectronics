/**
 * MJDELECTRONICS - Master Product & Category Catalog
 * Visual Inspiration: Target-Inspired Clean American Retail E-Commerce
 * Official Brand: MJDELECTRONICS | "Real Deals. Real Brands. Real Value."
 * Website: https://mjdelectronics.net
 * Contact: melvin@mjdelectronics.net | Phone/WhatsApp: +1 (770) 895-1392
 */

const MJDELECTRONICS_CONFIG = {
  businessName: "MJDELECTRONICS",
  tagline: "Real Deals. Real Brands. Real Value.",
  email: "melvin@mjdelectronics.net",
  phone: "+1 (770) 895-1392",
  phoneRaw: "17708951392",
  address: "PO BOX 1805, Lithia Springs, GA 30122, United States",
  domain: "https://mjdelectronics.net",
  marketplaces: [
    { name: "OfferUp", icon: "bi-shop", badge: "Active Listings", note: "Find local pickup listings on OfferUp" },
    { name: "Facebook Marketplace", icon: "bi-facebook", badge: "Verified Seller", note: "Browse regional listings & deals" },
    { name: "Mercari", icon: "bi-box-seam", badge: "Shop Now", note: "Verified electronics seller catalog" },
    { name: "5Miles", icon: "bi-geo-alt", badge: "Local Deals", note: "Local pickup available in Lithia Springs" },
    { name: "Nextdoor", icon: "bi-houses", badge: "Neighborhood", note: "Trusted community electronics seller" }
  ]
};

// Official Shopping Categories (10 Categories)
const MJD_CATEGORIES = [
  {
    name: "Cables, Chargers & Power Adapters",
    slug: "cables-chargers",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    icon: "bi-lightning-charge-fill",
    description: "High-capacity power banks, fast-charging wall adapters & durable cables."
  },
  {
    name: "Smartwatches",
    slug: "smartwatches",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    icon: "bi-smartwatch",
    description: "Apple Watch, Galaxy Watch & fitness wearables with health tracking."
  },
  {
    name: "Smartphones & Flagship Handsets",
    slug: "smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    icon: "bi-phone-fill",
    description: "Flagship iPhone, Samsung Galaxy & Google Pixel handsets at great prices."
  },
  {
    name: "Laptops & MacBooks",
    slug: "laptops-macbooks",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    icon: "bi-laptop-fill",
    description: "Apple MacBook Air, Pro and high-performance Windows ultrabooks."
  },
  {
    name: "Wireless Headphones & Earbuds",
    slug: "headphones-earbuds",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    icon: "bi-headphones",
    description: "AirPods Pro, over-ear noise-cancelling headphones and wireless earbuds."
  },
  {
    name: "Video Gaming Consoles & Retro Systems",
    slug: "gaming-consoles",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80",
    icon: "bi-controller",
    description: "PlayStation controllers, Nintendo Switch consoles and retro arcade systems."
  },
  {
    name: "Digital Cameras & Lenses",
    slug: "cameras-lenses",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    icon: "bi-camera-fill",
    description: "Mirrorless digital cameras, smart home security cameras & video gear."
  },
  {
    name: "Computer Accessories (Keyboards, Mice & Docks)",
    slug: "computer-accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    icon: "bi-keyboard-fill",
    description: "Logitech wireless keyboards, silent mice, AirTags & multiport hubs."
  },
  {
    name: "Tablets & iPads",
    slug: "tablets-ipads",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    icon: "bi-tablet-fill",
    description: "Apple iPads, Amazon Kindle e-readers and high-resolution tablets."
  },
  {
    name: "Home Audio & Soundbars",
    slug: "home-audio",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    icon: "bi-speaker-fill",
    description: "Smart TVs, soundbars, Echo smart speakers, Roku streamers & party audio."
  }
];

// Popular Brands Showcase (16 Authentic Brands)
const MJD_POPULAR_BRANDS = [
  { name: "Apple", slug: "Apple", logo: "assets/images/brands/apple.svg" },
  { name: "Samsung", slug: "Samsung", logo: "assets/images/brands/samsung.svg" },
  { name: "Sony", slug: "Sony", logo: "assets/images/brands/sony.svg" },
  { name: "LG", slug: "LG", logo: "assets/images/brands/lg.svg" },
  { name: "Amazon", slug: "Amazon", logo: "assets/images/brands/amazon.svg" },
  { name: "Roku", slug: "Roku", logo: "assets/images/brands/roku.svg" },
  { name: "Anker", slug: "Anker", logo: "assets/images/brands/anker.svg" },
  { name: "Logitech", slug: "Logitech", logo: "assets/images/brands/logitech.svg" },
  { name: "Onn.", slug: "Onn.", logo: "assets/images/brands/onn.svg" },
  { name: "Blink", slug: "Blink", logo: "assets/images/brands/blink.svg" },
  { name: "Bose", slug: "Bose", logo: "assets/images/brands/bose.svg" },
  { name: "JBL", slug: "JBL", logo: "assets/images/brands/jbl.svg" },
  { name: "TCL", slug: "TCL", logo: "assets/images/brands/tcl.svg" },
  { name: "Hisense", slug: "Hisense", logo: "assets/images/brands/hisense.svg" },
  { name: "Vizio", slug: "Vizio", logo: "assets/images/brands/vizio.svg" },
  { name: "Philips", slug: "Philips", logo: "assets/images/brands/philips.svg" }
];

// Fallback SVG placeholder for 100% reliable image loading
function getProductSvgFallback(name, brand) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" width="100%" height="100%">
    <rect width="500" height="400" fill="#F5F5F5"/>
    <circle cx="250" cy="180" r="90" fill="#EAEAEA" stroke="#DDDDDD" stroke-width="2"/>
    <path d="M220 160 h60 v40 h-60 z" fill="#CC0000" opacity="0.8"/>
    <circle cx="250" cy="180" r="16" fill="#FFFFFF"/>
    <text x="250" y="310" font-family="Inter, sans-serif" font-weight="800" font-size="20" fill="#333333" text-anchor="middle" letter-spacing="1">${brand ? brand.toUpperCase() : 'MJDELECTRONICS'}</text>
    <text x="250" y="340" font-family="Inter, sans-serif" font-weight="600" font-size="13" fill="#666666" text-anchor="middle">${name ? name.substring(0, 32) : 'Electronics Device'}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Master Products Catalog
const MJD_PRODUCTS = [
  // 1. Cables, Chargers & Power Adapters
  {
    id: "anker-powercore-portable-charger",
    brand: "Anker",
    name: "Anker Portable Chargers / Power Banks",
    category: "Cables, Chargers & Power Adapters",
    model: "PowerCore 24K 140W",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      capacity: "24,000mAh Ultra-High Capacity",
      output: "140W High-Speed Two-Way USB-C Charging",
      display: "Smart Digital Power Display Screen",
      compatibility: "Laptops, Tablets, Phones & Handheld Consoles"
    },
    image: "https://images.unsplash.com/photo-1609592424367-62fecbba9d73?auto=format&fit=crop&w=800&q=80",
    description: "High-capacity Anker USB-C portable power bank equipped with active temperature monitoring and ultra-fast charging capabilities for mobile devices."
  },
  {
    id: "pocket-juice-slim-pro-power-bank",
    brand: "Pocket Juice",
    name: "Pocket Juice Slim Pro Power Bank",
    category: "Cables, Chargers & Power Adapters",
    model: "Slim Pro 10,000mAh",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      capacity: "10,000mAh Lithium-Polymer",
      ports: "Dual USB-A & High-Speed USB-C In/Out",
      formFactor: "Ultra-Slim Rubberized Grip Shell",
      protection: "QuickChip Temperature & Surge Regulation"
    },
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-slim, high-speed pocket-friendly power bank designed for daily commute, travel, and reliable mobile backup power."
  },
  {
    id: "anker-wall-charger-fast-cable",
    brand: "Anker",
    name: "Anker Wall Chargers & Fast Charging Cables",
    category: "Cables, Chargers & Power Adapters",
    model: "Nano 30W GaN + Bio-Braided Cable",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      wattage: "30W PowerIQ 3.0 GaN Fast Charging",
      cable: "6ft Bio-Based Braided USB-C to USB-C / Lightning",
      size: "70% Smaller than standard wall plugs",
      safety: "ActiveShield 2.0 Dynamic Temp Sensor"
    },
    image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80",
    description: "Compact Anker GaN fast wall charger paired with durable braided cables engineered for ultra-fast, cool device charging."
  },

  // 2. Smartwatches
  {
    id: "apple-watch-series-9",
    brand: "Apple",
    name: "Apple Watch Series 9 GPS Aluminum Case",
    category: "Smartwatches",
    model: "Series 9 (45mm)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      display: "Always-On Retina OLED up to 2000 nits",
      chip: "S9 SiP with 4-Core Neural Engine",
      gestures: "Double Tap Gesture Control",
      health: "ECG, Blood Oxygen, Sleep Tracking & Crash Detection"
    },
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    description: "Powerful everyday smartwatch with breakthrough health metrics, double-tap gesture control, and brighter Always-On display."
  },
  {
    id: "samsung-galaxy-watch-6",
    brand: "Samsung",
    name: "Samsung Galaxy Watch 6 Classic",
    category: "Smartwatches",
    model: "Classic 47mm Bluetooth",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      bezel: "Physical Rotating Stainless Steel Bezel",
      display: "Super AMOLED Sapphire Crystal Glass",
      health: "Advanced Sleep Coaching, BIA Sensor & ECG",
      battery: "Up to 40 Hours Fast Charge"
    },
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Timeless stainless steel smartwatch with rotating bezel, personalized health insights, and comprehensive fitness tracking."
  },

  // 3. Smartphones & Flagship Handsets
  {
    id: "apple-iphone-15-pro-max",
    brand: "Apple",
    name: "Apple iPhone 15 Pro Max 256GB Handset",
    category: "Smartphones & Flagship Handsets",
    model: "iPhone 15 Pro Max",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      processor: "A17 Pro Chip with 6-core GPU",
      display: "6.7\" Super Retina XDR ProMotion 120Hz",
      camera: "48MP Main with 5x Telephoto Optical Zoom",
      body: "Aerospace-Grade Titanium with USB-C Connector"
    },
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    description: "Flagship Apple titanium smartphone featuring the breakthrough A17 Pro chip, versatile pro camera system, and USB-C speed."
  },
  {
    id: "samsung-galaxy-s24-ultra",
    brand: "Samsung",
    name: "Samsung Galaxy S24 Ultra 5G AI Flagship",
    category: "Smartphones & Flagship Handsets",
    model: "Galaxy S24 Ultra",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      processor: "Snapdragon 8 Gen 3 for Galaxy",
      display: "6.8\" QHD+ Dynamic AMOLED 2X 2600 nits",
      stylus: "Built-in S Pen Stylus",
      camera: "200MP Quad Telephoto with Galaxy AI Search"
    },
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    description: "Industry-defining Samsung Android flagship with built-in S Pen, Titanium frame, Galaxy AI live translate and pro camera zoom."
  },

  // 4. Laptops & MacBooks
  {
    id: "apple-macbook-air-m2",
    brand: "Apple",
    name: "Apple MacBook Air 13.6\" Liquid Retina M2",
    category: "Laptops & MacBooks",
    model: "MacBook Air M2",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      chip: "Apple M2 8-Core CPU & 8-Core GPU",
      screen: "13.6\" Liquid Retina Display with True Tone",
      battery: "Up to 18 Hours All-Day Battery Life",
      ports: "MagSafe 3, 2x Thunderbolt / USB 4, Headphone Jack"
    },
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    description: "Incredibly thin and fast MacBook Air powered by the M2 chip, offering silent fanless design and stunning battery longevity."
  },

  // 5. Wireless Headphones & Earbuds
  {
    id: "apple-airpods-pro-3",
    brand: "Apple",
    name: "Apple AirPods Pro 3 Wireless Earbuds",
    category: "Wireless Headphones & Earbuds",
    model: "AirPods Pro (2nd/3rd Gen Series)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      audio: "Pro-level Active Noise Cancellation & Transparency",
      spatial: "Personalized Spatial Audio with Dynamic Head Tracking",
      charging: "MagSafe Case (USB-C) with Speaker & Lanyard Loop",
      battery: "Up to 30 Hours Total Listening Time"
    },
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80",
    description: "Premium Apple wireless earbuds offering active noise cancellation, adaptive audio, spatial immersion, and USB-C convenience."
  },
  {
    id: "apple-airpods",
    brand: "Apple",
    name: "Apple AirPods with USB-C Options",
    category: "Wireless Headphones & Earbuds",
    model: "AirPods (3rd Gen)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      fit: "Contoured Ergonomic Fit with Force Sensor Control",
      spatial: "Spatial Audio with Dynamic Head Tracking",
      durability: "IPX4 Sweat and Water Resistant",
      case: "Lightning / USB-C Compatible Charging Case"
    },
    image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=800&q=80",
    description: "Classic Apple AirPods engineered with spatial audio, extended talk time, and intuitive tap and force controls."
  },
  {
    id: "onn-wireless-noise-cancelling-earbuds",
    brand: "Onn.",
    name: "Onn. Wired & Wireless Earbuds / Headphones",
    category: "Wireless Headphones & Earbuds",
    model: "True Wireless ANC Earbuds",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      connectivity: "Bluetooth 5.3 Quick Auto-Pairing",
      playback: "Up to 28 Hours Total Playtime with Case",
      microphones: "Dual Environmental Noise Cancelling Mics",
      charging: "Fast USB-C Charging Pocket Case"
    },
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    description: "Budget-friendly true wireless earbuds delivering rich dynamic audio, comfortable in-ear ergonomics, and all-day battery life."
  },
  {
    id: "sony-wh1000xm5-headphones",
    brand: "Sony",
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "Wireless Headphones & Earbuds",
    model: "WH-1000XM5 Noise Canceling",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      cancellation: "Auto NC Optimizer with 8 Microphones",
      driver: "30mm Precision Engineered Carbon Fiber Driver",
      battery: "30-Hour Battery Life with 3-Min Fast Charge",
      calls: "Crystal Clear Hands-Free Calling with AI Beamforming"
    },
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Industry-leading over-ear noise-cancelling headphones offering exceptional high-resolution acoustic fidelity and supreme comfort."
  },

  // 6. Video Gaming Consoles & Retro Systems
  {
    id: "sony-dualsense-wireless-controller",
    brand: "Sony",
    name: "Sony PlayStation DualSense Wireless Controller",
    category: "Video Gaming Consoles & Retro Systems",
    model: "DualSense PS5 Controller",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      feedback: "Immersive Haptic Feedback & Dynamic Triggers",
      audio: "Built-in Microphone and 3.5mm Headset Jack",
      connector: "USB Type-C Fast Charging Interface",
      motion: "Integrated Accelerometer & Gyroscope Motion Control"
    },
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    description: "Experience gaming feedback with responsive haptic triggers, built-in mic, and ergonomic PlayStation design."
  },

  // 7. Digital Cameras & Lenses
  {
    id: "blink-outdoor-security-cameras",
    brand: "Blink",
    name: "Blink Outdoor / Indoor Security Cameras",
    category: "Digital Cameras & Lenses",
    model: "Blink Outdoor 3rd Gen Wireless",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      video: "1080p HD Video Day and Infrared Night View",
      battery: "Up to 2-Year Battery Life on Included AA Lithium",
      weather: "Weather-Resistant Build for Outdoor Rain & Sun",
      smart: "Custom Motion Detection & Two-Way Audio Talk"
    },
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    description: "Wireless battery-powered smart home security camera system that helps monitor your home day or night in 1080p HD."
  },
  {
    id: "merkury-smart-indoor-camera",
    brand: "Merkury",
    name: "Merkury Smart Indoor Security Cameras",
    category: "Digital Cameras & Lenses",
    model: "Smart Wi-Fi 1080p Indoor Cam",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      resolution: "1080p Full HD Resolution with Night Vision",
      connectivity: "2.4GHz Wi-Fi with Smartphone App Streaming",
      audio: "Two-Way Audio Talk via Integrated Speaker/Mic",
      storage: "MicroSD Card Slot & Optional Cloud Recording"
    },
    image: "https://images.unsplash.com/photo-1589739900266-43b2843f4c12?auto=format&fit=crop&w=800&q=80",
    description: "Easy plug-and-play indoor smart camera with night vision, motion sensor alerts, and crystal-clear smartphone monitoring."
  },

  // 8. Computer Accessories (Keyboards, Mice & Docks)
  {
    id: "apple-airtag-2nd-gen",
    brand: "Apple",
    name: "Apple AirTag (2nd Generation)",
    category: "Computer Accessories (Keyboards, Mice & Docks)",
    model: "AirTag Bluetooth Tracker",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      network: "Apple Find My Network with Hundreds of Millions of Devices",
      precision: "Precision Finding with Ultra Wideband Technology",
      battery: "Standard Replaceable CR2032 Battery (1+ Year Life)",
      durability: "IP67 Water and Dust Resistant Rating"
    },
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    description: "Keep track of keys, wallet, luggage, and backpacks effortlessly in the Apple Find My app with precision finding."
  },
  {
    id: "logitech-silent-wireless-mouse",
    brand: "Logitech",
    name: "Logitech Silent Wireless Mouse & Compact Mouse",
    category: "Computer Accessories (Keyboards, Mice & Docks)",
    model: "Logitech M330 / M220 Silent",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      acoustics: "SilentTouch 90% Noise Reduction Click",
      wireless: "2.4GHz USB Nano Receiver with 33ft Range",
      battery: "Up to 24-Month Battery Life on Single AA",
      ergonomics: "Contoured Rubber Comfort Grip Design"
    },
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
    description: "Whisper-quiet optical wireless mouse with 90% sound reduction, ergonomic grip, and ultra-long battery life."
  },
  {
    id: "logitech-wireless-keyboard-mouse-combos",
    brand: "Logitech",
    name: "Logitech Wireless Keyboard & Mouse Combos",
    category: "Computer Accessories (Keyboards, Mice & Docks)",
    model: "Logitech MK270 / MK540 Advanced",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      keyboard: "Full-Size Keyboard with 8 Shortcut Hotkeys & NumPad",
      connectivity: "Single Plug-and-Forget USB Wireless Dongle",
      design: "Spill-Resistant Durable Key Layout",
      power: "36-Month Keyboard & 18-Month Mouse Battery Life"
    },
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    description: "Reliable wireless desktop keyboard and mouse combo offering instant multimedia hotkeys and seamless plug-and-play connectivity."
  },

  // 9. Tablets & iPads
  {
    id: "apple-ipad-10th-gen",
    brand: "Apple",
    name: "Apple iPad (Liquid Retina Display Models)",
    category: "Tablets & iPads",
    model: "iPad 10th Generation (10.9\")",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      screen: "10.9\" Liquid Retina Display with True Tone",
      processor: "A14 Bionic Chip with 4-Core Graphics",
      camera: "Landscape 12MP Ultra Wide with Center Stage",
      connectivity: "USB-C Connector & Wi-Fi 6 Support"
    },
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    description: "Versatile Apple iPad for creativity, streaming, remote work, and studying with all-screen Liquid Retina color."
  },
  {
    id: "amazon-kindle-paperwhite",
    brand: "Amazon",
    name: "Amazon Kindle / Kindle Paperwhite",
    category: "Tablets & iPads",
    model: "Kindle Paperwhite (11th Gen)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      display: "6.8\" Glare-Free 300 ppi E-Ink Paperwhite Screen",
      light: "Adjustable Warm Light from White to Amber",
      battery: "Up to 10 Weeks Battery on Single USB-C Charge",
      waterproof: "IPX8 Waterproof Protection for Pool & Bath"
    },
    image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=800&q=80",
    description: "Purpose-built digital e-reader with 300 ppi glare-free display that reads like real paper even in direct sunlight."
  },

  // 10. Home Audio & Soundbars
  {
    id: "amazon-echo-dot",
    brand: "Amazon",
    name: "Amazon Echo Dot Smart Speaker with Alexa",
    category: "Home Audio & Soundbars",
    model: "Echo Dot (5th Generation)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      sound: "Vibrant Audio with Deeper Bass & Clearer Vocals",
      voice: "Hands-Free Alexa Voice Assistant Integration",
      sensors: "Built-in Motion & Indoor Temperature Sensors",
      smartHome: "Controls Lights, Locks, Thermostats & Timers"
    },
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80",
    description: "Compact smart speaker with improved acoustic drivers for richer sound, Alexa voice controls, and smart home automation."
  },
  {
    id: "amazon-fire-tv-stick-4k-plus",
    brand: "Amazon",
    name: "Amazon Fire TV Stick 4K Plus",
    category: "Home Audio & Soundbars",
    model: "Fire TV Stick 4K Plus (Wi-Fi 6)",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      video: "4K Ultra HD Streaming with Dolby Vision & HDR10+",
      wireless: "Wi-Fi 6 Support for Smooth 4K Streaming",
      remote: "Alexa Voice Remote with TV Power & Volume Controls",
      audio: "Dolby Atmos Immersive Audio Pass-Through"
    },
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    description: "Elevate entertainment with 4K streaming, AI-powered content search, Dolby Vision support, and Alexa voice navigation."
  },
  {
    id: "roku-streaming-stick-hd-4k",
    brand: "Roku",
    name: "Roku Streaming Stick HD / 4K",
    category: "Home Audio & Soundbars",
    model: "Streaming Stick 4K",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      picture: "Brilliant 4K, Dolby Vision & HDR10+ Picture",
      receiver: "Long-Range Wi-Fi Receiver up to 2x Faster",
      remote: "Voice Remote with TV Controls & Headphone Listening",
      channels: "Access to Thousands of Free and Premium Channels"
    },
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80",
    description: "Portable 4K streaming stick that plugs directly behind your TV for clutter-free access to all popular streaming platforms."
  },
  {
    id: "roku-streaming-stick-4k-ultra",
    brand: "Roku",
    name: "Roku Streaming Stick 4K / Roku Ultra",
    category: "Home Audio & Soundbars",
    model: "Roku Ultra 4K / HDR / Ethernet",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      performance: "Lightning-Fast Quad-Core Processor Interface",
      ports: "Ethernet LAN Port, USB Media Port, HDMI 2.0b",
      remote: "Rechargeable Hands-Free Voice Remote Pro",
      audio: "Dolby Atmos & Bluetooth Private Listening"
    },
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    description: "Top-of-the-line streaming player with hardwired ethernet connectivity, lost remote finder, and lightning-fast channel launch."
  },
  {
    id: "onn-bluetooth-soundbars-speakers",
    brand: "Onn.",
    name: "Onn. Bluetooth Soundbars & Speakers",
    category: "Home Audio & Soundbars",
    model: "2.0-Channel Bluetooth Soundbar",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      audio: "Crystal Clear Stereo Sound with Enhanced Bass",
      inputs: "Bluetooth, Optical Digital Audio, AUX & USB",
      mounting: "Wall-Mountable or Tabletop Low-Profile Design",
      control: "Includes Remote Control & Optical Audio Cable"
    },
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    description: "Slim TV soundbar engineered to dramatically upgrade dialogue clarity and movie sound effects with Bluetooth streaming."
  },
  {
    id: "onn-smart-tvs-roku-google",
    brand: "Onn.",
    name: "Onn. Smart TVs – Roku & Google TV (HD / 4K UHD)",
    category: "Home Audio & Soundbars",
    model: "Onn. 50\" Class 4K UHD Roku TV",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: true,
    specs: {
      screen: "50\" 4K UHD (3840 x 2160) LED Display Panel",
      platform: "Built-In Roku TV Operating System",
      refresh: "60Hz Native Refresh Rate with Fast Motion",
      connectivity: "3x HDMI (including eARC), USB, Optical Audio"
    },
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
    description: "Affordable big-screen 4K entertainment powered by the simple Roku TV smart platform with thousands of free streaming movies."
  },

  // 11. TikTok Trending Electronics Products ("Trending Tech & TikTok Favorites")
  {
    id: "tiktok-selfie-stick-bluetooth",
    brand: "Trending Tech",
    name: "Selfie Sticks – Bluetooth Extendable with Remote",
    category: "Computer Accessories (Keyboards, Mice & Docks)",
    model: "Wireless 3-in-1 Selfie Stick Tripod",
    condition: "Brand New / Sealed",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    trending: true,
    specs: {
      reach: "38\" Telescopic Stainless Steel Pole",
      remote: "Detachable Bluetooth Wireless Shutter Remote",
      rotation: "360-Degree Phone Holder for Vertical & Horizontal",
      weight: "Ultra-Lightweight Foldable Pocket Size"
    },
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    description: "TikTok viral extendable selfie stick that converts into a stable tabletop tripod with wireless Bluetooth remote control."
  },
  {
    id: "tiktok-mobile-phone-charms-straps",
    brand: "Trending Tech",
    name: "Mobile Phone Charms & Straps",
    category: "Smartphones & Flagship Handsets",
    model: "Handmade Beaded Anti-Drop Wristlet",
    condition: "Brand New / Sealed",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    trending: true,
    specs: {
      style: "Aesthetic Y2K Beaded Acrylic & Crystal Lanyard",
      strength: "Reinforced Nylon Tether Cord (Resists Tearing)",
      universal: "Works with all smartphone cases via lanyard hole",
      length: "Comfortable Wrist Drop Loop"
    },
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80",
    description: "Trending colorful wristlet charms that secure your smartphone against drops while adding personality to your device."
  },
  {
    id: "tiktok-phone-tablet-tripods",
    brand: "Trending Tech",
    name: "Mobile Phone & Tablet Tripods and Monopods",
    category: "Computer Accessories (Keyboards, Mice & Docks)",
    model: "Flexible Octopus Grip Tripod",
    condition: "Brand New / Sealed",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    trending: true,
    specs: {
      legs: "High-Density Rubber Bendable Wraparound Legs",
      head: "360-Degree Metal Swivel Ball Head",
      mount: "2-in-1 Adjustable Clamp for Phones & Mini Tablets",
      stability: "Anti-Slip Foot Grips for Uneven Surfaces"
    },
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    description: "Bendable tripod legs wrap around poles, railings, or stand firmly on desktops for filming TikTok videos and vlogs."
  },
  {
    id: "tiktok-ebook-reader-cases",
    brand: "Trending Tech",
    name: "E-Book Reader Cases & Protective Sleeves",
    category: "Tablets & iPads",
    model: "Slim Origami Stand Protective Folio",
    condition: "Brand New / Sealed",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    trending: true,
    specs: {
      material: "Premium Waterproof PU Leather with Microfiber Lining",
      feature: "Auto Wake / Sleep Magnetic Closure Support",
      stand: "Folding Multi-Angle Hands-Free Reading Stand",
      protection: "Reinforced Shock-Absorbing Corner Bumpers"
    },
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight, beautiful folding cases tailored for Kindle and popular e-readers, offering auto-sleep and portrait stand mode."
  },
  {
    id: "tiktok-screen-protectors",
    brand: "Trending Tech",
    name: "Screen Protectors – 9H Tempered Glass",
    category: "Smartphones & Flagship Handsets",
    model: "Edge-to-Edge HD Clear Multi-Pack",
    condition: "Brand New / Sealed",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    trending: true,
    specs: {
      hardness: "9H Scratch-Resistant Tempered Japanese Glass",
      coating: "Oleophobic Anti-Fingerprint & Oil Repellent",
      clarity: "99.99% HD Transparency with 3D Touch Sensitivity",
      alignment: "Includes Auto-Align Installation Frame"
    },
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-tough 9H tempered glass screen protection engineered to defend your smartphone display from daily drops and keys."
  },
  {
    id: "tiktok-in-ear-headphones",
    brand: "Trending Tech",
    name: "In-Ear Headphones with In-Line Mic",
    category: "Wireless Headphones & Earbuds",
    model: "Noise-Isolating In-Ear Earphones",
    condition: "Brand New / Sealed",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    trending: true,
    specs: {
      plug: "Available in USB-C / 3.5mm Gold-Plated Jack",
      sound: "Dynamic Bass Boost Drivers with Clear Vocals",
      controls: "In-line Remote for Volume, Calls & Track Skip",
      cable: "Tangle-Free TPE Reinforced Flexible Cord"
    },
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    description: "Reliable, comfortable in-ear headphones delivering crisp acoustics, clear call voice pickup, and zero-latency audio."
  },
  {
    id: "tiktok-power-banks-magnetic",
    brand: "Trending Tech",
    name: "Power Banks – Magnetic Wireless Fast Charge",
    category: "Cables, Chargers & Power Adapters",
    model: "Mag-Snap 5000mAh Slim Battery",
    condition: "Brand New / Sealed",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    trending: true,
    specs: {
      magnetic: "Strong Magnetic Snap-On Wireless Charging",
      output: "15W Wireless + 20W PD USB-C Bi-Directional Port",
      thickness: "Only 0.45\" Slim Pocket-Sized Profile",
      led: "Multi-Segment Battery Level Indicator"
    },
    image: "https://images.unsplash.com/photo-1509741102003-ca64bfe5f069?auto=format&fit=crop&w=800&q=80",
    description: "Viral magnetic snap-on wireless power bank that latches seamlessly to the back of your phone for cord-free battery boost."
  },
  {
    id: "tiktok-mobile-phone-stands",
    brand: "Trending Tech",
    name: "Mobile Phone Stands – Adjustable Aluminum",
    category: "Computer Accessories (Keyboards, Mice & Docks)",
    model: "Dual-Axis Foldable Desktop Stand",
    condition: "Brand New / Sealed",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    trending: true,
    specs: {
      construction: "CNC Machined Matte Aerospace Aluminum",
      hinges: "Dual 270-Degree Rotating Sturdy Tension Hinges",
      cutout: "Reserved Charging Cable Pass-Through Port",
      padding: "Anti-Scratch Silicone Cushions on Hooks & Base"
    },
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80",
    description: "Solid aluminum folding phone and tablet stand ideal for FaceTime calls, watching TikToks, and desktop productivity."
  },
  {
    id: "tiktok-mobile-phone-cases",
    brand: "Trending Tech",
    name: "Mobile Phone Cases – Matte Shockproof",
    category: "Smartphones & Flagship Handsets",
    model: "Air-Cushion Armor Case with Magnetic Ring",
    condition: "Brand New / Sealed",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    trending: true,
    specs: {
      protection: "Military Grade Drop-Tested Air-Bag Corners",
      back: "Translucent Matte Anti-Yellowing Polycarbonate",
      ring: "Embedded N52 Strong Magnetic Attraction Ring",
      bezels: "1.2mm Raised Screen Edge & 0.8mm Camera Lip"
    },
    image: "https://images.unsplash.com/photo-1541877944-ac82a091518a?auto=format&fit=crop&w=800&q=80",
    description: "Matte shockproof protective case combining sleek translucent styling with full magnetic wireless charger compatibility."
  },
  {
    id: "tiktok-lighting-kits",
    brand: "Trending Tech",
    name: "Lighting Kits – 10-Inch RGB LED Ring Light",
    category: "Digital Cameras & Lenses",
    model: "Studio Creator Ring Light Kit",
    condition: "Brand New / Sealed",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    trending: true,
    specs: {
      modes: "3 Normal Light (Warm/Natural/White) + 12 RGB Rainbow Modes",
      stand: "Extendable Metal Tripod Stand from 16\" to 52\"",
      power: "USB Powered (Plugs into PC, Wall Adapter or Power Bank)",
      remote: "Wireless Remote Controller for Color, Brightness & Modes"
    },
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    description: "Complete TikTok and content creator lighting kit with RGB color-changing ring light, phone holder, and extendable tripod."
  },

  // 12. Additional TV & Home Audio Models
  {
    id: "samsung-65-crystal-uhd",
    brand: "Samsung",
    name: "Samsung 65\" Class Crystal UHD 4K Smart TV",
    category: "Home Audio & Soundbars",
    model: "Crystal UHD 4K (65\")",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      display: "Crystal UHD LED (3840 x 2160)",
      refresh: "60Hz Motion Xcelerator",
      smart: "Tizen Smart TV Platform with Voice Support",
      ports: "3 HDMI, 2 USB, Optical Audio, LAN"
    },
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
    description: "Enjoy vibrant, lifelike color with the Samsung 65\" Crystal UHD 4K Smart TV, upscaled to ultra-high definition clarity."
  },
  {
    id: "lg-55-4k-webos",
    brand: "LG",
    name: "LG 55\" Class 4K UHD Smart webOS TV",
    category: "Home Audio & Soundbars",
    model: "webOS Real 4K (55\")",
    condition: "Quality Inspected",
    priceText: "Contact for Price",
    inStock: true,
    featured: false,
    specs: {
      display: "Real 4K LED Display Panel",
      processor: "Quad-Core Processor 4K with AI Sound",
      smart: "LG webOS Smart Streaming Hub",
      hdr: "Active HDR, HDR10 Pro, HLG"
    },
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80",
    description: "Cinematic picture clarity featuring quad-core processing, AI Sound optimization, and the smooth webOS platform."
  }
];

// WhatsApp Business Official Contact Config
const MJD_WHATSAPP_NUMBER = "17708951392";

// Generate Dynamic Pre-filled WhatsApp Product Inquiry URL
function getWhatsAppProductUrl(product, customUrl) {
  if (!product) return getWhatsAppGeneralUrl();

  // Determine Product Page URL
  let productUrl = customUrl;
  if (!productUrl) {
    if (typeof window !== 'undefined' && window.location) {
      if (window.location.pathname.endsWith('product.html') && window.location.search.includes(product.id)) {
        productUrl = window.location.href;
      } else {
        productUrl = `https://mjdelectronics.net/product.html?id=${encodeURIComponent(product.id)}`;
      }
    } else {
      productUrl = `https://mjdelectronics.net/product.html?id=${encodeURIComponent(product.id)}`;
    }
  }

  // Build inquiry message strictly following client's required template:
  const lines = [
    "Hello MJDELECTRONICS!",
    "I am interested in the following product:",
    `Product Name: ${product.name}`,
    `Brand: ${product.brand}`
  ];

  // Model (if available)
  const model = product.model || (product.specs && product.specs.model);
  if (model && String(model).trim() !== '') {
    lines.push(`Model: ${model}`);
  }

  // Displayed Price (if available)
  const price = product.priceText || product.price;
  if (price && String(price).trim() !== '') {
    lines.push(`Price: ${price}`);
  }

  // Product Link
  if (productUrl) {
    lines.push(`Product Link: ${productUrl}`);
  }

  lines.push(
    "I would like to know about its availability, condition, latest price and purchasing options.",
    "Please share further details.",
    "Thank you!"
  );

  const fullMessage = lines.join("\n");
  return `https://wa.me/${MJD_WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
}

// Generate Pre-filled General WhatsApp Inquiry URL
function getWhatsAppGeneralUrl() {
  const generalMessage = "Hello MJDELECTRONICS! I visited your website and would like to know more about your available electronics and current deals.";
  return `https://wa.me/${MJD_WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMessage)}`;
}

// Global action to open WhatsApp Product Inquiry
function openWhatsAppProductInquiry(productId, customUrl) {
  let product = null;
  if (typeof MJD_PRODUCTS !== 'undefined' && Array.isArray(MJD_PRODUCTS)) {
    product = MJD_PRODUCTS.find(p => p.id === productId);
  }
  const url = getWhatsAppProductUrl(product, customUrl);
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Global action to open WhatsApp General Inquiry
function openWhatsAppGeneralInquiry() {
  const url = getWhatsAppGeneralUrl();
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Helper to generate Target-inspired Retail Product Card HTML
function createProductCardHtml(product) {
  const fallbackSrc = getProductSvgFallback(product.name, product.brand);
  const waUrl = getWhatsAppProductUrl(product);
  
  // Badge logic (Target-style deal/viral badges)
  let badgeHtml = '';
  if (product.trending) {
    badgeHtml = `<span class="product-card-badge badge-trending"><i class="bi bi-fire me-1"></i>TikTok Viral</span>`;
  } else if (product.featured) {
    badgeHtml = `<span class="product-card-badge badge-sale">Featured Deal</span>`;
  } else {
    badgeHtml = `<span class="product-card-badge badge-brand">${product.brand}</span>`;
  }

  return `
    <div class="col-6 col-md-4 col-lg-3 mb-3 mb-md-4">
      <div class="retail-product-card h-100" data-brand="${product.brand}" data-category="${product.category}">
        ${badgeHtml}
        
        <a href="product.html?id=${product.id}" class="product-image-container" title="View details for ${product.name}">
          <img src="${product.image}" 
               alt="${product.name}" 
               loading="lazy"
               onerror="this.onerror=null; this.src='${fallbackSrc}';" />
        </a>
        
        <div class="product-card-body">
          <div class="product-brand-tag">${product.brand}</div>
          <h3 class="product-card-title">
            <a href="product.html?id=${product.id}">${product.name}</a>
          </h3>
          
          <div class="product-price-row">
            <span class="price-inquire">${product.priceText}</span>
            <span class="badge-condition-pill">${product.condition || 'Verified'}</span>
          </div>
          
          <div class="product-card-footer mt-auto pt-2">
            <a href="${waUrl}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-whatsapp-card" 
               title="Inquire on WhatsApp about ${product.name}" 
               aria-label="Inquire on WhatsApp about ${product.name}">
              <i class="bi bi-whatsapp"></i> Inquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}
