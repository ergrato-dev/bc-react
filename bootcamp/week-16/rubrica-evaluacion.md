# Rúbrica de Evaluación - Semana 16

## Optimización de Renders

### 📊 Distribución de Puntaje

| Tipo de Evidencia | Porcentaje | Puntos  |
| ----------------- | ---------- | ------- |
| Conocimiento 🧠   | 30%        | 30      |
| Desempeño 💪      | 40%        | 40      |
| Producto 📦       | 30%        | 30      |
| **Total**         | **100%**   | **100** |

---

## 🧠 Conocimiento (30 puntos)

Evaluación teórica sobre conceptos de optimización de renders en React.

### Criterios de Evaluación

| Criterio              | Excelente (10)                                               | Bueno (7)                                           | Regular (4)                                 | Insuficiente (0)                    |
| --------------------- | ------------------------------------------------------------ | --------------------------------------------------- | ------------------------------------------- | ----------------------------------- |
| **Ciclo de Render**   | Explica reconciliación, Virtual DOM y cuándo ocurren renders | Comprende triggers de render y Virtual DOM          | Conoce conceptos pero confunde aplicación   | No comprende el ciclo de render     |
| **Herramientas Memo** | Domina React.memo, useMemo, useCallback y cuándo usarlos     | Usa las herramientas correctamente en casos comunes | Aplica memorización sin criterio claro      | No sabe aplicar memorización        |
| **Profiler/Métricas** | Interpreta Profiler, identifica cuellos de botella           | Usa Profiler y entiende métricas básicas            | Conoce herramientas pero no interpreta bien | No conoce herramientas de profiling |

### Preguntas de Evaluación

1. ¿Qué triggers provocan un re-render en un componente React?
2. ¿Cuál es la diferencia entre `React.memo` y `useMemo`?
3. ¿Por qué `useCallback` es necesario cuando pasamos funciones como props a componentes memorizados?
4. ¿Qué información muestra el Profiler de React DevTools?
5. ¿Cuándo NO deberías usar `React.memo`?

---

## 💪 Desempeño (40 puntos)

Evaluación práctica durante ejercicios guiados.

### Ejercicio 01: Detectar Renders (10 puntos)

| Criterio       | Puntos | Descripción                                     |
| -------------- | ------ | ----------------------------------------------- |
| Console.log    | 2      | Usa logs para detectar renders                  |
| Profiler Setup | 3      | Configura y usa React DevTools Profiler         |
| Identificación | 3      | Identifica componentes con renders innecesarios |
| Documentación  | 2      | Documenta hallazgos claramente                  |

### Ejercicio 02: React.memo (10 puntos)

| Criterio          | Puntos | Descripción                                     |
| ----------------- | ------ | ----------------------------------------------- |
| Aplicación básica | 3      | Aplica React.memo correctamente                 |
| Comparador custom | 3      | Implementa función de comparación personalizada |
| Props estables    | 2      | Asegura que las props sean estables             |
| Verificación      | 2      | Verifica mejora con Profiler                    |

### Ejercicio 03: useMemo (10 puntos)

| Criterio       | Puntos | Descripción                               |
| -------------- | ------ | ----------------------------------------- |
| Identificación | 2      | Identifica cálculos costosos              |
| Implementación | 3      | Aplica useMemo con dependencias correctas |
| Casos de uso   | 3      | Memoriza objetos/arrays en props          |
| Medición       | 2      | Mide mejora de rendimiento                |

### Ejercicio 04: useCallback (10 puntos)

| Criterio       | Puntos | Descripción                                      |
| -------------- | ------ | ------------------------------------------------ |
| Problema       | 2      | Identifica el problema de referencias inestables |
| Implementación | 3      | Aplica useCallback con dependencias correctas    |
| Integración    | 3      | Combina con React.memo efectivamente             |
| Verificación   | 2      | Verifica que evita renders innecesarios          |

---

## 📦 Producto (30 puntos)

Proyecto: **Dashboard Optimizado**

### Requisitos Funcionales

| Requisito                  | Puntos | Criterio de Aceptación              |
| -------------------------- | ------ | ----------------------------------- |
| Componentes con React.memo | 6      | Mínimo 3 componentes optimizados    |
| Uso de useMemo             | 6      | Mínimo 2 cálculos memorizados       |
| Uso de useCallback         | 6      | Mínimo 2 funciones estabilizadas    |
| Análisis con Profiler      | 6      | Capturas antes/después documentadas |
| Adaptación al dominio      | 6      | Coherente con dominio asignado      |

### Escala de Calidad

| Nivel        | Puntos | Descripción                                                  |
| ------------ | ------ | ------------------------------------------------------------ |
| Excelente    | 27-30  | Optimizaciones justificadas, mejoras medibles, código limpio |
| Bueno        | 21-26  | Optimizaciones correctas, algunas mejoras documentadas       |
| Regular      | 15-20  | Optimizaciones básicas, falta documentación o justificación  |
| Insuficiente | 0-14   | Optimizaciones incorrectas o ausentes                        |

---

## 📋 Lista de Verificación del Proyecto

### Funcionalidad

- [ ] Dashboard muestra lista de items del dominio
- [ ] CRUD funcional (crear, leer, actualizar, eliminar)
- [ ] Filtros y/o búsqueda implementados
- [ ] Estados de carga visibles

### Optimización

- [ ] `React.memo` aplicado a componentes de lista (items)
- [ ] `useMemo` para filtrar/ordenar listas grandes
- [ ] `useCallback` para handlers pasados a componentes hijos
- [ ] Sin renders innecesarios detectables en Profiler

### Documentación

- [ ] README con descripción del dominio
- [ ] Capturas del Profiler antes de optimizar
- [ ] Capturas del Profiler después de optimizar
- [ ] Explicación de cada optimización aplicada

---

## 🎯 Criterios de Aprobación

- **Mínimo 70%** en cada tipo de evidencia
- Todas las optimizaciones deben estar **justificadas**
- El proyecto debe ser **funcional** y **coherente** con el dominio asignado
- Documentación de análisis de rendimiento **obligatoria**

---

## ⚠️ Penalizaciones

| Situación                                       | Penalización |
| ----------------------------------------------- | ------------ |
| Uso excesivo/innecesario de memorización        | -5 puntos    |
| Dependencias incorrectas en useMemo/useCallback | -5 puntos    |
| Copiar implementación de otro dominio           | -15 puntos   |
| Entrega tardía (por día)                        | -5 puntos    |

---

## 💡 Notas Importantes

### Sobre la Optimización Prematura

> "La optimización prematura es la raíz de todos los males" - Donald Knuth

En esta semana aprenderás las herramientas de optimización, pero recuerda:

- **Mide primero**: Usa el Profiler para identificar problemas reales
- **Optimiza después**: Solo aplica optimizaciones donde hay impacto medible
- **Documenta**: Justifica cada optimización con datos del Profiler

### Cuándo NO Optimizar

- Componentes que renderizan rápido
- Listas pequeñas (< 50 items)
- Props que raramente cambian
- Cálculos que son instantáneos

---

_Semana 16 - Optimización de Renders_
