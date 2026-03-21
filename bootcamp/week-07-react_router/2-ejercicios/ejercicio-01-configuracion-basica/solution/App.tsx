// ============================================
// SOLUCIÓN: Configuración de Routes
// ============================================

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>Mi Primera App con Router</h1>
      </header>

      <main>
        <Routes>
          {/* Ruta principal */}
          <Route
            path="/"
            element={<HomePage />}
          />

          {/* Ruta about */}
          <Route
            path="/about"
            element={<AboutPage />}
          />

          {/* Ruta contact */}
          <Route
            path="/contact"
            element={<ContactPage />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
