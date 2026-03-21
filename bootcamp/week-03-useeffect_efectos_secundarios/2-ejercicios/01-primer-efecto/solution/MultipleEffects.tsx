import React, { useState, useEffect } from 'react';

// ============================================
// SECCIÓN 4: Múltiples Efectos Independientes
// ============================================
console.log('--- Sección 4: Múltiples Efectos ---');

export const MultipleEffects: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('Usuario');

  // EFECTO 1: Actualizar título con count
  useEffect(() => {
    document.title = `Contador: ${count}`;
    console.log(`📊 Efecto 1: Título actualizado a ${count}`);
  }, [count]); // Solo cuando count cambia

  // EFECTO 2: Log al montar
  useEffect(() => {
    console.log('🚀 Efecto 2: Componente montado');

    return () => {
      console.log('👋 Efecto 2: Componente desmontado');
    };
  }, []); // Solo al montar/desmontar

  // EFECTO 3: Log cuando name cambia
  useEffect(() => {
    console.log(`👤 Efecto 3: Nombre actualizado a "${name}"`);
  }, [name]); // Solo cuando name cambia

  return (
    <div className="multiple-effects">
      <h2>Múltiples Efectos</h2>

      <div className="counter-section">
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
      </div>

      <div className="name-section">
        <p>Nombre: {name}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribe tu nombre"
        />
      </div>

      <p className="hint">
        👀 Abre la consola del navegador para ver los logs de cada efecto
      </p>
    </div>
  );
};

console.log('');
