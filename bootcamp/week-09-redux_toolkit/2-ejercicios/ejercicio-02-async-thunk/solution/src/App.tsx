// ============================================
// ARCHIVO: App.tsx
// Componente principal de la aplicación
// ============================================

import UsersList from './features/users/UsersList';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>🔄 Async Thunk</h1>
        <p>Ejercicio 02 - Redux Toolkit (Solución)</p>
      </header>

      <main>
        <UsersList />
      </main>
    </div>
  );
};

export default App;
