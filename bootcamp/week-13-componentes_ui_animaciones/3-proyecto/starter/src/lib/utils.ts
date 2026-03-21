// ============================================
// PROYECTO: Mini Design System
// Archivo: lib/utils.ts
// ============================================

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind de manera inteligente
 * - Usa clsx para condicionales
 * - Usa twMerge para resolver conflictos
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-blue-500', className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
