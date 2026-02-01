// ============================================
// EJERCICIO 04: Context Básico
// Archivo: App.tsx - Aplicación de Demostración
// ============================================

import { useState } from 'react';
// Importa los contextos cuando estén implementados
// import { AuthProvider, useAuth } from './AuthContext';
// import { ThemeProvider, useTheme } from './ThemeContext';
// import { LanguageProvider, useLanguage } from './LanguageContext';

console.log('--- Paso 4: App de Demostración ---');

// ============================================
// COMPONENTES QUE USAN CONTEXTOS
// ============================================

// Descomenta cuando implementes los contextos:

// const Header = () => {
//   const { user, isAuthenticated, logout } = useAuth();
//   const { theme, toggleTheme } = useTheme();
//   const { t, language, setLanguage } = useLanguage();
//
//   const headerStyles: React.CSSProperties = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '16px 24px',
//     backgroundColor: theme === 'dark' ? '#1a1a2e' : '#ffffff',
//     color: theme === 'dark' ? '#ffffff' : '#333',
//     borderBottom: `1px solid ${theme === 'dark' ? '#333' : '#e0e0e0'}`,
//   };
//
//   return (
//     <header style={headerStyles}>
//       <h1 style={{ margin: 0, fontSize: '20px' }}>Mi App</h1>
//       <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
//         {/* Control de tema */}
//         <button onClick={toggleTheme} style={{ padding: '8px 12px', cursor: 'pointer' }}>
//           {theme === 'dark' ? '☀️' : '🌙'} {t('theme')}
//         </button>
//
//         {/* Control de idioma */}
//         <select
//           value={language}
//           onChange={(e) => setLanguage(e.target.value as 'es' | 'en')}
//           style={{ padding: '8px' }}
//         >
//           <option value="es">🇪🇸 Español</option>
//           <option value="en">🇺🇸 English</option>
//         </select>
//
//         {/* Usuario */}
//         {isAuthenticated && user && (
//           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//             <img
//               src={user.avatar}
//               alt={user.name}
//               style={{ width: '32px', height: '32px', borderRadius: '50%' }}
//             />
//             <span>{user.name}</span>
//             <button onClick={logout} style={{ padding: '8px 12px', cursor: 'pointer' }}>
//               {t('logout')}
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// const LoginForm = () => {
//   const { login, isLoading } = useAuth();
//   const { theme } = useTheme();
//   const { t } = useLanguage();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     try {
//       await login(email, password);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
//     }
//   };
//
//   const formStyles: React.CSSProperties = {
//     maxWidth: '400px',
//     margin: '48px auto',
//     padding: '32px',
//     backgroundColor: theme === 'dark' ? '#2d2d44' : '#ffffff',
//     color: theme === 'dark' ? '#ffffff' : '#333',
//     borderRadius: '8px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//   };
//
//   const inputStyles: React.CSSProperties = {
//     width: '100%',
//     padding: '12px',
//     marginBottom: '16px',
//     borderRadius: '6px',
//     border: '1px solid #e0e0e0',
//     fontSize: '14px',
//   };
//
//   const buttonStyles: React.CSSProperties = {
//     width: '100%',
//     padding: '12px',
//     backgroundColor: '#2196f3',
//     color: '#ffffff',
//     border: 'none',
//     borderRadius: '6px',
//     fontSize: '16px',
//     cursor: isLoading ? 'not-allowed' : 'pointer',
//     opacity: isLoading ? 0.7 : 1,
//   };
//
//   return (
//     <form onSubmit={handleSubmit} style={formStyles}>
//       <h2 style={{ marginTop: 0, textAlign: 'center' }}>{t('login')}</h2>
//       {error && (
//         <p style={{ color: '#f44336', textAlign: 'center' }}>{error}</p>
//       )}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         style={inputStyles}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password (min 6 chars)"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         style={inputStyles}
//         required
//       />
//       <button type="submit" style={buttonStyles} disabled={isLoading}>
//         {isLoading ? 'Cargando...' : t('login')}
//       </button>
//     </form>
//   );
// };

// const Dashboard = () => {
//   const { user } = useAuth();
//   const { theme } = useTheme();
//   const { t } = useLanguage();
//
//   const dashboardStyles: React.CSSProperties = {
//     padding: '24px',
//     backgroundColor: theme === 'dark' ? '#1a1a2e' : '#f5f5f5',
//     color: theme === 'dark' ? '#ffffff' : '#333',
//     minHeight: 'calc(100vh - 80px)',
//   };
//
//   return (
//     <div style={dashboardStyles}>
//       <h2>{t('welcome')}, {user?.name}!</h2>
//       <p>{t('greeting')}! Este es tu dashboard.</p>
//     </div>
//   );
// };

// const MainContent = () => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? <Dashboard /> : <LoginForm />;
// };

// ============================================
// APLICACIÓN PRINCIPAL
// ============================================

// Descomenta cuando implementes los contextos:
// export const App = () => {
//   return (
//     <LanguageProvider>
//       <ThemeProvider>
//         <AuthProvider>
//           <Header />
//           <MainContent />
//         </AuthProvider>
//       </ThemeProvider>
//     </LanguageProvider>
//   );
// };

// Exportación temporal
export const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>Ejercicio 04: Context Básico</h1>
    <p>Descomenta los contextos en cada archivo para completar el ejercicio.</p>
  </div>
);

console.log('App.tsx cargado');
