# JSX y TSX: Sintaxis y Diferencias

## 🎯 Objetivos de Aprendizaje

- Entender qué es JSX y por qué existe
- Conocer la diferencia entre JSX y TSX
- Dominar la sintaxis de JSX/TSX
- Aprender las reglas y restricciones
- Manejar expresiones JavaScript en JSX
- Trabajar con fragmentos y elementos

---

## 📋 ¿Qué es JSX?

**JSX** (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir estructuras similares a HTML dentro de JavaScript.

```typescript
// QUÉ: Ejemplo básico de JSX
// PARA: Mostrar la sintaxis fundamental
// IMPACTO: Este es el corazón de React

// Sin JSX (React.createElement)
const element1 = React.createElement('h1', null, 'Hola Mundo');

// Con JSX (más legible y natural)
const element2 = <h1>Hola Mundo</h1>;

// Ambos producen el mismo resultado, pero JSX es mucho más claro
```

**Importante**: JSX **NO es HTML**. Es sintaxis de JavaScript que se parece a HTML.

---

## 🆚 JSX vs TSX

| Aspecto                    | JSX        | TSX                        |
| -------------------------- | ---------- | -------------------------- |
| **Extensión de archivo**   | `.jsx`     | `.tsx`                     |
| **Lenguaje base**          | JavaScript | TypeScript                 |
| **Tipado**                 | No         | Sí (props, state, eventos) |
| **Validación**             | En runtime | En tiempo de compilación   |
| **Recomendado para React** | No         | ✅ Sí                      |

```tsx
// QUÉ: Diferencia entre JSX y TSX
// PARA: Entender por qué usamos TSX en este bootcamp
// IMPACTO: TSX previene errores antes de ejecutar el código

// JSX (sin tipos) - archivo.jsx
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

// TSX (con tipos) - archivo.tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

// Con TSX, TypeScript te alertará si:
// ❌ Pasas un número en lugar de string para 'text'
// ❌ Olvidas la prop 'onClick'
// ❌ 'onClick' no es una función
```

---

## 🔧 Compilación de JSX/TSX

JSX/TSX se transforma en llamadas a `React.createElement` durante la compilación.

```tsx
// QUÉ: Transformación de JSX a JavaScript
// PARA: Entender qué hace el compilador con JSX
// IMPACTO: Ayuda a entender errores y debugging

// Código que escribes (TSX)
const greeting = <h1 className="title">Hola, {name}!</h1>;

// Lo que se genera después de compilar (JavaScript)
const greeting = React.createElement(
  'h1',
  { className: 'title' },
  'Hola, ',
  name,
  '!',
);
```

**Herramientas que compilan JSX/TSX:**

- **Vite** usa **esbuild** (el más rápido)
- **Create React App** usaba **Babel** (más lento)
- **TypeScript Compiler** también puede hacerlo

---

## 📝 Sintaxis Básica de JSX/TSX

### 1. Elementos HTML

```tsx
// QUÉ: Elementos HTML básicos en JSX
// PARA: Construir la estructura de la UI
// IMPACTO: Similar a HTML pero con pequeñas diferencias

const SimpleElements = () => {
  return (
    <div>
      <h1>Título Principal</h1>
      <p>Este es un párrafo.</p>
      <button>Click aquí</button>
      <img
        src="/logo.png"
        alt="Logo"
      />
      <input
        type="text"
        placeholder="Escribe algo..."
      />
    </div>
  );
};
```

### 2. Expresiones JavaScript en JSX

Usa `{}` para insertar expresiones JavaScript dentro de JSX.

```tsx
// QUÉ: Insertar valores dinámicos en JSX
// PARA: Mostrar datos que cambian
// IMPACTO: Conectar JavaScript con la UI

const userName = 'María';
const age = 25;
const isAdult = age >= 18;

const Profile = () => {
  return (
    <div>
      {/* Variables */}
      <h1>Nombre: {userName}</h1>

      {/* Expresiones matemáticas */}
      <p>Edad en 5 años: {age + 5}</p>

      {/* Operador ternario */}
      <p>{isAdult ? 'Es mayor de edad' : 'Es menor de edad'}</p>

      {/* Llamadas a funciones */}
      <p>Mayúsculas: {userName.toUpperCase()}</p>

      {/* Métodos de arrays */}
      <p>Longitud: {userName.length}</p>
    </div>
  );
};
```

### 3. Atributos con CamelCase

En JSX/TSX, los atributos usan **camelCase** en lugar de kebab-case.

```tsx
// QUÉ: Diferencias de atributos entre HTML y JSX
// PARA: Evitar errores comunes
// IMPACTO: JSX sigue convenciones de JavaScript

const Attributes = () => {
  return (
    <div>
      {/* ❌ HTML: class */}
      {/* ✅ JSX: className */}
      <div className="container"></div>

      {/* ❌ HTML: for */}
      {/* ✅ JSX: htmlFor */}
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
      />

      {/* ❌ HTML: onclick */}
      {/* ✅ JSX: onClick */}
      <button onClick={() => alert('Click!')}>Click</button>

      {/* ❌ HTML: tabindex */}
      {/* ✅ JSX: tabIndex */}
      <div tabIndex={0}>Enfocable</div>

      {/* Atributos con guiones se convierten a camelCase */}
      <div
        aria-label="Menú" // ✅ OK (aria-* se mantiene con guion)
        data-testid="menu" // ✅ OK (data-* se mantiene con guion)
        autoComplete="off" // ✅ camelCase
        autoFocus // ✅ camelCase
      />
    </div>
  );
};
```

### 4. Atributos Dinámicos

```tsx
// QUÉ: Asignar valores dinámicos a atributos
// PARA: Hacer componentes configurables
// IMPACTO: Componentes reutilizables con diferentes props

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
}

const DynamicImage: React.FC<ImageProps> = ({ src, alt, width = 200 }) => {
  const isLarge = width > 300;

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      className={isLarge ? 'image-large' : 'image-small'}
      style={{ border: isLarge ? '2px solid red' : '1px solid gray' }}
    />
  );
};

// Uso
<DynamicImage
  src="/photo.jpg"
  alt="Foto"
  width={400}
/>;
```

### 5. Estilos Inline

En JSX, los estilos inline se escriben como objetos JavaScript.

```tsx
// QUÉ: Aplicar estilos inline en JSX
// PARA: Estilizar elementos dinámicamente
// IMPACTO: Útil para estilos calculados o condicionales

const StyledComponent = () => {
  const primaryColor = '#3498db';
  const fontSize = 16;

  return (
    <div
      style={{
        // Propiedades CSS en camelCase
        backgroundColor: primaryColor,
        fontSize: `${fontSize}px`,
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        // Valores numéricos se interpretan como 'px'
        marginTop: 10, // Se convierte en '10px'
      }}>
      <p style={{ color: 'white', fontWeight: 'bold' }}>Texto con estilos</p>
    </div>
  );
};
```

---

## 🚫 Restricciones de JSX/TSX

### 1. Un Solo Elemento Raíz

JSX requiere **un único elemento raíz**.

```tsx
// QUÉ: Restricción de elemento raíz único
// PARA: Entender por qué JSX requiere un wrapper
// IMPACTO: Usar fragmentos cuando no quieres un div extra

// ❌ ERROR: Múltiples elementos raíz
const Wrong = () => {
  return (
    <h1>Título</h1>
    <p>Párrafo</p>
  );
};

// ✅ CORRECTO: Envuelto en un div
const Correct1 = () => {
  return (
    <div>
      <h1>Título</h1>
      <p>Párrafo</p>
    </div>
  );
};

// ✅ CORRECTO: Usando Fragment (mejor)
const Correct2 = () => {
  return (
    <>
      <h1>Título</h1>
      <p>Párrafo</p>
    </>
  );
};

// ✅ CORRECTO: Fragment explícito (cuando necesitas key)
import { Fragment } from 'react';

const Correct3 = () => {
  return (
    <Fragment>
      <h1>Título</h1>
      <p>Párrafo</p>
    </Fragment>
  );
};
```

### 2. Cerrar Todas las Etiquetas

En JSX, **todas las etiquetas deben cerrarse**, incluso las self-closing.

```tsx
// QUÉ: Etiquetas self-closing en JSX
// PARA: Evitar errores de sintaxis
// IMPACTO: JSX es más estricto que HTML

// ❌ HTML válido pero JSX inválido
<img src="/logo.png">
<input type="text">
<br>

// ✅ JSX correcto
<img src="/logo.png" />
<input type="text" />
<br />

// También puedes cerrarlas de forma completa
<img src="/logo.png"></img>  // Funciona pero no es idiomático
```

### 3. Comentarios en JSX

```tsx
// QUÉ: Diferentes formas de comentarios en JSX
// PARA: Documentar código dentro de componentes
// IMPACTO: Mantener código legible

const Comments = () => {
  return (
    <div>
      {/* Comentario en JSX (dentro de la expresión) */}

      {/* 
        Comentario
        multilínea
        en JSX
      */}

      <h1>Título</h1>

      {/* Comentario antes de un elemento */}
      <p>Párrafo</p>

      {
        // También puedes usar comentarios JS
        // dentro de bloques de expresión
      }
    </div>
  );

  // Comentarios normales de JS fuera del return
  // funcionan como siempre
};
```

### 4. Palabras Reservadas

No puedes usar palabras reservadas de JavaScript como nombres de atributos.

```tsx
// QUÉ: Palabras reservadas en JSX
// PARA: Evitar conflictos con JavaScript
// IMPACTO: Usar alternativas específicas de React

// ❌ 'class' es palabra reservada de JavaScript
<div class="container"></div>

// ✅ Usa 'className' en su lugar
<div className="container"></div>

// ❌ 'for' es palabra reservada (bucle for)
<label for="email">Email</label>

// ✅ Usa 'htmlFor' en su lugar
<label htmlFor="email">Email</label>
```

---

## 🔄 Renderizado Condicional

### 1. Operador Ternario

```tsx
// QUÉ: Renderizado condicional con operador ternario
// PARA: Mostrar contenido diferente según condiciones
// IMPACTO: UI dinámica basada en estado

interface GreetingProps {
  isLoggedIn: boolean;
  username?: string;
}

const Greeting: React.FC<GreetingProps> = ({ isLoggedIn, username }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Bienvenido, {username}!</h1>
      ) : (
        <h1>Por favor, inicia sesión</h1>
      )}
    </div>
  );
};
```

### 2. Operador AND (&&)

```tsx
// QUÉ: Renderizado condicional con operador AND
// PARA: Mostrar elementos solo si una condición es verdadera
// IMPACTO: Código más limpio para casos true/false

interface NotificationProps {
  hasNotifications: boolean;
  count: number;
}

const Notification: React.FC<NotificationProps> = ({
  hasNotifications,
  count,
}) => {
  return (
    <div>
      <h1>Notificaciones</h1>

      {/* Solo muestra el badge si hay notificaciones */}
      {hasNotifications && <span className="badge">{count} nuevas</span>}

      {/* Equivalente a: */}
      {hasNotifications ? <span className="badge">{count} nuevas</span> : null}
    </div>
  );
};
```

**⚠️ Cuidado con valores falsy:**

```tsx
// QUÉ: Cuidado con valores falsy en renderizado condicional
// PARA: Evitar renderizar 0 o valores inesperados
// IMPACTO: Prevenir bugs sutiles en la UI

const count = 0;

// ❌ Renderiza '0' en la pantalla (no es lo que queremos)
{
  count && <p>Tienes {count} mensajes</p>;
}

// ✅ Comparación explícita
{
  count > 0 && <p>Tienes {count} mensajes</p>;
}

// ✅ O usa operador ternario
{
  count > 0 ? <p>Tienes {count} mensajes</p> : null;
}
```

### 3. Variables con Elementos

```tsx
// QUÉ: Asignar JSX a variables
// PARA: Simplificar lógica condicional compleja
// IMPACTO: Código más legible y mantenible

interface StatusProps {
  status: 'loading' | 'success' | 'error';
  data?: string;
  error?: string;
}

const Status: React.FC<StatusProps> = ({ status, data, error }) => {
  let content;

  if (status === 'loading') {
    content = <p>Cargando...</p>;
  } else if (status === 'success') {
    content = <p>Datos: {data}</p>;
  } else if (status === 'error') {
    content = <p>Error: {error}</p>;
  }

  return (
    <div className="status-container">
      <h2>Estado de la Petición</h2>
      {content}
    </div>
  );
};
```

---

## 📋 Renderizado de Listas

```tsx
// QUÉ: Renderizar arrays de elementos
// PARA: Mostrar listas dinámicas
// IMPACTO: Patrón fundamental en React

interface Item {
  id: number;
  name: string;
}

interface ListProps {
  items: Item[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        // ⚠️ IMPORTANTE: Cada elemento en una lista necesita una key única
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

// Uso
const items: Item[] = [
  { id: 1, name: 'Manzana' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cereza' },
];

<List items={items} />;
```

**⚠️ Reglas para `key`:**

- Debe ser **única** entre hermanos (no necesariamente global)
- Debe ser **estable** (no cambiar entre renders)
- ❌ **NO usar el índice** como key si el orden puede cambiar
- ✅ Usar **IDs únicos** de tus datos

---

## 🧩 Fragmentos (Fragments)

Los fragmentos permiten agrupar elementos sin agregar nodos extra al DOM.

```tsx
// QUÉ: Uso de fragmentos para evitar divs innecesarios
// PARA: Mantener el DOM limpio
// IMPACTO: Mejor rendimiento y HTML semántico

// Sintaxis corta (más común)
const ShortFragment = () => {
  return (
    <>
      <h1>Título</h1>
      <p>Descripción</p>
    </>
  );
};

// Sintaxis larga (cuando necesitas key)
import { Fragment } from 'react';

interface ColumnProps {
  columns: Array<{ id: number; title: string; description: string }>;
}

const Table: React.FC<ColumnProps> = ({ columns }) => {
  return (
    <table>
      <tbody>
        {columns.map((col) => (
          // Fragment con key (para listas)
          <Fragment key={col.id}>
            <tr>
              <td>{col.title}</td>
            </tr>
            <tr>
              <td>{col.description}</td>
            </tr>
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};
```

**Cuándo usar Fragments:**

- ✅ Cuando no quieres agregar un `<div>` extra
- ✅ En listas donde necesitas agrupar múltiples elementos
- ✅ Para mantener HTML semántico (ej: `<dl>`, `<table>`)

---

## ⚡ JSX es Solo Sintaxis Sugar

JSX no es mágico, es solo una forma más legible de escribir `React.createElement`.

```tsx
// QUÉ: Equivalencia entre JSX y React.createElement
// PARA: Entender que JSX no es obligatorio
// IMPACTO: Debugging más efectivo

// Con JSX (recomendado)
const element1 = (
  <div className="container">
    <h1>Hola, {name}</h1>
    <button onClick={handleClick}>Click</button>
  </div>
);

// Sin JSX (equivalente, pero menos legible)
const element2 = React.createElement(
  'div',
  { className: 'container' },
  React.createElement('h1', null, 'Hola, ', name),
  React.createElement('button', { onClick: handleClick }, 'Click'),
);

// Ambos producen exactamente el mismo resultado
```

---

## 🎨 Expresiones vs Sentencias

En `{}` solo puedes usar **expresiones**, no **sentencias**.

```tsx
// QUÉ: Diferencia entre expresiones y sentencias en JSX
// PARA: Evitar errores de sintaxis
// IMPACTO: Entender qué puedes poner dentro de {}

const Example = () => {
  const score = 85;

  return (
    <div>
      {/* ✅ EXPRESIONES (retornan un valor) */}
      {score > 50 ? 'Aprobado' : 'Reprobado'}
      {Math.max(10, 20)}
      {[1, 2, 3].map((n) => n * 2)}
      {score}

      {/* ❌ SENTENCIAS (no retornan valor) */}
      {/* {if (score > 50) { return 'Aprobado' }} */}
      {/* {for (let i = 0; i < 10; i++) {}} */}
      {/* {const result = score * 2} */}

      {/* ✅ Alternativa: usar IIFE (Immediately Invoked Function Expression) */}
      {(() => {
        if (score > 90) return 'Excelente';
        if (score > 70) return 'Bueno';
        return 'Regular';
      })()}
    </div>
  );
};
```

---

## 🔒 Escapado Automático

React escapa automáticamente valores para prevenir ataques XSS.

```tsx
// QUÉ: React escapa valores automáticamente
// PARA: Prevenir inyección de scripts maliciosos (XSS)
// IMPACTO: Seguridad por defecto

const UserInput = () => {
  // Imagina que esto viene de un input del usuario
  const maliciousInput = '<script>alert("Hacked!")</script>';

  return (
    <div>
      {/* ✅ React escapa el contenido, se muestra como texto */}
      <p>{maliciousInput}</p>
      {/* Renderiza: <p>&lt;script&gt;alert("Hacked!")&lt;/script&gt;</p> */}

      {/* ⚠️ Si REALMENTE necesitas HTML (cuidado) */}
      <div dangerouslySetInnerHTML={{ __html: maliciousInput }} />
      {/* ⚠️ Solo usa esto con contenido sanitizado y confiable */}
    </div>
  );
};
```

---

## 📱 Ejemplo Completo: Tarjeta de Usuario

```tsx
// QUÉ: Ejemplo completo que integra todos los conceptos
// PARA: Ver cómo se usa JSX/TSX en un componente real
// IMPACTO: Patrón común que usarás constantemente

import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  isOnline: boolean;
  roles: string[];
}

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const { id, name, email, avatar, isOnline, roles } = user;

  const handleDelete = () => {
    if (confirm(`¿Eliminar a ${name}?`)) {
      onDelete(id);
    }
  };

  return (
    <div
      className="user-card"
      data-user-id={id}>
      {/* Imagen con atributos dinámicos */}
      <img
        src={avatar}
        alt={`Avatar de ${name}`}
        className="user-avatar"
        width={80}
        height={80}
      />

      {/* Información del usuario */}
      <div className="user-info">
        <h3>{name}</h3>
        <p className="user-email">{email}</p>

        {/* Renderizado condicional con && */}
        {isOnline && <span className="badge-online">En línea</span>}

        {/* Lista de roles */}
        {roles.length > 0 && (
          <ul className="user-roles">
            {roles.map((role, index) => (
              <li key={`${id}-${role}-${index}`}>{role}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Botón con event handler */}
      <button
        className="btn-delete"
        onClick={handleDelete}
        aria-label={`Eliminar a ${name}`}>
        Eliminar
      </button>
    </div>
  );
};

export default UserCard;
```

---

## ✅ Checklist de Verificación

Después de estudiar este tema, debes ser capaz de:

- [ ] Explicar la diferencia entre JSX y TSX
- [ ] Escribir elementos JSX correctamente
- [ ] Usar expresiones JavaScript dentro de JSX con `{}`
- [ ] Aplicar estilos inline con sintaxis de objetos
- [ ] Usar `className` en lugar de `class`
- [ ] Renderizar condicionalmente con operadores ternarios y `&&`
- [ ] Renderizar listas con `.map()` y keys únicas
- [ ] Usar fragmentos (`<>`) para evitar divs innecesarios
- [ ] Entender que JSX se compila a `React.createElement`
- [ ] Diferenciar entre expresiones y sentencias

---

## 📚 Recursos Adicionales

- **React Docs - JSX**: https://react.dev/learn/writing-markup-with-jsx
- **TypeScript + React**: https://react-typescript-cheatsheet.netlify.app/
- **Babel REPL** (ver compilación de JSX): https://babeljs.io/repl

---

## 🔗 Navegación

[⬅️ Atrás: Introducción a React y Vite](./01-introduccion-react-vite.md) | [➡️ Siguiente: Componentes Funcionales](./03-componentes-funcionales-typescript.md)
