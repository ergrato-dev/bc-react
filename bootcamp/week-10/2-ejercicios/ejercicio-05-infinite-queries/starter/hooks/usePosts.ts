// ============================================
// HOOK: usePosts con useInfiniteQuery
// Este es el hook principal del ejercicio
// ============================================

// import { useInfiniteQuery } from '@tanstack/react-query';
// import { fetchPosts, PostsResponse } from '../api/posts';

// Descomenta las siguientes líneas:

// export const usePosts = () => {
//   return useInfiniteQuery<PostsResponse, Error>({
//     queryKey: ['posts'],
//
//     // La función recibe pageParam automáticamente
//     queryFn: ({ pageParam }) => fetchPosts(pageParam),
//
//     // Página inicial
//     initialPageParam: 1,
//
//     // Determina si hay siguiente página y cuál es
//     getNextPageParam: (lastPage) => lastPage.nextPage,
//
//     // Opcional: determina página anterior (para scroll bidireccional)
//     // getPreviousPageParam: (firstPage) => firstPage.previousPage,
//   });
// };
