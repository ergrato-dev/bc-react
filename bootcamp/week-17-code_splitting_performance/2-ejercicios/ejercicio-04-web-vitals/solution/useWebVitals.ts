// ============================================
// EJERCICIO 04: useWebVitals.ts (SOLUTION)
// ============================================

import { useState, useEffect } from 'react';
import { onCLS, onFID, onLCP, type Metric } from 'web-vitals';

// ============================================
// TIPOS
// ============================================

interface WebVitalsState {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
}

// ============================================
// HOOK PARA WEB VITALS
// ============================================

/**
 * Hook que expone métricas de Web Vitals en tiempo real
 * @returns Objeto con métricas y función getStatus
 */
export const useWebVitals = () => {
  const [vitals, setVitals] = useState<WebVitalsState>({
    lcp: null,
    fid: null,
    cls: null,
  });

  useEffect(() => {
    // Handler genérico que actualiza el estado según la métrica recibida
    const handleMetric = (metric: Metric) => {
      const name = metric.name.toLowerCase() as keyof WebVitalsState;
      setVitals((prev) => ({
        ...prev,
        [name]: metric.value,
      }));
    };

    // Registrar callbacks para cada métrica
    onLCP(handleMetric);
    onFID(handleMetric);
    onCLS(handleMetric);

    // Nota: web-vitals no tiene función de cleanup porque los callbacks
    // se llaman una sola vez por métrica en la vida de la página
  }, []);

  /**
   * Determina el estado de una métrica según los umbrales de Google
   */
  const getStatus = (
    name: keyof WebVitalsState,
  ): 'good' | 'needs-improvement' | 'poor' | 'unknown' => {
    const value = vitals[name];
    if (value === null) return 'unknown';

    switch (name) {
      case 'lcp':
        // LCP en milisegundos
        return value <= 2500
          ? 'good'
          : value <= 4000
            ? 'needs-improvement'
            : 'poor';
      case 'fid':
        // FID en milisegundos
        return value <= 100
          ? 'good'
          : value <= 300
            ? 'needs-improvement'
            : 'poor';
      case 'cls':
        // CLS es un valor sin unidad
        return value <= 0.1
          ? 'good'
          : value <= 0.25
            ? 'needs-improvement'
            : 'poor';
      default:
        return 'unknown';
    }
  };

  return { vitals, getStatus };
};
