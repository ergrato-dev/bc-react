// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: contexts/ConfigContext.tsx
// ============================================

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from 'react';

// ============================================
// TIPOS
// ============================================

// TODO: Define los tipos para el estado de configuración
// interface ConfigState {
//   theme: 'light' | 'dark' | 'system';
//   fontSize: 'small' | 'medium' | 'large';
//   density: 'compact' | 'normal' | 'spacious';
//   notifications: {
//     email: boolean;
//     push: boolean;
//     sound: boolean;
//   };
// }

// TODO: Define las acciones del reducer usando discriminated unions
// type ConfigAction =
//   | { type: 'SET_THEME'; payload: ConfigState['theme'] }
//   | { type: 'SET_FONT_SIZE'; payload: ConfigState['fontSize'] }
//   | { type: 'SET_DENSITY'; payload: ConfigState['density'] }
//   | { type: 'SET_NOTIFICATION'; payload: { key: keyof ConfigState['notifications']; value: boolean } }
//   | { type: 'RESET' };

// ============================================
// CONSTANTES
// ============================================

// TODO: Define valores por defecto y key de localStorage
// const STORAGE_KEY = 'app-config';
// const defaultConfig: ConfigState = { ... };

// ============================================
// REDUCER
// ============================================

// TODO: Implementa el reducer para manejar las acciones
// const configReducer = (state: ConfigState, action: ConfigAction): ConfigState => { ... };

// ============================================
// CONTEXT Y HOOKS
// ============================================

// TODO: Crea el contexto con undefined para forzar validación
// const ConfigContext = createContext<ConfigContextValue | undefined>(undefined);

// TODO: Crea el hook useConfig con validación
// export const useConfig = () => { ... };

// ============================================
// PROVIDER
// ============================================

// TODO: Implementa el Provider con:
// 1. Inicialización desde localStorage
// 2. Persistencia cuando cambia el estado
// 3. Aplicación de tema al DOM (data-theme attribute)
// 4. Detección de preferencia del sistema

// interface ConfigProviderProps {
//   children: ReactNode;
// }
//
// export const ConfigProvider = ({ children }: ConfigProviderProps) => {
//   // Implementación aquí
// };

// Exportaciones temporales
export const useConfig = () => ({
  theme: 'light' as const,
  fontSize: 'medium' as const,
  density: 'normal' as const,
  notifications: { email: true, push: true, sound: false },
  setTheme: () => {},
  setFontSize: () => {},
  setDensity: () => {},
  setNotification: () => {},
  reset: () => {},
});

export const ConfigProvider = ({ children }: { children: ReactNode }) =>
  children;
