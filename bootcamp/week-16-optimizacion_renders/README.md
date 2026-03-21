# Semana 16: Optimización de Renders

## 📋 Información General

| Campo             | Detalle                                |
| ----------------- | -------------------------------------- |
| **Etapa**         | 6 - Avanzado y Performance (Parte 1/2) |
| **Duración**      | 8 horas                                |
| **Prerequisitos** | Semana 15 (Testing Avanzado)           |
| **Proyecto**      | Dashboard con Métricas de Performance  |

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Identificar renders innecesarios con React DevTools Profiler
- ✅ Optimizar componentes con `React.memo`
- ✅ Memorizar cálculos costosos con `useMemo`
- ✅ Estabilizar referencias de funciones con `useCallback`
- ✅ Aplicar patrones de optimización en aplicaciones reales
- ✅ Medir y analizar el rendimiento de componentes

---

## 📚 Contenido

### 1. Teoría (2.5 horas)

| Archivo                                                         | Tema                              | Duración |
| --------------------------------------------------------------- | --------------------------------- | -------- |
| [01-renders-react.md](1-teoria/01-renders-react.md)             | Cómo Funciona el Render en React  | 35 min   |
| [02-react-memo.md](1-teoria/02-react-memo.md)                   | React.memo y Comparación de Props | 40 min   |
| [03-usememo-usecallback.md](1-teoria/03-usememo-usecallback.md) | useMemo y useCallback             | 45 min   |
| [04-profiler-devtools.md](1-teoria/04-profiler-devtools.md)     | Profiler API y DevTools           | 30 min   |

### 2. Ejercicios Guiados (3 horas)

| Ejercicio                                                   | Tema                        | Duración |
| ----------------------------------------------------------- | --------------------------- | -------- |
| [ejercicio-01](2-ejercicios/ejercicio-01-detectar-renders/) | Detectar Renders            | 40 min   |
| [ejercicio-02](2-ejercicios/ejercicio-02-react-memo/)       | Aplicar React.memo          | 50 min   |
| [ejercicio-03](2-ejercicios/ejercicio-03-usememo/)          | Optimizar con useMemo       | 45 min   |
| [ejercicio-04](2-ejercicios/ejercicio-04-usecallback/)      | Estabilizar con useCallback | 45 min   |

### 3. Proyecto Semanal (2.5 horas)

| Proyecto                            | Descripción                             |
| ----------------------------------- | --------------------------------------- |
| [Dashboard Optimizado](3-proyecto/) | Aplicar optimizaciones a dashboard CRUD |

---

## 🗓️ Distribución del Tiempo

| Sección        | Contenido            | Tiempo   | %       |
| -------------- | -------------------- | -------- | ------- |
| **Teoría**     |                      | **2.5h** | **31%** |
|                | Renders en React     | 35 min   |         |
|                | React.memo           | 40 min   |         |
|                | useMemo/useCallback  | 45 min   |         |
|                | Profiler DevTools    | 30 min   |         |
| **Ejercicios** |                      | **3.0h** | **38%** |
|                | Detectar Renders     | 40 min   |         |
|                | React.memo           | 50 min   |         |
|                | useMemo              | 45 min   |         |
|                | useCallback          | 45 min   |         |
| **Proyecto**   |                      | **2.5h** | **31%** |
|                | Dashboard Optimizado | 2.5h     |         |

---

## 📦 Dependencias de la Semana

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "vite": "^5.x",
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x"
  }
}
```

> **Nota**: Esta semana no requiere dependencias adicionales. Las herramientas de optimización (`React.memo`, `useMemo`, `useCallback`, `Profiler`) son parte del core de React.

---

## 📌 Entregable

> **Nota**: La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

### Preparación (No Evaluada)

- [ ] Leer material teórico de la semana
- [ ] Ejercicio 01: Identificar renders innecesarios con console.log y Profiler
- [ ] Ejercicio 02: Optimizar lista con React.memo
- [ ] Ejercicio 03: Memorizar cálculos costosos con useMemo
- [ ] Ejercicio 04: Estabilizar callbacks con useCallback

### Proyecto Semanal 📦 (100%)

- [ ] Dashboard funcional adaptado a tu dominio
- [ ] Mínimo 3 componentes optimizados con React.memo
- [ ] Mínimo 2 usos de useMemo para cálculos costosos
- [ ] Mínimo 2 usos de useCallback para funciones pasadas como props
- [ ] Análisis documentado con capturas del Profiler (antes/después)

---

## 🔗 Navegación

| Anterior                                            | Índice                   | Siguiente                                                        |
| --------------------------------------------------- | ------------------------ | ---------------------------------------------------------------- |
| [Semana 15: Testing Avanzado](../week-15-testing_avanzado/README.md) | [Bootcamp](../README.md) | [Semana 17: Code Splitting y Lazy Loading](../week-17-code_splitting_performance/README.md) |

---

## 📖 Recursos de la Semana

- [Recursos adicionales](4-recursos/)
- [Glosario de términos](5-glosario/)

---

_Etapa 6: Avanzado y Performance - Semana 1 de 2_
