# Ejercicio 04: Cobertura de Código

## 🎯 Objetivo

Configurar y analizar cobertura de código con `@vitest/coverage-v8`, identificar código no testeado y alcanzar umbrales de cobertura específicos.

## ⏱️ Duración Estimada

45 minutos

## 📋 Requisitos Previos

- Ejercicios 01, 02 y 03 completados
- Comprensión de testing con Vitest
- Familiaridad con métricas de cobertura

## 🗂️ Estructura del Ejercicio

```
ejercicio-04-cobertura/
├── README.md
├── starter/
│   ├── package.json
│   ├── vite.config.ts
│   └── src/
│       ├── utils/
│       │   ├── calculator.ts     # Funciones a testear
│       │   └── calculator.test.ts
│       ├── components/
│       │   ├── Counter.tsx       # Componente a testear
│       │   └── Counter.test.tsx
│       └── setupTests.ts
└── solution/
    └── (misma estructura con cobertura 100%)
```

## 📝 Instrucciones

### Paso 1: Configurar Coverage en Vitest

Abre `starter/vite.config.ts` y descomenta la configuración de cobertura con `@vitest/coverage-v8`.

### Paso 2: Ejecutar Reporte de Cobertura

```bash
cd starter
pnpm install
pnpm coverage
```

Analiza el reporte generado y identifica líneas no cubiertas.

### Paso 3: Completar Tests de Calculator

En `starter/src/utils/calculator.test.ts`, descomenta y completa los tests para cubrir:

1. Función `add` - casos normales y edge cases
2. Función `divide` - división normal y por cero
3. Función `factorial` - casos base y recursivos

### Paso 4: Completar Tests de Counter

En `starter/src/components/Counter.test.tsx`, descomenta tests para cubrir:

1. Renderizado inicial
2. Incrementar contador
3. Decrementar contador
4. Reset a valor inicial

### Paso 5: Alcanzar 100% de Cobertura

Ejecuta `pnpm coverage` y verifica que todas las métricas estén en 100%:

- Statements: 100%
- Branches: 100%
- Functions: 100%
- Lines: 100%

## ✅ Criterios de Éxito

- [ ] Configuración de coverage en vite.config.ts
- [ ] Todos los tests pasan
- [ ] Cobertura de statements >= 100%
- [ ] Cobertura de branches >= 100%
- [ ] Cobertura de functions >= 100%
- [ ] Cobertura de lines >= 100%

## 📊 Métricas de Cobertura

| Métrica        | Descripción                     | Meta |
| -------------- | ------------------------------- | ---- |
| **Statements** | Líneas de código ejecutadas     | 100% |
| **Branches**   | Caminos condicionales (if/else) | 100% |
| **Functions**  | Funciones llamadas              | 100% |
| **Lines**      | Líneas físicas ejecutadas       | 100% |

## 📚 Recursos

- [Vitest Coverage](https://vitest.dev/guide/coverage.html)
- [@vitest/coverage-v8](https://www.npmjs.com/package/@vitest/coverage-v8)
- [V8 Coverage](https://v8.dev/blog/javascript-code-coverage)

## 💡 Tips

- El reporte HTML se genera en `coverage/index.html`
- Las líneas rojas en el reporte indican código no cubierto
- Las ramas amarillas indican branches parcialmente cubiertos
- Usa `/* v8 ignore next */` para ignorar líneas específicas (con moderación)
