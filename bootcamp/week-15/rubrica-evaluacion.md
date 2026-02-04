# Rúbrica de Evaluación - Semana 15

## Testing Avanzado

### 📊 Distribución de Puntaje

| Tipo de Evidencia   | Porcentaje | Puntos  |
| ------------------- | ---------- | ------- |
| Proyecto Semanal 📦 | 100%       | 100     |
| **Total**           | **100%**   | **100** |

> **Nota:** La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

---

## 📚 Recursos de Aprendizaje (No Evaluados)

La teoría y los ejercicios son preparación para el proyecto. Se recomienda completarlos antes de iniciar el proyecto.

### Teoría Recomendada

- Testing de Custom Hooks con `renderHook`
- Mocking de Módulos y APIs con `vi.mock` y MSW
- Tests de Integración
- Cobertura de Código y Mejores Prácticas

### Ejercicios de Práctica

| Ejercicio   | Tema                 | Preparación para                       |
| ----------- | -------------------- | -------------------------------------- |
| Ejercicio 1 | Testing de Hooks     | Tests de custom hooks en el proyecto   |
| Ejercicio 2 | Mocking de Módulos   | Mocks de dependencias en el proyecto   |
| Ejercicio 3 | MSW API Mocking      | Mocking de API en tests de integración |
| Ejercicio 4 | Configurar Cobertura | Reporte de cobertura del proyecto      |

---

## 📦 Proyecto (100 puntos)

Proyecto: **Aplicación 100% Testeada**

### Distribución del Puntaje del Proyecto

| Aspecto               | Porcentaje | Puntos  |
| --------------------- | ---------- | ------- |
| Funcionalidad         | 40%        | 40      |
| Adaptación al Dominio | 35%        | 35      |
| Calidad del Código    | 25%        | 25      |
| **Total**             | **100%**   | **100** |

### Funcionalidad (40 puntos)

| Requisito            | Puntos | Criterio de Aceptación           |
| -------------------- | ------ | -------------------------------- |
| Tests de hooks       | 10     | Mínimo 3 custom hooks testeados  |
| Tests de componentes | 10     | Mínimo 5 componentes con tests   |
| Tests de integración | 10     | Mínimo 3 flujos completos        |
| Cobertura ≥80%       | 10     | Reporte muestra cobertura mínima |

### Adaptación al Dominio (35 puntos)

| Criterio               | Puntos | Descripción                                  |
| ---------------------- | ------ | -------------------------------------------- |
| Tests contextualizados | 15     | Tests reflejan lógica específica del dominio |
| Escenarios realistas   | 10     | Casos de prueba relevantes para el negocio   |
| Mocking coherente      | 10     | MSW handlers adapatados al dominio asignado  |

### Calidad del Código (25 puntos)

| Criterio         | Puntos | Descripción                                  |
| ---------------- | ------ | -------------------------------------------- |
| Organización     | 10     | Tests bien estructurados y organizados       |
| Buenas prácticas | 10     | Uso correcto de act, cleanup, async/await    |
| Documentación    | 5      | README con estrategia de testing documentada |

### Escala de Calidad General

| Nivel        | Puntos | Descripción                                                  |
| ------------ | ------ | ------------------------------------------------------------ |
| Excelente    | 90-100 | Cobertura >90%, tests bien organizados, edge cases cubiertos |
| Bueno        | 70-89  | Cobertura 80-90%, tests funcionales, algunos edge cases      |
| Regular      | 50-69  | Cobertura 70-80%, tests básicos funcionan                    |
| Insuficiente | 0-49   | Cobertura <70% o tests no funcionan                          |

---

## 📋 Checklist de Entrega

### Preparación (No evaluada)

- [ ] Teoría completada
- [ ] Ejercicio 01 completado (práctica de testing hooks)
- [ ] Ejercicio 02 completado (práctica de mocking)
- [ ] Ejercicio 03 completado (práctica de MSW)
- [ ] Ejercicio 04 completado (práctica de cobertura)

### Proyecto (Evaluado - 100%)

- [ ] Repositorio con código fuente
- [ ] Todos los tests pasan (`pnpm test`)
- [ ] Reporte de cobertura generado (`pnpm coverage`)
- [ ] Cobertura mínima del 80%
- [ ] README con instrucciones de ejecución
- [ ] Dominio asignado implementado correctamente

---

## 🎯 Criterios de Aprobación

| Requisito | Mínimo       |
| --------- | ------------ |
| Proyecto  | 70/100 (70%) |
| **Total** | **70/100**   |

> Para aprobar la semana, el proyecto debe obtener un mínimo de 70 puntos sobre 100.

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
