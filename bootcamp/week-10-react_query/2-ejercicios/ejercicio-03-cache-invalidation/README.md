# 🏋️ Ejercicio 03: Cache e Invalidación

## 🎯 Objetivo

Dominar las estrategias de caché de React Query: staleTime, gcTime, invalidación y actualización manual del caché.

## 📋 Descripción

En este ejercicio aprenderás a configurar el comportamiento del caché y usar diferentes estrategias de invalidación.

## 📚 Conceptos Cubiertos

- Configuración de staleTime y gcTime
- invalidateQueries con diferentes patrones
- setQueryData para actualización manual
- getQueryData para leer del caché
- Prefetching de datos

## 🔧 Instrucciones

### Paso 1: Configurar Tiempos de Caché

Abre `starter/hooks/useProducts.ts` y configura staleTime y gcTime.

### Paso 2: Implementar Invalidación

Abre `starter/hooks/useUpdateProduct.ts` e implementa la invalidación después de actualizar.

### Paso 3: Actualización Manual del Caché

Abre `starter/hooks/useOptimisticUpdate.ts` y usa setQueryData para actualizar sin refetch.

### Paso 4: Prefetching

Abre `starter/components/ProductList.tsx` e implementa prefetch al hacer hover.

## ✅ Criterios de Completitud

- [ ] staleTime configurado correctamente
- [ ] Invalidación funcional después de mutations
- [ ] Actualización manual del caché implementada
- [ ] Prefetching al hover funcionando

## 📁 Estructura de Archivos

```
ejercicio-03-cache-invalidation/
├── README.md
├── starter/
│   ├── main.tsx
│   ├── App.tsx
│   ├── api/
│   │   └── products.ts
│   ├── hooks/
│   │   ├── useProducts.ts
│   │   ├── useProduct.ts
│   │   └── useUpdateProduct.ts
│   └── components/
│       ├── ProductList.tsx
│       └── ProductDetail.tsx
└── solution/
    └── (código completo)
```
