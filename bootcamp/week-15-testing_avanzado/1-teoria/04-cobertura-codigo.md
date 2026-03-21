# 04 - Cobertura de Código y Mejores Prácticas

## 🎯 Objetivos de Aprendizaje

- Configurar y generar reportes de cobertura con Vitest
- Interpretar métricas de cobertura correctamente
- Definir umbrales de cobertura apropiados
- Aplicar mejores prácticas de testing en React

---

## 📖 ¿Qué es la Cobertura de Código?

La cobertura de código mide qué porcentaje de tu código es ejecutado por los tests.

### Tipos de Métricas

| Métrica        | Qué Mide              | Ejemplo              |
| -------------- | --------------------- | -------------------- |
| **Statements** | Líneas ejecutadas     | `const x = 1;`       |
| **Branches**   | Caminos condicionales | `if/else`, `? :`     |
| **Functions**  | Funciones llamadas    | `function foo() {}`  |
| **Lines**      | Líneas de código      | Similar a statements |

### Ejemplo Visual

```typescript
function calculateDiscount(price: number, isPremium: boolean): number {
  // Línea 1: Statement
  if (isPremium) {
    // Branch 1: if true
    return price * 0.8; // Statement
  } else {
    // Branch 2: if false
    return price * 0.95; // Statement
  }
}

// Si solo testeamos isPremium = true:
// - Statements: 75% (3 de 4 ejecutados)
// - Branches: 50% (1 de 2 branches)
// - Functions: 100% (función llamada)
```

---

## 🔧 Configuración de Cobertura

### Instalar Provider

```bash
pnpm add -D @vitest/coverage-v8
```

### Configuración en vite.config.ts

```typescript
// vite.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      // Provider de cobertura
      provider: 'v8',

      // Archivos a incluir
      include: ['src/**/*.{ts,tsx}'],

      // Archivos a excluir
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/**/*.spec.{ts,tsx}',
        'src/test/**',
        'src/main.tsx',
        'src/vite-env.d.ts',
        'src/**/*.d.ts',
      ],

      // Formatos de reporte
      reporter: ['text', 'html', 'json'],

      // Directorio de salida
      reportsDirectory: './coverage',

      // Umbrales mínimos (opcional)
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  },
});
```

### Scripts en package.json

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "coverage": "vitest run --coverage",
    "coverage:watch": "vitest --coverage"
  }
}
```

---

## 📊 Generando Reportes

### Ejecutar Cobertura

```bash
pnpm coverage
```

### Salida en Terminal

```
 ✓ src/components/Button.test.tsx (3 tests)
 ✓ src/hooks/useCounter.test.ts (5 tests)

 Test Files  2 passed (2)
      Tests  8 passed (8)

 % Coverage report from v8
-----------------------|---------|----------|---------|---------|
File                   | % Stmts | % Branch | % Funcs | % Lines |
-----------------------|---------|----------|---------|---------|
All files              |   85.71 |    83.33 |   90.00 |   85.71 |
 components            |   88.23 |    85.71 |  100.00 |   88.23 |
  Button.tsx           |  100.00 |   100.00 |  100.00 |  100.00 |
  UserList.tsx         |   76.47 |    71.43 |  100.00 |   76.47 |
 hooks                 |   83.33 |    80.00 |   80.00 |   83.33 |
  useCounter.ts        |  100.00 |   100.00 |  100.00 |  100.00 |
  useFetch.ts          |   66.67 |    60.00 |   60.00 |   66.67 |
-----------------------|---------|----------|---------|---------|
```

### Reporte HTML

El reporte HTML se genera en `./coverage/index.html`:

```bash
# Abrir en navegador
open coverage/index.html
# o en Linux
xdg-open coverage/index.html
```

El reporte HTML muestra:

- Vista general de cobertura por archivo
- Código fuente con líneas cubiertas/no cubiertas resaltadas
- Detalle de branches no cubiertos

---

## 📈 Interpretando Métricas

### ¿Qué Significa Cada Porcentaje?

```typescript
// Archivo con diferentes coberturas

// ✅ Cubierto
function add(a: number, b: number): number {
  return a + b; // Testeado
}

// ⚠️ Parcialmente cubierto (branch)
function getStatus(score: number): string {
  if (score >= 90) {
    return 'Excelente'; // ✅ Testeado
  } else if (score >= 70) {
    return 'Bueno'; // ❌ No testeado
  } else {
    return 'Regular'; // ❌ No testeado
  }
}

// ❌ No cubierto
function unusedFunction(): void {
  console.log('Never called');
}
```

### Resultado del Análisis

| Función          | Statements | Branches | ¿Por qué?                  |
| ---------------- | ---------- | -------- | -------------------------- |
| `add`            | 100%       | N/A      | Solo tiene una línea       |
| `getStatus`      | 50%        | 33%      | Solo se testea score >= 90 |
| `unusedFunction` | 0%         | N/A      | Nunca se llama             |

---

## ⚠️ Mitos sobre Cobertura

### Mito 1: "100% = Sin Bugs"

```typescript
// 100% cobertura, pero tiene bug
function divide(a: number, b: number): number {
  return a / b; // ¿Y si b = 0?
}

test('divide números', () => {
  expect(divide(10, 2)).toBe(5); // ✅ Pasa, 100% cobertura
});

// El bug de división por cero no se detecta
```

### Mito 2: "Más Cobertura = Mejor"

```typescript
// Test que aumenta cobertura pero no verifica nada
test('renders component', () => {
  render(<ComplexForm />);
  // No assertions = test inútil
});
```

### Mito 3: "La Cobertura Debe Ser 100%"

Algunos archivos no necesitan tests:

- Tipos e interfaces
- Constantes de configuración
- Re-exports (index.ts)
- Código generado

---

## 🎯 Umbrales Recomendados

### Por Tipo de Proyecto

| Tipo                      | Cobertura Recomendada |
| ------------------------- | --------------------- |
| **Librerías/Paquetes**    | 90-100%               |
| **Aplicaciones Críticas** | 80-90%                |
| **Aplicaciones Típicas**  | 70-80%                |
| **Prototipos/MVPs**       | 50-70%                |

### Por Tipo de Código

| Código                           | Prioridad | Objetivo |
| -------------------------------- | --------- | -------- |
| **Lógica de negocio**            | Alta      | 90%+     |
| **Utilidades reutilizables**     | Alta      | 90%+     |
| **Componentes UI críticos**      | Alta      | 80%+     |
| **Componentes presentacionales** | Media     | 60-80%   |
| **Páginas/Layouts**              | Baja      | 50-70%   |

---

## ✅ Mejores Prácticas de Testing

### 1. Testea Comportamiento, No Implementación

```typescript
// ❌ Mal: testea implementación
test('llama a setState con valor correcto', () => {
  const setStateSpy = vi.spyOn(React, 'useState');
  // ...
});

// ✅ Bien: testea comportamiento
test('muestra contador incrementado después de click', async () => {
  const user = userEvent.setup();
  render(<Counter />);

  await user.click(screen.getByRole('button', { name: /increment/i }));

  expect(screen.getByText('1')).toBeInTheDocument();
});
```

### 2. Un Test, Una Cosa

```typescript
// ❌ Mal: test que verifica múltiples cosas
test('formulario funciona', async () => {
  render(<Form />);
  // verifica validación
  // verifica submit
  // verifica reset
  // verifica errores
});

// ✅ Bien: tests específicos
test('muestra error cuando email es inválido', () => { /* ... */ });
test('envía datos cuando formulario es válido', () => { /* ... */ });
test('limpia campos después de submit exitoso', () => { /* ... */ });
```

### 3. Nombres Descriptivos

```typescript
// ❌ Mal
test('test 1', () => {
  /* ... */
});
test('works', () => {
  /* ... */
});

// ✅ Bien
test('muestra mensaje de error cuando la API falla', () => {
  /* ... */
});
test('deshabilita botón mientras carga', () => {
  /* ... */
});
```

### 4. Estructura AAA Consistente

```typescript
test('agrega item a la lista', async () => {
  // Arrange
  const user = userEvent.setup();
  render(<TodoList />);

  // Act
  await user.type(screen.getByRole('textbox'), 'Nueva tarea');
  await user.click(screen.getByRole('button', { name: /agregar/i }));

  // Assert
  expect(screen.getByText('Nueva tarea')).toBeInTheDocument();
});
```

### 5. Evita Tests Frágiles

```typescript
// ❌ Frágil: depende del orden
expect(items[0].textContent).toBe('Primero');

// ✅ Robusto: busca por contenido
expect(screen.getByText('Primero')).toBeInTheDocument();

// ❌ Frágil: snapshot de todo el componente
expect(container).toMatchSnapshot();

// ✅ Robusto: verifica estructura específica
expect(screen.getByRole('list')).toBeInTheDocument();
expect(screen.getAllByRole('listitem')).toHaveLength(3);
```

### 6. Tests Independientes

```typescript
// ❌ Mal: tests dependen del orden
let sharedState;

test('test 1 modifica estado', () => {
  sharedState = 'modified';
});

test('test 2 usa estado modificado', () => {
  expect(sharedState).toBe('modified'); // Falla si se ejecuta solo
});

// ✅ Bien: cada test es independiente
describe('con setup propio', () => {
  let state;

  beforeEach(() => {
    state = createInitialState();
  });

  test('test 1', () => {
    /* usa state fresco */
  });
  test('test 2', () => {
    /* usa state fresco */
  });
});
```

---

## 📝 Checklist de Testing

### Antes de Commit

- [ ] Todos los tests pasan (`pnpm test:run`)
- [ ] Cobertura cumple umbral mínimo (`pnpm coverage`)
- [ ] Tests nuevos para código nuevo
- [ ] No hay tests comentados o skipped sin razón

### Code Review

- [ ] Tests son legibles y descriptivos
- [ ] Cubren happy path y edge cases
- [ ] No hay assertions redundantes
- [ ] Mocks se limpian correctamente

### Mantenimiento

- [ ] Eliminar tests obsoletos
- [ ] Actualizar tests cuando cambia el comportamiento
- [ ] Revisar tests que fallan intermitentemente

---

## 🚫 Antipatrones a Evitar

| Antipatrón              | Problema             | Solución               |
| ----------------------- | -------------------- | ---------------------- |
| **Test sin assertions** | No verifica nada     | Agregar expects        |
| **Tests lentos**        | CI lento, se evitan  | Mockear I/O            |
| **Tests acoplados**     | Fallan en cascada    | Independizarlos        |
| **Snapshot abuse**      | Cambios sin revisión | Assertions específicas |
| **Mock everything**     | Tests no realistas   | Mocks estratégicos     |

---

## ✅ Checklist de Verificación

- [ ] Puedo configurar cobertura con Vitest
- [ ] Interpreto correctamente las métricas
- [ ] Entiendo que 100% no garantiza calidad
- [ ] Aplico mejores prácticas en mis tests
- [ ] Evito los antipatrones comunes

---

## 📚 Recursos Adicionales

- [Vitest Coverage](https://vitest.dev/guide/coverage.html)
- [Testing Trophy - Kent C. Dodds](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
- [Test Driven Development](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)
