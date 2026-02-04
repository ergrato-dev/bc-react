// ============================================
// EJERCICIO 01: LAZY LOADING - App.tsx (STARTER)
// ============================================
// Este archivo demuestra cómo implementar lazy loading
// con React.lazy y Suspense.

import { useState } from 'react';
// Importaciones estáticas tradicionales
// import HeavyChart from './HeavyChart';
// import HeavyTable from './HeavyTable';
import { LoadingFallback } from './LoadingFallback';

// ============================================
// PASO 1: Importar lazy y Suspense de React
// ============================================
console.log('--- Paso 1: Importar lazy y Suspense ---');

// Descomenta la siguiente línea:
// import { lazy, Suspense } from 'react';

// ============================================
// PASO 2: Convertir importaciones a lazy
// ============================================
console.log('--- Paso 2: Convertir a lazy ---');

// React.lazy permite cargar componentes dinámicamente
// Solo se descargará el código cuando se necesite renderizar

// Descomenta las siguientes líneas:
// const HeavyChart = lazy(() => import('./HeavyChart'));
// const HeavyTable = lazy(() => import('./HeavyTable'));

// ============================================
// PASO 3: Simular delay para ver el loading (opcional)
// ============================================
console.log('--- Paso 3: Simular delay (desarrollo) ---');

// Para ver claramente el loading state, podemos agregar un delay artificial
// Esto es solo para desarrollo, NO usar en producción

// Descomenta para ver el efecto:
// const HeavyChart = lazy(() =>
//   new Promise(resolve => setTimeout(resolve, 2000))
//     .then(() => import('./HeavyChart'))
// );

// const HeavyTable = lazy(() =>
//   new Promise(resolve => setTimeout(resolve, 1500))
//     .then(() => import('./HeavyTable'))
// );

console.log('');

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

      {/* ============================================ */}
      {/* PASO 4: Envolver componentes lazy en Suspense */}
      {/* ============================================ */}
      {/* 
        Suspense muestra el fallback mientras el componente
        lazy se está cargando.
        
        Descomenta el bloque de Suspense:
      */}

      {showChart && (
        // Sin Suspense (causará error con lazy):
        // <HeavyChart />

        // Con Suspense (descomenta):
        // <Suspense fallback={<LoadingFallback name="Gráfico" />}>
        //   <HeavyChart />
        // </Suspense>

        // Placeholder temporal (eliminar cuando implementes lazy):
        <div className="placeholder">
          <p>Aquí irá el componente HeavyChart con lazy loading</p>
        </div>
      )}

      {showTable && (
        // Sin Suspense (causará error con lazy):
        // <HeavyTable />

        // Con Suspense (descomenta):
        // <Suspense fallback={<LoadingFallback name="Tabla" />}>
        //   <HeavyTable />
        // </Suspense>

        // Placeholder temporal (eliminar cuando implementes lazy):
        <div className="placeholder">
          <p>Aquí irá el componente HeavyTable con lazy loading</p>
        </div>
      )}

      {/* ============================================ */}
      {/* PASO 5: Múltiples componentes en un Suspense */}
      {/* ============================================ */}
      {/*
        Puedes envolver múltiples componentes lazy en un solo Suspense.
        Esto mostrará el fallback hasta que TODOS carguen.
        
        Ejemplo (descomenta si quieres probar):
      */}
      {/* 
      <Suspense fallback={<LoadingFallback name="Contenido" />}>
        {showChart && <HeavyChart />}
        {showTable && <HeavyTable />}
      </Suspense>
      */}
    </div>
  );
}

export default App;
