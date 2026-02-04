import { Item } from '../types';

// ============================================
// GENERADOR DE DATOS
// ============================================
// Genera datos de prueba para el dashboard
// NOTA: Adapta las categorías y valores a tu dominio

const categories = ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D'];
const statuses: Array<'active' | 'inactive' | 'pending'> = [
  'active',
  'inactive',
  'pending',
];

/**
 * Genera un array de elementos de prueba
 * @param count - Cantidad de elementos a generar
 */
export const generateItems = (count: number): Item[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Elemento ${i + 1}`,
    description: `Descripción del elemento número ${i + 1}`,
    category: categories[Math.floor(Math.random() * categories.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    value: Math.floor(Math.random() * 1000) + 100,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    updatedAt: new Date().toISOString(),
  }));
};
