// ============================================
// SOLUCIÓN: useArray
// Hook para manejar arrays
// ============================================

import { useState, useCallback } from 'react';

interface UseArrayReturn<T> {
  array: T[];
  set: (newArray: T[]) => void;
  push: (element: T) => void;
  filter: (callback: (element: T, index: number) => boolean) => void;
  update: (index: number, newElement: T) => void;
  remove: (index: number) => void;
  clear: () => void;
  isEmpty: boolean;
}

const useArray = <T>(initialValue: T[] = []): UseArrayReturn<T> => {
  const [array, setArray] = useState<T[]>(initialValue);

  const push = useCallback((element: T) => {
    setArray((prev: T[]) => [...prev, element]);
  }, []);

  const filter = useCallback(
    (callback: (element: T, index: number) => boolean) => {
      setArray((prev: T[]) => prev.filter(callback));
    },
    [],
  );

  const update = useCallback((index: number, newElement: T) => {
    setArray((prev: T[]) => {
      const copy = [...prev];
      copy[index] = newElement;
      return copy;
    });
  }, []);

  const remove = useCallback((index: number) => {
    setArray((prev: T[]) => prev.filter((_, i) => i !== index));
  }, []);

  const clear = useCallback(() => {
    setArray([]);
  }, []);

  return {
    array,
    set: setArray,
    push,
    filter,
    update,
    remove,
    clear,
    isEmpty: array.length === 0,
  };
};

export { useArray };
export type { UseArrayReturn };
