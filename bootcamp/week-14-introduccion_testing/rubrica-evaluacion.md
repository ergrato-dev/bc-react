# 📊 Rúbrica de Evaluación - Semana 14

## Introducción a Testing en React

---

## 📋 Distribución de Evaluación

| Tipo de Evidencia | Peso | Descripción          |
| ----------------- | ---- | -------------------- |
| Proyecto 📦       | 100% | Testing Suite Básica |

> **Nota**: La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

---

## 📚 Recursos de Aprendizaje (No Evaluados)

### Teoría

La teoría cubre los conceptos fundamentales que necesitas dominar:

- Tipos de testing (unit, integration, e2e)
- Vitest API (describe, test, expect, mocks)
- RTL Queries y accesibilidad
- Filosofía de testing (test user behavior)

### Ejercicios

Los ejercicios guiados te preparan para el proyecto:

- Ejercicio 01: Primeros tests con Vitest
- Ejercicio 02: Queries de RTL y accesibilidad
- Ejercicio 03: Simulación de interacciones
- Ejercicio 04: Testing de componentes completos

**Recomendación**: Completa teoría y ejercicios antes de iniciar el proyecto.

---

## 📋 Criterios de Evaluación

### Proyecto: Testing Suite Básica (100%) 📦

Evaluación del proyecto semanal.

#### Funcionalidad (40%)

| Criterio           | Excelente (100%)                 | Bueno (80%)           | Suficiente (70%)      | Insuficiente (<70%) |
| ------------------ | -------------------------------- | --------------------- | --------------------- | ------------------- |
| Cobertura de tests | >80% de componentes testeados    | 60-80% de componentes | 40-60% de componentes | <40% de componentes |
| Tests pasando      | 100% tests pasan sin errores     | >90% tests pasan      | >80% tests pasan      | <80% tests pasan    |
| Calidad de tests   | Tests significativos y completos | Tests correctos       | Tests básicos         | Tests superficiales |

#### Adaptación al Dominio (35%)

| Criterio               | Excelente (100%)                         | Bueno (80%)          | Suficiente (70%)      | Insuficiente (<70%) |
| ---------------------- | ---------------------------------------- | -------------------- | --------------------- | ------------------- |
| Coherencia con dominio | Tests coherentes con el dominio asignado | Mayormente coherente | Parcialmente adaptado | Sin adaptación      |
| Naming descriptivo     | Nombres claros y específicos al dominio  | Buenos nombres       | Nombres aceptables    | Nombres genéricos   |
| Casos de prueba        | Casos relevantes para el dominio         | Buenos casos         | Casos básicos         | Casos irrelevantes  |

#### Calidad del Código (25%)

| Criterio      | Excelente (100%)                     | Bueno (80%)            | Suficiente (70%)    | Insuficiente (<70%) |
| ------------- | ------------------------------------ | ---------------------- | ------------------- | ------------------- |
| Organización  | Estructura clara, describe/test      | Buena organización     | Organización básica | Desorganizado       |
| Queries RTL   | Queries accesibles y óptimas         | Queries correctas      | Queries funcionales | Queries incorrectas |
| Documentación | README completo con estrategia clara | README con información | README básico       | Sin README          |

---

## 📝 Evidencias Requeridas

### Proyecto (100%)

- [ ] Suite de tests para componentes del dominio
- [ ] Todos los tests pasando (`pnpm test`)
- [ ] README documentando la estrategia de testing
- [ ] Código en repositorio con commit descriptivo
- [ ] Tests adaptados al dominio asignado

---

## 🎯 Indicadores de Logro del Proyecto

### Nivel Básico (70-79%)

- Tests unitarios simples que pasan
- Queries básicas de RTL funcionales
- Adaptación mínima al dominio asignado
- README básico incluido

### Nivel Intermedio (80-89%)

- Tests bien organizados con describe/test
- Queries accesibles correctamente aplicadas
- Simulación de eventos de usuario
- Buena adaptación al dominio con naming descriptivo
- README con estrategia de testing documentada

### Nivel Avanzado (90-100%)

- Tests siguiendo mejores prácticas de RTL
- Queries óptimas priorizando accesibilidad
- Tests de comportamiento, no implementación
- Suite completa y coherente con el dominio
- Documentación excelente y mantenible

---

## ✅ Criterios de Aprobación

| Requisito                 | Mínimo Requerido                 |
| ------------------------- | -------------------------------- |
| Calificación del Proyecto | 70% mínimo                       |
| Tests pasando             | Todos los tests deben pasar      |
| Adaptación al dominio     | Coherente con dominio asignado   |
| Documentación             | README con estrategia de testing |

---

## ⚠️ Penalizaciones

| Situación                                           | Penalización |
| --------------------------------------------------- | ------------ |
| Tests que no pasan                                  | -10%         |
| Uso de queries no accesibles (testId sin necesidad) | -5%          |
| Falta de organización en tests                      | -5%          |
| Tests copiados de otro dominio                      | -50%         |
| Entrega tardía (por día)                            | -10%         |

---

## 📅 Fechas Importantes

- **Proyecto**: Entrega al finalizar la semana 14

---

## 🔗 Navegación

- ⬅️ [README de la Semana](./README.md)
- ➡️ [Teoría](./1-teoria/)
