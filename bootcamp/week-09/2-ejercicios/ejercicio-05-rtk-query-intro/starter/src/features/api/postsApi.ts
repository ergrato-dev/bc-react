// ============================================
// ARCHIVO: postsApi.ts
// API Slice con RTK Query
// ============================================

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// ============================================
// PASO 1: Crear API Slice
// ============================================
console.log('--- Paso 1: Crear API Slice ---');

// createApi es el núcleo de RTK Query. Genera automáticamente
// reducers, acciones y hooks para cada endpoint definido.
// Descomenta las siguientes líneas:

// // Interface para un Post
// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }
//
// // Crear el API slice
// export const postsApi = createApi({
//   // Nombre único para el reducer en el store
//   reducerPath: 'postsApi',
//
//   // Configuración base para todas las requests
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://jsonplaceholder.typicode.com/',
//   }),
//
//   // Tags para invalidación de caché
//   tagTypes: ['Post'],
//
//   // Definir endpoints
//   endpoints: (builder) => ({
//     // ============================================
//     // PASO 2: Query Endpoint (GET)
//     // ============================================
//     // builder.query<TipoRetorno, TipoArgumento>
//     getPosts: builder.query<Post[], void>({
//       // La función query retorna el path relativo
//       query: () => 'posts?_limit=10',
//       // providesTags marca estos datos con el tag 'Post'
//       providesTags: ['Post'],
//     }),
//
//     // Obtener un post por ID
//     getPostById: builder.query<Post, number>({
//       query: (id) => `posts/${id}`,
//       providesTags: (_result, _error, id) => [{ type: 'Post', id }],
//     }),
//
//     // ============================================
//     // PASO 5: Mutation Endpoint (POST)
//     // ============================================
//     // builder.mutation<TipoRetorno, TipoArgumento>
//     addPost: builder.mutation<Post, Omit<Post, 'id'>>({
//       query: (newPost) => ({
//         url: 'posts',
//         method: 'POST',
//         body: newPost,
//       }),
//       // invalidatesTags causa refetch de queries con estos tags
//       invalidatesTags: ['Post'],
//     }),
//   }),
// });
//
// // Exportar hooks generados automáticamente
// export const {
//   useGetPostsQuery,
//   useGetPostByIdQuery,
//   useAddPostMutation,
// } = postsApi;

console.log('');

// ============================================
// NOTA: Exportaciones temporales
// ============================================
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: () => ({}),
});

// Hooks placeholder
export const useGetPostsQuery = () => ({
  data: [] as Post[],
  isLoading: false,
  error: null,
  refetch: () => {},
});
