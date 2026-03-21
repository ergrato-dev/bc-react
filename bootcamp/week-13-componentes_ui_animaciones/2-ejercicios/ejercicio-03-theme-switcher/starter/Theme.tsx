// ============================================
// EJERCICIO 03: Theme Switcher con Context
// Archivo: Theme.tsx (starter)
// ============================================

// import { createContext, useContext, useEffect, useState } from 'react';
// import { Sun, Moon, Monitor } from 'lucide-react';

// ============================================
// PASO 1: Tipos y constantes
// ============================================
// Descomenta y completa:

// type Theme = 'light' | 'dark' | 'system';

// interface ThemeContextType {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
//   resolvedTheme: 'light' | 'dark';
// }

// const STORAGE_KEY = 'app-theme';

// ============================================
// PASO 2: ThemeProvider con Context
// ============================================
// Descomenta y completa:

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// interface ThemeProviderProps {
//   children: React.ReactNode;
//   defaultTheme?: Theme;
// }

// export function ThemeProvider({
//   children,
//   defaultTheme = 'system',
// }: ThemeProviderProps) {
//   // Estado para el tema seleccionado
//   // TODO: Inicializar desde localStorage o usar defaultTheme
//   // const [theme, setThemeState] = useState<Theme>(() => { ... });
//
//   // Estado para el tema resuelto (light o dark efectivo)
//   // const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');
//
//   // Función para obtener el tema del sistema
//   // const getSystemTheme = (): 'light' | 'dark' => {
//   //   return window.matchMedia('(prefers-color-scheme: dark)').matches
//   //     ? 'dark'
//   //     : 'light';
//   // };
//
//   // useEffect para aplicar tema al DOM
//   // TODO:
//   // 1. Calcular tema efectivo (si es 'system', usar getSystemTheme)
//   // 2. Agregar/quitar clase 'dark' del document.documentElement
//   // 3. Actualizar resolvedTheme
//   // useEffect(() => { ... }, [theme]);
//
//   // useEffect para escuchar cambios de preferencia del sistema
//   // TODO:
//   // 1. Crear MediaQueryList
//   // 2. Agregar listener para cambios
//   // 3. Limpiar listener en cleanup
//   // useEffect(() => { ... }, [theme]);
//
//   // Función para cambiar tema
//   // const setTheme = (newTheme: Theme) => {
//   //   localStorage.setItem(STORAGE_KEY, newTheme);
//   //   setThemeState(newTheme);
//   // };
//
//   // TODO: Retornar ThemeContext.Provider con value
//   return null;
// }

// ============================================
// PASO 3: Hook useTheme
// ============================================
// Descomenta y completa:

// export function useTheme(): ThemeContextType {
//   // TODO: Obtener contexto y validar que existe
//   // Lanzar error si se usa fuera del Provider
//   throw new Error('Implementar');
// }

// ============================================
// PASO 4: ThemeToggle Component
// ============================================
// Descomenta y completa:

// export function ThemeToggle() {
//   // const { theme, setTheme } = useTheme();
//
//   // Ciclar entre temas: light → dark → system → light
//   // const cycleTheme = () => {
//   //   const themes: Theme[] = ['light', 'dark', 'system'];
//   //   const currentIndex = themes.indexOf(theme);
//   //   const nextIndex = (currentIndex + 1) % themes.length;
//   //   setTheme(themes[nextIndex]);
//   // };
//
//   // Renderizar icono según tema
//   // const renderIcon = () => {
//   //   switch (theme) {
//   //     case 'light': return <Sun size={20} />;
//   //     case 'dark': return <Moon size={20} />;
//   //     case 'system': return <Monitor size={20} />;
//   //   }
//   // };
//
//   // TODO: Implementar botón con:
//   // - onClick que llame a cycleTheme
//   // - title/tooltip con tema actual
//   // - Estilos de hover
//   return null;
// }

// ============================================
// EXPORTS para testing
// ============================================
export {};
