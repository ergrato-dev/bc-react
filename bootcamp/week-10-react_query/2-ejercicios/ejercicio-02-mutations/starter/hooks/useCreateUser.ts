// ============================================
// EJERCICIO 02: Hook useCreateUser
// ============================================

// PASO 2: Crear el hook para crear usuarios
// Descomenta las siguientes líneas:

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { createUser, CreateUserDTO, User } from '../api/users';

// export const useCreateUser = () => {
//   const queryClient = useQueryClient();
//
//   return useMutation<User, Error, CreateUserDTO>({
//     // La función que se ejecuta al llamar mutate()
//     mutationFn: createUser,
//
//     // Se ejecuta cuando la mutation es exitosa
//     onSuccess: (newUser) => {
//       console.log('Usuario creado:', newUser);
//
//       // Invalidar la query de usuarios para refetch
//       queryClient.invalidateQueries({ queryKey: ['users'] });
//     },
//
//     // Se ejecuta si hay error
//     onError: (error) => {
//       console.error('Error al crear usuario:', error);
//     },
//   });
// };

// Placeholder temporal
export const useCreateUser = () => {
  return {
    mutate: (data: { name: string; email: string }) => console.log(data),
    isPending: false,
    isError: false,
    error: null,
  };
};
