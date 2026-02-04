// ============================================
// EJERCICIO 04: Design Tokens con CVA
// Archivo: Components.tsx (starter)
// ============================================

// import { cva, type VariantProps } from 'class-variance-authority';
// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';
// import { forwardRef } from 'react';

// ============================================
// PASO 1: Utilidad cn()
// ============================================
// Descomenta:

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// ============================================
// PASO 2: Button con CVA
// ============================================
// Descomenta y completa:

// const buttonVariants = cva(
//   // Base classes (aplicadas siempre)
//   `
//     inline-flex items-center justify-center
//     rounded-lg font-medium
//     transition-colors duration-200
//     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
//     disabled:pointer-events-none disabled:opacity-50
//   `,
//   {
//     variants: {
//       variant: {
//         // TODO: Definir estilos para cada variante
//         // default: 'bg-blue-600 text-white hover:bg-blue-700 ...',
//         // destructive: '...',
//         // outline: '...',
//         // ghost: '...',
//         // link: '...',
//       },
//       size: {
//         // TODO: Definir tamaños
//         // sm: 'h-8 px-3 text-sm',
//         // md: '...',
//         // lg: '...',
//         // icon: '...',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'md',
//     },
//   }
// );

// Tipos extraídos de las variantes
// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
//   VariantProps<typeof buttonVariants>;

// export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, ...props }, ref) => {
//     // TODO: Usar cn() para combinar buttonVariants con className
//     return null;
//   }
// );
// Button.displayName = 'Button';

// ============================================
// PASO 3: Badge con CVA
// ============================================
// Descomenta y completa:

// const badgeVariants = cva(
//   // Base classes
//   `
//     inline-flex items-center
//     rounded-full px-2.5 py-0.5
//     text-xs font-medium
//     transition-colors
//   `,
//   {
//     variants: {
//       variant: {
//         // TODO: Definir variantes de color
//         // default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
//         // secondary: '...',
//         // success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
//         // warning: '...',
//         // error: '...',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//     },
//   }
// );

// type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
//   VariantProps<typeof badgeVariants>;

// export function Badge({ className, variant, ...props }: BadgeProps) {
//   // TODO: Implementar
//   return null;
// }

// ============================================
// PASO 4: Input con CVA
// ============================================
// Descomenta y completa:

// const inputVariants = cva(
//   // Base classes
//   `
//     w-full rounded-lg border
//     bg-white dark:bg-gray-800
//     text-gray-900 dark:text-white
//     placeholder:text-gray-400
//     transition-colors
//     focus:outline-none focus:ring-2 focus:ring-offset-0
//   `,
//   {
//     variants: {
//       inputSize: {
//         // TODO: Definir tamaños
//         // sm: 'h-8 px-3 text-sm',
//         // md: '...',
//         // lg: '...',
//       },
//       // Variante booleana para error
//       // error: {
//       //   true: 'border-red-500 focus:ring-red-500',
//       //   false: 'border-gray-300 dark:border-gray-600 focus:ring-blue-500',
//       // },
//     },
//     defaultVariants: {
//       inputSize: 'md',
//       error: false,
//     },
//   }
// );

// type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
//   VariantProps<typeof inputVariants>;

// export const Input = forwardRef<HTMLInputElement, InputProps>(
//   ({ className, inputSize, error, ...props }, ref) => {
//     // TODO: Implementar
//     return null;
//   }
// );
// Input.displayName = 'Input';

// ============================================
// EXPORTS para testing
// ============================================
export {};
