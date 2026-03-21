# 04 - Diseño Responsivo Mobile-First

## 🎯 Objetivos

- Comprender el enfoque mobile-first y sus beneficios
- Implementar breakpoints consistentes en las 3 estrategias de estilos
- Crear layouts que se adaptan a diferentes tamaños de pantalla
- Aplicar patrones comunes de diseño responsivo

---

## 📋 Contenido

### 1. ¿Qué es Mobile-First?

**Mobile-first** significa diseñar primero para pantallas pequeñas y luego agregar estilos para pantallas más grandes.

```css
/* ❌ Desktop-first (evitar) */
.container {
  width: 1200px;
}
@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}

/* ✅ Mobile-first (preferido) */
.container {
  width: 100%;
}
@media (min-width: 768px) {
  .container {
    width: 1200px;
  }
}
```

**¿Por qué mobile-first?**

- Más usuarios navegan desde móviles
- Fuerza a priorizar contenido esencial
- CSS más limpio y mantenible
- Mejor performance en móviles (menos CSS que sobrescribir)

---

### 2. Breakpoints Estándar

| Nombre  | Min-width | Dispositivos típicos |
| ------- | --------- | -------------------- |
| **xs**  | 0px       | Teléfonos pequeños   |
| **sm**  | 640px     | Teléfonos grandes    |
| **md**  | 768px     | Tablets              |
| **lg**  | 1024px    | Laptops              |
| **xl**  | 1280px    | Desktops             |
| **2xl** | 1536px    | Monitores grandes    |

---

### 3. Responsive con CSS Modules

```css
/* Card.module.css */

/* Mobile first: estilos base para móvil */
.card {
  padding: 16px;
  margin: 8px;
}

.cardGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.cardTitle {
  font-size: 1.125rem;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .card {
    padding: 20px;
    margin: 12px;
  }

  .cardGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .cardTitle {
    font-size: 1.25rem;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .card {
    padding: 24px;
    margin: 16px;
  }

  .cardGrid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .cardTitle {
    font-size: 1.5rem;
  }
}
```

```tsx
// Card.tsx
import styles from './Card.module.css';

const CardGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.cardGrid}>{children}</div>
);

const Card: React.FC<CardProps> = ({ title, children }) => (
  <article className={styles.card}>
    <h2 className={styles.cardTitle}>{title}</h2>
    {children}
  </article>
);
```

---

### 4. Responsive con Styled Components

```tsx
import styled from 'styled-components';

// Definir breakpoints en el tema
const theme = {
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

// Helper para media queries
const media = {
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
};

// Componentes responsivos
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;

const Card = styled.article`
  padding: 16px;
  background: white;
  border-radius: 8px;

  ${media.md} {
    padding: 20px;
  }

  ${media.lg} {
    padding: 24px;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.125rem;
  margin: 0 0 12px 0;

  ${media.md} {
    font-size: 1.25rem;
  }

  ${media.lg} {
    font-size: 1.5rem;
  }
`;
```

---

### 5. Responsive con Tailwind

Tailwind hace responsive **extremadamente fácil** con prefijos:

```tsx
// Mobile-first: sin prefijo = móvil
// sm: = 640px+
// md: = 768px+
// lg: = 1024px+
// xl: = 1280px+

const CardGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="
    grid 
    grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-3 
    gap-4 
    md:gap-5 
    lg:gap-6
  ">
    {children}
  </div>
);

const Card: React.FC<CardProps> = ({ title, children }) => (
  <article
    className="
    p-4 
    md:p-5 
    lg:p-6 
    bg-white 
    rounded-lg 
    shadow-md
  ">
    <h2
      className="
      text-lg 
      md:text-xl 
      lg:text-2xl 
      font-bold 
      mb-3 
      md:mb-4
    ">
      {title}
    </h2>
    {children}
  </article>
);
```

---

### 6. Patrones Comunes de Layout Responsivo

#### Navbar Responsiva

```tsx
// Con Tailwind
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">Logo</div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open menu</span>
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="text-gray-700">
                Home
              </a>
              <a
                href="#"
                className="text-gray-700">
                About
              </a>
              <a
                href="#"
                className="text-gray-700">
                Contact
              </a>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
```

#### Sidebar Layout

```tsx
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col lg:flex-row">
    {/* Sidebar: bottom en móvil, left en desktop */}
    <aside
      className="
      order-2 lg:order-1
      w-full lg:w-64
      bg-gray-800 text-white
      p-4
      lg:min-h-screen
    ">
      <nav className="flex lg:flex-col gap-4 justify-around lg:justify-start">
        <a href="#">Dashboard</a>
        <a href="#">Products</a>
        <a href="#">Settings</a>
      </nav>
    </aside>

    {/* Main content */}
    <main
      className="
      order-1 lg:order-2
      flex-1
      p-4 lg:p-8
    ">
      {children}
    </main>
  </div>
);
```

#### Hero Section

```tsx
const Hero: React.FC = () => (
  <section
    className="
    py-12 md:py-20 lg:py-32
    px-4
    text-center
  ">
    <h1
      className="
      text-3xl md:text-4xl lg:text-6xl
      font-bold
      mb-4 md:mb-6
    ">
      Welcome to Our App
    </h1>

    <p
      className="
      text-gray-600
      text-base md:text-lg lg:text-xl
      max-w-2xl mx-auto
      mb-6 md:mb-8
    ">
      Build amazing products with our platform.
    </p>

    <div
      className="
      flex flex-col sm:flex-row
      gap-4
      justify-center
    ">
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Get Started
      </button>
      <button className="px-6 py-3 border border-gray-300 rounded-lg">
        Learn More
      </button>
    </div>
  </section>
);
```

---

### 7. Imágenes Responsivas

```tsx
// Imagen que se adapta al contenedor
<img
  src="/image.jpg"
  alt="Description"
  className="w-full h-auto object-cover"
/>

// Imagen con aspect ratio
<div className="aspect-video">
  <img
    src="/image.jpg"
    alt="Description"
    className="w-full h-full object-cover rounded-lg"
  />
</div>

// Picture element para diferentes resoluciones
<picture>
  <source media="(min-width: 1024px)" srcSet="/large.jpg" />
  <source media="(min-width: 768px)" srcSet="/medium.jpg" />
  <img src="/small.jpg" alt="Responsive" className="w-full" />
</picture>
```

---

### 8. Tipografía Responsiva

```tsx
// Tailwind
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>;

// Con clamp() - más fluido
// CSS Modules o Styled Components
const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* Mínimo 1.5rem, preferido 4vw, máximo 3rem */
`;
```

---

### 9. Ocultar/Mostrar Elementos

```tsx
// Tailwind
<div className="hidden md:block">
  Solo visible en tablet y desktop
</div>

<div className="block md:hidden">
  Solo visible en móvil
</div>

// CSS Modules
/* styles.module.css */
.desktopOnly {
  display: none;
}
@media (min-width: 768px) {
  .desktopOnly { display: block; }
}

.mobileOnly {
  display: block;
}
@media (min-width: 768px) {
  .mobileOnly { display: none; }
}
```

---

### 10. Testing Responsivo

#### Herramientas del navegador

1. Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)
2. Firefox → Responsive Design Mode (Ctrl+Shift+M)

#### Consideraciones

- Probar en breakpoints exactos (640, 768, 1024, 1280)
- Probar entre breakpoints (tamaños intermedios)
- Verificar orientación (portrait/landscape)
- Considerar touch targets (mínimo 44x44px)

---

## ✅ Checklist de Verificación

- [ ] Entiendo el concepto mobile-first
- [ ] Puedo implementar responsive en CSS Modules
- [ ] Puedo implementar responsive en Styled Components
- [ ] Domino los prefijos responsive de Tailwind
- [ ] Sé crear layouts que se adaptan (navbar, grid, sidebar)
- [ ] Puedo ocultar/mostrar elementos según el breakpoint

---

## 📚 Recursos Adicionales

- [Responsive Web Design Basics (web.dev)](https://web.dev/responsive-web-design-basics/)
- [A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
