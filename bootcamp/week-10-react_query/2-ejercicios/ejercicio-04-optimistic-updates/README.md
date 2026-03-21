# 🚀 Ejercicio 04: Optimistic Updates

## 🎯 Objetivo

Implementar actualizaciones optimistas (optimistic updates) para mejorar la UX mostrando cambios inmediatamente antes de que el servidor responda.

## 📋 Conceptos Clave

- **Optimistic Updates**: Actualizar UI inmediatamente, asumiendo éxito
- **`onMutate`**: Callback para ejecutar lógica antes de la mutación
- **Snapshot**: Guardar estado previo para rollback
- **`onError`**: Restaurar estado si la mutación falla
- **`onSettled`**: Sincronizar con servidor siempre

## 📁 Estructura

```
ejercicio-04-optimistic-updates/
├── README.md
├── starter/
│   ├── api/
│   │   └── todos.ts
│   ├── hooks/
│   │   ├── useTodos.ts
│   │   └── useToggleTodo.ts
│   ├── components/
│   │   └── TodoList.tsx
│   ├── main.tsx
│   └── App.tsx
└── solution/
    └── (misma estructura con código completo)
```

## 🔧 Instrucciones

### Paso 1: Configurar la API Mock

**Abre `starter/api/todos.ts`** y descomenta el código para tener:

- Interface `Todo`
- Funciones `fetchTodos` y `toggleTodo`
- Simular posibles errores aleatorios

### Paso 2: Hook useTodos

**Abre `starter/hooks/useTodos.ts`** y descomenta para crear el hook con useQuery.

### Paso 3: Hook useToggleTodo con Optimistic Update

**Abre `starter/hooks/useToggleTodo.ts`** - este es el hook principal:

1. Implementa `onMutate`:
   - Cancelar queries pendientes
   - Guardar snapshot del estado actual
   - Actualizar caché optimísticamente
   - Retornar contexto con snapshot

2. Implementa `onError`:
   - Restaurar estado previo del snapshot

3. Implementa `onSettled`:
   - Invalidar queries para sincronizar

### Paso 4: Componente TodoList

**Abre `starter/components/TodoList.tsx`** y descomenta para mostrar la lista y manejar toggle.

### Paso 5: Configurar App

**Abre `starter/App.tsx`** y descomenta para usar el componente.

## ✅ Criterios de Éxito

- [ ] Toggle actualiza UI inmediatamente (sin esperar servidor)
- [ ] Si hay error, se restaura el estado previo
- [ ] Query se invalida después de cada mutación
- [ ] UX fluida sin flashes de loading

## 🧪 Prueba

1. Hacer click en un todo para toggle
2. El checkbox debe cambiar INMEDIATAMENTE
3. Si hay error aleatorio, debe volver al estado anterior
4. Observar en DevTools cómo se gestiona el caché

## 📚 Documentación

- [Optimistic Updates](https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates)
