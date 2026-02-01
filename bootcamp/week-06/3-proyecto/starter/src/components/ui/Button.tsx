// ============================================
// Componente: Button
// Botón reutilizable
// ============================================

import React from 'react';
// TODO: Importar useTheme
// import { useTheme } from '@/context';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Botón reutilizable con variantes
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
}) => {
  // TODO: Obtener tema del contexto
  // const { theme } = useTheme();

  const getBackgroundColor = (): string => {
    if (disabled) return '#444';
    switch (variant) {
      case 'primary':
        return '#0066ff';
      case 'secondary':
        return '#666';
      case 'danger':
        return '#ff4444';
      default:
        return '#0066ff';
    }
  };

  const buttonStyles: React.CSSProperties = {
    padding: '0.5rem 1rem',
    backgroundColor: getBackgroundColor(),
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '0.9rem',
    fontWeight: 500,
    transition: 'background-color 0.2s',
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <button
      type={type}
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};
