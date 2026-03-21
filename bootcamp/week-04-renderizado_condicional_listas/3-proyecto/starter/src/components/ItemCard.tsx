// ============================================
// COMPONENTE: ItemCard
// ============================================
// Muestra una tarjeta con la información de un elemento
// TODO: Adaptar a tu dominio

import React from 'react';
import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
}

/**
 * Tarjeta de elemento del catálogo
 * TODO: Personalizar según tu dominio
 */
export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onDelete,
  onView,
}) => {
  // TODO: Implementar el componente
  // 1. Mostrar nombre del elemento
  // 2. Mostrar categoría con badge de color
  // 3. Mostrar precio formateado
  // 4. Mostrar rating con estrellas
  // 5. Mostrar estado de disponibilidad (condicional)
  // 6. Botones de acción (ver, eliminar)

  return (
    <div className="item-card">
      {/* TODO: Implementar contenido */}
      <h3>{item.name}</h3>

      {/* Renderizado condicional del badge de categoría */}
      {/* <span className={`badge ${item.category}`}>{item.category}</span> */}

      {/* Precio */}
      {/* <p className="price">${item.price.toFixed(2)}</p> */}

      {/* Rating */}
      {/* <p className="rating">⭐ {item.rating}</p> */}

      {/* Estado de disponibilidad - Renderizado condicional */}
      {/* {item.isAvailable ? (
        <span className="status available">✅ Disponible</span>
      ) : (
        <span className="status unavailable">❌ No disponible</span>
      )} */}

      {/* Acciones */}
      {/* <div className="actions">
        {onView && (
          <button onClick={() => onView(item.id)}>Ver detalles</button>
        )}
        {onDelete && (
          <button onClick={() => onDelete(item.id)}>Eliminar</button>
        )}
      </div> */}
    </div>
  );
};
