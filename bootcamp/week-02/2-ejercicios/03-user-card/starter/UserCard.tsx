// ============================================
// EJERCICIO 03: User Card
// ============================================
// Objetivo: Props complejos y renderizado condicional
// Tiempo estimado: 30 minutos
// ============================================

// React y TypeScript
// import React from 'react';

// ============================================
// PASO 1: Definir Interface User
// ============================================
console.log('--- Paso 1: Interface User ---');

// La interfaz describe la estructura de un usuario
// Descomenta las siguientes líneas:
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   avatar?: string; // opcional
//   role: 'admin' | 'user'; // union type
// }

console.log('Interface User define la estructura de datos');
console.log('avatar? es opcional (puede ser undefined)');
console.log('role solo puede ser "admin" o "user"');
console.log('');

// ============================================
// PASO 2: Definir Interface UserCardProps
// ============================================
console.log('--- Paso 2: Interface UserCardProps ---');

// Props del componente
// Descomenta las siguientes líneas:
// interface UserCardProps {
//   user: User; // objeto usuario completo
//   onDelete?: (id: number) => void; // callback opcional
// }

console.log('UserCardProps recibe:');
console.log('- user: objeto User completo');
console.log('- onDelete?: función opcional para eliminar');
console.log('');

// ============================================
// PASO 3: Crear Componente UserCard
// ============================================
console.log('--- Paso 3: Componente UserCard ---');

// Descomenta las siguientes líneas:
// export const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {

console.log('Desestructurar props: { user, onDelete }');
console.log('');

// ============================================
// PASO 4: Renderizado Condicional del Avatar
// ============================================
console.log('--- Paso 4: Avatar Condicional ---');

// Si hay avatar, mostrar imagen. Si no, mostrar inicial
// Descomenta las siguientes líneas:
//   return (
//     <div className="user-card">
//       {/* Avatar o placeholder */}
//       {user.avatar ? (
//         <img
//           src={user.avatar}
//           alt={user.name}
//           className="user-card__avatar"
//         />
//       ) : (
//         <div className="user-card__avatar-placeholder">
//           {user.name.charAt(0).toUpperCase()}
//         </div>
//       )}

console.log('Ternario: user.avatar ? <img> : <div con inicial>');
console.log('charAt(0) obtiene la primera letra del nombre');
console.log('');

// ============================================
// PASO 5: Información del Usuario
// ============================================
console.log('--- Paso 5: Información del Usuario ---');

// Mostrar nombre, email y rol
// Descomenta las siguientes líneas:
//       <div className="user-card__info">
//         {/* Nombre */}
//         <h3 className="user-card__name">{user.name}</h3>
//
//         {/* Email */}
//         <p className="user-card__email">{user.email}</p>
//
//         {/* Badge de rol con clase dinámica */}
//         <span className={`user-card__badge user-card__badge--${user.role}`}>
//           {user.role}
//         </span>
//       </div>

console.log('Template literals para clases dinámicas:');
console.log('`user-card__badge--${user.role}` genera:');
console.log('  - user-card__badge--admin');
console.log('  - user-card__badge--user');
console.log('');

// ============================================
// PASO 6: Botón Condicional
// ============================================
console.log('--- Paso 6: Botón Condicional ---');

// Solo mostrar botón si existe onDelete
// Descomenta las siguientes líneas:
//       {/* Botón de eliminar (condicional) */}
//       {onDelete && (
//         <button
//           onClick={() => onDelete(user.id)}
//           className="user-card__delete"
//         >
//           Delete
//         </button>
//       )}
//     </div>
//   );
// };

console.log('Operador &&: solo renderiza si onDelete existe');
console.log('onClick={() => onDelete(user.id)} pasa el id al callback');
console.log('');

// ============================================
// PASO 7: Ejemplo de Uso
// ============================================
console.log('--- Paso 7: Ejemplo de Uso ---');

// En tu App.tsx:
// const user: User = {
//   id: 1,
//   name: 'Ana García',
//   email: 'ana@example.com',
//   avatar: 'https://i.pravatar.cc/150?img=1',
//   role: 'admin'
// };
//
// const handleDelete = (id: number) => {
//   console.log(`Delete user ${id}`);
// };
//
// <UserCard user={user} onDelete={handleDelete} />

console.log('Crear objeto user con datos de prueba');
console.log('Pasar user y onDelete como props');
console.log('');

// ============================================
// NOTAS IMPORTANTES
// ============================================
console.log('--- Notas Importantes ---');
console.log('1. Props complejos usan interfaces');
console.log('2. avatar? es opcional (puede ser undefined)');
console.log('3. role usa union types ("admin" | "user")');
console.log('4. Renderizado condicional: ternario y &&');
console.log('5. Template literals para clases dinámicas');
console.log('6. Callbacks opcionales con onDelete?');
console.log('');

// ============================================
// CONCEPTO: Renderizado Condicional
// ============================================
console.log('--- Concepto: Renderizado Condicional ---');

// Opción 1: Ternario
// {condition ? <A /> : <B />}

// Opción 2: Operador &&
// {condition && <Component />}

// Opción 3: Nullish coalescing
// {value ?? 'default'}

console.log('Tres formas de renderizado condicional');
console.log('Ternario: para mostrar A o B');
console.log('&&: para mostrar o no mostrar');
console.log('??: para valores por defecto');
console.log('');

// ============================================
// VERIFICACIÓN
// ============================================
console.log('--- Verificación ---');
console.log('✓ Muestra avatar o placeholder');
console.log('✓ Muestra nombre y email');
console.log('✓ Badge de rol con color correcto');
console.log('✓ Botón Delete solo si hay onDelete');
console.log('✓ Click en Delete ejecuta callback');
console.log('');
