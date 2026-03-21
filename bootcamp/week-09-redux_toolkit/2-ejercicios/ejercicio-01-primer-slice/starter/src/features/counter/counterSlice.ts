// src/features/counter/counterSlice.ts

// ============================================
// PASO 2: Crear el Slice del Contador
// ============================================

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

console.log('--- Paso 2: Crear el Slice del Contador ---');

// ============================================
// 2.1 Definir Interface del Estado
// ============================================
// Descomenta las siguientes líneas:

// interface CounterState {
//   value: number;
// }

// ============================================
// 2.2 Crear Estado Inicial
// ============================================
// Descomenta las siguientes líneas:

// const initialState: CounterState = {
//   value: 0,
// };

// ============================================
// 2.3 Crear el Slice
// ============================================
// Descomenta las siguientes líneas:

// export const counterSlice = createSlice({
//   // Nombre del slice - usado como prefijo en tipos de acción
//   name: 'counter',
//
//   // Estado inicial tipado
//   initialState,
//
//   // Reducers - cada uno genera un action creator automáticamente
//   reducers: {
//     // Incrementar el contador
//     // Acción generada: { type: 'counter/increment' }
//     increment: (state) => {
//       // Immer permite esta sintaxis "mutante"
//       // Internamente crea un nuevo estado inmutable
//       state.value += 1;
//     },
//
//     // Decrementar el contador
//     // Acción generada: { type: 'counter/decrement' }
//     decrement: (state) => {
//       state.value -= 1;
//     },
//
//     // Incrementar por cantidad específica
//     // PayloadAction<number> tipa el payload como número
//     // Acción generada: { type: 'counter/incrementByAmount', payload: 5 }
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload;
//     },
//
//     // Resetear al valor inicial
//     reset: (state) => {
//       state.value = 0;
//     },
//   },
// });

// ============================================
// 2.4 Exportar Actions y Reducer
// ============================================
// Descomenta las siguientes líneas:

// Exportar action creators generados automáticamente
// export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

// Exportar el reducer para agregarlo al store
// export default counterSlice.reducer;

console.log('');
