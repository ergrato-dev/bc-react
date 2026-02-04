# 02 - Configuración y API de Vitest

## 🎯 Objetivos de Aprendizaje

- Configurar Vitest en un proyecto React + Vite
- Conocer la API básica de Vitest
- Escribir tests unitarios con assertions
- Usar matchers comunes para diferentes tipos de datos

---

## 📖 ¿Qué es Vitest?

[Vitest](https://vitest.dev/) es un framework de testing moderno diseñado para Vite. Ofrece:

| Característica        | Beneficio                               |
| --------------------- | --------------------------------------- |
| **Velocidad**         | Usa el mismo pipeline de Vite (esbuild) |
| **Compatibilidad**    | API compatible con Jest                 |
| **HMR para tests**    | Re-ejecuta tests al guardar             |
| **TypeScript nativo** | Sin configuración adicional             |
| **ESM first**         | Soporte nativo de ES Modules            |

---

## 🛠️ Instalación y Configuración

### 1. Instalar Dependencias

```bash
pnpm add -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### 2. Configurar Vitest

Crea o modifica `vite.config.ts`:

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    // Entorno de testing (DOM simulado)
    environment: 'jsdom',

    // Setup file para configuración global
    setupFiles: ['./src/test/setup.ts'],

    // Habilitar globals (describe, test, expect sin importar)
    globals: true,

    // Incluir tipos de jest-dom
    typecheck: {
      tsconfig: './tsconfig.json',
    },

    // Patrón de archivos de test
    include: ['src/**/*.{test,spec}.{ts,tsx}'],

    // Excluir node_modules y dist
    exclude: ['node_modules', 'dist'],

    // Cobertura (opcional)
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/test/'],
    },
  },
});
```

### 3. Setup File Global

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom';

// Configuración global que se ejecuta antes de cada archivo de test
// Aquí puedes agregar mocks globales, configurar localStorage mock, etc.
```

### 4. Configurar TypeScript

Actualiza `tsconfig.json` para incluir los tipos:

```json
{
  "compilerOptions": {
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  }
}
```

### 5. Scripts en package.json

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:ui": "vitest --ui"
  }
}
```

---

## 📝 API Básica de Vitest

### Estructura de Tests

```typescript
import { describe, test, it, expect, beforeEach, afterEach } from 'vitest';

// describe: agrupa tests relacionados
describe('MiModulo', () => {
  // beforeEach: ejecuta antes de cada test
  beforeEach(() => {
    // Setup
  });

  // afterEach: ejecuta después de cada test
  afterEach(() => {
    // Cleanup
  });

  // test o it: define un caso de prueba
  test('hace algo específico', () => {
    // Test code
  });

  // Pueden anidarse
  describe('método específico', () => {
    test('caso 1', () => {});
    test('caso 2', () => {});
  });
});
```

### Assertions con expect()

```typescript
import { expect } from 'vitest';

// Igualdad
expect(value).toBe(expected); // Igualdad estricta (===)
expect(value).toEqual(expected); // Igualdad profunda (objetos/arrays)
expect(value).not.toBe(other); // Negación

// Truthiness
expect(value).toBeTruthy();
expect(value).toBeFalsy();
expect(value).toBeNull();
expect(value).toBeUndefined();
expect(value).toBeDefined();

// Números
expect(value).toBeGreaterThan(3);
expect(value).toBeGreaterThanOrEqual(3);
expect(value).toBeLessThan(5);
expect(value).toBeCloseTo(0.3, 5); // Para floats

// Strings
expect(string).toMatch(/regex/);
expect(string).toContain('substring');

// Arrays
expect(array).toContain(item);
expect(array).toHaveLength(3);

// Objetos
expect(obj).toHaveProperty('key');
expect(obj).toHaveProperty('key', 'value');
expect(obj).toMatchObject({ key: 'value' });

// Excepciones
expect(() => fn()).toThrow();
expect(() => fn()).toThrow('error message');
expect(() => fn()).toThrowError(/regex/);
```

---

## 🧪 Ejemplos Prácticos

### Testing de Funciones Puras

```typescript
// utils/math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error('No se puede dividir por cero');
  return a / b;
}

// utils/math.test.ts
import { describe, test, expect } from 'vitest';
import { add, divide } from './math';

describe('math utils', () => {
  describe('add', () => {
    test('suma dos números positivos', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('suma números negativos', () => {
      expect(add(-1, -1)).toBe(-2);
    });

    test('suma con cero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('divide', () => {
    test('divide dos números', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('lanza error al dividir por cero', () => {
      expect(() => divide(10, 0)).toThrow('No se puede dividir por cero');
    });
  });
});
```

### Testing de Funciones con Arrays/Objetos

```typescript
// utils/users.ts
interface User {
  id: number;
  name: string;
  active: boolean;
}

export function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.active);
}

export function findUserById(users: User[], id: number): User | undefined {
  return users.find((user) => user.id === id);
}

// utils/users.test.ts
import { describe, test, expect } from 'vitest';
import { filterActiveUsers, findUserById } from './users';

describe('user utils', () => {
  // Datos de prueba reutilizables
  const mockUsers = [
    { id: 1, name: 'Ana', active: true },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Carlos', active: true },
  ];

  describe('filterActiveUsers', () => {
    test('retorna solo usuarios activos', () => {
      const result = filterActiveUsers(mockUsers);

      expect(result).toHaveLength(2);
      expect(result).toEqual([
        { id: 1, name: 'Ana', active: true },
        { id: 3, name: 'Carlos', active: true },
      ]);
    });

    test('retorna array vacío si no hay usuarios activos', () => {
      const inactiveUsers = [{ id: 1, name: 'Test', active: false }];
      expect(filterActiveUsers(inactiveUsers)).toEqual([]);
    });

    test('retorna array vacío si la entrada está vacía', () => {
      expect(filterActiveUsers([])).toEqual([]);
    });
  });

  describe('findUserById', () => {
    test('encuentra usuario por id', () => {
      const user = findUserById(mockUsers, 2);

      expect(user).toBeDefined();
      expect(user).toMatchObject({ id: 2, name: 'Bob' });
    });

    test('retorna undefined si no encuentra usuario', () => {
      expect(findUserById(mockUsers, 999)).toBeUndefined();
    });
  });
});
```

### Testing de Funciones Async

```typescript
// api/fetchUser.ts
interface User {
  id: number;
  name: string;
}

export async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error('Usuario no encontrado');
  }
  return response.json();
}

// api/fetchUser.test.ts
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { fetchUser } from './fetchUser';

describe('fetchUser', () => {
  beforeEach(() => {
    // Reset mocks antes de cada test
    vi.resetAllMocks();
  });

  test('retorna usuario cuando la petición es exitosa', async () => {
    // Mock de fetch
    const mockUser = { id: 1, name: 'Juan' };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockUser),
    });

    const user = await fetchUser(1);

    expect(user).toEqual(mockUser);
    expect(fetch).toHaveBeenCalledWith('/api/users/1');
  });

  test('lanza error cuando el usuario no existe', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });

    await expect(fetchUser(999)).rejects.toThrow('Usuario no encontrado');
  });
});
```

---

## 🎭 Mocks Básicos

### vi.fn() - Mock Functions

```typescript
import { vi, expect, test } from 'vitest';

test('mock function básico', () => {
  // Crear función mock
  const mockFn = vi.fn();

  // Llamar la función
  mockFn('arg1', 'arg2');

  // Verificar llamadas
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith('arg1', 'arg2');
  expect(mockFn).toHaveBeenCalledTimes(1);
});

test('mock con valor de retorno', () => {
  const mockFn = vi.fn().mockReturnValue(42);

  expect(mockFn()).toBe(42);
});

test('mock con implementación', () => {
  const mockFn = vi.fn((x: number) => x * 2);

  expect(mockFn(5)).toBe(10);
});
```

### vi.spyOn() - Espiar Métodos

```typescript
import { vi, expect, test } from 'vitest';

test('espiar método de objeto', () => {
  const calculator = {
    add: (a: number, b: number) => a + b,
  };

  // Espiar el método
  const spy = vi.spyOn(calculator, 'add');

  calculator.add(2, 3);

  expect(spy).toHaveBeenCalledWith(2, 3);

  // Limpiar spy
  spy.mockRestore();
});
```

---

## 🏃 Ejecutando Tests

```bash
# Modo watch (re-ejecuta al guardar)
pnpm test

# Ejecutar una vez
pnpm test:run

# Ejecutar archivo específico
pnpm test Button.test.tsx

# Con cobertura
pnpm test:coverage

# UI interactiva
pnpm test:ui
```

---

## ✅ Checklist de Verificación

- [ ] Vitest instalado y configurado
- [ ] Setup file creado con jest-dom
- [ ] TypeScript configurado con tipos de Vitest
- [ ] Puedo ejecutar tests con `pnpm test`
- [ ] Entiendo describe, test, expect
- [ ] Conozco los matchers básicos
- [ ] Sé crear mocks con vi.fn()

---

## 🔗 Navegación

- ⬅️ [01 - Fundamentos de Testing](./01-fundamentos-testing.md)
- ➡️ [03 - React Testing Library](./03-react-testing-library.md)
- 🏠 [Inicio Semana 14](../README.md)
