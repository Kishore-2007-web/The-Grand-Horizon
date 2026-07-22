# The Grand Horizon | Premium Hotel & Resort HTML5 Template

**The Grand Horizon** is an ultra-luxurious, commercial-grade HTML5/CSS3/JavaScript template designed specifically for luxury hotels, boutique resorts, bed & breakfasts, and vacation rental properties. Built to ThemeForest, TemplateMonster, and Creative Market quality standards.

---

## Key Highlights & Features

- **Responsive Grid System**: Pixel-perfect layout optimized across 320px to 1920px viewports (Mobile, Tablet, Laptop, Ultra-Wide 4K).
- **Zero Heavy Dependencies**: Pure Vanilla HTML5, Vanilla CSS3, and ES6+ JavaScript. No bulky frameworks required.
- **Interactive Booking Availability Widget**: Native HTML5 date pickers with automatic minimum stay calculation and non-blocking toast notifications.
- **Dynamic Category Room Filtering**: Filter rooms effortlessly by Luxury Suites, Ocean Views, and Classic Rooms.
- **Accessible Room Details Modal**: Fully keyboard navigable (WCAG AA standard) modal with focus trapping and `Escape` key close.
- **SEO & Social Share Ready**: Complete OpenGraph, Twitter Cards, Schema.org `LodgingBusiness` JSON-LD metadata, `robots.txt`, and `sitemap.xml`.
- **Interactive FAQ Accordion**: Clean, smooth accordion for common guest questions.
- **Comprehensive Offline Documentation**: Includes interactive `Documentation/index.html` guide for easy buyer customization.

---

## Directory & Package Structure

```
The Grand Horizon/
├── index.html                  # Main Landing Page Template
├── robots.txt                   # SEO Search Engine Crawler Rules
├── sitemap.xml                  # SEO XML Map
├── assets/
│   ├── images/                 # Optimized High-Res Demo Images
│   └── favicons/               # SVG Favicons & Web Manifest
├── css/
│   ├── variables.css           # Design Tokens, Colors, & Typography Variables
│   ├── reset.css               # Modern CSS Normalization
│   ├── layout.css              # Grid, Headers, Hero & Footer Layouts
│   ├── components.css          # Cards, Modals, Forms, Toasts, Accordion
│   └── styles.css              # Master Index Stylesheet
├── js/
│   ├── data.js                 # Central Data Store (Rooms, Amenities, FAQ)
│   ├── booking.js              # Booking Widget Validation & Toast Helper
│   ├── gallery-modal.js        # Room Filter & Accessible Modal Dialog
│   └── main.js                 # Header Scroll, Mobile Nav, & Accordions
├── Documentation/
│   └── index.html              # Interactive Buyer Customization Manual
├── README.md                   # Product Overview & Quick Start
├── CHANGELOG.md                # Release Notes & Version Tracking
├── LICENSE.txt                 # Commercial License
├── SUPPORT.md                  # Buyer Support Policy
└── CREDITS.md                  # Third-Party Assets & Attribution
```

---

## Customization Guide

### 1. Colors & Branding
Open `css/variables.css` to easily change theme colors:
```css
:root {
    --clr-primary: #C39D63; /* Change to your brand accent gold/color */
    --clr-dark: #1A1A1A;    /* Primary background dark tone */
}
```

### 2. Hotel Room Data
Open `js/data.js` to modify rooms, pricing, amenities, and text descriptions without editing complex HTML markup.

### 3. Font Setup
Fonts are loaded from Google Fonts (`Playfair Display` & `Inter`). You can swap fonts by changing the Google Fonts link in `<head>` and updating `--font-heading` and `--font-body` in `css/variables.css`.

---

## Browser Support

- Google Chrome (latest 2 versions)
- Mozilla Firefox (latest 2 versions)
- Apple Safari (latest 2 versions)
- Microsoft Edge (latest 2 versions)
- iOS Safari & Android Chrome

---

## Support & Help

For customization help or technical questions, please refer to [SUPPORT.md](SUPPORT.md) or open `Documentation/index.html` in any web browser.
