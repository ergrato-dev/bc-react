// ============================================
// EJERCICIO 03: Theme Switcher con Context
// Archivo: Theme.tsx (solution)
// ============================================

import { createContext, useContext, useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

// ============================================
// PASO 1: Tipos y constantes
// ============================================

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const STORAGE_KEY = 'app-theme';

// ============================================
// PASO 2: ThemeProvider con Context
// ============================================

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProviderProps) {
  // Estado para el tema seleccionado (lazy initialization)
  const [theme, setThemeState] = useState<Theme>(() => {
    // Solo acceder a localStorage en el cliente
    if (typeof window === 'undefined') return defaultTheme;

    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    return stored ?? defaultTheme;
  });

  // Estado para el tema resuelto (light o dark efectivo)
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');

  // Función para obtener el tema del sistema
  const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  // Aplicar tema al DOM
  useEffect(() => {
    const root = document.documentElement;
    const effectiveTheme = theme === 'system' ? getSystemTheme() : theme;

    // Remover ambas clases y agregar la correcta
    root.classList.remove('light', 'dark');
    root.classList.add(effectiveTheme);

    // Actualizar el tema resuelto
    setResolvedTheme(effectiveTheme);
  }, [theme]);

  // Escuchar cambios de preferencia del sistema
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      setResolvedTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  // Función para cambiar tema
  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(STORAGE_KEY, newTheme);
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ============================================
// PASO 3: Hook useTheme
// ============================================

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      'useTheme debe usarse dentro de un ThemeProvider. ' +
        'Asegúrate de envolver tu aplicación con <ThemeProvider>.',
    );
  }

  return context;
}

// ============================================
// PASO 4: ThemeToggle Component
// ============================================

const themeLabels: Record<Theme, string> = {
  light: 'Claro',
  dark: 'Oscuro',
  system: 'Sistema',
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Ciclar entre temas: light → dark → system → light
  const cycleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  // Renderizar icono según tema
  const renderIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun size={20} />;
      case 'dark':
        return <Moon size={20} />;
      case 'system':
        return <Monitor size={20} />;
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="
        p-2 rounded-lg
        bg-gray-200 dark:bg-gray-700
        text-gray-700 dark:text-gray-200
        hover:bg-gray-300 dark:hover:bg-gray-600
        transition-colors duration-200
      "
      title={`Tema: ${themeLabels[theme]}`}
      aria-label={`Cambiar tema. Actual: ${themeLabels[theme]}`}>
      {renderIcon()}
    </button>
  );
}

// ============================================
// Componente de ejemplo: ThemeCard
// ============================================

export function ThemeCard() {
  const { theme, resolvedTheme } = useTheme();

  return (
    <div
      className="
      p-6 rounded-xl
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      shadow-lg
      transition-colors duration-300
    ">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Configuración de Tema
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Tema seleccionado: <strong>{themeLabels[theme]}</strong>
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        Tema efectivo: <strong>{resolvedTheme}</strong>
      </p>
    </div>
  );
}
