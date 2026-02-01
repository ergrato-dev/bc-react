// ============================================
// ARCHIVO: App.tsx
// Componente principal de la aplicación
// ============================================

import PostList from './features/posts/PostList';

function App() {
  return (
    <div className="app">
      <header>
        <h1>⚡ RTK Query</h1>
        <p>Ejercicio 05 - Redux Toolkit</p>
      </header>

      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
