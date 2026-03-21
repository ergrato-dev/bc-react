// ============================================
// SOLUCIÓN: App con Navigation integrado
// ============================================

import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';

const HomePage: React.FC = () => <h2>Home Page</h2>;
const AboutPage: React.FC = () => <h2>About Page</h2>;
const ContactPage: React.FC = () => <h2>Contact Page</h2>;

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Navigation siempre visible */}
      <Navigation />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
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
