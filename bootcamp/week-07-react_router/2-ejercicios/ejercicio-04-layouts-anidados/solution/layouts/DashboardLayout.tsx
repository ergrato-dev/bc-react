// ============================================
// SOLUCIÓN: DashboardLayout
// ============================================

import { Outlet, NavLink } from 'react-router-dom';

export const DashboardLayout: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h3>Dashboard</h3>
        <nav className="sidebar-nav">
          {/* end: solo activo en /dashboard exactamente */}
          <NavLink
            to="/dashboard"
            end>
            Overview
          </NavLink>
          <NavLink to="/dashboard/analytics">Analytics</NavLink>
          <NavLink to="/dashboard/settings">Settings</NavLink>
        </nav>
      </aside>

      <div className="dashboard-content">
        {/* Outlet para las rutas hijas del dashboard */}
        <Outlet />
      </div>
    </div>
  );
};
