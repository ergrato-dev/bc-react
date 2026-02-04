import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>🔍 Detectar Renders Innecesarios</h1>
      <p>Abre la consola del navegador (F12) para ver los logs de render.</p>
      <Dashboard />
    </div>
  );
}

export default App;
