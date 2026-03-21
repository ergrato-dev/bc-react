// ============================================
// ARCHIVO: todosSelectors.ts
// Selectores memoizados para el estado de todos
// ============================================

import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// ============================================
// PASO 2: Crear Selectores Básicos
// ============================================
console.log('--- Paso 2: Selectores Básicos ---');

// Los selectores básicos extraen partes del estado sin transformación.
// Son funciones puras y simples.
// Descomenta las siguientes líneas:

// // Selector básico - extrae items del estado
// export const selectTodos = (state: RootState) => state.todos.items;
//
// // Selector básico - extrae el filtro actual
// export const selectFilter = (state: RootState) => state.todos.filter;

console.log('');

// ============================================
// PASO 3: Crear Selectores Memoizados
// ============================================
console.log('--- Paso 3: Selectores Memoizados ---');

// createSelector recibe un array de input selectors y una función
// que combina sus resultados. Solo recalcula si los inputs cambian.
// Descomenta las siguientes líneas:

// // Selector memoizado - filtra según el estado del filtro
// export const selectFilteredTodos = createSelector(
//   [selectTodos, selectFilter], // Input selectors
//   (todos, filter) => {         // Output selector (result function)
//     console.log('🔄 Recalculando selectFilteredTodos');
//     switch (filter) {
//       case 'active':
//         return todos.filter((todo) => !todo.completed);
//       case 'completed':
//         return todos.filter((todo) => todo.completed);
//       default:
//         return todos;
//     }
//   }
// );

console.log('');

// ============================================
// PASO 4: Crear Selectores de Estadísticas
// ============================================
console.log('--- Paso 4: Selectores de Estadísticas ---');

// Los selectores pueden calcular valores derivados complejos.
// La memoización evita recálculos innecesarios.
// Descomenta las siguientes líneas:

// // Selector para estadísticas derivadas
// export const selectTodoStats = createSelector(
//   [selectTodos],
//   (todos) => {
//     console.log('📊 Recalculando selectTodoStats');
//     const total = todos.length;
//     const completed = todos.filter((t) => t.completed).length;
//     const active = total - completed;
//     const percentComplete = total
//       ? Math.round((completed / total) * 100)
//       : 0;
//
//     return {
//       total,
//       completed,
//       active,
//       percentComplete,
//     };
//   }
// );
//
// // Selector para obtener un todo por ID (factory selector)
// export const selectTodoById = (id: string) =>
//   createSelector([selectTodos], (todos) =>
//     todos.find((todo) => todo.id === id)
//   );

console.log('');

// ============================================
// NOTA: Exportaciones temporales
// ============================================
export const selectTodos = (state: RootState) => state.todos.items;
export const selectFilter = (state: RootState) => state.todos.filter;
