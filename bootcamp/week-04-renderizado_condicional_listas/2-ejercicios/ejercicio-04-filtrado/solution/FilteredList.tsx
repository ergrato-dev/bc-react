// ============================================
// EJERCICIO 04: Filtrado de Listas
// SOLUCIÓN COMPLETA
// ============================================

import React, { useState } from 'react';

type Category = 'all' | 'electronics' | 'clothing' | 'food';

interface Product {
  id: number;
  name: string;
  category: Exclude<Category, 'all'>;
  price: number;
  isActive: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop Pro',
    category: 'electronics',
    price: 1200,
    isActive: true,
  },
  {
    id: 2,
    name: 'Smartphone X',
    category: 'electronics',
    price: 800,
    isActive: true,
  },
  {
    id: 3,
    name: 'Auriculares BT',
    category: 'electronics',
    price: 150,
    isActive: false,
  },
  {
    id: 4,
    name: 'Camiseta Algodón',
    category: 'clothing',
    price: 25,
    isActive: true,
  },
  {
    id: 5,
    name: 'Jeans Clásico',
    category: 'clothing',
    price: 60,
    isActive: true,
  },
  {
    id: 6,
    name: 'Chaqueta Invierno',
    category: 'clothing',
    price: 120,
    isActive: false,
  },
  {
    id: 7,
    name: 'Manzanas Orgánicas',
    category: 'food',
    price: 5,
    isActive: true,
  },
  { id: 8, name: 'Café Premium', category: 'food', price: 15, isActive: true },
  { id: 9, name: 'Pan Artesanal', category: 'food', price: 8, isActive: false },
];

// Componentes de filtro
const ActiveFilter: React.FC<{
  isActive: boolean;
  onChange: (value: boolean) => void;
}> = ({ isActive, onChange }) => (
  <label className="filter-checkbox">
    <input
      type="checkbox"
      checked={isActive}
      onChange={(e) => onChange(e.target.checked)}
    />
    Solo mostrar productos activos
  </label>
);

const CategoryFilter: React.FC<{
  value: Category;
  onChange: (value: Category) => void;
}> = ({ value, onChange }) => {
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'Todas' },
    { value: 'electronics', label: '📱 Electrónica' },
    { value: 'clothing', label: '👕 Ropa' },
    { value: 'food', label: '🍎 Alimentos' },
  ];

  return (
    <div className="filter-select">
      <label>Categoría:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Category)}>
        {categories.map((cat) => (
          <option
            key={cat.value}
            value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const SearchFilter: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => (
  <div className="filter-search">
    <input
      type="text"
      placeholder="🔍 Buscar productos..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    {value && (
      <button
        onClick={() => onChange('')}
        className="clear-btn">
        ✕
      </button>
    )}
  </div>
);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className={`product-card ${!product.isActive ? 'inactive' : ''}`}>
    <h4>{product.name}</h4>
    <p className="category">{product.category}</p>
    <p className="price">${product.price}</p>
    <span className={`status ${product.isActive ? 'active' : 'inactive'}`}>
      {product.isActive ? '✅ Activo' : '❌ Inactivo'}
    </span>
  </div>
);

export const App: React.FC = () => {
  const [showOnlyActive, setShowOnlyActive] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredProducts = products
    .filter(
      (product) =>
        !searchTerm ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter(
      (product) =>
        selectedCategory === 'all' || product.category === selectedCategory,
    )
    .filter((product) => !showOnlyActive || product.isActive);

  const clearFilters = (): void => {
    setShowOnlyActive(false);
    setSelectedCategory('all');
    setSearchTerm('');
  };

  return (
    <div className="app">
      <h1>Ejercicio 04: Filtrado de Listas</h1>

      <div className="filters">
        <ActiveFilter
          isActive={showOnlyActive}
          onChange={setShowOnlyActive}
        />
        <CategoryFilter
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
        <SearchFilter
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <button
          onClick={clearFilters}
          className="btn-clear">
          🔄 Limpiar filtros
        </button>
      </div>

      <p className="results-count">
        Mostrando {filteredProducts.length} de {products.length} productos
      </p>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <p>😕 No se encontraron productos</p>
          <button onClick={clearFilters}>Limpiar filtros</button>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
