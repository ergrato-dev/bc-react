# Estado Local con useState

## 🎯 Objetivos de Aprendizaje

- Entender qué es el estado en React
- Usar el hook `useState` con TypeScript
- Actualizar estado de forma inmutable
- Manejar estado de objetos y arrays
- Trabajar con múltiples estados
- Entender el ciclo de actualización del estado
- Aplicar patrones comunes de estado

---

## � Diagrama: Flujo de useState

![Flujo de useState](../0-assets/05-usestate-flow.svg)

---

## �📋 ¿Qué es el Estado?

El **estado** (state) es información que el componente puede recordar y que, cuando cambia, provoca que el componente se re-renderice.

```tsx
// QUÉ: Diferencia entre props y estado
// PARA: Entender cuándo usar cada uno
// IMPACTO: Arquitectura correcta de componentes

// PROPS (inmutables, vienen del padre)
interface ButtonProps {
  text: string; // No puedes cambiar esto dentro del componente
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

// ESTADO (mutable, interno del componente)
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); // ✅ Puedes cambiar esto

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
```

**Props vs Estado:**

- **Props**: Datos que vienen del componente padre (inmutables)
- **Estado**: Datos que el componente maneja internamente (mutables con `setState`)

---

## 🪝 El Hook useState

`useState` es un **Hook** que permite agregar estado a componentes funcionales.

```tsx
// QUÉ: Sintaxis básica de useState
// PARA: Declarar variables de estado
// IMPACTO: Componentes interactivos con memoria

import React, { useState } from 'react';

const Example: React.FC = () => {
  // Sintaxis: const [variable, función] = useState(valorInicial);
  const [count, setCount] = useState<number>(0);
  //      ↑ variable     ↑ función para cambiarla  ↑ valor inicial

  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Click aquí</button>
    </div>
  );
};
```

**Partes del useState:**

1. **Variable de estado**: `count` - el valor actual
2. **Función setter**: `setCount` - para actualizar el valor
3. **Valor inicial**: `0` - valor cuando el componente se monta

---

## 🎯 Tipado de useState

### Tipos Primitivos

```tsx
// QUÉ: Tipar useState con tipos primitivos
// PARA: TypeScript infiere o valida el tipo
// IMPACTO: Type safety en el estado

import React, { useState } from 'react';

const TypedState: React.FC = () => {
  // TypeScript infiere el tipo automáticamente
  const [count, setCount] = useState(0); // number
  const [name, setName] = useState('Ana'); // string
  const [isActive, setIsActive] = useState(true); // boolean

  // Tipo explícito (útil cuando el valor inicial es null)
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState<string>('');

  // Tipo explícito con valor inicial null
  const [user, setUser] = useState<string | null>(null);

  return <div>Estado tipado</div>;
};
```

### Tipos Complejos

```tsx
// QUÉ: Tipar useState con objetos, arrays, interfaces
// PARA: Manejar estado complejo con type safety
// IMPACTO: Estructuras de datos seguras

import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const ComplexState: React.FC = () => {
  // Objeto
  const [user, setUser] = useState<User>({
    id: 1,
    name: 'Ana',
    email: 'ana@example.com',
  });

  // Array de strings
  const [tags, setTags] = useState<string[]>(['react', 'typescript']);

  // Array de objetos
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Ana', email: 'ana@example.com' },
    { id: 2, name: 'Carlos', email: 'carlos@example.com' },
  ]);

  // Objeto con propiedades opcionales
  interface FormState {
    username: string;
    email: string;
    age?: number;
  }

  const [form, setForm] = useState<FormState>({
    username: '',
    email: '',
  });

  return <div>Estado complejo</div>;
};
```

---

## 🔄 Actualizar Estado

### Actualización Directa

```tsx
// QUÉ: Actualizar estado con valor directo
// PARA: Cuando el nuevo valor no depende del anterior
// IMPACTO: Forma más simple de actualizar estado

import React, { useState } from 'react';

const DirectUpdate: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  const handleReset = () => {
    setName(''); // Valor directo
    setAge(0); // Valor directo
  };

  const handleSetSpecific = () => {
    setName('Ana'); // Valor directo
    setAge(25); // Valor directo
  };

  return (
    <div>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSetSpecific}>Set Ana, 25</button>
    </div>
  );
};
```

### Actualización Funcional

```tsx
// QUÉ: Actualizar estado basándose en el valor anterior
// PARA: Cuando el nuevo valor depende del actual
// IMPACTO: Actualizaciones más seguras y predecibles

import React, { useState } from 'react';

const FunctionalUpdate: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // ✅ CORRECTO: Actualización funcional
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // ⚠️ Puede fallar con múltiples actualizaciones rápidas
  const incrementDirect = () => {
    setCount(count + 1);
  };

  // Ejemplo: múltiples incrementos
  const incrementByThree = () => {
    // ✅ CORRECTO: Cada actualización ve el valor más reciente
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // Resultado: count + 3

    // ❌ INCORRECTO: Las tres usan el mismo valor de count
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // Resultado: count + 1 (no +3)
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={incrementByThree}>+3</button>
    </div>
  );
};
```

---

## 📦 Estado de Objetos

```tsx
// QUÉ: Actualizar estado de objetos de forma inmutable
// PARA: Mantener la inmutabilidad requerida por React
// IMPACTO: React detecta cambios correctamente

import React, { useState } from 'react';

interface User {
  name: string;
  age: number;
  email: string;
}

const ObjectState: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: 'Ana',
    age: 25,
    email: 'ana@example.com',
  });

  // ❌ INCORRECTO: Mutación directa
  const updateNameWrong = () => {
    user.name = 'Carlos'; // ❌ No hacer esto
    setUser(user); // React no detectará el cambio
  };

  // ✅ CORRECTO: Crear nuevo objeto con spread operator
  const updateName = () => {
    setUser({
      ...user, // Copia todas las propiedades
      name: 'Carlos', // Sobrescribe solo name
    });
  };

  const updateAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  const updateMultiple = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name: 'Luis',
      age: 30,
    }));
  };

  return (
    <div>
      <p>Nombre: {user.name}</p>
      <p>Edad: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateName}>Cambiar nombre</button>
      <button onClick={updateAge}>Incrementar edad</button>
      <button onClick={updateMultiple}>Actualizar múltiples</button>
    </div>
  );
};
```

---

## 📋 Estado de Arrays

```tsx
// QUÉ: Actualizar arrays de forma inmutable
// PARA: Agregar, eliminar, actualizar elementos
// IMPACTO: Arrays reactivos sin mutaciones

import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const ArrayState: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Aprender React', completed: false },
    { id: 2, text: 'Practicar TypeScript', completed: true },
  ]);

  // Agregar elemento al final
  const addTodo = () => {
    const newTodo: Todo = {
      id: Date.now(),
      text: 'Nueva tarea',
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Agregar elemento al inicio
  const addTodoAtStart = () => {
    const newTodo: Todo = {
      id: Date.now(),
      text: 'Tarea urgente',
      completed: false,
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  // Eliminar elemento por id
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Actualizar elemento por id
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Actualizar texto de un todo
  const updateTodoText = (id: number, newText: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      ),
    );
  };

  // Limpiar todos completados
  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <div>
      <button onClick={addTodo}>Agregar tarea</button>
      <button onClick={clearCompleted}>Limpiar completadas</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

**Operaciones comunes en arrays:**

- **Agregar**: `[...array, newItem]` o `[newItem, ...array]`
- **Eliminar**: `array.filter(item => item.id !== idToRemove)`
- **Actualizar**: `array.map(item => item.id === idToUpdate ? {...item, ...changes} : item)`
- **Reemplazar**: `[...array.slice(0, index), newItem, ...array.slice(index + 1)]`

---

## 🔢 Múltiples Estados

```tsx
// QUÉ: Usar múltiples llamadas a useState
// PARA: Separar estados no relacionados
// IMPACTO: Código más claro y organizado

import React, { useState } from 'react';

const MultipleStates: React.FC = () => {
  // Estados independientes
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);

  // Cada estado se actualiza independientemente
  const handleSubmit = () => {
    console.log({ name, age, email, isSubscribed, tags });
  };

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Edad"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <label>
        <input
          type="checkbox"
          checked={isSubscribed}
          onChange={(e) => setIsSubscribed(e.target.checked)}
        />
        Suscribirse al newsletter
      </label>

      <button
        type="button"
        onClick={handleSubmit}>
        Enviar
      </button>
    </form>
  );
};
```

**¿Múltiples estados o un objeto?**

- ✅ **Múltiples estados**: Cuando los valores no están relacionados
- ✅ **Un objeto**: Cuando los valores siempre se actualizan juntos

---

## 🎨 Estado Lazy Initialization

```tsx
// QUÉ: Inicialización perezosa del estado
// PARA: Calcular valor inicial solo una vez
// IMPACTO: Mejor rendimiento cuando el cálculo es costoso

import React, { useState } from 'react';

const LazyInit: React.FC = () => {
  // ❌ INCORRECTO: Se ejecuta en cada render
  const [data, setData] = useState(calculateExpensiveValue());

  // ✅ CORRECTO: Se ejecuta solo en el primer render
  const [dataLazy, setDataLazy] = useState(() => calculateExpensiveValue());

  return <div>Datos: {dataLazy}</div>;
};

function calculateExpensiveValue(): string {
  console.log('Calculando valor costoso...');
  // Simulación de cálculo pesado
  let result = '';
  for (let i = 0; i < 1000000; i++) {
    result += 'x';
  }
  return result;
}
```

---

## ⏱️ Ciclo de Actualización del Estado

```tsx
// QUÉ: El estado se actualiza de forma asíncrona
// PARA: Entender cuándo se refleja el cambio
// IMPACTO: Evitar bugs relacionados con timing

import React, { useState } from 'react';

const AsyncUpdate: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    console.log('Antes:', count); // 0

    setCount(count + 1);

    console.log('Después:', count); // ❌ Todavía 0 (no se actualizó aún)

    // El nuevo valor estará disponible en el siguiente render
  };

  // Para ejecutar código después de la actualización, usa useEffect
  // (lo verás en semanas futuras)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};
```

**Importante:**

- ⚠️ `setState` no actualiza el valor inmediatamente
- ⚠️ El nuevo valor estará disponible en el siguiente render
- ⚠️ Si necesitas el nuevo valor, usa actualización funcional

---

## 🎯 Patrones Comunes

### Toggle Boolean

```tsx
// QUÉ: Alternar valor booleano
// PARA: Modals, switches, visibilidad
// IMPACTO: Patrón muy común en UIs

import React, { useState } from 'react';

const Toggle: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <button onClick={toggle}>{isOpen ? 'Cerrar' : 'Abrir'}</button>
      {isOpen && <div className="modal">Contenido del modal</div>}
    </div>
  );
};
```

### Contador con Límites

```tsx
// QUÉ: Contador con valores mínimo y máximo
// PARA: Inputs numéricos, paginación
// IMPACTO: Validación de rangos

import React, { useState } from 'react';

const BoundedCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const MIN = 0;
  const MAX = 10;

  const increment = () => {
    setCount((prev) => Math.min(prev + 1, MAX));
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - 1, MIN));
  };

  return (
    <div>
      <button
        onClick={decrement}
        disabled={count === MIN}>
        -
      </button>
      <span>{count}</span>
      <button
        onClick={increment}
        disabled={count === MAX}>
        +
      </button>
    </div>
  );
};
```

### Input Controlado

```tsx
// QUÉ: Input cuyo valor está controlado por React
// PARA: Formularios, validación en tiempo real
// IMPACTO: Patrón fundamental para formularios

import React, { useState } from 'react';

const ControlledInput: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Escribe algo..."
      />
      <p>Escribiste: {text}</p>
      <p>Longitud: {text.length}</p>
    </div>
  );
};
```

### Estado Derivado

```tsx
// QUÉ: Calcular valores basados en el estado
// PARA: Evitar estado duplicado
// IMPACTO: Código más simple y sin inconsistencias

import React, { useState } from 'react';

const DerivedState: React.FC = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5]);

  // ❌ INCORRECTO: Duplicar información
  // const [total, setTotal] = useState<number>(15);

  // ✅ CORRECTO: Calcular en cada render
  const total = items.reduce((sum, item) => sum + item, 0);
  const average = total / items.length;
  const max = Math.max(...items);
  const min = Math.min(...items);

  return (
    <div>
      <p>Items: {items.join(', ')}</p>
      <p>Total: {total}</p>
      <p>Promedio: {average.toFixed(2)}</p>
      <p>Máximo: {max}</p>
      <p>Mínimo: {min}</p>
    </div>
  );
};
```

---

## 🔍 Debugging de Estado

```tsx
// QUÉ: Técnicas para debuggear estado
// PARA: Identificar problemas con actualizaciones de estado
// IMPACTO: Desarrollo más eficiente

import React, { useState, useEffect } from 'react';

const DebugState: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // 1. Console.log directo
  console.log('Render - Count:', count);

  // 2. useEffect para ver cambios (lo verás en detalle más adelante)
  useEffect(() => {
    console.log('Count cambió a:', count);
  }, [count]);

  // 3. React DevTools (extensión del navegador)
  // - Ver estado en tiempo real
  // - Editar estado manualmente
  // - Ver historial de renders

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
```

---

## 🚀 Ejemplo Completo: Todo List

```tsx
// QUÉ: Aplicación completa de todos con useState
// PARA: Integrar todos los conceptos aprendidos
// IMPACTO: Patrón común en aplicaciones React

import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Agregar todo
  const addTodo = () => {
    if (input.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  // Toggle completado
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Eliminar todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Estado derivado: filtrar todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Estado derivado: contadores
  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      {/* Input */}
      <div className="add-todo">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="¿Qué necesitas hacer?"
        />
        <button onClick={addTodo}>Agregar</button>
      </div>

      {/* Filtros */}
      <div className="filters">
        <button onClick={() => setFilter('all')}>Todos ({todos.length})</button>
        <button onClick={() => setFilter('active')}>
          Activos ({activeCount})
        </button>
        <button onClick={() => setFilter('completed')}>
          Completados ({completedCount})
        </button>
      </div>

      {/* Lista */}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>×</button>
          </li>
        ))}
      </ul>

      {filteredTodos.length === 0 && (
        <p className="empty">No hay tareas {filter !== 'all' && filter}</p>
      )}
    </div>
  );
};

export default TodoApp;
```

---

## ✅ Checklist de Verificación

Después de estudiar este tema, debes ser capaz de:

- [ ] Usar `useState` para agregar estado a componentes
- [ ] Tipar estado con TypeScript (primitivos, objetos, arrays)
- [ ] Actualizar estado de forma inmutable
- [ ] Usar actualización funcional cuando depende del valor anterior
- [ ] Manejar estado de objetos con spread operator
- [ ] Manejar estado de arrays (agregar, eliminar, actualizar)
- [ ] Trabajar con múltiples estados independientes
- [ ] Entender que las actualizaciones son asíncronas
- [ ] Aplicar patrones comunes (toggle, contador, inputs controlados)
- [ ] Calcular valores derivados en lugar de duplicar estado

---

## 📚 Recursos Adicionales

- **React Docs - useState**: https://react.dev/reference/react/useState
- **Managing State**: https://react.dev/learn/managing-state
- **TypeScript + useState**: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks

---

## 🔗 Navegación

[⬅️ Atrás: Props Tipado](./04-props-tipado-validacion.md) | [➡️ Siguiente: Eventos Sintéticos](./06-eventos-sinteticos-react.md)
