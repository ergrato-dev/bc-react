// ============================================
// EJERCICIO 03: Selectores y Performance
// ============================================

import { create } from 'zustand';
import { shallow } from 'zustand/shallow';
import { useShallow } from 'zustand/react/shallow';
import { useMemo, useRef, useEffect } from 'react';

// ============================================
// PASO 1: Store de Ejemplo
// ============================================
console.log('--- Paso 1: Store Base ---');

// Descomenta las siguientes líneas:
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
//   inStock: boolean;
// }
//
// interface ProductStore {
//   products: Product[];
//   search: string;
//   selectedCategory: string | null;
//   cartCount: number;
//
//   setSearch: (search: string) => void;
//   setCategory: (category: string | null) => void;
//   incrementCart: () => void;
// }
//
// const useProductStore = create<ProductStore>((set) => ({
//   products: [
//     { id: 1, name: 'Laptop', price: 999, category: 'tech', inStock: true },
//     { id: 2, name: 'Headphones', price: 199, category: 'tech', inStock: true },
//     { id: 3, name: 'Desk', price: 299, category: 'furniture', inStock: false },
//     { id: 4, name: 'Chair', price: 399, category: 'furniture', inStock: true },
//     { id: 5, name: 'Monitor', price: 499, category: 'tech', inStock: true },
//   ],
//   search: '',
//   selectedCategory: null,
//   cartCount: 0,
//
//   setSearch: (search) => set({ search }),
//   setCategory: (category) => set({ selectedCategory: category }),
//   incrementCart: () => set((s) => ({ cartCount: s.cartCount + 1 })),
// }));

console.log('Store ProductStore creado');
console.log('');

// ============================================
// PASO 2: Hook para Contar Re-renders
// ============================================
console.log('--- Paso 2: Hook useRenderCount ---');

// QUÉ: Hook para visualizar cuántas veces se renderiza un componente
// PARA: Debugging y optimización
// IMPACTO: Identificar renders innecesarios

// Descomenta las siguientes líneas:
// const useRenderCount = (componentName: string) => {
//   const renderCount = useRef(0);
//   renderCount.current += 1;
//
//   useEffect(() => {
//     console.log(`🔄 ${componentName}: render #${renderCount.current}`);
//   });
//
//   return renderCount.current;
// };

console.log('Hook useRenderCount definido');
console.log('');

// ============================================
// PASO 3: Selector Simple (Primitivo)
// ============================================
console.log('--- Paso 3: Selector Simple ---');

// QUÉ: Selector que extrae un valor primitivo
// PARA: Re-render solo cuando ESE valor cambia
// IMPACTO: Optimización automática

// Descomenta las siguientes líneas:
// const CartBadge: React.FC = () => {
//   useRenderCount('CartBadge');
//
//   // Selector simple - solo cartCount
//   const cartCount = useProductStore((state) => state.cartCount);
//
//   return (
//     <div className="cart-badge">
//       🛒 Cart ({cartCount})
//     </div>
//   );
// };
//
// const SearchInput: React.FC = () => {
//   useRenderCount('SearchInput');
//
//   const search = useProductStore((state) => state.search);
//   const setSearch = useProductStore((state) => state.setSearch);
//
//   return (
//     <input
//       type="text"
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//       placeholder="Buscar productos..."
//     />
//   );
// };

console.log('Componentes con selectores simples');
console.log('');

// ============================================
// PASO 4: Problema con Objetos (sin shallow)
// ============================================
console.log('--- Paso 4: Problema sin shallow ---');

// QUÉ: Selector que retorna objeto nuevo cada vez
// PARA: Entender por qué causa re-renders
// IMPACTO: ¡Re-render infinito!

// Descomenta las siguientes líneas:
// // ❌ MAL: Crea objeto nuevo cada vez
// const BadFilters: React.FC = () => {
//   useRenderCount('BadFilters ❌');
//
//   // Esto crea { search, category } NUEVO en cada render
//   // {} !== {} siempre
//   const filters = useProductStore((state) => ({
//     search: state.search,
//     category: state.selectedCategory,
//   }));
//   // Sin segundo parámetro, siempre re-renderiza
//
//   return (
//     <div>
//       <p>Search: {filters.search}</p>
//       <p>Category: {filters.category || 'All'}</p>
//     </div>
//   );
// };

console.log('BadFilters demuestra el problema');
console.log('');

// ============================================
// PASO 5: Solución con shallow
// ============================================
console.log('--- Paso 5: Solución shallow ---');

// QUÉ: shallow compara propiedades superficialmente
// PARA: Evitar re-renders cuando valores son iguales
// IMPACTO: Re-render solo si search o category cambian

// Descomenta las siguientes líneas:
// // ✅ BIEN: Usar shallow para comparación
// const GoodFilters: React.FC = () => {
//   useRenderCount('GoodFilters ✅');
//
//   const { search, category } = useProductStore(
//     (state) => ({
//       search: state.search,
//       category: state.selectedCategory,
//     }),
//     shallow // Compara { search, category } por valor
//   );
//
//   return (
//     <div>
//       <p>Search: {search}</p>
//       <p>Category: {category || 'All'}</p>
//     </div>
//   );
// };
//
// // ✅ ALTERNATIVA: useShallow (Zustand v4.4+)
// const GoodFiltersAlt: React.FC = () => {
//   useRenderCount('GoodFiltersAlt ✅');
//
//   const { search, category } = useProductStore(
//     useShallow((state) => ({
//       search: state.search,
//       category: state.selectedCategory,
//     }))
//   );
//
//   return (
//     <div>
//       <p>Search: {search}</p>
//       <p>Category: {category || 'All'}</p>
//     </div>
//   );
// };

console.log('GoodFilters usa shallow correctamente');
console.log('');

// ============================================
// PASO 6: Selector Derivado con useMemo
// ============================================
console.log('--- Paso 6: Selector Derivado ---');

// QUÉ: Calcular valores derivados del estado
// PARA: Filtrado, ordenamiento, cálculos
// IMPACTO: Memoizar cálculos costosos

// Descomenta las siguientes líneas:
// const FilteredProductList: React.FC = () => {
//   useRenderCount('FilteredProductList');
//
//   const { products, search, category } = useProductStore(
//     useShallow((state) => ({
//       products: state.products,
//       search: state.search,
//       category: state.selectedCategory,
//     }))
//   );
//
//   // Memoizar el filtrado
//   const filteredProducts = useMemo(() => {
//     console.log('📊 Calculando productos filtrados...');
//
//     return products.filter((product) => {
//       const matchesSearch = product.name
//         .toLowerCase()
//         .includes(search.toLowerCase());
//       const matchesCategory = !category || product.category === category;
//       return matchesSearch && matchesCategory;
//     });
//   }, [products, search, category]);
//
//   return (
//     <ul>
//       {filteredProducts.map((product) => (
//         <li key={product.id}>
//           {product.name} - ${product.price}
//           {!product.inStock && ' (Sin stock)'}
//         </li>
//       ))}
//     </ul>
//   );
// };

console.log('FilteredProductList con useMemo');
console.log('');

// ============================================
// PASO 7: Separar Componentes por Suscripción
// ============================================
console.log('--- Paso 7: Componentes Separados ---');

// QUÉ: Cada componente solo se suscribe a lo que necesita
// PARA: Aislar re-renders
// IMPACTO: Mejor performance

// Descomenta las siguientes líneas:
// // Solo muestra count, no le afecta search
// const ProductCount: React.FC = () => {
//   useRenderCount('ProductCount');
//   const count = useProductStore((s) => s.products.length);
//   return <p>Total: {count} productos</p>;
// };
//
// // Solo incrementa cart, no lee nada
// const AddToCartButton: React.FC<{ productId: number }> = ({ productId }) => {
//   useRenderCount(`AddToCartButton-${productId}`);
//   const incrementCart = useProductStore((s) => s.incrementCart);
//
//   return (
//     <button onClick={incrementCart}>
//       Agregar al carrito
//     </button>
//   );
// };

console.log('Componentes con suscripciones aisladas');
console.log('');

// ============================================
// VERIFICACIÓN FINAL
// ============================================
console.log('='.repeat(50));
console.log('✅ Ejercicio 03 completado');
console.log('Aprendiste:');
console.log('  - Selectores simples para primitivos');
console.log('  - shallow para objetos/arrays');
console.log('  - useShallow como alternativa');
console.log('  - useMemo para selectores derivados');
console.log('  - Separar componentes para aislar renders');
console.log('='.repeat(50));
