// ============================================
// PROYECTO SEMANA 07: ProtectedRoute
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

  if (!isAuthenticated) {
    return (
      <Navigate
        to={redirectPath}
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return <Outlet />;
};
