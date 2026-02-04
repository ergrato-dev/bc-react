# 📖 Glosario - Semana 15: Testing Avanzado

## A

### AAA Pattern (Arrange-Act-Assert)

Patrón de estructura para tests que organiza el código en tres fases: preparar los datos (Arrange), ejecutar la acción (Act), y verificar el resultado (Assert).

```typescript
test('suma dos números', () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const result = add(a, b);

  // Assert
  expect(result).toBe(5);
});
```

### act()

Función de Testing Library que asegura que todas las actualizaciones de estado de React se procesen antes de hacer assertions. Necesaria para testing de hooks con efectos secundarios.

```typescript
await act(async () => {
  await result.current.fetchData();
});
```

---

## B

### Branch Coverage

Métrica de cobertura que mide el porcentaje de ramas condicionales (if/else, switch, ternarios) que fueron ejecutadas durante los tests.

---

## C

### Code Coverage

Métrica que indica qué porcentaje del código fuente fue ejecutado durante los tests. Incluye statements, branches, functions, y lines.

### Coverage Threshold

Umbral mínimo de cobertura requerido para que los tests pasen. Se configura en vitest/jest para forzar niveles mínimos de testing.

```typescript
coverage: {
  thresholds: {
    statements: 80,
    branches: 80,
    functions: 80,
    lines: 80,
  }
}
```

---

## F

### Fake

Implementación funcional simplificada de una dependencia. A diferencia de un mock, tiene comportamiento real pero simplificado.

### Function Coverage

Métrica de cobertura que mide el porcentaje de funciones que fueron llamadas durante los tests.

---

## H

### Handler (MSW)

Función que define cómo interceptar y responder a una petición HTTP específica en MSW.

```typescript
http.get('/api/users', () => {
  return HttpResponse.json([{ id: 1, name: 'User' }]);
});
```

---

## I

### Integration Test

Prueba que verifica la interacción entre múltiples unidades de código trabajando juntas. En React, testear un componente con sus hooks y servicios.

---

## L

### Line Coverage

Métrica de cobertura que mide el porcentaje de líneas de código que fueron ejecutadas durante los tests.

---

## M

### Mock

Objeto simulado que reemplaza una dependencia real durante los tests, permitiendo controlar su comportamiento y verificar interacciones.

```typescript
vi.mock('../services/api');
vi.mocked(fetchUser).mockResolvedValue({ id: 1, name: 'Test' });
```

### Mock Implementation

Implementación personalizada de un mock que define comportamiento específico.

```typescript
vi.mocked(fetch).mockImplementation((url) => {
  if (url.includes('error')) {
    return Promise.reject(new Error('Error'));
  }
  return Promise.resolve({ json: () => ({}) });
});
```

### Mock Service Worker (MSW)

Librería que intercepta peticiones HTTP a nivel de red, permitiendo mockear APIs sin modificar el código de la aplicación.

---

## R

### renderHook

Función de Testing Library para testear hooks de React de forma aislada, sin necesidad de un componente contenedor.

```typescript
const { result } = renderHook(() => useCounter(0));
expect(result.current.count).toBe(0);
```

---

## S

### Spy

Wrapper alrededor de una función real que permite rastrear llamadas mientras mantiene la implementación original.

```typescript
const spy = vi.spyOn(console, 'log');
myFunction();
expect(spy).toHaveBeenCalledWith('mensaje');
```

### Statement Coverage

Métrica de cobertura que mide el porcentaje de statements (sentencias) de código que fueron ejecutados durante los tests.

### Stub

Mock simple que retorna valores predefinidos sin lógica adicional. Útil para reemplazar dependencias con respuestas fijas.

---

## T

### Test Double

Término genérico para cualquier objeto que reemplaza uno real durante tests. Incluye mocks, spies, stubs, y fakes.

---

## U

### Unit Test

Prueba que verifica el funcionamiento de una unidad aislada de código (función, componente) sin dependencias externas.

---

## V

### vi.clearAllMocks()

Limpia el historial de llamadas de todos los mocks entre tests, manteniendo las implementaciones.

### vi.mock()

Función de Vitest para reemplazar completamente un módulo con una versión mockeada.

```typescript
vi.mock('../services/api', () => ({
  fetchUser: vi.fn(),
}));
```

### vi.restoreAllMocks()

Restaura todas las funciones mockeadas a sus implementaciones originales.

### vi.spyOn()

Crea un spy sobre un método de un objeto, permitiendo rastrear llamadas mientras preserva la implementación original.

```typescript
const spy = vi.spyOn(localStorage, 'setItem');
```

---

## W

### waitFor

Función asíncrona de Testing Library que espera hasta que una condición se cumpla o expire el timeout.

```typescript
await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument();
});
```

---

## Símbolos y Abreviaciones

| Símbolo | Significado                                |
| ------- | ------------------------------------------ |
| `vi`    | Objeto de Vitest para funciones de mocking |
| `MSW`   | Mock Service Worker                        |
| `RTL`   | React Testing Library                      |
| `AAA`   | Arrange-Act-Assert pattern                 |
| `SUT`   | System Under Test (sistema bajo prueba)    |

---

_Última actualización: Semana 15 del Bootcamp_
