// ============================================
// SOLUCIÓN: API de Usuarios
// ============================================

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

const mockUsers: User[] = [
  { id: 1, name: 'Ana García', email: 'ana@email.com', role: 'admin' },
  { id: 2, name: 'Carlos López', email: 'carlos@email.com', role: 'user' },
  { id: 3, name: 'María Rodríguez', email: 'maria@email.com', role: 'user' },
  { id: 4, name: 'Pedro Martínez', email: 'pedro@email.com', role: 'user' },
];

export const fetchUsers = async (): Promise<User[]> => {
  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simular posible error (descomentar para probar)
  // if (Math.random() > 0.7) {
  //   throw new Error('Error de conexión');
  // }

  return mockUsers;
};
