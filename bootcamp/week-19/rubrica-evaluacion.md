# Rúbrica de Evaluación - Semana 19

## 📋 CI/CD con Docker y GitHub Actions

---

## 📚 Recursos de Aprendizaje (No Evaluados)

La teoría y los ejercicios son **preparación** para el proyecto. No son entregables evaluados, pero son fundamentales para adquirir las competencias necesarias:

| Recurso                            | Propósito                                       |
| ---------------------------------- | ----------------------------------------------- |
| `01-introduccion-cicd.md`          | Comprender conceptos de CI/CD y pipelines       |
| `02-github-actions-fundamentos.md` | Dominar workflows, jobs, steps y triggers       |
| `03-docker-registry-deploy.md`     | Aprender sobre GHCR y estrategias de deployment |
| `ejercicio-01-primer-workflow`     | Practicar creación de workflows básicos         |
| `ejercicio-02-build-test-workflow` | Practicar CI con build y tests automatizados    |
| `ejercicio-03-deploy-ghcr`         | Practicar CD con push a Container Registry      |

---

## 🎯 Proyecto (100%) 📦

### Distribución de Puntaje

| Componente            | Peso |
| --------------------- | ---- |
| Funcionalidad         | 40%  |
| Adaptación al Dominio | 35%  |
| Calidad del Código    | 25%  |
| **Total**             | 100% |

### Criterios de Evaluación

#### Funcionalidad (40%)

| Criterio              | Excelente (100%)                                  | Bueno (80%)                  | Suficiente (70%)         | Insuficiente (<70%) |
| --------------------- | ------------------------------------------------- | ---------------------------- | ------------------------ | ------------------- |
| Pipeline CI funcional | Tests automáticos, linting, matrix builds         | Build y test funcional       | Solo build               | No funciona         |
| Pipeline CD funcional | Push a GHCR con tags semánticos y conditions      | Push funcional               | Push con errores menores | No funciona         |
| Triggers y conditions | Triggers bien configurados para PR y branches     | Triggers básicos funcionales | Configuración mínima     | No configurados     |
| Manejo de secrets     | Secrets, environments, variables bien organizados | Usa secrets correctamente    | Configuración básica     | Expone credenciales |

#### Adaptación al Dominio (35%)

| Criterio                      | Excelente (100%)                                    | Bueno (80%)                   | Suficiente (70%)       | Insuficiente (<70%) |
| ----------------------------- | --------------------------------------------------- | ----------------------------- | ---------------------- | ------------------- |
| Coherencia con dominio        | Pipeline completamente adaptado al dominio asignado | Adaptación en elementos clave | Adaptación superficial | Sin adaptación      |
| Documentación contextualizada | README describe el pipeline en contexto del dominio | Documentación parcial         | Documentación genérica | Sin documentación   |
| Originalidad                  | Implementación única y creativa para el dominio     | Implementación diferenciada   | Implementación básica  | Copia de otros      |

#### Calidad del Código (25%)

| Criterio                    | Excelente (100%)                        | Bueno (80%)              | Suficiente (70%)   | Insuficiente (<70%) |
| --------------------------- | --------------------------------------- | ------------------------ | ------------------ | ------------------- |
| Estructura del workflow     | Modular, reutilizable, bien organizado  | Estructura clara         | Estructura básica  | Desorganizado       |
| Nomenclatura                | Nombres descriptivos para jobs y steps  | Nombres claros           | Nombres aceptables | Nombres confusos    |
| Comentarios y documentación | Comentarios explicativos útiles en YAML | Comentarios básicos      | Pocos comentarios  | Sin comentarios     |
| Buenas prácticas            | Cache, matrix, artifacts bien usados    | Algunas buenas prácticas | Prácticas mínimas  | Malas prácticas     |

---

## 📊 Escala de Calificación

| Rango   | Calificación | Descripción                  |
| ------- | ------------ | ---------------------------- |
| 90-100% | Excelente    | Supera las expectativas      |
| 80-89%  | Bueno        | Cumple satisfactoriamente    |
| 70-79%  | Suficiente   | Cumple requisitos mínimos    |
| < 70%   | Insuficiente | No cumple requisitos mínimos |

### ✅ Criterios de Aprobación

- **Mínimo 70%** en el proyecto para aprobar la semana
- Proyecto funcional con pipeline ejecutándose en GitHub Actions
- Imagen publicada correctamente en GHCR
- Implementación coherente con el dominio asignado

---

## ✅ Lista de Verificación del Proyecto

### Funcionalidad (40 puntos)

- [ ] Trigger en push y pull_request (5 pts)
- [ ] Job de linting con ESLint (8 pts)
- [ ] Job de tests con Vitest (8 pts)
- [ ] Build de imagen Docker multi-stage (8 pts)
- [ ] Login y push a GitHub Container Registry (6 pts)
- [ ] Tags semánticos (latest, sha, version) (5 pts)

### Adaptación al Dominio (35 puntos)

- [ ] Pipeline adaptado al contexto del dominio (15 pts)
- [ ] README contextualizado con el dominio (10 pts)
- [ ] Implementación original y diferenciada (10 pts)

### Calidad del Código (25 puntos)

- [ ] Secrets bien manejados (no hardcodeados) (7 pts)
- [ ] Workflow modular y reutilizable (6 pts)
- [ ] Cache de dependencias configurado (4 pts)
- [ ] Nombres descriptivos para jobs y steps (4 pts)
- [ ] Comentarios explicativos en YAML (4 pts)

---

## 🏆 Puntuación Total: 100 puntos

| Componente            | Puntos  |
| --------------------- | ------- |
| Funcionalidad         | 40      |
| Adaptación al Dominio | 35      |
| Calidad del Código    | 25      |
| **Total**             | **100** |

---

## � Formato de Entrega

### Entregable Único: Proyecto

```
Repositorio GitHub con:
├── .github/
│   └── workflows/
│       ├── ci.yml          # Workflow de integración continua
│       └── cd.yml          # Workflow de deployment continuo
├── Dockerfile              # Dockerfile multi-stage (semana 18)
├── README.md               # Con badges de CI y documentación
└── src/                    # Código de la aplicación del dominio
```

### Requisitos de Entrega

1. **Repositorio público** en GitHub con workflows funcionales
2. **Mínimo 3 ejecuciones exitosas** del pipeline CI/CD
3. **Imagen publicada** en GitHub Container Registry
4. **README** con badges de estado y documentación del pipeline

---

## 📝 Notas para el Evaluador

1. **Verificar que los workflows ejecuten correctamente** en GitHub Actions
2. **Revisar historial de Actions** para ver ejecuciones exitosas
3. **Confirmar que la imagen se publique** en GHCR
4. **Validar que secrets no estén expuestos** en logs ni código
5. **El pipeline debe ser coherente** con el dominio asignado
6. **Verificar originalidad** comparando con entregas de otros aprendices

---

## 🔗 Referencias

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---

_Rúbrica Semana 19 - Bootcamp React con TypeScript_
