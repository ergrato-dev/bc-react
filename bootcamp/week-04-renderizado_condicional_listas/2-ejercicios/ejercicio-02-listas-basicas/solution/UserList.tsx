// ============================================
// EJERCICIO 02: Listas Básicas
// SOLUCIÓN COMPLETA
// ============================================

import React, { useState } from 'react';

// ============================================
// TIPOS
// ============================================
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

const initialUsers: User[] = [
  { id: 1, name: 'Ana García', email: 'ana@email.com', role: 'admin' },
  { id: 2, name: 'Carlos López', email: 'carlos@email.com', role: 'user' },
  { id: 3, name: 'María Rodríguez', email: 'maria@email.com', role: 'user' },
  { id: 4, name: 'Juan Martínez', email: 'juan@email.com', role: 'guest' },
];

// ============================================
// PASO 1: Lista Simple
// ============================================
const SimpleList: React.FC = () => {
  const fruits: string[] = ['🍎 Manzana', '🍌 Banana', '🍊 Naranja'];

  return (
    <div className="simple-list">
      <h3>Frutas</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

// ============================================
// PASO 3-4: Componente de Ítem con Acciones
// ============================================
interface UserItemProps {
  user: User;
  onDelete?: (id: number) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onDelete }) => {
  return (
    <li className="user-item">
      <div className="user-info">
        <strong>{user.name}</strong>
        <span className="email">{user.email}</span>
        <span className={`badge role-${user.role}`}>{user.role}</span>
      </div>
      {onDelete && (
        <button
          onClick={() => onDelete(user.id)}
          className="btn-delete">
          🗑️ Eliminar
        </button>
      )}
    </li>
  );
};

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
interface UserListProps {
  users: User[];
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onDelete }) => {
  if (users.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 No hay usuarios</p>
      </div>
    );
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

// ============================================
// APP
// ============================================
export const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const handleDelete = (id: number): void => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleReset = (): void => {
    setUsers(initialUsers);
  };

  return (
    <div className="app">
      <h1>Ejercicio 02: Listas Básicas</h1>

      <SimpleList />
      <hr />
      <UserList
        users={users}
        onDelete={handleDelete}
      />

      <div className="actions">
        <button
          onClick={handleReset}
          className="btn-reset">
          🔄 Resetear lista
        </button>
        <span className="count">Total: {users.length} usuarios</span>
      </div>
    </div>
  );
};

export default App;
