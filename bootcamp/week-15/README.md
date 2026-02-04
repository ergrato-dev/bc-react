# Semana 15: Testing Avanzado

## 📋 Información General

| Campo             | Detalle                            |
| ----------------- | ---------------------------------- |
| **Etapa**         | 5 - Testing (Parte 2/2)            |
| **Duración**      | 8 horas                            |
| **Prerequisitos** | Semana 14 (Introducción a Testing) |
| **Proyecto**      | Aplicación 100% Testeada           |

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Testear custom hooks con `renderHook`
- ✅ Crear mocks de módulos y APIs con `vi.mock` y MSW
- ✅ Escribir tests de integración completos
- ✅ Configurar y analizar cobertura de código
- ✅ Aplicar mejores prácticas de testing en proyectos reales

---

## 📚 Contenido

### 1. Teoría (2.5 horas)

| Archivo                                                         | Tema                          | Duración |
| --------------------------------------------------------------- | ----------------------------- | -------- |
| [01-testing-hooks.md](1-teoria/01-testing-hooks.md)             | Testing de Custom Hooks       | 40 min   |
| [02-mocking-avanzado.md](1-teoria/02-mocking-avanzado.md)       | Mocking de Módulos y APIs     | 40 min   |
| [03-testing-integracion.md](1-teoria/03-testing-integracion.md) | Tests de Integración          | 40 min   |
| [04-cobertura-codigo.md](1-teoria/04-cobertura-codigo.md)       | Cobertura y Mejores Prácticas | 30 min   |

### 2. Ejercicios Guiados (3 horas)

| Ejercicio                                                  | Tema                 | Duración |
| ---------------------------------------------------------- | -------------------- | -------- |
| [ejercicio-01](2-ejercicios/ejercicio-01-testing-hooks/)   | Testing de Hooks     | 45 min   |
| [ejercicio-02](2-ejercicios/ejercicio-02-mocking-modules/) | Mocking de Módulos   | 45 min   |
| [ejercicio-03](2-ejercicios/ejercicio-03-msw-api-mocking/) | MSW para APIs        | 45 min   |
| [ejercicio-04](2-ejercicios/ejercicio-04-cobertura/)       | Configurar Cobertura | 45 min   |

### 3. Proyecto Semanal (2.5 horas)

| Proyecto                                | Descripción                           |
| --------------------------------------- | ------------------------------------- |
| [Aplicación 100% Testeada](3-proyecto/) | Suite de tests completa para app CRUD |

---

## 🗓️ Distribución del Tiempo

```
Semana 15 (8 horas)
├── Teoría ────────────────── 2.5h (31%)
│   ├── Testing de Hooks ──── 40 min
│   ├── Mocking Avanzado ──── 40 min
│   ├── Tests Integración ─── 40 min
│   └── Cobertura ─────────── 30 min
├── Ejercicios ────────────── 3.0h (38%)
│   ├── Testing Hooks ─────── 45 min
│   ├── Mocking Modules ───── 45 min
│   ├── MSW API Mocking ───── 45 min
│   └── Cobertura Config ──── 45 min
└── Proyecto ──────────────── 2.5h (31%)
    └── App 100% Testeada ─── 2.5h
```

---

## 📦 Dependencias de la Semana

```json
{
  "devDependencies": {
    "vitest": "^2.x",
    "@testing-library/react": "^16.x",
    "@testing-library/jest-dom": "^6.x",
    "@testing-library/user-event": "^14.x",
    "msw": "^2.x",
    "jsdom": "^25.x",
    "@vitest/coverage-v8": "^2.x"
  }
}
```

---

## 📌 Entregables

### Ejercicios (Individual)

- [ ] Ejercicio 01: Tests de hooks funcionando
- [ ] Ejercicio 02: Mocks de módulos implementados
- [ ] Ejercicio 03: MSW configurado para API mocking
- [ ] Ejercicio 04: Reporte de cobertura generado

### Proyecto (Individual)

- [ ] Suite de tests completa (mínimo 15 tests)
- [ ] Cobertura mínima del 80%
- [ ] Tests de hooks, componentes e integración
- [ ] Documentación de estrategia de testing

---

## 🔗 Navegación

| Anterior                                                  | Índice                   | Siguiente                                      |
| --------------------------------------------------------- | ------------------------ | ---------------------------------------------- |
| [Semana 14: Introducción a Testing](../week-14/README.md) | [Bootcamp](../README.md) | [Semana 16: Performance](../week-16/README.md) |

---

## 📖 Recursos de la Semana

- [Recursos adicionales](4-recursos/)
- [Glosario de términos](5-glosario/)

---

_Etapa 5: Testing - Semana 2 de 2_
