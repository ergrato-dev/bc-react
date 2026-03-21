// src/features/counter/Counter.tsx - SOLUCIÓN

import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';

export const Counter: React.FC = () => {
  // Obtener el valor del contador del estado
  const count = useAppSelector((state) => state.counter.value);

  // Obtener dispatch tipado
  const dispatch = useAppDispatch();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contador Redux</h2>

      {/* Mostrar valor actual */}
      <div style={styles.value}>{count}</div>

      {/* Botones de control */}
      <div style={styles.buttons}>
        <button
          style={styles.button}
          onClick={() => dispatch(decrement())}>
          -
        </button>

        <button
          style={styles.button}
          onClick={() => dispatch(increment())}>
          +
        </button>
      </div>

      {/* Botones adicionales */}
      <div style={styles.buttons}>
        <button
          style={styles.secondaryButton}
          onClick={() => dispatch(incrementByAmount(5))}>
          +5
        </button>

        <button
          style={styles.secondaryButton}
          onClick={() => dispatch(reset())}>
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
