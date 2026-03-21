// ============================================
// EJERCICIO 02: Counter Hook
// ============================================
// Objetivo: Implementar un contador con useState
// Tiempo estimado: 25 minutos
// ============================================

// React y TypeScript
// import React, { useState } from 'react';

// ============================================
// PASO 1: Declarar Estado con useState
// ============================================
console.log('--- Paso 1: Declarar Estado ---');

// El hook useState retorna [valor, setter]
// Descomenta las siguientes líneas:
// export const Counter: React.FC = () => {
//   // Estado inicial: 0
//   const [count, setCount] = useState<number>(0);

console.log('Estado declarado: count inicia en 0');
console.log('');

// ============================================
// PASO 2: Implementar Funciones de Actualización
// ============================================
console.log('--- Paso 2: Funciones de Actualización ---');

// Cada función usa el setter para actualizar el estado
// Descomenta las siguientes líneas:
//   const increment = (): void => {
//     setCount(count + 1);
//   };
//
//   const decrement = (): void => {
//     setCount(count - 1);
//   };
//
//   const reset = (): void => {
//     setCount(0);
//   };
//
//   const randomize = (): void => {
//     // Generar número aleatorio entre 1 y 100
//     const random = Math.floor(Math.random() * 100) + 1;
//     setCount(random);
//   };

console.log('Funciones: increment, decrement, reset, randomize');
console.log('Cada una usa setCount para actualizar el estado');
console.log('');

// ============================================
// PASO 3: Renderizar JSX con Estado
// ============================================
console.log('--- Paso 3: Renderizar JSX ---');

// Usa el estado en JSX con llaves {}
// Descomenta las siguientes líneas:
//   return (
//     <div className="counter">
//       {/* Mostrar el valor actual */}
//       <p className="counter__display">{count}</p>
//
//       {/* Botones para manipular el estado */}
//       <div className="counter__buttons">
//         <button
//           onClick={increment}
//           className="counter__button counter__button--increment"
//         >
//           +1
//         </button>
//
//         <button
//           onClick={decrement}
//           className="counter__button counter__button--decrement"
//         >
//           -1
//         </button>
//
//         <button
//           onClick={reset}
//           className="counter__button counter__button--reset"
//         >
//           Reset
//         </button>
//
//         <button
//           onClick={randomize}
//           className="counter__button counter__button--random"
//         >
//           Random
//         </button>
//       </div>
//     </div>
//   );
// };

console.log('JSX renderiza el estado actual: {count}');
console.log('Cada botón tiene su onClick handler');
console.log('');

// ============================================
// PASO 4: Usar el Componente en App
// ============================================
console.log('--- Paso 4: Uso en App.tsx ---');

// En tu App.tsx, importa y usa el componente:
// import { Counter } from './Counter';
//
// function App() {
//   return (
//     <div>
//       <h1>Counter Hook Example</h1>
//       <Counter />
//     </div>
//   );
// }

console.log('Importa Counter en App.tsx y úsalo como <Counter />');
console.log('');

// ============================================
// NOTAS IMPORTANTES
// ============================================
console.log('--- Notas Importantes ---');
console.log('1. useState retorna [estado, setter]');
console.log('2. Llamar al setter causa re-render');
console.log('3. El estado persiste entre renders');
console.log('4. No mutar el estado directamente');
console.log('5. setCount es asíncrono');
console.log('');

// ============================================
// CONCEPTO: useState con Función Updater
// ============================================
console.log('--- Concepto Avanzado: Función Updater ---');

// Si el nuevo estado depende del anterior, usa función:
// const increment = () => setCount(prev => prev + 1);
// Esto garantiza que siempre uses el valor más reciente

console.log('Alternativa: setCount(prev => prev + 1)');
console.log('Garantiza el valor más reciente del estado');
console.log('');

// ============================================
// VERIFICACIÓN
// ============================================
console.log('--- Verificación ---');
console.log('✓ Counter inicia en 0');
console.log('✓ +1 incrementa el valor');
console.log('✓ -1 decrementa el valor');
console.log('✓ Reset vuelve a 0');
console.log('✓ Random genera 1-100');
console.log('✓ El valor se actualiza en pantalla');
console.log('');
