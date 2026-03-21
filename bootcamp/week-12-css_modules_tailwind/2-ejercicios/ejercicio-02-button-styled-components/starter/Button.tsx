/* ============================================
   EJERCICIO 02: Sistema de Botones
   Archivo: Button.tsx (starter)
   ============================================ */

// ============================================
// PASO 4: Tipos de Props del Button
// ============================================

// Descomenta los tipos:
// type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'ghost';
// type ButtonSize = 'sm' | 'md' | 'lg';
//
// interface ButtonProps {
//   /** Variante de color del botón */
//   variant?: ButtonVariant;
//   /** Tamaño del botón */
//   size?: ButtonSize;
//   /** Si ocupa todo el ancho disponible */
//   fullWidth?: boolean;
//   /** Estado deshabilitado */
//   disabled?: boolean;
//   /** Muestra spinner de carga */
//   isLoading?: boolean;
//   /** Icono a la izquierda del texto */
//   leftIcon?: React.ReactNode;
//   /** Icono a la derecha del texto */
//   rightIcon?: React.ReactNode;
//   /** Contenido del botón */
//   children: React.ReactNode;
//   /** Handler de click */
//   onClick?: () => void;
// }

// ============================================
// PASO 5: Función helper para estilos de variante
// ============================================

// import styled, { css } from 'styled-components';

// Descomenta la función helper:
// const getVariantStyles = (variant: ButtonVariant) => {
//   const variants = {
//     primary: css`
//       background-color: ${({ theme }) => theme.colors.primary};
//       &:hover:not(:disabled) {
//         background-color: ${({ theme }) => theme.colors.primaryHover};
//       }
//     `,
//     secondary: css`
//       background-color: ${({ theme }) => theme.colors.secondary};
//       &:hover:not(:disabled) {
//         background-color: ${({ theme }) => theme.colors.secondaryHover};
//       }
//     `,
//     danger: css`
//       background-color: ${({ theme }) => theme.colors.danger};
//       &:hover:not(:disabled) {
//         background-color: ${({ theme }) => theme.colors.dangerHover};
//       }
//     `,
//     success: css`
//       background-color: ${({ theme }) => theme.colors.success};
//       &:hover:not(:disabled) {
//         background-color: ${({ theme }) => theme.colors.successHover};
//       }
//     `,
//     ghost: css`
//       background-color: transparent;
//       border: 1px solid ${({ theme }) => theme.colors.primary};
//       color: ${({ theme }) => theme.colors.primary};
//       &:hover:not(:disabled) {
//         background-color: ${({ theme }) => theme.colors.primary}20;
//       }
//     `,
//   };
//   return variants[variant];
// };

// ============================================
// PASO 6: StyledButton con props dinámicas
// ============================================

// Props internas del styled component (transient props)
// interface StyledButtonProps {
//   $variant: ButtonVariant;
//   $size: ButtonSize;
//   $fullWidth: boolean;
//   $isLoading: boolean;
// }
//
// const StyledButton = styled.button<StyledButtonProps>`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: ${({ theme }) => theme.spacing.sm};
//   border: none;
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   color: ${({ theme }) => theme.colors.text};
//   width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
//   opacity: ${({ $isLoading }) => ($isLoading ? 0.7 : 1)};
//   pointer-events: ${({ $isLoading }) => ($isLoading ? 'none' : 'auto')};
//
//   /* Tamaños usando interpolación de función */
//   ${({ $size, theme }) => {
//     const sizes = {
//       sm: css`
//         padding: ${theme.spacing.xs} ${theme.spacing.sm};
//         font-size: ${theme.fontSize.sm};
//       `,
//       md: css`
//         padding: ${theme.spacing.sm} ${theme.spacing.lg};
//         font-size: ${theme.fontSize.md};
//       `,
//       lg: css`
//         padding: ${theme.spacing.md} ${theme.spacing.xl};
//         font-size: ${theme.fontSize.lg};
//       `,
//     };
//     return sizes[$size];
//   }}
//
//   /* Aplicar estilos de variante */
//   ${({ $variant }) => getVariantStyles($variant)}
//
//   /* Estado disabled */
//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// ============================================
// PASO 7: Componente Button final
// ============================================

// Spinner para estado de loading
// const Spinner = styled.span`
//   width: 16px;
//   height: 16px;
//   border: 2px solid currentColor;
//   border-right-color: transparent;
//   border-radius: 50%;
//   animation: spin 0.75s linear infinite;
//
//   @keyframes spin {
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;
//
// export const Button: React.FC<ButtonProps> = ({
//   variant = 'primary',
//   size = 'md',
//   fullWidth = false,
//   disabled = false,
//   isLoading = false,
//   leftIcon,
//   rightIcon,
//   children,
//   onClick,
// }) => {
//   return (
//     <StyledButton
//       $variant={variant}
//       $size={size}
//       $fullWidth={fullWidth}
//       $isLoading={isLoading}
//       disabled={disabled || isLoading}
//       onClick={onClick}
//     >
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <>
//           {leftIcon && <span>{leftIcon}</span>}
//           {children}
//           {rightIcon && <span>{rightIcon}</span>}
//         </>
//       )}
//     </StyledButton>
//   );
// };

// Exportación temporal
export {};
