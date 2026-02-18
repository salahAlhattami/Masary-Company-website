/* ─────────────────────────────────────────────────────────────
   MASARY — Shared JavaScript
   ───────────────────────────────────────────────────────────── */

/* ── WhatsApp Number ── */
const WA_NUMBER = "966563434348";
const WA_MSG    = encodeURIComponent("مرحباً، أود الاستفسار عن خدمات مساري لريادة الأعمال.");
const WA_LINK   = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

/* ── Nav Component ── */
const NAV_HTML = `
<nav id="navbar">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="images/logo.png" alt="مساري لريادة الأعمال">
    </a>

    <div class="nav-links">
      <a href="index.html"    class="nav-link" data-page="index">الرئيسية</a>
      <a href="services.html" class="nav-link" data-page="services">خدماتنا</a>
      <a href="packages.html" class="nav-link" data-page="packages">الباقات</a>
      <a href="about.html"    class="nav-link" data-page="about">من نحن</a>
      <a href="contact.html"  class="nav-link" data-page="contact">تواصل معنا</a>
    </div>

    <a href="${WA_LINK}" target="_blank" class="nav-cta btn btn-primary">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M11.985 0C5.379 0 0 5.336 0 11.886c0 2.094.55 4.062 1.515 5.765L.057 24l6.464-1.696C8.163 23.366 10.043 24 12.015 24 18.621 24 24 18.664 24 12.114 24 5.563 18.591 0 11.985 0zm.03 21.808c-1.78 0-3.502-.48-5.008-1.384l-.36-.214-3.735.98.999-3.648-.234-.374C2.386 15.395 1.807 13.726 1.807 11.886c0-5.58 4.59-10.12 10.208-10.12 5.617 0 10.208 4.54 10.208 10.12 0 5.58-4.591 10.122-10.208 10.122z"/>
      </svg>
      استشارة مجانية
    </a>
  </div>
</nav>`;

/* ── WhatsApp Float Button ── */
const WA_FLOAT_HTML = `
<a href="${WA_LINK}" target="_blank" class="wa-float" title="تواصل عبر واتساب">
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M11.985 0C5.379 0 0 5.336 0 11.886c0 2.094.55 4.062 1.515 5.765L.057 24l6.464-1.696C8.163 23.366 10.043 24 12.015 24 18.621 24 24 18.664 24 12.114 24 5.563 18.591 0 11.985 0zm.03 21.808c-1.78 0-3.502-.48-5.008-1.384l-.36-.214-3.735.98.999-3.648-.234-.374C2.386 15.395 1.807 13.726 1.807 11.886c0-5.58 4.59-10.12 10.208-10.12 5.617 0 10.208 4.54 10.208 10.12 0 5.58-4.591 10.122-10.208 10.122z"/>
  </svg>
  <span class="wa-tooltip">تواصل عبر واتساب</span>
</a>`;

/* ── Footer Component ── */
const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <img src="images/logo.png" alt="مساري لريادة الأعمال">
        </div>
        <p class="footer-desc">
          شريكك الموثوق في تأسيس وتطوير الأعمال بالمملكة العربية السعودية — خبرة تمتد لأكثر من 10 سنوات في الخدمات الإدارية والقانونية والمالية.
        </p>
        <div style="margin-top:24px">
          <div class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-.8a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +966 56 343 4348
          </div>
          <div class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-.8a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +966 54 333 3980
          </div>
          <div class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            trustpro606@gmail.com
          </div>
          <div class="footer-contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            الرياض، المملكة العربية السعودية
          </div>
        </div>
      </div>

      <div class="footer-col">
        <h5>خدماتنا</h5>
        <ul>
          <li><a href="services.html">تأسيس الشركات</a></li>
          <li><a href="services.html">الاستثمار الأجنبي</a></li>
          <li><a href="services.html">الخدمات القانونية</a></li>
          <li><a href="services.html">إدارة الرواتب</a></li>
          <li><a href="services.html">العلامات التجارية</a></li>
          <li><a href="services.html">التسويق الرقمي</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>الشركة</h5>
        <ul>
          <li><a href="about.html">من نحن</a></li>
          <li><a href="packages.html">باقاتنا</a></li>
          <li><a href="contact.html">تواصل معنا</a></li>
          <li><a href="#">سياسة الخصوصية</a></li>
          <li><a href="#">الشروط والأحكام</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>تواصل معنا</h5>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
          <a href="${WA_LINK}" target="_blank" style="display:flex;align-items:center;gap:8px;background:#25D366;color:#fff;padding:10px 16px;border-radius:10px;font-size:14px;font-weight:600;transition:all .2s"
            onmouseover="this.style.background='#20bb5a'" onmouseout="this.style.background='#25D366'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.985 0C5.379 0 0 5.336 0 11.886c0 2.094.55 4.062 1.515 5.765L.057 24l6.464-1.696C8.163 23.366 10.043 24 12.015 24 18.621 24 24 18.664 24 12.114 24 5.563 18.591 0 11.985 0zm.03 21.808c-1.78 0-3.502-.48-5.008-1.384l-.36-.214-3.735.98.999-3.648-.234-.374C2.386 15.395 1.807 13.726 1.807 11.886c0-5.58 4.59-10.12 10.208-10.12 5.617 0 10.208 4.54 10.208 10.12 0 5.58-4.591 10.122-10.208 10.122z"/></svg>
            واتساب
          </a>
        </div>
        <div class="footer-socials">
          <a href="#" class="footer-social" title="تويتر">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="footer-social" title="لينكد إن">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" class="footer-social" title="إنستغرام">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 مساري لريادة الأعمال — جميع الحقوق محفوظة</span>
      <span>س.ت 7053003922 | الرياض، المملكة العربية السعودية</span>
    </div>
  </div>
</footer>`;

/* ── Inject Nav & Footer & WA ── */
document.addEventListener('DOMContentLoaded', () => {
  // Nav
  const navEl = document.getElementById('nav-placeholder');
  if (navEl) navEl.innerHTML = NAV_HTML;

  // Footer
  const footEl = document.getElementById('footer-placeholder');
  if (footEl) footEl.innerHTML = FOOTER_HTML;

  // WhatsApp float
  document.body.insertAdjacentHTML('beforeend', WA_FLOAT_HTML);

  // Active nav link
  const page = document.body.dataset.page || 'index';
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.dataset.page === page) l.classList.add('active');
  });

  // Scroll nav
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Intersection Observer — animate elements on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));
});

/* ── Counter animation ── */
function animateCounter(el, target, duration = 1400) {
  const isNum = !isNaN(parseFloat(target));
  if (!isNum) return;
  const n = parseFloat(target);
  const suffix = target.replace(/[0-9.,]/g, '');
  let start = null;
  const step = (ts) => {
    if (!start) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(ease * n).toLocaleString('ar') + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ── Trigger counters when in view ── */
document.addEventListener('DOMContentLoaded', () => {
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = e.target.dataset.counter;
        if (target) animateCounter(e.target, target);
        counterObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('[data-counter]').forEach(el => counterObs.observe(el));
});
