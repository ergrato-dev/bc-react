# 📦 Proyecto Semana 13: Mini Design System

## 🎯 Objetivo

Construir un **Mini Design System** funcional que integre todos los conceptos de la semana: componentes headless, animaciones, theming y design tokens.

## ⏱️ Duración

2.5 horas

## 📋 Descripción

Crearás un design system con componentes reutilizables, sistema de temas y documentación básica. El sistema será la base para el proyecto final del bootcamp.

## 🏛️ Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio]

Adapta los ejemplos y textos de prueba a tu dominio específico.

---

## 🛠️ Requisitos Técnicos

### Dependencias

```bash
pnpm add @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tooltip
pnpm add framer-motion
pnpm add class-variance-authority clsx tailwind-merge
pnpm add lucide-react
```

### Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                    # Componentes primitivos
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Dialog.tsx
│   │   └── index.ts
│   ├── animated/              # Componentes con animaciones
│   │   ├── FadeIn.tsx
│   │   ├── AnimatedList.tsx
│   │   └── index.ts
│   └── theme/                 # Sistema de temas
│       ├── ThemeProvider.tsx
│       ├── ThemeToggle.tsx
│       └── index.ts
├── lib/
│   └── utils.ts               # Función cn() y helpers
├── styles/
│   └── globals.css            # Variables CSS
└── App.tsx                    # Demo del design system
```

---

## ✅ Requisitos Funcionales

### 1. Componentes UI Primitivos (45 min)

Implementa al menos **5 componentes** usando CVA:

| Componente | Variantes Requeridas                                              |
| ---------- | ----------------------------------------------------------------- |
| `Button`   | variant: default, destructive, outline, ghost \| size: sm, md, lg |
| `Input`    | size: sm, md, lg \| error: boolean                                |
| `Badge`    | variant: default, success, warning, error                         |
| `Card`     | variant: default, elevated, outline                               |
| `Dialog`   | Basado en Radix Dialog con animaciones                            |

### 2. Sistema de Theming (30 min)

- [ ] `ThemeProvider` con soporte para light/dark/system
- [ ] Persistencia en localStorage
- [ ] `ThemeToggle` con animación de icono
- [ ] CSS variables para colores principales
- [ ] Transición suave al cambiar tema

### 3. Componentes Animados (30 min)

- [ ] `FadeIn` con direcciones y delays configurables
- [ ] `AnimatedCard` con hover/tap effects
- [ ] `AnimatedList` con stagger animation
- [ ] `AnimatePresence` para transiciones de entrada/salida

### 4. Demo/Showcase (30 min)

Crea una página demo que muestre:

- Todos los componentes con sus variantes
- Theme switcher funcionando
- Ejemplos de animaciones
- Textos y ejemplos adaptados a tu dominio

### 5. Documentación Básica (15 min)

- README con instrucciones de uso
- Comentarios JSDoc en componentes principales
- Ejemplos de código en el README

---

## 💡 Ejemplos de Adaptación por Dominio

### Biblioteca 📖

- Cards de libros con Badge de disponibilidad
- Dialog para reservar libro
- Lista animada de libros recientes

### Farmacia 💊

- Cards de medicamentos con Badge de stock
- Dialog para agregar al carrito
- Lista animada de productos

### Gimnasio 🏋️

- Cards de miembros con Badge de membresía
- Dialog para registrar asistencia
- Lista animada de rutinas

### Restaurante 🍽️

- Cards de platillos con Badge de categoría
- Dialog para agregar a pedido
- Lista animada del menú

---

## 🎨 Paleta de Colores Sugerida

```css
/* globals.css */
:root {
  /* Colores base */
  --background: 255 255 255;
  --foreground: 10 10 10;
  --card: 250 250 250;
  --card-foreground: 10 10 10;

  /* Colores primarios */
  --primary: 59 130 246;
  --primary-foreground: 255 255 255;

  /* Estados */
  --destructive: 239 68 68;
  --success: 34 197 94;
  --warning: 234 179 8;

  /* Bordes y fondos secundarios */
  --border: 229 231 235;
  --muted: 243 244 246;
  --muted-foreground: 107 114 128;
}

.dark {
  --background: 10 10 10;
  --foreground: 250 250 250;
  --card: 23 23 23;
  --card-foreground: 250 250 250;

  --primary: 96 165 250;
  --primary-foreground: 10 10 10;

  --destructive: 248 113 113;
  --success: 74 222 128;
  --warning: 250 204 21;

  --border: 38 38 38;
  --muted: 38 38 38;
  --muted-foreground: 163 163 163;
}
```

---

## 📋 Rúbrica de Evaluación

### Conocimiento (30%)

- [ ] Comprende la diferencia entre headless y styled components
- [ ] Explica el patrón de variantes con CVA
- [ ] Entiende el flujo de theming con Context + CSS variables

### Desempeño (40%)

- [ ] Implementa componentes CVA correctamente
- [ ] Configura ThemeProvider funcional
- [ ] Aplica animaciones Framer Motion apropiadamente
- [ ] Código TypeScript sin errores

### Producto (30%)

- [ ] Design system funcional y coherente
- [ ] Theming light/dark funcionando
- [ ] Animaciones suaves y apropiadas
- [ ] Adaptación correcta al dominio asignado
- [ ] Documentación básica incluida

---

## 🚀 Entregables

1. **Código fuente** del design system en repositorio
2. **README.md** con:
   - Descripción del dominio elegido
   - Instrucciones de instalación
   - Ejemplos de uso de cada componente
3. **Demo funcional** (puede ser App.tsx o página dedicada)

---

## 📚 Recursos

- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Framer Motion](https://www.framer.com/motion/)
- [CVA Documentation](https://cva.style/docs)
- [shadcn/ui](https://ui.shadcn.com/) - Inspiración de arquitectura

---

## 🔗 Navegación

- ⬅️ [Ejercicio 04: Design Tokens](../2-ejercicios/ejercicio-04-design-tokens/)
- ➡️ [Recursos](../4-recursos/)
- 🏠 [Inicio Semana 13](../README.md)
