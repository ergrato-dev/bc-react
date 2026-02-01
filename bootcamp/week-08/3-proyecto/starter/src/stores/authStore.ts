// ============================================
// STORE DE AUTENTICACIÓN
// ============================================

import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';
import type { User, Credentials } from '../types';

// ============================================
// INTERFACE DEL STORE
// ============================================

interface AuthStore {
  // Estado
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  _hasHydrated: boolean;

  // TODO: Implementar acciones
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  setHasHydrated: (state: boolean) => void;
}

// ============================================
// CREAR STORE
// ============================================

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        // Estado inicial
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        _hasHydrated: false,

        // TODO: Implementar login
        // Simular llamada a API, setear user y token
        login: async (credentials) => {
          // Tu implementación aquí
          // Simular delay con setTimeout o similar
          // Validar credenciales (demo)
          // Set user, token, isAuthenticated
        },

        // TODO: Implementar logout
        // Limpiar user, token, isAuthenticated
        logout: () => {
          // Tu implementación aquí
        },

        // TODO: Implementar updateProfile
        updateProfile: (updates) => {
          // Tu implementación aquí
        },

        setHasHydrated: (state) => set({ _hasHydrated: state }),
      }),
      {
        name: 'auth-store',
        // Usar sessionStorage para auth
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({
          user: state.user,
          token: state.token,
          isAuthenticated: state.isAuthenticated,
        }),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      },
    ),
    {
      name: 'AuthStore',
    },
  ),
);
