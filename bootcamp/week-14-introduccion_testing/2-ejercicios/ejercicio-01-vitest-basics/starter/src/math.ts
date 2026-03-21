// ============================================
// Funciones Matemáticas para Testing
// ============================================

/**
 * Suma dos números
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Resta dos números
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiplica dos números
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divide dos números
 * @throws Error si el divisor es 0
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}

/**
 * Verifica si un número es par
 */
export function isEven(n: number): boolean {
  return n % 2 === 0;
}

/**
 * Calcula el factorial de un número
 * @throws Error si el número es negativo
 */
export function factorial(n: number): number {
  if (n < 0) {
    throw new Error('El factorial no está definido para números negativos');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Encuentra el máximo en un array de números
 * @throws Error si el array está vacío
 */
export function findMax(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('El array no puede estar vacío');
  }
  return Math.max(...numbers);
}

/**
 * Filtra números pares de un array
 */
export function filterEven(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}
