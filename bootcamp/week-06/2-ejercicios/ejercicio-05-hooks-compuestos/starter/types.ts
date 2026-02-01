// ============================================
// Tipos compartidos para el ejercicio
// ============================================

/**
 * Usuario autenticado
 */
export interface User {
  id: number;
  email: string;
  name: string;
  avatar?: string;
}

/**
 * Token de autenticación
 */
export interface AuthToken {
  accessToken: string;
  expiresAt: number; // timestamp
}

/**
 * Credenciales de login
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Respuesta del servidor de login
 */
export interface LoginResponse {
  user: User;
  token: AuthToken;
}
