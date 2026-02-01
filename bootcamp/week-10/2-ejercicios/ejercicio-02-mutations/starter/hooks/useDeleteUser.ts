// ============================================
// EJERCICIO 02: Hook useDeleteUser
// ============================================

// PASO 3: Crear el hook para eliminar usuarios
// Descomenta las siguientes líneas:

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { deleteUser } from '../api/users';

// export const useDeleteUser = () => {
//   const queryClient = useQueryClient();
//
//   return useMutation<void, Error, number>({
//     mutationFn: deleteUser,
//
//     onSuccess: () => {
//       // Invalidar la query de usuarios
//       queryClient.invalidateQueries({ queryKey: ['users'] });
//     },
//   });
// };

// Placeholder temporal
export const useDeleteUser = () => {
  return {
    mutate: (id: number) => console.log('Delete:', id),
    isPending: false,
  };
};
