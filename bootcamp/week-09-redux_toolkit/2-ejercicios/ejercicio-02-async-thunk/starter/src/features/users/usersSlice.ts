// ============================================
// ARCHIVO: usersSlice.ts
// Slice para manejar usuarios con async thunk
// ============================================

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ============================================
// PASO 1: Definir Interfaces del Estado
// ============================================
console.log('--- Paso 1: Definir Interfaces ---');

// En Redux Toolkit con TypeScript, definimos interfaces
// para tipar el estado y los datos que manejamos.
// Descomenta las siguientes líneas:

// // Interface para un usuario de la API
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
//
// // Interface para el estado del slice
// // Usamos union types para el status de carga
// interface UsersState {
//   users: User[];
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null;
// }
//
// // Estado inicial tipado
// const initialState: UsersState = {
//   users: [],
//   status: 'idle',
//   error: null,
// };

console.log('');

// ============================================
// PASO 2: Crear el Async Thunk
// ============================================
console.log('--- Paso 2: Crear Async Thunk ---');

// createAsyncThunk crea un thunk que maneja automáticamente
// los estados pending, fulfilled y rejected.
// Descomenta las siguientes líneas:

// // createAsyncThunk<TipoRetorno, TipoArgumento>
// // 'void' significa que no recibe argumentos
// export const fetchUsers = createAsyncThunk<User[], void>(
//   'users/fetchUsers', // Prefijo para los action types
//   async () => {
//     // Simular delay para ver el loading
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//
//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//
//     if (!response.ok) {
//       throw new Error('Error al cargar usuarios');
//     }
//
//     return response.json();
//   }
// );

console.log('');

// ============================================
// PASO 3: Configurar el Slice con extraReducers
// ============================================
console.log('--- Paso 3: Crear Slice con extraReducers ---');

// extraReducers permite manejar acciones creadas fuera del slice,
// como las generadas por createAsyncThunk.
// Descomenta las siguientes líneas:

// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
//     // Podemos agregar reducers síncronos si necesitamos
//     clearUsers: (state) => {
//       state.users = [];
//       state.status = 'idle';
//       state.error = null;
//     },
//   },
//   // Builder pattern para manejar acciones del thunk
//   extraReducers: (builder) => {
//     builder
//       // Cuando el fetch inicia
//       .addCase(fetchUsers.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       // Cuando el fetch tiene éxito
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.users = action.payload;
//       })
//       // Cuando el fetch falla
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message ?? 'Error desconocido';
//       });
//   },
// });
//
// // Exportar action creators
// export const { clearUsers } = usersSlice.actions;
//
// // Exportar reducer
// export default usersSlice.reducer;

console.log('');

// ============================================
// NOTA: Exportación temporal para evitar errores
// Elimina esto cuando desccomentes el código real
// ============================================
export default function placeholderReducer() {
  return { users: [], status: 'idle', error: null };
}
