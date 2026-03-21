// ============================================
// ARCHIVO: store.ts
// Configuración del store con RTK Query
// ============================================

import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../features/api/postsApi';

// ============================================
// PASO 3: Configurar Store con API
// ============================================
console.log('--- Paso 3: Configurar Store ---');

// RTK Query requiere agregar el reducer Y el middleware del API.
// Descomenta las siguientes líneas:

// export const store = configureStore({
//   reducer: {
//     // Agregar el reducer del API usando su reducerPath
//     [postsApi.reducerPath]: postsApi.reducer,
//   },
//   // Agregar el middleware del API para habilitar caching, polling, etc.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(postsApi.middleware),
// });

// ============================================
// NOTA: Store temporal
// ============================================
export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
