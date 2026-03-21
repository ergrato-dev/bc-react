// ============================================
// EJERCICIO 04: reportWebVitals.ts (SOLUTION)
// ============================================

import { onCLS, onFID, onLCP, type Metric } from 'web-vitals';

type ReportCallback = (metric: Metric) => void;

/**
 * Registra callbacks para medir Web Vitals
 * @param onReport - Callback que recibe cada métrica
 */
export const reportWebVitals = (onReport: ReportCallback): void => {
  // LCP - Largest Contentful Paint
  // Mide cuánto tarda en pintarse el elemento más grande visible
  // Bueno: ≤ 2.5s | Mejorar: 2.5-4s | Pobre: > 4s
  onLCP(onReport);

  // FID - First Input Delay
  // Mide el tiempo desde que el usuario interactúa hasta que el navegador responde
  // Bueno: ≤ 100ms | Mejorar: 100-300ms | Pobre: > 300ms
  onFID(onReport);

  // CLS - Cumulative Layout Shift
  // Mide la estabilidad visual (cuánto se mueve el contenido inesperadamente)
  // Bueno: ≤ 0.1 | Mejorar: 0.1-0.25 | Pobre: > 0.25
  onCLS(onReport);
};
