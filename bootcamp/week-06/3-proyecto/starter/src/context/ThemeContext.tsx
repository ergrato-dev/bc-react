// ============================================
// ThemeContext - Estado global del tema
// ============================================

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
// TODO: Importar useLocalStorage para persistencia
// import { useLocalStorage } from '../hooks';
import type { Theme } from '../types';

// ============================================
// Temas predefinidos
// ============================================

const darkTheme: Theme = {
  mode: 'dark',
  primaryColor: '#61dafb',
  backgroundColor: '#0a0a0a',
  surfaceColor: '#1a1a1a',
  textColor: '#ffffff',
  textSecondary: '#888888',
  borderColor: '#333333',
};

const lightTheme: Theme = {
  mode: 'light',
  primaryColor: '#0066ff',
  backgroundColor: '#f5f5f5',
  surfaceColor: '#ffffff',
  textColor: '#1a1a1a',
  textSecondary: '#666666',
  borderColor: '#dddddd',
};

// ============================================
// Interfaz del contexto
// ============================================

interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// ============================================
// Crear contexto
// ============================================

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ============================================
// Provider
// ============================================

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // TODO: Usar useLocalStorage para persistir preferencia
  // const { value: savedMode, setValue: setSavedMode } = useLocalStorage<'light' | 'dark'>('theme-mode', 'dark');

  // Estado temporal sin persistencia (reemplazar con useLocalStorage)
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  // TODO: Calcular tema basado en mode
  const theme = useMemo(() => {
    return mode === 'dark' ? darkTheme : lightTheme;
  }, [mode]);

  // TODO: Toggle entre temas
  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    // TODO: Persistir con setSavedMode
  }, []);

  // TODO: Setter directo
  const setTheme = useCallback((newTheme: Theme) => {
    setMode(newTheme.mode);
    // TODO: Persistir
  }, []);

  // Valor del contexto
  const value = useMemo(
    () => ({
      theme,
      isDark: mode === 'dark',
      toggleTheme,
      setTheme,
    }),
    [theme, mode, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// ============================================
// Hook para consumir el contexto
// ============================================

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
};
