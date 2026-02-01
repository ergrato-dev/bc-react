// ============================================
// EJERCICIO 05: App de demostración
// Hook compuesto: useAuth
// ============================================

import React from 'react';
// import { useAuth } from './hooks/useAuth';

// Placeholder
const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Ejercicio 05: Hooks Compuestos</h1>
      <p>
        Descomenta el código en los archivos starter para ver los resultados.
      </p>
    </div>
  );
};

// ============================================
// PASO 4: Implementar LoginForm
// ============================================

// Descomenta:
// const LoginForm: React.FC = () => {
//   const { login, isLoading, error, clearError } = useAuth();
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const success = await login(email, password);
//     if (success) {
//       setEmail('');
//       setPassword('');
//     }
//   };
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Iniciar Sesión</h2>
//
//       {error && (
//         <div style={{
//           padding: '0.75rem',
//           backgroundColor: '#ff000022',
//           border: '1px solid red',
//           borderRadius: '4px',
//           marginBottom: '1rem',
//           display: 'flex',
//           justifyContent: 'space-between'
//         }}>
//           <span style={{ color: '#ff6666' }}>{error}</span>
//           <button type="button" onClick={clearError}>✕</button>
//         </div>
//       )}
//
//       <div style={{ marginBottom: '1rem' }}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//           style={{ padding: '0.5rem', width: '100%', maxWidth: '300px' }}
//         />
//       </div>
//
//       <div style={{ marginBottom: '1rem' }}>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Contraseña (min 4 caracteres)"
//           required
//           style={{ padding: '0.5rem', width: '100%', maxWidth: '300px' }}
//         />
//       </div>
//
//       <button
//         type="submit"
//         disabled={isLoading}
//         style={{
//           padding: '0.75rem 1.5rem',
//           backgroundColor: isLoading ? '#444' : '#0066ff',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: isLoading ? 'not-allowed' : 'pointer'
//         }}
//       >
//         {isLoading ? 'Entrando...' : 'Iniciar Sesión'}
//       </button>
//     </form>
//   );
// };

// ============================================
// PASO 5: Implementar Dashboard (usuario logueado)
// ============================================

// Descomenta:
// const Dashboard: React.FC = () => {
//   const { user, logout } = useAuth();
//
//   if (!user) return null;
//
//   return (
//     <div>
//       <h2>¡Bienvenido, {user.name}!</h2>
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '1rem',
//         padding: '1rem',
//         backgroundColor: '#1a1a1a',
//         borderRadius: '8px'
//       }}>
//         <img
//           src={user.avatar}
//           alt={user.name}
//           style={{ width: 64, height: 64, borderRadius: '50%' }}
//         />
//         <div>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>ID:</strong> {user.id}</p>
//         </div>
//       </div>
//       <button
//         onClick={logout}
//         style={{
//           marginTop: '1rem',
//           padding: '0.5rem 1rem',
//           backgroundColor: '#ff4444',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer'
//         }}
//       >
//         Cerrar Sesión
//       </button>
//     </div>
//   );
// };

// ============================================
// PASO 6: App completa
// ============================================

// Descomenta y usa como App principal:
// const AppFinal: React.FC = () => {
//   const { isAuthenticated } = useAuth();
//
//   return (
//     <div style={{
//       padding: '2rem',
//       fontFamily: 'sans-serif',
//       backgroundColor: '#0a0a0a',
//       color: 'white',
//       minHeight: '100vh'
//     }}>
//       <h1 style={{ color: '#61dafb' }}>Ejercicio 05: Hooks Compuestos</h1>
//       <p style={{ color: '#888' }}>
//         useAuth = useLocalStorage + login/logout logic
//       </p>
//       <hr style={{ borderColor: '#333', margin: '1.5rem 0' }} />
//
//       {isAuthenticated ? <Dashboard /> : <LoginForm />}
//     </div>
//   );
// };

export default App;
// export default AppFinal; // ← Cambia cuando completes
