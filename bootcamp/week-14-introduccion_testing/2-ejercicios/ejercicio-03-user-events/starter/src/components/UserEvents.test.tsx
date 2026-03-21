// ============================================
// EJERCICIO: User Events
// ============================================
// Descomenta cada sección y practica
// simulando interacciones de usuario
// ============================================

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { TodoForm } from './TodoForm';
import { Counter } from './Counter';

// ============================================
// PARTE A: Testing de Counter con clicks
// ============================================

describe('Counter', () => {
  // ============================================
  // PASO 1: Click simple para incrementar
  // ============================================
  console.log('--- Paso 1: Click para incrementar ---');

  // Descomenta las siguientes líneas:
  // test('incrementa el contador al hacer click en +', async () => {
  //   // Arrange - Configurar userEvent y renderizar
  //   const user = userEvent.setup();
  //   render(<Counter />);
  //
  //   // Act - Simular click
  //   await user.click(screen.getByRole('button', { name: '+' }));
  //
  //   // Assert - Verificar resultado
  //   expect(screen.getByTestId('count')).toHaveTextContent('1');
  // });

  // ============================================
  // PASO 2: Múltiples clicks
  // ============================================
  console.log('--- Paso 2: Múltiples clicks ---');

  // Descomenta las siguientes líneas:
  // test('decrementa el contador al hacer click en -', async () => {
  //   const user = userEvent.setup();
  //   render(<Counter initialValue={5} />);
  //
  //   // Múltiples clicks
  //   await user.click(screen.getByRole('button', { name: '-' }));
  //   await user.click(screen.getByRole('button', { name: '-' }));
  //
  //   expect(screen.getByTestId('count')).toHaveTextContent('3');
  // });

  // ============================================
  // PASO 3: Verificar callback con vi.fn()
  // ============================================
  console.log('--- Paso 3: Verificar callback ---');

  // Descomenta las siguientes líneas:
  // test('llama onChange con el nuevo valor', async () => {
  //   const user = userEvent.setup();
  //   // vi.fn() crea una función mock que registra llamadas
  //   const handleChange = vi.fn();
  //
  //   render(<Counter onChange={handleChange} />);
  //
  //   await user.click(screen.getByRole('button', { name: '+' }));
  //
  //   // Verificar que se llamó con el valor correcto
  //   expect(handleChange).toHaveBeenCalledWith(1);
  //   expect(handleChange).toHaveBeenCalledTimes(1);
  // });

  // ============================================
  // PASO 4: Reset del contador
  // ============================================
  console.log('--- Paso 4: Reset ---');

  // Descomenta las siguientes líneas:
  // test('resetea el contador al valor inicial', async () => {
  //   const user = userEvent.setup();
  //   render(<Counter initialValue={10} />);
  //
  //   // Incrementar
  //   await user.click(screen.getByRole('button', { name: '+' }));
  //   await user.click(screen.getByRole('button', { name: '+' }));
  //   expect(screen.getByTestId('count')).toHaveTextContent('12');
  //
  //   // Reset
  //   await user.click(screen.getByRole('button', { name: 'Reset' }));
  //   expect(screen.getByTestId('count')).toHaveTextContent('10');
  // });
});

// ============================================
// PARTE B: Testing de TodoForm con typing
// ============================================

describe('TodoForm', () => {
  // ============================================
  // PASO 5: Escribir texto en un input
  // ============================================
  console.log('--- Paso 5: Escribir en input ---');

  // Descomenta las siguientes líneas:
  // test('permite escribir en el input', async () => {
  //   const user = userEvent.setup();
  //   render(<TodoForm onAdd={() => {}} />);
  //
  //   const input = screen.getByLabelText(/nueva tarea/i);
  //
  //   // user.type() simula escritura caracter por caracter
  //   await user.type(input, 'Comprar leche');
  //
  //   expect(input).toHaveValue('Comprar leche');
  // });

  // ============================================
  // PASO 6: Submit con botón
  // ============================================
  console.log('--- Paso 6: Submit con botón ---');

  // Descomenta las siguientes líneas:
  // test('llama onAdd al hacer submit con texto válido', async () => {
  //   const user = userEvent.setup();
  //   const handleAdd = vi.fn();
  //   render(<TodoForm onAdd={handleAdd} />);
  //
  //   await user.type(screen.getByLabelText(/nueva tarea/i), 'Hacer ejercicio');
  //   await user.click(screen.getByRole('button', { name: /agregar/i }));
  //
  //   expect(handleAdd).toHaveBeenCalledWith('Hacer ejercicio');
  // });

  // ============================================
  // PASO 7: Submit con Enter
  // ============================================
  console.log('--- Paso 7: Submit con Enter ---');

  // Descomenta las siguientes líneas:
  // test('permite enviar con Enter', async () => {
  //   const user = userEvent.setup();
  //   const handleAdd = vi.fn();
  //   render(<TodoForm onAdd={handleAdd} />);
  //
  //   // {Enter} simula presionar la tecla Enter
  //   await user.type(screen.getByLabelText(/nueva tarea/i), 'Estudiar React{Enter}');
  //
  //   expect(handleAdd).toHaveBeenCalledWith('Estudiar React');
  // });

  // ============================================
  // PASO 8: Validación de error
  // ============================================
  console.log('--- Paso 8: Validación ---');

  // Descomenta las siguientes líneas:
  // test('muestra error si el texto es muy corto', async () => {
  //   const user = userEvent.setup();
  //   const handleAdd = vi.fn();
  //   render(<TodoForm onAdd={handleAdd} />);
  //
  //   await user.type(screen.getByLabelText(/nueva tarea/i), 'ab');
  //   await user.click(screen.getByRole('button', { name: /agregar/i }));
  //
  //   // Verificar que muestra el error
  //   expect(screen.getByRole('alert')).toHaveTextContent(/al menos 3 caracteres/i);
  //
  //   // Verificar que NO llamó onAdd
  //   expect(handleAdd).not.toHaveBeenCalled();
  // });

  // ============================================
  // PASO 9: Limpiar input después de submit
  // ============================================
  console.log('--- Paso 9: Limpiar después de submit ---');

  // Descomenta las siguientes líneas:
  // test('limpia el input después de agregar', async () => {
  //   const user = userEvent.setup();
  //   render(<TodoForm onAdd={() => {}} />);
  //
  //   const input = screen.getByLabelText(/nueva tarea/i);
  //
  //   await user.type(input, 'Nueva tarea');
  //   await user.click(screen.getByRole('button', { name: /agregar/i }));
  //
  //   expect(input).toHaveValue('');
  // });

  // ============================================
  // PASO 10: Limpiar input con clear
  // ============================================
  console.log('--- Paso 10: user.clear() ---');

  // Descomenta las siguientes líneas:
  // test('puede limpiar y reescribir el input', async () => {
  //   const user = userEvent.setup();
  //   render(<TodoForm onAdd={() => {}} />);
  //
  //   const input = screen.getByLabelText(/nueva tarea/i);
  //
  //   await user.type(input, 'Texto inicial');
  //   expect(input).toHaveValue('Texto inicial');
  //
  //   // user.clear() limpia el input
  //   await user.clear(input);
  //   expect(input).toHaveValue('');
  //
  //   await user.type(input, 'Texto nuevo');
  //   expect(input).toHaveValue('Texto nuevo');
  // });
});

console.log('');
console.log('✅ Descomenta cada sección y ejecuta: pnpm test');
