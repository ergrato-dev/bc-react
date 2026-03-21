import { PostList } from './components/PostList';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>🚀 React Query - Ejercicio 05</h1>
      <p>Infinite Queries (Paginación Infinita)</p>
      <hr />
      <PostList />
    </div>
  );
};

export default App;
