import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

/**
 * Componente contador con incrementar, decrementar y reset
 */
export const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return (
    <div>
      <h2>Contador</h2>
      <p data-testid="count-value">Valor: {count}</p>
      <div>
        <button
          onClick={decrement}
          aria-label="decrementar">
          -
        </button>
        <button
          onClick={increment}
          aria-label="incrementar">
          +
        </button>
        <button
          onClick={reset}
          aria-label="resetear">
          Reset
        </button>
      </div>
    </div>
  );
};
