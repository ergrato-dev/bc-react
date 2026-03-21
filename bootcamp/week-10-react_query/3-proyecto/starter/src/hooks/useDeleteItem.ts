// ============================================
// HOOK: useDeleteItem con Optimistic Update
// ============================================
// TODO: Implementar mutación de eliminación optimista

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { deleteItem } from '../api/items';

// export const useDeleteItem = () => {
//   const queryClient = useQueryClient();
//
//   return useMutation<void, Error, number>({
//     mutationFn: deleteItem,
//
//     onMutate: async (itemId) => {
//       // TODO: Implementar eliminación optimista
//     },
//
//     onError: (_error, _itemId, context) => {
//       // TODO: Rollback
//     },
//
//     onSettled: () => {
//       queryClient.invalidateQueries({ queryKey: ['items'] });
//     },
//   });
// };
