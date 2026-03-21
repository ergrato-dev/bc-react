// ============================================
// EJERCICIO 04: App de demostración
// Hooks genéricos: useLocalStorage + useAsync
// ============================================

import React from 'react';
// import { useLocalStorage } from './useLocalStorage';
// import { useAsync } from './useAsync';

// Placeholder
const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Ejercicio 04: Hooks Genéricos</h1>
      <p>
        Descomenta el código en los archivos starter para ver los resultados.
      </p>
    </div>
  );
};

// ============================================
// PASO 4: Demo de useLocalStorage
// ============================================

// Descomenta:
// interface UserPreferences {
//   theme: 'light' | 'dark';
//   fontSize: number;
//   language: string;
// }
//
// const LocalStorageDemo: React.FC = () => {
//   // Hook con string
//   const { value: name, setValue: setName, removeValue: removeName } =
//     useLocalStorage<string>('user-name', '');
//
//   // Hook con objeto tipado
//   const { value: prefs, setValue: setPrefs } =
//     useLocalStorage<UserPreferences>('user-prefs', {
//       theme: 'dark',
//       fontSize: 16,
//       language: 'es'
//     });
//
//   return (
//     <div>
//       <h2>useLocalStorage Demo</h2>
//
//       <div style={{ marginBottom: '1rem' }}>
//         <label>Nombre: </label>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Tu nombre"
//         />
//         <button onClick={removeName}>Limpiar</button>
//       </div>
//
//       <div>
//         <label>Tema: </label>
//         <select
//           value={prefs.theme}
//           onChange={(e) => setPrefs(p => ({
//             ...p,
//             theme: e.target.value as 'light' | 'dark'
//           }))}
//         >
//           <option value="light">Claro</option>
//           <option value="dark">Oscuro</option>
//         </select>
//       </div>
//
//       <pre>{JSON.stringify({ name, prefs }, null, 2)}</pre>
//     </div>
//   );
// };

// ============================================
// PASO 5: Demo de useAsync
// ============================================

// Descomenta:
// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }
//
// const fetchPost = async (id: number): Promise<Post> => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   if (!response.ok) throw new Error('Post no encontrado');
//   return response.json();
// };
//
// const AsyncDemo: React.FC = () => {
//   const [postId, setPostId] = React.useState(1);
//   const { data, isLoading, isError, error, execute, reset } =
//     useAsync(fetchPost);
//
//   return (
//     <div>
//       <h2>useAsync Demo</h2>
//
//       <input
//         type="number"
//         value={postId}
//         onChange={(e) => setPostId(Number(e.target.value))}
//         min="1"
//         max="100"
//       />
//       <button onClick={() => execute(postId)}>Cargar Post</button>
//       <button onClick={reset}>Reset</button>
//
//       {isLoading && <p>Cargando...</p>}
//       {isError && <p style={{ color: 'red' }}>Error: {error?.message}</p>}
//       {data && (
//         <div>
//           <h3>{data.title}</h3>
//           <p>{data.body}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// ============================================
// PASO 6: App completa
// ============================================

// Descomenta y usa como App principal:
// const AppFinal: React.FC = () => {
//   return (
//     <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h1>Ejercicio 04: Hooks Genéricos</h1>
//       <hr />
//       <LocalStorageDemo />
//       <hr />
//       <AsyncDemo />
//     </div>
//   );
// };

export default App;
// export default AppFinal; // ← Cambia cuando completes
