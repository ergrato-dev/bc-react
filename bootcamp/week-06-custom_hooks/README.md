# 📘 Semana 06: Custom Hooks y Proyecto Integrador

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Crear custom hooks reutilizables con TypeScript
- ✅ Extraer lógica de componentes a hooks personalizados
- ✅ Aplicar patrones de hooks: composición, encapsulamiento
- ✅ Tipar hooks con generics para máxima flexibilidad
- ✅ Comprender el ciclo de vida de componentes con hooks
- ✅ Optimizar la configuración de Vite para desarrollo
- ✅ Integrar todos los conceptos en un Dashboard interactivo

---

## 📚 Requisitos Previos

- ✅ Week-01: Fundamentos de TypeScript
- ✅ Week-02: Introducción a React y JSX/TSX
- ✅ Week-03: useEffect y Efectos Secundarios
- ✅ Week-04: Renderizado Condicional y Listas
- ✅ Week-05: Composición de Componentes y Context API

---

## 🗂️ Estructura de la Semana

```
week-06-custom_hooks/
├── README.md                    # Este archivo
├── rubrica-evaluacion.md        # Criterios de evaluación
├── 0-assets/                    # Diagramas SVG
│   ├── 01-custom-hooks-anatomy.svg
│   ├── 02-hooks-composition.svg
│   ├── 03-component-lifecycle.svg
│   ├── 04-hooks-rules.svg
│   └── 05-vite-architecture.svg
├── 1-teoria/                    # Material teórico
│   ├── 01-custom-hooks-fundamentos.md
│   ├── 02-patrones-custom-hooks.md
│   ├── 03-ciclo-vida-componentes.md
│   └── 04-vite-configuracion.md
├── 2-ejercicios/                # Ejercicios guiados
│   ├── ejercicio-01-hooks-basicos/
│   ├── ejercicio-02-hooks-con-estado/
│   ├── ejercicio-03-hooks-con-efectos/
│   ├── ejercicio-04-hooks-genericos/
│   └── ejercicio-05-hooks-compuestos/
├── 3-proyecto/                  # Proyecto Integrador Final Etapa 2
│   ├── README.md
│   ├── starter/
│   └── solution/
├── 4-recursos/                  # Recursos adicionales
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                  # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1. Teoría (2-2.5 horas)

| Archivo                                                                   | Tema                           | Duración |
| ------------------------------------------------------------------------- | ------------------------------ | -------- |
| [01-custom-hooks-fundamentos.md](1-teoria/01-custom-hooks-fundamentos.md) | Anatomía y creación de hooks   | 30 min   |
| [02-patrones-custom-hooks.md](1-teoria/02-patrones-custom-hooks.md)       | Patrones y mejores prácticas   | 35 min   |
| [03-ciclo-vida-componentes.md](1-teoria/03-ciclo-vida-componentes.md)     | Ciclo de vida con hooks        | 30 min   |
| [04-vite-configuracion.md](1-teoria/04-vite-configuracion.md)             | Configuración avanzada de Vite | 25 min   |

### 2. Ejercicios Guiados (3-3.5 horas)

| Ejercicio                                                    | Tema                          | Duración |
| ------------------------------------------------------------ | ----------------------------- | -------- |
| [Ejercicio 01](2-ejercicios/ejercicio-01-hooks-basicos/)     | Hooks básicos (useToggle)     | 30 min   |
| [Ejercicio 02](2-ejercicios/ejercicio-02-hooks-con-estado/)  | Hooks con estado complejo     | 40 min   |
| [Ejercicio 03](2-ejercicios/ejercicio-03-hooks-con-efectos/) | Hooks con efectos             | 45 min   |
| [Ejercicio 04](2-ejercicios/ejercicio-04-hooks-genericos/)   | Hooks con TypeScript generics | 40 min   |
| [Ejercicio 05](2-ejercicios/ejercicio-05-hooks-compuestos/)  | Composición de hooks          | 45 min   |

### 3. Proyecto Integrador Etapa 2 (2-2.5 horas)

**🎯 Dashboard Interactivo**

Proyecto final de la Etapa 2 que integra TODO lo aprendido:

- Custom hooks para lógica reutilizable
- Context API para estado global (tema, usuario)
- Composición de componentes (Cards, Widgets, Layouts)
- Renderizado condicional y listas dinámicas
- Efectos para fetching de datos
- TypeScript estricto en toda la aplicación
- Configuración optimizada de Vite

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad  | Tiempo  |
| ---------- | ------- |
| Teoría     | 2-2.5h  |
| Ejercicios | 3-3.5h  |
| Proyecto   | 2-2.5h  |
| **Total**  | **~8h** |

---

## 📌 Entregable

> **💡 Nota:** La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

### ✅ Preparación (No evaluada)

- [ ] Ejercicio 01: `useToggle` y `useCounter` funcionando
- [ ] Ejercicio 02: `useForm` y `useArray` con estado tipado
- [ ] Ejercicio 03: `useFetch` y `useDebounce` con efectos
- [ ] Ejercicio 04: Hooks genéricos `useLocalStorage<T>` y `useAsync<T>`
- [ ] Ejercicio 05: Composición `useAuth` = `useLocalStorage` + `useFetch`

### 📦 Proyecto Semanal (100% de la evaluación)

- [ ] Dashboard con al menos 5 custom hooks implementados
- [ ] Mínimo 3 widgets interactivos (estadísticas, lista, formulario)
- [ ] Tema claro/oscuro con Context API
- [ ] Datos mock con simulación de fetch
- [ ] TypeScript estricto sin errores
- [ ] Código limpio y documentado

---

## 🏆 Criterios de Evaluación

| Criterio              | Peso |
| --------------------- | ---- |
| Funcionalidad         | 40%  |
| Adaptación al Dominio | 35%  |
| Calidad del Código    | 25%  |

> **Nota:** Se requiere mínimo 70% en el proyecto para aprobar la semana.

---

## 🎉 Logro Desbloqueado

Al completar esta semana, habrás terminado la **Etapa 2: Fundamentos de React**.

**Habilidades adquiridas:**

- ✅ Componentes funcionales con TypeScript
- ✅ Props, estado y eventos tipados
- ✅ useEffect y manejo de efectos
- ✅ Renderizado condicional y listas
- ✅ Composición y Context API
- ✅ Custom hooks reutilizables
- ✅ Vite como build tool

**¡Estás listo para la Etapa 3: React Intermedio!** 🚀

---

## 🔗 Navegación

| Anterior                                        | Siguiente                                        |
| ----------------------------------------------- | ------------------------------------------------ |
| [⬅️ Week 05: Composición](../week-05-composicion_context_api/README.md) | [➡️ Week 07: React Router](../week-07-react_router/README.md) |

---

_Semana 06 de 20 · Etapa 2: Fundamentos de React (Final) · ~8 horas_
