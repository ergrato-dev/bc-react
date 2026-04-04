# 🔐 Política de Versiones de Dependencias

## Regla de Oro: Versiones Exactas (Pinning)

> **PROHIBIDO** usar `^` (caret), `~` (tilde) o `>=` en cualquier `package.json` del bootcamp.

### ❌ Incorrecto

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "vite": "~6.0.0",
    "typescript": ">=5.0.0"
  }
}
```

### ✅ Correcto

```json
{
  "dependencies": {
    "react": "18.3.1",
    "vite": "6.4.1",
    "typescript": "5.8.3"
  }
}
```

---

## ¿Por qué versiones exactas?

| Operador | Permite actualizar | Riesgo |
|---|---|---|
| `^1.2.3` | `1.x.x` (minor + patch) | **ALTO** — puede incluir breaking changes o CVEs |
| `~1.2.3` | `1.2.x` (solo patch) | **MEDIO** — ambiguo en builds distintos |
| `>=1.2.3` | cualquier versión superior | **CRÍTICO** — completamente abierto |
| `1.2.3` | ninguna | **SEGURO** — reproducible y auditable |

Los rangos de versión permiten que un `pnpm install` realizado hoy descargue un paquete diferente al de mañana. Esto hace que:
- Los CVEs se introduzcan silenciosamente sin que nadie lo detecte
- Los builds dejen de ser reproducibles entre máquinas o en CI/CD
- Sea imposible saber exactamente qué versión causó un bug o vulnerabilidad

---

## CVEs mitigados en esta auditoría (Abril 2026)

| CVE | Paquete afectado | CVSS | Descripción | Versión segura |
|---|---|---|---|---|
| CVE-2024-23331 | `vite < 5.0.12` | 7.5 | Bypass de `server.fs.deny` vía URL encoding | `5.4.21` |
| CVE-2024-31207 | `vite < 5.2.9` | 5.3 | Bypass de restricciones de sistema de archivos | `5.4.21` |
| CVE-2024-45811 | `vite < 5.4.6` | 6.5 | DNS rebinding — ejecución remota de código vía dev server | `5.4.21` |
| CVE-2024-45812 | `vite < 5.4.6` | 6.5 | Ejecución de código arbitrario vía WebSocket | `5.4.21` |
| CVE-2025-30208 | `vite < 5.4.18`, `vite 6.x < 6.2.3` | 5.3 | Bypass de `server.fs.deny` vía `?inline&direct` | `5.4.21` / `6.4.1` |
| CVE-2025-31125 | `vite 6.x < 6.2.4` | — | Bypass de restricciones de archivos vía URL | `6.4.1` |
| CVE-2024-21488 | `jsdom < 24.0.0` | 6.1 | XSS vía SVG embebido en contenido HTML | `29.0.1` |

---

## Versiones canónicas del bootcamp (Abril 2026)

Todos los `package.json` del bootcamp deben usar exclusivamente estas versiones:

### Runtime

| Paquete | Versión |
|---|---|
| `react` | `18.3.1` |
| `react-dom` | `18.3.1` |
| `react-router-dom` | `6.30.3` |
| `zustand` | `4.5.7` |
| `@reduxjs/toolkit` | `2.11.2` |
| `react-redux` | `9.2.0` |
| `@tanstack/react-query` | `5.96.2` |
| `@tanstack/react-query-devtools` | `5.96.2` |
| `react-hook-form` | `7.72.1` |
| `@hookform/resolvers` | `3.10.0` |
| `zod` | `3.25.76` |

### Build / Tooling

| Paquete | Versión | Nota |
|---|---|---|
| `vite` | `5.4.21` | Proyectos semanas 2–8, 10, 15–18 |
| `vite` | `6.4.1` | Proyectos semanas 9, 11, 14 |
| `@vitejs/plugin-react` | `4.7.0` | — |
| `@vitejs/plugin-react-swc` | `3.11.0` | — |
| `typescript` | `5.8.3` | — |
| `tsx` | `4.21.0` | — |

### Testing

| Paquete | Versión |
|---|---|
| `vitest` | `2.1.9` |
| `@vitest/coverage-v8` | `2.1.9` |
| `@testing-library/react` | `16.3.2` |
| `@testing-library/jest-dom` | `6.9.1` |
| `@testing-library/user-event` | `14.6.1` |
| `msw` | `2.12.14` |
| `jsdom` | `29.0.1` |

### Tipos y Linting

| Paquete | Versión |
|---|---|
| `@types/react` | `18.3.28` |
| `@types/react-dom` | `18.3.7` |
| `eslint` | `8.57.1` |
| `eslint-plugin-react-hooks` | `4.6.2` |
| `eslint-plugin-react-refresh` | `0.5.2` |
| `@typescript-eslint/eslint-plugin` | `6.21.0` |
| `@typescript-eslint/parser` | `6.21.0` |

---

## Procedimiento de actualización de dependencias

Cuando sea necesario actualizar una dependencia:

1. **Revisar CVEs** con `pnpm audit`
2. **Revisar el changelog** del paquete antes de cambiar la versión
3. **Comprobar breaking changes** en la nueva versión
4. **Actualizar manualmente** la versión exacta en cada `package.json` afectado
5. **Instalar y verificar** con `pnpm install` y ejecución de tests
6. **Hacer commit** con formato:

   ```
   chore(deps): bump <paquete> X.Y.Z → A.B.C

   For: mitigar CVE-XXXX-XXXXX / actualización de seguridad
   Impact: todos los ejercicios de semana-XX utilizan la nueva versión
   ```

7. **Actualizar** la tabla de versiones canónicas en este documento

---

## Herramienta de verificación

Para verificar que no hay rangos de versión en el proyecto:

```bash
# Debe retornar 0
grep -rn '"[^"]*":\s*"[~^]' bootcamp --include="package.json" | wc -l
```

Si retorna > 0, se violó la regla de oro y debe corregirse antes de hacer commit.

---

_Última auditoría: Abril 2026_
_Próxima revisión recomendada: Octubre 2026_
