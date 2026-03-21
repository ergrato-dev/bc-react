// ============================================
// EJERCICIO 04: App con Layouts Anidados
// ============================================

import { Routes, Route } from 'react-router-dom';

// ============================================
// PASO 3: Configurar rutas con layouts
// ============================================

// Descomenta:
// import { MainLayout } from './layouts/MainLayout';
// import { DashboardLayout } from './layouts/DashboardLayout';

const HomePage: React.FC = () => <h2>Home Page</h2>;
const AboutPage: React.FC = () => <h2>About Page</h2>;
const DashboardOverview: React.FC = () => <h2>Dashboard Overview</h2>;
const AnalyticsPage: React.FC = () => <h2>Analytics</h2>;
const SettingsPage: React.FC = () => <h2>Settings</h2>;

const App: React.FC = () => {
  return (
    <Routes>
      {/* PASO 3: Envolver rutas con MainLayout */}
      {/* Descomenta y reemplaza: */}

      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/about"
        element={<AboutPage />}
      />

      {/* <Route element={<MainLayout />}> */}
      {/*   <Route index element={<HomePage />} /> */}
      {/*   <Route path="about" element={<AboutPage />} /> */}
      {/*  */}
      {/*   {/* Dashboard anidado */}
      {/*   <Route path="dashboard" element={<DashboardLayout />}> */}
      {/*     <Route index element={<DashboardOverview />} /> */}
      {/*     <Route path="analytics" element={<AnalyticsPage />} /> */}
      {/*     <Route path="settings" element={<SettingsPage />} /> */}
      {/*   </Route> */}
      {/* </Route> */}
    </Routes>
  );
};

export default App;
