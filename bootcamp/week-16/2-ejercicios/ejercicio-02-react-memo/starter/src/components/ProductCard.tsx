// ============================================
// PASO 3: Aplicar React.memo
// ============================================
// Descomenta el import de memo:
// import { memo } from 'react';

import { Product } from './ProductDashboard';

// ==============================================
// TIPOS
// ==============================================
interface ProductCardProps {
  product: Product;
  onAddToCart: (id: number) => void;
  onRemove: (id: number) => void;
}

// ============================================
// PASO 6: Comparador personalizado
// ============================================
// Descomenta las siguientes líneas:
// function areProductPropsEqual(
//   prevProps: ProductCardProps,
//   nextProps: ProductCardProps
// ): boolean {
//   // Solo comparamos el producto, ignoramos las funciones
//   return prevProps.product.id === nextProps.product.id &&
//          prevProps.product.name === nextProps.product.name &&
//          prevProps.product.price === nextProps.product.price;
// }

// ==============================================
// COMPONENTE PRODUCTO
// ==============================================
// PASO 3: Cambiar a memo(function ProductCard...)
// PASO 6: Agregar areProductPropsEqual como segundo argumento
export function ProductCard({
  product,
  onAddToCart,
  onRemove,
}: ProductCardProps) {
  console.log(`%c[ProductCard] Renderizando: ${product.name}`, 'color: green');

  return (
    <div
      style={{
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
      }}>
      <h3 style={{ margin: '0 0 8px 0' }}>{product.name}</h3>
      <p style={{ color: '#666', margin: '0 0 4px 0' }}>{product.category}</p>
      <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 16px 0' }}>
        ${product.price}
      </p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => onAddToCart(product.id)}
          style={{
            flex: 1,
            padding: '8px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>
          🛒 Agregar
        </button>
        <button
          onClick={() => onRemove(product.id)}
          style={{
            padding: '8px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>
          ✕
        </button>
      </div>
    </div>
  );
}
