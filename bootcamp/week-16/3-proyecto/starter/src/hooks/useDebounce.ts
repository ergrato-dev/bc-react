import { useState, useEffect } from 'react';

// ============================================
// HOOK: useDebounce
// ============================================
// Retrasa la actualización de un valor para evitar
// operaciones costosas en cada pulsación de tecla

/**
 * Hook que aplica debounce a un valor
 * @param value - Valor a debounce
 * @param delay - Retraso en milisegundos
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Establecer timeout para actualizar el valor
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpiar timeout si el valor cambia antes del delay
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
