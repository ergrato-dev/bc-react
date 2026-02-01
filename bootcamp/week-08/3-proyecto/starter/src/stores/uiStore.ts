// ============================================
// STORE DE UI
// ============================================

import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import type { Theme, ModalType, Notification } from '../types';

// ============================================
// INTERFACE DEL STORE
// ============================================

interface UIStore {
  // Estado
  sidebarOpen: boolean;
  theme: Theme;
  activeModal: ModalType;
  notifications: Notification[];

  // TODO: Implementar acciones
  toggleSidebar: () => void;
  setTheme: (theme: Theme) => void;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: number) => void;
}

// ============================================
// CREAR STORE
// ============================================

export const useUIStore = create<UIStore>()(
  devtools(
    persist(
      (set) => ({
        // Estado inicial
        sidebarOpen: true,
        theme: 'light',
        activeModal: null,
        notifications: [],

        // TODO: Implementar toggleSidebar
        toggleSidebar: () => {
          // Tu implementación aquí
        },

        // TODO: Implementar setTheme
        setTheme: (theme) => {
          // Tu implementación aquí
        },

        // TODO: Implementar openModal
        openModal: (modal) => {
          // Tu implementación aquí
        },

        // TODO: Implementar closeModal
        closeModal: () => {
          // Tu implementación aquí
        },

        // TODO: Implementar addNotification
        // Generar id único y agregar a la lista
        addNotification: (notification) => {
          // Tu implementación aquí
        },

        // TODO: Implementar removeNotification
        removeNotification: (id) => {
          // Tu implementación aquí
        },
      }),
      {
        name: 'ui-store',
        // Solo persistir tema y sidebar
        partialize: (state) => ({
          sidebarOpen: state.sidebarOpen,
          theme: state.theme,
        }),
      },
    ),
    {
      name: 'UIStore',
    },
  ),
);
