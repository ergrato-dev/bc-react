import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { ProductList } from './ProductList';
// import { server } from '../mocks/server';
// import { http, HttpResponse } from 'msw';

describe('ProductList', () => {
  // ============================================
  // PASO 4.1: Test de carga exitosa
  // ============================================
  // Verifica que los productos se renderizan desde la API mockeada
  // Descomenta las siguientes líneas:

  // test('renderiza lista de productos de la API', async () => {
  //   // MSW intercepta automáticamente la petición
  //   render(<ProductList />);
  //
  //   // Esperar a que cargue
  //   await waitFor(() => {
  //     expect(screen.getByText('Productos')).toBeInTheDocument();
  //   });
  //
  //   // Verificar productos (definidos en handlers.ts)
  //   expect(screen.getByText('Laptop Pro')).toBeInTheDocument();
  //   expect(screen.getByText('Mouse Wireless')).toBeInTheDocument();
  //   expect(screen.getByText('Teclado Mecánico')).toBeInTheDocument();
  // });

  // ============================================
  // PASO 4.2: Test de error de red
  // ============================================
  // Usa server.use() para sobrescribir handler y simular error
  // Descomenta las siguientes líneas:

  // test('muestra error cuando la API falla', async () => {
  //   // Sobrescribir handler para este test específico
  //   server.use(
  //     http.get('/api/products', () => {
  //       return new HttpResponse(null, { status: 500 });
  //     })
  //   );
  //
  //   render(<ProductList />);
  //
  //   // Esperar mensaje de error
  //   await waitFor(() => {
  //     expect(screen.getByRole('alert')).toHaveTextContent(
  //       'Error al cargar productos'
  //     );
  //   });
  // });

  // ============================================
  // PASO 4.3: Test de lista vacía
  // ============================================
  // Simula respuesta con array vacío
  // Descomenta las siguientes líneas:

  // test('muestra mensaje cuando no hay productos', async () => {
  //   // Sobrescribir handler para devolver array vacío
  //   server.use(
  //     http.get('/api/products', () => {
  //       return HttpResponse.json([]);
  //     })
  //   );
  //
  //   render(<ProductList />);
  //
  //   await waitFor(() => {
  //     expect(
  //       screen.getByText('No hay productos disponibles')
  //     ).toBeInTheDocument();
  //   });
  // });

  // ============================================
  // PASO 4.4: Test de estado de carga
  // ============================================
  // Verifica que se muestra loading inicialmente
  // Descomenta las siguientes líneas:

  // test('muestra estado de carga inicialmente', () => {
  //   render(<ProductList />);
  //
  //   expect(screen.getByRole('status')).toHaveTextContent(
  //     'Cargando productos...'
  //   );
  // });

  // Placeholder temporal (borrar cuando descomentes los tests)
  test.skip('placeholder - descomenta los tests reales', () => {});
});
