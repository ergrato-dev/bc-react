import { useState, useCallback } from 'react';
import { ItemList } from './components/ItemList';
import { ItemDetail } from './components/ItemDetail';
import { ItemForm } from './components/ItemForm';
import { SearchFilter } from './components/SearchFilter';

type View = 'list' | 'detail' | 'create';

const App: React.FC = () => {
  const [view, setView] = useState<View>('list');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const handleSelectItem = (id: number) => {
    setSelectedId(id);
    setView('detail');
  };

  const handleBack = () => {
    setSelectedId(null);
    setView('list');
  };

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    setCategory(value);
  }, []);

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
      <h1>🚀 Proyecto Semana 10 - React Query</h1>
      <p>Gestor de Elementos (adaptar a tu dominio)</p>
      <hr />

      {view === 'list' && (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <button onClick={() => setView('create')}>+ Crear Nuevo</button>
          </div>

          <SearchFilter
            onSearchChange={handleSearchChange}
            onCategoryChange={handleCategoryChange}
          />

          <ItemList
            search={search}
            category={category}
            onSelectItem={handleSelectItem}
          />
        </>
      )}

      {view === 'detail' && selectedId && (
        <ItemDetail
          itemId={selectedId}
          onBack={handleBack}
        />
      )}

      {view === 'create' && <ItemForm onClose={handleBack} />}
    </div>
  );
};

export default App;
