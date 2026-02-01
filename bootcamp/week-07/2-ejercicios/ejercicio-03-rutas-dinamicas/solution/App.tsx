// ============================================
// SOLUCIÓN: App con Rutas Dinámicas
// ============================================

import { Routes, Route } from 'react-router-dom';
import { ProductListPage } from './pages/ProductListPage';
import { ProductPage } from './pages/ProductPage';

const HomePage: React.FC = () => <h2>Home</h2>;

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Lista de productos */}
        <Route
          path="/products"
          element={<ProductListPage />}
        />

        {/* Detalle de producto - :productId es un parámetro dinámico */}
        <Route
          path="/products/:productId"
          element={<ProductPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
