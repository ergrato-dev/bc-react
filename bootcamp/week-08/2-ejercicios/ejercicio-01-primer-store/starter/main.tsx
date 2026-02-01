// ============================================
// EJERCICIO 01: Primer Store con Zustand
// ============================================

import { create } from 'zustand';

// ============================================
// PASO 1: Definir la Interface del Store
// ============================================
console.log('--- Paso 1: Definir Interface ---');

// QUÉ: Interface que describe el estado y acciones del store
// PARA: TypeScript valide todas las operaciones
// IMPACTO: Autocompletado y errores en tiempo de compilación

// Descomenta las siguientes líneas:
// interface CounterStore {
//   // Estado
//   count: number;
//
//   // Acciones
//   increment: () => void;
//   decrement: () => void;
//   reset: () => void;
//   setCount: (value: number) => void;
// }

console.log('Interface CounterStore definida');
console.log('');

// ============================================
// PASO 2: Crear el Store con create()
// ============================================
console.log('--- Paso 2: Crear Store ---');

// QUÉ: create() crea un hook personalizado que es el store
// PARA: Centralizar estado y acciones
// IMPACTO: Accesible desde cualquier componente

// Descomenta las siguientes líneas:
// const useCounterStore = create<CounterStore>((set) => ({
//   // Estado inicial
//   count: 0,
//
//   // Acciones - usan set() para actualizar
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
//   reset: () => set({ count: 0 }),
//   setCount: (value) => set({ count: value }),
// }));

console.log('Store creado con create<CounterStore>()');
console.log('');

// ============================================
// PASO 3: Componente Display (solo lee count)
// ============================================
console.log('--- Paso 3: Componente Display ---');

// QUÉ: Selector que extrae solo lo necesario
// PARA: Re-render solo cuando count cambia
// IMPACTO: Mejor performance

// Descomenta las siguientes líneas:
// const CounterDisplay: React.FC = () => {
//   // Selector: (state) => state.count
//   const count = useCounterStore((state) => state.count);
//
//   return (
//     <div className="counter-display">
//       <h2>Contador: {count}</h2>
//     </div>
//   );
// };

console.log('CounterDisplay usa selector para count');
console.log('');

// ============================================
// PASO 4: Componente Controls (solo acciones)
// ============================================
console.log('--- Paso 4: Componente Controls ---');

// QUÉ: Selector de funciones (no causan re-render)
// PARA: Separar lógica de UI de lógica de negocio
// IMPACTO: Componente ligero, solo dispara acciones

// Descomenta las siguientes líneas:
// const CounterControls: React.FC = () => {
//   // Las funciones no cambian, no causan re-render
//   const increment = useCounterStore((state) => state.increment);
//   const decrement = useCounterStore((state) => state.decrement);
//   const reset = useCounterStore((state) => state.reset);
//
//   return (
//     <div className="counter-controls">
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={increment}>+1</button>
//     </div>
//   );
// };

console.log('CounterControls usa selectores para acciones');
console.log('');

// ============================================
// PASO 5: Componente SetValue (con input)
// ============================================
console.log('--- Paso 5: Componente SetValue ---');

// QUÉ: Acción que recibe un parámetro
// PARA: Establecer valores específicos
// IMPACTO: Flexibilidad en las acciones

// Descomenta las siguientes líneas:
// import { useState } from 'react';
//
// const CounterSetValue: React.FC = () => {
//   const [inputValue, setInputValue] = useState('');
//   const setCount = useCounterStore((state) => state.setCount);
//
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const value = parseInt(inputValue, 10);
//     if (!isNaN(value)) {
//       setCount(value);
//       setInputValue('');
//     }
//   };
//
//   return (
//     <form onSubmit={handleSubmit} className="counter-set-value">
//       <input
//         type="number"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Establecer valor..."
//       />
//       <button type="submit">Establecer</button>
//     </form>
//   );
// };

console.log('CounterSetValue permite establecer valor específico');
console.log('');

// ============================================
// PASO 6: App que Compone Todo
// ============================================
console.log('--- Paso 6: App Principal ---');

// QUÉ: Componentes independientes comparten estado
// PARA: Demostrar estado global sin prop drilling
// IMPACTO: Componentes desacoplados pero sincronizados

// Descomenta las siguientes líneas:
// const App: React.FC = () => {
//   return (
//     <div className="app">
//       <h1>Zustand Counter</h1>
//
//       {/* Sin prop drilling - cada componente accede al store */}
//       <CounterDisplay />
//       <CounterControls />
//       <CounterSetValue />
//
//       {/* Múltiples displays para demostrar sincronización */}
//       <div className="multi-display">
//         <CounterDisplay />
//         <CounterDisplay />
//       </div>
//     </div>
//   );
// };
//
// export default App;

console.log('App compuesta sin prop drilling');
console.log('');

// ============================================
// VERIFICACIÓN FINAL
// ============================================
console.log('='.repeat(50));
console.log('✅ Ejercicio 01 completado');
console.log('Aprendiste:');
console.log('  - Crear interface para el store');
console.log('  - Usar create() con TypeScript');
console.log('  - Implementar acciones con set()');
console.log('  - Usar selectores en componentes');
console.log('='.repeat(50));
