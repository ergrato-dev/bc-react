# 04 - Fundamentos de Design Systems

## 🎯 Objetivos de Aprendizaje

- Comprender qué es un Design System y sus beneficios
- Conocer la estructura de un Design System
- Implementar Design Tokens en código
- Crear componentes consistentes y reutilizables
- Documentar componentes efectivamente

---

## 📖 ¿Qué es un Design System?

Un **Design System** es una colección de componentes reutilizables, guías y estándares que permiten construir productos de manera consistente y eficiente.

### Componentes de un Design System

```
Design System
├── 🎨 Design Tokens (Fundación)
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Shadows
├── 🧱 Componentes (Building Blocks)
│   ├── Primitivos (Button, Input, Badge)
│   ├── Compuestos (Card, Form, Modal)
│   └── Patrones (Navigation, Layout)
├── 📐 Layout System
│   ├── Grid
│   ├── Spacing
│   └── Breakpoints
└── 📚 Documentación
    ├── Guías de uso
    ├── Ejemplos
    └── Best practices
```

### Beneficios

| Beneficio         | Descripción                              |
| ----------------- | ---------------------------------------- |
| **Consistencia**  | Misma apariencia en toda la aplicación   |
| **Eficiencia**    | Reutilizar en lugar de recrear           |
| **Escalabilidad** | Fácil de mantener y extender             |
| **Colaboración**  | Lenguaje común entre diseño y desarrollo |
| **Accesibilidad** | Patrones accesibles por defecto          |

---

## 🎨 Design Tokens

Los **Design Tokens** son las decisiones de diseño más pequeñas y atómicas, expresadas como variables.

### Estructura de Tokens

```typescript
// tokens/index.ts

// ============================================
// COLORES
// ============================================
export const colors = {
  // Primitivos (raw values)
  primitives: {
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      // ...
      900: '#111827',
    },
    // ... más colores
  },

  // Semánticos (con propósito)
  semantic: {
    background: {
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      tertiary: 'var(--color-bg-tertiary)',
    },
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      muted: 'var(--color-text-muted)',
    },
    border: {
      default: 'var(--color-border)',
      focus: 'var(--color-border-focus)',
    },
    status: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },
} as const;

// ============================================
// TIPOGRAFÍA
// ============================================
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

// ============================================
// ESPACIADO
// ============================================
export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
} as const;

// ============================================
// BORDES
// ============================================
export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const;

// ============================================
// SOMBRAS
// ============================================
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
} as const;

// ============================================
// ANIMACIONES
// ============================================
export const animation = {
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;
```

---

## 🧱 Componentes del Design System

### Anatomía de un Componente

```typescript
// components/Button/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

// 1. VARIANTES CON CVA
const buttonVariants = cva(
  // Base styles
  [
    'inline-flex items-center justify-center',
    'font-medium rounded-lg',
    'transition-colors duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
  ],
  {
    variants: {
      // Variante de intención/estilo
      variant: {
        primary: [
          'bg-accent text-white',
          'hover:bg-accent-hover',
          'focus-visible:ring-accent',
        ],
        secondary: [
          'bg-background-tertiary text-foreground-primary',
          'hover:bg-background-secondary',
          'border border-[var(--color-border)]',
          'focus-visible:ring-gray-400',
        ],
        ghost: [
          'bg-transparent text-foreground-primary',
          'hover:bg-background-tertiary',
          'focus-visible:ring-gray-400',
        ],
        danger: [
          'bg-red-600 text-white',
          'hover:bg-red-700',
          'focus-visible:ring-red-500',
        ],
      },
      // Variante de tamaño
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
      // Variante de ancho
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// 2. TIPOS
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Mostrar estado de carga */
  loading?: boolean;
  /** Icono a la izquierda */
  leftIcon?: React.ReactNode;
  /** Icono a la derecha */
  rightIcon?: React.ReactNode;
}

// 3. COMPONENTE
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          buttonVariants({ variant, size, fullWidth }),
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}

        {/* Left icon */}
        {!loading && leftIcon && (
          <span className="mr-2 -ml-1">{leftIcon}</span>
        )}

        {children}

        {/* Right icon */}
        {rightIcon && (
          <span className="ml-2 -mr-1">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

// 4. EXPORTAR VARIANTES (para composición)
export { buttonVariants };
```

### Uso del Button

```tsx
import { Button } from './components/Button';
import { Plus, ArrowRight } from 'lucide-react';

// Variantes
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Tamaños
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Con iconos
<Button leftIcon={<Plus size={16} />}>Agregar</Button>
<Button rightIcon={<ArrowRight size={16} />}>Continuar</Button>

// Estados
<Button loading>Guardando...</Button>
<Button disabled>Deshabilitado</Button>

// Full width
<Button fullWidth>Botón completo</Button>
```

---

## 📐 Estructura de Carpetas

```
src/
├── components/
│   ├── ui/                      # Componentes primitivos
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Card/
│   │   └── index.ts             # Barrel export
│   └── patterns/                # Componentes compuestos
│       ├── Dialog/
│       ├── Form/
│       └── Navigation/
├── tokens/
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   └── index.ts
├── styles/
│   ├── globals.css
│   └── themes.css
└── lib/
    └── utils.ts                 # cn(), clsx, etc.
```

### Barrel Exports

```typescript
// components/ui/index.ts
export { Button, buttonVariants } from './Button';
export type { ButtonProps } from './Button';

export { Input, inputVariants } from './Input';
export type { InputProps } from './Input';

export { Badge, badgeVariants } from './Badge';
export type { BadgeProps } from './Badge';

export { Card, CardHeader, CardBody, CardFooter } from './Card';
export type { CardProps } from './Card';
```

---

## 🎯 Patrones de Composición

### Compound Components

```tsx
// components/Card/Card.tsx
import { createContext, useContext } from 'react';

// Contexto para compartir estado
interface CardContextType {
  variant?: 'default' | 'elevated' | 'outlined';
}

const CardContext = createContext<CardContextType>({});

// Root component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
}

export function Card({
  variant = 'default',
  children,
  className,
  ...props
}: CardProps) {
  return (
    <CardContext.Provider value={{ variant }}>
      <article
        className={twMerge(
          'rounded-xl bg-background-secondary border border-[var(--color-border)]',
          variant === 'elevated' && 'shadow-theme-lg',
          variant === 'outlined' && 'border-2 border-accent',
          className,
        )}
        {...props}>
        {children}
      </article>
    </CardContext.Provider>
  );
}

// Sub-components
export function CardHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header
      className={twMerge(
        'p-4 border-b border-[var(--color-border)]',
        className,
      )}
      {...props}>
      {children}
    </header>
  );
}

export function CardBody({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge('p-4', className)}
      {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      className={twMerge(
        'p-4 border-t border-[var(--color-border)]',
        className,
      )}
      {...props}>
      {children}
    </footer>
  );
}

// Attach sub-components
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
```

### Uso

```tsx
<Card variant="elevated">
  <Card.Header>
    <h3 className="text-lg font-semibold">Título</h3>
  </Card.Header>
  <Card.Body>
    <p>Contenido de la card...</p>
  </Card.Body>
  <Card.Footer>
    <Button size="sm">Acción</Button>
  </Card.Footer>
</Card>
```

---

## 📚 Documentación de Componentes

### Comentarios JSDoc

````tsx
/**
 * Botón primario del sistema de diseño.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 *
 * @example Con icono
 * ```tsx
 * <Button leftIcon={<Plus />}>
 *   Agregar
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(...)
````

### Storybook (Opcional)

```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Plus } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Add Item',
    leftIcon: <Plus size={16} />,
  },
};
```

---

## ✅ Checklist de Aprendizaje

- [ ] Entender qué es un Design System
- [ ] Definir Design Tokens (colores, typography, spacing)
- [ ] Crear componentes con CVA y variantes
- [ ] Implementar patrón Compound Components
- [ ] Organizar estructura de carpetas
- [ ] Documentar componentes con JSDoc

---

## 🔗 Recursos

- [Radix UI Themes](https://www.radix-ui.com/themes)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind UI](https://tailwindui.com/)
- [Design Systems Handbook](https://www.designbetter.co/design-systems-handbook)

---

[← Theming](./03-theming-dark-mode.md) | [Volver al índice →](../README.md)
