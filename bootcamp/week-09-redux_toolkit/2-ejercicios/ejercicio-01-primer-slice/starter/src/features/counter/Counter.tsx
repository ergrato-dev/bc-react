// src/features/counter/Counter.tsx

// ============================================
// PASO 6: Usar el Slice en el Componente
// ============================================

import React from 'react';

console.log('--- Paso 6: Usar el Slice en el Componente ---');

// ============================================
// 6.1 Importar Hooks y Actions
// ============================================
// Descomenta las siguientes líneas:

// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { increment, decrement, incrementByAmount, reset } from './counterSlice';

// ============================================
// 6.2 Componente Counter
// ============================================

export const Counter: React.FC = () => {
  // ============================================
  // 6.3 Obtener Estado con useAppSelector
  // ============================================
  // Descomenta las siguientes líneas:

  // El selector recibe RootState y retorna el valor
  // TypeScript infiere que count es number
  // const count = useAppSelector((state) => state.counter.value);

  // ============================================
  // 6.4 Obtener Dispatch con useAppDispatch
  // ============================================
  // Descomenta la siguiente línea:

  // const dispatch = useAppDispatch();

  // ============================================
  // 6.5 Renderizar UI
  // ============================================
  // Reemplaza el return con este código:

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contador Redux</h2>

      {/* Mostrar valor actual */}
      <div style={styles.value}>{/* Reemplaza 0 con: {count} */}0</div>

      {/* Botones de control */}
      <div style={styles.buttons}>
        {/* Conectar onClick con dispatch(decrement()) */}
        <button
          style={styles.button}
          onClick={() => console.log('TODO: dispatch(decrement())')}>
          -
        </button>

        {/* Conectar onClick con dispatch(increment()) */}
        <button
          style={styles.button}
          onClick={() => console.log('TODO: dispatch(increment())')}>
          +
        </button>
      </div>

      {/* Botones adicionales */}
      <div style={styles.buttons}>
        {/* Conectar onClick con dispatch(incrementByAmount(5)) */}
        <button
          style={styles.secondaryButton}
          onClick={() => console.log('TODO: dispatch(incrementByAmount(5))')}>
          +5
        </button>

        {/* Conectar onClick con dispatch(reset()) */}
        <button
          style={styles.secondaryButton}
          onClick={() => console.log('TODO: dispatch(reset())')}>
          Reset
        </button>
      </div>
    </div>
  );
};

// Estilos inline para simplicidad
const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    minWidth: '300px',
  },
  title: {
    color: '#ffffff',
    marginBottom: '1rem',
    fontSize: '1.5rem',
  },
  value: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: '#61DAFB',
    margin: '1rem 0',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#764ABC',
    color: 'white',
    cursor: 'pointer',
    minWidth: '60px',
  },
  secondaryButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    border: '2px solid #764ABC',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: '#764ABC',
    cursor: 'pointer',
  },
};

export default Counter;
