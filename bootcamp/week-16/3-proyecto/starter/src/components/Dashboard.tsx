import { useState } from 'react';
import { Item } from '../types';
import { generateItems } from '../utils/generateData';
import { ItemList } from './ItemList';
import { Stats } from './Stats';
import { Filters } from './Filters';
import { SearchBar } from './SearchBar';
import { AddItemForm } from './AddItemForm';

// ============================================
// COMPONENTE: Dashboard
// Componente principal del proyecto
// ============================================

// Generar datos iniciales (500 elementos)
const initialItems = generateItems(500);

export const Dashboard: React.FC = () => {
  console.log('🔄 Dashboard renderiza');

  const [items, setItems] = useState<Item[]>(initialItems);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // ============================================
  // TODO: Implementar filtrado con useMemo
  // ============================================
  // Actualmente se filtra en cada render sin memorización
  // Debes usar useMemo para memorizar filteredItems

  // const filteredItems = useMemo(() => {
  //   return filterItems(items, debouncedSearch, categoryFilter, statusFilter);
  // }, [items, debouncedSearch, categoryFilter, statusFilter]);

  const filteredItems = items; // TODO: Reemplazar con filtrado real

  // ============================================
  // TODO: Implementar handlers con useCallback
  // ============================================

  // const handleAdd = useCallback((newItem: Omit<Item, 'id' | 'createdAt' | 'updatedAt'>) => {
  //   // Implementar
  // }, []);

  const handleAdd = (name: string) => {
    const newItem: Item = {
      id: Date.now(),
      name,
      description: `Descripción de ${name}`,
      category: 'Categoría A',
      status: 'active',
      value: Math.floor(Math.random() * 500) + 100,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setItems((prev) => [newItem, ...prev]);
  };

  // const handleDelete = useCallback((id: number) => {
  //   setItems(prev => prev.filter(item => item.id !== id));
  // }, []);

  const handleDelete = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // const handleToggleStatus = useCallback((id: number) => {
  //   // Implementar toggle de status
  // }, []);

  const handleToggleStatus = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === 'active' ? 'inactive' : 'active',
            }
          : item,
      ),
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <SearchBar
          value={search}
          onChange={setSearch}
        />
        <AddItemForm onAdd={handleAdd} />
      </div>

      <div style={styles.content}>
        <aside style={styles.sidebar}>
          <Filters
            category={categoryFilter}
            status={statusFilter}
            onCategoryChange={setCategoryFilter}
            onStatusChange={setStatusFilter}
          />
          <Stats items={filteredItems} />
        </aside>

        <main style={styles.main}>
          <p>
            Mostrando {filteredItems.length} de {items.length} elementos
          </p>
          <ItemList
            items={filteredItems}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus}
          />
        </main>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
    flexWrap: 'wrap',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    gap: '24px',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  main: {
    minWidth: 0,
  },
};
