import { useState } from 'react';

// ============================================
// COMPONENTE: AddItemForm
// Formulario para agregar elementos
// ============================================
// TODO: Envolver con memo

interface AddItemFormProps {
  onAdd: (name: string) => void;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({ onAdd }) => {
  console.log('  ➕ AddItemForm renderiza');

  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim());
      setName('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={styles.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nuevo elemento..."
        style={styles.input}
      />
      <button
        type="submit"
        style={styles.button}>
        Agregar
      </button>
    </form>
  );
};

const styles: Record<string, React.CSSProperties> = {
  form: {
    display: 'flex',
    gap: '8px',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    outline: 'none',
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
