// ============================================
// SOLUCIÓN: ProductPage con useParams
// ============================================

import { useParams, Link } from 'react-router-dom';

export const ProductPage: React.FC = () => {
  // useParams extrae los parámetros de la URL
  // El tipo genérico especifica qué parámetros esperamos
  const { productId } = useParams<{ productId: string }>();

  return (
    <div className="product-page">
      <Link to="/products">← Volver a productos</Link>

      <h2>Detalle del Producto</h2>
      <p>
        ID del producto: <strong>{productId}</strong>
      </p>

      {/* En una app real, aquí harías fetch con el productId */}
      <p>Aquí se mostraría la información del producto con ID: {productId}</p>
    </div>
  );
};
