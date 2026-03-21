// ============================================
// EJERCICIO 4: GENERICS BÁSICOS - SOLUCIÓN
// ============================================

console.log('🧬 EJERCICIO 4: GENERICS BÁSICOS\n');

// ============================================
// PASO 1: Función Genérica Identity
// ============================================
console.log('--- PASO 1: Identity Generic ---');

const identity = <T>(value: T): T => {
  return value;
};

const stringResult = identity<string>('TypeScript');
const numberResult = identity<number>(42);
const booleanResult = identity<boolean>(true);

console.log('String:', stringResult);
console.log('Number:', numberResult);
console.log('Boolean:', booleanResult);

console.log('');

// ============================================
// PASO 2: Generics con Arrays
// ============================================
console.log('--- PASO 2: Generics con Arrays ---');

const getFirst = <T>(items: T[]): T | undefined => {
  return items[0];
};

const firstString = getFirst<string>(['React', 'Vue', 'Angular']);
const firstNumber = getFirst<number>([10, 20, 30]);

console.log('Primera palabra:', firstString);
console.log('Primer número:', firstNumber);

console.log('');

// ============================================
// PASO 3: Tipo Genérico ApiResponse
// ============================================
console.log('--- PASO 3: Tipo Genérico ---');

type ApiResponse<T> = {
  data: T;
  error: string | null;
  status: number;
};

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: 'Ana' },
  error: null,
  status: 200,
};

console.log('User Response:', userResponse);

const tagsResponse: ApiResponse<string[]> = {
  data: ['typescript', 'react', 'docker'],
  error: null,
  status: 200,
};

console.log('Tags Response:', tagsResponse);

console.log('');

// ============================================
// PASO 4: Generics con Restricciones
// ============================================
console.log('--- PASO 4: Generics con extends ---');

const getLength = <T extends { length: number }>(item: T): number => {
  return item.length;
};

console.log('Length of "TypeScript":', getLength('TypeScript'));
console.log('Length of [1,2,3,4]:', getLength([1, 2, 3, 4]));

console.log('');

// ============================================
// 🎯 RESUMEN
// ============================================
console.log('--- RESUMEN ---');
console.log('✅ Generics: <T> para tipos reutilizables');
console.log('✅ Arrays genéricos: <T>(items: T[])');
console.log('✅ Tipos genéricos: type Name<T> = { ... }');
console.log('✅ Restricciones: <T extends Interface>');
console.log('\n🚀 ¡Ejercicio completado!\n');
