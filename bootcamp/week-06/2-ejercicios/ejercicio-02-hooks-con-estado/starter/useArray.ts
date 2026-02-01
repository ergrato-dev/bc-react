// ============================================
// EJERCICIO 02: useArray
// Hook para manejar arrays
// ============================================

import { useState, useCallback } from 'react';

// ============================================
// PASO 1: Definir interface
// ============================================

// Descomenta las siguientes líneas:
// interface UseArrayReturn<T> {
//   array: T[];
//   set: (newArray: T[]) => void;
//   push: (element: T) => void;
//   filter: (callback: (element: T, index: number) => boolean) => void;
//   update: (index: number, newElement: T) => void;
//   remove: (index: number) => void;
//   clear: () => void;
//   isEmpty: boolean;
// }

// ============================================
// PASO 2: Implementar useArray
// ============================================

// Descomenta las siguientes líneas:
// const useArray = <T,>(initialValue: T[] = []): UseArrayReturn<T> => {
//   const [array, setArray] = useState<T[]>(initialValue);
//
//   const push = useCallback((element: T) => {
//     setArray(prev => [...prev, element]);
//   }, []);
//
//   const filter = useCallback((callback: (element: T, index: number) => boolean) => {
//     setArray(prev => prev.filter(callback));
//   }, []);
//
//   const update = useCallback((index: number, newElement: T) => {
//     setArray(prev => {
//       const copy = [...prev];
//       copy[index] = newElement;
//       return copy;
//     });
//   }, []);
//
//   const remove = useCallback((index: number) => {
//     setArray(prev => prev.filter((_, i) => i !== index));
//   }, []);
//
//   const clear = useCallback(() => {
//     setArray([]);
//   }, []);
//
//   return {
//     array,
//     set: setArray,
//     push,
//     filter,
//     update,
//     remove,
//     clear,
//     isEmpty: array.length === 0
//   };
// };
//
// export { useArray };
// export type { UseArrayReturn };

export {};
