# Ejercicio 01: Mi Primer Contenedor

## 🎯 Objetivo

Ejecutar contenedores Docker básicos, entender el mapeo de puertos y montar volúmenes.

## ⏱️ Duración

30 minutos

## 📋 Requisitos Previos

- Docker Desktop instalado y ejecutándose
- Terminal con acceso a comandos Docker
- Navegador web

---

## 📚 Conceptos Clave

- `docker run`: Crear y ejecutar contenedores
- `-p`: Mapeo de puertos (host:container)
- `-v`: Montaje de volúmenes
- `-d`: Modo detached (segundo plano)
- `docker ps`: Listar contenedores
- `docker logs`: Ver logs de un contenedor

---

## 🏗️ Instrucciones

### Paso 1: Verificar Instalación de Docker

Abre tu terminal y verifica que Docker está instalado:

```bash
docker --version
```

Deberías ver algo como: `Docker version 24.x.x`

Verifica que el daemon está corriendo:

```bash
docker info
```

---

### Paso 2: Ejecutar tu Primer Contenedor

Ejecuta el contenedor de prueba de Docker:

```bash
docker run hello-world
```

**¿Qué sucede?**

1. Docker busca la imagen `hello-world` localmente
2. No la encuentra, la descarga de Docker Hub
3. Crea un contenedor a partir de la imagen
4. Ejecuta el contenedor (imprime mensaje)
5. El contenedor termina

---

### Paso 3: Ejecutar Nginx

Ahora ejecutemos un servidor web real:

**Abre `starter/01-run-nginx.sh`** y ejecuta los comandos paso a paso.

```bash
# Ejecutar Nginx en segundo plano
docker run -d --name mi-nginx nginx:alpine

# Ver contenedores en ejecución
docker ps

# Ver logs del contenedor
docker logs mi-nginx
```

**Problema**: No podemos acceder al servidor porque el puerto no está expuesto.

---

### Paso 4: Mapeo de Puertos

Detén y elimina el contenedor anterior:

```bash
docker stop mi-nginx
docker rm mi-nginx
```

Ahora ejecuta con mapeo de puertos:

```bash
# -p <puerto_host>:<puerto_contenedor>
docker run -d --name mi-nginx -p 8080:80 nginx:alpine
```

**Abre en tu navegador**: http://localhost:8080

¡Deberías ver la página de bienvenida de Nginx!

---

### Paso 5: Montar Volumen con Contenido Personalizado

Detén el contenedor anterior:

```bash
docker stop mi-nginx && docker rm mi-nginx
```

Ahora montemos nuestro HTML personalizado:

```bash
# Navegar a la carpeta starter
cd starter

# Ejecutar con volumen montado
docker run -d \
  --name mi-web \
  -p 8080:80 \
  -v $(pwd)/html:/usr/share/nginx/html:ro \
  nginx:alpine
```

**Abre en tu navegador**: http://localhost:8080

Deberías ver tu página HTML personalizada.

---

### Paso 6: Modificar Contenido en Tiempo Real

El flag `:ro` significa "read-only". Como montamos el volumen, podemos editar el HTML:

1. Abre `starter/html/index.html`
2. Modifica el título o contenido
3. Refresca el navegador

¡Los cambios aparecen inmediatamente!

---

### Paso 7: Comandos de Gestión

Practica estos comandos:

```bash
# Ver contenedores en ejecución
docker ps

# Ver todos los contenedores (incluidos detenidos)
docker ps -a

# Ver logs en tiempo real
docker logs -f mi-web

# Ejecutar comando dentro del contenedor
docker exec -it mi-web sh

# Dentro del contenedor:
ls /usr/share/nginx/html
cat /etc/nginx/conf.d/default.conf
exit

# Ver uso de recursos
docker stats mi-web

# Presiona Ctrl+C para salir
```

---

### Paso 8: Limpieza

```bash
# Detener contenedor
docker stop mi-web

# Eliminar contenedor
docker rm mi-web

# O en un solo comando
docker rm -f mi-web

# Eliminar imagen (opcional)
docker rmi nginx:alpine
```

---

## ✅ Checklist de Verificación

- [ ] Docker está instalado y funcionando
- [ ] Puedes ejecutar `docker run hello-world`
- [ ] Puedes ejecutar Nginx con mapeo de puertos
- [ ] Puedes acceder a http://localhost:8080
- [ ] Puedes montar un volumen con contenido personalizado
- [ ] Los cambios en el HTML se reflejan en el navegador
- [ ] Puedes usar comandos: `ps`, `logs`, `exec`, `stop`, `rm`

---

## 🎯 Desafío Extra

1. Ejecuta Nginx en el puerto 3000 en lugar de 8080
2. Crea una segunda página `about.html` y accede a ella
3. Ejecuta dos contenedores Nginx simultáneos en puertos diferentes

---

## 📚 Recursos

- [Docker Run Reference](https://docs.docker.com/engine/reference/run/)
- [Nginx Docker Image](https://hub.docker.com/_/nginx)
