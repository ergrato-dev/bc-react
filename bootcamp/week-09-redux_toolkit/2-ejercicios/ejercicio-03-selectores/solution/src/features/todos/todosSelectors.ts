// ============================================
// ARCHIVO: todosSelectors.ts
// Selectores memoizados para el estado de todos
// SOLUCIÓN COMPLETA
// ============================================

import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// ============================================
// Selectores Básicos
// ============================================

// Selector básico - extrae items del estado
export const selectTodos = (state: RootState) => state.todos.items;

// Selector básico - extrae el filtro actual
export const selectFilter = (state: RootState) => state.todos.filter;

// ============================================
// Selectores Memoizados
// ============================================

// Selector memoizado - filtra según el estado del filtro
export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter], // Input selectors
  (todos, filter) => {
    // Output selector (result function)
    console.log('🔄 Recalculando selectFilteredTodos');
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  },
);

// ============================================
// Selectores de Estadísticas
// ============================================

// Selector para estadísticas derivadas
export const selectTodoStats = createSelector([selectTodos], (todos) => {
  console.log('📊 Recalculando selectTodoStats');
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;
  const percentComplete = total ? Math.round((completed / total) * 100) : 0;

  return {
    total,
    completed,
    active,
    percentComplete,
  };
});

// Selector para obtener un todo por ID (factory selector)
export const selectTodoById = (id: string) =>
  createSelector([selectTodos], (todos) =>
    todos.find((todo) => todo.id === id),
  );
