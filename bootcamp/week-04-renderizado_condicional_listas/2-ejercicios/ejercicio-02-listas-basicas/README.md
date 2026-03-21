# Ejercicio 02: Listas Básicas

## 🎯 Objetivo

Aprender a renderizar listas de datos usando `.map()` y entender la importancia de las keys.

## 📋 Descripción

Crearás un componente `UserList` que muestra una lista de usuarios con sus datos básicos.

## 🔑 Conceptos Clave

- Método `.map()` para transformar arrays
- Prop `key` para identificar elementos únicos
- Tipado de arrays en TypeScript
- Extracción de componentes de ítem

---

## 📝 Instrucciones

### Paso 1: Lista Simple con Strings

Comenzamos con un array de strings para entender `.map()`:

```tsx
const fruits = ['Manzana', 'Banana', 'Naranja'];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```

**Abre `starter/UserList.tsx`** y descomenta la sección del Paso 1.

### Paso 2: Lista de Objetos

Ahora con objetos tipados, usando `id` como key:

```tsx
interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Carlos' },
];

// Usar id como key (mejor que index)
users.map((user) => <li key={user.id}>{user.name}</li>);
```

**Descomenta la sección del Paso 2** para trabajar con objetos.

### Paso 3: Extraer Componente de Ítem

Es buena práctica extraer el ítem a su propio componente:

```tsx
interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => (
  <li className="user-item">
    <span>{user.name}</span>
    <span>{user.email}</span>
  </li>
);
```

**Descomenta la sección del Paso 3** para extraer el componente.

### Paso 4: Agregar Acciones

Añade funcionalidad para eliminar usuarios:

```tsx
<button onClick={() => onDelete(user.id)}>Eliminar</button>
```

**Descomenta la sección del Paso 4** para agregar interactividad.

---

## ✅ Resultado Esperado

- Lista de usuarios renderizada correctamente
- Keys únicas (sin warnings en consola)
- Componente `UserItem` extraído
- Botón de eliminar funcional

---

## 🧪 Verificación

1. Abre la consola del navegador
2. NO debe haber warnings de keys duplicadas
3. Eliminar usuarios debe actualizar la lista

---

_Siguiente: [Ejercicio 03 - Keys y Reconciliación](../ejercicio-03-keys-reconciliacion/README.md)_
