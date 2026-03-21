// ============================================
// ARCHIVO: store.ts
// Configuración del store de Redux
// SOLUCIÓN COMPLETA
// ============================================

import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';

// ============================================
// PASO 4: Configurar el Store
// ============================================

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// Inferir tipos del store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
