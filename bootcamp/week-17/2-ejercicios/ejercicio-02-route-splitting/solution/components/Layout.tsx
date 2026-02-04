// ============================================
// EJERCICIO 02: Layout Component (SOLUTION)
// ============================================

import { type FC, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Products
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Profile
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Settings
          </NavLink>
        </nav>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <p>Route Splitting Demo</p>
      </footer>
    </div>
  );
};

export default Layout;
