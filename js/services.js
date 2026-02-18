/* ─── Services Data ──────────────────────────────────────────── */
const SERVICES = [
  { id:"01", ar:"تأسيس المؤسسات والشركات", en:"Company Formation",
    desc:"نتولى كافة إجراءات تأسيس منشأتك بالكامل — من حجز الاسم التجاري واستخراج السجلات والتراخيص اللازمة، وصولاً إلى فتح الملفات الحكومية وتسهيل تأشيرات العمالة في أقصر وقت ممكن.",
    highlights:["حجز الأسماء التجارية","استخراج السجلات","التراخيص اللازمة","تسهيل العمالة"],
    stat:"+3000", statLabel:"منشأة مؤسَّسة" },
  { id:"02", ar:"الاستثمار الأجنبي", en:"Foreign Investment",
    desc:"نُيسِّر دخولك للسوق السعودي بباقة متكاملة تشمل التملك الكامل للأجانب، والحوافز التنظيمية والمالية الجاذبة، وإجراءات موجزة ومسرَّعة تضعك في قلب السوق بسرعة وكفاءة.",
    highlights:["تملك 100% للأجانب","حوافز تنظيمية","إجراءات مسرَّعة","شركات مختلطة"],
    stat:"15+", statLabel:"جنسية مخدومة" },
  { id:"03", ar:"الخدمات القانونية", en:"Legal Services",
    desc:"تمثيل قضائي أمام جهات التقاضي، توثيق رسمي للوكالات والعقود وقرارات الشركاء، تحكيم تجاري وصياغة تسويات بديلة، وإدارة متكاملة للعقود والاتفاقيات.",
    highlights:["تمثيل قضائي","توثيق العقود","تحكيم تجاري","استشارات قانونية"],
    stat:"60K+", statLabel:"استشارة قانونية" },
  { id:"04", ar:"إدارة الرواتب وحماية الأجور", en:"Payroll & WPS",
    desc:"نتولى رفع الرواتب، وفتح الحسابات البنكية، ومراجعة الملفات آلياً للحفاظ على الامتثال الكامل.",
    highlights:["نظام WPS","رفع الرواتب","مراجعة آلية","دعم مستمر"],
    stat:"2015", statLabel:"تأسيس التخصص" },
  { id:"05", ar:"التحويل القانوني للمنشآت", en:"Legal Transformation",
    desc:"تحويل المؤسسات إلى شركات والعكس بسلاسة تامة: تعديل السجلات التجارية، نقل العمالة، إغلاق الكيان السابق وفتح الجديد مع ضمان الحماية القانونية الكاملة للمشتري.",
    highlights:["تعديل السجلات","نقل الملكية","إغلاق الكيانات","حماية قانونية"],
    stat:"100%", statLabel:"معدل نجاح التحويل" },
  { id:"06", ar:"تخفيف الأعباء المالية", en:"Financial Relief",
    desc:"دراسة شاملة للأعباء المالية لمنشأتك، والتسجيل في مبادرات منشآت وبرامج هدف والمبادرات الحكومية المُعلنة، لتخفيف التكاليف وتعزيز كفاءة العمليات.",
    highlights:["مبادرات منشآت","برامج هدف","إعفاءات حكومية","دراسة شاملة"],
    stat:"30%", statLabel:"متوسط التوفير" },
  { id:"07", ar:"الدعم الحكومي المباشر", en:"Government Support",
    desc:"حل المعوقات الحكومية بين الجهات المختلفة — وزارة التجارة، الموارد البشرية، التأمينات، الداخلية (أبشر - مقيم)، الزكاة والدخل — بحلول سريعة وفعّالة.",
    highlights:["وزارة التجارة","الموارد البشرية","التأمينات","أبشر ومقيم"],
    stat:"6", statLabel:"جهات حكومية" },
  { id:"08", ar:"تسجيل العلامات التجارية", en:"Trademark Registration",
    desc:"تسجيل علامتك التجارية المميزة لدى الهيئة السعودية للملكية الفكرية، مع فريق متخصص في التصميم والاعتراض وإدارة كافة إجراءات الحماية الفكرية.",
    highlights:["هيئة الملكية الفكرية","تصميم العلامة","إجراءات الحماية","الاعتراض"],
    stat:"SAIP", statLabel:"شراكة رسمية" },
  { id:"09", ar:"التسويق الرقمي والتصميم", en:"Digital Marketing",
    desc:"استراتيجيات تسويق رقمي شاملة (SEM, SEO, SMM) وخدمات تصميم احترافية: هوية بصرية، مواقع إلكترونية، محتوى وسائل التواصل، وكتالوجات الأعمال.",
    highlights:["SEO & SEM","إدارة السوشل ميديا","تصميم الهوية","تطوير المواقع"],
    stat:"SMM", statLabel:"تسويق متكامل" },
  { id:"10", ar:"التدريب والتأهيل", en:"Training & Qualification",
    desc:"برامج تدريبية مخصصة للقطاع الخاص — عن بُعد أو في مقرات المنشأة أو مقر مساري — لرفع كفاءة موظفيك ومواجهة تحديات المستقبل بثقة.",
    highlights:["تدريب عن بُعد","زيارات ميدانية","برامج مخصصة","شهادات معتمدة"],
    stat:"500+", statLabel:"متدرب سنوياً" },
];

let activeIdx = 0;

function renderNav() {
  const nav = document.getElementById('svcNav');
  if (!nav) return;
  nav.innerHTML = SERVICES.map((s, i) => `
    <div class="svc-nav-item ${i === activeIdx ? 'active' : ''}" data-i="${i}">
      <span class="num">${s.id}</span>
      <span class="label">${s.ar}</span>
      <span class="dot"></span>
    </div>
  `).join('');
  nav.querySelectorAll('.svc-nav-item').forEach(el => {
    el.addEventListener('click', () => { activeIdx = +el.dataset.i; render(); });
  });
}

function renderDetail() {
  const s = SERVICES[activeIdx];
  const detail = document.getElementById('svcDetail');
  if (!detail) return;

  const checkSVG = `<svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#6EC68C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  detail.innerHTML = `
    <div class="svc-hero-card">
      <div class="svc-hero-bg"></div>
      <div class="svc-big-num">${s.id}</div>
      <div>
        <div class="svc-en-badge">
          <div style="width:6px;height:6px;border-radius:50%;background:#6EC68C"></div>
          ${s.en}
        </div>
        <h2>${s.ar}</h2>
        <p>${s.desc}</p>
        <div class="svc-hero-btns">
          <a href="contact.html" class="btn btn-ghost-white" style="font-size:14px;padding:10px 22px">تفاصيل الخدمة</a>
          <a href="${WA_LINK}" target="_blank" class="btn btn-primary" style="font-size:14px;padding:10px 22px">
            اطلب الخدمة
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>
          </a>
        </div>
      </div>
      <div class="svc-stat-box">
        <div class="svc-stat-n">${s.stat}</div>
        <div class="svc-stat-l">${s.statLabel}</div>
        <div class="svc-stat-div"></div>
        <div class="svc-stat-en">${s.en}</div>
      </div>
    </div>

    <div class="svc-highlights">
      ${s.highlights.map(h => `
        <div class="svc-highlight">
          <div class="svc-check">${checkSVG}</div>
          <span>${h}</span>
        </div>
      `).join('')}
    </div>

    <div class="svc-pagination">
      <button class="svc-pag-btn prev" ${activeIdx === 0 ? 'disabled' : ''} id="svcPrev">← السابق</button>
      <div class="svc-pag-dots">
        ${SERVICES.map((_, i) => `<div class="svc-pag-dot ${i === activeIdx ? 'active' : ''}" data-i="${i}"></div>`).join('')}
      </div>
      <button class="svc-pag-btn next" ${activeIdx === SERVICES.length - 1 ? 'disabled' : ''} id="svcNext">التالي →</button>
    </div>
  `;

  document.getElementById('svcPrev')?.addEventListener('click', () => { activeIdx = Math.max(0, activeIdx - 1); render(); });
  document.getElementById('svcNext')?.addEventListener('click', () => { activeIdx = Math.min(SERVICES.length - 1, activeIdx + 1); render(); });
  detail.querySelectorAll('.svc-pag-dot').forEach(d => {
    d.addEventListener('click', () => { activeIdx = +d.dataset.i; render(); });
  });
}

function render() {
  renderNav();
  renderDetail();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('svcWA').href = WA_LINK;
  render();
});
