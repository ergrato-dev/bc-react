import React, { useState, useEffect } from 'react';

// ============================================
// SECCIÓN 3: Fetch con Parámetro Dinámico
// ============================================
console.log('--- Sección 3: Fetch Dinámico ---');

// QUÉ: Fetch que re-ejecuta cuando cambia una dependencia
// PARA: Cargar diferentes datos según un parámetro (postId)
// IMPACTO: UI reactiva que se actualiza automáticamente

// Descomenta las siguientes líneas:
// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }
//
// export const PostViewer: React.FC = () => {
//   const [postId, setPostId] = useState<number>(1);
//   const [post, setPost] = useState<Post | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//
//   useEffect(() => {
//     const controller = new AbortController();
//
//     const fetchPost = async (): Promise<void> => {
//       try {
//         setLoading(true);
//         setError(null);
//
//         console.log(`📡 Fetching post ${postId}...`);
//
//         // QUÉ: URL dinámica que depende de postId
//         // PARA: Cargar el post específico
//         // IMPACTO: Cuando postId cambia, se hace nuevo fetch
//         const response = await fetch(
//           `https://jsonplaceholder.typicode.com/posts/${postId}`,
//           { signal: controller.signal },
//         );
//
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//
//         const data: Post = await response.json();
//         setPost(data);
//         console.log(`✅ Post ${postId} cargado`);
//       } catch (err) {
//         if (err instanceof Error && err.name === 'AbortError') {
//           console.log('🛑 Fetch cancelado');
//           return;
//         }
//
//         const message =
//           err instanceof Error ? err.message : 'Error desconocido';
//         setError(message);
//       } finally {
//         setLoading(false);
//       }
//     };
//
//     fetchPost();
//
//     return () => {
//       controller.abort();
//     };
//   }, [postId]); // ← Depende de postId: re-fetch cuando cambia
//
//   return (
//     <div className="post-viewer">
//       <h2>Visor de Posts</h2>
//
//       <div className="controls">
//         <button
//           onClick={() => setPostId((prev) => Math.max(1, prev - 1))}
//           disabled={postId === 1 || loading}>
//           ← Anterior
//         </button>
//
//         <span className="post-id">Post #{postId}</span>
//
//         <button
//           onClick={() => setPostId((prev) => prev + 1)}
//           disabled={loading}>
//           Siguiente →
//         </button>
//       </div>
//
//       {loading && <div className="loading">Cargando post...</div>}
//
//       {error && <div className="error">Error: {error}</div>}
//
//       {post && !loading && (
//         <article className="post">
//           <h3>{post.title}</h3>
//           <p>{post.body}</p>
//           <small>Usuario ID: {post.userId}</small>
//         </article>
//       )}
//     </div>
//   );
// };

console.log('');
