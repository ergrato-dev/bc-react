/* ============================================
   EJERCICIO 04: Componentes con CVA
   Archivo: Badge.tsx (starter)
   ============================================ */

// import { cva, type VariantProps } from 'class-variance-authority';
// import { cn } from './utils';

// ============================================
// PASO 3: Definir variantes con CVA
// cva() recibe clases base + objeto de variantes
// ============================================

// Descomenta las variantes:
// const badgeVariants = cva(
//   // Clases base: siempre se aplican a todos los badges
//   'inline-flex items-center rounded-full font-medium transition-colors',
//   {
//     // Definición de variantes
//     variants: {
//       // Variante de color/estilo
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
//     // Valores por defecto cuando no se especifican
//     defaultVariants: {
//       variant: 'default',
//       size: 'md',
//     },
//   }
// );

// ============================================
// PASO 4: Componente Badge tipado
// VariantProps extrae tipos automáticamente de CVA
// ============================================

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

export {};
