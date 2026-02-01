// ============================================
// EJERCICIO 02: Componente Navigation
// ============================================

// ============================================
// PASO 1: Crear navegación con Link
// ============================================
console.log('--- Paso 1: Navegación con Link ---');

// Link permite navegación sin recarga de página
// Descomenta las siguientes líneas:

// import { Link } from 'react-router-dom';
// import './styles/Navigation.css';
//
// export const Navigation: React.FC = () => {
//   return (
//     <nav className="navigation">
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//     </nav>
//   );
// };

// ============================================
// PASO 2: Mejorar con NavLink para estilos activos
// ============================================
console.log('--- Paso 2: NavLink con estilos activos ---');

// NavLink añade la prop isActive para saber si está activo
// Reemplaza el código anterior por:

// import { NavLink } from 'react-router-dom';
// import './styles/Navigation.css';
//
// export const Navigation: React.FC = () => {
//   // Función para generar className dinámico
//   const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
//     `nav-link ${isActive ? 'active' : ''}`;
//
//   return (
//     <nav className="navigation">
//       <NavLink to="/" end className={getNavLinkClass}>
//         Home
//       </NavLink>
//       <NavLink to="/about" className={getNavLinkClass}>
//         About
//       </NavLink>
//       <NavLink to="/contact" className={getNavLinkClass}>
//         Contact
//       </NavLink>
//     </nav>
//   );
// };

// Placeholder temporal
export const Navigation: React.FC = () => {
  return <nav>Navigation - Descomenta el código</nav>;
};

console.log('');
