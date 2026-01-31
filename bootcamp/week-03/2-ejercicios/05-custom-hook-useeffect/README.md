# Ejercicio 5: Custom Hook con useEffect

## 🎯 Objetivo

Crear custom hooks reutilizables que encapsulan lógica de `useEffect`.

## 📋 Duración Estimada

⏱️ **35-45 minutos**

## 🧩 Conceptos Clave

- Extraer lógica a custom hooks
- Hooks que retornan valores
- Hooks con parámetros
- TypeScript generics en hooks
- Reutilización de código

---

## 📝 Instrucciones

### Paso 1: useDocumentTitle

Hook para actualizar el título del documento.

**Abre `starter/useDocumentTitle.ts`** y descomenta la **Sección 1**.

**Resultado esperado:**

- Hook simple que actualiza `document.title`
- Restaura título anterior al desmontar
- Reutilizable en cualquier componente

### Paso 2: useLocalStorage

Hook que sincroniza estado con localStorage.

**Descomenta la Sección 2** en `starter/useLocalStorage.ts`.

**Resultado esperado:**

- Estado persistido entre recargas de página
- API similar a `useState`
- Tipado con generics

### Paso 3: useDebounce

Hook para debounce de valores.

**Descomenta la Sección 3** en `starter/useDebounce.ts`.

**Resultado esperado:**

- Valor actualizado solo después de un delay
- Útil para search inputs
- Limpia timeouts correctamente

### Paso 4: useWindowSize

Hook que detecta dimensiones de ventana.

**Descomenta la Sección 4** en `starter/useWindowSize.ts`.

**Resultado esperado:**

- Retorna width y height actuales
- Se actualiza al redimensionar ventana
- Cleanup de event listener

---

## ✅ Checklist de Verificación

- [ ] `useDocumentTitle` actualiza el título correctamente
- [ ] `useLocalStorage` persiste datos entre recargas
- [ ] `useDebounce` retrasa actualizaciones correctamente
- [ ] `useWindowSize` muestra dimensiones actuales
- [ ] Todos los hooks tienen cleanup apropiado
- [ ] TypeScript valida tipos correctamente

---

## 🎓 Conceptos Aprendidos

1. **Custom hooks**: Extraer y reutilizar lógica
2. **Hooks con generics**: `<T>` para flexibilidad de tipos
3. **Composición de hooks**: Hooks que usan otros hooks
4. **Cleanup en custom hooks**: Devolver función de limpieza
5. **APIs consistentes**: Seguir convenciones de React hooks

---

## 💡 Desafío Extra

Crea tu propio custom hook que combine `useEffect` con algo útil:

- `useInterval`: Wrapper de setInterval
- `useClickOutside`: Detecta clicks fuera de un elemento
- `useAsync`: Maneja promesas con loading/error/data

---

## 📚 Recursos Relacionados

- [React Docs: Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- Teoría: [04-casos-uso-comunes.md](../../1-teoria/04-casos-uso-comunes.md)
