# 📖 Glosario - Semana 14: Introducción a Testing en React

## A

### AAA (Arrange-Act-Assert)

Patrón para estructurar tests: primero preparas el escenario (Arrange), luego ejecutas la acción (Act), y finalmente verificas el resultado (Assert).

### Assertion

Verificación que comprueba si un valor cumple una condición esperada. Ejemplo: `expect(value).toBe(5)`.

### Async Testing

Testing de código asíncrono usando `await`, `waitFor`, o queries `findBy*` para esperar resultados.

---

## C

### Coverage (Cobertura)

Métrica que indica qué porcentaje del código es ejecutado por los tests. Se mide en líneas, funciones, branches y statements.

---

## D

### describe

Función de Vitest para agrupar tests relacionados. Permite organizar la suite de tests jerárquicamente.

---

## E

### E2E (End-to-End)

Tests que prueban la aplicación completa en un navegador real, simulando flujos de usuario reales.

### expect

Función que inicia una aserción. Recibe el valor a verificar y permite encadenar matchers.

---

## F

### findBy\*

Queries de RTL que retornan una Promise. Útiles para esperar elementos que aparecen de forma asíncrona.

### Fixture

Datos de prueba predefinidos y reutilizables en múltiples tests.

---

## G

### getBy\*

Queries de RTL que lanzan error si no encuentran el elemento. Ideales cuando el elemento debe existir.

---

## I

### Integration Test

Test que prueba la interacción entre múltiples unidades (componentes, módulos) trabajando juntos.

---

## J

### jest-dom

Librería de matchers personalizados para el DOM. Proporciona métodos como `toBeInTheDocument()`, `toHaveValue()`, etc.

### jsdom

Implementación de JavaScript del DOM que permite simular un navegador en Node.js.

---

## M

### Matcher

Función que verifica si un valor cumple cierta condición. Ejemplos: `toBe()`, `toEqual()`, `toContain()`.

### Mock

Objeto simulado que reemplaza una dependencia real durante el testing. Permite controlar y verificar comportamiento.

### Mock Function

Función creada con `vi.fn()` que registra sus llamadas y permite verificar cómo fue invocada.

---

## Q

### Query

Método de RTL para encontrar elementos en el DOM renderizado. Los principales tipos son: getBy*, queryBy*, findBy\*.

### queryBy\*

Queries de RTL que retornan `null` si no encuentran el elemento. Útiles para verificar que algo NO existe.

---

## R

### React Testing Library (RTL)

Librería de testing que promueve testear componentes como los usuarios los usan, no su implementación interna.

### render

Función de RTL que renderiza un componente React en un contenedor del DOM para testing.

---

## S

### screen

Objeto de RTL que proporciona queries pre-vinculadas al document.body. Es la forma recomendada de hacer queries.

### Setup File

Archivo que se ejecuta antes de cada archivo de tests. Usado para configuración global como importar jest-dom.

### Spy

Función que observa llamadas a otra función sin reemplazarla completamente. Creado con `vi.spyOn()`.

---

## T

### test / it

Función que define un caso de test individual. `test` e `it` son sinónimos.

### Test Runner

Herramienta que ejecuta los tests y reporta resultados. Vitest es el test runner usado en este bootcamp.

---

## U

### Unit Test

Test que prueba una unidad aislada de código (función, componente) sin dependencias externas.

### userEvent

Librería que simula interacciones de usuario de forma más realista que `fireEvent`. Usa eventos del navegador reales.

---

## V

### vi

Objeto global de Vitest que proporciona utilidades como `vi.fn()` para mocks, `vi.spyOn()` para spies, etc.

### Vitest

Framework de testing moderno y rápido, compatible con la API de Jest pero optimizado para Vite.

---

## W

### waitFor

Utilidad de RTL para esperar que una condición se cumpla. Útil para código asíncrono.

### within

Función de RTL que limita las queries a un contenedor específico en lugar de todo el documento.

---

## Abreviaciones Comunes

| Abreviación | Significado             |
| ----------- | ----------------------- |
| RTL         | React Testing Library   |
| AAA         | Arrange-Act-Assert      |
| E2E         | End-to-End              |
| TDD         | Test-Driven Development |
| SUT         | System Under Test       |

---

## 🔗 Navegación

- ⬅️ [Recursos](../4-recursos/)
- 🏠 [Inicio Semana 14](../README.md)
