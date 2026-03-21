import { TodoList } from './components/TodoList';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>🚀 React Query - Ejercicio 04</h1>
      <p>Optimistic Updates</p>
      <hr />
      <TodoList />
    </div>
  );
};

export default App;
