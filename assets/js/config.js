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
  tagline: "Dein Barber und Tätowierer in Rothrist",
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

  /* ---------- Hero-Logo (echtes NOVUS-Logo, wird im Hero weiss dargestellt) ----------
     Original-Upload (scharf); die weisse Darstellung macht CSS via invert + screen. */
  heroLogo: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/01be915f-0f09-48b8-bcde-2efa88943abd.png",

  /* ---------- Hero-Bild ----------
     Zuerst wird assets/img/hero.jpg versucht (dein echtes Salon-Foto einfach
     dort ablegen!). Fehlt es, wird dieses KI-Bild als Fallback genutzt. */
  heroImageLocal: "assets/img/hero.jpg",
  heroImage: "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_174705_2d5ebdae-359b-4266-8a27-1856f9bf84a4.png", // KI-Fallback (weisser Salon, türkise Stühle)

  /* ---------- Hero-Video (Clips laufen nacheinander, dann Loop) ----------
     Leer = nur Bild. KI-Platzhalter (Haarschnitt + Tattoo) – später durch echtes
     Video ersetzen. Das Bild oben bleibt Fallback, falls Video nicht lädt. */
  heroVideos: [
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_182353_a818db0a-1ee2-4f22-9e69-92a74e686cc8.mp4", // Haarschnitt
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_182354_5e954c82-c6e5-44dc-b6a2-d7b97ee318d7.mp4"  // Tattoo
  ],

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

  /* ---------- Öffnungszeiten (echt, gemäss Treatwell) ---------- */
  hours: [
    { day: "Montag",     closed: true },
    { day: "Dienstag",   open: "09:00", close: "18:30" },
    { day: "Mittwoch",   open: "09:00", close: "18:30" },
    { day: "Donnerstag", open: "09:00", close: "20:00" },
    { day: "Freitag",    open: "09:00", close: "19:00" },
    { day: "Samstag",    open: "09:00", close: "15:00" },
    { day: "Sonntag",    closed: true }
  ],
  walkIn: "Termine bequem online buchen – oder schau direkt im Studio vorbei.",

  /* ---------- Bewertung ---------- */
  rating: { stars: 4.9, count: 1206, source: "Treatwell" }, // wird als "1206+" angezeigt

  /* ---------- Marquee-Keywords (Laufband) ---------- */
  marquee: ["Übergang", "Bart & Rasur", "Line Up", "Herrenschnitt", "Tattoo", "Black & Grey", "Fine Line", "Kids Cut", "Konturen", "Hot Towel"],

  /* ---------- Kennzahlen (aktuell nicht im Layout, bleibt als Reserve) ---------- */
  stats: [
    { value: 4.9, decimals: 1, suffix: "", label: "Treatwell-Bewertung", icon: "★" },
    { value: 1000, decimals: 0, suffix: "+", label: "zufriedene Bewertungen", icon: "❝" },
    { value: 6, decimals: 0, suffix: "", label: "Tage die Woche offen", icon: "✂" },
    { value: 100, decimals: 0, suffix: "%", label: "Handwerk & Leidenschaft", icon: "⬡" }
  ],

  /* ---------- Leistungen (echte Preise & Dauer, gemäss Treatwell) ---------- */
  services: [
    { name: "Herren – Haarschnitt",            price: "37",  duration: "25" },
    { name: "Herren – Haarschnitt & Bart",     price: "50",  duration: "40" },
    { name: "Herren – Waschen & Schneiden",    price: "40",  duration: "30" },
    { name: "Herren – langer Vollbart",        price: "25",  duration: "20" },
    { name: "Herren – Bart kurz",              price: "20",  duration: "15" },
    { name: "Herren – Bart färben",            price: "18",  duration: "15" },
    { name: "Tattoo",                          price: "",    desc: "Individuelle Motive – nach Vereinbarung" }
  ],
  priceNote: "Alle Preise in CHF. Tattoo-Termine auf Anfrage. Weitere Services (u. a. Waxing) im Studio & auf Treatwell.",

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
      "Top bewertet auf Treatwell (4.9 / 5 · 1206 Bewertungen)",
      "Inhaber Rabit Hysenaj – Retro-Charme & echtes Handwerk",
      "Zentral in Rothrist – einfach online buchen"
    ],
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/1894ca12-28e5-4327-8bb9-9e99b1937273.png",
    // Über-uns-Bild wechselt: Inhaber-Portrait (#3, echtes Foto) abwechselnd mit
    // KI-Studio-Bildern im Hochformat (kein Ergebnis-Foto).
    slides: [
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/1894ca12-28e5-4327-8bb9-9e99b1937273.png",
      "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_233911_41d048b9-b7f2-4f75-8d7f-80280e7290e7.png",
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/1894ca12-28e5-4327-8bb9-9e99b1937273.png",
      "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_233911_3afaf15f-6f26-4e77-851a-a8e03ac797d8.png",
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/1894ca12-28e5-4327-8bb9-9e99b1937273.png",
      "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_233911_2e574c31-dc81-47aa-84ad-66b6875b7e23.png"
    ]
  },

  /* ---------- Slideshow (Kontakt / Termin – Einblicke ins Studio) ----------
     KI-Studio-Bilder im Querformat (passend zum breiten Band). */
  slides: [
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_233911_a69e1a06-79bc-41b2-96b6-1b0ec6b1cb45.png",
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_233911_e453a450-6196-4fbd-8762-64085556b82d.png",
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_233911_3f6f8199-173f-461a-9fcc-b3179f1b5831.png",
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_233911_002bc4bc-b6eb-4771-8120-648511c07f06.png",
    "https://d8j0ntlcm91z4.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/hf_20260812_233911_f68c1ed1-2530-461f-b669-e5492712e1c1.png"
  ],

  /* ---------- Galerie / Ergebnisse (Grayscale, Farbe bei Hover) ----------
     ECHTE Fotos von NOVUS (im Widget hochgeladen). Reihenfolge/Labels bei Bedarf
     anpassen. Hero- und Über-uns-Bild werden separat oben gesetzt. */
  gallery: [
    { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/1be855ab-7603-4d9c-ba32-43d0e553d4f8.png", alt: "NOVUS Barber & Tattoo Rothrist" },
    { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/9e4a6098-e4da-41ae-8505-2cb5847fb714.png", alt: "NOVUS Barber & Tattoo Rothrist" },
    { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/1894ca12-28e5-4327-8bb9-9e99b1937273.png", alt: "NOVUS Barber & Tattoo Rothrist" },
    { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/bdd1443b-c7dd-485d-9279-477fb3fba1c4.png", alt: "NOVUS Barber & Tattoo Rothrist" },
    { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/8f8388eb-e63b-40d6-9264-d1b15735f3cd.png", alt: "NOVUS Barber & Tattoo Rothrist" },
    { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/d6cebbac-e3d4-472d-ad5d-0a4d61ac135a.png", alt: "NOVUS Barber & Tattoo Rothrist" },
    { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/00d99a19-8625-4159-b21f-8ace85340e02.png", alt: "NOVUS Barber & Tattoo Rothrist" },
    { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/340d4052-6f2a-4941-a52e-1fb0c1570fed.png", alt: "NOVUS Barber & Tattoo Rothrist" },
    { src: "https://d2ol7oe51mr4n9.cloudfront.net/user_3FuPVC4JIayU3rXUwYAnv5ZoEBp/21d39946-521b-4c22-b7eb-c497afcc2361.png", alt: "NOVUS Barber & Tattoo Rothrist" }
  ],

  /* ---------- Rezensionen (echte, verifizierte Treatwell-Bewertungen) ---------- */
  testimonials: [
    { text: "Hab mich schnell wohlgefühlt – sauber und präzise, genau nach meinem Wunsch.", author: "", stars: 5 },
    { text: "Nummer 1.", author: "Nedim", stars: 5 },
    { text: "Der beste Barber, den ich seit Langem hatte.", author: "Ajdin", stars: 5 },
    { text: "Wie immer war der Besuch bei Rabit eine 10/10.", author: "Ajdin", stars: 5 },
    { text: "Super Service.", author: "Nedim", stars: 5 }
  ], // Quelle: verifizierte Treatwell-Bewertungen

  /* ---------- Call-to-Action ----------
     bookingUrl gesetzt => alle "Termin"-Buttons öffnen die Online-Buchung. */
  primaryCta: { label: "Termin buchen", type: "link" },
  bookingUrl: "https://outlaw-barber.mytreatwell.ch/"
};
