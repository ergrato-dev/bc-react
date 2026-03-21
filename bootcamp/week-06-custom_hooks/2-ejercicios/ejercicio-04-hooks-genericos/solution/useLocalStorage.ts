// ============================================
// SOLUCIÓN: useLocalStorage<T>
// Hook genérico para persistencia en localStorage
// ============================================

import { useState, useCallback, useEffect } from 'react';

/**
 * Retorno del hook useLocalStorage
 */
interface UseLocalStorageReturn<T> {
  /** Valor actual almacenado */
  value: T;
  /** Actualizar el valor (acepta valor directo o función) */
  setValue: (value: T | ((prev: T) => T)) => void;
  /** Eliminar el valor del storage */
  removeValue: () => void;
}

/**
 * Hook genérico para persistir estado en localStorage
 * Soporta cualquier tipo serializable a JSON
 *
 * @param key - Clave única en localStorage
 * @param initialValue - Valor inicial si no existe en storage
 * @returns Objeto con value, setValue y removeValue
 *
 * @example
 * // Con primitivos
 * const { value, setValue } = useLocalStorage('counter', 0);
 *
 * // Con objetos
 * const { value: user, setValue: setUser } = useLocalStorage<User>('user', defaultUser);
 *
 * // Con función actualizadora
 * setValue(prev => prev + 1);
 */
const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): UseLocalStorageReturn<T> => {
  // Lazy initialization: lee del storage solo en el primer render
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Verificar si estamos en el servidor (SSR)
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      // Si existe el item, parsearlo; si no, usar valor inicial
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error leyendo localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Función para actualizar el valor
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        // Permitir función para acceder al valor anterior (como setState)
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        // Actualizar estado local
        setStoredValue(valueToStore);

        // Guardar en localStorage
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.warn(`Error guardando en localStorage key "${key}":`, error);
      }
    },
    [key, storedValue],
  );

  // Función para eliminar el valor
  const removeValue = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Error eliminando localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  // Sincronizar entre pestañas del navegador
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue) as T);
        } catch {
          // Ignorar errores de parsing de otras fuentes
        }
      } else if (e.key === key && e.newValue === null) {
        // El item fue eliminado en otra pestaña
        setStoredValue(initialValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return { value: storedValue, setValue, removeValue };
};

export { useLocalStorage };
export type { UseLocalStorageReturn };
