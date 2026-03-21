// ============================================
// SOLUCIÓN: useFetch
// Hook para llamadas API con AbortController
// ============================================

import { useState, useEffect, useCallback, useRef } from 'react';

// ============================================
// Interfaces tipadas
// ============================================

/**
 * Estado interno del hook useFetch
 */
interface UseFetchState<T> {
  /** Datos obtenidos de la API */
  data: T | null;
  /** Indica si está cargando */
  loading: boolean;
  /** Error si ocurre uno */
  error: Error | null;
}

/**
 * Retorno del hook useFetch
 */
interface UseFetchReturn<T> extends UseFetchState<T> {
  /** Función para recargar los datos */
  refetch: () => Promise<void>;
}

// ============================================
// Implementación del hook
// ============================================

/**
 * Hook para realizar llamadas a APIs con manejo de estados
 * @param url - URL a la que hacer fetch
 * @returns Estado y funciones para manejar la petición
 *
 * @example
 * const { data, loading, error, refetch } = useFetch<User[]>('/api/users');
 */
const useFetch = <T>(url: string): UseFetchReturn<T> => {
  // Estado combinado para data, loading y error
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  // Ref para el AbortController (persiste entre renders)
  const abortControllerRef = useRef<AbortController | null>(null);

  // Función de fetch memorizada
  const fetchData = useCallback(async () => {
    // Cancelar request anterior si existe
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Crear nuevo AbortController
    abortControllerRef.current = new AbortController();
    const { signal } = abortControllerRef.current;

    // Iniciar loading
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetch(url, { signal });

      // Verificar status HTTP
      if (!response.ok) {
        throw new Error(
          `HTTP Error: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      setState({ data, loading: false, error: null });
    } catch (error) {
      // Ignorar errores de abort (es comportamiento esperado)
      if (error instanceof Error && error.name === 'AbortError') {
        return;
      }

      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error : new Error('Error desconocido'),
      });
    }
  }, [url]);

  // Efecto para cargar datos cuando cambia la URL
  useEffect(() => {
    fetchData();

    // Cleanup: abortar request si el componente se desmonta
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [fetchData]);

  return { ...state, refetch: fetchData };
};

export { useFetch };
export type { UseFetchState, UseFetchReturn };
