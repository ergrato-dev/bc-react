// ============================================
// TIPOS: Definiciones de TypeScript
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta estos tipos a tu dominio asignado.
// Ejemplos:
// - Biblioteca: Book (id, title, author, isbn, available)
// - Farmacia: Medicine (id, name, laboratory, price, stock)
// - Gimnasio: Member (id, name, email, membershipType, active)
// - Restaurante: Dish (id, name, description, price, category)

/**
 * Tipo base para un item del dominio
 * TODO: Adaptar campos a tu dominio
 */
export interface Item {
  id: number;
  name: string;
  description: string;
  // Agrega campos específicos de tu dominio aquí
  // Ejemplo (Biblioteca): author?: string; isbn?: string;
  // Ejemplo (Farmacia): price?: number; stock?: number;
}

/**
 * Tipo para crear un nuevo item (sin id)
 */
export type NewItem = Omit<Item, 'id'>;

/**
 * Estado de carga
 */
export interface LoadingState {
  loading: boolean;
  error: string | null;
}
