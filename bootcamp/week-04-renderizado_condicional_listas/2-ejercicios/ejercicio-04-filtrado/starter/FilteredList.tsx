// ============================================
// EJERCICIO 04: Filtrado de Listas
// ============================================
// Aprende a filtrar listas con múltiples criterios

import React, { useState } from 'react';

// ============================================
// TIPOS
// ============================================
type Category = 'all' | 'electronics' | 'clothing' | 'food';

interface Product {
  id: number;
  name: string;
  category: Exclude<Category, 'all'>;
  price: number;
  isActive: boolean;
}

// Datos de ejemplo
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

// ============================================
// PASO 1: Filtro Simple (Booleano)
// ============================================
// Filtra por una propiedad booleana
// Descomenta las siguientes líneas:

// interface ActiveFilterProps {
//   isActive: boolean;
//   onChange: (value: boolean) => void;
// }
//
// const ActiveFilter: React.FC<ActiveFilterProps> = ({ isActive, onChange }) => {
//   return (
//     <label className="filter-checkbox">
//       <input
//         type="checkbox"
//         checked={isActive}
//         onChange={(e) => onChange(e.target.checked)}
//       />
//       Solo mostrar productos activos
//     </label>
//   );
// };

// ============================================
// PASO 2: Filtro por Categoría
// ============================================
// Selector de categorías
// Descomenta las siguientes líneas:

// interface CategoryFilterProps {
//   value: Category;
//   onChange: (value: Category) => void;
// }
//
// const CategoryFilter: React.FC<CategoryFilterProps> = ({ value, onChange }) => {
//   const categories: { value: Category; label: string }[] = [
//     { value: 'all', label: 'Todas' },
//     { value: 'electronics', label: '📱 Electrónica' },
//     { value: 'clothing', label: '👕 Ropa' },
//     { value: 'food', label: '🍎 Alimentos' },
//   ];
//
//   return (
//     <div className="filter-select">
//       <label>Categoría:</label>
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value as Category)}
//       >
//         {categories.map((cat) => (
//           <option key={cat.value} value={cat.value}>
//             {cat.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// ============================================
// PASO 3: Búsqueda por Texto
// ============================================
// Input de búsqueda
// Descomenta las siguientes líneas:

// interface SearchFilterProps {
//   value: string;
//   onChange: (value: string) => void;
// }
//
// const SearchFilter: React.FC<SearchFilterProps> = ({ value, onChange }) => {
//   return (
//     <div className="filter-search">
//       <input
//         type="text"
//         placeholder="🔍 Buscar productos..."
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//       />
//       {value && (
//         <button onClick={() => onChange('')} className="clear-btn">
//           ✕
//         </button>
//       )}
//     </div>
//   );
// };

// ============================================
// PASO 4: Combinar Filtros
// ============================================
// Aplicar múltiples filtros en secuencia
// Ver implementación en el componente App

// ============================================
// COMPONENTE DE PRODUCTO
// ============================================
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={`product-card ${!product.isActive ? 'inactive' : ''}`}>
      <h4>{product.name}</h4>
      <p className="category">{product.category}</p>
      <p className="price">${product.price}</p>
      <span className={`status ${product.isActive ? 'active' : 'inactive'}`}>
        {product.isActive ? '✅ Activo' : '❌ Inactivo'}
      </span>
    </div>
  );
};

// ============================================
// APP DE DEMOSTRACIÓN
// ============================================
export const App: React.FC = () => {
  // Estados de filtro
  const [showOnlyActive, setShowOnlyActive] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Paso 4: Combinar todos los filtros
  // Descomenta para aplicar filtros:
  // const filteredProducts = products
  //   // Filtro de búsqueda
  //   .filter((product) =>
  //     !searchTerm ||
  //     product.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  //   // Filtro de categoría
  //   .filter((product) =>
  //     selectedCategory === 'all' ||
  //     product.category === selectedCategory
  //   )
  //   // Filtro de activos
  //   .filter((product) =>
  //     !showOnlyActive ||
  //     product.isActive
  //   );

  // Sin filtros (temporal)
  const filteredProducts = products;

  // Limpiar todos los filtros
  const clearFilters = (): void => {
    setShowOnlyActive(false);
    setSelectedCategory('all');
    setSearchTerm('');
  };

  return (
    <div className="app">
      <h1>Ejercicio 04: Filtrado de Listas</h1>

      {/* Filtros */}
      <div className="filters">
        {/* Paso 1: Filtro activos */}
        {/* <ActiveFilter
          isActive={showOnlyActive}
          onChange={setShowOnlyActive}
        /> */}

        {/* Paso 2: Filtro categoría */}
        {/* <CategoryFilter
          value={selectedCategory}
          onChange={setSelectedCategory}
        /> */}

        {/* Paso 3: Búsqueda */}
        {/* <SearchFilter
          value={searchTerm}
          onChange={setSearchTerm}
        /> */}

        <button
          onClick={clearFilters}
          className="btn-clear">
          🔄 Limpiar filtros
        </button>
      </div>

      {/* Contador de resultados */}
      <p className="results-count">
        Mostrando {filteredProducts.length} de {products.length} productos
      </p>

      {/* Lista de productos */}
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

      <p className="hint">
        💡 Descomenta el código paso a paso siguiendo el README.md
      </p>
    </div>
  );
};

export default App;
