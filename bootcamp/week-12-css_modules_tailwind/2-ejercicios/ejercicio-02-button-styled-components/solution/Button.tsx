/* ============================================
   EJERCICIO 02: Sistema de Botones
   Archivo: Button.tsx (solution)
   ============================================ */

import styled, { css } from 'styled-components';

// Tipos de variantes y tamaños
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

// Interface de props del componente
interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

// Helper para obtener estilos según variante
const getVariantStyles = (variant: ButtonVariant) => {
  const variants = {
    primary: css`
      background-color: ${({ theme }) => theme.colors.primary};
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    `,
    secondary: css`
      background-color: ${({ theme }) => theme.colors.secondary};
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.secondaryHover};
      }
    `,
    danger: css`
      background-color: ${({ theme }) => theme.colors.danger};
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.dangerHover};
      }
    `,
    success: css`
      background-color: ${({ theme }) => theme.colors.success};
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.successHover};
      }
    `,
    ghost: css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.primary}20;
      }
    `,
  };
  return variants[variant];
};

// Props transient para styled component (no pasan al DOM)
interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth: boolean;
  $isLoading: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({ theme }) => theme.colors.text};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  opacity: ${({ $isLoading }) => ($isLoading ? 0.7 : 1)};
  pointer-events: ${({ $isLoading }) => ($isLoading ? 'none' : 'auto')};

  /* Tamaños */
  ${({ $size, theme }) => {
    const sizes = {
      sm: css`
        padding: ${theme.spacing.xs} ${theme.spacing.sm};
        font-size: ${theme.fontSize.sm};
      `,
      md: css`
        padding: ${theme.spacing.sm} ${theme.spacing.lg};
        font-size: ${theme.fontSize.md};
      `,
      lg: css`
        padding: ${theme.spacing.md} ${theme.spacing.xl};
        font-size: ${theme.fontSize.lg};
      `,
    };
    return sizes[$size];
  }}

  /* Variantes */
  ${({ $variant }) => getVariantStyles($variant)}

  /* Estado disabled */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Spinner para estado de loading
const Spinner = styled.span`
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

/**
 * Componente Button con múltiples variantes y estados
 * Usa styled-components con theming para estilos dinámicos
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $isLoading={isLoading}
      disabled={disabled || isLoading}
      onClick={onClick}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </StyledButton>
  );
};

export type { ButtonProps, ButtonVariant, ButtonSize };
