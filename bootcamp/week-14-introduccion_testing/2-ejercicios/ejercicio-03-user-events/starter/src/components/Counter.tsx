// ============================================
// Componente Counter para practicar clicks
// ============================================

import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
  onChange?: (value: number) => void;
}

export function Counter({ initialValue = 0, onChange }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    const newValue = count + 1;
    setCount(newValue);
    onChange?.(newValue);
  };

  const handleDecrement = () => {
    const newValue = count - 1;
    setCount(newValue);
    onChange?.(newValue);
  };

  const handleReset = () => {
    setCount(initialValue);
    onChange?.(initialValue);
  };

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
