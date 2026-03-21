import { TodoApp } from './components/TodoApp';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1>📝 useCallback - Todo List</h1>
      <p>Abre la consola para ver qué componentes renderizan.</p>
      <TodoApp />
    </div>
  );
}

export default App;
