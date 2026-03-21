// ============================================
// SOLUCIÓN: ProtectedRoute
// ============================================

import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  redirectPath = '/login',
}) => {
  const location = useLocation();

  // Redirigir si no está autenticado
  if (!isAuthenticated) {
    // Guardamos la ubicación actual para redirigir después del login
    return (
      <Navigate
        to={redirectPath}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  // Si está autenticado, renderizar las rutas hijas
  return <Outlet />;
};
