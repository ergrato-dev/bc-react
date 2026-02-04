import { useState } from 'react';
import { ProductList } from './ProductList';
import { CartCounter } from './CartCounter';

// ==============================================
// TIPOS
// ==============================================
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// Datos iniciales
const initialProducts: Product[] = [
  { id: 1, name: 'Laptop Pro', price: 1299, category: 'Electrónica' },
  { id: 2, name: 'Mouse Wireless', price: 49, category: 'Accesorios' },
  { id: 3, name: 'Teclado Mecánico', price: 129, category: 'Accesorios' },
  { id: 4, name: 'Monitor 27"', price: 399, category: 'Electrónica' },
  { id: 5, name: 'Webcam HD', price: 79, category: 'Accesorios' },
  { id: 6, name: 'Audífonos BT', price: 199, category: 'Audio' },
];

// ==============================================
// COMPONENTE PRINCIPAL
// ==============================================
export function ProductDashboard() {
  console.log(
    '%c[ProductDashboard] Renderizando',
    'color: purple; font-weight: bold',
  );

  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cartCount, setCartCount] = useState(0);

  // ⚠️ PROBLEMA: Esta función se recrea en cada render
  // Esto rompe React.memo en ProductCard
  const handleAddToCart = (id: number) => {
    console.log(`Agregando producto ${id} al carrito`);
    setCartCount((c) => c + 1);
  };

  // ⚠️ PROBLEMA: Esta función también se recrea en cada render
  const handleRemove = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Contador del carrito - su estado causa re-renders */}
      <CartCounter count={cartCount} />

      {/* Lista de productos */}
      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
        onRemove={handleRemove}
      />
    </div>
  );
}
