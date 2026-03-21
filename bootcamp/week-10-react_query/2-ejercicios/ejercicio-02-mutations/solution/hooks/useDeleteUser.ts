// SOLUCIÓN: Hook useDeleteUser
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../api/users';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
