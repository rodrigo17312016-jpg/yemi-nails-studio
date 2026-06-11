# 🌸 Yemi Nails Studio — Barcelona · Web Premium

Sitio web ultra premium para nail studio de lujo en **Barcelona**. Diseño editorial femenino, glassmorphism, smooth scroll, galería filtrable, sistema de reservas con calendario e integración directa a **WhatsApp**.

Estética: *Apple × Dior Beauty × Korean Nail Studio × Spa Luxury*.

---

## 📁 Estructura

```
MANICURA/
├── index.html          → Estructura y SEO
├── styles.css          → Todo el diseño (paleta, glass, animaciones, responsive)
├── script.js           → Interacción + CONTENIDO EDITABLE (⚙️ CONFIG, galería, servicios…)
├── assets/
│   └── images/
│       ├── studio-1.jpeg  → Francesa almendra (tu foto)
│       ├── studio-2.jpeg  → Korean blossom (tu foto)
│       ├── studio-3.jpeg  → Verde menta floral (tu foto)
│       └── studio-4.jpeg  → Pink daisy (tu foto)
└── .claude/            → Servidor de previsualización (solo desarrollo, no se publica)
```

---

## ▶️ Cómo verla

**Opción rápida:** doble clic en `index.html` (se abre en tu navegador).

**Opción recomendada** (para que carguen bien las imágenes locales), con [Node.js](https://nodejs.org) instalado:

```bash
node .claude/serve.mjs
# Abre http://localhost:5050
```

---

## ⚙️ Personalización (lo más importante)

### 1. Datos del negocio — `script.js`, bloque `CONFIG` (arriba del todo)

```js
const CONFIG = {
  whatsapp: "34612345678",     // ← TU número, formato internacional SIN "+" ni espacios (España = 34 + 9 dígitos)
  instagram: "yeminails.studio",
  tiktok:    "yeminails.studio",
  email:   "hola@yeminails.studio",
  phone:   "+34 612 345 678",
  address: "Carrer de València 123 · Eixample, Barcelona",
  currency: "€",
  slots: ["10:00", "11:30", "13:00", "15:00", "16:30", "18:00"], // horarios reservables
  closedDays: [0],             // días cerrados (0=domingo). [0,1] cerraría dom y lun
};
```

> 📲 El formulario de reservas arma un mensaje y lo abre en WhatsApp con tu número. **Cambia `whatsapp` antes de publicar.**
> 💶 Los precios están en **euros** con valores de referencia para Barcelona — ajústalos a tu tarifa real en los arrays `GALLERY` y `SERVICES`.

### 2. Tus fotos
Reemplaza los archivos en `assets/images/` manteniendo los nombres (`studio-1.jpeg`…`studio-4.jpeg`),
o cambia las rutas en `script.js` (arrays `GALLERY` y `SOCIAL`). Las demás fotos de la galería son
de [Unsplash](https://unsplash.com) (temporales) — sustitúyelas por trabajos tuyos cuando quieras.

### 3. Galería, Servicios, Reseñas
Todo el contenido vive en arrays al inicio de `script.js`:
- `GALLERY` → diseños (imagen, categoría, título, descripción, precio, tiempo, `featured`)
- `SERVICES` → servicios (icono, título, descripción, tiempo, precio)
- `TESTIMONIALS` → reseñas
- `SOCIAL` → feed de Instagram

### 4. Mapa
En el footer de `index.html`, cambia el `src` del `<iframe>` por la ubicación real de tu local
(actualmente apunta al Eixample, Barcelona). Puedes generar uno nuevo en
[openstreetmap.org](https://www.openstreetmap.org) → *Compartir* → *HTML*, o usar Google Maps → *Insertar mapa*.

### ✅ Checklist antes de lanzar
- [ ] Número de WhatsApp real (`CONFIG.whatsapp`)
- [ ] Usuarios de Instagram y TikTok
- [ ] Teléfono, correo y dirección de Barcelona
- [ ] Mapa del footer con tu ubicación exacta
- [ ] Precios y servicios reales (en €)
- [ ] Tus propias fotos en la galería

---

## 🚀 Publicar (gratis)

| Método | Cómo |
|---|---|
| **Netlify Drop** | Arrastra la carpeta a [app.netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `npx vercel` en esta carpeta |
| **GitHub Pages** | Sube los archivos a un repo y activa Pages |

No requiere build: son archivos estáticos. Carga al instante.

---

## ✨ Tecnología
- HTML5 + CSS3 (variables, glassmorphism, `clamp()` responsive)
- JavaScript vanilla (sin framework, sin build)
- [GSAP + ScrollTrigger](https://gsap.com) — animaciones y parallax
- [Lenis](https://lenis.studio) — smooth scroll
- Tipografías Google: *Cormorant Garamond* + *Jost*
- SEO: meta tags, Open Graph, datos estructurados `NailSalon` (schema.org) con dirección de Barcelona
- Accesibilidad: respeta `prefers-reduced-motion`, navegación por teclado, roles ARIA

---

Hecho con ♡ para Yemi Nails Studio · Barcelona.
