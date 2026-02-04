// ============================================
// Tests para ElementList
// ============================================
// TODO: Renombra según tu dominio (BookList.test.tsx, etc.)
//
// Escribe 5 tests:
// 1. Muestra mensaje cuando la lista está vacía
// 2. Renderiza todos los elementos
// 3. Muestra contador correcto de completados
// 4. onToggle propaga el id del elemento correcto
// 5. onDelete propaga el id del elemento correcto
// ============================================

import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { ElementList } from './ElementList';
import { Element } from '../types';

// Datos de prueba
const mockElements: Element[] = [
  { id: 1, name: 'Elemento 1', completed: true },
  { id: 2, name: 'Elemento 2', completed: false },
  { id: 3, name: 'Elemento 3', completed: false },
];

describe('ElementList', () => {
  // TODO: Implementa los 5 tests requeridos

  test.todo('muestra mensaje cuando la lista está vacía');

  test.todo('renderiza todos los elementos de la lista');

  test.todo('muestra el contador correcto de completados');

  test.todo('onToggle recibe el id del elemento correcto');

  test.todo('onDelete recibe el id del elemento correcto');
});
