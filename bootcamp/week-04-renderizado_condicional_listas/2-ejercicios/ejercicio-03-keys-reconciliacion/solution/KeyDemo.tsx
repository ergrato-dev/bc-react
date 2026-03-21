// ============================================
// EJERCICIO 03: Keys y Reconciliación
// SOLUCIÓN COMPLETA
// ============================================

import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
}

let nextId = 4;

const createInitialItems = (): Item[] => [
  { id: 1, name: 'Primero' },
  { id: 2, name: 'Segundo' },
  { id: 3, name: 'Tercero' },
];

// Lista con Index como Key
interface ListProps {
  items: Item[];
}

const ListWithIndex: React.FC<ListProps> = ({ items }) => {
  return (
    <div className="list-container bad">
      <h3>❌ Key = index</h3>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="list-item">
            <span className="item-label">
              Key: {index} | ID: {item.id}
            </span>
            <span>{item.name}</span>
            <input
              type="text"
              placeholder="Escribe algo..."
              className="item-input"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ListWithId: React.FC<ListProps> = ({ items }) => {
  return (
    <div className="list-container good">
      <h3>✅ Key = id</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="list-item">
            <span className="item-label">
              Key: {item.id} | ID: {item.id}
            </span>
            <span>{item.name}</span>
            <input
              type="text"
              placeholder="Escribe algo..."
              className="item-input"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>(createInitialItems);

  const addToStart = (): void => {
    const newItem: Item = { id: nextId++, name: `Nuevo-${nextId - 1}` };
    setItems((prev) => [newItem, ...prev]);
  };

  const addToEnd = (): void => {
    const newItem: Item = { id: nextId++, name: `Nuevo-${nextId - 1}` };
    setItems((prev) => [...prev, newItem]);
  };

  const removeFirst = (): void => {
    setItems((prev) => prev.slice(1));
  };

  const shuffle = (): void => {
    setItems((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

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

      <div className="controls">
        <button onClick={addToStart}>➕ Agregar al inicio</button>
        <button onClick={addToEnd}>➕ Agregar al final</button>
        <button onClick={removeFirst}>➖ Eliminar primero</button>
        <button onClick={shuffle}>🔀 Mezclar</button>
        <button onClick={reset}>🔄 Resetear</button>
      </div>

      <div className="comparison">
        <ListWithIndex items={items} />
        <ListWithId items={items} />
      </div>

      <div className="explanation">
        <h4>¿Qué está pasando?</h4>
        <p>
          <strong>Con index:</strong> React asocia key=0 siempre con el primer
          elemento. Cuando agregas al inicio, el nuevo elemento toma key=0, y
          React piensa que es el mismo componente.
        </p>
        <p>
          <strong>Con id:</strong> React identifica cada elemento por su id
          único. El nuevo elemento tiene un id nuevo.
        </p>
      </div>
    </div>
  );
};

export default App;
