// ============================================
// EJERCICIO 05: App con Rutas Protegidas
// ============================================

import { Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from './components/ProtectedRoute';
// import { LoginPage } from './pages/LoginPage';
// import { DashboardPage } from './pages/DashboardPage';
// import { useAuth } from './hooks/useAuth';

const HomePage: React.FC = () => <h2>Home (Pública)</h2>;

const App: React.FC = () => {
  // const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route
        path="/"
        element={<HomePage />}
      />
      {/* <Route path="/login" element={<LoginPage />} /> */}

      {/* PASO 3: Rutas protegidas */}
      {/* Descomenta: */}
      {/* <Route */}
      {/*   element={<ProtectedRoute isAuthenticated={isAuthenticated} />} */}
      {/* > */}
      {/*   <Route path="/dashboard" element={<DashboardPage />} /> */}
      {/* </Route> */}
    </Routes>
  );
};

export default App;
