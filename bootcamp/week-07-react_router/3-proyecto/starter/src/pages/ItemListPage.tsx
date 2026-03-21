// ============================================
// PROYECTO SEMANA 07: ItemListPage
// ============================================
// TODO: Renombra y adapta según tu dominio
// Ejemplos: BookListPage, ProductListPage, ClassListPage

import { Link, useSearchParams } from 'react-router-dom';

// TODO: Define la interface según tu dominio
interface Item {
  id: number;
  name: string;
  category: string;
  // Agrega más propiedades según tu dominio
}

// TODO: Reemplaza con datos de tu dominio
const items: Item[] = [
  { id: 1, name: 'Item 1', category: 'categoria-a' },
  { id: 2, name: 'Item 2', category: 'categoria-b' },
  { id: 3, name: 'Item 3', category: 'categoria-a' },
  { id: 4, name: 'Item 4', category: 'categoria-c' },
  { id: 5, name: 'Item 5', category: 'categoria-b' },
];

// TODO: Define las categorías de tu dominio
const categories = ['categoria-a', 'categoria-b', 'categoria-c'];

export const ItemListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  // Filtrar items según el query param
  const filteredItems = categoryFilter
    ? items.filter((item) => item.category === categoryFilter)
    : items;

  return (
    <div className="item-list-page">
      {/* TODO: Personaliza el título */}
      <h2>Lista de Items</h2>

      {/* Filtros */}
      <div className="filters">
        <button
          onClick={() => setSearchParams({})}
          className={!categoryFilter ? 'active' : ''}>
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSearchParams({ category: cat })}
            className={categoryFilter === cat ? 'active' : ''}>
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de items */}
      <ul className="item-list">
        {filteredItems.map((item) => (
          <li
            key={item.id}
            className="item-card">
            <Link to={`/items/${item.id}`}>
              <h3>{item.name}</h3>
              <span className="category">{item.category}</span>
            </Link>
          </li>
        ))}
      </ul>

      {filteredItems.length === 0 && (
        <p>No se encontraron items en esta categoría.</p>
      )}
    </div>
  );
};
