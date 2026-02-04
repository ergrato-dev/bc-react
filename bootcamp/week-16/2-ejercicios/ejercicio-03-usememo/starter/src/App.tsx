import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>📊 useMemo - Memorizar Cálculos</h1>
      <p>Abre la consola para ver cuándo se ejecutan los cálculos.</p>
      <Dashboard />
    </div>
  );
}

export default App;
