import React, { useState, useEffect } from 'react';

// ============================================
// EJERCICIO: Fetch de Datos con useEffect
// ============================================
// Aprenderás a obtener datos desde APIs usando useEffect

// ============================================
// SECCIÓN 1: Fetch Básico de Usuarios
// ============================================
console.log('--- Sección 1: Fetch Básico ---');

// QUÉ: Interfaces para tipar los datos de la API
// PARA: TypeScript valide la estructura de los datos
// IMPACTO: Previene errores de tipos en tiempo de ejecución

// Descomenta las siguientes líneas:
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   username: string;
// }
//
// export const UserList: React.FC = () => {
//   // QUÉ: Estados para manejar los tres estados de una petición
//   // PARA: Controlar loading, error y datos
//   // IMPACTO: UI refleja correctamente el estado de la petición
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//
//   useEffect(() => {
//     // QUÉ: Función async para hacer fetch
//     // PARA: useEffect no puede ser async directamente
//     // IMPACTO: Permite usar await sin problemas
//     const fetchUsers = async (): Promise<void> => {
//       try {
//         setLoading(true);
//         setError(null);
//
//         // QUÉ: Petición a API pública de prueba
//         // PARA: Obtener lista de usuarios
//         // IMPACTO: Datos reales desde un servidor
//         const response = await fetch(
//           'https://jsonplaceholder.typicode.com/users',
//         );
//
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//
//         const data: User[] = await response.json();
//         setUsers(data);
//         console.log('✅ Usuarios cargados:', data.length);
//       } catch (err) {
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
//   }, []); // ← Array vacío: fetch solo al montar
//
//   // Renderizado condicional según el estado
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
//       <h2>Lista de Usuarios</h2>
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
