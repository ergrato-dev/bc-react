# Ejercicio 02: Workflow de CI (Build y Test)

## 🎯 Objetivo

Crear un workflow de Integración Continua que ejecute linting, tests y build para una aplicación React.

**Tiempo estimado**: 1 hora 15 minutos

---

## 📋 Requisitos Previos

- Ejercicio 01 completado
- Proyecto React con Vite + TypeScript
- ESLint configurado
- Tests con Vitest

---

## 📝 Pasos del Ejercicio

### Paso 1: Preparar el Proyecto

Asegúrate de tener estos scripts en `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx",
    "test": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

---

### Paso 2: Crear Workflow de CI

Crea `.github/workflows/ci.yml`:

**Abre `starter/ci.yml`** y descomenta las secciones paso a paso.

---

### Paso 3: Estructura del Pipeline

```
┌─────────────────────────────────────────────┐
│            CI Pipeline                       │
├─────────────────────────────────────────────┤
│                                             │
│   ┌─────────┐    ┌─────────┐               │
│   │  lint   │    │  test   │  (paralelo)   │
│   └────┬────┘    └────┬────┘               │
│        │              │                     │
│        └──────┬───────┘                     │
│               │                             │
│        ┌──────┴──────┐                     │
│        │    build    │  (needs: lint, test)│
│        └─────────────┘                     │
│                                             │
└─────────────────────────────────────────────┘
```

---

### Paso 4: Job de Linting

```yaml
jobs:
  lint:
    name: 🔍 Lint
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 9

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run ESLint
        run: pnpm lint
```

---

### Paso 5: Job de Tests

```yaml
test:
  name: 🧪 Test
  runs-on: ubuntu-latest

  steps:
    - uses: actions/checkout@v4

    - uses: pnpm/action-setup@v3
      with:
        version: 9

    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'pnpm'

    - run: pnpm install --frozen-lockfile

    - name: Run tests with coverage
      run: pnpm test:coverage

    - name: Upload coverage artifact
      uses: actions/upload-artifact@v4
      with:
        name: coverage-report
        path: coverage/
        retention-days: 7
```

---

### Paso 6: Job de Build

```yaml
build:
  name: 🏗️ Build
  runs-on: ubuntu-latest
  needs: [lint, test] # Espera a que pasen lint y test

  steps:
    - uses: actions/checkout@v4

    - uses: pnpm/action-setup@v3
      with:
        version: 9

    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'pnpm'

    - run: pnpm install --frozen-lockfile

    - name: Build application
      run: pnpm build

    - name: Upload build artifact
      uses: actions/upload-artifact@v4
      with:
        name: dist
        path: dist/
        retention-days: 7
```

---

### Paso 7: Commit y Verificar

```bash
git add .github/workflows/ci.yml
git commit -m "feat: add CI workflow with lint, test, and build"
git push origin main
```

---

### Paso 8: Crear Pull Request (Opcional)

1. Crea una branch: `git checkout -b feature/test-ci`
2. Haz un cambio menor
3. Push: `git push origin feature/test-ci`
4. Crea PR en GitHub
5. Verifica que CI se ejecute en el PR

---

## ✅ Verificación

Tu ejercicio está completo cuando:

- [ ] Workflow se ejecuta en push a main
- [ ] Workflow se ejecuta en pull requests
- [ ] Jobs lint y test corren en paralelo
- [ ] Job build espera a lint y test
- [ ] Artifacts de coverage y dist se guardan
- [ ] Badge de CI muestra estado verde ✓

---

## 🎯 Resultado Esperado

```
✓ CI Pipeline
  ├── 🔍 lint          ✓ (2m 15s)
  ├── 🧪 test          ✓ (1m 45s)
  └── 🏗️ build         ✓ (1m 30s) [needs: lint, test]
```

---

## 📊 Agregar Badge al README

Añade esto a tu README.md:

```markdown
![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)
```

---

## 📚 Conceptos Aprendidos

- Jobs paralelos vs secuenciales (needs)
- Setup de pnpm con cache
- Artifacts para compartir archivos
- Triggers en push y pull_request

---

## 🔗 Siguiente Ejercicio

Continúa con [ejercicio-03-deploy-ghcr](../ejercicio-03-deploy-ghcr/) para publicar imágenes Docker.
