// ============================================
// HOOK: useDebounce
// ============================================
// Retrasa la actualización de un valor

import { useState, useEffect } from 'react';

/**
 * Hook para aplicar debounce a un valor
 * @param value - Valor a debounce
 * @param delay - Milisegundos de retraso
 * @returns Valor con debounce aplicado
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
