# 🐳 Proyecto Semanal: React App Containerizada

## 🎯 Objetivo

Containerizar una aplicación React completa con Docker, implementando todas las mejores prácticas aprendidas en la semana: Dockerfile multi-stage, configuración de Nginx para SPA, y Docker Compose para orquestación.

## ⏱️ Duración Estimada

2.5 horas

---

## 🏛️ Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único]

Ejemplos de dominios:

- 📖 Biblioteca (libros, préstamos)
- 💊 Farmacia (medicamentos, ventas)
- 🏋️ Gimnasio (miembros, rutinas)
- 🍽️ Restaurante (platillos, pedidos)
- 🏫 Escuela (estudiantes, cursos)

---

## 📋 Descripción del Proyecto

Debes containerizar una aplicación React de gestión adaptada a tu dominio. La aplicación ya tiene la estructura base y tú debes:

1. Crear el **Dockerfile multi-stage** optimizado
2. Configurar **Nginx** para servir la SPA correctamente
3. Crear el **docker-compose.yml** con todos los servicios
4. Configurar **variables de entorno** para diferentes ambientes
5. Documentar el proceso de deployment

---

## ✅ Requisitos Funcionales

### 1. Dockerfile Multi-stage

- [ ] Stage 1: Build con Node.js Alpine
- [ ] Stage 2: Production con Nginx Alpine
- [ ] Usar pnpm como gestor de paquetes
- [ ] Implementar `.dockerignore` apropiado
- [ ] Tamaño de imagen final < 50MB

### 2. Configuración Nginx

- [ ] Routing SPA (`try_files`)
- [ ] Compresión gzip habilitada
- [ ] Cache para assets estáticos
- [ ] Headers de seguridad básicos

### 3. Docker Compose

- [ ] Servicio frontend (React + Nginx)
- [ ] Servicio API mock (Node.js)
- [ ] Servicio de base de datos (PostgreSQL)
- [ ] Red personalizada para comunicación
- [ ] Volumen para persistencia de datos

### 4. Variables de Entorno

- [ ] Archivo `.env.example` documentado
- [ ] Variables para puertos configurables
- [ ] Variables para credenciales de DB

### 5. Documentación

- [ ] README con instrucciones de uso
- [ ] Comandos para desarrollo y producción
- [ ] Troubleshooting común

---

## 🗂️ Estructura del Proyecto

```
3-proyecto/
├── README.md               # Este archivo
├── starter/                # Código inicial
│   ├── frontend/           # Aplicación React
│   │   ├── src/
│   │   ├── package.json
│   │   ├── Dockerfile      # TODO: Completar
│   │   └── nginx.conf      # TODO: Completar
│   ├── api/                # API mock
│   │   ├── server.js
│   │   └── Dockerfile
│   ├── docker-compose.yml  # TODO: Completar
│   └── .env.example
└── solution/               # Solución completa
```

---

## 🚀 Instrucciones de Entrega

### 1. Preparación

```bash
cd starter
cp .env.example .env
```

### 2. Completar Archivos

- `frontend/Dockerfile` - Implementar multi-stage build
- `frontend/nginx.conf` - Configurar para SPA
- `docker-compose.yml` - Orquestar servicios

### 3. Probar Localmente

```bash
docker compose up --build
```

### 4. Verificar

- Frontend: http://localhost:3000
- API: http://localhost:8080/api/items
- Probar navegación SPA (refresh en rutas)

### 5. Documentar

Agregar al README:

- Descripción de tu dominio
- Capturas de pantalla
- Comandos utilizados

---

## 📊 Criterios de Evaluación

| Criterio                         | Puntos  |
| -------------------------------- | ------- |
| Dockerfile multi-stage funcional | 25      |
| nginx.conf configurado para SPA  | 20      |
| docker-compose.yml completo      | 25      |
| Variables de entorno             | 10      |
| Documentación                    | 10      |
| Aplicación adaptada al dominio   | 10      |
| **Total**                        | **100** |

---

## 💡 Tips

1. **Revisa los ejercicios** - Tienen todo lo que necesitas
2. **Prueba incrementalmente** - No hagas todo de una vez
3. **Lee los logs** - `docker compose logs -f` es tu amigo
4. **Verifica tamaños** - `docker images` para confirmar optimización
5. **Documenta problemas** - Si algo falla, anota cómo lo resolviste

---

## 🔗 Recursos

- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Docker Compose Reference](https://docs.docker.com/compose/compose-file/)

---

## ⚠️ Errores Comunes

1. **404 al refrescar**: Falta `try_files` en nginx.conf
2. **Imagen muy grande**: Olvidaste multi-stage o .dockerignore
3. **API no conecta**: Verificar red en docker-compose
4. **Build falla**: Verificar que pnpm-lock.yaml existe

---

¡Buena suerte! 🚀
