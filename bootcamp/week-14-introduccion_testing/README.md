# 📅 Semana 14: Introducción a Testing en React

## 🎯 Etapa 5: Testing (Parte 1 de 2)

Esta semana marca el inicio de la etapa de Testing. Aprenderás los fundamentos para escribir tests confiables en aplicaciones React con TypeScript.

---

## 📋 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Comprender los tipos de testing y cuándo usar cada uno
- ✅ Configurar Vitest en un proyecto React + TypeScript
- ✅ Escribir tests unitarios con Vitest
- ✅ Usar React Testing Library para testear componentes
- ✅ Aplicar el principio "Testing by User Behavior"
- ✅ Usar queries correctas según accesibilidad

---

## 📚 Contenidos

### 1. Teoría

| Archivo                                                             | Tema                          | Duración |
| ------------------------------------------------------------------- | ----------------------------- | -------- |
| [01-fundamentos-testing.md](1-teoria/01-fundamentos-testing.md)     | Tipos de tests y estrategias  | 30 min   |
| [02-vitest-configuracion.md](1-teoria/02-vitest-configuracion.md)   | Configuración y API de Vitest | 40 min   |
| [03-react-testing-library.md](1-teoria/03-react-testing-library.md) | RTL: queries y user events    | 50 min   |
| [04-testing-componentes.md](1-teoria/04-testing-componentes.md)     | Testing de componentes React  | 30 min   |

### 2. Ejercicios Prácticos

| Ejercicio                                                                      | Descripción                      | Duración |
| ------------------------------------------------------------------------------ | -------------------------------- | -------- |
| [ejercicio-01-vitest-basics](2-ejercicios/ejercicio-01-vitest-basics/)         | Primeros tests con Vitest        | 45 min   |
| [ejercicio-02-rtl-queries](2-ejercicios/ejercicio-02-rtl-queries/)             | Queries de RTL y accesibilidad   | 45 min   |
| [ejercicio-03-user-events](2-ejercicios/ejercicio-03-user-events/)             | Simulación de interacciones      | 45 min   |
| [ejercicio-04-component-testing](2-ejercicios/ejercicio-04-component-testing/) | Testing de componentes completos | 45 min   |

### 3. Proyecto Semanal

| Proyecto                            | Descripción                        | Duración |
| ----------------------------------- | ---------------------------------- | -------- |
| [Testing Suite Básica](3-proyecto/) | Tests para componentes del dominio | 2.5 h    |

---

## ⏱️ Distribución del Tiempo

| Actividad  | Horas | Porcentaje |
| ---------- | ----- | ---------- |
| Teoría     | 2.5   | 31%        |
| Ejercicios | 3.0   | 38%        |
| Proyecto   | 2.5   | 31%        |
| **Total**  | **8** | **100%**   |

---

## 🛠️ Tecnologías de la Semana

| Tecnología                  | Versión | Propósito                     |
| --------------------------- | ------- | ----------------------------- |
| Vitest                      | ^2.x    | Test runner rápido para Vite  |
| @testing-library/react      | ^16.x   | Testing utilities para React  |
| @testing-library/jest-dom   | ^6.x    | Custom matchers para DOM      |
| @testing-library/user-event | ^14.x   | Simulación de eventos usuario |
| jsdom                       | ^25.x   | DOM virtual para tests        |

---

## 📦 Instalación

```bash
# Dependencias de desarrollo para testing
pnpm add -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @types/node
```

---

## 📌 Requisitos Previos

- ✅ Semana 13 completada (Componentes UI)
- ✅ Conocimiento de React hooks y componentes
- ✅ Familiaridad con TypeScript
- ✅ Proyecto Vite configurado

---

## � Entregable

### Proyecto Semanal 📦 (100%)

**Entregable único**: Testing Suite Básica

- ✅ Suite de tests para componentes del dominio
- ✅ Todos los tests pasando (`pnpm test`)
- ✅ Tests adaptados correctamente al dominio asignado
- ✅ Cobertura razonable de componentes
- ✅ README documentando la estrategia de testing

**Evaluación**: Ver [rubrica-evaluacion.md](rubrica-evaluacion.md)

> **Nota**: La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

---

## ✅ Checklist de Progreso

### Preparación (No evaluada)

- [ ] Leí toda la teoría (1-teoria/)
- [ ] Practiqué con los ejercicios guiados (2-ejercicios/)
- [ ] Revisé recursos adicionales según necesidad
- [ ] Consulté el glosario según necesidad

### Entregable (Evaluado)

- [ ] **Implementé el proyecto semanal** (3-proyecto/)
- [ ] Todos los tests pasan (`pnpm test`)
- [ ] Adaptado a mi dominio asignado
- [ ] Incluí README documentando estrategia de testing
- [ ] Código en repositorio con commit descriptivo

---

## �🔗 Navegación

- ⬅️ [Semana 13: Componentes UI y Animaciones](../week-13-componentes_ui_animaciones/)
- ➡️ [Semana 15: Testing Avanzado](../week-15-testing_avanzado/)
- 🏠 [Inicio del Bootcamp](../../README.md)
