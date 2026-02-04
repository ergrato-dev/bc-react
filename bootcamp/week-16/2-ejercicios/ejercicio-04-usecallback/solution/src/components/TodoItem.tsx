import { memo } from 'react';
import { Todo } from '../types';

// ============================================
// COMPONENTE: TodoItem
// Item individual de tarea con React.memo
// ============================================

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

// PROBLEMA CLAVE:
// Aunque usamos memo, si onToggle y onDelete son nuevas
// funciones en cada render del padre, TodoItem SIEMPRE
// re-renderizará porque las props son diferentes
//
// SOLUCIÓN:
// El padre (TodoApp) debe usar useCallback para estabilizar
// las referencias de handleToggle y handleDelete
export const TodoItem: React.FC<TodoItemProps> = memo(({ todo, onToggle, onDelete }) => {
  console.log(`    ✅ TodoItem "${todo.text}" renderiza`);

  return (
    <li style={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={styles.checkbox}
      />
      <span style={{
        ...styles.text,
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#888' : '#000',
      }}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        style={styles.deleteButton}
      >
        🗑️
      </button>
    </li>
  );
});

TodoItem.displayName = 'TodoItem';

const styles: Record<string, React.CSSProperties> = {
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px',
    marginBottom: '8px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    gap: '12px',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
  text: {
    flex: 1,
    fontSize: '16px',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    padding: '4px',
  },
};
