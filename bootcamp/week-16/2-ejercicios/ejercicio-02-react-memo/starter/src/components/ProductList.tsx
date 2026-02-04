import { Product } from './ProductDashboard';
import { ProductCard } from './ProductCard';

// ==============================================
// TIPOS
// ==============================================
interface ProductListProps {
  products: Product[];
  onAddToCart: (id: number) => void;
  onRemove: (id: number) => void;
}

// ==============================================
// COMPONENTE LISTA
// ==============================================
export function ProductList({
  products,
  onAddToCart,
  onRemove,
}: ProductListProps) {
  console.log('%c[ProductList] Renderizando', 'color: blue; font-weight: bold');

  return (
    <div>
      <h2>Productos ({products.length})</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '16px',
        }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
