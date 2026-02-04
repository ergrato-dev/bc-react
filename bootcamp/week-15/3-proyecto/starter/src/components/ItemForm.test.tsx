import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { ItemForm } from './ItemForm';

describe('ItemForm', () => {
  // ============================================
  // TODO: Test de renderizado del formulario
  // ============================================
  // test('renderiza campos del formulario', () => {
  //   render(<ItemForm onSubmit={vi.fn()} />);
  //
  //   expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
  //   expect(screen.getByLabelText(/descripción/i)).toBeInTheDocument();
  //   expect(screen.getByRole('button', { name: /crear item/i })).toBeInTheDocument();
  // });

  // ============================================
  // TODO: Test de validación de nombre
  // ============================================
  // test('muestra error si nombre está vacío', async () => {
  //   const user = userEvent.setup();
  //   render(<ItemForm onSubmit={vi.fn()} />);
  //
  //   // Llenar solo descripción
  //   await user.type(screen.getByLabelText(/descripción/i), 'Descripción');
  //   await user.click(screen.getByRole('button', { name: /crear item/i }));
  //
  //   expect(screen.getByRole('alert')).toHaveTextContent('El nombre es requerido');
  // });

  // ============================================
  // TODO: Test de validación de descripción
  // ============================================
  // test('muestra error si descripción está vacía', async () => {
  //   const user = userEvent.setup();
  //   render(<ItemForm onSubmit={vi.fn()} />);
  //
  //   // Llenar solo nombre
  //   await user.type(screen.getByLabelText(/nombre/i), 'Nombre');
  //   await user.click(screen.getByRole('button', { name: /crear item/i }));
  //
  //   expect(screen.getByRole('alert')).toHaveTextContent('La descripción es requerida');
  // });

  // ============================================
  // TODO: Test de submit exitoso
  // ============================================
  // test('llama onSubmit con datos correctos', async () => {
  //   const user = userEvent.setup();
  //   const handleSubmit = vi.fn().mockResolvedValue(undefined);
  //   render(<ItemForm onSubmit={handleSubmit} />);
  //
  //   await user.type(screen.getByLabelText(/nombre/i), 'Nuevo Item');
  //   await user.type(screen.getByLabelText(/descripción/i), 'Descripción del item');
  //   await user.click(screen.getByRole('button', { name: /crear item/i }));
  //
  //   await waitFor(() => {
  //     expect(handleSubmit).toHaveBeenCalledWith({
  //       name: 'Nuevo Item',
  //       description: 'Descripción del item',
  //     });
  //   });
  // });

  // ============================================
  // TODO: Test de limpieza del formulario
  // ============================================
  // test('limpia formulario después de submit exitoso', async () => {
  //   const user = userEvent.setup();
  //   const handleSubmit = vi.fn().mockResolvedValue(undefined);
  //   render(<ItemForm onSubmit={handleSubmit} />);
  //
  //   await user.type(screen.getByLabelText(/nombre/i), 'Nuevo Item');
  //   await user.type(screen.getByLabelText(/descripción/i), 'Descripción');
  //   await user.click(screen.getByRole('button', { name: /crear item/i }));
  //
  //   await waitFor(() => {
  //     expect(screen.getByLabelText(/nombre/i)).toHaveValue('');
  //     expect(screen.getByLabelText(/descripción/i)).toHaveValue('');
  //   });
  // });

  // ============================================
  // TODO: Test de error en submit
  // ============================================
  // test('muestra error si onSubmit falla', async () => {
  //   const user = userEvent.setup();
  //   const handleSubmit = vi.fn().mockRejectedValue(new Error('Error'));
  //   render(<ItemForm onSubmit={handleSubmit} />);
  //
  //   await user.type(screen.getByLabelText(/nombre/i), 'Item');
  //   await user.type(screen.getByLabelText(/descripción/i), 'Desc');
  //   await user.click(screen.getByRole('button', { name: /crear item/i }));
  //
  //   await waitFor(() => {
  //     expect(screen.getByRole('alert')).toHaveTextContent('Error al crear item');
  //   });
  // });

  // Placeholder temporal (borrar cuando descomentes los tests)
  test.skip('placeholder - descomenta los tests reales', () => {});
});
