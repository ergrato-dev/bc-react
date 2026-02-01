// ============================================
// SOLUCIÓN: LoginPage con redirección post-login
// ============================================

import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface LocationState {
  from?: string;
}

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Obtener la ruta desde donde fue redirigido
  const state = location.state as LocationState;
  const from = state?.from || '/dashboard';

  const handleLogin = () => {
    login();
    // Redirigir a donde el usuario quería ir
    navigate(from, { replace: true });
  };

  return (
    <div className="login-page">
      <h2>Iniciar Sesión</h2>
      {state?.from && <p>Debes iniciar sesión para acceder a: {state.from}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
