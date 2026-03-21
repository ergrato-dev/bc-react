// ============================================
// PROYECTO WEEK-17: pages/Dashboard.tsx (STARTER)
// ============================================

import type { FC } from 'react';
// import { Link } from 'react-router-dom';

/**
 * Dashboard principal
 *
 * TODO: Implementar:
 * 1. Resumen de items de tu dominio
 * 2. Estadísticas básicas
 * 3. Enlaces a otras secciones
 */
const Dashboard: FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/* TODO: Agregar cards de resumen */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Items</h3>
          <p>???</p>
        </div>
        {/* TODO: Más cards según tu dominio */}
      </div>

      {/* TODO: Enlaces rápidos */}
      <div className="quick-links">
        {/* <Link to="/items">Ver todos los items</Link> */}
      </div>
    </div>
  );
};

export default Dashboard;
