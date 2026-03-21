// ============================================
// ARCHIVO: App.tsx
// Componente principal de la aplicación
// ============================================

import ProductList from './features/products/ProductList';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>📦 Entity Adapter</h1>
        <p>Ejercicio 04 - Redux Toolkit</p>
      </header>

      <main>
        <ProductList />
      </main>
    </div>
  );
};

export default App;
