// ============================================
// Tipos para el proyecto
// ============================================
// TODO: Adapta estos tipos a tu dominio asignado
//
// Ejemplos:
// - Biblioteca: Book { id, title, author, read }
// - Farmacia: Medicine { id, name, price, sold }
// - Gimnasio: Member { id, name, email, present }
// - Restaurante: Dish { id, name, price, available }
// ============================================

export interface Element {
  id: number;
  name: string;
  // TODO: Agregar propiedades específicas de tu dominio
  completed: boolean;
}
