// ============================================
// HOOK: useUpdateItem con Optimistic Update
// ============================================
// TODO: Implementar mutación con actualización optimista

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { updateItem, Item } from '../api/items';

// interface UpdateContext {
//   previousItem: Item | undefined;
// }

// export const useUpdateItem = () => {
//   const queryClient = useQueryClient();
//
//   return useMutation<Item, Error, { id: number; data: Partial<Item> }, UpdateContext>({
//     mutationFn: ({ id, data }) => updateItem(id, data),
//
//     onMutate: async ({ id, data }) => {
//       // TODO: Implementar optimistic update
//       // 1. Cancelar queries
//       // 2. Guardar snapshot
//       // 3. Actualizar caché
//       // 4. Retornar contexto
//     },
//
//     onError: (_error, _variables, context) => {
//       // TODO: Rollback
//     },
//
//     onSettled: () => {
//       // TODO: Invalidar
//     },
//   });
// };
