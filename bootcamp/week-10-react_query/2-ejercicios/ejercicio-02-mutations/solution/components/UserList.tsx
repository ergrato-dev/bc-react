// SOLUCIÓN: Lista de Usuarios con Delete
import { useUsers } from '../hooks/useUsers';
import { useDeleteUser } from '../hooks/useDeleteUser';

export const UserList: React.FC = () => {
  const { data: users, isLoading, isError, error } = useUsers();
  const deleteMutation = useDeleteUser();

  if (isLoading) {
    return <div>⏳ Cargando usuarios...</div>;
  }

  if (isError) {
    return <div style={{ color: '#ef4444' }}>❌ Error: {error?.message}</div>;
  }

  return (
    <div>
      <h3>👥 Usuarios ({users?.length})</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users?.map((user) => (
          <li
            key={user.id}
            style={{
              padding: '1rem',
              margin: '0.5rem 0',
              backgroundColor: '#2d2d2d',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <div>
              <strong>{user.name}</strong>
              <br />
              <span style={{ color: '#888' }}>{user.email}</span>
            </div>
            <button
              onClick={() => deleteMutation.mutate(user.id)}
              disabled={deleteMutation.isPending}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#ef4444',
                border: 'none',
                borderRadius: '4px',
                color: '#fff',
                cursor: 'pointer',
              }}>
              🗑️ Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
