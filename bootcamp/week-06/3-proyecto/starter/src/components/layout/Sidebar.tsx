// ============================================
// Componente: Sidebar
// Barra lateral de navegación
// ============================================

import React from 'react';
// TODO: Importar useTheme
// import { useTheme } from '@/context';

interface SidebarProps {
  isOpen: boolean;
}

interface NavItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

// TODO: Adaptar items a tu dominio
const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊', active: true },
  { id: 'items', label: 'Items', icon: '📋' },
  { id: 'reports', label: 'Reportes', icon: '📈' },
  { id: 'settings', label: 'Configuración', icon: '⚙️' },
];

/**
 * Sidebar colapsable del dashboard
 */
export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  // TODO: Obtener tema del contexto
  // const { theme } = useTheme();

  const sidebarStyles: React.CSSProperties = {
    width: isOpen ? '250px' : '0',
    overflow: 'hidden',
    backgroundColor: '#1a1a1a', // TODO: theme.surfaceColor
    borderRight: '1px solid #333', // TODO: theme.borderColor
    transition: 'width 0.3s ease',
  };

  const innerStyles: React.CSSProperties = {
    width: '250px',
    padding: '1rem',
  };

  const navStyles: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const navItemStyles = (active?: boolean): React.CSSProperties => ({
    marginBottom: '0.5rem',
  });

  const linkStyles = (active?: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem',
    borderRadius: '4px',
    textDecoration: 'none',
    color: active ? '#61dafb' : '#888', // TODO: theme colors
    backgroundColor: active ? '#61dafb22' : 'transparent',
    transition: 'background-color 0.2s',
  });

  return (
    <aside style={sidebarStyles}>
      <div style={innerStyles}>
        <nav>
          <ul style={navStyles}>
            {navItems.map((item) => (
              <li
                key={item.id}
                style={navItemStyles(item.active)}>
                <a
                  href={`#${item.id}`}
                  style={linkStyles(item.active)}>
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
