// ============================================
// TIPOS DEL PROYECTO
// Adapta estas interfaces a tu dominio asignado
// ============================================

// ============================================
// TIPOS DE DOMINIO
// ============================================

// TODO: Renombrar Item a tu entidad (Book, Medicine, Member, etc.)
export interface Item {
  id: number;
  name: string;
  description: string;
  // TODO: Agregar propiedades específicas de tu dominio
  // Ejemplo Biblioteca: author: string; isbn: string; available: boolean;
  // Ejemplo Farmacia: price: number; stock: number; prescription: boolean;
  // Ejemplo Gimnasio: email: string; plan: string; active: boolean;
  createdAt: string;
  updatedAt: string;
}

// Tipo para crear nuevo item (sin id ni fechas)
export type NewItem = Omit<Item, 'id' | 'createdAt' | 'updatedAt'>;

// Tipo para actualizar item
export type UpdateItem = Partial<NewItem>;

// ============================================
// TIPOS DE FILTROS
// ============================================

export interface Filters {
  search: string;
  // TODO: Agregar filtros específicos de tu dominio
  // Ejemplo: category: string | null;
  // Ejemplo: status: 'all' | 'active' | 'inactive';
  sortBy: 'name' | 'createdAt';
  sortOrder: 'asc' | 'desc';
}

// ============================================
// TIPOS DE USUARIO
// ============================================

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Credentials {
  email: string;
  password: string;
}

// ============================================
// TIPOS DE UI
// ============================================

export interface Notification {
  id: number;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

export type Theme = 'light' | 'dark';

export type ModalType =
  | 'create-item'
  | 'edit-item'
  | 'delete-confirm'
  | 'login'
  | null;
