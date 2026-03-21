// ============================================
// SETUP: Configuración global de tests
// ============================================

import '@testing-library/jest-dom/vitest';
import { server } from './mocks/server';
import { beforeAll, afterEach, afterAll } from 'vitest';

// ============================================
// PASO 3: Configurar ciclo de vida del servidor MSW
// ============================================
// El servidor debe iniciarse antes de los tests,
// resetear handlers entre tests, y cerrarse al final.

// Iniciar servidor antes de todos los tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Resetear handlers después de cada test
afterEach(() => server.resetHandlers());

// Cerrar servidor después de todos los tests
afterAll(() => server.close());
