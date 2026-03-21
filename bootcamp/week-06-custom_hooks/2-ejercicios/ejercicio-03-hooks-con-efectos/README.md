# 📝 Ejercicio 03: Hooks con Efectos

## 🎯 Objetivos

- Crear hooks que usan useEffect
- Implementar `useFetch` para llamadas API
- Implementar `useDebounce` para optimización
- Manejar cleanup correctamente

---

## ⏱️ Duración estimada

45 minutos

---

## 📚 Conceptos cubiertos

- useEffect con dependencias
- Cleanup y cancelación
- AbortController para fetch
- Debounce pattern

---

## 🔨 Instrucciones

### Paso 1: Crear useFetch

Hook que:

- Hace fetch a una URL
- Maneja estados loading/error/data
- Incluye refetch
- Cancela requests pendientes

### Paso 2: Crear useDebounce

Hook que:

- Retrasa la actualización de un valor
- Útil para búsquedas en tiempo real

---

## ✅ Criterios de evaluación

| Criterio                        | Puntos  |
| ------------------------------- | ------- |
| useFetch con todos los estados  | 35      |
| Cancelación con AbortController | 20      |
| useDebounce funcional           | 25      |
| Cleanup correcto                | 20      |
| **Total**                       | **100** |

---

_Siguiente: [Ejercicio 04 - Hooks Genéricos](../ejercicio-04-hooks-genericos/)_
