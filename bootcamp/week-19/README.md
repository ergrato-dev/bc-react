# Semana 19: CI/CD con Docker y GitHub Actions

## 📋 Información General

| Dato              | Valor                                      |
| ----------------- | ------------------------------------------ |
| **Etapa**         | 7 - Proyecto Final y Deployment con Docker |
| **Semana**        | 19 de 20                                   |
| **Tema**          | CI/CD con Docker y GitHub Actions          |
| **Horas totales** | 8 horas                                    |

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Comprender los conceptos de CI/CD y su importancia
- ✅ Configurar GitHub Actions para proyectos React
- ✅ Crear workflows de build, test y deploy automatizados
- ✅ Publicar imágenes Docker en GitHub Container Registry
- ✅ Implementar estrategias de deployment (staging/production)
- ✅ Configurar secrets y variables de entorno en GitHub Actions

---

## 📚 Requisitos Previos

- Semana 18 completada (Docker Fundamentals)
- Cuenta de GitHub activa
- Conocimientos básicos de Git (branches, commits, push)
- Docker Desktop instalado
- Dockerfile multi-stage funcional (de semana 18)

---

## 🗂️ Estructura de la Semana

```
week-19/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── 01-cicd-pipeline.svg
│   ├── 02-github-actions-flow.svg
│   └── 03-deployment-strategies.svg
├── 1-teoria/
│   ├── 01-introduccion-cicd.md
│   ├── 02-github-actions-fundamentos.md
│   └── 03-docker-registry-deploy.md
├── 2-ejercicios/
│   ├── ejercicio-01-primer-workflow/
│   ├── ejercicio-02-build-test-workflow/
│   └── ejercicio-03-deploy-ghcr/
├── 3-proyecto/
│   ├── README.md
│   ├── starter/
│   └── solution/
├── 4-recursos/
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/
    └── README.md
```

---

## 📝 Contenidos

### 1. Teoría (2 horas)

| Archivo                            | Tema                               | Duración |
| ---------------------------------- | ---------------------------------- | -------- |
| `01-introduccion-cicd.md`          | Conceptos de CI/CD y pipelines     | 40 min   |
| `02-github-actions-fundamentos.md` | Workflows, jobs, steps y triggers  | 45 min   |
| `03-docker-registry-deploy.md`     | GHCR, tags y estrategias de deploy | 35 min   |

### 2. Ejercicios (3.5 horas)

| Ejercicio                          | Tema                                 | Duración |
| ---------------------------------- | ------------------------------------ | -------- |
| `ejercicio-01-primer-workflow`     | Hello World con GitHub Actions       | 45 min   |
| `ejercicio-02-build-test-workflow` | CI: Build y test automatizado        | 1h 15min |
| `ejercicio-03-deploy-ghcr`         | CD: Push a GitHub Container Registry | 1h 30min |

### 3. Proyecto Semanal (2.5 horas)

**Pipeline CI/CD Completo**: Configurar un pipeline que:

- Ejecute linting y tests en cada PR
- Construya imagen Docker multi-stage
- Publique en GHCR con tags semánticos
- Despliegue a staging/production según branch

---

## ⏱️ Distribución del Tiempo

| Actividad      | Tiempo | Descripción                    |
| -------------- | ------ | ------------------------------ |
| **Teoría**     | 2h     | Lectura de material teórico    |
| **Ejercicios** | 3.5h   | Práctica guiada con workflows  |
| **Proyecto**   | 2.5h   | Pipeline CI/CD para tu dominio |
| **Total**      | **8h** |                                |

---

## 📌 Entregable

### 📦 Proyecto Semanal (100%)

**Pipeline CI/CD Completo** para tu aplicación de dominio asignado:

- Pipeline CI/CD funcional con GitHub Actions
- Imagen Docker publicada en GitHub Container Registry
- README con badges de CI y explicación del pipeline
- Documentación para contribuidores

> 💡 **Nota**: La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

### ✅ Checklist de Entrega

**Preparación (No evaluada)**:

- [ ] Leer material teórico de CI/CD
- [ ] Completar ejercicio 01: Primer workflow
- [ ] Completar ejercicio 02: Build y test workflow
- [ ] Completar ejercicio 03: Deploy a GHCR

**Entregable (Evaluado)**:

- [ ] Proyecto: Pipeline CI/CD completo para tu dominio
- [ ] Workflows funcionales ejecutándose en GitHub Actions
- [ ] Imagen publicada en GHCR con tags semánticos
- [ ] README con badges y documentación del pipeline

---

## 🔗 Navegación

| Anterior                                                 | Siguiente                                           |
| -------------------------------------------------------- | --------------------------------------------------- |
| [← Semana 18: Docker Fundamentals](../week-18/README.md) | [Semana 20: Proyecto Final →](../week-20/README.md) |

---

## 📚 Recursos Rápidos

- [📖 Teoría](1-teoria/)
- [💻 Ejercicios](2-ejercicios/)
- [🏗️ Proyecto](3-proyecto/)
- [📚 Recursos](4-recursos/)
- [📖 Glosario](5-glosario/)

---

_Semana 19 de 20 - Bootcamp React con TypeScript_
