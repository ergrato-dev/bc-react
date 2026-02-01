// ============================================
// HOOK: useItems con useInfiniteQuery
// ============================================
// TODO: Implementar hook para lista infinita con filtros

// import { useInfiniteQuery } from '@tanstack/react-query';
// import { fetchItems, ItemsResponse } from '../api/items';

// interface UseItemsOptions {
//   search?: string;
//   category?: string;
// }

// export const useItems = (options: UseItemsOptions = {}) => {
//   const { search, category } = options;
//
//   return useInfiniteQuery<ItemsResponse, Error>({
//     queryKey: ['items', { search, category }],
//     queryFn: ({ pageParam }) => fetchItems(pageParam, search, category),
//     initialPageParam: 1,
//     getNextPageParam: (lastPage) => lastPage.nextPage,
//   });
// };
