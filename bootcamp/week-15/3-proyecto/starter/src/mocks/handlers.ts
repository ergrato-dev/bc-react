// ============================================
// HANDLERS: Definición de interceptores MSW
// ============================================

// import { http, HttpResponse } from 'msw';
// import type { Item, NewItem } from '../types';

// Datos de prueba
// let mockItems: Item[] = [
//   { id: 1, name: 'Item 1', description: 'Descripción del item 1' },
//   { id: 2, name: 'Item 2', description: 'Descripción del item 2' },
// ];
//
// let nextId = 3;

// ============================================
// TODO: Crear handlers para interceptar peticiones
// ============================================
// Descomenta las siguientes líneas:

// export const handlers = [
//   // GET /api/items - Lista de items
//   http.get('/api/items', () => {
//     return HttpResponse.json(mockItems);
//   }),
//
//   // POST /api/items - Crear item
//   http.post('/api/items', async ({ request }) => {
//     const newItem = (await request.json()) as NewItem;
//     const created: Item = {
//       id: nextId++,
//       ...newItem,
//     };
//     mockItems.push(created);
//     return HttpResponse.json(created, { status: 201 });
//   }),
//
//   // DELETE /api/items/:id - Eliminar item
//   http.delete('/api/items/:id', ({ params }) => {
//     const { id } = params;
//     const index = mockItems.findIndex((item) => item.id === Number(id));
//
//     if (index === -1) {
//       return new HttpResponse(null, { status: 404 });
//     }
//
//     mockItems = mockItems.filter((item) => item.id !== Number(id));
//     return new HttpResponse(null, { status: 204 });
//   }),
// ];

// Placeholder para que TypeScript no se queje
export const handlers: unknown[] = [];
