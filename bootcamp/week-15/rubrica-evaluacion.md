# Rúbrica de Evaluación - Semana 15

## Testing Avanzado

### 📊 Distribución de Puntaje

| Tipo de Evidencia | Porcentaje | Puntos  |
| ----------------- | ---------- | ------- |
| Conocimiento 🧠   | 30%        | 30      |
| Desempeño 💪      | 40%        | 40      |
| Producto 📦       | 30%        | 30      |
| **Total**         | **100%**   | **100** |

---

## 🧠 Conocimiento (30 puntos)

Evaluación teórica sobre conceptos de testing avanzado.

### Criterios de Evaluación

| Criterio             | Excelente (10)                                           | Bueno (7)                                   | Regular (4)                               | Insuficiente (0)                    |
| -------------------- | -------------------------------------------------------- | ------------------------------------------- | ----------------------------------------- | ----------------------------------- |
| **Testing de Hooks** | Explica renderHook, act, y testing de estados/efectos    | Comprende renderHook y casos básicos        | Conoce conceptos pero confunde aplicación | No comprende testing de hooks       |
| **Mocking**          | Domina vi.mock, vi.spyOn, MSW y estrategias de mock      | Usa mocks correctamente en casos comunes    | Implementa mocks básicos con dificultad   | No sabe implementar mocks           |
| **Cobertura**        | Interpreta métricas, identifica gaps, define estrategias | Genera reportes y entiende métricas básicas | Configura cobertura pero no interpreta    | No conoce herramientas de cobertura |

### Preguntas de Evaluación

1. ¿Cuándo usar `renderHook` vs `render` con un componente wrapper?
2. ¿Cuál es la diferencia entre `vi.mock` y `vi.spyOn`?
3. ¿Qué ventajas ofrece MSW sobre mocks manuales de fetch?
4. ¿Qué significa una cobertura de líneas del 80%?
5. ¿Por qué 100% de cobertura no garantiza código libre de bugs?

---

## 💪 Desempeño (40 puntos)

Evaluación práctica durante ejercicios guiados.

### Ejercicio 01: Testing de Hooks (10 puntos)

| Criterio      | Puntos | Descripción                           |
| ------------- | ------ | ------------------------------------- |
| Configuración | 2      | Usa `renderHook` correctamente        |
| Estados       | 3      | Testea cambios de estado con `act`    |
| Efectos       | 3      | Testea efectos secundarios            |
| Casos borde   | 2      | Maneja valores iniciales y edge cases |

### Ejercicio 02: Mocking de Módulos (10 puntos)

| Criterio       | Puntos | Descripción                     |
| -------------- | ------ | ------------------------------- |
| vi.mock        | 3      | Mock de módulos externos        |
| vi.spyOn       | 3      | Espías de funciones             |
| Implementación | 2      | Mock de implementaciones custom |
| Restauración   | 2      | Limpieza correcta entre tests   |

### Ejercicio 03: MSW API Mocking (10 puntos)

| Criterio      | Puntos | Descripción                    |
| ------------- | ------ | ------------------------------ |
| Configuración | 2      | Setup de MSW en tests          |
| Handlers      | 3      | Define handlers REST correctos |
| Escenarios    | 3      | Maneja éxito y errores         |
| Integración   | 2      | Tests de componentes con API   |

### Ejercicio 04: Cobertura (10 puntos)

| Criterio      | Puntos | Descripción                          |
| ------------- | ------ | ------------------------------------ |
| Configuración | 3      | Configura @vitest/coverage-v8        |
| Reportes      | 3      | Genera y entiende reportes           |
| Análisis      | 2      | Identifica código no cubierto        |
| Mejora        | 2      | Agrega tests para aumentar cobertura |

---

## 📦 Producto (30 puntos)

Proyecto: **Aplicación 100% Testeada**

### Requisitos Funcionales

| Requisito            | Puntos | Criterio de Aceptación           |
| -------------------- | ------ | -------------------------------- |
| Tests de hooks       | 6      | Mínimo 3 custom hooks testeados  |
| Tests de componentes | 6      | Mínimo 5 componentes con tests   |
| Tests de integración | 6      | Mínimo 3 flujos completos        |
| Mocking de API       | 6      | MSW configurado y funcionando    |
| Cobertura ≥80%       | 6      | Reporte muestra cobertura mínima |

### Escala de Calidad

| Nivel        | Puntos | Descripción                                                  |
| ------------ | ------ | ------------------------------------------------------------ |
| Excelente    | 27-30  | Cobertura >90%, tests bien organizados, edge cases cubiertos |
| Bueno        | 21-26  | Cobertura 80-90%, tests funcionales, algunos edge cases      |
| Regular      | 15-20  | Cobertura 70-80%, tests básicos funcionan                    |
| Insuficiente | 0-14   | Cobertura <70% o tests no funcionan                          |

---

## 📋 Checklist de Entrega

### Ejercicios

- [ ] Ejercicio 01 completado con tests pasando
- [ ] Ejercicio 02 completado con mocks funcionando
- [ ] Ejercicio 03 completado con MSW configurado
- [ ] Ejercicio 04 completado con reporte de cobertura

### Proyecto

- [ ] Repositorio con código fuente
- [ ] Todos los tests pasan (`pnpm test`)
- [ ] Reporte de cobertura generado (`pnpm coverage`)
- [ ] README con instrucciones de ejecución
- [ ] Dominio asignado implementado correctamente

---

## 🎯 Criterios de Aprobación

| Requisito    | Mínimo      |
| ------------ | ----------- |
| Conocimiento | 21/30 (70%) |
| Desempeño    | 28/40 (70%) |
| Producto     | 21/30 (70%) |
| **Total**    | **70/100**  |

---

## 📝 Notas para el Instructor

### Puntos Clave a Evaluar

1. **Testing de Hooks**
   - Uso correcto de `act` para updates de estado
   - Comprensión de cuándo es necesario async/await

2. **Mocking**
   - Diferencia entre mock completo y spy
   - Estrategia de limpieza entre tests

3. **MSW**
   - Handlers organizados por recurso
   - Manejo de escenarios de error

4. **Cobertura**
   - No obsesionarse con 100%
   - Priorizar código crítico

### Errores Comunes

- No usar `act` cuando se actualiza estado
- No limpiar mocks entre tests (`vi.clearAllMocks`)
- MSW handlers demasiado genéricos
- Confundir cobertura con calidad de tests

---

_Semana 15 - Testing Avanzado_
