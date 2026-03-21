// ============================================
// SOLUCIÓN: Testing de Componentes React
// ============================================

import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { ItemCard } from './ItemCard';
import { ItemList } from './ItemList';
import { Item } from '../types';

const mockItem: Item = {
  id: 1,
  name: 'Aprender Testing',
  completed: false,
};

const mockItems: Item[] = [
  { id: 1, name: 'Aprender Vitest', completed: true },
  { id: 2, name: 'Aprender RTL', completed: false },
  { id: 3, name: 'Testear componentes', completed: false },
];

// ============================================
// PARTE A: Testing de ItemCard
// ============================================

describe('ItemCard', () => {
  test('renderiza el nombre del item', () => {
    render(
      <ItemCard
        item={mockItem}
        onToggle={() => {}}
        onDelete={() => {}}
      />,
    );

    expect(screen.getByText('Aprender Testing')).toBeInTheDocument();
  });

  test('checkbox no está marcado cuando completed es false', () => {
    render(
      <ItemCard
        item={mockItem}
        onToggle={() => {}}
        onDelete={() => {}}
      />,
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('checkbox está marcado cuando completed es true', () => {
    const completedItem = { ...mockItem, completed: true };

    render(
      <ItemCard
        item={completedItem}
        onToggle={() => {}}
        onDelete={() => {}}
      />,
    );

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  test('llama onToggle con el id al hacer click en checkbox', async () => {
    const user = userEvent.setup();
    const handleToggle = vi.fn();

    render(
      <ItemCard
        item={mockItem}
        onToggle={handleToggle}
        onDelete={() => {}}
      />,
    );

    await user.click(screen.getByRole('checkbox'));

    expect(handleToggle).toHaveBeenCalledWith(1);
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });

  test('llama onDelete con el id al hacer click en eliminar', async () => {
    const user = userEvent.setup();
    const handleDelete = vi.fn();

    render(
      <ItemCard
        item={mockItem}
        onToggle={() => {}}
        onDelete={handleDelete}
      />,
    );

    await user.click(screen.getByRole('button', { name: /eliminar/i }));

    expect(handleDelete).toHaveBeenCalledWith(1);
  });
});

// ============================================
// PARTE B: Testing de ItemList
// ============================================

describe('ItemList', () => {
  test('muestra mensaje cuando la lista está vacía', () => {
    render(
      <ItemList
        items={[]}
        onToggle={() => {}}
        onDelete={() => {}}
      />,
    );

    expect(screen.getByText(/no hay elementos/i)).toBeInTheDocument();
  });

  test('renderiza todos los items de la lista', () => {
    render(
      <ItemList
        items={mockItems}
        onToggle={() => {}}
        onDelete={() => {}}
      />,
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('muestra el contador de completados', () => {
    render(
      <ItemList
        items={mockItems}
        onToggle={() => {}}
        onDelete={() => {}}
      />,
    );

    expect(screen.getByTestId('counter')).toHaveTextContent(
      'Completados: 1 de 3',
    );
  });

  test('cada item tiene su propio checkbox', () => {
    render(
      <ItemList
        items={mockItems}
        onToggle={() => {}}
        onDelete={() => {}}
      />,
    );

    const listItems = screen.getAllByRole('listitem');

    const firstItem = listItems[0];
    expect(within(firstItem).getByRole('checkbox')).toBeChecked();

    const secondItem = listItems[1];
    expect(within(secondItem).getByRole('checkbox')).not.toBeChecked();
  });

  test('onToggle recibe el id del item correcto', async () => {
    const user = userEvent.setup();
    const handleToggle = vi.fn();

    render(
      <ItemList
        items={mockItems}
        onToggle={handleToggle}
        onDelete={() => {}}
      />,
    );

    const listItems = screen.getAllByRole('listitem');

    await user.click(within(listItems[1]).getByRole('checkbox'));

    expect(handleToggle).toHaveBeenCalledWith(2);
  });

  test('onDelete recibe el id del item correcto', async () => {
    const user = userEvent.setup();
    const handleDelete = vi.fn();

    render(
      <ItemList
        items={mockItems}
        onToggle={() => {}}
        onDelete={handleDelete}
      />,
    );

    await user.click(screen.getByRole('button', { name: /eliminar testear/i }));

    expect(handleDelete).toHaveBeenCalledWith(3);
  });
});
