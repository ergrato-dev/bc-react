// ============================================
// Tipos del Proyecto
// Adapta estos tipos a tu dominio asignado
// ============================================

/**
 * Tipo base para items del dominio
 * TODO: Adaptar a tu dominio específico
 *
 * Ejemplos:
 * - Biblioteca: Book, Loan, Reader
 * - Farmacia: Medicine, Sale, Prescription
 * - Gimnasio: Member, Class, Equipment
 */
export interface DomainItem {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  // TODO: Agregar propiedades específicas de tu dominio
}

/**
 * Estado de carga para widgets
 */
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

/**
 * Configuración del tema
 */
export interface Theme {
  mode: 'light' | 'dark';
  primaryColor: string;
  backgroundColor: string;
  surfaceColor: string;
  textColor: string;
  textSecondary: string;
  borderColor: string;
}

/**
 * Props base para widgets
 */
export interface WidgetProps {
  title: string;
  loading?: boolean;
  error?: string | null;
  onRefresh?: () => void;
}

// ============================================
// EJEMPLOS DE TIPOS POR DOMINIO
// Descomenta y adapta según tu dominio
// ============================================

// --- BIBLIOTECA ---
// export interface Book {
//   id: number;
//   title: string;
//   author: string;
//   isbn: string;
//   available: boolean;
//   category: string;
// }
//
// export interface Loan {
//   id: number;
//   bookId: number;
//   readerId: number;
//   loanDate: string;
//   dueDate: string;
//   returnedDate?: string;
// }

// --- FARMACIA ---
// export interface Medicine {
//   id: number;
//   name: string;
//   stock: number;
//   minStock: number;
//   price: number;
//   expirationDate: string;
// }

// --- GIMNASIO ---
// export interface Member {
//   id: number;
//   name: string;
//   email: string;
//   membershipType: 'basic' | 'premium' | 'vip';
//   expiresAt: string;
//   checkIns: number;
// }
