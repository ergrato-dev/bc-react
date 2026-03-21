// ============================================
// EJERCICIO 04: VitalsDisplay.tsx (SOLUTION)
// ============================================

import type { FC } from 'react';
import { useWebVitals } from './useWebVitals';

// ============================================
// COMPONENTE DE VISUALIZACIÓN
// ============================================

/**
 * Componente que muestra las métricas de Web Vitals en tiempo real
 * Incluye indicadores visuales del estado de cada métrica
 */
export const VitalsDisplay: FC = () => {
  const { vitals, getStatus } = useWebVitals();

  /**
   * Formatea el valor de la métrica para mostrar
   */
  const formatValue = (name: string, value: number | null): string => {
    if (value === null) return '---';

    switch (name) {
      case 'lcp':
      case 'fid':
        // LCP y FID en milisegundos
        return `${Math.round(value)}ms`;
      case 'cls':
        // CLS es un valor decimal
        return value.toFixed(3);
      default:
        return String(value);
    }
  };

  /**
   * Obtiene descripción de la métrica
   */
  const getDescription = (name: string): string => {
    switch (name) {
      case 'lcp':
        return 'Largest Contentful Paint';
      case 'fid':
        return 'First Input Delay';
      case 'cls':
        return 'Cumulative Layout Shift';
      default:
        return name;
    }
  };

  /**
   * Obtiene el color según el estado
   */
  const getColor = (status: string): string => {
    switch (status) {
      case 'good':
        return '#16a34a';
      case 'needs-improvement':
        return '#eab308';
      case 'poor':
        return '#dc2626';
      default:
        return '#6b7280';
    }
  };

  return (
    <div
      className="vitals-display"
      style={{ padding: '16px', backgroundColor: '#1a1a2e' }}>
      <h3 style={{ color: '#fff', marginBottom: '16px' }}>
        Web Vitals Monitor
      </h3>

      <div
        className="vitals-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}>
        {(['lcp', 'fid', 'cls'] as const).map((name) => {
          const status = getStatus(name);
          const color = getColor(status);

          return (
            <div
              key={name}
              className={`vital-card ${status}`}
              style={{
                padding: '16px',
                borderRadius: '8px',
                backgroundColor: '#16213e',
                borderLeft: `4px solid ${color}`,
              }}>
              <span
                className="vital-name"
                style={{
                  display: 'block',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                {name.toUpperCase()}
              </span>

              <span
                className="vital-description"
                style={{
                  display: 'block',
                  fontSize: '12px',
                  color: '#9ca3af',
                  marginBottom: '8px',
                }}>
                {getDescription(name)}
              </span>

              <span
                className="vital-value"
                style={{
                  display: 'block',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: color,
                }}>
                {formatValue(name, vitals[name])}
              </span>

              <span
                className="vital-status"
                style={{
                  display: 'inline-block',
                  marginTop: '8px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  backgroundColor: color,
                  color: '#fff',
                }}>
                {status === 'good'
                  ? '✓ Bueno'
                  : status === 'needs-improvement'
                    ? '⚠ Mejorar'
                    : status === 'poor'
                      ? '✗ Pobre'
                      : '? Pendiente'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
