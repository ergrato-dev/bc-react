// ============================================
// EJERCICIO: Testing de Componentes React
// ============================================
// Descomenta cada sección y completa los tests
// ============================================

import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { ItemCard } from './ItemCard';
import { ItemList } from './ItemList';
import { Item } from '../types';

// Datos de prueba
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
  // ============================================
  // PASO 1: Renderiza el nombre del item
  // ============================================
  console.log('--- Paso 1: Renderiza nombre ---');

  // Descomenta las siguientes líneas:
  // test('renderiza el nombre del item', () => {
  //   render(
  //     <ItemCard
  //       item={mockItem}
  //       onToggle={() => {}}
  //       onDelete={() => {}}
  //     />
  //   );
  //
  //   expect(screen.getByText('Aprender Testing')).toBeInTheDocument();
  // });

  // ============================================
  // PASO 2: Checkbox no marcado
  // ============================================
  console.log('--- Paso 2: Checkbox unchecked ---');

  // Descomenta las siguientes líneas:
  // test('checkbox no está marcado cuando completed es false', () => {
  //   render(
  //     <ItemCard
  //       item={mockItem}
  //       onToggle={() => {}}
  //       onDelete={() => {}}
  //     />
  //   );
  //
  //   const checkbox = screen.getByRole('checkbox');
  //   expect(checkbox).not.toBeChecked();
  // });

  // ============================================
  // PASO 3: Checkbox marcado
  // ============================================
  console.log('--- Paso 3: Checkbox checked ---');

  // Descomenta las siguientes líneas:
  // test('checkbox está marcado cuando completed es true', () => {
  //   const completedItem = { ...mockItem, completed: true };
  //
  //   render(
  //     <ItemCard
  //       item={completedItem}
  //       onToggle={() => {}}
  //       onDelete={() => {}}
  //     />
  //   );
  //
  //   expect(screen.getByRole('checkbox')).toBeChecked();
  // });

  // ============================================
  // PASO 4: Llama onToggle al hacer click
  // ============================================
  console.log('--- Paso 4: onToggle callback ---');

  // Descomenta las siguientes líneas:
  // test('llama onToggle con el id al hacer click en checkbox', async () => {
  //   const user = userEvent.setup();
  //   const handleToggle = vi.fn();
  //
  //   render(
  //     <ItemCard
  //       item={mockItem}
  //       onToggle={handleToggle}
  //       onDelete={() => {}}
  //     />
  //   );
  //
  //   await user.click(screen.getByRole('checkbox'));
  //
  //   expect(handleToggle).toHaveBeenCalledWith(1);
  //   expect(handleToggle).toHaveBeenCalledTimes(1);
  // });

  // ============================================
  // PASO 5: Llama onDelete al hacer click
  // ============================================
  console.log('--- Paso 5: onDelete callback ---');

  // Descomenta las siguientes líneas:
  // test('llama onDelete con el id al hacer click en eliminar', async () => {
  //   const user = userEvent.setup();
  //   const handleDelete = vi.fn();
  //
  //   render(
  //     <ItemCard
  //       item={mockItem}
  //       onToggle={() => {}}
  //       onDelete={handleDelete}
  //     />
  //   );
  //
  //   // Usamos aria-label para encontrar el botón
  //   await user.click(screen.getByRole('button', { name: /eliminar/i }));
  //
  //   expect(handleDelete).toHaveBeenCalledWith(1);
  // });
});

// ============================================
// PARTE B: Testing de ItemList
// ============================================

describe('ItemList', () => {
  // ============================================
  // PASO 6: Mensaje de lista vacía
  // ============================================
  console.log('--- Paso 6: Lista vacía ---');

  // Descomenta las siguientes líneas:
  // test('muestra mensaje cuando la lista está vacía', () => {
  //   render(
  //     <ItemList
  //       items={[]}
  //       onToggle={() => {}}
  //       onDelete={() => {}}
  //     />
  //   );
  //
  //   expect(screen.getByText(/no hay elementos/i)).toBeInTheDocument();
  // });

  // ============================================
  // PASO 7: Renderiza todos los items
  // ============================================
  console.log('--- Paso 7: Renderiza items ---');

  // Descomenta las siguientes líneas:
  // test('renderiza todos los items de la lista', () => {
  //   render(
  //     <ItemList
  //       items={mockItems}
  //       onToggle={() => {}}
  //       onDelete={() => {}}
  //     />
  //   );
  //
  //   const listItems = screen.getAllByRole('listitem');
  //   expect(listItems).toHaveLength(3);
  // });

  // ============================================
  // PASO 8: Muestra contador correcto
  // ============================================
  console.log('--- Paso 8: Contador ---');

  // Descomenta las siguientes líneas:
  // test('muestra el contador de completados', () => {
  //   render(
  //     <ItemList
  //       items={mockItems}
  //       onToggle={() => {}}
  //       onDelete={() => {}}
  //     />
  //   );
  //
  //   // mockItems tiene 1 completado de 3
  //   expect(screen.getByTestId('counter')).toHaveTextContent('Completados: 1 de 3');
  // });

  // ============================================
  // PASO 9: Usando within para queries específicas
  // ============================================
  console.log('--- Paso 9: Usando within ---');

  // Descomenta las siguientes líneas:
  // test('cada item tiene su propio checkbox', () => {
  //   render(
  //     <ItemList
  //       items={mockItems}
  //       onToggle={() => {}}
  //       onDelete={() => {}}
  //     />
  //   );
  //
  //   const listItems = screen.getAllByRole('listitem');
  //
  //   // El primer item (Vitest) está completado
  //   const firstItem = listItems[0];
  //   expect(within(firstItem).getByRole('checkbox')).toBeChecked();
  //
  //   // El segundo item (RTL) no está completado
  //   const secondItem = listItems[1];
  //   expect(within(secondItem).getByRole('checkbox')).not.toBeChecked();
  // });

  // ============================================
  // PASO 10: Toggle propaga el id correcto
  // ============================================
  console.log('--- Paso 10: Toggle propaga id ---');

  // Descomenta las siguientes líneas:
  // test('onToggle recibe el id del item correcto', async () => {
  //   const user = userEvent.setup();
  //   const handleToggle = vi.fn();
  //
  //   render(
  //     <ItemList
  //       items={mockItems}
  //       onToggle={handleToggle}
  //       onDelete={() => {}}
  //     />
  //   );
  //
  //   const listItems = screen.getAllByRole('listitem');
  //
  //   // Click en el checkbox del segundo item (id: 2)
  //   await user.click(within(listItems[1]).getByRole('checkbox'));
  //
  //   expect(handleToggle).toHaveBeenCalledWith(2);
  // });

  // ============================================
  // PASO 11: Delete propaga el id correcto
  // ============================================
  console.log('--- Paso 11: Delete propaga id ---');

  // Descomenta las siguientes líneas:
  // test('onDelete recibe el id del item correcto', async () => {
  //   const user = userEvent.setup();
  //   const handleDelete = vi.fn();
  //
  //   render(
  //     <ItemList
  //       items={mockItems}
  //       onToggle={() => {}}
  //       onDelete={handleDelete}
  //     />
  //   );
  //
  //   // Click en eliminar el tercer item "Testear componentes" (id: 3)
  //   await user.click(screen.getByRole('button', { name: /eliminar testear/i }));
  //
  //   expect(handleDelete).toHaveBeenCalledWith(3);
  // });
});

console.log('');
console.log('✅ Descomenta cada sección y ejecuta: pnpm test');
