/* ============================================================
   YEMI NAILS STUDIO — script.js
   ============================================================ */

/* ════════════════════════════════════════════════════════════
   ⚙️  CONFIGURACIÓN — EDITA SOLO ESTO PARA PERSONALIZAR
   ════════════════════════════════════════════════════════════ */
const CONFIG = {
  // WhatsApp en formato internacional SIN "+", SIN espacios.
  // España: 34 + 9 dígitos -> "34662689844"
  whatsapp: "34662689844",

  // Usuarios de redes (sin @)
  instagram: "yeminails.studio",
  tiktok:    "yeminails.studio",

  // Contacto
  email:   "hola@yeminails.studio",
  phone:   "+34 662 68 98 44",
  address: "Carrer de València 123 · Eixample, Barcelona",

  // Moneda mostrada en precios (en España el símbolo va después: 25€)
  currency: "€",

  // Horarios disponibles para reservar
  slots: ["10:00", "11:30", "13:00", "15:00", "16:30", "18:00"],

  // Días cerrados (0 = domingo, 6 = sábado). Aquí: cerrado domingo.
  closedDays: [0],
};

/* ════════════════════════════════════════════════════════════
   📸  GALERÍA — agrega/edita diseños aquí
   ════════════════════════════════════════════════════════════ */
const UNS = (id, w = 760) => `https://images.unsplash.com/photo-${id}?w=${w}&q=74&auto=format&fit=crop`;

const GALLERY = [
  { img: "./assets/images/studio-2.jpeg", full: "./assets/images/studio-2.jpeg", cat: "Korean",    title: "Korean Blossom", desc: "Flores 3D a mano alzada con líneas doradas. Nuestro estilo coreano premium.", price: 55, time: "120 min", featured: true },
  { img: "./assets/images/studio-4.jpeg", full: "./assets/images/studio-4.jpeg", cat: "Soft Pink", title: "Pink Daisy",     desc: "Rosa chicle glossy con margaritas blancas. El favorito clean girl.", price: 42, time: "70 min" },
  { img: "./assets/images/studio-1.jpeg", full: "./assets/images/studio-1.jpeg", cat: "French",    title: "French Almond",  desc: "Almendra larga con punta francesa nítida y acabado glossy espejo.", price: 50, time: "100 min", featured: true},
  { img: "./assets/images/studio-3.jpeg", full: "./assets/images/studio-3.jpeg", cat: "Gel",       title: "Jardín Menta",   desc: "Verde menta pastel con micro-flores de acento. Fresco y delicado.", price: 40, time: "80 min" },

  { img: UNS("1632345031435-8727f6897d53"), full: UNS("1632345031435-8727f6897d53", 1100), cat: "Soft Pink", title: "Nude Glaze",     desc: "Base nude con baño glaseado para un acabado vidrio natural.", price: 38, time: "70 min" },
  { img: UNS("1610992015762-45dca7fa3a85"), full: UNS("1610992015762-45dca7fa3a85", 1100), cat: "Luxury",    title: "Lavender Dream", desc: "Lavanda suave con detalles perlados de inspiración editorial.", price: 48, time: "90 min" },
  { img: UNS("1630843599725-32ead7671867"), full: UNS("1630843599725-32ead7671867", 1100), cat: "French",    title: "Modern French",  desc: "La francesa reinventada: líneas finas y geometría sutil.", price: 45, time: "85 min" },
  { img: UNS("1610992015836-7c249d75782d"), full: UNS("1610992015836-7c249d75782d", 1100), cat: "Gel",       title: "Rose Glass",     desc: "Soft gel rosado con efecto cristal y brillo espejo.", price: 44, time: "85 min" },
  { img: UNS("1519014816548-bf5fe059798b"), full: UNS("1519014816548-bf5fe059798b", 1100), cat: "Luxury",    title: "Marble Luxe",    desc: "Mármol elegante con vetas champagne gold pintadas a mano.", price: 62, time: "120 min", featured: true },
  { img: UNS("1604902396830-aca29e19b067"), full: UNS("1604902396830-aca29e19b067", 1100), cat: "Floral",    title: "Petal Art",      desc: "Composición floral delicada en tonos pastel.", price: 50, time: "100 min" },
  { img: UNS("1587729927069-ef3b7a5ab9b4"), full: UNS("1587729927069-ef3b7a5ab9b4", 1100), cat: "Korean",    title: "Seoul Chic",     desc: "Minimalismo coreano con acentos cromados sutiles.", price: 52, time: "100 min" },
  { img: UNS("1610992015732-2449b76344bc"), full: UNS("1610992015732-2449b76344bc", 1100), cat: "Acrylic",   title: "Sculpt Acrylic", desc: "Esculpido acrílico resistente con la forma que sueñas.", price: 50, time: "120 min"},
  { img: UNS("1599206676335-193c82b13c9e"), full: UNS("1599206676335-193c82b13c9e", 1100), cat: "Gel",       title: "Glossy Mauve",   desc: "Malva profundo con acabado glossy de larga duración.", price: 40, time: "75 min" },
  { img: UNS("1588359953494-0c215e3cedc6"), full: UNS("1588359953494-0c215e3cedc6", 1100), cat: "Luxury",    title: "Champagne Tips", desc: "Puntas doradas tipo joyería para ocasiones especiales.", price: 58, time: "115 min" },
  { img: UNS("1588015810531-dd522c9c8bbb"), full: UNS("1588015810531-dd522c9c8bbb", 1100), cat: "Soft Pink", title: "Blush Soft",     desc: "Rosa empolvado natural, perfecto para el día a día.", price: 36, time: "65 min" },
  { img: UNS("1522337660859-02fbefca4702"), full: UNS("1522337660859-02fbefca4702", 1100), cat: "Acrylic",   title: "Spa Ritual",     desc: "Manicura completa con ritual de cuidado e hidratación.", price: 30, time: "60 min" },
  { img: UNS("1643648854897-7b5845b4c04c"), full: UNS("1643648854897-7b5845b4c04c", 1100), cat: "Floral",    title: "Petal Whisper",  desc: "Acentos florales suaves sobre base rosada empolvada.", price: 48, time: "95 min" },
  { img: UNS("1637264718120-e70224dc0662"), full: UNS("1637264718120-e70224dc0662", 1100), cat: "Korean",    title: "Glazed Mochi",   desc: "Efecto glazed donut coreano: ultra glossy y jugoso.", price: 50, time: "90 min" },
];

const FILTERS = ["Todas", "Acrylic", "Gel", "French", "Soft Pink", "Floral", "Luxury", "Korean"];

/* ════════════════════════════════════════════════════════════
   💖  SERVICIOS
   ════════════════════════════════════════════════════════════ */
const SERVICES = [
  { icon: "💅", title: "Manicura Clásica",       desc: "Limado, cutícula, hidratación y esmaltado impecable.",                time: "45 min",  price: "25" },
  { icon: "💎", title: "Uñas Acrílicas",          desc: "Esculpido resistente con el largo y la forma que sueñas.",            time: "120 min", price: "50", premium: true },
  { icon: "✨", title: "Soft Gel",                desc: "Extensiones ligeras y naturales, flexibles y muy duraderas.",         time: "90 min",  price: "45" },
  { icon: "🎨", title: "Nail Art Premium",        desc: "Diseños de autor: flores 3D, foil, cromados y pedrería.",             time: "+60 min", price: "15", premium: true, from: true },
  { icon: "🌸", title: "Pedicure Spa",            desc: "Ritual relajante con exfoliación, masaje y esmaltado perfecto.",      time: "60 min",  price: "35" },
  { icon: "🤍", title: "Francesa Moderna",        desc: "La clásica reinventada: líneas finas, color y glow.",                 time: "75 min",  price: "38" },
  { icon: "👑", title: "Diseños Personalizados",  desc: "Creamos un set único pensado solo para ti, de principio a fin.",      time: "a medida", price: null, quote: true, premium: true },
];

/* ════════════════════════════════════════════════════════════
   ⭐  TESTIMONIOS
   ════════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
  { name: "Valentina R.", role: "Cliente frecuente", stars: 5, text: "Nunca había recibido tantos cumplidos por mis uñas. El detalle es de otro nivel.", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "Camila S.",    role: "Novia 2025",        stars: 5, text: "Me hicieron las uñas para mi boda y lloré de lo hermosas. Arte puro.",            avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Daniela M.",   role: "Creadora de contenido", stars: 5, text: "El ambiente es un spa de lujo y el resultado siempre impecable. Mi lugar favorito.", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Ana P.",       role: "Cliente nueva",     stars: 5, text: "Reservé por WhatsApp en segundos y salí enamorada. Súper profesionales.",       avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "Regina T.",    role: "Cliente VIP",       stars: 5, text: "Diseños que parecen joyería y duran semanas perfectas. 100% recomendado.",      avatar: "https://randomuser.me/api/portraits/women/90.jpg" },
  { name: "Sofía L.",     role: "Cliente frecuente", stars: 5, text: "Limpieza impecable y trato divino. Cada visita es un mimo total.",              avatar: "https://randomuser.me/api/portraits/women/32.jpg" },
];

/* ════════════════════════════════════════════════════════════
   📱  FEED SOCIAL (Instagram / TikTok)
   ════════════════════════════════════════════════════════════ */
const SOCIAL = [
  { src: "./assets/images/studio-2.jpeg", reel: true },
  { src: UNS("1604902396830-aca29e19b067", 400) },
  { src: "./assets/images/studio-4.jpeg" },
  { src: UNS("1610992015762-45dca7fa3a85", 400), reel: true },
  { src: "./assets/images/studio-1.jpeg" },
  { src: UNS("1632345031435-8727f6897d53", 400) },
  { src: "./assets/images/studio-3.jpeg" },
  { src: UNS("1588359953494-0c215e3cedc6", 400), reel: true },
  { src: UNS("1519014816548-bf5fe059798b", 400) },
  { src: UNS("1587729927069-ef3b7a5ab9b4", 400) },
  { src: UNS("1599206676335-193c82b13c9e", 400) },
  { src: UNS("1588015810531-dd522c9c8bbb", 400) },
];

/* ════════════════════════════════════════════════════════════
   🔧  HELPERS
   ════════════════════════════════════════════════════════════ */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(hover: none)").matches;
const price = (n) => `${n}${CONFIG.currency}`;
const waLink = (msg = "Hola Yemi Nails ✨ quiero más información.") =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

/* ════════════════════════════════════════════════════════════
   🚀  INIT
   ════════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderServices();
  renderTestimonials();
  renderSocial();
  buildCalendar();
  wireLinks();
  initCursor();
  initNav();
  initReveal();
  initParticles();
  initProgress();
  $("#year").textContent = new Date().getFullYear();
  // Init inmediato: GSAP/Lenis ya están disponibles por los <script defer>.
  initLenisAndGSAP();
  runLoader();
});

/* ════════════════════════════════════════════════════════════
   ⏳  LOADER
   ════════════════════════════════════════════════════════════ */
function runLoader() {
  const loader = $("#loader");
  const bar = $(".loader__bar span");
  let p = 0, done = false;
  function finish() {
    if (done) return; done = true;
    loader.classList.add("is-done");
    document.body.classList.add("cursor-ready");
    heroIntro();
  }
  const tick = setInterval(() => {
    p += Math.random() * 24;
    if (p >= 100) { p = 100; clearInterval(tick); setTimeout(finish, 180); }
    if (bar) bar.style.width = p + "%";
  }, 120);
  setTimeout(finish, 3000); // failsafe: el loader nunca se queda colgado
}

function heroIntro() {
  const els = $$(".hero [data-reveal]");
  const cards = $$(".hero__gallery .float-card");
  if (typeof gsap !== "undefined" && !reduceMotion) {
    gsap.timeline({ defaults: { ease: "power3.out" } })
      .fromTo(els, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.1 })
      .fromTo(cards, { y: 60, opacity: 0, scale: 0.9, rotate: 4 },
              { y: 0, opacity: 1, scale: 1, rotate: 0, duration: 1.1, stagger: 0.12 }, "-=0.9");
  } else {
    [...els, ...cards].forEach((el) => el.classList.add("in"));
  }
  // Garantía: el hero queda 100% visible aunque la animación se congele
  // (p. ej. pestaña en segundo plano, que suspende requestAnimationFrame).
  setTimeout(() => {
    [...els, ...cards].forEach((el) => {
      if (parseFloat(getComputedStyle(el).opacity) < 0.95) { el.style.opacity = "1"; el.style.transform = "none"; }
    });
  }, 2500);
}

/* ════════════════════════════════════════════════════════════
   🌊  LENIS + GSAP
   ════════════════════════════════════════════════════════════ */
let lenis = null;
function initLenisAndGSAP() {
  if (typeof Lenis !== "undefined" && !reduceMotion) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.95 });
    window.lenis = lenis; // acceso para depuración / control externo
    // Lenis con su PROPIO rAF; GSAP conserva su ticker independiente (no lo tocamos,
    // si no se congela y las animaciones no corren).
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    if (typeof ScrollTrigger !== "undefined") lenis.on("scroll", ScrollTrigger.update);
  }

  // Smooth anchor scrolling
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      closeMenu();
      if (lenis) lenis.scrollTo(target, { offset: -70, duration: 1.3 });
      else target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Parallax sutil en blobs y tarjetas flotantes del hero
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined" && !reduceMotion) {
    gsap.to(".hero .blob--rose", { yPercent: 18, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero .blob--lav",  { yPercent: -14, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    $$(".float-card").forEach((c) => {
      const f = parseFloat(c.dataset.float || 0.06);
      gsap.to(c, { yPercent: f * 120, scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    });
  }
}

/* ════════════════════════════════════════════════════════════
   🖱️  CUSTOM CURSOR
   ════════════════════════════════════════════════════════════ */
function initCursor() {
  if (isTouch) return;
  const dot = $(".cursor-dot"), ring = $(".cursor-ring");
  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });
  (function loop() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", (e) => {
    const h = e.target.closest('[data-cursor="hover"], a, button');
    ring.classList.toggle("is-hover", !!h);
    dot.classList.toggle("is-hover", !!h);
  });
}

/* ════════════════════════════════════════════════════════════
   🧭  NAV + MENÚ MÓVIL
   ════════════════════════════════════════════════════════════ */
function initNav() {
  const nav = $("#nav"), burger = $("#burger"), links = $("#navLinks");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open);
  });
}
function closeMenu() {
  $("#navLinks")?.classList.remove("is-open");
  $("#burger")?.classList.remove("is-open");
}

/* ════════════════════════════════════════════════════════════
   ✨  REVEAL (IntersectionObserver) — excluye hero (lo anima GSAP)
   ════════════════════════════════════════════════════════════ */
function initReveal() {
  const items = $$("[data-reveal]").filter((el) => !el.closest(".hero"));
  if (!("IntersectionObserver" in window)) { items.forEach((i) => i.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0, rootMargin: "200px 0px 200px 0px" });
  items.forEach((i) => io.observe(i));
  // Red de seguridad: nada se queda invisible aunque el observer no dispare (scroll muy rápido, etc.).
  setTimeout(() => items.forEach((i) => i.classList.add("in")), 4000);
}

/* ════════════════════════════════════════════════════════════
   🌟  PARTÍCULAS (hero)
   ════════════════════════════════════════════════════════════ */
function initParticles() {
  if (reduceMotion) return;
  const host = $(".hero__bg");
  if (!host) return;
  const N = window.innerWidth < 600 ? 6 : 12;
  for (let i = 0; i < N; i++) {
    const s = document.createElement("span");
    s.className = "particle";
    const size = Math.random() * 5 + 2;
    s.style.width = s.style.height = size + "px";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.opacity = (Math.random() * 0.5 + 0.2).toFixed(2);
    host.appendChild(s);
    if (typeof gsap !== "undefined") {
      gsap.to(s, {
        y: (Math.random() - 0.5) * 160, x: (Math.random() - 0.5) * 120,
        duration: Math.random() * 8 + 6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: Math.random() * 3,
      });
    }
  }
}

/* ════════════════════════════════════════════════════════════
   📊  PROGRESS BAR
   ════════════════════════════════════════════════════════════ */
function initProgress() {
  const bar = $(".scroll-progress span");
  const upd = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  };
  upd();
  window.addEventListener("scroll", upd, { passive: true });
}

/* ════════════════════════════════════════════════════════════
   🖼️  GALERÍA + FILTROS + MODAL
   ════════════════════════════════════════════════════════════ */
function renderGallery() {
  const grid = $("#galleryGrid"), filtersEl = $("#filters");

  filtersEl.innerHTML = FILTERS.map((f, i) =>
    `<button class="filter-btn${i === 0 ? " is-active" : ""}" data-filter="${f}" data-cursor="hover">${f}</button>`).join("");

  const card = (g, i) => `
    <article class="gitem" data-cat="${g.cat}" data-i="${i}" style="transition-delay:${(i % 6) * 60}ms">
      ${g.featured ? `<span class="gitem__badge">★ Destacado</span>` : ""}
      <span class="gitem__plus">+</span>
      <img src="${g.img}" alt="${g.title} — ${g.cat}" loading="lazy" />
      <div class="gitem__overlay">
        <span class="gitem__cat">${g.cat}</span>
        <span class="gitem__title">${g.title}</span>
      </div>
    </article>`;

  grid.innerHTML = GALLERY.map(card).join("");
  revealItems();

  filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", filtersEl).forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    $$(".gitem", grid).forEach((it) => {
      const show = f === "Todas" || it.dataset.cat === f;
      it.style.display = show ? "" : "none";
    });
    revealItems();
    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  });

  grid.addEventListener("click", (e) => {
    const it = e.target.closest(".gitem");
    if (it) openModal(GALLERY[+it.dataset.i]);
  });

  function revealItems() {
    const vis = $$(".gitem", grid).filter((i) => i.style.display !== "none");
    if (!("IntersectionObserver" in window)) { vis.forEach((i) => i.classList.add("in")); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0, rootMargin: "200px 0px 200px 0px" });
    vis.forEach((i) => io.observe(i));
    setTimeout(() => vis.forEach((i) => i.classList.add("in")), 4000);
  }
}

function openModal(g) {
  const m = $("#modal");
  $("#modalImg").src = g.full; $("#modalImg").alt = g.title;
  $("#modalCat").textContent = g.cat;
  $("#modalTitle").textContent = g.title;
  $("#modalDesc").textContent = g.desc;
  $("#modalPrice").textContent = price(g.price);
  $("#modalTime").textContent = "⏱ " + g.time;
  m.classList.add("is-open");
  document.body.style.overflow = "hidden";
  lenis?.stop();
}
function closeModal() {
  $("#modal").classList.remove("is-open");
  document.body.style.overflow = "";
  lenis?.start();
}
// Captura: cierra el modal ANTES de que el ancla "Quiero este diseño" haga scroll (reactiva Lenis a tiempo).
document.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); }, true);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* ════════════════════════════════════════════════════════════
   💅  SERVICIOS
   ════════════════════════════════════════════════════════════ */
function renderServices() {
  const grid = $("#servicesGrid");
  const sel = $("#bk-service");

  grid.innerHTML = SERVICES.map((s, i) => `
    <article class="scard" data-reveal style="transition-delay:${(i % 3) * 80}ms" data-cursor="hover">
      ${s.premium ? `<span class="scard__premium">Premium</span>` : ""}
      <div class="scard__icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p class="scard__desc">${s.desc}</p>
      <div class="scard__foot">
        <span class="scard__price">${s.quote ? "Cotización" : `${s.from ? '<small>desde </small>' : ""}${price(s.price)}`}</span>
        <span class="scard__time">⏱ ${s.time}</span>
      </div>
    </article>`).join("");

  // Spotlight hover
  $$(".scard", grid).forEach((c) => {
    c.addEventListener("mousemove", (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", (e.clientX - r.left) + "px");
      c.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  // Llenar select de reservas
  sel.innerHTML = `<option value="" disabled selected>Selecciona un servicio</option>` +
    SERVICES.map((s) => `<option value="${s.title}">${s.title}${s.price && !s.quote ? ` — ${price(s.price)}` : ""}</option>`).join("");
  // Los data-reveal de estas tarjetas los observa initReveal() (se llama después en el init).
}

/* ════════════════════════════════════════════════════════════
   ⭐  TESTIMONIOS + CARRUSEL
   ════════════════════════════════════════════════════════════ */
function renderTestimonials() {
  const track = $("#testimonialTrack"), dotsEl = $("#testimonialDots");
  const fallback = (name) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=EFAEBE&color=fff&size=120`;

  track.innerHTML = TESTIMONIALS.map((t) => `
    <article class="tcard">
      <div class="tcard__stars">${Array.from({ length: t.stars }, (_, i) => `<span style="animation-delay:${i * 0.08}s">★</span>`).join("")}</div>
      <p class="tcard__text">“${t.text}”</p>
      <div class="tcard__who">
        <img class="tcard__avatar" src="${t.avatar}" alt="${t.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallback(t.name)}'" />
        <div><div class="tcard__name">${t.name}</div><div class="tcard__role">${t.role}</div></div>
      </div>
    </article>`).join("");

  let index = 0, step = 0, maxIndex = 0;
  const visible = () => window.innerWidth <= 760 ? 1 : window.innerWidth <= 1024 ? 2 : 3;

  function measure() {
    const card = track.querySelector(".tcard");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    step = card.getBoundingClientRect().width + gap;
    maxIndex = Math.max(0, TESTIMONIALS.length - visible());
    index = Math.min(index, maxIndex);
    renderDots();
    go(index);
  }
  function renderDots() {
    dotsEl.innerHTML = Array.from({ length: maxIndex + 1 }, (_, i) =>
      `<button class="tdot${i === index ? " is-active" : ""}" data-i="${i}" aria-label="Ir a reseña ${i + 1}" data-cursor="hover"></button>`).join("");
  }
  function go(i) {
    index = Math.max(0, Math.min(i, maxIndex));
    track.style.transform = `translateX(${-index * step}px)`;
    $$(".tdot", dotsEl).forEach((d, di) => d.classList.toggle("is-active", di === index));
  }
  dotsEl.addEventListener("click", (e) => { const d = e.target.closest(".tdot"); if (d) go(+d.dataset.i); });
  window.addEventListener("resize", measure);
  measure();

  if (!reduceMotion) {
    let timer = setInterval(() => go(index >= maxIndex ? 0 : index + 1), 5000);
    const wrap = $(".tcarousel");
    wrap.addEventListener("mouseenter", () => clearInterval(timer));
    wrap.addEventListener("mouseleave", () => timer = setInterval(() => go(index >= maxIndex ? 0 : index + 1), 5000));
  }
}

/* ════════════════════════════════════════════════════════════
   📱  SOCIAL FEED
   ════════════════════════════════════════════════════════════ */
function renderSocial() {
  const grid = $("#socialGrid");
  grid.innerHTML = SOCIAL.map((s) => `
    <a class="igcell${s.reel ? " igcell--reel" : ""}" href="https://instagram.com/${CONFIG.instagram}" target="_blank" rel="noopener" data-cursor="hover">
      <img src="${s.src}" alt="Diseño Yemi Nails Studio en Instagram" loading="lazy" />
    </a>`).join("");
}

/* ════════════════════════════════════════════════════════════
   📅  CALENDARIO DE RESERVAS
   ════════════════════════════════════════════════════════════ */
let bk = { date: null, time: null };
function buildCalendar() {
  const grid = $("#calGrid"), label = $("#calMonth");
  const slotsEl = $("#slots");
  const today = new Date(); today.setHours(0, 0, 0, 0);
  let view = new Date(today.getFullYear(), today.getMonth(), 1);

  slotsEl.innerHTML = CONFIG.slots.map((s) => `<button type="button" class="slot" data-time="${s}" data-cursor="hover">${s}</button>`).join("");
  slotsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".slot"); if (!b) return;
    $$(".slot", slotsEl).forEach((x) => x.classList.remove("is-selected"));
    b.classList.add("is-selected"); bk.time = b.dataset.time; updateSummary();
  });

  function render() {
    const y = view.getFullYear(), m = view.getMonth();
    label.textContent = view.toLocaleDateString("es-ES", { month: "long", year: "numeric" });
    const firstDay = (new Date(y, m, 1).getDay() + 6) % 7; // lunes = 0
    const days = new Date(y, m + 1, 0).getDate();
    let html = "";
    for (let i = 0; i < firstDay; i++) html += `<span class="cal__day is-empty"></span>`;
    for (let d = 1; d <= days; d++) {
      const date = new Date(y, m, d);
      const past = date < today;
      const closed = CONFIG.closedDays.includes(date.getDay());
      const isToday = date.getTime() === today.getTime();
      const sel = bk.date && date.getTime() === bk.date.getTime();
      const cls = ["cal__day"];
      if (past || closed) cls.push("is-disabled");
      if (isToday) cls.push("is-today");
      if (sel) cls.push("is-selected");
      html += `<button type="button" class="${cls.join(" ")}" data-d="${d}" ${past || closed ? "tabindex='-1'" : 'data-cursor="hover"'}>${d}</button>`;
    }
    grid.innerHTML = html;
  }

  grid.addEventListener("click", (e) => {
    const b = e.target.closest(".cal__day");
    if (!b || b.classList.contains("is-disabled") || b.classList.contains("is-empty")) return;
    bk.date = new Date(view.getFullYear(), view.getMonth(), +b.dataset.d);
    render(); updateSummary();
  });
  $("#calPrev").addEventListener("click", () => {
    const min = new Date(today.getFullYear(), today.getMonth(), 1);
    const prev = new Date(view.getFullYear(), view.getMonth() - 1, 1);
    if (prev >= min) { view = prev; render(); }
  });
  $("#calNext").addEventListener("click", () => { view = new Date(view.getFullYear(), view.getMonth() + 1, 1); render(); });

  render();
}

function updateSummary() {
  $("#sumDate").textContent = bk.date
    ? bk.date.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })
    : "Selecciona una fecha";
  $("#sumTime").textContent = bk.time ? bk.time + " h" : "— hora";
}

/* ════════════════════════════════════════════════════════════
   📨  FORMULARIO → WHATSAPP
   ════════════════════════════════════════════════════════════ */
document.addEventListener("submit", (e) => {
  if (e.target.id === "bookingForm") {
    e.preventDefault();
    const nameEl = $("#bk-name"), serviceEl = $("#bk-service");
    const name = nameEl.value.trim();
    const service = serviceEl.value;
    const phone = $("#bk-phone").value.trim();
    const notes = $("#bk-notes").value.trim();

    if (!name) return flash(nameEl, "Escribe tu nombre");
    if (!service) return flash(serviceEl, "Elige un servicio");
    if (!bk.date) return flash($("#bkSummary"), "Elige una fecha en el calendario");
    if (!bk.time) return flash($("#bkSummary"), "Elige un horario");

    const fecha = bk.date.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    const msg =
`✨ *Nueva reserva — Yemi Nails Studio* ✨
👤 Nombre: ${name}
💅 Servicio: ${service}
📅 Fecha: ${fecha}
⏰ Hora: ${bk.time}${phone ? `\n📞 Tel: ${phone}` : ""}${notes ? `\n📝 Notas: ${notes}` : ""}

¿Me confirmas la disponibilidad? ¡Gracias!`;
    window.open(waLink(msg), "_blank");
  }

  if (e.target.id === "newsForm") {
    e.preventDefault();
    const input = e.target.querySelector("input");
    const btn = e.target.querySelector("button");
    if (input.value) { btn.textContent = "✓"; input.value = ""; input.placeholder = "¡Gracias! Ya estás suscrita ♡"; setTimeout(() => btn.textContent = "→", 2500); }
  }
});

function flash(el, msg) {
  const target = el.closest(".field") || el;
  target.animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "translateX(0)" }],
    { duration: 320 }
  );
  if (el.tagName === "INPUT" || el.tagName === "SELECT") { el.style.borderColor = "#e08aa0"; setTimeout(() => el.style.borderColor = "", 1500); }
  showToast(msg);
}

let toastTimer;
function showToast(msg) {
  let t = $("#toast");
  if (!t) {
    t = document.createElement("div"); t.id = "toast";
    t.style.cssText = "position:fixed;left:50%;bottom:2rem;transform:translateX(-50%) translateY(20px);z-index:1700;background:#211A1D;color:#fff;padding:.8rem 1.4rem;border-radius:40px;font-size:.9rem;box-shadow:0 14px 40px -10px rgba(0,0,0,.5);opacity:0;transition:.35s cubic-bezier(.22,1,.36,1);pointer-events:none;max-width:90vw;text-align:center;";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  requestAnimationFrame(() => { t.style.opacity = "1"; t.style.transform = "translateX(-50%) translateY(0)"; });
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.style.opacity = "0"; t.style.transform = "translateX(-50%) translateY(20px)"; }, 2600);
}

/* ════════════════════════════════════════════════════════════
   🔗  ENLAZAR REDES / WHATSAPP
   ════════════════════════════════════════════════════════════ */
function wireLinks() {
  const ig = `https://instagram.com/${CONFIG.instagram}`;
  const tt = `https://tiktok.com/@${CONFIG.tiktok}`;
  const setHref = (id, href, blank = true) => { const el = $(id); if (el) { el.href = href; if (blank) { el.target = "_blank"; el.rel = "noopener"; } } };

  setHref("#igFollow", ig); setHref("#ttFollow", tt);
  setHref("#igFooter", ig); setHref("#ttFooter", tt);
  setHref("#waFooter", waLink());
  setHref("#waFloat", waLink("Hola Yemi Nails ✨ quiero reservar una cita."));
  setHref("#mbWa", waLink("Hola Yemi Nails ✨ quiero reservar una cita."));
  setHref("#mbIg", ig);

  $("#footAddress").textContent = CONFIG.address;
  $("#footPhone").textContent = CONFIG.phone;
  $("#footEmail").textContent = CONFIG.email;

  // Mostrar botón flotante al hacer scroll
  const wa = $("#waFloat");
  const showWa = () => wa.classList.toggle("in", window.scrollY > 500);
  showWa(); window.addEventListener("scroll", showWa, { passive: true });
}
