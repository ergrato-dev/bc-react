# 📦 Proyecto Semana 15: Aplicación 100% Testeada

## 🎯 Objetivo

Aplicar todas las técnicas de testing avanzado aprendidas (testing de hooks, mocking, MSW, cobertura) para crear una aplicación completa con 100% de cobertura de código.

## 🏛️ Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio]

Ejemplos de dominios: Biblioteca, Farmacia, Gimnasio, Restaurante, Veterinaria, Hotel, etc.

## ⏱️ Tiempo Estimado

2.5 horas

## 📋 Descripción del Proyecto

Crearás una **aplicación de gestión de recursos** adaptada a tu dominio asignado con tests completos que cubran:

1. **Custom hooks** para lógica de negocio
2. **Componentes** con interacción de usuario
3. **Integración con API** usando MSW
4. **Cobertura de código al 100%**

## 🗂️ Estructura del Proyecto

```
3-proyecto/
├── README.md
├── starter/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── src/
│       ├── hooks/
│       │   ├── useItems.ts        # Hook para gestionar items
│       │   └── useItems.test.ts   # TODO: Tests del hook
│       ├── components/
│       │   ├── ItemList.tsx       # Lista de items
│       │   ├── ItemList.test.tsx  # TODO: Tests del componente
│       │   ├── ItemForm.tsx       # Formulario para crear items
│       │   └── ItemForm.test.tsx  # TODO: Tests del formulario
│       ├── services/
│       │   └── api.ts             # Servicio de API
│       ├── mocks/
│       │   ├── handlers.ts        # TODO: Handlers MSW
│       │   └── server.ts          # TODO: Servidor MSW
│       ├── types/
│       │   └── index.ts           # Tipos TypeScript
│       ├── App.tsx
│       └── setupTests.ts
└── solution/
    └── (estructura completa con tests al 100%)
```

## ✅ Requisitos Funcionales

### 1. Hook `useItems`

- Gestionar lista de items (CRUD)
- Estado de carga (loading)
- Manejo de errores
- Persistencia opcional en localStorage

### 2. Componente `ItemList`

- Mostrar lista de items
- Botón para eliminar cada item
- Mensaje cuando la lista está vacía
- Estado de carga

### 3. Componente `ItemForm`

- Campos para crear nuevo item
- Validación de campos requeridos
- Feedback de éxito/error
- Reset del formulario después de crear

### 4. Integración con API

- GET /api/items - Obtener lista
- POST /api/items - Crear item
- DELETE /api/items/:id - Eliminar item

## 📝 Adaptación por Dominio

| Dominio     | Item        | Campos Específicos                             |
| ----------- | ----------- | ---------------------------------------------- |
| Biblioteca  | Libro       | `title`, `author`, `isbn`, `available`         |
| Farmacia    | Medicamento | `name`, `laboratory`, `price`, `stock`         |
| Gimnasio    | Miembro     | `name`, `email`, `membershipType`, `active`    |
| Restaurante | Platillo    | `name`, `description`, `price`, `category`     |
| Veterinaria | Mascota     | `name`, `species`, `ownerName`, `age`          |
| Hotel       | Habitación  | `number`, `type`, `pricePerNight`, `available` |

## 🧪 Requisitos de Testing

### Tests del Hook (useItems.test.ts)

- [ ] Retorna lista vacía inicialmente
- [ ] Carga items desde API
- [ ] Maneja estado de carga
- [ ] Maneja errores de API
- [ ] Agrega item correctamente
- [ ] Elimina item correctamente

### Tests de ItemList (ItemList.test.tsx)

- [ ] Renderiza lista de items
- [ ] Muestra mensaje cuando está vacía
- [ ] Muestra estado de carga
- [ ] Llama onDelete al hacer click en eliminar

### Tests de ItemForm (ItemForm.test.tsx)

- [ ] Renderiza campos del formulario
- [ ] Valida campos requeridos
- [ ] Llama onSubmit con datos correctos
- [ ] Limpia formulario después de submit

### Tests de Integración con MSW

- [ ] Handlers para GET /api/items
- [ ] Handlers para POST /api/items
- [ ] Handlers para DELETE /api/items/:id
- [ ] Tests de flujo completo

## 📊 Criterios de Cobertura

| Métrica    | Mínimo Requerido |
| ---------- | ---------------- |
| Statements | 100%             |
| Branches   | 100%             |
| Functions  | 100%             |
| Lines      | 100%             |

## 🛠️ Comandos

```bash
# Instalar dependencias
pnpm install

# Ejecutar tests
pnpm test

# Ver cobertura
pnpm coverage

# Abrir reporte HTML de cobertura
# Abre coverage/index.html en el navegador
```

## 📚 Recursos

- [Testing Library - Recipes](https://testing-library.com/docs/recipes)
- [MSW - Getting Started](https://mswjs.io/docs/getting-started)
- [Vitest - Mocking](https://vitest.dev/guide/mocking.html)

## 🎯 Rúbrica de Evaluación

### Conocimiento (30%)

- Comprende las diferencias entre unit, integration y e2e tests
- Sabe cuándo usar vi.mock vs MSW
- Entiende métricas de cobertura

### Desempeño (40%)

- Implementa tests de hooks correctamente
- Usa MSW para mockear API
- Configura cobertura de código

### Producto (30%)

- Todos los tests pasan
- Cobertura >= 100% en todas las métricas
- Código limpio y bien organizado
- Adaptación correcta al dominio asignado

## 💡 Tips

1. **Empieza por los tipos** - Define bien tus interfaces en `types/index.ts`
2. **Testea de abajo hacia arriba** - Hook → Componentes → Integración
3. **Un test a la vez** - No intentes hacer todo de golpe
4. **Revisa el reporte HTML** - Identifica líneas no cubiertas
5. **Usa waitFor para async** - Evita flaky tests
