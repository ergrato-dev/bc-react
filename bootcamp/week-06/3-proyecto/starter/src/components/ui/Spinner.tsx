// ============================================
// Componente: Spinner
// Indicador de carga
// ============================================

import React from 'react';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

/**
 * Spinner de carga
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  color = '#61dafb',
}) => {
  const getSize = (): number => {
    switch (size) {
      case 'small':
        return 16;
      case 'large':
        return 48;
      default:
        return 32;
    }
  };

  const sizeValue = getSize();

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  };

  const spinnerStyles: React.CSSProperties = {
    width: sizeValue,
    height: sizeValue,
    border: `3px solid #333`,
    borderTopColor: color,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={containerStyles}>
        <div style={spinnerStyles} />
      </div>
    </>
  );
};
