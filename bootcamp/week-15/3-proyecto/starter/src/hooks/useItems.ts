import { useState, useEffect, useCallback } from 'react';
import type { Item, NewItem } from '../types';
import { fetchItems, createItem, deleteItem } from '../services/api';

/**
 * Hook para gestionar items del dominio
 * Proporciona CRUD completo con estado de carga y errores
 */
export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar items al montar
  const loadItems = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchItems();
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  // Agregar item
  const addItem = useCallback(async (newItem: NewItem) => {
    try {
      setError(null);
      const created = await createItem(newItem);
      setItems((prev) => [...prev, created]);
      return created;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al crear';
      setError(message);
      throw err;
    }
  }, []);

  // Eliminar item
  const removeItem = useCallback(async (id: number) => {
    try {
      setError(null);
      await deleteItem(id);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al eliminar';
      setError(message);
      throw err;
    }
  }, []);

  return {
    items,
    loading,
    error,
    addItem,
    removeItem,
    refresh: loadItems,
  };
};
