// ============================================
// ARCHIVO: TodoList.tsx
// Componente de lista de tareas con selectores
// ============================================

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectTodos, selectFilter } from './todosSelectors';
// Cuando desccomentes todosSlice, descomenta también estos imports:
// import { addTodo, toggleTodo, removeTodo, setFilter, clearCompleted } from './todosSlice';
// import { selectFilteredTodos, selectTodoStats } from './todosSelectors';

// ============================================
// PASO 5: Usar Selectores en Componentes
// ============================================
console.log('--- Paso 5: Componente TodoList ---');

// El componente debe usar selectores memoizados para obtener
// datos derivados de forma eficiente.
// Descomenta las siguientes líneas:

// const TodoList: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const [newTodo, setNewTodo] = useState('');
//
//   // Usar selectores memoizados
//   const filteredTodos = useAppSelector(selectFilteredTodos);
//   const stats = useAppSelector(selectTodoStats);
//   const currentFilter = useAppSelector(selectFilter);
//
//   const handleAddTodo = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (newTodo.trim()) {
//       dispatch(addTodo(newTodo.trim()));
//       setNewTodo('');
//     }
//   };
//
//   return (
//     <div className="todo-app">
//       {/* Formulario */}
//       <form onSubmit={handleAddTodo} className="todo-form">
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           placeholder="¿Qué necesitas hacer?"
//           className="todo-input"
//         />
//         <button type="submit">Agregar</button>
//       </form>
//
//       {/* Estadísticas */}
//       <div className="stats">
//         <div className="stat">
//           <span className="stat-value">{stats.total}</span>
//           <span className="stat-label">Total</span>
//         </div>
//         <div className="stat">
//           <span className="stat-value">{stats.active}</span>
//           <span className="stat-label">Pendientes</span>
//         </div>
//         <div className="stat">
//           <span className="stat-value">{stats.completed}</span>
//           <span className="stat-label">Completadas</span>
//         </div>
//         <div className="stat">
//           <span className="stat-value">{stats.percentComplete}%</span>
//           <span className="stat-label">Progreso</span>
//         </div>
//       </div>
//
//       {/* Filtros */}
//       <div className="filters">
//         {(['all', 'active', 'completed'] as const).map((filter) => (
//           <button
//             key={filter}
//             onClick={() => dispatch(setFilter(filter))}
//             className={currentFilter === filter ? 'active' : ''}
//           >
//             {filter === 'all' ? 'Todas' : filter === 'active' ? 'Pendientes' : 'Completadas'}
//           </button>
//         ))}
//       </div>
//
//       {/* Lista */}
//       <ul className="todo-list">
//         {filteredTodos.map((todo) => (
//           <li
//             key={todo.id}
//             className={`todo-item ${todo.completed ? 'completed' : ''}`}
//           >
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => dispatch(toggleTodo(todo.id))}
//             />
//             <span className="todo-text">{todo.text}</span>
//             <button
//               className="delete-btn"
//               onClick={() => dispatch(removeTodo(todo.id))}
//             >
//               ×
//             </button>
//           </li>
//         ))}
//       </ul>
//
//       {/* Acciones */}
//       {stats.completed > 0 && (
//         <button
//           className="clear-btn"
//           onClick={() => dispatch(clearCompleted())}
//         >
//           Limpiar completadas ({stats.completed})
//         </button>
//       )}
//     </div>
//   );
// };
//
// export default TodoList;

// ============================================
// NOTA: Componente temporal
// ============================================
const TodoList: React.FC = () => {
  const _dispatch = useAppDispatch;
  const todos = useAppSelector(selectTodos);
  const filter = useAppSelector(selectFilter);
  console.log(_dispatch, todos, filter);

  return (
    <div className="todo-app">
      <h2>Ejercicio 03: Selectores</h2>
      <p>
        Descomenta el código en todosSlice.ts, todosSelectors.ts y TodoList.tsx
      </p>
    </div>
  );
};

export default TodoList;
