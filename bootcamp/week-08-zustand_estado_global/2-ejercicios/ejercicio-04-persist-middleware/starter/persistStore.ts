// ============================================
// EJERCICIO 04: Persist Middleware
// ============================================

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// ============================================
// PASO 1: Store Básico con Persist
// ============================================
console.log('--- Paso 1: Persist Básico ---');

// QUÉ: Middleware persist guarda estado en storage
// PARA: Mantener datos entre recargas de página
// IMPACTO: Estado sobrevive a refresh/cierre

// Descomenta las siguientes líneas:
// interface ThemeStore {
//   theme: 'light' | 'dark';
//   fontSize: number;
//   toggleTheme: () => void;
//   setFontSize: (size: number) => void;
// }
//
// const useThemeStore = create<ThemeStore>()(
//   persist(
//     (set) => ({
//       theme: 'light',
//       fontSize: 16,
//       toggleTheme: () => set((s) => ({
//         theme: s.theme === 'light' ? 'dark' : 'light',
//       })),
//       setFontSize: (size) => set({ fontSize: size }),
//     }),
//     {
//       name: 'theme-storage', // Clave en localStorage
//     }
//   )
// );

console.log('useThemeStore con persist básico');
console.log('');

// ============================================
// PASO 2: Persist con Partialize
// ============================================
console.log('--- Paso 2: Persistencia Selectiva ---');

// QUÉ: partialize selecciona qué partes del estado guardar
// PARA: Excluir datos temporales o sensibles
// IMPACTO: Storage optimizado

// Descomenta las siguientes líneas:
// interface UserStore {
//   // Datos a persistir
//   user: { id: number; name: string; email: string } | null;
//   token: string | null;
//   preferences: { newsletter: boolean; language: string };
//
//   // Datos temporales (NO persistir)
//   isLoading: boolean;
//   lastError: string | null;
//
//   setUser: (user: UserStore['user']) => void;
//   setToken: (token: string | null) => void;
//   setLoading: (loading: boolean) => void;
//   logout: () => void;
// }
//
// const useUserStore = create<UserStore>()(
//   persist(
//     (set) => ({
//       user: null,
//       token: null,
//       preferences: { newsletter: true, language: 'es' },
//       isLoading: false,
//       lastError: null,
//
//       setUser: (user) => set({ user }),
//       setToken: (token) => set({ token }),
//       setLoading: (loading) => set({ isLoading: loading }),
//       logout: () => set({ user: null, token: null }),
//     }),
//     {
//       name: 'user-storage',
//       // Solo persistir estos campos
//       partialize: (state) => ({
//         user: state.user,
//         token: state.token,
//         preferences: state.preferences,
//         // isLoading y lastError NO se persisten
//       }),
//     }
//   )
// );

console.log('useUserStore con partialize');
console.log('');

// ============================================
// PASO 3: Storage Personalizado
// ============================================
console.log('--- Paso 3: sessionStorage ---');

// QUÉ: Cambiar de localStorage a sessionStorage
// PARA: Datos que solo deben durar la sesión
// IMPACTO: Se borra al cerrar el navegador

// Descomenta las siguientes líneas:
// interface SessionStore {
//   sessionId: string | null;
//   startedAt: string | null;
//   initSession: () => void;
//   endSession: () => void;
// }
//
// const useSessionStore = create<SessionStore>()(
//   persist(
//     (set) => ({
//       sessionId: null,
//       startedAt: null,
//
//       initSession: () => set({
//         sessionId: crypto.randomUUID(),
//         startedAt: new Date().toISOString(),
//       }),
//
//       endSession: () => set({
//         sessionId: null,
//         startedAt: null,
//       }),
//     }),
//     {
//       name: 'session-storage',
//       // Usar sessionStorage en lugar de localStorage
//       storage: createJSONStorage(() => sessionStorage),
//     }
//   )
// );

console.log('useSessionStore con sessionStorage');
console.log('');

// ============================================
// PASO 4: Versiones y Migraciones
// ============================================
console.log('--- Paso 4: Migraciones ---');

// QUÉ: version + migrate para evolucionar el schema
// PARA: Mantener compatibilidad con datos antiguos
// IMPACTO: Usuarios no pierden datos al actualizar

// Descomenta las siguientes líneas:
// interface CartStoreV2 {
//   items: Array<{
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
//   }>;
//   // V2: Nuevo campo
//   currency: string;
//   addItem: (item: CartStoreV2['items'][0]) => void;
//   setCurrency: (currency: string) => void;
// }
//
// const useCartStore = create<CartStoreV2>()(
//   persist(
//     (set) => ({
//       items: [],
//       currency: 'USD',
//
//       addItem: (item) => set((s) => ({
//         items: [...s.items, item],
//       })),
//       setCurrency: (currency) => set({ currency }),
//     }),
//     {
//       name: 'cart-storage',
//       version: 2, // Versión actual
//
//       // Migrar de versiones anteriores
//       migrate: (persistedState: unknown, version: number) => {
//         const state = persistedState as CartStoreV2;
//
//         if (version === 0 || version === 1) {
//           // V1 no tenía currency, agregar valor por defecto
//           return {
//             ...state,
//             currency: 'USD',
//           };
//         }
//
//         return state;
//       },
//     }
//   )
// );

console.log('useCartStore con versiones y migración');
console.log('');

// ============================================
// PASO 5: onRehydrateStorage
// ============================================
console.log('--- Paso 5: Callback de Rehidratación ---');

// QUÉ: onRehydrateStorage se llama al cargar datos
// PARA: Logging, validación, acciones post-carga
// IMPACTO: Control del proceso de rehidratación

// Descomenta las siguientes líneas:
// interface AuthStore {
//   isAuthenticated: boolean;
//   token: string | null;
//   _hasHydrated: boolean;
//
//   setToken: (token: string | null) => void;
//   setHasHydrated: (state: boolean) => void;
// }
//
// const useAuthStore = create<AuthStore>()(
//   persist(
//     (set) => ({
//       isAuthenticated: false,
//       token: null,
//       _hasHydrated: false,
//
//       setToken: (token) => set({
//         token,
//         isAuthenticated: !!token,
//       }),
//       setHasHydrated: (state) => set({ _hasHydrated: state }),
//     }),
//     {
//       name: 'auth-storage',
//       partialize: (state) => ({
//         token: state.token,
//         isAuthenticated: state.isAuthenticated,
//       }),
//
//       onRehydrateStorage: () => {
//         console.log('🔄 Iniciando rehidratación...');
//
//         // Retorna callback que se llama después
//         return (state, error) => {
//           if (error) {
//             console.error('❌ Error al rehidratar:', error);
//           } else {
//             console.log('✅ Rehidratación completa:', state);
//             state?.setHasHydrated(true);
//           }
//         };
//       },
//     }
//   )
// );
//
// // Componente que espera la hidratación
// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const hasHydrated = useAuthStore((s) => s._hasHydrated);
//   const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
//
//   if (!hasHydrated) {
//     return <div>Cargando...</div>;
//   }
//
//   if (!isAuthenticated) {
//     return <div>No autorizado</div>;
//   }
//
//   return <>{children}</>;
// };

console.log('useAuthStore con onRehydrateStorage');
console.log('');

// ============================================
// VERIFICACIÓN FINAL
// ============================================
console.log('='.repeat(50));
console.log('✅ Ejercicio 04 completado');
console.log('Aprendiste:');
console.log('  - persist básico con localStorage');
console.log('  - partialize para persistencia selectiva');
console.log('  - Usar sessionStorage');
console.log('  - Versiones y migraciones');
console.log('  - onRehydrateStorage callback');
console.log('='.repeat(50));
