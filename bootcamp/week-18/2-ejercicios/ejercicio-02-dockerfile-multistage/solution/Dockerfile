# ============================================
# DOCKERFILE MULTI-STAGE PARA REACT + VITE
# Ejercicio 02: Dockerfile Multi-stage - SOLUCIÓN
# ============================================

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

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
