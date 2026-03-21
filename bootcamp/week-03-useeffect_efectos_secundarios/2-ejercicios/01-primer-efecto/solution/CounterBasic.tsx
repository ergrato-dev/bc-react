import React, { useState, useEffect } from 'react';

// ============================================
// SOLUCIÓN: Tu Primer Efecto con useEffect
// ============================================

// ============================================
// SECCIÓN 1: Contador Básico Sin Efectos
// ============================================
console.log('--- Sección 1: Contador Básico ---');

export const CounterBasic: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <h2>Contador Básico</h2>
      <p>Valor: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

console.log('');

// ============================================
// SECCIÓN 2: Agregar useEffect para el Título
// ============================================
console.log('--- Sección 2: useEffect para Título ---');

export const CounterWithEffect: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // QUÉ: useEffect que depende de count
  // PARA: Actualizar el título cada vez que count cambie
  // IMPACTO: El título del navegador refleja el estado actual
  useEffect(() => {
    document.title = `Contador: ${count}`;
    console.log(`✅ Título actualizado: ${count}`);
  }, [count]); // ← Depende de count

  const increment = (): void => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <h2>Contador con Efecto</h2>
      <p>Valor: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <p className="hint">👆 Mira el título de la pestaña del navegador</p>
    </div>
  );
};

console.log('');
