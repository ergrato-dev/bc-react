# Ejercicio 01: Testing de Custom Hooks

## 🎯 Objetivo

Aprender a testear custom hooks usando `renderHook` y `act`.

## 📋 Descripción

En este ejercicio aprenderás a:

1. Usar `renderHook` para testear hooks en aislamiento
2. Usar `act` para envolver actualizaciones de estado
3. Testear hooks con diferentes configuraciones
4. Manejar hooks async con `waitFor`

## 📁 Estructura

```
ejercicio-01-testing-hooks/
├── README.md
├── starter/
│   ├── package.json
│   ├── vite.config.ts
│   └── src/
│       ├── hooks/
│       │   ├── useToggle.ts
│       │   └── useToggle.test.ts
│       └── test/
│           └── setup.ts
└── solution/
    └── (misma estructura con tests completos)
```

## 🚀 Instrucciones

### Paso 1: Instalar Dependencias

```bash
cd starter
pnpm install
```

### Paso 2: Revisar el Hook

Abre `src/hooks/useToggle.ts` y estudia el hook:

```typescript
// Hook que alterna entre true/false
export function useToggle(initialValue = false) {
  // ...
}
```

### Paso 3: Completar los Tests

Abre `src/hooks/useToggle.test.ts` y descomenta cada sección:

#### Test 1: Valor Inicial

```typescript
// Descomenta y completa:
// test('inicia con valor false por defecto', () => {
//   const { result } = renderHook(() => useToggle());
//   expect(result.current.value).toBe(false);
// });
```

#### Test 2: Toggle

```typescript
// Descomenta y completa:
// test('toggle cambia el valor', () => {
//   const { result } = renderHook(() => useToggle());
//
//   act(() => {
//     result.current.toggle();
//   });
//
//   expect(result.current.value).toBe(true);
// });
```

### Paso 4: Ejecutar Tests

```bash
pnpm test
```

## ✅ Criterios de Aceptación

- [ ] Test de valor inicial por defecto
- [ ] Test de valor inicial personalizado
- [ ] Test de toggle (false → true)
- [ ] Test de toggle doble (false → true → false)
- [ ] Test de setTrue
- [ ] Test de setFalse

## 💡 Tips

- `renderHook` retorna `{ result }` donde `result.current` tiene el valor del hook
- Siempre usa `act()` cuando llames funciones que actualicen estado
- Cada test debe ser independiente

## 📚 Recursos

- [Testing Library - renderHook](https://testing-library.com/docs/react-testing-library/api#renderhook)
- [Testing custom hooks](https://kentcdodds.com/blog/how-to-test-custom-react-hooks)
