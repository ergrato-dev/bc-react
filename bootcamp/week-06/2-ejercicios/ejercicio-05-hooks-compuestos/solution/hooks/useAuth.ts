// ============================================
// SOLUCIÓN: useAuth (Hook Compuesto)
// Combina useLocalStorage + lógica de autenticación
// ============================================

import { useState, useCallback, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { User, AuthToken } from '../types';

/**
 * Interfaz de retorno del hook useAuth
 */
interface UseAuthReturn {
  /** Usuario autenticado o null */
  user: User | null;
  /** True si hay sesión válida */
  isAuthenticated: boolean;
  /** True durante operaciones de auth */
  isLoading: boolean;
  /** Mensaje de error si ocurre */
  error: string | null;
  /** Función para iniciar sesión */
  login: (email: string, password: string) => Promise<boolean>;
  /** Función para cerrar sesión */
  logout: () => void;
  /** Limpiar error */
  clearError: () => void;
}

// ============================================
// Simulador de API (para demostración)
// ============================================

/**
 * Simula una llamada al servidor de login
 * En producción, esto sería una llamada real a tu API
 */
const mockLoginApi = async (
  email: string,
  password: string,
): Promise<{ user: User; token: AuthToken }> => {
  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Validaciones
  if (!email.includes('@')) {
    throw new Error('Email inválido');
  }

  if (password.length < 4) {
    throw new Error('Contraseña muy corta (mínimo 4 caracteres)');
  }

  // Simular credenciales incorrectas
  if (email === 'error@test.com') {
    throw new Error('Credenciales incorrectas');
  }

  // Simular respuesta exitosa
  return {
    user: {
      id: Math.floor(Math.random() * 1000),
      email,
      name: email.split('@')[0].replace(/[._-]/g, ' '),
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
        email.split('@')[0],
      )}&background=61dafb&color=000`,
    },
    token: {
      accessToken: `mock-jwt-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      expiresAt: Date.now() + 3600000, // Expira en 1 hora
    },
  };
};

// ============================================
// Hook Compuesto: useAuth
// ============================================

/**
 * Hook compuesto para autenticación completa
 * Combina: useLocalStorage (persistencia) + estado local + lógica de auth
 *
 * @example
 * const { user, isAuthenticated, login, logout } = useAuth();
 *
 * // Login
 * const success = await login('user@example.com', 'password');
 *
 * // Logout
 * logout();
 */
const useAuth = (): UseAuthReturn => {
  // ==========================================
  // COMPOSICIÓN DE HOOKS BASE
  // ==========================================

  // Persistir usuario en localStorage
  const {
    value: user,
    setValue: setUser,
    removeValue: removeUser,
  } = useLocalStorage<User | null>('auth-user', null);

  // Persistir token en localStorage
  const {
    value: token,
    setValue: setToken,
    removeValue: removeToken,
  } = useLocalStorage<AuthToken | null>('auth-token', null);

  // ==========================================
  // ESTADOS LOCALES
  // ==========================================

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ==========================================
  // ESTADOS DERIVADOS
  // ==========================================

  // isAuthenticated se calcula a partir de user + token + expiración
  const isAuthenticated = Boolean(
    user !== null && token !== null && token.expiresAt > Date.now(),
  );

  // ==========================================
  // FUNCIONES
  // ==========================================

  /**
   * Iniciar sesión con credenciales
   * @returns true si el login fue exitoso
   */
  const login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        // Llamar a la API (o mock)
        const response = await mockLoginApi(email, password);

        // Guardar en localStorage mediante hooks base
        setUser(response.user);
        setToken(response.token);

        return true;
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : 'Error desconocido durante el login';
        setError(message);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [setUser, setToken],
  );

  /**
   * Cerrar sesión - limpia todo el estado y storage
   */
  const logout = useCallback(() => {
    removeUser();
    removeToken();
    setError(null);
  }, [removeUser, removeToken]);

  /**
   * Limpiar mensaje de error
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // ==========================================
  // EFECTOS
  // ==========================================

  // Verificar expiración del token al montar y cuando cambie
  useEffect(() => {
    if (token && token.expiresAt <= Date.now()) {
      // Token expirado - hacer logout automático
      console.log('Token expirado, cerrando sesión...');
      logout();
    }
  }, [token, logout]);

  // Opcional: verificar token periódicamente
  useEffect(() => {
    if (!token) return;

    const checkExpiration = () => {
      if (token.expiresAt <= Date.now()) {
        logout();
      }
    };

    // Verificar cada minuto
    const interval = setInterval(checkExpiration, 60000);
    return () => clearInterval(interval);
  }, [token, logout]);

  // ==========================================
  // RETORNO
  // ==========================================

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    clearError,
  };
};

export { useAuth };
export type { UseAuthReturn };
