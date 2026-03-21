// ============================================
// SERVICIOS: API para comunicación con backend
// ============================================

import type { Item, NewItem } from '../types';

const API_URL = '/api/items';

/**
 * Obtiene todos los items de la API
 */
export const fetchItems = async (): Promise<Item[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Error al cargar items');
  }

  return response.json();
};

/**
 * Crea un nuevo item en la API
 */
export const createItem = async (item: NewItem): Promise<Item> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error('Error al crear item');
  }

  return response.json();
};

/**
 * Elimina un item de la API
 */
export const deleteItem = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Error al eliminar item');
  }
};
