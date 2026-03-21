// ============================================
// EJERCICIO 03: User Card - SOLUCIÓN
// ============================================
// Tarjeta de usuario con props complejos
// ============================================

import React from 'react';

// ============================================
// PASO 1: Definir Interface User
// ============================================

/**
 * Interface que describe la estructura de un usuario
 */
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string; // opcional - puede no existir
  role: 'admin' | 'user'; // union type - solo estos valores
}

// ============================================
// PASO 2: Definir Interface UserCardProps
// ============================================

/**
 * Props del componente UserCard
 */
interface UserCardProps {
  user: User; // objeto usuario completo
  onDelete?: (id: number) => void; // callback opcional
}

// ============================================
// PASO 3: Componente UserCard
// ============================================

/**
 * Componente que muestra información de un usuario
 * @param user - Datos del usuario
 * @param onDelete - Callback opcional para eliminar usuario
 */
export const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      {/* ============================================
          PASO 4: Avatar Condicional
          ============================================ */}

      {/* Si existe avatar, mostrar imagen. Si no, mostrar inicial */}
      {user.avatar ? (
        <img
          src={user.avatar}
          alt={user.name}
          className="user-card__avatar"
        />
      ) : (
        <div className="user-card__avatar-placeholder">
          {/* Mostrar primera letra del nombre en mayúscula */}
          {user.name.charAt(0).toUpperCase()}
        </div>
      )}

      {/* ============================================
          PASO 5: Información del Usuario
          ============================================ */}

      <div className="user-card__info">
        {/* Nombre del usuario */}
        <h3 className="user-card__name">{user.name}</h3>

        {/* Email del usuario */}
        <p className="user-card__email">{user.email}</p>

        {/* Badge de rol con clase dinámica según el rol */}
        <span className={`user-card__badge user-card__badge--${user.role}`}>
          {user.role}
        </span>
      </div>

      {/* ============================================
          PASO 6: Botón Condicional
          ============================================ */}

      {/* Solo mostrar botón si se proporcionó callback onDelete */}
      {onDelete && (
        <button
          onClick={() => onDelete(user.id)}
          className="user-card__delete">
          Delete
        </button>
      )}
    </div>
  );
};

// ============================================
// EXPLICACIÓN DETALLADA
// ============================================

/*
1. INTERFACE USER
   - Define la estructura de datos de un usuario
   - avatar?: significa que es opcional (puede ser undefined)
   - role: 'admin' | 'user' es un union type (solo estos valores)
   - TypeScript validará que todos los campos estén presentes

2. INTERFACE USERCARDPROPS
   - Define qué props acepta el componente
   - user: User es obligatorio (sin ?)
   - onDelete?: es opcional, puede no proporcionarse
   - Callback recibe id y no retorna nada (void)

3. PROPS COMPLEJOS
   - user es un objeto completo, no primitivos separados
   - Mejor pasar 1 objeto que 5 props individuales
   - Más fácil de mantener y extender

4. RENDERIZADO CONDICIONAL DEL AVATAR
   - Ternario: condition ? <A /> : <B />
   - Si user.avatar existe (truthy), muestra <img>
   - Si no existe (falsy/undefined), muestra placeholder
   - charAt(0) obtiene el primer carácter del nombre
   - toUpperCase() convierte a mayúscula

5. TEMPLATE LITERALS PARA CLASES DINÁMICAS
   - `user-card__badge user-card__badge--${user.role}`
   - Si role es 'admin': user-card__badge--admin
   - Si role es 'user': user-card__badge--user
   - Permite aplicar estilos diferentes según el rol

6. OPERADOR && PARA RENDERIZADO CONDICIONAL
   - {onDelete && <button>} solo renderiza si onDelete existe
   - Si onDelete es undefined, no renderiza nada
   - Más limpio que un ternario cuando no hay alternativa

7. CALLBACK CON ARROW FUNCTION
   - onClick={() => onDelete(user.id)}
   - Arrow function para pasar argumentos al callback
   - Sin arrow function: onClick={onDelete} pasaría el evento

8. TYPESCRIPT
   - Interfaces garantizan la estructura de datos
   - user.name siempre será string (TypeScript lo valida)
   - user.role solo puede ser 'admin' o 'user'
   - onDelete? permite que sea undefined sin errores
*/

// ============================================
// EJEMPLO DE USO EN APP.TSX
// ============================================

/*
import { UserCard } from './UserCard';

// Datos de ejemplo
const users: User[] = [
  {
    id: 1,
    name: 'Ana García',
    email: 'ana@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    role: 'admin'
  },
  {
    id: 2,
    name: 'Carlos López',
    email: 'carlos@example.com',
    // sin avatar - mostrará placeholder
    role: 'user'
  }
];

function App() {
  const handleDelete = (id: number) => {
    console.log(`Eliminando usuario con id: ${id}`);
    // Aquí iría la lógica para eliminar del estado
  };

  return (
    <div className="app">
      <h1>User Cards</h1>
      {users.map(user => (
        <UserCard 
          key={user.id} 
          user={user} 
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
*/

// ============================================
// CONCEPTO: Props Opcionales
// ============================================

/*
Props opcionales permiten flexibilidad:

// Con onDelete (muestra botón)
<UserCard user={user} onDelete={handleDelete} />

// Sin onDelete (no muestra botón)
<UserCard user={user} />

Ambos usos son válidos gracias al ? en la interface.
*/
