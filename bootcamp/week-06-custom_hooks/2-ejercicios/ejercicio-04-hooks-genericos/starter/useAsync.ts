// ============================================
// EJERCICIO 04: useAsync<T>
// Hook genérico para operaciones asíncronas
// ============================================

import { useState, useCallback } from 'react';

// ============================================
// PASO 1: Definir tipos de estado
// ============================================

// Descomenta:
// type AsyncStatus = 'idle' | 'loading' | 'success' | 'error';
//
// interface UseAsyncState<T> {
//   data: T | null;
//   status: AsyncStatus;
//   error: Error | null;
// }
//
// interface UseAsyncReturn<T> extends UseAsyncState<T> {
//   isIdle: boolean;
//   isLoading: boolean;
//   isError: boolean;
//   isSuccess: boolean;
//   execute: (...args: unknown[]) => Promise<T | null>;
//   reset: () => void;
// }

// ============================================
// PASO 2: Estado inicial
// ============================================

// Descomenta:
// const initialState = <T,>(): UseAsyncState<T> => ({
//   data: null,
//   status: 'idle',
//   error: null
// });

// ============================================
// PASO 3: Implementar el hook genérico
// ============================================

// Descomenta:
// const useAsync = <T,>(
//   asyncFunction: (...args: unknown[]) => Promise<T>
// ): UseAsyncReturn<T> => {
//   const [state, setState] = useState<UseAsyncState<T>>(initialState);
//
//   // Ejecutar la función asíncrona
//   const execute = useCallback(
//     async (...args: unknown[]): Promise<T | null> => {
//       setState({ data: null, status: 'loading', error: null });
//
//       try {
//         const result = await asyncFunction(...args);
//         setState({ data: result, status: 'success', error: null });
//         return result;
//       } catch (error) {
//         const errorObj = error instanceof Error
//           ? error
//           : new Error('Error desconocido');
//         setState({ data: null, status: 'error', error: errorObj });
//         return null;
//       }
//     },
//     [asyncFunction]
//   );
//
//   // Reiniciar al estado inicial
//   const reset = useCallback(() => {
//     setState(initialState());
//   }, []);
//
//   return {
//     ...state,
//     isIdle: state.status === 'idle',
//     isLoading: state.status === 'loading',
//     isError: state.status === 'error',
//     isSuccess: state.status === 'success',
//     execute,
//     reset
//   };
// };
//
// export { useAsync };
// export type { AsyncStatus, UseAsyncReturn };

export {};
