// ============================================
// EJERCICIO 01: Children Básico
// Archivo: Alert.tsx
// ============================================

import { type ReactNode } from 'react';

console.log('--- Paso 2: Componente Alert con Variantes ---');

// ============================================
// PASO 1: Definir Tipos para Variantes
// ============================================

// QUÉ: Union type para variantes predefinidas
// PARA: Limitar las opciones de estilo a valores conocidos
// IMPACTO: IDE sugiere opciones válidas, errores en tiempo de compilación

// Descomenta las siguientes líneas:
// type AlertVariant = 'info' | 'success' | 'warning' | 'error';
//
// interface AlertProps {
//   children: ReactNode;
//   variant?: AlertVariant;
//   title?: string;
//   dismissible?: boolean;
//   onDismiss?: () => void;
// }

// ============================================
// PASO 2: Configuración de Estilos por Variante
// ============================================

// QUÉ: Objeto de configuración de estilos por variante
// PARA: Mantener estilos organizados y fáciles de modificar
// IMPACTO: Código más mantenible y consistente

// Descomenta las siguientes líneas:
// const variantStyles: Record<AlertVariant, React.CSSProperties> = {
//   info: {
//     backgroundColor: '#e3f2fd',
//     borderColor: '#2196f3',
//     color: '#1565c0',
//   },
//   success: {
//     backgroundColor: '#e8f5e9',
//     borderColor: '#4caf50',
//     color: '#2e7d32',
//   },
//   warning: {
//     backgroundColor: '#fff3e0',
//     borderColor: '#ff9800',
//     color: '#e65100',
//   },
//   error: {
//     backgroundColor: '#ffebee',
//     borderColor: '#f44336',
//     color: '#c62828',
//   },
// };

// ============================================
// PASO 3: Implementar el Componente Alert
// ============================================

// QUÉ: Componente de alerta con estilos según variante
// PARA: Mostrar mensajes con diferentes niveles de importancia
// IMPACTO: UX mejorada con feedback visual apropiado

// Descomenta las siguientes líneas:
// export const Alert = ({
//   children,
//   variant = 'info',
//   title,
//   dismissible = false,
//   onDismiss,
// }: AlertProps) => {
//   const styles = variantStyles[variant];
//
//   const baseStyles: React.CSSProperties = {
//     ...styles,
//     padding: '12px 16px',
//     borderRadius: '6px',
//     borderLeft: `4px solid ${styles.borderColor}`,
//     display: 'flex',
//     alignItems: 'flex-start',
//     gap: '12px',
//   };
//
//   const contentStyles: React.CSSProperties = {
//     flex: 1,
//   };
//
//   const buttonStyles: React.CSSProperties = {
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '18px',
//     color: styles.color,
//     padding: '0',
//     lineHeight: 1,
//   };
//
//   return (
//     <div style={baseStyles} role="alert">
//       <div style={contentStyles}>
//         {/* Título opcional */}
//         {title && (
//           <strong style={{ display: 'block', marginBottom: '4px' }}>
//             {title}
//           </strong>
//         )}
//         {/* Contenido principal (children) */}
//         {children}
//       </div>
//       {/* Botón de cerrar condicional */}
//       {dismissible && onDismiss && (
//         <button
//           style={buttonStyles}
//           onClick={onDismiss}
//           aria-label="Cerrar alerta"
//         >
//           ×
//         </button>
//       )}
//     </div>
//   );
// };

// Exportación temporal para evitar errores
export const Alert = () => null;

console.log('Alert.tsx cargado');
