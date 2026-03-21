import { Item } from '../types';
import { ItemCard } from './ItemCard';

interface ItemListProps {
  items: Item[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ItemList({ items, onToggle, onDelete }: ItemListProps) {
  if (items.length === 0) {
    return <p>No hay elementos en la lista</p>;
  }

  const completedCount = items.filter((item) => item.completed).length;
  const totalCount = items.length;

  return (
    <div>
      <p data-testid="counter">
        Completados: {completedCount} de {totalCount}
      </p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ItemCard
              item={item}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
