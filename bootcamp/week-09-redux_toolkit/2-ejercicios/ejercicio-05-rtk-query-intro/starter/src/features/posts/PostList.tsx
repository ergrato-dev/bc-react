// ============================================
// ARCHIVO: PostList.tsx
// Componente que usa RTK Query
// ============================================

import React from 'react';
import { useGetPostsQuery } from '../api/postsApi';

// ============================================
// PASO 4: Usar Hook en Componente
// ============================================
console.log('--- Paso 4: Componente PostList ---');

// Los hooks generados por RTK Query devuelven
// data, isLoading, error, refetch y más.
// Descomenta las siguientes líneas:

// const PostList: React.FC = () => {
//   // El hook ejecuta la query automáticamente al montar
//   const { data: posts, isLoading, error, refetch } = useGetPostsQuery();
//
//   if (isLoading) {
//     return (
//       <div className="loading">
//         <div className="spinner"></div>
//         <p>Cargando posts...</p>
//       </div>
//     );
//   }
//
//   if (error) {
//     return (
//       <div className="error">
//         <p>❌ Error al cargar posts</p>
//         <button onClick={refetch}>Reintentar</button>
//       </div>
//     );
//   }
//
//   return (
//     <div className="posts-container">
//       <div className="posts-header">
//         <h2>📝 Posts ({posts?.length || 0})</h2>
//         <button onClick={refetch} className="refetch-btn">
//           🔄 Refetch
//         </button>
//       </div>
//
//       <div className="posts-list">
//         {posts?.map((post) => (
//           <article key={post.id} className="post-card">
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//             <span className="post-meta">User ID: {post.userId}</span>
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default PostList;

// ============================================
// NOTA: Componente temporal
// ============================================
const PostList: React.FC = () => {
  const { data, isLoading, refetch } = useGetPostsQuery();
  console.log(data, isLoading, refetch);

  return (
    <div className="posts-container">
      <h2>Ejercicio 05: RTK Query</h2>
      <p>Descomenta el código en postsApi.ts y PostList.tsx</p>
    </div>
  );
};

export default PostList;
