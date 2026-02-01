// ============================================
// EJERCICIO 02: Formulario de Usuario
// ============================================
import { useState } from 'react';
import { useCreateUser } from '../hooks/useCreateUser';

// PASO 4: Implementar el formulario con mutation
// Descomenta el siguiente componente:

export const UserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Placeholder - reemplaza con el hook real
  const mutation = useCreateUser();

  // Placeholder del submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submit:', { name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Implementa el formulario descomentando el código</p>
    </form>
  );

  // DESCOMENTA DESDE AQUÍ:
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //
  //   if (!name.trim() || !email.trim()) return;
  //
  //   mutation.mutate(
  //     { name, email },
  //     {
  //       onSuccess: () => {
  //         // Limpiar formulario después de éxito
  //         setName('');
  //         setEmail('');
  //       },
  //     }
  //   );
  // };
  //
  // return (
  //   <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
  //     <h3>➕ Agregar Usuario</h3>
  //     <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
  //       <input
  //         type="text"
  //         placeholder="Nombre"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //         disabled={mutation.isPending}
  //         style={{
  //           padding: '0.5rem',
  //           borderRadius: '4px',
  //           border: '1px solid #444',
  //           backgroundColor: '#2d2d2d',
  //           color: '#fff',
  //         }}
  //       />
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         disabled={mutation.isPending}
  //         style={{
  //           padding: '0.5rem',
  //           borderRadius: '4px',
  //           border: '1px solid #444',
  //           backgroundColor: '#2d2d2d',
  //           color: '#fff',
  //         }}
  //       />
  //       <button
  //         type="submit"
  //         disabled={mutation.isPending}
  //         style={{
  //           padding: '0.5rem 1rem',
  //           backgroundColor: mutation.isPending ? '#444' : '#10b981',
  //           border: 'none',
  //           borderRadius: '4px',
  //           color: '#fff',
  //           cursor: mutation.isPending ? 'not-allowed' : 'pointer',
  //         }}
  //       >
  //         {mutation.isPending ? 'Creando...' : 'Crear Usuario'}
  //       </button>
  //     </div>
  //     {mutation.isError && (
  //       <p style={{ color: '#ef4444' }}>Error: {mutation.error?.message}</p>
  //     )}
  //   </form>
  // );
  // HASTA AQUÍ
};
