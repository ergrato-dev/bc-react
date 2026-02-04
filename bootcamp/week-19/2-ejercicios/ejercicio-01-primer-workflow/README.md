# Ejercicio 01: Primer Workflow con GitHub Actions

## 🎯 Objetivo

Crear tu primer workflow de GitHub Actions que se ejecute automáticamente al hacer push.

**Tiempo estimado**: 45 minutos

---

## 📋 Requisitos Previos

- Repositorio en GitHub (público o privado)
- Conocimientos básicos de Git
- Acceso a la pestaña "Actions" del repositorio

---

## 📝 Pasos del Ejercicio

### Paso 1: Crear Estructura de Carpetas

En tu repositorio, crea la estructura de carpetas para workflows:

```bash
mkdir -p .github/workflows
```

### Paso 2: Crear Archivo de Workflow

Crea el archivo `.github/workflows/hello.yml`:

**Abre `starter/hello.yml`** y descomenta las secciones paso a paso.

---

### Paso 3: Entender la Estructura

```yaml
# Nombre del workflow (aparece en la UI de GitHub)
name: Hello World

# Trigger: ¿cuándo se ejecuta?
on:
  push:
    branches: [main]
  workflow_dispatch: # Permite ejecución manual

# Jobs: ¿qué se ejecuta?
jobs:
  greet:
    runs-on: ubuntu-latest
    steps:
      - name: Say Hello
        run: echo "Hello, GitHub Actions!"
```

---

### Paso 4: Commit y Push

```bash
git add .github/workflows/hello.yml
git commit -m "feat: add first GitHub Actions workflow"
git push origin main
```

---

### Paso 5: Verificar en GitHub

1. Ve a tu repositorio en GitHub
2. Click en la pestaña **Actions**
3. Deberías ver tu workflow ejecutándose o completado
4. Click en el workflow para ver los logs

---

### Paso 6: Agregar Más Steps

Expande el workflow con información útil:

```yaml
jobs:
  greet:
    runs-on: ubuntu-latest
    steps:
      - name: Say Hello
        run: echo "Hello, GitHub Actions!"

      - name: Show Date
        run: date

      - name: Show Runner Info
        run: |
          echo "Runner OS: ${{ runner.os }}"
          echo "Runner Arch: ${{ runner.arch }}"

      - name: Show GitHub Context
        run: |
          echo "Repository: ${{ github.repository }}"
          echo "Branch: ${{ github.ref_name }}"
          echo "Actor: ${{ github.actor }}"
          echo "SHA: ${{ github.sha }}"
```

---

### Paso 7: Trigger Manual

1. Ve a Actions en GitHub
2. Selecciona tu workflow "Hello World"
3. Click en "Run workflow"
4. Selecciona branch y click en "Run workflow"

---

## ✅ Verificación

Tu ejercicio está completo cuando:

- [ ] El workflow aparece en la pestaña Actions
- [ ] El workflow se ejecuta exitosamente (check verde ✓)
- [ ] Puedes ver los logs de cada step
- [ ] Puedes ejecutar el workflow manualmente

---

## 🎯 Resultado Esperado

En la pestaña Actions verás:

```
✓ Hello World
  └── greet
      ├── Say Hello          ✓
      ├── Show Date          ✓
      ├── Show Runner Info   ✓
      └── Show GitHub Context ✓
```

---

## 📚 Conceptos Aprendidos

- Estructura de archivos de workflow (`.github/workflows/`)
- Sintaxis básica YAML para GitHub Actions
- Triggers: `push` y `workflow_dispatch`
- Jobs y Steps
- GitHub Context variables (`github.*`, `runner.*`)

---

## 🔗 Siguiente Ejercicio

Continúa con [ejercicio-02-build-test-workflow](../ejercicio-02-build-test-workflow/) para crear un pipeline de CI real.
