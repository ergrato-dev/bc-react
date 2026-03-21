# Semana 17: Code Splitting y Performance Avanzado

## 📋 Información General

| Campo             | Detalle                                |
| ----------------- | -------------------------------------- |
| **Etapa**         | 6 - Avanzado y Performance (Parte 2/2) |
| **Duración**      | 8 horas                                |
| **Prerequisitos** | Semana 16 (Optimización de Renders)    |
| **Proyecto**      | App con Lazy Loading y Virtualización  |

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Implementar code splitting con `React.lazy` y `Suspense`
- ✅ Aplicar lazy loading por rutas y por componentes
- ✅ Virtualizar listas largas con `react-window`
- ✅ Medir Web Vitals (LCP, FID, CLS) en aplicaciones React
- ✅ Aplicar patrones de composición avanzados
- ✅ Estructurar proyectos React escalables

---

## 📚 Contenido

### 1. Teoría (2.5 horas)

| Archivo                                                               | Tema                              | Duración |
| --------------------------------------------------------------------- | --------------------------------- | -------- |
| [01-code-splitting.md](1-teoria/01-code-splitting.md)                 | Code Splitting y React.lazy       | 40 min   |
| [02-virtualizacion.md](1-teoria/02-virtualizacion.md)                 | Virtualización de Listas          | 35 min   |
| [03-web-vitals.md](1-teoria/03-web-vitals.md)                         | Web Vitals y Métricas             | 35 min   |
| [04-arquitectura-escalable.md](1-teoria/04-arquitectura-escalable.md) | Patrones y Arquitectura Escalable | 40 min   |

### 2. Ejercicios Guiados (3 horas)

| Ejercicio                                                  | Tema                            | Duración |
| ---------------------------------------------------------- | ------------------------------- | -------- |
| [ejercicio-01](2-ejercicios/ejercicio-01-lazy-loading/)    | Lazy Loading de Componentes     | 45 min   |
| [ejercicio-02](2-ejercicios/ejercicio-02-route-splitting/) | Code Splitting por Rutas        | 45 min   |
| [ejercicio-03](2-ejercicios/ejercicio-03-virtualizacion/)  | Virtualizar Lista con 10k Items | 50 min   |
| [ejercicio-04](2-ejercicios/ejercicio-04-web-vitals/)      | Medir y Optimizar Web Vitals    | 40 min   |

### 3. Proyecto Semanal (2.5 horas)

| Proyecto                       | Descripción                                             |
| ------------------------------ | ------------------------------------------------------- |
| [App Performance](3-proyecto/) | Aplicación optimizada con lazy loading y virtualización |

---

## 🗓️ Distribución del Tiempo

| Sección        | Contenido              | Tiempo   | %       |
| -------------- | ---------------------- | -------- | ------- |
| **Teoría**     |                        | **2.5h** | **31%** |
|                | Code Splitting         | 40 min   |         |
|                | Virtualización         | 35 min   |         |
|                | Web Vitals             | 35 min   |         |
|                | Arquitectura Escalable | 40 min   |         |
| **Ejercicios** |                        | **3.0h** | **38%** |
|                | Lazy Loading           | 45 min   |         |
|                | Route Splitting        | 45 min   |         |
|                | Virtualización         | 50 min   |         |
|                | Web Vitals             | 40 min   |         |
| **Proyecto**   |                        | **2.5h** | **31%** |
|                | App Performance        | 2.5h     |         |

---

## 📦 Dependencias de la Semana

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "react-router-dom": "^6.x",
    "react-window": "^1.8.x",
    "web-vitals": "^3.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "vite": "^6.x",
    "@types/react-window": "^1.8.x"
  }
}
```

---

## 🔗 Recursos

- [4-recursos/](4-recursos/) - Material complementario
- [5-glosario/](5-glosario/) - Términos clave de la semana

---

## � Entregable

| Evidencia               | Porcentaje |
| ----------------------- | ---------- |
| **Proyecto Semanal** 📦 | **100%**   |

> **Nota:** La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

---

## �📖 Lecturas Recomendadas

- [Code Splitting - React Docs](https://react.dev/reference/react/lazy)
- [Suspense - React Docs](https://react.dev/reference/react/Suspense)
- [react-window Documentation](https://react-window.vercel.app/)
- [Web Vitals - web.dev](https://web.dev/vitals/)

---

## ✅ Checklist de la Semana

### Preparación (No evaluada)

- [ ] Leer toda la teoría
- [ ] Completar los 4 ejercicios guiados
- [ ] Revisar el glosario de términos

### Entregable (Evaluado)

- [ ] Desarrollar el proyecto semanal
- [ ] Medir Web Vitals antes y después de optimizaciones
- [ ] Documentar métricas y decisiones de arquitectura

---

## 🧭 Navegación

| Anterior                                                   | Índice                   | Siguiente                                                   |
| ---------------------------------------------------------- | ------------------------ | ----------------------------------------------------------- |
| [Semana 16: Optimización de Renders](../week-16-optimizacion_renders/README.md) | [Bootcamp](../README.md) | [Semana 18: Proyecto Final - Parte 1](../week-18-docker_fundamentals/README.md) |
