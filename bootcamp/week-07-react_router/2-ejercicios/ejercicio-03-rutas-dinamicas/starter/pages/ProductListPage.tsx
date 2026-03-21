// ============================================
// EJERCICIO 03: ProductListPage con useSearchParams
// ============================================

// ============================================
// PASO 3: Filtros con useSearchParams
// ============================================
console.log('--- Paso 3: useSearchParams para filtros ---');

// Datos de ejemplo
const products = [
  { id: 1, name: 'Laptop', category: 'electronics' },
  { id: 2, name: 'Camiseta', category: 'clothing' },
  { id: 3, name: 'Libro React', category: 'books' },
  { id: 4, name: 'Mouse', category: 'electronics' },
  { id: 5, name: 'Pantalón', category: 'clothing' },
];

// Descomenta el siguiente código:

// import { Link, useSearchParams } from 'react-router-dom';
//
// export const ProductListPage: React.FC = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const categoryFilter = searchParams.get('category');
//
//   // Filtrar productos
//   const filteredProducts = categoryFilter
//     ? products.filter((p) => p.category === categoryFilter)
//     : products;
//
//   return (
//     <div className="product-list">
//       <h2>Productos</h2>
//
//       {/* Filtros */}
//       <div className="filters">
//         <button onClick={() => setSearchParams({})}>
//           Todos
//         </button>
//         <button onClick={() => setSearchParams({ category: 'electronics' })}>
//           Electrónica
//         </button>
//         <button onClick={() => setSearchParams({ category: 'clothing' })}>
//           Ropa
//         </button>
//         <button onClick={() => setSearchParams({ category: 'books' })}>
//           Libros
//         </button>
//       </div>
//
//       {/* Lista de productos */}
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             <Link to={`/products/${product.id}`}>
//               {product.name} ({product.category})
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// Placeholder temporal
export const ProductListPage: React.FC = () => {
  return <div>ProductListPage - Descomenta el código</div>;
};

console.log('');
