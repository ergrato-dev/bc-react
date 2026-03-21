// ============================================
// EJERCICIO 02: Validación con Zod
// ============================================

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// ============================================
// PASO 1: Crear el Schema de Zod
// ============================================
console.log('--- Paso 1: Schema de Zod ---');

// Zod nos permite definir validaciones de forma declarativa.
// Cada campo tiene su propio conjunto de reglas.

// Descomenta las siguientes líneas:
// const registrationSchema = z.object({
//   username: z
//     .string()
//     .min(3, 'El usuario debe tener al menos 3 caracteres')
//     .max(20, 'El usuario no puede exceder 20 caracteres')
//     .regex(/^[a-zA-Z0-9_]+$/, 'Solo letras, números y guion bajo'),
//
//   email: z
//     .string()
//     .min(1, 'El email es requerido')
//     .email('Ingresa un email válido'),
//
//   password: z
//     .string()
//     .min(8, 'La contraseña debe tener al menos 8 caracteres')
//     .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
//     .regex(/[0-9]/, 'Debe contener al menos un número'),
//
//   confirmPassword: z
//     .string()
//     .min(1, 'Confirma tu contraseña'),
//
//   age: z
//     .number({ invalid_type_error: 'La edad debe ser un número' })
//     .min(18, 'Debes ser mayor de 18 años')
//     .max(120, 'Edad no válida'),
//
//   terms: z
//     .boolean()
//     .refine((val) => val === true, 'Debes aceptar los términos'),
// });

console.log('');

// ============================================
// PASO 2: Añadir Validación de Contraseñas
// ============================================
console.log('--- Paso 2: Validación de Contraseñas ---');

// Usamos refine() a nivel de objeto para comparar campos.

// Descomenta las siguientes líneas:
// const registrationSchemaWithRefine = registrationSchema.refine(
//   (data) => data.password === data.confirmPassword,
//   {
//     message: 'Las contraseñas no coinciden',
//     path: ['confirmPassword'], // Indica en qué campo mostrar el error
//   }
// );

// Tipo inferido automáticamente del schema
// type RegistrationFormData = z.infer<typeof registrationSchemaWithRefine>;

console.log('');

// ============================================
// PASO 3: Componente con Validación
// ============================================
console.log('--- Paso 3: Componente RegistrationForm ---');

// El componente usa zodResolver para conectar Zod con React Hook Form.
// Los errores se muestran automáticamente según el schema.

// Descomenta el componente completo:
// const RegistrationForm: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<RegistrationFormData>({
//     resolver: zodResolver(registrationSchemaWithRefine),
//     defaultValues: {
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       age: undefined,
//       terms: false,
//     },
//   });
//
//   const onSubmit = async (data: RegistrationFormData): Promise<void> => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log('Usuario registrado:', data);
//     alert('¡Registro exitoso!');
//   };
//
//   // Componente para mostrar errores
//   const ErrorMessage: React.FC<{ message?: string }> = ({ message }) => {
//     if (!message) return null;
//     return (
//       <span style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px', display: 'block' }}>
//         {message}
//       </span>
//     );
//   };
//
//   return (
//     <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
//       <h2>Registro de Usuario</h2>
//
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Username */}
//         <div style={{ marginBottom: '16px' }}>
//           <label htmlFor="username">Usuario:</label>
//           <input
//             id="username"
//             {...register('username')}
//             style={{
//               width: '100%',
//               padding: '8px',
//               borderColor: errors.username ? '#ef4444' : '#ccc',
//             }}
//           />
//           <ErrorMessage message={errors.username?.message} />
//         </div>
//
//         {/* Email */}
//         <div style={{ marginBottom: '16px' }}>
//           <label htmlFor="email">Email:</label>
//           <input
//             id="email"
//             type="email"
//             {...register('email')}
//             style={{
//               width: '100%',
//               padding: '8px',
//               borderColor: errors.email ? '#ef4444' : '#ccc',
//             }}
//           />
//           <ErrorMessage message={errors.email?.message} />
//         </div>
//
//         {/* Password */}
//         <div style={{ marginBottom: '16px' }}>
//           <label htmlFor="password">Contraseña:</label>
//           <input
//             id="password"
//             type="password"
//             {...register('password')}
//             style={{
//               width: '100%',
//               padding: '8px',
//               borderColor: errors.password ? '#ef4444' : '#ccc',
//             }}
//           />
//           <ErrorMessage message={errors.password?.message} />
//         </div>
//
//         {/* Confirm Password */}
//         <div style={{ marginBottom: '16px' }}>
//           <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
//           <input
//             id="confirmPassword"
//             type="password"
//             {...register('confirmPassword')}
//             style={{
//               width: '100%',
//               padding: '8px',
//               borderColor: errors.confirmPassword ? '#ef4444' : '#ccc',
//             }}
//           />
//           <ErrorMessage message={errors.confirmPassword?.message} />
//         </div>
//
//         {/* Age */}
//         <div style={{ marginBottom: '16px' }}>
//           <label htmlFor="age">Edad:</label>
//           <input
//             id="age"
//             type="number"
//             {...register('age', { valueAsNumber: true })}
//             style={{
//               width: '100%',
//               padding: '8px',
//               borderColor: errors.age ? '#ef4444' : '#ccc',
//             }}
//           />
//           <ErrorMessage message={errors.age?.message} />
//         </div>
//
//         {/* Terms */}
//         <div style={{ marginBottom: '16px' }}>
//           <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//             <input type="checkbox" {...register('terms')} />
//             Acepto los términos y condiciones
//           </label>
//           <ErrorMessage message={errors.terms?.message} />
//         </div>
//
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           style={{
//             width: '100%',
//             padding: '12px',
//             backgroundColor: isSubmitting ? '#ccc' : '#4ade80',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: isSubmitting ? 'not-allowed' : 'pointer',
//           }}
//         >
//           {isSubmitting ? 'Registrando...' : 'Registrarse'}
//         </button>
//       </form>
//     </div>
//   );
// };

// Placeholder
const RegistrationForm: React.FC = () => {
  return <div>Descomenta el código para ver el formulario</div>;
};

export default RegistrationForm;
