// ============================================
// FUNCIONES DE API Y DATOS MOCK
// ============================================
// Implementa funciones para obtener datos de tu dominio

import type { Item, Stats, RealTimeData } from '../types';

// ============================================
// CONFIGURACIÓN
// ============================================

// TODO: Configura la URL base de tu API o usa datos mock
const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Cambiar si usas API real

// Helper para simular latencia de red (útil con datos mock)
const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

// ============================================
// DATOS MOCK (EJEMPLO)
// ============================================

// TODO: Reemplaza estos datos mock con datos de tu dominio
// Ejemplos por dominio:
// - Biblioteca: MOCK_BOOKS
// - Farmacia: MOCK_MEDICINES
// - Gimnasio: MOCK_MEMBERS
// - Restaurante: MOCK_DISHES

const MOCK_ITEMS: Item[] = [
  {
    id: 1,
    name: 'Item 1',
    description: 'Descripción del item 1',
    // TODO: Agregar propiedades específicas
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'Descripción del item 2',
    // TODO: Agregar propiedades específicas
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'Descripción del item 3',
    // TODO: Agregar propiedades específicas
  },
  // TODO: Agregar más items mock (al menos 5-10)
];

// ============================================
// FUNCIONES DE FETCH
// ============================================

/**
 * Obtiene la lista principal de elementos
 * TODO: Implementar fetch real o retornar datos mock adaptados a tu dominio
 *
 * @param signal - AbortSignal para cancelar la petición
 * @returns Promise con array de Items
 *
 * Ejemplos por dominio:
 * - fetchBooks: retorna libros de la biblioteca
 * - fetchMedicines: retorna medicamentos de la farmacia
 * - fetchMembers: retorna miembros del gimnasio
 * - fetchDishes: retorna platillos del restaurante
 */
export const fetchItems = async (signal?: AbortSignal): Promise<Item[]> => {
  // TODO: Implementar fetch real o usar mock data

  // Opción 1: Usar API real
  // const response = await fetch(`${API_BASE_URL}/items`, { signal });
  // if (!response.ok) throw new Error('Error fetching items');
  // return response.json();

  // Opción 2: Datos mock con delay simulado
  await delay(1000); // Simula latencia de red
  return MOCK_ITEMS;

  // Opción 3: Usar JSONPlaceholder como API de prueba
  // const response = await fetch(`${API_BASE_URL}/posts`, { signal });
  // const posts = await response.json();
  // return posts.slice(0, 10).map(post => ({
  //   id: post.id,
  //   name: post.title,
  //   description: post.body,
  // }));
};

/**
 * Obtiene estadísticas del dominio
 * TODO: Implementar lógica para calcular/obtener stats de tu dominio
 *
 * @returns Promise con objeto Stats
 *
 * Ejemplos por dominio:
 * - Biblioteca: totalBooks, borrowedToday, availablePercentage
 * - Farmacia: totalProducts, salesCount, lowStockPercentage
 * - Gimnasio: totalMembers, todayAttendance, occupancyPercentage
 */
export const fetchStats = async (): Promise<Stats> => {
  // TODO: Implementar fetch o cálculo de estadísticas

  await delay(800);

  return {
    total: 0, // TODO: Calcular total de elementos
    active: 0, // TODO: Calcular elementos activos
    percentage: 0, // TODO: Calcular porcentaje relevante
    // TODO: Agregar más métricas específicas
  };
};

/**
 * Obtiene datos en tiempo real que se actualizan periódicamente
 * TODO: Implementar fetch de dato que cambia frecuentemente
 *
 * @returns Promise con RealTimeData
 *
 * Ejemplos por dominio:
 * - Biblioteca: roomOccupancy (cuántas personas en salas de lectura)
 * - Farmacia: pendingOrders (pedidos sin procesar)
 * - Gimnasio: currentOccupancy (personas actualmente en el gimnasio)
 * - Restaurante: occupiedTables (mesas ocupadas ahora)
 */
export const fetchRealTimeData = async (): Promise<RealTimeData> => {
  // TODO: Implementar fetch de dato en tiempo real

  await delay(500);

  // Genera valor aleatorio para simular cambios
  const randomValue = Math.floor(Math.random() * 100);

  return {
    value: randomValue,
    label: 'Dato en Tiempo Real', // TODO: Cambiar label a tu dominio
    unit: 'unidades', // TODO: Cambiar unidad según tu dominio
    lastUpdated: new Date().toISOString(),
  };
};

/**
 * Busca items por query (opcional)
 * TODO: Implementar si tu dashboard incluye búsqueda/filtrado
 *
 * @param query - Término de búsqueda
 * @returns Promise con array filtrado de Items
 */
export const searchItems = async (query: string): Promise<Item[]> => {
  // TODO: Implementar búsqueda

  await delay(600);

  if (!query.trim()) {
    return MOCK_ITEMS;
  }

  // Filtrado simple por nombre
  return MOCK_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );
};

// ============================================
// EJEMPLO DE USO DE JSONPlaceholder API
// ============================================

/**
 * Ejemplo de cómo adaptar JSONPlaceholder a tu dominio
 * Descomenta y modifica según necesites
 */

// export const fetchItemsFromAPI = async (
//   signal?: AbortSignal,
// ): Promise<Item[]> => {
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/users',
//     { signal },
//   );
//
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//
//   const users = await response.json();
//
//   // Transforma datos de API a tu interfaz Item
//   return users.map((user: any) => ({
//     id: user.id,
//     name: user.name,
//     description: user.email,
//     // Agrega más propiedades según tu dominio
//   }));
// };
