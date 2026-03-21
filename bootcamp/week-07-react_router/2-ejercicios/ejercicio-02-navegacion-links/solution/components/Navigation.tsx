// ============================================
// SOLUCIÓN: Componente Navigation con NavLink
// ============================================

import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

export const Navigation: React.FC = () => {
  // Función para generar className dinámico
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? 'active' : ''}`;

  return (
    <nav className="navigation">
      {/* end: solo activo en "/" exactamente, no en "/about" */}
      <NavLink
        to="/"
        end
        className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={getNavLinkClass}>
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={getNavLinkClass}>
        Contact
      </NavLink>
    </nav>
  );
};
