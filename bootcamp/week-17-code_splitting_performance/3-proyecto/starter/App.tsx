// ============================================
// PROYECTO WEEK-17: App.tsx (STARTER)
// ============================================

// import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Layout } from './components/Layout';
// import { PageLoader } from './components/PageLoader';
// import { ErrorBoundary } from './components/ErrorBoundary';

// ============================================
// TODO 1: LAZY LOADING DE PÁGINAS
// ============================================
// Importa las páginas usando React.lazy para code splitting
// Ejemplo:
// const Dashboard = lazy(() => import('./pages/Dashboard'));
// const ItemList = lazy(() => import('./pages/ItemList'));
// const ItemDetail = lazy(() => import('./pages/ItemDetail'));

// ============================================
// COMPONENTE APP
// ============================================
function App() {
  return (
    <BrowserRouter>
      {/* TODO 2: Envolver con ErrorBoundary */}
      {/* <ErrorBoundary> */}

      {/* TODO 3: Usar Layout como contenedor */}
      {/* <Layout> */}

      {/* TODO 4: Envolver Routes con Suspense */}
      {/* <Suspense fallback={<PageLoader />}> */}

      <Routes>
        {/* TODO 5: Definir rutas lazy */}
        {/* <Route path="/" element={<Dashboard />} /> */}
        {/* <Route path="/items" element={<ItemList />} /> */}
        {/* <Route path="/items/:id" element={<ItemDetail />} /> */}

        {/* Placeholder */}
        <Route
          path="*"
          element={
            <div style={{ padding: '20px' }}>
              <h1>App Performance - Proyecto Week 17</h1>
              <p>Implementa el código en App.tsx siguiendo los TODOs.</p>
            </div>
          }
        />
      </Routes>

      {/* </Suspense> */}
      {/* </Layout> */}
      {/* </ErrorBoundary> */}
    </BrowserRouter>
  );
}

export default App;
