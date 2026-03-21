import { useState, useEffect } from 'react';

// ============================================
// SECCIÓN 4: Custom Hook para Fetch
// ============================================
console.log('--- Sección 4: Custom Hook ---');

// QUÉ: Hook genérico reutilizable para fetch
// PARA: Evitar duplicar lógica de fetch en múltiples componentes
// IMPACTO: Código DRY, más mantenible, tipado con generics

// Descomenta las siguientes líneas:
// interface UseFetchResult<T> {
//   data: T | null;
//   loading: boolean;
//   error: string | null;
//   refetch: () => void;
// }
//
// /**
//  * QUÉ: Custom hook para fetch de datos con TypeScript generics
//  * PARA: Reutilizar lógica de fetch en cualquier componente
//  * IMPACTO: Menos código duplicado, más consistencia
//  *
//  * @param url - URL del endpoint a consultar
//  * @returns Objeto con data, loading, error y función refetch
//  *
//  * @example
//  * const { data, loading, error } = useFetch<User[]>('/api/users');
//  */
// export const useFetch = <T,>(url: string): UseFetchResult<T> => {
//   const [data, setData] = useState<T | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [refetchTrigger, setRefetchTrigger] = useState<number>(0);
//
//   useEffect(() => {
//     const controller = new AbortController();
//
//     const fetchData = async (): Promise<void> => {
//       try {
//         setLoading(true);
//         setError(null);
//
//         console.log(`📡 useFetch: fetching ${url}`);
//
//         const response = await fetch(url, { signal: controller.signal });
//
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//
//         // QUÉ: Cast del JSON a tipo genérico T
//         // PARA: TypeScript valide el tipo de retorno
//         // IMPACTO: Type safety en el componente que usa el hook
//         const result: T = await response.json();
//         setData(result);
//         console.log('✅ useFetch: data loaded');
//       } catch (err) {
//         if (err instanceof Error && err.name === 'AbortError') {
//           console.log('🛑 useFetch: aborted');
//           return;
//         }
//
//         const message =
//           err instanceof Error ? err.message : 'Error desconocido';
//         setError(message);
//         console.error('❌ useFetch error:', message);
//       } finally {
//         setLoading(false);
//       }
//     };
//
//     fetchData();
//
//     return () => {
//       controller.abort();
//     };
//   }, [url, refetchTrigger]); // Re-fetch si URL cambia o se llama refetch()
//
//   // QUÉ: Función para forzar un re-fetch
//   // PARA: Permitir recargar datos manualmente
//   // IMPACTO: Útil para botones de "Recargar" o después de mutaciones
//   const refetch = (): void => {
//     setRefetchTrigger((prev) => prev + 1);
//   };
//
//   return { data, loading, error, refetch };
// };

console.log('');

// ============================================
// EJEMPLO DE USO del hook useFetch
// ============================================

// Descomenta para ver ejemplo de uso:
// import React from 'react';
//
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
//
// export const UserListWithHook: React.FC = () => {
//   // QUÉ: Uso del custom hook con tipo genérico
//   // PARA: Obtener usuarios sin escribir lógica de fetch
//   // IMPACTO: Código más limpio y reutilizable
//   const { data: users, loading, error, refetch } = useFetch<User[]>(
//     'https://jsonplaceholder.typicode.com/users',
//   );
//
//   if (loading) return <div>Cargando...</div>;
//   if (error) return <div>Error: {error}</div>;
//
//   return (
//     <div>
//       <button onClick={refetch}>🔄 Recargar</button>
//       <ul>
//         {users?.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
