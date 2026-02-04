# Ejercicio 04: Design Tokens con CVA

## 🎯 Objetivo

Implementar un sistema de design tokens usando Class Variance Authority (CVA) para crear componentes con variantes consistentes.

## ⏱️ Duración

45 minutos

## 📋 Descripción

Crearás componentes con variantes tipadas usando CVA, estableciendo las bases para un mini design system.

## 🛠️ Requisitos Previos

- Teoría: `04-design-system.md`
- Instalación: `pnpm add class-variance-authority tailwind-merge clsx`

## 📝 Pasos

### Paso 1: Utilidad cn() (5 min)

Crea la función helper `cn()`:

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Paso 2: Button con CVA (15 min)

Implementa `Button` con las siguientes variantes:

**Variants:**

- `variant`: 'default' | 'destructive' | 'outline' | 'ghost' | 'link'
- `size`: 'sm' | 'md' | 'lg' | 'icon'

**Default variants:**

- variant: 'default'
- size: 'md'

### Paso 3: Badge con CVA (10 min)

Implementa `Badge` con:

**Variants:**

- `variant`: 'default' | 'secondary' | 'success' | 'warning' | 'error'

### Paso 4: Input con CVA (10 min)

Implementa `Input` con:

**Variants:**

- `inputSize`: 'sm' | 'md' | 'lg'
- `error`: boolean (compoundVariant)

### Paso 5: Type-safe props (5 min)

Usa `VariantProps` para extraer tipos:

```typescript
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('...', { variants: {...} });

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
```

## ✅ Criterios de Éxito

- [ ] Función `cn()` funciona correctamente
- [ ] Button tiene todas las variantes funcionando
- [ ] Badge muestra colores correctos por variante
- [ ] Input cambia tamaño y muestra estado error
- [ ] Tipos son inferidos correctamente por TypeScript
- [ ] Clases de Tailwind se fusionan sin conflictos

## 🎨 Resultado Esperado

```tsx
// Uso de Button
<Button variant="default" size="lg">Guardar</Button>
<Button variant="destructive">Eliminar</Button>
<Button variant="outline" size="sm">Cancelar</Button>
<Button variant="ghost" size="icon"><Icon /></Button>

// Uso de Badge
<Badge variant="success">Activo</Badge>
<Badge variant="warning">Pendiente</Badge>
<Badge variant="error">Error</Badge>

// Uso de Input
<Input inputSize="lg" placeholder="Email" />
<Input error placeholder="Campo con error" />
```

## 💡 Tips

- `twMerge` resuelve conflictos de clases Tailwind
- `clsx` permite condicionales en clases
- Usa `forwardRef` para inputs y buttons
- Documenta variantes con comentarios JSDoc

## 📚 Recursos

- [CVA Documentation](https://cva.style/docs)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)
