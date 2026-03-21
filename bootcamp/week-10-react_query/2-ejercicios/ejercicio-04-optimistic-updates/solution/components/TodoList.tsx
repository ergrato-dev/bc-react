import { useTodos } from '../hooks/useTodos';
import { useToggleTodo } from '../hooks/useToggleTodo';

export const TodoList: React.FC = () => {
  const { data: todos, isLoading, error } = useTodos();
  const toggleMutation = useToggleTodo();

  if (isLoading) return <div>Cargando todos...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>📝 Lista de Tareas</h2>
      <p style={{ fontSize: '0.9rem', color: '#888' }}>
        Click en un todo para toggle (20% de probabilidad de error)
      </p>

      {toggleMutation.error && (
        <div style={{ color: '#ef4444', marginBottom: '1rem' }}>
          ⚠️ {toggleMutation.error.message}
        </div>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos?.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleMutation.mutate(todo.id)}
            style={{
              padding: '1rem',
              margin: '0.5rem 0',
              backgroundColor: '#2d2d2d',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              opacity: toggleMutation.isPending ? 0.7 : 1,
            }}>
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
              style={{ width: '1.2rem', height: '1.2rem' }}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#888' : '#fff',
              }}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
