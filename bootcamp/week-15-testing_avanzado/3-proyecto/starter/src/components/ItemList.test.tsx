import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { ItemList } from './ItemList';

describe('ItemList', () => {
  const mockItems = [
    { id: 1, name: 'Item 1', description: 'Descripción 1' },
    { id: 2, name: 'Item 2', description: 'Descripción 2' },
  ];

  // ============================================
  // TODO: Test de renderizado de lista
  // ============================================
  // test('renderiza lista de items', () => {
  //   const handleDelete = vi.fn();
  //   render(
  //     <ItemList items={mockItems} loading={false} onDelete={handleDelete} />
  //   );
  //
  //   expect(screen.getByText('Item 1')).toBeInTheDocument();
  //   expect(screen.getByText('Item 2')).toBeInTheDocument();
  // });

  // ============================================
  // TODO: Test de estado de carga
  // ============================================
  // test('muestra estado de carga', () => {
  //   render(<ItemList items={[]} loading={true} onDelete={vi.fn()} />);
  //
  //   expect(screen.getByRole('status')).toHaveTextContent('Cargando...');
  // });

  // ============================================
  // TODO: Test de lista vacía
  // ============================================
  // test('muestra mensaje cuando la lista está vacía', () => {
  //   render(<ItemList items={[]} loading={false} onDelete={vi.fn()} />);
  //
  //   expect(screen.getByText('No hay items disponibles')).toBeInTheDocument();
  // });

  // ============================================
  // TODO: Test de eliminar item
  // ============================================
  // test('llama onDelete al hacer click en eliminar', async () => {
  //   const user = userEvent.setup();
  //   const handleDelete = vi.fn();
  //   render(
  //     <ItemList items={mockItems} loading={false} onDelete={handleDelete} />
  //   );
  //
  //   await user.click(screen.getByRole('button', { name: /eliminar Item 1/i }));
  //
  //   expect(handleDelete).toHaveBeenCalledWith(1);
  // });

  // Placeholder temporal (borrar cuando descomentes los tests)
  test.skip('placeholder - descomenta los tests reales', () => {});
});
