// ============================================
// HOOK: useItem con placeholderData
// ============================================
// TODO: Implementar hook para detalle con placeholder

// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { fetchItem, Item } from '../api/items';

// export const useItem = (id: number) => {
//   const queryClient = useQueryClient();
//
//   return useQuery<Item, Error>({
//     queryKey: ['items', 'detail', id],
//     queryFn: () => fetchItem(id),
//     enabled: id > 0,
//     placeholderData: () => {
//       // Buscar en caché de lista infinita
//       // ...
//     },
//   });
// };
