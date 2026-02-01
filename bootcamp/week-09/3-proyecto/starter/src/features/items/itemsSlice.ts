// src/features/items/itemsSlice.ts
// NOTA: Renombra este archivo y adapta a tu dominio asignado
// Ejemplo: booksSlice.ts, productsSlice.ts, membersSlice.ts

import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// ============================================
// TIPOS - Adaptar a tu dominio
// ============================================

// TODO: Definir la interface de tu entidad principal
interface Item {
  id: string;
  name: string;
  description: string;
  // Agrega más propiedades según tu dominio
  // Ejemplo Biblioteca: author, isbn, available
  // Ejemplo Gimnasio: email, membershipType, active
  createdAt: string;
}

// ============================================
// ENTITY ADAPTER
// ============================================

// TODO: Configurar el entity adapter
const itemsAdapter = createEntityAdapter<Item>({
  selectId: (item) => item.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

// ============================================
// ESTADO INICIAL
// ============================================

interface ItemsState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  filter: string;
  searchQuery: string;
}

const initialState = itemsAdapter.getInitialState<ItemsState>({
  status: 'idle',
  error: null,
  filter: 'all',
  searchQuery: '',
});

// ============================================
// ASYNC THUNKS
// ============================================

// TODO: Implementar thunk para cargar datos
export const fetchItems = createAsyncThunk('items/fetchAll', async () => {
  // TODO: Reemplazar con tu API o datos de prueba
  // Simulación de API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Datos de ejemplo - reemplazar con tu dominio
  const mockData: Item[] = [
    {
      id: '1',
      name: 'Item 1',
      description: 'Descripción 1',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Item 2',
      description: 'Descripción 2',
      createdAt: new Date().toISOString(),
    },
  ];

  return mockData;
});

// ============================================
// SLICE
// ============================================

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // TODO: Implementar acciones CRUD
    addItem: itemsAdapter.addOne,
    updateItem: itemsAdapter.updateOne,
    removeItem: itemsAdapter.removeOne,

    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },

    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        itemsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Error al cargar datos';
      });
  },
});

// ============================================
// EXPORTS
// ============================================

export const {
  addItem,
  updateItem,
  removeItem,
  setFilter,
  setSearchQuery,
  clearError,
} = itemsSlice.actions;

// Selectores del adapter
export const {
  selectAll: selectAllItems,
  selectById: selectItemById,
  selectIds: selectItemIds,
  selectTotal: selectItemTotal,
} = itemsAdapter.getSelectors<RootState>((state) => state.items);

// Selectores adicionales
export const selectItemsStatus = (state: RootState) => state.items.status;
export const selectItemsError = (state: RootState) => state.items.error;
export const selectFilter = (state: RootState) => state.items.filter;
export const selectSearchQuery = (state: RootState) => state.items.searchQuery;

export default itemsSlice.reducer;
