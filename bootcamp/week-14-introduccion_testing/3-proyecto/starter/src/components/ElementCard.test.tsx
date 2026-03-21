// ============================================
// Tests para ElementCard
// ============================================
// TODO: Renombra según tu dominio (BookCard.test.tsx, etc.)
//
// Escribe 5 tests:
// 1. Renderiza nombre del elemento
// 2. Checkbox refleja estado (checked/unchecked)
// 3. Llama onToggle al hacer click en checkbox
// 4. Llama onDelete al hacer click en eliminar
// 5. Tiene aria-label accesible en el botón eliminar
// ============================================

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { ElementCard } from './ElementCard';
import { Element } from '../types';

// Datos de prueba
const mockElement: Element = {
  id: 1,
  name: 'Elemento de prueba',
  completed: false,
};

describe('ElementCard', () => {
  // TODO: Implementa los 5 tests requeridos

  test.todo('renderiza el nombre del elemento');

  test.todo('checkbox está marcado cuando completed es true');

  test.todo('llama onToggle con el id al hacer click en checkbox');

  test.todo('llama onDelete con el id al hacer click en eliminar');

  test.todo('botón eliminar tiene aria-label accesible');
});
