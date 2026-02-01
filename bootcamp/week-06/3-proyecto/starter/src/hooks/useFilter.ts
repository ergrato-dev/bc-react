// ============================================
// Custom Hook: useFilter
// Filtrar arrays con funciones
// ============================================

import { useState, useMemo, useCallback } from 'react';

interface UseFilterReturn<T> {
  filtered: T[];
  filterTerm: string;
  setFilterTerm: (term: string) => void;
  clearFilter: () => void;
}

/**
 * Hook para filtrar arrays
 *
 * @param items - Array de items a filtrar
 * @param filterFn - Función que determina si un item pasa el filtro
 * @returns Objeto con items filtrados y controles
 *
 * @example
 * const { filtered, filterTerm, setFilterTerm } = useFilter(
 *   users,
 *   (user, term) => user.name.toLowerCase().includes(term.toLowerCase())
 * );
 */
export const useFilter = <T>(
  items: T[],
  filterFn: (item: T, term: string) => boolean,
): UseFilterReturn<T> => {
  // TODO: Estado para el término de búsqueda
  const [filterTerm, setFilterTerm] = useState('');

  // TODO: Memo para los items filtrados
  const filtered = useMemo(() => {
    if (!filterTerm.trim()) return items;
    return items.filter((item) => filterFn(item, filterTerm));
  }, [items, filterTerm, filterFn]);

  // TODO: Función para limpiar filtro
  const clearFilter = useCallback(() => {
    setFilterTerm('');
  }, []);

  return { filtered, filterTerm, setFilterTerm, clearFilter };
};
