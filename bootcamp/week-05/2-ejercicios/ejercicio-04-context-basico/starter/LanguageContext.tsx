// ============================================
// EJERCICIO 04: Context Básico
// Archivo: LanguageContext.tsx
// ============================================

import { createContext, useContext, useState, type ReactNode } from 'react';

console.log('--- Paso 3: LanguageContext ---');

// ============================================
// PASO 1: Definir Tipos y Traducciones
// ============================================

// QUÉ: Sistema de idiomas con traducciones tipadas
// PARA: i18n básico sin dependencias externas
// IMPACTO: Internacionalización con TypeScript

// Descomenta las siguientes líneas:
// type Language = 'es' | 'en';
//
// interface Translations {
//   greeting: string;
//   welcome: string;
//   logout: string;
//   login: string;
//   settings: string;
//   theme: string;
//   language: string;
// }
//
// const translations: Record<Language, Translations> = {
//   es: {
//     greeting: 'Hola',
//     welcome: 'Bienvenido',
//     logout: 'Cerrar sesión',
//     login: 'Iniciar sesión',
//     settings: 'Configuración',
//     theme: 'Tema',
//     language: 'Idioma',
//   },
//   en: {
//     greeting: 'Hello',
//     welcome: 'Welcome',
//     logout: 'Logout',
//     login: 'Login',
//     settings: 'Settings',
//     theme: 'Theme',
//     language: 'Language',
//   },
// };
//
// interface LanguageContextValue {
//   language: Language;
//   setLanguage: (lang: Language) => void;
//   t: (key: keyof Translations) => string;
// }

// ============================================
// PASO 2: Crear Context y Hook
// ============================================

// Descomenta las siguientes líneas:
// const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
//
// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (context === undefined) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };

// ============================================
// PASO 3: Implementar Provider
// ============================================

// QUÉ: Provider con función de traducción (t)
// PARA: Acceder a traducciones en cualquier componente
// IMPACTO: Cambio de idioma reactivo en toda la app

// Descomenta las siguientes líneas:
// interface LanguageProviderProps {
//   children: ReactNode;
//   defaultLanguage?: Language;
// }
//
// export const LanguageProvider = ({
//   children,
//   defaultLanguage = 'es',
// }: LanguageProviderProps) => {
//   const [language, setLanguage] = useState<Language>(defaultLanguage);
//
//   // Función de traducción
//   const t = (key: keyof Translations): string => {
//     return translations[language][key];
//   };
//
//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// Exportaciones temporales para evitar errores
export const useLanguage = () => ({
  language: 'es' as const,
  setLanguage: () => {},
  t: (key: string) => key,
});
export const LanguageProvider = ({ children }: { children: ReactNode }) =>
  children;

console.log('LanguageContext.tsx cargado');
