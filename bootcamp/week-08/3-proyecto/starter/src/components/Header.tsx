// ============================================
// COMPONENTE: Header
// ============================================

import { useAuthStore } from '../stores/authStore';
import { useUIStore } from '../stores/uiStore';
// import { useMainStore } from '../stores/mainStore';

export const Header: React.FC = () => {
  // TODO: Obtener datos necesarios de los stores
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const theme = useUIStore((s) => s.theme);
  const setTheme = useUIStore((s) => s.setTheme);

  return (
    <header className={`header ${theme}`}>
      {/* TODO: Implementar header */}
      {/* - Botón toggle sidebar */}
      {/* - Título de la app */}
      {/* - Toggle theme */}
      {/* - Info de usuario y logout */}

      <button onClick={toggleSidebar}>☰</button>

      <h1>Sistema de Gestión</h1>

      <div className="header-actions">
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {user ? (
          <>
            <span>Hola, {user.name}</span>
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <span>Invitado</span>
        )}
      </div>
    </header>
  );
};
