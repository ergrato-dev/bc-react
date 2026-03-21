/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    // ============================================
    // PASO 1: Configurar cobertura de código
    // ============================================
    coverage: {
      // Proveedor de cobertura (v8 es más rápido)
      provider: 'v8',

      // Formatos de reporte
      reporter: ['text', 'html', 'lcov'],

      // Incluir solo archivos de src (excluyendo tests)
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/**/*.spec.{ts,tsx}',
        'src/setupTests.ts',
      ],

      // Umbrales mínimos de cobertura
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  },
});
