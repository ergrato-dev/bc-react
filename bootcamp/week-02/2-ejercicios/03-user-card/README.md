# 👤 Ejercicio 03: User Card

## 🎯 Objetivos

- Trabajar con props complejos (objetos, arrays)
- Crear interfaces TypeScript para datos estructurados
- Aplicar composición de componentes
- Renderizar datos condicionales
- Usar optional props y valores por defecto

## 📖 Concepto: Props Complejos

Los props no solo son primitivos (string, number, boolean). Pueden ser:

- **Objetos**: `{ name: string, age: number }`
- **Arrays**: `string[]`, `User[]`
- **Funciones**: `() => void`, `(id: number) => void`
- **Elementos React**: `React.ReactNode`

### Tipado con Interfaces

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string; // opcional
  role: 'admin' | 'user'; // union type
}

interface UserCardProps {
  user: User;
  onDelete?: (id: number) => void; // opcional
}
```

## 🛠️ Desglose del Ejercicio

Construirás una tarjeta de usuario que muestra:

1. **Avatar** (imagen o placeholder)
2. **Nombre completo**
3. **Email**
4. **Rol** (badge con color)
5. **Botón de eliminar** (opcional)

### 📝 Requisitos Funcionales

✅ Interface `User` con todos los campos tipados  
✅ Interface `UserCardProps` para las props  
✅ Avatar con fallback si no hay imagen  
✅ Badge de rol con colores diferentes (admin/user)  
✅ Botón de eliminar condicional  
✅ Prop opcional `onDelete` callback

---

## 📚 Pasos del Tutorial

### Paso 1: Definir Interface User

La interfaz describe la estructura de datos de un usuario:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string; // opcional (? indica que puede ser undefined)
  role: 'admin' | 'user'; // solo estos dos valores permitidos
}
```

**💡 Tip**: El `?` hace que la propiedad sea opcional. Sin él, TypeScript exigirá que siempre esté presente.

### Paso 2: Definir Interface UserCardProps

Las props del componente:

```typescript
interface UserCardProps {
  user: User; // objeto usuario completo
  onDelete?: (id: number) => void; // callback opcional
}
```

### Paso 3: Desestructurar Props

Extrae `user` y `onDelete` de las props:

```typescript
export const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  // Ahora puedes usar user.name, user.email, etc.
};
```

### Paso 4: Renderizado Condicional del Avatar

Si el usuario tiene avatar, muéstralo. Si no, usa un placeholder:

```typescript
{user.avatar ? (
  <img src={user.avatar} alt={user.name} />
) : (
  <div className="user-card__avatar-placeholder">
    {user.name.charAt(0).toUpperCase()}
  </div>
)}
```

### Paso 5: Badge de Rol con Estilos Dinámicos

El badge cambia de color según el rol:

```typescript
<span className={`user-card__badge user-card__badge--${user.role}`}>
  {user.role}
</span>
```

Esto genera:

- `user-card__badge--admin` para administradores
- `user-card__badge--user` para usuarios normales

### Paso 6: Botón Condicional

Solo muestra el botón si se proporciona `onDelete`:

```typescript
{onDelete && (
  <button onClick={() => onDelete(user.id)}>
    Delete
  </button>
)}
```

**💡 Tip**: `&&` es renderizado condicional. Si `onDelete` existe (truthy), renderiza el botón.

---

## 🎨 CSS (Opcional)

```css
.user-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 400px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-card__avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.user-card__avatar-placeholder {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #61dafb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.user-card__info {
  flex: 1;
}

.user-card__name {
  margin: 0 0 0.25rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
}

.user-card__email {
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
  color: #666;
}

.user-card__badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 12px;
}

.user-card__badge--admin {
  background-color: #ff6b6b;
  color: white;
}

.user-card__badge--user {
  background-color: #51cf66;
  color: white;
}

.user-card__delete {
  padding: 0.5rem 1rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.user-card__delete:hover {
  background-color: #fa5252;
}
```

---

## ✅ Verificación

Asegúrate de que tu componente:

- [ ] Muestra el avatar o placeholder con inicial
- [ ] Muestra el nombre del usuario
- [ ] Muestra el email
- [ ] El badge de rol tiene el color correcto (admin/user)
- [ ] El botón de eliminar solo aparece si hay `onDelete`
- [ ] Hacer click en Delete ejecuta el callback con el id
- [ ] No hay errores de TypeScript
- [ ] Props opcionales funcionan correctamente

---

## 💡 Tips

### Props Opcionales

```typescript
// Con ?
avatar?: string;
// Es equivalente a:
avatar: string | undefined;
```

### Renderizado Condicional

```typescript
// Opción 1: Operador &&
{condition && <Component />}

// Opción 2: Ternario
{condition ? <ComponentA /> : <ComponentB />}

// Opción 3: Nullish coalescing
{value ?? 'default'}
```

### Desestructuración con Valores por Defecto

```typescript
const UserCard: React.FC<UserCardProps> = ({
  user,
  onDelete = undefined, // valor por defecto
}) => {
  // ...
};
```

### Union Types para Enums

```typescript
// Limita los valores posibles
type Role = 'admin' | 'user' | 'guest';

// TypeScript validará:
const role: Role = 'admin'; // ✅ OK
const role: Role = 'superuser'; // ❌ Error
```

---

## 📚 Recursos Adicionales

- [React Docs - Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [TypeScript - Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [TypeScript - Optional Properties](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties)
- [React Docs - Composition](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)

---

## 🔗 Navegación

- [← Volver a Ejercicios](../README.md)
- [← Ejercicio Anterior: Counter Hook](../02-counter-hook/README.md)
- [→ Siguiente Ejercicio: Simple Form](../04-simple-form/README.md)
- [📖 Teoría: Props Tipado y Validación](../../1-teoria/04-props-tipado-validacion.md)
