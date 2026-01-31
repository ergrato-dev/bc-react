// ============================================
// EJERCICIO 4: GENERICS BÁSICOS
// ============================================

console.log('🧬 EJERCICIO 4: GENERICS BÁSICOS\n');

// ============================================
// PASO 1: Función Genérica Identity
// ============================================
console.log('--- PASO 1: Identity Generic ---');

// QUÉ: función que retorna exactamente lo que recibe
// PARA: crear una función que funcione con CUALQUIER tipo
// IMPACTO: <T> es un placeholder para el tipo que se pase

// Descomenta las siguientes líneas:
// const identity = <T>(value: T): T => {
//   return value;
// };

// const stringResult = identity<string>('TypeScript');
// const numberResult = identity<number>(42);
// const booleanResult = identity<boolean>(true);

// console.log('String:', stringResult);
// console.log('Number:', numberResult);
// console.log('Boolean:', booleanResult);

console.log('');

// ============================================
// PASO 2: Generics con Arrays
// ============================================
console.log('--- PASO 2: Generics con Arrays ---');

// QUÉ: función genérica que obtiene el primer elemento
// PARA: que funcione con arrays de cualquier tipo
// IMPACTO: <T> permite que funcione con string[], number[], etc.

// Descomenta las siguientes líneas:
// const getFirst = <T>(items: T[]): T | undefined => {
//   return items[0];
// };

// const firstString = getFirst<string>(['React', 'Vue', 'Angular']);
// const firstNumber = getFirst<number>([10, 20, 30]);

// console.log('Primera palabra:', firstString);
// console.log('Primer número:', firstNumber);

console.log('');

// ============================================
// PASO 3: Tipo Genérico ApiResponse
// ============================================
console.log('--- PASO 3: Tipo Genérico ---');

// QUÉ: tipo genérico para respuestas de API
// PARA: reutilizar estructura con diferentes tipos de datos
// IMPACTO: <T> define qué tipo tiene data

// Descomenta las siguientes líneas:
// type ApiResponse<T> = {
//   data: T;
//   error: string | null;
//   status: number;
// };

// interface User {
//   id: number;
//   name: string;
// }

// QUÉ: usar ApiResponse con User
// const userResponse: ApiResponse<User> = {
//   data: { id: 1, name: 'Ana' },
//   error: null,
//   status: 200,
// };

// console.log('User Response:', userResponse);

// QUÉ: usar ApiResponse con array de strings
// const tagsResponse: ApiResponse<string[]> = {
//   data: ['typescript', 'react', 'docker'],
//   error: null,
//   status: 200,
// };

// console.log('Tags Response:', tagsResponse);

console.log('');

// ============================================
// PASO 4: Generics con Restricciones
// ============================================
console.log('--- PASO 4: Generics con extends ---');

// QUÉ: restringir el tipo genérico con extends
// PARA: garantizar que T tenga ciertas propiedades
// IMPACTO: T debe tener al menos la propiedad 'length'

// Descomenta las siguientes líneas:
// const getLength = <T extends { length: number }>(item: T): number => {
//   return item.length;
// };

// console.log('Length of "TypeScript":', getLength('TypeScript')); // string tiene length
// console.log('Length of [1,2,3,4]:', getLength([1, 2, 3, 4])); // array tiene length

// QUÉ: intentar usar con algo sin length
// PARA: demostrar que extends restringe el tipo
// IMPACTO: si descomentas, verás error porque number no tiene length
// console.log(getLength(123)); // ❌ Error: number no tiene 'length'

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
