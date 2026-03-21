# Ejercicio 04: Normalización con createEntityAdapter

## 🎯 Objetivo

Aprender a usar `createEntityAdapter` para normalizar colecciones de datos y simplificar operaciones CRUD en Redux.

## 📋 Descripción

En este ejercicio aprenderás:

- Normalizar datos con `createEntityAdapter`
- Estructura normalizada: `{ ids: [], entities: {} }`
- Métodos CRUD integrados del adapter
- Generar selectores automáticamente
- Configurar ordenamiento con `sortComparer`

## ⏱️ Tiempo Estimado

40-50 minutos

---

## 📚 Conceptos Cubiertos

| Concepto              | Descripción                                                |
| --------------------- | ---------------------------------------------------------- |
| `createEntityAdapter` | Crea funciones para manejar colecciones normalizadas       |
| Estado Normalizado    | Estructura `{ ids: [], entities: {} }` para acceso O(1)    |
| Métodos CRUD          | `addOne`, `addMany`, `updateOne`, `removeOne`, etc.        |
| `getSelectors()`      | Genera selectores `selectAll`, `selectById`, `selectTotal` |
| `sortComparer`        | Función para ordenar entidades automáticamente             |

---

## 🛠️ Instrucciones

### Preparación

```bash
cd starter
pnpm install
```

---

### Paso 1: Crear el Entity Adapter

Abre `starter/src/features/products/productsSlice.ts` y descomenta la sección del **Paso 1**.

Crea el adapter con configuración:

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

const productsAdapter = createEntityAdapter<Product>({
  // Opcional: especifica qué campo es el ID (default: 'id')
  selectId: (product) => product.id,
  // Opcional: ordena por precio ascendente
  sortComparer: (a, b) => a.price - b.price,
});
```

**Concepto clave**: El adapter genera una estructura `{ ids: ['1', '2'], entities: { '1': {...}, '2': {...} } }` optimizada para acceso rápido.

---

### Paso 2: Configurar Estado Inicial

Descomenta la sección del **Paso 2**.

Usa el estado inicial del adapter y extiéndelo:

```typescript
interface ProductsState extends EntityState<Product, string> {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: ProductsState = productsAdapter.getInitialState({
  status: 'idle',
});
```

---

### Paso 3: Implementar Reducers con Métodos del Adapter

Descomenta la sección del **Paso 3**.

Usa los métodos del adapter en tus reducers:

```typescript
reducers: {
  productAdded: productsAdapter.addOne,
  productUpdated: productsAdapter.updateOne,
  productRemoved: productsAdapter.removeOne,
  productsLoaded: productsAdapter.setAll,
}
```

**Concepto clave**: Los métodos del adapter manejan la lógica de actualización de `ids` y `entities` automáticamente.

---

### Paso 4: Generar Selectores

Descomenta la sección del **Paso 4**.

Genera selectores a partir del adapter:

```typescript
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
  selectTotal: selectProductCount,
} = productsAdapter.getSelectors<RootState>((state) => state.products);
```

---

### Paso 5: Usar en Componentes

Abre `starter/src/features/products/ProductList.tsx` y descomenta el código.

Usa los selectores generados:

```typescript
const products = useAppSelector(selectAllProducts);
const count = useAppSelector(selectProductCount);

// Para un producto específico
const product = useAppSelector((state) => selectProductById(state, productId));
```

---

### Paso 6: Verificar

```bash
pnpm dev
```

**Checklist de verificación:**

- [ ] Productos se muestran ordenados por precio
- [ ] Agregar producto funciona
- [ ] Editar producto funciona
- [ ] Eliminar producto funciona
- [ ] Redux DevTools muestra estructura `{ ids, entities }`

---

## ✅ Criterios de Éxito

| Criterio             | Verificación                               |
| -------------------- | ------------------------------------------ |
| Estado normalizado   | Estructura `{ ids, entities }` en DevTools |
| CRUD funcional       | Agregar, editar, eliminar funcionan        |
| Selectores generados | Se usan `selectAll`, `selectById`          |
| Ordenamiento         | Lista ordenada por precio                  |

---

## 🔗 Navegación

← [Ejercicio 03: Selectores](../ejercicio-03-selectores/README.md) | [Ejercicio 05: RTK Query →](../ejercicio-05-rtk-query-intro/README.md)
