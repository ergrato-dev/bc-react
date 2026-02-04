// ============================================
// EJERCICIO 04: Design Tokens con CVA
// Archivo: Components.tsx (solution)
// ============================================

import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { forwardRef } from 'react';

// ============================================
// PASO 1: Utilidad cn()
// ============================================

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ============================================
// PASO 2: Button con CVA
// ============================================

const buttonVariants = cva(
  // Base classes (aplicadas siempre)
  `
    inline-flex items-center justify-center
    rounded-lg font-medium
    transition-colors duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        default:
          'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
        destructive:
          'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
        outline:
          'border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white',
        ghost:
          'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white',
        link: 'bg-transparent text-blue-600 dark:text-blue-400 underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

// Tipos extraídos automáticamente de las variantes
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

/**
 * Botón con variantes de estilo y tamaño
 * @example
 * <Button variant="default" size="lg">Guardar</Button>
 * <Button variant="destructive">Eliminar</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

// ============================================
// PASO 3: Badge con CVA
// ============================================

const badgeVariants = cva(
  // Base classes
  `
    inline-flex items-center
    rounded-full px-2.5 py-0.5
    text-xs font-medium
    transition-colors
  `,
  {
    variants: {
      variant: {
        default:
          'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
        secondary:
          'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
        success:
          'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
        warning:
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
        error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

/**
 * Badge para mostrar estados o etiquetas
 * @example
 * <Badge variant="success">Activo</Badge>
 */
export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

// ============================================
// PASO 4: Input con CVA
// ============================================

const inputVariants = cva(
  // Base classes
  `
    w-full rounded-lg border
    bg-white dark:bg-gray-800
    text-gray-900 dark:text-white
    placeholder:text-gray-400
    transition-colors
    focus:outline-none focus:ring-2 focus:ring-offset-0
  `,
  {
    variants: {
      inputSize: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-5 text-lg',
      },
      error: {
        true: 'border-red-500 focus:ring-red-500 focus:border-red-500',
        false:
          'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500',
      },
    },
    defaultVariants: {
      inputSize: 'md',
      error: false,
    },
  },
);

// Omitimos 'size' nativo del input para evitar conflicto
type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  VariantProps<typeof inputVariants>;

/**
 * Input con tamaños y estado de error
 * @example
 * <Input inputSize="lg" placeholder="Email" />
 * <Input error placeholder="Campo con error" />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputSize, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ inputSize, error }), className)}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

// ============================================
// BONUS: Exportar variantes para reutilización
// ============================================

export { buttonVariants, badgeVariants, inputVariants };
