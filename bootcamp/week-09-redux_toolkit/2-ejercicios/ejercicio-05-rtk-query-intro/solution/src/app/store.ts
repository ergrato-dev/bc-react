// ============================================
// ARCHIVO: store.ts
// Configuración del store con RTK Query
// ============================================

import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../features/api/postsApi';

export const store = configureStore({
  reducer: {
    // Agregar el reducer del API usando su reducerPath
    [postsApi.reducerPath]: postsApi.reducer,
  },
  // Agregar el middleware del API para habilitar caching, polling, etc.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
