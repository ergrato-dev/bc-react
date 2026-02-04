// ============================================
// PROYECTO WEEK-17: components/PageLoader.tsx (STARTER)
// ============================================

import type { FC } from 'react';

/**
 * Componente de loading para Suspense
 * Se muestra mientras cargan los componentes lazy
 *
 * TODO: Personalizar el diseño del loader
 */
export const PageLoader: FC = () => {
  return (
    <div className="page-loader">
      <div className="spinner"></div>
      <p>Cargando...</p>
    </div>
  );
};
