// ============================================
// APP PRINCIPAL
// ============================================

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ItemList } from './components/ItemList';
import { ItemForm } from './components/ItemForm';
import { Notifications } from './components/Notifications';
import { useUIStore } from './stores/uiStore';
import { useAuthStore } from './stores/authStore';

import './App.css';

function App() {
  const theme = useUIStore((s) => s.theme);
  const hasHydrated = useAuthStore((s) => s._hasHydrated);

  // Esperar rehidratación
  if (!hasHydrated) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className={`app ${theme}`}>
      <Header />

      <div className="main-layout">
        <Sidebar />

        <main className="content">
          <ItemList />
        </main>
      </div>

      {/* Modales */}
      <ItemForm />

      {/* Notificaciones */}
      <Notifications />
    </div>
  );
}

export default App;
