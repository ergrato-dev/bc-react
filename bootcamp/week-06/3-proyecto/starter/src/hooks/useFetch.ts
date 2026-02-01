// ============================================
// Custom Hook: useFetch
// Fetching de datos con estados
// ============================================

import { useState, useEffect, useCallback, useRef } from 'react';

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface UseFetchReturn<T> extends UseFetchState<T> {
  refetch: () => Promise<void>;
}

/**
 * Hook para realizar llamadas a APIs
 *
 * @param url - URL a la que hacer fetch
 * @returns Estado y función refetch
 *
 * @example
 * const { data, loading, error, refetch } = useFetch<User[]>('/api/users');
 */
export const useFetch = <T>(url: string): UseFetchReturn<T> => {
  // TODO: Implementar estado combinado
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  // TODO: Implementar AbortController ref
  const abortControllerRef = useRef<AbortController | null>(null);

  // TODO: Implementar fetchData con useCallback
  const fetchData = useCallback(async () => {
    // TODO: Cancelar request anterior
    // TODO: Crear nuevo AbortController
    // TODO: Iniciar loading
    // TODO: Hacer fetch
    // TODO: Manejar respuesta/error
    // TODO: Ignorar AbortError
  }, [url]);

  // TODO: useEffect para fetch inicial y cleanup
  useEffect(() => {
    fetchData();
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [fetchData]);

  return { ...state, refetch: fetchData };
};
