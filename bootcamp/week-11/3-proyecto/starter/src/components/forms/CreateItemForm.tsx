// ============================================
// FORMULARIO DE CREACIÓN
// Adapta este componente a tu dominio
// ============================================

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createItemSchema, CreateItemData } from '../../schemas/itemSchema';

interface CreateItemFormProps {
  onSubmit: (data: CreateItemData) => Promise<void>;
  onCancel?: () => void;
}

/**
 * Formulario para crear nuevos elementos
 * TODO: Adapta los campos a tu dominio asignado
 */
const CreateItemForm: React.FC<CreateItemFormProps> = ({
  onSubmit,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    reset,
  } = useForm<CreateItemData>({
    resolver: zodResolver(createItemSchema),
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      category: 'categoria1',
      date: new Date().toISOString().split('T')[0],
      active: true,
      contactEmail: '',
    },
  });

  const handleFormSubmit = async (data: CreateItemData): Promise<void> => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      console.error('Error al crear:', error);
    }
  };

  // Estilos
  const inputStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box' as const,
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '4px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '4px',
    fontWeight: 'bold' as const,
  };

  const errorStyle = {
    color: '#ef4444',
    fontSize: '12px',
    marginTop: '4px',
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <h2>📝 Crear Nuevo Elemento</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        TODO: Adapta este formulario a tu dominio asignado
      </p>

      {/* Campo: Nombre */}
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Nombre *</label>
        <input
          {...register('name')}
          placeholder="Nombre del elemento"
          style={{
            ...inputStyle,
            borderColor: errors.name ? '#ef4444' : '#ccc',
          }}
        />
        {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
      </div>

      {/* Campo: Descripción */}
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Descripción *</label>
        <textarea
          {...register('description')}
          placeholder="Describe el elemento..."
          rows={4}
          style={{
            ...inputStyle,
            borderColor: errors.description ? '#ef4444' : '#ccc',
          }}
        />
        {errors.description && (
          <p style={errorStyle}>{errors.description.message}</p>
        )}
      </div>

      {/* Campo: Precio */}
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Precio *</label>
        <input
          type="number"
          step="0.01"
          {...register('price', { valueAsNumber: true })}
          placeholder="0.00"
          style={{
            ...inputStyle,
            borderColor: errors.price ? '#ef4444' : '#ccc',
          }}
        />
        {errors.price && <p style={errorStyle}>{errors.price.message}</p>}
      </div>

      {/* Campo: Categoría */}
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Categoría *</label>
        <select
          {...register('category')}
          style={{
            ...inputStyle,
            borderColor: errors.category ? '#ef4444' : '#ccc',
          }}>
          <option value="categoria1">Categoría 1</option>
          <option value="categoria2">Categoría 2</option>
          <option value="categoria3">Categoría 3</option>
        </select>
        {errors.category && <p style={errorStyle}>{errors.category.message}</p>}
      </div>

      {/* Campo: Fecha */}
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Fecha *</label>
        <input
          type="date"
          {...register('date')}
          style={{
            ...inputStyle,
            borderColor: errors.date ? '#ef4444' : '#ccc',
          }}
        />
        {errors.date && <p style={errorStyle}>{errors.date.message}</p>}
      </div>

      {/* Campo: Email de contacto */}
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Email de contacto (opcional)</label>
        <input
          type="email"
          {...register('contactEmail')}
          placeholder="contacto@email.com"
          style={{
            ...inputStyle,
            borderColor: errors.contactEmail ? '#ef4444' : '#ccc',
          }}
        />
        {errors.contactEmail && (
          <p style={errorStyle}>{errors.contactEmail.message}</p>
        )}
      </div>

      {/* Campo: Activo */}
      <div style={{ marginBottom: '24px' }}>
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
          }}>
          <input
            type="checkbox"
            {...register('active')}
          />
          Activo
        </label>
      </div>

      {/* Estado del formulario */}
      <div style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
        Estado: {isDirty ? '📝 Modificado' : '✨ Sin cambios'}
      </div>

      {/* Botones */}
      <div style={{ display: 'flex', gap: '12px' }}>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: '#f5f5f5',
              border: '1px solid #ccc',
              borderRadius: '6px',
              cursor: 'pointer',
            }}>
            Cancelar
          </button>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            flex: 1,
            padding: '12px',
            backgroundColor: isSubmitting ? '#ccc' : '#4ade80',
            color: isSubmitting ? '#666' : '#1a1a1a',
            border: 'none',
            borderRadius: '6px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
          }}>
          {isSubmitting ? '⏳ Guardando...' : '✅ Crear Elemento'}
        </button>
      </div>
    </form>
  );
};

export default CreateItemForm;
