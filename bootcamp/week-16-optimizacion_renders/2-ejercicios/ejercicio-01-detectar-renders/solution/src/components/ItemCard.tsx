import { Item } from './Dashboard';

// ==============================================
// TIPOS
// ==============================================
interface ItemCardProps {
  item: Item;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// ==============================================
// COMPONENTE ITEM
// ==============================================
export function ItemCard({ item, onToggle, onDelete }: ItemCardProps) {
  // ============================================
  // SOLUCIÓN PASO 2: Detectar renders con console.log
  // ============================================
  console.log(`%c[ItemCard] Renderizando: ${item.name}`, 'color: green');

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px',
        marginBottom: '8px',
        backgroundColor: item.completed ? '#e8f5e9' : '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
        style={{ width: '20px', height: '20px' }}
      />
      <span
        style={{
          flex: 1,
          textDecoration: item.completed ? 'line-through' : 'none',
          color: item.completed ? '#888' : '#333',
        }}>
        {item.name}
      </span>
      <button
        onClick={() => onDelete(item.id)}
        style={{
          padding: '4px 8px',
          backgroundColor: '#ff5252',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
        Eliminar
      </button>
    </li>
  );
}
