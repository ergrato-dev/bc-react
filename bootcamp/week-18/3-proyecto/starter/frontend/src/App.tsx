import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

/**
 * NOTA PARA EL APRENDIZ:
 * Esta aplicación es genérica. Debes adaptarla a tu dominio asignado.
 * Cambia "Item" por la entidad de tu dominio (Libro, Medicamento, etc.)
 */

interface Item {
  id: number;
  name: string;
  description: string;
  // TODO: Agregar propiedades específicas de tu dominio
}

/**
 * Página principal - Lista de items
 */
const HomePage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <div className="page">
      <h1>🏠 Gestión de [Tu Dominio]</h1>
      <p>Bienvenido al sistema de gestión</p>

      <div className="items-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * Página About
 */
const AboutPage = () => (
  <div className="page">
    <h1>📖 Acerca de</h1>
    <p>
      Esta aplicación fue containerizada con Docker como parte del proyecto de
      la Semana 18 del Bootcamp React.
    </p>
    <ul>
      <li>Dockerfile multi-stage</li>
      <li>Nginx para producción</li>
      <li>Docker Compose para orquestación</li>
      <li>PostgreSQL para persistencia</li>
    </ul>
  </div>
);

/**
 * Componente principal
 */
const App = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">🐳 Mi App Docker</div>
        <div className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/about">Acerca de</Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
        </Routes>
      </main>

      <footer className="footer">
        <p>Bootcamp React - Semana 18: Docker</p>
      </footer>
    </div>
  );
};

export default App;
