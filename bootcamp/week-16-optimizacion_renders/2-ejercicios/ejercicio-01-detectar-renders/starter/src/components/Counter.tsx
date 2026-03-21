import { useState } from 'react';

// ==============================================
// COMPONENTE CONTADOR
// Este componente tiene su propio estado y NO afecta a la lista
// ==============================================
export function Counter() {
  // ============================================
  // PASO 2: Detectar renders con console.log
  // ============================================
  // Descomenta la siguiente línea:
  // console.log('%c[Counter] Renderizando', 'color: orange; font-weight: bold');

  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
      <span style={{ fontSize: '18px' }}>Contador: {count}</span>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#2196f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
        +1
      </button>
    </div>
  );
}
