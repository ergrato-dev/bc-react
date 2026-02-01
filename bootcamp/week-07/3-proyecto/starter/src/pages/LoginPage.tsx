// ============================================
// PROYECTO SEMANA 07: LoginPage
// ============================================

import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface LocationState {
  from?: string;
}

export const LoginPage: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState;
  const from = state?.from || '/dashboard';

  // Si ya está autenticado, redirigir
  if (isAuthenticated) {
    navigate(from, { replace: true });
    return null;
  }

  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <div className="login-page">
      <h2>Iniciar Sesión</h2>

      {state?.from && (
        <p className="redirect-message">
          Inicia sesión para acceder a: <code>{state.from}</code>
        </p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="tu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary">
          Entrar
        </button>
      </form>
    </div>
  );
};
