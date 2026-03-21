/* ============================================
   EJERCICIO 01: Card con CSS Modules
   Archivo: Card.tsx (solution)
   ============================================ */

import clsx from 'clsx';
import styles from './Card.module.css';

// Interface de Props con documentación JSDoc
interface CardProps {
  /** Variante visual de la card */
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  /** Título principal de la card */
  title?: string;
  /** Subtítulo secundario */
  subtitle?: string;
  /** Contenido del footer (botones, links, etc.) */
  footer?: React.ReactNode;
  /** Contenido principal de la card */
  children: React.ReactNode;
  /** Clase CSS adicional para extender estilos */
  className?: string;
}

/**
 * Componente Card reutilizable con CSS Modules
 * Soporta múltiples variantes visuales y estructura flexible
 */
export const Card: React.FC<CardProps> = ({
  variant = 'default',
  title,
  subtitle,
  footer,
  children,
  className,
}) => {
  // Combinar clases base + variante + clases externas
  // clsx maneja objetos condicionales de forma elegante
  const cardClasses = clsx(
    styles.card, // Siempre se aplica
    {
      // Solo se aplica la clase si la condición es true
      [styles.elevated]: variant === 'elevated',
      [styles.outlined]: variant === 'outlined',
      [styles.filled]: variant === 'filled',
    },
    className, // Permite añadir clases adicionales desde fuera
  );

  return (
    <article className={cardClasses}>
      {/* Header opcional: solo se renderiza si hay title o subtitle */}
      {(title || subtitle) && (
        <header className={styles.cardHeader}>
          {title && <h3 className={styles.cardTitle}>{title}</h3>}
          {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
        </header>
      )}

      {/* Body: siempre presente con el children */}
      <div className={styles.cardBody}>{children}</div>

      {/* Footer opcional: solo si se proporciona */}
      {footer && <footer className={styles.cardFooter}>{footer}</footer>}
    </article>
  );
};

// Exportar también el tipo para uso externo
export type { CardProps };
