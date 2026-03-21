// ============================================
// EJERCICIO 01: LAZY LOADING - App.tsx (SOLUTION)
// ============================================
// Implementación completa de lazy loading con React.lazy y Suspense

import { lazy, Suspense, useState } from 'react';
import { LoadingFallback } from './LoadingFallback';
import ErrorBoundary from './ErrorBoundary';

// ============================================
// LAZY IMPORTS
// ============================================
// React.lazy convierte las importaciones estáticas en dinámicas
// Cada componente se convierte en un chunk separado

const HeavyChart = lazy(() => import('./HeavyChart'));
const HeavyTable = lazy(() => import('./HeavyTable'));

// Versión con delay artificial para ver el loading (solo desarrollo)
// const HeavyChart = lazy(() =>
//   new Promise(resolve => setTimeout(resolve, 2000))
//     .then(() => import('./HeavyChart'))
// );

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
function App() {
  const [showChart, setShowChart] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="app">
      <h1>Lazy Loading Demo</h1>

      <div className="controls">
        <button onClick={() => setShowChart(!showChart)}>
          {showChart ? 'Ocultar' : 'Mostrar'} Gráfico
        </button>
        <button onClick={() => setShowTable(!showTable)}>
          {showTable ? 'Ocultar' : 'Mostrar'} Tabla
        </button>
      </div>

      {/* Cada componente lazy en su propio Suspense para loading independiente */}
      {showChart && (
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback name="Gráfico" />}>
            <HeavyChart />
          </Suspense>
        </ErrorBoundary>
      )}

      {showTable && (
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback name="Tabla" />}>
            <HeavyTable />
          </Suspense>
        </ErrorBoundary>
      )}

      {/* Información para verificar code splitting */}
      <div className="info">
        <h3>Verificar Code Splitting</h3>
        <ol>
          <li>Abre DevTools → Network</li>
          <li>Filtra por JS</li>
          <li>Haz clic en "Mostrar Gráfico"</li>
          <li>Observa un nuevo archivo .js cargando</li>
          <li>Haz clic en "Mostrar Tabla"</li>
          <li>Observa otro archivo .js cargando</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
