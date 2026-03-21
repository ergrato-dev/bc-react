// ============================================
// EJERCICIO 03: Campos Dinámicos con useFieldArray
// SOLUCIÓN COMPLETA
// ============================================

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// ============================================
// PASO 1: Schema de Zod para Arrays
// ============================================

const productSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  quantity: z.number().min(1, 'Mínimo 1 unidad'),
  price: z.number().min(0.01, 'El precio debe ser mayor a 0'),
});

const orderSchema = z.object({
  customerName: z.string().min(1, 'El nombre del cliente es requerido'),
  products: z.array(productSchema).min(1, 'Agrega al menos un producto'),
  notes: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

// ============================================
// PASOS 2, 3 y 4: Componente OrderForm
// ============================================

const OrderForm: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      customerName: '',
      products: [{ name: '', quantity: 1, price: 0 }],
      notes: '',
    },
  });

  // PASO 2: useFieldArray para manejar el array de productos
  // control: conecta con el formulario
  // name: nombre del campo array
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'products',
  });

  // Observamos los productos para calcular el total en tiempo real
  const products = watch('products');
  const total = products.reduce(
    (sum, product) => sum + (product.quantity * product.price || 0),
    0,
  );

  const onSubmit = (data: OrderFormData): void => {
    console.log('Pedido:', data);
    console.log('Total:', total);
    alert(`Pedido creado. Total: $${total.toFixed(2)}`);
  };

  // PASO 4: Funciones para manipular el array
  const handleAddProduct = (): void => {
    append({ name: '', quantity: 1, price: 0 });
  };

  const handleMoveUp = (index: number): void => {
    if (index > 0) {
      move(index, index - 1);
    }
  };

  const handleMoveDown = (index: number): void => {
    if (index < fields.length - 1) {
      move(index, index + 1);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>📦 Nuevo Pedido</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Cliente */}
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="customerName"
            style={{ display: 'block', marginBottom: '4px' }}>
            Cliente:
          </label>
          <input
            id="customerName"
            {...register('customerName')}
            placeholder="Nombre del cliente"
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: errors.customerName
                ? '1px solid #ef4444'
                : '1px solid #ccc',
            }}
          />
          {errors.customerName && (
            <span style={{ color: '#ef4444', fontSize: '12px' }}>
              {errors.customerName.message}
            </span>
          )}
        </div>

        {/* Lista de Productos */}
        <div style={{ marginBottom: '20px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px',
            }}>
            <h3 style={{ margin: 0 }}>Productos ({fields.length})</h3>
            <button
              type="button"
              onClick={handleAddProduct}
              style={{
                padding: '8px 16px',
                backgroundColor: '#4ade80',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}>
              ➕ Agregar Producto
            </button>
          </div>

          {/* PASO 3: Renderizar campos dinámicos */}
          {fields.map((field, index) => (
            <div
              key={field.id} // Importante: usar field.id, no index
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr auto',
                gap: '8px',
                marginBottom: '12px',
                padding: '12px',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
              }}>
              {/* Nombre del producto */}
              <div>
                <input
                  // Notación para campos de array: `name.${index}.field`
                  {...register(`products.${index}.name`)}
                  placeholder="Nombre del producto"
                  style={{
                    width: '100%',
                    padding: '8px',
                    boxSizing: 'border-box',
                    borderRadius: '4px',
                    border: errors.products?.[index]?.name
                      ? '1px solid #ef4444'
                      : '1px solid #ccc',
                  }}
                />
                {errors.products?.[index]?.name && (
                  <span
                    style={{
                      color: '#ef4444',
                      fontSize: '11px',
                      display: 'block',
                    }}>
                    {errors.products[index]?.name?.message}
                  </span>
                )}
              </div>

              {/* Cantidad */}
              <div>
                <input
                  type="number"
                  {...register(`products.${index}.quantity`, {
                    valueAsNumber: true,
                  })}
                  placeholder="Cant."
                  min={1}
                  style={{
                    width: '100%',
                    padding: '8px',
                    boxSizing: 'border-box',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                />
              </div>

              {/* Precio */}
              <div>
                <input
                  type="number"
                  step="0.01"
                  {...register(`products.${index}.price`, {
                    valueAsNumber: true,
                  })}
                  placeholder="Precio"
                  style={{
                    width: '100%',
                    padding: '8px',
                    boxSizing: 'border-box',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                />
              </div>

              {/* Acciones */}
              <div
                style={{
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'flex-start',
                }}>
                <button
                  type="button"
                  onClick={() => handleMoveUp(index)}
                  disabled={index === 0}
                  title="Mover arriba"
                  style={{
                    padding: '8px',
                    backgroundColor: index === 0 ? '#ccc' : '#3178C6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: index === 0 ? 'not-allowed' : 'pointer',
                  }}>
                  ⬆️
                </button>
                <button
                  type="button"
                  onClick={() => handleMoveDown(index)}
                  disabled={index === fields.length - 1}
                  title="Mover abajo"
                  style={{
                    padding: '8px',
                    backgroundColor:
                      index === fields.length - 1 ? '#ccc' : '#3178C6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor:
                      index === fields.length - 1 ? 'not-allowed' : 'pointer',
                  }}>
                  ⬇️
                </button>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                  title="Eliminar"
                  style={{
                    padding: '8px',
                    backgroundColor: fields.length === 1 ? '#ccc' : '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: fields.length === 1 ? 'not-allowed' : 'pointer',
                  }}>
                  🗑️
                </button>
              </div>
            </div>
          ))}

          {/* Error a nivel del array */}
          {errors.products?.root && (
            <span style={{ color: '#ef4444', fontSize: '12px' }}>
              {errors.products.root.message}
            </span>
          )}
        </div>

        {/* Notas */}
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="notes"
            style={{ display: 'block', marginBottom: '4px' }}>
            Notas (opcional):
          </label>
          <textarea
            id="notes"
            {...register('notes')}
            rows={3}
            placeholder="Instrucciones especiales..."
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Total */}
        <div
          style={{
            padding: '16px',
            backgroundColor: '#1a1a1a',
            color: 'white',
            borderRadius: '4px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <span>Productos: {fields.length}</span>
          <strong style={{ fontSize: '1.2em' }}>
            Total: ${total.toFixed(2)}
          </strong>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#3178C6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
          }}>
          📋 Crear Pedido
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
