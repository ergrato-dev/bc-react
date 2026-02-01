// ============================================
// EJERCICIO 05: Ordenamiento de Listas
// ============================================
// Aprende a ordenar listas sin mutar el estado

import React, { useState } from 'react';

// ============================================
// TIPOS
// ============================================
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

// Datos de ejemplo
const products: Product[] = [
  { id: 1, name: 'Laptop Pro', price: 1299, rating: 4.8 },
  { id: 2, name: 'Auriculares', price: 199, rating: 4.5 },
  { id: 3, name: 'Mouse Ergonómico', price: 79, rating: 4.2 },
  { id: 4, name: 'Teclado Mecánico', price: 149, rating: 4.6 },
  { id: 5, name: 'Monitor 27"', price: 399, rating: 4.7 },
  { id: 6, name: 'Webcam HD', price: 89, rating: 4.0 },
];

// ============================================
// PASO 1: Entender el Problema
// ============================================
// .sort() muta el array original
// Descomenta para ver la demostración:

// const MutationDemo: React.FC = () => {
//   const original = [3, 1, 2];
//
//   // ❌ Esto muta original
//   // const sorted = original.sort((a, b) => a - b);
//
//   // ✅ Esto NO muta original
//   const sorted = [...original].sort((a, b) => a - b);
//
//   return (
//     <div className="demo">
//       <p>Original: {original.join(', ')}</p>
//       <p>Ordenado: {sorted.join(', ')}</p>
//     </div>
//   );
// };

// ============================================
// PASO 2: Ordenar por Nombre (String)
// ============================================
// Usa localeCompare para strings
// Descomenta las siguientes líneas:

// const sortByName = (items: Product[], ascending: boolean): Product[] => {
//   return [...items].sort((a, b) =>
//     ascending
//       ? a.name.localeCompare(b.name)
//       : b.name.localeCompare(a.name)
//   );
// };

// ============================================
// PASO 3: Ordenar por Número
// ============================================
// Usa resta para números
// Descomenta las siguientes líneas:

// const sortByPrice = (items: Product[], ascending: boolean): Product[] => {
//   return [...items].sort((a, b) =>
//     ascending
//       ? a.price - b.price
//       : b.price - a.price
//   );
// };
//
// const sortByRating = (items: Product[]): Product[] => {
//   // Siempre mejor primero
//   return [...items].sort((a, b) => b.rating - a.rating);
// };

// ============================================
// PASO 4: Función de Ordenamiento Completa
// ============================================
// Combina todos los criterios
// Descomenta las siguientes líneas:

// const sortProducts = (items: Product[], sortOption: SortOption): Product[] => {
//   const sorted = [...items];
//
//   switch (sortOption) {
//     case 'name-asc':
//       return sorted.sort((a, b) => a.name.localeCompare(b.name));
//     case 'name-desc':
//       return sorted.sort((a, b) => b.name.localeCompare(a.name));
//     case 'price-asc':
//       return sorted.sort((a, b) => a.price - b.price);
//     case 'price-desc':
//       return sorted.sort((a, b) => b.price - a.price);
//     case 'rating':
//       return sorted.sort((a, b) => b.rating - a.rating);
//     default:
//       return sorted;
//   }
// };

// ============================================
// SELECTOR DE ORDENAMIENTO
// ============================================
// Descomenta las siguientes líneas:

// interface SortSelectorProps {
//   value: SortOption;
//   onChange: (value: SortOption) => void;
// }
//
// const SortSelector: React.FC<SortSelectorProps> = ({ value, onChange }) => {
//   const options: { value: SortOption; label: string }[] = [
//     { value: 'name-asc', label: '📝 Nombre (A-Z)' },
//     { value: 'name-desc', label: '📝 Nombre (Z-A)' },
//     { value: 'price-asc', label: '💰 Precio (menor a mayor)' },
//     { value: 'price-desc', label: '💰 Precio (mayor a menor)' },
//     { value: 'rating', label: '⭐ Mejor valorados' },
//   ];
//
//   return (
//     <div className="sort-selector">
//       <label>Ordenar por:</label>
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value as SortOption)}
//       >
//         {options.map((opt) => (
//           <option key={opt.value} value={opt.value}>
//             {opt.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// ============================================
// COMPONENTE DE PRODUCTO
// ============================================
const ProductCard: React.FC<{ product: Product; index: number }> = ({
  product,
  index,
}) => {
  return (
    <div className="product-card">
      <span className="position">#{index + 1}</span>
      <div className="info">
        <h4>{product.name}</h4>
        <p className="price">${product.price}</p>
        <p className="rating">⭐ {product.rating}</p>
      </div>
    </div>
  );
};

// ============================================
// APP DE DEMOSTRACIÓN
// ============================================
export const App: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');

  // Aplicar ordenamiento (descomentar cuando completes los pasos)
  // const sortedProducts = sortProducts(products, sortBy);

  // Sin ordenamiento (temporal)
  const sortedProducts = products;

  return (
    <div className="app">
      <h1>Ejercicio 05: Ordenamiento de Listas</h1>

      {/* Paso 1: Demo de mutación */}
      {/* <MutationDemo /> */}

      {/* Selector de ordenamiento */}
      <div className="controls">
        {/* <SortSelector value={sortBy} onChange={setSortBy} /> */}
        <span className="info">
          Orden actual: <strong>{sortBy}</strong>
        </span>
      </div>

      {/* Lista de productos */}
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

      <p className="hint">
        💡 Descomenta el código paso a paso siguiendo el README.md
      </p>
    </div>
  );
};

export default App;
