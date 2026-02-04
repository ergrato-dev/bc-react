import { Item } from '../types';

// ============================================
// COMPONENTE: ItemCard
// Tarjeta individual de elemento
// ============================================
// TODO: Envolver con memo y crear comparador personalizado

interface ItemCardProps {
  item: Item;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onDelete,
  onToggleStatus,
}) => {
  console.log(`    🃏 ItemCard "${item.name}" renderiza`);

  const statusColors: Record<string, string> = {
    active: '#28a745',
    inactive: '#dc3545',
    pending: '#ffc107',
  };

  return (
    <div style={styles.card}>
      <div style={styles.info}>
        <h4 style={styles.name}>{item.name}</h4>
        <p style={styles.description}>{item.description}</p>
        <div style={styles.meta}>
          <span style={styles.category}>{item.category}</span>
          <span
            style={{
              ...styles.status,
              backgroundColor: statusColors[item.status],
            }}>
            {item.status}
          </span>
          <span style={styles.value}>${item.value}</span>
        </div>
      </div>
      <div style={styles.actions}>
        <button
          onClick={() => onToggleStatus(item.id)}
          style={styles.button}>
          Toggle
        </button>
        <button
          onClick={() => onDelete(item.id)}
          style={styles.deleteButton}>
          🗑️
        </button>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
  },
  info: {
    flex: 1,
  },
  name: {
    margin: '0 0 4px 0',
    fontSize: '16px',
  },
  description: {
    margin: '0 0 8px 0',
    fontSize: '14px',
    color: '#666',
  },
  meta: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  category: {
    fontSize: '12px',
    padding: '2px 8px',
    backgroundColor: '#e9ecef',
    borderRadius: '4px',
  },
  status: {
    fontSize: '12px',
    padding: '2px 8px',
    color: 'white',
    borderRadius: '4px',
    textTransform: 'capitalize',
  },
  value: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#28a745',
  },
  actions: {
    display: 'flex',
    gap: '8px',
  },
  button: {
    padding: '6px 12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
