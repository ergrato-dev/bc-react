// ============================================
// EJERCICIO 02: Counter Hook - SOLUCIÓN
// ============================================
// Contador interactivo con useState
// ============================================

import React, { useState } from 'react';

/**
 * Componente Counter
 * Demuestra el uso de useState para estado numérico
 */
export const Counter: React.FC = () => {
  // ============================================
  // PASO 1: Declarar Estado
  // ============================================

  // useState<number> especifica el tipo del estado
  // El valor inicial es 0
  const [count, setCount] = useState<number>(0);

  // Desestructuración:
  // - count: valor actual del estado
  // - setCount: función para actualizar el estado

  // ============================================
  // PASO 2: Funciones de Actualización
  // ============================================

  /**
   * Incrementa el contador en 1
   */
  const increment = (): void => {
    setCount(count + 1);
    // Cada vez que se llama setCount, React re-renderiza el componente
  };

  /**
   * Decrementa el contador en 1
   */
  const decrement = (): void => {
    setCount(count - 1);
  };

  /**
   * Resetea el contador a 0
   */
  const reset = (): void => {
    setCount(0);
  };

  /**
   * Genera un número aleatorio entre 1 y 100
   */
  const randomize = (): void => {
    const random = Math.floor(Math.random() * 100) + 1;
    setCount(random);
  };

  // ============================================
  // PASO 3: Renderizar JSX
  // ============================================

  return (
    <div className="counter">
      {/* Mostrar el valor actual del estado */}
      <p className="counter__display">{count}</p>

      {/* Botones para manipular el estado */}
      <div className="counter__buttons">
        <button
          onClick={increment}
          className="counter__button counter__button--increment">
          +1
        </button>

        <button
          onClick={decrement}
          className="counter__button counter__button--decrement">
          -1
        </button>

        <button
          onClick={reset}
          className="counter__button counter__button--reset">
          Reset
        </button>

        <button
          onClick={randomize}
          className="counter__button counter__button--random">
          Random
        </button>
      </div>
    </div>
  );
};

// ============================================
// EXPLICACIÓN DETALLADA
// ============================================

/*
1. USESTATE HOOK
   - Hook más básico de React
   - Agrega estado local a componentes funcionales
   - Retorna array con [valor, setter]
   - El setter dispara re-render automáticamente

2. ESTADO NUMÉRICO
   - useState<number>(0) especifica tipo y valor inicial
   - TypeScript infiere el tipo automáticamente
   - El estado persiste entre renders

3. FUNCIONES DE ACTUALIZACIÓN
   - Cada función llama a setCount con un nuevo valor
   - setCount es asíncrono (no actualiza inmediatamente)
   - React puede agrupar múltiples actualizaciones (batching)

4. EVENTOS ONCLICK
   - onClick={increment} pasa la referencia de la función
   - onClick={increment()} ejecutaría la función inmediatamente (❌ MAL)
   - Los event handlers reciben el evento sintético como argumento

5. RE-RENDERS
   - Cada setCount causa que React re-ejecute el componente
   - React compara el nuevo valor con el anterior
   - Si son iguales, React puede saltar el re-render (optimization)

6. INMUTABILIDAD
   - Nunca hacer: count = count + 1 (❌ MAL)
   - Siempre usar: setCount(count + 1) (✅ BIEN)
   - React necesita detectar cambios para re-renderizar

7. FUNCIÓN UPDATER (AVANZADO)
   - Alternativa: setCount(prev => prev + 1)
   - Garantiza usar el valor más reciente del estado
   - Útil cuando hay múltiples actualizaciones rápidas

8. TYPESCRIPT
   - useState<number> es explícito
   - TypeScript infiere el tipo del setter automáticamente
   - setCount solo acepta valores number
*/

// ============================================
// EJEMPLO DE USO EN APP.TSX
// ============================================

/*
import { Counter } from './Counter';

function App() {
  return (
    <div className="app">
      <h1>Counter Hook Example</h1>
      <Counter />
    </div>
  );
}

export default App;
*/
