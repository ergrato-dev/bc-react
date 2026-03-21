// ============================================
// EJERCICIO 01: Primer Store con Zustand - SOLUCIÓN
// ============================================

import { create } from 'zustand';
import { useState } from 'react';

// ============================================
// PASO 1: Definir la Interface del Store
// ============================================

// QUÉ: Interface que describe el estado y acciones del store
// PARA: TypeScript valide todas las operaciones
// IMPACTO: Autocompletado y errores en tiempo de compilación

interface CounterStore {
  // Estado
  count: number;

  // Acciones
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

// ============================================
// PASO 2: Crear el Store con create()
// ============================================

// QUÉ: create() crea un hook personalizado que es el store
// PARA: Centralizar estado y acciones
// IMPACTO: Accesible desde cualquier componente

const useCounterStore = create<CounterStore>((set) => ({
  // Estado inicial
  count: 0,

  // Acciones - usan set() para actualizar
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setCount: (value) => set({ count: value }),
}));

// ============================================
// PASO 3: Componente Display (solo lee count)
// ============================================

// QUÉ: Selector que extrae solo lo necesario
// PARA: Re-render solo cuando count cambia
// IMPACTO: Mejor performance

const CounterDisplay: React.FC = () => {
  // Selector: (state) => state.count
  const count = useCounterStore((state) => state.count);

  return (
    <div className="counter-display">
      <h2>Contador: {count}</h2>
    </div>
  );
};

// ============================================
// PASO 4: Componente Controls (solo acciones)
// ============================================

// QUÉ: Selector de funciones (no causan re-render)
// PARA: Separar lógica de UI de lógica de negocio
// IMPACTO: Componente ligero, solo dispara acciones

const CounterControls: React.FC = () => {
  // Las funciones no cambian, no causan re-render
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div className="counter-controls">
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+1</button>
    </div>
  );
};

// ============================================
// PASO 5: Componente SetValue (con input)
// ============================================

// QUÉ: Acción que recibe un parámetro
// PARA: Establecer valores específicos
// IMPACTO: Flexibilidad en las acciones

const CounterSetValue: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const setCount = useCounterStore((state) => state.setCount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) {
      setCount(value);
      setInputValue('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="counter-set-value">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Establecer valor..."
      />
      <button type="submit">Establecer</button>
    </form>
  );
};

// ============================================
// PASO 6: App que Compone Todo
// ============================================

// QUÉ: Componentes independientes comparten estado
// PARA: Demostrar estado global sin prop drilling
// IMPACTO: Componentes desacoplados pero sincronizados

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Zustand Counter</h1>

      {/* Sin prop drilling - cada componente accede al store */}
      <CounterDisplay />
      <CounterControls />
      <CounterSetValue />

      {/* Múltiples displays para demostrar sincronización */}
      <div className="multi-display">
        <CounterDisplay />
        <CounterDisplay />
      </div>
    </div>
  );
};

export default App;
