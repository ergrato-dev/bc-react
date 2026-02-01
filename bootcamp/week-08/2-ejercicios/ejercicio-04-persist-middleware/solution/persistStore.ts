// ============================================
// EJERCICIO 04: Persist Middleware - SOLUCIÓN
// ============================================

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// ============================================
// Store Básico con Persist
// ============================================

interface ThemeStore {
  theme: 'light' | 'dark';
  fontSize: number;
  toggleTheme: () => void;
  setFontSize: (size: number) => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      fontSize: 16,
      toggleTheme: () => set((s) => ({
        theme: s.theme === 'light' ? 'dark' : 'light',
      })),
      setFontSize: (size) => set({ fontSize: size }),
    }),
    {
      name: 'theme-storage',
    }
  )
);

// ============================================
// Persist con Partialize
// ============================================

interface UserStore {
  user: { id: number; name: string; email: string } | null;
  token: string | null;
  preferences: { newsletter: boolean; language: string };
  isLoading: boolean;
  lastError: string | null;

  setUser: (user: UserStore['user']) => void;
  setToken: (token: string | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      preferences: { newsletter: true, language: 'es' },
      isLoading: false,
      lastError: null,

      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      setLoading: (loading) => set({ isLoading: loading }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        preferences: state.preferences,
      }),
    }
  )
);

// ============================================
// Storage Personalizado (sessionStorage)
// ============================================

interface SessionStore {
  sessionId: string | null;
  startedAt: string | null;
  initSession: () => void;
  endSession: () => void;
}

const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      sessionId: null,
      startedAt: null,

      initSession: () => set({
        sessionId: crypto.randomUUID(),
        startedAt: new Date().toISOString(),
      }),

      endSession: () => set({
        sessionId: null,
        startedAt: null,
      }),
    }),
    {
      name: 'session-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// ============================================
// Versiones y Migraciones
// ============================================

interface CartStoreV2 {
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  currency: string;
  addItem: (item: CartStoreV2['items'][0]) => void;
  setCurrency: (currency: string) => void;
}

const useCartStore = create<CartStoreV2>()(
  persist(
    (set) => ({
      items: [],
      currency: 'USD',

      addItem: (item) => set((s) => ({
        items: [...s.items, item],
      })),
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: 'cart-storage',
      version: 2,

      migrate: (persistedState: unknown, version: number) => {
        const state = persistedState as CartStoreV2;

        if (version === 0 || version === 1) {
          return {
            ...state,
            currency: 'USD',
          };
        }

        return state;
      },
    }
  )
);

// ============================================
// onRehydrateStorage
// ============================================

interface AuthStore {
  isAuthenticated: boolean;
  token: string | null;
  _hasHydrated: boolean;

  setToken: (token: string | null) => void;
  setHasHydrated: (state: boolean) => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: null,
      _hasHydrated: false,

      setToken: (token) => set({
        token,
        isAuthenticated: !!token,
      }),
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),

      onRehydrateStorage: () => {
        console.log('🔄 Iniciando rehidratación...');

        return (state, error) => {
          if (error) {
            console.error('❌ Error al rehidratar:', error);
          } else {
            console.log('✅ Rehidratación completa:', state);
            state?.setHasHydrated(true);
          }
        };
      },
    }
  )
);

// Componente que espera la hidratación
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const hasHydrated = useAuthStore((s) => s._hasHydrated);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (!hasHydrated) {
    return <div>Cargando...</div>;
  }

  if (!isAuthenticated) {
    return <div>No autorizado</div>;
  }

  return <>{children}</>;
};

export {
  useThemeStore,
  useUserStore,
  useSessionStore,
  useCartStore,
  useAuthStore,
  ProtectedRoute,
};
