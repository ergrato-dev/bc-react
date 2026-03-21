// ============================================
// PROYECTO SEMANA 07: NotFoundPage (404)
// ============================================

import { Link, useLocation } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const location = useLocation();

  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>
        La ruta <code>{location.pathname}</code> no existe.
      </p>
      <Link
        to="/"
        className="btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
};
