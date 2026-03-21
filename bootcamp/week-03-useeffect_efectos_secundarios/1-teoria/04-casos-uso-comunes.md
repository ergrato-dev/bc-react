# Casos de Uso Comunes de useEffect

## 🎯 Objetivos de Aprendizaje

- Aplicar useEffect en escenarios del mundo real
- Implementar fetch de datos correctamente
- Gestionar timers y contadores
- Trabajar con APIs del navegador
- Integrar librerías externas

---

## � Diagramas

### Casos de Uso Comunes

![Casos de Uso Comunes](../0-assets/06-common-use-cases.svg)

### Patrón de Fetch con Estados

![Patrón de Fetch](../0-assets/04-fetch-pattern.svg)

---

## �💡 Caso 1: Fetching de Datos

El caso de uso más común: obtener datos desde una API.

### Patrón Básico

```tsx
import React, { useState, useEffect } from 'react';

// QUÉ: Ejemplo básico de fetch con useEffect
// PARA: Cargar datos desde una API al montar el componente
// IMPACTO: Patrón fundamental para apps con datos remotos

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  // QUÉ: Estado para datos, carga y errores
  // PARA: Gestionar los tres estados de una petición
  // IMPACTO: UI refleja correctamente el estado de la petición
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // QUÉ: Función async dentro del efecto
    // PARA: useEffect no puede ser async directamente
    // IMPACTO: Permite usar await sin convertir el efecto en async
    const fetchUsers = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Solo al montar

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};
```

### Con AbortController (Recomendado)

```tsx
useEffect(() => {
  const abortController = new AbortController();

  const fetchUsers = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { signal: abortController.signal }, // ← Cancelable
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: User[] = await response.json();

      // Solo actualizar si no fue abortado
      if (!abortController.signal.aborted) {
        setUsers(data);
      }
    } catch (err) {
      // Ignorar errores de abort
      if (err instanceof Error && err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      if (!abortController.signal.aborted) {
        setLoading(false);
      }
    }
  };

  fetchUsers();

  // Cleanup: Cancelar fetch al desmontar
  return () => {
    abortController.abort();
  };
}, []);
```

### Fetch con Dependencias

```tsx
import React, { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostViewer: React.FC = () => {
  const [postId, setPostId] = useState<number>(1);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchPost = async (): Promise<void> => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
          { signal: abortController.signal },
        );

        const data: Post = await response.json();

        if (!abortController.signal.aborted) {
          setPost(data);
        }
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error(err);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchPost();

    return () => {
      abortController.abort();
    };
  }, [postId]); // ← Re-fetch cuando postId cambia

  return (
    <div>
      <button
        onClick={() => setPostId(postId - 1)}
        disabled={postId === 1}>
        Anterior
      </button>
      <button onClick={() => setPostId(postId + 1)}>Siguiente</button>

      {loading ? (
        <p>Cargando post {postId}...</p>
      ) : post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : null}
    </div>
  );
};
```

---

## ⏱️ Caso 2: Timers y Contadores

### Contador con setInterval

```tsx
import React, { useState, useEffect } from 'react';

// QUÉ: Cronómetro con setInterval y useEffect
// PARA: Incrementar contador cada segundo cuando está activo
// IMPACTO: Sin cleanup, interval seguiría ejecutándose tras desmontaje

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number | undefined;

    if (isActive) {
      // QUÉ: setInterval que actualiza estado cada segundo
      // PARA: Incrementar contador mientras esté activo
      // IMPACTO: Usa función updater (prev) para evitar closure stale
      intervalId = window.setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // QUÉ: Cleanup que detiene el interval
    // PARA: Limpiar cuando isActive cambia o al desmontar
    // IMPACTO: Previene memory leak de interval corriendo indefinidamente
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isActive]); // Re-ejecutar cuando isActive cambia

  const toggle = (): void => {
    setIsActive(!isActive);
  };

  const reset = (): void => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h1>{seconds}s</h1>
      <button onClick={toggle}>{isActive ? 'Pausar' : 'Iniciar'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```

### Countdown Timer

```tsx
import React, { useState, useEffect } from 'react';

const Countdown: React.FC<{ initialSeconds: number }> = ({
  initialSeconds,
}) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning || seconds === 0) {
      return; // No hacer nada si está pausado o terminó
    }

    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setIsRunning(false); // Detener cuando llegue a 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, seconds]);

  return (
    <div>
      <h2>{seconds}s restantes</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pausar' : 'Iniciar'}
      </button>
      <button
        onClick={() => {
          setSeconds(initialSeconds);
          setIsRunning(false);
        }}>
        Reiniciar
      </button>
    </div>
  );
};
```

---

## 📍 Caso 3: APIs del Navegador

### LocalStorage Sync

```tsx
import React, { useState, useEffect } from 'react';

const useLocalStorage = <T,>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  // Leer de localStorage al montar
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Guardar en localStorage cuando cambia
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

// Uso
const PreferencesPanel: React.FC = () => {
  const [theme, setTheme] = useLocalStorage<string>('theme', 'light');
  const [fontSize, setFontSize] = useLocalStorage<number>('fontSize', 16);

  return (
    <div>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Claro</option>
        <option value="dark">Oscuro</option>
      </select>

      <input
        type="number"
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
      />
    </div>
  );
};
```

### Document Title

```tsx
import { useEffect } from 'react';

const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    // Cleanup: Restaurar título anterior
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

// Uso
const ProductPage: React.FC<{ productName: string }> = ({ productName }) => {
  useDocumentTitle(`${productName} - Mi Tienda`);

  return <div>Detalles del producto</div>;
};
```

### Online/Offline Detection

```tsx
import React, { useState, useEffect } from 'react';

// QUÉ: Hook que detecta si el navegador está online/offline
// PARA: Reaccionar a cambios en la conectividad de red
// IMPACTO: UI puede mostrar mensajes o deshabilitar features sin conexión

const useOnlineStatus = (): boolean => {
  // QUÉ: Estado inicializado con navigator.onLine
  // PARA: Obtener el estado actual de conexión
  // IMPACTO: Estado correcto desde el primer render
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = (): void => setIsOnline(true);
    const handleOffline = (): void => setIsOnline(false);

    // QUÉ: Listeners para eventos online/offline
    // PARA: Actualizar estado cuando cambia la conectividad
    // IMPACTO: UI reactiva a cambios de red en tiempo real
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
};

// Uso
const App: React.FC = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <p>Estado: {isOnline ? '🟢 Online' : '🔴 Offline'}</p>
    </div>
  );
};
```

---

## 🎨 Caso 4: Integración con Librerías Externas

### Chart.js

```tsx
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

interface ChartProps {
  data: number[];
  labels: string[];
}

const LineChart: React.FC<ChartProps> = ({ data, labels }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Crear chart
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Ventas',
            data,
            borderColor: 'rgb(75, 192, 192)',
          },
        ],
      },
    });

    // Cleanup: Destruir chart
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, labels]); // Re-crear cuando data cambia

  return <canvas ref={canvasRef} />;
};
```

### Google Maps

```tsx
import React, { useRef, useEffect } from 'react';

interface MapProps {
  center: { lat: number; lng: number };
  zoom: number;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Crear mapa
    googleMapRef.current = new google.maps.Map(mapRef.current, {
      center,
      zoom,
    });

    // Cleanup no necesario (Google Maps maneja la limpieza)
  }, []); // Solo una vez

  // Actualizar centro cuando cambia
  useEffect(() => {
    if (googleMapRef.current) {
      googleMapRef.current.setCenter(center);
    }
  }, [center]);

  // Actualizar zoom cuando cambia
  useEffect(() => {
    if (googleMapRef.current) {
      googleMapRef.current.setZoom(zoom);
    }
  }, [zoom]);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '400px' }}
    />
  );
};
```

---

## 📊 Caso 5: Polling (Actualización Periódica)

```tsx
import React, { useState, useEffect } from 'react';

interface CryptoPrice {
  symbol: string;
  price: number;
  timestamp: number;
}

const CryptoPriceTracker: React.FC<{ symbol: string }> = ({ symbol }) => {
  const [price, setPrice] = useState<CryptoPrice | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    const fetchPrice = async (): Promise<void> => {
      try {
        const response = await fetch(
          `https://api.example.com/crypto/${symbol}`,
        );
        const data: CryptoPrice = await response.json();
        setPrice(data);
        setLastUpdate(new Date());
      } catch (err) {
        console.error('Error fetching price:', err);
      }
    };

    // Fetch inicial
    fetchPrice();

    // Polling cada 5 segundos
    const intervalId = setInterval(() => {
      fetchPrice();
    }, 5000);

    // Cleanup: Detener polling
    return () => {
      clearInterval(intervalId);
    };
  }, [symbol]); // Re-iniciar polling si symbol cambia

  return (
    <div>
      <h2>{symbol}</h2>
      {price ? (
        <>
          <p>Precio: ${price.price.toFixed(2)}</p>
          <p>Última actualización: {lastUpdate.toLocaleTimeString()}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};
```

---

## 🔄 Caso 6: Sincronización con Props

```tsx
import React, { useState, useEffect } from 'react';

interface FormProps {
  initialData: {
    name: string;
    email: string;
  };
}

const EditableForm: React.FC<FormProps> = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData);

  // Sincronizar cuando initialData cambia (ej: cargar otro usuario)
  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  return (
    <form>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </form>
  );
};
```

---

## ⚡ Caso 7: Debounce de Búsqueda

```tsx
import React, { useState, useEffect } from 'react';

const SearchWithDebounce: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedTerm, setDebouncedTerm] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);

  // Debounce: Actualizar debouncedTerm después de 500ms sin cambios
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    // Cleanup: Cancelar timeout si searchTerm cambia antes de 500ms
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  // Buscar solo cuando debouncedTerm cambia
  useEffect(() => {
    if (debouncedTerm.length > 2) {
      fetch(`https://api.example.com/search?q=${debouncedTerm}`)
        .then((res) => res.json())
        .then((data) => setResults(data));
    } else {
      setResults([]);
    }
  }, [debouncedTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar..."
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};
```

---

## ✅ Resumen de Patrones

| Caso de Uso            | Dependencias | Cleanup             | Ejemplo                   |
| ---------------------- | ------------ | ------------------- | ------------------------- |
| **Fetch inicial**      | `[]`         | AbortController     | Cargar usuarios al montar |
| **Fetch con params**   | `[id]`       | AbortController     | Cargar post según ID      |
| **Timer**              | `[isActive]` | clearInterval       | Cronómetro                |
| **Event listeners**    | `[]`         | removeEventListener | Window resize             |
| **LocalStorage**       | `[value]`    | No necesario        | Guardar preferencias      |
| **Polling**            | `[symbol]`   | clearInterval       | Precios crypto            |
| **Debounce**           | `[input]`    | clearTimeout        | Búsqueda optimizada       |
| **Librerías externas** | Varía        | destroy()           | Chart.js, Google Maps     |

---

## 📚 Recursos

- [React Docs - Effects Examples](https://react.dev/learn/synchronizing-with-effects#examples-of-connecting-to-an-external-system)
- [usehooks.com](https://usehooks.com/) - Custom hooks collection

---

**🎓 Has completado la teoría de Week 03!**

**Siguiente**: Practica con los [ejercicios →](../2-ejercicios/README.md)
