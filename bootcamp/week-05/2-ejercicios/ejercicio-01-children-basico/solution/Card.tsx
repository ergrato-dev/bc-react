// ============================================
// EJERCICIO 01: Children Básico - SOLUCIÓN
// Archivo: Card.tsx
// ============================================

import { type ReactNode } from 'react';

// ============================================
// PASO 1: Definir Interface con Children
// ============================================

// QUÉ: Interface que define props con children tipado
// PARA: Permitir que Card acepte cualquier contenido React válido
// IMPACTO: TypeScript valida que children sea del tipo correcto
interface CardProps {
  // children acepta cualquier contenido React válido
  children: ReactNode;
  // className opcional para estilos adicionales
  className?: string;
  // título opcional para el header
  title?: string;
}

// ============================================
// PASO 2: Implementar el Componente Card
// ============================================

// QUÉ: Componente contenedor que renderiza children
// PARA: Crear tarjetas flexibles con cualquier contenido
// IMPACTO: Composición sobre configuración
export const Card = ({ children, className = '', title }: CardProps) => {
  // Estilos base del card
  const baseStyles: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div
      style={baseStyles}
      className={className}>
      {/* Renderiza título si existe */}
      {title && (
        <h3 style={{ marginTop: 0, marginBottom: '12px', color: '#333' }}>
          {title}
        </h3>
      )}
      {/* Renderiza el contenido pasado como children */}
      {children}
    </div>
  );
};

// ============================================
// PASO 3: Crear Variante CardWithFooter
// ============================================

// QUÉ: Extensión de Card con slot para footer
// PARA: Demostrar composición con múltiples áreas de contenido
// IMPACTO: Patrón de slots sin complejidad adicional
interface CardWithFooterProps extends CardProps {
  footer?: ReactNode;
}

export const CardWithFooter = ({
  children,
  footer,
  className = '',
  title,
}: CardWithFooterProps) => {
  const baseStyles: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  };

  const bodyStyles: React.CSSProperties = {
    padding: '16px',
  };

  const footerStyles: React.CSSProperties = {
    padding: '12px 16px',
    backgroundColor: '#f5f5f5',
    borderTop: '1px solid #e0e0e0',
  };

  return (
    <div
      style={baseStyles}
      className={className}>
      <div style={bodyStyles}>
        {title && (
          <h3 style={{ marginTop: 0, marginBottom: '12px', color: '#333' }}>
            {title}
          </h3>
        )}
        {children}
      </div>
      {/* Renderiza footer solo si existe */}
      {footer && <div style={footerStyles}>{footer}</div>}
    </div>
  );
};
