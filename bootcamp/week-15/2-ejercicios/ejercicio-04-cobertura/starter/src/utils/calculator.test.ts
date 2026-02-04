import { describe, test, expect } from 'vitest';
import { add, divide, factorial, isEven, max } from './calculator';

// ============================================
// PASO 3: Tests para Calculator
// ============================================
// Descomenta cada grupo de tests para aumentar la cobertura

describe('Calculator', () => {
  // ============================================
  // Tests para add()
  // ============================================
  describe('add', () => {
    // test('suma dos números positivos', () => {
    //   expect(add(2, 3)).toBe(5);
    // });
    // test('suma números negativos', () => {
    //   expect(add(-1, -2)).toBe(-3);
    // });
    // test('suma con cero', () => {
    //   expect(add(5, 0)).toBe(5);
    // });
  });

  // ============================================
  // Tests para divide()
  // ============================================
  describe('divide', () => {
    // test('divide dos números', () => {
    //   expect(divide(10, 2)).toBe(5);
    // });
    // test('lanza error al dividir por cero', () => {
    //   expect(() => divide(10, 0)).toThrow('No se puede dividir por cero');
    // });
    // test('divide con resultado decimal', () => {
    //   expect(divide(7, 2)).toBe(3.5);
    // });
  });

  // ============================================
  // Tests para factorial()
  // ============================================
  describe('factorial', () => {
    // test('factorial de 0 es 1', () => {
    //   expect(factorial(0)).toBe(1);
    // });
    // test('factorial de 1 es 1', () => {
    //   expect(factorial(1)).toBe(1);
    // });
    // test('factorial de 5 es 120', () => {
    //   expect(factorial(5)).toBe(120);
    // });
    // test('lanza error con número negativo', () => {
    //   expect(() => factorial(-1)).toThrow(
    //     'No se puede calcular factorial de número negativo'
    //   );
    // });
  });

  // ============================================
  // Tests para isEven()
  // ============================================
  describe('isEven', () => {
    // test('4 es par', () => {
    //   expect(isEven(4)).toBe(true);
    // });
    // test('7 no es par', () => {
    //   expect(isEven(7)).toBe(false);
    // });
    // test('0 es par', () => {
    //   expect(isEven(0)).toBe(true);
    // });
  });

  // ============================================
  // Tests para max()
  // ============================================
  describe('max', () => {
    // test('encuentra el máximo en array', () => {
    //   expect(max([1, 5, 3, 9, 2])).toBe(9);
    // });
    // test('funciona con un solo elemento', () => {
    //   expect(max([42])).toBe(42);
    // });
    // test('lanza error con array vacío', () => {
    //   expect(() => max([])).toThrow('El array no puede estar vacío');
    // });
  });

  // Placeholder temporal (borrar cuando descomentes los tests)
  test.skip('placeholder - descomenta los tests reales', () => {});
});
