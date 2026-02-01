// ============================================
// Custom Hook: useDebounce
// Retrasar actualización de valores
// ============================================

import { useState, useEffect } from 'react';

/**
 * Hook que retrasa la actualización de un valor
 * Útil para optimizar búsquedas en tiempo real
 *
 * @param value - Valor a debounce
 * @param delay - Tiempo de espera en ms (default: 500)
 * @returns Valor actualizado después del delay
 *
 * @example
 * const [search, setSearch] = useState('');
 * const debouncedSearch = useDebounce(search, 300);
 */
export const useDebounce = <T>(value: T, delay: number = 500): T => {
  // TODO: Implementar estado para valor debounced
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  // TODO: Implementar useEffect con setTimeout
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};
