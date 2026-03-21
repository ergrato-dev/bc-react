import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import { Counter } from './Counter';

// ============================================
// PASO 4: Tests para Counter
// ============================================
// Descomenta cada test para aumentar la cobertura

describe('Counter', () => {
  // ============================================
  // Test de renderizado inicial
  // ============================================
  // test('renderiza con valor inicial por defecto (0)', () => {
  //   render(<Counter />);
  //   expect(screen.getByTestId('count-value')).toHaveTextContent('Valor: 0');
  // });

  // test('renderiza con valor inicial personalizado', () => {
  //   render(<Counter initialValue={10} />);
  //   expect(screen.getByTestId('count-value')).toHaveTextContent('Valor: 10');
  // });

  // ============================================
  // Test de incrementar
  // ============================================
  // test('incrementa el contador al hacer click', async () => {
  //   const user = userEvent.setup();
  //   render(<Counter />);
  //
  //   await user.click(screen.getByRole('button', { name: /incrementar/i }));
  //
  //   expect(screen.getByTestId('count-value')).toHaveTextContent('Valor: 1');
  // });

  // ============================================
  // Test de decrementar
  // ============================================
  // test('decrementa el contador al hacer click', async () => {
  //   const user = userEvent.setup();
  //   render(<Counter initialValue={5} />);
  //
  //   await user.click(screen.getByRole('button', { name: /decrementar/i }));
  //
  //   expect(screen.getByTestId('count-value')).toHaveTextContent('Valor: 4');
  // });

  // ============================================
  // Test de reset
  // ============================================
  // test('resetea al valor inicial', async () => {
  //   const user = userEvent.setup();
  //   render(<Counter initialValue={5} />);
  //
  //   // Incrementar primero
  //   await user.click(screen.getByRole('button', { name: /incrementar/i }));
  //   await user.click(screen.getByRole('button', { name: /incrementar/i }));
  //   expect(screen.getByTestId('count-value')).toHaveTextContent('Valor: 7');
  //
  //   // Resetear
  //   await user.click(screen.getByRole('button', { name: /resetear/i }));
  //   expect(screen.getByTestId('count-value')).toHaveTextContent('Valor: 5');
  // });

  // Placeholder temporal (borrar cuando descomentes los tests)
  test.skip('placeholder - descomenta los tests reales', () => {});
});
