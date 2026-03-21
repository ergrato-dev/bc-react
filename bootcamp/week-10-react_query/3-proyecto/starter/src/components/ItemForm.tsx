// ============================================
// COMPONENTE: ItemForm
// ============================================
// TODO: Implementar formulario de creación

import { useState } from 'react';

interface ItemFormProps {
  onClose: () => void;
}

export const ItemForm: React.FC<ItemFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('categoria-a');

  // TODO: Usar useCreateItem

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Llamar mutación y cerrar formulario
    console.log('Crear:', { name, description, category });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Nuevo Elemento</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: '0.5rem' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Descripción:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ display: 'block', width: '100%', padding: '0.5rem' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>
          Categoría:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '0.5rem' }}>
            <option value="categoria-a">Categoría A</option>
            <option value="categoria-b">Categoría B</option>
            <option value="categoria-c">Categoría C</option>
          </select>
        </label>
      </div>

      <button type="submit">Crear</button>
      <button
        type="button"
        onClick={onClose}>
        Cancelar
      </button>
    </form>
  );
};
