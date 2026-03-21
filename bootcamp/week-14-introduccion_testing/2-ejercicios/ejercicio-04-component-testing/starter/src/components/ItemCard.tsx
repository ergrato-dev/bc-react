// ============================================
// Componente ItemCard
// ============================================

import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function ItemCard({ item, onToggle, onDelete }: ItemCardProps) {
  return (
    <article>
      <label>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.id)}
        />
        <span
          style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
          {item.name}
        </span>
      </label>
      <button
        onClick={() => onDelete(item.id)}
        aria-label={`Eliminar ${item.name}`}>
        ×
      </button>
    </article>
  );
}
