# fedhinen.me

Portfolio personal de Victor Ruiz — Desarrollador Fullstack.

Construido con [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com) y [Three.js](https://threejs.org) para el efecto de fondo interactivo (DotField).

🌐 **Live:** [fedhinen.me](https://fedhinen.me)

## Stack

- **Framework:** Astro 5 (SSG)
- **Estilos:** Tailwind CSS 4 + `@tailwindcss/typography`
- **3D:** Three.js (shader-based particle field)
- **i18n:** Español (default) / English
- **Deploy:** GitHub Pages (via GitHub Actions)
- **Package manager:** pnpm

## Estructura del proyecto

```text
src/
├── components/       # Componentes Astro reutilizables
│   ├── BlogPost.astro       # Template compartido para posts (ES/EN)
│   ├── DotField.astro       # Efecto Three.js de fondo
│   ├── Hero.astro           # Sección hero con typewriter
│   ├── Experience.astro     # Experiencia laboral con scroll-spy
│   ├── Projects.astro       # Galería de proyectos
│   ├── Education.astro      # Educación
│   ├── Certifications.astro # Certificaciones
│   └── BlogList.astro       # Lista de posts del blog
├── content/          # Content Collections (blog, projects, certifications)
├── i18n/             # Traducciones y utilidades de idioma
├── layouts/          # Layout principal con SEO completo
├── pages/            # Rutas (ES en raíz, EN en /en)
└── styles/           # global.css con design tokens
public/
├── favicon.*         # Favicons (SVG, ICO, PNG, apple-touch-icon)
├── site.webmanifest  # PWA manifest
├── robots.txt        # Crawling rules + sitemap reference
├── cv.pdf            # Currículum descargable
└── assets/           # Imágenes estáticas (certificaciones)
```

## Comandos

| Comando | Acción |
| :--- | :--- |
| `pnpm install` | Instalar dependencias |
| `pnpm dev` | Servidor local en `localhost:4321` |
| `pnpm build` | Build de producción en `./dist/` |
| `pnpm preview` | Preview del build local |

## SEO

El sitio incluye:
- Open Graph y Twitter Card meta tags
- Canonical URLs y hreflang alternates (es/en)
- JSON-LD structured data (Person + Article)
- Sitemap auto-generado (`@astrojs/sitemap`)
- `robots.txt` con referencia al sitemap

## Deploy

Push a `main` dispara el workflow de GitHub Actions que:
1. Build con `withastro/action@v5`
2. Deploy a GitHub Pages

El dominio custom `fedhinen.me` está configurado via CNAME.

---

## Mejoras pendientes

### Organización / DRY
- [ ] Crear componente `ProjectPost.astro` compartido (mismo patrón que `BlogPost.astro`) para eliminar duplicación entre `pages/projects/[...slug].astro` y `pages/en/projects/[...slug].astro`
- [ ] Crear componente `BlogIndex.astro` compartido para unificar `pages/blog/index.astro` y `pages/en/blog/index.astro`
- [ ] Crear componente `ProjectsIndex.astro` compartido para las páginas de índice de proyectos

### Performance
- [ ] Self-host la fuente Inter (eliminar dependencia de Google Fonts para mejor LCP)
- [ ] Agregar `loading="lazy"` a imágenes de certificaciones en la sección principal (actualmente usan `eager`)
- [ ] Evaluar code-splitting del DotField (Three.js) con dynamic import para reducir bundle inicial

### SEO / Contenido
- [ ] Agregar OG image por defecto (captura o diseño para cuando no hay heroImage)
- [ ] Agregar `<meta name="twitter:site">` cuando se tenga cuenta de Twitter/X
- [ ] Mejorar descripciones de proyectos para SEO (más keywords naturales)

### Accesibilidad
- [ ] Auditoría WCAG 2.2 completa (contraste, focus states, screen reader)
- [ ] Agregar skip-to-content link
- [ ] Revisar contraste de `text-text-muted` sobre fondos con backdrop-filter

### Estilo / UX
- [ ] Transiciones de página más suaves entre idiomas (View Transitions)
- [ ] Dark mode (los design tokens ya están preparados para extender)
- [ ] Animación de entrada para la sección Education (scroll-reveal como en Projects)
- [ ] Breadcrumbs en páginas internas de blog/projects
