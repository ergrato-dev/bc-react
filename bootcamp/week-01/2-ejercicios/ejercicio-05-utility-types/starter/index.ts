// ============================================
// EJERCICIO 5: UTILITY TYPES
// ============================================

console.log('🔧 EJERCICIO 5: UTILITY TYPES\n');

// Tipo base para todos los ejemplos
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

// ============================================
// PASO 1: Partial<T>
// ============================================
console.log('--- PASO 1: Partial<T> ---');

// QUÉ: hacer todas las propiedades opcionales
// PARA: permitir actualizaciones parciales de objetos
// IMPACTO: UpdateUserInput puede tener cualquier combinación de props

// Descomenta las siguientes líneas:
// type UpdateUserInput = Partial<User>;

// QUÉ: actualizar solo el nombre
// const updateName: UpdateUserInput = {
//   name: 'Ana García',
// };

// console.log('Update name only:', updateName);

// QUÉ: actualizar nombre y email
// const updateNameAndEmail: UpdateUserInput = {
//   name: 'Carlos Ruiz',
//   email: 'carlos@example.com',
// };

// console.log('Update name and email:', updateNameAndEmail);

console.log('');

// ============================================
// PASO 2: Pick<T, K>
// ============================================
console.log('--- PASO 2: Pick<T, K> ---');

// QUÉ: seleccionar solo algunas propiedades del tipo
// PARA: crear un tipo simplificado para vistas públicas
// IMPACTO: UserPublicView solo tiene id, name, role

// Descomenta las siguientes líneas:
// type UserPublicView = Pick<User, 'id' | 'name' | 'role'>;

// const publicUser: UserPublicView = {
//   id: 1,
//   name: 'Ana García',
//   role: 'admin',
//   // email, password NO están disponibles ✅
// };

// console.log('Public view (sin email/password):', publicUser);

console.log('');

// ============================================
// PASO 3: Omit<T, K>
// ============================================
console.log('--- PASO 3: Omit<T, K> ---');

// QUÉ: excluir propiedades específicas del tipo
// PARA: crear un tipo sin datos sensibles
// IMPACTO: UserWithoutPassword tiene todo EXCEPTO password

// Descomenta las siguientes líneas:
// type UserWithoutPassword = Omit<User, 'password'>;

// const safeUser: UserWithoutPassword = {
//   id: 2,
//   name: 'Laura Pérez',
//   email: 'laura@example.com',
//   role: 'user',
//   // password NO está disponible ✅
// };

// console.log('User sin password:', safeUser);

console.log('');

// ============================================
// PASO 4: Required<T>
// ============================================
console.log('--- PASO 4: Required<T> ---');

// QUÉ: hacer todas las propiedades obligatorias
// PARA: convertir un tipo con opcionales a uno sin opcionales
// IMPACTO: todas las props de Config pasan a ser requeridas

// Descomenta las siguientes líneas:
// interface Config {
//   apiUrl?: string;
//   timeout?: number;
//   debug?: boolean;
// }

// QUÉ: hacer todas las opcionales obligatorias
// type RequiredConfig = Required<Config>;

// const config: RequiredConfig = {
//   apiUrl: 'https://api.example.com',
//   timeout: 5000,
//   debug: true,
//   // Todas son obligatorias ahora ✅
// };

// console.log('Config completo:', config);

console.log('');

// ============================================
// PASO 5: Record<K, T>
// ============================================
console.log('--- PASO 5: Record<K, T> ---');

// QUÉ: crear un objeto-mapa con claves y tipos específicos
// PARA: definir estructuras de diccionario/mapa tipadas
// IMPACTO: UserMap tiene claves string y valores User

// Descomenta las siguientes líneas:
// type UserMap = Record<string, User>;

// const users: UserMap = {
//   user1: {
//     id: 1,
//     name: 'Ana',
//     email: 'ana@example.com',
//     password: 'secret',
//     role: 'admin',
//   },
//   user2: {
//     id: 2,
//     name: 'Carlos',
//     email: 'carlos@example.com',
//     password: 'secret',
//     role: 'user',
//   },
// };

// console.log('User map:', users);
// console.log('Acceso user1:', users.user1.name);

console.log('');

// ============================================
// 🎯 RESUMEN
// ============================================
console.log('--- RESUMEN ---');
console.log('✅ Partial<T>: todas las props opcionales');
console.log('✅ Pick<T, K>: seleccionar propiedades');
console.log('✅ Omit<T, K>: excluir propiedades');
console.log('✅ Required<T>: todas las props obligatorias');
console.log('✅ Record<K, T>: crear mapas tipados');
console.log('\n🚀 ¡Ejercicio completado!\n');
