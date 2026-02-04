# 📖 Glosario - Semana 16: Optimización de Renders

## A

### Actualización de Estado (State Update)

Cambio en el valor del estado de un componente que puede desencadenar un re-render. React agrupa múltiples actualizaciones en un solo render cuando es posible (batching).

---

## B

### Batching

Técnica de React que agrupa múltiples actualizaciones de estado en un solo render para mejorar el rendimiento. En React 18, el batching automático se aplica también a promesas y eventos nativos.

---

## C

### Comparación Superficial (Shallow Comparison)

Método de comparación que verifica si dos objetos tienen las mismas referencias de primer nivel. Es el método por defecto usado por `React.memo` y `PureComponent`.

```typescript
// Ejemplo: comparación superficial
const obj1 = { name: 'Juan', address: { city: 'Lima' } };
const obj2 = { name: 'Juan', address: { city: 'Lima' } };

// Shallow comparison: obj1 !== obj2 (diferentes referencias)
// Aunque tengan los mismos valores, son objetos diferentes
```

### Componente Puro (Pure Component)

Componente que renderiza el mismo output dado el mismo input (props y estado). Ideal para optimizaciones con `React.memo`.

### Custom Comparator

Función personalizada pasada como segundo argumento a `React.memo` para definir criterios de comparación específicos.

```typescript
const areEqual = (prevProps: Props, nextProps: Props) => {
  return prevProps.id === nextProps.id;
};

const MemoizedComponent = memo(Component, areEqual);
```

---

## D

### Dependencias (Dependencies)

Array de valores que determinan cuándo un hook debe recalcular su valor o ejecutar su efecto. Usado en `useMemo`, `useCallback` y `useEffect`.

```typescript
// Las dependencias determinan cuándo se recalcula
const memoizedValue = useMemo(() => compute(a, b), [a, b]);
```

---

## E

### Estabilidad de Referencia (Reference Stability)

Propiedad de una función u objeto de mantener la misma referencia en memoria entre renders. Esencial para que `React.memo` funcione correctamente.

---

## F

### Flame Graph

Visualización en React DevTools que muestra la jerarquía de componentes y el tiempo de renderizado de cada uno, útil para identificar cuellos de botella.

---

## H

### Hook de Memorización

Hooks como `useMemo` y `useCallback` que permiten memorizar valores y funciones para evitar recalculaciones innecesarias.

---

## I

### Identidad Referencial (Referential Identity)

Concepto donde dos valores son considerados iguales solo si apuntan a la misma ubicación en memoria. JavaScript compara objetos y funciones por identidad referencial, no por contenido.

```typescript
// Misma identidad referencial
const a = {};
const b = a;
console.log(a === b); // true

// Diferente identidad referencial
const c = {};
const d = {};
console.log(c === d); // false (aunque tengan mismo contenido)
```

---

## M

### Memorización (Memoization)

Técnica de optimización que almacena el resultado de una operación costosa y lo reutiliza cuando se llama con los mismos argumentos, evitando cálculos repetidos.

### Memo (React.memo)

Higher-Order Component que memoriza el resultado del renderizado de un componente. Solo re-renderiza si las props cambian según comparación superficial o un comparador personalizado.

```typescript
const MemoizedButton = memo(Button);
```

---

## O

### Optimización Prematura

Anti-patrón donde se aplican optimizaciones sin evidencia de que sean necesarias. Donald Knuth: "La optimización prematura es la raíz de todo mal".

---

## P

### Profiler

Componente de React y herramienta en DevTools que mide el rendimiento de renderizado, proporcionando métricas sobre tiempo de render y frecuencia.

```tsx
<Profiler
  id="App"
  onRender={onRenderCallback}>
  <App />
</Profiler>
```

---

## R

### Re-render

Proceso donde React vuelve a ejecutar la función de un componente para generar una nueva representación del UI. Puede ser necesario o innecesario.

### Reconciliación (Reconciliation)

Algoritmo de React que compara el Virtual DOM anterior con el nuevo para determinar qué cambios aplicar al DOM real. Usa el algoritmo de "diffing".

---

## S

### Stale Closure

Bug donde una función captura valores obsoletos de un closure debido a dependencias mal declaradas en hooks.

```typescript
// ❌ Stale closure - count siempre será 0
const handleClick = useCallback(() => {
  console.log(count); // Siempre muestra 0
}, []); // Falta count en dependencias
```

---

## U

### useCallback

Hook que memoriza una función, retornando la misma referencia entre renders mientras las dependencias no cambien.

```typescript
const handleSubmit = useCallback(
  (data: FormData) => {
    submitForm(data);
  },
  [submitForm],
);
```

### useMemo

Hook que memoriza el resultado de una computación costosa, recalculando solo cuando cambian las dependencias.

```typescript
const sortedList = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);
```

---

## V

### Virtual DOM

Representación en memoria del DOM real que React usa para calcular diferencias antes de aplicar cambios. Permite updates eficientes al minimizar manipulaciones del DOM.

---

## W

### Web Vitals

Métricas de Google para medir la experiencia del usuario:

- **LCP** (Largest Contentful Paint): Tiempo hasta que el contenido principal es visible
- **FID** (First Input Delay): Tiempo hasta que la página responde a interacciones
- **CLS** (Cumulative Layout Shift): Estabilidad visual de la página

### Why Did You Render

Librería de debugging que notifica cuando un componente hace re-renders potencialmente innecesarios.

```typescript
import React from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render';

whyDidYouRender(React, {
  trackAllPureComponents: true,
});
```
