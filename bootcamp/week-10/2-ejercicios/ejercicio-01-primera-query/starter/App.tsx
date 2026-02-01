// ============================================
// EJERCICIO 01: App Component
// ============================================
import { UserList } from './components/UserList';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>🚀 React Query - Ejercicio 01</h1>
      <p>Primera Query con useQuery</p>
      <hr />
      <UserList />
    </div>
  );
}

export default App;
