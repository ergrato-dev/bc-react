// ============================================
// TIPOS: Interfaces del dominio
// ============================================
// NOTA: Adapta estos tipos a tu dominio asignado
// Ejemplo: Book, Medicine, Member, Student, etc.

export interface Item {
  id: number;
  name: string;
  description: string;
  category: string;
  status: 'active' | 'inactive' | 'pending';
  value: number;
  createdAt: string;
  updatedAt: string;
  // TODO: Agregar propiedades específicas de tu dominio
}

export interface Filters {
  search: string;
  category: string;
  status: string;
}

export interface Stats {
  total: number;
  active: number;
  inactive: number;
  pending: number;
  avgValue: number;
  maxValue: number;
  minValue: number;
}
