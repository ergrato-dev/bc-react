// ============================================
// HOOK: useToggleTodo con Optimistic Update
// Este es el hook principal del ejercicio
// ============================================

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { toggleTodo, Todo } from '../api/todos';

// Contexto para rollback en caso de error
// interface MutationContext {
//   previousTodos: Todo[] | undefined;
// }

// Descomenta las siguientes líneas:

// export const useToggleTodo = () => {
//   const queryClient = useQueryClient();
//
//   return useMutation<Todo, Error, number, MutationContext>({
//     mutationFn: toggleTodo,
//
//     // PASO 1: onMutate - Se ejecuta ANTES de la mutación
//     onMutate: async (todoId) => {
//       // 1.1 Cancelar queries pendientes para evitar sobrescribir
//       await queryClient.cancelQueries({ queryKey: ['todos'] });
//
//       // 1.2 Guardar snapshot del estado actual (para rollback)
//       const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);
//
//       // 1.3 Actualizar caché optimísticamente
//       queryClient.setQueryData<Todo[]>(['todos'], (old) =>
//         old?.map((todo) =>
//           todo.id === todoId
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         )
//       );
//
//       // 1.4 Retornar contexto con snapshot
//       return { previousTodos };
//     },
//
//     // PASO 2: onError - Rollback si hay error
//     onError: (_error, _todoId, context) => {
//       // Restaurar estado previo del snapshot
//       if (context?.previousTodos) {
//         queryClient.setQueryData(['todos'], context.previousTodos);
//       }
//     },
//
//     // PASO 3: onSettled - Se ejecuta SIEMPRE (éxito o error)
//     onSettled: () => {
//       // Invalidar para sincronizar con servidor
//       queryClient.invalidateQueries({ queryKey: ['todos'] });
//     },
//   });
// };
