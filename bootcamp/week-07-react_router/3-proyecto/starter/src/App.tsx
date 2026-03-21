// ============================================
// PROYECTO SEMANA 07: Configuración de Rutas
// ============================================
// TODO: Adapta este archivo a tu dominio asignado

import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { HomePage } from './pages/HomePage';
import { ItemListPage } from './pages/ItemListPage';
import { ItemDetailPage } from './pages/ItemDetailPage';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useAuth } from './hooks/useAuth';

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Layout principal envuelve todas las rutas */}
      <Route element={<MainLayout />}>
        {/* Rutas públicas */}
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="about"
          element={<AboutPage />}
        />
        <Route
          path="login"
          element={<LoginPage />}
        />

        {/* TODO: Renombra "items" según tu dominio (books, products, classes, etc.) */}
        <Route
          path="items"
          element={<ItemListPage />}
        />
        <Route
          path="items/:itemId"
          element={<ItemDetailPage />}
        />

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route
            path="dashboard"
            element={<DashboardPage />}
          />
        </Route>

        {/* 404 - Catch all */}
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
};

export default App;
