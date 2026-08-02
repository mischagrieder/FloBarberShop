/* =============================================================
   SHOP-KONFIGURATION  —  nur diese Datei pro Barbershop anpassen
   =============================================================
   Vorlage für beliebige Barbershops. Für einen neuen Shop:
   Ordner kopieren und nur die Werte hier ändern.
   Felder mit "// TODO" bitte vor dem Live-Gang prüfen.
============================================================= */

window.SHOP = {
  /* ---------- Marke & Grunddaten ---------- */
  brand: "FLO Barber Shop",
  brandShort: "FLO",
  legalName: "FLO Coiffeur Barber GmbH",
  city: "Oftringen",
  tagline: "Fades. Bärte. Präzision.",
  heroSub: "Dein Barbershop in Oftringen – sauberes Handwerk, scharfe Konturen, entspannte Atmosphäre.",
  metaDescription:
    "FLO Barber Shop in Oftringen – präzise Fades, Bart-Styling und klassische Herrenschnitte. Top bewertet auf Google. Walk-ins willkommen.",
  siteUrl: "https://flobarbershop.ch", // TODO bestätigen

  /* ---------- Farben (Theme: Schwarz / Grau / Weiss + Rot) ---------- */
  colors: {
    red: "#e11d2a",      // Akzent / CTA / Keywords
    redDark: "#b0141d",
    ink: "#0e0e10",      // Text / Schwarz
    graphite: "#141417", // dunkle Sektionen
    gray: "#6f6f77",     // gedämpfter Text
    bg: "#ffffff"        // Haupt-Hintergrund (weiss)
  },

  /* ---------- Logo (KI-generiert, transparentes Emblem) ---------- */
  logo: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260722_063225_a454bb9b-e255-438a-971e-3effa1fc13db.png",
  logoAlt: "FLO Barber Shop Logo",

  /* ---------- Hero-Bild ----------
     Zuerst wird assets/img/hero.jpg versucht (dein echtes Salon-Foto einfach
     dort ablegen!). Fehlt es, wird dieses KI-Bild als Fallback genutzt. */
  heroImageLocal: "assets/img/hero.jpg",
  heroImage: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260802_161618_d6b1a7a7-8970-42a8-b82f-3d5567c0772e.png", // KI-Fallback

  /* ---------- Kontakt ---------- */
  phoneDisplay: "062 557 97 44",
  phoneLink: "+41625579744",
  whatsapp: "",          // TODO: Handy/WhatsApp eintragen (leer = ausgeblendet)
  email: "",
  address: {
    street: "Luzernerstrasse 29",
    zip: "4665",
    city: "Oftringen",
    country: "CH",
    lat: 47.3096556,
    lng: 7.9251169
  },
  mapsUrl: "https://www.google.com/maps/place/FLO+Barber+Shop+-+Oftringen/@47.3096556,7.9251169,17z",
  routeUrl: "https://www.google.com/maps/dir/?api=1&destination=FLO+Barber+Shop+Oftringen+Luzernerstrasse+29+4665+Oftringen",

  /* ---------- Social (leer = ausgeblendet) ---------- */
  instagram: "",         // TODO: richtigen Account eintragen
  instagramHandle: "",
  tiktok: "",
  facebook: "",

  /* ---------- Öffnungszeiten ---------- */
  hours: [
    { day: "Montag",     open: "09:00", close: "19:00" },
    { day: "Dienstag",   open: "09:00", close: "19:00" },
    { day: "Mittwoch",   open: "09:00", close: "19:00" },
    { day: "Donnerstag", open: "09:00", close: "19:00" },
    { day: "Freitag",    open: "09:00", close: "19:00" },
    { day: "Samstag",    open: "08:00", close: "17:00" },
    { day: "Sonntag",    closed: true }
  ],
  walkIn: "Walk-ins willkommen – oder ruf kurz an.",

  /* ---------- Bewertung ---------- */
  rating: { stars: 4.4, count: 99, source: "Google" }, // TODO count bei Bedarf aktualisieren

  /* ---------- Marquee-Keywords (Laufband) ---------- */
  marquee: ["Skin Fade", "Bart & Rasur", "Line-Up", "Herrenschnitt", "Fades", "Kids Cut", "Konturen", "Hot Towel"],

  /* ---------- Kennzahlen (zählen sich hoch) ----------
     value = Zielzahl, decimals = Nachkommastellen, prefix/suffix optional */
  stats: [
    { value: 4.4, decimals: 1, suffix: "", label: "Google-Bewertung", icon: "★" },
    { value: 99, decimals: 0, suffix: "+", label: "zufriedene Bewertungen", icon: "❝" },
    { value: 6, decimals: 0, suffix: "", label: "Tage die Woche offen", icon: "✂" },
    { value: 100, decimals: 0, suffix: "%", label: "Handwerk & Leidenschaft", icon: "⬡" }
  ], // TODO Zahlen nach Wunsch anpassen

  /* ---------- Leistungen (Fokus: Fades) ---------- */
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
    title: "Mehr als ein Haarschnitt",
    text:
      "Bei FLO dreht sich alles um sauberes Barber-Handwerk: präzise Fades, scharfe Konturen und " +
      "gepflegte Bärte. In modernem Ambiente mitten in Oftringen nehmen wir uns Zeit für deinen Look – " +
      "vom klassischen Herrenschnitt bis zum perfekten Skin Fade.",
    points: [
      "Spezialisiert auf Fades & Bart-Styling",
      "Top bewertet auf Google (4.4 / 5)",
      "Faire Preise, ehrliche Beratung",
      "Walk-ins willkommen – zentral in Oftringen"
    ],
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260727_193706_40f0510c-d48f-4544-8932-c1ab0b86c09d.png"
  },

  /* ---------- Galerie / Ergebnisse (Grayscale, Farbe bei Hover) ---------- */
  gallery: [
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260721_194151_35fcfd31-0d9c-4e63-be9b-fe4d6154aaa9.png", alt: "Frischer Skin Fade bei FLO Barber Shop Oftringen", label: "Skin Fade" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260724_073546_2f564b59-4858-4f8f-842c-8c6e8ae03e7d.png", alt: "Textured Crop mit Fade", label: "Textured Crop" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260721_194158_0b9e2905-365e-44e8-a5a9-1eb88292b9f6.png", alt: "Moderner Fade mit sauberen Konturen", label: "Classic Fade" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260724_073546_c54c895d-e146-4cf4-a06e-22c74e9b9fc5.png", alt: "Curly Hair Mid Fade", label: "Curly Fade" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260721_194155_2986a0cf-2e85-49d7-a52e-e34042c127ab.png", alt: "Bart-Styling und heisse Rasur", label: "Bart & Rasur" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260724_073547_1a877c91-ae41-41ae-b8a8-15bf88c963c6.png", alt: "Buzz Cut mit sauberem Line-Up", label: "Buzz & Line-Up" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260724_073548_469fe317-c610-42f0-80e0-20b5bf8b6e88.png", alt: "Klassischer Pompadour mit Skin Fade", label: "Pompadour Fade" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260727_193706_46bcee30-23fa-44f8-94d8-76761cb27923.png", alt: "Zufriedener Kunde nach frischem Schnitt", label: "Frisch gemacht" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260727_193706_b6da5e10-1316-4b35-816c-418e32708dd7.png", alt: "Scharfe Bart-Konturen mit dem Rasiermesser", label: "Bart-Konturen" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260727_193706_7d58c9e3-2c07-4f34-ae16-153b9a21fbbb.png", alt: "Barber-Werkzeug: Maschine, Schere, Rasiermesser", label: "Werkzeug" }
  ],

  /* ---------- Rezensionen (viele – durch echte Google-Reviews ersetzen) ---------- */
  testimonials: [
    { text: "Sauberster Fade, den ich je hatte. Schnell, präzise und mega freundlich.", author: "Marco B.", stars: 5 },
    { text: "Nimmt sich Zeit und achtet auf jedes Detail. Bester Barber in der Region.", author: "David K.", stars: 5 },
    { text: "Top Atmosphäre, faire Preise und ein Ergebnis, das sitzt. Klare Empfehlung.", author: "Luca M.", stars: 5 },
    { text: "Endlich ein Barber, der Fades wirklich kann. Komme sicher wieder.", author: "Samir A.", stars: 5 },
    { text: "Super sympathisch, schneller Termin, perfekter Schnitt. Danke!", author: "Timo R.", stars: 5 },
    { text: "Bart und Haare wie aus dem Magazin. Absolut zu empfehlen.", author: "Elton S.", stars: 5 },
    { text: "Immer top Beratung und ein sauberes Line-Up. Mein Stammladen.", author: "Fabio D.", stars: 5 },
    { text: "Sehr professionell und gepflegt. Preis-Leistung stimmt zu 100 %.", author: "Nico W.", stars: 4 },
    { text: "Meinem Sohn gefällt sein Cut riesig – geduldig mit Kids. Top!", author: "Sandra P.", stars: 5 },
    { text: "Moderner Laden, cooler Vibe, und der Skin Fade ist perfekt.", author: "Jonas H.", stars: 5 }
  ], // TODO durch echte Google-Bewertungen ersetzen

  /* ---------- Call-to-Action ----------
     bookingUrl gesetzt => alle "Termin"-Buttons öffnen die Online-Buchung. */
  primaryCta: { label: "Termin vereinbaren", type: "link" },
  bookingUrl: "https://appt.link/flo-barbershop-I9jOfPvy"
};
