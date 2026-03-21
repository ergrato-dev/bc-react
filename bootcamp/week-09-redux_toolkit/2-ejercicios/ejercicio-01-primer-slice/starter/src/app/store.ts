// src/app/store.ts

// ============================================
// PASO 3: Configurar el Store
// ============================================

import { configureStore } from '@reduxjs/toolkit';

console.log('--- Paso 3: Configurar el Store ---');

// ============================================
// 3.1 Importar el Reducer
// ============================================
// Descomenta la siguiente línea:

// import counterReducer from '../features/counter/counterSlice';

// ============================================
// 3.2 Configurar el Store
// ============================================
// Descomenta las siguientes líneas:

// export const store = configureStore({
//   reducer: {
//     // Cada key aquí se convierte en una rama del estado
//     // state.counter contendrá el estado del counterSlice
//     counter: counterReducer,
//   },
//   // Redux DevTools está habilitado por defecto en desarrollo
// });

// ============================================
// 3.3 Exportar Tipos
// ============================================
// Descomenta las siguientes líneas:

// Tipo del estado raíz - inferido del store
// Resultado: { counter: { value: number } }
// export type RootState = ReturnType<typeof store.getState>;

// Tipo del dispatch - necesario para thunks async
// export type AppDispatch = typeof store.dispatch;

console.log('');
