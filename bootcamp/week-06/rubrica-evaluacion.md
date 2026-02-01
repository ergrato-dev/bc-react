# 📊 Rúbrica de Evaluación - Semana 06

## Custom Hooks y Proyecto Integrador

---

## 📋 Información General

| Aspecto             | Detalle                                      |
| ------------------- | -------------------------------------------- |
| **Semana**          | 06 de 20                                     |
| **Etapa**           | 2 - Fundamentos de React (Final)             |
| **Tema Principal**  | Custom Hooks y Proyecto Integrador           |
| **Duración**        | 8 horas                                      |
| **Tipo Evaluación** | Formativa (ejercicios) + Sumativa (proyecto) |

---

## 🎯 Objetivos Evaluables

1. Crear custom hooks reutilizables con TypeScript
2. Extraer lógica de componentes a hooks personalizados
3. Tipar hooks con generics para máxima flexibilidad
4. Integrar todos los conceptos de la Etapa 2 en un proyecto

---

## 📝 Evidencias de Aprendizaje

### Evidencia 1: Conocimiento (30%)

**Instrumento**: Cuestionario teórico sobre hooks

| Criterio                          | Excelente (10)                         | Bueno (8)          | Suficiente (6)      | Insuficiente (0-5) |
| --------------------------------- | -------------------------------------- | ------------------ | ------------------- | ------------------ |
| Reglas de los hooks               | Explica las 2 reglas y por qué existen | Conoce las reglas  | Conoce parcialmente | No conoce          |
| Anatomía de custom hook           | Explica estructura completa            | Explica lo básico  | Confunde conceptos  | No puede explicar  |
| Diferencia useState vs useReducer | Sabe cuándo usar cada uno              | Conoce diferencias | Confunde uso        | No diferencia      |

### Evidencia 2: Desempeño (40%)

**Instrumento**: Ejercicios prácticos de custom hooks

| Criterio                 | Excelente (10)              | Bueno (8)                  | Suficiente (6)         | Insuficiente (0-5) |
| ------------------------ | --------------------------- | -------------------------- | ---------------------- | ------------------ |
| useToggle/useCounter     | Hooks tipados y funcionales | Funciona con tipos básicos | Funciona parcialmente  | No funciona        |
| useForm con validación   | Tipado genérico completo    | Tipado básico funcional    | Tipado incompleto      | Sin tipado         |
| useFetch con estados     | Loading/error/data tipados  | Estados básicos            | Falta algún estado     | No maneja estados  |
| useLocalStorage genérico | `<T>` con serialización     | Funciona para strings      | Tipado parcial         | No es genérico     |
| Composición de hooks     | Hooks que usan otros hooks  | Composición básica         | Intento de composición | Sin composición    |

### Evidencia 3: Producto (30%)

**Instrumento**: Dashboard Interactivo (Proyecto Etapa 2)

| Criterio                       | Excelente (10)                 | Bueno (8)          | Suficiente (6)         | Insuficiente (0-5) |
| ------------------------------ | ------------------------------ | ------------------ | ---------------------- | ------------------ |
| Custom hooks implementados     | 5+ hooks reutilizables         | 3-4 hooks          | 2 hooks                | <2 hooks           |
| Widgets interactivos           | 4+ widgets funcionales         | 3 widgets          | 2 widgets              | <2 widgets         |
| Context API (tema/usuario)     | 2+ contexts bien tipados       | 1 context completo | Context básico         | Sin context        |
| TypeScript estricto            | 0 errores, tipos completos     | Errores menores    | any ocasional          | Muchos any         |
| Estructura de código           | Separación clara, reutilizable | Organizado         | Algo desorganizado     | Desordenado        |
| Dominio aplicado correctamente | Entidades coherentes           | Mayoría coherente  | Parcialmente coherente | Incoherente        |

---

## 🔢 Cálculo de Calificación

```
Calificación Final = (Conocimiento × 0.30) + (Desempeño × 0.40) + (Producto × 0.30)
```

### Escala de Conversión

| Puntos | Calificación | Nivel         |
| ------ | ------------ | ------------- |
| 95-100 | 10           | Excepcional   |
| 85-94  | 9            | Sobresaliente |
| 75-84  | 8            | Notable       |
| 70-74  | 7            | Aprobado      |
| 60-69  | 6            | Suficiente    |
| < 60   | 5 o menos    | No aprobado   |

---

## ✅ Checklist de Entrega

### Ejercicios Prácticos

- [ ] Ejercicio 01: `useToggle`, `useCounter` implementados
- [ ] Ejercicio 02: `useForm`, `useArray` con estado complejo
- [ ] Ejercicio 03: `useFetch`, `useDebounce` con efectos
- [ ] Ejercicio 04: Hooks genéricos con `<T>`
- [ ] Ejercicio 05: Composición de múltiples hooks

### Proyecto Dashboard

- [ ] Repositorio con estructura organizada
- [ ] README con descripción del dominio asignado
- [ ] Mínimo 5 custom hooks reutilizables:
  - [ ] Hook de estado (toggle, counter, form)
  - [ ] Hook de efectos (fetch, debounce)
  - [ ] Hook de storage (localStorage)
  - [ ] Hook de UI (responsive, theme)
  - [ ] Hook compuesto (auth, dashboard data)
- [ ] Mínimo 3 widgets funcionales
- [ ] Context para tema (claro/oscuro)
- [ ] TypeScript sin errores (`tsc --noEmit`)
- [ ] Código documentado con comentarios JSDoc

---

## 🏛️ Adaptación por Dominio

El proyecto debe estar adaptado al dominio asignado:

| Dominio        | Widgets Sugeridos                                  |
| -------------- | -------------------------------------------------- |
| 📖 Biblioteca  | Libros prestados, usuarios activos, búsqueda       |
| 💊 Farmacia    | Stock bajo, ventas del día, alertas vencimiento    |
| 🏋️ Gimnasio    | Miembros activos, clases hoy, ocupación            |
| 🏫 Escuela     | Estudiantes, promedio notas, asistencia            |
| 🏬 Pet Shop    | Productos populares, citas grooming, inventario    |
| 🏪 Restaurante | Pedidos activos, mesas ocupadas, platos populares  |
| 🏭 Banco       | Transacciones hoy, saldo total, alertas            |
| 🚕 Taxis       | Viajes activos, conductores disponibles, ingresos  |
| 🏥 Hospital    | Pacientes hoy, camas disponibles, emergencias      |
| 🎥 Cine        | Películas hoy, butacas vendidas, próximos estrenos |

---

## 📅 Fechas Importantes

| Entregable         | Fecha Límite       |
| ------------------ | ------------------ |
| Ejercicios 01-03   | Día 3 de la semana |
| Ejercicios 04-05   | Día 5 de la semana |
| Proyecto Dashboard | Día 7 de la semana |
| Retroalimentación  | Día 8-9            |

---

## 💡 Retroalimentación

### Fortalezas Comunes

- Hooks bien encapsulados y reutilizables
- Tipado correcto con generics
- Buena separación de concerns

### Áreas de Mejora Frecuentes

- Olvidar cleanup en useEffect dentro de hooks
- No manejar todos los estados (loading, error)
- Hooks que hacen demasiadas cosas
- Dependencias incorrectas en useEffect

### Recursos de Refuerzo

- [React Docs: Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [useHooks.com](https://usehooks.com/) - Colección de hooks
- [ahooks](https://ahooks.js.org/) - Librería de hooks

---

## 🎓 Competencias Etapa 2 Completadas

Al aprobar esta semana, el estudiante demuestra:

| Competencia                         | Nivel Alcanzado |
| ----------------------------------- | --------------- |
| Componentes funcionales TypeScript  | ✅ Intermedio   |
| Hooks nativos (useState, useEffect) | ✅ Intermedio   |
| Manejo de eventos y formularios     | ✅ Intermedio   |
| Renderizado condicional y listas    | ✅ Intermedio   |
| Context API                         | ✅ Básico       |
| Custom Hooks                        | ✅ Básico       |
| Configuración Vite                  | ✅ Básico       |

**Próximo paso**: Etapa 3 - React Intermedio (React Router, Zustand, React Query)

---

_Rúbrica Semana 06 · Bootcamp React + TypeScript · Etapa 2 Final_
