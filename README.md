# FLO Barber Shop – Onepager

Moderne, SEO-optimierte One-Page-Website für einen Barbershop.
Design: **Schwarz / Gold**, Fokus auf **Fades & Bart**, klare Call-to-Actions.

Reine statische Seite (HTML/CSS/JS) – **kein Build, kein Framework**.
Einfach die Dateien auf einen beliebigen Webspace laden (Netlify, GitHub Pages,
Vercel, klassisches Hosting …).

---

## 📁 Aufbau

```
index.html            → Struktur (Markup) + Meta-Tags
assets/css/styles.css → Design (Schwarz/Gold-Theme)
assets/js/config.js   → ⭐ ALLE Inhalte pro Shop (nur hier etwas ändern)
assets/js/main.js     → rendert die Seite aus config.js (inkl. SEO JSON-LD)
assets/img/           → Favicon (Bilder kommen aktuell per KI-CDN-URL)
robots.txt / sitemap.xml → SEO
```

Alle Texte, Preise, Farben, Öffnungszeiten, Kontaktdaten und Bilder stehen in
**`assets/js/config.js`**. `main.js` baut daraus automatisch die Seite und die
strukturierten Daten (schema.org `HairSalon`) für Google.

---

## 🔁 Vorlage für weitere Barbershops nutzen (10er-Liste)

Die Seite ist als **Template** gebaut. Für einen neuen Shop:

1. Diesen Ordner kopieren (oder Repo klonen).
2. **Nur `assets/js/config.js` anpassen** – Marke, Farben, Adresse, Telefon,
   Öffnungszeiten, Leistungen/Preise, Social-Links, Bilder, Testimonials.
3. Optional Domain in `config.js` (`siteUrl`), `robots.txt` und `sitemap.xml`
   eintragen.
4. Hochladen – fertig.

Nichts an `index.html`, `styles.css` oder `main.js` muss angefasst werden.

### Farben pro Shop ändern
In `config.js` unter `colors` (`gold`, `black`, `ink`, `cream` …). Die Werte
überschreiben automatisch die CSS-Variablen.

---

## ✅ Noch zu bestätigen (in `config.js` mit `// TODO` markiert)

- **Telefonnummer(n)** – aktuell zwei Nummern hinterlegt (Festnetz + Handy/WhatsApp).
- **Öffnungszeiten** – Quellen widersprüchlich, bitte prüfen.
- **Preise** – aktuell Richtwerte in CHF.
- **Instagram/TikTok** – aktuell leer (wird ausgeblendet), richtigen Account eintragen.
- **Echte Google-Bewertungen** – aktuell Platzhalter-Testimonials, durch echte ersetzen.
- **Auszeichnungen** – nur eintragen, wenn für diesen Shop verifiziert.

---

## 🖼️ Bilder

Die Bilder sind KI-generiert und werden aktuell direkt vom Higgsfield-CDN
geladen (siehe URLs in `config.js`). Zum **Lokalisieren** (empfohlen für
Langlebigkeit): Bilder herunterladen, in `assets/img/` ablegen und die `src`
in `config.js` auf z. B. `assets/img/hero.jpg` ändern.

---

## 🚀 Lokal ansehen

```bash
# einfachster Weg
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```
