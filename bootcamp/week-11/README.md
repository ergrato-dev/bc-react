# 📅 Semana 11: Formularios con React Hook Form y Zod

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Implementar formularios complejos con React Hook Form y TypeScript
- ✅ Definir esquemas de validación robustos con Zod
- ✅ Integrar Zod con React Hook Form usando `@hookform/resolvers`
- ✅ Manejar errores de validación con mensajes personalizados
- ✅ Crear formularios multi-paso (wizard forms)
- ✅ Implementar campos dinámicos con `useFieldArray`
- ✅ Aplicar validación asíncrona (ej: verificar email único)
- ✅ Construir Error Boundaries para manejo de errores en React

---

## 📚 Requisitos Previos

- ✅ Semana 10: React Query (TanStack Query) completada
- ✅ Conocimiento de formularios HTML y eventos
- ✅ TypeScript intermedio (generics, inferencia de tipos)
- ✅ Familiaridad con validación de datos

---

## 🗂️ Estructura de la Semana

```
week-11/
├── README.md                    # Este archivo
├── rubrica-evaluacion.md        # Criterios de evaluación
├── 0-assets/                    # Diagramas SVG
│   ├── react-hook-form-flow.svg
│   ├── zod-validation-schema.svg
│   └── error-boundary-flow.svg
├── 1-teoria/                    # Material teórico
│   ├── 01-introduccion-react-hook-form.md
│   ├── 02-validacion-con-zod.md
│   ├── 03-integracion-rhf-zod.md
│   ├── 04-formularios-avanzados.md
│   └── 05-error-boundaries.md
├── 2-ejercicios/                # Ejercicios guiados
│   ├── ejercicio-01-formulario-basico/
│   ├── ejercicio-02-validacion-zod/
│   ├── ejercicio-03-campos-dinamicos/
│   ├── ejercicio-04-formulario-wizard/
│   └── ejercicio-05-error-boundaries/
├── 3-proyecto/                  # Proyecto semanal
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

| Archivo                                                                           | Tema                                        | Duración |
| --------------------------------------------------------------------------------- | ------------------------------------------- | -------- |
| [01-introduccion-react-hook-form.md](1-teoria/01-introduccion-react-hook-form.md) | ¿Por qué RHF? Controlled vs Uncontrolled    | 25 min   |
| [02-validacion-con-zod.md](1-teoria/02-validacion-con-zod.md)                     | Esquemas Zod, inferencia de tipos, mensajes | 30 min   |
| [03-integracion-rhf-zod.md](1-teoria/03-integracion-rhf-zod.md)                   | zodResolver, tipado automático, errores     | 30 min   |
| [04-formularios-avanzados.md](1-teoria/04-formularios-avanzados.md)               | useFieldArray, watch, wizard forms          | 25 min   |
| [05-error-boundaries.md](1-teoria/05-error-boundaries.md)                         | Error Boundaries, fallback UI, recovery     | 30 min   |

### 2. Ejercicios (3-3.5 horas)

| Ejercicio                                                    | Tema                               | Duración |
| ------------------------------------------------------------ | ---------------------------------- | -------- |
| [ejercicio-01](2-ejercicios/ejercicio-01-formulario-basico/) | Formulario básico con RHF          | 35 min   |
| [ejercicio-02](2-ejercicios/ejercicio-02-validacion-zod/)    | Validación con Zod y zodResolver   | 40 min   |
| [ejercicio-03](2-ejercicios/ejercicio-03-campos-dinamicos/)  | Campos dinámicos con useFieldArray | 40 min   |
| [ejercicio-04](2-ejercicios/ejercicio-04-formulario-wizard/) | Formulario multi-paso (wizard)     | 45 min   |
| [ejercicio-05](2-ejercicios/ejercicio-05-error-boundaries/)  | Error Boundaries en React          | 40 min   |

### 3. Proyecto (2-2.5 horas)

**Formulario de Registro Completo**: Aplicación que integra todos los conceptos de la semana con validación robusta, campos dinámicos y manejo de errores, adaptada al dominio asignado por el instructor.

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad     | Tiempo  |
| ------------- | ------- |
| 📖 Teoría     | 2.5 h   |
| 💻 Ejercicios | 3.5 h   |
| 🏗️ Proyecto   | 2 h     |
| **Total**     | **8 h** |

---

## 📌 Entregable

**Proyecto Semanal 📦 (100%)**

- Formulario con React Hook Form
- Validación completa con Zod
- Campos dinámicos implementados
- Error Boundary implementado
- Adaptado al dominio asignado

> 💡 **Nota:** La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

### ✅ Checklist de la Semana

**Preparación (No evaluada):**

- [ ] Leer material teórico en `1-teoria/`
- [ ] Completar ejercicios guiados en `2-ejercicios/`
- [ ] Consultar glosario en `5-glosario/`

**Entregable (Evaluado):**

- [ ] Proyecto semanal completado
- [ ] Formulario principal con React Hook Form
- [ ] Esquema de validación Zod completo
- [ ] Al menos una sección con campos dinámicos
- [ ] Error Boundary envolviendo el formulario
- [ ] Tipos TypeScript inferidos de Zod
- [ ] README con instrucciones de ejecución
- [ ] Adaptado al dominio asignado por el instructor

---

## 🔗 Navegación

| ⬅️ Anterior                                    | 🏠 Inicio                              | Siguiente ➡️                                                       |
| ---------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------ |
| [Semana 10: React Query](../week-10/README.md) | [Índice del Bootcamp](../../README.md) | [Semana 12: CSS Modules y Styled Components](../week-12/README.md) |

---

## 💡 Tips de la Semana

> **React Hook Form** reduce re-renders al mínimo usando refs internamente, lo que lo hace mucho más performante que formularios controlados tradicionales.

> **Zod** no solo valida, también infiere tipos de TypeScript automáticamente con `z.infer<typeof schema>`, eliminando duplicación de código.

> **Error Boundaries** son la única forma en React de capturar errores en el árbol de componentes durante el renderizado.

---

## 🎯 Proyecto Final de Etapa 3

Esta semana marca el **final de la Etapa 3: React Intermedio**. Has aprendido:

- ✅ React Router v6 (navegación SPA)
- ✅ Zustand (estado global simple)
- ✅ Redux Toolkit (estado global escalable)
- ✅ React Query (server state)
- ✅ React Hook Form + Zod (formularios y validación)
- ✅ Error Boundaries (manejo de errores)

**¡Felicidades!** Estás listo para la **Etapa 4: Styling y UI**.
