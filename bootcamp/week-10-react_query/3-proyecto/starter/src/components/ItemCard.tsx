// ============================================
// COMPONENTE: ItemCard
// ============================================
// TODO: Implementar tarjeta de elemento

import { Item } from '../api/items';

interface ItemCardProps {
  item: Item;
  onSelect: (id: number) => void;
  onDelete: (id: number) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onSelect,
  onDelete,
}) => {
  // TODO: Implementar tarjeta con:
  // - Nombre y descripción
  // - Categoría y estado
  // - Botones de ver detalle y eliminar
  // - Prefetch al hacer hover

  return (
    <div
      style={{
        padding: '1rem',
        margin: '0.5rem 0',
        backgroundColor: '#2d2d2d',
        borderRadius: '8px',
      }}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Categoría: {item.category}</p>
      <p>Estado: {item.status}</p>
      <button onClick={() => onSelect(item.id)}>Ver detalle</button>
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </div>
  );
};
