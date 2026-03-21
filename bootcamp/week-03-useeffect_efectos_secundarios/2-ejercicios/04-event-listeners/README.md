# Ejercicio 4: Event Listeners y Cleanup

## 🎯 Objetivo

Aprender a manejar event listeners del DOM con `useEffect` y prevenir memory leaks.

## 📋 Duración Estimada

⏱️ **25-30 minutos**

## 🧩 Conceptos Clave

- `addEventListener` con useEffect
- `removeEventListener` en cleanup
- Memory leaks por listeners no removidos
- Event listeners en window, document
- Tipado de eventos en TypeScript

---

## 📝 Instrucciones

### Paso 1: Detector de Scroll

Componente que detecta scroll en la página.

**Abre `starter/ScrollDetector.tsx`** y descomenta la **Sección 1**.

**Resultado esperado:**

- Muestra posición Y del scroll
- Actualiza en tiempo real mientras haces scroll
- Cleanup remueve listener al desmontar

### Paso 2: Detector de Teclas

Detecta teclas presionadas globalmente.

**Descomenta la Sección 2** en `starter/KeyDetector.tsx`.

**Resultado esperado:**

- Muestra última tecla presionada
- Funciona con el foco en cualquier parte de la página
- Cleanup limpia el listener

### Paso 3: Detector Online/Offline

Detecta conexión a internet.

**Descomenta la Sección 3** en `starter/OnlineStatus.tsx`.

**Resultado esperado:**

- Muestra estado de conexión
- Se actualiza cuando pierdes/recuperas conexión
- Múltiples listeners limpiados correctamente

---

## ✅ Checklist de Verificación

- [ ] El scroll detector muestra la posición Y
- [ ] El key detector captura teclas correctamente
- [ ] El online/offline detector funciona al cambiar conexión
- [ ] Todos los listeners se remueven en cleanup
- [ ] No hay errores en consola al desmontar componentes

---

## 🎓 Conceptos Aprendidos

1. **addEventListener en useEffect**: Patrón setup/cleanup
2. **removeEventListener**: Prevenir memory leaks
3. **Eventos de window**: scroll, keydown, online, offline
4. **Tipado de eventos**: `Event`, `KeyboardEvent`, etc.

---

## 📚 Recursos Relacionados

- [MDN: addEventListener](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
- Teoría: [03-cleanup-limpieza.md](../../1-teoria/03-cleanup-limpieza.md)
