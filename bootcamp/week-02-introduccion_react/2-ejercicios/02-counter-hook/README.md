# 🧮 Ejercicio 02: Counter Hook

## 🎯 Objetivos

- Usar `useState` para manejar estado local
- Comprender cómo React re-renderiza componentes
- Implementar múltiples acciones sobre el estado
- Aplicar TypeScript para tipar estado numérico

## 📖 Concepto: useState Hook

`useState` es el hook más fundamental de React. Permite agregar **estado local** a componentes funcionales.

```typescript
const [value, setValue] = useState<number>(0);
//     ^estado  ^función setter    ^valor inicial
```

**Características clave:**

- El estado persiste entre re-renders
- Llamar al setter causa un re-render
- Los setters son asíncronos
- No mutar el estado directamente (inmutabilidad)

## 🛠️ Desglose del Ejercicio

Construirás un contador interactivo con 4 operaciones:

1. **Incrementar** (+1)
2. **Decrementar** (-1)
3. **Reset** (volver a 0)
4. **Establecer valor aleatorio** (1-100)

### 📝 Requisitos Funcionales

✅ Mostrar el valor actual del contador  
✅ Botón para incrementar  
✅ Botón para decrementar  
✅ Botón para resetear a 0  
✅ Botón para generar número aleatorio (1-100)  
✅ Tipado estricto con TypeScript

---

## 📚 Pasos del Tutorial

### Paso 1: Declarar Estado con useState

El hook `useState` retorna un array con dos elementos:

1. **Valor actual**: El estado en sí
2. **Función setter**: Para actualizar el estado

```typescript
const [count, setCount] = useState<number>(0);
```

**💡 Tip**: Usa desestructuración de arrays para extraer ambos valores.

### Paso 2: Mostrar el Estado

Usa JSX para renderizar el valor actual del estado:

```typescript
<p>Count: {count}</p>
```

Las llaves `{}` permiten interpolar expresiones JavaScript en JSX.

### Paso 3: Implementar Funciones de Actualización

Cada botón necesita una función que llame al setter:

```typescript
const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);
const reset = () => setCount(0);
```

**⚠️ Importante**: Cada llamada a `setCount` dispara un re-render del componente.

### Paso 4: Función con Lógica Compleja

Para el número aleatorio, usa lógica JavaScript:

```typescript
const randomize = () => {
  const random = Math.floor(Math.random() * 100) + 1; // 1-100
  setCount(random);
};
```

### Paso 5: Conectar Eventos onClick

Cada botón ejecuta su función correspondiente:

```typescript
<button onClick={increment}>+1</button>
<button onClick={decrement}>-1</button>
<button onClick={reset}>Reset</button>
<button onClick={randomize}>Random</button>
```

---

## 🎨 CSS (Opcional)

Agrega estos estilos en tu archivo CSS:

```css
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border: 2px solid #61dafb;
  border-radius: 8px;
  max-width: 300px;
  margin: 2rem auto;
}

.counter__display {
  font-size: 3rem;
  font-weight: bold;
  color: #61dafb;
  margin: 0;
}

.counter__buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.counter__button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s;
}

.counter__button:hover {
  transform: scale(1.05);
}

.counter__button--increment {
  background-color: #51cf66;
  color: white;
}

.counter__button--decrement {
  background-color: #ff6b6b;
  color: white;
}

.counter__button--reset {
  background-color: #888;
  color: white;
}

.counter__button--random {
  background-color: #c792ea;
  color: white;
}
```

---

## ✅ Verificación

Asegúrate de que tu componente:

- [ ] El contador inicia en 0
- [ ] El botón +1 incrementa el valor
- [ ] El botón -1 decrementa el valor
- [ ] El botón Reset vuelve a 0
- [ ] El botón Random genera un número entre 1-100
- [ ] El valor se muestra correctamente en pantalla
- [ ] No hay errores de TypeScript
- [ ] No hay warnings en la consola

---

## 💡 Tips

### useState con Función Updater

Si el nuevo estado depende del anterior, usa la forma funcional:

```typescript
// ❌ NO: puede tener race conditions
const increment = () => setCount(count + 1);

// ✅ SÍ: siempre usa el valor más reciente
const increment = () => setCount((prev) => prev + 1);
```

### Múltiples useState

Puedes tener varios estados en un componente:

```typescript
const [count, setCount] = useState(0);
const [message, setMessage] = useState('');
const [isVisible, setIsVisible] = useState(true);
```

### Estado Inmutable

Nunca modifiques el estado directamente:

```typescript
// ❌ MAL
count = count + 1;

// ✅ BIEN
setCount(count + 1);
```

---

## 📚 Recursos Adicionales

- [React Docs - useState](https://react.dev/reference/react/useState)
- [TypeScript - Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
- [React Docs - State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)

---

## 🔗 Navegación

- [← Volver a Ejercicios](../README.md)
- [← Ejercicio Anterior: Button Component](../01-button-component/README.md)
- [→ Siguiente Ejercicio: User Card](../03-user-card/README.md)
- [📖 Teoría: Estado Local con useState](../../1-teoria/05-estado-local-usestate.md)
