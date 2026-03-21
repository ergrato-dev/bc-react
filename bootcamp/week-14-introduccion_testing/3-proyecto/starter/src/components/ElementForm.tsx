// ============================================
// Componente ElementForm
// ============================================
// TODO: Renombra este componente según tu dominio
// Ejemplos: BookForm, MedicineForm, MemberForm, DishForm
// ============================================

import { useState } from 'react';

interface ElementFormProps {
  onAdd: (name: string) => void;
}

export function ElementForm({ onAdd }: ElementFormProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = name.trim();

    // TODO: Implementa la validación
    // - El nombre debe tener al menos 3 caracteres
    // - Si es inválido, muestra un mensaje de error
    // - Si es válido, llama onAdd y limpia el formulario

    if (trimmed.length < 3) {
      setError('El nombre debe tener al menos 3 caracteres');
      return;
    }

    onAdd(trimmed);
    setName('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: Personaliza el label según tu dominio */}
      <label>
        Nombre del elemento
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribe aquí..."
          aria-invalid={!!error}
        />
      </label>

      {error && <p role="alert">{error}</p>}

      <button type="submit">Agregar</button>
    </form>
  );
}
