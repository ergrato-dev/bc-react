// ============================================
// EJERCICIO 03: App con Rutas Dinámicas
// ============================================

import { Routes, Route } from 'react-router-dom';

// ============================================
// PASO 1: Importar las páginas
// ============================================

// Descomenta:
// import { ProductListPage } from './pages/ProductListPage';
// import { ProductPage } from './pages/ProductPage';

const HomePage: React.FC = () => <h2>Home</h2>;

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* PASO 2: Agregar rutas dinámicas */}
        {/* Descomenta: */}
        {/* <Route path="/products" element={<ProductListPage />} /> */}
        {/* <Route path="/products/:productId" element={<ProductPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;
