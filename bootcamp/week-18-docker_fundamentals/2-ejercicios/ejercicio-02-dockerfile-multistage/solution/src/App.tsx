import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

/**
 * Página principal
 */
const Home = () => (
  <div className="page">
    <h1>🐳 React + Docker</h1>
    <p>Aplicación React servida desde un contenedor Docker</p>
    <div className="badges">
      <span className="badge">React 18</span>
      <span className="badge">TypeScript</span>
      <span className="badge">Vite</span>
      <span className="badge">Docker</span>
    </div>
  </div>
);

/**
 * Página About
 */
const About = () => (
  <div className="page">
    <h1>📖 Acerca de</h1>
    <p>Esta aplicación demuestra:</p>
    <ul>
      <li>Dockerfile multi-stage build</li>
      <li>Nginx como servidor de producción</li>
      <li>Routing SPA con React Router</li>
      <li>Configuración optimizada</li>
    </ul>
  </div>
);

/**
 * Componente principal de la aplicación
 */
const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <Link
          to="/"
          className="nav-link">
          Inicio
        </Link>
        <Link
          to="/about"
          className="nav-link">
          Acerca de
        </Link>
      </nav>

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </main>

      <footer className="footer">
        <p>Bootcamp React - Semana 18: Docker ✅</p>
      </footer>
    </div>
  );
};

export default App;
