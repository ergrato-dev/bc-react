// ============================================
// PROYECTO WEEK-17: pages/ItemDetail.tsx (STARTER)
// ============================================

import type { FC } from 'react';
// import { useParams, Link } from 'react-router-dom';

/**
 * Página de detalle de un item
 *
 * TODO: Implementar:
 * 1. Obtener ID de los params
 * 2. Cargar/mostrar datos del item
 * 3. UI optimizada (sin CLS)
 */
const ItemDetail: FC = () => {
  // TODO: Obtener ID de la URL
  // const { id } = useParams<{ id: string }>();

  // TODO: Cargar datos del item
  // const item = ...

  return (
    <div className="item-detail">
      <h1>Detalle del Item</h1>

      {/* TODO: Implementar detalle con dimensiones reservadas */}
      <div
        className="detail-card"
        style={{
          // Reservar espacio para evitar CLS
          minHeight: '300px',
        }}>
        <p>Implementa la vista de detalle</p>
        {/* <Link to="/items">Volver a la lista</Link> */}
      </div>
    </div>
  );
};

export default ItemDetail;
