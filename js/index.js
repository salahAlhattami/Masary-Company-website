/* ─────────────────────────────────────────────────────────────
   MASARY — Homepage JS  (Hero slider rebuilt)
   ───────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  // Set WA link
  const ctaWA = document.getElementById('ctaWA');
  if (ctaWA) ctaWA.href = WA_LINK;

  // ── Hero Slider ──────────────────────────────────────────────
  const slides   = document.querySelectorAll('.hero-slide');
  const dotsEl   = document.getElementById('heroDots');
  const progress = document.getElementById('heroProgress');
  let current = 0;
  let timer;

  if (!slides.length) return;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => { goTo(i); autoPlay(); });
    dotsEl?.appendChild(dot);
  });

  function goTo(n) {
    const dots = document.querySelectorAll('.hero-dot');

    // Remove active from current
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');

    // Move to next
    current = ((n % slides.length) + slides.length) % slides.length;

    // Add active to new
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');

    // Reset progress bar
    if (progress) {
      progress.style.animation = 'none';
      void progress.offsetWidth; // reflow
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

  // Touch / swipe support
  let touchStartX = 0;
  const heroEl = document.getElementById('hero');
  heroEl?.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  heroEl?.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goTo(current + 1) : goTo(current - 1);
      autoPlay();
    }
  }, { passive: true });

  // Pause on hover
  heroEl?.addEventListener('mouseenter', () => clearInterval(timer));
  heroEl?.addEventListener('mouseleave', () => autoPlay());

});
