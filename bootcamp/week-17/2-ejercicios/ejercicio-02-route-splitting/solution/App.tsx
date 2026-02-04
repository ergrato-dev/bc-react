// ============================================
// EJERCICIO 02: ROUTE SPLITTING - App.tsx (SOLUTION)
// ============================================
// Implementación completa de code splitting por rutas

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { PageLoader } from './components/PageLoader';

// ============================================
// LAZY IMPORTS POR RUTA
// ============================================
// Cada página se convierte en un chunk separado
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));

// ============================================
// COMPONENTE APP
// ============================================
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/products"
              element={<Products />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
              path="/settings"
              element={<Settings />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
