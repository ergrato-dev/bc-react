// ============================================
// PROYECTO WEEK-17: types/index.ts (STARTER)
// ============================================

// TODO: Define los tipos para tu dominio
// Adapta estos tipos a tu dominio asignado
// Ejemplos incluidos para referencia

/**
 * Item genérico - ADAPTAR A TU DOMINIO
 *
 * Ejemplos:
 * - Biblioteca: Book { title, author, isbn, category }
 * - Farmacia: Medicine { name, laboratory, price, stock }
 * - Gimnasio: Member { name, membership, startDate }
 * - Restaurante: Dish { name, category, price, description }
 */
export interface Item {
  id: number;
  name: string;
  description: string;
  category: string;
  // TODO: Agregar propiedades específicas de tu dominio
}

/**
 * Estado de Web Vitals
 */
export interface WebVitalsState {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
}

/**
 * Props para componentes de lista
 */
export interface ListItemProps {
  item: Item;
  onClick?: (id: number) => void;
}

/**
 * Props para lista virtualizada
 */
export interface VirtualListProps {
  items: Item[];
  onItemClick?: (id: number) => void;
  height?: number;
  itemSize?: number;
}
