// SOLUCIÓN: Hook useCreateUser
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser, CreateUserDTO, User } from '../api/users';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User, Error, CreateUserDTO>({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      console.log('Usuario creado:', newUser);
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      console.error('Error al crear usuario:', error);
    },
  });
};
