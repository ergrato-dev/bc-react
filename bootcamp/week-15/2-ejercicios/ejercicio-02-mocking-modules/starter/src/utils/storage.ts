// Utilidades de almacenamiento local

/**
 * Guarda datos en localStorage
 */
export function saveToStorage<T>(key: string, data: T): void {
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * Obtiene datos de localStorage
 */
export function getFromStorage<T>(key: string): T | null {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    return JSON.parse(item) as T;
  } catch {
    return null;
  }
}
