# Ejercicio 03: Docker Compose

## 🎯 Objetivo

Crear una configuración de Docker Compose para orquestar múltiples contenedores: frontend React, API mock y base de datos.

## ⏱️ Duración

45 minutos

## 📋 Requisitos Previos

- Ejercicios 01 y 02 completados
- Conocimiento básico de YAML
- Docker y Docker Compose funcionando

---

## 📚 Conceptos Clave

- `docker-compose.yml` estructura
- Servicios, redes y volúmenes
- Variables de entorno
- `depends_on` y orden de inicio
- Comunicación entre contenedores

---

## 🏗️ Instrucciones

### Paso 1: Explorar la Estructura del Proyecto

```
starter/
├── frontend/           # React app
│   ├── src/
│   ├── Dockerfile
│   └── nginx.conf
├── api/                # API mock simple
│   ├── server.js
│   └── Dockerfile
├── docker-compose.yml  # Archivo a completar
└── .env.example        # Variables de entorno
```

---

### Paso 2: Configurar Variables de Entorno

Copia el archivo de ejemplo:

```bash
cd starter
cp .env.example .env
```

Revisa el contenido de `.env`:

```bash
# Puerto para el frontend
FRONTEND_PORT=3000

# Puerto para la API
API_PORT=8080

# Base de datos
POSTGRES_USER=bootcamp
POSTGRES_PASSWORD=secret123
POSTGRES_DB=items_db
```

---

### Paso 3: Completar el docker-compose.yml

**Abre `starter/docker-compose.yml`** y completa cada servicio:

#### Servicio Frontend

```yaml
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - '${FRONTEND_PORT}:80'
    depends_on:
      - api
    networks:
      - app-network
```

#### Servicio API

```yaml
api:
  build:
    context: ./api
    dockerfile: Dockerfile
  ports:
    - '${API_PORT}:8080'
  environment:
    - DATABASE_URL=postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}
  depends_on:
    - db
  networks:
    - app-network
```

#### Servicio Database

```yaml
db:
  image: postgres:15-alpine
  environment:
    - POSTGRES_USER=${POSTGRES_USER}
    - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    - POSTGRES_DB=${POSTGRES_DB}
  volumes:
    - postgres-data:/var/lib/postgresql/data
  ports:
    - '5432:5432'
  networks:
    - app-network
```

---

### Paso 4: Configurar Volúmenes y Redes

```yaml
volumes:
  postgres-data:
    driver: local

networks:
  app-network:
    driver: bridge
```

---

### Paso 5: Levantar los Servicios

```bash
# Asegúrate de estar en starter/
cd starter

# Construir y levantar todos los servicios
docker compose up --build

# O en segundo plano
docker compose up -d --build
```

---

### Paso 6: Verificar los Servicios

```bash
# Ver contenedores corriendo
docker compose ps

# Ver logs de todos los servicios
docker compose logs

# Ver logs de un servicio específico
docker compose logs -f api
```

**Prueba los servicios:**

- Frontend: http://localhost:3000
- API: http://localhost:8080/api/items
- Database: `psql -h localhost -U bootcamp -d items_db`

---

### Paso 7: Probar la Comunicación

El frontend debe poder comunicarse con la API. Verifica:

1. Abre http://localhost:3000
2. La aplicación debe mostrar datos obtenidos de la API
3. Revisa los logs: `docker compose logs -f`

---

### Paso 8: Comandos de Gestión

```bash
# Detener servicios
docker compose stop

# Detener y eliminar contenedores
docker compose down

# Detener y eliminar TODO (incluidos volúmenes)
docker compose down -v

# Reiniciar un servicio
docker compose restart api

# Ejecutar comando en un contenedor
docker compose exec api sh
docker compose exec db psql -U bootcamp -d items_db

# Escalar un servicio (solo sin puertos fijos)
# docker compose up -d --scale api=3
```

---

### Paso 9: Verificar Persistencia

1. Crea datos en la aplicación
2. Detén los contenedores: `docker compose down`
3. Levántalos de nuevo: `docker compose up -d`
4. Los datos deben persistir (gracias al volumen)

Para eliminar los datos:

```bash
docker compose down -v
```

---

### Paso 10: Limpieza Final

```bash
# Detener y eliminar todo
docker compose down -v

# Verificar
docker compose ps
docker volume ls
```

---

## ✅ Checklist de Verificación

- [ ] docker-compose.yml válido y sin errores
- [ ] 3 servicios definidos: frontend, api, db
- [ ] Variables de entorno configuradas en .env
- [ ] Red personalizada para comunicación
- [ ] Volumen para persistencia de PostgreSQL
- [ ] `docker compose up` funciona
- [ ] Frontend accesible en http://localhost:3000
- [ ] API accesible en http://localhost:8080/api/items
- [ ] Frontend puede comunicarse con API
- [ ] Datos persisten después de reiniciar

---

## 🎯 Desafío Extra

1. Agrega un health check al servicio de PostgreSQL
2. Crea un archivo `docker-compose.override.yml` para desarrollo
3. Agrega un servicio de Adminer para administrar PostgreSQL

---

## 📚 Recursos

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Compose File Reference](https://docs.docker.com/compose/compose-file/)
- [PostgreSQL Docker Image](https://hub.docker.com/_/postgres)
