# Mi App - [Tu Dominio]

<!-- TODO: Reemplaza USUARIO y REPO con tus datos -->

![CI](https://github.com/USUARIO/REPO/actions/workflows/ci.yml/badge.svg)
![CD](https://github.com/USUARIO/REPO/actions/workflows/cd.yml/badge.svg)

## 📋 Descripción

Aplicación de gestión de [Tu Dominio] containerizada con Docker y CI/CD automatizado.

## 🚀 Quick Start

### Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/USUARIO/REPO.git
cd REPO

# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev
```

### Con Docker

```bash
# Construir imagen
docker build -t mi-app .

# Ejecutar contenedor
docker run -p 3000:80 mi-app
```

## 🐳 Docker Image

La imagen se publica automáticamente en GitHub Container Registry.

### Pull

```bash
docker pull ghcr.io/USUARIO/REPO:latest
```

### Tags Disponibles

- `latest` - Última versión estable (main)
- `sha-xxxxx` - Commit específico
- `vX.X.X` - Versiones etiquetadas

### Ejecutar

```bash
docker run -p 3000:80 ghcr.io/USUARIO/REPO:latest
```

Abrir: http://localhost:3000

## 🔄 CI/CD Pipeline

### CI (Continuous Integration)

Se ejecuta en cada push y pull request:

1. 🔍 **Lint** - ESLint para calidad de código
2. 🧪 **Test** - Vitest con coverage
3. 🏗️ **Build** - Verificar build exitoso

### CD (Continuous Deployment)

Se ejecuta en push a `main` y tags `v*`:

1. 🐳 **Build** - Imagen Docker multi-stage
2. 📦 **Push** - Publicar a GHCR
3. 🏷️ **Tag** - Tags semánticos automáticos

## 📁 Estructura

```
.
├── .github/workflows/
│   ├── ci.yml          # Pipeline CI
│   └── cd.yml          # Pipeline CD
├── src/                # Código fuente
├── Dockerfile          # Multi-stage build
├── nginx.conf          # Config producción
└── docker-compose.yml  # Desarrollo local
```

## 🛠️ Scripts

```bash
pnpm dev          # Desarrollo
pnpm build        # Build producción
pnpm lint         # Linting
pnpm test         # Tests
pnpm test:coverage # Tests con coverage
```

## 📚 Tecnologías

- React 18 + TypeScript
- Vite
- Docker + Nginx
- GitHub Actions
- GHCR

---

_Bootcamp React - Semana 19: CI/CD con Docker_
