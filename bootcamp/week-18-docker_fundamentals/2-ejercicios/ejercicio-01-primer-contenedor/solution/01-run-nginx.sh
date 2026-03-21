#!/bin/bash

# ============================================
# EJERCICIO 01: Mi Primer Contenedor - SOLUCIÓN
# ============================================

# ============================================
# PASO 1: Verificar Docker
# ============================================
echo "--- Paso 1: Verificar Docker ---"

docker --version
docker info | head -20

echo ""

# ============================================
# PASO 2: Hello World
# ============================================
echo "--- Paso 2: Hello World ---"

docker run hello-world

echo ""

# ============================================
# PASO 3: Ejecutar Nginx con puerto
# ============================================
echo "--- Paso 3: Nginx con puerto ---"

# Primero limpiamos cualquier contenedor previo
docker rm -f mi-nginx 2>/dev/null || true

# Ejecutar Nginx
docker run -d --name mi-nginx -p 8080:80 nginx:alpine

# Verificar que está corriendo
docker ps

echo "Abre en navegador: http://localhost:8080"

# Esperar input del usuario
read -p "Presiona Enter para continuar..."

# Limpieza
docker stop mi-nginx && docker rm mi-nginx

echo ""

# ============================================
# PASO 4: Nginx con volumen personalizado
# ============================================
echo "--- Paso 4: Nginx con volumen ---"

# Obtener directorio del script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Ejecutar con volumen
docker run -d \
  --name mi-web \
  -p 8080:80 \
  -v "${SCRIPT_DIR}/html:/usr/share/nginx/html:ro" \
  nginx:alpine

echo "Abre en navegador: http://localhost:8080"
echo "Deberías ver la página personalizada"

# Verificar
docker ps

# Esperar input del usuario
read -p "Presiona Enter para continuar..."

# ============================================
# PASO 5: Comandos de gestión
# ============================================
echo "--- Paso 5: Comandos de gestión ---"

# Ver logs
echo "=== Logs del contenedor ==="
docker logs mi-web

# Ver uso de recursos (1 muestra)
echo "=== Uso de recursos ==="
docker stats mi-web --no-stream

# Ejecutar comando dentro del contenedor
echo "=== Contenido del directorio HTML ==="
docker exec mi-web ls -la /usr/share/nginx/html

echo ""

# ============================================
# PASO 6: Limpieza final
# ============================================
echo "--- Paso 6: Limpieza ---"

docker rm -f mi-web

echo "¡Contenedor eliminado!"
echo ""

# Verificar que no hay contenedores corriendo
echo "=== Contenedores activos ==="
docker ps

echo ""
echo "✅ ¡Ejercicio completado exitosamente!"
