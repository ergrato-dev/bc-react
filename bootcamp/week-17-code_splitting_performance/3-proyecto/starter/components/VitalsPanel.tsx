// ============================================
// PROYECTO WEEK-17: components/VitalsPanel.tsx (STARTER)
// ============================================

import type { FC } from 'react';
// import { useWebVitals } from '../hooks/useWebVitals';

/**
 * Panel que muestra las métricas de Web Vitals
 *
 * TODO: Implementar usando el hook useWebVitals
 */
export const VitalsPanel: FC = () => {
  // TODO: Usar el hook useWebVitals
  // const { vitals, getStatus } = useWebVitals();

  return (
    <div className="vitals-panel">
      <h3>Web Vitals</h3>
      {/* TODO: Mostrar métricas LCP, FID, CLS */}
      <p>Implementa el panel de métricas</p>
    </div>
  );
};
