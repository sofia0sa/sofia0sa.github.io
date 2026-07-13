/* ============================================================
   SOFIA SÁ — Interações partilhadas
   - Reveal on scroll (.reveal)
   - Lightbox de vídeo (YouTube) para .video-card[data-youtube-id]
   - Lightbox de fotografia para .photo-card
   - Menu mobile + fecho de dropdown
   Usa delegação de eventos → funciona com a navbar injetada async.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Reveal on scroll ---------- */
  function initReveal(root) {
    var els = (root || document).querySelectorAll(".reveal:not([data-reveal-init]), .photo-card:not([data-reveal-init]), .hero-v2-line:not([data-reveal-init])");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var delay = e.target.getAttribute("data-reveal-delay");
          if (delay) e.target.style.transitionDelay = delay + "ms";
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { el.setAttribute("data-reveal-init", "1"); io.observe(el); });
  }

  /* ---------- Lightbox (partilhado) ---------- */
  var lb, lbBody;
  function ensureLightbox() {
    if (lb) return;
    lb = document.createElement("div");
    lb.className = "om-lightbox";
    lb.innerHTML =
      '<div class="om-lightbox-inner">' +
      '  <button class="om-lightbox-close" type="button" aria-label="Fechar">' +
      '    <span class="material-symbols-outlined">close</span> Fechar' +
      '  </button>' +
      '  <div class="om-lightbox-body"></div>' +
      '</div>';
    document.body.appendChild(lb);
    lbBody = lb.querySelector(".om-lightbox-body");
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.closest(".om-lightbox-close")) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }
  function openVideo(id, title) {
    ensureLightbox();
    lbBody.innerHTML =
      '<div class="om-lightbox-video"><iframe src="https://www.youtube.com/embed/' + id +
      '?autoplay=1&rel=0" title="' + (title || "Vídeo") +
      '" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>';
    show();
  }
  function openLocalVideo(src, title) {
    ensureLightbox();
    lbBody.innerHTML =
      '<div class="om-lightbox-video"><video src="' + src +
      '" controls autoplay playsinline title="' + (title || "Vídeo") + '"></video></div>';
    show();
  }
  function openImage(src, alt) {
    ensureLightbox();
    lbBody.innerHTML = '<img class="om-lightbox-img" src="' + src + '" alt="' + (alt || "") + '">';
    show();
  }
  function openPdf(src, title) {
    ensureLightbox();
    lbBody.innerHTML =
      '<div class="om-lightbox-pdf">' +
      '<a class="om-lightbox-pdf-open" href="' + src + '" target="_blank" rel="noopener">Abrir em nova aba ↗</a>' +
      '<iframe src="' + src + '" title="' + (title || "Documento") + '"></iframe>' +
      '</div>';
    show();
  }
  function openNote(msg) {
    ensureLightbox();
    lbBody.innerHTML = '<div class="om-lightbox-note">' + msg + '</div>';
    show();
  }
  function show() { requestAnimationFrame(function () { lb.classList.add("open"); }); document.body.style.overflow = "hidden"; }
  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(function () { if (lbBody) lbBody.innerHTML = ""; }, 300);
  }

  /* ---------- Carrossel automático (CVs) ---------- */
  function initCvMarquee(root) {
    var containers = (root || document).querySelectorAll(".cv-scroll:not([data-marquee-init])");
    containers.forEach(function (container) {
      container.setAttribute("data-marquee-init", "1");
      var cards = Array.prototype.slice.call(container.children);
      if (!cards.length) return;

      var track = document.createElement("div");
      track.className = "cv-track";
      cards.forEach(function (card) { track.appendChild(card); });
      container.innerHTML = "";
      container.appendChild(track);

      var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion || cards.length < 2) {
        container.classList.add("cv-scroll-manual");
        return;
      }

      /* Duplica o conjunto para um loop contínuo (translateX -50%) */
      cards.forEach(function (card) {
        var clone = card.cloneNode(true);
        clone.classList.remove("reveal");
        clone.removeAttribute("data-reveal-delay");
        clone.setAttribute("aria-hidden", "true");
        clone.setAttribute("tabindex", "-1");
        track.appendChild(clone);
      });

      var singleSetWidth = track.scrollWidth / 2;
      var pxPerSecond = 40;
      var duration = Math.max(singleSetWidth / pxPerSecond, 8);
      track.style.setProperty("--cv-marquee-duration", duration + "s");
      track.classList.add("cv-marquee-run");

      var resumeTimer;
      function pause() { track.classList.add("cv-paused"); }
      function resume() { track.classList.remove("cv-paused"); }
      container.addEventListener("mouseenter", pause);
      container.addEventListener("mouseleave", resume);
      container.addEventListener("focusin", pause);
      container.addEventListener("focusout", resume);
      container.addEventListener("touchstart", function () {
        pause();
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(resume, 3500);
      }, { passive: true });
    });
  }

  /* Auto-poster do YouTube quando não há data-poster */
  function hydratePosters(root) {
    var cards = (root || document).querySelectorAll(".video-card[data-youtube-id]:not([data-poster-init])");
    cards.forEach(function (card) {
      card.setAttribute("data-poster-init", "1");
      var id = card.getAttribute("data-youtube-id");
      var img = card.querySelector(".video-poster");
      if (id && img && !img.getAttribute("src")) {
        img.src = "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
      }
    });
  }

  /* ---------- Delegação de cliques ---------- */
  document.addEventListener("click", function (e) {
    var vcard = e.target.closest(".video-card");
    if (vcard) {
      var id = vcard.getAttribute("data-youtube-id");
      var localSrc = vcard.getAttribute("data-video-src");
      var title = vcard.getAttribute("data-title") || "";
      if (id) { e.preventDefault(); openVideo(id, title); }
      else if (localSrc) { e.preventDefault(); openLocalVideo(localSrc, title); }
      else { e.preventDefault(); openNote("Este vídeo será adicionado em breve."); }
      return;
    }
    var pcard = e.target.closest(".photo-card");
    if (pcard) {
      var pimg = pcard.querySelector("img");
      if (pimg) { openImage(pimg.getAttribute("src"), pimg.getAttribute("alt") || ""); }
      return;
    }
    var docLink = e.target.closest('a[href$=".pdf"], a[href$=".png"], a[href$=".jpg"], a[href$=".jpeg"], a[href$=".webp"]');
    if (docLink) {
      e.preventDefault();
      var href = docLink.getAttribute("href") || "";
      var ext = href.split(".").pop().toLowerCase();
      var dipTitle = docLink.querySelector(".dip-title, h4");
      if (ext === "pdf") {
        openPdf(href, dipTitle ? dipTitle.textContent.trim() : docLink.textContent.trim());
      } else {
        openImage(href, dipTitle ? dipTitle.textContent.trim() : "");
      }
      return;
    }
    /* Menu mobile */
    var burger = e.target.closest(".site-nav-menu-btn");
    if (burger) { toggleMobile(); return; }
    var mlink = e.target.closest(".site-mobile-link, .site-mobile-sub a");
    if (mlink && !mlink.hasAttribute("data-noclose")) { closeMobile(); }
  });

  function toggleMobile() {
    var m = document.querySelector(".site-mobile-menu");
    if (!m) return;
    m.classList.toggle("open");
    document.body.style.overflow = m.classList.contains("open") ? "hidden" : "";
  }
  function closeMobile() {
    var m = document.querySelector(".site-mobile-menu");
    if (m) { m.classList.remove("open"); document.body.style.overflow = ""; }
  }

  /* ---------- Hero: palavra rotativa (Música / Dança / Teatro...) ---------- */
  function initHeroRoleWord() {
    var el = document.getElementById("heroRoleWord");
    if (!el || el.getAttribute("data-rotate-init")) return;
    el.setAttribute("data-rotate-init", "1");
    var words = ["Música", "Dança", "Teatro", "Fotografia", "Modelo", "Engenharia"];
    var i = 0;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setInterval(function () {
      el.classList.add("is-swapping");
      setTimeout(function () {
        i = (i + 1) % words.length;
        el.textContent = words[i];
        el.classList.remove("is-swapping");
      }, 450);
    }, 2400);
  }

  /* ---------- Boot + re-scan (navbar injetada async) ---------- */
  function boot() { initReveal(document); hydratePosters(document); initHeroRoleWord(); initCvMarquee(document); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  /* Observa injeções tardias (navbar/footer) para religar reveal/posters */
  var mo = new MutationObserver(function () { initReveal(document); hydratePosters(document); initCvMarquee(document); });
  mo.observe(document.body, { childList: true, subtree: true });

  /* API mínima (caso alguma página queira abrir manualmente) */
  window.SofiaSite = { openVideo: openVideo, openImage: openImage };
})();
