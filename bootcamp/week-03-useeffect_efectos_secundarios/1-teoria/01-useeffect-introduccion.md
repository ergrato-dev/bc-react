# Introducción a useEffect

## 🎯 Objetivos de Aprendizaje

- Comprender qué es useEffect y para qué sirve
- Identificar efectos secundarios en React
- Dominar la sintaxis básica de useEffect
- Diferenciar entre renderizado y efectos
- Aplicar useEffect en casos simples

---

## � Diagrama: Ciclo de Vida de useEffect

![Ciclo de Vida de useEffect](../0-assets/01-useeffect-lifecycle.svg)

---

## �📋 ¿Qué es useEffect?

**useEffect** es un hook de React que permite ejecutar **efectos secundarios** (side effects) en componentes funcionales.

### Efectos Secundarios

Un **efecto secundario** es cualquier operación que afecta algo fuera del componente o que no está relacionada directamente con el renderizado:

**Ejemplos de efectos secundarios**:

- ✅ Fetching de datos desde una API
- ✅ Manipular el DOM directamente (document.title)
- ✅ Configurar timers (setTimeout, setInterval)
- ✅ Suscribirse a eventos (addEventListener)
- ✅ Logging y analytics
- ✅ Integraciones con librerías externas

**NO son efectos secundarios** (van directamente en el componente):

- ❌ Cálculos basados en props o state
- ❌ Renderizado de JSX
- ❌ Transformaciones de datos
- ❌ Event handlers (onClick, onChange)

```tsx
// QUÉ: Ejemplo de diferencia entre cálculo directo y efecto secundario
// PARA: Mostrar cuándo usar y cuándo NO usar useEffect
// IMPACTO: Evitar uso innecesario de efectos mejora rendimiento

import React, { useState, useEffect } from 'react';

const Example: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // ❌ INCORRECTO - cálculo directo, no necesita useEffect
  // useEffect(() => {
  //   const double = count * 2;
  // }, [count]);

  // ✅ CORRECTO - cálculo directo en el componente
  const double = count * 2;

  // QUÉ: useEffect para efecto secundario (manipular DOM)
  // PARA: Actualizar título del navegador cuando count cambia
  // IMPACTO: Se ejecuta después del renderizado, no durante
  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
```

---

## 🔧 Sintaxis Básica

```tsx
useEffect(setup, dependencies?)

// setup: función que contiene la lógica del efecto
// dependencies: array opcional que controla cuándo se ejecuta
```

### Anatomía Completa

```tsx
useEffect(
  () => {
    // 1️⃣ CÓDIGO DEL EFECTO
    // Se ejecuta después del renderizado
    console.log('Efecto ejecutado');

    // 2️⃣ FUNCIÓN DE LIMPIEZA (opcional)
    return () => {
      console.log('Cleanup ejecutado');
    };
  },
  [
    /* 3️⃣ DEPENDENCIAS */
  ],
);
```

---

## 📊 Cuándo se Ejecuta useEffect

useEffect se ejecuta en momentos específicos del ciclo de vida del componente:

### Momento de Ejecución

```tsx
const Component: React.FC = () => {
  console.log('1️⃣ Renderizado');

  useEffect(() => {
    console.log('2️⃣ Efecto después del renderizado');
  });

  return <div>Componente</div>;
};

// Orden de ejecución:
// 1️⃣ Renderizado
// (React actualiza el DOM)
// 2️⃣ Efecto después del renderizado
```

**Importante**: Los efectos se ejecutan **después** de que React actualiza el DOM, no durante el renderizado.

### Ciclo de Vida

```tsx
// QUÉ: Demostración del ciclo de vida con useEffect
// PARA: Entender cuándo se ejecuta useEffect sin dependencias
// IMPACTO: Este patrón se ejecuta en cada render (usar con cuidado)

import React, { useState, useEffect } from 'react';

const LifecycleDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // QUÉ: useEffect sin array de dependencias
  // PARA: Ejecutar código después de CADA renderizado
  // IMPACTO: Se ejecuta en montaje y cada actualización de state
  useEffect(() => {
    console.log('Componente renderizado o actualizado');
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

// Primera vez (montaje):
// - Renderizado inicial
// - useEffect se ejecuta

// Cada click (actualización):
// - State cambia (count++)
// - Re-renderizado
// - useEffect se ejecuta de nuevo
```

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Actualizar document.title

```tsx
// QUÉ: Componente que actualiza el título de la pestaña del navegador
// PARA: Demostrar efecto secundario real manipulando el DOM
// IMPACTO: El título se actualiza automáticamente con cada click

import React, { useState, useEffect } from 'react';

const PageTitle: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // QUÉ: Efecto que modifica document.title
  // PARA: Sincronizar título del navegador con el state
  // IMPACTO: Se ejecuta después de cada renderizado
  useEffect(() => {
    document.title = `Clicks: ${count}`;
  });

  return (
    <div>
      <p>Has hecho {count} clicks</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default PageTitle;
```

**Resultado**: Cada vez que haces click, el título de la pestaña del navegador cambia.

### Ejemplo 2: Logging

```tsx
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

const UserLogger: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: 1,
    name: 'Ana',
  });

  // Log cuando el usuario cambia
  useEffect(() => {
    console.log('Usuario actual:', user);
    // En una app real, esto podría ser analytics
    // analytics.track('user_viewed', { userId: user.id });
  });

  return (
    <div>
      <h2>Usuario: {user.name}</h2>
      <button onClick={() => setUser({ id: 2, name: 'Luis' })}>
        Cambiar Usuario
      </button>
    </div>
  );
};
```

### Ejemplo 3: Sincronizar con LocalStorage

```tsx
import React, { useState, useEffect } from 'react';

const PreferenceSync: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Sincronizar preferencia con localStorage
  useEffect(() => {
    // Guardar en localStorage cada vez que cambia
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    console.log('Preferencia guardada:', darkMode);
  });

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h2>Tema: {darkMode ? 'Oscuro' : 'Claro'}</h2>
      <button onClick={() => setDarkMode(!darkMode)}>Cambiar Tema</button>
    </div>
  );
};
```

---

## ⚠️ Problemas Comunes

### Problema 1: Efecto se Ejecuta Demasiadas Veces

```tsx
// ❌ PROBLEMA: Se ejecuta en cada renderizado
const Component: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  useEffect(() => {
    console.log('Efecto ejecutado');
    // Si `name` cambia, esto también se ejecuta
  });

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};

// Cada letra que escribes en el input ejecuta el efecto 😱
```

**Solución**: Usar dependencias (lo veremos en el siguiente archivo).

### Problema 2: Efecto con Lógica Compleja

```tsx
// ❌ MAL: Demasiada lógica en un efecto
useEffect(() => {
  updateTitle();
  fetchData();
  setupWebSocket();
  startTimer();
  trackAnalytics();
});

// ✅ MEJOR: Dividir en múltiples efectos
useEffect(() => {
  updateTitle();
});

useEffect(() => {
  fetchData();
});

useEffect(() => {
  setupWebSocket();
  return () => cleanupWebSocket();
});
```

**Regla**: Un efecto = Una responsabilidad

---

## 🆚 useEffect vs Event Handlers

Es importante saber **cuándo usar useEffect** y **cuándo usar event handlers**:

```tsx
import React, { useState, useEffect } from 'react';

const ComparisonDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // ❌ INCORRECTO - No necesitas useEffect para esto
  // useEffect(() => {
  //   console.log('Botón clickeado');
  // });

  // ✅ CORRECTO - Usar event handler
  const handleClick = (): void => {
    console.log('Botón clickeado');
    setCount(count + 1);
  };

  // ✅ CORRECTO - useEffect para efecto secundario
  useEffect(() => {
    // Se ejecuta automáticamente después de cada renderizado
    document.title = `Count: ${count}`;
  });

  return <button onClick={handleClick}>Click me ({count})</button>;
};
```

**Regla de oro**:

- **Event handlers**: Reaccionar a interacciones del usuario (click, submit, change)
- **useEffect**: Sincronizar con sistemas externos (DOM, APIs, timers)

---

## 🔄 Comparación con Clases

Si vienes de componentes de clase:

```tsx
// COMPONENTE DE CLASE (antiguo)
class OldComponent extends React.Component {
  componentDidMount() {
    // Se ejecuta después del primer renderizado
    document.title = 'Montado';
  }

  componentDidUpdate() {
    // Se ejecuta después de cada actualización
    document.title = `Count: ${this.state.count}`;
  }

  componentWillUnmount() {
    // Se ejecuta antes de desmontar el componente
    console.log('Desmontando');
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

// COMPONENTE FUNCIONAL (moderno) ✅
const NewComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Un useEffect reemplaza los 3 métodos de ciclo de vida
  useEffect(() => {
    // componentDidMount + componentDidUpdate
    document.title = `Count: ${count}`;

    return () => {
      // componentWillUnmount
      console.log('Desmontando');
    };
  });

  return <div>{count}</div>;
};
```

**Ventajas de useEffect**:

- ✅ Menos código repetido
- ✅ Lógica relacionada agrupada
- ✅ Múltiples efectos para diferentes propósitos
- ✅ Más fácil de entender y mantener

---

## 📝 TypeScript con useEffect

useEffect no necesita tipos explícitos, pero tu código dentro sí:

```tsx
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const TypedEffect: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // TypeScript sabe que user es User | null
    if (user) {
      console.log(`Usuario: ${user.name}`);
    }

    // La función de cleanup debe retornar void o una función
    return (): void => {
      console.log('Cleanup');
    };
  });

  return <div>{user ? <p>{user.name}</p> : <p>No hay usuario</p>}</div>;
};
```

**Tipos importantes**:

```tsx
// Setup function debe retornar void o una cleanup function
type EffectCallback = () => void | (() => void);

// Dependencies es un array de any (React no puede tiparlas exactamente)
type DependencyList = ReadonlyArray<any>;

// Firma completa de useEffect
function useEffect(effect: EffectCallback, deps?: DependencyList): void;
```

---

## ✅ Buenas Prácticas

### 1. Nombrar Efectos con Comentarios

```tsx
// ✅ BUENO: Comentario explica el propósito
useEffect(() => {
  // Sincronizar título con el contador
  document.title = `Count: ${count}`;
});

useEffect(() => {
  // Guardar preferencias en localStorage
  localStorage.setItem('theme', theme);
});
```

### 2. Un Efecto por Responsabilidad

```tsx
// ❌ MAL: Mezclando responsabilidades
useEffect(() => {
  document.title = `Count: ${count}`;
  localStorage.setItem('count', count.toString());
  logAnalytics('count_changed', count);
});

// ✅ MEJOR: Efectos separados
useEffect(() => {
  // Actualizar título
  document.title = `Count: ${count}`;
});

useEffect(() => {
  // Persistir en localStorage
  localStorage.setItem('count', count.toString());
});

useEffect(() => {
  // Analytics
  logAnalytics('count_changed', count);
});
```

### 3. Efectos al Final del Componente

```tsx
const Component: React.FC = () => {
  // 1️⃣ Primero: state
  const [count, setCount] = useState<number>(0);

  // 2️⃣ Luego: handlers
  const handleIncrement = (): void => {
    setCount(count + 1);
  };

  // 3️⃣ Al final: efectos
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  // 4️⃣ Por último: render
  return <button onClick={handleIncrement}>{count}</button>;
};
```

---

## 🚨 Errores Comunes

### Error 1: Intentar Usar Async Directamente

```tsx
// ❌ INCORRECTO: useEffect no puede ser async
useEffect(async () => {
  const data = await fetchData();
  setData(data);
});

// QUÉ: Patrón correcto para usar async/await en useEffect
// PARA: Ejecutar código asíncrono dentro del efecto
// IMPACTO: useEffect no puede ser async directamente

// ✅ CORRECTO: Crear función async interna
useEffect(() => {
  const loadData = async (): Promise<void> => {
    const data = await fetchData();
    setData(data);
  };

  loadData();
});

// ✅ CORRECTO: IIFE (Immediately Invoked Function Expression)
useEffect(() => {
  (async (): Promise<void> => {
    const data = await fetchData();
    setData(data);
  })();
});
```

### Error 2: Olvidar Importar useEffect

```tsx
// ❌ ERROR
import React, { useState } from 'react';

const Component: React.FC = () => {
  useState(0);
  useEffect(() => {}); // ❌ useEffect is not defined
};

// ✅ CORRECTO
import React, { useState, useEffect } from 'react';

const Component: React.FC = () => {
  useState(0);
  useEffect(() => {}); // ✅ Funciona
};
```

---

## 📚 Resumen

**useEffect** te permite ejecutar código **después** de que React renderiza tu componente:

- ✅ Se ejecuta después del renderizado (no durante)
- ✅ Perfecto para efectos secundarios (fetch, DOM, timers)
- ✅ Puede retornar una función de limpieza
- ✅ Sin dependencias: se ejecuta después de CADA renderizado
- ✅ Un componente puede tener múltiples useEffect

**Próximo tema**: Aprenderás a controlar **cuándo** se ejecutan los efectos usando el array de dependencias.

---

## 🔗 Recursos

- [React Docs - useEffect](https://react.dev/reference/react/useEffect)
- [React Docs - Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)

---

**Siguiente**: [Dependencias de Efectos →](./02-dependencias-efectos.md)
