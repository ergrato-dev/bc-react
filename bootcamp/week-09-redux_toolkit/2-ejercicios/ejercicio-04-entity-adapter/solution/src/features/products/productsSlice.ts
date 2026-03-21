// ============================================
// ARCHIVO: productsSlice.ts
// Slice con createEntityAdapter para productos
// SOLUCIÓN COMPLETA
// ============================================

import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
  nanoid,
  EntityState,
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Interface para un producto
interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

// Crear el adapter con configuración
const productsAdapter = createEntityAdapter<Product>({
  // selectId: especifica qué campo usar como ID (default: 'id')
  selectId: (product) => product.id,
  // sortComparer: función para ordenar entidades por precio
  sortComparer: (a, b) => a.price - b.price,
});

// Extender el tipo de estado del adapter
interface ProductsState extends EntityState<Product, string> {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

// Estado inicial usando getInitialState del adapter
const initialState: ProductsState = productsAdapter.getInitialState({
  status: 'idle',
});

// Crear el slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Agregar un producto - usando prepare callback
    productAdded: {
      reducer: productsAdapter.addOne,
      prepare: (name: string, price: number, stock: number) => ({
        payload: {
          id: nanoid(),
          name,
          price,
          stock,
        },
      }),
    },
    // Actualizar un producto
    productUpdated: productsAdapter.updateOne,
    // Eliminar un producto
    productRemoved: productsAdapter.removeOne,
    // Actualizar stock de un producto
    stockUpdated: (
      state,
      action: PayloadAction<{ id: string; amount: number }>,
    ) => {
      const { id, amount } = action.payload;
      const product = state.entities[id];
      if (product && product.stock + amount >= 0) {
        product.stock += amount;
      }
    },
    // Cargar varios productos
    productsLoaded: productsAdapter.setAll,
  },
});

export const {
  productAdded,
  productUpdated,
  productRemoved,
  stockUpdated,
  productsLoaded,
} = productsSlice.actions;

// Generar selectores a partir del adapter
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
  selectTotal: selectProductCount,
} = productsAdapter.getSelectors<RootState>((state) => state.products);

export default productsSlice.reducer;
