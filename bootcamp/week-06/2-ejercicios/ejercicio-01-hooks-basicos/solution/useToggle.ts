// ============================================
// SOLUCIÓN: useToggle
// Custom hook para manejar estados boolean
// ============================================

import { useState, useCallback } from 'react';

// ============================================
// Interface para el retorno del hook
// ============================================

interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
  setValue: (value: boolean) => void;
}

// ============================================
// Hook useToggle
// ============================================

/**
 * Hook para manejar estados boolean con funciones de utilidad
 * @param initialValue - Valor inicial del toggle (default: false)
 * @returns Objeto con value y funciones de control
 */
const useToggle = (initialValue: boolean = false): UseToggleReturn => {
  // Estado interno del hook
  const [value, setValueState] = useState(initialValue);

  // useCallback garantiza que las funciones no se recrean en cada render
  // Esto es importante para:
  // 1. Optimización de rendimiento
  // 2. Uso en dependencias de otros hooks
  // 3. Pasar como props a componentes memoizados

  const toggle = useCallback(() => {
    setValueState((prev) => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValueState(true);
  }, []);

  const setFalse = useCallback(() => {
    setValueState(false);
  }, []);

  const setValue = useCallback((newValue: boolean) => {
    setValueState(newValue);
  }, []);

  // Retornar objeto con estado y funciones
  return { value, toggle, setTrue, setFalse, setValue };
};

export { useToggle };
export type { UseToggleReturn };
