# Ejercicio 03: Compound Components

## 🎯 Objetivo

Implementar el patrón Compound Components para crear APIs de componentes declarativas y flexibles utilizando Context interno.

## 📚 Conceptos Clave

- Patrón Compound Components
- Context interno (no exportado)
- Sub-componentes adjuntos al componente principal
- Estado compartido implícito

## ⏱️ Duración Estimada

60 minutos

## 📋 Instrucciones

### Paso 1: Accordion Compound Component

Crearás un componente `Accordion` con sub-componentes `Item`, `Trigger` y `Content`.

**Abre `starter/Accordion.tsx`** y descomenta las secciones correspondientes.

```typescript
// QUÉ: Context interno para compartir estado del accordion
// PARA: Comunicar estado entre subcomponentes sin prop drilling
// IMPACTO: API limpia y declarativa para el usuario
interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}
```

### Paso 2: Tabs Compound Component

Implementarás un componente `Tabs` con sub-componentes `List`, `Tab` y `Panel`.

**Abre `starter/Tabs.tsx`** y descomenta las secciones correspondientes.

```typescript
// QUÉ: Context para sistema de tabs
// PARA: Coordinar estado activo entre Tab y Panel
// IMPACTO: Tabs sincronizadas automáticamente
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}
```

### Paso 3: Select Compound Component

Crearás un componente `Select` con sub-componentes `Trigger`, `Content` y `Option`.

**Abre `starter/Select.tsx`** y descomenta las secciones correspondientes.

```typescript
// QUÉ: Context para select/dropdown personalizado
// PARA: Estado de apertura y selección compartido
// IMPACTO: Select flexible sin dependencias externas
interface SelectContextValue {
  isOpen: boolean;
  toggle: () => void;
  value: string;
  onChange: (value: string) => void;
}
```

### Paso 4: App de Demostración

Integra todos los compound components en una aplicación.

**Abre `starter/App.tsx`** y descomenta las secciones.

## ✅ Criterios de Evaluación

| Criterio                                | Puntos |
| --------------------------------------- | ------ |
| Accordion con Context interno funcional | 8      |
| Tabs con sincronización correcta        | 7      |
| Select con estado compartido            | 7      |
| Código bien tipado y documentado        | 3      |
| **Total**                               | **25** |

## 📂 Estructura del Ejercicio

```
ejercicio-03-compound-components/
├── README.md
├── starter/
│   ├── Accordion.tsx
│   ├── Tabs.tsx
│   ├── Select.tsx
│   └── App.tsx
└── solution/
    ├── Accordion.tsx
    ├── Tabs.tsx
    ├── Select.tsx
    └── App.tsx
```

## 🔗 Recursos

- [Kent C. Dodds - Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks)
- [React Patterns - Compound Components](https://www.patterns.dev/react/compound-pattern)
