// ============================================
// COMPONENTE: ItemList
// Lista de items con filtros
// ============================================

import { useFilteredItems } from '../hooks/useFilteredItems';
import { useMainStore } from '../stores/mainStore';
import { ItemCard } from './ItemCard';

export const ItemList: React.FC = () => {
  // Usar hook memoizado
  const filteredItems = useFilteredItems();

  // Acciones del store
  const setFilter = useMainStore((s) => s.setFilter);
  const filters = useMainStore((s) => s.filters);

  return (
    <div className="item-list">
      {/* TODO: Implementar barra de filtros */}
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar..."
          value={filters.search}
          onChange={(e) => setFilter({ search: e.target.value })}
        />

        <select
          value={filters.sortBy}
          onChange={(e) =>
            setFilter({ sortBy: e.target.value as 'name' | 'createdAt' })
          }>
          <option value="createdAt">Fecha</option>
          <option value="name">Nombre</option>
        </select>

        <select
          value={filters.sortOrder}
          onChange={(e) =>
            setFilter({ sortOrder: e.target.value as 'asc' | 'desc' })
          }>
          <option value="desc">Descendente</option>
          <option value="asc">Ascendente</option>
        </select>
      </div>

      {/* TODO: Implementar lista de items */}
      <div className="items-grid">
        {filteredItems.length === 0 ? (
          <p>No hay items para mostrar</p>
        ) : (
          filteredItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
            />
          ))
        )}
      </div>
    </div>
  );
};
