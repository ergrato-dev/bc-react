// ============================================
// PROYECTO SEMANA 07: ItemDetailPage
// ============================================
// TODO: Renombra y adapta según tu dominio

import { useParams, Link, useNavigate } from 'react-router-dom';

// TODO: Usa los mismos datos que en ItemListPage
const items = [
  {
    id: 1,
    name: 'Item 1',
    category: 'categoria-a',
    description: 'Descripción del item 1',
  },
  {
    id: 2,
    name: 'Item 2',
    category: 'categoria-b',
    description: 'Descripción del item 2',
  },
  {
    id: 3,
    name: 'Item 3',
    category: 'categoria-a',
    description: 'Descripción del item 3',
  },
  {
    id: 4,
    name: 'Item 4',
    category: 'categoria-c',
    description: 'Descripción del item 4',
  },
  {
    id: 5,
    name: 'Item 5',
    category: 'categoria-b',
    description: 'Descripción del item 5',
  },
];

export const ItemDetailPage: React.FC = () => {
  // TODO: Renombra itemId según tu dominio (bookId, productId, etc.)
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();

  const item = items.find((i) => i.id === Number(itemId));

  if (!item) {
    return (
      <div className="not-found">
        <h2>Item no encontrado</h2>
        <p>El item con ID {itemId} no existe.</p>
        <button onClick={() => navigate('/items')}>Volver a la lista</button>
      </div>
    );
  }

  return (
    <div className="item-detail-page">
      <Link
        to="/items"
        className="back-link">
        ← Volver a la lista
      </Link>

      {/* TODO: Personaliza el detalle según tu dominio */}
      <article className="item-detail">
        <h2>{item.name}</h2>
        <span className="category">{item.category}</span>
        <p>{item.description}</p>

        {/* TODO: Agrega más información de tu dominio */}
      </article>
    </div>
  );
};
