// ============================================
// EJERCICIO 04: WEB VITALS - App.tsx (SOLUTION)
// ============================================

import { useState } from 'react';
import { ProblematicPage } from './ProblematicPage';
import { OptimizedPage } from './OptimizedPage';
import { VitalsDisplay } from './VitalsDisplay';
import { reportWebVitals } from './reportWebVitals';

// Configurar reporte de métricas en consola
reportWebVitals(console.log);

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

      {/* Panel de métricas */}
      <VitalsDisplay />

      <main>
        {view === 'problematic' && <ProblematicPage />}
        {view === 'optimized' && <OptimizedPage />}
      </main>
    </div>
  );
}

export default App;
