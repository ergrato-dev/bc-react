import { memo } from 'react';

// ==============================================
// TIPOS
// ==============================================
interface StatsProps {
  total: number;
  completed: number;
  totalValue: number;
  avgValue: number;
}

// ==============================================
// COMPONENTE ESTADÍSTICAS (memorizado)
// ==============================================
export const Stats = memo(function Stats({
  total,
  completed,
  totalValue,
  avgValue,
}: StatsProps) {
  console.log('%c[Stats] Renderizando', 'color: orange');

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      }}
    >
      <StatCard label="Total Items" value={total} />
      <StatCard label="Completados" value={completed} />
      <StatCard label="Valor Total" value={`$${totalValue}`} />
      <StatCard label="Promedio" value={`$${avgValue.toFixed(2)}`} />
    </div>
  );
});

// Componente auxiliar para cada tarjeta de estadística
function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: '#e3f2fd',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '14px', color: '#666' }}>{label}</div>
      <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '4px' }}>
        {value}
      </div>
    </div>
  );
}
