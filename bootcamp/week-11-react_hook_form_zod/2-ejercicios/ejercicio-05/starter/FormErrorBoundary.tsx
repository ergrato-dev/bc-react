// ============================================
// EJERCICIO 05: Error Boundary con Formularios
// ============================================

import { Component, ErrorInfo, ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// ============================================
// PASO 1: Crear el Error Boundary
// ============================================
console.log('--- Paso 1: Error Boundary ---');

// Los Error Boundaries deben ser componentes de clase.
// Implementan métodos especiales para capturar errores.

// Descomenta las siguientes líneas:
// interface ErrorBoundaryProps {
//   children: ReactNode;
//   fallback?: ReactNode;
//   onReset?: () => void;
// }
//
// interface ErrorBoundaryState {
//   hasError: boolean;
//   error: Error | null;
//   errorInfo: ErrorInfo | null;
// }
//
// class FormErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = {
//       hasError: false,
//       error: null,
//       errorInfo: null,
//     };
//   }
//
//   // Este método se llama cuando ocurre un error durante el render
//   static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
//     return { hasError: true, error };
//   }
//
//   // Este método es para logging y side effects
//   componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
//     console.error('🔴 Error capturado por FormErrorBoundary:');
//     console.error('Error:', error);
//     console.error('Component Stack:', errorInfo.componentStack);
//
//     this.setState({ errorInfo });
//
//     // Aquí podrías enviar el error a un servicio de monitoreo
//     // sendToErrorService({ error, errorInfo });
//   }
//
//   // PASO 3: Método para resetear el estado
//   handleReset = (): void => {
//     this.setState({
//       hasError: false,
//       error: null,
//       errorInfo: null,
//     });
//     this.props.onReset?.();
//   };
//
//   render(): ReactNode {
//     if (this.state.hasError) {
//       // PASO 2: Fallback UI
//       if (this.props.fallback) {
//         return this.props.fallback;
//       }
//
//       return (
//         <div style={{
//           padding: '20px',
//           backgroundColor: '#fee2e2',
//           border: '1px solid #ef4444',
//           borderRadius: '8px',
//           textAlign: 'center',
//         }}>
//           <h3 style={{ color: '#dc2626', marginBottom: '12px' }}>
//             😕 Algo salió mal
//           </h3>
//           <p style={{ color: '#7f1d1d', marginBottom: '16px' }}>
//             Ha ocurrido un error en el formulario.
//           </p>
//           <details style={{ marginBottom: '16px', textAlign: 'left' }}>
//             <summary style={{ cursor: 'pointer', color: '#991b1b' }}>
//               Ver detalles del error
//             </summary>
//             <pre style={{
//               backgroundColor: '#1a1a1a',
//               color: '#f87171',
//               padding: '12px',
//               borderRadius: '4px',
//               overflow: 'auto',
//               fontSize: '12px',
//               marginTop: '8px',
//             }}>
//               {this.state.error?.message}
//             </pre>
//           </details>
//           <button
//             onClick={this.handleReset}
//             style={{
//               padding: '10px 20px',
//               backgroundColor: '#3178C6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer',
//               fontWeight: 'bold',
//             }}
//           >
//             🔄 Reintentar
//           </button>
//         </div>
//       );
//     }
//
//     return this.props.children;
//   }
// }

console.log('');

// ============================================
// PASO 4: Formulario que puede fallar
// ============================================
console.log('--- Paso 4: Formulario con Error Boundary ---');

// Descomenta el formulario:
// const schema = z.object({
//   name: z.string().min(1, 'El nombre es requerido'),
//   triggerError: z.boolean(),
// });
//
// type FormData = z.infer<typeof schema>;
//
// // Componente que lanza error intencionalmente
// const ProblematicForm: React.FC = () => {
//   const { register, handleSubmit, watch } = useForm<FormData>({
//     resolver: zodResolver(schema),
//     defaultValues: { name: '', triggerError: false },
//   });
//
//   const triggerError = watch('triggerError');
//
//   // Simula un error durante el render
//   if (triggerError) {
//     throw new Error('Error simulado: El checkbox de error está activado');
//   }
//
//   const onSubmit = (data: FormData): void => {
//     console.log('Datos:', data);
//     alert(`Hola, ${data.name}!`);
//   };
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '20px' }}>
//       <h3>📝 Formulario de Prueba</h3>
//
//       <div style={{ marginBottom: '16px' }}>
//         <label>Nombre:</label>
//         <input
//           {...register('name')}
//           style={{ width: '100%', padding: '8px' }}
//         />
//       </div>
//
//       <div style={{ marginBottom: '16px' }}>
//         <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444' }}>
//           <input type="checkbox" {...register('triggerError')} />
//           ⚠️ Activar error (para probar Error Boundary)
//         </label>
//       </div>
//
//       <button
//         type="submit"
//         style={{
//           padding: '10px 20px',
//           backgroundColor: '#4ade80',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//         }}
//       >
//         Enviar
//       </button>
//     </form>
//   );
// };
//
// // Componente principal que usa el Error Boundary
// const App: React.FC = () => {
//   const [key, setKey] = useState(0);
//
//   const handleReset = (): void => {
//     // Cambiar la key fuerza a React a recrear el componente
//     setKey((prev) => prev + 1);
//   };
//
//   return (
//     <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
//       <h2>🛡️ Error Boundary Demo</h2>
//       <p style={{ color: '#666', marginBottom: '20px' }}>
//         Activa el checkbox para simular un error y ver el Error Boundary en acción.
//       </p>
//
//       <FormErrorBoundary key={key} onReset={handleReset}>
//         <ProblematicForm />
//       </FormErrorBoundary>
//     </div>
//   );
// };

// Placeholder
const FormErrorBoundary: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

const App: React.FC = () => {
  return <div>Descomenta el código para ver el Error Boundary</div>;
};

export { FormErrorBoundary };
export default App;
