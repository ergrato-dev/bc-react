import { useState } from 'react';

// ==============================================
// COMPONENTE CONTADOR
// Este componente tiene su propio estado y NO debería
// causar que se recalculen los filtros o estadísticas
// ==============================================
export function Counter() {
  console.log('%c[Counter] Renderizando', 'color: teal; font-weight: bold');

  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: '#fff3e0',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
      <span style={{ fontSize: '18px' }}>
        Contador independiente: <strong>{count}</strong>
      </span>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#ff9800',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
        +1
      </button>
      <span style={{ fontSize: '14px', color: '#666' }}>
        (Click aquí NO debería recalcular filtros ni stats)
      </span>
    </div>
  );
}
