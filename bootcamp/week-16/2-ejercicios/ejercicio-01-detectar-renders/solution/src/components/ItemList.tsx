import { Item } from './Dashboard';
import { ItemCard } from './ItemCard';

// ==============================================
// TIPOS
// ==============================================
interface ItemListProps {
  items: Item[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// ==============================================
// COMPONENTE LISTA
// ==============================================
export function ItemList({ items, onToggle, onDelete }: ItemListProps) {
  // ============================================
  // SOLUCIÓN PASO 2: Detectar renders con console.log
  // ============================================
  console.log(
    '%c[ItemList] Renderizando lista',
    'color: blue; font-weight: bold',
  );

  return (
    <div>
      <h2>Lista de Items ({items.length})</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
