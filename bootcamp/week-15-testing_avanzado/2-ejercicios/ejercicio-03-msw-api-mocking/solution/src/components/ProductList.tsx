import { useState, useEffect } from 'react';

// Tipos
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

/**
 * Componente que muestra lista de productos desde API
 * Hace fetch real a /api/products
 */
export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Petición real a la API
        const response = await fetch('/api/products');

        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Estado de carga
  if (loading) {
    return <div role="status">Cargando productos...</div>;
  }

  // Estado de error
  if (error) {
    return <div role="alert">{error}</div>;
  }

  // Lista vacía
  if (products.length === 0) {
    return <div>No hay productos disponibles</div>;
  }

  // Lista de productos
  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            data-testid={`product-${product.id}`}>
            <strong>{product.name}</strong>
            <span> - ${product.price.toFixed(2)}</span>
            <span> ({product.stock} en stock)</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
