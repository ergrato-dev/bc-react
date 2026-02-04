# Rúbrica de Evaluación - Semana 19

## 📋 CI/CD con Docker y GitHub Actions

---

## 🎯 Competencias a Evaluar

### 1. Conocimiento (30%) 🧠

| Criterio                              | Excelente (100%)                                             | Bueno (80%)                  | Suficiente (70%)          | Insuficiente (<70%) |
| ------------------------------------- | ------------------------------------------------------------ | ---------------------------- | ------------------------- | ------------------- |
| Comprende conceptos de CI/CD          | Explica diferencias entre CI y CD, beneficios y casos de uso | Entiende conceptos básicos   | Conocimiento superficial  | No comprende        |
| Entiende estructura de GitHub Actions | Domina workflows, jobs, steps, triggers y contexts           | Conoce elementos principales | Conoce sintaxis básica    | No entiende         |
| Conoce estrategias de deployment      | Explica staging, production, blue-green, rolling             | Conoce staging/production    | Solo conoce deploy básico | No conoce           |

### 2. Desempeño (40%) 💪

| Criterio                          | Excelente (100%)                                  | Bueno (80%)                   | Suficiente (70%)              | Insuficiente (<70%) |
| --------------------------------- | ------------------------------------------------- | ----------------------------- | ----------------------------- | ------------------- |
| Configura workflows correctamente | Workflows funcionales con buenas prácticas        | Workflows funcionales básicos | Workflows con errores menores | No funcionan        |
| Implementa CI (build + test)      | Tests automáticos, linting, matrix builds         | Build y test funcional        | Solo build                    | No implementa       |
| Implementa CD (deploy a registry) | Push a GHCR con tags semánticos y conditions      | Push funcional                | Push manual                   | No implementa       |
| Maneja secrets y variables        | Secrets, environments, variables bien organizados | Usa secrets correctamente     | Configuración básica          | Expone credenciales |

### 3. Producto (30%) 📦

| Criterio                   | Excelente (100%)                          | Bueno (80%)        | Suficiente (70%) | Insuficiente (<70%) |
| -------------------------- | ----------------------------------------- | ------------------ | ---------------- | ------------------- |
| Pipeline CI/CD completo    | Pipeline robusto con todas las fases      | Pipeline funcional | Pipeline básico  | No funciona         |
| Documentación del pipeline | README con badges, diagrama, explicación  | README con badges  | README básico    | Sin documentación   |
| Adaptación al dominio      | Workflow adaptado y coherente con dominio | Adaptación parcial | Genérico         | Sin adaptación      |

---

## 📊 Escala de Calificación

| Rango   | Calificación | Descripción                  |
| ------- | ------------ | ---------------------------- |
| 90-100% | Excelente    | Supera las expectativas      |
| 80-89%  | Bueno        | Cumple satisfactoriamente    |
| 70-79%  | Suficiente   | Cumple requisitos mínimos    |
| < 70%   | Insuficiente | No cumple requisitos mínimos |

---

## ✅ Lista de Verificación del Proyecto

### Workflow CI (40 puntos)

- [ ] Trigger en push y pull_request (5 pts)
- [ ] Job de linting con ESLint (10 pts)
- [ ] Job de tests con Vitest (10 pts)
- [ ] Cache de dependencias (pnpm) (5 pts)
- [ ] Matrix para múltiples versiones de Node (5 pts)
- [ ] Status checks configurados (5 pts)

### Workflow CD (35 puntos)

- [ ] Build de imagen Docker multi-stage (10 pts)
- [ ] Login a GitHub Container Registry (5 pts)
- [ ] Push con tags semánticos (latest, sha, version) (10 pts)
- [ ] Condition para branch main/production (5 pts)
- [ ] Scan de vulnerabilidades (opcional) (5 pts)

### Documentación (15 puntos)

- [ ] README con badges de CI status (5 pts)
- [ ] Descripción del pipeline y fases (5 pts)
- [ ] Instrucciones para contribuidores (5 pts)

### Calidad y Buenas Prácticas (10 puntos)

- [ ] Secrets bien manejados (no hardcodeados) (3 pts)
- [ ] Workflow modular y reutilizable (3 pts)
- [ ] Nombres descriptivos para jobs y steps (2 pts)
- [ ] Comentarios explicativos en YAML (2 pts)

---

## 🏆 Puntuación Total: 100 puntos

| Componente    | Puntos  |
| ------------- | ------- |
| Workflow CI   | 40      |
| Workflow CD   | 35      |
| Documentación | 15      |
| Calidad       | 10      |
| **Total**     | **100** |

---

## 📝 Notas para el Evaluador

1. **Verificar que los workflows ejecuten correctamente** en GitHub Actions
2. **Revisar historial de Actions** para ver ejecuciones exitosas
3. **Confirmar que la imagen se publique** en GHCR
4. **Validar que secrets no estén expuestos** en logs ni código
5. **El pipeline debe ser coherente** con el dominio asignado

---

## 🔗 Referencias

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---

_Rúbrica Semana 19 - Bootcamp React con TypeScript_
