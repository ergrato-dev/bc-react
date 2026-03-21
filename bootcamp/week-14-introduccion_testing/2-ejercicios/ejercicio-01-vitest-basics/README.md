# Ejercicio 01: Fundamentos de Vitest

## 🎯 Objetivo

Aprender a escribir tests básicos con Vitest usando el patrón AAA (Arrange-Act-Assert).

## ⏱️ Duración Estimada

45 minutos

---

## 📋 Descripción

En este ejercicio aprenderás a:

1. Estructurar tests con `describe` y `test`
2. Usar matchers de Vitest (`toBe`, `toEqual`, `toContain`, etc.)
3. Aplicar el patrón AAA en cada test
4. Crear funciones mock con `vi.fn()`

---

## 🚀 Instrucciones

### Paso 1: Configurar el Proyecto

El proyecto ya está configurado con Vitest. Explora la estructura:

```
ejercicio-01-vitest-basics/
├── starter/
│   ├── src/
│   │   ├── math.ts          # Funciones matemáticas
│   │   └── math.test.ts     # Tests (descomentar)
│   ├── package.json
│   └── vite.config.ts
└── solution/                 # Solución completa
```

### Paso 2: Instalar Dependencias

```bash
cd starter
pnpm install
```

### Paso 3: Ejecutar Tests

```bash
# Ejecutar tests una vez
pnpm test

# Ejecutar tests en modo watch
pnpm test:watch
```

### Paso 4: Completar los Tests

Abre `src/math.test.ts` y descomenta cada sección siguiendo las instrucciones.

---

## 📚 Conceptos Clave

### Estructura de un Test

```typescript
import { describe, test, expect } from 'vitest';

describe('NombreDelMódulo', () => {
  describe('nombreFunción', () => {
    test('describe qué hace el test', () => {
      // Arrange - Preparar
      const input = 5;

      // Act - Actuar
      const result = double(input);

      // Assert - Verificar
      expect(result).toBe(10);
    });
  });
});
```

### Matchers Comunes

| Matcher           | Uso                                |
| ----------------- | ---------------------------------- |
| `toBe(value)`     | Igualdad estricta (===)            |
| `toEqual(value)`  | Igualdad profunda (objetos/arrays) |
| `toBeTruthy()`    | Valor truthy                       |
| `toBeFalsy()`     | Valor falsy                        |
| `toContain(item)` | Array/string contiene item         |
| `toThrow()`       | Función lanza error                |

---

## ✅ Criterios de Éxito

- [ ] Todos los tests pasan (`pnpm test`)
- [ ] Cada test sigue el patrón AAA
- [ ] Los tests tienen nombres descriptivos
- [ ] Se usan los matchers correctos

---

## 🔗 Navegación

- ⬅️ [Teoría](../../1-teoria/)
- ➡️ [Ejercicio 02: RTL Queries](../ejercicio-02-rtl-queries/)
- 🏠 [Inicio Semana 14](../../README.md)
