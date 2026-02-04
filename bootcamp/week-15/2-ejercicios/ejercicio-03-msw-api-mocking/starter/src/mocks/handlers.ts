// ============================================
// HANDLERS: Definición de interceptores MSW
// ============================================

import { http, HttpResponse } from 'msw';

// Datos de prueba
const mockProducts = [
  { id: 1, name: 'Laptop Pro', price: 1299.99, stock: 15 },
  { id: 2, name: 'Mouse Wireless', price: 29.99, stock: 50 },
  { id: 3, name: 'Teclado Mecánico', price: 89.99, stock: 30 },
];

// ============================================
// PASO 2: Crear handlers para interceptar peticiones
// ============================================
// Los handlers definen cómo responder a peticiones específicas
// Descomenta las siguientes líneas:

// export const handlers = [
//   // GET /api/products - Lista de productos
//   http.get('/api/products', () => {
//     return HttpResponse.json(mockProducts);
//   }),
//
//   // GET /api/products/:id - Producto individual
//   http.get('/api/products/:id', ({ params }) => {
//     const { id } = params;
//     const product = mockProducts.find((p) => p.id === Number(id));
//
//     if (!product) {
//       return new HttpResponse(null, { status: 404 });
//     }
//
//     return HttpResponse.json(product);
//   }),
// ];

// Placeholder para que TypeScript no se queje
export const handlers: unknown[] = [];
