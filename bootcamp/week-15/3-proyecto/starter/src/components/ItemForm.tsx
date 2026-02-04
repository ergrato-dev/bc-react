import { useState } from 'react';
import type { NewItem } from '../types';

interface ItemFormProps {
  onSubmit: (item: NewItem) => Promise<void>;
}

/**
 * Formulario para crear nuevos items
 * Adapta los campos a tu dominio asignado
 */
export const ItemForm: React.FC<ItemFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación
    if (!name.trim()) {
      setError('El nombre es requerido');
      return;
    }

    if (!description.trim()) {
      setError('La descripción es requerida');
      return;
    }

    try {
      setSubmitting(true);
      setError(null);
      await onSubmit({ name: name.trim(), description: description.trim() });
      // Reset form
      setName('');
      setDescription('');
    } catch {
      setError('Error al crear item');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={submitting}
        />
      </div>

      <div>
        <label htmlFor="description">Descripción:</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={submitting}
        />
      </div>

      {error && <p role="alert">{error}</p>}

      <button
        type="submit"
        disabled={submitting}>
        {submitting ? 'Guardando...' : 'Crear Item'}
      </button>
    </form>
  );
};
