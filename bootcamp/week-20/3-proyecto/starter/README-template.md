# [Nombre del Proyecto]

![CI Status](https://github.com/[usuario]/[repo]/actions/workflows/ci.yml/badge.svg)
![CD Status](https://github.com/[usuario]/[repo]/actions/workflows/cd.yml/badge.svg)

> Breve descripción de tu proyecto y qué problema resuelve.

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Demo](#-demo)
- [Tecnologías](#-tecnologías)
- [Requisitos](#-requisitos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Docker](#-docker)
- [Testing](#-testing)
- [Documentación](#-documentación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API](#-api)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## 📝 Descripción

[Describe tu proyecto en 2-3 párrafos. Incluye:]

- Qué hace la aplicación
- Para quién está dirigida
- Qué problema resuelve

---

## ✨ Características

- ✅ Característica 1
- ✅ Característica 2
- ✅ Característica 3
- ✅ Característica 4

---

## 🎬 Demo

[Incluye screenshots o GIFs de tu aplicación]

### Login

![Login Screenshot](./screenshots/login.png)

### Dashboard

![Dashboard Screenshot](./screenshots/dashboard.png)

---

## 🛠️ Tecnologías

| Categoría        | Tecnología               |
| ---------------- | ------------------------ |
| Frontend         | React 18 + TypeScript    |
| Build Tool       | Vite                     |
| Routing          | React Router v6          |
| Estado Global    | Zustand                  |
| Server State     | TanStack Query           |
| Formularios      | React Hook Form + Zod    |
| Estilos          | Tailwind CSS             |
| Testing          | Vitest + Testing Library |
| Containerización | Docker                   |
| CI/CD            | GitHub Actions           |

---

## 📦 Requisitos

- Node.js 20+
- pnpm 8+
- Docker (opcional)

---

## 🚀 Instalación

### Clonar repositorio

```bash
git clone https://github.com/[usuario]/[repo].git
cd [repo]
```

### Instalar dependencias

```bash
pnpm install
```

### Configurar variables de entorno

```bash
cp .env.example .env
```

Edita `.env` con tus valores:

```env
VITE_API_URL=http://localhost:3001/api
```

### Ejecutar en desarrollo

```bash
pnpm dev
```

Abre http://localhost:5173

---

## 💻 Uso

### Comandos disponibles

```bash
# Desarrollo
pnpm dev           # Iniciar servidor de desarrollo

# Build
pnpm build         # Construir para producción
pnpm preview       # Previsualizar build

# Testing
pnpm test          # Ejecutar tests
pnpm test:ui       # Tests con interfaz
pnpm test:coverage # Tests con cobertura

# Linting
pnpm lint          # Ejecutar ESLint
pnpm lint:fix      # Corregir errores de lint

# Storybook
pnpm storybook     # Iniciar Storybook
pnpm build-storybook # Build de Storybook
```

---

## 🐳 Docker

### Construir imagen

```bash
docker build -t [nombre-app] .
```

### Ejecutar contenedor

```bash
docker run -p 3000:3000 [nombre-app]
```

### Con Docker Compose

```bash
# Desarrollo
docker compose up

# Producción
docker compose -f docker-compose.prod.yml up
```

### Imagen desde GHCR

```bash
docker pull ghcr.io/[usuario]/[repo]:latest
docker run -p 3000:3000 ghcr.io/[usuario]/[repo]:latest
```

---

## 🧪 Testing

```bash
# Ejecutar todos los tests
pnpm test

# Con cobertura
pnpm test:coverage
```

### Cobertura actual

| Archivo   | % Stmts | % Branch | % Funcs | % Lines |
| --------- | ------- | -------- | ------- | ------- |
| All files | XX%     | XX%      | XX%     | XX%     |

---

## 📚 Documentación

### Storybook

La documentación de componentes está disponible en Storybook:

```bash
pnpm storybook
```

Abre http://localhost:6006

### Componentes principales

| Componente | Descripción                     |
| ---------- | ------------------------------- |
| Button     | Botón con variantes             |
| Input      | Campo de entrada con validación |
| Card       | Tarjeta para mostrar items      |
| Modal      | Ventana modal accesible         |

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/           # Componentes UI genéricos
│   └── features/     # Componentes del dominio
├── hooks/            # Custom hooks
├── pages/            # Páginas/Rutas
├── services/         # Llamadas a API
├── store/            # Estado global (Zustand)
├── types/            # Tipos TypeScript
├── utils/            # Funciones utilitarias
├── App.tsx
└── main.tsx
```

---

## 🔌 API

### Endpoints utilizados

| Método | Endpoint       | Descripción         |
| ------ | -------------- | ------------------- |
| POST   | /auth/login    | Iniciar sesión      |
| POST   | /auth/register | Registrar usuario   |
| GET    | /items         | Listar items        |
| GET    | /items/:id     | Obtener item por ID |
| POST   | /items         | Crear nuevo item    |
| PUT    | /items/:id     | Actualizar item     |
| DELETE | /items/:id     | Eliminar item       |

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👤 Autor

**[Tu Nombre]**

- GitHub: [@usuario](https://github.com/usuario)
- LinkedIn: [perfil](https://linkedin.com/in/usuario)

---

## 🙏 Agradecimientos

- [Bootcamp React con TypeScript](https://github.com/epti-dev/bc-react)
- [React Documentation](https://react.dev/)
- [Vite](https://vitejs.dev/)

---

_Creado como proyecto final del Bootcamp React con TypeScript_
