import { useState, useCallback } from 'react';
import { Todo } from '../types';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

// ============================================
// COMPONENTE: TodoApp
// Componente principal que maneja el estado de tareas
// ============================================

// Datos iniciales de ejemplo
const initialTodos: Todo[] = [
  { id: 1, text: 'Aprender React', completed: true },
  { id: 2, text: 'Estudiar useCallback', completed: false },
  { id: 3, text: 'Practicar optimización', completed: false },
];

export const TodoApp: React.FC = () => {
  console.log('🔄 TodoApp renderiza');

  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // ============================================
  // SOLUCIÓN PASO 1: useCallback para handleToggle
  // ============================================
  // Ahora la referencia de la función es estable entre renders.
  // El array de dependencias vacío [] significa que la función
  // se crea una sola vez y se reutiliza.
  // Usamos el updater function (prevTodos => ...) para acceder
  // al estado actual sin necesidad de incluir todos en dependencias.
  const handleToggle = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  // ============================================
  // SOLUCIÓN PASO 2: useCallback para handleDelete
  // ============================================
  // Misma lógica: referencia estable + updater function
  const handleDelete = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  // ============================================
  // SOLUCIÓN PASO 3: useCallback para handleAdd
  // ============================================
  // Evita que AddTodo re-renderice innecesariamente
  const handleAdd = useCallback((text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  // Filtrar tareas según el filtro seleccionado
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div style={styles.container}>
      <AddTodo onAdd={handleAdd} />

      <div style={styles.filters}>
        <button
          style={filter === 'all' ? styles.activeFilter : styles.filter}
          onClick={() => setFilter('all')}>
          Todas ({todos.length})
        </button>
        <button
          style={filter === 'active' ? styles.activeFilter : styles.filter}
          onClick={() => setFilter('active')}>
          Activas ({todos.length - completedCount})
        </button>
        <button
          style={filter === 'completed' ? styles.activeFilter : styles.filter}
          onClick={() => setFilter('completed')}>
          Completadas ({completedCount})
        </button>
      </div>

      <TodoList
        todos={filteredTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  filters: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
  },
  filter: {
    padding: '8px 16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  activeFilter: {
    padding: '8px 16px',
    border: '1px solid #0066cc',
    borderRadius: '4px',
    backgroundColor: '#0066cc',
    color: 'white',
    cursor: 'pointer',
  },
};
