// ============================================
// EJERCICIO 01: Componente UserList
// ============================================
import { useUsers } from '../hooks/useUsers';

// PASO 4: Implementar el componente que usa la query
// Descomenta el siguiente componente:

export const UserList: React.FC = () => {
  // Usar el custom hook
  const { data: users, isLoading, isError, error } = useUsers();

  // Por ahora, solo muestra un placeholder
  // Reemplaza este return con el código comentado abajo
  return <p>Implementa el componente descomentando el código</p>;

  // DESCOMENTA DESDE AQUÍ:
  // // Estado de carga
  // if (isLoading) {
  //   return (
  //     <div style={{ padding: '1rem', color: '#888' }}>
  //       ⏳ Cargando usuarios...
  //     </div>
  //   );
  // }
  //
  // // Estado de error
  // if (isError) {
  //   return (
  //     <div style={{ padding: '1rem', color: '#ef4444' }}>
  //       ❌ Error: {error?.message || 'Error desconocido'}
  //     </div>
  //   );
  // }
  //
  // // Estado de éxito
  // return (
  //   <div>
  //     <h2>👥 Lista de Usuarios ({users?.length})</h2>
  //     <ul style={{ listStyle: 'none', padding: 0 }}>
  //       {users?.map((user) => (
  //         <li
  //           key={user.id}
  //           style={{
  //             padding: '1rem',
  //             margin: '0.5rem 0',
  //             backgroundColor: '#2d2d2d',
  //             borderRadius: '8px',
  //             border: '1px solid #444',
  //           }}
  //         >
  //           <strong>{user.name}</strong>
  //           <br />
  //           <span style={{ color: '#888' }}>{user.email}</span>
  //           <span
  //             style={{
  //               marginLeft: '1rem',
  //               padding: '0.25rem 0.5rem',
  //               backgroundColor: user.role === 'admin' ? '#10b981' : '#3178C6',
  //               borderRadius: '4px',
  //               fontSize: '0.8rem',
  //             }}
  //           >
  //             {user.role}
  //           </span>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  // HASTA AQUÍ
};
