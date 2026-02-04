# Ejercicio 04: Estabilizar con useCallback

## 🎯 Objetivo

Aprender a usar `useCallback` para estabilizar referencias de funciones y hacer que `React.memo` funcione correctamente.

## ⏱️ Tiempo Estimado

45 minutos

## 📋 Descripción

En este ejercicio aprenderás a:

1. Identificar el problema de referencias inestables de funciones
2. Aplicar `useCallback` para estabilizar funciones
3. Combinar `useCallback` con `React.memo` efectivamente
4. Usar la función de actualización de estado para evitar dependencias

## 📁 Estructura

```
ejercicio-04-usecallback/
├── README.md
├── starter/
│   └── src/
│       ├── App.tsx
│       └── components/
│           ├── TodoApp.tsx
│           ├── TodoList.tsx
│           ├── TodoItem.tsx
│           └── AddTodo.tsx
└── solution/
    └── (estructura con useCallback aplicado)
```

## 🚀 Instrucciones

### Paso 1: Instalar y Ejecutar

```bash
cd starter
pnpm install
pnpm dev
```

### Paso 2: Observar el Problema

1. Abre la consola del navegador
2. Marca un todo como completado
3. Observa: **TODOS los TodoItem se re-renderizan**

**Problema**: Aunque `TodoItem` tiene `React.memo`, las funciones `onToggle` y `onDelete` son nuevas en cada render.

### Paso 3: Aplicar useCallback a handleToggle

Abre `src/components/TodoApp.tsx` y descomenta:

```typescript
// ============================================
// PASO 3: Estabilizar handleToggle
// ============================================
// Descomenta las siguientes líneas:
// const handleToggle = useCallback((id: number) => {
//   setTodos(prev => prev.map(todo =>
//     todo.id === id ? { ...todo, completed: !todo.completed } : todo
//   ));
// }, []);
```

### Paso 4: Aplicar useCallback a handleDelete

```typescript
// ============================================
// PASO 4: Estabilizar handleDelete
// ============================================
// Descomenta las siguientes líneas:
// const handleDelete = useCallback((id: number) => {
//   setTodos(prev => prev.filter(todo => todo.id !== id));
// }, []);
```

### Paso 5: Aplicar useCallback a handleAdd

```typescript
// ============================================
// PASO 5: Estabilizar handleAdd
// ============================================
// Descomenta las siguientes líneas:
// const handleAdd = useCallback((text: string) => {
//   setTodos(prev => [...prev, {
//     id: Date.now(),
//     text,
//     completed: false,
//   }]);
// }, []);
```

### Paso 6: Verificar Mejora

Ahora al marcar un todo:

- Solo el TodoItem afectado debería renderizar
- Los otros TodoItem NO deberían aparecer en consola

## ✅ Criterios de Aceptación

- [ ] `useCallback` aplicado a `handleToggle`
- [ ] `useCallback` aplicado a `handleDelete`
- [ ] `useCallback` aplicado a `handleAdd`
- [ ] Dependencias vacías `[]` usando función de actualización
- [ ] Toggle de un todo NO re-renderiza otros todos
- [ ] Funcionalidad CRUD sigue funcionando

## 💡 Tips

### Por qué las dependencias están vacías

```typescript
// ❌ Con dependencia en todos
const handleDelete = useCallback(
  (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Usa 'todos' directamente
  },
  [todos],
); // Se recrea cuando todos cambia

// ✅ Sin dependencias usando función de actualización
const handleDelete = useCallback((id: number) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id)); // Usa 'prev'
}, []); // Nunca se recrea
```

### Cuándo useCallback es necesario

- ✅ Funciones pasadas a componentes con `React.memo`
- ✅ Funciones usadas en dependencias de `useEffect`
- ❌ Funciones que no se pasan como props
- ❌ Componentes sin `React.memo`

## 🔗 Siguiente

¡Felicidades! Has completado todos los ejercicios de optimización. Ahora aplica todo en el proyecto semanal.

➡️ [Proyecto: Dashboard Optimizado](../../3-proyecto/)
