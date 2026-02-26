/* ─────────────────────────────────────────────────────────────
   MASARY — Homepage JS
   ───────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  // Set WA link
  const ctaWA = document.getElementById('ctaWA');
  if (ctaWA) ctaWA.href = WA_LINK;

  // ── Hero Slider ──
  const slides  = document.querySelectorAll('.hero-slide');
  const dotsEl  = document.getElementById('heroDots');
  const progress = document.getElementById('heroProgress');
  let current   = 0;
  let timer;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `hero-dot ${i === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });

  function goTo(n) {
    slides[current].classList.remove('active');
    document.querySelectorAll('.hero-dot')[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    document.querySelectorAll('.hero-dot')[current].classList.add('active');

    // Reset progress bar
    if (progress) {
      progress.style.animation = 'none';
      void progress.offsetWidth;
      progress.style.animation = 'heroProgress 5s linear';
    }
  }

  function autoPlay() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  document.getElementById('heroNext')?.addEventListener('click', () => { goTo(current + 1); autoPlay(); });
  document.getElementById('heroPrev')?.addEventListener('click', () => { goTo(current - 1); autoPlay(); });

  autoPlay();

  // Touch/swipe support
  let touchStart = 0;
  const heroEl = document.getElementById('hero');
  heroEl?.addEventListener('touchstart', e => { touchStart = e.touches[0].clientX; }, { passive: true });
  heroEl?.addEventListener('touchend', e => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goTo(current + 1) : goTo(current - 1);
      autoPlay();
    }
  }, { passive: true });
});
