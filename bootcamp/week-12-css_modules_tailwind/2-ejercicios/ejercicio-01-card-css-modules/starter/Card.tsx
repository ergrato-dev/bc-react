/* ============================================
   EJERCICIO 01: Card con CSS Modules
   Archivo: Card.tsx (starter)
   ============================================ */

// ============================================
// PASO 5: Interface de Props
// Define la forma de las props del componente
// ============================================

// Descomenta la interface:
// interface CardProps {
//   /** Variante visual de la card */
//   variant?: 'default' | 'elevated' | 'outlined' | 'filled';
//   /** Título principal de la card */
//   title?: string;
//   /** Subtítulo secundario */
//   subtitle?: string;
//   /** Contenido del footer (botones, links, etc.) */
//   footer?: React.ReactNode;
//   /** Contenido principal de la card */
//   children: React.ReactNode;
//   /** Clase CSS adicional para extender estilos */
//   className?: string;
// }

// ============================================
// PASO 6: Componente Card con clsx
// Implementa el componente usando CSS Modules
// y clsx para combinar clases condicionalmente
// ============================================

// Primero importa las dependencias:
// import clsx from 'clsx';
// import styles from './Card.module.css';

// Luego descomenta el componente:
// export const Card: React.FC<CardProps> = ({
//   variant = 'default',
//   title,
//   subtitle,
//   footer,
//   children,
//   className,
// }) => {
//   // Combinar clases base + variante + clases externas
//   const cardClasses = clsx(
//     styles.card,
//     {
//       [styles.elevated]: variant === 'elevated',
//       [styles.outlined]: variant === 'outlined',
//       [styles.filled]: variant === 'filled',
//     },
//     className // Permite añadir clases adicionales desde fuera
//   );
//
//   return (
//     <article className={cardClasses}>
//       {/* Header opcional: solo se renderiza si hay title o subtitle */}
//       {(title || subtitle) && (
//         <header className={styles.cardHeader}>
//           {title && <h3 className={styles.cardTitle}>{title}</h3>}
//           {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
//         </header>
//       )}
//
//       {/* Body: siempre presente con el children */}
//       <div className={styles.cardBody}>{children}</div>
//
//       {/* Footer opcional: solo si se proporciona */}
//       {footer && <footer className={styles.cardFooter}>{footer}</footer>}
//     </article>
//   );
// };

// Exportación temporal para que el archivo compile
export {};
