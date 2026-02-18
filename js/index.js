/* ─────────────────────────────────────────────────────────────
   MASARY — Homepage JS
   ───────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // Set WA link
  const ctaWA = document.getElementById('ctaWA');
  if (ctaWA) ctaWA.href = WA_LINK;

  // ── Hero Slider ──
  const slides   = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.getElementById('heroDots');
  const progress = document.getElementById('heroProgress');
  const btnPrev  = document.getElementById('heroPrev');
  const btnNext  = document.getElementById('heroNext');
  let current    = 0;
  let timer      = null;

  if (!slides.length) return;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'الشريحة ' + (i + 1));
    dot.addEventListener('click', () => { goTo(i); restartTimer(); });
    dotsWrap.appendChild(dot);
  });

  function setProgress() {
    if (!progress) return;
    progress.style.transition = 'none';
    progress.style.width = '0%';
    // Force reflow
    void progress.offsetWidth;
    progress.style.transition = 'width 5s linear';
    progress.style.width = '100%';
  }

  function goTo(n) {
    slides[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = ((n % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
    setProgress();
  }

  function restartTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  // Button listeners
  if (btnNext) btnNext.addEventListener('click', () => { goTo(current + 1); restartTimer(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { goTo(current - 1); restartTimer(); });

  // Start auto-play
  setProgress();
  restartTimer();

  // Touch / swipe
  let touchStartX = 0;
  const heroEl = document.getElementById('hero');
  if (heroEl) {
    heroEl.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    heroEl.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? goTo(current + 1) : goTo(current - 1);
        restartTimer();
      }
    }, { passive: true });
  }
});
