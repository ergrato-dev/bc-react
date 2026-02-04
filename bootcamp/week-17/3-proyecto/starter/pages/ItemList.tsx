// ============================================
// PROYECTO WEEK-17: pages/ItemList.tsx (STARTER)
// ============================================

import { useState, useMemo, type FC } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { VirtualList } from '../components/VirtualList';
import type { Item } from '../types';

/**
 * Genera items de prueba para tu dominio
 * TODO: Adaptar a tu dominio específico
 */
const generateItems = (count: number): Item[] => {
  const categories = [
    'Categoría A',
    'Categoría B',
    'Categoría C',
    'Categoría D',
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `Descripción del item ${i + 1}`,
    category: categories[Math.floor(Math.random() * categories.length)],
    // TODO: Agregar propiedades de tu dominio
  }));
};

/**
 * Página de lista de items con virtualización
 *
 * TODO: Implementar:
 * 1. Lista virtualizada de 1000+ items
 * 2. Búsqueda por nombre
 * 3. Filtro por categoría
 * 4. Navegación a detalle
 */
const ItemList: FC = () => {
  const [items] = useState<Item[]>(() => generateItems(1000));
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  // const navigate = useNavigate();

  // Filtrar items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        !categoryFilter || item.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [items, search, categoryFilter]);

  // TODO: Handler para click en item
  const handleItemClick = (id: number) => {
    // navigate(`/items/${id}`);
    console.log('Click en item:', id);
  };

  return (
    <div className="item-list-page">
      <h1>Lista de Items</h1>

      {/* Controles de filtrado */}
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">Todas las categorías</option>
          <option value="Categoría A">Categoría A</option>
          <option value="Categoría B">Categoría B</option>
          <option value="Categoría C">Categoría C</option>
          <option value="Categoría D">Categoría D</option>
        </select>
      </div>

      <p>
        Mostrando {filteredItems.length} de {items.length} items
      </p>

      {/* TODO: Reemplazar con VirtualList */}
      {/* <VirtualList items={filteredItems} onItemClick={handleItemClick} /> */}
      <div style={{ border: '1px dashed gray', padding: '20px' }}>
        <p>Implementa VirtualList aquí</p>
        <p>Items filtrados: {filteredItems.length}</p>
      </div>
    </div>
  );
};

export default ItemList;
