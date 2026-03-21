import { useItems } from './hooks/useItems';
import { ItemList } from './components/ItemList';
import { ItemForm } from './components/ItemForm';

/**
 * Aplicación principal - Gestión de Items
 * Adapta el título y diseño a tu dominio asignado
 */
export const App: React.FC = () => {
  const { items, loading, error, addItem, removeItem } = useItems();

  return (
    <div>
      <h1>Gestión de Items</h1>

      {error && (
        <p
          role="alert"
          style={{ color: 'red' }}>
          {error}
        </p>
      )}

      <section>
        <h2>Crear Nuevo Item</h2>
        <ItemForm onSubmit={addItem} />
      </section>

      <section>
        <h2>Lista de Items</h2>
        <ItemList
          items={items}
          loading={loading}
          onDelete={removeItem}
        />
      </section>
    </div>
  );
};

export default App;
