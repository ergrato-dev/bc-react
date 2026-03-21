# 01 - Cómo Funciona el Render en React

## 🎯 Objetivos de Aprendizaje

- Comprender el ciclo de render en React
- Identificar qué provoca un re-render
- Entender el Virtual DOM y la reconciliación
- Reconocer renders innecesarios

---

## 📖 El Ciclo de Render en React

React sigue un proceso específico para actualizar la UI. Entenderlo es **fundamental** antes de optimizar.

### Las 3 Fases del Render

![Ciclo de Render en React](../0-assets/01-ciclo-render-react.svg)

| Fase        | Descripción                                 | Costo            |
| ----------- | ------------------------------------------- | ---------------- |
| **Trigger** | Algo causa que React programe un render     | Mínimo           |
| **Render**  | React ejecuta componentes y calcula cambios | Puede ser alto   |
| **Commit**  | React aplica cambios al DOM real            | Solo si hay diff |

---

## 🔥 ¿Qué Provoca un Re-Render?

### Los 4 Triggers de Re-Render

```typescript
// ==============================================
// TRIGGER 1: Cambio de Estado Local
// ==============================================
function Counter() {
  const [count, setCount] = useState(0);

  // Cada click provoca un re-render
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// ==============================================
// TRIGGER 2: Cambio de Props
// ==============================================
interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  // Re-render si 'name' cambia
  return <h1>Hola, {name}!</h1>;
}

// ==============================================
// TRIGGER 3: Cambio de Context
// ==============================================
function ThemedButton() {
  // Re-render si el valor del contexto cambia
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme.primary }}>Click</button>;
}

// ==============================================
// TRIGGER 4: Re-Render del Componente Padre
// ==============================================
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Parent Count: {count}
      </button>
      {/* Child se re-renderiza AUNQUE sus props no cambien */}
      <Child />
    </div>
  );
}

function Child() {
  console.log('Child renderizado'); // Se ejecuta en cada click del padre
  return <div>Soy el hijo</div>;
}
```

### ⚠️ El Problema: Renders en Cascada

Cuando el padre re-renderiza, **todos sus hijos también re-renderizan**, aunque sus props no hayan cambiado:

| Componente        | ¿Re-renderiza? | Razón              |
| ----------------- | -------------- | ------------------ |
| Parent            | ✅ Sí          | Cambio de estado   |
| Child A           | ✅ Sí          | Padre re-renderizó |
| Grandchild (de A) | ✅ Sí          | Padre re-renderizó |
| Child B           | ✅ Sí          | Padre re-renderizó |
| Grandchild (de B) | ✅ Sí          | Padre re-renderizó |

> ⚠️ **¡5 componentes re-renderizan por 1 solo cambio de estado!**

---

## 🧠 Virtual DOM y Reconciliación

### ¿Qué es el Virtual DOM?

El Virtual DOM es una representación JavaScript del DOM real:

```typescript
// Esto en JSX:
<div className="container">
  <h1>Título</h1>
  <p>Párrafo</p>
</div>

// Se convierte en un objeto JavaScript (Virtual DOM):
{
  type: 'div',
  props: {
    className: 'container',
    children: [
      { type: 'h1', props: { children: 'Título' } },
      { type: 'p', props: { children: 'Párrafo' } }
    ]
  }
}
```

### El Proceso de Reconciliación

React compara el árbol anterior con el nuevo y solo actualiza las diferencias:

| Elemento | Estado Anterior  | Estado Nuevo     | Acción         |
| -------- | ---------------- | ---------------- | -------------- |
| `<div>`  | Existe           | Existe (igual)   | Sin cambios    |
| Hijo A   | `<span>A</span>` | `<span>A</span>` | Sin cambios    |
| Hijo B   | `<span>B</span>` | `<span>C</span>` | **Actualizar** |

> 💡 **Solo se actualiza el DOM donde hay diferencias reales.**

### Reglas de Reconciliación

1. **Elementos de diferente tipo**: React destruye el árbol anterior completo
2. **Elementos DOM del mismo tipo**: React compara atributos
3. **Componentes del mismo tipo**: React actualiza props y mantiene estado
4. **Listas**: React usa `key` para identificar elementos

```typescript
// ❌ MAL - Sin key, React no puede optimizar
{items.map(item => (
  <ListItem data={item} />
))}

// ✅ BIEN - Con key única, React identifica cada elemento
{items.map(item => (
  <ListItem key={item.id} data={item} />
))}
```

---

## 🔍 Detectando Renders Innecesarios

### Método 1: console.log

```typescript
function ExpensiveComponent({ data }: { data: DataItem[] }) {
  // Este log se ejecuta en cada render
  console.log('ExpensiveComponent renderizado', new Date().toISOString());

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

### Método 2: useRef para contar renders

```typescript
function ComponentWithRenderCount() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div>
      <p>Este componente se ha renderizado {renderCount.current} veces</p>
    </div>
  );
}
```

### Método 3: React DevTools Profiler

El Profiler de React DevTools es la herramienta más poderosa:

**Cómo usar el Profiler:**

1. Abre React DevTools en tu navegador
2. Ve a la pestaña **Profiler**
3. Haz clic en **Record** (⏺)
4. Interactúa con tu aplicación
5. Haz clic en **Stop** (⏹)
6. Analiza el **Flamegraph**

**Interpretación de colores:**

| Color       | Significado                                  |
| ----------- | -------------------------------------------- |
| 🟡 Amarillo | Renderizó y tardó poco                       |
| 🟠 Naranja  | Renderizó y tardó más (posible optimización) |
| ⬜ Gris     | No renderizó (optimizado con memo)           |

**Qué buscar:**

- Componentes que renderizan frecuentemente sin cambios
- Tiempos de render altos (>16ms afecta los 60fps)
- Componentes hijos que renderizan cuando el padre cambia

---

## 📝 Ejemplo Completo: Identificando el Problema

```typescript
// ==============================================
// ESCENARIO: Lista con filtro y contador
// ==============================================

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// Componente Padre
function ProductDashboard() {
  const [products] = useState<Product[]>(generateProducts(1000));
  const [filter, setFilter] = useState('');
  const [cartCount, setCartCount] = useState(0);

  console.log('ProductDashboard renderizado');

  // Filtrado de productos
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {/* Cambiar el filtro: re-render justificado */}
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Buscar productos..."
      />

      {/* Cambiar cartCount: ¿debería re-renderizar la lista? */}
      <button onClick={() => setCartCount(c => c + 1)}>
        Carrito: {cartCount}
      </button>

      {/* Esta lista se re-renderiza en CADA cambio, incluso del carrito */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

// Componente Hijo - SIN optimización
function ProductList({ products }: { products: Product[] }) {
  console.log('ProductList renderizado con', products.length, 'productos');

  return (
    <ul>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

// Componente Nieto - SIN optimización
function ProductItem({ product }: { product: Product }) {
  console.log('ProductItem renderizado:', product.name);

  return (
    <li>
      {product.name} - ${product.price}
    </li>
  );
}
```

### El Problema

```
Usuario hace click en "Carrito":

1. setCartCount actualiza estado
2. ProductDashboard re-renderiza
3. filteredProducts se recalcula (innecesario)
4. ProductList re-renderiza (innecesario)
5. 1000 ProductItem re-renderizan (innecesario)

¡Solo queríamos actualizar un número!
```

---

## ✅ Checklist de Comprensión

Antes de continuar, asegúrate de poder responder:

- [ ] ¿Cuáles son las 3 fases del render en React?
- [ ] ¿Qué 4 cosas pueden provocar un re-render?
- [ ] ¿Por qué los hijos se re-renderizan aunque sus props no cambien?
- [ ] ¿Qué es el Virtual DOM y la reconciliación?
- [ ] ¿Cómo puedo detectar renders innecesarios?

---

## 🔗 Siguiente

Ahora que entiendes el problema, en el siguiente tema aprenderás la primera herramienta de solución: **React.memo**.

➡️ [02 - React.memo y Comparación de Props](02-react-memo.md)
