# Rúbrica de Evaluación - Semana 18

## Docker Fundamentals para React

---

## 📊 Distribución de Evidencias

| Tipo de Evidencia | Porcentaje | Descripción                   |
| ----------------- | ---------- | ----------------------------- |
| **Proyecto** 📦   | 100%       | Proyecto integrador funcional |

---

## 📚 Recursos de Aprendizaje (No Evaluados)

> La teoría y los ejercicios son recursos de preparación para el proyecto. Te ayudan a adquirir los conocimientos necesarios, pero **no son entregables evaluados**.

### Material de Estudio

- **Teoría**: Conceptos de Docker, Dockerfile, Docker Compose
- **Ejercicios guiados**: Práctica paso a paso para dominar Docker

### Recomendación

Completa todos los ejercicios antes de iniciar el proyecto. Te darán la base técnica necesaria para un entregable exitoso.

---

---

## 📦 Proyecto: React App Containerizada (100%)

### Funcionalidad (40%)

| Criterio                          | Puntos |
| --------------------------------- | ------ |
| Multi-stage build funcional       | 10     |
| Aplicación corre en contenedor    | 10     |
| Hot reload funciona en desarrollo | 8      |
| Orquestación de servicios         | 7      |
| Variables de entorno configuradas | 5      |
| **Total Funcionalidad**           | **40** |

### Adaptación al Dominio (35%)

| Criterio                                  | Puntos |
| ----------------------------------------- | ------ |
| Aplicación adaptada al dominio asignado   | 15     |
| Configuración Docker coherente al dominio | 10     |
| Nginx configurado para SPA                | 10     |
| **Total Adaptación**                      | **35** |

### Calidad del Código (25%)

| Criterio                        | Puntos |
| ------------------------------- | ------ |
| Imagen optimizada (< 50MB)      | 8      |
| Usa .dockerignore apropiado     | 5      |
| Aprovecha caché de capas        | 5      |
| README con instrucciones claras | 7      |
| **Total Calidad**               | **25** |

### Resumen de Pesos

| Categoría             | Porcentaje |
| --------------------- | ---------- |
| Funcionalidad         | 40%        |
| Adaptación al Dominio | 35%        |
| Calidad del Código    | 25%        |
| **Total**             | **100%**   |

---

## 📈 Escala de Calificación

| Rango  | Calificación  | Descripción                      |
| ------ | ------------- | -------------------------------- |
| 90-100 | Excelente     | Dominio completo de Docker       |
| 80-89  | Bueno         | Buen manejo con detalles menores |
| 70-79  | Satisfactorio | Cumple requisitos mínimos        |
| 60-69  | En desarrollo | Necesita refuerzo                |
| < 60   | Insuficiente  | No cumple objetivos              |

### ✅ Criterios de Aprobación

- **Mínimo 70%** en el proyecto para aprobar la semana
- Proyecto funcional y ejecutable con Docker
- Adaptación coherente al dominio asignado

---

## ✅ Checklist de Entrega

### 📚 Preparación (No evaluada)

> Completa estos pasos para prepararte para el proyecto:

- [ ] Leer material teórico de Docker
- [ ] Ejercicio 01: Primer contenedor
- [ ] Ejercicio 02: Dockerfile multi-stage
- [ ] Ejercicio 03: Docker Compose

### 📦 Proyecto (Evaluado - 100%)

- [ ] Dockerfile multi-stage funcional
- [ ] nginx.conf configurado para SPA
- [ ] docker-compose.yml completo
- [ ] .dockerignore presente
- [ ] .env.example documentado
- [ ] README con instrucciones
- [ ] Aplicación adaptada al dominio asignado
- [ ] Aplicación accesible en localhost

### Comandos que deben funcionar

```bash
# Build de imagen
docker build -t mi-app .

# Correr con docker compose
docker compose up

# Verificar contenedores
docker ps
```

---

## 🚫 Criterios de Penalización

| Penalización                      | Descuento |
| --------------------------------- | --------- |
| Entrega tardía (por día)          | -5%       |
| Dockerfile no funciona            | -15%      |
| Sin documentación                 | -10%      |
| Imagen mayor a 100MB              | -5%       |
| Contenedor con errores de runtime | -10%      |

---

## 💡 Criterios de Bonificación

| Bonificación                | Extra |
| --------------------------- | ----- |
| Health checks implementados | +5%   |
| Nginx con compresión gzip   | +3%   |
| Cache headers configurados  | +2%   |
| Multi-architecture build    | +5%   |

---

_Rúbrica Semana 18 - Docker Fundamentals para React_
