import { useState, useCallback } from 'react';

/**
 * Hook para manejar valores booleanos con toggle
 * @param initialValue - Valor inicial (por defecto false)
 * @returns Objeto con value y funciones para manipularlo
 */
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // Alterna entre true y false
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  // Establece valor a true
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  // Establece valor a false
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
}
