// ============================================
// TYPES: INTERFACES Y TIPOS
// ============================================
// Define aquí las interfaces para tu dominio

/**
 * NOTA PARA EL APRENDIZ:
 * Adapta esta interface a tu dominio asignado.
 *
 * Ejemplos:
 * - Biblioteca: Book { id, title, author, isbn, available, category }
 * - Farmacia: Medicine { id, name, price, stock, requiresPrescription, category }
 * - Gimnasio: Member { id, name, email, plan, startDate, active }
 * - Restaurante: Dish { id, name, category, price, available, description }
 */

// TODO: Define la interface principal de tu dominio
// Ejemplo para referencia (ELIMINAR y reemplazar con tu dominio):
export interface Item {
  id: number;
  name: string;
  // TODO: Agregar propiedades específicas de tu dominio
  // Ejemplos:
  // - Para Biblioteca: author: string; isbn: string; available: boolean;
  // - Para Farmacia: price: number; stock: number; requiresPrescription: boolean;
  // - Para Gimnasio: email: string; plan: 'básico' | 'premium' | 'vip'; active: boolean;
}

// TODO: Si necesitas tipos adicionales, defínelos aquí
// Ejemplos:
// export type Category = 'fiction' | 'non-fiction' | 'science'; // Biblioteca
// export type MedicineCategory = 'analgésico' | 'antibiótico' | 'vitamina'; // Farmacia
// export type MembershipPlan = 'básico' | 'premium' | 'vip'; // Gimnasio

// TODO: Interface para props de formulario (opcional)
export interface FormData {
  // Mismos campos que Item pero sin el id (se genera al agregar)
  name: string;
  // TODO: Agregar resto de propiedades
}
