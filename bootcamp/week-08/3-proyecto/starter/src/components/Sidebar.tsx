// ============================================
// COMPONENTE: Sidebar
// ============================================

import { useUIStore } from '../stores/uiStore';
import { useMainStore } from '../stores/mainStore';

export const Sidebar: React.FC = () => {
  const sidebarOpen = useUIStore((s) => s.sidebarOpen);
  const openModal = useUIStore((s) => s.openModal);
  const items = useMainStore((s) => s.items);
  const clearFilters = useMainStore((s) => s.clearFilters);

  if (!sidebarOpen) return null;

  return (
    <aside className="sidebar">
      <nav>
        <h3>Menú</h3>

        <button
          className="sidebar-btn primary"
          onClick={() => openModal('create-item')}>
          ➕ Crear nuevo
        </button>

        <button
          className="sidebar-btn"
          onClick={clearFilters}>
          🔄 Limpiar filtros
        </button>

        <hr />

        <div className="sidebar-stats">
          <h4>Estadísticas</h4>
          <p>Total items: {items.length}</p>
          {/* TODO: Agregar más estadísticas de tu dominio */}
        </div>
      </nav>
    </aside>
  );
};
