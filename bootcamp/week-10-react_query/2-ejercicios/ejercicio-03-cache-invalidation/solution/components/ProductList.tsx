// SOLUCIÓN: ProductList con prefetch
import { useQueryClient } from '@tanstack/react-query';
import { useProducts } from '../hooks/useProducts';
import { fetchProduct } from '../api/products';

interface ProductListProps {
  onSelect: (id: number) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ onSelect }) => {
  const { data: products, isLoading } = useProducts();
  const queryClient = useQueryClient();

  const handleMouseEnter = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ['products', 'detail', id],
      queryFn: () => fetchProduct(id),
      staleTime: 1000 * 60,
    });
  };

  if (isLoading) return <div>Cargando...</div>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {products?.map((product) => (
        <li
          key={product.id}
          onClick={() => onSelect(product.id)}
          onMouseEnter={() => handleMouseEnter(product.id)}
          style={{
            padding: '1rem',
            margin: '0.5rem 0',
            backgroundColor: '#2d2d2d',
            borderRadius: '8px',
            cursor: 'pointer',
          }}>
          <strong>{product.name}</strong> - ${product.price}
        </li>
      ))}
    </ul>
  );
};
