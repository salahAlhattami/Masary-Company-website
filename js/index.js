/* ─────────────────────────────────────────────
   MASARY — index.js
   Text lives INSIDE each .hero-slide, so toggling
   .active on the slide handles BOTH bg + text.
   ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* WA link */
  const ctaWA = document.getElementById('ctaWA');
  if (ctaWA) ctaWA.href = WA_LINK;

  /* Elements */
  const slides    = document.querySelectorAll('.hero-slide');
  const dotsWrap  = document.getElementById('heroDots');
  const btnPrev   = document.getElementById('heroPrev');
  const btnNext   = document.getElementById('heroNext');
  const progressEl= document.getElementById('heroProgress');

  const total = slides.length;
  if (!total) return;

  let current = 0;
  let timer   = null;

  /* Build dots */
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'الشريحة ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  }

  function goTo(n) {
    const next = ((n % total) + total) % total;

    /* Remove active — hides BOTH background SVG and its text together */
    slides[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');

    /* Add active — shows BOTH background and text together */
    current = next;
    slides[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');

    startProgress();
    resetTimer();
  }

  function startProgress() {
    if (!progressEl) return;
    progressEl.style.transition = 'none';
    progressEl.style.width = '0%';
    void progressEl.offsetWidth;
    progressEl.style.transition = 'width 5s linear';
    progressEl.style.width = '100%';
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  /* Arrow buttons */
  btnPrev?.addEventListener('click', () => goTo(current - 1));
  btnNext?.addEventListener('click', () => goTo(current + 1));

  /* Touch swipe */
  let tx = 0;
  const heroEl = document.getElementById('hero');
  heroEl?.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  heroEl?.addEventListener('touchend',   e => {
    const d = tx - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) goTo(d > 0 ? current + 1 : current - 1);
  }, { passive: true });

  /* Services tabs */
  document.querySelectorAll('.srv-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const t = tab.dataset.target;
      document.querySelectorAll('.srv-tab, .srv-panel').forEach(el => el.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(t)?.classList.add('active');
    });
  });

  /* Start */
  startProgress();
  resetTimer();
});
