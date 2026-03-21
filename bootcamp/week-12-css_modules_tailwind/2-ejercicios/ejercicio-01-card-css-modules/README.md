# Ejercicio 01: Card con CSS Modules

## 🎯 Objetivo

Crear un componente `Card` reutilizable usando CSS Modules con TypeScript, aplicando clases condicionales con `clsx`.

## ⏱️ Duración estimada

45 minutos

---

## 📋 Instrucciones

### Paso 1: Crear la estructura de archivos

Crea los siguientes archivos en tu proyecto:

```
src/
  components/
    Card/
      Card.tsx
      Card.module.css
      Card.module.css.d.ts  (opcional, para autocompletado)
      index.ts
```

---

### Paso 2: Definir los estilos base

Abre `starter/Card.module.css` y descomenta las siguientes secciones:

```css
/* ============================================
   PASO 2: Estilos base de la Card
   ============================================ */

/* Descomenta los siguientes estilos: */

/* .card {
  border-radius: 8px;
  padding: 20px;
  background-color: #2d2d2d;
  border: 1px solid #404040;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
} */
```

---

### Paso 3: Agregar variantes de estilo

Continúa descomentando las variantes:

```css
/* ============================================
   PASO 3: Variantes de la Card
   ============================================ */

/* Variante: elevated (con sombra) */
/* .elevated {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.elevated:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
} */

/* Variante: outlined (solo borde) */
/* .outlined {
  background-color: transparent;
  border: 2px solid #3178C6;
} */

/* Variante: filled (fondo sólido) */
/* .filled {
  background-color: #3178C6;
  border: none;
  color: white;
} */
```

---

### Paso 4: Agregar estilos para el contenido

```css
/* ============================================
   PASO 4: Contenido interno de la Card
   ============================================ */

/* .cardHeader {
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #404040;
}

.cardTitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.cardSubtitle {
  font-size: 0.875rem;
  color: #9ca3af;
  margin: 4px 0 0 0;
}

.cardBody {
  color: #d1d5db;
  line-height: 1.6;
}

.cardFooter {
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #404040;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
} */
```

---

### Paso 5: Crear el componente tipado

Abre `starter/Card.tsx` y descomenta:

```tsx
/* ============================================
   PASO 5: Interface de Props
   ============================================ */

// Descomenta la interface:
// interface CardProps {
//   variant?: 'default' | 'elevated' | 'outlined' | 'filled';
//   title?: string;
//   subtitle?: string;
//   footer?: React.ReactNode;
//   children: React.ReactNode;
//   className?: string;
// }
```

---

### Paso 6: Implementar el componente con clsx

```tsx
/* ============================================
   PASO 6: Componente Card con clsx
   ============================================ */

// Primero importa las dependencias:
// import clsx from 'clsx';
// import styles from './Card.module.css';

// Luego descomenta el componente:
// export const Card: React.FC<CardProps> = ({
//   variant = 'default',
//   title,
//   subtitle,
//   footer,
//   children,
//   className,
// }) => {
//   // Combinar clases con clsx
//   const cardClasses = clsx(
//     styles.card,
//     {
//       [styles.elevated]: variant === 'elevated',
//       [styles.outlined]: variant === 'outlined',
//       [styles.filled]: variant === 'filled',
//     },
//     className
//   );
//
//   return (
//     <article className={cardClasses}>
//       {(title || subtitle) && (
//         <header className={styles.cardHeader}>
//           {title && <h3 className={styles.cardTitle}>{title}</h3>}
//           {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
//         </header>
//       )}
//
//       <div className={styles.cardBody}>{children}</div>
//
//       {footer && <footer className={styles.cardFooter}>{footer}</footer>}
//     </article>
//   );
// };
```

---

### Paso 7: Crear el barrel export

Abre `starter/index.ts`:

```tsx
/* ============================================
   PASO 7: Barrel Export
   ============================================ */

// Descomenta:
// export { Card } from './Card';
// export type { CardProps } from './Card';
```

---

### Paso 8: Usar el componente

Crea un archivo de prueba para verificar que funciona:

```tsx
// App.tsx
import { Card } from './components/Card';

function App() {
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
      }}>
      <Card
        variant="default"
        title="Card Default"
        subtitle="Variante por defecto">
        <p>Contenido de la card con estilos base.</p>
      </Card>

      <Card
        variant="elevated"
        title="Card Elevated"
        subtitle="Con sombra elevada"
        footer={<button>Acción</button>}>
        <p>Esta card tiene efecto de elevación con sombra.</p>
      </Card>

      <Card
        variant="outlined"
        title="Card Outlined">
        <p>Solo con borde, sin fondo.</p>
      </Card>

      <Card
        variant="filled"
        title="Card Filled"
        subtitle="Fondo sólido">
        <p>Con fondo de color primario.</p>
      </Card>
    </div>
  );
}

export default App;
```

---

## ✅ Criterios de Evaluación

- [ ] Los estilos están correctamente aislados en CSS Modules
- [ ] Las variantes se aplican condicionalmente con `clsx`
- [ ] El componente está completamente tipado con TypeScript
- [ ] El componente es reutilizable y acepta `children`
- [ ] Las clases se combinan correctamente sin conflictos

---

## 🔑 Conceptos Clave

1. **CSS Modules** genera nombres de clase únicos automáticamente
2. **clsx** permite combinar clases de forma condicional y limpia
3. Las **interfaces de Props** documentan y validan el uso del componente
4. El patrón de **barrel export** simplifica las importaciones
