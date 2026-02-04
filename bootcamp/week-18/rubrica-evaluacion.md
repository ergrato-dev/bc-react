# Rúbrica de Evaluación - Semana 18

## Docker Fundamentals para React

---

## 📊 Distribución de Evidencias

| Tipo de Evidencia   | Porcentaje | Descripción                      |
| ------------------- | ---------- | -------------------------------- |
| **Conocimiento** 🧠 | 30%        | Comprensión de conceptos Docker  |
| **Desempeño** 💪    | 40%        | Ejercicios prácticos completados |
| **Producto** 📦     | 30%        | Proyecto integrador funcional    |

---

## 🧠 Evidencia de Conocimiento (30%)

### Evaluación Teórica

| Criterio                                   | Puntos |
| ------------------------------------------ | ------ |
| Explica qué es Docker y sus beneficios     | 5      |
| Diferencia imagen vs contenedor            | 5      |
| Comprende el ciclo de vida de contenedores | 5      |
| Conoce las instrucciones de Dockerfile     | 5      |
| Entiende el concepto de multi-stage builds | 5      |
| Comprende Docker Compose y sus usos        | 5      |
| **Total**                                  | **30** |

### Preguntas de Verificación

1. ¿Cuál es la diferencia entre una imagen y un contenedor Docker?
2. ¿Por qué usamos multi-stage builds para aplicaciones React?
3. ¿Qué ventajas ofrece Docker Compose sobre docker run?
4. ¿Cómo funciona la caché de capas en Docker?
5. ¿Por qué usamos Nginx en lugar de servir directamente con Node.js?

---

## 💪 Evidencia de Desempeño (40%)

### Ejercicio 01: Primer Contenedor (10 puntos)

| Criterio                               | Puntos |
| -------------------------------------- | ------ |
| Ejecuta contenedor Nginx correctamente | 3      |
| Mapea puertos correctamente            | 3      |
| Monta volúmenes para desarrollo        | 2      |
| Documenta comandos utilizados          | 2      |
| **Total**                              | **10** |

### Ejercicio 02: Dockerfile Multi-stage (15 puntos)

| Criterio                               | Puntos |
| -------------------------------------- | ------ |
| Dockerfile con stage de build correcto | 4      |
| Stage de producción con Nginx          | 4      |
| Imagen final menor a 50MB              | 3      |
| Usa .dockerignore apropiadamente       | 2      |
| Aprovecha caché de capas               | 2      |
| **Total**                              | **15** |

### Ejercicio 03: Docker Compose (15 puntos)

| Criterio                          | Puntos |
| --------------------------------- | ------ |
| docker-compose.yml válido         | 4      |
| Configura servicios correctamente | 4      |
| Variables de entorno funcionando  | 3      |
| Redes y volúmenes configurados    | 2      |
| Servicios se comunican entre sí   | 2      |
| **Total**                         | **15** |

---

## 📦 Evidencia de Producto (30%)

### Proyecto: React App Containerizada

| Criterio                          | Puntos |
| --------------------------------- | ------ |
| **Dockerfile**                    |        |
| Multi-stage build funcional       | 5      |
| Imagen optimizada (< 50MB)        | 3      |
| Nginx configurado para SPA        | 4      |
| **Docker Compose**                |        |
| Orquestación de servicios         | 4      |
| Variables de entorno configuradas | 3      |
| **Funcionamiento**                |        |
| Aplicación corre en contenedor    | 5      |
| Hot reload funciona en desarrollo | 3      |
| **Documentación**                 |        |
| README con instrucciones claras   | 3      |
| **Total**                         | **30** |

---

## 📈 Escala de Calificación

| Rango  | Calificación  | Descripción                      |
| ------ | ------------- | -------------------------------- |
| 90-100 | Excelente     | Dominio completo de Docker       |
| 80-89  | Bueno         | Buen manejo con detalles menores |
| 70-79  | Satisfactorio | Cumple requisitos mínimos        |
| 60-69  | En desarrollo | Necesita refuerzo                |
| < 60   | Insuficiente  | No cumple objetivos              |

---

## ✅ Checklist de Entrega

### Ejercicios

- [ ] Ejercicio 01 completado con capturas
- [ ] Ejercicio 02 con Dockerfile funcional
- [ ] Ejercicio 03 con docker-compose.yml

### Proyecto

- [ ] Dockerfile multi-stage funcional
- [ ] nginx.conf configurado para SPA
- [ ] docker-compose.yml completo
- [ ] .dockerignore presente
- [ ] .env.example documentado
- [ ] README con instrucciones
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
