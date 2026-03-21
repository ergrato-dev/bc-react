import { useState, useEffect } from 'react';
import { fetchUser, User } from '../services/api';
import { saveToStorage } from '../utils/storage';

interface UserProfileProps {
  userId: number;
}

export function UserProfile({ userId }: UserProfileProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true);
        setError(null);
        const userData = await fetchUser(userId);
        setUser(userData);
        // Guardar en cache local
        saveToStorage('lastUser', userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [userId]);

  if (loading) {
    return <div role="status">Cargando...</div>;
  }

  if (error) {
    return <div role="alert">{error}</div>;
  }

  if (!user) {
    return <div>Usuario no encontrado</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
