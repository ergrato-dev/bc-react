// ============================================
// EJERCICIO 04: useLocalStorage<T>
// Hook genérico para persistencia en localStorage
// ============================================

import { useState, useCallback, useEffect } from 'react';

// ============================================
// PASO 1: Definir la interfaz genérica
// ============================================

// El genérico <T> permite que el hook funcione con cualquier tipo
// Descomenta:
// interface UseLocalStorageReturn<T> {
//   /** Valor actual almacenado */
//   value: T;
//   /** Actualizar el valor (acepta valor o función) */
//   setValue: (value: T | ((prev: T) => T)) => void;
//   /** Eliminar el valor del storage */
//   removeValue: () => void;
// }

// ============================================
// PASO 2: Implementar el hook genérico
// ============================================

// Descomenta:
// const useLocalStorage = <T,>(
//   key: string,
//   initialValue: T
// ): UseLocalStorageReturn<T> => {
//   // Lazy initialization: lee del storage solo una vez
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     if (typeof window === 'undefined') {
//       return initialValue;
//     }
//
//     try {
//       const item = window.localStorage.getItem(key);
//       // Si existe, parsear; si no, usar valor inicial
//       return item ? (JSON.parse(item) as T) : initialValue;
//     } catch (error) {
//       console.warn(`Error leyendo localStorage key "${key}":`, error);
//       return initialValue;
//     }
//   });
//
//   // Función para actualizar el valor
//   const setValue = useCallback((value: T | ((prev: T) => T)) => {
//     try {
//       // Permitir función para acceder al valor anterior
//       const valueToStore = value instanceof Function
//         ? value(storedValue)
//         : value;
//
//       setStoredValue(valueToStore);
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       console.warn(`Error guardando en localStorage key "${key}":`, error);
//     }
//   }, [key, storedValue]);
//
//   // Función para eliminar el valor
//   const removeValue = useCallback(() => {
//     try {
//       window.localStorage.removeItem(key);
//       setStoredValue(initialValue);
//     } catch (error) {
//       console.warn(`Error eliminando localStorage key "${key}":`, error);
//     }
//   }, [key, initialValue]);
//
//   // Sincronizar entre pestañas
//   useEffect(() => {
//     const handleStorageChange = (e: StorageEvent) => {
//       if (e.key === key && e.newValue) {
//         try {
//           setStoredValue(JSON.parse(e.newValue) as T);
//         } catch {
//           // Ignorar errores de parsing
//         }
//       }
//     };
//
//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, [key]);
//
//   return { value: storedValue, setValue, removeValue };
// };
//
// export { useLocalStorage };
// export type { UseLocalStorageReturn };

export {};
