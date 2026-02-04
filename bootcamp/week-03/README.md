# 📘 Week 03: useEffect y Efectos Secundarios

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Comprender el hook `useEffect` y su propósito
- ✅ Gestionar efectos secundarios en componentes funcionales
- ✅ Controlar cuándo se ejecutan efectos con dependencias
- ✅ Implementar funciones de limpieza (cleanup)
- ✅ Evitar bugs comunes con efectos (loops infinitos, memory leaks)
- ✅ Aplicar efectos en casos reales (fetch, timers, subscripciones)
- ✅ Entender el ciclo de vida de componentes con hooks

---

## 📚 Requisitos Previos

Antes de comenzar esta semana, debes dominar:

- ✅ Week 01: TypeScript fundamentos
- ✅ Week 02: Componentes, props, useState, eventos
- ✅ JavaScript: Promesas, async/await, timers
- ✅ Conceptos: inmutabilidad, funciones puras

---

## 🗂️ Estructura de la Semana

```
week-03/
├── README.md                          # ← Estás aquí
├── rubrica-evaluacion.md              # Criterios de evaluación
├── 0-assets/                          # Diagramas y recursos visuales
├── 1-teoria/                          # Material teórico (~2.5-3h)
│   ├── 01-useeffect-introduccion.md
│   ├── 02-dependencias-efectos.md
│   ├── 03-cleanup-limpieza.md
│   └── 04-casos-uso-comunes.md
├── 2-ejercicios/                      # Ejercicios prácticos (~2.5-3h)
│   ├── 01-effect-basico/
│   ├── 02-effect-dependencies/
│   ├── 03-effect-cleanup/
│   ├── 04-fetch-data/
│   └── 05-timer-app/
├── 3-proyecto/                        # Proyecto integrador (~2-2.5h)
│   ├── README.md
│   ├── src/
│   └── solution/
├── 4-recursos/                        # Recursos adicionales
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                        # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1️⃣ Teoría (2.5-3 horas)

#### [01 - Introducción a useEffect](./1-teoria/01-useeffect-introduccion.md)

- ¿Qué es useEffect y para qué sirve?
- Efectos secundarios en React
- Sintaxis básica y primer ejemplo
- useEffect vs eventos

#### [02 - Dependencias de Efectos](./1-teoria/02-dependencias-efectos.md)

- Array de dependencias: sin array, vacío, con valores
- Cuándo se ejecutan los efectos
- React.StrictMode y doble invocación
- Evitar loops infinitos

#### [03 - Cleanup y Limpieza](./1-teoria/03-cleanup-limpieza.md)

- Funciones de limpieza (cleanup functions)
- Prevenir memory leaks
- Cancelar subscripciones y timers
- Abort Controllers para fetch

#### [04 - Casos de Uso Comunes](./1-teoria/04-casos-uso-comunes.md)

- Fetching de datos con useEffect
- Timers y contadores
- Event listeners del DOM
- Integración con librerías externas

---

### 2️⃣ Ejercicios (2.5-3 horas)

Ejercicios progresivos formato tutorial guiado:

1. **Effect Básico** (15-20 min): Primer useEffect con document.title
2. **Effect Dependencies** (20-30 min): Controlar ejecución con dependencias
3. **Effect Cleanup** (25-35 min): Limpiar timers y event listeners
4. **Fetch Data** (30-40 min): Obtener datos de API con useEffect
5. **Timer App** (35-45 min): Temporizador con múltiples efectos

---

### 3️⃣ Proyecto Semanal (2-2.5 horas)

**Título**: Sistema de Dashboard con Datos en Tiempo Real

**Requisitos**:

- Fetch de datos desde API pública
- Actualización periódica (polling)
- Efectos de limpieza apropiados
- Manejo de estados loading/error
- 4 componentes principales

**Dominios únicos** (asignados por instructor):

- 📊 Dashboard financiero
- 🌤️ Dashboard meteorológico
- 📰 Dashboard de noticias
- 💱 Dashboard de criptomonedas
- 📈 Dashboard de estadísticas
- etc.

---

## ⏱️ Distribución del Tiempo

| Componente     | Tiempo Estimado | Descripción                            |
| -------------- | --------------- | -------------------------------------- |
| **Teoría**     | 2.5-3h          | Leer 4 archivos .md con ejemplos       |
| **Ejercicios** | 2.5-3h          | Completar 5 ejercicios (15-45 min c/u) |
| **Proyecto**   | 2-2.5h          | Implementar dashboard con efectos      |
| **Buffer**     | +30 min         | Setup, debugging, revisión             |
| **TOTAL**      | **~8 horas**    | Dedicación semanal completa            |

---

## 📌 Entregable

Al finalizar la semana, debes entregar:

### Proyecto Semanal 📦 (100%)

**Entregable único**: Dashboard con Datos en Tiempo Real

- ✅ Dashboard funcional con fetch de datos
- ✅ Polling con actualización periódica
- ✅ Efectos con cleanup apropiado (sin memory leaks)
- ✅ Manejo de estados loading/error/data
- ✅ Adaptado correctamente al dominio asignado
- ✅ Código TypeScript tipado correctamente
- ✅ README con descripción del dominio

**Evaluación**: Ver [rubrica-evaluacion.md](rubrica-evaluacion.md)

> **Nota**: La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

---

## ✅ Checklist de Verificación

Antes de considerar la semana completa:

### Preparación (No evaluada)

- [ ] Teoría: Leídos los 4 archivos de teoría
- [ ] Practiqué con los ejercicios guiados (2-ejercicios/)
- [ ] Código: Nomenclatura inglés (técnico) + español (comentarios)
- [ ] Tipos: TypeScript sin `any`

### Entregable (Evaluado)

- [ ] **Implementé el proyecto semanal** (3-proyecto/)
- [ ] Proyecto: Dashboard funcional con fetch
- [ ] Proyecto: Cleanup functions implementadas
- [ ] Proyecto: Manejo de loading/error states
- [ ] Proyecto: Adaptado a mi dominio asignado
- [ ] Incluí README descriptivo

---

## 🔗 Navegación

- [← Week 02: Fundamentos de React](../week-02/README.md)
- [→ Week 04: Renderizado de Listas y Keys](../week-04/README.md)
- [📚 Tabla de Contenidos del Bootcamp](../../README.md)

---

## 📚 Recursos Destacados

- [React Docs - useEffect](https://react.dev/reference/react/useEffect)
- [React Docs - Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [React Docs - You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

---

**¡Buena suerte! 🚀**
