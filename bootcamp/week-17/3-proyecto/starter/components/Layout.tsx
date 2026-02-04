// ============================================
// PROYECTO WEEK-17: components/Layout.tsx (STARTER)
// ============================================

import type { FC, ReactNode } from 'react';
// import { NavLink } from 'react-router-dom';
// import { VitalsPanel } from './VitalsPanel';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout principal de la aplicación
 *
 * TODO: Implementar:
 * 1. Header con navegación
 * 2. Panel de Web Vitals
 * 3. Área de contenido principal
 */
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      {/* TODO: Header con navegación */}
      {/* 
      <header className="header">
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/items">Lista</NavLink>
        </nav>
      </header>
      */}

      {/* TODO: Panel de Web Vitals */}
      {/* <VitalsPanel /> */}

      {/* Contenido principal */}
      <main className="main-content">{children}</main>
    </div>
  );
};
