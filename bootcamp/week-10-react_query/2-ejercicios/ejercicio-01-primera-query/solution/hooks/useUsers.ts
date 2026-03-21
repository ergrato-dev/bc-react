// ============================================
// SOLUCIÓN: Custom Hook useUsers
// ============================================
import { useQuery } from '@tanstack/react-query';
import { fetchUsers, User } from '../api/users';

export const useUsers = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};
