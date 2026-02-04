// ============================================
// EJERCICIO 04: useWebVitals.ts (STARTER)
// ============================================

import { useState, useEffect } from 'react';
// import { onCLS, onFID, onLCP, type Metric } from 'web-vitals';

// ============================================
// TIPOS
// ============================================

interface WebVitalsState {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
}

// ============================================
// PASO 1: Hook para Web Vitals
// ============================================
console.log('--- Paso 1: useWebVitals hook ---');

// Descomenta:
// export const useWebVitals = () => {
//   const [vitals, setVitals] = useState<WebVitalsState>({
//     lcp: null,
//     fid: null,
//     cls: null,
//   });
//
//   useEffect(() => {
//     // Handler genérico que actualiza el estado según la métrica
//     const handleMetric = (metric: Metric) => {
//       const name = metric.name.toLowerCase() as keyof WebVitalsState;
//       setVitals(prev => ({
//         ...prev,
//         [name]: metric.value,
//       }));
//     };
//
//     // Registrar callbacks
//     onLCP(handleMetric);
//     onFID(handleMetric);
//     onCLS(handleMetric);
//
//     // web-vitals no tiene cleanup, pero el hook sigue convenciones
//   }, []);
//
//   // Helpers para determinar el estado de cada métrica
//   const getStatus = (name: keyof WebVitalsState): 'good' | 'needs-improvement' | 'poor' | 'unknown' => {
//     const value = vitals[name];
//     if (value === null) return 'unknown';
//
//     switch (name) {
//       case 'lcp':
//         return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
//       case 'fid':
//         return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
//       case 'cls':
//         return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
//       default:
//         return 'unknown';
//     }
//   };
//
//   return { vitals, getStatus };
// };

// Placeholder
export const useWebVitals = () => {
  const [vitals] = useState<WebVitalsState>({
    lcp: null,
    fid: null,
    cls: null,
  });

  useEffect(() => {
    console.log('Implementa useWebVitals hook');
  }, []);

  const getStatus = (): 'unknown' => 'unknown';

  return { vitals, getStatus };
};
