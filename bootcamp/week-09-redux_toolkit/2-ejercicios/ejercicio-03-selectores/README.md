# Ejercicio 03: Selectores Memoizados con createSelector

## 🎯 Objetivo

Aprender a crear selectores memoizados con `createSelector` para optimizar el rendimiento y evitar cálculos redundantes.

## 📋 Descripción

En este ejercicio aprenderás:

- Crear selectores básicos para extraer datos del estado
- Usar `createSelector` para memoización automática
- Componer selectores derivados
- Crear selectores parametrizados (factory selectors)
- Optimizar renders con selectores eficientes

## ⏱️ Tiempo Estimado

35-45 minutos

---

## 📚 Conceptos Cubiertos

| Concepto          | Descripción                                                          |
| ----------------- | -------------------------------------------------------------------- |
| `createSelector`  | Crea selectores memoizados que solo recalculan si los inputs cambian |
| Input Selectors   | Funciones que extraen partes del estado                              |
| Output Selector   | Función que combina los inputs                                       |
| Composición       | Selectores que usan otros selectores                                 |
| Factory Selectors | Funciones que devuelven selectores parametrizados                    |

---

## 🛠️ Instrucciones

### Preparación

```bash
cd starter
pnpm install
```

---

### Paso 1: Definir Estado y Slice de Todos

Abre `starter/src/features/todos/todosSlice.ts` y descomenta la sección del **Paso 1**.

Define las interfaces y el slice básico:

```typescript
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface TodosState {
  items: Todo[];
  filter: 'all' | 'active' | 'completed';
}
```

**Concepto clave**: Separamos los datos (`items`) del estado de UI (`filter`) para mayor flexibilidad.

---

### Paso 2: Crear Selectores Básicos

Abre `starter/src/features/todos/todosSelectors.ts` y descomenta la sección del **Paso 2**.

Crea selectores para extraer partes del estado:

```typescript
// Selector básico - extrae items del estado
export const selectTodos = (state: RootState) => state.todos.items;

// Selector básico - extrae el filtro actual
export const selectFilter = (state: RootState) => state.todos.filter;
```

**Concepto clave**: Los selectores básicos son funciones puras que extraen datos sin transformación.

---

### Paso 3: Crear Selectores Memoizados

En el mismo archivo, descomenta la sección del **Paso 3**.

Usa `createSelector` para crear selectores derivados:

```typescript
// Selector memoizado - filtra según el estado del filtro
export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter], // Input selectors
  (todos, filter) => {
    // Output selector
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  },
);
```

**Concepto clave**: `createSelector` solo ejecuta el output selector si algún input cambió.

---

### Paso 4: Crear Selectores de Estadísticas

Descomenta la sección del **Paso 4** para crear selectores de cálculos:

```typescript
// Selector para estadísticas derivadas
export const selectTodoStats = createSelector([selectTodos], (todos) => ({
  total: todos.length,
  completed: todos.filter((t) => t.completed).length,
  active: todos.filter((t) => !t.completed).length,
  percentComplete: todos.length
    ? Math.round((todos.filter((t) => t.completed).length / todos.length) * 100)
    : 0,
}));
```

---

### Paso 5: Usar Selectores en Componentes

Abre `starter/src/features/todos/TodoList.tsx` y descomenta el código.

Usa los selectores memoizados en lugar de inline:

```typescript
// ❌ Evitar - crea nueva referencia cada render
// const filtered = useAppSelector(state =>
//   state.todos.items.filter(t => !t.completed)
// );

// ✅ Correcto - usa selector memoizado
const filteredTodos = useAppSelector(selectFilteredTodos);
const stats = useAppSelector(selectTodoStats);
```

---

### Paso 6: Verificar

```bash
pnpm dev
```

**Checklist de verificación:**

- [ ] Los filtros funcionan (All, Active, Completed)
- [ ] Las estadísticas se actualizan correctamente
- [ ] Redux DevTools muestra el estado correctamente
- [ ] Agregar/completar todos actualiza las estadísticas

---

## ✅ Criterios de Éxito

| Criterio           | Verificación                               |
| ------------------ | ------------------------------------------ |
| Selectores tipados | TypeScript infiere los tipos correctamente |
| Memoización        | Selectores no recalculan sin cambios       |
| Composición        | Selectores usan otros selectores           |
| UI reactiva        | Los filtros y stats funcionan              |

---

## 🔗 Navegación

← [Ejercicio 02: Async Thunk](../ejercicio-02-async-thunk/README.md) | [Ejercicio 04: Entity Adapter →](../ejercicio-04-entity-adapter/README.md)
