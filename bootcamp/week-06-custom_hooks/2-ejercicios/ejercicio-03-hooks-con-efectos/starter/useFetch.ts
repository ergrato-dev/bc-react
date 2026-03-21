// ============================================
// EJERCICIO 03: useFetch
// Hook para llamadas API
// ============================================

import { useState, useEffect, useCallback, useRef } from 'react';

// ============================================
// PASO 1: Definir interfaces
// ============================================

// Descomenta:
// interface UseFetchState<T> {
//   data: T | null;
//   loading: boolean;
//   error: Error | null;
// }
//
// interface UseFetchReturn<T> extends UseFetchState<T> {
//   refetch: () => Promise<void>;
// }

// ============================================
// PASO 2: Implementar useFetch
// ============================================

// Descomenta:
// const useFetch = <T,>(url: string): UseFetchReturn<T> => {
//   const [state, setState] = useState<UseFetchState<T>>({
//     data: null,
//     loading: true,
//     error: null
//   });
//
//   const abortControllerRef = useRef<AbortController | null>(null);
//
//   const fetchData = useCallback(async () => {
//     // Cancelar request anterior
//     if (abortControllerRef.current) {
//       abortControllerRef.current.abort();
//     }
//
//     abortControllerRef.current = new AbortController();
//     const { signal } = abortControllerRef.current;
//
//     setState(prev => ({ ...prev, loading: true, error: null }));
//
//     try {
//       const response = await fetch(url, { signal });
//       if (!response.ok) {
//         throw new Error(`HTTP ${response.status}`);
//       }
//       const data = await response.json();
//       setState({ data, loading: false, error: null });
//     } catch (error) {
//       if (error instanceof Error && error.name === 'AbortError') return;
//       setState({
//         data: null,
//         loading: false,
//         error: error instanceof Error ? error : new Error('Error desconocido')
//       });
//     }
//   }, [url]);
//
//   useEffect(() => {
//     fetchData();
//     return () => {
//       abortControllerRef.current?.abort();
//     };
//   }, [fetchData]);
//
//   return { ...state, refetch: fetchData };
// };
//
// export { useFetch };
// export type { UseFetchReturn };

export {};
