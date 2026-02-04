// ============================================
// PROYECTO WEEK-17: hooks/useWebVitals.ts (STARTER)
// ============================================

import { useState, useEffect } from 'react';
// import { onCLS, onFID, onLCP, type Metric } from 'web-vitals';
import type { WebVitalsState } from '../types';

/**
 * Hook para monitorear Web Vitals en tiempo real
 *
 * TODO: Implementar medición de LCP, FID, CLS
 */
export const useWebVitals = () => {
  const [vitals, setVitals] = useState<WebVitalsState>({
    lcp: null,
    fid: null,
    cls: null,
  });

  useEffect(() => {
    // TODO: Registrar callbacks para cada métrica
    // onLCP(handleMetric);
    // onFID(handleMetric);
    // onCLS(handleMetric);
  }, []);

  /**
   * Determina el estado de una métrica
   */
  const getStatus = (
    name: keyof WebVitalsState,
  ): 'good' | 'needs-improvement' | 'poor' | 'unknown' => {
    const value = vitals[name];
    if (value === null) return 'unknown';

    // TODO: Implementar lógica según umbrales
    return 'unknown';
  };

  return { vitals, getStatus };
};
