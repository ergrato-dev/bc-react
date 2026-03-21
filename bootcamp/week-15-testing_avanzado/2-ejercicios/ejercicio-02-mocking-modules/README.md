# Ejercicio 02: Mocking de Módulos

## 🎯 Objetivo

Dominar `vi.mock` y `vi.spyOn` para mockear dependencias externas.

## 📋 Descripción

En este ejercicio aprenderás a:

1. Usar `vi.mock` para mockear módulos completos
2. Usar `vi.spyOn` para espiar funciones
3. Crear implementaciones de mock personalizadas
4. Limpiar mocks entre tests

## 📁 Estructura

```
ejercicio-02-mocking-modules/
├── README.md
├── starter/
│   ├── package.json
│   ├── vite.config.ts
│   └── src/
│       ├── services/
│       │   └── api.ts
│       ├── utils/
│       │   └── storage.ts
│       ├── components/
│       │   ├── UserProfile.tsx
│       │   └── UserProfile.test.tsx
│       └── test/
│           └── setup.ts
└── solution/
```

## 🚀 Instrucciones

### Paso 1: Instalar Dependencias

```bash
cd starter
pnpm install
```

### Paso 2: Revisar los Módulos

Revisa `src/services/api.ts` y `src/utils/storage.ts`.

### Paso 3: Completar los Tests

Abre `src/components/UserProfile.test.tsx` y completa:

#### Test 1: Mock de API

```typescript
// Mockear el módulo api.ts
vi.mock('../services/api');

// En el test:
vi.mocked(fetchUser).mockResolvedValue({
  id: 1,
  name: 'Test User',
});
```

#### Test 2: spyOn de localStorage

```typescript
const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
// ...
expect(setItemSpy).toHaveBeenCalledWith('user', expect.any(String));
```

### Paso 4: Ejecutar Tests

```bash
pnpm test
```

## ✅ Criterios de Aceptación

- [ ] Mock de fetchUser funcionando
- [ ] Test de error de API
- [ ] spyOn de localStorage.setItem
- [ ] Limpieza correcta de mocks

## 💡 Tips

- `vi.mock` se "hoistea" al inicio del archivo
- Usa `vi.mocked()` para obtener tipos correctos
- `beforeEach(() => vi.clearAllMocks())` limpia historial
- `afterEach(() => vi.restoreAllMocks())` restaura originales

## 📚 Recursos

- [Vitest Mocking](https://vitest.dev/guide/mocking.html)
- [vi.mock API](https://vitest.dev/api/vi.html#vi-mock)
