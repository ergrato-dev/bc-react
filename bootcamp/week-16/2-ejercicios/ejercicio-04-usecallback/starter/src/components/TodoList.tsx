import { memo } from 'react';
import { Todo } from '../types';
import { TodoItem } from './TodoItem';

// ============================================
// COMPONENTE: TodoList
// Lista de tareas con React.memo
// ============================================

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// Usamos memo para evitar re-renders cuando las props no cambian
// PERO: si onToggle/onDelete son nuevas referencias cada render,
// memo no servirá de nada porque las props SÍ cambian
export const TodoList: React.FC<TodoListProps> = memo(
  ({ todos, onToggle, onDelete }) => {
    console.log('  📋 TodoList renderiza');

    if (todos.length === 0) {
      return <p style={styles.empty}>No hay tareas en esta categoría</p>;
    }

    return (
      <ul style={styles.list}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  },
);

TodoList.displayName = 'TodoList';

const styles: Record<string, React.CSSProperties> = {
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    padding: '20px',
  },
};
