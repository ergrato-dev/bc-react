// ============================================
// EJERCICIO 3: FUNCIONES TIPADAS
// ============================================

console.log('🧪 EJERCICIO 3: FUNCIONES TIPADAS\n');

// ============================================
// PASO 1: Parámetros Tipados
// ============================================
console.log('--- PASO 1: Parámetros Tipados ---');

// QUÉ: función que suma dos números
// PARA: practicar tipado de parámetros
// IMPACTO: TypeScript valida que ambos sean números

// Descomenta las siguientes líneas:
// const add = (a: number, b: number) => {
//   return a + b;
// };

// console.log('2 + 3 =', add(2, 3));
// console.log('10 + 25 =', add(10, 25));

console.log('');

// ============================================
// PASO 2: Tipo de Retorno Explícito
// ============================================
console.log('--- PASO 2: Tipo de Retorno ---');

// QUÉ: especificar explícitamente qué retorna la función
// PARA: garantizar que siempre retorne el tipo correcto
// IMPACTO: si intentas retornar otro tipo, TypeScript alerta

// Descomenta las siguientes líneas:
// const greet = (name: string): string => {
//   return `Hola, ${name}!`;
// };

// console.log(greet('Ana'));
// console.log(greet('Carlos'));

console.log('');

// ============================================
// PASO 3: Parámetros Opcionales
// ============================================
console.log('--- PASO 3: Parámetros Opcionales ---');

// QUÉ: parámetros que pueden omitirse con ?
// PARA: hacer funciones más flexibles
// IMPACTO: lastName puede no pasarse, sin error

// Descomenta las siguientes líneas:
// const formatName = (firstName: string, lastName?: string): string => {
//   return lastName ? `${firstName} ${lastName}` : firstName;
// };

// console.log(formatName('Ana')); // ✅ Sin apellido
// console.log(formatName('Ana', 'García')); // ✅ Con apellido

console.log('');

// ============================================
// PASO 4: Valores por Defecto
// ============================================
console.log('--- PASO 4: Valores por Defecto ---');

// QUÉ: asignar valores por defecto a parámetros
// PARA: evitar undefined cuando no se pasa el parámetro
// IMPACTO: si multiplier no se pasa, usa 2

// Descomenta las siguientes líneas:
// const multiply = (value: number, multiplier: number = 2): number => {
//   return value * multiplier;
// };

// console.log('5 * 2 =', multiply(5)); // Usa multiplier = 2 por defecto
// console.log('5 * 3 =', multiply(5, 3)); // Usa multiplier = 3

console.log('');

// ============================================
// PASO 5: Callbacks Tipados
// ============================================
console.log('--- PASO 5: Callbacks Tipados ---');

// QUÉ: tipar funciones que reciben otras funciones (callbacks)
// PARA: validar que el callback cumpla con la firma esperada
// IMPACTO: callback debe recibir number y retornar number

// Descomenta las siguientes líneas:
// const processNumbers = (
//   numbers: number[],
//   callback: (n: number) => number,
// ): number[] => {
//   return numbers.map(callback);
// };

// QUÉ: usar processNumbers con diferentes callbacks
// const doubled = processNumbers([1, 2, 3, 4], (n) => n * 2);
// console.log('Duplicados:', doubled);

// const squared = processNumbers([1, 2, 3, 4], (n) => n * n);
// console.log('Al cuadrado:', squared);

console.log('');

// ============================================
// 🎯 RESUMEN
// ============================================
console.log('--- RESUMEN ---');
console.log('✅ Parámetros tipados: (a: number, b: string)');
console.log('✅ Tipo de retorno: (): ReturnType =>');
console.log('✅ Opcionales: param?: Type');
console.log('✅ Valores por defecto: param: Type = defaultValue');
console.log('✅ Callbacks: (callback: (x: Type) => ReturnType)');
console.log('\n🚀 ¡Ejercicio completado!\n');
