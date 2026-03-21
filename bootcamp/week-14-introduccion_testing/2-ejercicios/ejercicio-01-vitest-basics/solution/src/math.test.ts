// ============================================
// SOLUCIÓN: Tests con Vitest
// ============================================

import { describe, test, expect } from 'vitest';
import {
  add,
  subtract,
  multiply,
  divide,
  isEven,
  factorial,
  findMax,
  filterEven,
} from './math';

describe('math', () => {
  // ============================================
  // PASO 1: Tests de la función add
  // ============================================
  describe('add', () => {
    test('suma dos números positivos', () => {
      // Arrange
      const a = 2;
      const b = 3;

      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(5);
    });

    test('suma un número positivo y uno negativo', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('suma cero a un número', () => {
      expect(add(10, 0)).toBe(10);
    });
  });

  // ============================================
  // PASO 2: Tests de la función subtract
  // ============================================
  describe('subtract', () => {
    test('resta dos números positivos', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('resta resultando en número negativo', () => {
      expect(subtract(3, 8)).toBe(-5);
    });
  });

  // ============================================
  // PASO 3: Tests de la función multiply
  // ============================================
  describe('multiply', () => {
    test('multiplica dos números', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    test('multiplicar por cero da cero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('multiplica números negativos', () => {
      expect(multiply(-2, -3)).toBe(6);
    });
  });

  // ============================================
  // PASO 4: Tests de la función divide con errores
  // ============================================
  describe('divide', () => {
    test('divide dos números', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('divide con resultado decimal', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('lanza error al dividir por cero', () => {
      expect(() => divide(10, 0)).toThrow('No se puede dividir por cero');
    });
  });

  // ============================================
  // PASO 5: Tests con toBeTruthy/toBeFalsy
  // ============================================
  describe('isEven', () => {
    test('retorna true para números pares', () => {
      expect(isEven(4)).toBeTruthy();
      expect(isEven(0)).toBeTruthy();
      expect(isEven(-2)).toBeTruthy();
    });

    test('retorna false para números impares', () => {
      expect(isEven(3)).toBeFalsy();
      expect(isEven(1)).toBeFalsy();
      expect(isEven(-7)).toBeFalsy();
    });

    test('verifica explícitamente el valor booleano', () => {
      expect(isEven(10)).toBe(true);
      expect(isEven(11)).toBe(false);
    });
  });

  // ============================================
  // PASO 6: Tests de factorial
  // ============================================
  describe('factorial', () => {
    test('factorial de 0 es 1', () => {
      expect(factorial(0)).toBe(1);
    });

    test('factorial de 1 es 1', () => {
      expect(factorial(1)).toBe(1);
    });

    test('factorial de 5 es 120', () => {
      expect(factorial(5)).toBe(120);
    });

    test('lanza error para números negativos', () => {
      expect(() => factorial(-1)).toThrow();
    });
  });

  // ============================================
  // PASO 7: Tests con arrays (toEqual, toContain)
  // ============================================
  describe('findMax', () => {
    test('encuentra el máximo en un array', () => {
      const numbers = [3, 7, 2, 9, 4];
      expect(findMax(numbers)).toBe(9);
    });

    test('encuentra el máximo con números negativos', () => {
      expect(findMax([-5, -2, -10])).toBe(-2);
    });

    test('lanza error con array vacío', () => {
      expect(() => findMax([])).toThrow();
    });
  });

  describe('filterEven', () => {
    test('filtra números pares de un array', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const result = filterEven(numbers);

      expect(result).toEqual([2, 4, 6]);
    });

    test('retorna array vacío si no hay pares', () => {
      expect(filterEven([1, 3, 5])).toEqual([]);
    });

    test('el resultado contiene el número 4', () => {
      const result = filterEven([1, 2, 3, 4, 5]);

      expect(result).toContain(4);
    });

    test('verifica la longitud del resultado', () => {
      const result = filterEven([1, 2, 3, 4, 5, 6, 7, 8]);

      expect(result).toHaveLength(4);
    });
  });
});
