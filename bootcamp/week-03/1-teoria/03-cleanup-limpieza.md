# Cleanup y Limpieza de Efectos

## 🎯 Objetivos de Aprendizaje

- Comprender qué son las funciones de limpieza (cleanup)
- Prevenir memory leaks en componentes
- Cancelar suscripciones y timers correctamente
- Usar AbortController para fetch
- Implementar cleanup en casos reales

---

## � Diagrama: Patrones de Cleanup

![Patrones de Cleanup](../0-assets/03-cleanup-patterns.svg)

---

## �📋 ¿Qué es una Función de Cleanup?

Una **función de cleanup** (limpieza) es código que se ejecuta para **deshacer** o **limpiar** lo que hizo tu efecto.

```tsx
useEffect(() => {
  // 1️⃣ SETUP: Configurar algo
  console.log('Efecto ejecutado');

  // 2️⃣ CLEANUP: Limpiar cuando sea necesario
  return () => {
    console.log('Limpieza ejecutada');
  };
});
```

**¿Cuándo se ejecuta el cleanup?**

1. **Antes del próximo efecto** (si las dependencias cambiaron)
2. **Al desmontar el componente**

---

## 🔄 Ciclo de Vida con Cleanup

```tsx
// QUÉ: Ejemplo completo del ciclo de vida con cleanup
// PARA: Entender cuándo se ejecuta setup y cuándo cleanup
// IMPACTO: El cleanup previene memory leaks y efectos obsoletos

import React, { useState, useEffect } from 'react';

const LifecycleDemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // QUÉ: Función de setup del efecto
    // PARA: Ejecutar código después del renderizado
    // IMPACTO: Se ejecuta cada vez que count cambia
    console.log(`✅ Efecto ejecutado (count: ${count})`);

    // QUÉ: Función de cleanup retornada
    // PARA: Limpiar efectos anteriores antes del próximo
    // IMPACTO: Previene acumulación de efectos secundarios
    return () => {
      console.log(`🧹 Cleanup ejecutado (count anterior: ${count})`);
    };
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};

// Primera renderizado (count = 0):
// ✅ Efecto ejecutado (count: 0)

// Click (count cambia a 1):
// 🧹 Cleanup ejecutado (count anterior: 0) ← Limpia efecto anterior
// ✅ Efecto ejecutado (count: 1) ← Ejecuta nuevo efecto

// Click (count cambia a 2):
// 🧹 Cleanup ejecutado (count anterior: 1)
// ✅ Efecto ejecutado (count: 2)

// Componente se desmonta:
// 🧹 Cleanup ejecutado (count anterior: 2)
```

**Importante**: El cleanup tiene acceso al valor anterior de las dependencias (closure).

---

## ⚠️ ¿Por Qué Necesitamos Cleanup?

### Problema: Memory Leaks

Sin cleanup, tu aplicación puede tener **memory leaks** (fugas de memoria):

```tsx
// QUÉ: Ejemplo de MEMORY LEAK por falta de cleanup
// PARA: Identificar este anti-patrón común
// IMPACTO: Event listeners se acumulan causando degradación de rendimiento

// ❌ MEMORY LEAK: Event listener nunca se elimina
const BadComponent: React.FC = () => {
  useEffect(() => {
    const handleClick = (): void => {
      console.log('Window clicked');
    };

    // QUÉ: Agregar event listener al window
    // PARA: (ANTI-PATRÓN) Sin cleanup
    // IMPACTO: Si el componente se monta/desmonta 10 veces, hay 10 listeners activos
    window.addEventListener('click', handleClick);
    // ❌ Falta cleanup
  }, []);

  return <div>Component</div>;
};

// Si montas y desmontas el componente 10 veces:
// - 10 event listeners activos
// - Todos ejecutándose en cada click
// - Memoria desperdiciada
// - Rendimiento degradado
```

```tsx
// QUÉ: Patrón correcto con cleanup de event listener
// PARA: Prevenir memory leaks eliminando el listener
// IMPACTO: El listener se limpia al desmontar el componente

// ✅ CORRECTO: Cleanup elimina event listener
const GoodComponent: React.FC = () => {
  useEffect(() => {
    const handleClick = (): void => {
      console.log('Window clicked');
    };

    // QUÉ: Agregar listener con cleanup
    // PARA: Configurar evento y limpiarlo después
    // IMPACTO: Sin memory leak, rendimiento optimizado
    window.addEventListener('click', handleClick);

    // QUÉ: Función de cleanup
    // PARA: Eliminar el listener al desmontar
    // IMPACTO: Libera memoria y previene ejecuciones obsoletas
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return <div>Component</div>;
};

// Montaje:
// - addEventListener ejecutado

// Desmontaje:
// - removeEventListener ejecutado ✅
// - Sin memory leak
```

---

## 💡 Casos de Uso Comunes

### Caso 1: Timers

#### setTimeout

```tsx
import React, { useState, useEffect } from 'react';

const TimeoutExample: React.FC = () => {
  const [message, setMessage] = useState<string>('Esperando...');

  useEffect(() => {
    console.log('Configurando timeout');

    const timeoutId = setTimeout(() => {
      setMessage('¡Tiempo cumplido!');
    }, 3000);

    // Cleanup: Cancelar timeout si el componente se desmonta antes
    return () => {
      console.log('Cancelando timeout');
      clearTimeout(timeoutId);
    };
  }, []);

  return <p>{message}</p>;
};

// Si el usuario navega antes de 3 segundos:
// - clearTimeout previene actualizar state de componente desmontado
// - Evita warning: "Can't perform a React state update on an unmounted component"
```

#### setInterval

```tsx
import React, { useState, useEffect } from 'react';

const IntervalExample: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    console.log('Iniciando intervalo');

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup: Limpiar intervalo al desmontar
    return () => {
      console.log('Limpiando intervalo');
      clearInterval(intervalId);
    };
  }, []); // Solo una vez

  return <p>Segundos transcurridos: {seconds}</p>;
};
```

**Importante**: Sin cleanup, múltiples intervalos seguirían ejecutándose.

---

### Caso 2: Event Listeners

```tsx
import React, { useState, useEffect } from 'react';

const WindowSizeTracker: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Función handler
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar listener
    window.addEventListener('resize', handleResize);
    console.log('Listener agregado');

    // Cleanup: Remover listener
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Listener removido');
    };
  }, []); // Solo una vez

  return (
    <div>
      <p>Ancho de ventana: {windowWidth}px</p>
      <p>Redimensiona la ventana para ver cambios</p>
    </div>
  );
};
```

---

### Caso 3: WebSocket/Subscripciones

```tsx
import React, { useState, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  timestamp: number;
}

const WebSocketChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    // Crear conexión WebSocket
    const ws = new WebSocket('wss://echo.websocket.org/');

    // Setup: Event handlers
    ws.onopen = () => {
      console.log('WebSocket conectado');
      setConnected(true);
    };

    ws.onmessage = (event) => {
      const message: Message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Cleanup: Cerrar conexión
    return () => {
      console.log('Cerrando WebSocket');
      ws.close();
      setConnected(false);
    };
  }, []); // Solo al montar/desmontar

  return (
    <div>
      <p>Estado: {connected ? '🟢 Conectado' : '🔴 Desconectado'}</p>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.text}</li>
        ))}
      </ul>
    </div>
  );
};
```

---

### Caso 4: Fetch con AbortController

**Problema**: Fetch puede completarse después de que el componente se desmonte.

```tsx
// ❌ PROBLEMA: Actualiza state de componente desmontado
const BadFetch: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => res.json())
      .then((data) => {
        setData(data); // ❌ Puede ejecutarse después de desmontar
      });
  }, []);

  return <div>{data?.title}</div>;
};

// Si el usuario navega rápido:
// - Componente se desmonta
// - Fetch completa después
// - setData causa warning
```

**Solución**: Usar AbortController

```tsx
import React, { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const GoodFetch: React.FC = () => {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Crear AbortController
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts/1',
          { signal }, // ← Pasar signal
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();

        // Solo actualizar si no fue abortado
        if (!signal.aborted) {
          setData(json);
        }
      } catch (err) {
        // Ignorar errores de abort
        if (err instanceof Error && err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup: Abortar fetch
    return () => {
      console.log('Abortando fetch');
      abortController.abort();
    };
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};
```

**Flujo con cleanup**:

1. Componente monta → fetch inicia
2. Usuario navega rápido → componente desmonta
3. Cleanup ejecuta → `abort()` cancela fetch
4. Fetch se cancela → no actualiza state ✅

---

### Caso 5: Observadores (IntersectionObserver)

```tsx
import React, { useRef, useEffect, useState } from 'react';

const LazyImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Crear observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Dejar de observar una vez visible
          if (imgRef.current) {
            observer.unobserve(imgRef.current);
          }
        }
      },
      { threshold: 0.1 },
    );

    // Iniciar observación
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Cleanup: Desconectar observer
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : '/placeholder.png'}
      alt={alt}
      style={{ width: '100%', height: 'auto' }}
    />
  );
};
```

---

## 🔍 Cleanup con Dependencias

Cuando las dependencias cambian, el cleanup del efecto anterior se ejecuta **antes** del nuevo efecto.

```tsx
import React, { useState, useEffect } from 'react';

const SearchSubscription: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    console.log(`🔍 Suscribiendo a búsqueda: "${query}"`);

    // Simular suscripción
    const subscription = subscribeToSearch(query, (results) => {
      console.log('Resultados:', results);
    });

    // Cleanup: Cancelar suscripción anterior
    return () => {
      console.log(`🧹 Cancelando suscripción: "${query}"`);
      subscription.cancel();
    };
  }, [query]); // Cuando query cambia

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Buscar..."
    />
  );
};

// Usuario escribe "r":
// 🔍 Suscribiendo a búsqueda: "r"

// Usuario escribe "re":
// 🧹 Cancelando suscripción: "r" ← Cleanup del anterior
// 🔍 Suscribiendo a búsqueda: "re" ← Nuevo efecto

// Usuario escribe "rea":
// 🧹 Cancelando suscripción: "re"
// 🔍 Suscribiendo a búsqueda: "rea"

// Componente se desmonta:
// 🧹 Cancelando suscripción: "rea"
```

**Ventaja**: Cada efecto limpia el anterior automáticamente.

---

## 📝 TypeScript con Cleanup

El cleanup debe retornar `void` o `undefined`:

```tsx
// ✅ CORRECTO: Cleanup retorna void
useEffect(() => {
  const id = setInterval(() => {}, 1000);

  return (): void => {
    clearInterval(id);
  };
}, []);

// ✅ CORRECTO: Cleanup sin anotación (inferido como void)
useEffect(() => {
  const id = setInterval(() => {}, 1000);

  return () => {
    clearInterval(id);
  };
}, []);

// ❌ INCORRECTO: Cleanup no puede retornar valores
useEffect(() => {
  return (): number => {
    return 42; // ❌ Error de TypeScript
  };
}, []);
```

---

## ✅ Checklist de Cleanup

¿Cuándo necesitas cleanup?

- [ ] ¿Configuras un timer? → `clearTimeout` / `clearInterval`
- [ ] ¿Agregas event listener? → `removeEventListener`
- [ ] ¿Abres WebSocket/conexión? → Cerrar conexión
- [ ] ¿Haces fetch? → `AbortController.abort()`
- [ ] ¿Creas observer? → `observer.disconnect()`
- [ ] ¿Te suscribes a algo? → Cancelar suscripción
- [ ] ¿Manipulas el DOM? → Restaurar estado original

**Regla de oro**: Si tu efecto "configura" algo, el cleanup debe "limpiarlo".

---

## 🚨 Errores Comunes

### Error 1: Olvidar Cleanup

```tsx
// ❌ MAL: Interval nunca se limpia
const Bad: React.FC = () => {
  useEffect(() => {
    setInterval(() => {
      console.log('Tick');
    }, 1000);
    // ❌ Falta return con clearInterval
  }, []);

  return <div>Component</div>;
};
```

### Error 2: Cleanup con Sintaxis Incorrecta

```tsx
// ❌ INCORRECTO: Cleanup debe ser función retornada
useEffect(() => {
  const id = setInterval(() => {}, 1000);
  clearInterval(id); // ❌ Esto limpia inmediatamente, no al desmontar
}, []);

// ✅ CORRECTO: Retornar función
useEffect(() => {
  const id = setInterval(() => {}, 1000);

  return () => {
    clearInterval(id); // ✅ Se ejecuta al desmontar
  };
}, []);
```

### Error 3: Cleanup Asíncrono

```tsx
// ❌ INCORRECTO: Cleanup no puede ser async
useEffect(() => {
  return async () => {
    await cleanupAsync(); // ❌ Error
  };
}, []);

// ✅ CORRECTO: Llamar async dentro de cleanup síncrono
useEffect(() => {
  return () => {
    cleanupAsync(); // ✅ Funciona (pero no espera)
  };
}, []);

// ✅ MEJOR: Si necesitas esperar, usar IIFE
useEffect(() => {
  return () => {
    (async (): Promise<void> => {
      await cleanupAsync();
    })();
  };
}, []);
```

---

## 💡 Patrón Avanzado: Custom Hook con Cleanup

Puedes encapsular lógica con cleanup en custom hooks:

```tsx
import { useEffect } from 'react';

// Custom hook para window resize
const useWindowSize = (): { width: number; height: number } => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = (): void => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup encapsulado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
};

// Uso en componente
const App: React.FC = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>
        Ventana: {width} x {height}
      </p>
    </div>
  );
};
```

**Ventaja**: El cleanup está encapsulado, el componente no necesita preocuparse.

---

## 📊 Resumen

**Funciones de cleanup** son esenciales para:

- ✅ Prevenir memory leaks
- ✅ Cancelar operaciones asíncronas
- ✅ Limpiar suscripciones y listeners
- ✅ Evitar warnings de React

**Cuándo se ejecuta cleanup**:

1. Antes del próximo efecto (si dependencias cambiaron)
2. Al desmontar el componente

**Reglas**:

- Si configuras algo → limpia
- Timers → clear
- Listeners → remove
- Conexiones → close
- Fetch → abort

**Próximo tema**: Casos de uso comunes con ejemplos del mundo real.

---

## 🔗 Recursos

- [React Docs - useEffect Cleanup](https://react.dev/reference/react/useEffect#my-cleanup-logic-runs-even-though-my-component-didnt-unmount)
- [AbortController MDN](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

---

**Siguiente**: [Casos de Uso Comunes →](./04-casos-uso-comunes.md)
