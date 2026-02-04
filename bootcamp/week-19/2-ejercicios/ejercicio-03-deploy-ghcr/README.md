# Ejercicio 03: Deploy a GitHub Container Registry

## 🎯 Objetivo

Crear un workflow de CD que construya una imagen Docker y la publique en GitHub Container Registry (GHCR).

**Tiempo estimado**: 1 hora 30 minutos

---

## 📋 Requisitos Previos

- Ejercicios 01 y 02 completados
- Dockerfile multi-stage funcional (de semana 18)
- Repositorio en GitHub con permisos de packages

---

## 📝 Pasos del Ejercicio

### Paso 1: Verificar Dockerfile

Asegúrate de tener un Dockerfile multi-stage:

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Stage 2: Production
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

### Paso 2: Crear Workflow de CD

Crea `.github/workflows/cd.yml`:

**Abre `starter/cd.yml`** y descomenta las secciones paso a paso.

---

### Paso 3: Configurar Permisos

El workflow necesita permisos para escribir en GHCR:

```yaml
permissions:
  contents: read
  packages: write
```

---

### Paso 4: Login a GHCR

```yaml
- name: Log in to Container Registry
  uses: docker/login-action@v3
  with:
    registry: ghcr.io
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```

---

### Paso 5: Generar Tags Automáticos

```yaml
- name: Extract metadata
  id: meta
  uses: docker/metadata-action@v5
  with:
    images: ghcr.io/${{ github.repository }}
    tags: |
      type=ref,event=branch
      type=sha,prefix=sha-
      type=raw,value=latest,enable=${{ github.ref == 'refs/heads/main' }}
```

---

### Paso 6: Build y Push

```yaml
- name: Build and push
  uses: docker/build-push-action@v5
  with:
    context: .
    push: true
    tags: ${{ steps.meta.outputs.tags }}
    labels: ${{ steps.meta.outputs.labels }}
    cache-from: type=gha
    cache-to: type=gha,mode=max
```

---

### Paso 7: Commit y Verificar

```bash
git add .github/workflows/cd.yml
git commit -m "feat: add CD workflow for Docker image publishing"
git push origin main
```

---

### Paso 8: Verificar en GitHub Packages

1. Ve a tu repositorio en GitHub
2. Click en "Packages" (panel derecho)
3. Deberías ver tu imagen publicada
4. Verifica los tags: `latest`, `main`, `sha-xxxxx`

---

### Paso 9: Probar la Imagen

```bash
# Pull de la imagen
docker pull ghcr.io/TU-USUARIO/TU-REPO:latest

# Ejecutar
docker run -p 3000:80 ghcr.io/TU-USUARIO/TU-REPO:latest

# Abrir http://localhost:3000
```

---

## ✅ Verificación

Tu ejercicio está completo cuando:

- [ ] Workflow se ejecuta en push a main
- [ ] Imagen se publica en GHCR
- [ ] Tags correctos: latest, main, sha-xxx
- [ ] Puedes hacer pull de la imagen
- [ ] La imagen funciona localmente

---

## 🎯 Resultado Esperado

En GitHub Actions:

```
✓ CD - Build and Push
  └── 🐳 build-and-push
      ├── Checkout repository       ✓
      ├── Set up Docker Buildx      ✓
      ├── Log in to Registry        ✓
      ├── Extract metadata          ✓
      └── Build and push           ✓
```

En GitHub Packages:

```
ghcr.io/usuario/repo
├── latest
├── main
└── sha-abc1234
```

---

## 📊 Agregar Badge de Package

```markdown
![Docker Image](https://ghcr.io/OWNER/REPO/badge)
```

---

## 🔒 Notas de Seguridad

- `GITHUB_TOKEN` se genera automáticamente
- No necesitas crear secrets adicionales
- La imagen hereda permisos del repositorio (pública/privada)

---

## 📚 Conceptos Aprendidos

- Autenticación con GHCR usando GITHUB_TOKEN
- docker/metadata-action para tags automáticos
- docker/build-push-action para build y push
- Cache de Docker layers con GitHub Actions cache

---

## 🔗 Siguiente

Con estos ejercicios completados, ve al [Proyecto Semanal](../../3-proyecto/) para crear un pipeline CI/CD completo.
