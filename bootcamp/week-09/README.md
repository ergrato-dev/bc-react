# 📅 Semana 09: Redux Toolkit con TypeScript

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Comprender la arquitectura Flux y el patrón Redux
- ✅ Configurar Redux Toolkit en un proyecto React con TypeScript
- ✅ Crear slices con `createSlice` y tipado completo
- ✅ Implementar acciones asíncronas con `createAsyncThunk`
- ✅ Usar selectores con `createSelector` para optimizar rendimiento
- ✅ Integrar Redux DevTools para debugging avanzado
- ✅ Aplicar patrones de normalización de datos
- ✅ Comparar Redux Toolkit vs Zustand para elegir según el caso

---

## 📚 Contenido

### 1. Teoría (1-teoria/)

| Archivo                                                                         | Tema                                                      | Duración |
| ------------------------------------------------------------------------------- | --------------------------------------------------------- | -------- |
| [01-arquitectura-flux-redux.md](1-teoria/01-arquitectura-flux-redux.md)         | Arquitectura Flux, principios Redux, flujo unidireccional | 30 min   |
| [02-configuracion-redux-toolkit.md](1-teoria/02-configuracion-redux-toolkit.md) | Instalación, configureStore, Provider, tipos base         | 25 min   |
| [03-slices-y-reducers.md](1-teoria/03-slices-y-reducers.md)                     | createSlice, reducers, PayloadAction, Immer integrado     | 35 min   |
| [04-async-thunks.md](1-teoria/04-async-thunks.md)                               | createAsyncThunk, estados de carga, manejo de errores     | 35 min   |
| [05-selectores-y-normalizacion.md](1-teoria/05-selectores-y-normalizacion.md)   | createSelector, memoización, createEntityAdapter          | 35 min   |

**Total teoría: ~2.5 horas**

### 2. Ejercicios (2-ejercicios/)

| Ejercicio                                                                  | Descripción                                                | Duración |
| -------------------------------------------------------------------------- | ---------------------------------------------------------- | -------- |
| [ejercicio-01-primer-slice](2-ejercicios/ejercicio-01-primer-slice/)       | Crear slice con estado, reducers y acciones tipadas        | 40 min   |
| [ejercicio-02-async-thunk](2-ejercicios/ejercicio-02-async-thunk/)         | Implementar thunk para fetch de datos con estados de carga | 45 min   |
| [ejercicio-03-selectores](2-ejercicios/ejercicio-03-selectores/)           | Crear selectores memoizados con createSelector             | 40 min   |
| [ejercicio-04-entity-adapter](2-ejercicios/ejercicio-04-entity-adapter/)   | Normalizar datos con createEntityAdapter                   | 45 min   |
| [ejercicio-05-rtk-query-intro](2-ejercicios/ejercicio-05-rtk-query-intro/) | Introducción a RTK Query para data fetching                | 40 min   |

**Total ejercicios: ~3.5 horas**

### 3. Proyecto Semanal (3-proyecto/)

**Sistema de Gestión con Redux Toolkit**

Proyecto integrador donde implementarás:

- Store configurado con múltiples slices
- Acciones asíncronas para CRUD
- Selectores optimizados
- Normalización de entidades
- Integración con DevTools

**Duración estimada: 2 horas**

---

## ⏱️ Distribución del Tiempo

| Actividad  | Horas       |
| ---------- | ----------- |
| Teoría     | 2.5         |
| Ejercicios | 3.5         |
| Proyecto   | 2           |
| **Total**  | **8 horas** |

---

## 📋 Requisitos Previos

- ✅ Semana 08 completada (Zustand)
- ✅ Comprensión de gestión de estado global
- ✅ TypeScript intermedio (generics, utility types)
- ✅ Hooks de React (useState, useEffect)

---

## 🛠️ Herramientas Necesarias

- Node.js 18+ y pnpm
- VS Code con extensiones de React/TypeScript
- Redux DevTools (extensión del navegador)
- Navegador moderno (Chrome/Firefox)

---

## 📦 Dependencias de la Semana

```bash
# Dependencias principales
pnpm add @reduxjs/toolkit react-redux

# Tipos (incluidos en @reduxjs/toolkit)
# No se requieren @types adicionales
```

---

## 🔗 Navegación

| ← Anterior                                 |           Inicio            |                                    Siguiente → |
| :----------------------------------------- | :-------------------------: | ---------------------------------------------: |
| [Semana 08: Zustand](../week-08/README.md) | [Bootcamp](../../README.md) | [Semana 10: React Query](../week-10/README.md) |

---

## 📖 Recursos Adicionales

- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [Redux Style Guide](https://redux.js.org/style-guide/)
- [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview)
- [4-recursos/](4-recursos/) - Material complementario

---

## 🆚 Redux Toolkit vs Zustand

| Aspecto               | Redux Toolkit                     | Zustand                    |
| --------------------- | --------------------------------- | -------------------------- |
| **Bundle size**       | ~11KB                             | ~1.2KB                     |
| **Boilerplate**       | Medio (reducido vs Redux clásico) | Mínimo                     |
| **DevTools**          | Excelentes, time-travel           | Via middleware             |
| **Async**             | createAsyncThunk, RTK Query       | Manual o middleware        |
| **Escalabilidad**     | Excelente para apps grandes       | Buena para apps medianas   |
| **Curva aprendizaje** | Media                             | Baja                       |
| **Ecosistema**        | Muy amplio                        | Creciente                  |
| **Caso de uso**       | Apps enterprise, equipos grandes  | Apps medianas, prototipado |

---

_Semana 09 de 20 · Etapa 3: React Intermedio_
