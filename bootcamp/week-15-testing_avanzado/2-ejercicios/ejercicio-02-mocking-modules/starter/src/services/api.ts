// Servicio de API simulado

export interface User {
  id: number;
  name: string;
  email: string;
}

/**
 * Obtiene un usuario por ID desde la API
 */
export async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error('Error al obtener usuario');
  }
  return response.json();
}

/**
 * Actualiza un usuario en la API
 */
export async function updateUser(
  id: number,
  data: Partial<User>,
): Promise<User> {
  const response = await fetch(`/api/users/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar usuario');
  }
  return response.json();
}
