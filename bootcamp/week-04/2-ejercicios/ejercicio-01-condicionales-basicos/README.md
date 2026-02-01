# Ejercicio 01: Renderizado Condicional Básico

## 🎯 Objetivo

Aprender a usar operador ternario, `&&` y `||` para renderizar contenido condicionalmente.

## 📋 Descripción

Crearás un componente `StatusMessage` que muestra diferentes mensajes según el estado de un proceso.

## 🔑 Conceptos Clave

- Operador ternario `condition ? a : b`
- Operador AND `&&` para mostrar/ocultar
- Operador OR `||` para valores por defecto
- Operador nullish coalescing `??`

---

## 📝 Instrucciones

### Paso 1: Entender el Ternario

El operador ternario permite elegir entre dos opciones:

```tsx
// Si la condición es verdadera, retorna el primer valor
// Si es falsa, retorna el segundo
const message = isSuccess ? 'Éxito' : 'Error';
```

**Abre `starter/StatusMessage.tsx`** y descomenta la sección del Paso 1.

### Paso 2: Usar el Operador AND (&&)

El operador `&&` muestra el contenido solo si la condición es verdadera:

```tsx
// Si showDetails es true, muestra el párrafo
// Si es false, no renderiza nada
{
  showDetails && <p>Detalles aquí...</p>;
}
```

**Descomenta la sección del Paso 2** para agregar detalles opcionales.

### Paso 3: Valores por Defecto con OR (||)

El operador `||` proporciona un valor alternativo si el primero es falsy:

```tsx
// Si username es '', null o undefined, usa 'Invitado'
const displayName = username || 'Invitado';
```

**Descomenta la sección del Paso 3** para manejar valores por defecto.

### Paso 4: Nullish Coalescing (??)

El operador `??` solo usa el valor por defecto si es `null` o `undefined`:

```tsx
// A diferencia de ||, acepta 0 y '' como valores válidos
const count = itemCount ?? 0; // Solo si itemCount es null/undefined
```

**Descomenta la sección del Paso 4** para comparar `||` vs `??`.

---

## ✅ Resultado Esperado

El componente debe:

1. Mostrar "Éxito" o "Error" según el estado
2. Mostrar detalles adicionales opcionalmente
3. Usar nombre de usuario o "Invitado" por defecto
4. Manejar correctamente el valor 0 con `??`

---

## 🧪 Verificación

Ejecuta el proyecto y prueba:

- Cambiar el estado entre éxito y error
- Mostrar/ocultar los detalles
- Probar con username vacío
- Verificar que el contador 0 se muestre (no "Sin items")

---

_Siguiente: [Ejercicio 02 - Listas Básicas](../ejercicio-02-listas-basicas/README.md)_
