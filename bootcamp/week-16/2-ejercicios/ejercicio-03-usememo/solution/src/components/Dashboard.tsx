import { useState, useMemo } from 'react';
import { ItemList } from './ItemList';
import { Stats } from './Stats';
import { Counter } from './Counter';

// ==============================================
// TIPOS
// ==============================================
export interface Item {
  id: number;
  name: string;
  value: number;
  completed: boolean;
}

// Datos iniciales - simular una lista grande
const generateItems = (count: number): Item[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Tarea ${i + 1}`,
    value: Math.floor(Math.random() * 100) + 1,
    completed: Math.random() > 0.7,
  }));
};

const initialItems = generateItems(50);

// ==============================================
// COMPONENTE PRINCIPAL
// ==============================================
export function Dashboard() {
  console.log('%c[Dashboard] Renderizando', 'color: purple; font-weight: bold');

  const [items] = useState<Item[]>(initialItems);
  const [filter, setFilter] = useState('');
  const [minValue, setMinValue] = useState(0);

  // ============================================
  // SOLUCIÓN PASO 3: Memorizar filtrado con useMemo
  // ============================================
  const filteredItems = useMemo(() => {
    console.log('%c[useMemo] Filtrando items...', 'color: blue');
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) &&
        item.value >= minValue,
    );
  }, [items, filter, minValue]);

  // ============================================
  // SOLUCIÓN PASO 4: Memorizar estadísticas con useMemo
  // ============================================
  const stats = useMemo(() => {
    console.log('%c[useMemo] Calculando estadísticas...', 'color: blue');
    const total = filteredItems.length;
    const completed = filteredItems.filter((i) => i.completed).length;
    const totalValue = filteredItems.reduce((sum, i) => sum + i.value, 0);
    const avgValue = total > 0 ? totalValue / total : 0;
    return { total, completed, totalValue, avgValue };
  }, [filteredItems]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Filtros */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>
            Buscar:
          </label>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filtrar por nombre..."
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              width: '200px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>
            Valor mínimo: {minValue}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={minValue}
            onChange={(e) => setMinValue(Number(e.target.value))}
            style={{ width: '200px' }}
          />
        </div>
      </div>

      {/* Contador independiente - NO debería recalcular stats */}
      <Counter />

      {/* Estadísticas */}
      <Stats
        total={stats.total}
        completed={stats.completed}
        totalValue={stats.totalValue}
        avgValue={stats.avgValue}
      />

      {/* Lista */}
      <ItemList items={filteredItems} />
    </div>
  );
}
