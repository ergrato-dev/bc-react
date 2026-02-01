// ============================================
// EJERCICIO 05: ProtectedRoute
// ============================================

// ============================================
// PASO 1: Crear componente de protección
// ============================================
console.log('--- Paso 1: ProtectedRoute ---');

// Descomenta el siguiente código:

// import { Navigate, Outlet, useLocation } from 'react-router-dom';
//
// interface ProtectedRouteProps {
//   isAuthenticated: boolean;
//   redirectPath?: string;
// }
//
// export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
//   isAuthenticated,
//   redirectPath = '/login',
// }) => {
//   const location = useLocation();
//
//   // PASO 2: Redirigir si no está autenticado
//   if (!isAuthenticated) {
//     // Guardamos la ubicación actual para redirigir después del login
//     return (
//       <Navigate
//         to={redirectPath}
//         state={{ from: location.pathname }}
//         replace
//       />
//     );
//   }
//
//   // Si está autenticado, renderizar las rutas hijas
//   return <Outlet />;
// };

// Placeholder temporal
interface ProtectedRouteProps {
  isAuthenticated: boolean;
  redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
  return <div>ProtectedRoute - Descomenta el código</div>;
};

console.log('');
