// ============================================
// EJERCICIO 03: Campos Dinámicos con useFieldArray
// ============================================

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// ============================================
// PASO 1: Definir el Schema para Arrays
// ============================================
console.log('--- Paso 1: Schema con Arrays ---');

// Definimos el schema para un producto individual
// y luego un array de productos.

// Descomenta las siguientes líneas:
// const productSchema = z.object({
//   name: z.string().min(1, 'El nombre es requerido'),
//   quantity: z.number().min(1, 'Mínimo 1 unidad'),
//   price: z.number().min(0.01, 'El precio debe ser mayor a 0'),
// });
//
// const orderSchema = z.object({
//   customerName: z.string().min(1, 'El nombre del cliente es requerido'),
//   products: z
//     .array(productSchema)
//     .min(1, 'Agrega al menos un producto'),
//   notes: z.string().optional(),
// });
//
// type OrderFormData = z.infer<typeof orderSchema>;
// type Product = z.infer<typeof productSchema>;

console.log('');

// ============================================
// PASO 2: Configurar useFieldArray
// ============================================
console.log('--- Paso 2: Configurar useFieldArray ---');

// useFieldArray requiere el objeto control de useForm
// y el nombre del campo array.

// Ver implementación en el componente

console.log('');

// ============================================
// PASO 3 y 4: Componente OrderForm
// ============================================
console.log('--- Paso 3 y 4: Componente OrderForm ---');

// El componente usa useFieldArray para manejar el array de productos.
// Cada producto tiene su propio conjunto de campos.

// Descomenta el componente completo:
// const OrderForm: React.FC = () => {
//   const {
//     register,
//     control,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<OrderFormData>({
//     resolver: zodResolver(orderSchema),
//     defaultValues: {
//       customerName: '',
//       products: [{ name: '', quantity: 1, price: 0 }],
//       notes: '',
//     },
//   });
//
//   // useFieldArray para manejar el array de productos
//   const { fields, append, remove, move } = useFieldArray({
//     control,
//     name: 'products',
//   });
//
//   // Observamos los productos para calcular el total
//   const products = watch('products');
//   const total = products.reduce(
//     (sum, product) => sum + (product.quantity * product.price || 0),
//     0
//   );
//
//   const onSubmit = (data: OrderFormData): void => {
//     console.log('Pedido:', data);
//     console.log('Total:', total);
//     alert(`Pedido creado. Total: $${total.toFixed(2)}`);
//   };
//
//   // Función para agregar un nuevo producto
//   const handleAddProduct = (): void => {
//     append({ name: '', quantity: 1, price: 0 });
//   };
//
//   // Función para mover un producto hacia arriba
//   const handleMoveUp = (index: number): void => {
//     if (index > 0) {
//       move(index, index - 1);
//     }
//   };
//
//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
//       <h2>📦 Nuevo Pedido</h2>
//
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Cliente */}
//         <div style={{ marginBottom: '20px' }}>
//           <label htmlFor="customerName">Cliente:</label>
//           <input
//             id="customerName"
//             {...register('customerName')}
//             style={{ width: '100%', padding: '8px' }}
//           />
//           {errors.customerName && (
//             <span style={{ color: '#ef4444', fontSize: '12px' }}>
//               {errors.customerName.message}
//             </span>
//           )}
//         </div>
//
//         {/* Lista de Productos */}
//         <div style={{ marginBottom: '20px' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//             <h3>Productos</h3>
//             <button
//               type="button"
//               onClick={handleAddProduct}
//               style={{
//                 padding: '8px 16px',
//                 backgroundColor: '#4ade80',
//                 border: 'none',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//               }}
//             >
//               ➕ Agregar Producto
//             </button>
//           </div>
//
//           {fields.map((field, index) => (
//             <div
//               key={field.id}
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: '2fr 1fr 1fr auto',
//                 gap: '8px',
//                 marginBottom: '12px',
//                 padding: '12px',
//                 backgroundColor: '#f5f5f5',
//                 borderRadius: '4px',
//               }}
//             >
//               {/* Nombre del producto */}
//               <div>
//                 <input
//                   {...register(`products.${index}.name`)}
//                   placeholder="Nombre del producto"
//                   style={{ width: '100%', padding: '8px' }}
//                 />
//                 {errors.products?.[index]?.name && (
//                   <span style={{ color: '#ef4444', fontSize: '11px' }}>
//                     {errors.products[index]?.name?.message}
//                   </span>
//                 )}
//               </div>
//
//               {/* Cantidad */}
//               <div>
//                 <input
//                   type="number"
//                   {...register(`products.${index}.quantity`, { valueAsNumber: true })}
//                   placeholder="Cant."
//                   min={1}
//                   style={{ width: '100%', padding: '8px' }}
//                 />
//               </div>
//
//               {/* Precio */}
//               <div>
//                 <input
//                   type="number"
//                   step="0.01"
//                   {...register(`products.${index}.price`, { valueAsNumber: true })}
//                   placeholder="Precio"
//                   style={{ width: '100%', padding: '8px' }}
//                 />
//               </div>
//
//               {/* Acciones */}
//               <div style={{ display: 'flex', gap: '4px' }}>
//                 <button
//                   type="button"
//                   onClick={() => handleMoveUp(index)}
//                   disabled={index === 0}
//                   style={{
//                     padding: '8px',
//                     backgroundColor: index === 0 ? '#ccc' : '#3178C6',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: index === 0 ? 'not-allowed' : 'pointer',
//                   }}
//                 >
//                   ⬆️
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => remove(index)}
//                   disabled={fields.length === 1}
//                   style={{
//                     padding: '8px',
//                     backgroundColor: fields.length === 1 ? '#ccc' : '#ef4444',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '4px',
//                     cursor: fields.length === 1 ? 'not-allowed' : 'pointer',
//                   }}
//                 >
//                   🗑️
//                 </button>
//               </div>
//             </div>
//           ))}
//
//           {errors.products?.root && (
//             <span style={{ color: '#ef4444', fontSize: '12px' }}>
//               {errors.products.root.message}
//             </span>
//           )}
//         </div>
//
//         {/* Notas */}
//         <div style={{ marginBottom: '20px' }}>
//           <label htmlFor="notes">Notas (opcional):</label>
//           <textarea
//             id="notes"
//             {...register('notes')}
//             rows={3}
//             style={{ width: '100%', padding: '8px' }}
//           />
//         </div>
//
//         {/* Total */}
//         <div style={{
//           padding: '16px',
//           backgroundColor: '#1a1a1a',
//           color: 'white',
//           borderRadius: '4px',
//           marginBottom: '20px',
//           textAlign: 'right',
//         }}>
//           <strong>Total: ${total.toFixed(2)}</strong>
//         </div>
//
//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: '12px',
//             backgroundColor: '#3178C6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             fontWeight: 'bold',
//           }}
//         >
//           📋 Crear Pedido
//         </button>
//       </form>
//     </div>
//   );
// };

// Placeholder
const OrderForm: React.FC = () => {
  return <div>Descomenta el código para ver el formulario</div>;
};

export default OrderForm;
