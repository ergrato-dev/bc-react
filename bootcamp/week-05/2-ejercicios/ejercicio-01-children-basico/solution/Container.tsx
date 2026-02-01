// ============================================
// EJERCICIO 01: Children Básico - SOLUCIÓN
// Archivo: Container.tsx
// ============================================

import { type PropsWithChildren } from 'react';

// ============================================
// PASO 1: Definir Tipos con PropsWithChildren
// ============================================

// QUÉ: PropsWithChildren añade children?: ReactNode automáticamente
// PARA: Reducir código repetitivo al definir interfaces con children
// IMPACTO: Menos boilerplate, children siempre opcional
type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';

type ContainerProps = PropsWithChildren<{
  maxWidth?: MaxWidth;
  centered?: boolean;
  padding?: boolean;
}>;

// ============================================
// PASO 2: Configuración de Anchos Máximos
// ============================================

// QUÉ: Mapeo de tamaños a valores de píxeles
// PARA: Sistema de diseño consistente
// IMPACTO: Layouts predecibles y responsivos
const maxWidthValues: Record<MaxWidth, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
};

// ============================================
// PASO 3: Implementar el Componente Container
// ============================================

// QUÉ: Componente de layout que contiene y centra contenido
// PARA: Proporcionar estructura consistente a las páginas
// IMPACTO: Layout responsivo sin CSS complejo
export const Container = ({
  children,
  maxWidth = 'lg',
  centered = true,
  padding = true,
}: ContainerProps) => {
  const styles: React.CSSProperties = {
    maxWidth: maxWidthValues[maxWidth],
    width: '100%',
    // Centrado horizontal condicional
    marginLeft: centered ? 'auto' : undefined,
    marginRight: centered ? 'auto' : undefined,
    // Padding condicional
    paddingLeft: padding ? '16px' : undefined,
    paddingRight: padding ? '16px' : undefined,
  };

  return <div style={styles}>{children}</div>;
};

// ============================================
// PASO 4: Crear Variante Section
// ============================================

// QUÉ: Contenedor semántico con padding vertical
// PARA: Secciones de página con espaciado consistente
// IMPACTO: HTML semántico y espaciado uniforme
type SectionProps = PropsWithChildren<{
  id?: string;
  backgroundColor?: string;
  paddingY?: 'sm' | 'md' | 'lg';
}>;

const paddingYValues = {
  sm: '24px',
  md: '48px',
  lg: '72px',
};

export const Section = ({
  children,
  id,
  backgroundColor = 'transparent',
  paddingY = 'md',
}: SectionProps) => {
  const styles: React.CSSProperties = {
    backgroundColor,
    paddingTop: paddingYValues[paddingY],
    paddingBottom: paddingYValues[paddingY],
  };

  return (
    <section
      id={id}
      style={styles}>
      {children}
    </section>
  );
};
