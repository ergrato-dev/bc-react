# 📖 Glosario - Semana 03: useEffect y Efectos Secundarios

## 🎯 Objetivo

Definiciones claras y concisas de términos técnicos clave sobre useEffect y efectos secundarios en React.

---

## 📚 Términos (A-Z)

### A

#### **AbortController**

API del navegador para cancelar peticiones fetch y prevenir actualizaciones de estado en componentes desmontados.

```typescript
const controller = new AbortController();

fetch('/api/data', { signal: controller.signal })
  .then((res) => res.json())
  .catch((err) => {
    if (err.name === 'AbortError') {
      console.log('Petición cancelada');
    }
  });

// Cancelar petición
controller.abort();
```

---

#### **AbortSignal**

Propiedad de `AbortController` que se pasa a fetch para permitir cancelación.

```typescript
useEffect(() => {
  const controller = new AbortController();

  fetchData(controller.signal);

  return () => controller.abort();
}, []);
```

---

#### **Actualización de Estado Asíncrona**

Actualización de estado que ocurre después de una operación asíncrona (fetch, timer, etc.).

```typescript
useEffect(() => {
  fetch('/api/users')
    .then((res) => res.json())
    .then((data) => setUsers(data)); // Asíncrona
}, []);
```

---

### C

#### **Ciclo de Vida (Lifecycle)**

Fases por las que pasa un componente: montaje (mount), actualización (update), desmontaje (unmount).

```typescript
useEffect(() => {
  console.log('Montado');

  return () => console.log('Desmontado');
}, []);
```

---

#### **Cleanup Function (Función de Limpieza)**

Función que se retorna desde useEffect para limpiar recursos (cancelar peticiones, remover listeners, limpiar timers).

```typescript
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  // Cleanup: limpiar timer
  return () => clearInterval(timer);
}, []);
```

---

#### **Comparación Superficial (Shallow Comparison)**

Método que usa React para comparar dependencias. Solo compara referencias, no contenido profundo.

```typescript
// ❌ Crea nuevo objeto en cada render
useEffect(() => {
  fetch('/api/data', { method: 'GET' }); // Objeto nuevo cada vez
}, [{ method: 'GET' }]); // Siempre diferente

// ✅ Usar valor primitivo
const method = 'GET';
useEffect(() => {
  fetch('/api/data', { method });
}, [method]); // Solo cambia si method cambia
```

---

### D

#### **Dependencias (Dependencies)**

Array de valores que controlan cuándo se ejecuta un efecto. Si cambian, el efecto se vuelve a ejecutar.

```typescript
useEffect(() => {
  console.log(`Usuario: ${userId}`);
}, [userId]); // Efecto depende de userId
```

---

#### **Dependency Array (Array de Dependencias)**

Segundo parámetro de useEffect que determina cuándo se ejecuta el efecto.

- `[]`: Solo en montaje
- `[dep1, dep2]`: Cuando cambian las dependencias
- Sin array: Después de cada render

```typescript
useEffect(() => {
  // Código del efecto
}, []); // Array de dependencias
```

---

#### **Desmontaje (Unmount)**

Fase cuando un componente se remueve del DOM. La cleanup function se ejecuta aquí.

```typescript
useEffect(() => {
  console.log('Montado');

  return () => {
    console.log('Desmontado'); // Se ejecuta al desmontar
  };
}, []);
```

---

### E

#### **Efecto (Effect)**

Operación que interactúa con sistemas externos al componente (API, DOM, timers, subscripciones).

```typescript
useEffect(() => {
  // Este es un efecto
  document.title = `Contador: ${count}`;
}, [count]);
```

---

#### **Efecto Secundario (Side Effect)**

Cualquier operación que afecta algo fuera del scope de la función: fetch, timers, manipulación de DOM, subscripciones.

```typescript
// ❌ Side effect en el cuerpo del componente
function Component() {
  document.title = 'App'; // Mal: side effect directo
  return <div>Hello</div>;
}

// ✅ Side effect en useEffect
function Component() {
  useEffect(() => {
    document.title = 'App'; // Bien: dentro de useEffect
  }, []);
  return <div>Hello</div>;
}
```

---

#### **ESLint Plugin React Hooks**

Plugin de ESLint que detecta errores en el uso de hooks, especialmente dependencias faltantes.

```bash
pnpm add -D eslint-plugin-react-hooks
```

```json
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

---

#### **Estado de Carga (Loading State)**

Variable de estado que indica si una operación asíncrona está en progreso.

```typescript
const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);

  fetch('/api/data')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    });
}, []);
```

---

### F

#### **Fetch API**

API nativa del navegador para hacer peticiones HTTP.

```typescript
useEffect(() => {
  fetch('/api/users')
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch((error) => setError(error.message));
}, []);
```

---

### I

#### **Infinite Loop (Loop Infinito)**

Error común cuando un efecto causa cambios que activan su propia re-ejecución.

```typescript
// ❌ Loop infinito
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1); // Cambia count
}, [count]); // Depende de count → loop infinito

// ✅ Correcto
useEffect(() => {
  setCount((prev) => prev + 1); // Solo se ejecuta una vez
}, []); // Array vacío
```

---

### L

#### **Listener de Eventos**

Función que escucha eventos del DOM (click, scroll, resize, etc.).

```typescript
useEffect(() => {
  const handleScroll = () => {
    console.log('Scroll:', window.scrollY);
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup: remover listener
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

### M

#### **Memory Leak (Fuga de Memoria)**

Error cuando un componente intenta actualizar estado después de desmontarse.

```typescript
// ❌ Posible memory leak
useEffect(() => {
  fetch('/api/data')
    .then((res) => res.json())
    .then((data) => setData(data)); // Puede ejecutarse después del desmontaje
}, []);

// ✅ Prevenir memory leak
useEffect(() => {
  let isMounted = true;

  fetch('/api/data')
    .then((res) => res.json())
    .then((data) => {
      if (isMounted) setData(data); // Solo si está montado
    });

  return () => {
    isMounted = false;
  };
}, []);
```

---

#### **Montaje (Mount)**

Fase cuando un componente se agrega al DOM por primera vez.

```typescript
useEffect(() => {
  console.log('Componente montado');
}, []); // Solo se ejecuta en montaje
```

---

### P

#### **Polling**

Técnica de hacer peticiones periódicas a un servidor para obtener datos actualizados.

```typescript
useEffect(() => {
  const fetchData = () => {
    fetch('/api/status')
      .then((res) => res.json())
      .then(setData);
  };

  fetchData(); // Inmediato
  const interval = setInterval(fetchData, 5000); // Cada 5s

  return () => clearInterval(interval);
}, []);
```

---

### R

#### **Race Condition**

Problema cuando múltiples operaciones asíncronas compiten y la última en iniciarse no es la última en completarse.

```typescript
// ❌ Race condition
useEffect(() => {
  fetch(`/api/user/${userId}`)
    .then((res) => res.json())
    .then((data) => setUser(data)); // Puede llegar en desorden
}, [userId]);

// ✅ Solución con AbortController
useEffect(() => {
  const controller = new AbortController();

  fetch(`/api/user/${userId}`, { signal: controller.signal })
    .then((res) => res.json())
    .then((data) => setUser(data));

  return () => controller.abort();
}, [userId]);
```

---

#### **Re-render**

Cuando un componente se vuelve a ejecutar debido a cambios en props o estado.

```typescript
const [count, setCount] = useState(0);

// Cada vez que count cambia, hay un re-render
setCount(count + 1);
```

---

#### **Reactive Effect**

Efecto que reacciona a cambios en sus dependencias.

```typescript
useEffect(() => {
  console.log(`Count cambió a: ${count}`);
}, [count]); // Reacciona a count
```

---

### S

#### **setInterval**

Función que ejecuta código repetidamente cada X milisegundos.

```typescript
useEffect(() => {
  const intervalId = setInterval(() => {
    console.log('Tick cada segundo');
  }, 1000);

  return () => clearInterval(intervalId); // Cleanup
}, []);
```

---

#### **setTimeout**

Función que ejecuta código después de X milisegundos.

```typescript
useEffect(() => {
  const timeoutId = setTimeout(() => {
    console.log('Después de 3 segundos');
  }, 3000);

  return () => clearTimeout(timeoutId); // Cleanup
}, []);
```

---

#### **Stale Closure**

Problema cuando un efecto captura valores viejos debido a closures.

```typescript
// ❌ Stale closure
const [count, setCount] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    console.log(count); // Siempre imprime 0 (valor inicial)
  }, 1000);

  return () => clearInterval(interval);
}, []); // count no está en dependencias

// ✅ Solución
useEffect(() => {
  const interval = setInterval(() => {
    setCount((prev) => prev + 1); // Usar función de actualización
  }, 1000);

  return () => clearInterval(interval);
}, []); // Ya no necesita count como dependencia
```

---

#### **Synchronization (Sincronización)**

Mantener un componente sincronizado con un sistema externo (API, DOM, WebSocket, etc.).

```typescript
useEffect(() => {
  // Sincronizar título con estado
  document.title = `Contador: ${count}`;
}, [count]);
```

---

### U

#### **useEffect**

Hook de React para ejecutar efectos secundarios en componentes funcionales.

```typescript
import { useEffect } from 'react';

useEffect(
  () => {
    // Código del efecto
    return () => {
      // Cleanup (opcional)
    };
  },
  [
    /* dependencias */
  ],
);
```

---

#### **useLayoutEffect**

Similar a useEffect pero se ejecuta sincrónicamente después de mutaciones del DOM y antes de que el navegador pinte.

```typescript
useLayoutEffect(() => {
  // Se ejecuta antes del paint
  const height = ref.current.offsetHeight;
  setHeight(height);
}, []);
```

---

### W

#### **Web API**

APIs nativas del navegador: fetch, localStorage, setTimeout, addEventListener, etc.

```typescript
useEffect(() => {
  // Usar Web APIs
  const data = localStorage.getItem('user');
  setUser(JSON.parse(data));
}, []);
```

---

## 🔗 Recursos Relacionados

- [React Docs - useEffect](https://react.dev/reference/react/useEffect)
- [Dan Abramov - Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [Teoría Semana 03](../1-teoria/)

---

## 🔗 Navegación

| ⬅️ Recursos                  |      🏠 Semana 03      | ➡️ Rúbrica                                     |
| :--------------------------- | :--------------------: | :--------------------------------------------- |
| [4-recursos](../4-recursos/) | [README](../README.md) | [rubrica-evaluacion](../rubrica-evaluacion.md) |

---

_Última actualización: Enero 2026_
