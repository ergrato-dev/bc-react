# Ejercicio 02: Sistema de Botones con Styled Components

## 🎯 Objetivo

Crear un sistema de botones completo usando Styled Components con TypeScript, implementando variantes, tamaños y theming.

## ⏱️ Duración estimada

45 minutos

---

## 📋 Instrucciones

### Paso 1: Configurar el proyecto

Instala las dependencias necesarias:

```bash
pnpm add styled-components
pnpm add -D @types/styled-components
```

---

### Paso 2: Crear el tema base

Abre `starter/theme.ts` y descomenta:

```tsx
/* ============================================
   PASO 2: Definir el tema de la aplicación
   ============================================ */

// Descomenta el tema:
// export const theme = {
//   colors: {
//     primary: '#3178C6',
//     primaryHover: '#2563eb',
//     secondary: '#6b7280',
//     secondaryHover: '#4b5563',
//     danger: '#dc2626',
//     dangerHover: '#b91c1c',
//     success: '#16a34a',
//     successHover: '#15803d',
//     text: '#ffffff',
//     textMuted: '#9ca3af',
//     background: '#1a1a1a',
//   },
//   spacing: {
//     xs: '4px',
//     sm: '8px',
//     md: '12px',
//     lg: '16px',
//     xl: '24px',
//   },
//   borderRadius: {
//     sm: '4px',
//     md: '8px',
//     lg: '12px',
//     full: '9999px',
//   },
//   fontSize: {
//     sm: '0.875rem',
//     md: '1rem',
//     lg: '1.125rem',
//   },
// };

// Exportar el tipo del tema para TypeScript
// export type Theme = typeof theme;
```

---

### Paso 3: Extender tipos de styled-components

Crea `starter/styled.d.ts`:

```tsx
/* ============================================
   PASO 3: Tipos para styled-components
   ============================================ */

// Descomenta para habilitar autocompletado del tema:
// import 'styled-components';
// import { Theme } from './theme';
//
// declare module 'styled-components' {
//   export interface DefaultTheme extends Theme {}
// }
```

---

### Paso 4: Crear tipos de variantes

Abre `starter/Button.tsx` y descomenta:

```tsx
/* ============================================
   PASO 4: Tipos de Props del Button
   ============================================ */

// Descomenta los tipos:
// type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'ghost';
// type ButtonSize = 'sm' | 'md' | 'lg';
//
// interface ButtonProps {
//   variant?: ButtonVariant;
//   size?: ButtonSize;
//   fullWidth?: boolean;
//   disabled?: boolean;
//   isLoading?: boolean;
//   leftIcon?: React.ReactNode;
//   rightIcon?: React.ReactNode;
//   children: React.ReactNode;
//   onClick?: () => void;
// }
```

---

### Paso 5: Crear el componente base styled

```tsx
/* ============================================
   PASO 5: Componente Button con styled-components
   ============================================ */

// import styled, { css } from 'styled-components';

// Función helper para obtener colores según variante
// const getVariantStyles = (variant: ButtonVariant) => {
//   const variants = {
//     primary: css`
//       background-color: ${({ theme }) => theme.colors.primary};
//       &:hover:not(:disabled) {
//         background-color: ${({ theme }) => theme.colors.primaryHover};
//       }
//     `,
//     secondary: css`
//       background-color: ${({ theme }) => theme.colors.secondary};
//       &:hover:not(:disabled) {
//         background-color: ${({ theme }) => theme.colors.secondaryHover};
//       }
//     `,
//     danger: css`
//       background-color: ${({ theme }) => theme.colors.danger};
//       &:hover:not(:disabled) {
//         background-color: ${({ theme }) => theme.colors.dangerHover};
//       }
//     `,
//     success: css`
//       background-color: ${({ theme }) => theme.colors.success};
//       &:hover:not(:disabled) {
//         background-color: ${({ theme }) => theme.colors.successHover};
//       }
//     `,
//     ghost: css`
//       background-color: transparent;
//       border: 1px solid ${({ theme }) => theme.colors.primary};
//       color: ${({ theme }) => theme.colors.primary};
//       &:hover:not(:disabled) {
//         background-color: ${({ theme }) => theme.colors.primary}20;
//       }
//     `,
//   };
//   return variants[variant];
// };
```

---

### Paso 6: Crear el styled button con todas las props

```tsx
/* ============================================
   PASO 6: StyledButton con props dinámicas
   ============================================ */

// Descomenta el styled component:
// interface StyledButtonProps {
//   $variant: ButtonVariant;
//   $size: ButtonSize;
//   $fullWidth: boolean;
//   $isLoading: boolean;
// }
//
// const StyledButton = styled.button<StyledButtonProps>`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: ${({ theme }) => theme.spacing.sm};
//   border: none;
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   color: ${({ theme }) => theme.colors.text};
//   width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
//   opacity: ${({ $isLoading }) => ($isLoading ? 0.7 : 1)};
//   pointer-events: ${({ $isLoading }) => ($isLoading ? 'none' : 'auto')};
//
//   /* Tamaños */
//   ${({ $size, theme }) => {
//     const sizes = {
//       sm: css`
//         padding: ${theme.spacing.xs} ${theme.spacing.sm};
//         font-size: ${theme.fontSize.sm};
//       `,
//       md: css`
//         padding: ${theme.spacing.sm} ${theme.spacing.lg};
//         font-size: ${theme.fontSize.md};
//       `,
//       lg: css`
//         padding: ${theme.spacing.md} ${theme.spacing.xl};
//         font-size: ${theme.fontSize.lg};
//       `,
//     };
//     return sizes[$size];
//   }}
//
//   /* Variantes */
//   ${({ $variant }) => getVariantStyles($variant)}
//
//   /* Estado disabled */
//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;
```

---

### Paso 7: Componente wrapper con lógica

```tsx
/* ============================================
   PASO 7: Componente Button final
   ============================================ */

// Spinner simple para loading state
// const Spinner = styled.span`
//   width: 16px;
//   height: 16px;
//   border: 2px solid currentColor;
//   border-right-color: transparent;
//   border-radius: 50%;
//   animation: spin 0.75s linear infinite;
//
//   @keyframes spin {
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;
//
// export const Button: React.FC<ButtonProps> = ({
//   variant = 'primary',
//   size = 'md',
//   fullWidth = false,
//   disabled = false,
//   isLoading = false,
//   leftIcon,
//   rightIcon,
//   children,
//   onClick,
// }) => {
//   return (
//     <StyledButton
//       $variant={variant}
//       $size={size}
//       $fullWidth={fullWidth}
//       $isLoading={isLoading}
//       disabled={disabled || isLoading}
//       onClick={onClick}
//     >
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <>
//           {leftIcon && <span>{leftIcon}</span>}
//           {children}
//           {rightIcon && <span>{rightIcon}</span>}
//         </>
//       )}
//     </StyledButton>
//   );
// };
```

---

### Paso 8: Usar con ThemeProvider

```tsx
// App.tsx
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Button } from './Button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          padding: '20px',
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button variant="ghost">Ghost</Button>

        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>

        <Button isLoading>Loading...</Button>
        <Button disabled>Disabled</Button>
        <Button fullWidth>Full Width</Button>
      </div>
    </ThemeProvider>
  );
}
```

---

## ✅ Criterios de Evaluación

- [ ] El tema está correctamente definido y tipado
- [ ] Las variantes cambian los colores dinámicamente
- [ ] Los tamaños funcionan correctamente
- [ ] El estado de loading muestra un spinner
- [ ] Props transient ($) evitan pasar a DOM
- [ ] TypeScript detecta errores en variantes inválidas

---

## 🔑 Conceptos Clave

1. **Theme** centraliza colores, espaciados y otros tokens
2. **Props transient** (`$variant`) no se pasan al DOM
3. **css helper** permite crear bloques de estilos reutilizables
4. **ThemeProvider** inyecta el tema via Context
