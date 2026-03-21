// ============================================
// Hook base: useFetch (simplificado)
// ============================================

import { useState, useCallback } from 'react';

interface UseFetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: unknown;
}

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  execute: (url: string, options?: UseFetchOptions) => Promise<T | null>;
}

const useFetch = <T>(): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(
    async (url: string, options?: UseFetchOptions): Promise<T | null> => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method: options?.method ?? 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
          },
          body: options?.body ? JSON.stringify(options.body) : undefined,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const result = (await response.json()) as T;
        setData(result);
        return result;
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error('Error desconocido');
        setError(error);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { data, loading, error, execute };
};

export { useFetch };
