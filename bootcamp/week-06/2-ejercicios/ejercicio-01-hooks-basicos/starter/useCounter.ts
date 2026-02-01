// ============================================
// EJERCICIO 01: useCounter
// Custom hook para manejar contadores
// ============================================

import { useState, useCallback } from 'react';

// ============================================
// PASO 1: Definir interfaces
// ============================================
console.log('--- Paso 1: Interfaces ---');

// QUÉ: Interface para opciones del contador
// PARA: Configurar límites y paso del contador
// IMPACTO: Hook flexible y reutilizable

// Descomenta las siguientes líneas:
// interface UseCounterOptions {
//   min?: number;
//   max?: number;
//   step?: number;
// }
//
// interface UseCounterReturn {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
//   reset: () => void;
//   setCount: (value: number) => void;
// }

console.log('');

// ============================================
// PASO 2: Implementar useCounter
// ============================================
console.log('--- Paso 2: Implementar useCounter ---');

// QUÉ: Hook que maneja un contador con límites
// PARA: Paginación, cantidades, sliders, etc.
// IMPACTO: Lógica de contador reutilizable

// Descomenta las siguientes líneas:
// const useCounter = (
//   initialValue: number = 0,
//   options: UseCounterOptions = {}
// ): UseCounterReturn => {
//   // Desestructurar opciones con defaults
//   const { min = -Infinity, max = Infinity, step = 1 } = options;
//
//   const [count, setCountState] = useState(initialValue);
//
//   // Función helper para aplicar límites
//   const clamp = useCallback((value: number): number => {
//     return Math.min(Math.max(value, min), max);
//   }, [min, max]);
//
//   const increment = useCallback(() => {
//     setCountState(prev => clamp(prev + step));
//   }, [step, clamp]);
//
//   const decrement = useCallback(() => {
//     setCountState(prev => clamp(prev - step));
//   }, [step, clamp]);
//
//   const reset = useCallback(() => {
//     setCountState(initialValue);
//   }, [initialValue]);
//
//   const setCount = useCallback((value: number) => {
//     setCountState(clamp(value));
//   }, [clamp]);
//
//   return { count, increment, decrement, reset, setCount };
// };

console.log('');

// ============================================
// PASO 3: Export
// ============================================

// Descomenta las siguientes líneas:
// export { useCounter };
// export type { UseCounterOptions, UseCounterReturn };

// Placeholder para que el archivo compile
export {};
