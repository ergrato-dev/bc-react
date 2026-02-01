# Componentes Funcionales con TypeScript

## 🎯 Objetivos de Aprendizaje

- Entender qué es un componente en React
- Crear componentes funcionales con TypeScript
- Conocer diferentes formas de tipar componentes
- Aplicar props tipados correctamente
- Exportar e importar componentes
- Organizar componentes en la estructura del proyecto

---

## � Diagrama: Árbol de Componentes

![Árbol de Componentes](../0-assets/03-component-tree.svg)

---

## �📋 ¿Qué es un Componente?

Un **componente** es una pieza reutilizable de UI que puede tener su propia lógica y estado.

```tsx
// QUÉ: Ejemplo básico de un componente funcional
// PARA: Mostrar la estructura fundamental
// IMPACTO: Este es el building block de toda aplicación React

import React from 'react';

const Welcome: React.FC = () => {
  return <h1>¡Bienvenido a React!</h1>;
};

export default Welcome;
```

**Características de los componentes:**

- ✅ Reutilizables (puedes usar el mismo componente múltiples veces)
- ✅ Encapsulados (tienen su propia lógica y estado)
- ✅ Composables (puedes combinarlos para crear UIs complejas)
- ✅ Tipados (con TypeScript, props y estado tienen tipos definidos)

---

## 🏗️ Anatomía de un Componente Funcional

```tsx
// QUÉ: Estructura completa de un componente funcional
// PARA: Entender las partes que componen un componente
// IMPACTO: Template para todos tus componentes

// 1. Imports
import React, { useState } from 'react';
import './Button.css';

// 2. Interface para las props (TypeScript)
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

// 3. Componente funcional con tipo React.FC
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = 'primary',
}) => {
  // 4. Hooks (estado, efectos, etc.)
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // 5. Funciones auxiliares
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // 6. Return con JSX
  return (
    <button
      className={`btn btn-${variant} ${isHovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {text}
    </button>
  );
};

// 7. Export
export default Button;
```

---

## 🎯 Formas de Tipar Componentes

### 1. React.FC (Recomendado para este bootcamp)

```tsx
// QUÉ: Tipar componente con React.FC
// PARA: Aprovechar tipos automáticos de React
// IMPACTO: Incluye automáticamente children, displayName, etc.

import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hola, {name}!</h1>;
};

export default Greeting;
```

**Ventajas de React.FC:**

- ✅ Incluye tipo para `children` automáticamente (opcional desde React 18)
- ✅ Incluye `displayName`, `propTypes`, etc.
- ✅ El tipo de retorno es `ReactElement` (correcto)

### 2. Función Normal con Tipo de Retorno

```tsx
// QUÉ: Tipar componente sin React.FC
// PARA: Tener control explícito sobre el tipo de retorno
// IMPACTO: Más verboso pero más explícito

import React, { ReactElement } from 'react';

interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps): ReactElement => {
  return <h1>Hola, {name}!</h1>;
};

export default Greeting;
```

### 3. Componente sin Props

```tsx
// QUÉ: Componente que no recibe props
// PARA: Componentes estáticos o con estado interno únicamente
// IMPACTO: Simplificar componentes simples

import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Mi Aplicación</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/about">Acerca</a>
      </nav>
    </header>
  );
};

export default Header;
```

---

## 🏷️ Props: Pasando Datos a Componentes

Las **props** (propiedades) son los argumentos que recibe un componente.

```tsx
// QUÉ: Definir y usar props en componentes
// PARA: Hacer componentes configurables y reutilizables
// IMPACTO: Patrón fundamental para composición

import React from 'react';

// Definir la interface de las props
interface UserCardProps {
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, age, isActive }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Edad: {age}</p>
      <p>Estado: {isActive ? 'Activo' : 'Inactivo'}</p>
    </div>
  );
};

// Uso del componente
const App: React.FC = () => {
  return (
    <div>
      <UserCard
        name="Ana García"
        email="ana@example.com"
        age={28}
        isActive={true}
      />
      <UserCard
        name="Carlos López"
        email="carlos@example.com"
        age={35}
        isActive={false}
      />
    </div>
  );
};

export default App;
```

---

## 📦 Props Opcionales y Valores Por Defecto

```tsx
// QUÉ: Props opcionales con valores por defecto
// PARA: Hacer componentes flexibles con configuración opcional
// IMPACTO: Componentes más fáciles de usar

import React from 'react';

interface ButtonProps {
  text: string; // Requerido
  onClick: () => void; // Requerido
  disabled?: boolean; // Opcional
  variant?: 'primary' | 'secondary'; // Opcional con union type
  size?: 'small' | 'medium' | 'large'; // Opcional
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false, // Valor por defecto
  variant = 'primary', // Valor por defecto
  size = 'medium', // Valor por defecto
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
  );
};

// Uso con y sin props opcionales
const App: React.FC = () => {
  return (
    <div>
      {/* Solo props requeridos */}
      <Button
        text="Click"
        onClick={() => alert('Click')}
      />

      {/* Con props opcionales */}
      <Button
        text="Guardar"
        onClick={() => console.log('Guardado')}
        variant="secondary"
        size="large"
        disabled={false}
      />
    </div>
  );
};

export default App;
```

---

## 👶 Children: Contenido Anidado

La prop especial `children` permite pasar contenido entre las etiquetas del componente.

```tsx
// QUÉ: Usar children para contenido anidado
// PARA: Crear componentes contenedores flexibles
// IMPACTO: Patrones como layouts, cards, modals

import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode; // Acepta cualquier contenido React
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-content">{children}</div>
    </div>
  );
};

// Uso con contenido anidado
const App: React.FC = () => {
  return (
    <div>
      <Card title="Información">
        <p>Este es el contenido de la tarjeta.</p>
        <button>Acción</button>
      </Card>

      <Card title="Perfil">
        <img
          src="/avatar.jpg"
          alt="Avatar"
        />
        <p>Nombre: Juan Pérez</p>
        <p>Email: juan@example.com</p>
      </Card>
    </div>
  );
};

export default App;
```

**Tipos para children:**

- `ReactNode`: Acepta cualquier cosa (texto, elementos, arrays, null, etc.)
- `ReactElement`: Solo elementos React (`<div>`, componentes, etc.)
- `JSX.Element`: Similar a ReactElement (más restrictivo)
- `string`: Solo texto

---

## 🎨 Composición de Componentes

Los componentes pueden contener otros componentes, creando una jerarquía.

```tsx
// QUÉ: Composición de componentes para construir UIs complejas
// PARA: Organizar la aplicación en piezas pequeñas y reutilizables
// IMPACTO: Arquitectura escalable y mantenible

import React from 'react';

// Componente Avatar
interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="avatar"
    />
  );
};

// Componente UserInfo
interface UserInfoProps {
  name: string;
  email: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => {
  return (
    <div className="user-info">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

// Componente Button
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

// Componente UserCard (compone los anteriores)
interface UserCardProps {
  avatar: string;
  name: string;
  email: string;
  onDelete: () => void;
}

const UserCard: React.FC<UserCardProps> = ({
  avatar,
  name,
  email,
  onDelete,
}) => {
  return (
    <div className="user-card">
      <Avatar
        src={avatar}
        alt={name}
      />
      <UserInfo
        name={name}
        email={email}
      />
      <Button
        text="Eliminar"
        onClick={onDelete}
      />
    </div>
  );
};

// Componente App (compone UserCard)
const App: React.FC = () => {
  const handleDelete = () => {
    console.log('Usuario eliminado');
  };

  return (
    <div>
      <UserCard
        avatar="/avatar1.jpg"
        name="María López"
        email="maria@example.com"
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
```

**Árbol de componentes:**

```
App
└── UserCard
    ├── Avatar
    ├── UserInfo
    └── Button
```

---

## 📁 Organización de Archivos

### Opción 1: Un componente por archivo

```
src/
├── components/
│   ├── Avatar.tsx
│   ├── Button.tsx
│   ├── UserCard.tsx
│   └── UserInfo.tsx
├── App.tsx
└── main.tsx
```

### Opción 2: Componente con carpeta (cuando tiene estilos/tests)

```
src/
├── components/
│   ├── Avatar/
│   │   ├── Avatar.tsx
│   │   ├── Avatar.css
│   │   └── Avatar.test.tsx
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   └── Button.test.tsx
│   └── UserCard/
│       ├── UserCard.tsx
│       ├── UserCard.css
│       └── UserCard.test.tsx
├── App.tsx
└── main.tsx
```

### Opción 3: Componente con index.tsx (exports limpios)

```
src/
├── components/
│   ├── Avatar/
│   │   ├── Avatar.tsx
│   │   ├── Avatar.css
│   │   └── index.ts         // export { default } from './Avatar';
│   └── Button/
│       ├── Button.tsx
│       ├── Button.css
│       └── index.ts
├── App.tsx
└── main.tsx
```

---

## 📤 Export e Import de Componentes

### Export Default (Recomendado para componentes)

```tsx
// QUÉ: Export default para componentes
// PARA: Simplificar imports cuando hay un componente principal por archivo
// IMPACTO: Convención estándar en React

// Avatar.tsx
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
    />
  );
};

export default Avatar;

// Uso en otro archivo
import Avatar from './components/Avatar';
// Puedes renombrar al importar
import UserAvatar from './components/Avatar';
```

### Named Export (Para múltiples exports)

```tsx
// QUÉ: Named exports para múltiples componentes o utilidades
// PARA: Exportar varios elementos del mismo archivo
// IMPACTO: Útil para archivos de utilidades o componentes pequeños

// Button.tsx
import React from 'react';

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="btn-primary"
      onClick={onClick}>
      {text}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="btn-secondary"
      onClick={onClick}>
      {text}
    </button>
  );
};

// Uso en otro archivo
import { PrimaryButton, SecondaryButton } from './components/Button';
// Debes usar el nombre exacto (o renombrar con 'as')
import { PrimaryButton as MainButton } from './components/Button';
```

### Combinar Default y Named Exports

```tsx
// QUÉ: Combinar export default con named exports
// PARA: Exportar el componente principal + tipos/utilidades
// IMPACTO: API más flexible

// UserCard.tsx
import React from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onDelete(user.id)}>Eliminar</button>
    </div>
  );
};

export default UserCard;

// Uso en otro archivo
import UserCard, { User, UserCardProps } from './components/UserCard';
```

---

## 🧩 Patrones Comunes de Componentes

### 1. Componente de Presentación (Dumb Component)

```tsx
// QUÉ: Componente puramente visual sin lógica
// PARA: Mostrar datos que recibe por props
// IMPACTO: Fácil de testear y reutilizar

import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
      />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
```

### 2. Componente Contenedor (Smart Component)

```tsx
// QUÉ: Componente con lógica y estado
// PARA: Manejar datos y pasarlos a componentes de presentación
// IMPACTO: Separación de responsabilidades

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
```

### 3. Componente Layout

```tsx
// QUÉ: Componente que define la estructura de la página
// PARA: Compartir layout común entre varias páginas
// IMPACTO: Consistencia visual y menos código duplicado

import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Mi App</h1>
        <nav>
          <a href="/">Inicio</a>
          <a href="/about">Acerca</a>
        </nav>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <p>&copy; 2026 Mi Aplicación</p>
      </footer>
    </div>
  );
};

export default Layout;

// Uso
const HomePage: React.FC = () => {
  return (
    <Layout>
      <h2>Página de Inicio</h2>
      <p>Contenido específico de la página...</p>
    </Layout>
  );
};
```

---

## 🎯 Convenciones de Nomenclatura

```tsx
// QUÉ: Convenciones para nombrar componentes
// PARA: Mantener código consistente y profesional
// IMPACTO: Legibilidad y mantenibilidad

// ✅ CORRECTO: Componentes en PascalCase
const UserProfile: React.FC = () => { /*...*/ };
const ProductCard: React.FC = () => { /*...*/ };
const ShoppingCart: React.FC = () => { /*...*/ };

// ✅ CORRECTO: Archivos de componentes en PascalCase
// UserProfile.tsx
// ProductCard.tsx
// ShoppingCart.tsx

// ✅ CORRECTO: Props interfaces con sufijo Props
interface UserProfileProps { /*...*/ }
interface ProductCardProps { /*...*/ }

// ❌ INCORRECTO: componentes en camelCase
const userProfile: React.FC = () => { /*...*/ };

// ❌ INCORRECTO: componentes en kebab-case
const user-profile: React.FC = () => { /*...*/ };
```

---

## 🚀 Ejemplo Completo: Sistema de Componentes

```tsx
// QUÉ: Ejemplo completo que integra todos los conceptos
// PARA: Ver cómo se estructura una mini-aplicación React
// IMPACTO: Template para tus propios proyectos

// types.ts
export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

// Avatar.tsx
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'medium' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`avatar avatar-${size}`}
    />
  );
};

export default Avatar;

// UserCard.tsx
import React from 'react';
import Avatar from './Avatar';
import { User } from './types';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <Avatar
        src={user.avatar}
        alt={user.name}
      />

      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>

      <div className="user-actions">
        <button onClick={() => onEdit(user)}>Editar</button>
        <button onClick={() => onDelete(user.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default UserCard;

// UserList.tsx
import React from 'react';
import UserCard from './UserCard';
import { User } from './types';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  if (users.length === 0) {
    return <p>No hay usuarios para mostrar.</p>;
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default UserList;

// App.tsx
import React from 'react';
import UserList from './components/UserList';
import { User } from './types';

const App: React.FC = () => {
  const users: User[] = [
    {
      id: 1,
      name: 'Ana García',
      email: 'ana@example.com',
      avatar: '/avatar1.jpg',
    },
    {
      id: 2,
      name: 'Carlos López',
      email: 'carlos@example.com',
      avatar: '/avatar2.jpg',
    },
  ];

  const handleEdit = (user: User) => {
    console.log('Editar usuario:', user);
  };

  const handleDelete = (id: number) => {
    console.log('Eliminar usuario:', id);
  };

  return (
    <div className="app">
      <h1>Gestión de Usuarios</h1>
      <UserList
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
```

---

## ✅ Checklist de Verificación

Después de estudiar este tema, debes ser capaz de:

- [ ] Crear componentes funcionales con TypeScript
- [ ] Definir interfaces para props
- [ ] Usar props opcionales con valores por defecto
- [ ] Tipar componentes con `React.FC<Props>`
- [ ] Usar la prop especial `children`
- [ ] Componer componentes dentro de otros
- [ ] Exportar e importar componentes correctamente
- [ ] Organizar componentes en carpetas
- [ ] Seguir convenciones de nomenclatura (PascalCase)
- [ ] Diferenciar entre componentes de presentación y contenedores

---

## 📚 Recursos Adicionales

- **React Docs - Components**: https://react.dev/learn/your-first-component
- **React TypeScript Cheatsheet**: https://react-typescript-cheatsheet.netlify.app/
- **Component Composition**: https://react.dev/learn/passing-props-to-a-component

---

## 🔗 Navegación

[⬅️ Atrás: JSX y TSX](./02-jsx-tsx-sintaxis.md) | [➡️ Siguiente: Props Tipado](./04-props-tipado-validacion.md)
