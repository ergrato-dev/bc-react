// ============================================
// EJERCICIO 02: Slots Pattern - SOLUCIÓN
// Archivo: AdvancedCard.tsx
// ============================================

import { type ReactNode } from 'react';

// ============================================
// PASO 1: Definir Interface con Múltiples Slots
// ============================================

// QUÉ: Card con múltiples áreas de contenido
// PARA: Tarjetas ricas en contenido manteniendo flexibilidad
// IMPACTO: Componente versátil para diferentes casos de uso
interface AdvancedCardProps {
  // Slot requerido
  title: string;
  children: ReactNode;
  // Slots opcionales
  image?: ReactNode;
  badge?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  // Configuración
  variant?: 'elevated' | 'outlined' | 'filled';
}

// ============================================
// PASO 2: Configuración de Variantes
// ============================================

// QUÉ: Estilos predefinidos por variante
// PARA: Diferentes estilos visuales manteniendo estructura
// IMPACTO: Flexibilidad visual con API consistente
const variantStyles: Record<
  'elevated' | 'outlined' | 'filled',
  React.CSSProperties
> = {
  elevated: {
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: 'none',
  },
  outlined: {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    border: '1px solid #e0e0e0',
  },
  filled: {
    backgroundColor: '#f5f5f5',
    boxShadow: 'none',
    border: 'none',
  },
};

// ============================================
// PASO 3: Implementar el Componente AdvancedCard
// ============================================

// QUÉ: Card con slots para imagen, badge, contenido y acciones
// PARA: Tarjetas de producto, usuario, artículo, etc.
// IMPACTO: Un componente para múltiples casos de uso
export const AdvancedCard = ({
  title,
  children,
  image,
  badge,
  subtitle,
  actions,
  variant = 'elevated',
}: AdvancedCardProps) => {
  // Estilos del contenedor
  const cardStyles: React.CSSProperties = {
    ...variantStyles[variant],
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  };

  // Estilos del área de imagen
  const imageContainerStyles: React.CSSProperties = {
    position: 'relative',
  };

  // Estilos del badge (posicionado sobre la imagen)
  const badgeContainerStyles: React.CSSProperties = {
    position: 'absolute',
    top: '12px',
    right: '12px',
  };

  // Estilos del contenido
  const contentStyles: React.CSSProperties = {
    padding: '16px',
    flex: 1,
  };

  // Estilos del título
  const titleStyles: React.CSSProperties = {
    margin: '0 0 4px 0',
    fontSize: '18px',
    fontWeight: 600,
    color: '#333',
  };

  // Estilos del subtítulo
  const subtitleStyles: React.CSSProperties = {
    margin: '0 0 12px 0',
    fontSize: '14px',
    color: '#666',
  };

  // Estilos del área de acciones
  const actionsStyles: React.CSSProperties = {
    padding: '12px 16px',
    borderTop: '1px solid #e0e0e0',
    display: 'flex',
    gap: '8px',
    justifyContent: 'flex-end',
  };

  return (
    <div style={cardStyles}>
      {/* SLOT: Imagen con Badge opcional */}
      {image && (
        <div style={imageContainerStyles}>
          {image}
          {/* SLOT: Badge posicionado sobre la imagen */}
          {badge && <div style={badgeContainerStyles}>{badge}</div>}
        </div>
      )}

      {/* Contenido principal */}
      <div style={contentStyles}>
        <h3 style={titleStyles}>{title}</h3>

        {/* SLOT: Subtítulo opcional */}
        {subtitle && <p style={subtitleStyles}>{subtitle}</p>}

        {/* SLOT: Children (descripción/contenido) */}
        {children}
      </div>

      {/* SLOT: Acciones */}
      {actions && <div style={actionsStyles}>{actions}</div>}
    </div>
  );
};
