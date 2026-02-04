// ============================================
// EJERCICIO 03: VIRTUALIZACIÓN - App.tsx (SOLUTION)
// ============================================

import { useState } from 'react';
import { ProductList } from './ProductList';
import { MessageList } from './MessageList';
import type { Product } from './types';

// ============================================
// PASO 1: Generar muchos datos de prueba
// ============================================

// Generamos 10,000 productos para probar el rendimiento
const generateProducts = (count: number): Product[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Producto ${i + 1}`,
    description: `Descripción del producto ${i + 1}. Este texto simula contenido real.`,
    price: Math.floor(Math.random() * 10000) + 100,
    category: ['Electrónica', 'Ropa', 'Hogar', 'Deportes'][
      Math.floor(Math.random() * 4)
    ],
    inStock: Math.random() > 0.3,
  }));
};

const initialProducts = generateProducts(10000);

// ============================================
// COMPONENTE APP
// ============================================
function App() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [viewMode, setViewMode] = useState<'products' | 'messages'>('products');

  // ============================================
  // PASO 2: Handler para eliminar
  // ============================================
  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="app">
      <h1>Virtualización de Listas</h1>
      <p>Total de items: {products.length}</p>

      <div className="controls">
        <button
          onClick={() => setViewMode('products')}
          className={viewMode === 'products' ? 'active' : ''}>
          FixedSizeList
        </button>
        <button
          onClick={() => setViewMode('messages')}
          className={viewMode === 'messages' ? 'active' : ''}>
          VariableSizeList
        </button>
      </div>

      {/* ============================================ */}
      {/* PASO 3: Renderizar lista virtualizada */}
      {/* ============================================ */}
      {viewMode === 'products' && (
        <ProductList
          products={products}
          onDelete={handleDelete}
        />
      )}

      {viewMode === 'messages' && <MessageList />}
    </div>
  );
}

export default App;
