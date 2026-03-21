// ============================================
// EJERCICIO 01: App.tsx
// Probando useToggle y useCounter
// ============================================

import React from 'react';
// import { useToggle } from './useToggle';
// import { useCounter } from './useCounter';

// ============================================
// PASO 1: Componente ToggleDemo
// ============================================
console.log('--- Paso 1: ToggleDemo ---');

// Descomenta las siguientes líneas:
// const ToggleDemo: React.FC = () => {
//   const darkMode = useToggle(false);
//   const menuOpen = useToggle(false);
//
//   return (
//     <div style={{ padding: '1rem', border: '1px solid #ccc', marginBottom: '1rem' }}>
//       <h3>useToggle Demo</h3>
//
//       <div style={{ marginBottom: '1rem' }}>
//         <p>Dark Mode: {darkMode.value ? '🌙 ON' : '☀️ OFF'}</p>
//         <button onClick={darkMode.toggle}>Toggle</button>
//         <button onClick={darkMode.setTrue}>Enable</button>
//         <button onClick={darkMode.setFalse}>Disable</button>
//       </div>
//
//       <div>
//         <p>Menu: {menuOpen.value ? '📂 Abierto' : '📁 Cerrado'}</p>
//         <button onClick={menuOpen.toggle}>Toggle Menu</button>
//       </div>
//     </div>
//   );
// };

console.log('');

// ============================================
// PASO 2: Componente CounterDemo
// ============================================
console.log('--- Paso 2: CounterDemo ---');

// Descomenta las siguientes líneas:
// const CounterDemo: React.FC = () => {
//   // Contador simple
//   const simple = useCounter(0);
//
//   // Contador con límites
//   const limited = useCounter(5, { min: 0, max: 10 });
//
//   // Contador con paso
//   const stepped = useCounter(0, { step: 5 });
//
//   return (
//     <div style={{ padding: '1rem', border: '1px solid #ccc', marginBottom: '1rem' }}>
//       <h3>useCounter Demo</h3>
//
//       <div style={{ marginBottom: '1rem' }}>
//         <p>Simple: {simple.count}</p>
//         <button onClick={simple.decrement}>-1</button>
//         <button onClick={simple.increment}>+1</button>
//         <button onClick={simple.reset}>Reset</button>
//       </div>
//
//       <div style={{ marginBottom: '1rem' }}>
//         <p>Limited (0-10): {limited.count}</p>
//         <button onClick={limited.decrement}>-1</button>
//         <button onClick={limited.increment}>+1</button>
//         <button onClick={() => limited.setCount(5)}>Set 5</button>
//       </div>
//
//       <div>
//         <p>Stepped (±5): {stepped.count}</p>
//         <button onClick={stepped.decrement}>-5</button>
//         <button onClick={stepped.increment}>+5</button>
//       </div>
//     </div>
//   );
// };

console.log('');

// ============================================
// PASO 3: App principal
// ============================================
console.log('--- Paso 3: App ---');

// Descomenta las siguientes líneas:
// const App: React.FC = () => {
//   return (
//     <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
//       <h1>Ejercicio 01: Hooks Básicos</h1>
//       <ToggleDemo />
//       <CounterDemo />
//     </div>
//   );
// };
//
// export default App;

// Placeholder
const App: React.FC = () => <div>Descomenta el código en este archivo</div>;
export default App;
