// ============================================
// EJERCICIO 02: Slots Pattern
// Archivo: Modal.tsx
// ============================================

import { type ReactNode } from 'react';

console.log('--- Paso 1: Modal con Slots ---');

// ============================================
// PASO 1: Definir Interface con Múltiples Slots
// ============================================

// QUÉ: Interface que define múltiples slots tipados
// PARA: Estructurar el modal con áreas predefinidas
// IMPACTO: API clara y predecible para el consumidor

// Descomenta las siguientes líneas:
// interface ModalProps {
//   // Control de visibilidad
//   isOpen: boolean;
//   onClose: () => void;
//   // Slots del modal
//   header?: ReactNode;
//   footer?: ReactNode;
//   children: ReactNode; // slot principal (body)
//   // Configuración
//   size?: 'sm' | 'md' | 'lg';
//   closeOnOverlay?: boolean;
// }

// ============================================
// PASO 2: Configuración de Tamaños
// ============================================

// QUÉ: Mapeo de tamaños a valores de píxeles
// PARA: Tamaños de modal predefinidos y consistentes
// IMPACTO: Sistema de diseño mantenible

// Descomenta las siguientes líneas:
// const sizeStyles: Record<'sm' | 'md' | 'lg', React.CSSProperties> = {
//   sm: { maxWidth: '400px' },
//   md: { maxWidth: '560px' },
//   lg: { maxWidth: '720px' },
// };

// ============================================
// PASO 3: Implementar el Componente Modal
// ============================================

// QUÉ: Modal con áreas definidas para header, body y footer
// PARA: Diálogos modales flexibles con estructura consistente
// IMPACTO: Composición clara con slots específicos

// Descomenta las siguientes líneas:
// export const Modal = ({
//   isOpen,
//   onClose,
//   header,
//   footer,
//   children,
//   size = 'md',
//   closeOnOverlay = true,
// }: ModalProps) => {
//   // No renderizar si no está abierto
//   if (!isOpen) return null;
//
//   // Estilos del overlay (fondo oscuro)
//   const overlayStyles: React.CSSProperties = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 1000,
//   };
//
//   // Estilos del contenedor del modal
//   const modalStyles: React.CSSProperties = {
//     ...sizeStyles[size],
//     width: '100%',
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
//     overflow: 'hidden',
//   };
//
//   // Estilos del header
//   const headerStyles: React.CSSProperties = {
//     padding: '16px 20px',
//     borderBottom: '1px solid #e0e0e0',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   };
//
//   // Estilos del body
//   const bodyStyles: React.CSSProperties = {
//     padding: '20px',
//   };
//
//   // Estilos del footer
//   const footerStyles: React.CSSProperties = {
//     padding: '16px 20px',
//     borderTop: '1px solid #e0e0e0',
//     backgroundColor: '#f5f5f5',
//   };
//
//   // Botón de cerrar
//   const closeButtonStyles: React.CSSProperties = {
//     background: 'none',
//     border: 'none',
//     fontSize: '24px',
//     cursor: 'pointer',
//     color: '#666',
//     padding: '0',
//     lineHeight: 1,
//   };
//
//   // Manejador de click en overlay
//   const handleOverlayClick = () => {
//     if (closeOnOverlay) {
//       onClose();
//     }
//   };
//
//   return (
//     <div style={overlayStyles} onClick={handleOverlayClick}>
//       <div style={modalStyles} onClick={(e) => e.stopPropagation()}>
//         {/* SLOT: Header */}
//         {header && (
//           <div style={headerStyles}>
//             <div>{header}</div>
//             <button style={closeButtonStyles} onClick={onClose}>
//               ×
//             </button>
//           </div>
//         )}
//
//         {/* SLOT: Body (children) */}
//         <div style={bodyStyles}>{children}</div>
//
//         {/* SLOT: Footer */}
//         {footer && <div style={footerStyles}>{footer}</div>}
//       </div>
//     </div>
//   );
// };

// Exportación temporal para evitar errores
export const Modal = () => null;

console.log('Modal.tsx cargado');
