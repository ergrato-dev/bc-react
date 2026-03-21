# Ejercicio 01: Primer Slice con Redux Toolkit

## 🎯 Objetivo

Crear tu primer slice de Redux Toolkit con TypeScript, configurar el store y conectarlo a un componente React.

## 📋 Descripción

En este ejercicio crearás un slice para manejar un contador con las siguientes funcionalidades:

- Incrementar/decrementar valor
- Incrementar por una cantidad específica
- Resetear al valor inicial
- Mostrar el estado actual

## ⏱️ Tiempo Estimado

30-40 minutos

---

## 📚 Conceptos Cubiertos

- `createSlice` - crear slice con reducers
- `PayloadAction` - tipar payloads de acciones
- `configureStore` - configurar el store
- `Provider` - proveer el store a la app
- `useAppSelector` y `useAppDispatch` - hooks tipados

---

## 🛠️ Instrucciones

### Paso 1: Instalar Dependencias

Abre `starter/` y ejecuta:

```bash
pnpm install
```

### Paso 2: Crear el Slice del Contador

Abre `starter/src/features/counter/counterSlice.ts` y descomenta el código para:

1. Definir la interface `CounterState`
2. Crear el estado inicial tipado
3. Crear el slice con `createSlice`
4. Exportar actions y reducer

### Paso 3: Configurar el Store

Abre `starter/src/app/store.ts` y descomenta el código para:

1. Importar el reducer del contador
2. Configurar el store con `configureStore`
3. Exportar tipos `RootState` y `AppDispatch`

### Paso 4: Crear Hooks Tipados

Abre `starter/src/app/hooks.ts` y descomenta el código para:

1. Crear `useAppDispatch` tipado
2. Crear `useAppSelector` tipado

### Paso 5: Conectar el Provider

Abre `starter/src/main.tsx` y descomenta el código para:

1. Importar Provider y store
2. Envolver `<App />` con `<Provider>`

### Paso 6: Usar el Slice en el Componente

Abre `starter/src/features/counter/Counter.tsx` y descomenta el código para:

1. Usar `useAppSelector` para leer el estado
2. Usar `useAppDispatch` para despachar acciones
3. Conectar los botones con las acciones

### Paso 7: Verificar

```bash
pnpm dev
```

Abre el navegador y verifica que:

- El contador muestra el valor inicial (0)
- Los botones +/- incrementan/decrementan
- El botón +5 incrementa por 5
- El botón Reset vuelve a 0
- Redux DevTools muestra las acciones

---

## ✅ Criterios de Éxito

- [ ] El slice está correctamente tipado
- [ ] El store está configurado con el reducer
- [ ] Los hooks tipados funcionan correctamente
- [ ] El componente muestra el estado y despacha acciones
- [ ] Redux DevTools muestra el flujo de acciones
- [ ] No hay errores de TypeScript

---

## 🔍 Verificación con Redux DevTools

1. Abre Chrome DevTools (F12)
2. Ve a la pestaña "Redux"
3. Deberías ver:
   - Estado inicial: `{ counter: { value: 0 } }`
   - Acciones: `counter/increment`, `counter/decrement`, etc.
   - Historial de cambios de estado

---

## 💡 Tips

- `PayloadAction<number>` indica que el payload es un número
- Immer permite "mutar" el estado: `state.value += 1`
- Los hooks tipados evitan anotar tipos en cada uso
- Redux DevTools es esencial para debugging

---

## 📁 Estructura de Archivos

```
starter/
├── src/
│   ├── app/
│   │   ├── store.ts          # ← Paso 3
│   │   └── hooks.ts          # ← Paso 4
│   ├── features/
│   │   └── counter/
│   │       ├── counterSlice.ts   # ← Paso 2
│   │       └── Counter.tsx       # ← Paso 6
│   ├── App.tsx
│   └── main.tsx              # ← Paso 5
└── package.json
```

---

[← Volver al README](../README.md) | [Siguiente Ejercicio →](../ejercicio-02-async-thunk/README.md)
