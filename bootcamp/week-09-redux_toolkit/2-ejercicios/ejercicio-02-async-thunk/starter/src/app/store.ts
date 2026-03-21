// ============================================
// ARCHIVO: store.ts
// Configuración del store de Redux
// ============================================

import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';

// ============================================
// PASO 4: Configurar el Store
// ============================================
console.log('--- Paso 4: Configurar Store ---');

// Agrega el reducer de usuarios al store.
// Descomenta las siguientes líneas:

// export const store = configureStore({
//   reducer: {
//     users: usersReducer,
//   },
// });
//
// // Inferir tipos del store
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// ============================================
// NOTA: Store temporal para evitar errores
// Elimina esto cuando desccomentes el código real
// ============================================
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
