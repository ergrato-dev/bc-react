# Ejercicio 03: Keys y Reconciliación

## 🎯 Objetivo

Comprender por qué las keys son importantes y ver los problemas de usar `index` como key.

## 📋 Descripción

Crearás una demostración interactiva que muestra la diferencia entre usar `id` e `index` como key.

## 🔑 Conceptos Clave

- Algoritmo de reconciliación de React
- Problemas con `index` como key
- Cuándo es seguro usar `index`
- Generación de keys únicas

---

## 📝 Instrucciones

### Paso 1: Lista con Index como Key

Observa qué pasa cuando usas `index` y agregas elementos al inicio:

```tsx
// ⚠️ Problemático cuando la lista cambia
{
  items.map((item, index) => (
    <li key={index}>
      {item.name}
      <input defaultValue={item.name} />
    </li>
  ));
}
```

**Abre `starter/KeyDemo.tsx`** y descomenta el Paso 1.

### Paso 2: Lista con ID como Key

Compara con el comportamiento correcto usando `id`:

```tsx
// ✅ React identifica cada elemento correctamente
{
  items.map((item) => (
    <li key={item.id}>
      {item.name}
      <input defaultValue={item.name} />
    </li>
  ));
}
```

**Descomenta el Paso 2** para ver la diferencia.

### Paso 3: Agregar al Inicio vs al Final

Implementa funciones para agregar elementos y observa el comportamiento:

```tsx
// Agregar al inicio causa problemas con index
const addToStart = () => {
  const newItem = { id: nextId++, name: `Nuevo ${nextId}` };
  setItems([newItem, ...items]); // Al inicio
};
```

**Descomenta el Paso 3** para probar la inserción.

### Paso 4: Comparación Visual

Muestra ambas listas lado a lado para comparar el comportamiento:

**Descomenta el Paso 4** para la demostración completa.

---

## 🧪 Experimento

1. Escribe algo en los inputs de ambas listas
2. Haz clic en "Agregar al inicio"
3. Observa:
   - **Lista con index**: Los inputs se "desplazan" incorrectamente
   - **Lista con id**: Los inputs mantienen su valor correcto

---

## ✅ Resultado Esperado

Entender visualmente por qué:

- `index` como key causa problemas cuando la lista cambia
- `id` única preserva el estado correctamente

---

_Siguiente: [Ejercicio 04 - Filtrado de Listas](../ejercicio-04-filtrado/README.md)_
