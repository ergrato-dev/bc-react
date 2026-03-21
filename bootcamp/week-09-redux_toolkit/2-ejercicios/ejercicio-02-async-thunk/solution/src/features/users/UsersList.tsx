// ============================================
// ARCHIVO: UsersList.tsx
// Componente que muestra lista de usuarios
// SOLUCIÓN COMPLETA
// ============================================

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsers, clearUsers } from './usersSlice';

// ============================================
// PASO 5: Componente UsersList
// ============================================

const UsersList: React.FC = () => {
  const dispatch = useAppDispatch();

  // Obtener el estado de usuarios del store
  const { users, status, error } = useAppSelector((state) => state.users);

  // Disparar fetch cuando el componente monta
  useEffect(() => {
    // Solo fetch si está en estado 'idle' (evita fetches duplicados)
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  // Función para reintentar en caso de error
  const handleRetry = () => {
    dispatch(clearUsers());
  };

  // Renderizado condicional según el status
  if (status === 'loading') {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando usuarios...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="error">
        <p>❌ Error: {error}</p>
        <button onClick={handleRetry}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="users-list">
      <h2>👥 Lista de Usuarios ({users.length})</h2>

      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="user-card">
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleRetry}
        className="secondary">
        Recargar
      </button>
    </div>
  );
};

export default UsersList;
