# 📖 Glosario - Semana 20: Proyecto Final

## A

### A11y (Accessibility)

Abreviatura de "accessibility" (11 letras entre 'a' y 'y'). Se refiere a las prácticas y técnicas para hacer aplicaciones web usables por personas con discapacidades.

```tsx
// Ejemplo de componente accesible
<button
  aria-label="Cerrar modal"
  aria-pressed={isPressed}
  onClick={handleClose}>
  ✕
</button>
```

### ARIA (Accessible Rich Internet Applications)

Conjunto de atributos HTML que mejoran la accesibilidad de aplicaciones web para tecnologías asistivas como lectores de pantalla.

```tsx
<div
  role="alert"
  aria-live="polite">
  {errorMessage}
</div>
```

---

## B

### Bundle

Archivo o conjunto de archivos que contienen todo el código JavaScript necesario para ejecutar una aplicación, generado por herramientas como Vite o Webpack.

### Bundle Size

Tamaño total del código JavaScript que el navegador debe descargar. Un bundle más pequeño significa tiempos de carga más rápidos.

---

## C

### Code Coverage

Métrica que indica qué porcentaje del código está siendo ejecutado por los tests. Se mide en líneas, ramas, funciones y declaraciones.

```bash
# Ver cobertura con Vitest
pnpm test:coverage
```

### Core Web Vitals

Métricas de Google que miden la experiencia de usuario: LCP (Largest Contentful Paint), FID (First Input Delay), CLS (Cumulative Layout Shift).

---

## D

### Deployment

Proceso de publicar una aplicación en un servidor para que esté disponible para los usuarios finales.

### Docker Image

Plantilla inmutable que contiene todo lo necesario para ejecutar una aplicación: código, runtime, librerías, variables de entorno.

---

## E

### Error Boundary

Componente de React que captura errores de JavaScript en su árbol de componentes hijo, evitando que la aplicación completa falle.

```tsx
class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
}
```

---

## F

### Full-Stack

Desarrollo que abarca tanto el frontend (cliente) como el backend (servidor) de una aplicación.

### Focus Management

Técnica de accesibilidad que controla qué elemento de la página tiene el foco del teclado, especialmente importante en modales y navegación.

---

## G

### GHCR (GitHub Container Registry)

Servicio de GitHub para almacenar y gestionar imágenes de contenedores Docker asociadas a repositorios.

---

## H

### Healthcheck

Verificación periódica del estado de una aplicación o contenedor para determinar si está funcionando correctamente.

```dockerfile
HEALTHCHECK --interval=30s CMD wget --spider http://localhost/ || exit 1
```

---

## I

### Integration Testing

Pruebas que verifican cómo diferentes partes de la aplicación funcionan juntas, como componentes con sus hooks y servicios.

---

## J

### JSON-LD (JavaScript Object Notation for Linked Data)

Formato para estructurar datos de manera que los buscadores puedan entenderlos (SEO).

```html
<script type="application/ld+json">
  { "@context": "https://schema.org", "@type": "Product", "name": "..." }
</script>
```

### JWT (JSON Web Token)

Estándar para crear tokens de acceso que permiten la autenticación entre cliente y servidor.

---

## L

### Lighthouse

Herramienta de Google que audita páginas web en categorías de performance, accesibilidad, mejores prácticas, SEO y PWA.

### LCP (Largest Contentful Paint)

Métrica que mide cuánto tiempo tarda en renderizarse el elemento de contenido más grande visible en el viewport.

---

## M

### Meta Tags

Etiquetas HTML en el `<head>` que proporcionan información sobre la página a navegadores y buscadores.

```tsx
<Helmet>
  <title>Mi Página</title>
  <meta
    name="description"
    content="Descripción"
  />
</Helmet>
```

### MVP (Minimum Viable Product)

Versión mínima de un producto con funcionalidades suficientes para ser útil y validar la idea.

---

## O

### Open Graph

Protocolo que permite controlar cómo se muestra una página cuando se comparte en redes sociales.

```html
<meta
  property="og:title"
  content="Título" />
<meta
  property="og:image"
  content="imagen.png" />
```

---

## P

### Production Build

Versión optimizada de la aplicación para despliegue, con código minificado, tree-shaking y otras optimizaciones.

```bash
pnpm build
```

### PWA (Progressive Web App)

Aplicación web que puede funcionar offline y ofrece experiencia similar a apps nativas.

---

## R

### Robots.txt

Archivo que indica a los crawlers de buscadores qué páginas pueden o no pueden indexar.

```txt
User-agent: *
Allow: /
Disallow: /admin/
```

---

## S

### SEO (Search Engine Optimization)

Prácticas para mejorar la visibilidad de una página web en resultados de buscadores.

### Sitemap

Archivo XML que lista todas las páginas de un sitio web para facilitar la indexación por buscadores.

### Skip Link

Enlace oculto que permite a usuarios de lectores de pantalla saltar directamente al contenido principal.

```tsx
<a
  href="#main"
  className="sr-only focus:not-sr-only">
  Saltar al contenido
</a>
```

### SPA (Single Page Application)

Aplicación web que carga una sola página HTML y actualiza dinámicamente el contenido sin recargar.

### Storybook

Herramienta para desarrollar y documentar componentes de UI de forma aislada.

---

## T

### Tree Shaking

Técnica de optimización que elimina código no utilizado del bundle final.

---

## U

### Unit Testing

Pruebas que verifican el funcionamiento de unidades individuales de código (funciones, componentes) de forma aislada.

---

## W

### WCAG (Web Content Accessibility Guidelines)

Estándares internacionales para hacer contenido web accesible a personas con discapacidades.

### Web Vitals

Conjunto de métricas de Google para medir la experiencia de usuario en páginas web.

```typescript
import { onCLS, onLCP, onFID } from 'web-vitals';

onCLS(console.log);
onLCP(console.log);
onFID(console.log);
```

---

## Resumen de Conceptos Clave

| Concepto       | Descripción                             |
| -------------- | --------------------------------------- |
| A11y           | Accesibilidad web                       |
| ARIA           | Atributos de accesibilidad              |
| Bundle         | Código empaquetado para producción      |
| Coverage       | Porcentaje de código cubierto por tests |
| Error Boundary | Captura errores en componentes React    |
| Full-Stack     | Frontend + Backend                      |
| GHCR           | Registry de contenedores de GitHub      |
| JWT            | Token de autenticación                  |
| Lighthouse     | Herramienta de auditoría                |
| Meta Tags      | Información para buscadores             |
| MVP            | Producto mínimo viable                  |
| Open Graph     | Protocolo para redes sociales           |
| SEO            | Optimización para buscadores            |
| Sitemap        | Mapa del sitio para crawlers            |
| SPA            | Aplicación de página única              |
| Storybook      | Documentación de componentes            |
| WCAG           | Estándares de accesibilidad             |

---

_Glosario - Semana 20 - Bootcamp React con TypeScript_
