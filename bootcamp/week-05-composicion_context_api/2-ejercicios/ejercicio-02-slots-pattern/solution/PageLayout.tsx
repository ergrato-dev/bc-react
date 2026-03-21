// ============================================
// EJERCICIO 02: Slots Pattern - SOLUCIÓN
// Archivo: PageLayout.tsx
// ============================================

import { type ReactNode } from 'react';

// ============================================
// PASO 1: Definir Interface de Layout
// ============================================

// QUÉ: Slots para layout de página completa
// PARA: Estructura consistente de página con áreas flexibles
// IMPACTO: Layouts predecibles sin sacrificar flexibilidad
interface PageLayoutProps {
  // Slots de layout
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode; // contenido principal
  footer?: ReactNode;
  // Configuración
  sidebarPosition?: 'left' | 'right';
  sidebarWidth?: string;
}

// ============================================
// PASO 2: Implementar el Componente PageLayout
// ============================================

// QUÉ: Layout de página con áreas estructuradas
// PARA: Páginas con header, sidebar, contenido y footer
// IMPACTO: Estructura consistente en toda la aplicación
export const PageLayout = ({
  header,
  sidebar,
  children,
  footer,
  sidebarPosition = 'left',
  sidebarWidth = '250px',
}: PageLayoutProps) => {
  // Estilos del contenedor principal
  const containerStyles: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  // Estilos del header
  const headerStyles: React.CSSProperties = {
    backgroundColor: '#1a1a2e',
    color: '#ffffff',
    padding: '16px 24px',
  };

  // Estilos del área principal (sidebar + contenido)
  const mainAreaStyles: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: sidebarPosition === 'right' ? 'row-reverse' : 'row',
  };

  // Estilos del sidebar
  const sidebarStyles: React.CSSProperties = {
    width: sidebarWidth,
    flexShrink: 0,
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRight: sidebarPosition === 'left' ? '1px solid #e0e0e0' : 'none',
    borderLeft: sidebarPosition === 'right' ? '1px solid #e0e0e0' : 'none',
  };

  // Estilos del contenido principal
  const contentStyles: React.CSSProperties = {
    flex: 1,
    padding: '24px',
    backgroundColor: '#ffffff',
  };

  // Estilos del footer
  const footerStyles: React.CSSProperties = {
    backgroundColor: '#1a1a2e',
    color: '#ffffff',
    padding: '16px 24px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyles}>
      {/* SLOT: Header */}
      {header && <header style={headerStyles}>{header}</header>}

      {/* Área principal */}
      <div style={mainAreaStyles}>
        {/* SLOT: Sidebar */}
        {sidebar && <aside style={sidebarStyles}>{sidebar}</aside>}

        {/* SLOT: Contenido Principal (children) */}
        <main style={contentStyles}>{children}</main>
      </div>

      {/* SLOT: Footer */}
      {footer && <footer style={footerStyles}>{footer}</footer>}
    </div>
  );
};
