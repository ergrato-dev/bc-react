import { Item } from '../types';
import { ItemCard } from './ItemCard';

// ============================================
// COMPONENTE: ItemList
// Lista de elementos
// ============================================
// TODO: Envolver con memo para evitar re-renders innecesarios

interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

export const ItemList: React.FC<ItemListProps> = ({
  items,
  onDelete,
  onToggleStatus,
}) => {
  console.log('  📋 ItemList renderiza');

  if (items.length === 0) {
    return <p style={styles.empty}>No hay elementos que mostrar</p>;
  }

  // Limitamos a 50 para el starter (sin virtualización)
  const displayItems = items.slice(0, 50);

  return (
    <div>
      {displayItems.length < items.length && (
        <p style={styles.notice}>
          Mostrando los primeros {displayItems.length} de {items.length}{' '}
          elementos
        </p>
      )}
      <div style={styles.list}>
        {displayItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onDelete={onDelete}
            onToggleStatus={onToggleStatus}
          />
        ))}
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    padding: '40px',
  },
  notice: {
    backgroundColor: '#fff3cd',
    color: '#856404',
    padding: '8px 12px',
    borderRadius: '4px',
    marginBottom: '12px',
    fontSize: '14px',
  },
};
