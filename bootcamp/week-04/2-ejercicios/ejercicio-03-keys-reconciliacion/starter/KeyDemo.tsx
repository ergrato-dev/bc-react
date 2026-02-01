// ============================================
// EJERCICIO 03: Keys y Reconciliación
// ============================================
// Demuestra la importancia de las keys únicas

import React, { useState } from 'react';

// ============================================
// TIPOS
// ============================================
interface Item {
  id: number;
  name: string;
}

// Contador para IDs únicos
let nextId = 4;

// Datos iniciales
const createInitialItems = (): Item[] => [
  { id: 1, name: 'Primero' },
  { id: 2, name: 'Segundo' },
  { id: 3, name: 'Tercero' },
];

// ============================================
// PASO 1: Lista con Index como Key
// ============================================
// Observa el comportamiento problemático
// Descomenta las siguientes líneas:

// interface ListWithIndexProps {
//   items: Item[];
// }
//
// const ListWithIndex: React.FC<ListWithIndexProps> = ({ items }) => {
//   return (
//     <div className="list-container bad">
//       <h3>❌ Key = index</h3>
//       <ul>
//         {items.map((item, index) => (
//           // ⚠️ Usando index como key
//           <li key={index} className="list-item">
//             <span className="item-label">
//               Key: {index} | ID: {item.id}
//             </span>
//             <span>{item.name}</span>
//             {/* El input tiene estado interno */}
//             <input
//               type="text"
//               placeholder="Escribe algo..."
//               className="item-input"
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// ============================================
// PASO 2: Lista con ID como Key
// ============================================
// Observa el comportamiento correcto
// Descomenta las siguientes líneas:

// interface ListWithIdProps {
//   items: Item[];
// }
//
// const ListWithId: React.FC<ListWithIdProps> = ({ items }) => {
//   return (
//     <div className="list-container good">
//       <h3>✅ Key = id</h3>
//       <ul>
//         {items.map((item) => (
//           // ✅ Usando id único como key
//           <li key={item.id} className="list-item">
//             <span className="item-label">
//               Key: {item.id} | ID: {item.id}
//             </span>
//             <span>{item.name}</span>
//             <input
//               type="text"
//               placeholder="Escribe algo..."
//               className="item-input"
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// ============================================
// PASO 3: Funciones de Manipulación
// ============================================
// Descomenta en el componente App las funciones:

// const addToStart = (): void => {
//   const newItem: Item = { id: nextId++, name: `Nuevo-${nextId - 1}` };
//   setItems((prev) => [newItem, ...prev]);
// };
//
// const addToEnd = (): void => {
//   const newItem: Item = { id: nextId++, name: `Nuevo-${nextId - 1}` };
//   setItems((prev) => [...prev, newItem]);
// };
//
// const removeFirst = (): void => {
//   setItems((prev) => prev.slice(1));
// };
//
// const shuffle = (): void => {
//   setItems((prev) => [...prev].sort(() => Math.random() - 0.5));
// };

// ============================================
// PASO 4: Comparación Side-by-Side
// ============================================
// Muestra ambas listas lado a lado
// Descomenta el contenido en App return

// ============================================
// APP DE DEMOSTRACIÓN
// ============================================
export const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>(createInitialItems);

  // Paso 3: Descomenta las funciones
  // const addToStart = (): void => { ... }
  // const addToEnd = (): void => { ... }
  // const removeFirst = (): void => { ... }
  // const shuffle = (): void => { ... }

  const reset = (): void => {
    nextId = 4;
    setItems(createInitialItems());
  };

  return (
    <div className="app">
      <h1>Ejercicio 03: Keys y Reconciliación</h1>

      <div className="instructions">
        <p>
          <strong>Instrucciones:</strong>
        </p>
        <ol>
          <li>Escribe algo diferente en cada input de ambas listas</li>
          <li>Haz clic en "Agregar al inicio"</li>
          <li>Observa cómo los inputs se comportan diferente</li>
        </ol>
      </div>

      {/* Controles */}
      <div className="controls">
        {/* Paso 3: Descomenta los botones */}
        {/* <button onClick={addToStart}>➕ Agregar al inicio</button> */}
        {/* <button onClick={addToEnd}>➕ Agregar al final</button> */}
        {/* <button onClick={removeFirst}>➖ Eliminar primero</button> */}
        {/* <button onClick={shuffle}>🔀 Mezclar</button> */}
        <button onClick={reset}>🔄 Resetear</button>
      </div>

      {/* Paso 4: Comparación lado a lado */}
      <div className="comparison">
        {/* <ListWithIndex items={items} /> */}
        {/* <ListWithId items={items} /> */}
      </div>

      <div className="explanation">
        <h4>¿Qué está pasando?</h4>
        <p>
          <strong>Con index:</strong> React asocia key=0 siempre con el primer
          elemento. Cuando agregas al inicio, el nuevo elemento toma key=0, y
          React piensa que es el mismo componente, manteniendo su estado interno
          (el input).
        </p>
        <p>
          <strong>Con id:</strong> React identifica cada elemento por su id
          único. Cuando agregas al inicio, el nuevo elemento tiene un id nuevo,
          y React sabe que es un componente nuevo.
        </p>
      </div>

      <p className="hint">
        💡 Descomenta el código paso a paso siguiendo el README.md
      </p>
    </div>
  );
};

export default App;
