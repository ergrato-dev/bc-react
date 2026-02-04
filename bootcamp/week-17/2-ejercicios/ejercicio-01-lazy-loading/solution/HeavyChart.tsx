// ============================================
// EJERCICIO 01: COMPONENTE PESADO - HeavyChart.tsx (SOLUTION)
// ============================================
// Componente de gráfico que se carga dinámicamente

import { type FC } from 'react';

// ============================================
// TIPOS
// ============================================
interface ChartData {
  label: string;
  value: number;
  color: string;
}

// ============================================
// GENERADOR DE DATOS
// ============================================
const generateChartData = (): ChartData[] => {
  const colors = ['#61DAFB', '#4ade80', '#f97316', '#c084fc', '#ef4444'];
  return Array.from({ length: 5 }, (_, i) => ({
    label: `Categoría ${i + 1}`,
    value: Math.floor(Math.random() * 100) + 20,
    color: colors[i],
  }));
};

// ============================================
// COMPONENTE
// ============================================
const HeavyChart: FC = () => {
  const data = generateChartData();
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="heavy-chart">
      <h2>Gráfico de Barras</h2>
      <div className="chart-container">
        {data.map((item, index) => (
          <div
            key={index}
            className="chart-bar-wrapper">
            <div
              className="chart-bar"
              style={{
                height: `${(item.value / maxValue) * 200}px`,
                backgroundColor: item.color,
              }}>
              <span className="chart-value">{item.value}</span>
            </div>
            <span className="chart-label">{item.label}</span>
          </div>
        ))}
      </div>
      <p className="chart-note">
        Este componente se cargó dinámicamente usando React.lazy
      </p>
    </div>
  );
};

// Export default requerido para React.lazy
export default HeavyChart;
