# Ejercicio 04: Componentes con CVA (Class Variance Authority)

## 🎯 Objetivo

Crear componentes tipados con variantes usando CVA (Class Variance Authority) para combinar Tailwind CSS con TypeScript de forma segura.

## ⏱️ Duración estimada

45 minutos

---

## 📋 Instrucciones

### Paso 1: Instalar dependencias

```bash
pnpm add class-variance-authority clsx tailwind-merge
```

---

### Paso 2: Crear función helper para combinar clases

Abre `starter/utils.ts`:

```tsx
/* ============================================
   PASO 2: Helper para combinar clases Tailwind
   cn() combina clsx + tailwind-merge
   ============================================ */

// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// Descomenta la función:
// export const cn = (...inputs: ClassValue[]) => {
//   return twMerge(clsx(inputs));
// };
```

**¿Por qué tailwind-merge?**

```tsx
// Sin tailwind-merge:
clsx('px-4', 'px-6'); // "px-4 px-6" → ambas clases aplican

// Con tailwind-merge:
twMerge('px-4', 'px-6'); // "px-6" → la última gana (correcto)
```

---

### Paso 3: Crear variantes de Badge con CVA

Abre `starter/Badge.tsx`:

```tsx
/* ============================================
   PASO 3: Definir variantes con CVA
   ============================================ */

// import { cva, type VariantProps } from 'class-variance-authority';
// import { cn } from './utils';

// Descomenta las variantes:
// const badgeVariants = cva(
//   // Clases base (siempre se aplican)
//   'inline-flex items-center rounded-full font-medium transition-colors',
//   {
//     variants: {
//       // Variante de color
//       variant: {
//         default: 'bg-gray-700 text-gray-200',
//         primary: 'bg-blue-600 text-white',
//         success: 'bg-green-600 text-white',
//         warning: 'bg-yellow-500 text-black',
//         danger: 'bg-red-600 text-white',
//         outline: 'border border-gray-600 text-gray-300 bg-transparent',
//       },
//       // Variante de tamaño
//       size: {
//         sm: 'text-xs px-2 py-0.5',
//         md: 'text-sm px-2.5 py-0.5',
//         lg: 'text-base px-3 py-1',
//       },
//     },
//     // Valores por defecto
//     defaultVariants: {
//       variant: 'default',
//       size: 'md',
//     },
//   }
// );
```

---

### Paso 4: Crear componente Badge tipado

```tsx
/* ============================================
   PASO 4: Componente Badge con tipos de CVA
   ============================================ */

// Descomenta el componente:
// interface BadgeProps
//   extends React.HTMLAttributes<HTMLSpanElement>,
//     VariantProps<typeof badgeVariants> {
//   children: React.ReactNode;
// }
//
// export const Badge: React.FC<BadgeProps> = ({
//   variant,
//   size,
//   className,
//   children,
//   ...props
// }) => {
//   return (
//     <span
//       className={cn(badgeVariants({ variant, size }), className)}
//       {...props}
//     >
//       {children}
//     </span>
//   );
// };
```

---

### Paso 5: Crear Button con CVA y compound variants

Abre `starter/Button.tsx`:

```tsx
/* ============================================
   PASO 5: Button con variantes compuestas
   ============================================ */

// const buttonVariants = cva(
//   // Base
//   `
//     inline-flex items-center justify-center gap-2
//     rounded-lg font-medium
//     transition-colors duration-200
//     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
//     disabled:opacity-50 disabled:cursor-not-allowed
//   `,
//   {
//     variants: {
//       variant: {
//         primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
//         secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
//         danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
//         ghost: 'text-gray-300 hover:bg-gray-800 hover:text-white',
//         outline: 'border border-gray-600 text-gray-300 hover:bg-gray-800',
//       },
//       size: {
//         sm: 'text-sm px-3 py-1.5',
//         md: 'text-base px-4 py-2',
//         lg: 'text-lg px-6 py-3',
//       },
//       fullWidth: {
//         true: 'w-full',
//         false: '',
//       },
//     },
//     // Compound variants: combinaciones específicas
//     compoundVariants: [
//       {
//         variant: 'outline',
//         size: 'sm',
//         className: 'border', // borde más delgado para sm
//       },
//       {
//         variant: 'outline',
//         size: ['md', 'lg'],
//         className: 'border-2', // borde más grueso para md y lg
//       },
//     ],
//     defaultVariants: {
//       variant: 'primary',
//       size: 'md',
//       fullWidth: false,
//     },
//   }
// );
```

---

### Paso 6: Implementar componente Button

```tsx
/* ============================================
   PASO 6: Componente Button completo
   ============================================ */

// interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   isLoading?: boolean;
//   leftIcon?: React.ReactNode;
//   rightIcon?: React.ReactNode;
// }
//
// export const Button: React.FC<ButtonProps> = ({
//   variant,
//   size,
//   fullWidth,
//   isLoading = false,
//   leftIcon,
//   rightIcon,
//   className,
//   disabled,
//   children,
//   ...props
// }) => {
//   return (
//     <button
//       className={cn(buttonVariants({ variant, size, fullWidth }), className)}
//       disabled={disabled || isLoading}
//       {...props}
//     >
//       {isLoading ? (
//         <span className="animate-spin h-4 w-4 border-2 border-current border-r-transparent rounded-full" />
//       ) : (
//         <>
//           {leftIcon}
//           {children}
//           {rightIcon}
//         </>
//       )}
//     </button>
//   );
// };
//
// // Exportar variantes para uso externo (ej: links styled as buttons)
// export { buttonVariants };
```

---

### Paso 7: Ejemplo de uso

```tsx
// App.tsx
import { Badge } from './Badge';
import { Button } from './Button';

function App() {
  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h2 className="text-xl text-white mb-4">Badges</h2>
      <div className="flex gap-2 flex-wrap mb-8">
        <Badge>Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>

      <h2 className="text-xl text-white mb-4">Buttons</h2>
      <div className="flex gap-2 flex-wrap mb-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
      </div>

      <div className="flex gap-2 flex-wrap mb-4">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <div className="flex flex-col gap-2 max-w-xs">
        <Button fullWidth>Full Width</Button>
        <Button isLoading>Loading...</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
}
```

---

## ✅ Criterios de Evaluación

- [ ] CVA está correctamente configurado con variantes
- [ ] Los tipos se infieren automáticamente de las variantes
- [ ] tailwind-merge resuelve conflictos de clases
- [ ] Las compound variants funcionan correctamente
- [ ] Los componentes aceptan className adicional

---

## 🔑 Conceptos Clave

1. **CVA** define variantes de forma declarativa y tipada
2. **VariantProps** extrae los tipos de las variantes automáticamente
3. **Compound variants** permiten estilos específicos para combinaciones
4. **tailwind-merge** resuelve conflictos de utilidades Tailwind
5. **cn()** es el patrón estándar para combinar clases
