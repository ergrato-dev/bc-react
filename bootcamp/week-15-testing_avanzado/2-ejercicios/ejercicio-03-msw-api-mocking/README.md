# Ejercicio 03: MSW para Mocking de APIs

## 🎯 Objetivo

Aprender a usar Mock Service Worker (MSW) para interceptar peticiones HTTP y simular respuestas de API en tests de integración.

## ⏱️ Duración Estimada

45 minutos

## 📋 Requisitos Previos

- Ejercicio 01 y 02 completados
- Comprensión de vi.mock para módulos
- Conocimiento básico de APIs REST

## 🗂️ Estructura del Ejercicio

```
ejercicio-03-msw-api-mocking/
├── README.md
├── starter/
│   ├── package.json
│   ├── vite.config.ts
│   └── src/
│       ├── mocks/
│       │   ├── handlers.ts      # Handlers MSW
│       │   └── server.ts        # Configuración server
│       ├── components/
│       │   ├── ProductList.tsx  # Componente a testear
│       │   └── ProductList.test.tsx
│       └── setupTests.ts
└── solution/
    └── (misma estructura con soluciones)
```

## 📝 Instrucciones

### Paso 1: Configurar MSW Server

Abre `starter/src/mocks/server.ts` y descomenta el código para configurar el servidor de MSW.

### Paso 2: Crear Handlers

En `starter/src/mocks/handlers.ts`, descomenta los handlers para interceptar peticiones a `/api/products`.

### Paso 3: Setup de Tests

En `starter/src/setupTests.ts`, descomenta la configuración para iniciar/detener el servidor MSW.

### Paso 4: Escribir Tests de Integración

En `starter/src/components/ProductList.test.tsx`, descomenta cada test:

1. **Test de carga de productos**: Verificar que se renderizan productos de la API
2. **Test de error de red**: Simular fallo de red con `server.use()`
3. **Test de lista vacía**: Verificar comportamiento con array vacío

### Paso 5: Ejecutar Tests

```bash
cd starter
pnpm install
pnpm test
```

## ✅ Criterios de Éxito

- [ ] MSW configurado correctamente con server.ts
- [ ] Handlers definidos para GET /api/products
- [ ] Setup de tests inicia/detiene server
- [ ] Test de carga exitosa pasa
- [ ] Test de error de red pasa
- [ ] Test de lista vacía pasa

## 📚 Recursos

- [MSW Documentación](https://mswjs.io/)
- [MSW con Vitest](https://mswjs.io/docs/integrations/node)
- [Testing Library - Async](https://testing-library.com/docs/dom-testing-library/api-async/)

## 💡 Tips

- MSW intercepta a nivel de red, no de módulo
- Usa `server.use()` para sobrescribir handlers en tests específicos
- `server.resetHandlers()` restaura handlers originales entre tests
- MSW v2 usa nueva sintaxis con `http.get()` en lugar de `rest.get()`
