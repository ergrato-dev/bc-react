// ============================================
// DATOS MOCK
// ============================================
// TODO: Adapta estos datos a tu dominio

import { Item } from '../types';

// TODO: Renombrar y adaptar los datos según tu dominio
export const items: Item[] = [
  {
    id: 1,
    name: 'Elemento Uno',
    category: 'category1',
    price: 29.99,
    rating: 4.5,
    isAvailable: true,
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Elemento Dos',
    category: 'category2',
    price: 49.99,
    rating: 4.8,
    isAvailable: true,
    createdAt: '2024-02-20',
  },
  {
    id: 3,
    name: 'Elemento Tres',
    category: 'category1',
    price: 19.99,
    rating: 4.2,
    isAvailable: false,
    createdAt: '2024-01-10',
  },
  {
    id: 4,
    name: 'Elemento Cuatro',
    category: 'category3',
    price: 99.99,
    rating: 4.9,
    isAvailable: true,
    createdAt: '2024-03-05',
  },
  {
    id: 5,
    name: 'Elemento Cinco',
    category: 'category2',
    price: 39.99,
    rating: 4.0,
    isAvailable: true,
    createdAt: '2024-02-15',
  },
  {
    id: 6,
    name: 'Elemento Seis',
    category: 'category3',
    price: 59.99,
    rating: 4.6,
    isAvailable: false,
    createdAt: '2024-01-25',
  },
  {
    id: 7,
    name: 'Elemento Siete',
    category: 'category1',
    price: 14.99,
    rating: 3.9,
    isAvailable: true,
    createdAt: '2024-03-10',
  },
  {
    id: 8,
    name: 'Elemento Ocho',
    category: 'category2',
    price: 79.99,
    rating: 4.7,
    isAvailable: true,
    createdAt: '2024-02-28',
  },
];

// Categorías con etiquetas
// TODO: Adaptar las categorías según tu dominio
export const categories = [
  { value: 'all', label: 'Todas las categorías' },
  { value: 'category1', label: '📦 Categoría 1' },
  { value: 'category2', label: '📦 Categoría 2' },
  { value: 'category3', label: '📦 Categoría 3' },
];

// Opciones de ordenamiento
export const sortOptions = [
  { value: 'name-asc', label: 'Nombre (A-Z)' },
  { value: 'name-desc', label: 'Nombre (Z-A)' },
  { value: 'price-asc', label: 'Precio (menor a mayor)' },
  { value: 'price-desc', label: 'Precio (mayor a menor)' },
  { value: 'rating', label: 'Mejor valorados' },
];
