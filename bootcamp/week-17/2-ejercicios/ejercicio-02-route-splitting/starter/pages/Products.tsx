// ============================================
// EJERCICIO 02: Products Page (STARTER)
// ============================================

import { type FC } from 'react';

// Simulamos datos pesados
const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Producto ${i + 1}`,
  price: Math.floor(Math.random() * 1000) + 50,
}));

const Products: FC = () => {
  return (
    <div className="page products-page">
      <h1>Productos</h1>
      <p>Esta página se cargó como un chunk separado.</p>

      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
