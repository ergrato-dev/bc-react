// ============================================
// EJERCICIO 04: WEB VITALS - App.tsx (STARTER)
// ============================================

import { useState } from 'react';
// import { ProblematicPage } from './ProblematicPage';
// import { OptimizedPage } from './OptimizedPage';
// import { VitalsDisplay } from './VitalsDisplay';

// ============================================
// PASO 1: Importar reportWebVitals
// ============================================
console.log('--- Paso 1: Importar web vitals ---');

// Descomenta:
// import { reportWebVitals } from './reportWebVitals';

// ============================================
// PASO 2: Configurar reporte
// ============================================
console.log('--- Paso 2: Configurar reporte ---');

// Descomenta para iniciar medición:
// reportWebVitals(console.log);

// ============================================
// COMPONENTE APP
// ============================================
function App() {
  const [view, setView] = useState<'problematic' | 'optimized'>('problematic');

  return (
    <div className="app">
      <header>
        <h1>Web Vitals Demo</h1>

        <div className="controls">
          <button
            onClick={() => setView('problematic')}
            className={view === 'problematic' ? 'active' : ''}>
            Página Problemática
          </button>
          <button
            onClick={() => setView('optimized')}
            className={view === 'optimized' ? 'active' : ''}>
            Página Optimizada
          </button>
        </div>
      </header>

      {/* ============================================ */}
      {/* PASO 3: Mostrar métricas */}
      {/* ============================================ */}
      {/* Descomenta: */}
      {/* <VitalsDisplay /> */}

      <main>
        {/* ============================================ */}
        {/* PASO 4: Renderizar páginas */}
        {/* ============================================ */}
        {/* Descomenta: */}
        {/* 
        {view === 'problematic' && <ProblematicPage />}
        {view === 'optimized' && <OptimizedPage />}
        */}

        {/* Placeholder */}
        <div className="placeholder">
          <p>Implementa las páginas y descomentar el código arriba.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
