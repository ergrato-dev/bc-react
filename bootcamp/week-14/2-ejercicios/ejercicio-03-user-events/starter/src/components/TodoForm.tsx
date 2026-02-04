// ============================================
// Componente TodoForm para practicar user events
// ============================================

import { useState } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = text.trim();

    if (trimmed.length < 3) {
      setError('El texto debe tener al menos 3 caracteres');
      return;
    }

    onAdd(trimmed);
    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nueva tarea
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe una tarea..."
          aria-invalid={!!error}
        />
      </label>

      {error && <p role="alert">{error}</p>}

      <button type="submit">Agregar</button>
    </form>
  );
}
