// ============================================
// HOOK PARA ITEMS FILTRADOS
// ============================================

import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useMainStore } from '../stores/mainStore';

/**
 * Hook que retorna items filtrados y ordenados
 * Usa useMemo para memoizar el resultado costoso
 */
export const useFilteredItems = () => {
  const { items, filters } = useMainStore(
    useShallow((state) => ({
      items: state.items,
      filters: state.filters,
    })),
  );

  const filteredItems = useMemo(() => {
    // TODO: Implementar filtrado
    // 1. Filtrar por search (nombre, descripción)
    // 2. Ordenar por sortBy y sortOrder

    let result = [...items];

    // Filtrar por búsqueda
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower),
      );
    }

    // Ordenar
    result.sort((a, b) => {
      const aValue = a[filters.sortBy];
      const bValue = b[filters.sortBy];

      if (filters.sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return result;
  }, [items, filters]);

  return filteredItems;
};
