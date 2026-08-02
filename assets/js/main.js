/* =========================================================
   main.js – rendert die Seite aus window.SHOP (config.js)
========================================================= */
(function () {
  "use strict";
  document.documentElement.classList.add("js");
  const S = window.SHOP || {};
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const stars = (n) => "★★★★★☆☆☆☆☆".slice(5 - Math.round(n), 10 - Math.round(n));

  /* ---------- Theme-Farben ---------- */
  if (S.colors) {
    const r = document.documentElement.style, c = S.colors;
    if (c.red) r.setProperty("--red", c.red);
    if (c.redDark) r.setProperty("--red-dark", c.redDark);
    if (c.ink) r.setProperty("--ink", c.ink);
    if (c.graphite) r.setProperty("--graphite", c.graphite);
    if (c.gray) r.setProperty("--gray", c.gray);
    if (c.bg) r.setProperty("--bg", c.bg);
  }

  /* ---------- SEO / Meta ---------- */
  document.title = `${S.brand} ${S.city ? "– " + S.city : ""} | Fades, Bart & Herrenschnitt`;
  setAttr('meta[name="description"]', "content", S.metaDescription);
  setAttr("#meta-og-title", "content", `${S.brand} ${S.city || ""}`.trim());
  setAttr("#meta-og-desc", "content", S.heroSub || S.metaDescription);
  if (S.siteUrl) setAttr("#meta-canonical", "href", S.siteUrl + "/");
  function setAttr(sel, a, v) { const el = $(sel); if (el && v) el.setAttribute(a, v); }
  function absUrl(p) { if (!p) return undefined; if (/^https?:\/\//i.test(p)) return p; return S.siteUrl ? S.siteUrl.replace(/\/$/, "") + "/" + p.replace(/^\//, "") : p; }

  /* ---------- Text-Bindings ---------- */
  $$('[data-bind="heroSub"]').forEach((el) => (el.textContent = S.heroSub || ""));
  $$('[data-bind="aboutTitle"]').forEach((el) => (el.textContent = S.about && S.about.title || el.textContent));
  $$('[data-bind="aboutText"]').forEach((el) => (el.textContent = S.about && S.about.text || ""));
  $$("[data-footer-legal]").forEach((el) => (el.textContent = (S.legalName || S.brand) + " · " + addressLine()));
  $$("[data-copy]").forEach((el) => (el.textContent = `© ${new Date().getFullYear()} ${S.brand}. Alle Rechte vorbehalten.`));
  $$("[data-price-note]").forEach((el) => (el.textContent = S.priceNote || ""));
  $$("[data-walkin]").forEach((el) => (el.textContent = S.walkIn || ""));

  function addressLine() { const a = S.address || {}; return `${a.street || ""}, ${a.zip || ""} ${a.city || ""}`.replace(/^, /, "").trim(); }

  /* ---------- Logo-Icon ---------- */
  if (S.logo) probeImage(S.logo, (ok) => { if (!ok) return; $$("[data-logo]").forEach((el) => {
    if (el.querySelector(".logo-mark")) return;
    const img = document.createElement("img"); img.className = "logo-mark"; img.src = S.logo; img.alt = S.logoAlt || S.brand;
    el.insertBefore(img, el.firstChild);
  }); });

  /* ---------- Hero-Bild (lokal bevorzugt, sonst KI-Fallback) ---------- */
  const heroBg = $("[data-hero-bg]");
  function setHero(src) { if (heroBg) heroBg.style.backgroundImage = `url("${src}")`; }
  (function loadHero() {
    const local = S.heroImageLocal, cdn = S.heroImage;
    if (local) probeImage(local, (ok) => { if (ok) setHero(local); else if (cdn) probeImage(cdn, (o2) => o2 && setHero(cdn)); });
    else if (cdn) probeImage(cdn, (ok) => ok && setHero(cdn));
    if (cdn || local) setAttr("#meta-og-image", "content", absUrl(local ? local : cdn));
  })();

  /* ---------- Hero-Titel: letztes Wort rot ---------- */
  const ht = $("[data-hero-title]");
  if (ht && S.tagline) {
    const w = S.tagline.trim().split(" ");
    ht.innerHTML = w.map((x, i) => (i === w.length - 1 ? `<span class="accent">${esc(x)}</span>` : esc(x))).join(" ");
  }

  /* ---------- Rating-Meta (Hero + Rezensionen) ---------- */
  if (S.rating) $$("[data-hero-rating]").forEach((el) => {
    el.innerHTML = `<span class="stars">${stars(S.rating.stars)}</span> <span>${S.rating.stars} / 5 · ${S.rating.count} ${esc(S.rating.source || "Google")}-Bewertungen</span>`;
  });

  /* ---------- Leistungen (Preisliste / Menü) ---------- */
  const servEl = $("[data-services]");
  if (servEl && S.services) servEl.innerHTML = S.services.map((s) => `
    <div class="menu-row" data-reveal>
      <div class="menu-info">
        <span class="menu-name">${esc(s.name)}</span>
        <span class="menu-desc">${esc(s.desc || "")}</span>
      </div>
      <span class="menu-price">${s.price ? "CHF " + esc(s.price) : "auf Anfrage"}</span>
    </div>`).join("");

  /* ---------- Ergebnisse: 2 Grayscale-Laufbänder ---------- */
  const galEl = $("[data-gallery]");
  if (galEl && S.gallery && S.gallery.length) {
    const card = (g) => `<figure class="gal-card"><img src="${esc(g.src)}" alt="${esc(g.alt || S.brand)}" loading="lazy" draggable="false" onerror="this.closest('.gal-card').style.display='none'">${g.label ? `<figcaption>${esc(g.label)}</figcaption>` : ""}</figure>`;
    const half = Math.ceil(S.gallery.length / 2);
    const rowA = S.gallery.slice(0, half), rowB = S.gallery.slice(half).concat(S.gallery.slice(0, half));
    const build = (arr) => { const html = arr.map(card).join(""); return html + html; };
    galEl.innerHTML =
      `<div class="gal-row r1">${build(rowA.length ? rowA : S.gallery)}</div>` +
      `<div class="gal-row r2">${build(rowB.length ? rowB : S.gallery)}</div>`;
  }

  /* ---------- Rezensionen: Karten-Grid ---------- */
  const revEl = $("[data-reviews]");
  if (revEl && S.testimonials && S.testimonials.length) {
    revEl.innerHTML = S.testimonials.map((t) => {
      const name = (t.author || "Google-Bewertung").trim();
      return `<blockquote class="rev" data-reveal>
        <div class="rev-head">
          <span class="rev-ava" aria-hidden="true">${esc(name[0] || "G")}</span>
          <div class="rev-id"><span class="t-author">${esc(name)}</span><span class="rev-src">Google-Bewertung</span></div>
          <span class="rev-stars">${stars(t.stars || 5)}</span>
        </div>
        <p>${esc(t.text)}</p>
      </blockquote>`;
    }).join("");
  }
  $$("[data-reviews-link]").forEach((el) => (el.href = S.mapsUrl || "#"));
  $$("[data-rating-badge]").forEach((el) => { if (S.rating) el.innerHTML = `<span class="stars">${stars(S.rating.stars)}</span> <strong>${S.rating.stars}</strong> / 5 · ${S.rating.count} ${esc(S.rating.source || "Google")}-Bewertungen`; });

  /* ---------- Über uns ---------- */
  const pts = $("[data-about-points]");
  if (pts && S.about && S.about.points) pts.innerHTML = S.about.points.map((p) => `<li>${esc(p)}</li>`).join("");
  const aboutImg = $("[data-about-img]");
  if (aboutImg) {
    const src = (S.about && S.about.image) || (S.gallery && S.gallery[0] && S.gallery[0].src);
    if (src) probeImage(src, (ok) => ok && (aboutImg.style.backgroundImage = `url("${src}")`));
  }

  /* ---------- Kontakt ---------- */
  const addr = addressLine();
  $$("[data-address]").forEach((el) => (el.textContent = addr));
  $$("[data-address-link]").forEach((el) => (el.href = S.mapsUrl || "#"));
  $$("[data-phone]").forEach((el) => { if (S.phoneDisplay) { el.textContent = S.phoneDisplay; el.href = "tel:" + (S.phoneLink || S.phoneDisplay); } });
  $$("[data-route]").forEach((el) => (el.href = S.routeUrl || S.mapsUrl || "#"));
  const phoneHref = S.phoneLink ? "tel:" + S.phoneLink : (S.phoneDisplay ? "tel:" + S.phoneDisplay : "#");
  $$("[data-cta-phone]").forEach((el) => (el.href = phoneHref));

  /* ---------- Termin-CTAs -> Online-Buchung (falls hinterlegt) ---------- */
  if (S.bookingUrl) $$("[data-cta]").forEach((el) => { el.href = S.bookingUrl; el.target = "_blank"; el.rel = "noopener"; });

  const wa = S.whatsapp ? "https://wa.me/" + S.whatsapp.replace(/[^\d]/g, "") : "";
  if (wa) { $$("[data-whatsapp]").forEach((el) => { el.textContent = S.whatsapp; el.href = wa; }); const row = $("[data-whatsapp-row]"); if (row) row.hidden = false; }
  if (S.instagram) { $$("[data-instagram]").forEach((el) => { el.href = S.instagram; el.textContent = S.instagramHandle || "Instagram"; }); const row = $("[data-instagram-row]"); if (row) row.hidden = false; }

  /* ---------- Öffnungszeiten ---------- */
  const todayIdx = (new Date().getDay() + 6) % 7;
  const hoursEl = $("[data-hours]");
  if (hoursEl && S.hours) hoursEl.innerHTML = S.hours.map((h, i) => `
    <tr class="${i === todayIdx ? "today" : ""}"><td>${esc(h.day)}</td><td>${h.closed ? "Geschlossen" : esc(h.open) + " – " + esc(h.close)}</td></tr>`).join("");
  const openEl = $("[data-open-now]");
  if (openEl && S.hours) {
    const now = new Date(), t = now.getHours() * 60 + now.getMinutes(), h = S.hours[todayIdx];
    let open = false;
    if (h && !h.closed) { const [oh, om] = h.open.split(":").map(Number), [ch, cm] = h.close.split(":").map(Number); open = t >= oh * 60 + om && t <= ch * 60 + cm; }
    openEl.textContent = open ? "● Jetzt geöffnet" : "● Aktuell geschlossen";
    openEl.classList.add(open ? "open" : "closed");
  }

  /* ---------- JSON-LD ---------- */
  (function jsonld() {
    const a = S.address || {}, dayMap = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const spec = (S.hours || []).map((h, i) => h.closed ? null : { "@type": "OpeningHoursSpecification", dayOfWeek: dayMap[i], opens: h.open, closes: h.close }).filter(Boolean);
    const data = {
      "@context": "https://schema.org", "@type": "HairSalon", name: S.brand, description: S.metaDescription,
      image: absUrl(S.heroImageLocal || S.heroImage), url: S.siteUrl || undefined, telephone: S.phoneLink || S.phoneDisplay, priceRange: "$$",
      address: { "@type": "PostalAddress", streetAddress: a.street, postalCode: a.zip, addressLocality: a.city, addressCountry: a.country || "CH" },
      geo: a.lat ? { "@type": "GeoCoordinates", latitude: a.lat, longitude: a.lng } : undefined,
      openingHoursSpecification: spec, sameAs: [S.instagram, S.tiktok, S.facebook].filter(Boolean),
      aggregateRating: S.rating ? { "@type": "AggregateRating", ratingValue: S.rating.stars, reviewCount: S.rating.count } : undefined,
      makesOffer: (S.services || []).map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name }, price: s.price || undefined, priceCurrency: "CHF" }))
    };
    const sc = document.createElement("script"); sc.type = "application/ld+json"; sc.textContent = JSON.stringify(data, (k, v) => v === undefined ? undefined : v);
    document.head.appendChild(sc);
  })();

  /* ---------- Header, Menü, Sticky-CTA ---------- */
  const header = $("#siteHeader"), sticky = $(".sticky-cta");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
    if (sticky) sticky.classList.toggle("show", window.scrollY > window.innerHeight * 0.7);
  };
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  const toggle = $(".nav-toggle");
  if (toggle) toggle.addEventListener("click", () => { const o = header.classList.toggle("menu-open"); toggle.setAttribute("aria-expanded", o); });
  $$(".nav a").forEach((a) => a.addEventListener("click", () => { header.classList.remove("menu-open"); if (toggle) toggle.setAttribute("aria-expanded", "false"); }));

  /* ---------- Hero-Parallax ---------- */
  if (heroBg && !reduce) window.addEventListener("scroll", () => {
    const y = window.scrollY; if (y < window.innerHeight) heroBg.style.transform = `scale(1.06) translateY(${y * 0.15}px)`;
  }, { passive: true });

  /* ---------- Reveal ---------- */
  $$(".section-head, .about-text, .hours-card, .contact-info").forEach((el) => el.setAttribute("data-reveal", ""));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
  requestAnimationFrame(() => $$("[data-reveal]").forEach((el, i) => { el.style.transitionDelay = ((i % 4) * 70) + "ms"; io.observe(el); }));

  /* ---------- Typewriter ---------- */
  function typeOn(el) {
    if (el.dataset.typed || el.children.length) return;
    el.dataset.typed = "1"; const full = el.textContent; if (reduce) return;
    el.textContent = ""; el.classList.add("typing");
    const speed = Math.max(18, Math.min(46, 720 / Math.max(full.length, 1)));
    let i = 0; (function step() { el.textContent = full.slice(0, i); if (i++ <= full.length) setTimeout(step, speed); else el.classList.remove("typing"); })();
  }
  const tio = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { typeOn(e.target); tio.unobserve(e.target); } }), { threshold: 0.6 });
  $$(".type").forEach((el) => tio.observe(el));

  /* ---------- Helper ---------- */
  function probeImage(src, cb) { const img = new Image(); img.onload = () => cb(true); img.onerror = () => cb(false); img.src = src; }
})();
