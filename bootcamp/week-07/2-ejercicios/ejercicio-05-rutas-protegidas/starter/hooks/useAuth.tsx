// ============================================
// EJERCICIO 05: Hook useAuth (simplificado)
// ============================================

import { useState, useCallback } from 'react';

interface UseAuthReturn {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Hook simplificado para el ejercicio
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
