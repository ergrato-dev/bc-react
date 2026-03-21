import { Item } from '../types';
import ItemCard from './ItemCard';

/**
 * PROPS: ItemList
 */
interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

/**
 * COMPONENTE: ItemList
 *
 * Renderiza la lista de elementos usando .map()
 */
const ItemList: React.FC<ItemListProps> = ({ items, onDelete, onEdit }) => {
  // Manejar estado vacío
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 No hay elementos para mostrar</p>
        <p className="empty-state__hint">
          Agrega tu primer elemento usando el formulario de arriba
        </p>
      </div>
    );
  }

  // ============================================
  // RENDER: LISTA DE ELEMENTOS
  // ============================================

  return (
    <div className="item-list">
      {/* TODO: Usar .map() para renderizar cada elemento */}
      {/* Recuerda:
        - SIEMPRE usar key única (item.id)
        - Pasar todas las props necesarias a ItemCard
        - Usar arrow functions para los callbacks
      */}
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ItemList;
