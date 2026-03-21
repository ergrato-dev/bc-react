/* ============================================
   EJERCICIO 03: Layout Responsivo con Tailwind
   Archivo: Layout.tsx (solution)
   ============================================ */

import { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <Header />

      {/* Container con sidebar + main */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main content */}
        <main className="flex-1 min-h-[calc(100vh-64px)]">
          {/* FAB para abrir sidebar en móvil */}
          <button
            className="
              lg:hidden
              fixed bottom-4 right-4 z-30
              p-4 bg-blue-600 hover:bg-blue-700
              text-white text-xl
              rounded-full shadow-lg
              transition-colors
            "
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu">
            ☰
          </button>

          {children}
        </main>
      </div>
    </div>
  );
};
