import type { Item } from '../types';

interface ItemListProps {
  items: Item[];
  loading: boolean;
  onDelete: (id: number) => void;
}

/**
 * Componente que muestra lista de items
 * Adapta el diseño a tu dominio asignado
 */
export const ItemList: React.FC<ItemListProps> = ({
  items,
  loading,
  onDelete,
}) => {
  // Estado de carga
  if (loading) {
    return <div role="status">Cargando...</div>;
  }

  // Lista vacía
  if (items.length === 0) {
    return <p>No hay items disponibles</p>;
  }

  // Lista de items
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          data-testid={`item-${item.id}`}>
          <strong>{item.name}</strong>
          <span> - {item.description}</span>
          <button
            onClick={() => onDelete(item.id)}
            aria-label={`eliminar ${item.name}`}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};
