# 🤖 Instrucciones para GitHub Copilot

## 📋 Contexto del Bootcamp

Este es un **Bootcamp de React con TypeScript** estructurado para llevar a estudiantes de cero a héroe en desarrollo frontend moderno con React.

### 📊 Datos del Bootcamp

- **Duración**: 20 semanas (~5 meses)
- **Dedicación semanal**: 8 horas
- **Total de horas**: ~160 horas
- **Nivel de entrada**: JavaScript intermedio
- **Nivel de salida**: Desarrollador React/TypeScript Mid-Level
- **Enfoque**: React 18+ con TypeScript, hooks modernos, y mejores prácticas
- **Stack**: TypeScript, React, Vite, Zustand/Redux Toolkit, React Query, Testing Library, Docker

---

## 🎯 Objetivos de Aprendizaje

Al finalizar el bootcamp, los estudiantes serán capaces de:

- ✅ Aplicar TypeScript en aplicaciones React profesionales
- ✅ Construir aplicaciones React completas con componentes funcionales y hooks
- ✅ Gestionar estado global con Zustand y Redux Toolkit
- ✅ Implementar fetching de datos con React Query y manejo de caché
- ✅ Crear interfaces responsivas con CSS moderno y Tailwind CSS
- ✅ Escribir tests automatizados con Vitest y React Testing Library
- ✅ Aplicar patrones de diseño y arquitectura limpia en React
- ✅ Optimizar rendimiento (memoization, lazy loading, code splitting)
- ✅ Implementar formularios complejos con React Hook Form y Zod
- ✅ Trabajar con APIs REST y GraphQL
- ✅ Containerizar y desplegar aplicaciones React con Docker
- ✅ Implementar CI/CD con Docker en producción
- ✅ Seguir mejores prácticas de accesibilidad (a11y) y SEO

---

## 📚 Estructura del Bootcamp

### Distribución por Etapas

#### **Etapa 1: Fundamentos de TypeScript (Semana 1)** - 8 horas

**Objetivo**: Dominar los fundamentos de TypeScript necesarios para React

- Tipos primitivos y anotaciones básicas
- Interfaces vs Types
- Union types e intersection types
- Funciones tipadas y parámetros opcionales
- Arrays tipados y tuplas
- Type inference y type assertions
- Generics básicos
- Utility types comunes (Partial, Pick, Omit)
- Configuración de TypeScript (tsconfig.json)
- Proyecto: Funciones utilitarias tipadas

**Requisitos previos**: JavaScript intermedio (ES6+, promesas, módulos)

---

#### **Etapa 2: Fundamentos de React (Semanas 2-6)** - 40 horas

**Objetivo**: Dominar los fundamentos de React con TypeScript

- Introducción a React y JSX/TSX
- Componentes funcionales con TypeScript
- Props tipados y children
- Estado local con useState (tipado)
- Efectos con useEffect
- Eventos sintéticos y manejo de formularios
- Renderizado condicional y listas
- Composición de componentes
- Context API con TypeScript
- Custom hooks tipados
- Ciclo de vida de componentes
- Vite como build tool
- Proyecto integrador: Dashboard interactivo

**Requisitos previos**: Etapa 1 completada

---

#### **Etapa 3: React Intermedio (Semanas 7-11)** - 40 horas

**Objetivo**: Manejo avanzado de estado y datos

- React Router v6 con TypeScript
- Gestión de estado global con Zustand
- Redux Toolkit con TypeScript
- React Query (TanStack Query) para server state
- Formularios con React Hook Form
- Validación con Zod
- Manejo de errores y error boundaries
- Suspense y lazy loading
- Portales y refs tipados
- Higher-Order Components (HOCs)
- Render props pattern
- Proyecto integrador: E-commerce SPA

**Requisitos previos**: Etapa 2 completada

---

#### **Etapa 4: Styling y UI (Semanas 12-13)** - 16 horas

**Objetivo**: Crear interfaces modernas y responsivas

- CSS Modules con TypeScript
- Styled Components o Emotion
- Tailwind CSS en React
- Componentes de UI (headless UI, Radix UI)
- Animaciones con Framer Motion
- Responsive design y mobile-first
- Dark mode y theming
- Proyecto integrador: Design System

**Requisitos previos**: Etapa 3 completada

---

#### **Etapa 5: Testing (Semanas 14-15)** - 16 horas

**Objetivo**: Escribir tests confiables

- Introducción a testing en React
- Vitest configuración y conceptos
- React Testing Library
- Testing de componentes
- Testing de hooks
- Testing de integración
- Mocking de APIs y módulos
- Cobertura de código
- Proyecto integrador: Aplicación 100% testeada

**Requisitos previos**: Etapa 4 completada

---

#### **Etapa 6: Avanzado y Performance (Semanas 16-17)** - 16 horas

**Objetivo**: Optimización y patrones avanzados

- React.memo y useMemo
- useCallback y optimización de renders
- Code splitting y lazy loading
- Virtualización de listas (react-window)
- Web Vitals y métricas de rendimiento
- Profiler API
- Patrones de composición avanzados
- Arquitectura de carpetas escalable
- Proyecto integrador: App optimizada

**Requisitos previos**: Etapa 5 completada

---

#### **Etapa 7: Proyecto Final y Deployment con Docker (Semanas 18-20)** - 24 horas

**Objetivo**: Aplicación completa containerizada lista para producción

- Planificación de proyecto full-stack
- Integración con backend (REST/GraphQL)
- Autenticación y autorización
- **Containerización con Docker**
  - Dockerfile multi-stage para React + Nginx
  - Docker Compose para orquestación
  - Optimización de imágenes (capas, caché)
  - Variables de entorno y secrets
  - Health checks y restart policies
- **Deployment con Docker**
  - Docker Registry (Docker Hub, GitHub Container Registry)
  - CI/CD pipelines con GitHub Actions + Docker
  - Estrategias de deployment (rolling, blue-green)
  - Docker Swarm o introducción a Kubernetes
- Monitoreo y logs con contenedores
- SEO y accesibilidad
- Documentación técnica con Storybook
- **Proyecto final: Aplicación production-ready containerizada con Docker**

**Requisitos previos**: Etapa 6 completada

---

## 🗂️ Estructura de Carpetas

Cada semana sigue esta estructura estándar:

```
bootcamp/week-XX/
├── README.md                  # Descripción y objetivos de la semana
├── rubrica-evaluacion.md      # Criterios de evaluación detallados
├── 0-assets/                  # Imágenes, diagramas y recursos visuales
├── 1-teoria/                  # Material teórico (archivos .md)
├── 2-ejercicios/              # Ejercicios guiados paso a paso
├── 3-proyecto/                # Proyecto semanal integrador
├── 4-recursos/                # Recursos adicionales
│   ├── ebooks-free/           # Libros electrónicos gratuitos
│   ├── videografia/           # Videos y tutoriales recomendados
│   └── webgrafia/             # Enlaces y documentación
└── 5-glosario/                # Términos clave de la semana (A-Z)
    └── README.md
```

### 📁 Carpetas Raíz

- **`_assets/`**: Recursos visuales globales (logos, headers, etc.)
- **`_docs/`**: Documentación general que aplica a todo el bootcamp
- **`_scripts/`**: Scripts de automatización y utilidades
- **`bootcamp/`**: Contenido semanal del bootcamp

---

## 🎓 Componentes de Cada Semana

### 1. **Teoría** (1-teoria/)

- Archivos markdown con explicaciones conceptuales
- Ejemplos de código TypeScript/React con comentarios claros
- Diagramas svg y visualizaciones cuando sea necesario
- Referencias a documentación oficial (React docs, TypeScript docs)

### 2. **Ejercicios** (2-ejercicios/)

- Ejercicios guiados paso a paso
- Incremento progresivo de dificultad
- Soluciones comentadas
- Casos de uso del mundo real

#### 📋 Formato de Ejercicios (Tutoriales Guiados)

Los ejercicios son **tutoriales guiados**, NO tareas con TODOs. El estudiante aprende descomentando código:

**README.md del ejercicio:**

```markdown
### Paso 1: Definir Props con TypeScript

Explicación del concepto con ejemplo:

\`\`\`typescript
interface ButtonProps {
text: string;
onClick: () => void;
variant?: 'primary' | 'secondary';
}
\`\`\`

**Abre `starter/Button.tsx`** y descomenta la sección correspondiente.
```

**starter/Button.tsx:**

```typescript
// ============================================
// PASO 1: Definir Props con TypeScript
// ============================================
console.log('--- Paso 1: Definir Props ---');

// En React con TypeScript, definimos interfaces para las props
// Descomenta las siguientes líneas:
// interface ButtonProps {
//   text: string;
//   onClick: () => void;
// }
//
// export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
//   return <button onClick={onClick}>{text}</button>;
// };

console.log('');
```

**solution/Button.tsx:**

```typescript
// ============================================
// PASO 1: Definir Props con TypeScript
// ============================================
console.log('--- Paso 1: Definir Props ---');

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
```

#### ❌ NO usar este formato en ejercicios:

```typescript
// ❌ INCORRECTO - Este formato es para PROYECTOS, no ejercicios
const Component: React.FC = () => {
  const data = null; // TODO: Implementar
  return null;
};
```

#### ✅ Usar este formato en ejercicios:

```typescript
// ✅ CORRECTO - Código comentado para descomentar
// Descomenta las siguientes líneas:
// const Component: React.FC = () => {
//   const data = fetchData();
//   return <div>{data}</div>;
// };
```

---

### 3. **Proyecto** (3-proyecto/)

- Proyecto integrador que consolida lo aprendido
- README.md con instrucciones claras
- Código inicial o plantillas cuando sea apropiado
- Criterios de evaluación específicos
- **Política de Dominios Únicos**: Cada aprendiz trabaja sobre un dominio diferente

#### 🏛️ Política de Dominios Únicos (Anticopia)

**Cada aprendiz recibe un dominio único asignado por el instructor:**

- 📖 Biblioteca
- 💊 Farmacia
- 🏋️ Gimnasio
- 🏫 Escuela
- 🏬 Tienda de mascotas
- 🏪 Restaurante
- 🏭 Banco
- 🚕 Agencia de taxis
- 🏥 Hospital
- 🎥 Cine
- 🏞️ Hotel
- ✈️ Agencia de viajes
- 🏎️ Concesionario de autos
- 👗 Tienda de ropa
- 🛠️ Taller mecánico
- Y otros dominios únicos según cantidad de aprendices

**Objetivo**:

- Prevenir copia entre estudiantes
- Fomentar implementaciones originales
- Aplicar conceptos generales a contextos específicos
- Desarrollar capacidad de abstracción y adaptación

**El instructor debe:**

1. Asignar un dominio único a cada aprendiz al inicio del bootcamp
2. Mantener un registro de dominios asignados
3. No repetir dominios en el mismo grupo
4. Validar que las implementaciones sean coherentes con el dominio

#### 📋 Formato de Proyecto (con TODOs)

A diferencia de los ejercicios, el proyecto SÍ usa TODOs para que el estudiante implemente desde cero.

**Las instrucciones de los proyectos deben ser genéricas y adaptables a cualquier dominio.**

**Ejemplo - starter/components/ItemCard.tsx:**

```typescript
// ============================================
// COMPONENTE: ItemCard
// Muestra información de un elemento del dominio
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este componente a tu dominio asignado.
// Ejemplos:
// - Biblioteca: BookCard (libro)
// - Farmacia: MedicineCard (medicamento)
// - Gimnasio: MemberCard (miembro)
// - Restaurante: DishCard (platillo)

interface Item {
  id: number;
  name: string;
  description: string;
  // TODO: Agregar propiedades específicas de tu dominio
  // Ejemplo (Biblioteca): author: string; isbn: string;
  // Ejemplo (Farmacia): price: number; stock: number;
}

interface ItemCardProps {
  item: Item;
  onDelete: (id: number) => void;
  onEdit?: (id: number) => void;
}

/**
 * Componente que muestra la tarjeta de un elemento del dominio
 * @param item - Datos del elemento
 * @param onDelete - Callback para eliminar
 * @param onEdit - Callback opcional para editar
 */
export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onDelete,
  onEdit,
}) => {
  // TODO: Implementar el componente para tu dominio
  // 1. Mostrar información relevante del elemento
  // 2. Agregar botón de eliminar
  // 3. Agregar botón de editar (opcional)
  // 4. Aplicar estilos CSS apropiados
  return null;
};
```

**El README.md del proyecto debe incluir:**

```markdown
## 🏛️ Proyecto Semanal: [Título Genérico]

### 🎯 Objetivo

Implementar [concepto aprendido] aplicado a tu dominio asignado.

### 📋 Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio]

### ✅ Requisitos Funcionales (Adaptables a tu dominio)

1. Crear componente para mostrar elementos
2. Implementar listado de elementos
3. Agregar funcionalidad de búsqueda/filtrado
4. etc.

### 💡 Ejemplos de Adaptación por Dominio

- **Biblioteca**: Gestionar libros, autores, préstamos
- **Farmacia**: Gestionar medicamentos, ventas, inventario
- **Gimnasio**: Gestionar miembros, rutinas, asistencias
- **Restaurante**: Gestionar platillos, mesas, pedidos

### 🛠️ Entregables

1. Código funcional adaptado a tu dominio
2. Documentación README con descripción de tu dominio
3. Tests (cuando aplique)
```

El estudiante debe:

1. Leer las instrucciones en README.md
2. Adaptar los conceptos genéricos a su dominio específico
3. Completar cada TODO con implementación contextualizada
4. Usar lo aprendido en teoría y ejercicios guiados

---

### 4. **Recursos** (4-recursos/)

- **ebooks-free/**: Libros gratuitos relevantes
- **videografia/**: Videos tutoriales complementarios
- **webgrafia/**: Enlaces a documentación y artículos

### 5. **Glosario** (5-glosario/)

- Términos técnicos ordenados alfabéticamente
- Definiciones claras y concisas
- Ejemplos de código cuando aplique

---

## 📝 Convenciones de Código

### Estilo TypeScript/React Moderno

```typescript
// ✅ BIEN - usar const por defecto
const API_URL = 'https://api.example.com';
const users: User[] = [];

// ✅ BIEN - usar let solo si necesitas reasignar
let counter = 0;

// ❌ MAL - no usar var
var oldSchool = 'evitar';

// ✅ BIEN - arrow functions con tipos
const double = (x: number): number => x * 2;
const greet = (name: string): string => `Hola, ${name}!`;

// ✅ BIEN - interfaces para objetos
interface User {
  id: number;
  name: string;
  email: string;
}

// ✅ BIEN - tipos para props de componentes
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

// ✅ BIEN - componente funcional tipado
export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  variant = 'primary'
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {text}
    </button>
  );
};

// ✅ BIEN - custom hooks tipados
const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

// ✅ BIEN - destructuring con tipos
const { name, email }: User = user;
const [first, ...rest]: number[] = numbers;

// ✅ BIEN - generics
const identity = <T,>(value: T): T => value;
const mapArray = <T, U>(arr: T[], fn: (item: T) => U): U[] => arr.map(fn);

// ✅ BIEN - utility types
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type UserWithoutEmail = Omit<User, 'email'>;
```

### Nomenclatura

- **Variables y funciones**: camelCase
- **Constantes globales**: UPPER_SNAKE_CASE
- **Interfaces y Types**: PascalCase
- **Componentes React**: PascalCase
- **Archivos de componentes**: PascalCase.tsx
- **Archivos de utilidades**: kebab-case.ts
- **Hooks personalizados**: use + PascalCase (ej: `useAuth`)

---

## 🧪 Testing

El bootcamp enseña testing con **Vitest** y **React Testing Library**.

### Estructura de Tests

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button text="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button text="Click me" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button text="Click me" onClick={() => {}} disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

---

## 📖 Documentación

### README.md de Semana

Debe incluir:

1. **Título y descripción**
2. **🎯 Objetivos de aprendizaje**
3. **📚 Requisitos previos**
4. **🗂️ Estructura de la semana**
5. **📝 Contenidos** (con enlaces a teoría/ejercicios)
6. **⏱️ Distribución del tiempo** (8 horas)
7. **📌 Entregables**
8. **🔗 Navegación** (anterior/siguiente semana)

### Archivos de Teoría

```markdown
# Título del Tema

## 🎯 Objetivos

- Objetivo 1
- Objetivo 2

## 📋 Contenido

### 1. Introducción

### 2. Conceptos Clave

### 3. Ejemplos Prácticos

### 4. Ejercicios

## 📚 Recursos Adicionales

## ✅ Checklist de Verificación
```

---

## 🎨 Recursos Visuales y Estándares de Diseño

### Formato de Assets

- ✅ **Preferir SVG** para todos los diagramas, iconos y gráficos
- ❌ **NO usar ASCII art** para diagramas o visualizaciones
- ✅ Usar PNG/JPG solo para screenshots o fotografías
- ✅ Optimizar imágenes antes de incluirlas

### Tema Visual

- 🌙 **Tema dark** para todos los assets visuales
- ❌ **Sin degradés** (gradients) en diseños
- ✅ Colores sólidos y contrastes claros
- ✅ Paleta consistente basada en:
  - React: #61DAFB (cyan)
  - TypeScript: #3178C6 (azul)

### Tipografía

- ✅ **Fuentes sans-serif** exclusivamente
- ✅ Recomendadas: Inter, Roboto, Open Sans, System UI
- ❌ **NO usar fuentes serif** (Times, Georgia, etc.)
- ✅ Mantener jerarquía visual clara

### Otros

- ✅ Incluir screenshots con anotaciones claras
- ✅ Mantener consistencia visual entre semanas
- ✅ Usar emojis para mejorar legibilidad (con moderación)

---

## 🌐 Idioma y Nomenclatura

### Código y Comentarios Técnicos

- ✅ **Nomenclatura en inglés** (variables, funciones, componentes, interfaces)
- ✅ **Comentarios de código en inglés**
- ✅ Usar términos técnicos estándar de la industria

```typescript
// ✅ CORRECTO - inglés
const getUserData = async (userId: string): Promise<User> => {
  // Fetch user data from API
  const response = await fetch(`/api/users/${userId}`);
  return response.json();
};

// ❌ INCORRECTO - español en código
const obtenerDatosUsuario = async (idUsuario: string): Promise<Usuario> => {
  // Obtener datos del usuario desde la API
  const respuesta = await fetch(`/api/usuarios/${idUsuario}`);
  return respuesta.json();
};
```

### Documentación

- ✅ **Documentación en español** (READMEs, teoría, guías)
- ✅ Explicaciones y tutoriales en español
- ✅ Comentarios educativos en español cuando expliquen conceptos

```typescript
// ✅ CORRECTO - código en inglés, explicación en español
const calculateDiscount = (price: number, percentage: number): number => {
  // En TypeScript, los tipos garantizan que price y percentage sean números
  // Esto previene errores comunes en JavaScript
  return price * (1 - percentage / 100);
};
```

---

## 🔐 Mejores Prácticas

### Código Limpio

- Nombres descriptivos y significativos
- Componentes pequeños con una sola responsabilidad
- Custom hooks para lógica reutilizable
- Props drilling máximo 2 niveles (usar Context o estado global después)
- Comentarios solo cuando sea necesario explicar el "por qué"
- Evitar anidamiento profundo
- Usar early returns

### TypeScript

- Preferir `interface` para objetos y props
- Usar `type` para unions, intersections, y utility types
- Evitar `any`, usar `unknown` si es necesario
- Aprovechar type inference cuando sea obvio
- Documentar tipos complejos con comentarios
- Usar utility types en lugar de crear tipos manualmente

### React

- Preferir componentes funcionales sobre clases
- Usar hooks modernos (useState, useEffect, useMemo, useCallback)
- Memorizar componentes costosos con React.memo
- Extraer lógica compleja a custom hooks
- Usar key props correctamente en listas
- Evitar efectos innecesarios
- Manejar loading y error states

### Seguridad

- Validar TODOS los inputs del usuario
- Sanitizar datos antes de mostrarlos en el DOM
- No exponer información sensible en errores
- Usar HTTPS para APIs en producción
- Validar tipos en runtime (Zod, Yup)

### Rendimiento

- Lazy loading de componentes pesados
- Code splitting por rutas
- Optimizar re-renders con memo, useMemo, useCallback
- Virtualizar listas largas
- Optimizar imágenes y assets
- Debounce/throttle en eventos frecuentes

---

## 📊 Evaluación

Cada semana incluye **tres tipos de evidencias**:

1. **Conocimiento 🧠** (30%): Evaluaciones teóricas, cuestionarios
2. **Desempeño 💪** (40%): Ejercicios prácticos en clase
3. **Producto 📦** (30%): Proyecto entregable funcional

### Criterios de Aprobación

- Mínimo **70%** en cada tipo de evidencia
- Entrega puntual de proyectos
- Código funcional y bien documentado
- Tests pasando (cuando aplique)
- **Implementación coherente con el dominio asignado**
- **Originalidad**: Sin copia de implementaciones de otros aprendices

---

## 🚀 Metodología de Aprendizaje

### Estrategias Didácticas

- **Aprendizaje Basado en Proyectos (ABP)**: Proyectos semanales integradores
- **Dominios Únicos**: Cada aprendiz aplica conceptos a su dominio asignado
- **Práctica Deliberada**: Ejercicios incrementales
- **Coding Challenges**: Problemas del mundo real
- **Code Review**: Revisión de código entre estudiantes
- **Live Coding**: Sesiones en vivo de programación

### Distribución del Tiempo (8h/semana)

- **Teoría**: 2-2.5 horas
- **Ejercicios**: 3-3.5 horas
- **Proyecto**: 2-2.5 horas

---

## 🤖 Instrucciones para Copilot

Cuando trabajes en este proyecto:

### Límites de Respuesta

1. **Divide respuestas largas**
   - ❌ **NUNCA generar respuestas que superen los límites de tokens**
   - ✅ **SIEMPRE dividir contenido extenso en múltiples entregas**
   - ✅ Crear contenido por secciones, esperar confirmación del usuario
   - ✅ Priorizar calidad sobre cantidad en cada entrega
   - Razón: Evitar pérdida de contenido y garantizar completitud

2. **Estrategia de División**
   - Para semanas completas: dividir por carpetas (teoria → ejercicios → proyecto)
   - Para archivos grandes: dividir por secciones lógicas
   - Siempre indicar claramente qué parte se entrega y qué falta
   - Esperar confirmación del usuario antes de continuar

### Generación de Código

1. **Usa siempre TypeScript**
   - Tipos explícitos en interfaces y types
   - Inferencia de tipos donde sea obvio
   - Generics cuando sea necesario
   - Evitar `any`, preferir `unknown`
   - Utility types (Partial, Pick, Omit, etc.)

2. **React Moderno**
   - Componentes funcionales con TypeScript
   - Hooks tipados correctamente
   - Props interfaces claras
   - JSX con tipos correctos
   - Event handlers tipados

3. **Gestión de Paquetes**
   - ❌ **NUNCA usar `npm`** para instalar paquetes
   - ✅ **SOLO usar `pnpm` o `yarn`** como gestores de paquetes
   - Razón: Mejor rendimiento, gestión de dependencias más eficiente
   - Comandos recomendados:

     ```bash
     # Instalar dependencias
     pnpm install
     # o
     yarn install

     # Agregar paquete
     pnpm add <paquete>
     # o
     yarn add <paquete>
     ```

4. **Build Tool**
   - ✅ **USAR Vite** como build tool para proyectos React
   - Razón: Velocidad, HMR instantáneo, configuración simple
   - Comandos:
     ```bash
     pnpm create vite@latest
     pnpm dev
     pnpm build
     ```

5. **Docker**
   - ✅ **USAR Docker** para todos los despliegues
   - Razón: Consistencia entre entornos, portabilidad, escalabilidad
   - Comandos básicos:

     ```bash
     # Construir imagen
     docker build -t app-name .

     # Ejecutar contenedor
     docker run -p 3000:3000 app-name

     # Docker Compose
     docker compose up
     docker compose down
     ```

6. **Comenta el código de manera educativa**
   - Explica conceptos para principiantes
   - Incluye referencias a documentación cuando sea útil
   - Usa comentarios que enseñen, no solo describan

7. **Proporciona ejemplos completos y funcionales**
   - Código que se pueda copiar y ejecutar
   - Incluye casos de uso realistas
   - Muestra tanto lo que se debe hacer como lo que se debe evitar

### Creación de Contenido

1. **Estructura clara y progresiva**
   - De lo simple a lo complejo
   - Conceptos construidos sobre conocimientos previos
   - Repetición espaciada de conceptos clave
   - TypeScript primero, luego React con TypeScript

2. **Ejemplos del mundo real**
   - Casos de uso prácticos y relevantes
   - Proyectos que los estudiantes puedan mostrar en portfolios
   - Problemas que encontrarán en el desarrollo real

3. **Enfoque moderno**
   - React 18+ features (Suspense, Transitions, etc.)
   - Hooks modernos desde el inicio
   - TypeScript estricto desde día 1
   - Herramientas y patrones actuales (2025-2026)

### Respuestas y Ayuda

1. **Explicaciones claras**
   - Lenguaje simple y directo
   - Evitar jerga innecesaria
   - Proporcionar analogías cuando sea útil

2. **Código comentado**
   - Explicar cada paso importante
   - Destacar conceptos clave
   - Señalar posibles errores comunes

3. **Recursos adicionales**
   - Referencias a React docs oficial
   - Enlaces a TypeScript handbook
   - Artículos relevantes de calidad

---

## 📚 Referencias Oficiales

- **React Docs**: https://react.dev/
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/
- **Vite**: https://vitejs.dev/
- **React Router**: https://reactrouter.com/
- **Redux Toolkit**: https://redux-toolkit.js.org/
- **React Query**: https://tanstack.com/query/
- **React Hook Form**: https://react-hook-form.com/
- **Zod**: https://zod.dev/
- **Testing Library**: https://testing-library.com/
- **Vitest**: https://vitest.dev/

---

## 🔗 Enlaces Importantes

- **Repositorio**: https://github.com/epti-dev/bc-react
- **Documentación general**: [\_docs/README.md](_docs/README.md)
- **Primera semana**: [bootcamp/week-01/README.md](bootcamp/week-01/README.md)

---

## ✅ Checklist para Nuevas Semanas

Cuando crees contenido para una nueva semana:

- [ ] Crear estructura de carpetas completa
- [ ] README.md con objetivos y estructura
- [ ] Material teórico en 1-teoria/
- [ ] Ejercicios prácticos en 2-ejercicios/
- [ ] Proyecto integrador en 3-proyecto/
- [ ] Recursos adicionales en 4-recursos/
- [ ] Glosario de términos en 5-glosario/
- [ ] Rúbrica de evaluación
- [ ] Verificar coherencia con semanas anteriores
- [ ] Revisar progresión de dificultad
- [ ] Probar código de ejemplos
- [ ] Verificar tipos TypeScript
- [ ] Ejecutar tests si aplica

---

## 💡 Notas Finales

- **Prioridad**: Claridad sobre brevedad
- **Enfoque**: Aprendizaje práctico sobre teoría abstracta
- **Objetivo**: Preparar desarrolladores listos para trabajar con React y TypeScript
- **Filosofía**: TypeScript desde el día 1, sin JavaScript puro
- **Stack moderno**: Las herramientas y patrones más actuales (2025-2026)

---

_Última actualización: Enero 2026_
_Versión: 1.0_
