// ============================================
// Custom Hook: useLocalStorage
// Persistencia de datos en localStorage
// ============================================

import { useState, useCallback, useEffect } from 'react';

interface UseLocalStorageReturn<T> {
  value: T;
  setValue: (value: T | ((prev: T) => T)) => void;
  removeValue: () => void;
}

/**
 * Hook para persistir estado en localStorage
 *
 * @param key - Clave única en localStorage
 * @param initialValue - Valor inicial si no existe
 * @returns Objeto con value, setValue y removeValue
 *
 * @example
 * const { value: theme, setValue: setTheme } = useLocalStorage('theme', 'dark');
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): UseLocalStorageReturn<T> => {
  // TODO: Implementar lazy initialization
  const [storedValue, setStoredValue] = useState<T>(() => {
    // TODO: Leer de localStorage o usar initialValue
    return initialValue;
  });

  // TODO: Implementar setValue que guarde en localStorage
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      // TODO: Actualizar estado y localStorage
      setStoredValue(value instanceof Function ? value(storedValue) : value);
    },
    [storedValue],
  );

  // TODO: Implementar removeValue
  const removeValue = useCallback(() => {
    // TODO: Eliminar de localStorage y resetear estado
    setStoredValue(initialValue);
  }, [initialValue]);

  // TODO: Sincronizar entre pestañas con storage event

  return { value: storedValue, setValue, removeValue };
};
