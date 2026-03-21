# 📝 Ejercicio 01: Hooks Básicos

## 🎯 Objetivos

- Crear hooks simples con estado boolean
- Implementar `useToggle` y `useCounter`
- Aprender a tipar retornos de hooks
- Entender `useCallback` para funciones estables

---

## 📋 Descripción

En este ejercicio crearás tus primeros custom hooks básicos que encapsulan patrones de estado comunes.

---

## ⏱️ Duración estimada

30 minutos

---

## 📚 Conceptos cubiertos

- useState en custom hooks
- useCallback para memoización
- Interfaces para tipos de retorno
- Parámetros opcionales con defaults

---

## 🔨 Instrucciones

### Paso 1: Crear useToggle

Abre `starter/useToggle.ts` y descomenta el código para crear un hook que:

- Maneje un estado boolean
- Tenga funciones: `toggle`, `setTrue`, `setFalse`
- Reciba un valor inicial opcional

### Paso 2: Crear useCounter

Abre `starter/useCounter.ts` y descomenta el código para crear un hook que:

- Maneje un contador numérico
- Tenga funciones: `increment`, `decrement`, `reset`
- Soporte opciones: `min`, `max`, `step`

### Paso 3: Probar los hooks

Abre `starter/App.tsx` y descomenta el código para probar ambos hooks en componentes de ejemplo.

---

## ✅ Criterios de evaluación

| Criterio                         | Puntos  |
| -------------------------------- | ------- |
| useToggle funciona correctamente | 25      |
| useCounter con opciones          | 35      |
| Tipado TypeScript completo       | 25      |
| useCallback en funciones         | 15      |
| **Total**                        | **100** |

---

## 📁 Archivos

```
ejercicio-01-hooks-basicos/
├── README.md
├── starter/
│   ├── useToggle.ts
│   ├── useCounter.ts
│   └── App.tsx
└── solution/
    ├── useToggle.ts
    ├── useCounter.ts
    └── App.tsx
```

---

## 💡 Pistas

- `useCallback` evita que las funciones se recreen en cada render
- El array de dependencias vacío `[]` significa que la función nunca cambia
- Usa desestructuración con defaults para opciones opcionales

---

_Siguiente: [Ejercicio 02 - Hooks con Estado](../ejercicio-02-hooks-con-estado/)_
