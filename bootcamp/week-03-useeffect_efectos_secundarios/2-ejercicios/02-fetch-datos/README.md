# Ejercicio 2: Fetch de Datos con useEffect

## 🎯 Objetivo

Aprender a usar `useEffect` para obtener datos desde una API, manejar estados de carga y errores.

## 📋 Duración Estimada

⏱️ **30-35 minutos**

## 🧩 Conceptos Clave

- Fetch de datos con `useEffect`
- Estados de carga, datos y error
- Array de dependencias vacío para fetch inicial
- Async/await dentro de `useEffect`
- Cleanup con `AbortController`

---

## 📝 Instrucciones

### Paso 1: Fetch Básico de Usuarios

Empezamos con un fetch simple de usuarios desde una API pública.

**Abre `starter/UserList.tsx`** y descomenta la **Sección 1**.

**Resultado esperado:**

- Lista de usuarios cargada desde JSONPlaceholder API
- Manejo de estados: loading, error, data
- Fetch se ejecuta solo al montar el componente

### Paso 2: Agregar AbortController

Mejoramos el fetch para hacerlo cancelable.

**Descomenta la Sección 2** en el mismo archivo.

**Resultado esperado:**

- Fetch con AbortController
- Si el componente se desmonta antes de completar, la petición se cancela
- Previene actualizaciones de estado en componente desmontado

### Paso 3: Fetch con Parámetro Dinámico

Fetch que depende de un ID que puede cambiar.

**Abre `starter/PostViewer.tsx`** y descomenta la **Sección 3**.

**Resultado esperado:**

- Fetch se re-ejecuta cuando el ID cambia
- Botones para navegar entre posts
- Estado de carga mientras se obtienen los datos

### Paso 4: Custom Hook para Fetch

Extraemos la lógica de fetch a un hook reutilizable.

**Abre `starter/useFetch.ts`** y descomenta la **Sección 4**.

**Resultado esperado:**

- Hook genérico `useFetch<T>` para cualquier endpoint
- Reutilizable en múltiples componentes
- TypeScript con generics

---

## ✅ Checklist de Verificación

Antes de pasar a la solución, verifica que:

- [ ] Los usuarios se cargan correctamente desde la API
- [ ] Se muestra "Cargando..." mientras se obtienen los datos
- [ ] Los errores se manejan y muestran al usuario
- [ ] El AbortController cancela peticiones al desmontar
- [ ] El PostViewer carga diferentes posts según el ID
- [ ] El custom hook `useFetch` funciona con diferentes tipos

---

## 🎓 Conceptos Aprendidos

Después de completar este ejercicio, deberías entender:

1. **Patrón fetch con useEffect**: `useEffect(() => { fetchData(); }, [])`
2. **Estados de petición**: loading, error, data
3. **AbortController**: Cancelar peticiones HTTP
4. **Dependencias dinámicas**: Re-fetch cuando cambia una dependencia
5. **Custom hooks**: Extraer lógica reutilizable con generics

---

## 🔍 Compara con la Solución

Si completaste el ejercicio, compara tu código con la carpeta `solution/`.

## 📚 Recursos Relacionados

- [React Docs: Fetching Data](https://react.dev/learn/synchronizing-with-effects#fetching-data)
- [MDN: AbortController](https://developer.mozilla.org/es/docs/Web/API/AbortController)
- Teoría: [04-casos-uso-comunes.md](../../1-teoria/04-casos-uso-comunes.md)
