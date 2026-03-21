# Rúbrica de Evaluación - Semana 16

## Optimización de Renders

### 📊 Distribución de Puntaje

| Tipo de Evidencia | Porcentaje | Puntos  |
| ----------------- | ---------- | ------- |
| Proyecto 📦       | 100%       | 100     |
| **Total**         | **100%**   | **100** |

---

## 📚 Recursos de Aprendizaje (No Evaluados)

La teoría y los ejercicios son materiales de preparación para el proyecto. No son entregables evaluados, pero se recomienda completarlos para dominar los conceptos.

### Teoría Recomendada

- Cómo funciona el render en React
- React.memo y comparación de props
- useMemo y useCallback
- Profiler API y DevTools

### Ejercicios de Práctica

| Ejercicio                      | Tema                        | Objetivo                                |
| ------------------------------ | --------------------------- | --------------------------------------- |
| Ejercicio 01: Detectar Renders | Profiler y console.log      | Identificar renders innecesarios        |
| Ejercicio 02: React.memo       | Memorización de componentes | Aplicar React.memo correctamente        |
| Ejercicio 03: useMemo          | Memorización de cálculos    | Optimizar cálculos costosos             |
| Ejercicio 04: useCallback      | Estabilizar referencias     | Evitar renders por funciones inestables |

---

## 📦 Proyecto (100 puntos)

Proyecto: **Dashboard Optimizado**

### Distribución de Puntos

| Categoría             | Porcentaje | Puntos  |
| --------------------- | ---------- | ------- |
| Funcionalidad         | 40%        | 40      |
| Adaptación al Dominio | 35%        | 35      |
| Calidad del Código    | 25%        | 25      |
| **Total**             | **100%**   | **100** |

### Funcionalidad (40 puntos)

| Requisito                  | Puntos | Criterio de Aceptación              |
| -------------------------- | ------ | ----------------------------------- |
| Componentes con React.memo | 10     | Mínimo 3 componentes optimizados    |
| Uso de useMemo             | 10     | Mínimo 2 cálculos memorizados       |
| Uso de useCallback         | 10     | Mínimo 2 funciones estabilizadas    |
| Análisis con Profiler      | 10     | Capturas antes/después documentadas |

### Adaptación al Dominio (35 puntos)

| Criterio                     | Puntos | Descripción                                    |
| ---------------------------- | ------ | ---------------------------------------------- |
| Coherencia con dominio       | 15     | Entidades y datos propios del dominio asignado |
| Nomenclatura contextualizada | 10     | Nombres de componentes/variables del dominio   |
| Funcionalidad específica     | 10     | Operaciones relevantes al contexto del dominio |

### Calidad del Código (25 puntos)

| Criterio          | Puntos | Descripción                                 |
| ----------------- | ------ | ------------------------------------------- |
| Tipado TypeScript | 10     | Interfaces y tipos bien definidos           |
| Código limpio     | 10     | Organización, legibilidad, buenas prácticas |
| Documentación     | 5      | README con explicación de optimizaciones    |

### Escala de Calidad General

| Nivel        | Puntos | Descripción                                                  |
| ------------ | ------ | ------------------------------------------------------------ |
| Excelente    | 90-100 | Optimizaciones justificadas, mejoras medibles, código limpio |
| Bueno        | 70-89  | Optimizaciones correctas, algunas mejoras documentadas       |
| Regular      | 50-69  | Optimizaciones básicas, falta documentación o justificación  |
| Insuficiente | 0-49   | Optimizaciones incorrectas o ausentes                        |

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

- **Mínimo 70 puntos** en el proyecto (70%)
- Todas las optimizaciones deben estar **justificadas**
- El proyecto debe ser **funcional** y **coherente** con el dominio asignado
- Documentación de análisis de rendimiento **obligatoria**

### Formato de Entrega

| Entregable        | Formato                    | Obligatorio |
| ----------------- | -------------------------- | ----------- |
| Código fuente     | Repositorio Git            | ✅          |
| Capturas Profiler | Imágenes PNG/JPG           | ✅          |
| README            | Markdown con documentación | ✅          |

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
