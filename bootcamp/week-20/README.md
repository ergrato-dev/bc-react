# Semana 20: Proyecto Final - Aplicación Production-Ready

## 📋 Información General

| Campo              | Detalle                                                |
| ------------------ | ------------------------------------------------------ |
| **Etapa**          | 7 - Proyecto Final y Deployment con Docker (Parte 3/3) |
| **Duración**       | 8 horas                                                |
| **Prerrequisitos** | Semanas 18-19 completadas                              |
| **Nivel**          | Avanzado                                               |

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Planificar y ejecutar un proyecto full-stack completo
- ✅ Integrar todos los conceptos del bootcamp en una aplicación real
- ✅ Implementar autenticación y autorización básica
- ✅ Containerizar y desplegar la aplicación con Docker
- ✅ Configurar pipelines CI/CD funcionales con GitHub Actions
- ✅ Documentar el proyecto con Storybook y README profesional
- ✅ Aplicar buenas prácticas de accesibilidad (a11y) y SEO
- ✅ Presentar y defender el proyecto final

---

## 📚 Contenido de la Semana

### Distribución del Tiempo (8 horas)

| Actividad               | Tiempo   | Descripción                             |
| ----------------------- | -------- | --------------------------------------- |
| Planificación           | 1 hora   | Definición de alcance y arquitectura    |
| Desarrollo              | 4 horas  | Implementación del proyecto             |
| Documentación           | 1.5 hora | README, Storybook, comentarios          |
| Revisión y Presentación | 1.5 hora | Testing final, demo y retroalimentación |

---

## 🗂️ Estructura de la Semana

### 1. Teoría (1-teoria/)

Material de referencia y guías para el proyecto final:

| Archivo                                                               | Descripción                     | Tiempo |
| --------------------------------------------------------------------- | ------------------------------- | ------ |
| [01-planificacion-proyecto.md](1-teoria/01-planificacion-proyecto.md) | Metodología y planificación     | 20 min |
| [02-integracion-fullstack.md](1-teoria/02-integracion-fullstack.md)   | Conexión frontend-backend       | 20 min |
| [03-a11y-seo-produccion.md](1-teoria/03-a11y-seo-produccion.md)       | Accesibilidad, SEO y producción | 20 min |

### 2. Ejercicios (2-ejercicios/)

Ejercicios de preparación para el proyecto final:

| Ejercicio                                                                            | Descripción                      | Tiempo |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------ |
| [ejercicio-01-checklist-produccion](2-ejercicios/ejercicio-01-checklist-produccion/) | Lista de verificación pre-deploy | 30 min |
| [ejercicio-02-storybook-basico](2-ejercicios/ejercicio-02-storybook-basico/)         | Documentación con Storybook      | 45 min |

### 3. Proyecto Final (3-proyecto/)

El proyecto integrador que demuestra todas las competencias del bootcamp:

| Componente                        | Descripción                          |
| --------------------------------- | ------------------------------------ |
| [README.md](3-proyecto/README.md) | Requisitos y criterios de evaluación |
| [starter/](3-proyecto/starter/)   | Plantillas y estructura inicial      |

### 4. Recursos (4-recursos/)

| Carpeta                                 | Contenido                     |
| --------------------------------------- | ----------------------------- |
| [ebooks-free/](4-recursos/ebooks-free/) | Libros gratuitos recomendados |
| [videografia/](4-recursos/videografia/) | Videos y tutoriales           |
| [webgrafia/](4-recursos/webgrafia/)     | Documentación y artículos     |

### 5. Glosario (5-glosario/)

| Archivo                           | Descripción                 |
| --------------------------------- | --------------------------- |
| [README.md](5-glosario/README.md) | Términos clave del bootcamp |

---

## 🏛️ Requisitos del Proyecto Final

### Funcionalidades Mínimas

1. **Frontend React + TypeScript**
   - Componentes funcionales con hooks
   - Estado global (Zustand o Redux Toolkit)
   - React Router con rutas protegidas
   - Formularios con validación (React Hook Form + Zod)
   - Diseño responsivo (Tailwind CSS o CSS Modules)

2. **Integración con Backend**
   - Consumo de API REST o GraphQL
   - Manejo de autenticación (JWT)
   - React Query para server state
   - Manejo de errores y loading states

3. **Testing**
   - Tests unitarios de componentes clave
   - Tests de integración básicos
   - Cobertura mínima del 60%

4. **Containerización**
   - Dockerfile multi-stage optimizado
   - Docker Compose para desarrollo
   - Variables de entorno configuradas

5. **CI/CD**
   - Workflow de CI (lint, test, build)
   - Workflow de CD (push a GHCR)
   - Badges de estado en README

6. **Documentación**
   - README profesional con instrucciones claras
   - Storybook para componentes principales
   - Comentarios en código donde sea necesario

---

## 🎯 Criterios de Éxito

### Mínimo para Aprobar (70%)

- [ ] Aplicación funcional desplegable
- [ ] Docker y Docker Compose configurados
- [ ] CI/CD básico funcionando
- [ ] README con instrucciones de uso
- [ ] Tests básicos pasando

### Nivel Esperado (85%)

- [ ] Todos los requisitos mínimos
- [ ] Diseño responsivo completo
- [ ] Manejo robusto de errores
- [ ] Cobertura de tests > 60%
- [ ] Storybook documentado

### Nivel Sobresaliente (100%)

- [ ] Todos los requisitos esperados
- [ ] Performance optimizada
- [ ] Accesibilidad (a11y) implementada
- [ ] SEO básico configurado
- [ ] Documentación excepcional

---

## 📝 Entregables

1. **Repositorio GitHub** con:
   - Código fuente completo
   - README.md profesional
   - Workflows de GitHub Actions
   - Dockerfile y docker-compose.yml

2. **Imagen Docker** publicada en GHCR

3. **Documentación Storybook** (puede ser estática o enlace)

4. **Presentación** (5-10 minutos):
   - Demo de la aplicación
   - Explicación de arquitectura
   - Decisiones técnicas tomadas
   - Lecciones aprendidas

---

## 🔗 Navegación del Bootcamp

| Anterior                                    | Inicio                         | Siguiente       |
| ------------------------------------------- | ------------------------------ | --------------- |
| [⬅️ Semana 19: CI/CD](../week-19/README.md) | [🏠 Bootcamp](../../README.md) | 🎓 ¡Graduación! |

---

## 🎉 ¡Felicitaciones!

Has llegado a la última semana del bootcamp. Este proyecto final es tu oportunidad de demostrar todo lo aprendido durante las 20 semanas. ¡Mucho éxito!

---

_Semana 20 de 20 - Bootcamp React con TypeScript_
