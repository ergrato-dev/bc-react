// ============================================
// EJERCICIO 5: UTILITY TYPES - SOLUCIÓN
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

type UpdateUserInput = Partial<User>;

const updateName: UpdateUserInput = {
  name: 'Ana García',
};

console.log('Update name only:', updateName);

const updateNameAndEmail: UpdateUserInput = {
  name: 'Carlos Ruiz',
  email: 'carlos@example.com',
};

console.log('Update name and email:', updateNameAndEmail);

console.log('');

// ============================================
// PASO 2: Pick<T, K>
// ============================================
console.log('--- PASO 2: Pick<T, K> ---');

type UserPublicView = Pick<User, 'id' | 'name' | 'role'>;

const publicUser: UserPublicView = {
  id: 1,
  name: 'Ana García',
  role: 'admin',
};

console.log('Public view (sin email/password):', publicUser);

console.log('');

// ============================================
// PASO 3: Omit<T, K>
// ============================================
console.log('--- PASO 3: Omit<T, K> ---');

type UserWithoutPassword = Omit<User, 'password'>;

const safeUser: UserWithoutPassword = {
  id: 2,
  name: 'Laura Pérez',
  email: 'laura@example.com',
  role: 'user',
};

console.log('User sin password:', safeUser);

console.log('');

// ============================================
// PASO 4: Required<T>
// ============================================
console.log('--- PASO 4: Required<T> ---');

interface Config {
  apiUrl?: string;
  timeout?: number;
  debug?: boolean;
}

type RequiredConfig = Required<Config>;

const config: RequiredConfig = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  debug: true,
};

console.log('Config completo:', config);

console.log('');

// ============================================
// PASO 5: Record<K, T>
// ============================================
console.log('--- PASO 5: Record<K, T> ---');

type UserMap = Record<string, User>;

const users: UserMap = {
  user1: {
    id: 1,
    name: 'Ana',
    email: 'ana@example.com',
    password: 'secret',
    role: 'admin',
  },
  user2: {
    id: 2,
    name: 'Carlos',
    email: 'carlos@example.com',
    password: 'secret',
    role: 'user',
  },
};

console.log('User map:', users);
console.log('Acceso user1:', users.user1.name);

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
