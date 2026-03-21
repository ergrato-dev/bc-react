# Semana 18: Docker Fundamentals para React

## 📋 Información General

| Dato              | Valor                                      |
| ----------------- | ------------------------------------------ |
| **Etapa**         | 7 - Proyecto Final y Deployment con Docker |
| **Semana**        | 18 de 20                                   |
| **Tema**          | Docker Fundamentals para React             |
| **Horas totales** | 8 horas                                    |

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Comprender qué es Docker y por qué es útil para desarrollo frontend
- ✅ Escribir Dockerfiles multi-stage para aplicaciones React
- ✅ Configurar Docker Compose para orquestación de servicios
- ✅ Optimizar imágenes Docker (tamaño, capas, caché)
- ✅ Manejar variables de entorno en contenedores
- ✅ Configurar Nginx como servidor para SPAs de React

---

## 📚 Requisitos Previos

- Etapa 6 completada (Performance y Code Splitting)
- Docker Desktop instalado en tu sistema
- Conocimientos básicos de terminal/línea de comandos
- Entender el proceso de build de aplicaciones React con Vite

---

## 🗂️ Estructura de la Semana

```
week-18-docker_fundamentals/
├── README.md
├── rubrica-evaluacion.md
├── 0-assets/
│   ├── 01-docker-architecture.svg
│   ├── 02-dockerfile-stages.svg
│   └── 03-docker-compose-flow.svg
├── 1-teoria/
│   ├── 01-introduccion-docker.md
│   ├── 02-dockerfile-react.md
│   └── 03-docker-compose.md
├── 2-ejercicios/
│   ├── ejercicio-01-primer-contenedor/
│   ├── ejercicio-02-dockerfile-multistage/
│   └── ejercicio-03-docker-compose/
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

| Archivo                     | Tema                               | Duración |
| --------------------------- | ---------------------------------- | -------- |
| `01-introduccion-docker.md` | ¿Qué es Docker? Conceptos básicos  | 40 min   |
| `02-dockerfile-react.md`    | Dockerfiles multi-stage para React | 45 min   |
| `03-docker-compose.md`      | Orquestación con Docker Compose    | 35 min   |

### 2. Ejercicios (3.5 horas)

| Ejercicio                            | Tema                              | Duración |
| ------------------------------------ | --------------------------------- | -------- |
| `ejercicio-01-primer-contenedor`     | Tu primer contenedor Docker       | 50 min   |
| `ejercicio-02-dockerfile-multistage` | Dockerfile multi-stage optimizado | 80 min   |
| `ejercicio-03-docker-compose`        | Orquestando React + API           | 80 min   |

### 3. Proyecto (2.5 horas)

**React App Containerizada**: Aplicación React completa en Docker con:

- Dockerfile multi-stage optimizado
- Nginx configurado para SPA
- Docker Compose con API mock
- Variables de entorno

---

## ⏱️ Distribución del Tiempo

| Actividad  | Horas | Porcentaje |
| ---------- | ----- | ---------- |
| Teoría     | 2.0   | 25%        |
| Ejercicios | 3.5   | 44%        |
| Proyecto   | 2.5   | 31%        |
| **Total**  | **8** | **100%**   |

---

## 📌 Entregable

### ✅ Preparación (No evaluada)

> La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

- [ ] Leer material teórico
- [ ] Completar ejercicios guiados
- [ ] Practicar comandos Docker

### 📦 Proyecto Semanal (100%)

- Dockerfile multi-stage funcional
- docker-compose.yml configurado
- Aplicación corriendo en contenedor
- README con instrucciones de ejecución

---

## 🔧 Herramientas Necesarias

- **Docker Desktop** (Windows/Mac) o Docker Engine (Linux)
- **VS Code** con extensión Docker
- **Terminal** (bash, zsh, PowerShell)
- **Node.js 20+** (para desarrollo local)

### Verificar Instalación

```bash
docker --version
docker compose version
```

---

## 💡 Tips para la Semana

1. **Practica en local primero**: Antes de dockerizar, asegúrate que tu app funciona
2. **Lee los logs**: `docker logs <container>` es tu mejor amigo
3. **Usa .dockerignore**: Excluye node_modules y archivos innecesarios
4. **Multi-stage es clave**: Separa build de producción
5. **Caché inteligente**: Ordena las instrucciones del Dockerfile estratégicamente

---

## 🔗 Navegación

| Anterior                                          | Siguiente                                   |
| ------------------------------------------------- | ------------------------------------------- |
| [⬅️ Semana 17: Performance](../week-17-code_splitting_performance/README.md) | [Semana 19: CI/CD ➡️](../week-19-cicd_docker_github_actions/README.md) |

---

_Bootcamp React con TypeScript - Semana 18_
