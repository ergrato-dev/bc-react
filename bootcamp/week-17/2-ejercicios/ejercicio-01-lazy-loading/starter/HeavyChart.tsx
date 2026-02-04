// ============================================
// EJERCICIO 01: COMPONENTE PESADO - HeavyChart.tsx (STARTER)
// ============================================
// Simula un componente pesado que tarda en cargar

import { type FC } from 'react';

// ============================================
// PASO 1: Crear datos del gráfico
// ============================================
console.log('--- HeavyChart: Generando datos ---');

// Descomenta las siguientes líneas:
// interface ChartData {
//   label: string;
//   value: number;
//   color: string;
// }

// Simulamos datos pesados
// const generateChartData = (): ChartData[] => {
//   const colors = ['#61DAFB', '#4ade80', '#f97316', '#c084fc', '#ef4444'];
//   return Array.from({ length: 5 }, (_, i) => ({
//     label: `Categoría ${i + 1}`,
//     value: Math.floor(Math.random() * 100) + 20,
//     color: colors[i],
//   }));
// };

// ============================================
// PASO 2: Componente del gráfico
// ============================================
console.log('--- HeavyChart: Componente ---');

// Descomenta el componente:
// const HeavyChart: FC = () => {
//   const data = generateChartData();
//   const maxValue = Math.max(...data.map(d => d.value));
//
//   return (
//     <div className="heavy-chart">
//       <h2>Gráfico de Barras</h2>
//       <div className="chart-container">
//         {data.map((item, index) => (
//           <div key={index} className="chart-bar-wrapper">
//             <div
//               className="chart-bar"
//               style={{
//                 height: `${(item.value / maxValue) * 200}px`,
//                 backgroundColor: item.color,
//               }}
//             >
//               <span className="chart-value">{item.value}</span>
//             </div>
//             <span className="chart-label">{item.label}</span>
//           </div>
//         ))}
//       </div>
//       <p className="chart-note">
//         Este componente simula un gráfico pesado que se carga dinámicamente.
//       </p>
//     </div>
//   );
// };

// Placeholder temporal
const HeavyChart: FC = () => {
  return (
    <div className="heavy-chart">
      <p>Descomenta el código del componente HeavyChart</p>
    </div>
  );
};

// ============================================
// PASO 3: Export default (requerido para React.lazy)
// ============================================
// React.lazy requiere que el componente sea el export default
export default HeavyChart;
