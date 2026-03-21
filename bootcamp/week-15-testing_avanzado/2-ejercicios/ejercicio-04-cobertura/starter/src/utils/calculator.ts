// ============================================
// MÓDULO: Calculator - Funciones matemáticas
// ============================================

/**
 * Suma dos números
 */
export const add = (a: number, b: number): number => {
  return a + b;
};

/**
 * Divide dos números
 * @throws Error si el divisor es 0
 */
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
};

/**
 * Calcula el factorial de un número
 * @throws Error si el número es negativo
 */
export const factorial = (n: number): number => {
  if (n < 0) {
    throw new Error('No se puede calcular factorial de número negativo');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

/**
 * Determina si un número es par
 */
export const isEven = (n: number): boolean => {
  return n % 2 === 0;
};

/**
 * Retorna el máximo de un array de números
 * @throws Error si el array está vacío
 */
export const max = (numbers: number[]): number => {
  if (numbers.length === 0) {
    throw new Error('El array no puede estar vacío');
  }
  return Math.max(...numbers);
};
