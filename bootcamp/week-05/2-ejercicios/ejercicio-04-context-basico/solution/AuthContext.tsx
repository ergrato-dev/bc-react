// ============================================
// EJERCICIO 04: Context Básico - SOLUCIÓN
// Archivo: AuthContext.tsx
// ============================================

import { createContext, useContext, useState, type ReactNode } from 'react';

// ============================================
// PASO 1: Definir Tipos
// ============================================

// QUÉ: Tipos para usuario y estado de autenticación
// PARA: Tipado seguro en toda la aplicación
// IMPACTO: Autocompletado y validación en tiempo de desarrollo

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// ============================================
// PASO 2: Crear Context con undefined
// ============================================

// QUÉ: createContext con undefined inicial fuerza validación
// PARA: Asegurar que el hook se use dentro del Provider
// IMPACTO: Errores claros en desarrollo, no en producción

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ============================================
// PASO 3: Custom Hook con Validación
// ============================================

// QUÉ: Hook personalizado que valida contexto
// PARA: API limpia y errores descriptivos
// IMPACTO: Mejor DX que usar useContext directamente

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// ============================================
// PASO 4: Implementar Provider
// ============================================

// QUÉ: Componente Provider que encapsula la lógica
// PARA: Centralizar estado y lógica de autenticación
// IMPACTO: Estado disponible en todo el árbol de componentes

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isAuthenticated = user !== null;

  // Simula llamada a API de login
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulación de delay de API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Validación simple (en producción sería una llamada real)
      if (email && password.length >= 6) {
        setUser({
          id: '1',
          name: email.split('@')[0],
          email,
          avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}`,
        });
      } else {
        throw new Error('Credenciales inválidas');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
