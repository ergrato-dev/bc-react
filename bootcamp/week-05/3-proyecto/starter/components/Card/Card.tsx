// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: components/Card/Card.tsx
// ============================================

import {
  createContext,
  useContext,
  type ReactNode,
  type CSSProperties,
} from 'react';

// ============================================
// CONTEXT INTERNO
// ============================================

// TODO: Crea un contexto interno para el Card (no exportado)
// Este contexto permite que los subcomponentes accedan al estado del Card
// interface CardContextValue {
//   variant?: 'default' | 'outlined' | 'elevated';
// }
// const CardContext = createContext<CardContextValue | undefined>(undefined);

// ============================================
// CARD ROOT
// ============================================

// TODO: Implementa el componente raíz del Card
// interface CardRootProps {
//   children: ReactNode;
//   variant?: 'default' | 'outlined' | 'elevated';
//   className?: string;
//   style?: CSSProperties;
// }
//
// const CardRoot = ({ children, variant = 'default', className, style }: CardRootProps) => {
//   // Usar useConfig para aplicar estilos según configuración global
//   // Proporcionar CardContext a los hijos
// };

// ============================================
// CARD HEADER
// ============================================

// TODO: Implementa el header del Card con slots para título y acciones
// interface CardHeaderProps {
//   children: ReactNode;
//   className?: string;
// }
//
// const CardHeader = ({ children, className }: CardHeaderProps) => { ... };

// ============================================
// CARD TITLE
// ============================================

// TODO: Implementa el título del Card
// interface CardTitleProps {
//   children: ReactNode;
//   as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
// }
//
// const CardTitle = ({ children, as: Tag = 'h3' }: CardTitleProps) => { ... };

// ============================================
// CARD ACTIONS
// ============================================

// TODO: Implementa el contenedor de acciones
// interface CardActionsProps {
//   children: ReactNode;
// }
//
// const CardActions = ({ children }: CardActionsProps) => { ... };

// ============================================
// CARD BODY
// ============================================

// TODO: Implementa el cuerpo del Card
// interface CardBodyProps {
//   children: ReactNode;
//   className?: string;
// }
//
// const CardBody = ({ children, className }: CardBodyProps) => { ... };

// ============================================
// CARD FOOTER
// ============================================

// TODO: Implementa el pie del Card
// interface CardFooterProps {
//   children: ReactNode;
//   className?: string;
// }
//
// const CardFooter = ({ children, className }: CardFooterProps) => { ... };

// ============================================
// COMPOUND COMPONENT EXPORT
// ============================================

// TODO: Usa Object.assign para crear el compound component
// export const Card = Object.assign(CardRoot, {
//   Header: CardHeader,
//   Title: CardTitle,
//   Actions: CardActions,
//   Body: CardBody,
//   Footer: CardFooter,
// });

// Exportación temporal
export const Card = Object.assign(
  ({ children }: { children: ReactNode }) => <div>{children}</div>,
  {
    Header: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    Title: ({ children }: { children: ReactNode }) => <h3>{children}</h3>,
    Actions: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    Body: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    Footer: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  },
);
