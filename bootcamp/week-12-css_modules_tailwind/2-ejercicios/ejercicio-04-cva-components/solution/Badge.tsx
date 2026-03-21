/* ============================================
   EJERCICIO 04: Componentes con CVA
   Archivo: Badge.tsx (solution)
   ============================================ */

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

// Definición de variantes con CVA
const badgeVariants = cva(
  // Clases base
  'inline-flex items-center rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-gray-700 text-gray-200',
        primary: 'bg-blue-600 text-white',
        success: 'bg-green-600 text-white',
        warning: 'bg-yellow-500 text-black',
        danger: 'bg-red-600 text-white',
        outline: 'border border-gray-600 text-gray-300 bg-transparent',
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-2.5 py-0.5',
        lg: 'text-base px-3 py-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

// Props del componente extienden los atributos HTML + variantes de CVA
interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

/**
 * Componente Badge con variantes tipadas
 * Usa CVA para definir variantes de forma declarativa
 */
export const Badge: React.FC<BadgeProps> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}>
      {children}
    </span>
  );
};

export { badgeVariants };
