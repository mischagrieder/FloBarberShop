/* =========================================================
   main.js – rendert die Seite aus window.SHOP (config.js)
========================================================= */
(function () {
  "use strict";
  document.documentElement.classList.add("js"); // aktiviert Reveal-Animationen
  const S = window.SHOP || {};
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* ---------- Theme-Farben aus Config ---------- */
  if (S.colors) {
    const r = document.documentElement.style;
    if (S.colors.gold) r.setProperty("--gold", S.colors.gold);
    if (S.colors.goldSoft) r.setProperty("--gold-soft", S.colors.goldSoft);
    if (S.colors.blue) r.setProperty("--blue", S.colors.blue);
    if (S.colors.black) r.setProperty("--black", S.colors.black);
    if (S.colors.ink) r.setProperty("--ink", S.colors.ink);
    if (S.colors.cream) r.setProperty("--cream", S.colors.cream);
  }

  const stars = (n) => "★★★★★☆☆☆☆☆".slice(5 - Math.round(n), 10 - Math.round(n));

  /* ---------- Kopf-Bindings & SEO ---------- */
  const fullTitle = `${S.brand} ${S.city ? "– " + S.city : ""} | Fades, Bart & Herrenschnitt`;
  document.title = fullTitle;
  setMeta('meta[name="description"]', "content", S.metaDescription);
  setMeta("#meta-og-title", "content", `${S.brand} ${S.city || ""}`.trim());
  setMeta("#meta-og-desc", "content", S.tagline);
  if (S.siteUrl) setMeta("#meta-canonical", "href", S.siteUrl + "/");
  if (S.heroImage) setMeta("#meta-og-image", "content", absUrl(S.heroImage));

  // Macht relative Pfade absolut (für SEO); absolute URLs bleiben unverändert
  function absUrl(p) {
    if (!p) return undefined;
    if (/^https?:\/\//i.test(p)) return p;
    return S.siteUrl ? S.siteUrl.replace(/\/$/, "") + "/" + p.replace(/^\//, "") : p;
  }

  function setMeta(sel, attr, val) {
    const el = $(sel);
    if (el && val) el.setAttribute(attr, val);
  }

  // Text-Bindings
  bindText("brand", () => S.brand, true);
  bindText("tagline", () => S.tagline);
  bindText("cityEyebrow", () => `Barbershop · ${S.city || ""}`);
  bindText("heroSub", () => S.about && S.about.text ? firstSentence(S.about.text) : S.metaDescription);
  bindText("aboutTitle", () => S.about && S.about.title);
  bindText("aboutText", () => S.about && S.about.text);
  bindText("footerAddress", () => addressLine());
  bindText("priceNote", () => S.priceNote, false, "[data-price-note]");
  bindText("copy", () => `© ${new Date().getFullYear()} ${S.brand}. Alle Rechte vorbehalten.`, false, "[data-copy]");

  function bindText(key, fn, isBrand, selOverride) {
    const val = fn();
    const sel = selOverride || `[data-bind="${key}"]`;
    $$(sel).forEach((el) => {
      if (isBrand) return; // Brand-Logo bleibt als HTML (FLO<span>Barber</span>)
      if (val != null) el.textContent = val;
    });
  }
  function firstSentence(t) {
    const m = String(t).match(/^.*?[.!?](\s|$)/);
    return m ? m[0].trim() : t;
  }
  function addressLine() {
    const a = S.address || {};
    return `${a.street || ""}, ${a.zip || ""} ${a.city || ""}`.trim().replace(/^,/, "");
  }

  /* ---------- Logo-Icon (wird dem Schriftzug vorangestellt, wenn geladen) ---------- */
  if (S.logo) {
    probeImage(S.logo, (ok) => {
      if (!ok) return;
      $$("[data-logo]").forEach((el) => {
        if (el.querySelector(".logo-mark")) return;
        const img = document.createElement("img");
        img.className = "logo-mark";
        img.src = S.logo;
        img.alt = S.logoAlt || S.brand;
        el.insertBefore(img, el.firstChild);
      });
    });
  }

  /* ---------- Google-Reviews-Link ---------- */
  $$("[data-reviews-link]").forEach((el) => (el.href = S.mapsUrl || "#"));

  /* ---------- Hero-Bild ---------- */
  if (S.heroImage) {
    const bg = $("[data-hero-bg]");
    if (bg) probeImage(S.heroImage, (ok) => {
      if (ok) bg.style.backgroundImage =
        `linear-gradient(135deg,rgba(12,12,13,.2),rgba(12,12,13,.55)),url("${S.heroImage}")`;
    });
  }
  // Hero-Titel: letztes Wort golden hervorheben
  const ht = $(".hero-title");
  if (ht && S.tagline) {
    const words = S.tagline.split(" ");
    ht.innerHTML = words.map((w, i) =>
      i >= words.length - 2 ? `<span class="gold">${esc(w)}</span>` : esc(w)
    ).join(" ");
  }

  /* ---------- Rating (Hero + Bewertungen) ---------- */
  if (S.rating) {
    $$("[data-rating]").forEach((el) => {
      const big = el.classList.contains("rating-big");
      el.innerHTML = big
        ? `<span class="stars">${stars(S.rating.stars)}</span>
           ${S.rating.stars} / 5 · ${S.rating.count} ${esc(S.rating.source || "")}-Bewertungen`
        : `<span class="stars">${stars(S.rating.stars)}</span>
           <span>${S.rating.stars}/5 · ${S.rating.count} Bewertungen</span>`;
    });
  }

  /* ---------- Trust-Badges ---------- */
  const badgesEl = $("[data-badges]");
  if (badgesEl && S.badges) {
    badgesEl.innerHTML = S.badges
      .map((b) => `<span class="trust-item">${esc(b)}</span>`).join("");
  }

  /* ---------- Leistungen ---------- */
  const servEl = $("[data-services]");
  if (servEl && S.services) {
    servEl.innerHTML = S.services.map((s) => `
      <article class="service-card" data-reveal>
        <div class="service-head">
          <h3 class="service-name">${esc(s.name)}</h3>
          <span class="service-price">${s.price ? "CHF " + esc(s.price) : "auf Anfrage"}</span>
        </div>
        <p class="service-desc">${esc(s.desc || "")}</p>
      </article>`).join("");
  }

  /* ---------- About-Punkte + Bild ---------- */
  const pts = $("[data-about-points]");
  if (pts && S.about && S.about.points) {
    pts.innerHTML = S.about.points.map((p) => `<li>${esc(p)}</li>`).join("");
  }
  const aboutImg = $("[data-about-img]");
  if (aboutImg && S.gallery && S.gallery[0]) {
    probeImage(S.gallery[0].src, (ok) => {
      if (ok) aboutImg.style.backgroundImage = `url("${S.gallery[0].src}")`;
    });
  }

  /* ---------- Ergebnisse: Curved Gallery (ziehbar) ---------- */
  const cgalEl = $("[data-cgal]");
  if (cgalEl && S.gallery && S.gallery.length) buildCurvedGallery(cgalEl, S.gallery);

  function buildCurvedGallery(root, items) {
    const n = items.length;
    const els = items.map((g) => {
      const d = document.createElement("div");
      d.className = "cgal-item";
      d.innerHTML =
        `<figure class="cgal-figure">
           <img src="${esc(g.src)}" alt="${esc(g.alt || S.brand)}" draggable="false" loading="lazy" onerror="this.style.opacity=0">
           ${g.label ? `<figcaption class="cgal-cap">${esc(g.label)}</figcaption>` : ""}
         </figure>`;
      root.appendChild(d);
      return d;
    });

    let SPACING = 0, total = 0;
    const W = () => root.clientWidth || 1;
    function measure() {
      const w = els[0].offsetWidth || 240;
      SPACING = w + Math.max(30, w * 0.24);
      total = n * SPACING;
    }
    measure();

    let pos = 0, vel = 0, dragging = false, hovering = false, lastX = 0;
    let auto = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.18;

    function render() {
      const spread = Math.max(W() * 0.6, 320);
      for (let i = 0; i < n; i++) {
        let x = i * SPACING - pos;
        x = ((x + total / 2) % total + total) % total - total / 2; // Endlos-Schleife
        const norm = Math.max(-1.5, Math.min(1.5, x / spread));
        const rot = -norm * 42;
        const tz = -Math.abs(norm) * 300;
        const sc = 1 - Math.min(0.3, Math.abs(norm) * 0.2);
        const el = els[i];
        el.style.transform =
          `translate(-50%,-50%) translateX(${x.toFixed(1)}px) rotateY(${rot.toFixed(2)}deg) translateZ(${tz.toFixed(1)}px) scale(${sc.toFixed(3)})`;
        el.style.zIndex = String(2000 - Math.round(Math.abs(x)));
        el.style.opacity = Math.abs(x) > W() * 0.85 ? "0" : "1";
      }
    }
    function frame() {
      if (!dragging) {
        if (Math.abs(vel) > 0.05) { pos += vel; vel *= 0.94; }
        else if (!hovering) { pos += auto; }
      }
      render();
      requestAnimationFrame(frame);
    }

    root.addEventListener("pointerdown", (e) => {
      dragging = true; root.classList.add("grabbing");
      lastX = e.clientX; vel = 0;
      try { root.setPointerCapture(e.pointerId); } catch (_) {}
    });
    root.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX; lastX = e.clientX;
      pos -= dx; vel = -dx;
    });
    const end = () => { dragging = false; root.classList.remove("grabbing"); };
    root.addEventListener("pointerup", end);
    root.addEventListener("pointercancel", end);
    root.addEventListener("pointerenter", () => (hovering = true));
    root.addEventListener("pointerleave", () => { hovering = false; if (dragging) end(); });
    window.addEventListener("resize", () => { measure(); render(); });

    requestAnimationFrame(frame);
  }

  /* ---------- Rezensionen (gestapelte Karten) ---------- */
  const tEl = $("[data-testimonials]");
  if (tEl && S.testimonials) {
    tEl.innerHTML = S.testimonials.map((t, i) => `
      <blockquote class="review-card" style="--i:${i};z-index:${i + 1}">
        <div class="t-stars">${stars(t.stars || 5)}</div>
        <p>„${esc(t.text)}"</p>
        <div class="t-author">${esc(t.author || "")}</div>
      </blockquote>`).join("");
  }

  /* ---------- Kontakt-Bindings ---------- */
  const addr = addressLine();
  $$("[data-address]").forEach((el) => (el.textContent = addr));
  $$("[data-address-link]").forEach((el) => (el.href = S.mapsUrl || "#"));
  $$("[data-phone]").forEach((el) => {
    if (S.phoneDisplay) { el.textContent = S.phoneDisplay; el.href = "tel:" + (S.phoneLink || S.phoneDisplay); }
  });

  // WhatsApp
  const waLink = S.whatsapp ? "https://wa.me/" + S.whatsapp.replace(/[^\d]/g, "") : "";
  if (waLink) {
    $$("[data-whatsapp]").forEach((el) => { el.textContent = S.whatsapp; el.href = waLink; });
    const row = $("[data-whatsapp-row]"); if (row) row.hidden = false;
    const wa = $("[data-cta-whatsapp]"); if (wa) { wa.hidden = false; wa.href = waLink; }
  }

  // Instagram (nur wenn gesetzt – sonst Elemente ausblenden)
  $$("[data-instagram]").forEach((el) => {
    if (S.instagram) { el.href = S.instagram; el.textContent = el.textContent.trim() || (S.instagramHandle || "Instagram"); if (el.classList.contains("btn")) el.textContent = "Mehr auf Instagram"; if (el.matches("[data-bind], .contact-item a")) el.textContent = S.instagramHandle || "Instagram"; }
    else { const li = el.closest(".contact-item"); if (li) li.hidden = true; else el.style.display = "none"; }
  });

  // Haupt-CTA (Anrufen / WhatsApp / Buchungslink)
  const phoneHref = S.phoneLink ? "tel:" + S.phoneLink : (S.phoneDisplay ? "tel:" + S.phoneDisplay : "#");
  $$("[data-cta-phone]").forEach((el) => (el.href = phoneHref));

  /* ---------- Öffnungszeiten ---------- */
  const hoursEl = $("[data-hours]");
  const todayIdx = (new Date().getDay() + 6) % 7; // Mo=0 ... So=6
  if (hoursEl && S.hours) {
    hoursEl.innerHTML = S.hours.map((h, i) => `
      <tr class="${i === todayIdx ? "today" : ""}">
        <td>${esc(h.day)}</td>
        <td>${h.closed ? "Geschlossen" : esc(h.open) + " – " + esc(h.close)}</td>
      </tr>`).join("");
  }
  // "Jetzt geöffnet"-Status
  const openEl = $("[data-open-now]");
  if (openEl && S.hours) {
    const now = new Date();
    const t = now.getHours() * 60 + now.getMinutes();
    const h = S.hours[todayIdx];
    let open = false;
    if (h && !h.closed) {
      const [oh, om] = h.open.split(":").map(Number);
      const [ch, cm] = h.close.split(":").map(Number);
      open = t >= oh * 60 + om && t <= ch * 60 + cm;
    }
    openEl.textContent = open ? "● Jetzt geöffnet" : "● Aktuell geschlossen";
    openEl.classList.add(open ? "open" : "closed");
  }

  /* ---------- Karte ---------- */
  const mapEl = $("[data-map]");
  if (mapEl && S.address) {
    const q = encodeURIComponent(`${S.brand}, ${addr}`);
    mapEl.src = `https://www.google.com/maps?q=${q}&output=embed`;
  }

  /* ---------- JSON-LD (LocalBusiness / HairSalon) ---------- */
  injectJsonLd();
  function injectJsonLd() {
    const a = S.address || {};
    const dayMap = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const spec = (S.hours || []).filter((h) => !h.closed).map((h, i) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[S.hours.indexOf(h)],
      opens: h.open, closes: h.close
    }));
    const data = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      name: S.brand,
      description: S.metaDescription,
      image: S.heroImage ? absUrl(S.heroImage) : undefined,
      url: S.siteUrl || undefined,
      telephone: S.phoneLink || S.phoneDisplay,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: a.street, postalCode: a.zip,
        addressLocality: a.city, addressCountry: a.country || "CH"
      },
      geo: a.lat ? { "@type": "GeoCoordinates", latitude: a.lat, longitude: a.lng } : undefined,
      openingHoursSpecification: spec,
      sameAs: [S.instagram, S.tiktok, S.facebook].filter(Boolean),
      aggregateRating: S.rating ? {
        "@type": "AggregateRating",
        ratingValue: S.rating.stars, reviewCount: S.rating.count
      } : undefined,
      makesOffer: (S.services || []).map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name },
        price: s.price || undefined, priceCurrency: "CHF"
      }))
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data, (k, v) => v === undefined ? undefined : v);
    document.head.appendChild(script);
  }

  /* ---------- Header scroll + Mobile-Menü ---------- */
  const header = $("#siteHeader");
  const stickyCta = $(".sticky-cta");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
    // Sticky-CTA erst einblenden, wenn man vom Hero weggescrollt ist
    if (stickyCta) stickyCta.classList.toggle("show", window.scrollY > window.innerHeight * 0.75);
  };
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = $(".nav-toggle");
  if (toggle) toggle.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$(".nav a").forEach((a) => a.addEventListener("click", () => {
    header.classList.remove("menu-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }));

  /* ---------- Reveal on scroll ---------- */
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$(".section-head, .about-text, .contact-hours").forEach((el) => el.setAttribute("data-reveal", ""));
  requestAnimationFrame(() => $$("[data-reveal]").forEach((el) => io.observe(el)));

  /* ---------- Typewriter: Titel schreiben sich selbst ---------- */
  function typeOn(el) {
    if (el.dataset.typed || el.children.length) return; // HTML-Titel (z.B. Hero mit Gold-Span) auslassen
    el.dataset.typed = "1";
    const full = el.textContent;
    if (reduce) return;
    el.textContent = "";
    el.classList.add("typing");
    const speed = Math.max(16, Math.min(42, 700 / Math.max(full.length, 1)));
    let i = 0;
    (function step() {
      el.textContent = full.slice(0, i);
      if (i++ <= full.length) setTimeout(step, speed);
      else el.classList.remove("typing");
    })();
  }
  const tio = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { typeOn(e.target); tio.unobserve(e.target); } });
  }, { threshold: 0.6 });
  $$(".type").forEach((el) => tio.observe(el));


  /* ---------- Helper: prüft ob ein Bild existiert ---------- */
  function probeImage(src, cb) {
    const img = new Image();
    img.onload = () => cb(true);
    img.onerror = () => cb(false);
    img.src = src;
  }
})();
