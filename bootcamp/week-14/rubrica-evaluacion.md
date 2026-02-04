# 📊 Rúbrica de Evaluación - Semana 14

## Introducción a Testing en React

---

## 📋 Criterios de Evaluación

### 1. Conocimiento (30%) 🧠

Evaluación teórica sobre conceptos de testing.

| Criterio           | Excelente (100%)                             | Bueno (80%)                             | Suficiente (70%)             | Insuficiente (<70%)     |
| ------------------ | -------------------------------------------- | --------------------------------------- | ---------------------------- | ----------------------- |
| Tipos de testing   | Explica unit, integration, e2e con ejemplos  | Diferencia los 3 tipos correctamente    | Conoce los tipos básicamente | No diferencia los tipos |
| Vitest API         | Domina describe, test, expect, mocks         | Usa correctamente las funciones básicas | Conoce la sintaxis básica    | No conoce la API        |
| RTL Queries        | Selecciona query óptima por accesibilidad    | Usa queries correctas                   | Usa queries funcionales      | Usa queries incorrectas |
| Testing philosophy | Aplica "test user behavior" consistentemente | Entiende el principio                   | Conoce el concepto           | Testea implementación   |

### 2. Desempeño (40%) 💪

Evaluación práctica durante ejercicios.

| Criterio             | Excelente (100%)                         | Bueno (80%)                   | Suficiente (70%)              | Insuficiente (<70%) |
| -------------------- | ---------------------------------------- | ----------------------------- | ----------------------------- | ------------------- |
| Configuración Vitest | Configura correctamente con TypeScript   | Configura con ayuda mínima    | Configura con guía            | No logra configurar |
| Escritura de tests   | Tests claros, bien organizados           | Tests funcionales y legibles  | Tests básicos que pasan       | Tests incorrectos   |
| Uso de RTL           | Queries accesibles, user-event correcto  | Usa RTL efectivamente         | Usa RTL básico                | Mal uso de RTL      |
| Debugging de tests   | Identifica y corrige errores rápidamente | Debuggea con algo de esfuerzo | Necesita ayuda para debuggear | No puede debuggear  |

### 3. Producto (30%) 📦

Evaluación del proyecto semanal.

| Criterio              | Excelente (100%)                         | Bueno (80%)           | Suficiente (70%)      | Insuficiente (<70%) |
| --------------------- | ---------------------------------------- | --------------------- | --------------------- | ------------------- |
| Cobertura de tests    | >80% de componentes testeados            | 60-80% de componentes | 40-60% de componentes | <40% de componentes |
| Calidad de tests      | Tests significativos y mantenibles       | Tests correctos       | Tests básicos         | Tests superficiales |
| Organización          | Estructura clara, naming descriptivo     | Buena organización    | Organización básica   | Desorganizado       |
| Adaptación al dominio | Tests coherentes con el dominio asignado | Mayormente coherente  | Parcialmente adaptado | Sin adaptación      |

---

## 📝 Evidencias Requeridas

### Conocimiento

- [ ] Quiz de conceptos de testing (mínimo 70%)
- [ ] Explicación oral de estrategia de testing

### Desempeño

- [ ] Ejercicios 01-04 completados
- [ ] Participación en sesiones prácticas
- [ ] Resolución de problemas en vivo

### Producto

- [ ] Suite de tests para componentes del dominio
- [ ] Todos los tests pasando (`pnpm test`)
- [ ] README documentando la estrategia de testing
- [ ] Código en repositorio con commit descriptivo

---

## 🎯 Indicadores de Logro

### Nivel Básico (70-79%)

- Configura Vitest correctamente
- Escribe tests unitarios simples
- Usa queries básicas de RTL
- Tests pasan sin errores

### Nivel Intermedio (80-89%)

- Tests bien organizados con describe/test
- Usa queries accesibles correctamente
- Simula eventos de usuario
- Cobertura razonable de componentes

### Nivel Avanzado (90-100%)

- Tests siguiendo mejores prácticas
- Queries óptimas por accesibilidad
- Tests de comportamiento, no implementación
- Suite de tests completa y mantenible

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

- **Ejercicios**: Durante las sesiones de clase
- **Proyecto**: Entrega al finalizar la semana 14
- **Quiz teórico**: Inicio de semana 15

---

## 🔗 Navegación

- ⬅️ [README de la Semana](./README.md)
- ➡️ [Teoría](./1-teoria/)
