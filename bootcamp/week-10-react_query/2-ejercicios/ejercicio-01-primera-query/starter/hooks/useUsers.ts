// ============================================
// EJERCICIO 01: Custom Hook useUsers
// ============================================

// PASO 3: Crear el custom hook para obtener usuarios
// Descomenta las siguientes líneas:

// import { useQuery } from '@tanstack/react-query';
// import { fetchUsers, User } from '../api/users';

// Hook personalizado para obtener usuarios
// Encapsula la lógica de fetching y permite reutilización
// export const useUsers = () => {
//   return useQuery<User[], Error>({
//     // queryKey: Identificador único para esta query
//     // React Query usa esta key para cachear los datos
//     queryKey: ['users'],
//
//     // queryFn: Función que retorna los datos
//     // Debe retornar una Promise
//     queryFn: fetchUsers,
//
//     // Opciones adicionales (opcional)
//     // staleTime: 1000 * 60 * 5, // Los datos son frescos por 5 min
//   });
// };

// Placeholder temporal - eliminar cuando descomentes arriba
export const useUsers = () => {
  return {
    data: undefined,
    isLoading: false,
    isError: false,
    error: null,
  };
};
