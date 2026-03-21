// ============================================
// ARCHIVO: postsApi.ts
// API Slice con RTK Query
// SOLUCIÓN COMPLETA
// ============================================

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Interface para un Post
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Crear el API slice
export const postsApi = createApi({
  // Nombre único para el reducer en el store
  reducerPath: 'postsApi',

  // Configuración base para todas las requests
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),

  // Tags para invalidación de caché
  tagTypes: ['Post'],

  // Definir endpoints
  endpoints: (builder) => ({
    // Query endpoint (GET) - obtener todos los posts
    getPosts: builder.query<Post[], void>({
      query: () => 'posts?_limit=10',
      providesTags: ['Post'],
    }),

    // Query endpoint (GET) - obtener un post por ID
    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Post', id }],
    }),

    // Mutation endpoint (POST) - crear un post
    addPost: builder.mutation<Post, Omit<Post, 'id'>>({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Post'],
    }),

    // Mutation endpoint (DELETE) - eliminar un post
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

// Exportar hooks generados automáticamente
export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useAddPostMutation,
  useDeletePostMutation,
} = postsApi;
