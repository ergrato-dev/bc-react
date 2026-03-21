// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/Layout/Layout.tsx
// ============================================

import { type ReactNode } from 'react';
// import { useConfig } from '../../contexts/ConfigContext';

// ============================================
// LAYOUT PROPS
// ============================================

interface LayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
}

// ============================================
// LAYOUT COMPONENT
// ============================================

// TODO: Implementa un Layout que aplique los estilos según configuración
// export const Layout = ({ children, sidebar }: LayoutProps) => {
//   const { theme, fontSize, density } = useConfig();
//
//   // Calcular estilos basados en configuración
//   const getFontSizeValue = () => {
//     switch (fontSize) {
//       case 'small': return '14px';
//       case 'medium': return '16px';
//       case 'large': return '18px';
//     }
//   };
//
//   const getPaddingValue = () => {
//     switch (density) {
//       case 'compact': return '8px';
//       case 'normal': return '16px';
//       case 'spacious': return '24px';
//     }
//   };
//
//   return (
//     <div
//       data-theme={theme}
//       style={{
//         fontSize: getFontSizeValue(),
//         '--spacing': getPaddingValue(),
//       } as React.CSSProperties}
//     >
//       <header>...</header>
//       <main>
//         {sidebar && <aside>{sidebar}</aside>}
//         <div>{children}</div>
//       </main>
//     </div>
//   );
// };

// Exportación temporal
export const Layout = ({ children, sidebar }: LayoutProps) => (
  <div>
    {sidebar && <aside>{sidebar}</aside>}
    <main>{children}</main>
  </div>
);
