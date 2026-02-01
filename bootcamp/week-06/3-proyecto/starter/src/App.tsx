// ============================================
// Dashboard Integrador - App Principal
// ============================================

import React from 'react';
// TODO: Importar componentes de layout
// import { Header } from './components/layout/Header';
// import { Sidebar } from './components/layout/Sidebar';

// TODO: Importar widgets de tu dominio
// import { Widget1, Widget2, Widget3 } from './components/widgets';

// TODO: Importar hook de tema
// import { useTheme } from './context';

// TODO: Importar hooks custom
// import { useToggle, useLocalStorage } from './hooks';

const App: React.FC = () => {
  // TODO: Usar useToggle para el sidebar
  // const { value: sidebarOpen, toggle: toggleSidebar } = useToggle(true);

  // TODO: Obtener tema del contexto
  // const { theme } = useTheme();

  // Estilos base del dashboard
  const dashboardStyles: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a', // TODO: Usar theme.backgroundColor
    color: '#ffffff', // TODO: Usar theme.textColor
    display: 'flex',
    flexDirection: 'column',
  };

  const mainStyles: React.CSSProperties = {
    display: 'flex',
    flex: 1,
  };

  const contentStyles: React.CSSProperties = {
    flex: 1,
    padding: '1.5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    alignContent: 'start',
  };

  return (
    <div style={dashboardStyles}>
      {/* TODO: Header */}
      <header
        style={{
          padding: '1rem 1.5rem',
          backgroundColor: '#1a1a1a',
          borderBottom: '1px solid #333',
        }}>
        <h1 style={{ color: '#61dafb', fontSize: '1.5rem' }}>
          🎯 Dashboard Integrador
        </h1>
        <p style={{ color: '#888', fontSize: '0.9rem' }}>
          Tu dominio: [ASIGNADO POR INSTRUCTOR]
        </p>
      </header>

      <main style={mainStyles}>
        {/* TODO: Sidebar */}
        <aside
          style={{
            width: '250px',
            backgroundColor: '#1a1a1a',
            borderRight: '1px solid #333',
            padding: '1rem',
          }}>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="#"
                  style={{ color: '#61dafb' }}>
                  Dashboard
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a
                  href="#"
                  style={{ color: '#888' }}>
                  Configuración
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Área de widgets */}
        <section style={contentStyles}>
          {/* TODO: Agregar tus widgets aquí */}
          <WidgetPlaceholder title="Widget 1" />
          <WidgetPlaceholder title="Widget 2" />
          <WidgetPlaceholder title="Widget 3" />
        </section>
      </main>
    </div>
  );
};

// Componente placeholder para widgets
const WidgetPlaceholder: React.FC<{ title: string }> = ({ title }) => (
  <div
    style={{
      backgroundColor: '#1a1a1a',
      borderRadius: '8px',
      padding: '1.5rem',
      border: '1px dashed #444',
    }}>
    <h3 style={{ color: '#4ecdc4', marginBottom: '1rem' }}>{title}</h3>
    <p style={{ color: '#666' }}>TODO: Implementar widget para tu dominio</p>
  </div>
);

export default App;
