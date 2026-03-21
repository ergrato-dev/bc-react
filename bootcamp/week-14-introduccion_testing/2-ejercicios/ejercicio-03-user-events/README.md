# Ejercicio 03: User Events

## 🎯 Objetivo

Aprender a simular interacciones de usuario con `@testing-library/user-event`.

## ⏱️ Duración Estimada

45 minutos

---

## 📋 Descripción

En este ejercicio aprenderás a:

1. Configurar userEvent con `userEvent.setup()`
2. Simular clicks con `user.click()`
3. Simular escritura con `user.type()`
4. Simular teclas especiales (`{Enter}`, `{Tab}`)
5. Verificar llamadas a callbacks con `vi.fn()`

---

## 🚀 Instrucciones

### Paso 1: Configurar el Proyecto

```bash
cd starter
pnpm install
```

### Paso 2: Ejecutar Tests

```bash
pnpm test
```

### Paso 3: Completar los Tests

Abre `src/components/TodoForm.test.tsx` y descomenta cada sección.

---

## 📚 Conceptos Clave

### Setup de userEvent

```typescript
import userEvent from '@testing-library/user-event';

test('ejemplo con userEvent', async () => {
  // Siempre crear una instancia con setup()
  const user = userEvent.setup();

  render(<Component />);

  // Todas las interacciones son async
  await user.click(element);
  await user.type(input, 'texto');
});
```

### Eventos Comunes

| Método                     | Descripción          |
| -------------------------- | -------------------- |
| `user.click(element)`      | Click en elemento    |
| `user.dblClick(element)`   | Doble click          |
| `user.type(input, 'text')` | Escribir texto       |
| `user.clear(input)`        | Limpiar input        |
| `user.keyboard('{Enter}')` | Simular tecla        |
| `user.tab()`               | Simular Tab          |
| `user.hover(element)`      | Hover sobre elemento |

### Teclas Especiales

```typescript
await user.type(input, 'texto{Enter}'); // Escribe y presiona Enter
await user.keyboard('{Escape}'); // Solo Escape
await user.keyboard('{Tab}'); // Solo Tab
```

---

## ✅ Criterios de Éxito

- [ ] Todos los tests pasan
- [ ] Usas `userEvent.setup()` correctamente
- [ ] Todas las interacciones son `await`
- [ ] Verificas callbacks con `vi.fn()`

---

## 🔗 Navegación

- ⬅️ [Ejercicio 02: RTL Queries](../ejercicio-02-rtl-queries/)
- ➡️ [Ejercicio 04: Testing Componentes](../ejercicio-04-component-testing/)
- 🏠 [Inicio Semana 14](../../README.md)
