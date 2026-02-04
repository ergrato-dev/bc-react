import { useState, useEffect } from 'react';
import './App.css';

interface Item {
  id: number;
  name: string;
  description: string;
}

/**
 * Componente principal que muestra items desde la API
 */
const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/items');
        if (!response.ok) throw new Error('Error al obtener items');
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app">
      <header className="header">
        <h1>🐳 Docker Compose Demo</h1>
        <p>Frontend + API + Database</p>
      </header>

      <main className="main">
        <h2>Items desde la API</h2>
        <div className="items">
          {items.map((item) => (
            <div
              key={item.id}
              className="item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="services">
          <span className="badge">Frontend: React</span>
          <span className="badge">API: Node.js</span>
          <span className="badge">DB: PostgreSQL</span>
        </div>
        <p className="success">✅ Docker Compose funcionando</p>
      </footer>
    </div>
  );
};

export default App;
