// ============================================
// EJERCICIO 04: Formulario Multi-paso (Wizard)
// ============================================

import { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// ============================================
// PASO 1: Schema Completo del Wizard
// ============================================
console.log('--- Paso 1: Schema del Wizard ---');

// Descomenta las siguientes líneas:
// const wizardSchema = z.object({
//   // Paso 1: Información Personal
//   firstName: z.string().min(1, 'El nombre es requerido'),
//   lastName: z.string().min(1, 'El apellido es requerido'),
//   birthDate: z.string().min(1, 'La fecha de nacimiento es requerida'),
//
//   // Paso 2: Información de Contacto
//   email: z.string().email('Email no válido'),
//   phone: z.string().min(10, 'El teléfono debe tener al menos 10 dígitos'),
//   address: z.string().min(5, 'La dirección es requerida'),
//
//   // Paso 3: Preferencias
//   newsletter: z.boolean(),
//   theme: z.enum(['light', 'dark', 'system']),
//   language: z.enum(['es', 'en', 'pt']),
// });
//
// type WizardFormData = z.infer<typeof wizardSchema>;

// Campos por paso para validación parcial
// const stepFields: Record<number, (keyof WizardFormData)[]> = {
//   0: ['firstName', 'lastName', 'birthDate'],
//   1: ['email', 'phone', 'address'],
//   2: ['newsletter', 'theme', 'language'],
// };

console.log('');

// ============================================
// PASO 3: Componentes de Pasos
// ============================================
console.log('--- Paso 3: Componentes de Pasos ---');

// Descomenta los componentes de cada paso:

// Paso 1: Información Personal
// const PersonalInfoStep: React.FC = () => {
//   const { register, formState: { errors } } = useFormContext<WizardFormData>();
//
//   return (
//     <div>
//       <h3>📝 Información Personal</h3>
//
//       <div style={{ marginBottom: '16px' }}>
//         <label>Nombre:</label>
//         <input {...register('firstName')} style={{ width: '100%', padding: '8px' }} />
//         {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName.message}</span>}
//       </div>
//
//       <div style={{ marginBottom: '16px' }}>
//         <label>Apellido:</label>
//         <input {...register('lastName')} style={{ width: '100%', padding: '8px' }} />
//         {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName.message}</span>}
//       </div>
//
//       <div style={{ marginBottom: '16px' }}>
//         <label>Fecha de Nacimiento:</label>
//         <input type="date" {...register('birthDate')} style={{ width: '100%', padding: '8px' }} />
//         {errors.birthDate && <span style={{ color: 'red' }}>{errors.birthDate.message}</span>}
//       </div>
//     </div>
//   );
// };

// Paso 2: Información de Contacto
// const ContactInfoStep: React.FC = () => {
//   const { register, formState: { errors } } = useFormContext<WizardFormData>();
//
//   return (
//     <div>
//       <h3>📞 Información de Contacto</h3>
//
//       <div style={{ marginBottom: '16px' }}>
//         <label>Email:</label>
//         <input type="email" {...register('email')} style={{ width: '100%', padding: '8px' }} />
//         {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
//       </div>
//
//       <div style={{ marginBottom: '16px' }}>
//         <label>Teléfono:</label>
//         <input type="tel" {...register('phone')} style={{ width: '100%', padding: '8px' }} />
//         {errors.phone && <span style={{ color: 'red' }}>{errors.phone.message}</span>}
//       </div>
//
//       <div style={{ marginBottom: '16px' }}>
//         <label>Dirección:</label>
//         <input {...register('address')} style={{ width: '100%', padding: '8px' }} />
//         {errors.address && <span style={{ color: 'red' }}>{errors.address.message}</span>}
//       </div>
//     </div>
//   );
// };

// Paso 3: Preferencias
// const PreferencesStep: React.FC = () => {
//   const { register, formState: { errors } } = useFormContext<WizardFormData>();
//
//   return (
//     <div>
//       <h3>⚙️ Preferencias</h3>
//
//       <div style={{ marginBottom: '16px' }}>
//         <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//           <input type="checkbox" {...register('newsletter')} />
//           Recibir newsletter
//         </label>
//       </div>
//
//       <div style={{ marginBottom: '16px' }}>
//         <label>Tema:</label>
//         <select {...register('theme')} style={{ width: '100%', padding: '8px' }}>
//           <option value="light">☀️ Claro</option>
//           <option value="dark">🌙 Oscuro</option>
//           <option value="system">💻 Sistema</option>
//         </select>
//       </div>
//
//       <div style={{ marginBottom: '16px' }}>
//         <label>Idioma:</label>
//         <select {...register('language')} style={{ width: '100%', padding: '8px' }}>
//           <option value="es">🇪🇸 Español</option>
//           <option value="en">🇺🇸 English</option>
//           <option value="pt">🇧🇷 Português</option>
//         </select>
//       </div>
//     </div>
//   );
// };

console.log('');

// ============================================
// PASO 2 y 4: Componente Principal del Wizard
// ============================================
console.log('--- Paso 2 y 4: Componente WizardForm ---');

// Descomenta el componente principal:
// const WizardForm: React.FC = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const totalSteps = 3;
//
//   const methods = useForm<WizardFormData>({
//     resolver: zodResolver(wizardSchema),
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       birthDate: '',
//       email: '',
//       phone: '',
//       address: '',
//       newsletter: false,
//       theme: 'system',
//       language: 'es',
//     },
//     mode: 'onChange',
//   });
//
//   // Componentes de cada paso
//   const steps = [
//     <PersonalInfoStep key="personal" />,
//     <ContactInfoStep key="contact" />,
//     <PreferencesStep key="preferences" />,
//   ];
//
//   // Validar el paso actual antes de avanzar
//   const handleNext = async (): Promise<void> => {
//     const fields = stepFields[currentStep];
//     const isValid = await methods.trigger(fields);
//
//     if (isValid) {
//       setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
//     }
//   };
//
//   const handlePrev = (): void => {
//     setCurrentStep((prev) => Math.max(prev - 1, 0));
//   };
//
//   const onSubmit = (data: WizardFormData): void => {
//     console.log('Datos del wizard:', data);
//     alert('¡Registro completado!');
//   };
//
//   return (
//     <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
//       <h2>🧙‍♂️ Wizard de Registro</h2>
//
//       {/* Indicador de progreso */}
//       <div style={{ display: 'flex', marginBottom: '20px' }}>
//         {[1, 2, 3].map((step, index) => (
//           <div
//             key={step}
//             style={{
//               flex: 1,
//               height: '4px',
//               backgroundColor: index <= currentStep ? '#3178C6' : '#ccc',
//               marginRight: index < 2 ? '4px' : 0,
//               borderRadius: '2px',
//             }}
//           />
//         ))}
//       </div>
//
//       <p style={{ color: '#666', marginBottom: '20px' }}>
//         Paso {currentStep + 1} de {totalSteps}
//       </p>
//
//       {/* FormProvider comparte el formulario con los hijos */}
//       <FormProvider {...methods}>
//         <form onSubmit={methods.handleSubmit(onSubmit)}>
//           {/* Paso actual */}
//           {steps[currentStep]}
//
//           {/* Botones de navegación */}
//           <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
//             {currentStep > 0 && (
//               <button
//                 type="button"
//                 onClick={handlePrev}
//                 style={{
//                   flex: 1,
//                   padding: '12px',
//                   backgroundColor: '#f5f5f5',
//                   border: '1px solid #ccc',
//                   borderRadius: '4px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 ← Anterior
//               </button>
//             )}
//
//             {currentStep < totalSteps - 1 ? (
//               <button
//                 type="button"
//                 onClick={handleNext}
//                 style={{
//                   flex: 1,
//                   padding: '12px',
//                   backgroundColor: '#3178C6',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '4px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Siguiente →
//               </button>
//             ) : (
//               <button
//                 type="submit"
//                 style={{
//                   flex: 1,
//                   padding: '12px',
//                   backgroundColor: '#4ade80',
//                   color: 'black',
//                   border: 'none',
//                   borderRadius: '4px',
//                   cursor: 'pointer',
//                   fontWeight: 'bold',
//                 }}
//               >
//                 ✅ Completar Registro
//               </button>
//             )}
//           </div>
//         </form>
//       </FormProvider>
//     </div>
//   );
// };

// Placeholder
const WizardForm: React.FC = () => {
  return <div>Descomenta el código para ver el wizard</div>;
};

export default WizardForm;
