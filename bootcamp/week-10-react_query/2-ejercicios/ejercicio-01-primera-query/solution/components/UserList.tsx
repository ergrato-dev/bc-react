// ============================================
// SOLUCIÓN: Componente UserList
// ============================================
import { useUsers } from '../hooks/useUsers';

export const UserList: React.FC = () => {
  const { data: users, isLoading, isError, error } = useUsers();

  // Estado de carga
  if (isLoading) {
    return (
      <div style={{ padding: '1rem', color: '#888' }}>
        ⏳ Cargando usuarios...
      </div>
    );
  }

  // Estado de error
  if (isError) {
    return (
      <div style={{ padding: '1rem', color: '#ef4444' }}>
        ❌ Error: {error?.message || 'Error desconocido'}
      </div>
    );
  }

  // Estado de éxito
  return (
    <div>
      <h2>👥 Lista de Usuarios ({users?.length})</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users?.map((user) => (
          <li
            key={user.id}
            style={{
              padding: '1rem',
              margin: '0.5rem 0',
              backgroundColor: '#2d2d2d',
              borderRadius: '8px',
              border: '1px solid #444',
            }}>
            <strong>{user.name}</strong>
            <br />
            <span style={{ color: '#888' }}>{user.email}</span>
            <span
              style={{
                marginLeft: '1rem',
                padding: '0.25rem 0.5rem',
                backgroundColor: user.role === 'admin' ? '#10b981' : '#3178C6',
                borderRadius: '4px',
                fontSize: '0.8rem',
              }}>
              {user.role}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
