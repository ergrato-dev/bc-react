/* ============================================
   EJERCICIO 04: Componentes con CVA
   Archivo: utils.ts (solution)
   ============================================ */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind de forma inteligente
 * - clsx: permite clases condicionales y arrays
 * - twMerge: resuelve conflictos de utilidades Tailwind
 *
 * @example
 * cn('px-4', 'px-6') // → 'px-6' (la última gana)
 * cn('text-red-500', condition && 'text-blue-500')
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
