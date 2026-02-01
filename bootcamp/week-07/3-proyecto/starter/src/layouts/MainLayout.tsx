// ============================================
// PROYECTO SEMANA 07: MainLayout
// ============================================

import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Navigation';

export const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <header className="header">
        {/* TODO: Personaliza el título según tu dominio */}
        <h1>Mi Aplicación</h1>
        <Navigation />
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        {/* TODO: Personaliza el footer */}
        <p>© 2025 - Tu Nombre</p>
      </footer>
    </div>
  );
};
