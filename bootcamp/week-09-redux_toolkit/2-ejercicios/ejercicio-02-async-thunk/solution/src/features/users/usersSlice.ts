// ============================================
// ARCHIVO: usersSlice.ts
// Slice para manejar usuarios con async thunk
// SOLUCIÓN COMPLETA
// ============================================

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// ============================================
// PASO 1: Definir Interfaces del Estado
// ============================================

// Interface para un usuario de la API
interface User {
  id: number;
  name: string;
  email: string;
}

// Interface para el estado del slice
// Usamos union types para el status de carga
interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Estado inicial tipado
const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null,
};

// ============================================
// PASO 2: Crear el Async Thunk
// ============================================

// createAsyncThunk<TipoRetorno, TipoArgumento>
// 'void' significa que no recibe argumentos
export const fetchUsers = createAsyncThunk<User[], void>(
  'users/fetchUsers', // Prefijo para los action types
  async () => {
    // Simular delay para ver el loading
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Error al cargar usuarios');
    }

    return response.json();
  },
);

// ============================================
// PASO 3: Configurar el Slice con extraReducers
// ============================================

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Podemos agregar reducers síncronos si necesitamos
    clearUsers: (state) => {
      state.users = [];
      state.status = 'idle';
      state.error = null;
    },
  },
  // Builder pattern para manejar acciones del thunk
  extraReducers: (builder) => {
    builder
      // Cuando el fetch inicia
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      // Cuando el fetch tiene éxito
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      // Cuando el fetch falla
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Error desconocido';
      });
  },
});

// Exportar action creators
export const { clearUsers } = usersSlice.actions;

// Exportar reducer
export default usersSlice.reducer;
