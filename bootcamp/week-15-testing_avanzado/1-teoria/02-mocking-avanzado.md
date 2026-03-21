# 02 - Mocking Avanzado

## 🎯 Objetivos de Aprendizaje

- Dominar `vi.mock` para mockear módulos completos
- Usar `vi.spyOn` para espiar funciones existentes
- Crear implementaciones de mock personalizadas
- Aplicar estrategias de limpieza entre tests

---

## 📖 ¿Por Qué Mockear?

El mocking nos permite:

| Beneficio        | Descripción                                      |
| ---------------- | ------------------------------------------------ |
| **Aislamiento**  | Testear unidades sin dependencias externas       |
| **Velocidad**    | Evitar llamadas lentas a APIs o bases de datos   |
| **Control**      | Simular escenarios difíciles (errores, timeouts) |
| **Determinismo** | Tests reproducibles sin estado externo           |

---

## 🔧 vi.mock vs vi.spyOn

### Diferencias Clave

| Característica | vi.mock                      | vi.spyOn                         |
| -------------- | ---------------------------- | -------------------------------- |
| **Alcance**    | Módulo completo              | Función específica               |
| **Timing**     | Hoisted (se ejecuta primero) | En tiempo de ejecución           |
| **Original**   | Reemplaza completamente      | Preserva comportamiento original |
| **Uso típico** | Módulos externos, APIs       | Métodos de objetos               |

---

## 📦 vi.mock: Mockeando Módulos

### Sintaxis Básica

```typescript
import { vi, describe, test, expect } from 'vitest';

// Mock de módulo - se "hoistea" al inicio
vi.mock('./api/users');

import { fetchUsers } from './api/users';

describe('UserList', () => {
  test('muestra usuarios', async () => {
    // Definir implementación del mock
    vi.mocked(fetchUsers).mockResolvedValue([
      { id: 1, name: 'Juan' },
      { id: 2, name: 'María' },
    ]);

    // ... resto del test
  });
});
```

### Mock con Factory Function

```typescript
// Definir mock con implementación por defecto
vi.mock('./services/analytics', () => ({
  trackEvent: vi.fn(),
  trackPageView: vi.fn(),
  getSessionId: vi.fn(() => 'mock-session-123'),
}));

import { trackEvent, getSessionId } from './services/analytics';

describe('Analytics', () => {
  test('trackea eventos', () => {
    trackEvent('button_click', { button: 'submit' });

    expect(trackEvent).toHaveBeenCalledWith('button_click', {
      button: 'submit',
    });
  });

  test('retorna session ID mockeado', () => {
    expect(getSessionId()).toBe('mock-session-123');
  });
});
```

### Mock Parcial (Mantener Algunas Funciones)

```typescript
vi.mock('./utils/helpers', async (importOriginal) => {
  // Importar el módulo original
  const actual = await importOriginal<typeof import('./utils/helpers')>();

  return {
    ...actual, // Mantener funciones originales
    formatDate: vi.fn(() => '2025-01-01'), // Solo mockear esta
  };
});
```

---

## 🕵️ vi.spyOn: Espiando Funciones

### Espiar Métodos de Objetos

```typescript
import { vi, describe, test, expect, afterEach } from 'vitest';

describe('LocalStorage', () => {
  afterEach(() => {
    vi.restoreAllMocks(); // Restaurar implementación original
  });

  test('guarda valor en localStorage', () => {
    // Espiar setItem
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    localStorage.setItem('key', 'value');

    expect(setItemSpy).toHaveBeenCalledWith('key', 'value');
  });

  test('lee valor de localStorage', () => {
    // Espiar y mockear retorno
    const getItemSpy = vi
      .spyOn(Storage.prototype, 'getItem')
      .mockReturnValue('mocked value');

    const result = localStorage.getItem('key');

    expect(getItemSpy).toHaveBeenCalledWith('key');
    expect(result).toBe('mocked value');
  });
});
```

### Espiar console.log

```typescript
describe('Logger', () => {
  test('loguea mensajes de error', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    // Código que llama a console.error
    logError('Something went wrong');

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Something went wrong'),
    );

    consoleSpy.mockRestore();
  });
});
```

### Espiar Métodos de Clase

```typescript
class UserService {
  async getUser(id: number) {
    const response = await fetch(`/api/users/${id}`);
    return response.json();
  }
}

describe('UserService', () => {
  test('obtiene usuario por ID', async () => {
    const service = new UserService();

    // Espiar método de instancia
    const getUserSpy = vi
      .spyOn(service, 'getUser')
      .mockResolvedValue({ id: 1, name: 'Juan' });

    const user = await service.getUser(1);

    expect(getUserSpy).toHaveBeenCalledWith(1);
    expect(user.name).toBe('Juan');
  });
});
```

---

## 🎭 Implementaciones de Mock

### mockReturnValue vs mockResolvedValue

```typescript
const mockFn = vi.fn();

// Para funciones síncronas
mockFn.mockReturnValue('sync value');
mockFn.mockReturnValueOnce('first call');

// Para funciones async (Promise)
mockFn.mockResolvedValue({ data: 'async value' });
mockFn.mockResolvedValueOnce({ data: 'first async call' });

// Para simular errores async
mockFn.mockRejectedValue(new Error('Failed'));
mockFn.mockRejectedValueOnce(new Error('First call fails'));
```

### mockImplementation

```typescript
const mockFn = vi.fn();

// Implementación personalizada
mockFn.mockImplementation((x: number) => x * 2);
expect(mockFn(5)).toBe(10);

// Implementación solo para la próxima llamada
mockFn.mockImplementationOnce((x: number) => x * 3);
expect(mockFn(5)).toBe(15); // Primera llamada: x3
expect(mockFn(5)).toBe(10); // Siguientes: x2

// Implementación async
mockFn.mockImplementation(async (id: number) => {
  await new Promise((r) => setTimeout(r, 100));
  return { id, name: `User ${id}` };
});
```

---

## 🔄 Limpieza de Mocks

### Métodos de Limpieza

```typescript
import { vi, beforeEach, afterEach } from 'vitest';

// En cada test
beforeEach(() => {
  vi.clearAllMocks(); // Limpia historial de llamadas
});

afterEach(() => {
  vi.restoreAllMocks(); // Restaura implementaciones originales
  vi.resetAllMocks(); // Limpia historial + implementaciones mock
});
```

### Diferencias

| Método            | Limpia Llamadas | Restaura Original | Resetea Implementación |
| ----------------- | --------------- | ----------------- | ---------------------- |
| `clearAllMocks`   | ✅              | ❌                | ❌                     |
| `resetAllMocks`   | ✅              | ❌                | ✅                     |
| `restoreAllMocks` | ✅              | ✅                | ✅                     |

### Ejemplo Práctico

```typescript
describe('cleanup example', () => {
  const mockFn = vi.fn(() => 'default');

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('primera llamada', () => {
    mockFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('segunda llamada - contador reseteado', () => {
    mockFn();
    // Sin clearAllMocks, esto sería 2
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
```

---

## 📡 Mockeando Fetch

### Mock Simple de Fetch

```typescript
describe('API calls', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('fetch exitoso', async () => {
    const mockData = { id: 1, name: 'Test' };

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const response = await fetch('/api/data');
    const data = await response.json();

    expect(fetch).toHaveBeenCalledWith('/api/data');
    expect(data).toEqual(mockData);
  });

  test('fetch con error', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    const response = await fetch('/api/not-found');

    expect(response.ok).toBe(false);
    expect(response.status).toBe(404);
  });

  test('fetch con network error', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    await expect(fetch('/api/data')).rejects.toThrow('Network error');
  });
});
```

### Helper para Mock de Fetch

```typescript
// test/helpers/mockFetch.ts
export function mockFetch<T>(data: T, options: Partial<Response> = {}) {
  return vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: () => Promise.resolve(data),
    ...options,
  });
}

export function mockFetchError(status: number, message: string) {
  return vi.fn().mockResolvedValue({
    ok: false,
    status,
    statusText: message,
    json: () => Promise.resolve({ error: message }),
  });
}

// Uso en tests
import { mockFetch, mockFetchError } from './helpers/mockFetch';

test('carga datos', async () => {
  global.fetch = mockFetch([{ id: 1 }, { id: 2 }]);
  // ...
});

test('maneja error 404', async () => {
  global.fetch = mockFetchError(404, 'Not Found');
  // ...
});
```

---

## ⏰ Mockeando Timers

### vi.useFakeTimers

```typescript
describe('Timers', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('debounce espera el tiempo correcto', () => {
    const callback = vi.fn();
    const debouncedFn = debounce(callback, 500);

    debouncedFn();
    expect(callback).not.toHaveBeenCalled();

    // Avanzar 499ms
    vi.advanceTimersByTime(499);
    expect(callback).not.toHaveBeenCalled();

    // Avanzar 1ms más (total 500ms)
    vi.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('setInterval ejecuta múltiples veces', () => {
    const callback = vi.fn();

    setInterval(callback, 1000);

    vi.advanceTimersByTime(3000);

    expect(callback).toHaveBeenCalledTimes(3);
  });

  test('ejecutar todos los timers pendientes', () => {
    const callback = vi.fn();

    setTimeout(callback, 1000);
    setTimeout(callback, 2000);
    setTimeout(callback, 3000);

    vi.runAllTimers();

    expect(callback).toHaveBeenCalledTimes(3);
  });
});
```

### Mock de Date

```typescript
describe('Date mocking', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2025-06-15T10:00:00'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('formatea fecha actual', () => {
    const result = formatCurrentDate();
    expect(result).toBe('15/06/2025');
  });

  test('calcula días hasta fecha', () => {
    const result = daysUntil(new Date('2025-06-20'));
    expect(result).toBe(5);
  });
});
```

---

## 🎯 Patrones Comunes

### 1. Mock de Módulos de Terceros

```typescript
// Mock de axios
vi.mock('axios');
import axios from 'axios';

test('usa axios para fetch', async () => {
  vi.mocked(axios.get).mockResolvedValue({
    data: { users: [] },
  });

  const result = await fetchUsers();

  expect(axios.get).toHaveBeenCalledWith('/api/users');
});
```

### 2. Mock de Hooks de React Router

```typescript
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-router-dom')>();
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    useParams: () => ({ id: '123' }),
    useSearchParams: () => [new URLSearchParams('?page=1'), vi.fn()],
  };
});
```

### 3. Mock de Variables de Entorno

```typescript
describe('Environment variables', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  test('usa API URL de producción', async () => {
    process.env.VITE_API_URL = 'https://api.prod.com';

    // Re-importar módulo para que tome nuevo env
    const { apiUrl } = await import('./config');

    expect(apiUrl).toBe('https://api.prod.com');
  });
});
```

---

## ✅ Checklist de Verificación

- [ ] Sé cuándo usar `vi.mock` vs `vi.spyOn`
- [ ] Puedo crear mocks con implementaciones personalizadas
- [ ] Entiendo las diferencias entre clear/reset/restore
- [ ] Puedo mockear fetch y timers
- [ ] Aplico limpieza correcta entre tests

---

## 📚 Recursos Adicionales

- [Vitest Mocking Guide](https://vitest.dev/guide/mocking.html)
- [Vitest Mock Functions](https://vitest.dev/api/mock.html)
- [Testing JavaScript Mocking Fundamentals](https://testingjavascript.com/)
