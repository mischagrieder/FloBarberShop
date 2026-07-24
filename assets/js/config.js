/* =============================================================
   SHOP-KONFIGURATION  —  nur diese Datei pro Barbershop anpassen
   =============================================================
   Diese Vorlage funktioniert für beliebige Barbershops.
   Für einen neuen Shop: Ordner kopieren und nur die Werte hier ändern.
   Felder mit "// TODO bestätigen" bitte vor dem Live-Gang prüfen.
============================================================= */

window.SHOP = {
  /* ---------- Marke & Grunddaten ---------- */
  brand: "FLO Barber Shop",
  brandShort: "FLO",
  city: "Oftringen",
  // Kurzer Claim für Hero + <title>
  tagline: "Dein Coiffeur & Barber in Oftringen.",
  // Ein Satz für Meta-Description (SEO, ~150 Zeichen)
  metaDescription:
    "FLO Barber Shop in Oftringen – präzise Fades, Bart-Styling und klassische Herrenschnitte. Top bewertet auf Google. Jetzt Termin sichern.",
  // Domain für SEO/OpenGraph (ohne Slash am Ende), z. B. "https://flobarbershop.ch"
  siteUrl: "https://flobarbershop.ch", // TODO bestätigen

  /* ---------- Farben (Theme: Blau / Weiss / Rot – Barber-Pole) ----------
     "gold" = Haupt-Akzent (hier Barber-Rot). "blue" = Zweit-Akzent. */
  colors: {
    gold: "#d62828",     // Haupt-Akzent (Barber-Rot) – CTAs, Highlights
    goldSoft: "#ef4444", // helleres Rot (Verlauf)
    blue: "#3b6fd4",     // Zweit-Akzent (Barber-Blau) – Streifen, Details
    black: "#0a1a33",    // Haupt-Hintergrund (tiefes Marineblau)
    ink: "#11294d",      // Karten-Hintergrund
    cream: "#f4f7fc"     // heller Text auf Dunkel
  },

  /* ---------- Logo (KI-generiert, transparentes Icon, CDN) ---------- */
  logo: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260722_064833_8464513f-84ea-424c-a744-95a32064c7b9.png",
  logoAlt: "FLO Barber Shop Logo",

  /* ---------- Kontakt ---------- */
  phoneDisplay: "062 557 97 44",     // TODO bestätigen
  phoneLink: "+41625579744",         // für tel:  // TODO bestätigen
  whatsapp: "+41786592244",          // WhatsApp/Handy // TODO bestätigen (leer lassen = ausblenden)
  email: "",                          // optional, leer = ausblenden
  address: {
    street: "Luzernerstrasse 29",
    zip: "4665",
    city: "Oftringen",
    country: "CH",
    lat: 47.3096556,
    lng: 7.9251169
  },
  mapsUrl:
    "https://www.google.com/maps/place/FLO+Barber+Shop+-+Oftringen/@47.3096556,7.9251169,17z",

  /* ---------- Social ----------
     TODO: richtigen Instagram-/TikTok-Account eintragen (leer = wird ausgeblendet) */
  instagram: "",          // z.B. "https://www.instagram.com/DEIN_ACCOUNT/"
  instagramHandle: "",    // z.B. "@dein_account"
  tiktok: "",
  facebook: "",

  /* ---------- Öffnungszeiten ----------
     open/close im 24h-Format "HH:MM", closed:true = geschlossen  */
  hours: [
    { day: "Montag",     open: "09:00", close: "19:00" },
    { day: "Dienstag",   open: "09:00", close: "19:00" },
    { day: "Mittwoch",   open: "09:00", close: "19:00" },
    { day: "Donnerstag", open: "09:00", close: "19:00" },
    { day: "Freitag",    open: "09:00", close: "19:00" },
    { day: "Samstag",    open: "08:00", close: "17:00" },
    { day: "Sonntag",    closed: true }
  ], // TODO Öffnungszeiten bestätigen

  /* ---------- Vertrauens-/Award-Zeile ---------- */
  rating: { stars: 4.5, count: 99, source: "Google" }, // TODO count aktuell halten
  badges: [
    "⭐ 4.5 / 5 bei 99 Google-Bewertungen",
    "💈 Spezialisiert auf Fades & Bart",
    "📍 Zentral in Oftringen",
    "🕐 6 Tage die Woche offen"
    // Echte Auszeichnungen hier ergänzen, z.B. "🏆 ..."
  ],

  /* ---------- Leistungen (Fokus: Fades) ----------
     Preise als Richtwert – bitte bestätigen. price="" = "auf Anfrage" */
  services: [
    { name: "Skin Fade",        desc: "Sauber ausrasierter Fade – von Haut bis Deckhaar perfekt verblendet.", price: "40" },
    { name: "Herrenschnitt",    desc: "Klassischer bis moderner Cut, individuell auf dich abgestimmt.",        price: "35" },
    { name: "Haar & Bart",      desc: "Kompletter Schnitt inkl. Bart-Konturierung und Styling.",               price: "55" },
    { name: "Bart / Rasur",     desc: "Bart-Trim, Konturen und heisse Handtuch-Rasur.",                        price: "25" },
    { name: "Line-Up / Konturen", desc: "Frische Konturen für den Look zwischendurch.",                        price: "20" },
    { name: "Kids Cut",         desc: "Cooler Schnitt für die Kleinen (bis 12 J.).",                           price: "25" }
  ], // TODO Preise bestätigen
  priceNote: "Alle Preise in CHF. Barzahlung & TWINT.", // TODO bestätigen

  /* ---------- Über uns ---------- */
  about: {
    title: "Handwerk, das man sieht",
    text:
      "Bei FLO dreht sich alles um saubere Fades, präzise Konturen und gepflegte Bärte. " +
      "Vom klassischen Herrenschnitt bis zum perfekten Skin Fade – hier bekommst du Barber-Handwerk " +
      "mit Liebe zum Detail, in entspannter Atmosphäre mitten in Oftringen.",
    points: [
      "Spezialisiert auf Fades & Bart-Styling",
      "Top bewertet auf Google (4.5 / 5)",
      "Faire Preise, top Preis-Leistung",
      "Zentral in Oftringen, Luzernerstrasse 29"
    ]
  },

  /* ---------- Galerie ----------
     KI-generierte Bilder (Higgsfield CDN). Zum Lokalisieren: Bilder herunterladen,
     in assets/img/ ablegen und die src auf z.B. "assets/img/gallery-1.jpg" ändern. */
  gallery: [
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260721_194151_35fcfd31-0d9c-4e63-be9b-fe4d6154aaa9.png", alt: "Frischer Skin Fade bei FLO Barber Shop Oftringen", label: "Skin Fade" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260724_073546_2f564b59-4858-4f8f-842c-8c6e8ae03e7d.png", alt: "Textured Crop mit Fade", label: "Textured Crop" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260721_194158_0b9e2905-365e-44e8-a5a9-1eb88292b9f6.png", alt: "Moderner Fade mit sauberen Konturen", label: "Classic Fade" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260724_073546_c54c895d-e146-4cf4-a06e-22c74e9b9fc5.png", alt: "Curly Hair Mid Fade", label: "Curly Fade" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260721_194155_2986a0cf-2e85-49d7-a52e-e34042c127ab.png", alt: "Bart-Styling und heisse Rasur", label: "Bart & Rasur" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260724_073547_1a877c91-ae41-41ae-b8a8-15bf88c963c6.png", alt: "Buzz Cut mit sauberem Line-Up", label: "Buzz & Line-Up" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260724_073548_469fe317-c610-42f0-80e0-20b5bf8b6e88.png", alt: "Klassischer Pompadour mit Skin Fade", label: "Pompadour Fade" }
  ],
  heroImage: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260721_194148_8f41fc28-dea8-40f6-aa3b-649e56e1662d.png",

  /* ---------- Bewertungen / Testimonials ----------
     Platzhalter – durch echte Google-Reviews ersetzen. */
  testimonials: [
    { text: "Sauberster Fade, den ich je hatte. Schnell, präzise und mega freundlich.", author: "Google-Bewertung", stars: 5 },
    { text: "Nimmt sich Zeit, achtet auf jedes Detail. Bester Barber in der Region.",   author: "Google-Bewertung", stars: 5 },
    { text: "Top Atmosphäre, faire Preise und ein Ergebnis, das sitzt. Klare Empfehlung.", author: "Google-Bewertung", stars: 5 }
  ],

  /* ---------- Call-to-Action ---------- */
  primaryCta: { label: "Termin anfragen", type: "phone" }, // type: phone | whatsapp | link
  bookingUrl: "" // falls Online-Buchung vorhanden, hier Link (leer = telefonisch/WhatsApp)
};
