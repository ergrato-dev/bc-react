// ============================================
// EJERCICIO 01: Formulario Básico con React Hook Form
// ============================================

import { useForm } from 'react-hook-form';

// ============================================
// PASO 1: Definir la Interface del Formulario
// ============================================
console.log('--- Paso 1: Interface del Formulario ---');

// En TypeScript, definimos una interface para tipar los datos del formulario.
// Esto nos da autocompletado y validación de tipos.

// Descomenta las siguientes líneas:
// interface ContactFormData {
//   name: string;
//   email: string;
//   message: string;
// }

console.log('');

// ============================================
// PASO 2: Configurar useForm
// ============================================
console.log('--- Paso 2: Configurar useForm ---');

// useForm es el hook principal de React Hook Form.
// Le pasamos el tipo genérico para tipar los datos.
// También podemos pasar valores por defecto (defaultValues).

// Descomenta las siguientes líneas dentro del componente:
// const {
//   register,
//   handleSubmit,
//   formState: { errors, isSubmitting, isDirty },
//   reset,
// } = useForm<ContactFormData>({
//   defaultValues: {
//     name: '',
//     email: '',
//     message: '',
//   },
// });

console.log('');

// ============================================
// PASO 3: Crear la Función onSubmit
// ============================================
console.log('--- Paso 3: Función onSubmit ---');

// La función onSubmit recibe los datos ya validados.
// handleSubmit se encarga de prevenir el default y validar.

// Descomenta las siguientes líneas:
// const onSubmit = async (data: ContactFormData): Promise<void> => {
//   // Simulamos un delay de envío
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//
//   console.log('Datos enviados:', data);
//   alert(`¡Gracias ${data.name}! Tu mensaje ha sido enviado.`);
//
//   // Reseteamos el formulario después del envío
//   reset();
// };

console.log('');

// ============================================
// PASO 4: Crear el Componente
// ============================================
console.log('--- Paso 4: Componente ContactForm ---');

// El componente renderiza el formulario con los inputs conectados
// mediante register() y el submit manejado por handleSubmit().

// Descomenta el componente completo:
// const ContactForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { isSubmitting, isDirty },
//     reset,
//   } = useForm<ContactFormData>({
//     defaultValues: {
//       name: '',
//       email: '',
//       message: '',
//     },
//   });
//
//   const onSubmit = async (data: ContactFormData): Promise<void> => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log('Datos enviados:', data);
//     alert(`¡Gracias ${data.name}! Tu mensaje ha sido enviado.`);
//     reset();
//   };
//
//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
//       <h2>Formulario de Contacto</h2>
//
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Campo Nombre */}
//         <div style={{ marginBottom: '16px' }}>
//           <label htmlFor="name" style={{ display: 'block', marginBottom: '4px' }}>
//             Nombre:
//           </label>
//           <input
//             id="name"
//             type="text"
//             {...register('name')}
//             placeholder="Tu nombre"
//             style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//           />
//         </div>
//
//         {/* Campo Email */}
//         <div style={{ marginBottom: '16px' }}>
//           <label htmlFor="email" style={{ display: 'block', marginBottom: '4px' }}>
//             Email:
//           </label>
//           <input
//             id="email"
//             type="email"
//             {...register('email')}
//             placeholder="tu@email.com"
//             style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//           />
//         </div>
//
//         {/* Campo Mensaje */}
//         <div style={{ marginBottom: '16px' }}>
//           <label htmlFor="message" style={{ display: 'block', marginBottom: '4px' }}>
//             Mensaje:
//           </label>
//           <textarea
//             id="message"
//             {...register('message')}
//             placeholder="Escribe tu mensaje..."
//             rows={4}
//             style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
//           />
//         </div>
//
//         {/* Estado del formulario */}
//         <div style={{ marginBottom: '16px', fontSize: '14px', color: '#666' }}>
//           <p>Estado: {isDirty ? '📝 Modificado' : '✨ Sin cambios'}</p>
//         </div>
//
//         {/* Botón Submit */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           style={{
//             width: '100%',
//             padding: '12px',
//             backgroundColor: isSubmitting ? '#ccc' : '#3178C6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: isSubmitting ? 'not-allowed' : 'pointer',
//           }}
//         >
//           {isSubmitting ? '⏳ Enviando...' : '📨 Enviar Mensaje'}
//         </button>
//       </form>
//     </div>
//   );
// };

// Placeholder para que el archivo compile
const ContactForm: React.FC = () => {
  return <div>Descomenta el código para ver el formulario</div>;
};

export default ContactForm;
