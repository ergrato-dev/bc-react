// ============================================
// EJERCICIO 01: API de Usuarios
// ============================================

// Tipo para un usuario
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Datos simulados
const mockUsers: User[] = [
  { id: 1, name: 'Ana García', email: 'ana@email.com', role: 'admin' },
  { id: 2, name: 'Carlos López', email: 'carlos@email.com', role: 'user' },
  { id: 3, name: 'María Rodríguez', email: 'maria@email.com', role: 'user' },
  { id: 4, name: 'Pedro Martínez', email: 'pedro@email.com', role: 'user' },
];

// PASO 2: Crear la función para obtener usuarios
// Esta función simula una llamada a una API con un delay de 1 segundo
// Descomenta las siguientes líneas:

// export const fetchUsers = async (): Promise<User[]> => {
//   // Simular delay de red
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//
//   // Simular posible error (descomentar para probar)
//   // if (Math.random() > 0.7) {
//   //   throw new Error('Error de conexión');
//   // }
//
//   return mockUsers;
// };

// Placeholder temporal - eliminar cuando descomentes arriba
export const fetchUsers = async (): Promise<User[]> => {
  return [];
};
