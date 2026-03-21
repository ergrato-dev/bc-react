// ============================================
// EJERCICIO 02: Listas Básicas
// ============================================
// Aprende a renderizar listas con .map() y keys

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

// Datos iniciales
const initialUsers: User[] = [
  { id: 1, name: 'Ana García', email: 'ana@email.com', role: 'admin' },
  { id: 2, name: 'Carlos López', email: 'carlos@email.com', role: 'user' },
  { id: 3, name: 'María Rodríguez', email: 'maria@email.com', role: 'user' },
  { id: 4, name: 'Juan Martínez', email: 'juan@email.com', role: 'guest' },
];

// ============================================
// PASO 1: Lista Simple con Strings
// ============================================
// El método .map() transforma cada elemento del array
// Descomenta las siguientes líneas:

// const SimpleList: React.FC = () => {
//   const fruits: string[] = ['🍎 Manzana', '🍌 Banana', '🍊 Naranja'];
//
//   return (
//     <div className="simple-list">
//       <h3>Frutas</h3>
//       <ul>
//         {/* .map() recorre el array y transforma cada elemento en JSX */}
//         {fruits.map((fruit, index) => (
//           // ⚠️ Usando index como key (solo OK para listas estáticas)
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// ============================================
// PASO 2: Lista de Objetos con ID
// ============================================
// Usa el id del objeto como key (mejor práctica)
// Descomenta las siguientes líneas:

// interface UserListProps {
//   users: User[];
// }
//
// const BasicUserList: React.FC<UserListProps> = ({ users }) => {
//   return (
//     <ul className="user-list">
//       {users.map((user) => (
//         // ✅ Usar id único como key
//         <li key={user.id} className="user-item">
//           <strong>{user.name}</strong>
//           <span>{user.email}</span>
//           <span className={`role ${user.role}`}>{user.role}</span>
//         </li>
//       ))}
//     </ul>
//   );
// };

// ============================================
// PASO 3: Extraer Componente de Ítem
// ============================================
// Buena práctica: extraer el ítem a su propio componente
// Descomenta las siguientes líneas:

// interface UserItemProps {
//   user: User;
//   onDelete?: (id: number) => void;
// }
//
// const UserItem: React.FC<UserItemProps> = ({ user, onDelete }) => {
//   return (
//     <li className="user-item">
//       <div className="user-info">
//         <strong>{user.name}</strong>
//         <span className="email">{user.email}</span>
//         <span className={`badge role-${user.role}`}>{user.role}</span>
//       </div>
//       {/* Paso 4 irá aquí */}
//     </li>
//   );
// };

// ============================================
// PASO 4: Agregar Acciones
// ============================================
// Añade botón de eliminar al UserItem
// Modifica UserItem agregando:

// {onDelete && (
//   <button
//     onClick={() => onDelete(user.id)}
//     className="btn-delete"
//   >
//     🗑️ Eliminar
//   </button>
// )}

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
// Descomenta para usar todo junto:

// interface UserListWithActionsProps {
//   users: User[];
//   onDelete: (id: number) => void;
// }
//
// const UserListWithActions: React.FC<UserListWithActionsProps> = ({
//   users,
//   onDelete,
// }) => {
//   // Estado vacío
//   if (users.length === 0) {
//     return (
//       <div className="empty-state">
//         <p>📭 No hay usuarios</p>
//       </div>
//     );
//   }
//
//   return (
//     <ul className="user-list">
//       {users.map((user) => (
//         // La key va en el elemento más externo del map
//         <UserItem key={user.id} user={user} onDelete={onDelete} />
//       ))}
//     </ul>
//   );
// };

// ============================================
// APP DE DEMOSTRACIÓN
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

      {/* Paso 1: Lista simple */}
      {/* <SimpleList /> */}

      <hr />

      {/* Paso 2: Lista de objetos */}
      {/* <BasicUserList users={users} /> */}

      <hr />

      {/* Paso 3-4: Lista con componente extraído y acciones */}
      {/* <UserListWithActions users={users} onDelete={handleDelete} /> */}

      <div className="actions">
        <button
          onClick={handleReset}
          className="btn-reset">
          🔄 Resetear lista
        </button>
        <span className="count">Total: {users.length} usuarios</span>
      </div>

      <p className="hint">
        💡 Descomenta el código paso a paso siguiendo el README.md
      </p>
    </div>
  );
};

export default App;
