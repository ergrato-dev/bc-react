#!/bin/bash

# ============================================
# EJERCICIO 01: Mi Primer Contenedor
# ============================================

# ============================================
# PASO 1: Verificar Docker
# ============================================
echo "--- Paso 1: Verificar Docker ---"

# Descomenta y ejecuta estos comandos uno por uno:
# docker --version
# docker info

echo ""

# ============================================
# PASO 2: Hello World
# ============================================
echo "--- Paso 2: Hello World ---"

# Descomenta para ejecutar:
# docker run hello-world

echo ""

# ============================================
# PASO 3: Ejecutar Nginx (sin puerto)
# ============================================
echo "--- Paso 3: Nginx sin puerto ---"

# Descomenta para ejecutar:
# docker run -d --name mi-nginx nginx:alpine
# docker ps
# docker logs mi-nginx

# Problema: No podemos acceder porque el puerto no está expuesto
# Limpieza:
# docker stop mi-nginx && docker rm mi-nginx

echo ""

# ============================================
# PASO 4: Nginx con puerto
# ============================================
echo "--- Paso 4: Nginx con puerto ---"

# Descomenta para ejecutar:
# docker run -d --name mi-nginx -p 8080:80 nginx:alpine

# Abre en navegador: http://localhost:8080

# Limpieza:
# docker stop mi-nginx && docker rm mi-nginx

echo ""

# ============================================
# PASO 5: Nginx con volumen
# ============================================
echo "--- Paso 5: Nginx con volumen ---"

# Descomenta para ejecutar:
# docker run -d \
#   --name mi-web \
#   -p 8080:80 \
#   -v $(pwd)/html:/usr/share/nginx/html:ro \
#   nginx:alpine

# Abre en navegador: http://localhost:8080
# Deberías ver el contenido de html/index.html

echo ""

# ============================================
# PASO 6: Comandos de gestión
# ============================================
echo "--- Paso 6: Comandos de gestión ---"

# Descomenta para ejecutar:
# docker ps                    # Ver contenedores activos
# docker ps -a                 # Ver todos los contenedores
# docker logs mi-web           # Ver logs
# docker logs -f mi-web        # Ver logs en tiempo real (Ctrl+C para salir)
# docker exec -it mi-web sh    # Entrar al contenedor
# docker stats mi-web          # Ver uso de recursos (Ctrl+C para salir)

echo ""

# ============================================
# PASO 7: Limpieza
# ============================================
echo "--- Paso 7: Limpieza ---"

# Descomenta para limpiar:
# docker stop mi-web
# docker rm mi-web

# O en un solo comando:
# docker rm -f mi-web

echo "¡Ejercicio completado!"
