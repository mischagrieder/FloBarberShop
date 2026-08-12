# NOVUS Barber & Tattoo – Onepager

Moderne, SEO-optimierte One-Page-Website für einen Barber- & Tattoo-Shop.
Design: **Schwarz / Grau / Weiss + Türkis** (angelehnt an die türkisen Salon-Stühle),
Fokus auf **Übergänge, Bart & Tattoo**, klare Call-to-Actions.

Reine statische Seite (HTML/CSS/JS) – **kein Build, kein Framework**.
Einfach die Dateien auf einen beliebigen Webspace laden (Hostinger, Netlify,
GitHub Pages, Vercel …).

---

## 📁 Aufbau

```
index.html            → Struktur (Markup) + Meta-Tags
assets/css/styles.css → Design (Schwarz/Weiss + Türkis-Theme)
assets/js/config.js   → ⭐ ALLE Inhalte pro Shop (nur hier etwas ändern)
assets/js/main.js     → rendert die Seite aus config.js (inkl. SEO JSON-LD)
assets/img/           → Favicon (Bilder kommen aktuell per KI-CDN-URL)
robots.txt / sitemap.xml → SEO
```

Alle Texte, Preise, Farben, Öffnungszeiten, Kontaktdaten und Bilder stehen in
**`assets/js/config.js`**. `main.js` baut daraus automatisch die Seite und die
strukturierten Daten (schema.org `HairSalon`) für Google.

---

## 🔁 Vorlage für weitere Shops nutzen

Die Seite ist als **Template** gebaut. Für einen neuen Shop:

1. Diesen Ordner kopieren (oder Repo klonen).
2. **Nur `assets/js/config.js` anpassen** – Marke, Farben, Adresse, Telefon,
   Öffnungszeiten, Leistungen/Preise, Social-Links, Bilder, Testimonials.
3. Optional Domain in `config.js` (`siteUrl`), `robots.txt` und `sitemap.xml`
   eintragen.
4. Hochladen – fertig.

Nichts an `index.html`, `styles.css` oder `main.js` muss angefasst werden.

### Farben pro Shop ändern
In `config.js` unter `colors`. Die Akzentfarbe steckt in `red` (hier Türkis
`#12b4c4`). Die Werte überschreiben automatisch die CSS-Variablen.

---

## ✅ Noch zu bestätigen (in `config.js` mit `// TODO` markiert)

- **Telefonnummer** – aktuell leer (Zeile ausgeblendet, CTA führt zur Online-Buchung).
- **Öffnungszeiten** – aktuell Platzhalter, bitte mit den echten NOVUS-Zeiten ersetzen.
- **Preise / Leistungen** – aktuell Richtwerte in CHF, bitte bestätigen.
- **Echte Treatwell-Bewertungen** – aktuell Platzhalter-Testimonials, durch echte ersetzen.
- **Impressum** – E-Mail, Telefon und UID (CHE-Nummer) ergänzen.

---

## 🖼️ Bilder

Die Bilder sind KI-generiert (im Stil des echten Salons: weiss, türkise Stühle,
Hexagon-LEDs, Fades & Tattoos) und werden aktuell direkt vom Higgsfield-CDN
geladen (siehe URLs in `config.js`). **Echte Fotos einsetzen:** Bild in
`assets/img/` ablegen (Hero z. B. als `assets/img/hero.jpg`) und die `src` in
`config.js` auf den lokalen Pfad ändern.

---

## 🚀 Lokal ansehen

```bash
# einfachster Weg
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```
