// ============================================
// PROYECTO SEMANA 07: Navigation
// ============================================

import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Navigation: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? 'active' : ''}`;

  return (
    <nav className="navigation">
      <NavLink
        to="/"
        end
        className={getNavClass}>
        Inicio
      </NavLink>

      {/* TODO: Renombra según tu dominio */}
      <NavLink
        to="/items"
        className={getNavClass}>
        Items
      </NavLink>

      <NavLink
        to="/about"
        className={getNavClass}>
        Acerca de
      </NavLink>

      {isAuthenticated ? (
        <>
          <NavLink
            to="/dashboard"
            className={getNavClass}>
            Dashboard
          </NavLink>
          <button
            onClick={logout}
            className="nav-button">
            Salir
          </button>
        </>
      ) : (
        <NavLink
          to="/login"
          className={getNavClass}>
          Login
        </NavLink>
      )}
    </nav>
  );
};
