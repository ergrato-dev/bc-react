# 📖 Glosario de Términos - Semana 02

Definiciones de términos clave de React y TypeScript cubiertos en esta semana.

---

## 📋 Índice Alfabético

[A](#a) | [B](#b) | [C](#c) | [D](#d) | [E](#e) | [F](#f) | [H](#h) | [I](#i) | [J](#j) | [N](#n) | [P](#p) | [R](#r) | [S](#s) | [T](#t) | [U](#u) | [V](#v)

---

## A

### Arrow Function (Función Flecha)

**Definición**: Sintaxis concisa para escribir funciones en JavaScript/TypeScript.

**Ejemplo**:

```typescript
// Función tradicional
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const add = (a: number, b: number): number => a + b;
```

**Ventajas**:

- Sintaxis más corta
- No tiene su propio `this` (útil en React)
- Ideal para callbacks

**Ver también**: [Function](#function), [Callback](#callback)

---

## B

### Build Tool (Herramienta de Construcción)

**Definición**: Software que procesa código fuente y lo convierte en archivos optimizados para producción.

**Ejemplos comunes**:

- **Vite**: Build tool moderno y rápido (usado en este bootcamp)
- **Webpack**: Bundler clásico
- **Rollup**: Para librerías

**Funciones**:

- Transpilación (TypeScript → JavaScript)
- Bundling (combinar archivos)
- Minificación (reducir tamaño)
- Hot Module Replacement (HMR)

**Ejemplo Vite**:

```bash
# Desarrollo
pnpm dev

# Producción
pnpm build
```

**Ver también**: [Transpilación](#transpilación), [Bundling](#bundling)

---

### Bundling

**Definición**: Proceso de combinar múltiples archivos JavaScript/CSS en uno o pocos archivos optimizados.

**Por qué es necesario**:

- Reduce número de peticiones HTTP
- Elimina código no usado (tree-shaking)
- Optimiza tamaño final

**Herramientas**: Vite, Webpack, Rollup, esbuild

**Ver también**: [Build Tool](#build-tool-herramienta-de-construcción)

---

## C

### Callback

**Definición**: Función que se pasa como argumento a otra función para ser ejecutada después.

**Ejemplo en React**:

```typescript
// onClick recibe un callback
<button onClick={() => console.log('Clicked!')}>
  Click me
</button>

// onChange recibe un callback
<input onChange={(e) => setValue(e.target.value)} />
```

**Uso común**:

- Event handlers
- Array methods (map, filter)
- Funciones asíncronas

**Ver también**: [Event Handler](#event-handler), [Arrow Function](#arrow-function-función-flecha)

---

### Component (Componente)

**Definición**: Pieza reutilizable e independiente de UI en React. Puede ser una función o clase que retorna JSX.

**Tipos**:

- **Funcionales**: Funciones que retornan JSX (moderno)
- **Clase**: Clases que extienden React.Component (legacy)

**Ejemplo**:

```typescript
// Componente funcional
const Button: React.FC = () => {
  return <button>Click me</button>;
};

// Con props
interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};
```

**Características**:

- Nombre en PascalCase
- Retorna JSX
- Puede tener estado y props
- Composable y reutilizable

**Ver también**: [JSX](#jsx), [Props](#props), [State](#state)

---

### Controlled Component (Componente Controlado)

**Definición**: Input cuyo valor es controlado por React mediante state.

**Ejemplo**:

```typescript
const [name, setName] = useState<string>('');

<input
  type="text"
  value={name}  // Controlado por state
  onChange={(e) => setName(e.target.value)}
/>
```

**Ventajas**:

- React es la "fuente de verdad"
- Fácil validación
- Fácil manipulación del valor

**Contrario**: Uncontrolled Component (usa refs, no state)

**Ver también**: [State](#state), [useState](#usestate)

---

## D

### Destructuring (Desestructuración)

**Definición**: Sintaxis JavaScript para extraer valores de objetos o arrays.

**Ejemplos**:

```typescript
// Desestructuración de objeto
const user = { name: 'Juan', age: 25 };
const { name, age } = user;

// Desestructuración de props
const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

// Desestructuración de array (useState)
const [count, setCount] = useState<number>(0);
```

**Beneficios**:

- Código más limpio
- Menos repetición
- Estándar en React

**Ver también**: [Props](#props), [useState](#usestate)

---

## E

### Event (Evento)

**Definición**: Acción que ocurre en el navegador (click, input, submit, etc.).

**Eventos comunes en React**:

- `onClick`: Click en elemento
- `onChange`: Cambio en input
- `onSubmit`: Envío de formulario
- `onMouseEnter`: Mouse sobre elemento
- `onKeyDown`: Tecla presionada

**Ejemplo**:

```typescript
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Button clicked!', e);
};

<button onClick={handleClick}>Click</button>
```

**Ver también**: [Event Handler](#event-handler), [SyntheticEvent](#syntheticevent)

---

### Event Handler (Manejador de Eventos)

**Definición**: Función que se ejecuta cuando ocurre un evento.

**Convención de nombres**: `handle` + nombre del evento (handleClick, handleChange, handleSubmit)

**Ejemplo**:

```typescript
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Form submitted!');
};

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

**Buenas prácticas**:

- Tipar correctamente el evento
- Usar `preventDefault()` cuando sea necesario
- Extraer lógica compleja a funciones separadas

**Ver también**: [Event](#event-evento), [SyntheticEvent](#syntheticevent)

---

## F

### Fragment

**Definición**: Componente de React que permite agrupar elementos sin agregar nodos extra al DOM.

**Sintaxis**:

```typescript
// Sintaxis completa
<React.Fragment>
  <h1>Title</h1>
  <p>Paragraph</p>
</React.Fragment>

// Sintaxis corta
<>
  <h1>Title</h1>
  <p>Paragraph</p>
</>
```

**Uso**: Cuando necesitas retornar múltiples elementos sin wrapper div

**Ver también**: [JSX](#jsx), [Component](#component-componente)

---

### Function Component (Componente Funcional)

**Definición**: Componente React definido como función que retorna JSX.

**Características**:

- Forma moderna de crear componentes (desde React 16.8)
- Usa hooks para estado y efectos
- Más simple que componentes de clase

**Ejemplo**:

```typescript
const Greeting: React.FC<{ name: string }> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
```

**Ventajas**:

- Menos código
- Más fácil de testear
- Mejor performance
- Hooks disponibles

**Ver también**: [Component](#component-componente), [Hooks](#hooks)

---

## H

### Hook

**Definición**: Función especial de React que permite "enganchar" funcionalidades como estado y efectos en componentes funcionales.

**Hooks básicos**:

- `useState`: Agregar estado
- `useEffect`: Efectos secundarios
- `useContext`: Acceder a contexto

**Hooks adicionales**:

- `useReducer`: Estado complejo
- `useCallback`: Memorizar funciones
- `useMemo`: Memorizar valores
- `useRef`: Referencias mutables

**Reglas**:

1. Solo llamar en el nivel superior (no en loops, ifs, etc.)
2. Solo llamar desde componentes funcionales o custom hooks

**Ejemplo**:

```typescript
const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};
```

**Ver también**: [useState](#usestate), [Component](#component-componente)

---

### Hot Module Replacement (HMR)

**Definición**: Característica que actualiza módulos en el navegador sin recargar la página completa.

**Beneficios**:

- Desarrollo más rápido
- Preserva el estado de la aplicación
- Feedback instantáneo

**Vite HMR**:

- Extremadamente rápido (usa ESM nativo)
- Configurado automáticamente
- Actualiza solo lo que cambió

**Experiencia**:

```
Editas un componente → Se ve en el navegador en <100ms
```

**Ver también**: [Build Tool](#build-tool-herramienta-de-construcción), [Vite](#vite)

---

## I

### Immutability (Inmutabilidad)

**Definición**: Principio de no modificar datos existentes, sino crear nuevos con los cambios.

**Por qué es importante en React**:

- React detecta cambios comparando referencias
- Previene bugs sutiles
- Mejora performance

**Ejemplo**:

```typescript
// ❌ MAL - Mutación directa
const addItem = () => {
  items.push(newItem); // Muta el array original
  setItems(items);
};

// ✅ BIEN - Inmutabilidad
const addItem = () => {
  setItems([...items, newItem]); // Nuevo array
};

// ❌ MAL - Mutación de objeto
const updateUser = () => {
  user.name = 'New name'; // Muta el objeto
  setUser(user);
};

// ✅ BIEN - Inmutabilidad
const updateUser = () => {
  setUser({ ...user, name: 'New name' }); // Nuevo objeto
};
```

**Operadores útiles**:

- Spread operator (`...`)
- Array methods que retornan nuevo array (map, filter)
- Object.assign, Object spread

**Ver también**: [State](#state), [useState](#usestate)

---

### Interface

**Definición**: Estructura TypeScript que define la forma de un objeto.

**Ejemplo en React**:

```typescript
// Interface para props
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean; // opcional
}

// Interface para estado
interface User {
  id: number;
  name: string;
  email: string;
}
```

**Interface vs Type**:

- Interface: Para objetos, extendible
- Type: Para unions, intersections, primitivos

**Ver también**: [Props](#props), [TypeScript](#typescript)

---

## J

### JSX

**Definición**: Extensión de sintaxis JavaScript que permite escribir HTML dentro de JavaScript/TypeScript.

**Características**:

- Parece HTML pero es JavaScript
- Transpilado a `React.createElement()`
- Permite expresiones JavaScript con `{}`

**Ejemplo**:

```typescript
// JSX
const element = <h1>Hello, {name}!</h1>;

// Se transpila a:
const element = React.createElement('h1', null, 'Hello, ', name, '!');
```

**Reglas**:

- Un solo elemento raíz (o usar Fragment)
- Cerrar todas las etiquetas
- `className` en lugar de `class`
- `htmlFor` en lugar de `for`
- Atributos en camelCase

**Expresiones en JSX**:

```typescript
<div>
  {/* Comentario */}
  <h1>{title}</h1>
  <p>{isActive ? 'Active' : 'Inactive'}</p>
  <ul>
    {items.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
</div>
```

**Ver también**: [TSX](#tsx), [Component](#component-componente)

---

## N

### Node

**Definición**: En el contexto del DOM, cualquier elemento en el árbol del documento (elemento, texto, comentario, etc.).

**En React**:

- React crea un Virtual DOM con nodos
- Cada componente se convierte en uno o más nodos
- React actualiza solo los nodos que cambiaron

**Tipos de nodos**:

- Element nodes: `<div>`, `<p>`, etc.
- Text nodes: Contenido de texto
- Comment nodes: `<!-- comment -->`

**Ver también**: [Virtual DOM](#virtual-dom), [Component](#component-componente)

---

## P

### Props

**Definición**: Argumentos que se pasan a componentes React para configurar su comportamiento o apariencia.

**Características**:

- Read-only (inmutables)
- Se pasan de padre a hijo
- Flujo unidireccional de datos

**Ejemplo**:

```typescript
// Definir interface de props
interface UserCardProps {
  name: string;
  age: number;
  email: string;
}

// Componente que recibe props
const UserCard: React.FC<UserCardProps> = ({ name, age, email }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

// Uso del componente
<UserCard name="Juan" age={25} email="juan@example.com" />
```

**Props especiales**:

- `children`: Contenido entre tags de apertura/cierre
- `key`: Identificador único en listas

**Ver también**: [Component](#component-componente), [State](#state), [Interface](#interface)

---

## R

### Re-render (Re-renderizado)

**Definición**: Proceso de volver a ejecutar un componente para actualizar su UI.

**Causas de re-render**:

1. Cambio de state (useState)
2. Cambio de props
3. Re-render del componente padre
4. Cambio de context

**Ejemplo**:

```typescript
const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  console.log('Component rendered!'); // Se ejecuta en cada render

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count} {/* Al cambiar count, el componente re-renderiza */}
    </button>
  );
};
```

**Importante**:

- Re-renders son normales y necesarios
- React optimiza el proceso
- Solo el Virtual DOM cambia, no todo el DOM real

**Ver también**: [State](#state), [Virtual DOM](#virtual-dom), [useState](#usestate)

---

### React

**Definición**: Librería JavaScript para construir interfaces de usuario mediante componentes.

**Características clave**:

- Declarativo: Describes qué quieres, no cómo lograrlo
- Basado en componentes
- Learn once, write anywhere

**Historia**:

- Creado por Facebook (Meta) en 2013
- Open source
- Mantenido por Meta + comunidad

**Versión actual (bootcamp)**: React 18+

**Ver también**: [Component](#component-componente), [Virtual DOM](#virtual-dom)

---

## S

### State (Estado)

**Definición**: Datos que cambian con el tiempo y afectan lo que se renderiza en pantalla.

**Características**:

- Mutable (mediante función setter)
- Local al componente
- Privado (no accesible desde fuera)
- Causa re-render cuando cambia

**Ejemplo**:

```typescript
const [count, setCount] = useState<number>(0);
// count: valor actual
// setCount: función para actualizarlo
```

**State vs Props**:

- **State**: Datos del componente, puede cambiar
- **Props**: Datos del padre, read-only

**Ver también**: [useState](#usestate), [Props](#props), [Re-render](#re-render-re-renderizado)

---

### Spread Operator (Operador de Propagación)

**Definición**: Sintaxis JavaScript (`...`) que expande elementos de un array u objeto.

**Usos en React**:

```typescript
// Copiar array (inmutabilidad)
const newItems = [...items, newItem];

// Copiar objeto
const newUser = { ...user, name: 'New name' };

// Pasar props
const props = { name: 'Juan', age: 25 };
<UserCard {...props} />

// Combinar arrays
const combined = [...array1, ...array2];
```

**Ventaja**: Mantener inmutabilidad sin mutaciones

**Ver también**: [Immutability](#immutability-inmutabilidad), [State](#state-estado)

---

### SyntheticEvent

**Definición**: Wrapper de React alrededor de eventos nativos del navegador para garantizar compatibilidad cross-browser.

**Tipos comunes**:

```typescript
React.MouseEvent<HTMLButtonElement>;
React.ChangeEvent<HTMLInputElement>;
React.FormEvent<HTMLFormElement>;
React.KeyboardEvent<HTMLInputElement>;
```

**Ejemplo**:

```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};

<input onChange={handleChange} />
```

**Diferencia con eventos nativos**:

- API consistente entre navegadores
- Pool de eventos (reusados)
- Mismo comportamiento que eventos nativos

**Ver también**: [Event](#event-evento), [Event Handler](#event-handler-manejador-de-eventos)

---

## T

### Transpilación

**Definición**: Proceso de convertir código de un lenguaje a otro (TypeScript → JavaScript, JSX → JavaScript).

**Ejemplo**:

```typescript
// TypeScript + JSX (TSX)
const Button: React.FC<{ text: string }> = ({ text }) => {
  return <button>{text}</button>;
};

// Transpilado a JavaScript
const Button = ({ text }) => {
  return React.createElement('button', null, text);
};
```

**Herramientas**:

- TypeScript Compiler (tsc)
- Babel
- esbuild (usado por Vite)

**Ver también**: [Build Tool](#build-tool-herramienta-de-construcción), [TSX](#tsx)

---

### TSX

**Definición**: JSX con TypeScript. Extensión de archivo `.tsx` para componentes React escritos en TypeScript.

**Diferencia con JSX**:

- JSX: `.jsx` (JavaScript)
- TSX: `.tsx` (TypeScript)

**Ejemplo**:

```typescript
// archivo: Button.tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
```

**Ver también**: [JSX](#jsx), [TypeScript](#typescript), [Component](#component-componente)

---

### TypeScript

**Definición**: Superset de JavaScript que agrega tipos estáticos.

**Ventajas en React**:

- Detección de errores en tiempo de desarrollo
- Autocompletado inteligente
- Refactoring más seguro
- Documentación implícita

**Ejemplo**:

```typescript
// JavaScript - sin tipos
const add = (a, b) => a + b;
add(5, '10'); // Bug: retorna '510' en lugar de 15

// TypeScript - con tipos
const add = (a: number, b: number): number => a + b;
add(5, '10'); // Error de compilación ✅
```

**Configuración**: `tsconfig.json`

**Ver también**: [Interface](#interface), [TSX](#tsx)

---

## U

### useState

**Definición**: Hook de React que permite agregar estado a componentes funcionales.

**Sintaxis**:

```typescript
const [state, setState] = useState<Type>(initialValue);
```

**Ejemplo completo**:

```typescript
import { useState } from 'react';

const Counter: React.FC = () => {
  // state: valor actual
  // setState: función para actualizarlo
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
```

**Actualización funcional**:

```typescript
// Basado en valor anterior
setCount((prevCount) => prevCount + 1);
```

**Múltiples estados**:

```typescript
const [name, setName] = useState<string>('');
const [age, setAge] = useState<number>(0);
const [active, setActive] = useState<boolean>(false);
```

**Ver también**: [State](#state-estado), [Hook](#hook), [Re-render](#re-render-re-renderizado)

---

## V

### Virtual DOM

**Definición**: Representación en memoria del DOM real. React mantiene una copia virtual del DOM para optimizar actualizaciones.

**Cómo funciona**:

1. Componente cambia (state/props)
2. React crea nuevo Virtual DOM
3. React compara (diffing) con Virtual DOM anterior
4. React actualiza solo lo que cambió en DOM real (reconciliation)

**Ventajas**:

- Actualizaciones rápidas
- Cambios mínimos al DOM real
- Mejor performance

**Analogía**:

- DOM real = Casa física
- Virtual DOM = Planos de la casa
- Es más rápido dibujar planos que construir casas

**Ver también**: [React](#react), [Re-render](#re-render-re-renderizado), [Component](#component-componente)

---

### Vite

**Definición**: Build tool moderno y extremadamente rápido para aplicaciones frontend.

**Características**:

- HMR instantáneo
- ESM nativo en desarrollo
- Build optimizado con Rollup
- Soporte TypeScript sin configuración

**Comandos**:

```bash
pnpm create vite@latest  # Crear proyecto
pnpm dev                 # Desarrollo
pnpm build               # Producción
pnpm preview             # Preview producción
```

**Ventajas sobre Webpack**:

- 10-100x más rápido en desarrollo
- Configuración mínima
- Mejor experiencia de desarrollo

**Usado en este bootcamp**: Todos los proyectos React usan Vite

**Ver también**: [Build Tool](#build-tool-herramienta-de-construcción), [HMR](#hot-module-replacement-hmr)

---

## 📊 Términos por Categoría

### React Core

- [React](#react)
- [Component](#component-componente)
- [Props](#props)
- [State](#state-estado)
- [JSX](#jsx)
- [TSX](#tsx)
- [Virtual DOM](#virtual-dom)
- [Re-render](#re-render-re-renderizado)

### Hooks

- [Hook](#hook)
- [useState](#usestate)

### TypeScript

- [TypeScript](#typescript)
- [Interface](#interface)
- [Transpilación](#transpilación)

### Eventos

- [Event](#event-evento)
- [Event Handler](#event-handler-manejador-de-eventos)
- [SyntheticEvent](#syntheticevent)

### JavaScript/TypeScript Moderno

- [Arrow Function](#arrow-function-función-flecha)
- [Destructuring](#destructuring-desestructuración)
- [Spread Operator](#spread-operator-operador-de-propagación)
- [Immutability](#immutability-inmutabilidad)

### Herramientas

- [Vite](#vite)
- [Build Tool](#build-tool-herramienta-de-construcción)
- [HMR](#hot-module-replacement-hmr)
- [Bundling](#bundling)

---

## 🔗 Navegación

- [← Volver a Recursos](../4-recursos/)
- [↑ Volver a README Principal](../README.md)
