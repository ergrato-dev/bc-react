// ============================================
// EJERCICIO 01: Children Básico
// Archivo: ConditionalWrapper.tsx
// ============================================

import { type ReactNode, type ReactElement } from 'react';

console.log('--- Paso 4: Componente ConditionalWrapper ---');

// ============================================
// PASO 1: Definir Interface para Wrapper Condicional
// ============================================

// QUÉ: Props para renderizado condicional de wrapper
// PARA: Envolver children solo si se cumple una condición
// IMPACTO: Evita duplicación de código y JSX anidado innecesario

// Descomenta las siguientes líneas:
// interface ConditionalWrapperProps {
//   // Condición para aplicar el wrapper
//   condition: boolean;
//   // Función que recibe children y retorna el elemento envuelto
//   wrapper: (children: ReactNode) => ReactElement;
//   // El contenido a envolver (o no)
//   children: ReactNode;
// }

// ============================================
// PASO 2: Implementar ConditionalWrapper
// ============================================

// QUÉ: Componente que aplica wrapper condicionalmente
// PARA: Evitar duplicación de JSX en renderizado condicional
// IMPACTO: Código más limpio y DRY (Don't Repeat Yourself)

// Descomenta las siguientes líneas:
// export const ConditionalWrapper = ({
//   condition,
//   wrapper,
//   children,
// }: ConditionalWrapperProps) => {
//   // Si la condición es true, aplica el wrapper
//   // Si es false, renderiza children directamente
//   return condition ? wrapper(children) : <>{children}</>;
// };

// ============================================
// PASO 3: Ejemplo de Uso - Link Condicional
// ============================================

// QUÉ: Componente que convierte en link condicionalmente
// PARA: Mostrar uso práctico de ConditionalWrapper
// IMPACTO: Patrón reutilizable para casos comunes

// Descomenta las siguientes líneas:
// interface MaybeLinkProps {
//   href?: string;
//   children: ReactNode;
// }
//
// export const MaybeLink = ({ href, children }: MaybeLinkProps) => {
//   // Usa ConditionalWrapper para envolver en <a> solo si hay href
//   return (
//     <ConditionalWrapper
//       condition={!!href}
//       wrapper={(content) => (
//         <a href={href} style={{ color: '#2196f3', textDecoration: 'none' }}>
//           {content}
//         </a>
//       )}
//     >
//       {children}
//     </ConditionalWrapper>
//   );
// };

// ============================================
// PASO 4: Ejemplo de Uso - Tooltip Condicional
// ============================================

// QUÉ: Componente que muestra tooltip condicionalmente
// PARA: Demostrar flexibilidad del patrón
// IMPACTO: Tooltip solo cuando hay mensaje

// Descomenta las siguientes líneas:
// interface MaybeTooltipProps {
//   tooltip?: string;
//   children: ReactNode;
// }
//
// export const MaybeTooltip = ({ tooltip, children }: MaybeTooltipProps) => {
//   const tooltipWrapperStyles: React.CSSProperties = {
//     position: 'relative',
//     display: 'inline-block',
//     cursor: 'help',
//   };
//
//   return (
//     <ConditionalWrapper
//       condition={!!tooltip}
//       wrapper={(content) => (
//         <span style={tooltipWrapperStyles} title={tooltip}>
//           {content}
//         </span>
//       )}
//     >
//       {children}
//     </ConditionalWrapper>
//   );
// };

// Exportación temporal para evitar errores
export const ConditionalWrapper = () => null;
export const MaybeLink = () => null;
export const MaybeTooltip = () => null;

console.log('ConditionalWrapper.tsx cargado');
