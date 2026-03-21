// src/app/store.ts
// TODO: Configurar el store con configureStore

import { configureStore } from '@reduxjs/toolkit';

// TODO: Importar los reducers de tus features
// import itemsReducer from '../features/items/itemsSlice';

export const store = configureStore({
  reducer: {
    // TODO: Agregar tus reducers aquí
    // items: itemsReducer,
  },
});

// Tipos inferidos del store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
