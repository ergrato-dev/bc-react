# Ejercicio 05: Context Avanzado con useReducer

## 🎯 Objetivo

Implementar patrones avanzados de Context API combinando `useReducer` para manejo de estado complejo y optimización de rendimiento.

## 📚 Conceptos Clave

- `useReducer` con TypeScript
- Actions tipadas con discriminated unions
- Separación de State y Dispatch contexts
- Context con acciones asíncronas
- Optimización con memo y context splitting

## ⏱️ Duración Estimada

60 minutos

## 📋 Instrucciones

### Paso 1: CartContext con useReducer

Crearás un carrito de compras con estado complejo manejado por reducer.

**Abre `starter/CartContext.tsx`** y descomenta las secciones correspondientes.

```typescript
// QUÉ: useReducer maneja transiciones de estado complejas
// PARA: Estado predecible con acciones tipadas
// IMPACTO: Debugging más fácil, código más mantenible
type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };
```

### Paso 2: NotificationContext con Queue

Implementarás un sistema de notificaciones con cola y auto-dismiss.

**Abre `starter/NotificationContext.tsx`** y descomenta las secciones correspondientes.

### Paso 3: Context Splitting para Optimización

Separar State y Dispatch en contextos diferentes para evitar re-renders innecesarios.

**Abre `starter/OptimizedContext.tsx`** y descomenta las secciones correspondientes.

```typescript
// QUÉ: Separar State y Dispatch en contextos diferentes
// PARA: Evitar re-renders en componentes que solo dispatchean
// IMPACTO: Mejor rendimiento en apps grandes
```

### Paso 4: App de Demostración

Integra todos los contextos avanzados.

**Abre `starter/App.tsx`** y descomenta las secciones.

## ✅ Criterios de Evaluación

| Criterio                            | Puntos |
| ----------------------------------- | ------ |
| CartContext con useReducer completo | 8      |
| NotificationContext con queue       | 6      |
| Context splitting implementado      | 4      |
| Código bien tipado y documentado    | 2      |
| **Total**                           | **20** |

## 📂 Estructura del Ejercicio

```
ejercicio-05-context-avanzado/
├── README.md
├── starter/
│   ├── CartContext.tsx
│   ├── NotificationContext.tsx
│   ├── OptimizedContext.tsx
│   └── App.tsx
└── solution/
    ├── CartContext.tsx
    ├── NotificationContext.tsx
    ├── OptimizedContext.tsx
    └── App.tsx
```

## 🔗 Recursos

- [React Docs - useReducer](https://react.dev/reference/react/useReducer)
- [TypeScript Discriminated Unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)
