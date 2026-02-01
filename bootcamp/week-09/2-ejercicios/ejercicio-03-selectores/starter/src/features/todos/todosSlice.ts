// ============================================
// ARCHIVO: todosSlice.ts
// Slice para manejar lista de tareas
// ============================================

import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

// ============================================
// PASO 1: Definir Interfaces del Estado
// ============================================
console.log('--- Paso 1: Definir Interfaces ---');

// Descomenta las siguientes líneas:

// // Interface para una tarea
// interface Todo {
//   id: string;
//   text: string;
//   completed: boolean;
//   createdAt: string;
// }
//
// // Tipo para los filtros disponibles
// type FilterType = 'all' | 'active' | 'completed';
//
// // Interface para el estado del slice
// interface TodosState {
//   items: Todo[];
//   filter: FilterType;
// }
//
// // Estado inicial con datos de ejemplo
// const initialState: TodosState = {
//   items: [
//     {
//       id: nanoid(),
//       text: 'Aprender Redux Toolkit',
//       completed: true,
//       createdAt: new Date().toISOString(),
//     },
//     {
//       id: nanoid(),
//       text: 'Crear selectores memoizados',
//       completed: false,
//       createdAt: new Date().toISOString(),
//     },
//     {
//       id: nanoid(),
//       text: 'Optimizar rendimiento',
//       completed: false,
//       createdAt: new Date().toISOString(),
//     },
//   ],
//   filter: 'all',
// };
//
// // Crear el slice
// const todosSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     // Agregar una nueva tarea
//     addTodo: {
//       reducer: (state, action: PayloadAction<Todo>) => {
//         state.items.push(action.payload);
//       },
//       // Prepare callback para generar id y fecha
//       prepare: (text: string) => ({
//         payload: {
//           id: nanoid(),
//           text,
//           completed: false,
//           createdAt: new Date().toISOString(),
//         },
//       }),
//     },
//     // Alternar completado
//     toggleTodo: (state, action: PayloadAction<string>) => {
//       const todo = state.items.find((t) => t.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//     // Eliminar tarea
//     removeTodo: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter((t) => t.id !== action.payload);
//     },
//     // Cambiar filtro activo
//     setFilter: (state, action: PayloadAction<FilterType>) => {
//       state.filter = action.payload;
//     },
//     // Limpiar tareas completadas
//     clearCompleted: (state) => {
//       state.items = state.items.filter((t) => !t.completed);
//     },
//   },
// });
//
// export const { addTodo, toggleTodo, removeTodo, setFilter, clearCompleted } =
//   todosSlice.actions;
//
// export default todosSlice.reducer;

console.log('');

// ============================================
// NOTA: Exportación temporal
// ============================================
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

type FilterType = 'all' | 'active' | 'completed';

interface TodosState {
  items: Todo[];
  filter: FilterType;
}

const initialState: TodosState = {
  items: [],
  filter: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
