// ============================================
// SETUP: Configuración global de tests
// ============================================

import '@testing-library/jest-dom/vitest';
// import { server } from './mocks/server';
import { beforeAll, afterEach, afterAll } from 'vitest';

// ============================================
// TODO: Configurar ciclo de vida del servidor MSW
// ============================================
// Descomenta las siguientes líneas:

// beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// Placeholder temporal (borrar cuando descomentes lo de arriba)
beforeAll(() => {});
afterEach(() => {});
afterAll(() => {});
