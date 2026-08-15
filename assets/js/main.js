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
  document.title = `${S.brand}${S.city ? " " + S.city : ""} | ${S.titleSuffix || "Übergänge, Bart & Herrenschnitt"}`;
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

  /* ---------- Hero-Wordmark (Text-Logo) / Hero-Logo (Bild) ---------- */
  const wmEl = $("[data-hero-wordmark]");
  const wmActive = !!(S.heroWordmark && (S.heroWordmark.before || S.heroWordmark.after || S.heroWordmark.name));
  if (wmEl) {
    const wm = S.heroWordmark;
    if (wmActive) {
      const before = wm.before != null ? wm.before : (wm.name || "");
      const after = wm.after || "";
      const ring = wm.photo
        ? `<span class="wm-o"><span class="wm-o-photo" style="background-image:url('${esc(wm.photo)}')"></span></span>`
        : (after ? `<span class="wm-o wm-o-plain">O</span>` : "");
      // Erster Buchstabe nach dem Foto-Kreis (das "V") wird zum Zoom-Ziel
      const afterHtml = after
        ? `<span class="wm-v">${esc(after.charAt(0))}</span>${esc(after.slice(1))}`
        : "";
      wmEl.innerHTML =
        `<span class="wm-name">${esc(before)}${ring}${afterHtml}</span>` +
        (wm.sub ? `<span class="wm-sub">${esc(wm.sub)}</span>` : "");
      wmEl.hidden = false;
    } else wmEl.remove();
  }
  const heroLogoEl = $("[data-hero-logo]");
  if (heroLogoEl) {
    if (S.heroLogo && !wmActive) {
      heroLogoEl.src = S.heroLogo; heroLogoEl.alt = S.logoAlt || S.brand; heroLogoEl.hidden = false;
    } else heroLogoEl.remove();
  }

  /* ---------- Hero-Bild (lokal bevorzugt, sonst KI-Fallback) ---------- */
  const heroBg = $("[data-hero-bg]");
  function setHero(src) { if (heroBg) heroBg.style.backgroundImage = `url("${src}")`; }
  (function loadHero() {
    const local = S.heroImageLocal, cdn = S.heroImage;
    if (local) probeImage(local, (ok) => { if (ok) setHero(local); else if (cdn) probeImage(cdn, (o2) => o2 && setHero(cdn)); });
    else if (cdn) probeImage(cdn, (ok) => ok && setHero(cdn));
    if (cdn || local) setAttr("#meta-og-image", "content", absUrl(local ? local : cdn));
  })();

  /* ---------- Hero-Video (Clips nacheinander abspielen, dann Loop) ---------- */
  (function heroVideo() {
    const vid = $("[data-hero-video]");
    const clips = S.heroVideos || [];
    if (!vid) return;
    if (!clips.length || reduce) { vid.remove(); return; }
    let i = 0;
    const play = () => { vid.src = clips[i]; vid.load(); const p = vid.play(); if (p && p.catch) p.catch(() => {}); };
    vid.muted = true; vid.playsInline = true;
    vid.addEventListener("canplay", () => vid.classList.add("on"));
    vid.addEventListener("ended", () => { i = (i + 1) % clips.length; play(); });
    vid.addEventListener("error", () => vid.classList.remove("on"));
    play();
  })();

  /* ---------- Hero-Titel: letztes Wort rot ---------- */
  const ht = $("[data-hero-title]");
  if (ht && S.tagline) {
    const w = S.tagline.trim().split(" ");
    ht.innerHTML = w.map((x, i) => (i === w.length - 1 ? `<span class="accent">${esc(x)}</span>` : esc(x))).join(" ");
  }

  /* ---------- Rating-Meta (Hero + Rezensionen) ---------- */
  if (S.rating) $$("[data-hero-rating]").forEach((el) => {
    el.innerHTML = `<span class="stars">${stars(S.rating.stars)}</span> <span>${S.rating.stars} / 5 · ${S.rating.count}+ ${esc(S.rating.source || "Google")} Bewertungen</span>`;
  });

  /* ---------- Leistungen (Preisliste / Menü) ---------- */
  const servEl = $("[data-services]");
  const clockSvg = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>`;
  if (servEl && S.services) servEl.innerHTML = S.services.map((s) => `
    <div class="menu-row" data-reveal>
      <div class="menu-info">
        <span class="menu-name">${esc(s.name)}</span>
        ${s.duration ? `<span class="menu-meta">${clockSvg}${esc(s.duration)} Min</span>` : (s.desc ? `<span class="menu-meta">${esc(s.desc)}</span>` : "")}
      </div>
      <span class="menu-price">${s.price ? "CHF " + esc(s.price) : "auf Anfrage"}</span>
    </div>`).join("");

  /* ---------- Ergebnisse: 2 Grayscale-Laufbänder ---------- */
  const galEl = $("[data-gallery]");
  if (galEl && S.gallery && S.gallery.length) {
    const card = (g) => `<figure class="gal-card"><img src="${esc(g.src)}" alt="${esc(g.alt || S.brand)}" loading="lazy" draggable="false" onerror="this.remove()">${g.label ? `<figcaption>${esc(g.label)}</figcaption>` : ""}</figure>`;
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
      const src = (S.rating && S.rating.source) || "Google";
      const name = (t.author || (src + "-Bewertung")).trim();
      return `<blockquote class="rev" data-reveal>
        <div class="rev-head">
          <div class="rev-id"><span class="t-author">${esc(name)}</span><span class="rev-src">${esc(src)} Bewertung</span></div>
          <span class="rev-stars">${stars(t.stars || 5)}</span>
        </div>
        <p>${esc(t.text)}</p>
      </blockquote>`;
    }).join("");
  }
  $$("[data-reviews-link]").forEach((el) => (el.href = S.reviewsUrl || S.mapsUrl || "#"));
  $$("[data-rating-badge]").forEach((el) => { if (S.rating) el.innerHTML = `<span class="stars">${stars(S.rating.stars)}</span> <strong>${S.rating.stars}</strong> / 5 · ${S.rating.count}+ ${esc(S.rating.source || "Google")} Bewertungen`; });

  /* ---------- Über uns ---------- */
  const pts = $("[data-about-points]");
  if (pts && S.about && S.about.points) pts.innerHTML = S.about.points.map((p) => `<li>${esc(p)}</li>`).join("");
  const aboutImg = $("[data-about-img]");
  if (aboutImg) {
    const aSlides = (S.about && S.about.slides) || [];
    if (aSlides.length > 1) {
      slideshow(aboutImg, aSlides, 3500, false);
    } else {
      const src = (S.about && S.about.image) || (S.gallery && S.gallery[0] && S.gallery[0].src);
      if (src) probeImage(src, (ok) => ok && (aboutImg.style.backgroundImage = `url("${src}")`));
    }
  }

  /* ---------- Salon-Slideshow (Kontakt) ---------- */
  const slidesEl = $("[data-slides]");
  if (slidesEl && S.slides && S.slides.length) slideshow(slidesEl, S.slides, 4000, true);

  /* Wiederverwendbare Slideshow (Crossfade + optionale Punkte) */
  function slideshow(el, urls, interval, withDots) {
    el.innerHTML =
      urls.map((u, i) => `<div class="slide${i === 0 ? " active" : ""}" style="background-image:url('${esc(u)}')"></div>`).join("") +
      (withDots ? `<div class="slide-dots">${urls.map((_, i) => `<button type="button" class="${i === 0 ? "on" : ""}" aria-label="Bild ${i + 1}"></button>`).join("")}</div>` : "");
    const slides = $$(".slide", el), dots = $$(".slide-dots button", el);
    if (slides.length < 2) return;
    let idx = 0, timer = null;
    const go = (n) => {
      slides[idx].classList.remove("active"); if (dots[idx]) dots[idx].classList.remove("on");
      idx = (n + slides.length) % slides.length;
      slides[idx].classList.add("active"); if (dots[idx]) dots[idx].classList.add("on");
    };
    const start = () => { if (reduce) return; stop(); timer = setInterval(() => go(idx + 1), interval); };
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
    dots.forEach((d, i) => d.addEventListener("click", () => { go(i); start(); }));
    start();
  }

  /* ---------- Kontakt ---------- */
  const addr = addressLine();
  $$("[data-address]").forEach((el) => (el.textContent = addr));
  $$("[data-address-link]").forEach((el) => (el.href = S.mapsUrl || "#"));
  $$("[data-phone]").forEach((el) => {
    if (S.phoneDisplay) { el.textContent = S.phoneDisplay; el.href = "tel:" + (S.phoneLink || S.phoneDisplay); }
    else { const li = el.closest(".contact-item"); if (li) li.hidden = true; }
  });
  $$("[data-route]").forEach((el) => (el.href = S.routeUrl || S.mapsUrl || "#"));
  const hasPhone = !!(S.phoneLink || S.phoneDisplay);
  const phoneHref = S.phoneLink ? "tel:" + S.phoneLink : (S.phoneDisplay ? "tel:" + S.phoneDisplay : (S.bookingUrl || "#"));
  $$("[data-cta-phone]").forEach((el) => {
    el.href = phoneHref;
    if (!hasPhone && S.bookingUrl) { el.textContent = "Online buchen"; el.target = "_blank"; el.rel = "noopener"; }
  });

  /* ---------- Termin-CTAs -> Online-Buchung (falls hinterlegt) ---------- */
  if (S.bookingUrl) $$("[data-cta]").forEach((el) => { el.href = S.bookingUrl; el.target = "_blank"; el.rel = "noopener"; });

  const wa = S.whatsapp ? "https://wa.me/" + S.whatsapp.replace(/[^\d]/g, "") : "";
  if (wa) { $$("[data-whatsapp]").forEach((el) => { el.textContent = S.whatsapp; el.href = wa; }); const row = $("[data-whatsapp-row]"); if (row) row.hidden = false; }
  if (S.instagram) { $$("[data-instagram]").forEach((el) => { el.href = S.instagram; el.textContent = S.instagramHandle || "Instagram"; }); const row = $("[data-instagram-row]"); if (row) row.hidden = false; }

  /* ---------- Öffnungszeiten ---------- */
  const todayIdx = (new Date().getDay() + 6) % 7;
  const hoursEl = $("[data-hours]");
  if (hoursEl && S.hours) hoursEl.innerHTML = S.hours.map((h, i) => `
    <tr class="${i === todayIdx ? "today" : ""}"><td>${esc(h.day)}</td><td>${h.closed ? "Geschlossen" : esc(h.open) + " bis " + esc(h.close)}</td></tr>`).join("");
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

  /* ---------- Header, Sticky-CTA & Parallax (gebündelt in einem Frame) ----------
     Ein einziger rAF-gedrosselter Handler statt mehrerer Scroll-Listener –
     verhindert ruckeliges Scrollen. */
  const header = $("#siteHeader"), sticky = $(".sticky-cta");
  let sTicking = false;
  const heroActions = $(".hero-actions"), heroWhite = $("[data-hero-white]"), heroPin = $("[data-hero-pin]");
  /* Scroll-Weg, über den der Zoom läuft (der Hero steht dabei still) */
  const zoomRange = () => Math.max(1, heroPin ? heroPin.offsetHeight - window.innerHeight : window.innerHeight * 0.85);

  /* Zoom-Ursprung exakt auf das "V" legen (in die weisse Fläche des Buchstabens),
     damit die Seite optisch in das V hineinfährt. */
  function setZoomOrigin() {
    if (!wmEl || wmEl.hidden) return;
    const v = $(".wm-v", wmEl);
    if (!v) return;
    const prev = wmEl.style.transform;
    wmEl.style.transform = "none"; // ungezoomt messen
    const w = wmEl.getBoundingClientRect(), r = v.getBoundingClientRect();
    wmEl.style.transform = prev;
    if (!r.width) return;
    // etwas unterhalb der Mitte: dort treffen sich die Striche des V (volles Weiss)
    wmEl.style.transformOrigin = (r.left - w.left + r.width / 2) + "px " + (r.top - w.top + r.height * 0.72) + "px";
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setZoomOrigin);
  window.addEventListener("resize", setZoomOrigin);

  const heroSection = $("#hero");
  const paint = (yIn) => {
    const y = yIn == null ? window.scrollY : yIn, vh = window.innerHeight;
    header.classList.toggle("scrolled", y > 60);
    // Sticky-CTA erst zeigen, wenn der Hero-Zoom durch ist
    if (sticky) sticky.classList.toggle("show", y > zoomRange() + vh * 0.2);

    /* In das "V" hineinzoomen, bis dessen Weiss den Bildschirm füllt */
    if (wmEl && !reduce && wmEl.classList.contains("ready")) {
      const p = Math.min(1, Math.max(0, y / zoomRange()));
      if (heroBg) heroBg.style.transform = `scale(${1.06 + p * 0.22})`;
      if (p < 1 || wmEl.dataset.zoomed !== "1") {
        // Hero steht still, die Wortmarke zoomt zentriert ins V
        wmEl.style.transform = `scale(${1 + p * p * 26})`;
        wmEl.dataset.zoomed = p >= 1 ? "1" : "0";
      }
      if (heroActions) heroActions.style.opacity = String(Math.max(0, 1 - p * 2.4));
      // Weiss-Übergang zur anschliessenden hellen Sektion
      if (heroWhite) heroWhite.style.opacity = String(Math.max(0, Math.min(1, (p - 0.55) / 0.35)));
    }
    sTicking = false;
  };
  paint();
  window.addEventListener("scroll", () => {
    // Wichtig: paint() gekapselt aufrufen – rAF würde sonst den Zeitstempel
    // als Scrollposition übergeben und den Zoom sofort auf Maximum setzen.
    if (!sTicking) { sTicking = true; requestAnimationFrame(() => paint()); }
  }, { passive: true });

  const toggle = $(".nav-toggle");
  if (toggle) toggle.addEventListener("click", () => { const o = header.classList.toggle("menu-open"); toggle.setAttribute("aria-expanded", o); });
  $$(".nav a").forEach((a) => a.addEventListener("click", () => { header.classList.remove("menu-open"); if (toggle) toggle.setAttribute("aria-expanded", "false"); }));

  /* ---------- Reveal (mit Richtungen & Staffelung) ---------- */
  $$(".section-head, .hours-card").forEach((el) => el.setAttribute("data-reveal", ""));
  $$(".about-media").forEach((el) => el.setAttribute("data-reveal", "left"));
  $$(".about-text").forEach((el) => el.setAttribute("data-reveal", "right"));
  $$(".contact-info").forEach((el) => el.setAttribute("data-reveal", "left"));
  $$(".salon-slideshow, .about-frame").forEach((el) => el.setAttribute("data-reveal", "scale"));
  $$(".price-note, .section-cta, .rating-badge").forEach((el) => el.setAttribute("data-reveal", "blur"));
  $$(".contact-list li, .checks li, .hours-table tr").forEach((el, i) => {
    el.setAttribute("data-reveal", "left"); el.style.transitionDelay = (i % 8) * 60 + "ms";
  });

  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  requestAnimationFrame(() => $$("[data-reveal]").forEach((el) => {
    if (!el.style.transitionDelay) el.style.transitionDelay = (Math.min(indexInParent(el), 5) * 80) + "ms";
    io.observe(el);
  }));
  function indexInParent(el) { return el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0; }

  /* ---------- Überschriften: Wörter gleiten hinter Maske hoch ---------- */
  $$(".type").forEach((el) => {
    if (el.children.length || reduce) return;
    el.innerHTML = el.textContent.trim().split(/\s+/)
      .map((w) => `<span class="w"><i>${esc(w)}</i></span>`).join(" ");
    $$(".w > i", el).forEach((i, n) => (i.style.transitionDelay = n * 85 + "ms"));
  });
  const tio = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); tio.unobserve(e.target); }
  }), { threshold: 0.35 });
  $$(".type").forEach((el) => tio.observe(el));

  /* ---------- Hero-Intro ----------
     Der Zoom ist erst scharf, wenn die Wortmarke "ready" ist. Damit direktes
     Scrollen nach dem Laden sofort zoomt (und die Einblendung nicht mitten im
     gescrollten Zustand nachläuft), wird das Intro dann sofort beendet. */
  let introTimer = null;
  function finishIntro() {
    if (!wmEl || wmEl.hidden || wmEl.classList.contains("ready")) return;
    clearTimeout(introTimer);
    wmEl.classList.add("in", "ready");
    setZoomOrigin();
    paint();
  }
  if (wmEl && !wmEl.hidden) {
    if (window.scrollY > 4 || reduce) {
      finishIntro();                       // Seite startet bereits gescrollt
    } else {
      requestAnimationFrame(() => setTimeout(() => {
        wmEl.classList.add("in");
        introTimer = setTimeout(() => { wmEl.classList.add("ready"); setZoomOrigin(); paint(); }, 1500);
      }, 120));
      // Sobald gescrollt wird, Intro sofort abschliessen und zoomen
      window.addEventListener("scroll", () => { if (window.scrollY > 4) finishIntro(); }, { passive: true });
    }
  }

  /* ---------- Smooth Scrolling (nur Mausrad) ----------
     Fängt Mausrad-Ereignisse ab und gleitet weich zum Ziel (Lenis-artig).
     Touch-Geräte lösen kein "wheel" aus und bleiben daher komplett nativ –
     wichtig, weil iOS requestAnimationFrame beim Scrollen pausiert. */
  let smoothPos = window.scrollY;
  if (!reduce) {
    let target = window.scrollY, running = false;
    const maxY = () => document.documentElement.scrollHeight - window.innerHeight;
    const jump = (v) => window.scrollTo({ top: v, behavior: "instant" }); // ohne CSS-smooth (sonst kriecht es)
    const EASE = 0.12;                                           // 0.08 = weicher, 0.18 = direkter
    const SPEED = 0.9;                                           // Radweg pro Notch

    window.addEventListener("wheel", (e) => {
      if (e.ctrlKey || e.defaultPrevented) return;               // Pinch-Zoom in Ruhe lassen
      if (e.target.closest && e.target.closest("[data-native-scroll]")) return;
      const d = (e.deltaMode === 1 ? e.deltaY * 18
              : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY) * SPEED;
      if (!running) target = window.scrollY;                     // beim Andocken auf echten Stand setzen
      const next = Math.max(0, Math.min(maxY(), target + d));
      if (next === target && !running) return;                   // am Rand: nativ lassen
      e.preventDefault();
      target = next;
      if (!running) { running = true; requestAnimationFrame(step); }
    }, { passive: false });

    // Sprünge von aussen (Ankerlinks, Tasten, Scrollbalken) übernehmen
    window.addEventListener("scroll", () => { if (!running) { target = window.scrollY; smoothPos = window.scrollY; } }, { passive: true });
    window.addEventListener("resize", () => { if (!running) target = window.scrollY; });

    function step() {
      const cur = window.scrollY, diff = target - cur;
      if (Math.abs(diff) < 0.5) { jump(target); smoothPos = target; running = false; return; }
      const d = diff * EASE;
      const nextPos = cur + (Math.abs(d) < 1 ? Math.sign(diff) : d); // Mindestschritt gegen Sub-Pixel-Hänger
      jump(nextPos); smoothPos = nextPos;
      requestAnimationFrame(step);
    }
  }

  /* ---------- Ankerlinks ----------
     Eigener Sprung mit Header-Abstand, damit er auch mit der Radglättung sauber
     zusammenspielt. */
  const HEADER_OFFSET = 76;
  function scrollToTarget(el) {
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    scrollToTarget(el);
    header.classList.remove("menu-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
  // Direktaufruf mit #anker (z. B. aus dem Impressum zurück auf einen Abschnitt)
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) window.addEventListener("load", () => setTimeout(() => scrollToTarget(el), 60));
  }

  /* ---------- Helper ---------- */
  function probeImage(src, cb) { const img = new Image(); img.onload = () => cb(true); img.onerror = () => cb(false); img.src = src; }
})();
