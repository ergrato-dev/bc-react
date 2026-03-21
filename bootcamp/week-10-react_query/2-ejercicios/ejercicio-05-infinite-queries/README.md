# 🚀 Ejercicio 05: Infinite Queries

## 🎯 Objetivo

Implementar paginación infinita (infinite scroll) usando `useInfiniteQuery` de React Query para cargar datos progresivamente.

## 📋 Conceptos Clave

- **`useInfiniteQuery`**: Hook para paginación infinita
- **`getNextPageParam`**: Función que determina si hay más páginas
- **`fetchNextPage`**: Función para cargar la siguiente página
- **`hasNextPage`**: Boolean que indica si hay más datos
- **`isFetchingNextPage`**: Estado de carga de siguiente página
- **`pages`**: Array de páginas cargadas

## 📁 Estructura

```
ejercicio-05-infinite-queries/
├── README.md
├── starter/
│   ├── api/
│   │   └── posts.ts
│   ├── hooks/
│   │   └── usePosts.ts
│   ├── components/
│   │   └── PostList.tsx
│   ├── main.tsx
│   └── App.tsx
└── solution/
    └── (misma estructura con código completo)
```

## 🔧 Instrucciones

### Paso 1: Configurar la API con Paginación

**Abre `starter/api/posts.ts`** y descomenta el código para:

- Interface `Post` y `PostsResponse`
- Función `fetchPosts` que acepta `pageParam`
- Simular API paginada con límite

### Paso 2: Hook usePosts con useInfiniteQuery

**Abre `starter/hooks/usePosts.ts`** - este es el hook principal:

1. Configura `queryKey` y `queryFn`
2. Implementa `initialPageParam`
3. Implementa `getNextPageParam` para calcular siguiente página

### Paso 3: Componente PostList

**Abre `starter/components/PostList.tsx`** y descomenta para:

- Mostrar posts aplanando las páginas
- Botón "Cargar más" con `fetchNextPage`
- Mostrar estados de carga apropiados

### Paso 4: Configurar App

**Abre `starter/App.tsx`** y descomenta para usar el componente.

## ✅ Criterios de Éxito

- [ ] Posts se cargan página por página
- [ ] Botón "Cargar más" funciona correctamente
- [ ] Se muestra estado de carga al cargar más
- [ ] Botón se oculta cuando no hay más páginas
- [ ] Posts anteriores se mantienen al cargar nuevos

## 🧪 Prueba

1. Ver la primera página de posts cargada
2. Click en "Cargar más" para siguiente página
3. Verificar que posts se acumulan (no se reemplazan)
4. Cuando no hay más páginas, botón desaparece

## 📚 Documentación

- [Infinite Queries](https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries)
