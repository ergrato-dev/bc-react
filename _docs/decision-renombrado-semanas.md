# 📁 Decisión: Renombrado de Directorios de Semanas

**Fecha**: Marzo 21, 2026  
**Tipo**: Decisión de Arquitectura de Proyecto  
**Estado**: ✅ Implementado (revisado y actualizado a snake_case)

---

## 📋 Contexto

Los directorios de las semanas del bootcamp usaban el esquema genérico `week-XX`, sin indicación del tema tratado. Por ejemplo: `week-01`, `week-07`, `week-14`.

Este esquema, aunque simple, no permitía identificar el contenido de una semana con solo ver el nombre del directorio, lo que dificultaba la navegación y el mantenimiento del repositorio.

---

## 🎯 Decisión

**Renombrar todos los directorios de semanas al esquema `week-XX-tema_principal`**, donde el tema principal se extrae del título del `README.md` de cada semana (único punto de verdad).

### Reglas aplicadas

- El tema principal se extrae **únicamente** del `README.md` raíz de la semana
- El prefijo de semana usa guiones: `week-XX-`
- Las palabras del tema se separan con **guiones bajos** (`_`), es decir, **snake_case**
- Caracteres ASCII sin tildes (ej. `useeffect`, no `useEffect`; `introduccion`, no `introducción`)
- El número de semana mantiene su formato de dos dígitos con cero (01, 02 … 20)
- Los nombres son descriptivos pero concisos

**Formato final:** `week-XX-palabra1_palabra2_palabraN`

---

## 🗂️ Mapa de Renombrado

| Directorio anterior | Directorio nuevo | Tema extraído del README |
|---|---|---|
| `week-01` | `week-01-fundamentos_typescript` | Fundamentos de TypeScript |
| `week-02` | `week-02-introduccion_react` | Introducción a React con TypeScript |
| `week-03` | `week-03-useeffect_efectos_secundarios` | useEffect y Efectos Secundarios |
| `week-04` | `week-04-renderizado_condicional_listas` | Renderizado Condicional y Listas |
| `week-05` | `week-05-composicion_context_api` | Composición de Componentes y Context API |
| `week-06` | `week-06-custom_hooks` | Custom Hooks y Proyecto Integrador |
| `week-07` | `week-07-react_router` | React Router v6 |
| `week-08` | `week-08-zustand_estado_global` | Gestión de Estado Global con Zustand |
| `week-09` | `week-09-redux_toolkit` | Redux Toolkit con TypeScript |
| `week-10` | `week-10-react_query` | React Query (TanStack Query) |
| `week-11` | `week-11-react_hook_form_zod` | Formularios con React Hook Form y Zod |
| `week-12` | `week-12-css_modules_tailwind` | CSS Modules, Styled Components y Tailwind CSS |
| `week-13` | `week-13-componentes_ui_animaciones` | Componentes UI, Animaciones y Theming |
| `week-14` | `week-14-introduccion_testing` | Introducción a Testing en React |
| `week-15` | `week-15-testing_avanzado` | Testing Avanzado |
| `week-16` | `week-16-optimizacion_renders` | Optimización de Renders |
| `week-17` | `week-17-code_splitting_performance` | Code Splitting y Performance Avanzado |
| `week-18` | `week-18-docker_fundamentals` | Docker Fundamentals para React |
| `week-19` | `week-19-cicd_docker_github_actions` | CI/CD con Docker y GitHub Actions |
| `week-20` | `week-20-proyecto_final` | Proyecto Final - Aplicación Production-Ready |

---

## 🔄 Alcance de los Cambios

### Directorios renombrados
- Los 20 directorios en `bootcamp/` fueron renombrados con `mv`.

### Archivos actualizados (referencias corregidas)
Se actualizaron todas las referencias mediante `sed` en los siguientes tipos de archivo:

| Tipo | Descripción |
|---|---|
| `*.md` | READMEs, rúbricas, glosarios, recursos, teoría, ejercicios |
| `*.json` | `package.json` de proyectos starter |
| `*.ts` / `*.tsx` | Comentarios en código de proyectos starter |
| `*.html` | Archivos `index.html` de proyectos starter |
| `*.sh` | Script `export-pdf.sh` (comentarios y valor por defecto) |

### Archivos raíz afectados

- [README.md](../README.md) — enlace "Comenzar Semana 1" y ejemplo `cd bootcamp/...`
- [README_EN.md](../README_EN.md) — mismos enlaces en versión inglés
- [export-pdf.sh](../export-pdf.sh) — valor por defecto `WEEK` y comentarios de uso
- [.github/copilot-instructions.md](../.github/copilot-instructions.md) — enlace a semana 1

---

## ✅ Verificación de Integridad

Tras el renombrado se ejecutaron las siguientes verificaciones:

1. **Sin referencias antiguas**: búsqueda con regex `week-\d{2}(?![-a-z])` → 0 resultados
2. **Sin rutas duplicadas**: verificación de nombres con más de 5 segmentos kebab → solo `package.json` internos (sin impacto en navegación)
3. **Todos los enlaces de navegación** entre semanas validados manualmente (adelante/atrás en cada README)

---

## 💡 Motivación

- **Legibilidad**: identificar el contenido de cada semana sin abrir ningún archivo
- **Orientación**: facilitar la navegación por el repositorio a estudiantes e instructores
- **Consistencia**: el nombre del directorio refleja el título del README (fuente única de verdad)
- **Mantenimiento a largo plazo**: facilita referencias externas, scripts y CI/CD

---

## 📌 Convención para Futuras Semanas

Al crear una nueva semana se debe seguir el mismo esquema:

```
bootcamp/week-XX-tema_principal/
```

Donde `tema_principal` es el título de la semana en **snake_case** (guiones bajos entre palabras), sin tildes, sin mayúsculas, extraído del `README.md` de la semana.

**Ejemplo:**
- Título: `Semana 21: Server Side Rendering con Next.js`
- Directorio: `week-21-server_side_rendering_nextjs`

**Regla mnemotécnica:**
- Guion `-` separa el número de semana del tema: `week-21-`
- Guion bajo `_` separa las palabras del tema: `server_side_rendering`
