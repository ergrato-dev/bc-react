import { useState, memo } from 'react';

// ============================================
// COMPONENTE: AddTodo
// Formulario para agregar nueva tarea
// ============================================

interface AddTodoProps {
  onAdd: (text: string) => void;
}

// Usamos memo pero si onAdd es nueva referencia cada render,
// este componente siempre re-renderizará
export const AddTodo: React.FC<AddTodoProps> = memo(({ onAdd }) => {
  console.log('  ➕ AddTodo renderiza');

  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea..."
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Agregar
      </button>
    </form>
  );
});

AddTodo.displayName = 'AddTodo';

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
  },
  input: {
    flex: 1,
    padding: '12px',
    fontSize: '16px',
    border: '2px solid #ddd',
    borderRadius: '8px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#0066cc',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};
