import { Item } from '../types';
import { calculateStats } from '../utils/calculations';

// ============================================
// COMPONENTE: Stats
// Panel de estadísticas
// ============================================
// TODO: Envolver con memo y usar useMemo para cálculos

interface StatsProps {
  items: Item[];
}

export const Stats: React.FC<StatsProps> = ({ items }) => {
  console.log('  📊 Stats renderiza');

  // TODO: Usar useMemo para memorizar estos cálculos
  const stats = calculateStats(items);

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>📊 Estadísticas</h3>

      <div style={styles.grid}>
        <div style={styles.stat}>
          <span style={styles.value}>{stats.total}</span>
          <span style={styles.label}>Total</span>
        </div>
        <div style={styles.stat}>
          <span style={{ ...styles.value, color: '#28a745' }}>
            {stats.active}
          </span>
          <span style={styles.label}>Activos</span>
        </div>
        <div style={styles.stat}>
          <span style={{ ...styles.value, color: '#dc3545' }}>
            {stats.inactive}
          </span>
          <span style={styles.label}>Inactivos</span>
        </div>
        <div style={styles.stat}>
          <span style={{ ...styles.value, color: '#ffc107' }}>
            {stats.pending}
          </span>
          <span style={styles.label}>Pendientes</span>
        </div>
      </div>

      <div style={styles.metrics}>
        <p>
          <strong>Promedio:</strong> ${stats.avgValue}
        </p>
        <p>
          <strong>Máximo:</strong> ${stats.maxValue}
        </p>
        <p>
          <strong>Mínimo:</strong> ${stats.minValue}
        </p>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: '16px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
  },
  title: {
    margin: '0 0 16px 0',
    fontSize: '16px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    marginBottom: '16px',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: 'white',
    borderRadius: '4px',
  },
  value: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  label: {
    fontSize: '12px',
    color: '#666',
  },
  metrics: {
    fontSize: '14px',
  },
};
