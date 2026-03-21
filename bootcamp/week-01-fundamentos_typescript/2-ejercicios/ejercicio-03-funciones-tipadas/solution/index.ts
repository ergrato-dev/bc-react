// ============================================
// EJERCICIO 3: FUNCIONES TIPADAS - SOLUCIÓN
// ============================================

console.log('🧪 EJERCICIO 3: FUNCIONES TIPADAS\n');

// ============================================
// PASO 1: Parámetros Tipados
// ============================================
console.log('--- PASO 1: Parámetros Tipados ---');

const add = (a: number, b: number) => {
  return a + b;
};

console.log('2 + 3 =', add(2, 3));
console.log('10 + 25 =', add(10, 25));

console.log('');

// ============================================
// PASO 2: Tipo de Retorno Explícito
// ============================================
console.log('--- PASO 2: Tipo de Retorno ---');

const greet = (name: string): string => {
  return `Hola, ${name}!`;
};

console.log(greet('Ana'));
console.log(greet('Carlos'));

console.log('');

// ============================================
// PASO 3: Parámetros Opcionales
// ============================================
console.log('--- PASO 3: Parámetros Opcionales ---');

const formatName = (firstName: string, lastName?: string): string => {
  return lastName ? `${firstName} ${lastName}` : firstName;
};

console.log(formatName('Ana'));
console.log(formatName('Ana', 'García'));

console.log('');

// ============================================
// PASO 4: Valores por Defecto
// ============================================
console.log('--- PASO 4: Valores por Defecto ---');

const multiply = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

console.log('5 * 2 =', multiply(5));
console.log('5 * 3 =', multiply(5, 3));

console.log('');

// ============================================
// PASO 5: Callbacks Tipados
// ============================================
console.log('--- PASO 5: Callbacks Tipados ---');

const processNumbers = (
  numbers: number[],
  callback: (n: number) => number,
): number[] => {
  return numbers.map(callback);
};

const doubled = processNumbers([1, 2, 3, 4], (n) => n * 2);
console.log('Duplicados:', doubled);

const squared = processNumbers([1, 2, 3, 4], (n) => n * n);
console.log('Al cuadrado:', squared);

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
