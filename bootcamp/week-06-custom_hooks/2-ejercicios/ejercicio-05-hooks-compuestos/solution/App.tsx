// ============================================
// SOLUCIÓN: App de demostración
// Hook compuesto: useAuth
// ============================================

import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';

// ============================================
// Componente: LoginForm
// ============================================

const LoginForm: React.FC = () => {
  const { login, isLoading, error, clearError } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      // Limpiar formulario después de login exitoso
      setEmail('');
      setPassword('');
    }
  };

  const inputStyle: React.CSSProperties = {
    padding: '0.75rem',
    width: '100%',
    maxWidth: '300px',
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '4px',
    color: 'white',
    fontSize: '1rem',
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ color: '#4ecdc4', marginBottom: '1.5rem' }}>
        🔐 Iniciar Sesión
      </h2>

      {/* Error message */}
      {error && (
        <div
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#ff000022',
            border: '1px solid #ff4444',
            borderRadius: '4px',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '300px',
          }}>
          <span style={{ color: '#ff6666' }}>❌ {error}</span>
          <button
            type="button"
            onClick={clearError}
            style={{
              background: 'none',
              border: 'none',
              color: '#ff6666',
              cursor: 'pointer',
              fontSize: '1.2rem',
            }}>
            ×
          </button>
        </div>
      )}

      {/* Email input */}
      <div style={{ marginBottom: '1rem' }}>
        <label
          style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="usuario@ejemplo.com"
          required
          disabled={isLoading}
          style={{
            ...inputStyle,
            opacity: isLoading ? 0.6 : 1,
          }}
        />
      </div>

      {/* Password input */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label
          style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>
          Contraseña
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mínimo 4 caracteres"
          required
          disabled={isLoading}
          style={{
            ...inputStyle,
            opacity: isLoading ? 0.6 : 1,
          }}
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isLoading}
        style={{
          padding: '0.75rem 2rem',
          backgroundColor: isLoading ? '#444' : '#0066ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold',
          transition: 'background-color 0.2s',
        }}>
        {isLoading ? (
          <span>⏳ Iniciando sesión...</span>
        ) : (
          <span>Iniciar Sesión</span>
        )}
      </button>

      {/* Hint */}
      <p
        style={{
          marginTop: '1.5rem',
          color: '#666',
          fontSize: '0.85rem',
          maxWidth: '300px',
        }}>
        💡 Prueba con cualquier email válido y contraseña de 4+ caracteres.
        <br />
        Usa <code style={{ color: '#ff6b6b' }}>error@test.com</code> para
        simular error.
      </p>
    </form>
  );
};

// ============================================
// Componente: Dashboard (usuario logueado)
// ============================================

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div>
      <h2 style={{ color: '#4ecdc4', marginBottom: '1rem' }}>
        ✅ ¡Bienvenido, {user.name}!
      </h2>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '1.5rem',
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          border: '1px solid #333',
          maxWidth: '400px',
        }}>
        {/* Avatar */}
        <img
          src={user.avatar}
          alt={user.name}
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            border: '3px solid #61dafb',
          }}
        />

        {/* User info */}
        <div>
          <p style={{ margin: '0 0 0.5rem 0' }}>
            <strong style={{ color: '#888' }}>Email:</strong>
            <br />
            {user.email}
          </p>
          <p style={{ margin: 0 }}>
            <strong style={{ color: '#888' }}>ID:</strong>
            <br />
            <code style={{ color: '#4ecdc4' }}>#{user.id}</code>
          </p>
        </div>
      </div>

      {/* Logout button */}
      <button
        onClick={logout}
        style={{
          marginTop: '1.5rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold',
          transition: 'background-color 0.2s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff6666')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff4444')}>
        🚪 Cerrar Sesión
      </button>

      {/* Info */}
      <div
        style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#0a0a0a',
          borderRadius: '4px',
          border: '1px solid #222',
          maxWidth: '400px',
        }}>
        <h4 style={{ color: '#61dafb', marginTop: 0 }}>
          💾 Persistencia Activa
        </h4>
        <p style={{ color: '#888', fontSize: '0.9rem', margin: 0 }}>
          Tu sesión está guardada en localStorage.
          <br />
          Recarga la página y seguirás logueado.
          <br />
          El token expira en 1 hora.
        </p>
      </div>
    </div>
  );
};

// ============================================
// Componente: AuthStatus (debug info)
// ============================================

const AuthStatus: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth();

  return (
    <div
      style={{
        padding: '0.75rem 1rem',
        backgroundColor: '#0a0a0a',
        borderRadius: '4px',
        border: `1px solid ${isAuthenticated ? '#00ff00' : '#ff0000'}`,
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}>
      <span
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: isAuthenticated ? '#00ff00' : '#ff0000',
          boxShadow: `0 0 8px ${isAuthenticated ? '#00ff00' : '#ff0000'}`,
        }}
      />
      <span style={{ color: '#888' }}>
        {isLoading
          ? 'Procesando...'
          : isAuthenticated
            ? `Sesión activa: ${user?.email}`
            : 'No autenticado'}
      </span>
    </div>
  );
};

// ============================================
// App Principal
// ============================================

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        backgroundColor: '#0a0a0a',
        color: 'white',
        minHeight: '100vh',
      }}>
      <h1 style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
        Ejercicio 05: Hooks Compuestos
      </h1>
      <p style={{ color: '#888', marginBottom: '1.5rem' }}>
        <code style={{ color: '#4ecdc4' }}>useAuth</code> = useLocalStorage +
        login/logout + token management
      </p>

      <AuthStatus />

      <hr style={{ borderColor: '#333', margin: '1.5rem 0' }} />

      {isAuthenticated ? <Dashboard /> : <LoginForm />}
    </div>
  );
};

export default App;
