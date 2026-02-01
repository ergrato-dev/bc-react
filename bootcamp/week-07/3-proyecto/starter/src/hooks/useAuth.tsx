// ============================================
// PROYECTO SEMANA 07: useAuth Hook
// ============================================

import {
  useState,
  useCallback,
  useMemo,
  createContext,
  useContext,
} from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(() => setIsAuthenticated(true), []);
  const logout = useCallback(() => setIsAuthenticated(false), []);

  const value = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    // Fallback para cuando no hay provider (desarrollo)
    return {
      isAuthenticated: false,
      login: () => console.warn('AuthProvider not found'),
      logout: () => console.warn('AuthProvider not found'),
    };
  }
  return context;
};
