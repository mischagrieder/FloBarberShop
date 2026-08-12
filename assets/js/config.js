/* =============================================================
   SHOP-KONFIGURATION  —  nur diese Datei pro Barbershop anpassen
   =============================================================
   Vorlage für beliebige Barber-/Tattoo-Shops. Für einen neuen Shop:
   Ordner kopieren und nur die Werte hier ändern.
   Felder mit "// TODO" bitte vor dem Live-Gang prüfen/ergänzen.
============================================================= */

window.SHOP = {
  /* ---------- Marke & Grunddaten ---------- */
  brand: "NOVUS Barber & Tattoo",
  brandShort: "NOVUS",
  legalName: "NOVUS Barber & Tattoo",
  city: "Rothrist",
  titleSuffix: "Barber, Bart & Tattoo",
  tagline: "Übergänge. Bärte. Tattoos.",
  heroSub: "Dein Barber & Tattoo Studio in Rothrist: präzise Übergänge, saubere Bärte und individuelle Tattoos – in stylischem Ambiente.",
  metaDescription:
    "NOVUS Barber & Tattoo in Rothrist: präzise Übergänge, saubere Bärte und individuelle Tattoos. Top bewertet auf Treatwell (4.9). Jetzt online buchen.",
  siteUrl: "https://www.websitenprojekt1.com", // TODO: auf echte Domain ändern, sobald live

  /* ---------- Farben (Theme: Schwarz / Grau / Weiss + Türkis) ----------
     Türkis wie die Barber-Stühle im Salon – ersetzt das frühere Rot. */
  colors: {
    red: "#12b4c4",      // Akzent / CTA / Keywords (Türkis)
    redDark: "#0c8c99",  // dunkleres Türkis (Hover)
    ink: "#0e0e10",      // Text / Schwarz
    graphite: "#141417", // dunkle Sektionen
    gray: "#6f6f77",     // gedämpfter Text
    bg: "#ffffff"        // Haupt-Hintergrund (weiss)
  },

  /* ---------- Logo ----------
     Leer = nur Text-Logo im Header (NOVUS). Bei Bedarf echtes Emblem eintragen. */
  logo: "",
  logoAlt: "NOVUS Barber & Tattoo Logo",

  /* ---------- Hero-Bild ----------
     Zuerst wird assets/img/hero.jpg versucht (dein echtes Salon-Foto einfach
     dort ablegen!). Fehlt es, wird dieses KI-Bild als Fallback genutzt. */
  heroImageLocal: "assets/img/hero.jpg",
  heroImage: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_174705_2d5ebdae-359b-4266-8a27-1856f9bf84a4.png", // KI-Fallback (weisser Salon, türkise Stühle)

  /* ---------- Kontakt ---------- */
  phoneDisplay: "",      // TODO: Telefonnummer eintragen (leer = Zeile ausgeblendet, CTA -> Online-Buchung)
  phoneLink: "",         // TODO: z. B. +41xxxxxxxxx
  whatsapp: "",          // TODO: Handy/WhatsApp (leer = ausgeblendet)
  email: "",             // TODO
  address: {
    street: "Bernstrasse 176",
    zip: "4852",
    city: "Rothrist",
    country: "CH",
    lat: 47.3033,        // TODO: exakte Koordinaten bei Bedarf feinjustieren
    lng: 7.8890
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=NOVUS+Barber+%26+Tattoo+Bernstrasse+176+4852+Rothrist",
  routeUrl: "https://www.google.com/maps/dir/?api=1&destination=NOVUS+Barber+%26+Tattoo+Bernstrasse+176+4852+Rothrist",
  reviewsUrl: "https://www.treatwell.ch/ort/novus-barber-tattoo/",

  /* ---------- Social (leer = ausgeblendet) ---------- */
  instagram: "https://www.instagram.com/novus.ch/",
  instagramHandle: "@novus.ch",
  tiktok: "https://www.tiktok.com/@novus.ch",
  facebook: "",

  /* ---------- Öffnungszeiten ----------
     TODO: mit den echten Zeiten von NOVUS ersetzen (Platzhalter!). */
  hours: [
    { day: "Montag",     open: "09:00", close: "19:00" },
    { day: "Dienstag",   open: "09:00", close: "19:00" },
    { day: "Mittwoch",   open: "09:00", close: "19:00" },
    { day: "Donnerstag", open: "09:00", close: "19:00" },
    { day: "Freitag",    open: "09:00", close: "19:00" },
    { day: "Samstag",    open: "08:00", close: "17:00" },
    { day: "Sonntag",    closed: true }
  ],
  walkIn: "Termine bequem online buchen – oder schau direkt im Studio vorbei.",

  /* ---------- Bewertung ---------- */
  rating: { stars: 4.9, count: 1046, source: "Treatwell" }, // wird als "1046+" angezeigt

  /* ---------- Marquee-Keywords (Laufband) ---------- */
  marquee: ["Übergang", "Bart & Rasur", "Line Up", "Herrenschnitt", "Tattoo", "Black & Grey", "Fine Line", "Kids Cut", "Konturen", "Hot Towel"],

  /* ---------- Kennzahlen (aktuell nicht im Layout, bleibt als Reserve) ---------- */
  stats: [
    { value: 4.9, decimals: 1, suffix: "", label: "Treatwell-Bewertung", icon: "★" },
    { value: 1000, decimals: 0, suffix: "+", label: "zufriedene Bewertungen", icon: "❝" },
    { value: 6, decimals: 0, suffix: "", label: "Tage die Woche offen", icon: "✂" },
    { value: 100, decimals: 0, suffix: "%", label: "Handwerk & Leidenschaft", icon: "⬡" }
  ],

  /* ---------- Leistungen (Preise & Dauer) ----------
     TODO: Preise/Dauer mit den echten NOVUS-Angaben bestätigen (aktuell Richtwerte). */
  services: [
    { name: "Haarschnitt",                          price: "40",  duration: "30" },
    { name: "Haarschnitt + Bart",                   price: "55",  duration: "45" },
    { name: "Bart / Rasur",                         price: "25",  duration: "20" },
    { name: "Kids Cut (bis 12 Jahre)",              price: "30",  duration: "25" },
    { name: "Line Up / Konturen",                   price: "20",  duration: "15" },
    { name: "Tattoo – kostenlose Beratung",         price: "",    desc: "Termin nach Vereinbarung" },
    { name: "Tattoo (Black & Grey / Fine Line)",    price: "ab 120", desc: "Preis nach Aufwand" }
  ],
  priceNote: "Alle Preise in CHF. Tattoos nach Aufwand – Preis auf Anfrage. Barzahlung, TWINT & Karte.",

  /* ---------- Über uns ---------- */
  about: {
    title: "Mehr als ein Schnitt – dein Style",
    text:
      "Bei NOVUS geht es uns nicht nur ums Haareschneiden. Wir wollen, dass du unseren Barber & Tattoo " +
      "Shop mit einem Look verlässt, der zu dir passt und mit dem du dich wohlfühlst. Ob sauberer " +
      "Übergang, gepflegter Bart oder ein Tattoo, das deine Geschichte erzählt – wir nehmen uns Zeit " +
      "für jedes Detail.",
    points: [
      "Barber, Bartpflege & Tattoo unter einem Dach",
      "Top bewertet auf Treatwell (4.9 / 5)",
      "Modernes Studio mit stylischem Ambiente",
      "Zentral in Rothrist – einfach online buchen"
    ],
    image: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_174404_998f97c3-56b2-4ed3-886f-75d33a812f2c.png"
  },

  /* ---------- Galerie / Ergebnisse (Grayscale, Farbe bei Hover) ----------
     KI-Bilder im Stil des Salons – später gegen echte Fotos tauschen. */
  gallery: [
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_174403_3e1489ca-2f27-4a92-8ec5-541cd336e407.png", alt: "Frischer Übergang bei NOVUS Barber & Tattoo Rothrist", label: "Übergang" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_174705_db8f387f-8491-47b7-9db0-161cffd00c6b.png", alt: "Textured Crop mit sauberem Fade", label: "Textured Crop" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_174705_5028628b-05c9-4f87-ab57-cf7f1edce8a4.png", alt: "Bart Styling und saubere Konturen", label: "Bart & Konturen" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_174704_e6e010d4-37fe-46bb-b9b6-3bc89499320a.png", alt: "Türkiser Barber-Stuhl im weissen NOVUS Studio", label: "Studio" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_174403_b432ff7c-7f7b-48fe-891a-b37dad9c0886.png", alt: "Black & Grey Skorpion Tattoo", label: "Tattoo · Black & Grey" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_174403_ebf7bafe-57de-4930-962f-8474a36ad894.png", alt: "Detailliertes Sleeve Tattoo", label: "Tattoo · Sleeve" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_174403_6d15566a-034c-48c2-b7d4-1a2acc5c3055.png", alt: "Lettering Tattoo entlang der Wirbelsäule", label: "Tattoo · Lettering" },
    { src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_174704_d4d72e21-205b-49c5-ba90-ffa0a4080be9.png", alt: "Barber Werkzeug: Maschine, Schere, Kamm", label: "Werkzeug" }
  ],

  /* ---------- Rezensionen (Platzhalter – durch echte Treatwell-Reviews ersetzen) ---------- */
  testimonials: [
    { text: "Sauberster Übergang, den ich je hatte. Schnell, präzise und mega freundlich.", author: "Marco B.", stars: 5 },
    { text: "Nimmt sich Zeit und achtet auf jedes Detail. Bester Barber in der Region.", author: "David K.", stars: 5 },
    { text: "Top Atmosphäre, faire Preise und ein Ergebnis, das sitzt. Klare Empfehlung.", author: "Luca M.", stars: 5 },
    { text: "Mein Tattoo ist der Wahnsinn – sauber gestochen und genau nach meiner Idee.", author: "Samir A.", stars: 5 },
    { text: "Super sympathisch, schneller Termin, perfekter Schnitt. Danke!", author: "Timo R.", stars: 5 },
    { text: "Bart und Haare wie aus dem Magazin. Absolut zu empfehlen.", author: "Elton S.", stars: 5 },
    { text: "Immer top Beratung und ein sauberes Line Up. Mein Stammladen.", author: "Fabio D.", stars: 5 },
    { text: "Sehr professionell und gepflegt. Preis Leistung stimmt zu 100 %.", author: "Nico W.", stars: 5 },
    { text: "Stylisches Studio, cooler Vibe – und das Tattoo sieht mega aus.", author: "Jonas H.", stars: 5 },
    { text: "Meinem Sohn gefällt sein Cut riesig, geduldig mit Kids. Top!", author: "Sandra P.", stars: 5 }
  ], // TODO durch echte Treatwell-Bewertungen ersetzen

  /* ---------- Call-to-Action ----------
     bookingUrl gesetzt => alle "Termin"-Buttons öffnen die Online-Buchung. */
  primaryCta: { label: "Termin buchen", type: "link" },
  bookingUrl: "https://outlaw-barber.mytreatwell.ch/"
};
