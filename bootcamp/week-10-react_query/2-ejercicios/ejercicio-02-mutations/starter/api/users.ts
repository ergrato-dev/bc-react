// ============================================
// EJERCICIO 02: API de Usuarios con Mutations
// ============================================

export interface User {
  id: number;
  name: string;
  email: string;
}

export type CreateUserDTO = Omit<User, 'id'>;

// Base de datos simulada
let mockUsers: User[] = [
  { id: 1, name: 'Ana García', email: 'ana@email.com' },
  { id: 2, name: 'Carlos López', email: 'carlos@email.com' },
];

let nextId = 3;

// Obtener usuarios
export const fetchUsers = async (): Promise<User[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [...mockUsers];
};

// PASO 1: Crear función para agregar usuario
// Descomenta las siguientes líneas:
// export const createUser = async (userData: CreateUserDTO): Promise<User> => {
//   await new Promise((resolve) => setTimeout(resolve, 800));
//
//   const newUser: User = {
//     id: nextId++,
//     ...userData,
//   };
//
//   mockUsers = [...mockUsers, newUser];
//   return newUser;
// };

// PASO 1: Crear función para eliminar usuario
// Descomenta las siguientes líneas:
// export const deleteUser = async (id: number): Promise<void> => {
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   mockUsers = mockUsers.filter((user) => user.id !== id);
// };

// Placeholders temporales - eliminar cuando descomentes arriba
export const createUser = async (userData: CreateUserDTO): Promise<User> => {
  return { id: 0, ...userData };
};

export const deleteUser = async (id: number): Promise<void> => {
  console.log('Delete:', id);
};
