// ============================================
// CONFIGURACIÓN: MSW Server para tests de Node
// ============================================

// import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// ============================================
// TODO: Crear servidor MSW
// ============================================
// Descomenta las siguientes líneas:

// export const server = setupServer(...handlers);

// Placeholder para que TypeScript no se queje
export const server = {
  listen: (_options?: unknown) => {},
  close: () => {},
  resetHandlers: () => {},
  use: (..._handlers: unknown[]) => {},
};

// Exportar handlers para poder usarlos en tests
export { handlers };
