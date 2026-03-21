// ============================================
// EJERCICIO 01: useToggle
// Custom hook para manejar estados boolean
// ============================================

import { useState, useCallback } from 'react';

// ============================================
// PASO 1: Definir interface para el retorno
// ============================================
console.log('--- Paso 1: Interface UseToggleReturn ---');

// QUÉ: Interface que define lo que retorna el hook
// PARA: TypeScript conozca la forma exacta del retorno
// IMPACTO: Autocompletado y validación de tipos

// Descomenta las siguientes líneas:
// interface UseToggleReturn {
//   value: boolean;
//   toggle: () => void;
//   setTrue: () => void;
//   setFalse: () => void;
//   setValue: (value: boolean) => void;
// }

console.log('');

// ============================================
// PASO 2: Crear el hook useToggle
// ============================================
console.log('--- Paso 2: Implementar useToggle ---');

// QUÉ: Hook que encapsula lógica de toggle
// PARA: Reutilizar en modales, menús, checkboxes, etc.
// IMPACTO: Código más limpio y DRY

// Descomenta las siguientes líneas:
// const useToggle = (initialValue: boolean = false): UseToggleReturn => {
//   // Estado interno del hook
//   const [value, setValueState] = useState(initialValue);
//
//   // useCallback garantiza que las funciones no se recrean
//   // Esto es importante para optimización y dependencias
//   const toggle = useCallback(() => {
//     setValueState(prev => !prev);
//   }, []);
//
//   const setTrue = useCallback(() => {
//     setValueState(true);
//   }, []);
//
//   const setFalse = useCallback(() => {
//     setValueState(false);
//   }, []);
//
//   const setValue = useCallback((newValue: boolean) => {
//     setValueState(newValue);
//   }, []);
//
//   // Retornar objeto con estado y funciones
//   return { value, toggle, setTrue, setFalse, setValue };
// };

console.log('');

// ============================================
// PASO 3: Exportar el hook
// ============================================
console.log('--- Paso 3: Export ---');

// Descomenta la siguiente línea:
// export { useToggle };
// export type { UseToggleReturn };

// Placeholder para que el archivo compile
export {};
