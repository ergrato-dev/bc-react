# Props: Tipado y Validación

## 🎯 Objetivos de Aprendizaje

- Dominar el tipado de props con TypeScript
- Usar props requeridos y opcionales correctamente
- Aplicar valores por defecto a props
- Validar tipos con union types y literal types
- Desestructurar props eficientemente
- Pasar funciones como props (callbacks)
- Manejar objetos y arrays como props

---

## � Diagrama: Flujo de Props

![Flujo de Props](../0-assets/04-props-flow.svg)

---

## �📋 ¿Qué son las Props?

**Props** (abreviatura de "properties") son argumentos que se pasan a los componentes React, similar a los parámetros de una función.

```tsx
// QUÉ: Concepto básico de props
// PARA: Hacer componentes configurables y reutilizables
// IMPACTO: Comunicación unidireccional de padre a hijo

import React from 'react';

// Definir los tipos de las props
interface GreetingProps {
  name: string;
}

// Componente que recibe props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hola, {name}!</h1>;
};

// Uso: pasar props al componente
const App: React.FC = () => {
  return (
    <div>
      <Greeting name="Ana" />
      <Greeting name="Carlos" />
    </div>
  );
};
```

**Características de las props:**

- ✅ **Inmutables**: No puedes modificarlas dentro del componente
- ✅ **Unidireccionales**: Fluyen de padre a hijo (top-down)
- ✅ **Tipadas**: Con TypeScript, tienen tipos definidos
- ✅ **Validadas**: TypeScript verifica en tiempo de compilación

---

## 🏷️ Tipado de Props con Interfaces

### Props Básicas

```tsx
// QUÉ: Definir interface para props simples
// PARA: Especificar qué props acepta el componente
// IMPACTO: TypeScript valida que se pasen correctamente

import React from 'react';

interface UserProps {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}

const User: React.FC<UserProps> = ({ name, age, email, isActive }) => {
  return (
    <div className="user">
      <h2>{name}</h2>
      <p>Edad: {age}</p>
      <p>Email: {email}</p>
      <p>Estado: {isActive ? 'Activo' : 'Inactivo'}</p>
    </div>
  );
};

// TypeScript validará:
// ✅ Que se pasen todas las props requeridas
// ✅ Que los tipos sean correctos
// ❌ Error si falta 'email'
// ❌ Error si 'age' es un string
```

### Props con Types (Alternativa)

```tsx
// QUÉ: Usar type en lugar de interface para props
// PARA: Alternativa cuando necesitas union types o intersections
// IMPACTO: Más flexible en ciertos casos

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

type ButtonProps = {
  text: string;
  variant: ButtonVariant;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, variant, onClick }) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}>
      {text}
    </button>
  );
};
```

**Interface vs Type para Props:**

- ✅ **Interface**: Recomendado para props (se puede extender fácilmente)
- ✅ **Type**: Útil para union types, intersections, utility types

---

## ❓ Props Opcionales

Usa `?` para hacer props opcionales.

```tsx
// QUÉ: Props opcionales con el operador ?
// PARA: Hacer props no obligatorias
// IMPACTO: Componentes más flexibles

import React from 'react';

interface ButtonProps {
  text: string;              // Requerido
  onClick: () => void;       // Requerido
  disabled?: boolean;        // Opcional
  variant?: 'primary' | 'secondary';  // Opcional
  icon?: string;             // Opcional
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled,    // Puede ser undefined
  variant,     // Puede ser undefined
  icon,        // Puede ser undefined
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant ? `btn-${variant}` : ''}`}
    >
      {icon && <img src={icon} alt="" />}
      {text}
    </button>
  );
};

// Usos válidos:
<Button text="Click" onClick={() => {}} />
<Button text="Guardar" onClick={() => {}} variant="primary" />
<Button text="Eliminar" onClick={() => {}} variant="danger" disabled={true} />
```

---

## 🎯 Valores Por Defecto

Asigna valores por defecto a props opcionales usando destructuring.

```tsx
// QUÉ: Valores por defecto para props opcionales
// PARA: Simplificar el uso del componente
// IMPACTO: Props con comportamiento predeterminado

import React from 'react';

interface AlertProps {
  message: string;
  type?: 'info' | 'warning' | 'error' | 'success';
  dismissible?: boolean;
  autoClose?: boolean;
  timeout?: number;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type = 'info',           // Valor por defecto
  dismissible = true,      // Valor por defecto
  autoClose = false,       // Valor por defecto
  timeout = 5000,          // Valor por defecto
}) => {
  return (
    <div className={`alert alert-${type}`}>
      <p>{message}</p>
      {dismissible && <button>×</button>}
      {autoClose && <span>Se cerrará en {timeout/1000}s</span>}
    </div>
  );
};

// Usos:
<Alert message="Operación exitosa" />  // Usa todos los valores por defecto
<Alert message="Advertencia" type="warning" dismissible={false} />
<Alert message="Error" type="error" autoClose={true} timeout={3000} />
```

---

## 🎨 Union Types y Literal Types

### Union Types

```tsx
// QUÉ: Union types para props con múltiples tipos posibles
// PARA: Permitir valores de diferentes tipos
// IMPACTO: Mayor flexibilidad manteniendo type safety

import React from 'react';

interface IconProps {
  name: string;
  size: number | string;  // Puede ser número o string
}

const Icon: React.FC<IconProps> = ({ name, size }) => {
  // TypeScript sabe que size puede ser número o string
  const sizeStr = typeof size === 'number' ? `${size}px` : size;

  return (
    <img
      src={`/icons/${name}.svg`}
      alt={name}
      style={{ width: sizeStr, height: sizeStr }}
    />
  );
};

// Usos válidos:
<Icon name="search" size={24} />
<Icon name="user" size="2rem" />
```

### Literal Types

```tsx
// QUÉ: Literal types para props con valores específicos
// PARA: Restringir props a valores exactos
// IMPACTO: Prevenir valores incorrectos

import React from 'react';

interface BadgeProps {
  text: string;
  color: 'red' | 'blue' | 'green' | 'yellow';  // Solo estos valores
  size: 'sm' | 'md' | 'lg';                     // Solo estos valores
}

const Badge: React.FC<BadgeProps> = ({ text, color, size }) => {
  return (
    <span className={`badge badge-${color} badge-${size}`}>
      {text}
    </span>
  );
};

// ✅ Válido
<Badge text="Nuevo" color="red" size="sm" />

// ❌ Error: 'orange' no es un valor válido para 'color'
<Badge text="Nuevo" color="orange" size="sm" />

// ❌ Error: 'extra-large' no es un valor válido para 'size'
<Badge text="Nuevo" color="red" size="extra-large" />
```

---

## 🧩 Objetos y Arrays como Props

### Objetos

```tsx
// QUÉ: Pasar objetos como props con tipos definidos
// PARA: Agrupar datos relacionados
// IMPACTO: Props más organizadas

import React from 'react';

// Definir el tipo del objeto
interface Address {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}

interface UserCardProps {
  name: string;
  address: Address; // Objeto tipado
}

const UserCard: React.FC<UserCardProps> = ({ name, address }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <address>
        <p>{address.street}</p>
        <p>
          {address.city}, {address.zipCode}
        </p>
        <p>{address.country}</p>
      </address>
    </div>
  );
};

// Uso
const userAddress: Address = {
  street: 'Calle Principal 123',
  city: 'Madrid',
  zipCode: '28001',
  country: 'España',
};

<UserCard
  name="Ana García"
  address={userAddress}
/>;
```

### Arrays

```tsx
// QUÉ: Pasar arrays como props con tipos de elementos
// PARA: Renderizar listas de datos
// IMPACTO: Componentes que manejan colecciones

import React from 'react';

interface Tag {
  id: number;
  name: string;
  color: string;
}

interface ArticleProps {
  title: string;
  tags: Tag[]; // Array de objetos Tag
}

const Article: React.FC<ArticleProps> = ({ title, tags }) => {
  return (
    <article>
      <h2>{title}</h2>
      <div className="tags">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="tag"
            style={{ backgroundColor: tag.color }}>
            {tag.name}
          </span>
        ))}
      </div>
    </article>
  );
};

// Uso
const articleTags: Tag[] = [
  { id: 1, name: 'React', color: '#61dafb' },
  { id: 2, name: 'TypeScript', color: '#3178c6' },
  { id: 3, name: 'Vite', color: '#646cff' },
];

<Article
  title="Introducción a React"
  tags={articleTags}
/>;
```

---

## 🔄 Funciones como Props (Callbacks)

```tsx
// QUÉ: Pasar funciones como props para event handlers
// PARA: Comunicación de hijo a padre
// IMPACTO: Componentes interactivos

import React from 'react';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void; // Función con parámetro
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void; // Función con múltiples parámetros
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const handleEdit = () => {
    const newText = prompt('Editar tarea:', text);
    if (newText) {
      onEdit(id, newText);
    }
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span>{text}</span>
      <button onClick={handleEdit}>Editar</button>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
};

// Uso en componente padre
const TodoList: React.FC = () => {
  const handleToggle = (id: number) => {
    console.log('Toggle todo:', id);
  };

  const handleDelete = (id: number) => {
    console.log('Delete todo:', id);
  };

  const handleEdit = (id: number, newText: string) => {
    console.log('Edit todo:', id, newText);
  };

  return (
    <TodoItem
      id={1}
      text="Aprender React"
      completed={false}
      onToggle={handleToggle}
      onDelete={handleDelete}
      onEdit={handleEdit}
    />
  );
};
```

---

## 🎁 Children: La Prop Especial

```tsx
// QUÉ: Usar la prop children para contenido anidado
// PARA: Crear componentes wrapper/contenedor
// IMPACTO: Componentes más flexibles y composables

import React, { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode; // Acepta cualquier contenido React
  footer?: ReactNode; // Footer opcional
}

const Card: React.FC<CardProps> = ({ title, children, footer }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

// Uso con contenido anidado
<Card
  title="Perfil de Usuario"
  footer={<button>Editar</button>}>
  <p>Nombre: Ana García</p>
  <p>Email: ana@example.com</p>
  <img
    src="/avatar.jpg"
    alt="Avatar"
  />
</Card>;
```

**Tipos para Children:**

```tsx
import React, { ReactNode, ReactElement, JSX } from 'react';

interface ComponentProps {
  children1: ReactNode; // ✅ Más flexible (recomendado)
  children2: ReactElement; // Solo elementos React
  children3: JSX.Element; // Similar a ReactElement
  children4: React.ReactNode; // Igual que ReactNode
  children5: string; // Solo strings
  children6: number; // Solo números
}
```

---

## 🛠️ Desestructuración de Props

### Desestructuración en Parámetros (Recomendado)

```tsx
// QUÉ: Desestructurar props directamente en los parámetros
// PARA: Código más limpio y conciso
// IMPACTO: Patrón estándar en React

import React from 'react';

interface UserProps {
  name: string;
  age: number;
  email: string;
}

// ✅ Desestructuración en parámetros
const User: React.FC<UserProps> = ({ name, age, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Edad: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

// ❌ Sin desestructuración (verbose)
const UserVerbose: React.FC<UserProps> = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Edad: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};
```

### Desestructuración con Valores por Defecto

```tsx
// QUÉ: Combinar desestructuración con valores por defecto
// PARA: Simplificar props opcionales
// IMPACTO: Código más expresivo

import React from 'react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  size = 'md',
  disabled = false,
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled}>
      {text}
    </button>
  );
};
```

### Rest Props (Spread)

```tsx
// QUÉ: Usar rest operator para capturar props adicionales
// PARA: Pasar props HTML nativos al elemento subyacente
// IMPACTO: Componentes más flexibles

import React, { ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  variant = 'primary',
  ...restProps // Captura todas las props restantes
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      {...restProps}>
      {text}
    </button>
  );
};

// Uso: puedes pasar cualquier prop HTML de button
<CustomButton
  text="Click"
  variant="primary"
  onClick={() => alert('Click!')}
  disabled={false}
  type="submit"
  aria-label="Botón principal"
/>;
```

---

## 🔍 Validación con TypeScript

TypeScript valida props en **tiempo de compilación**.

```tsx
// QUÉ: TypeScript valida props automáticamente
// PARA: Detectar errores antes de ejecutar el código
// IMPACTO: Mayor confiabilidad y menos bugs

import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const Product: React.FC<ProductProps> = ({ id, name, price, inStock }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Precio: ${price.toFixed(2)}</p>
      <p>{inStock ? 'En stock' : 'Agotado'}</p>
    </div>
  );
};

// ✅ Correcto
<Product id={1} name="Laptop" price={999.99} inStock={true} />

// ❌ Error: falta la prop 'inStock'
<Product id={1} name="Laptop" price={999.99} />

// ❌ Error: 'price' debe ser number, no string
<Product id={1} name="Laptop" price="999.99" inStock={true} />

// ❌ Error: prop 'color' no existe en ProductProps
<Product id={1} name="Laptop" price={999.99} inStock={true} color="black" />
```

---

## 🌐 Props Complejas: Tipos Anidados

```tsx
// QUÉ: Definir tipos complejos para props anidadas
// PARA: Manejar estructuras de datos complejas
// IMPACTO: Type safety en toda la aplicación

import React from 'react';

// Tipos base
interface Address {
  street: string;
  city: string;
  country: string;
}

interface Contact {
  email: string;
  phone: string;
}

interface Company {
  name: string;
  position: string;
}

// Interface principal
interface ProfileCardProps {
  name: string;
  age: number;
  address: Address;
  contact: Contact;
  company: Company;
  hobbies: string[];
  tags: Array<{ id: number; name: string }>;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  age,
  address,
  contact,
  company,
  hobbies,
  tags,
}) => {
  return (
    <div className="profile-card">
      <h2>
        {name}, {age}
      </h2>

      <section>
        <h3>Dirección</h3>
        <p>{address.street}</p>
        <p>
          {address.city}, {address.country}
        </p>
      </section>

      <section>
        <h3>Contacto</h3>
        <p>Email: {contact.email}</p>
        <p>Teléfono: {contact.phone}</p>
      </section>

      <section>
        <h3>Empresa</h3>
        <p>
          {company.position} en {company.name}
        </p>
      </section>

      <section>
        <h3>Hobbies</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Tags</h3>
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="tag">
            {tag.name}
          </span>
        ))}
      </section>
    </div>
  );
};
```

---

## 🎯 Mejores Prácticas

### 1. Props Inmutables

```tsx
// QUÉ: No modificar props dentro del componente
// PARA: Mantener la inmutabilidad de React
// IMPACTO: Prevenir bugs difíciles de rastrear

interface UserProps {
  user: { name: string; age: number };
}

const User: React.FC<UserProps> = ({ user }) => {
  // ❌ NUNCA hagas esto
  // user.age = 25;  // Error: no se pueden modificar props

  // ✅ Si necesitas un valor modificado, crea una nueva variable
  const displayAge = user.age + 1;

  return (
    <div>
      <p>Nombre: {user.name}</p>
      <p>Edad: {user.age}</p>
      <p>Edad el próximo año: {displayAge}</p>
    </div>
  );
};
```

### 2. Evitar Prop Drilling Excesivo

```tsx
// QUÉ: No pasar props por muchos niveles
// PARA: Evitar complejidad innecesaria
// IMPACTO: Código más mantenible

// ❌ MAL: Prop drilling (pasar props por muchos niveles)
<GrandParent user={user}>
  <Parent user={user}>
    <Child user={user}>
      <GrandChild user={user} />
    </Child>
  </Parent>
</GrandParent>

// ✅ BIEN: Usar Context API (verás esto en semanas futuras)
// O reestructurar para que GrandChild esté más cerca de GrandParent
```

### 3. Interfaces Descriptivas

```tsx
// QUÉ: Nombrar interfaces de forma clara y descriptiva
// PARA: Facilitar la comprensión del código
// IMPACTO: Mejor mantenibilidad

// ❌ MAL: Nombres genéricos
interface Props {
  data: any;
  fn: Function;
}

// ✅ BIEN: Nombres específicos
interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}
```

---

## ✅ Checklist de Verificación

Después de estudiar este tema, debes ser capaz de:

- [ ] Definir interfaces para props con TypeScript
- [ ] Usar props requeridos y opcionales (`?`)
- [ ] Asignar valores por defecto a props opcionales
- [ ] Usar union types y literal types para props
- [ ] Pasar objetos y arrays como props
- [ ] Pasar funciones como props (callbacks)
- [ ] Usar la prop especial `children`
- [ ] Desestructurar props en los parámetros
- [ ] Extender tipos de HTML con rest props
- [ ] Validar props con TypeScript

---

## 📚 Recursos Adicionales

- **React Docs - Props**: https://react.dev/learn/passing-props-to-a-component
- **TypeScript + React Props**: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example
- **Children Types**: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example#useful-react-prop-type-examples

---

## 🔗 Navegación

[⬅️ Atrás: Componentes Funcionales](./03-componentes-funcionales-typescript.md) | [➡️ Siguiente: Estado con useState](./05-estado-local-usestate.md)
