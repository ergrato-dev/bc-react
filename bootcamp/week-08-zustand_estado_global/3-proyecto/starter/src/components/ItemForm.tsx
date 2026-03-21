// ============================================
// COMPONENTE: ItemForm
// Formulario para crear/editar item
// ============================================

import { useState, useEffect } from 'react';
import type { NewItem } from '../types';
import { useMainStore } from '../stores/mainStore';
import { useUIStore } from '../stores/uiStore';

export const ItemForm: React.FC = () => {
  // Estado local del formulario
  const [formData, setFormData] = useState<NewItem>({
    name: '',
    description: '',
    // TODO: Agregar campos específicos de tu dominio
  });

  // Obtener estado de stores
  const activeModal = useUIStore((s) => s.activeModal);
  const closeModal = useUIStore((s) => s.closeModal);
  const addNotification = useUIStore((s) => s.addNotification);

  const addItem = useMainStore((s) => s.addItem);
  const updateItem = useMainStore((s) => s.updateItem);
  const selectedItem = useMainStore((s) => s.getSelectedItem());

  const isEditing = activeModal === 'edit-item' && selectedItem;

  // Cargar datos si estamos editando
  useEffect(() => {
    if (isEditing && selectedItem) {
      setFormData({
        name: selectedItem.name,
        description: selectedItem.description,
        // TODO: Cargar campos específicos de tu dominio
      });
    } else {
      setFormData({
        name: '',
        description: '',
      });
    }
  }, [isEditing, selectedItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Validar formulario

    if (isEditing && selectedItem) {
      updateItem(selectedItem.id, formData);
      addNotification({
        type: 'success',
        message: `"${formData.name}" actualizado correctamente`,
      });
    } else {
      addItem(formData);
      addNotification({
        type: 'success',
        message: `"${formData.name}" creado correctamente`,
      });
    }

    closeModal();
  };

  // No mostrar si no hay modal activo
  if (activeModal !== 'create-item' && activeModal !== 'edit-item') {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{isEditing ? 'Editar' : 'Crear'} Item</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          {/* TODO: Agregar campos específicos de tu dominio */}

          <div className="form-actions">
            <button
              type="button"
              onClick={closeModal}>
              Cancelar
            </button>
            <button type="submit">{isEditing ? 'Guardar' : 'Crear'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};
