# 🏋️ Ejercicio 01: Primera Query con useQuery

## 🎯 Objetivo

Aprender a usar `useQuery` para obtener datos de una API y manejar los estados de loading, error y success.

## 📋 Descripción

En este ejercicio crearás tu primera query con React Query para obtener una lista de usuarios de una API simulada.

## 📚 Conceptos Cubiertos

- Configuración de QueryClient y QueryClientProvider
- Hook useQuery básico
- Manejo de estados: isLoading, isError, isSuccess
- Query Key y Query Function
- Tipado con TypeScript

## 🔧 Instrucciones

### Paso 1: Configurar el QueryClient

Abre `starter/main.tsx` y descomenta la configuración del QueryClient.

**Concepto**: El QueryClient es el "cerebro" de React Query. Gestiona el caché, las configuraciones por defecto y la comunicación entre queries.

### Paso 2: Crear la API de usuarios

Abre `starter/api/users.ts` y descomenta la función para obtener usuarios.

**Concepto**: La queryFn debe ser una función que retorne una Promise. React Query manejará automáticamente el estado de loading y error.

### Paso 3: Crear el Custom Hook

Abre `starter/hooks/useUsers.ts` y descomenta el hook.

**Concepto**: Crear custom hooks encapsula la lógica de fetching y permite reutilizar queries en múltiples componentes.

### Paso 4: Implementar el Componente

Abre `starter/components/UserList.tsx` y descomenta el componente.

**Concepto**: useQuery retorna un objeto con data, isLoading, isError, y error. Usa estos valores para renderizar diferentes estados de la UI.

### Paso 5: Probar el DevTools

React Query DevTools te permite inspeccionar el estado del caché. Debería aparecer un botón flotante en la esquina inferior derecha.

## ✅ Criterios de Completitud

- [ ] QueryClient configurado correctamente
- [ ] Custom hook `useUsers` creado con tipos
- [ ] Componente muestra loading state
- [ ] Componente muestra error state
- [ ] Componente muestra lista de usuarios
- [ ] DevTools funcional

## 🧪 Verificación

1. Al cargar, debería aparecer "Cargando usuarios..."
2. Después de 1 segundo, debería mostrar la lista de usuarios
3. Los datos deben persistir en caché (refetch rápido)
4. DevTools debe mostrar la query ['users']

## 📁 Estructura de Archivos

```
ejercicio-01-primera-query/
├── README.md
├── starter/
│   ├── main.tsx
│   ├── App.tsx
│   ├── api/
│   │   └── users.ts
│   ├── hooks/
│   │   └── useUsers.ts
│   └── components/
│       └── UserList.tsx
└── solution/
    └── (misma estructura con código completo)
```

## 🔗 Recursos

- [useQuery Documentation](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery)
- [TypeScript with React Query](https://tanstack.com/query/latest/docs/framework/react/typescript)
