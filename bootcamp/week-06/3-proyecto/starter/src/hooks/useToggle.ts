// ============================================
// Custom Hook: useToggle
// Toggle de valores booleanos
// ============================================

import { useState, useCallback } from 'react';

interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
  setValue: (value: boolean) => void;
}

/**
 * Hook para manejar estados booleanos toggle
 *
 * @param initialValue - Valor inicial (default: false)
 * @returns Objeto con value y funciones de control
 *
 * @example
 * const { value: isOpen, toggle, setFalse: close } = useToggle(false);
 */
export const useToggle = (initialValue: boolean = false): UseToggleReturn => {
  // TODO: Implementar useState
  const [value, setValue] = useState(initialValue);

  // TODO: Implementar toggle
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  // TODO: Implementar setTrue
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  // TODO: Implementar setFalse
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return { value, toggle, setTrue, setFalse, setValue };
};
