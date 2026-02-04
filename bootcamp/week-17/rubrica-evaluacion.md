# Rúbrica de Evaluación - Semana 17

## Code Splitting y Performance Avanzado

### 📊 Distribución de Puntaje

| Tipo de Evidencia | Porcentaje | Puntos  |
| ----------------- | ---------- | ------- |
| Conocimiento 🧠   | 30%        | 30      |
| Desempeño 💪      | 40%        | 40      |
| Producto 📦       | 30%        | 30      |
| **Total**         | **100%**   | **100** |

---

## 🧠 Conocimiento (30 puntos)

Evaluación teórica sobre code splitting, virtualización y Web Vitals.

### Criterios de Evaluación

| Criterio           | Excelente (10)                                                 | Bueno (7)                                        | Regular (4)                                   | Insuficiente (0)            |
| ------------------ | -------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------- | --------------------------- |
| **Code Splitting** | Explica React.lazy, Suspense, dynamic imports y sus beneficios | Comprende lazy loading y lo aplica correctamente | Conoce conceptos pero confunde implementación | No comprende code splitting |
| **Virtualización** | Domina react-window, entiende windowing y cuándo aplicarlo     | Usa virtualización correctamente en listas       | Aplica virtualización sin criterio claro      | No sabe virtualizar listas  |
| **Web Vitals**     | Interpreta LCP, FID, CLS, mide y optimiza basado en datos      | Conoce métricas y cómo medirlas                  | Conoce métricas pero no interpreta bien       | No conoce Web Vitals        |

### Preguntas de Evaluación

1. ¿Qué es code splitting y cuál es su beneficio principal?
2. ¿Cuál es la diferencia entre `React.lazy` y dynamic `import()`?
3. ¿Qué componente se muestra mientras un componente lazy está cargando?
4. ¿Cuándo deberías virtualizar una lista y cuándo no?
5. ¿Qué son LCP, FID y CLS? ¿Cuáles son sus valores óptimos?

---

## 💪 Desempeño (40 puntos)

Evaluación práctica durante ejercicios guiados.

### Ejercicio 01: Lazy Loading de Componentes (10 puntos)

| Criterio       | Puntos | Descripción                                    |
| -------------- | ------ | ---------------------------------------------- |
| React.lazy     | 3      | Implementa lazy loading correctamente          |
| Suspense       | 3      | Configura fallback apropiado                   |
| Error Boundary | 2      | Maneja errores de carga                        |
| Verificación   | 2      | Verifica que el bundle se divide correctamente |

### Ejercicio 02: Code Splitting por Rutas (10 puntos)

| Criterio       | Puntos | Descripción                                       |
| -------------- | ------ | ------------------------------------------------- |
| Rutas lazy     | 4      | Aplica lazy loading a todas las rutas principales |
| Loading states | 3      | Implementa estados de carga por ruta              |
| Prefetching    | 3      | Opcional: implementa precarga de rutas            |

### Ejercicio 03: Virtualización de Listas (10 puntos)

| Criterio         | Puntos | Descripción                                   |
| ---------------- | ------ | --------------------------------------------- |
| FixedSizeList    | 3      | Implementa lista virtualizada básica          |
| VariableSizeList | 3      | Implementa lista con items de tamaño variable |
| Rendimiento      | 2      | Maneja 10,000+ items sin lag                  |
| Scroll behavior  | 2      | El scroll es fluido y natural                 |

### Ejercicio 04: Web Vitals (10 puntos)

| Criterio       | Puntos | Descripción                               |
| -------------- | ------ | ----------------------------------------- |
| Configuración  | 2      | Configura web-vitals correctamente        |
| Medición       | 3      | Mide LCP, FID, CLS en la aplicación       |
| Identificación | 3      | Identifica métricas fuera de rango óptimo |
| Optimización   | 2      | Propone o implementa mejoras              |

---

## 📦 Producto (30 puntos)

Proyecto: **App Performance**

### Requisitos Funcionales

| Requisito                | Puntos | Criterio de Aceptación                        |
| ------------------------ | ------ | --------------------------------------------- |
| Code Splitting por rutas | 6      | Mínimo 3 rutas con lazy loading               |
| Virtualización de lista  | 6      | Lista principal virtualizada con react-window |
| Web Vitals documentados  | 6      | LCP, FID, CLS medidos y reportados            |
| Loading states           | 6      | Suspense boundaries con fallbacks apropiados  |
| Adaptación al dominio    | 6      | Coherente con dominio asignado                |

### Escala de Calidad

| Nivel        | Puntos | Descripción                                                       |
| ------------ | ------ | ----------------------------------------------------------------- |
| Excelente    | 27-30  | Performance excelente, Web Vitals óptimos, código bien organizado |
| Bueno        | 21-26  | Code splitting correcto, virtualización funcional                 |
| Regular      | 15-20  | Implementaciones básicas, algunos problemas de performance        |
| Insuficiente | 0-14   | Code splitting ausente o incorrecto                               |

---

## 📋 Lista de Verificación del Proyecto

### Funcionalidad

- [ ] Aplicación con múltiples rutas/páginas
- [ ] Navegación funcional entre secciones
- [ ] Lista principal con gran cantidad de datos (500+)
- [ ] Estados de carga visibles durante lazy loading

### Code Splitting

- [ ] Todas las rutas principales usan `React.lazy`
- [ ] `Suspense` con fallbacks apropiados
- [ ] Error boundaries para manejar fallos de carga
- [ ] Bundle analyzer muestra chunks separados

### Virtualización

- [ ] Lista principal usa `react-window`
- [ ] Scroll fluido con 500+ items
- [ ] Items renderizan correctamente al hacer scroll
- [ ] Memory footprint controlado

### Web Vitals

- [ ] web-vitals configurado y midiendo
- [ ] LCP documentado (objetivo: < 2.5s)
- [ ] FID documentado (objetivo: < 100ms)
- [ ] CLS documentado (objetivo: < 0.1)

### Documentación

- [ ] README con descripción del dominio
- [ ] Métricas de Web Vitals antes y después
- [ ] Capturas de Network tab mostrando chunks
- [ ] Explicación de decisiones de arquitectura

---

## 🎯 Criterios de Aprobación

- **Mínimo 70%** en cada tipo de evidencia
- Code splitting debe reducir el **bundle inicial** de forma medible
- La virtualización debe soportar **mínimo 500 items** sin lag
- Web Vitals deben estar **documentados** con valores reales

---

## ⚠️ Penalizaciones

| Situación                               | Penalización |
| --------------------------------------- | ------------ |
| Lazy loading sin Suspense boundary      | -5 puntos    |
| Lista de 1000+ items sin virtualización | -5 puntos    |
| Web Vitals no medidos/documentados      | -5 puntos    |
| Copiar implementación de otro dominio   | -15 puntos   |
| Entrega tardía (por día)                | -5 puntos    |

---

## 💡 Notas Importantes

### Sobre Code Splitting

El code splitting es esencial para aplicaciones grandes:

- **Primera carga rápida**: Solo carga el código necesario
- **Mejora TTI**: Time to Interactive más bajo
- **Mejor UX**: Usuarios no esperan por código que no usan

### Sobre Virtualización

La virtualización es crítica para listas grandes:

- **Solo renderiza lo visible**: ~10-20 items vs miles
- **Memory eficiente**: No crea miles de DOM nodes
- **Smooth scroll**: Rendimiento constante independiente del tamaño

### Cuándo Aplicar Cada Técnica

| Técnica         | Aplicar cuando...               |
| --------------- | ------------------------------- |
| Code Splitting  | Bundle > 200KB, múltiples rutas |
| Virtualización  | Lista > 100 items visibles      |
| Lazy Components | Componentes pesados no críticos |
| Route Splitting | SPA con múltiples páginas       |

---

_Semana 17 - Code Splitting y Performance Avanzado_
