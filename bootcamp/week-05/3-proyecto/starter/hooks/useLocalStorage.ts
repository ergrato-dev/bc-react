// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: hooks/useLocalStorage.ts
// ============================================

import { useState, useEffect } from 'react';

// ============================================
// HOOK useLocalStorage
// ============================================

// TODO: Implementa el hook para sincronizar estado con localStorage
//
// export const useLocalStorage = <T,>(key: string, initialValue: T) => {
//   // 1. Inicializar estado desde localStorage o usar valor inicial
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.error(`Error reading localStorage key "${key}":`, error);
//       return initialValue;
//     }
//   });
//
//   // 2. Actualizar localStorage cuando cambie el valor
//   useEffect(() => {
//     try {
//       window.localStorage.setItem(key, JSON.stringify(storedValue));
//     } catch (error) {
//       console.error(`Error writing localStorage key "${key}":`, error);
//     }
//   }, [key, storedValue]);
//
//   // 3. Función para actualizar el valor
//   const setValue = (value: T | ((val: T) => T)) => {
//     setStoredValue((prev) => {
//       const valueToStore = value instanceof Function ? value(prev) : value;
//       return valueToStore;
//     });
//   };
//
//   return [storedValue, setValue] as const;
// };

// Exportación temporal
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  return [value, setValue] as const;
};
