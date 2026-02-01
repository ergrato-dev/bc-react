# Ejercicio 02: Slots Pattern

## 🎯 Objetivo

Implementar el patrón de slots para crear componentes con múltiples áreas de contenido flexible y tipadas.

## 📚 Conceptos Clave

- Patrón Slots vs children único
- Props tipadas para cada slot
- Renderizado condicional de slots
- Composición avanzada con múltiples áreas

## ⏱️ Duración Estimada

50 minutos

## 📋 Instrucciones

### Paso 1: Modal con Slots

Crearás un componente `Modal` con slots para header, body y footer.

**Abre `starter/Modal.tsx`** y descomenta las secciones correspondientes.

```typescript
// QUÉ: Interface que define múltiples slots tipados
// PARA: Estructurar el modal con áreas predefinidas
// IMPACTO: API clara y predecible para el consumidor
interface ModalSlots {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode; // slot principal (body)
}
```

### Paso 2: Layout con Slots

Implementarás un componente `PageLayout` con slots para sidebar, header y contenido principal.

**Abre `starter/PageLayout.tsx`** y descomenta las secciones correspondientes.

```typescript
// QUÉ: Slots para layout de página completa
// PARA: Estructura consistente de página con áreas flexibles
// IMPACTO: Layouts predecibles sin sacrificar flexibilidad
interface PageLayoutSlots {
  header?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode; // contenido principal
  footer?: ReactNode;
}
```

### Paso 3: Card Avanzado con Slots

Crearás un `AdvancedCard` con slots para imagen, acciones y badges.

**Abre `starter/AdvancedCard.tsx`** y descomenta las secciones correspondientes.

```typescript
// QUÉ: Card con múltiples áreas de contenido
// PARA: Tarjetas ricas en contenido manteniendo flexibilidad
// IMPACTO: Componente versátil para diferentes casos de uso
interface AdvancedCardSlots {
  image?: ReactNode;
  badge?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  title: string;
}
```

### Paso 4: App de Demostración

Integra todos los componentes con slots en una aplicación completa.

**Abre `starter/App.tsx`** y descomenta las secciones para ver todo en acción.

## ✅ Criterios de Evaluación

| Criterio                                 | Puntos |
| ---------------------------------------- | ------ |
| Modal con slots correctamente tipados    | 6      |
| PageLayout funcional con todos los slots | 6      |
| AdvancedCard con slots flexibles         | 5      |
| Código limpio y bien documentado         | 3      |
| **Total**                                | **20** |

## 📂 Estructura del Ejercicio

```
ejercicio-02-slots-pattern/
├── README.md
├── starter/
│   ├── Modal.tsx
│   ├── PageLayout.tsx
│   ├── AdvancedCard.tsx
│   └── App.tsx
└── solution/
    ├── Modal.tsx
    ├── PageLayout.tsx
    ├── AdvancedCard.tsx
    └── App.tsx
```

## 🔗 Recursos

- [React Patterns - Slots](https://www.patterns.dev/react/slots-pattern)
- [Kent C. Dodds - Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks)
