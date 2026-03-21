# 📖 Glosario Semana 13: Componentes UI, Animaciones y Theming

## A

### AnimatePresence

Componente de Framer Motion que permite animar elementos cuando se montan y desmontan del DOM. Esencial para animaciones de entrada/salida.

### asChild

Prop de Radix UI que permite fusionar las props del componente primitivo con un elemento hijo, evitando wrappers innecesarios en el DOM.

## C

### Class Variance Authority (CVA)

Librería para crear variantes de componentes con clases de Tailwind de manera tipada y organizada. Permite definir variantes y defaults de forma declarativa.

### clsx

Utilidad para construir strings de clases CSS condicionalmente. Más ligera que classnames y compatible con arrays y objetos.

### Compound Components

Patrón de diseño donde un componente padre comparte estado implícito con sus hijos a través de Context. Ejemplo: `<Tabs>`, `<TabsList>`, `<TabsContent>`.

### CSS Custom Properties

Variables CSS (también llamadas CSS Variables) que permiten almacenar valores reutilizables. Sintaxis: `--nombre-variable: valor`.

## D

### Data Attributes

Atributos HTML personalizados (`data-*`) usados por Radix UI para comunicar estado. Ejemplo: `data-state="open"`.

### Design System

Colección de componentes reutilizables, guías de estilo y patrones que aseguran consistencia visual y funcional en una aplicación.

### Design Tokens

Variables abstractas que representan decisiones de diseño: colores, espaciado, tipografía, etc. Son la base de un design system.

## E

### Easing Functions

Funciones que controlan la aceleración de una animación. Ejemplos: `linear`, `easeIn`, `easeOut`, `easeInOut`, `spring`.

## F

### Framer Motion

Librería de animación para React que proporciona una API declarativa para crear animaciones fluidas con soporte para gestos y layout animations.

## G

### Gestures

Interacciones táctiles o de mouse como tap, drag, pan, hover. Framer Motion las maneja con props como `whileHover`, `whileTap`, `drag`.

## H

### Headless Components

Componentes que proporcionan lógica y comportamiento sin estilos predefinidos. Separan la funcionalidad de la presentación.

### Headless UI

Librería de Tailwind Labs con componentes headless accesibles. Alternativa a Radix UI, integrada con Tailwind CSS.

## I

### Initial/Animate/Exit

Props de Framer Motion que definen estados de animación: estado inicial, estado animado final, y estado al desmontar (con AnimatePresence).

## K

### Keyframes (Framer Motion)

Secuencia de valores que una propiedad debe tomar durante una animación. Se definen como arrays: `x: [0, 100, 0]`.

## L

### Layout Animation

Animación automática de cambios de layout (posición, tamaño) en Framer Motion usando la prop `layout`.

## M

### matchMedia

API del navegador para detectar media queries desde JavaScript. Se usa para detectar preferencia de dark mode del sistema.

### motion

Namespace de Framer Motion que proporciona versiones animables de elementos HTML: `motion.div`, `motion.button`, etc.

## O

### Overlay

Capa semitransparente que cubre el contenido debajo de un modal o dialog. Suele tener blur y ser clickeable para cerrar.

## P

### Portal (React)

Técnica para renderizar un componente fuera de su árbol DOM padre. Útil para modales, tooltips y dropdowns.

### prefers-color-scheme

Media query CSS/JS que detecta la preferencia de tema (light/dark) del sistema operativo del usuario.

## R

### Radix UI

Librería de componentes primitivos headless con accesibilidad incorporada. Proporciona comportamiento sin estilos.

### Render Delegation

Técnica donde un componente delega su renderizado a sus hijos usando `asChild`, permitiendo composición flexible.

### resolvedTheme

En sistemas de theming, el tema efectivo aplicado cuando el usuario elige "system" (light o dark según preferencia del OS).

## S

### Spring Animation

Tipo de animación basada en física de resortes. Más natural que animaciones basadas en duración. Parámetros: stiffness, damping, mass.

### Stagger

Técnica de animación donde elementos de una lista aparecen secuencialmente con un delay entre cada uno.

### Styled Components

Librería CSS-in-JS que permite escribir CSS dentro de JavaScript usando template literals.

## T

### tailwind-merge

Utilidad que fusiona clases de Tailwind de manera inteligente, resolviendo conflictos entre clases que afectan la misma propiedad.

### Theme Context

React Context que proporciona el tema actual y función para cambiarlo a toda la aplicación.

### ThemeProvider

Componente wrapper que inicializa y gestiona el estado del tema, persistencia y sincronización con el DOM.

### Transition (Framer Motion)

Objeto que define cómo una animación ocurre: duración, easing, tipo (tween, spring), delay.

## U

### useReducedMotion

Hook que detecta si el usuario prefiere movimiento reducido (accesibilidad). Framer Motion lo soporta nativamente.

## V

### Variants (Framer Motion)

Objetos que definen estados de animación nombrados. Permiten orquestar animaciones complejas y propagarlas a hijos.

### Variants (CVA)

Opciones configurables de un componente que modifican sus estilos. Ejemplo: `variant="primary"`, `size="lg"`.

### VariantProps

Utility type de CVA que extrae los tipos de las variantes definidas. Permite tipar props de componentes automáticamente.

---

## 🔗 Navegación

- ⬅️ [Recursos](../4-recursos/)
- 🏠 [Inicio Semana 13](../README.md)
- ➡️ [Semana 14](../../week-14-introduccion_testing/)
