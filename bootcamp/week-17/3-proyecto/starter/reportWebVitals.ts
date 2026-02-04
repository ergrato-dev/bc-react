// ============================================
// PROYECTO WEEK-17: reportWebVitals.ts (STARTER)
// ============================================

// import { onCLS, onFID, onLCP, type Metric } from 'web-vitals';

// type ReportCallback = (metric: Metric) => void;

/**
 * Configura el reporte de Web Vitals
 *
 * TODO: Implementar usando la librería web-vitals
 */
export const reportWebVitals = (onReport: (metric: unknown) => void): void => {
  // TODO: Registrar callbacks
  // onLCP(onReport);
  // onFID(onReport);
  // onCLS(onReport);
  console.log('Implementa reportWebVitals', onReport);
};
