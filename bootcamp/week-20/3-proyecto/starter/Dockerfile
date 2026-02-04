# ============================================
# Dockerfile Multi-stage para Proyecto Final
# Optimizado para React + TypeScript + Nginx
# ============================================

# TODO: Adapta este Dockerfile a tu proyecto

# ============================================
# STAGE 1: Build
# ============================================
# FROM node:20-alpine AS builder
#
# WORKDIR /app
#
# # Habilitar pnpm
# RUN corepack enable && corepack prepare pnpm@latest --activate
#
# # Copiar archivos de dependencias
# COPY package.json pnpm-lock.yaml ./
#
# # Instalar dependencias
# RUN pnpm install --frozen-lockfile
#
# # Copiar código fuente
# COPY . .
#
# # Build de producción
# RUN pnpm build

# ============================================
# STAGE 2: Production
# ============================================
# FROM nginx:alpine AS production
#
# # Copiar configuración de Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf
#
# # Copiar build desde stage anterior
# COPY --from=builder /app/dist /usr/share/nginx/html
#
# # Puerto
# EXPOSE 80
#
# # Healthcheck
# HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
#   CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1
#
# # Comando por defecto
# CMD ["nginx", "-g", "daemon off;"]
