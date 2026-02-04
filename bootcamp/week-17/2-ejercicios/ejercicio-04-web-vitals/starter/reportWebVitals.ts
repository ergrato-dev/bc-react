// ============================================
// EJERCICIO 04: reportWebVitals.ts (STARTER)
// ============================================

// import { onCLS, onFID, onLCP, type Metric } from 'web-vitals';

// ============================================
// PASO 1: Definir callback type
// ============================================
console.log('--- Paso 1: Callback type ---');

// Descomenta:
// type ReportCallback = (metric: Metric) => void;

// ============================================
// PASO 2: Función para reportar Web Vitals
// ============================================
console.log('--- Paso 2: reportWebVitals ---');

// Esta función registra callbacks para cada métrica
// Descomenta:
// export const reportWebVitals = (onReport: ReportCallback): void => {
//   // LCP - Largest Contentful Paint
//   // Mide cuánto tarda en pintarse el elemento más grande
//   onLCP(onReport);
//
//   // FID - First Input Delay
//   // Mide el tiempo desde que el usuario interactúa hasta que el navegador responde
//   onFID(onReport);
//
//   // CLS - Cumulative Layout Shift
//   // Mide la estabilidad visual (cuánto se mueve el contenido)
//   onCLS(onReport);
// };

// Placeholder
export const reportWebVitals = (callback: (metric: unknown) => void): void => {
  console.log('Implementa reportWebVitals', callback);
};
