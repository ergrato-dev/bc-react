// ============================================
// HOOK: useCreateItem
// ============================================
// TODO: Implementar mutación para crear

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { createItem, CreateItemInput, Item } from '../api/items';

// export const useCreateItem = () => {
//   const queryClient = useQueryClient();
//
//   return useMutation<Item, Error, CreateItemInput>({
//     mutationFn: createItem,
//     onSuccess: () => {
//       // Invalidar queries de lista
//       queryClient.invalidateQueries({ queryKey: ['items'] });
//     },
//   });
// };
