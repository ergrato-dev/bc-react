// ============================================
// PROYECTO SEMANA 07: HomePage
// ============================================
// TODO: Personaliza según tu dominio

import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* TODO: Personaliza el título y descripción */}
      <h2>Bienvenido a Mi Aplicación</h2>
      <p>Descripción de tu aplicación según el dominio asignado.</p>

      <div className="cta-buttons">
        {/* TODO: Actualiza el texto y ruta según tu dominio */}
        <Link
          to="/items"
          className="btn btn-primary">
          Ver Items
        </Link>
        <Link
          to="/about"
          className="btn btn-secondary">
          Conocer más
        </Link>
      </div>
    </div>
  );
};
