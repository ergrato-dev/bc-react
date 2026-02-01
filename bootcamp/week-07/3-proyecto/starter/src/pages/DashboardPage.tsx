// ============================================
// PROYECTO SEMANA 07: DashboardPage (Protegida)
// ============================================
// TODO: Adapta según tu dominio

import { useAuth } from '../hooks/useAuth';

export const DashboardPage: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard-page">
      {/* TODO: Personaliza el dashboard según tu dominio */}
      <h2>Dashboard</h2>
      <p>Página protegida - Solo usuarios autenticados</p>

      <div className="dashboard-stats">
        {/* TODO: Agrega estadísticas de tu dominio */}
        <div className="stat-card">
          <h3>Total Items</h3>
          <p className="stat-number">5</p>
        </div>
        <div className="stat-card">
          <h3>Categorías</h3>
          <p className="stat-number">3</p>
        </div>
      </div>

      <button
        onClick={logout}
        className="btn btn-danger">
        Cerrar Sesión
      </button>
    </div>
  );
};
