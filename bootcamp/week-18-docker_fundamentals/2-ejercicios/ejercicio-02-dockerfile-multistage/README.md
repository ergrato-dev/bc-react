# Ejercicio 02: Dockerfile Multi-stage para React

## 🎯 Objetivo

Crear un Dockerfile multi-stage para una aplicación React con Vite, optimizando el tamaño de la imagen final.

## ⏱️ Duración

45 minutos

## 📋 Requisitos Previos

- Ejercicio 01 completado
- Conocimiento básico de React/Vite
- Docker funcionando

---

## 📚 Conceptos Clave

- Multi-stage builds
- Separación de build y runtime
- Optimización de capas Docker
- Nginx para servir SPAs
- `.dockerignore`

---

## 🏗️ Instrucciones

### Paso 1: Explorar el Proyecto React

En la carpeta `starter/` tienes un proyecto React con Vite ya creado. Explóralo:

```
starter/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── App.css
├── public/
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

### Paso 2: Probar la Aplicación Localmente

```bash
cd starter

# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Crear build de producción
pnpm build

# Ver el contenido de dist/
ls -la dist/
```

El directorio `dist/` contiene los archivos estáticos que necesitamos servir.

---

### Paso 3: Crear el Archivo .dockerignore

**Abre `starter/.dockerignore`** y descomenta el contenido.

Este archivo evita copiar archivos innecesarios al contexto de build:

```dockerignore
node_modules
dist
.git
*.log
.env.local
```

---

### Paso 4: Crear el Dockerfile (Stage 1: Build)

**Abre `starter/Dockerfile`** y completa el Stage 1:

```dockerfile
# ============================================
# STAGE 1: Build
# ============================================
FROM node:20-alpine AS builder

# Habilitar corepack para pnpm
RUN corepack enable pnpm

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias primero (aprovecha caché)
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar código fuente
COPY . .

# Build de producción
RUN pnpm build
```

---

### Paso 5: Agregar Stage 2 (Production)

Continúa en el mismo Dockerfile:

```dockerfile
# ============================================
# STAGE 2: Production
# ============================================
FROM nginx:alpine AS production

# Copiar configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar SOLO los archivos del build
COPY --from=builder /app/dist /usr/share/nginx/html

# Puerto que expone Nginx
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
```

---

### Paso 6: Crear la Configuración de Nginx

**Abre `starter/nginx.conf`** y descomenta el contenido.

Esta configuración es crucial para SPAs:

```nginx
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    # Compresión
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;

    # Cache para assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA: todas las rutas van a index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

### Paso 7: Construir la Imagen

```bash
# Asegúrate de estar en starter/
cd starter

# Construir la imagen
docker build -t react-app .

# Ver el tamaño de la imagen
docker images react-app
```

**Resultado esperado**: ~25-35MB (no 1GB+)

---

### Paso 8: Ejecutar el Contenedor

```bash
# Ejecutar
docker run -d --name mi-react -p 3000:80 react-app

# Verificar
docker ps

# Ver logs
docker logs mi-react
```

**Abre en navegador**: http://localhost:3000

---

### Paso 9: Probar el Routing SPA

La aplicación tiene múltiples rutas. Prueba:

1. http://localhost:3000
2. http://localhost:3000/about
3. Refresca la página en `/about`

Si nginx está bien configurado, el refresh funciona (no da 404).

---

### Paso 10: Comparar Tamaños

Crea una imagen sin multi-stage para comparar:

```bash
# Ver el Dockerfile.single en starter/
# Construir versión sin multi-stage
docker build -f Dockerfile.single -t react-app-single .

# Comparar tamaños
docker images | grep react-app
```

| Imagen           | Tamaño |
| ---------------- | ------ |
| react-app        | ~30MB  |
| react-app-single | ~1GB+  |

---

### Paso 11: Limpieza

```bash
# Detener y eliminar contenedor
docker rm -f mi-react

# Eliminar imágenes (opcional)
docker rmi react-app react-app-single
```

---

## ✅ Checklist de Verificación

- [ ] .dockerignore creado y funcional
- [ ] Dockerfile multi-stage con 2 stages
- [ ] nginx.conf configurado para SPA
- [ ] Imagen construida exitosamente
- [ ] Tamaño de imagen < 50MB
- [ ] Aplicación funciona en http://localhost:3000
- [ ] El routing SPA funciona (refresh en /about)

---

## 🎯 Desafío Extra

1. Agrega un health check al Dockerfile
2. Usa build args para pasar `VITE_API_URL`
3. Agrega headers de seguridad en nginx.conf

---

## 📚 Recursos

- [Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)
- [Nginx Configuration](https://nginx.org/en/docs/)
