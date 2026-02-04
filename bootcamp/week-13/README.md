# 📅 Semana 13: Componentes UI, Animaciones y Theming

## Etapa 4: Styling y UI (Parte 2/2)

> **Duración**: 8 horas (2.5h teoría + 3h ejercicios + 2.5h proyecto)

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Utilizar componentes headless (Radix UI, Headless UI)
- ✅ Implementar animaciones fluidas con Framer Motion
- ✅ Crear sistemas de theming con dark/light mode
- ✅ Construir componentes de un Design System
- ✅ Aplicar accesibilidad (a11y) en componentes de UI
- ✅ Combinar Tailwind con librerías de componentes

---

## 📚 Requisitos Previos

- ✅ Semana 12: CSS Modules, Styled Components y Tailwind CSS
- ✅ Conocimiento de hooks de React (useState, useEffect)
- ✅ Familiaridad con TypeScript en React

---

## 🗂️ Estructura de la Semana

```
week-13/
├── README.md                    # Este archivo
├── rubrica-evaluacion.md        # Criterios de evaluación
├── 0-assets/                    # Diagramas SVG
├── 1-teoria/                    # Material teórico
│   ├── 01-headless-components.md
│   ├── 02-framer-motion.md
│   ├── 03-theming-dark-mode.md
│   └── 04-design-system.md
├── 2-ejercicios/                # Ejercicios guiados
│   ├── ejercicio-01-radix-dialog/
│   ├── ejercicio-02-framer-animations/
│   ├── ejercicio-03-theme-switcher/
│   └── ejercicio-04-design-tokens/
├── 3-proyecto/                  # Proyecto semanal
│   ├── README.md
│   ├── starter/
│   └── solution/
├── 4-recursos/                  # Material adicional
│   ├── README.md
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                  # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1. Teoría (~2.5 horas)

| Archivo                                                         | Tema                          | Duración |
| --------------------------------------------------------------- | ----------------------------- | -------- |
| [01-headless-components.md](1-teoria/01-headless-components.md) | Radix UI y Headless UI        | ~40 min  |
| [02-framer-motion.md](1-teoria/02-framer-motion.md)             | Animaciones con Framer Motion | ~40 min  |
| [03-theming-dark-mode.md](1-teoria/03-theming-dark-mode.md)     | Sistema de temas y dark mode  | ~35 min  |
| [04-design-system.md](1-teoria/04-design-system.md)             | Fundamentos de Design Systems | ~35 min  |

### 2. Ejercicios (~3 horas)

| Ejercicio                                                    | Descripción                      | Duración |
| ------------------------------------------------------------ | -------------------------------- | -------- |
| [ejercicio-01](2-ejercicios/ejercicio-01-radix-dialog/)      | Modal accesible con Radix Dialog | ~45 min  |
| [ejercicio-02](2-ejercicios/ejercicio-02-framer-animations/) | Animaciones con Framer Motion    | ~45 min  |
| [ejercicio-03](2-ejercicios/ejercicio-03-theme-switcher/)    | Theme Switcher (dark/light)      | ~45 min  |
| [ejercicio-04](2-ejercicios/ejercicio-04-design-tokens/)     | Design Tokens y variables CSS    | ~45 min  |

### 3. Proyecto (~2.5 horas)

| Proyecto                          | Descripción                                      |
| --------------------------------- | ------------------------------------------------ |
| [Mini Design System](3-proyecto/) | Sistema de componentes con theming y animaciones |

---

## ⏱️ Distribución del Tiempo

```
┌─────────────────────────────────────────────────────────┐
│                    SEMANA 13 (8h)                       │
├─────────────────────────────────────────────────────────┤
│  Teoría      │████████████░░░░░░░░░░░░│  2.5h (31%)    │
│  Ejercicios  │████████████████████░░░░│  3.0h (38%)    │
│  Proyecto    │████████████░░░░░░░░░░░░│  2.5h (31%)    │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tecnologías de la Semana

| Tecnología                   | Versión | Propósito                       |
| ---------------------------- | ------- | ------------------------------- |
| **@radix-ui/react-\***       | ^1.x    | Componentes headless accesibles |
| **framer-motion**            | ^11.x   | Animaciones declarativas        |
| **tailwindcss**              | ^3.x    | Utility-first CSS               |
| **class-variance-authority** | ^0.7.x  | Variantes tipadas               |
| **tailwind-merge**           | ^2.x    | Merge de clases                 |

---

## 📌 Entregable

### Proyecto Semanal 📦 (100%)

- [ ] Mini Design System con 5+ componentes
- [ ] Soporte dark/light mode
- [ ] Animaciones consistentes
- [ ] Documentación de componentes

> **📝 Nota:** La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

### ✅ Checklist de Preparación

**Preparación (No evaluada):**

- [ ] Revisar teoría de headless components
- [ ] Revisar teoría de Framer Motion
- [ ] Revisar teoría de theming y dark mode
- [ ] Completar ejercicio 1: Modal con Radix Dialog
- [ ] Completar ejercicio 2: Animaciones Framer Motion
- [ ] Completar ejercicio 3: Theme Switcher funcional
- [ ] Completar ejercicio 4: Design Tokens aplicados

**Entregable (Evaluado):**

- [ ] Proyecto: Mini Design System completo

---

## 🔑 Conceptos Clave

| Concepto                  | Descripción                                        |
| ------------------------- | -------------------------------------------------- |
| **Headless UI**           | Componentes sin estilos con lógica y accesibilidad |
| **Compound Components**   | Patrón de composición para APIs flexibles          |
| **Design Tokens**         | Variables de diseño (colores, spacing, etc.)       |
| **Motion Values**         | Estado animable en Framer Motion                   |
| **CSS Custom Properties** | Variables CSS para theming dinámico                |
| **prefers-color-scheme**  | Media query para preferencia de tema               |

---

## 🔗 Navegación

| Anterior                                     | Índice                      | Siguiente                                    |
| -------------------------------------------- | --------------------------- | -------------------------------------------- |
| [← Semana 12: Styling](../week-12/README.md) | [📚 Bootcamp](../README.md) | [Semana 14: Testing →](../week-14/README.md) |

---

## 📖 Recursos Rápidos

- [Radix UI Docs](https://www.radix-ui.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [shadcn/ui Components](https://ui.shadcn.com/)

---

_Semana 13 de 20 · Etapa 4: Styling y UI (2/2) · Última actualización: Febrero 2026_
