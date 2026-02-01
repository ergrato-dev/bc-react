// ============================================
// SOLUCIÓN: MainLayout con Outlet
// ============================================

import { Outlet, NavLink } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <header className="header">
        <h1>Mi Aplicación</h1>
        <nav className="navigation">
          <NavLink
            to="/"
            end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </nav>
      </header>

      <main className="content">
        {/* Outlet renderiza la ruta hija activa */}
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2025 Mi App - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};
