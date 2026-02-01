# React, Vite y JSX/TSX: Fundamentos

## 🎯 Objetivos de Aprendizaje

- Comprender qué es React y el Virtual DOM
- Conocer Vite y sus ventajas
- Dominar la sintaxis JSX/TSX
- Configurar un proyecto React + TypeScript con Vite
- Aplicar las reglas y mejores prácticas de JSX/TSX

---

## � Diagramas

### Virtual DOM

![Virtual DOM](../0-assets/01-virtual-dom.svg)

### Compilación de JSX

![Compilación de JSX](../0-assets/02-jsx-compilation.svg)

---

## �📋 ¿Qué es React?

**React** es una biblioteca de JavaScript (desarrollada por Facebook/Meta) para construir interfaces de usuario. Se centra en la **capa de vista** (UI) y es declarativo, basado en componentes y multiplataforma.

### Características Principales

- **Declarativo**: Describes cómo se ve tu UI y React la actualiza
- **Basado en Componentes**: UI dividida en piezas reutilizables
- **Virtual DOM**: Optimización de actualizaciones
- **TypeScript-friendly**: Excelente soporte de tipos

```tsx
// Componente simple React con TypeScript
import React from 'react';

const Welcome: React.FC = () => {
  return <h1>¡Hola, React con TypeScript!</h1>;
};

export default Welcome;
```

### Virtual DOM

El **Virtual DOM** es una representación en memoria del DOM real que React usa para optimizar actualizaciones.

**Proceso**:

1. Estado cambia → React crea nuevo Virtual DOM
2. Diffing → Compara con el anterior
3. Reconciliación → Calcula cambios mínimos
4. Actualización → Aplica solo lo necesario al DOM real

```tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // React solo actualiza el texto que cambió, no todo el componente
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
```

---

## ⚡ ¿Qué es Vite?

**Vite** (pronunciado "vit", francés para "rápido") es un build tool moderno creado por Evan You (creador de Vue.js).

### Vite vs Create React App

| Característica       | Vite                     | Create React App (CRA) |
| -------------------- | ------------------------ | ---------------------- |
| **Velocidad inicio** | ⚡ <1 segundo            | 🐌 10-30 segundos      |
| **HMR**              | Instantáneo              | 1-3 segundos           |
| **Build**            | esbuild (muy rápido)     | Webpack (lento)        |
| **Configuración**    | Mínima                   | Oculta                 |
| **Tamaño**           | ~15 MB                   | ~300 MB                |
| **Estado**           | ✅ Mantenido activamente | ⚠️ Deprecated          |

**¿Por qué Vite?**

- ✅ HMR (Hot Module Replacement) instantáneo
- ✅ Build optimizado con esbuild
- ✅ Soporte nativo de TypeScript
- ✅ Configuración simple
- ✅ Ecosistema moderno

### Crear Proyecto con Vite

```bash
# Crear proyecto React + TypeScript con Vite
pnpm create vite@latest my-react-app --template react-ts

# Navegar al proyecto
cd my-react-app

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

### Estructura de Proyecto Vite

```
my-react-app/
├── node_modules/
├── public/              # Assets estáticos (no procesados)
│   └── vite.svg
├── src/
│   ├── assets/         # Assets procesados por Vite
│   ├── App.tsx         # Componente principal
│   ├── App.css
│   ├── main.tsx        # Entry point
│   └── vite-env.d.ts   # Types de Vite
├── index.html          # Entrada HTML (en root, no en public/)
├── package.json
├── tsconfig.json       # Configuración TypeScript
├── tsconfig.node.json  # Config TS para Vite
└── vite.config.ts      # Configuración Vite
```

**Diferencia clave con CRA**: En Vite, `index.html` está en la raíz, no en `public/`.

---

## 🔤 JSX y TSX: Sintaxis

**JSX** (JavaScript XML) es una extensión de sintaxis para JavaScript que permite escribir estructuras similares a HTML dentro de JavaScript.

**TSX** es JSX con TypeScript. En este bootcamp usamos **TSX** exclusivamente.

### JSX vs TSX

| Aspecto         | JSX        | TSX                 |
| --------------- | ---------- | ------------------- |
| **Extensión**   | `.jsx`     | `.tsx`              |
| **Tipado**      | No         | ✅ Sí               |
| **Validación**  | En runtime | En compilación      |
| **Recomendado** | No         | ✅ Sí (profesional) |

```tsx
// JSX sin tipos
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

// TSX con tipos (✅ recomendado)
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
```

### Reglas Fundamentales de JSX/TSX

#### 1. **Un Solo Elemento Raíz**

```tsx
// ❌ INCORRECTO - múltiples raíces
const Component = () => {
  return (
    <h1>Título</h1>
    <p>Párrafo</p>
  );
};

// ✅ CORRECTO - envuelto en un div
const Component = () => {
  return (
    <div>
      <h1>Título</h1>
      <p>Párrafo</p>
    </div>
  );
};

// ✅ CORRECTO - usando Fragment (sin div extra en el DOM)
const Component = () => {
  return (
    <>
      <h1>Título</h1>
      <p>Párrafo</p>
    </>
  );
};

// ✅ CORRECTO - sintaxis explícita de Fragment
const Component = () => {
  return (
    <React.Fragment>
      <h1>Título</h1>
      <p>Párrafo</p>
    </React.Fragment>
  );
};
```

#### 2. **Cerrar Todas las Etiquetas**

```tsx
// ❌ INCORRECTO - etiquetas sin cerrar
<input type="text">
<img src="logo.png">

// ✅ CORRECTO - auto-cerradas
<input type="text" />
<img src="logo.png" />

// ✅ CORRECTO - cerradas explícitamente
<div></div>
<span></span>
```

#### 3. **camelCase para Atributos**

```tsx
// ❌ INCORRECTO - nombres HTML estándar
<div class="container" onclick={handleClick} tabindex="0">
<label for="name">Nombre:</label>
<button aria-label="cerrar">X</button>

// ✅ CORRECTO - camelCase de React
<div className="container" onClick={handleClick} tabIndex={0}>
<label htmlFor="name">Nombre:</label>
<button aria-label="cerrar">X</button>

// Excepciones: data-* y aria-* se mantienen en kebab-case
<div data-user-id="123" aria-label="menú">Contenido</div>
```

**Atributos comunes con cambio de nombre:**

| HTML        | JSX/TSX     |
| ----------- | ----------- |
| `class`     | `className` |
| `for`       | `htmlFor`   |
| `onclick`   | `onClick`   |
| `onchange`  | `onChange`  |
| `tabindex`  | `tabIndex`  |
| `maxlength` | `maxLength` |

#### 4. **Expresiones JavaScript con `{}`**

```tsx
const User: React.FC = () => {
  const name = 'Ana';
  const age = 25;
  const isActive = true;

  return (
    <div>
      {/* Variables */}
      <p>Nombre: {name}</p>

      {/* Expresiones */}
      <p>Edad: {age + 5}</p>

      {/* Condicionales ternarios */}
      <p>Estado: {isActive ? 'Activo' : 'Inactivo'}</p>

      {/* Funciones */}
      <p>Mayúsculas: {name.toUpperCase()}</p>

      {/* Template literals */}
      <p>{`Hola, ${name}!`}</p>

      {/* Renderizado condicional con && */}
      {isActive && <span>✅ Verificado</span>}

      {/* Arrays (se renderizan automáticamente) */}
      <ul>
        {['React', 'TypeScript', 'Vite'].map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};
```

**Importante**: Solo **expresiones**, no statements:

```tsx
// ❌ INCORRECTO - no se pueden usar statements
<div>
  {if (condition) { return <p>Texto</p>; }}
  {for (let i = 0; i < 10; i++) { }}
  {const x = 5;}
</div>

// ✅ CORRECTO - usar expresiones
<div>
  {condition && <p>Texto</p>}
  {Array.from({ length: 10 }, (_, i) => <p key={i}>{i}</p>)}
  {(() => { const x = 5; return <p>{x}</p>; })()}
</div>
```

#### 5. **Estilos en Línea con Objetos**

```tsx
// ❌ INCORRECTO - string como en HTML
<div style="color: red; font-size: 16px;">Texto</div>

// ✅ CORRECTO - objeto JavaScript con camelCase
<div style={{ color: 'red', fontSize: '16px' }}>Texto</div>

// ✅ Estilos dinámicos
const headerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: 'white',
  padding: '1rem',
  fontSize: '1.5rem',
};

<header style={headerStyle}>Header</header>

// ✅ Estilos condicionales
<div style={{
  color: isError ? 'red' : 'green',
  fontWeight: isImportant ? 'bold' : 'normal',
}}>
  Mensaje
</div>
```

**Propiedades CSS en JSX vs CSS**:

| CSS                | JSX (camelCase)   |
| ------------------ | ----------------- |
| `font-size`        | `fontSize`        |
| `background-color` | `backgroundColor` |
| `z-index`          | `zIndex`          |
| `border-radius`    | `borderRadius`    |

---

## 🔄 Compilación de JSX/TSX

JSX/TSX se transforma en llamadas a `React.createElement` durante la compilación.

```tsx
// Código TSX que escribes
const greeting = <h1 className="title">Hola, {name}!</h1>;

// JavaScript generado
const greeting = React.createElement(
  'h1',
  { className: 'title' },
  'Hola, ',
  name,
  '!',
);
```

**Herramientas de compilación**:

- **Vite**: Usa **esbuild** (el más rápido)
- **TypeScript Compiler**: También puede compilar TSX
- **Babel**: Usado por herramientas legacy

---

## 💡 Buenas Prácticas

### 1. Componentes Pequeños y Enfocados

```tsx
// ❌ Componente grande y complejo
const UserProfile = () => {
  return (
    <div>
      <header>...</header>
      <nav>...</nav>
      <main>...</main>
      <footer>...</footer>
    </div>
  );
};

// ✅ Dividir en componentes más pequeños
const UserProfile = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  );
};
```

### 2. Usar Fragmentos para Evitar Divs Innecesarios

```tsx
// ❌ Div extra sin propósito semántico
const List = () => (
  <div>
    <li>Item 1</li>
    <li>Item 2</li>
  </div>
);

// ✅ Fragment no agrega nodos al DOM
const List = () => (
  <>
    <li>Item 1</li>
    <li>Item 2</li>
  </>
);
```

### 3. Keys en Listas

```tsx
const users = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Luis' },
];

// ❌ INCORRECTO - usar índice como key
<ul>
  {users.map((user, index) => (
    <li key={index}>{user.name}</li>
  ))}
</ul>

// ✅ CORRECTO - usar ID único
<ul>
  {users.map(user => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>
```

### 4. Evitar Lógica Compleja en JSX

```tsx
// ❌ Lógica compleja dificulta lectura
const Component = () => (
  <div>
    {users.length > 0 && isLoggedIn && !isLoading && (
      <UserList
        users={users
          .filter((u) => u.active)
          .map((u) => ({ ...u, fullName: `${u.firstName} ${u.lastName}` }))}
      />
    )}
  </div>
);

// ✅ Extraer lógica fuera del JSX
const Component = () => {
  const showUserList = users.length > 0 && isLoggedIn && !isLoading;
  const activeUsers = users.filter((u) => u.active);
  const usersWithFullName = activeUsers.map((u) => ({
    ...u,
    fullName: `${u.firstName} ${u.lastName}`,
  }));

  return <div>{showUserList && <UserList users={usersWithFullName} />}</div>;
};
```

---

## ✅ Checklist de Verificación

Antes de continuar, asegúrate de poder:

- [ ] Explicar qué es React y el Virtual DOM
- [ ] Crear un proyecto con Vite + React + TypeScript
- [ ] Diferenciar entre JSX y TSX
- [ ] Aplicar las 5 reglas fundamentales de JSX/TSX
- [ ] Usar expresiones JavaScript en JSX con `{}`
- [ ] Renderizar listas con `map()` y `key`
- [ ] Aplicar estilos en línea con objetos
- [ ] Usar Fragments para evitar divs innecesarios
- [ ] Entender cómo se compila JSX/TSX

---

## 📚 Recursos Adicionales

- [React Docs - JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React Docs - TypeScript](https://react.dev/learn/typescript)
- [Vite Docs](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Siguiente**: [Componentes Funcionales →](./02-componentes-funcionales.md)
