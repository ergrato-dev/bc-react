// SOLUCIÓN: API de Usuarios con Mutations
export interface User {
  id: number;
  name: string;
  email: string;
}

export type CreateUserDTO = Omit<User, 'id'>;

let mockUsers: User[] = [
  { id: 1, name: 'Ana García', email: 'ana@email.com' },
  { id: 2, name: 'Carlos López', email: 'carlos@email.com' },
];

let nextId = 3;

export const fetchUsers = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [...mockUsers];
};

export const createUser = async (userData: CreateUserDTO): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const newUser: User = {
    id: nextId++,
    ...userData,
  };

  mockUsers = [...mockUsers, newUser];
  return newUser;
};

export const deleteUser = async (id: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  mockUsers = mockUsers.filter((user) => user.id !== id);
};
