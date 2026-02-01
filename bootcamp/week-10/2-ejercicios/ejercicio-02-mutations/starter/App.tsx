import { UserForm } from './components/UserForm';
import { UserList } from './components/UserList';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>🚀 React Query - Ejercicio 02</h1>
      <p>Mutations con useMutation</p>
      <hr />
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
