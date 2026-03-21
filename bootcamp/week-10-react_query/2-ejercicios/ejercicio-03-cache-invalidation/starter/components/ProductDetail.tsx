// EJERCICIO 03: Detalle de Producto
import { useState } from 'react';
import { useProduct } from '../hooks/useProduct';
import { useUpdateProduct } from '../hooks/useUpdateProduct';

interface ProductDetailProps {
  productId: number;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  productId,
  onBack,
}) => {
  const { data: product, isLoading, isFetching } = useProduct(productId);
  const updateMutation = useUpdateProduct();
  const [newPrice, setNewPrice] = useState('');

  if (isLoading) return <div>Cargando detalle...</div>;
  if (!product) return <div>Producto no encontrado</div>;

  const handleUpdatePrice = () => {
    if (!newPrice) return;
    updateMutation.mutate({
      id: productId,
      data: { price: parseFloat(newPrice) },
    });
    setNewPrice('');
  };

  return (
    <div>
      <button onClick={onBack}>← Volver</button>
      {isFetching && <span> (actualizando...)</span>}
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <div style={{ marginTop: '1rem' }}>
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="Nuevo precio"
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button
          onClick={handleUpdatePrice}
          disabled={updateMutation.isPending}>
          {updateMutation.isPending ? 'Actualizando...' : 'Actualizar Precio'}
        </button>
      </div>
    </div>
  );
};
