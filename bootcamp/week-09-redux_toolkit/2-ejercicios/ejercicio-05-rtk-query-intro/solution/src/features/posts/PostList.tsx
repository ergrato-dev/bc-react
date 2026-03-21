// ============================================
// ARCHIVO: PostList.tsx
// Componente que usa RTK Query
// SOLUCIÓN COMPLETA
// ============================================

import React, { useState } from 'react';
import { useGetPostsQuery, useAddPostMutation } from '../api/postsApi';

const PostList: React.FC = () => {
  // El hook ejecuta la query automáticamente al montar
  const { data: posts, isLoading, error, refetch } = useGetPostsQuery();

  // Hook para mutation
  const [addPost, { isLoading: isAdding }] = useAddPostMutation();

  // Estado local para el formulario
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title && body) {
      await addPost({ title, body, userId: 1 });
      setTitle('');
      setBody('');
    }
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>❌ Error al cargar posts</p>
        <button onClick={refetch}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="posts-container">
      {/* Formulario para agregar post */}
      <form
        onSubmit={handleSubmit}
        className="post-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título del post"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Contenido del post"
          rows={3}
        />
        <button
          type="submit"
          disabled={isAdding}>
          {isAdding ? 'Agregando...' : 'Agregar Post'}
        </button>
      </form>

      <div className="posts-header">
        <h2>📝 Posts ({posts?.length || 0})</h2>
        <button
          onClick={refetch}
          className="refetch-btn">
          🔄 Refetch
        </button>
      </div>

      <div className="posts-list">
        {posts?.map((post) => (
          <article
            key={post.id}
            className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <span className="post-meta">User ID: {post.userId}</span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PostList;
