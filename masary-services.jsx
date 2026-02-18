import { useState, useEffect, useRef } from "react";

const SERVICES = [
  { id:"01", ar:"تأسيس المؤسسات والشركات", en:"Company Formation",
    description:"نتولى كافة إجراءات تأسيس منشأتك بالكامل — من حجز الاسم التجاري واستخراج السجلات والتراخيص اللازمة، وصولاً إلى فتح الملفات الحكومية وتسهيل تأشيرات العمالة في أقصر وقت ممكن.",
    highlights:["حجز الأسماء التجارية","استخراج السجلات","التراخيص اللازمة","تسهيل العمالة"], stat:"+3000", statLabel:"منشأة مؤسَّسة" },
  { id:"02", ar:"الاستثمار الأجنبي", en:"Foreign Investment",
    description:"نُيسِّر دخولك للسوق السعودي بباقة متكاملة تشمل التملك الكامل للأجانب، والحوافز التنظيمية والمالية الجاذبة، وإجراءات موجزة ومسرَّعة تضعك في قلب السوق بسرعة وكفاءة.",
    highlights:["تملك 100% للأجانب","حوافز تنظيمية","إجراءات مسرَّعة","شركات مختلطة"], stat:"15+", statLabel:"جنسية مخدومة" },
  { id:"03", ar:"الخدمات القانونية", en:"Legal Services",
    description:"تمثيل قضائي أمام جهات التقاضي، توثيق رسمي للوكالات والعقود وقرارات الشركاء، تحكيم تجاري وصياغة تسويات بديلة، وإدارة متكاملة للعقود والاتفاقيات.",
    highlights:["تمثيل قضائي","توثيق العقود","تحكيم تجاري","استشارات قانونية"], stat:"60K+", statLabel:"استشارة قانونية" },
  { id:"04", ar:"إدارة الرواتب وحماية الأجور", en:"Payroll & WPS",
    description:"الشركة الوحيدة المتخصصة في نظام حماية الأجور منذ 2015 — نتولى رفع الرواتب، وفتح الحسابات البنكية، ومراجعة الملفات آلياً للحفاظ على الامتثال الكامل.",
    highlights:["نظام WPS","رفع الرواتب","مراجعة آلية","دعم مستمر"], stat:"2015", statLabel:"تأسيس التخصص" },
  { id:"05", ar:"التحويل القانوني للمنشآت", en:"Legal Transformation",
    description:"تحويل المؤسسات إلى شركات والعكس بسلاسة تامة: تعديل السجلات التجارية، نقل العمالة، إغلاق الكيان السابق وفتح الجديد مع ضمان الحماية القانونية الكاملة.",
    highlights:["تعديل السجلات","نقل الملكية","إغلاق الكيانات","حماية قانونية"], stat:"100%", statLabel:"معدل نجاح التحويل" },
  { id:"06", ar:"تخفيف الأعباء المالية", en:"Financial Relief",
    description:"دراسة شاملة للأعباء المالية لمنشأتك، والتسجيل في مبادرات منشآت وبرامج هدف والمبادرات الحكومية المُعلنة، لتخفيف التكاليف وتعزيز كفاءة العمليات.",
    highlights:["مبادرات منشآت","برامج هدف","إعفاءات حكومية","دراسة شاملة"], stat:"30%", statLabel:"متوسط التوفير" },
  { id:"07", ar:"الدعم الحكومي المباشر", en:"Government Support",
    description:"حل المعوقات الحكومية بين الجهات المختلفة — وزارة التجارة، الموارد البشرية، التأمينات، الداخلية، الزكاة والدخل — بحلول سريعة وفعّالة.",
    highlights:["وزارة التجارة","الموارد البشرية","التأمينات","أبشر ومقيم"], stat:"6", statLabel:"جهات حكومية" },
  { id:"08", ar:"تسجيل العلامات التجارية", en:"Trademark Registration",
    description:"تسجيل علامتك التجارية المميزة لدى الهيئة السعودية للملكية الفكرية، مع فريق متخصص في التصميم والاعتراض وإدارة كافة إجراءات الحماية الفكرية.",
    highlights:["هيئة الملكية الفكرية","تصميم العلامة","إجراءات الحماية","الاعتراض"], stat:"SAIP", statLabel:"شراكة رسمية" },
  { id:"09", ar:"التسويق الرقمي والتصميم", en:"Digital Marketing",
    description:"استراتيجيات تسويق رقمي شاملة (SEM, SEO, SMM) وخدمات تصميم احترافية: هوية بصرية، مواقع إلكترونية، محتوى وسائل التواصل.",
    highlights:["SEO & SEM","إدارة السوشل ميديا","تصميم الهوية","تطوير المواقع"], stat:"SMM", statLabel:"تسويق متكامل" },
  { id:"10", ar:"التدريب والتأهيل", en:"Training & Qualification",
    description:"برامج تدريبية مخصصة للقطاع الخاص — عن بُعد أو في مقرات المنشأة أو مقر مساري — لرفع كفاءة موظفيك ومواجهة تحديات المستقبل بثقة.",
    highlights:["تدريب عن بُعد","زيارات ميدانية","برامج مخصصة","شهادات معتمدة"], stat:"500+", statLabel:"متدرب سنوياً" },
];

const PACKAGES = [
  { tier:"فضية", tierEn:"Silver", tagline:"الخيار الأمثل للمشاريع الناشئة", color:"#8BA89A",
    features:["وزارة الموارد البشرية","التأمينات الاجتماعية","وزارة التجارة","هيئة الزكاة والدخل","وزارة الداخلية","بلدي وسلامة","التأمين الطبي"], highlight:false },
  { tier:"ذهبية", tierEn:"Gold", tagline:"المزيد من التوفير والفائدة", color:"#C5A55A",
    features:["جميع خدمات الفضية","اشتراك حماية الأجور","توثيق عقود العمل","استشارات الأعمال","متابعة الملاحظات"], highlight:true },
  { tier:"بلاتينية", tierEn:"Platinum", tagline:"للراغبين في الأفضل دائماً", color:"#7BBF6A",
    features:["جميع خدمات الذهبية","اللائحة الداخلية للمنشأة","عقود عمل جميع الموظفين","تخفيف الأعباء المالية","تأهيل وتدريب الموظفين"], highlight:false },
];

const PILLARS = [
  { icon:"🎯", title:"الخبرة المتخصصة", titleEn:"Specialist Expertise",
    desc:"فريق من المختصين بعمق معرفي واسع بالسوق السعودية",
    img:"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    accent:"#7BBF6A" },
  { icon:"⚡", title:"عمليات فعّالة", titleEn:"Efficient Operations",
    desc:"إجراءات مبسّطة وسريعة توفّر وقتك وجهدك",
    img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    accent:"#5EA8F0" },
  { icon:"🛡", title:"دعم شامل", titleEn:"Full Support",
    desc:"مرافقة كاملة في كل مرحلة من مراحل مشروعك",
    img:"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    accent:"#C5A55A" },
  { icon:"🤝", title:"الشفافية والثقة", titleEn:"Transparency & Trust",
    desc:"مصداقية في كل خطوة وتواصل واضح مع عملائنا",
    img:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    accent:"#E07B6A" },
];

/* ── Pillar Card ─────────────────────────────────────────────── */
function PillarCard({ pillar, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position:"relative", borderRadius:22, overflow:"hidden",
        height:340, cursor:"pointer", flex:"1 1 0", minWidth:0,
        transform: hov ? "translateY(-10px) scale(1.025)" : "translateY(0) scale(1)",
        transition:"transform 0.48s cubic-bezier(0.22,1,0.36,1), box-shadow 0.48s",
        boxShadow: hov
          ? "0 36px 72px rgba(30,45,20,0.24)"
          : "0 6px 28px rgba(30,45,20,0.10)",
        animationName:"fadeUp",
        animationDuration:"0.7s",
        animationDelay:`${index * 90}ms`,
        animationFillMode:"both",
        animationTimingFunction:"cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Photo */}
      <div style={{
        position:"absolute", inset:0,
        backgroundImage:`url(${pillar.img})`,
        backgroundSize:"cover", backgroundPosition:"center",
        transform: hov ? "scale(1.1)" : "scale(1.02)",
        filter: hov ? "blur(0px) saturate(1.15) brightness(1.05)" : "blur(3px) saturate(0.45) brightness(0.85)",
        transition:"transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.55s ease",
      }} />

      {/* Overlay — becomes lighter on hover */}
      <div style={{
        position:"absolute", inset:0,
        background: hov
          ? "linear-gradient(170deg, rgba(26,40,14,0.28) 0%, rgba(26,40,14,0.72) 100%)"
          : "linear-gradient(170deg, rgba(26,40,14,0.68) 0%, rgba(26,40,14,0.94) 100%)",
        transition:"background 0.55s ease",
      }} />

      {/* Accent glow */}
      <div style={{
        position:"absolute", bottom:-50, right:-50,
        width:200, height:200, borderRadius:"50%",
        background:`radial-gradient(circle, ${pillar.accent}55 0%, transparent 70%)`,
        opacity: hov ? 1 : 0,
        filter:"blur(20px)",
        transition:"opacity 0.55s ease",
      }} />

      {/* Top accent line */}
      <div style={{
        position:"absolute", top:0, left:0, right:0, height:3,
        background:`linear-gradient(90deg, ${pillar.accent}, transparent)`,
        opacity: hov ? 1 : 0,
        transform: hov ? "scaleX(1)" : "scaleX(0)",
        transformOrigin:"right",
        transition:"transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.3s",
      }} />

      {/* Content */}
      <div style={{
        position:"absolute", inset:0, padding:"28px 26px",
        display:"flex", flexDirection:"column", justifyContent:"space-between",
        zIndex:2,
      }}>
        {/* Top section */}
        <div>
          {/* Index */}
          <div style={{
            position:"absolute", top:20, left:22,
            fontFamily:"'Playfair Display',serif",
            fontSize:12, color:"rgba(255,255,255,.25)", letterSpacing:1,
          }}>
            0{index + 1}
          </div>

          {/* Icon box */}
          <div style={{
            width:52, height:52, borderRadius:14, marginBottom:16,
            background: hov ? `${pillar.accent}2A` : "rgba(255,255,255,0.10)",
            border:`1.5px solid ${hov ? pillar.accent + "60" : "rgba(255,255,255,0.14)"}`,
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:22,
            backdropFilter:"blur(8px)",
            transition:"background 0.4s, border-color 0.4s",
          }}>
            {pillar.icon}
          </div>

          {/* English label */}
          <div style={{
            fontSize:10, fontWeight:700, letterSpacing:"2.5px",
            textTransform:"uppercase", color:pillar.accent,
            marginBottom:8,
            opacity: hov ? 1 : 0.6,
            transform: hov ? "translateY(0)" : "translateY(4px)",
            transition:"all 0.4s",
          }}>
            {pillar.titleEn}
          </div>

          {/* Arabic title */}
          <div style={{
            fontSize:21, fontWeight:700, color:"#fff", lineHeight:1.3,
          }}>
            {pillar.title}
          </div>
        </div>

        {/* Bottom section */}
        <div>
          {/* Description — reveals on hover */}
          <div style={{
            fontSize:13.5, lineHeight:1.75,
            color:"rgba(255,255,255,0.78)",
            maxHeight: hov ? 80 : 0,
            opacity: hov ? 1 : 0,
            overflow:"hidden",
            marginBottom: hov ? 18 : 0,
            transform: hov ? "translateY(0)" : "translateY(14px)",
            transition:"max-height 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.4s, transform 0.45s, margin-bottom 0.3s",
          }}>
            {pillar.desc}
          </div>

          {/* CTA arrow */}
          <div style={{
            display:"flex", alignItems:"center", gap:10,
            opacity: hov ? 1 : 0.35,
            transform: hov ? "translateX(0)" : "translateX(10px)",
            transition:"all 0.45s cubic-bezier(0.22,1,0.36,1)",
          }}>
            <div style={{
              width:34, height:34, borderRadius:"50%",
              background: pillar.accent,
              display:"flex", alignItems:"center", justifyContent:"center",
              boxShadow: hov ? `0 6px 20px ${pillar.accent}55` : "none",
              transition:"box-shadow 0.4s",
            }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M12 8H4M8 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontSize:13, fontWeight:600, color:"#fff" }}>اكتشف أكثر</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main ────────────────────────────────────────────────────── */
export default function MasaryPage() {
  const [active, setActive]   = useState(0);
  const [tab, setTab]         = useState("services");
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive:true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sel = SERVICES[active];

  return (
    <div dir="rtl" style={{
      fontFamily:"'Noto Kufi Arabic','Tajawal',sans-serif",
      background:"#F7F5F0", minHeight:"100vh", color:"#1E2D14", overflowX:"hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@300;400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{
          --f:#1E2D14;--f60:rgba(30,45,20,.6);--f08:rgba(30,45,20,.08);
          --s:#7BBF6A;--sp:#A8D49A;--sbg:rgba(123,191,106,.08);
          --w:#FDFCF8;--g:#C5A55A;
        }
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-thumb{background:var(--s);border-radius:2px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:.5}50%{opacity:1}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes shimmer{0%{background-position:200% center}100%{background-position:-200% center}}
        @keyframes slideIn{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}
      `}</style>

      {/* ═══════ NAV ═══════ */}
      <nav style={{
        position:"sticky",top:0,zIndex:100,
        background:"rgba(247,245,240,.92)",backdropFilter:"blur(24px) saturate(1.4)",
        borderBottom:"1px solid var(--f08)",
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"0 56px",height:68,
      }}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:36,height:36,borderRadius:10,background:"var(--f)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 3L20 8V16L12 21L4 16V8L12 3Z" stroke="#7BBF6A" strokeWidth="1.5"/>
              <path d="M12 8V16M8 10L12 8L16 10" stroke="#7BBF6A" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{lineHeight:1.15}}>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:19,fontWeight:700,color:"var(--f)",letterSpacing:"-.3px"}}>مساري</div>
            <div style={{fontSize:9,fontWeight:700,letterSpacing:2,color:"var(--s)",textTransform:"uppercase"}}>لريادة الأعمال</div>
          </div>
        </div>

        <div style={{display:"flex",gap:2,background:"var(--f08)",padding:3,borderRadius:10}}>
          {["الرئيسية","خدماتنا","باقاتنا","عملاؤنا","تواصل"].map(t=>(
            <button key={t} style={{
              padding:"7px 18px",borderRadius:8,border:"none",
              background:t==="خدماتنا"?"var(--f)":"transparent",
              color:t==="خدماتنا"?"#fff":"var(--f60)",
              cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:500,transition:"all .2s"
            }}>{t}</button>
          ))}
        </div>

        <button
          style={{background:"var(--s)",color:"#fff",padding:"9px 22px",borderRadius:10,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:600,transition:"all .2s",display:"flex",alignItems:"center",gap:6}}
          onMouseEnter={e=>{e.currentTarget.style.background="#6aad5a";e.currentTarget.style.transform="translateY(-1px)"}}
          onMouseLeave={e=>{e.currentTarget.style.background="var(--s)";e.currentTarget.style.transform="translateY(0)"}}
        >
          استشارة مجانية
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </nav>

      {/* ═══════ HERO — FULL BLEED ═══════ */}
      {mounted && (
        <section style={{position:"relative",width:"100%",height:"100vh",minHeight:660,overflow:"hidden",display:"flex",alignItems:"center"}}>

          {/* Parallax BG */}
          <div style={{
            position:"absolute",inset:"-12% 0",
            backgroundImage:`url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=85)`,
            backgroundSize:"cover",backgroundPosition:"center 35%",
            transform:`translateY(${scrollY * 0.25}px)`,
            willChange:"transform",
          }}/>

          {/* Gradient overlay */}
          <div style={{
            position:"absolute",inset:0,
            background:"linear-gradient(105deg, rgba(24,37,12,.93) 0%, rgba(24,37,12,.80) 42%, rgba(24,37,12,.38) 72%, rgba(24,37,12,.08) 100%)",
          }}/>

          {/* Noise grain */}
          <div style={{
            position:"absolute",inset:0,opacity:.04,
            backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize:"180px 180px",
          }}/>

          {/* Decorative rings */}
          <div style={{position:"absolute",right:"-6%",top:"8%",width:640,height:640,borderRadius:"50%",border:"1px solid rgba(123,191,106,.1)",animation:"floatY 8s ease-in-out infinite",pointerEvents:"none"}}/>
          <div style={{position:"absolute",right:"2%",top:"16%",width:460,height:460,borderRadius:"50%",border:"1px solid rgba(123,191,106,.06)",animation:"floatY 11s ease-in-out infinite reverse",pointerEvents:"none"}}/>

          {/* Green orb glow */}
          <div style={{
            position:"absolute",right:"14%",top:"22%",
            width:360,height:360,borderRadius:"50%",
            background:"radial-gradient(circle, rgba(123,191,106,.18) 0%, transparent 70%)",
            filter:"blur(48px)",animation:"pulse 5s ease-in-out infinite",
          }}/>

          {/* Content */}
          <div style={{position:"relative",zIndex:2,maxWidth:1320,margin:"0 auto",padding:"0 56px",width:"100%"}}>

            {/* Pill */}
            <div style={{
              display:"inline-flex",alignItems:"center",gap:8,
              background:"rgba(123,191,106,.12)",border:"1px solid rgba(123,191,106,.25)",
              color:"#A8D49A",padding:"6px 18px",borderRadius:100,
              fontSize:12.5,fontWeight:600,marginBottom:28,letterSpacing:".4px",
              animation:"fadeUp .8s .1s both",
            }}>
              <span style={{width:6,height:6,borderRadius:"50%",background:"var(--s)",animation:"pulse 2s infinite",display:"inline-block"}}/>
              شريكك الموثوق في بناء الأعمال بالمملكة
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize:"clamp(38px,5.2vw,70px)",fontWeight:700,
              color:"#fff",lineHeight:1.13,marginBottom:22,
              letterSpacing:"-.5px",maxWidth:660,
              animation:"fadeUp .8s .18s both",
            }}>
              مسارك الأمثل<br/>
              <span style={{
                color:"transparent",
                backgroundImage:"linear-gradient(90deg, #7BBF6A 0%, #A8D49A 50%, #7BBF6A 100%)",
                backgroundSize:"200% auto",
                WebkitBackgroundClip:"text",backgroundClip:"text",
                animation:"shimmer 4s linear infinite",
              }}>لتأسيس أعمالك</span><br/>
              والازدهار في المملكة
            </h1>

            <p style={{fontSize:17,lineHeight:1.85,color:"rgba(255,255,255,.62)",maxWidth:520,marginBottom:44,animation:"fadeUp .8s .26s both"}}>
              نبسّط تعقيدات التأسيس والامتثال القانوني والترخيص للشركات المحلية والدولية — بفريق من المختصين المخضرمين في السوق السعودية.
            </p>

            {/* CTA buttons */}
            <div style={{display:"flex",gap:14,alignItems:"center",animation:"fadeUp .8s .34s both"}}>
              <button
                style={{background:"var(--s)",color:"#fff",padding:"15px 36px",borderRadius:14,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:16,fontWeight:700,transition:"all .28s",boxShadow:"0 8px 32px rgba(123,191,106,.32)"}}
                onMouseEnter={e=>{e.currentTarget.style.background="#5fa84e";e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 18px 52px rgba(123,191,106,.42)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="var(--s)";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 8px 32px rgba(123,191,106,.32)"}}
              >
                ابدأ رحلتك معنا
              </button>
              <button
                style={{background:"transparent",color:"rgba(255,255,255,.78)",padding:"14px 32px",borderRadius:14,border:"1px solid rgba(255,255,255,.2)",cursor:"pointer",fontFamily:"inherit",fontSize:15,fontWeight:500,transition:"all .25s",display:"flex",alignItems:"center",gap:8}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.45)";e.currentTarget.style.color="#fff"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.2)";e.currentTarget.style.color="rgba(255,255,255,.78)"}}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M10 8l6 4-6 4V8z" fill="currentColor"/></svg>
                شاهد كيف نعمل
              </button>
            </div>

            {/* Stats row */}
            <div style={{display:"flex",gap:48,marginTop:64,paddingTop:32,borderTop:"1px solid rgba(255,255,255,.08)",animation:"fadeUp .8s .44s both"}}>
              {[{n:"3000+",l:"منشأة مؤسَّسة"},{n:"60K+",l:"استشارة مقدَّمة"},{n:"15+",l:"جنسية مخدومة"},{n:"10+",l:"سنوات خبرة"}].map(s=>(
                <div key={s.l}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:38,fontWeight:700,color:"var(--s)",lineHeight:1,letterSpacing:"-1px"}}>{s.n}</div>
                  <div style={{fontSize:12,color:"rgba(255,255,255,.4)",marginTop:5,fontWeight:500}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div style={{position:"absolute",bottom:34,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:7,opacity:.45,animation:"pulse 2.5s infinite"}}>
            <div style={{fontSize:10,color:"#fff",letterSpacing:2.5,textTransform:"uppercase",fontWeight:600}}>اكتشف</div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M7 15l5 5 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </section>
      )}

      {/* ═══════ VALUE PILLARS (4 Image Cards) ═══════ */}
      {mounted && (
        <section style={{maxWidth:1320,margin:"0 auto",padding:"88px 56px 76px"}}>

          {/* Section label */}
          <div style={{textAlign:"center",marginBottom:56,animation:"fadeUp .7s .05s both"}}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:"3.5px",textTransform:"uppercase",color:"var(--s)",marginBottom:10}}>لماذا مساري؟</div>
            <h2 style={{fontSize:"clamp(26px,3vw,40px)",fontWeight:700,color:"var(--f)",letterSpacing:"-.3px",lineHeight:1.2}}>أربعة مبادئ تميّزنا عن غيرنا</h2>
            <div style={{width:48,height:3,background:"var(--s)",borderRadius:2,margin:"16px auto 0"}}/>
          </div>

          {/* Cards */}
          <div style={{display:"flex",gap:18}}>
            {PILLARS.map((p, i) => <PillarCard key={p.title} pillar={p} index={i}/>)}
          </div>
        </section>
      )}

      {/* ═══════ SECTION HEADER ═══════ */}
      <div style={{maxWidth:1320,margin:"0 auto",padding:"0 56px 36px",display:"flex",alignItems:"flex-end",justifyContent:"space-between"}}>
        <div>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:"3.5px",textTransform:"uppercase",color:"var(--s)",marginBottom:8}}>خدماتنا</div>
          <h2 style={{fontSize:32,fontWeight:700,color:"var(--f)",lineHeight:1.25}}>حلول متكاملة لكل مراحل نمو أعمالك</h2>
        </div>
        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:14}}>
          <p style={{fontSize:14,color:"var(--f60)",lineHeight:1.7,maxWidth:340,textAlign:"left"}}>10 خدمات متكاملة تحت سقف واحد — من التأسيس حتى الامتثال الكامل.</p>
          <div style={{display:"flex",gap:2,background:"var(--f08)",padding:4,borderRadius:12}}>
            {[["services","الخدمات"],["packages","الباقات"]].map(([v,l])=>(
              <button key={v} onClick={()=>setTab(v)} style={{padding:"8px 24px",borderRadius:9,border:"none",background:tab===v?"var(--f)":"transparent",color:tab===v?"#fff":"var(--f60)",cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:500,transition:"all .2s"}}>{l}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ SERVICES ═══════ */}
      {tab==="services" && (
        <section style={{maxWidth:1320,margin:"0 auto",padding:"0 56px 96px",display:"grid",gridTemplateColumns:"268px 1fr",gap:24,alignItems:"start"}}>

          {/* Sidebar */}
          <nav style={{display:"flex",flexDirection:"column",gap:3,position:"sticky",top:84}}>
            {SERVICES.map((s,i)=>(
              <div key={s.id} onClick={()=>setActive(i)}
                style={{
                  display:"flex",alignItems:"center",gap:12,padding:"12px 15px",
                  borderRadius:12,cursor:"pointer",transition:"all .2s",
                  border:"1px solid",textAlign:"right",
                  background:active===i?"var(--f)":"transparent",
                  borderColor:active===i?"var(--f)":"transparent",
                }}
                onMouseEnter={e=>{if(active!==i){e.currentTarget.style.background="var(--w)";e.currentTarget.style.borderColor="var(--f08)"}}}
                onMouseLeave={e=>{if(active!==i){e.currentTarget.style.background="transparent";e.currentTarget.style.borderColor="transparent"}}}
              >
                <span style={{fontFamily:"'Playfair Display',serif",fontSize:12,color:active===i?"rgba(123,191,106,.7)":"var(--s)",minWidth:22}}>{s.id}</span>
                <span style={{fontSize:13.5,fontWeight:500,color:active===i?"#fff":"var(--f)",flex:1}}>{s.ar}</span>
                {active===i && <div style={{width:6,height:6,borderRadius:"50%",background:"var(--s)",flexShrink:0}}/>}
              </div>
            ))}
          </nav>

          {/* Detail */}
          <div key={active} style={{display:"grid",gridTemplateRows:"auto auto auto",gap:16,animation:"slideIn .38s cubic-bezier(.22,1,.36,1) both"}}>

            {/* Hero card */}
            <div style={{background:"var(--f)",borderRadius:24,padding:"48px 48px 44px",display:"grid",gridTemplateColumns:"1fr 240px",gap:44,position:"relative",overflow:"hidden",minHeight:300}}>
              <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 60% 60% at 95% 105%, rgba(123,191,106,.13) 0%, transparent 60%)",pointerEvents:"none"}}/>
              <div style={{position:"absolute",bottom:-14,left:36,fontFamily:"'Playfair Display',serif",fontSize:96,fontWeight:400,color:"rgba(123,191,106,.07)",lineHeight:1,pointerEvents:"none",userSelect:"none"}}>{sel.id}</div>

              <div>
                <div style={{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(123,191,106,.12)",border:"1px solid rgba(123,191,106,.22)",color:"#A8D49A",padding:"5px 14px",borderRadius:100,fontSize:12,fontWeight:500,marginBottom:16}}>
                  <div style={{width:6,height:6,borderRadius:"50%",background:"var(--s)"}}/>
                  {sel.en}
                </div>
                <h2 style={{fontSize:28,fontWeight:700,color:"#fff",lineHeight:1.3,marginBottom:14}}>{sel.ar}</h2>
                <p style={{fontSize:15,lineHeight:1.85,color:"rgba(255,255,255,.62)",marginBottom:28}}>{sel.description}</p>
                <div style={{display:"flex",gap:10}}>
                  <button
                    style={{padding:"11px 24px",borderRadius:11,border:"1px solid rgba(255,255,255,.15)",background:"transparent",color:"rgba(255,255,255,.7)",cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:500,transition:"all .2s"}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.4)";e.currentTarget.style.color="#fff"}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.15)";e.currentTarget.style.color="rgba(255,255,255,.7)"}}
                  >تفاصيل الخدمة</button>
                  <button
                    style={{padding:"11px 24px",borderRadius:11,background:"var(--s)",color:"#fff",border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:14,fontWeight:600,transition:"all .22s",display:"flex",alignItems:"center",gap:8}}
                    onMouseEnter={e=>{e.currentTarget.style.background="#6aad5a";e.currentTarget.style.transform="translateY(-2px)"}}
                    onMouseLeave={e=>{e.currentTarget.style.background="var(--s)";e.currentTarget.style.transform="translateY(0)"}}
                  >
                    اطلب الخدمة
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </button>
                </div>
              </div>

              <div style={{background:"rgba(255,255,255,.05)",border:"1px solid rgba(255,255,255,.08)",borderRadius:20,padding:"28px 20px",display:"flex",flexDirection:"column",alignItems:"center",gap:14,textAlign:"center"}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:52,fontWeight:700,color:"var(--s)",lineHeight:1,letterSpacing:"-1.5px"}}>{sel.stat}</div>
                <div style={{fontSize:12,color:"rgba(255,255,255,.4)",fontWeight:500}}>{sel.statLabel}</div>
                <div style={{width:36,height:1,background:"rgba(123,191,106,.25)"}}/>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:13,fontStyle:"italic",color:"rgba(123,191,106,.5)"}}>{sel.en}</div>
              </div>
            </div>

            {/* Highlights */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
              {sel.highlights.map((h,i)=>(
                <div key={i}
                  style={{background:"var(--w)",border:"1.5px solid var(--f08)",borderRadius:14,padding:"16px",display:"flex",alignItems:"center",gap:10,transition:"all .2s",cursor:"default"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(123,191,106,.4)";e.currentTarget.style.boxShadow="0 4px 16px rgba(30,45,20,.06)"}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--f08)";e.currentTarget.style.boxShadow="none"}}
                >
                  <div style={{width:22,height:22,borderRadius:"50%",background:"var(--sbg)",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="var(--s)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{fontSize:13.5,fontWeight:600,color:"var(--f)"}}>{h}</span>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div style={{display:"flex",gap:10,justifyContent:"flex-end",paddingTop:4}}>
              <button onClick={()=>setActive(Math.max(0,active-1))} disabled={active===0}
                style={{padding:"8px 18px",borderRadius:10,border:"1.5px solid",borderColor:active===0?"rgba(30,45,20,.1)":"rgba(30,45,20,.15)",background:"transparent",cursor:active===0?"not-allowed":"pointer",color:active===0?"rgba(30,45,20,.25)":"var(--f)",fontFamily:"inherit",fontSize:13,fontWeight:500,transition:"all .2s"}}>
                ← السابق
              </button>
              <div style={{display:"flex",gap:6,alignItems:"center"}}>
                {SERVICES.map((_,i)=>(
                  <div key={i} onClick={()=>setActive(i)}
                    style={{width:i===active?20:6,height:6,borderRadius:3,background:i===active?"var(--s)":"rgba(30,45,20,.15)",cursor:"pointer",transition:"all .3s"}}/>
                ))}
              </div>
              <button onClick={()=>setActive(Math.min(SERVICES.length-1,active+1))} disabled={active===SERVICES.length-1}
                style={{padding:"8px 18px",borderRadius:10,border:"1.5px solid",borderColor:active===SERVICES.length-1?"rgba(30,45,20,.1)":"rgba(30,45,20,.15)",background:active===SERVICES.length-1?"transparent":"var(--f)",cursor:active===SERVICES.length-1?"not-allowed":"pointer",color:active===SERVICES.length-1?"rgba(30,45,20,.25)":"#fff",fontFamily:"inherit",fontSize:13,fontWeight:500,transition:"all .2s"}}>
                التالي →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ═══════ PACKAGES ═══════ */}
      {tab==="packages" && (
        <section style={{maxWidth:1320,margin:"0 auto",padding:"0 56px 96px"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
            {PACKAGES.map(pkg=>(
              <div key={pkg.tier}
                style={{borderRadius:24,padding:"40px 32px",border:"1.5px solid",position:"relative",overflow:"hidden",transition:"all .3s",cursor:"default",
                  background:pkg.highlight?"var(--f)":"var(--w)",
                  borderColor:pkg.highlight?"rgba(123,191,106,.3)":"rgba(30,45,20,.09)"}}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 24px 64px rgba(30,45,20,.14)"}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}
              >
                {pkg.highlight && <div style={{position:"absolute",top:20,left:20,background:"var(--s)",color:"#fff",fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:100,letterSpacing:.5}}>الأكثر طلباً</div>}
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:36,fontWeight:700,color:pkg.highlight?pkg.color:"var(--f)",lineHeight:1,marginBottom:4}}>{pkg.tier}</div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:13,fontStyle:"italic",color:pkg.highlight?"rgba(197,165,90,.6)":"rgba(30,45,20,.35)",marginBottom:10}}>{pkg.tierEn}</div>
                <div style={{fontSize:12.5,fontWeight:500,padding:"4px 12px",borderRadius:100,display:"inline-block",marginBottom:28,background:pkg.highlight?"rgba(123,191,106,.12)":"rgba(30,45,20,.05)",color:pkg.highlight?"#A8D49A":"rgba(30,45,20,.5)"}}>{pkg.tagline}</div>
                <div style={{height:1,background:pkg.highlight?"rgba(255,255,255,.08)":"rgba(30,45,20,.08)",marginBottom:24}}/>
                {pkg.features.map(f=>(
                  <div key={f} style={{display:"flex",alignItems:"center",gap:10,marginBottom:14,fontSize:14}}>
                    <div style={{width:20,height:20,borderRadius:"50%",background:pkg.highlight?"rgba(123,191,106,.15)":"rgba(123,191,106,.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="var(--s)" strokeWidth="1.8" strokeLinecap="round"/></svg>
                    </div>
                    <span style={{fontWeight:500,color:pkg.highlight?"rgba(255,255,255,.8)":"rgba(30,45,20,.75)"}}>{f}</span>
                  </div>
                ))}
                <button style={{width:"100%",marginTop:28,padding:"14px",borderRadius:12,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:15,fontWeight:600,transition:"all .22s",
                  background:pkg.highlight?"var(--s)":"rgba(30,45,20,.08)",
                  color:pkg.highlight?"#fff":"var(--f)"}}
                  onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.background=pkg.highlight?"#6aad5a":"rgba(30,45,20,.14)"}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.background=pkg.highlight?"var(--s)":"rgba(30,45,20,.08)"}}
                >اختر الباقة</button>
              </div>
            ))}
          </div>
          <div style={{marginTop:28,padding:"18px 24px",background:"rgba(123,191,106,.06)",border:"1px solid rgba(123,191,106,.15)",borderRadius:14,textAlign:"center",fontSize:14,color:"rgba(30,45,20,.55)"}}>
            جميع الباقات تشمل دعماً مباشراً وإدارة إلكترونية متطورة ·
            <span style={{color:"var(--s)",fontWeight:600,marginRight:6}}>تواصل معنا لمعرفة الأنسب لمنشأتك</span>
          </div>
        </section>
      )}

      {/* ═══════ CTA BAND ═══════ */}
      <div style={{background:"var(--f)",margin:"0 56px 80px",borderRadius:28,padding:"60px 68px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:40,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 50% 80% at 100% 50%, rgba(123,191,106,.1) 0%, transparent 60%)",pointerEvents:"none"}}/>
        <div>
          <h3 style={{fontSize:30,fontWeight:700,color:"#fff",lineHeight:1.3,marginBottom:10}}>هل أنت مستعد لبدء رحلة نجاحك؟</h3>
          <p style={{fontSize:15,color:"rgba(255,255,255,.5)",maxWidth:480,lineHeight:1.75}}>يسعدنا الاجتماع بك لفهم احتياجاتك وتقديم خطة عمل مخصصة. استشارتك الأولى مجانية تماماً.</p>
        </div>
        <div style={{display:"flex",gap:12,flexShrink:0}}>
          <button
            style={{background:"rgba(255,255,255,.08)",border:"1px solid rgba(255,255,255,.15)",color:"rgba(255,255,255,.78)",padding:"13px 30px",borderRadius:14,cursor:"pointer",fontFamily:"inherit",fontSize:15,fontWeight:500,transition:"all .22s",whiteSpace:"nowrap"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.4)";e.currentTarget.style.color="#fff"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,.15)";e.currentTarget.style.color="rgba(255,255,255,.78)"}}
          >اعرف أكثر</button>
          <button
            style={{background:"var(--s)",color:"#fff",padding:"13px 30px",borderRadius:14,border:"none",cursor:"pointer",fontFamily:"inherit",fontSize:15,fontWeight:600,transition:"all .22s",whiteSpace:"nowrap"}}
            onMouseEnter={e=>{e.currentTarget.style.background="#6aad5a";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 12px 32px rgba(123,191,106,.3)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="var(--s)";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}
          >احجز استشارة مجانية →</button>
        </div>
      </div>
    </div>
  );
}
