// ============================================
// CONFIGURACIÓN: MSW Server para tests de Node
// ============================================

import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// ============================================
// PASO 1: Crear servidor MSW
// ============================================
// El servidor intercepta peticiones HTTP en tests de Node.js
// Descomenta las siguientes líneas:

// export const server = setupServer(...handlers);

// Placeholder para que TypeScript no se queje
export const server = {
  listen: () => {},
  close: () => {},
  resetHandlers: () => {},
  use: (..._handlers: unknown[]) => {},
};
