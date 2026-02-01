// ============================================
// EJERCICIO 02: Acciones Tipadas - SOLUCIÓN
// ============================================

import { create } from 'zustand';

// ============================================
// PASO 1: Definir Tipos de Dominio
// ============================================

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

// Tipo para crear un nuevo todo (sin id ni fecha)
type NewTodo = Omit<Todo, 'id' | 'createdAt'>;

// Tipo para actualizar un todo (todo parcial excepto id)
type UpdateTodo = Partial<Omit<Todo, 'id'>>;

// ============================================
// PASO 2: Interface del Store con Acciones
// ============================================

interface TodoStore {
  // Estado
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';

  // Acciones CRUD
  addTodo: (todo: NewTodo) => void;
  updateTodo: (id: number, updates: UpdateTodo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;

  // Acciones de filtro
  setFilter: (filter: 'all' | 'active' | 'completed') => void;

  // Acciones batch
  clearCompleted: () => void;
  toggleAll: () => void;

  // Getters (usando get())
  getFilteredTodos: () => Todo[];
  getStats: () => { total: number; completed: number; active: number };
}

// ============================================
// PASO 3-5: Crear Store Completo
// ============================================

const useTodoStore = create<TodoStore>((set, get) => ({
  // Estado inicial
  todos: [],
  filter: 'all',

  // CREATE - Agregar nuevo todo
  addTodo: (todoData) => set((state) => ({
    todos: [
      ...state.todos,
      {
        ...todoData,
        id: Date.now(),
        createdAt: new Date(),
      },
    ],
  })),

  // UPDATE - Actualizar todo existente
  updateTodo: (id, updates) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, ...updates } : todo
    ),
  })),

  // DELETE - Eliminar todo
  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),

  // TOGGLE - Cambiar completado
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  })),

  // SET FILTER
  setFilter: (filter) => set({ filter }),

  // CLEAR COMPLETED - usa get() para verificar antes
  clearCompleted: () => {
    const { todos } = get();
    const hasCompleted = todos.some((t) => t.completed);

    if (!hasCompleted) {
      console.log('No hay tareas completadas');
      return;
    }

    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    }));
  },

  // TOGGLE ALL - usa get() para determinar el nuevo estado
  toggleAll: () => {
    const { todos } = get();
    const allCompleted = todos.every((t) => t.completed);

    set((state) => ({
      todos: state.todos.map((todo) => ({
        ...todo,
        completed: !allCompleted,
      })),
    }));
  },

  // GETTER - Todos filtrados según filter actual
  getFilteredTodos: () => {
    const { todos, filter } = get();

    switch (filter) {
      case 'active':
        return todos.filter((t) => !t.completed);
      case 'completed':
        return todos.filter((t) => t.completed);
      default:
        return todos;
    }
  },

  // GETTER - Estadísticas
  getStats: () => {
    const { todos } = get();
    const completed = todos.filter((t) => t.completed).length;

    return {
      total: todos.length,
      completed,
      active: todos.length - completed,
    };
  },
}));

// ============================================
// PASO 6: Componentes
// ============================================

const TodoList: React.FC = () => {
  const getFilteredTodos = useTodoStore((s) => s.getFilteredTodos);
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const deleteTodo = useTodoStore((s) => s.deleteTodo);

  const todos = getFilteredTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className={todo.completed ? 'completed' : ''}>
            {todo.text}
          </span>
          <span className={`priority-${todo.priority}`}>
            [{todo.priority}]
          </span>
          <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

const TodoStats: React.FC = () => {
  const getStats = useTodoStore((s) => s.getStats);
  const stats = getStats();

  return (
    <div className="stats">
      <span>Total: {stats.total}</span>
      <span>Activas: {stats.active}</span>
      <span>Completadas: {stats.completed}</span>
    </div>
  );
};

export { useTodoStore, TodoList, TodoStats };
export type { Todo, NewTodo, UpdateTodo };
