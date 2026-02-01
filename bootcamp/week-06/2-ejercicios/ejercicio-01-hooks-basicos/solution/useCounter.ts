// ============================================
// SOLUCIÓN: useCounter
// Custom hook para manejar contadores
// ============================================

import { useState, useCallback } from 'react';

// ============================================
// Interfaces
// ============================================

interface UseCounterOptions {
  min?: number;
  max?: number;
  step?: number;
}

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

// ============================================
// Hook useCounter
// ============================================

/**
 * Hook para manejar un contador con opciones de configuración
 * @param initialValue - Valor inicial del contador
 * @param options - Configuración: min, max, step
 * @returns Objeto con count y funciones de control
 */
const useCounter = (
  initialValue: number = 0,
  options: UseCounterOptions = {},
): UseCounterReturn => {
  // Desestructurar opciones con valores por defecto
  const { min = -Infinity, max = Infinity, step = 1 } = options;

  const [count, setCountState] = useState(initialValue);

  // Función helper para aplicar límites
  const clamp = useCallback(
    (value: number): number => {
      return Math.min(Math.max(value, min), max);
    },
    [min, max],
  );

  // Incrementar respetando el máximo
  const increment = useCallback(() => {
    setCountState((prev: number) => clamp(prev + step));
  }, [step, clamp]);

  // Decrementar respetando el mínimo
  const decrement = useCallback(() => {
    setCountState((prev: number) => clamp(prev - step));
  }, [step, clamp]);

  // Volver al valor inicial
  const reset = useCallback(() => {
    setCountState(initialValue);
  }, [initialValue]);

  // Establecer un valor específico (con límites)
  const setCount = useCallback(
    (value: number) => {
      setCountState(clamp(value));
    },
    [clamp],
  );

  return { count, increment, decrement, reset, setCount };
};

export { useCounter };
export type { UseCounterOptions, UseCounterReturn };
