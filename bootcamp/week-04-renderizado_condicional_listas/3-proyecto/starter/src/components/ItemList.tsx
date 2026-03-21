// ============================================
// COMPONENTE: ItemList
// ============================================
// Renderiza la lista de elementos

import React from 'react';
import { Item } from '../types';
import { ItemCard } from './ItemCard';
import { EmptyState } from './EmptyState';

interface ItemListProps {
  items: Item[];
  isLoading?: boolean;
  error?: string | null;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
  onClearFilters?: () => void;
}

/**
 * Lista de elementos del catálogo
 */
export const ItemList: React.FC<ItemListProps> = ({
  items,
  isLoading = false,
  error = null,
  onDelete,
  onView,
  onClearFilters,
}) => {
  // TODO: Implementar renderizado condicional

  // 1. Si está cargando, mostrar spinner
  // if (isLoading) {
  //   return <div className="loading">Cargando...</div>;
  // }

  // 2. Si hay error, mostrar mensaje de error
  // if (error) {
  //   return (
  //     <div className="error">
  //       <p>❌ {error}</p>
  //     </div>
  //   );
  // }

  // 3. Si no hay items, mostrar estado vacío
  // if (items.length === 0) {
  //   return <EmptyState onClearFilters={onClearFilters} />;
  // }

  // 4. Renderizar lista con .map() y keys únicas
  return (
    <div className="item-list">
      {/* TODO: Implementar el .map() con keys */}
      {/* {items.map((item) => (
        <ItemCard
          key={item.id}  // ← Key única basada en id
          item={item}
          onDelete={onDelete}
          onView={onView}
        />
      ))} */}

      <p>Implementar lista aquí</p>
    </div>
  );
};
