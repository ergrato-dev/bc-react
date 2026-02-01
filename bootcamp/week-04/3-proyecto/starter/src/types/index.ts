// ============================================
// TIPOS E INTERFACES
// ============================================
// Adapta estos tipos a tu dominio asignado

// TODO: Renombrar según tu dominio
// Ejemplos: Book, Medicine, GymClass, Dish, Doctor, Vehicle
export interface Item {
  id: number;
  name: string;
  // TODO: Agregar propiedades de tu dominio
  // Ejemplos:
  // author: string;         // Biblioteca
  // laboratory: string;     // Farmacia
  // instructor: string;     // Gimnasio
  // chef: string;           // Restaurante
  category: string;
  price: number;
  rating: number;
  isAvailable: boolean;
  createdAt: string;
}

// Categorías de tu dominio
// TODO: Adaptar las categorías
export type Category = 'all' | 'category1' | 'category2' | 'category3';
// Ejemplos:
// Biblioteca: 'fiction' | 'non-fiction' | 'science' | 'history'
// Farmacia: 'analgesicos' | 'antibioticos' | 'vitaminas'
// Gimnasio: 'cardio' | 'fuerza' | 'yoga' | 'spinning'

// Opciones de ordenamiento
export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'rating';

// Estado de los filtros
export interface FilterState {
  searchTerm: string;
  category: Category;
  showOnlyAvailable: boolean;
  sortBy: SortOption;
  minPrice?: number;
  maxPrice?: number;
}
