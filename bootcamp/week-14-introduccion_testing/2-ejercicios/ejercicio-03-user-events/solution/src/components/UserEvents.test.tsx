// ============================================
// SOLUCIÓN: User Events
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
  test('incrementa el contador al hacer click en +', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  test('decrementa el contador al hacer click en -', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={5} />);

    await user.click(screen.getByRole('button', { name: '-' }));
    await user.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByTestId('count')).toHaveTextContent('3');
  });

  test('llama onChange con el nuevo valor', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Counter onChange={handleChange} />);

    await user.click(screen.getByRole('button', { name: '+' }));

    expect(handleChange).toHaveBeenCalledWith(1);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('resetea el contador al valor inicial', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={10} />);

    await user.click(screen.getByRole('button', { name: '+' }));
    await user.click(screen.getByRole('button', { name: '+' }));
    expect(screen.getByTestId('count')).toHaveTextContent('12');

    await user.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByTestId('count')).toHaveTextContent('10');
  });
});

// ============================================
// PARTE B: Testing de TodoForm con typing
// ============================================

describe('TodoForm', () => {
  test('permite escribir en el input', async () => {
    const user = userEvent.setup();
    render(<TodoForm onAdd={() => {}} />);

    const input = screen.getByLabelText(/nueva tarea/i);

    await user.type(input, 'Comprar leche');

    expect(input).toHaveValue('Comprar leche');
  });

  test('llama onAdd al hacer submit con texto válido', async () => {
    const user = userEvent.setup();
    const handleAdd = vi.fn();
    render(<TodoForm onAdd={handleAdd} />);

    await user.type(screen.getByLabelText(/nueva tarea/i), 'Hacer ejercicio');
    await user.click(screen.getByRole('button', { name: /agregar/i }));

    expect(handleAdd).toHaveBeenCalledWith('Hacer ejercicio');
  });

  test('permite enviar con Enter', async () => {
    const user = userEvent.setup();
    const handleAdd = vi.fn();
    render(<TodoForm onAdd={handleAdd} />);

    await user.type(
      screen.getByLabelText(/nueva tarea/i),
      'Estudiar React{Enter}',
    );

    expect(handleAdd).toHaveBeenCalledWith('Estudiar React');
  });

  test('muestra error si el texto es muy corto', async () => {
    const user = userEvent.setup();
    const handleAdd = vi.fn();
    render(<TodoForm onAdd={handleAdd} />);

    await user.type(screen.getByLabelText(/nueva tarea/i), 'ab');
    await user.click(screen.getByRole('button', { name: /agregar/i }));

    expect(screen.getByRole('alert')).toHaveTextContent(
      /al menos 3 caracteres/i,
    );
    expect(handleAdd).not.toHaveBeenCalled();
  });

  test('limpia el input después de agregar', async () => {
    const user = userEvent.setup();
    render(<TodoForm onAdd={() => {}} />);

    const input = screen.getByLabelText(/nueva tarea/i);

    await user.type(input, 'Nueva tarea');
    await user.click(screen.getByRole('button', { name: /agregar/i }));

    expect(input).toHaveValue('');
  });

  test('puede limpiar y reescribir el input', async () => {
    const user = userEvent.setup();
    render(<TodoForm onAdd={() => {}} />);

    const input = screen.getByLabelText(/nueva tarea/i);

    await user.type(input, 'Texto inicial');
    expect(input).toHaveValue('Texto inicial');

    await user.clear(input);
    expect(input).toHaveValue('');

    await user.type(input, 'Texto nuevo');
    expect(input).toHaveValue('Texto nuevo');
  });
});
