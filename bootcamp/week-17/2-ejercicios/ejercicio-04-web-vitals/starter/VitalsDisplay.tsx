// ============================================
// EJERCICIO 04: VitalsDisplay.tsx (STARTER)
// ============================================

import type { FC } from 'react';
// import { useWebVitals } from './useWebVitals';

// ============================================
// PASO 1: Mostrar métricas
// ============================================
console.log('--- Paso 1: Vitals display ---');

// Descomenta:
// export const VitalsDisplay: FC = () => {
//   const { vitals, getStatus } = useWebVitals();
//
//   const formatValue = (name: string, value: number | null): string => {
//     if (value === null) return '---';
//
//     switch (name) {
//       case 'lcp':
//       case 'fid':
//         return `${Math.round(value)}ms`;
//       case 'cls':
//         return value.toFixed(3);
//       default:
//         return String(value);
//     }
//   };
//
//   return (
//     <div className="vitals-display">
//       <h3>Web Vitals</h3>
//       <div className="vitals-grid">
//         {(['lcp', 'fid', 'cls'] as const).map(name => (
//           <div key={name} className={`vital-card ${getStatus(name)}`}>
//             <span className="vital-name">{name.toUpperCase()}</span>
//             <span className="vital-value">{formatValue(name, vitals[name])}</span>
//             <span className="vital-status">{getStatus(name)}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// Placeholder
export const VitalsDisplay: FC = () => {
  return (
    <div className="vitals-display">
      <p>Implementa el display de métricas</p>
    </div>
  );
};
