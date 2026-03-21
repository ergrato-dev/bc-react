// ============================================
// CONFIGURACIÓN: MSW Server para tests de Node
// ============================================

import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// ============================================
// PASO 1: Crear servidor MSW
// ============================================
// El servidor intercepta peticiones HTTP en tests de Node.js

export const server = setupServer(...handlers);
