// ============================================
// EJERCICIO 03: useDebounce
// Hook para optimización de valores
// ============================================

import { useState, useEffect } from 'react';

// ============================================
// PASO 1: Entender el concepto de Debounce
// ============================================
// Debounce retrasa la actualización de un valor hasta que
// el usuario deje de cambiar el input por un tiempo determinado.
// Útil para: búsquedas en tiempo real, validaciones costosas

// ============================================
// PASO 2: Implementar useDebounce
// ============================================

// Descomenta:
// const useDebounce = <T,>(value: T, delay: number = 500): T => {
//   // Estado para el valor retrasado
//   const [debouncedValue, setDebouncedValue] = useState<T>(value);
//
//   useEffect(() => {
//     // Crear timeout
//     const timeoutId = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);
//
//     // Cleanup: limpiar timeout anterior
//     return () => {
//       clearTimeout(timeoutId);
//     };
//   }, [value, delay]);
//
//   return debouncedValue;
// };
//
// export { useDebounce };

export {};
