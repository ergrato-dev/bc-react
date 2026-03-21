// ============================================
// PROYECTO WEEK-17: components/VirtualList.tsx (STARTER)
// ============================================

import type { FC } from 'react';
// import { FixedSizeList, type ListChildComponentProps } from 'react-window';
import type { Item, VirtualListProps } from '../types';

/**
 * Lista virtualizada de items
 *
 * TODO: Implementar con react-window FixedSizeList
 *
 * Requisitos:
 * 1. Renderizar solo items visibles + overscan
 * 2. Soportar click en items
 * 3. Mostrar info del item en cada fila
 */
export const VirtualList: FC<VirtualListProps> = ({
  items,
  onItemClick,
  height = 500,
  // itemSize = 60,
}) => {
  // TODO: Implementar itemData para pasar a las filas

  // TODO: Implementar componente Row

  return (
    <div className="virtual-list">
      <p>Total items: {items.length}</p>
      <p>Implementa FixedSizeList con los items</p>

      {/* TODO: Reemplazar con FixedSizeList */}
      <div style={{ height, overflow: 'auto' }}>
        {items.slice(0, 10).map((item) => (
          <div
            key={item.id}
            onClick={() => onItemClick?.(item.id)}
            className="list-item">
            {item.name} - {item.category}
          </div>
        ))}
        <p>...y {items.length - 10} items más (virtualiza la lista)</p>
      </div>
    </div>
  );
};
