# Dependencias de Efectos

## 🎯 Objetivos de Aprendizaje

- Dominar el array de dependencias de useEffect
- Entender cuándo se ejecutan los efectos según dependencias
- Evitar loops infinitos y re-ejecuciones innecesarias
- Aplicar las tres variantes: sin array, vacío, con valores
- Comprender React.StrictMode y su impacto

---

## � Diagrama: Los 3 Casos del Array de Dependencias

![Array de Dependencias: 3 Casos](../0-assets/02-dependency-array-cases.svg)

---

## �📋 Array de Dependencias

El segundo parámetro de useEffect es un **array de dependencias** que controla **cuándo** se ejecuta el efecto.

```tsx
useEffect(
  () => {
    // Código del efecto
  },
  [
    /* dependencias */
  ],
);
```

**Tres variantes**:

1. **Sin array**: Se ejecuta después de CADA renderizado
2. **Array vacío `[]`**: Se ejecuta UNA VEZ (montaje)
3. **Con valores `[a, b]`**: Se ejecuta cuando `a` o `b` cambian

---

## 1️⃣ Sin Array de Dependencias

```tsx
useEffect(() => {
  console.log('Efecto ejecutado');
});
// No hay segundo parámetro ❌
```

**Comportamiento**: Se ejecuta **después de cada renderizado**.

```tsx
// QUÉ: Ejemplo de useEffect SIN array de dependencias
// PARA: Mostrar cómo se ejecuta en cada renderizado
// IMPACTO: Cualquier cambio de state re-ejecuta el efecto

import React, { useState, useEffect } from 'react';

const NoDepExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('Ana');

  // QUÉ: useEffect sin segundo parámetro
  // PARA: Ejecutar después de cada renderizado
  // IMPACTO: Se ejecuta cuando count O name cambian
  useEffect(() => {
    console.log('Efecto ejecutado');
    console.log(`Count: ${count}, Name: ${name}`);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>

      <p>Name: {name}</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

// Cada vez que cambias count O name:
// - Componente se re-renderiza
// - useEffect se ejecuta de nuevo
```

**Cuándo usarlo**:

- ✅ Casi nunca (casi siempre quieres controlar la ejecución)
- ⚠️ Solo si realmente necesitas sincronizar después de TODO cambio
- ⚠️ Ten cuidado con el rendimiento

---

## 2️⃣ Array Vacío `[]`

```tsx
useEffect(() => {
  console.log('Efecto ejecutado UNA VEZ');
}, []);
// Array vacío ✅
```

**Comportamiento**: Se ejecuta **una sola vez** después del primer renderizado (montaje).

```tsx
// QUÉ: Ejemplo de useEffect con array vacío []
// PARA: Ejecutar el efecto solo UNA VEZ al montar el componente
// IMPACTO: Equivalente a componentDidMount en clases

import React, { useState, useEffect } from 'react';

const EmptyDepExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // QUÉ: Array vacío de dependencias
  // PARA: Ejecutar SOLO en el montaje del componente
  // IMPACTO: Los cambios de count NO re-ejecutan el efecto
  useEffect(() => {
    console.log('Componente montado');
    document.title = 'App Cargada';
  }, []); // ← Array vacío

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar (efecto NO se ejecuta)
      </button>
    </div>
  );
};

// Primera vez (montaje):
// - Renderizado inicial
// - useEffect se ejecuta
// - console.log('Componente montado')

// Cada click:
// - Re-renderizado
// - useEffect NO se ejecuta (¡las dependencias no cambiaron!)
```

**Cuándo usarlo**:

- ✅ Fetch inicial de datos
- ✅ Configurar event listeners globales
- ✅ Inicializar librerías externas
- ✅ Logging de montaje

**Equivalente en clases**:

```tsx
componentDidMount() {
  // Código aquí
}
```

---

## 3️⃣ Con Valores `[dep1, dep2]`

```tsx
useEffect(() => {
  console.log('Efecto ejecutado');
}, [count, user.id]);
// Se ejecuta cuando count O user.id cambian ✅
```

**Comportamiento**: Se ejecuta cuando **cualquiera** de las dependencias cambia.

```tsx
// QUÉ: Ejemplo de useEffect con dependencias específicas
// PARA: Ejecutar el efecto solo cuando valores específicos cambian
// IMPACTO: Optimiza rendimiento evitando ejecuciones innecesarias

import React, { useState, useEffect } from 'react';

const WithDepsExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('Ana');

  // QUÉ: useEffect que depende solo de count
  // PARA: Actualizar título cuando count cambia
  // IMPACTO: NO se ejecuta cuando name cambia (optimización)
  useEffect(() => {
    console.log('Count cambió:', count);
    document.title = `Count: ${count}`;
  }, [count]); // ← Solo depende de count

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar (efecto SÍ se ejecuta)
      </button>

      <p>Name: {name}</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* Escribir en el input NO ejecuta el efecto */}
    </div>
  );
};
```

**Cuándo usarlo**:

- ✅ Cuando el efecto depende de valores específicos
- ✅ Para optimizar rendimiento
- ✅ Evitar ejecuciones innecesarias

---

## 📊 Tabla Comparativa

| Variante        | Sintaxis                      | Cuándo se ejecuta           | Uso común                   |
| --------------- | ----------------------------- | --------------------------- | --------------------------- |
| **Sin array**   | `useEffect(() => {})`         | Después de CADA renderizado | ⚠️ Casi nunca               |
| **Array vacío** | `useEffect(() => {}, [])`     | UNA VEZ (montaje)           | Fetch inicial, setup        |
| **Con valores** | `useEffect(() => {}, [a, b])` | Cuando `a` o `b` cambian    | Sincronizar con state/props |

---

## 🔄 Cómo Decide React Ejecutar el Efecto

React compara las dependencias con **Object.is()** (similitud estricta):

```tsx
// React guarda las dependencias anteriores
const prevDeps = [5, 'Ana'];
const nextDeps = [5, 'Ana'];

// Comparación:
Object.is(5, 5); // true
Object.is('Ana', 'Ana'); // true

// Resultado: NO ejecutar el efecto (nada cambió)
```

```tsx
const prevDeps = [5, 'Ana'];
const nextDeps = [6, 'Ana'];

// Comparación:
Object.is(5, 6); // false ← ¡Cambió!
Object.is('Ana', 'Ana'); // true

// Resultado: SÍ ejecutar el efecto (count cambió)
```

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Fetch con Dependencia

```tsx
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserFetcher: React.FC = () => {
  const [userId, setUserId] = useState<number>(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch cuando userId cambia
  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // ← Re-fetch cuando userId cambia

  return (
    <div>
      <h2>Usuario {userId}</h2>

      <button onClick={() => setUserId(userId + 1)}>Siguiente Usuario</button>

      {loading ? (
        <p>Cargando...</p>
      ) : user ? (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : null}
    </div>
  );
};
```

**Flujo**:

1. Usuario hace click en "Siguiente Usuario"
2. `userId` cambia (1 → 2)
3. React detecta cambio en dependencias
4. useEffect se ejecuta
5. Fetch de nuevo usuario

### Ejemplo 2: Múltiples Dependencias

```tsx
import React, { useState, useEffect } from 'react';

const SearchLogger: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('all');

  // Se ejecuta cuando query O category cambian
  useEffect(() => {
    if (query.length > 0) {
      console.log(`Buscando "${query}" en categoría "${category}"`);
      // Aquí iría la lógica de búsqueda
    }
  }, [query, category]); // ← Dos dependencias

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
        <option value="all">Todas</option>
        <option value="tech">Tecnología</option>
        <option value="sports">Deportes</option>
      </select>
    </div>
  );
};
```

### Ejemplo 3: Dependencia de Prop

```tsx
import React, { useEffect } from 'react';

interface WelcomeProps {
  userName: string;
}

const Welcome: React.FC<WelcomeProps> = ({ userName }) => {
  // Efecto depende de prop
  useEffect(() => {
    console.log(`Bienvenido, ${userName}!`);
    document.title = `Hola ${userName}`;
  }, [userName]); // ← Dependencia de prop

  return <h1>Hola {userName}</h1>;
};

// Cuando el componente padre cambia userName:
// - Prop cambia
// - useEffect se ejecuta de nuevo
```

---

## ⚠️ Problema: Loops Infinitos

Un **loop infinito** ocurre cuando un efecto causa un cambio que vuelve a ejecutar el mismo efecto.

### Ejemplo de Loop Infinito

```tsx
// QUÉ: Ejemplo de LOOP INFINITO común
// PARA: Identificar este anti-patrón y evitarlo
// IMPACTO: El componente se re-renderiza infinitamente

// ❌ ¡LOOP INFINITO!
const InfiniteLoop: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // QUÉ: Efecto que actualiza su propia dependencia
  // PARA: (ANTI-PATRÓN) Ejemplo de qué NO hacer
  // IMPACTO: count cambia → efecto se ejecuta → count cambia → infinito
  useEffect(() => {
    setCount(count + 1); // ← Cambia count
  }, [count]); // ← Depende de count

  return <p>{count}</p>;
};

// Flujo:
// 1. useEffect se ejecuta
// 2. setCount(count + 1) → count cambia
// 3. Dependencia [count] cambió
// 4. useEffect se ejecuta de nuevo
// 5. GOTO 2 (infinito) 😱
```

**Solución 1**: Quitar la dependencia que causa el loop

```tsx
// ✅ CORRECTO: Sin dependencia problemática
const Fixed1: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(0); // Setear valor fijo
  }, []); // ← Solo una vez

  return <p>{count}</p>;
};
```

**Solución 2**: Usar forma funcional de setState

```tsx
// ✅ CORRECTO: Forma funcional
const Fixed2: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // No necesita count en dependencias
    setCount((prevCount) => prevCount + 1);
  }, []); // ← Solo una vez

  return <p>{count}</p>;
};
```

**Solución 3**: Mover lógica fuera del efecto

```tsx
// ✅ MEJOR: Lógica en event handler
const Fixed3: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (): void => {
    setCount(count + 1); // ← Aquí, no en useEffect
  };

  return <button onClick={handleClick}>{count}</button>;
};
```

---

## 🔍 Dependencias con Objetos y Arrays

### 📊 Diagrama: Comparación Superficial

![Comparación Superficial](../0-assets/05-shallow-comparison.svg)

**Problema**: Objetos y arrays se comparan por referencia, no por valor.

```tsx
// ❌ PROBLEMA: Objeto nuevo en cada renderizado
const BadExample: React.FC = () => {
  const options = { theme: 'dark' }; // ← Nuevo objeto cada vez

  useEffect(() => {
    console.log('Options changed');
  }, [options]); // ← Siempre "cambia" (nueva referencia)

  return <div>Component</div>;
};

// Cada renderizado:
// - options = nuevo objeto (nueva referencia)
// - useEffect detecta "cambio"
// - Se ejecuta de nuevo (innecesariamente)
```

**Solución 1**: Mover fuera del componente

```tsx
// ✅ CORRECTO: Constante fuera del componente
const OPTIONS = { theme: 'dark' }; // ← Una sola referencia

const GoodExample1: React.FC = () => {
  useEffect(() => {
    console.log('Options changed');
  }, [OPTIONS]); // ← Nunca cambia

  return <div>Component</div>;
};
```

**Solución 2**: Usar valores primitivos como dependencias

```tsx
// ✅ CORRECTO: Dependencia primitiva
const GoodExample2: React.FC = () => {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    const options = { theme }; // ← Crear objeto dentro
    console.log('Theme changed:', options);
  }, [theme]); // ← Solo depende del string

  return <div>Component</div>;
};
```

**Solución 3**: useMemo para objetos complejos

```tsx
import React, { useState, useEffect, useMemo } from 'react';

// ✅ CORRECTO: useMemo para mantener referencia
const GoodExample3: React.FC = () => {
  const [theme, setTheme] = useState<string>('dark');
  const [lang, setLang] = useState<string>('es');

  // Objeto memoizado (misma referencia si theme y lang no cambian)
  const options = useMemo(() => {
    return { theme, lang };
  }, [theme, lang]);

  useEffect(() => {
    console.log('Options changed:', options);
  }, [options]); // ← Solo cambia si theme o lang cambian

  return <div>Component</div>;
};
```

---

## 🧪 React.StrictMode

En desarrollo, React ejecuta efectos **dos veces** si usas StrictMode:

```tsx
// En tu index.tsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

```tsx
const Component: React.FC = () => {
  useEffect(() => {
    console.log('Efecto ejecutado');
  }, []);

  return <div>Component</div>;
};

// En desarrollo (con StrictMode):
// - "Efecto ejecutado" (primera vez)
// - Cleanup si existe
// - "Efecto ejecutado" (segunda vez) ← Doble ejecución

// En producción (sin StrictMode):
// - "Efecto ejecutado" (una sola vez)
```

**¿Por qué?**

Para ayudarte a encontrar bugs:

- Efectos que no son idempotentes
- Efectos sin cleanup adecuado
- Efectos con efectos secundarios no deseados

**No es un bug, es intencional**. Si tu efecto funciona bien con doble ejecución, funcionará bien en producción.

---

## 📝 Reglas de Dependencias

### Regla 1: Incluir TODO lo que se usa

```tsx
// ❌ INCORRECTO: Falta count en dependencias
const Bad: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(count); // ← Usa count
  }, []); // ← Pero no lo incluye

  return <p>{count}</p>;
};

// ✅ CORRECTO: Incluir todas las dependencias
const Good: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(count); // ← Usa count
  }, [count]); // ← Lo incluye

  return <p>{count}</p>;
};
```

**ESLint puede ayudarte**:

```bash
pnpm add -D eslint-plugin-react-hooks

// En .eslintrc
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

### Regla 2: No incluir lo que NO cambia

```tsx
// ❌ INNECESARIO: Incluir constantes
const Bad: React.FC = () => {
  const API_URL = 'https://api.example.com'; // ← Nunca cambia

  useEffect(() => {
    fetch(API_URL);
  }, [API_URL]); // ← No necesario

  return <div>Component</div>;
};

// ✅ CORRECTO: Sin dependencias innecesarias
const Good: React.FC = () => {
  const API_URL = 'https://api.example.com';

  useEffect(() => {
    fetch(API_URL);
  }, []); // ← API_URL nunca cambia

  return <div>Component</div>;
};
```

---

## ✅ Checklist de Dependencias

Antes de escribir useEffect, pregúntate:

- [ ] ¿Este efecto necesita ejecutarse en cada renderizado?
  - Si NO → Usar array de dependencias
- [ ] ¿Este efecto debe ejecutarse solo una vez?
  - Si SÍ → Usar `[]`
- [ ] ¿Este efecto depende de state o props?
  - Si SÍ → Incluirlos en el array
- [ ] ¿Estoy causando un loop infinito?
  - Verificar que el efecto no actualice sus propias dependencias
- [ ] ¿Mis dependencias incluyen objetos/arrays?
  - Considerar useMemo o usar valores primitivos

---

## 📚 Resumen

**Array de dependencias** controla cuándo se ejecuta useEffect:

- **Sin array**: Después de cada renderizado (raro)
- **`[]`**: Una vez (montaje) - común para setup inicial
- **`[a, b]`**: Cuando `a` o `b` cambian - común para sincronización

**Reglas de oro**:

- ✅ Incluir TODO lo que el efecto usa del scope externo
- ✅ Usar forma funcional de setState si no necesitas el valor actual
- ✅ Ten cuidado con objetos/arrays (comparan por referencia)
- ✅ ESLint puede ayudarte a detectar dependencias faltantes

**Próximo tema**: Funciones de limpieza (cleanup) para prevenir memory leaks.

---

## 🔗 Recursos

- [React Docs - useEffect Dependencies](https://react.dev/reference/react/useEffect#specifying-reactive-dependencies)
- [React Docs - You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

---

**Siguiente**: [Cleanup y Limpieza →](./03-cleanup-limpieza.md)
