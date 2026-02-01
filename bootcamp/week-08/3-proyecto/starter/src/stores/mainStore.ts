// ============================================
// STORE PRINCIPAL DEL DOMINIO
// Adapta este store a tu dominio asignado
// ============================================

import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import type { Item, NewItem, UpdateItem, Filters } from '../types';

// ============================================
// INTERFACE DEL STORE
// ============================================

interface MainStore {
  // Estado
  items: Item[];
  selectedId: number | null;
  filters: Filters;
  isLoading: boolean;
  error: string | null;

  // TODO: Implementar acciones CRUD
  addItem: (item: NewItem) => void;
  updateItem: (id: number, updates: UpdateItem) => void;
  deleteItem: (id: number) => void;

  // TODO: Implementar selección
  selectItem: (id: number | null) => void;

  // TODO: Implementar filtros
  setFilter: (filter: Partial<Filters>) => void;
  clearFilters: () => void;

  // TODO: Implementar getters
  getFilteredItems: () => Item[];
  getSelectedItem: () => Item | undefined;
}

// ============================================
// ESTADO INICIAL DE FILTROS
// ============================================

const initialFilters: Filters = {
  search: '',
  sortBy: 'createdAt',
  sortOrder: 'desc',
};

// ============================================
// CREAR STORE
// ============================================

// TODO: Renombrar a tu dominio (useBookStore, useMedicineStore, etc.)
export const useMainStore = create<MainStore>()(
  devtools(
    persist(
      (set, get) => ({
        // Estado inicial
        items: [],
        selectedId: null,
        filters: initialFilters,
        isLoading: false,
        error: null,

        // TODO: Implementar addItem
        // Debe generar id único y agregar createdAt/updatedAt
        addItem: (itemData) => {
          // Tu implementación aquí
        },

        // TODO: Implementar updateItem
        // Debe actualizar updatedAt
        updateItem: (id, updates) => {
          // Tu implementación aquí
        },

        // TODO: Implementar deleteItem
        // Si el item eliminado estaba seleccionado, deseleccionar
        deleteItem: (id) => {
          // Tu implementación aquí
        },

        // TODO: Implementar selectItem
        selectItem: (id) => {
          // Tu implementación aquí
        },

        // TODO: Implementar setFilter
        setFilter: (filter) => {
          // Tu implementación aquí
        },

        // TODO: Implementar clearFilters
        clearFilters: () => {
          // Tu implementación aquí
        },

        // TODO: Implementar getFilteredItems
        // Filtrar por search y ordenar según sortBy/sortOrder
        getFilteredItems: () => {
          // Tu implementación aquí
          return [];
        },

        // TODO: Implementar getSelectedItem
        getSelectedItem: () => {
          // Tu implementación aquí
          return undefined;
        },
      }),
      {
        name: 'main-store', // TODO: Cambiar a tu dominio
        // TODO: Configurar partialize si es necesario
      },
    ),
    {
      name: 'MainStore', // TODO: Cambiar a tu dominio
    },
  ),
);
