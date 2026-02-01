// ============================================
// EJERCICIO 02: Acciones Tipadas
// ============================================

import { create } from 'zustand';

// ============================================
// PASO 1: Definir Tipos de Dominio
// ============================================
console.log('--- Paso 1: Tipos de Dominio ---');

// QUÉ: Interfaces que representan entidades del negocio
// PARA: Tipar correctamente el estado y las operaciones
// IMPACTO: Código robusto y mantenible

// Descomenta las siguientes líneas:
// interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
//   priority: 'low' | 'medium' | 'high';
//   createdAt: Date;
// }
//
// // Tipo para crear un nuevo todo (sin id ni fecha)
// type NewTodo = Omit<Todo, 'id' | 'createdAt'>;
//
// // Tipo para actualizar un todo (todo parcial excepto id)
// type UpdateTodo = Partial<Omit<Todo, 'id'>>;

console.log('Tipos Todo, NewTodo, UpdateTodo definidos');
console.log('');

// ============================================
// PASO 2: Interface del Store con Acciones
// ============================================
console.log('--- Paso 2: Interface del Store ---');

// QUÉ: Definir todas las acciones con sus tipos de parámetros
// PARA: Contrato claro de lo que el store puede hacer
// IMPACTO: Autocompletado y validación en tiempo de compilación

// Descomenta las siguientes líneas:
// interface TodoStore {
//   // Estado
//   todos: Todo[];
//   filter: 'all' | 'active' | 'completed';
//
//   // Acciones CRUD
//   addTodo: (todo: NewTodo) => void;
//   updateTodo: (id: number, updates: UpdateTodo) => void;
//   deleteTodo: (id: number) => void;
//   toggleTodo: (id: number) => void;
//
//   // Acciones de filtro
//   setFilter: (filter: 'all' | 'active' | 'completed') => void;
//
//   // Acciones batch
//   clearCompleted: () => void;
//   toggleAll: () => void;
//
//   // Getters (usando get())
//   getFilteredTodos: () => Todo[];
//   getStats: () => { total: number; completed: number; active: number };
// }

console.log('Interface TodoStore con acciones tipadas');
console.log('');

// ============================================
// PASO 3: Crear Store con Acciones Básicas
// ============================================
console.log('--- Paso 3: Acciones CRUD ---');

// QUÉ: Implementar acciones que modifican el estado
// PARA: Operaciones de crear, actualizar, eliminar
// IMPACTO: Estado inmutable con actualizaciones predecibles

// Descomenta las siguientes líneas:
// const useTodoStore = create<TodoStore>((set, get) => ({
//   // Estado inicial
//   todos: [],
//   filter: 'all',
//
//   // CREATE - Agregar nuevo todo
//   addTodo: (todoData) => set((state) => ({
//     todos: [
//       ...state.todos,
//       {
//         ...todoData,
//         id: Date.now(),
//         createdAt: new Date(),
//       },
//     ],
//   })),
//
//   // UPDATE - Actualizar todo existente
//   updateTodo: (id, updates) => set((state) => ({
//     todos: state.todos.map((todo) =>
//       todo.id === id ? { ...todo, ...updates } : todo
//     ),
//   })),
//
//   // DELETE - Eliminar todo
//   deleteTodo: (id) => set((state) => ({
//     todos: state.todos.filter((todo) => todo.id !== id),
//   })),
//
//   // TOGGLE - Cambiar completado
//   toggleTodo: (id) => set((state) => ({
//     todos: state.todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ),
//   })),

console.log('Acciones CRUD implementadas');
console.log('');

// ============================================
// PASO 4: Acciones que Usan get()
// ============================================
console.log('--- Paso 4: Acciones con get() ---');

// QUÉ: get() permite leer el estado actual
// PARA: Lógica que depende del estado existente
// IMPACTO: Acciones inteligentes basadas en contexto

// Continúa descomentando:
//   // SET FILTER
//   setFilter: (filter) => set({ filter }),
//
//   // CLEAR COMPLETED - usa get() para verificar antes
//   clearCompleted: () => {
//     const { todos } = get();
//     const hasCompleted = todos.some((t) => t.completed);
//
//     if (!hasCompleted) {
//       console.log('No hay tareas completadas');
//       return;
//     }
//
//     set((state) => ({
//       todos: state.todos.filter((todo) => !todo.completed),
//     }));
//   },
//
//   // TOGGLE ALL - usa get() para determinar el nuevo estado
//   toggleAll: () => {
//     const { todos } = get();
//     const allCompleted = todos.every((t) => t.completed);
//
//     set((state) => ({
//       todos: state.todos.map((todo) => ({
//         ...todo,
//         completed: !allCompleted, // Si todos completados, desmarcar todos
//       })),
//     }));
//   },

console.log('Acciones con get() implementadas');
console.log('');

// ============================================
// PASO 5: Getters como Funciones del Store
// ============================================
console.log('--- Paso 5: Getters ---');

// QUÉ: Funciones que calculan valores derivados
// PARA: Centralizar lógica de selección
// IMPACTO: Reutilización y consistencia

// Continúa descomentando:
//   // GETTER - Todos filtrados según filter actual
//   getFilteredTodos: () => {
//     const { todos, filter } = get();
//
//     switch (filter) {
//       case 'active':
//         return todos.filter((t) => !t.completed);
//       case 'completed':
//         return todos.filter((t) => t.completed);
//       default:
//         return todos;
//     }
//   },
//
//   // GETTER - Estadísticas
//   getStats: () => {
//     const { todos } = get();
//     const completed = todos.filter((t) => t.completed).length;
//
//     return {
//       total: todos.length,
//       completed,
//       active: todos.length - completed,
//     };
//   },
// }));

console.log('Getters implementados');
console.log('');

// ============================================
// PASO 6: Componentes que Usan el Store
// ============================================
console.log('--- Paso 6: Componentes ---');

// Descomenta las siguientes líneas:
// const TodoList: React.FC = () => {
//   const getFilteredTodos = useTodoStore((s) => s.getFilteredTodos);
//   const toggleTodo = useTodoStore((s) => s.toggleTodo);
//   const deleteTodo = useTodoStore((s) => s.deleteTodo);
//
//   const todos = getFilteredTodos();
//
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           <input
//             type="checkbox"
//             checked={todo.completed}
//             onChange={() => toggleTodo(todo.id)}
//           />
//           <span className={todo.completed ? 'completed' : ''}>
//             {todo.text}
//           </span>
//           <span className={`priority-${todo.priority}`}>
//             [{todo.priority}]
//           </span>
//           <button onClick={() => deleteTodo(todo.id)}>❌</button>
//         </li>
//       ))}
//     </ul>
//   );
// };
//
// const TodoStats: React.FC = () => {
//   const getStats = useTodoStore((s) => s.getStats);
//   const stats = getStats();
//
//   return (
//     <div className="stats">
//       <span>Total: {stats.total}</span>
//       <span>Activas: {stats.active}</span>
//       <span>Completadas: {stats.completed}</span>
//     </div>
//   );
// };

console.log('Componentes implementados');
console.log('');

// ============================================
// VERIFICACIÓN FINAL
// ============================================
console.log('='.repeat(50));
console.log('✅ Ejercicio 02 completado');
console.log('Aprendiste:');
console.log('  - Definir tipos para entidades y operaciones');
console.log('  - Implementar acciones CRUD tipadas');
console.log('  - Usar get() para acceder al estado');
console.log('  - Crear getters centralizados');
console.log('='.repeat(50));
