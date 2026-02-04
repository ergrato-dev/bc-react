# Accesibilidad, SEO y Producción

## 🎯 Objetivos de Aprendizaje

- Implementar accesibilidad (a11y) básica en React
- Configurar SEO para aplicaciones SPA
- Preparar la aplicación para producción
- Conocer herramientas de auditoría

---

## ♿ Accesibilidad (a11y)

### ¿Por Qué es Importante?

```
┌─────────────────────────────────────────────────────────────┐
│                  ACCESIBILIDAD WEB                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   🌍 15% de la población mundial tiene alguna discapacidad │
│                                                             │
│   ⚖️ Es un requisito legal en muchos países               │
│                                                             │
│   💰 Mejora el SEO y la experiencia de todos los usuarios  │
│                                                             │
│   🎯 Es lo correcto éticamente                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Principios WCAG

Los **Web Content Accessibility Guidelines (WCAG)** definen 4 principios:

1. **Perceptible**: La información debe ser presentable de formas que los usuarios puedan percibir
2. **Operable**: Los componentes de UI deben ser operables por todos
3. **Comprensible**: La información y operación deben ser comprensibles
4. **Robusto**: El contenido debe ser robusto para diferentes tecnologías asistivas

### Implementación Básica en React

#### 1. HTML Semántico

```tsx
// ❌ MAL - Divs para todo
const BadExample = () => (
  <div className="header">
    <div className="nav">
      <div onClick={handleClick}>Inicio</div>
    </div>
  </div>
);

// ✅ BIEN - HTML semántico
const GoodExample = () => (
  <header>
    <nav aria-label="Navegación principal">
      <button onClick={handleClick}>Inicio</button>
    </nav>
  </header>
);
```

#### 2. Atributos ARIA

```tsx
// src/components/ui/Modal.tsx

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  // Cerrar con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Evitar scroll del body
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="relative bg-white rounded-lg p-6 max-w-md w-full">
        <h2
          id="modal-title"
          className="text-xl font-bold mb-4">
          {title}
        </h2>

        {children}

        <button
          onClick={onClose}
          className="absolute top-2 right-2"
          aria-label="Cerrar modal">
          ✕
        </button>
      </div>
    </div>
  );
};
```

#### 3. Formularios Accesibles

```tsx
// src/components/ui/FormField.tsx

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactElement;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  error,
  required,
  children,
}) => {
  const errorId = `${id}-error`;

  return (
    <div className="form-field">
      <label
        htmlFor={id}
        className="block mb-1 font-medium">
        {label}
        {required && (
          <span
            aria-hidden="true"
            className="text-red-500">
            {' '}
            *
          </span>
        )}
        {required && <span className="sr-only"> (requerido)</span>}
      </label>

      {/* Clonar el hijo para agregar atributos de accesibilidad */}
      {React.cloneElement(children, {
        id,
        'aria-required': required,
        'aria-invalid': !!error,
        'aria-describedby': error ? errorId : undefined,
      })}

      {error && (
        <p
          id={errorId}
          className="text-red-500 text-sm mt-1"
          role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

// Uso
<FormField
  id="email"
  label="Correo electrónico"
  required
  error={errors.email}>
  <input
    type="email"
    className="input"
    {...register('email')}
  />
</FormField>;
```

#### 4. Skip Link

```tsx
// src/components/SkipLink.tsx

export const SkipLink: React.FC = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
               bg-blue-600 text-white px-4 py-2 rounded z-50">
    Saltar al contenido principal
  </a>
);

// En el layout principal
<>
  <SkipLink />
  <Header />
  <main
    id="main-content"
    tabIndex={-1}>
    {children}
  </main>
  <Footer />
</>;
```

#### 5. Focus Management

```tsx
// src/hooks/useFocusTrap.ts

import { useEffect, useRef } from 'react';

export function useFocusTrap<T extends HTMLElement>(isActive: boolean) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Enfocar el primer elemento
    firstElement?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleTab);
    return () => container.removeEventListener('keydown', handleTab);
  }, [isActive]);

  return containerRef;
}
```

---

## 🔍 SEO para React SPA

### Problema de las SPA

Las aplicaciones SPA (Single Page Application) tienen un problema con SEO:

```
Crawlers tradicionales → Ven HTML vacío → No indexan contenido
```

### Soluciones

#### 1. Meta Tags Dinámicos con React Helmet

```bash
pnpm add react-helmet-async
```

```tsx
// src/main.tsx
import { HelmetProvider } from 'react-helmet-async';

<HelmetProvider>
  <App />
</HelmetProvider>;

// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = '/og-image.png',
  url = window.location.href,
  type = 'website',
}) => {
  const siteName = 'Mi Aplicación';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{fullTitle}</title>
      <meta
        name="description"
        content={description}
      />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta
        property="og:type"
        content={type}
      />
      <meta
        property="og:title"
        content={fullTitle}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image}
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:site_name"
        content={siteName}
      />

      {/* Twitter Card */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={fullTitle}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={image}
      />

      {/* Canonical URL */}
      <link
        rel="canonical"
        href={url}
      />
    </Helmet>
  );
};

// Uso en páginas
const ProductPage: React.FC = () => {
  const { product } = useProduct(productId);

  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        image={product.image}
      />
      {/* Contenido de la página */}
    </>
  );
};
```

#### 2. Sitemap y Robots.txt

```typescript
// public/robots.txt
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://mi-app.com/sitemap.xml
```

```xml
<!-- public/sitemap.xml (ejemplo estático) -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mi-app.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mi-app.com/productos</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

#### 3. Structured Data (JSON-LD)

```tsx
// src/components/StructuredData.tsx
import { Helmet } from 'react-helmet-async';

interface ProductData {
  name: string;
  description: string;
  price: number;
  image: string;
  availability: 'InStock' | 'OutOfStock';
}

export const ProductStructuredData: React.FC<{ product: ProductData }> = ({
  product,
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: `https://schema.org/${product.availability}`,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
```

---

## 🚀 Preparación para Producción

### 1. Variables de Entorno

```bash
# .env.production
VITE_API_URL=https://api.mi-app.com
VITE_APP_NAME=Mi Aplicación
VITE_ENABLE_ANALYTICS=true
```

```typescript
// src/config/env.ts
export const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  appName: import.meta.env.VITE_APP_NAME,
  isProd: import.meta.env.PROD,
  isDev: import.meta.env.DEV,
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
} as const;
```

### 2. Error Boundary Global

```tsx
// src/components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Enviar a servicio de logging (Sentry, LogRocket, etc.)
    console.error('Error capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
              <p className="text-gray-600 mb-4">
                Ha ocurrido un error inesperado.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-primary">
                Recargar página
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
```

### 3. Performance Monitoring

```typescript
// src/utils/performance.ts
export function reportWebVitals() {
  if (typeof window === 'undefined') return;

  import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
    const sendToAnalytics = (metric: { name: string; value: number }) => {
      // Enviar a tu servicio de analytics
      console.log(metric);

      // Ejemplo con Google Analytics
      if (window.gtag) {
        window.gtag('event', metric.name, {
          value: Math.round(metric.value),
          metric_id: metric.name,
        });
      }
    };

    onCLS(sendToAnalytics); // Cumulative Layout Shift
    onFID(sendToAnalytics); // First Input Delay
    onFCP(sendToAnalytics); // First Contentful Paint
    onLCP(sendToAnalytics); // Largest Contentful Paint
    onTTFB(sendToAnalytics); // Time to First Byte
  });
}

// En main.tsx
reportWebVitals();
```

### 4. Checklist de Producción

```markdown
## ✅ Pre-Deploy Checklist

### Build

- [ ] `pnpm build` ejecuta sin errores
- [ ] `pnpm preview` funciona correctamente
- [ ] No hay console.log en producción
- [ ] Variables de entorno configuradas

### Testing

- [ ] Tests unitarios pasando
- [ ] Tests de integración pasando
- [ ] Tests E2E pasando (si aplica)
- [ ] Cobertura > 60%

### Performance

- [ ] Lighthouse score > 90
- [ ] Bundle size optimizado
- [ ] Imágenes optimizadas
- [ ] Lazy loading implementado

### SEO

- [ ] Meta tags configurados
- [ ] robots.txt presente
- [ ] sitemap.xml generado
- [ ] Open Graph configurado

### Accesibilidad

- [ ] Skip link presente
- [ ] ARIA labels correctos
- [ ] Contraste de colores OK
- [ ] Navegación por teclado funciona

### Seguridad

- [ ] No hay secrets en el código
- [ ] HTTPS configurado
- [ ] CSP headers configurados
- [ ] Dependencias actualizadas

### Docker

- [ ] Dockerfile optimizado
- [ ] docker-compose funciona
- [ ] Health checks configurados
- [ ] Variables de entorno correctas

### CI/CD

- [ ] Pipeline CI pasando
- [ ] Pipeline CD configurado
- [ ] Badges actualizados
```

---

## 🛠️ Herramientas de Auditoría

### Lighthouse

```bash
# En Chrome DevTools → Lighthouse
# O con CLI:
pnpm add -g lighthouse
lighthouse https://mi-app.com --view
```

### axe DevTools

```bash
# Extensión de Chrome para accesibilidad
# O con código:
pnpm add -D @axe-core/react

// En desarrollo
import React from 'react';
import ReactDOM from 'react-dom';

if (import.meta.env.DEV) {
  import('@axe-core/react').then((axe) => {
    axe.default(React, ReactDOM, 1000);
  });
}
```

### Bundle Analyzer

```bash
# Analizar tamaño del bundle
pnpm add -D rollup-plugin-visualizer

// vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
    }),
  ],
});
```

---

## 📚 Recursos Adicionales

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Accessibility Docs](https://react.dev/reference/react-dom/components/common#accessibility-attributes)
- [web.dev - SEO](https://web.dev/learn/seo/)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)

---

## ✅ Verificación de Aprendizaje

Antes de continuar con el proyecto, verifica:

1. ¿Sabes implementar atributos ARIA básicos?
2. ¿Puedes configurar meta tags para SEO?
3. ¿Conoces el checklist de producción?
4. ¿Sabes usar Lighthouse para auditoría?

---

_Teoría completada - ¡Ahora a los ejercicios!_
