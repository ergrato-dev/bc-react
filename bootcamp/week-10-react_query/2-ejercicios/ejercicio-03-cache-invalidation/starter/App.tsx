import { useState } from 'react';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>🚀 React Query - Ejercicio 03</h1>
      <p>Cache e Invalidación</p>
      <hr />
      {selectedId ? (
        <ProductDetail
          productId={selectedId}
          onBack={() => setSelectedId(null)}
        />
      ) : (
        <ProductList onSelect={setSelectedId} />
      )}
    </div>
  );
};

export default App;
