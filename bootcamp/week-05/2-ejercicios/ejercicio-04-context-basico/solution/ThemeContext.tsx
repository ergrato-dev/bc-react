// ============================================
// EJERCICIO 04: Context Básico - SOLUCIÓN
// Archivo: ThemeContext.tsx
// ============================================

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';

// ============================================
// PASO 1: Definir Tipos
// ============================================

// QUÉ: Tipo para valores de tema permitidos
// PARA: Limitar opciones a valores válidos
// IMPACTO: TypeScript previene valores incorrectos

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// ============================================
// PASO 2: Crear Context
// ============================================

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ============================================
// PASO 3: Custom Hook
// ============================================

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ============================================
// PASO 4: Implementar Provider con Persistencia
// ============================================

// QUÉ: Provider que persiste el tema en localStorage
// PARA: Recordar preferencia del usuario entre sesiones
// IMPACTO: Mejor UX manteniendo configuración

const THEME_KEY = 'app-theme';

const getInitialTheme = (): Theme => {
  // Intentar obtener del localStorage
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    // Fallback a preferencia del sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Persistir en localStorage
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    // Aplicar clase al body para CSS global
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
