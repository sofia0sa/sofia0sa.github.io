(function () {
  var FOOTER_CONTAINER_SELECTOR = "#site-footer";
  var FALLBACK_FOOTER_HTML = [
    '<footer class="bg-neutral-900 dark:bg-[#131313] w-full py-24 px-12 flex flex-col md:flex-row justify-between items-end w-full">',
    '  <div class="mb-12 md:mb-0">',
    '    <div class="flex flex-wrap gap-x-7 gap-y-3">',
    '      <a class="text-white/40 font-sans tracking-widest text-[10px] uppercase Inter hover:text-white transition-colors duration-300" href="https://open.spotify.com/intl-pt/artist/3aW6RxzukHbcKH5Y7z2bfB" target="_blank" rel="noopener">Spotify</a>',
    '      <a class="text-white/40 font-sans tracking-widest text-[10px] uppercase Inter hover:text-white transition-colors duration-300" href="https://www.youtube.com/@sofiasaoficial" target="_blank" rel="noopener">YouTube</a>',
    '      <a class="text-white/40 font-sans tracking-widest text-[10px] uppercase Inter hover:text-white transition-colors duration-300" href="https://www.instagram.com/sofiasa______/" target="_blank" rel="noopener">Instagram</a>',
    '      <a class="text-white/40 font-sans tracking-widest text-[10px] uppercase Inter hover:text-white transition-colors duration-300" href="https://www.tiktok.com/@ssofiasa" target="_blank" rel="noopener">TikTok</a>',
    '      <a class="text-white/40 font-sans tracking-widest text-[10px] uppercase Inter hover:text-white transition-colors duration-300" href="https://www.facebook.com/oficialsofiasa" target="_blank" rel="noopener">Facebook</a>',
    '    </div>',
    '  </div>',
    '  <div class="text-right">',
    '    <p class="font-sans tracking-widest text-[10px] uppercase Inter text-white/40">© 2026 SOFIA SÁ | ALL RIGHTS RESERVED</p>',
    '  </div>',
    '</footer>'
  ].join("\n");

  function initFooter() {
    var container = document.querySelector(FOOTER_CONTAINER_SELECTOR);
    if (!container) {
      return;
    }

    function renderFooter(html) {
      container.innerHTML = html;
    }

    fetch("./partials/footer.html")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load footer partial");
        }
        return response.text();
      })
      .then(function (html) {
        renderFooter(html);
      })
      .catch(function () {
        renderFooter(FALLBACK_FOOTER_HTML);
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFooter);
  } else {
    initFooter();
  }
})();
