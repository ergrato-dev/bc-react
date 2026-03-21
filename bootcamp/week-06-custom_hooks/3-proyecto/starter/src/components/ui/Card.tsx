// ============================================
// Componente: Card
// Contenedor base para widgets
// ============================================

import React from 'react';
// TODO: Importar useTheme
// import { useTheme } from '@/context';

interface CardProps {
  title: string;
  children: React.ReactNode;
  onRefresh?: () => void;
  loading?: boolean;
}

/**
 * Componente Card base para widgets del dashboard
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  onRefresh,
  loading = false,
}) => {
  // TODO: Obtener tema del contexto
  // const { theme } = useTheme();

  const cardStyles: React.CSSProperties = {
    backgroundColor: '#1a1a1a', // TODO: theme.surfaceColor
    borderRadius: '8px',
    padding: '1.5rem',
    border: '1px solid #333', // TODO: theme.borderColor
  };

  const headerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const titleStyles: React.CSSProperties = {
    margin: 0,
    fontSize: '1.1rem',
    color: '#4ecdc4', // TODO: theme.primaryColor
  };

  const refreshButtonStyles: React.CSSProperties = {
    padding: '0.25rem 0.5rem',
    backgroundColor: 'transparent',
    border: '1px solid #444',
    borderRadius: '4px',
    color: '#888',
    cursor: loading ? 'not-allowed' : 'pointer',
    opacity: loading ? 0.5 : 1,
  };

  return (
    <div style={cardStyles}>
      <header style={headerStyles}>
        <h3 style={titleStyles}>{title}</h3>
        {onRefresh && (
          <button
            style={refreshButtonStyles}
            onClick={onRefresh}
            disabled={loading}>
            🔄 {loading ? 'Cargando...' : 'Actualizar'}
          </button>
        )}
      </header>
      <div>{children}</div>
    </div>
  );
};
