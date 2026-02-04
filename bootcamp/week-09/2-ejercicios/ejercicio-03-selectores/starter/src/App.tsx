// ============================================
// ARCHIVO: App.tsx
// Componente principal de la aplicación
// ============================================

import TodoList from './features/todos/TodoList';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>📋 Selectores Memoizados</h1>
        <p>Ejercicio 03 - Redux Toolkit</p>
      </header>

      <main>
        <TodoList />
      </main>
    </div>
  );
};

export default App;
