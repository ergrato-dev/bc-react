# Ejercicio 1: Tu Primer Efecto con useEffect

## 🎯 Objetivo

Aprender a usar `useEffect` para efectos secundarios básicos como manipular el título del documento.

## 📋 Duración Estimada

⏱️ **15-20 minutos**

## 🧩 Conceptos Clave

- Sintaxis básica de `useEffect`
- Efectos secundarios vs. renderizado
- Array de dependencias vacío `[]`
- Manipulación del DOM desde React

---

## 📝 Instrucciones

### Paso 1: Componente Contador Básico

Primero crearemos un contador simple sin efectos.

**Abre `starter/CounterBasic.tsx`** y descomenta la **Sección 1**.

**Resultado esperado:**

- Contador funcional con botón de incremento
- Sin efectos secundarios aún

### Paso 2: Agregar useEffect para el Título

Ahora usaremos `useEffect` para actualizar el título del navegador.

**Descomenta la Sección 2** en el mismo archivo.

**Resultado esperado:**

- El título del navegador cambia cada vez que incrementas el contador
- Ves en la pestaña del navegador: "Contador: 0", "Contador: 1", etc.

### Paso 3: Efecto Solo al Montar

Crearemos un efecto que se ejecuta solo una vez al montar el componente.

**Abre `starter/WelcomeMessage.tsx`** y descomenta la **Sección 3**.

**Resultado esperado:**

- Mensaje de bienvenida aparece después de 2 segundos
- El efecto se ejecuta solo al montar (array de dependencias vacío)

### Paso 4: Múltiples Efectos

Un componente puede tener múltiples `useEffect` independientes.

**Descomenta la Sección 4** en `starter/MultipleEffects.tsx`.

**Resultado esperado:**

- Un efecto actualiza el título
- Otro efecto hace un console.log al montar
- Ambos efectos son independientes

---

## ✅ Checklist de Verificación

Antes de pasar a la solución, verifica que:

- [ ] El contador incrementa correctamente
- [ ] El título del navegador se actualiza con cada cambio
- [ ] El mensaje de bienvenida aparece después de 2 segundos
- [ ] Los console.logs muestran la ejecución de efectos
- [ ] Entiendes la diferencia entre efectos con `[]` y con `[count]`

---

## 🎓 Conceptos Aprendidos

Después de completar este ejercicio, deberías entender:

1. **Sintaxis de useEffect**: `useEffect(() => { ... }, [deps])`
2. **Array vacío []**: Ejecuta solo al montar
3. **Con dependencias [count]**: Ejecuta cuando `count` cambia
4. **Efectos múltiples**: Un componente puede tener varios `useEffect`
5. **Side effects**: Manipular DOM, logs, etc.

---

## 🔍 Compara con la Solución

Si completaste el ejercicio, compara tu código con la carpeta `solution/`.

## 📚 Recursos Relacionados

- [React Docs: useEffect](https://react.dev/reference/react/useEffect)
- Teoría: [01-useeffect-introduccion.md](../../1-teoria/01-useeffect-introduccion.md)
