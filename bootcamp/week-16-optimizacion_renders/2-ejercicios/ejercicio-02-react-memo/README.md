# Ejercicio 02: Aplicar React.memo

## 🎯 Objetivo

Aprender a usar `React.memo` para evitar renders innecesarios en componentes.

## 📋 Descripción

En este ejercicio aprenderás a:

1. Identificar cuándo aplicar `React.memo`
2. Implementar `React.memo` en componentes
3. Entender las limitaciones con funciones como props
4. Crear comparadores personalizados

## ⏱️ Tiempo Estimado

50 minutos

## 📁 Estructura

```
ejercicio-02-react-memo/
├── README.md
├── starter/
│   ├── package.json
│   ├── vite.config.ts
│   └── src/
│       ├── App.tsx
│       ├── components/
│       │   ├── ProductDashboard.tsx
│       │   ├── ProductList.tsx
│       │   ├── ProductCard.tsx
│       │   └── CartCounter.tsx
│       └── main.tsx
└── solution/
    └── (estructura con React.memo aplicado)
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
2. Haz click en "Agregar al carrito"
3. Observa los logs: **todos los ProductCard renderizan**

**Problema**: Actualizar el contador del carrito hace que toda la lista se vuelva a renderizar.

### Paso 3: Aplicar React.memo a ProductCard

Abre `src/components/ProductCard.tsx` y descomenta:

```typescript
// ============================================
// PASO 3: Aplicar React.memo
// ============================================

// Descomenta las siguientes líneas:
// import { memo } from 'react';
//
// export const ProductCard = memo(function ProductCard({ ... }) {
//   ...
// });
```

### Paso 4: Verificar que NO Funciona

Vuelve a hacer click en "Agregar al carrito".

**Pregunta**: ¿Por qué sigue renderizando todos los ProductCard?

**Respuesta**: Las funciones `onAddToCart` y `onRemove` son nuevas en cada render.

### Paso 5: Entender el Problema de Referencias

En `ProductDashboard.tsx`, observa:

```typescript
// ⚠️ Estas funciones se recrean en cada render
const handleAddToCart = (id: number) => { ... };
const handleRemove = (id: number) => { ... };
```

### Paso 6: Solución Temporal - Comparador Personalizado

Descomenta el comparador personalizado en `ProductCard.tsx`:

```typescript
// ============================================
// PASO 6: Comparador personalizado
// ============================================

// Descomenta las siguientes líneas:
// function areProductPropsEqual(
//   prevProps: ProductCardProps,
//   nextProps: ProductCardProps
// ): boolean {
//   return prevProps.product.id === nextProps.product.id;
// }
//
// export const ProductCard = memo(ProductCard, areProductPropsEqual);
```

### Paso 7: Verificar Mejora

Ahora al hacer click en "Agregar al carrito", solo debería renderizar el componente afectado.

## ✅ Criterios de Aceptación

- [ ] `React.memo` aplicado a `ProductCard`
- [ ] Comparador personalizado implementado
- [ ] Click en carrito NO re-renderiza todos los ProductCard
- [ ] Los productos aún funcionan (agregar/eliminar)
- [ ] Logs muestran renders reducidos

## 💡 Tips

- `React.memo` solo compara props superficialmente
- Las funciones son objetos, cada render crea una nueva referencia
- El comparador personalizado te da control total sobre cuándo re-renderizar
- En el siguiente ejercicio aprenderás `useCallback` para estabilizar funciones

## ⚠️ Nota Importante

El comparador personalizado que ignora funciones es una **solución temporal**. La solución correcta es usar `useCallback` (ejercicio 04).

Si el comparador ignora funciones y esas funciones cambian su comportamiento, podrías tener bugs.

## 🔗 Siguiente Ejercicio

Ahora que entiendes `React.memo` y sus limitaciones, aprende a memorizar valores con `useMemo`.

➡️ [Ejercicio 03: Optimizar con useMemo](../ejercicio-03-usememo/)
