// ============================================
// ARCHIVO: productsSlice.ts
// Slice con createEntityAdapter para productos
// ============================================

import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
  nanoid,
  EntityState,
} from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// ============================================
// PASO 1: Crear el Entity Adapter
// ============================================
console.log('--- Paso 1: Crear Entity Adapter ---');

// createEntityAdapter genera funciones para manejar colecciones
// normalizadas de entidades de forma eficiente.
// Descomenta las siguientes líneas:

// // Interface para un producto
// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   stock: number;
// }
//
// // Crear el adapter con configuración
// const productsAdapter = createEntityAdapter<Product>({
//   // selectId: especifica qué campo usar como ID (default: 'id')
//   selectId: (product) => product.id,
//   // sortComparer: función para ordenar entidades
//   sortComparer: (a, b) => a.price - b.price,
// });

console.log('');

// ============================================
// PASO 2: Configurar Estado Inicial
// ============================================
console.log('--- Paso 2: Estado Inicial ---');

// El adapter genera un estado inicial con { ids: [], entities: {} }
// Podemos extenderlo con propiedades adicionales.
// Descomenta las siguientes líneas:

// // Extender el tipo de estado del adapter
// interface ProductsState extends EntityState<Product, string> {
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
// }
//
// // Estado inicial usando getInitialState del adapter
// const initialState: ProductsState = productsAdapter.getInitialState({
//   status: 'idle',
// });

console.log('');

// ============================================
// PASO 3: Crear el Slice con Métodos del Adapter
// ============================================
console.log('--- Paso 3: Crear Slice ---');

// Los métodos del adapter (addOne, updateOne, etc.) se pueden
// usar directamente como reducers o dentro de ellos.
// Descomenta las siguientes líneas:

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     // Agregar un producto - usando el método addOne directamente
//     productAdded: {
//       reducer: productsAdapter.addOne,
//       prepare: (name: string, price: number, stock: number) => ({
//         payload: {
//           id: nanoid(),
//           name,
//           price,
//           stock,
//         },
//       }),
//     },
//     // Actualizar un producto
//     productUpdated: productsAdapter.updateOne,
//     // Eliminar un producto
//     productRemoved: productsAdapter.removeOne,
//     // Actualizar stock de un producto
//     stockUpdated: (
//       state,
//       action: PayloadAction<{ id: string; amount: number }>
//     ) => {
//       const { id, amount } = action.payload;
//       const product = state.entities[id];
//       if (product) {
//         product.stock += amount;
//       }
//     },
//     // Cargar varios productos
//     productsLoaded: productsAdapter.setAll,
//   },
// });
//
// export const {
//   productAdded,
//   productUpdated,
//   productRemoved,
//   stockUpdated,
//   productsLoaded,
// } = productsSlice.actions;

console.log('');

// ============================================
// PASO 4: Generar Selectores
// ============================================
console.log('--- Paso 4: Generar Selectores ---');

// getSelectors() genera selectores optimizados para el estado
// normalizado: selectAll, selectById, selectIds, selectTotal.
// Descomenta las siguientes líneas:

// // Generar selectores a partir del adapter
// export const {
//   selectAll: selectAllProducts,
//   selectById: selectProductById,
//   selectIds: selectProductIds,
//   selectTotal: selectProductCount,
// } = productsAdapter.getSelectors<RootState>((state) => state.products);
//
// export default productsSlice.reducer;

console.log('');

// ============================================
// NOTA: Exportaciones temporales
// ============================================
interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

const productsAdapter = createEntityAdapter<Product>();

interface ProductsState extends EntityState<Product, string> {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProductsState = productsAdapter.getInitialState({
  status: 'idle',
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
  selectTotal: selectProductCount,
} = productsAdapter.getSelectors<RootState>((state) => state.products);

export default productsSlice.reducer;
