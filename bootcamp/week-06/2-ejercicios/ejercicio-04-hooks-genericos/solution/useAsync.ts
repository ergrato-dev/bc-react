// ============================================
// SOLUCIÓN: useAsync<T>
// Hook genérico para operaciones asíncronas
// ============================================

import { useState, useCallback } from 'react';

/**
 * Estados posibles de una operación asíncrona
 */
type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * Estado interno del hook
 */
interface UseAsyncState<T> {
  data: T | null;
  status: AsyncStatus;
  error: Error | null;
}

/**
 * Retorno completo del hook useAsync
 */
interface UseAsyncReturn<T> extends UseAsyncState<T> {
  /** True si está en estado idle (sin ejecutar) */
  isIdle: boolean;
  /** True si está cargando */
  isLoading: boolean;
  /** True si hubo un error */
  isError: boolean;
  /** True si la operación fue exitosa */
  isSuccess: boolean;
  /** Ejecutar la función asíncrona */
  execute: (...args: unknown[]) => Promise<T | null>;
  /** Reiniciar al estado inicial */
  reset: () => void;
}

/**
 * Estado inicial genérico
 */
const createInitialState = <T>(): UseAsyncState<T> => ({
  data: null,
  status: 'idle',
  error: null,
});

/**
 * Hook genérico para manejar operaciones asíncronas
 * Proporciona estados de loading, error, success y la data resultante
 *
 * @param asyncFunction - Función asíncrona a ejecutar
 * @returns Estado y funciones para controlar la operación
 *
 * @example
 * const fetchUser = async (id: number): Promise<User> => {
 *   const res = await fetch(`/api/users/${id}`);
 *   return res.json();
 * };
 *
 * const { data, isLoading, isError, execute } = useAsync(fetchUser);
 *
 * // Ejecutar cuando sea necesario
 * <button onClick={() => execute(123)}>Cargar Usuario</button>
 */
const useAsync = <T>(
  asyncFunction: (...args: unknown[]) => Promise<T>,
): UseAsyncReturn<T> => {
  const [state, setState] = useState<UseAsyncState<T>>(createInitialState);

  // Ejecutar la función asíncrona
  const execute = useCallback(
    async (...args: unknown[]): Promise<T | null> => {
      // Iniciar loading
      setState({
        data: null,
        status: 'loading',
        error: null,
      });

      try {
        // Ejecutar la función con los argumentos
        const result = await asyncFunction(...args);

        // Éxito
        setState({
          data: result,
          status: 'success',
          error: null,
        });

        return result;
      } catch (error) {
        // Error
        const errorObj =
          error instanceof Error
            ? error
            : new Error(String(error) || 'Error desconocido');

        setState({
          data: null,
          status: 'error',
          error: errorObj,
        });

        return null;
      }
    },
    [asyncFunction],
  );

  // Reiniciar al estado inicial
  const reset = useCallback(() => {
    setState(createInitialState());
  }, []);

  // Computar estados derivados
  return {
    ...state,
    isIdle: state.status === 'idle',
    isLoading: state.status === 'loading',
    isError: state.status === 'error',
    isSuccess: state.status === 'success',
    execute,
    reset,
  };
};

export { useAsync };
export type { AsyncStatus, UseAsyncReturn };
