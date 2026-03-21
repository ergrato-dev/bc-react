// ============================================
// EJERCICIO 03: App de demostración
// Hooks con efectos: useFetch + useDebounce
// ============================================

import React from 'react';
// import { useFetch } from './useFetch';
// import { useDebounce } from './useDebounce';

// Placeholder
const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Ejercicio 03: Hooks con Efectos</h1>
      <p>
        Descomenta el código en los archivos starter para ver los resultados.
      </p>
    </div>
  );
};

// ============================================
// PASO 3: Implementar FetchDemo
// ============================================

// Descomenta:
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
//
// const FetchDemo: React.FC = () => {
//   const { data, loading, error, refetch } = useFetch<User[]>(
//     'https://jsonplaceholder.typicode.com/users'
//   );
//
//   if (loading) return <div>Cargando...</div>;
//   if (error) return <div>Error: {error.message}</div>;
//
//   return (
//     <div>
//       <h2>useFetch Demo</h2>
//       <button onClick={refetch}>Recargar</button>
//       <ul>
//         {data?.slice(0, 5).map(user => (
//           <li key={user.id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// ============================================
// PASO 4: Implementar DebounceDemo
// ============================================

// Descomenta:
// const DebounceDemo: React.FC = () => {
//   const [searchTerm, setSearchTerm] = React.useState('');
//   const debouncedSearch = useDebounce(searchTerm, 500);
//
//   return (
//     <div>
//       <h2>useDebounce Demo</h2>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Escribe algo..."
//       />
//       <p><strong>Valor actual:</strong> {searchTerm}</p>
//       <p><strong>Valor debounced:</strong> {debouncedSearch}</p>
//       <p style={{ color: '#666' }}>
//         El valor debounced se actualiza 500ms después de dejar de escribir
//       </p>
//     </div>
//   );
// };

// ============================================
// PASO 5: Combinar ambos demos
// ============================================

// Descomenta y usa como App principal:
// const AppFinal: React.FC = () => {
//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h1>Ejercicio 03: Hooks con Efectos</h1>
//       <hr />
//       <FetchDemo />
//       <hr />
//       <DebounceDemo />
//     </div>
//   );
// };

export default App;
// export default AppFinal; // ← Cambia cuando completes
