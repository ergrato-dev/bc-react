/* ============================================
   EJERCICIO 04: Componentes con CVA
   Archivo: Button.tsx (starter)
   ============================================ */

// import { cva, type VariantProps } from 'class-variance-authority';
// import { cn } from './utils';

// ============================================
// PASO 5: Button con variantes compuestas
// compoundVariants permite estilos específicos
// para combinaciones de variantes
// ============================================

// Descomenta las variantes:
// const buttonVariants = cva(
//   // Base: estilos comunes a todos los botones
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
//     // Estilos específicos para combinaciones de variantes
//     compoundVariants: [
//       {
//         variant: 'outline',
//         size: 'sm',
//         className: 'border', // borde normal para small
//       },
//       {
//         variant: 'outline',
//         size: ['md', 'lg'], // aplica a ambos tamaños
//         className: 'border-2', // borde más grueso
//       },
//     ],
//     defaultVariants: {
//       variant: 'primary',
//       size: 'md',
//       fullWidth: false,
//     },
//   }
// );

// ============================================
// PASO 6: Componente Button completo
// ============================================

// interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   /** Muestra spinner de carga */
//   isLoading?: boolean;
//   /** Icono a la izquierda */
//   leftIcon?: React.ReactNode;
//   /** Icono a la derecha */
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
// // Exportar variantes para reutilizar (ej: Link styled as button)
// export { buttonVariants };

export {};
