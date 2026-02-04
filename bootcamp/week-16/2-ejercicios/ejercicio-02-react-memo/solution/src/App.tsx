import { ProductDashboard } from './components/ProductDashboard';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>🛒 React.memo - Lista de Productos</h1>
      <p>Abre la consola para ver los renders.</p>
      <ProductDashboard />
    </div>
  );
}

export default App;
