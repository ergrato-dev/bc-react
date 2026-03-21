// src/app/store.ts - SOLUCIÓN

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// Configurar el store con el reducer del contador
export const store = configureStore({
  reducer: {
    // Cada key aquí se convierte en una rama del estado
    // state.counter contendrá el estado del counterSlice
    counter: counterReducer,
  },
  // Redux DevTools está habilitado por defecto en desarrollo
});

// Tipo del estado raíz - inferido del store
// Resultado: { counter: { value: number } }
export type RootState = ReturnType<typeof store.getState>;

// Tipo del dispatch - necesario para thunks async
export type AppDispatch = typeof store.dispatch;
