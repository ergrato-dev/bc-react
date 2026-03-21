// ============================================
// TIPOS GENÉRICOS
// Adapta estos tipos a tu dominio asignado
// ============================================

// TODO: Renombra y adapta estos tipos a tu dominio
// Ejemplo Biblioteca: Book, BookFormData, etc.
// Ejemplo Farmacia: Medicine, MedicineFormData, etc.

export interface Item {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  date: string;
  active: boolean;
  contactEmail?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LineItem {
  id?: string;
  productName: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  customerName: string;
  items: LineItem[];
  notes?: string;
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
}

// Tipos para el Wizard
export interface WizardStep {
  id: number;
  title: string;
  description: string;
  isValid: boolean;
  isCompleted: boolean;
}

// Estados del formulario
export type FormMode = 'create' | 'edit' | 'view';

// Respuesta genérica de API
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
