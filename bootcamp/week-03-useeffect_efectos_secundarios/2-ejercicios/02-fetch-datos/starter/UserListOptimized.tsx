import React, { useState, useEffect } from 'react';

// ============================================
// SECCIÓN 2: Fetch con AbortController
// ============================================
console.log('--- Sección 2: AbortController ---');

// QUÉ: Versión mejorada con cancelación de peticiones
// PARA: Prevenir memory leaks si el componente se desmonta
// IMPACTO: Más seguro y previene actualizaciones en componente desmontado

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

// Descomenta las siguientes líneas:
// export const UserListOptimized: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//
//   useEffect(() => {
//     // QUÉ: Instancia de AbortController
//     // PARA: Poder cancelar el fetch
//     // IMPACTO: Cleanup puede abortar peticiones en progreso
//     const controller = new AbortController();
//     const signal = controller.signal;
//
//     const fetchUsers = async (): Promise<void> => {
//       try {
//         setLoading(true);
//         setError(null);
//
//         // QUÉ: fetch con signal de AbortController
//         // PARA: Hacer la petición cancelable
//         // IMPACTO: Si cleanup ejecuta, la petición se cancela
//         const response = await fetch(
//           'https://jsonplaceholder.typicode.com/users',
//           { signal }, // ← Pasamos el signal
//         );
//
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//
//         const data: User[] = await response.json();
//
//         // Esta actualización NO ocurrirá si el componente ya se desmontó
//         setUsers(data);
//         console.log('✅ Usuarios cargados (con AbortController)');
//       } catch (err) {
//         // QUÉ: Ignorar errores de abort
//         // PARA: No mostrar error si la cancelación fue intencional
//         // IMPACTO: UX más limpia, no muestra errores al navegar
//         if (err instanceof Error && err.name === 'AbortError') {
//           console.log('🛑 Fetch cancelado');
//           return;
//         }
//
//         const message =
//           err instanceof Error ? err.message : 'Error desconocido';
//         setError(message);
//         console.error('❌ Error:', message);
//       } finally {
//         setLoading(false);
//       }
//     };
//
//     fetchUsers();
//
//     // QUÉ: Cleanup que cancela el fetch
//     // PARA: Abortar petición si componente se desmonta
//     // IMPACTO: Previene memory leak y actualizaciones obsoletas
//     return () => {
//       controller.abort();
//       console.log('🧹 Cleanup: AbortController.abort() llamado');
//     };
//   }, []);
//
//   if (loading) {
//     return <div className="loading">Cargando usuarios...</div>;
//   }
//
//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }
//
//   return (
//     <div className="user-list">
//       <h2>Lista de Usuarios (Optimizada)</h2>
//       <p className="hint">
//         👉 Esta versión usa AbortController para cancelar peticiones
//       </p>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <strong>{user.name}</strong> (@{user.username})
//             <br />
//             <small>{user.email}</small>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

console.log('');
