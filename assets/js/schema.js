// ==========================================
// Olympus Support Solution Limited
// Structured Data / JSON-LD Schema
// File: schema.js
// ==========================================

const olympusSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  "name": "Olympus Support Solution Limited",

  "url": "https://www.olympussupports.co.tz/",

  "logo": "https://www.olympussupports.co.tz/assets/images/logo.png",

  "description":
    "Technology-first insurance institution offering Insurance Digital Platform solutions and licensed insurance brokerage services in Tanzania.",

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kisutu Street, Haidery Plaza, Third Floor",
    "addressLocality": "Dar es Salaam",
    "addressCountry": "TZ"
  },

  "sameAs": [
    "https://www.linkedin.com/",
    "https://www.instagram.com/",
    "https://www.facebook.com/"
  ]
};

// Create JSON-LD Script
const script = document.createElement("script");

script.type = "application/ld+json";

script.text = JSON.stringify(olympusSchema);

// Append to Head
document.head.appendChild(script);