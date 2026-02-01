// ============================================
// EJERCICIO 02: useForm
// Hook para manejar formularios
// ============================================

import { useState, useCallback, ChangeEvent } from 'react';

// ============================================
// PASO 1: Definir tipos genéricos
// ============================================

// Descomenta las siguientes líneas:
// type FormValues = Record<string, string | number | boolean>;
//
// interface UseFormReturn<T extends FormValues> {
//   values: T;
//   handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
//   setValue: <K extends keyof T>(field: K, value: T[K]) => void;
//   reset: () => void;
//   isDirty: boolean;
// }

// ============================================
// PASO 2: Implementar useForm
// ============================================

// Descomenta las siguientes líneas:
// const useForm = <T extends FormValues>(initialValues: T): UseFormReturn<T> => {
//   const [values, setValues] = useState<T>(initialValues);
//   const [isDirty, setIsDirty] = useState(false);
//
//   const handleChange = useCallback((
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;
//     const finalValue = type === 'checkbox'
//       ? (e.target as HTMLInputElement).checked
//       : type === 'number'
//       ? Number(value)
//       : value;
//
//     setValues(prev => ({ ...prev, [name]: finalValue }));
//     setIsDirty(true);
//   }, []);
//
//   const setValue = useCallback(<K extends keyof T>(field: K, value: T[K]) => {
//     setValues(prev => ({ ...prev, [field]: value }));
//     setIsDirty(true);
//   }, []);
//
//   const reset = useCallback(() => {
//     setValues(initialValues);
//     setIsDirty(false);
//   }, [initialValues]);
//
//   return { values, handleChange, setValue, reset, isDirty };
// };
//
// export { useForm };
// export type { UseFormReturn, FormValues };

export {};
