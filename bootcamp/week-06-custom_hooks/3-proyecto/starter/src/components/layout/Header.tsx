// ============================================
// Componente: Header
// Encabezado del dashboard
// ============================================

import React from 'react';
// TODO: Importar useTheme
// import { useTheme } from '@/context';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onToggleSidebar?: () => void;
}

/**
 * Header del dashboard con controles
 */
export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  onToggleSidebar,
}) => {
  // TODO: Obtener tema y toggleTheme del contexto
  // const { theme, toggleTheme, isDark } = useTheme();

  const headerStyles: React.CSSProperties = {
    padding: '1rem 1.5rem',
    backgroundColor: '#1a1a1a', // TODO: theme.surfaceColor
    borderBottom: '1px solid #333', // TODO: theme.borderColor
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const leftStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  };

  const titleStyles: React.CSSProperties = {
    margin: 0,
    fontSize: '1.5rem',
    color: '#61dafb', // TODO: theme.primaryColor
  };

  const subtitleStyles: React.CSSProperties = {
    margin: 0,
    fontSize: '0.9rem',
    color: '#888', // TODO: theme.textSecondary
  };

  const controlsStyles: React.CSSProperties = {
    display: 'flex',
    gap: '0.5rem',
  };

  const buttonStyles: React.CSSProperties = {
    padding: '0.5rem',
    backgroundColor: 'transparent',
    border: '1px solid #444',
    borderRadius: '4px',
    color: '#888',
    cursor: 'pointer',
    fontSize: '1.2rem',
  };

  return (
    <header style={headerStyles}>
      <div style={leftStyles}>
        {onToggleSidebar && (
          <button
            style={buttonStyles}
            onClick={onToggleSidebar}>
            ☰
          </button>
        )}
        <div>
          <h1 style={titleStyles}>{title}</h1>
          {subtitle && <p style={subtitleStyles}>{subtitle}</p>}
        </div>
      </div>

      <div style={controlsStyles}>
        {/* TODO: Botón de toggle tema */}
        <button
          style={buttonStyles}
          // onClick={toggleTheme}
          title="Cambiar tema">
          🌙 {/* TODO: isDark ? '☀️' : '🌙' */}
        </button>
      </div>
    </header>
  );
};
