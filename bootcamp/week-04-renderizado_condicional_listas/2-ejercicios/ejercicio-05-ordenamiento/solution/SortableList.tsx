// ============================================
// EJERCICIO 05: Ordenamiento de Listas
// SOLUCIÓN COMPLETA
// ============================================

import React, { useState } from 'react';

type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'rating';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
}

const products: Product[] = [
  { id: 1, name: 'Laptop Pro', price: 1299, rating: 4.8 },
  { id: 2, name: 'Auriculares', price: 199, rating: 4.5 },
  { id: 3, name: 'Mouse Ergonómico', price: 79, rating: 4.2 },
  { id: 4, name: 'Teclado Mecánico', price: 149, rating: 4.6 },
  { id: 5, name: 'Monitor 27"', price: 399, rating: 4.7 },
  { id: 6, name: 'Webcam HD', price: 89, rating: 4.0 },
];

// Función de ordenamiento completa
const sortProducts = (items: Product[], sortOption: SortOption): Product[] => {
  const sorted = [...items];

  switch (sortOption) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted;
  }
};

// Selector de ordenamiento
interface SortSelectorProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({ value, onChange }) => {
  const options: { value: SortOption; label: string }[] = [
    { value: 'name-asc', label: '📝 Nombre (A-Z)' },
    { value: 'name-desc', label: '📝 Nombre (Z-A)' },
    { value: 'price-asc', label: '💰 Precio (menor a mayor)' },
    { value: 'price-desc', label: '💰 Precio (mayor a menor)' },
    { value: 'rating', label: '⭐ Mejor valorados' },
  ];

  return (
    <div className="sort-selector">
      <label>Ordenar por:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}>
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product; index: number }> = ({
  product,
  index,
}) => (
  <div className="product-card">
    <span className="position">#{index + 1}</span>
    <div className="info">
      <h4>{product.name}</h4>
      <p className="price">${product.price}</p>
      <p className="rating">⭐ {product.rating}</p>
    </div>
  </div>
);

export const App: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');
  const sortedProducts = sortProducts(products, sortBy);

  return (
    <div className="app">
      <h1>Ejercicio 05: Ordenamiento de Listas</h1>

      <div className="controls">
        <SortSelector
          value={sortBy}
          onChange={setSortBy}
        />
        <span className="info">
          Orden actual: <strong>{sortBy}</strong>
        </span>
      </div>

      <div className="product-list">
        {sortedProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
          />
        ))}
      </div>

      <div className="note">
        <h4>⚠️ Recuerda:</h4>
        <code>[...array].sort()</code> - Siempre crear copia antes de ordenar
      </div>
    </div>
  );
};

export default App;
