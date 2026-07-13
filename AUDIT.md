# Auditoría bc-react — 2026-07-12

Alcance: completitud (contenido real vs. placeholders), pertinencia/relevancia, compatibilidad,
seguridad (CVEs), estándares de los repos `github.com/ergrato-dev/bc-*`, cumplimiento de
`CLAUDE.md` y actualidad del bootcamp. Repo: 20 semanas, 1428 archivos versionados, 56
`package.json`. Sin Python (100% Node/TypeScript) → política de gestor de paquetes: **pnpm**,
`npm`/`npx` prohibidos (regla global del usuario y regla explícita del propio `README.md`).

Estado: **aplicado** = corregido en este commit. **Identificado, no aplicado** = requiere
decisión/alcance dedicado, documentado abajo con justificación.

---

## 1. Seguridad — CVEs (aplicado)

`docs/politica-versiones-dependencias.md` ya documentaba una auditoría de abril 2026. Se
verificaron CVEs nuevas contra las versiones ancla desde entonces (fuente: GitHub Advisory
Database, confirmado por fetch directo de cada advisory):

| CVE | Paquete | CVSS | Rango afectado | Corregido en |
|---|---|---|---|---|
| CVE-2026-39363 | `vite` | 8.2 | `6.0.0–6.4.1` (lectura arbitraria de archivos vía WebSocket del dev server) | `6.4.2` |
| CVE-2026-39364 | `vite` | Alta | `6.0.0–6.4.1` (bypass de `server.fs.deny` vía query params) | `6.4.2` |
| CVE-2026-39365 | `vite` | Alta | `6.0.0–6.4.1` (path traversal vía `.map`) | `6.4.2` |
| CVE-2026-40181 | `react-router-dom` | 6.6 | `6.7.0–6.30.3` (open redirect vía `redirect()` con paths `//`) | `6.30.4` |

La rama `vite` 5.x (`5.4.21`) **no** está afectada — los tres CVEs de vite empiezan en `6.0.0`.

**Acción aplicada**: bump `vite` `6.4.1` → `6.4.2` en 24 `package.json`; bump `react-router-dom`
`6.30.3` → `6.30.4` en 4 `package.json`. Actualizadas las tablas de versiones/CVEs en
`docs/politica-versiones-dependencias.md` y `.github/copilot-instructions.md`.

Sin CVE nuevo confirmado en: `jsdom`, `msw`, `@reduxjs/toolkit`, `react-redux`,
`@tanstack/react-query`, `zustand`. Nota: hay un reporte privado de vulnerabilidad abierto contra
`@hookform/resolvers` (mayo 2026, detalles no públicos aún) — sin acción posible hoy, revisar en
la próxima auditoría (octubre 2026).

---

## 2. Cumplimiento pnpm (aplicado)

El propio `README.md` (línea 118) exige **pnpm exclusivamente, `❌ NO npm`** — coherente con la
regla global del usuario. Se auditaron todos los `.md` del bootcamp con
`grep -P '(?<!p)npm (install|run|ci|start|test)'` para excluir falsos positivos de `pnpm install`.

Se encontraron **14 líneas con `npm` real** (no `pnpm`), todas en contenido docente de Docker/CI:

- `week-18-docker_fundamentals/1-teoria/02-dockerfile-react.md` — 10 ocurrencias (`Dockerfile`
  básico, ejemplo "❌ MAL", stage de dependencias, tabla de instrucciones, sección de caché).
- `week-18-docker_fundamentals/1-teoria/03-docker-compose.md` — 4 ocurrencias
  (`docker-compose.yml` de desarrollo + `Dockerfile.dev`).
- `week-19-cicd_docker_github_actions/1-teoria/02-github-actions-fundamentos.md` — 1 ocurrencia
  en ejemplo de step genérico.
- `week-03-useeffect_efectos_secundarios/5-glosario/README.md` — 1 ocurrencia
  (`npm install eslint-plugin-react-hooks --save-dev`).

**Acción aplicada**: todas reescritas a `pnpm`/`corepack enable pnpm && pnpm install
--frozen-lockfile` según el patrón ya usado correctamente en la sección 6 del propio archivo
02-dockerfile-react.md (que sí era consistente). `COPY package*.json` → `COPY package.json
pnpm-lock.yaml` donde aplicaba.

Nota — no confundir con falso positivo: ningún `package.json` tiene el campo `"packageManager"`
(corepack pin), pero se verificó que **tampoco lo tiene ningún repo hermano** (`bc-tanstack`
revisado como muestra) — no es un estándar de la organización, no se reporta como hallazgo.

---

## 3. Completitud — contenido real vs. placeholders (aplicado 1, resto sin hallazgos)

Búsqueda de marcadores de placeholder/pendiente (`TODO`, `FIXME`, `lorem ipsum`, `en
construcción`, `[pendiente]`, etc.) en los 20 `README.md` y todo el material de teoría:

- **Falso alarma esperado**: los `TODO: Implementar` dentro de `3-proyecto/README.md` (semanas
  03, 15, 18) y `README-template.md` de la 19 son plantillas para que el estudiante complete —
  ese es su propósito pedagógico, no contenido faltante del bootcamp.
- **Hallazgo real**: `bootcamp/week-02-introduccion_react/README.md` marcaba **"Semana 02: 🚧 En
  construcción"** con los 6 ítems de la checklist en `⏳` (pendiente), pese a que la semana está
  100% construida (5 archivos de teoría, 5 ejercicios con starter/solution, proyecto CRUD
  funcional, recursos y glosario completos) — la única otra semana con esa sección
  (`week-01`) sí dice `✅ Completa`. Corregido a `✅ Completa` con el detalle real de contenido.
  Semanas 03–20 no tienen esta sección de estado (nada que corregir ahí).
- Sin archivos vacíos de contenido (solo 15 `.gitkeep` legítimos en carpetas de recursos vacías
  por diseño).

---

## 4. Higiene de repositorio — PDFs versionados por error (aplicado)

`export-pdf.sh` genera PDFs en carpetas `_pdf/`, y `.gitignore` las excluye explícitamente
(`*_pdf`). Sin embargo, **59 PDFs (~22 MB) de las semanas 5, 6, 7 y 8 estaban versionados** en git
desde antes de esa regla — inconsistente con el resto del repo (ninguna otra semana tiene su
`_pdf/` trackeado) y contrario a la intención documentada del propio `.gitignore`.

**Acción aplicada**: `git rm -r --cached` sobre las 4 carpetas `_pdf/`. Los archivos siguen en
disco (regenerables con `export-pdf.sh`), solo se dejaron de trackear.

---

## 5. Compatibilidad interna — versiones de Vite (aplicado parcialmente)

`docs/politica-versiones-dependencias.md` afirmaba que `vite 5.4.21` cubre "semanas 2–8, 10,
15–18" y `vite 6.4.1` cubre "semanas 9, 11, 14". Verificando contra los `package.json` reales,
la tabla **no correspondía con el código**:

- Semana 02 usa `6.x`, no `5.x` como decía la tabla.
- Semana 15 está mezclada internamente: ejercicios 01–02 usan `5.4.21`, ejercicios 03–04 y el
  proyecto usan `6.x` — inconsistencia dentro de la misma semana, sin justificación documentada.

**Acción aplicada**: corregida la tabla en `docs/politica-versiones-dependencias.md` para reflejar
la realidad (`5.4.21` → semanas 4, 6–8, 10, 11, 16, 18 y parte de la 15; `6.4.2` → semanas 2, 9,
14 y parte de la 15). **No se homogeneizó** la mezcla interna de la semana 15 a una sola versión:
ambas ramas ya están parcheadas contra CVEs conocidas, cada ejercicio es un proyecto aislado
(package.json/node_modules propio), y forzar una única versión ahí es un cambio cosmético sin
beneficio de seguridad — se documenta la inconsistencia en vez de tocar 5 `package.json` sin
razón funcional.

---

## 6. Actualidad — stack desactualizado frente al propio estándar del bootcamp (identificado, NO aplicado)

Este es el hallazgo de mayor impacto y **se deja sin aplicar deliberadamente** — ver
justificación al final de esta sección.

Comparado contra un repo hermano más reciente de la misma organización (`bc-tanstack`,
revisado vía `gh api` como muestra de "estándar actual del catálogo bc-*"), bc-react quedó
atrás en exactamente los mismos paquetes:

| Paquete | bc-react (actual) | bc-tanstack (repo hermano más nuevo) | Estado real (jul-2026) |
|---|---|---|---|
| `react` / `react-dom` | `18.3.1` | `19.1.0` | React 18 en soporte solo de seguridad desde GA de React 19 (dic-2024); React 19 es el estándar para contenido nuevo |
| `eslint` | `8.57.1` | `9.26.0` (flat config) | ESLint 8.x **EOL desde oct-2024** — ya estaba muerto cuando se fijó esta versión en abril-2026. ESLint 9 EOL ~ago-2026; ideal saltar a ESLint 10 (flat-config-only, feb-2026) |
| `@typescript-eslint/eslint-plugin` + `parser` (v6.21.0, paquetes separados) | `6.21.0` | `typescript-eslint` unificado `8.32.1` | v6 es dos majors atrás; el paquete unificado reemplazó los dos separados hace tiempo |
| `vite` | `5.4.21` / `6.4.2` | `6.3.5` (y ya existe v7/v8 estable) | Vite 8 (Rolldown) ya es GA; vale la pena decidir si se salta a 7 o se espera |
| `vitest` | `2.1.9` | — | 2 majors atrás (4.x GA, 5.x en beta) |

Además, **el propio `docs/politica-versiones-dependencias.md` lista ESLint/typescript-eslint
como "versiones canónicas del bootcamp"**, pero solo **1 de 56** `package.json` reales incluye
`eslint` como dependencia, y **no existe un solo archivo `eslint.config.js`/`.eslintrc` en todo
el repo** — el tooling de lint está documentado pero no está conectado a ningún proyecto real.

**Por qué no se aplicó automáticamente:**

1. **Alcance**: tocar 56 `package.json` + escribir configuración ESLint flat-config nueva en
   cada uno no es un fix puntual, es re-autoría de la línea base técnica de todo el bootcamp.
2. **Riesgo de contenido incorrecto sin verificación**: React 19 tiene cambios de comportamiento
   relevantes para lo que se enseña aquí (p. ej. `ref` como prop en componentes función sin
   `forwardRef`, cambios en manejo de `defaultProps`, `use()`). Migrar la versión ancla sin
   revisar los ~90 archivos de teoría uno por uno arriesga dejar contenido que describe
   comportamiento de React 18 corriendo sobre React 19 — es decir, "aplicar el fix" a ciegas
   produciría contenido confiadamente incorrecto, peor que dejarlo señalado.
3. Es del mismo tipo de trabajo que hizo `bc-tanstack` como bootcamp nuevo, no un ajuste de
   auditoría: amerita su propio proyecto con validación semana por semana (compilar, correr
   tests, revisar teoría), no un batch de sed sobre versiones.

**Recomendación**: planear una migración dedicada React 18→19 + ESLint 8→10 (flat config,
`typescript-eslint` unificado) + Vitest 2→4, semana por semana, con verificación de build/test
antes de dar por buena cada una. Este AUDIT.md deja el diagnóstico completo para arrancarla.

---

## 7. Estándares de repos `bc-*` — brecha de tooling `.github/` (identificado, NO aplicado)

Comparando `.github/` de bc-react contra repos hermanos más recientes (`bc-tanstack`,
`bc-expressjs`):

- Todos comparten `copilot-instructions.md` + workflow `close-prs.yml` — bc-react ya cumple esta
  base.
- Los repos más nuevos además tienen `.github/instructions/*.instructions.md` (convenciones por
  tipo de archivo, con `applyTo: "**/*.{ts,tsx}"`) y `.github/prompts/*.prompt.md` (plantillas
  para generar nueva semana/ejercicio/proyecto de forma consistente) — bc-react no los tiene, y
  su `copilot-instructions.md` (1175 líneas) es notablemente más largo que el de esos repos
  (~800 líneas), consistente con que ahí el contenido ya se extrajo a archivos separados y en
  bc-react no.

**Por qué no se aplicó**: fabricar 5–7 archivos de prompts/instrucciones nuevos, específicos
para el temario de bc-react (Redux Toolkit, Zustand, React Query, RHF+Zod, testing), es contenido
de autoría nueva no mecánico — el riesgo de escribir convenciones que no calzan con cómo
realmente está escrito este repo es alto sin revisión humana. Se deja como mejora recomendada,
no como fix de auditoría.

- **CLAUDE.md de repo**: bc-react no tiene uno propio (de los 9 repos `bc-*` muestreados, solo
  `bc-expressjs` lo tiene) — no es un estándar mayoritario del catálogo, no se reporta como
  hallazgo obligatorio, solo como dato.

---

## Resumen de archivos modificados en esta auditoría

- 24× `package.json` — `vite` `6.4.1` → `6.4.2`
- 4× `package.json` — `react-router-dom` `6.30.3` → `6.30.4`
- `docs/politica-versiones-dependencias.md` — versiones, tabla de CVEs, mapa real de vite por
  semana, fecha de auditoría
- `.github/copilot-instructions.md` — mismas versiones/CVEs
- `week-18-docker_fundamentals/1-teoria/02-dockerfile-react.md` — `npm` → `pnpm` (10 lugares)
- `week-18-docker_fundamentals/1-teoria/03-docker-compose.md` — `npm` → `pnpm` (4 lugares)
- `week-19-cicd_docker_github_actions/1-teoria/02-github-actions-fundamentos.md` — `npm` → `pnpm`
- `week-03-useeffect_efectos_secundarios/5-glosario/README.md` — `npm` → `pnpm`
- `week-02-introduccion_react/README.md` — estado de completitud corregido
- 4× carpetas `_pdf/` (semanas 5–8) — destrackeadas de git (59 archivos, ~22 MB)

## Pendiente de decisión (no aplicado, ver secciones 6 y 7)

- Migración React 18→19 / ESLint 8→10 / typescript-eslint unificado v8 / Vitest 2→4
- Conexión real de ESLint a los 56 proyectos (hoy documentado pero no implementado)
- Adopción de `.github/instructions/` + `.github/prompts/` como en repos hermanos recientes
