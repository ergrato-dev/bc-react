import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleTodo, Todo } from '../api/todos';

interface MutationContext {
  previousTodos: Todo[] | undefined;
}

export const useToggleTodo = () => {
  const queryClient = useQueryClient();

  return useMutation<Todo, Error, number, MutationContext>({
    mutationFn: toggleTodo,

    // onMutate - Se ejecuta ANTES de la mutación
    onMutate: async (todoId) => {
      // 1. Cancelar queries pendientes
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      // 2. Guardar snapshot
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      // 3. Actualizar caché optimísticamente
      queryClient.setQueryData<Todo[]>(['todos'], (old) =>
        old?.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
        ),
      );

      // 4. Retornar contexto
      return { previousTodos };
    },

    // onError - Rollback
    onError: (_error, _todoId, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },

    // onSettled - Sincronizar
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
