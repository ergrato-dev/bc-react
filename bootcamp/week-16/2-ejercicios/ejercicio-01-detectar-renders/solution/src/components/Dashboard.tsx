import { useState, useRef } from 'react';
import { ItemList } from './ItemList';
import { Counter } from './Counter';

// ==============================================
// TIPOS
// ==============================================
export interface Item {
  id: number;
  name: string;
  completed: boolean;
}

// Datos iniciales
const initialItems: Item[] = [
  { id: 1, name: 'Aprender React.memo', completed: false },
  { id: 2, name: 'Practicar useMemo', completed: false },
  { id: 3, name: 'Dominar useCallback', completed: true },
  { id: 4, name: 'Usar Profiler', completed: false },
  { id: 5, name: 'Optimizar renders', completed: false },
];

// ==============================================
// COMPONENTE PRINCIPAL
// ==============================================
export function Dashboard() {
  // ============================================
  // SOLUCIÓN PASO 3: Contador de renders
  // ============================================
  const renderCount = useRef(0);
  renderCount.current += 1;
  console.log(
    `%c[Dashboard] Render #${renderCount.current}`,
    'color: purple; font-weight: bold',
  );

  const [items, setItems] = useState<Item[]>(initialItems);
  const [filter, setFilter] = useState('');

  // Filtrar items según búsqueda
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );

  // Handler para toggle de item
  const handleToggle = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  // Handler para eliminar item
  const handleDelete = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Sección de búsqueda */}
      <div>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Buscar items..."
          style={{
            padding: '8px 12px',
            fontSize: '16px',
            width: '300px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {/* Contador independiente */}
      <Counter />

      {/* Lista de items */}
      <ItemList
        items={filteredItems}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
}
