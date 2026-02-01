// ============================================
// SOLUCIÓN: Hook useAuth
// ============================================

import { useState, useCallback } from 'react';

interface UseAuthReturn {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Hook simplificado para el ejercicio
// En una app real, este hook manejaría tokens, API calls, etc.
export const useAuth = (): UseAuthReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, login, logout };
};
