// ============================================
// EJERCICIO 03: Selectores y Performance - SOLUCIÓN
// ============================================

import { create } from 'zustand';
import { shallow } from 'zustand/shallow';
import { useShallow } from 'zustand/react/shallow';
import { useMemo, useRef, useEffect } from 'react';

// ============================================
// Store de Ejemplo
// ============================================

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

interface ProductStore {
  products: Product[];
  search: string;
  selectedCategory: string | null;
  cartCount: number;

  setSearch: (search: string) => void;
  setCategory: (category: string | null) => void;
  incrementCart: () => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [
    { id: 1, name: 'Laptop', price: 999, category: 'tech', inStock: true },
    { id: 2, name: 'Headphones', price: 199, category: 'tech', inStock: true },
    { id: 3, name: 'Desk', price: 299, category: 'furniture', inStock: false },
    { id: 4, name: 'Chair', price: 399, category: 'furniture', inStock: true },
    { id: 5, name: 'Monitor', price: 499, category: 'tech', inStock: true },
  ],
  search: '',
  selectedCategory: null,
  cartCount: 0,

  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ selectedCategory: category }),
  incrementCart: () => set((s) => ({ cartCount: s.cartCount + 1 })),
}));

// ============================================
// Hook para Contar Re-renders
// ============================================

const useRenderCount = (componentName: string) => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  useEffect(() => {
    console.log(`🔄 ${componentName}: render #${renderCount.current}`);
  });

  return renderCount.current;
};

// ============================================
// Selectores Simples (Primitivos)
// ============================================

const CartBadge: React.FC = () => {
  useRenderCount('CartBadge');

  const cartCount = useProductStore((state) => state.cartCount);

  return <div className="cart-badge">🛒 Cart ({cartCount})</div>;
};

const SearchInput: React.FC = () => {
  useRenderCount('SearchInput');

  const search = useProductStore((state) => state.search);
  const setSearch = useProductStore((state) => state.setSearch);

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Buscar productos..."
    />
  );
};

// ============================================
// Solución con shallow
// ============================================

const GoodFilters: React.FC = () => {
  useRenderCount('GoodFilters ✅');

  const { search, category } = useProductStore(
    (state) => ({
      search: state.search,
      category: state.selectedCategory,
    }),
    shallow,
  );

  return (
    <div>
      <p>Search: {search}</p>
      <p>Category: {category || 'All'}</p>
    </div>
  );
};

const GoodFiltersAlt: React.FC = () => {
  useRenderCount('GoodFiltersAlt ✅');

  const { search, category } = useProductStore(
    useShallow((state) => ({
      search: state.search,
      category: state.selectedCategory,
    })),
  );

  return (
    <div>
      <p>Search: {search}</p>
      <p>Category: {category || 'All'}</p>
    </div>
  );
};

// ============================================
// Selector Derivado con useMemo
// ============================================

const FilteredProductList: React.FC = () => {
  useRenderCount('FilteredProductList');

  const { products, search, category } = useProductStore(
    useShallow((state) => ({
      products: state.products,
      search: state.search,
      category: state.selectedCategory,
    })),
  );

  const filteredProducts = useMemo(() => {
    console.log('📊 Calculando productos filtrados...');

    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory = !category || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  return (
    <ul>
      {filteredProducts.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          {!product.inStock && ' (Sin stock)'}
        </li>
      ))}
    </ul>
  );
};

// ============================================
// Componentes Separados por Suscripción
// ============================================

const ProductCount: React.FC = () => {
  useRenderCount('ProductCount');
  const count = useProductStore((s) => s.products.length);
  return <p>Total: {count} productos</p>;
};

const AddToCartButton: React.FC<{ productId: number }> = ({ productId }) => {
  useRenderCount(`AddToCartButton-${productId}`);
  const incrementCart = useProductStore((s) => s.incrementCart);

  return <button onClick={incrementCart}>Agregar al carrito</button>;
};

// ============================================
// App Demo
// ============================================

const App: React.FC = () => {
  const setCategory = useProductStore((s) => s.setCategory);

  return (
    <div className="app">
      <h1>Performance Demo</h1>

      <CartBadge />
      <SearchInput />

      <div>
        <button onClick={() => setCategory(null)}>Todos</button>
        <button onClick={() => setCategory('tech')}>Tech</button>
        <button onClick={() => setCategory('furniture')}>Furniture</button>
      </div>

      <GoodFilters />
      <ProductCount />
      <FilteredProductList />

      <AddToCartButton productId={1} />
    </div>
  );
};

export {
  useProductStore,
  CartBadge,
  SearchInput,
  GoodFilters,
  GoodFiltersAlt,
  FilteredProductList,
  ProductCount,
  AddToCartButton,
  App,
};
