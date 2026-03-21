# 01 - Testing de Custom Hooks

## 🎯 Objetivos de Aprendizaje

- Comprender cuándo y por qué testear hooks
- Usar `renderHook` de Testing Library
- Manejar `act` para actualizaciones de estado
- Testear hooks con efectos secundarios

---

## 📖 ¿Por Qué Testear Hooks?

Los custom hooks encapsulan lógica reutilizable. Testearlos de forma aislada nos permite:

| Beneficio         | Descripción                                       |
| ----------------- | ------------------------------------------------- |
| **Aislamiento**   | Verificar lógica sin depender de componentes      |
| **Reutilización** | Un hook testeado funciona en cualquier componente |
| **Refactoring**   | Cambiar implementación manteniendo comportamiento |
| **Documentación** | Los tests muestran cómo usar el hook              |

---

## 🔧 Configuración: @testing-library/react

`renderHook` viene incluido en `@testing-library/react` desde la versión 13.1.0:

```typescript
import { renderHook, act } from '@testing-library/react';
```

> **Nota**: Ya no necesitas instalar `@testing-library/react-hooks` por separado.

---

## 📝 Anatomía de un Test de Hook

### Hook Simple: useCounter

```typescript
// hooks/useCounter.ts
import { useState, useCallback } from 'react';

interface UseCounterOptions {
  initialValue?: number;
  min?: number;
  max?: number;
}

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export function useCounter(options: UseCounterOptions = {}): UseCounterReturn {
  const { initialValue = 0, min = -Infinity, max = Infinity } = options;
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prev) => Math.min(prev + 1, max));
  }, [max]);

  const decrement = useCallback(() => {
    setCount((prev) => Math.max(prev - 1, min));
  }, [min]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}
```

### Test del Hook

```typescript
// hooks/useCounter.test.ts
import { renderHook, act } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('inicia con valor por defecto 0', () => {
    // Arrange & Act
    const { result } = renderHook(() => useCounter());

    // Assert
    expect(result.current.count).toBe(0);
  });

  test('inicia con valor personalizado', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }));

    expect(result.current.count).toBe(10);
  });

  test('incrementa el contador', () => {
    const { result } = renderHook(() => useCounter());

    // Act - envolver actualizaciones de estado en act()
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test('decrementa el contador', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 5 }));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(4);
  });

  test('resetea al valor inicial', () => {
    const { result } = renderHook(() => useCounter({ initialValue: 10 }));

    act(() => {
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(12);

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(10);
  });

  test('respeta el límite máximo', () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: 9, max: 10 }),
    );

    act(() => {
      result.current.increment(); // 10
      result.current.increment(); // sigue en 10
    });

    expect(result.current.count).toBe(10);
  });

  test('respeta el límite mínimo', () => {
    const { result } = renderHook(() =>
      useCounter({ initialValue: 1, min: 0 }),
    );

    act(() => {
      result.current.decrement(); // 0
      result.current.decrement(); // sigue en 0
    });

    expect(result.current.count).toBe(0);
  });
});
```

---

## ⚡ La Función `act()`

`act()` es crucial para testear actualizaciones de estado:

```typescript
// ❌ Sin act - puede causar warnings y comportamiento inconsistente
result.current.increment();

// ✅ Con act - asegura que React procese todas las actualizaciones
act(() => {
  result.current.increment();
});
```

### ¿Cuándo Usar `act()`?

| Situación                           | Necesita act          |
| ----------------------------------- | --------------------- |
| Llamar función que actualiza estado | ✅ Sí                 |
| Leer valores del resultado          | ❌ No                 |
| Simular eventos con userEvent       | ❌ No (ya lo incluye) |
| Operaciones async dentro del hook   | ✅ Sí (await act)     |

---

## 🔄 Testing de Hooks con Efectos

### Hook con useEffect

```typescript
// hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  // Leer valor inicial de localStorage
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Persistir cambios en localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```

### Test con Mock de localStorage

```typescript
// hooks/useLocalStorage.test.ts
import { renderHook, act } from '@testing-library/react';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  // Mock de localStorage
  const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value;
      }),
      clear: vi.fn(() => {
        store = {};
      }),
    };
  })();

  beforeEach(() => {
    // Limpiar localStorage mock antes de cada test
    localStorageMock.clear();
    vi.clearAllMocks();

    // Asignar mock a window.localStorage
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
      writable: true,
    });
  });

  test('retorna valor inicial cuando localStorage está vacío', () => {
    const { result } = renderHook(() => useLocalStorage('theme', 'light'));

    expect(result.current[0]).toBe('light');
  });

  test('retorna valor de localStorage si existe', () => {
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify('dark'));

    const { result } = renderHook(() => useLocalStorage('theme', 'light'));

    expect(result.current[0]).toBe('dark');
  });

  test('actualiza localStorage cuando cambia el valor', () => {
    const { result } = renderHook(() => useLocalStorage('theme', 'light'));

    act(() => {
      result.current[1]('dark');
    });

    expect(result.current[0]).toBe('dark');
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'theme',
      JSON.stringify('dark'),
    );
  });

  test('maneja objetos complejos', () => {
    const initialUser = { name: 'Juan', age: 25 };

    const { result } = renderHook(() => useLocalStorage('user', initialUser));

    expect(result.current[0]).toEqual(initialUser);

    const updatedUser = { name: 'María', age: 30 };
    act(() => {
      result.current[1](updatedUser);
    });

    expect(result.current[0]).toEqual(updatedUser);
  });
});
```

---

## 🔀 Testing de Hooks Async

### Hook con Fetch

```typescript
// hooks/useFetch.ts
import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}
```

### Test Async con waitFor

```typescript
// hooks/useFetch.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import { useFetch } from './useFetch';

describe('useFetch', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('inicia en estado loading', () => {
    // Mock fetch que nunca resuelve
    global.fetch = vi.fn(() => new Promise(() => {}));

    const { result } = renderHook(() => useFetch<{ id: number }>('/api/data'));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
  });

  test('carga datos exitosamente', async () => {
    const mockData = { id: 1, name: 'Test' };

    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const { result } = renderHook(() => useFetch<typeof mockData>('/api/data'));

    // Esperar a que loading sea false
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  test('maneja errores de red', async () => {
    global.fetch = vi.fn().mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => useFetch('/api/data'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe('Network error');
  });

  test('maneja errores HTTP', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const { result } = renderHook(() => useFetch('/api/data'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe('HTTP error! status: 404');
  });
});
```

---

## 🎁 Testing con Providers (Context)

Cuando un hook usa Context, necesitamos un wrapper:

```typescript
// hooks/useAuth.test.ts
import { renderHook, act } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { ReactNode } from 'react';
import { AuthProvider, useAuth } from './AuthContext';

// Wrapper para proveer contexto
const wrapper = ({ children }: { children: ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe('useAuth', () => {
  test('inicia sin usuario autenticado', () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  test('login establece el usuario', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    await act(async () => {
      await result.current.login('test@example.com', 'password123');
    });

    expect(result.current.user).not.toBeNull();
    expect(result.current.isAuthenticated).toBe(true);
  });

  test('logout limpia el usuario', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper });

    // Primero hacer login
    await act(async () => {
      await result.current.login('test@example.com', 'password123');
    });

    // Luego logout
    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });
});
```

---

## ✅ Mejores Prácticas

### 1. Testear Comportamiento, No Implementación

```typescript
// ❌ Testear detalles internos
expect(result.current.internalState).toBe('value');

// ✅ Testear lo que el consumidor del hook usa
expect(result.current.isLoading).toBe(false);
expect(result.current.data).toEqual(expectedData);
```

### 2. Un Hook, Múltiples Escenarios

```typescript
describe('useCounter', () => {
  describe('inicialización', () => {
    test('valor por defecto', () => {
      /* ... */
    });
    test('valor personalizado', () => {
      /* ... */
    });
  });

  describe('incremento', () => {
    test('incrementa en 1', () => {
      /* ... */
    });
    test('respeta máximo', () => {
      /* ... */
    });
  });

  describe('decremento', () => {
    test('decrementa en 1', () => {
      /* ... */
    });
    test('respeta mínimo', () => {
      /* ... */
    });
  });
});
```

### 3. Limpiar Entre Tests

```typescript
beforeEach(() => {
  vi.clearAllMocks();
  // Limpiar cualquier estado global
});

afterEach(() => {
  // Restaurar mocks si es necesario
  vi.restoreAllMocks();
});
```

---

## ✅ Checklist de Verificación

- [ ] Comprendo cuándo usar `renderHook`
- [ ] Sé cuándo envolver código en `act()`
- [ ] Puedo testear hooks con efectos secundarios
- [ ] Entiendo cómo usar wrappers para Context
- [ ] Manejo tests async con `waitFor`

---

## 📚 Recursos Adicionales

- [Testing Library - renderHook](https://testing-library.com/docs/react-testing-library/api#renderhook)
- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [How to test custom React hooks](https://kentcdodds.com/blog/how-to-test-custom-react-hooks)
