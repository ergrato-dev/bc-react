# 📖 Glosario - Semana 12

## CSS Modules, Styled Components y Tailwind CSS

Términos técnicos clave organizados alfabéticamente para la semana de estrategias de estilos en React.

---

## A

### Atomic CSS

**Definición**: Metodología de CSS donde cada clase aplica una única propiedad CSS.

```css
/* Ejemplo de clases atómicas */
.p-4 {
  padding: 1rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.flex {
  display: flex;
}
```

**Contexto**: Tailwind CSS sigue esta filosofía atomic/utility-first.

---

### Autoprefixer

**Definición**: Plugin de PostCSS que añade automáticamente prefijos de navegador.

```css
/* Input */
.card {
  display: flex;
}

/* Output con autoprefixer */
.card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```

---

## B

### BEM (Block Element Modifier)

**Definición**: Metodología de nomenclatura CSS para crear componentes reutilizables.

```css
/* Bloque */
.card {
}
/* Elemento */
.card__title {
}
/* Modificador */
.card--highlighted {
}
```

**Relación**: CSS Modules elimina la necesidad de BEM al tener scope local.

---

### Bundle Size

**Definición**: Tamaño total del código JavaScript y CSS que se envía al navegador.

**Comparación por estrategia**:

- CSS Modules: Solo CSS usado (sin runtime JS)
- Styled Components: ~12KB runtime + CSS generado
- Tailwind: Solo clases usadas (purge)

---

## C

### Class Variance Authority (CVA)

**Definición**: Librería para crear variantes de componentes type-safe con clases CSS.

```typescript
import { cva } from 'class-variance-authority';

const button = cva('px-4 py-2 rounded', {
  variants: {
    intent: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-200 text-gray-800',
    },
  },
});
```

---

### clsx

**Definición**: Utilidad ligera (~228B) para construir strings de className condicionalmente.

```typescript
import clsx from 'clsx';

const classes = clsx('base-class', isActive && 'active', { error: hasError });
// Resultado: "base-class active error"
```

---

### Composes

**Definición**: Característica de CSS Modules para componer clases de otros archivos.

```css
/* base.module.css */
.text {
  font-size: 1rem;
}

/* button.module.css */
.button {
  composes: text from './base.module.css';
  padding: 1rem;
}
```

---

### CSS-in-JS

**Definición**: Técnica donde los estilos CSS se escriben directamente en JavaScript.

```typescript
// Ejemplo con styled-components
const Button = styled.button`
  background: blue;
  color: white;
`;
```

**Ejemplos**: styled-components, Emotion, Stitches.

---

### CSS Modules

**Definición**: Sistema que transforma nombres de clase en identificadores únicos para scope local.

```typescript
import styles from './Button.module.css';
// styles.button = "Button_button__xyz123"
```

---

## D

### Design Tokens

**Definición**: Variables que almacenan decisiones de diseño (colores, espaciados, tipografía).

```typescript
// En styled-components theme
const tokens = {
  colors: { primary: '#3b82f6' },
  spacing: { md: '1rem' },
  fontSize: { base: '1rem' },
};
```

---

## H

### Hash (CSS Modules)

**Definición**: Identificador único generado automáticamente para cada clase CSS.

```css
/* Input: .button */
/* Output: .Button_button__a1b2c3 */
```

---

## I

### Interpolation

**Definición**: Insertar expresiones JavaScript dentro de template literals de styled-components.

```typescript
const Box = styled.div<{ $size: number }>`
  width: ${(props) => props.$size}px;
  background: ${({ theme }) => theme.colors.primary};
`;
```

---

## J

### JIT (Just-In-Time)

**Definición**: Modo de Tailwind que genera CSS bajo demanda en desarrollo.

**Beneficios**:

- Build más rápido
- Todas las variantes disponibles
- Valores arbitrarios: `w-[237px]`

---

## L

### Local Scope

**Definición**: Aislamiento de estilos CSS a un componente específico, evitando conflictos globales.

**Implementaciones**:

- CSS Modules: Hash automático
- Styled Components: Clases generadas
- Tailwind: Clases únicas por utilidad

---

## M

### Mobile-First

**Definición**: Estrategia de diseño que comienza con estilos para móvil y escala hacia arriba.

```css
/* Mobile first en CSS */
.card {
  padding: 1rem;
}

@media (min-width: 768px) {
  .card {
    padding: 2rem;
  }
}
```

```html
<!-- Mobile first en Tailwind -->
<div class="p-4 md:p-8">...</div>
```

---

## P

### PostCSS

**Definición**: Herramienta para transformar CSS con plugins JavaScript.

**Plugins comunes**:

- Autoprefixer
- Tailwind CSS
- CSS Modules
- postcss-preset-env

---

### Props (Styled Components)

**Definición**: Propiedades de React que pueden usarse para estilos dinámicos.

```typescript
const Button = styled.button<{ $primary: boolean }>`
  background: ${props => props.$primary ? 'blue' : 'gray'};
`;

<Button $primary>Click</Button>
```

---

### Purge (Tree Shaking CSS)

**Definición**: Proceso de eliminar CSS no utilizado del bundle final.

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // Solo incluye clases usadas en estos archivos
};
```

---

## R

### Runtime CSS

**Definición**: CSS generado en tiempo de ejecución por JavaScript.

**Estrategias con runtime**:

- ✅ Styled Components
- ✅ Emotion
- ❌ CSS Modules (sin runtime)
- ❌ Tailwind (sin runtime)

---

## S

### Scope

**Definición**: Alcance o ámbito de aplicación de los estilos CSS.

| Tipo   | Descripción                        |
| ------ | ---------------------------------- |
| Global | Afecta a toda la aplicación        |
| Local  | Solo al componente específico      |
| Scoped | Limitado a un árbol de componentes |

---

### Specificity

**Definición**: Sistema de CSS para determinar qué estilos se aplican cuando hay conflictos.

```css
/* Especificidad (0,1,0) */
.button {
  color: blue;
}

/* Especificidad (0,2,0) - gana */
.card .button {
  color: red;
}
```

**Nota**: CSS Modules y styled-components reducen problemas de especificidad.

---

### Styled Components

**Definición**: Librería de CSS-in-JS que usa template literals para definir estilos.

```typescript
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.text};
`;
```

---

## T

### Tailwind CSS

**Definición**: Framework CSS utility-first que proporciona clases de bajo nivel.

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Botón
</button>
```

---

### Tailwind Merge

**Definición**: Utilidad para combinar clases Tailwind resolviendo conflictos.

```typescript
import { twMerge } from 'tailwind-merge';

twMerge('px-4 py-2', 'px-6');
// Resultado: 'py-2 px-6' (px-6 sobrescribe px-4)
```

---

### Template Literals

**Definición**: Strings de JavaScript con backticks que permiten interpolación.

```typescript
const color = 'blue';
const css = `background: ${color};`;
```

---

### Theme / Theming

**Definición**: Sistema de configuración centralizada de estilos (colores, espaciados, etc.).

```typescript
// Styled Components
const theme = {
  colors: { primary: '#3b82f6' }
};

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

---

### Transient Props

**Definición**: Props de styled-components prefijadas con `$` que no se pasan al DOM.

```typescript
// $primary no aparece en el HTML final
const Button = styled.button<{ $primary: boolean }>`
  background: ${(props) => (props.$primary ? 'blue' : 'gray')};
`;
```

---

## U

### Utility Class

**Definición**: Clase CSS que aplica una única propiedad específica.

```css
/* Clases utility */
.text-center {
  text-align: center;
}
.p-4 {
  padding: 1rem;
}
.flex {
  display: flex;
}
```

---

### Utility-First

**Definición**: Metodología de CSS que prioriza clases de utilidad sobre CSS personalizado.

**Filosofía**: Construir diseños combinando clases pequeñas y reutilizables en lugar de escribir CSS custom.

---

## V

### Variants (CVA)

**Definición**: Opciones predefinidas de estilos para un componente.

```typescript
const button = cva('base', {
  variants: {
    size: {
      sm: 'text-sm px-2',
      lg: 'text-lg px-6',
    },
    intent: {
      primary: 'bg-blue-500',
      danger: 'bg-red-500',
    },
  },
});
```

---

## W

### Wrapper Component

**Definición**: Componente que envuelve a otros para agregar estilos o funcionalidad.

```typescript
const CardWrapper = styled.div`
  padding: 1rem;
  border-radius: 8px;
`;

<CardWrapper>
  <CardContent />
</CardWrapper>
```

---

## Tabla de Referencia Rápida

| Término     | CSS Modules  | Styled Components | Tailwind   |
| ----------- | ------------ | ----------------- | ---------- |
| Scope local | ✅ Hash      | ✅ Generated      | ✅ Utility |
| Runtime     | ❌ No        | ✅ Sí             | ❌ No      |
| Theming     | CSS vars     | ThemeProvider     | Config     |
| TypeScript  | Declarations | Props tipados     | CVA        |
| Bundle      | Solo usado   | + Runtime         | Purge      |

---

## 🔗 Navegación

- [← Volver a Teoría](../1-teoria/)
- [📋 Rúbrica de Evaluación](../rubrica-evaluacion.md)
- [📖 Recursos Adicionales](../4-recursos/README.md)
- [🏠 Semana 12 - Inicio](../README.md)

---

_Última actualización: Enero 2026_
