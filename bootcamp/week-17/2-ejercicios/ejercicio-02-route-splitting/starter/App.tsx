// ============================================
// EJERCICIO 02: ROUTE SPLITTING - App.tsx (STARTER)
// ============================================
// Implementa code splitting por rutas con React Router

// ============================================
// PASO 1: Importar lo necesario
// ============================================
console.log('--- Paso 1: Imports ---');

// Importaciones estáticas (ANTES)
// import Home from './pages/Home';
// import Products from './pages/Products';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';

// Descomenta para usar lazy loading:
// import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { PageLoader } from './components/PageLoader';

// ============================================
// PASO 2: Convertir páginas a lazy
// ============================================
console.log('--- Paso 2: Lazy imports ---');

// React.lazy para cada página
// Cada import() crea un chunk separado

// Descomenta las siguientes líneas:
// const Home = lazy(() => import('./pages/Home'));
// const Products = lazy(() => import('./pages/Products'));
// const Profile = lazy(() => import('./pages/Profile'));
// const Settings = lazy(() => import('./pages/Settings'));

// ============================================
// PASO 3: Lazy con delay para ver el loading (desarrollo)
// ============================================
console.log('--- Paso 3: Lazy con delay ---');

// Para ver el loading state claramente:
// const Home = lazy(() =>
//   new Promise(resolve => setTimeout(resolve, 500))
//     .then(() => import('./pages/Home'))
// );

console.log('');

// ============================================
// COMPONENTE APP
// ============================================
function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* ============================================ */}
        {/* PASO 4: Envolver Routes en Suspense */}
        {/* ============================================ */}
        {/* 
          El Suspense debe envolver las rutas para mostrar
          el PageLoader mientras carga la página.
          
          Descomenta el Suspense:
        */}

        {/* Sin Suspense (causará error con lazy): */}
        <Routes>
          {/* Placeholder routes - reemplazar con lazy */}
          <Route
            path="/"
            element={<div>Home (implementar lazy)</div>}
          />
          <Route
            path="/products"
            element={<div>Products (implementar lazy)</div>}
          />
          <Route
            path="/profile"
            element={<div>Profile (implementar lazy)</div>}
          />
          <Route
            path="/settings"
            element={<div>Settings (implementar lazy)</div>}
          />
        </Routes>

        {/* Con Suspense (descomenta): */}
        {/* 
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
        */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
