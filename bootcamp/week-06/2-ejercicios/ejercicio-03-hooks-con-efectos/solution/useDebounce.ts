// ============================================
// SOLUCIÓN: useDebounce
// Hook para retrasar actualizaciones de valores
// ============================================

import { useState, useEffect } from 'react';

/**
 * Hook que retrasa la actualización de un valor
 * Útil para optimizar búsquedas en tiempo real, validaciones costosas, etc.
 *
 * @param value - Valor a debounce
 * @param delay - Tiempo de espera en ms (default: 500)
 * @returns Valor actualizado después del delay
 *
 * @example
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearch = useDebounce(searchTerm, 300);
 *
 * useEffect(() => {
 *   // Esta búsqueda solo se ejecuta 300ms después de que el usuario deja de escribir
 *   fetchSearchResults(debouncedSearch);
 * }, [debouncedSearch]);
 */
const useDebounce = <T>(value: T, delay: number = 500): T => {
  // Estado para almacenar el valor retrasado
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Crear un timeout que actualiza el valor después del delay
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: limpiar el timeout anterior cuando:
    // 1. El valor cambia (se reinicia el contador)
    // 2. El delay cambia
    // 3. El componente se desmonta
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
};

export { useDebounce };
