import { renderHook, act } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { useToggle } from './useToggle';

describe('useToggle', () => {
  // ============================================
  // PASO 1: Test de valor inicial por defecto
  // ============================================
  test('inicia con valor false por defecto', () => {
    // Arrange & Act
    const { result } = renderHook(() => useToggle());

    // Assert
    expect(result.current.value).toBe(false);
  });

  // ============================================
  // PASO 2: Test de valor inicial personalizado
  // ============================================
  test('inicia con valor personalizado', () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current.value).toBe(true);
  });

  // ============================================
  // PASO 3: Test de toggle
  // ============================================
  test('toggle cambia el valor de false a true', () => {
    const { result } = renderHook(() => useToggle());

    // Envolver en act() porque actualiza estado
    act(() => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(true);
  });

  // ============================================
  // PASO 4: Test de toggle doble
  // ============================================
  test('toggle doble vuelve al valor original', () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.toggle(); // false -> true
      result.current.toggle(); // true -> false
    });

    expect(result.current.value).toBe(false);
  });

  // ============================================
  // PASO 5: Test de setTrue
  // ============================================
  test('setTrue establece valor a true', () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current.setTrue();
    });

    expect(result.current.value).toBe(true);
  });

  // ============================================
  // PASO 6: Test de setFalse
  // ============================================
  test('setFalse establece valor a false', () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      result.current.setFalse();
    });

    expect(result.current.value).toBe(false);
  });

  // ============================================
  // PASO 7: Test de setTrue idempotente
  // ============================================
  test('setTrue es idempotente (llamar múltiples veces)', () => {
    const { result } = renderHook(() => useToggle(true));

    act(() => {
      result.current.setTrue();
      result.current.setTrue();
      result.current.setTrue();
    });

    expect(result.current.value).toBe(true);
  });
});
