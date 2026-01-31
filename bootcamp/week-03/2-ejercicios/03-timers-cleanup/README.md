# Ejercicio 3: Timers y Cleanup

## 🎯 Objetivo

Dominar el uso de timers (`setTimeout`, `setInterval`) con `useEffect` y sus funciones de cleanup.

## 📋 Duración Estimada

⏱️ **25-30 minutos**

## 🧩 Conceptos Clave

- `setTimeout` y `setInterval` con useEffect
- Cleanup para limpiar timers
- Memory leaks por falta de cleanup
- Manejo de state con timers

---

## 📝 Instrucciones

### Paso 1: Cronómetro con setInterval

Crea un cronómetro que incrementa cada segundo.

**Abre `starter/Timer.tsx`** y descomenta la **Sección 1**.

**Resultado esperado:**

- Cronómetro que cuenta segundos
- Botón para iniciar/pausar
- Cleanup limpia el interval correctamente

### Paso 2: Countdown Timer

Temporizador de cuenta regresiva.

**Descomenta la Sección 2** en `starter/Countdown.tsx`.

**Resultado esperado:**

- Cuenta regresiva desde un valor inicial
- Se detiene al llegar a 0
- Botón de reset

### Paso 3: Delayed Message

Mensaje que aparece después de un delay.

**Descomenta la Sección 3** en `starter/DelayedMessage.tsx`.

**Resultado esperado:**

- Mensaje aparece tras 3 segundos
- Cleanup cancela el timeout si se desmonta antes

---

## ✅ Checklist de Verificación

- [ ] El cronómetro incrementa cada segundo
- [ ] Pausar/reanudar funciona correctamente
- [ ] El countdown se detiene en 0
- [ ] El mensaje retrasado aparece después de 3 segundos
- [ ] Los cleanups limpian timers correctamente
- [ ] No hay memory leaks ni timers corriendo tras desmontar

---

## 🎓 Conceptos Aprendidos

1. **setInterval con cleanup**: Prevenir memory leaks
2. **setTimeout con cleanup**: Cancelar timeouts pendientes
3. **State updates con timers**: Usar función updater `(prev) => prev + 1`
4. **Condicionales en effects**: Crear/limpiar timers según condiciones

---

## 📚 Recursos Relacionados

- [MDN: setInterval](https://developer.mozilla.org/es/docs/Web/API/setInterval)
- [MDN: setTimeout](https://developer.mozilla.org/es/docs/Web/API/setTimeout)
- Teoría: [03-cleanup-limpieza.md](../../1-teoria/03-cleanup-limpieza.md)
