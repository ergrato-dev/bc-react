// ============================================
// Tests para ElementForm
// ============================================
// TODO: Renombra según tu dominio (BookForm.test.tsx, etc.)
//
// Escribe 5 tests:
// 1. Renderiza input y botón
// 2. Permite escribir en el input
// 3. Muestra error con texto muy corto
// 4. Llama onAdd con texto válido
// 5. Limpia input después de agregar
// ============================================

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { ElementForm } from './ElementForm';

describe('ElementForm', () => {
  // TODO: Implementa los 5 tests requeridos

  test.todo('renderiza input y botón de agregar');

  test.todo('permite escribir en el input');

  test.todo('muestra error cuando el texto tiene menos de 3 caracteres');

  test.todo('llama onAdd con el texto cuando es válido');

  test.todo('limpia el input después de agregar exitosamente');
});
