// ============================================
// EJERCICIO 05: useAuth (Hook Compuesto)
// Combina useLocalStorage + lógica de auth
// ============================================

import { useState, useCallback, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { User, AuthToken } from '../types';

// ============================================
// PASO 1: Definir la interfaz de retorno
// ============================================

// Descomenta:
// interface UseAuthReturn {
//   user: User | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   error: string | null;
//   login: (email: string, password: string) => Promise<boolean>;
//   logout: () => void;
//   clearError: () => void;
// }

// ============================================
// PASO 2: Simulador de API (para el ejercicio)
// ============================================

// Descomenta:
// // Simula una llamada al servidor de login
// const mockLoginApi = async (
//   email: string,
//   password: string
// ): Promise<{ user: User; token: AuthToken }> => {
//   // Simular delay de red
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//
//   // Validación básica
//   if (!email.includes('@') || password.length < 4) {
//     throw new Error('Credenciales inválidas');
//   }
//
//   // Simular respuesta exitosa
//   return {
//     user: {
//       id: 1,
//       email,
//       name: email.split('@')[0],
//       avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}`
//     },
//     token: {
//       accessToken: `mock-token-${Date.now()}`,
//       expiresAt: Date.now() + 3600000 // 1 hora
//     }
//   };
// };

// ============================================
// PASO 3: Implementar el hook compuesto
// ============================================

// Descomenta:
// const useAuth = (): UseAuthReturn => {
//   // --- COMPOSICIÓN DE HOOKS BASE ---
//   // Usamos useLocalStorage para persistir user y token
//   const {
//     value: user,
//     setValue: setUser,
//     removeValue: removeUser
//   } = useLocalStorage<User | null>('auth-user', null);
//
//   const {
//     value: token,
//     setValue: setToken,
//     removeValue: removeToken
//   } = useLocalStorage<AuthToken | null>('auth-token', null);
//
//   // --- ESTADOS LOCALES ---
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//
//   // --- ESTADOS DERIVADOS ---
//   // isAuthenticated se calcula a partir del estado base
//   const isAuthenticated = user !== null && token !== null &&
//     token.expiresAt > Date.now();
//
//   // --- FUNCIONES ---
//
//   // Login: combina fetch + localStorage
//   const login = useCallback(async (
//     email: string,
//     password: string
//   ): Promise<boolean> => {
//     setIsLoading(true);
//     setError(null);
//
//     try {
//       const response = await mockLoginApi(email, password);
//       setUser(response.user);
//       setToken(response.token);
//       return true;
//     } catch (err) {
//       const message = err instanceof Error ? err.message : 'Error de login';
//       setError(message);
//       return false;
//     } finally {
//       setIsLoading(false);
//     }
//   }, [setUser, setToken]);
//
//   // Logout: limpia storage y estado
//   const logout = useCallback(() => {
//     removeUser();
//     removeToken();
//     setError(null);
//   }, [removeUser, removeToken]);
//
//   // Limpiar error
//   const clearError = useCallback(() => {
//     setError(null);
//   }, []);
//
//   // --- EFECTOS ---
//   // Verificar token al montar (expiration check)
//   useEffect(() => {
//     if (token && token.expiresAt <= Date.now()) {
//       // Token expirado, hacer logout
//       logout();
//     }
//   }, [token, logout]);
//
//   return {
//     user,
//     isAuthenticated,
//     isLoading,
//     error,
//     login,
//     logout,
//     clearError
//   };
// };
//
// export { useAuth };
// export type { UseAuthReturn };

export {};
