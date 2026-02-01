// ============================================
// SOLUCIÓN: App.tsx
// Probando useToggle y useCounter
// ============================================

import React from 'react';
import { useToggle } from './useToggle';
import { useCounter } from './useCounter';

// ============================================
// Componente ToggleDemo
// ============================================

const ToggleDemo: React.FC = () => {
  // Hook para modo oscuro
  const darkMode = useToggle(false);
  // Hook para menú
  const menuOpen = useToggle(false);

  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #ccc',
        marginBottom: '1rem',
        borderRadius: '8px',
      }}>
      <h3>🔘 useToggle Demo</h3>

      <div style={{ marginBottom: '1rem' }}>
        <p>Dark Mode: {darkMode.value ? '🌙 ON' : '☀️ OFF'}</p>
        <button
          onClick={darkMode.toggle}
          style={{ marginRight: '0.5rem' }}>
          Toggle
        </button>
        <button
          onClick={darkMode.setTrue}
          style={{ marginRight: '0.5rem' }}>
          Enable
        </button>
        <button onClick={darkMode.setFalse}>Disable</button>
      </div>

      <div>
        <p>Menu: {menuOpen.value ? '📂 Abierto' : '📁 Cerrado'}</p>
        <button onClick={menuOpen.toggle}>Toggle Menu</button>
      </div>
    </div>
  );
};

// ============================================
// Componente CounterDemo
// ============================================

const CounterDemo: React.FC = () => {
  // Contador simple sin límites
  const simple = useCounter(0);

  // Contador con límites: 0 a 10
  const limited = useCounter(5, { min: 0, max: 10 });

  // Contador con paso de 5
  const stepped = useCounter(0, { step: 5 });

  // Contador de cantidad (típico en e-commerce)
  const quantity = useCounter(1, { min: 1, max: 99 });

  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #ccc',
        marginBottom: '1rem',
        borderRadius: '8px',
      }}>
      <h3>🔢 useCounter Demo</h3>

      <div style={{ marginBottom: '1rem' }}>
        <p>
          <strong>Simple:</strong> {simple.count}
        </p>
        <button
          onClick={simple.decrement}
          style={{ marginRight: '0.5rem' }}>
          -1
        </button>
        <button
          onClick={simple.increment}
          style={{ marginRight: '0.5rem' }}>
          +1
        </button>
        <button onClick={simple.reset}>Reset</button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <p>
          <strong>Limited (0-10):</strong> {limited.count}
        </p>
        <button
          onClick={limited.decrement}
          style={{ marginRight: '0.5rem' }}>
          -1
        </button>
        <button
          onClick={limited.increment}
          style={{ marginRight: '0.5rem' }}>
          +1
        </button>
        <button onClick={() => limited.setCount(5)}>Set 5</button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <p>
          <strong>Stepped (±5):</strong> {stepped.count}
        </p>
        <button
          onClick={stepped.decrement}
          style={{ marginRight: '0.5rem' }}>
          -5
        </button>
        <button onClick={stepped.increment}>+5</button>
      </div>

      <div>
        <p>
          <strong>Quantity (1-99):</strong> {quantity.count}
        </p>
        <button
          onClick={quantity.decrement}
          style={{ marginRight: '0.5rem' }}>
          -
        </button>
        <span
          style={{
            padding: '0.25rem 1rem',
            border: '1px solid #ccc',
            margin: '0 0.5rem',
          }}>
          {quantity.count}
        </span>
        <button onClick={quantity.increment}>+</button>
      </div>
    </div>
  );
};

// ============================================
// App principal
// ============================================

const App: React.FC = () => {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
      }}>
      <h1>✅ Ejercicio 01: Hooks Básicos</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        Implementación de useToggle y useCounter
      </p>

      <ToggleDemo />
      <CounterDemo />
    </div>
  );
};

export default App;
