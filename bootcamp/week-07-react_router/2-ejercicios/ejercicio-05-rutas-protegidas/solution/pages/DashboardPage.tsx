// ============================================
// SOLUCIÓN: DashboardPage (protegida)
// ============================================

import { useAuth } from '../hooks/useAuth';

export const DashboardPage: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard-page">
      <h2>Dashboard (Página Protegida)</h2>
      <p>Solo usuarios autenticados pueden ver esta página.</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};
